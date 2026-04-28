#!/usr/bin/env node

/**
 * Update CDN origin rewrite rule, refresh cache, and cleanup old versions.
 * File upload is handled by ossutil in CI.
 *
 * Usage:
 *   node scripts/update-cdn.js --timestamp 20260427182053
 *
 * Required environment variables:
 *   DOCS_ALI_OSS_ACCESS_KEY_ID
 *   DOCS_ALI_OSS_ACCESS_KEY_SECRET
 *   DOCS_ALI_OSS_BUCKET
 *   DOCS_ALI_OSS_REGION
 *   DOCS_ALI_CDN_DOMAIN
 */

const REQUIRED_ENV_VARS = [
  'DOCS_ALI_OSS_ACCESS_KEY_ID',
  'DOCS_ALI_OSS_ACCESS_KEY_SECRET',
  'DOCS_ALI_OSS_BUCKET',
  'DOCS_ALI_OSS_REGION',
  'DOCS_ALI_CDN_DOMAIN',
];

const TIMESTAMP_DIR_PATTERN = /^\d{14}\/$/;
const KEEP_VERSIONS = 1;
const OSS_LIST_MAX_KEYS = 1000;
const OSS_DELETE_BATCH_SIZE = 1000;

function normalizeDomain(domain) {
  return domain.replace(/^https?:\/\//, '').replace(/\/+$/, '');
}

function createCdnClient() {
  const Cdn20180510 = require('@alicloud/cdn20180510');
  const OpenApi = require('@alicloud/openapi-client');

  const config = new OpenApi.Config({
    accessKeyId: process.env.DOCS_ALI_OSS_ACCESS_KEY_ID,
    accessKeySecret: process.env.DOCS_ALI_OSS_ACCESS_KEY_SECRET,
  });
  config.endpoint = 'cdn.aliyuncs.com';

  return new Cdn20180510.default(config);
}

async function updateCdnOriginRewrite(cdnClient, domain, timestampDir) {
  const Cdn20180510 = require('@alicloud/cdn20180510');

  let existingConfigId;
  try {
    const describeRequest = new Cdn20180510.DescribeCdnDomainConfigsRequest({
      domainName: domain,
      functionNames: 'back_to_origin_url_rewrite',
    });
    const describeResponse = await cdnClient.describeCdnDomainConfigs(describeRequest);
    const configs = describeResponse.body?.domainConfigs?.domainConfig;
    if (configs && configs.length > 0) {
      for (const config of configs) {
        const args = config.functionArgs?.functionArg || [];
        const sourceArg = args.find((a) => a.argName === 'source_url');
        if (sourceArg && sourceArg.argValue === '/(.*) ') {
          existingConfigId = config.configId;
          break;
        }
      }
    }
  } catch (error) {
    console.log(`[warn] Could not fetch existing CDN config (may be first deployment): ${error.message}`);
  }

  const functionConfig = {
    functionName: 'back_to_origin_url_rewrite',
    functionArgs: [
      { argName: 'source_url', argValue: '/(.*)'  },
      { argName: 'target_url', argValue: `/${timestampDir}/$1` },
      { argName: 'flag', argValue: 'break' },
    ],
  };

  if (existingConfigId) {
    functionConfig.configId = existingConfigId;
  }

  const setRequest = new Cdn20180510.BatchSetCdnDomainConfigRequest({
    domainNames: domain,
    functions: JSON.stringify([functionConfig]),
  });

  await cdnClient.batchSetCdnDomainConfig(setRequest);
}

async function waitForRewriteRule(cdnClient, domain, timestampDir) {
  const Cdn20180510 = require('@alicloud/cdn20180510');
  const maxAttempts = 180; // 180 * 10s = 30min max
  const interval = 10000;

  for (let i = 1; i <= maxAttempts; i++) {
    try {
      const request = new Cdn20180510.DescribeCdnDomainConfigsRequest({
        domainName: domain,
        functionNames: 'back_to_origin_url_rewrite',
      });
      const response = await cdnClient.describeCdnDomainConfigs(request);
      const configs = response.body?.domainConfigs?.domainConfig;

      if (configs && configs.length > 0) {
        const config = configs.find((c) => {
          const cArgs = c.functionArgs?.functionArg || [];
          const src = cArgs.find((a) => a.argName === 'source_url');
          return src && src.argValue === '/(.*) ';
        });
        if (!config) continue;
        const status = config.status;
        const args = config.functionArgs?.functionArg || [];
        const targetArg = args.find((a) => a.argName === 'target_url');
        const targetValue = targetArg?.argValue || '';
        const expectedPrefix = `/${timestampDir}/`;

        if (status === 'success' && targetValue.startsWith(expectedPrefix)) {
          console.log(`[info] Rewrite rule is effective (attempt ${i}/${maxAttempts})`);
          return;
        }
        console.log(`[info] Rewrite rule status: ${status}, target: ${targetValue}, waiting... (attempt ${i}/${maxAttempts})`);
      }
    } catch (error) {
      console.log(`[info] Failed to query rule status, retrying... (attempt ${i}/${maxAttempts})`);
    }
    await new Promise((resolve) => setTimeout(resolve, interval));
  }

  console.log('[warn] Rewrite rule verification timed out after 30min, proceeding with cache refresh anyway');
}

async function refreshCdnCache(cdnClient, domain) {
  const Cdn20180510 = require('@alicloud/cdn20180510');

  const request = new Cdn20180510.RefreshObjectCachesRequest({
    objectPath: `https://${domain}/`,
    objectType: 'Directory',
  });

  await cdnClient.refreshObjectCaches(request);
}

async function listAllObjects(ossClient, prefix) {
  const allObjects = [];
  let marker = null;
  let isTruncated = true;

  while (isTruncated) {
    const params = { prefix, 'max-keys': OSS_LIST_MAX_KEYS };
    if (marker) {
      params.marker = marker;
    }

    const result = await ossClient.list(params);
    const objects = result.objects || [];
    for (const obj of objects) {
      allObjects.push(obj.name);
    }

    isTruncated = result.isTruncated;
    marker = result.nextMarker;
  }

  return allObjects;
}

async function cleanupOldVersions(ossClient, keepCount) {
  const result = await ossClient.list({ prefix: '', delimiter: '/', 'max-keys': OSS_LIST_MAX_KEYS });
  const prefixes = result.prefixes || [];

  const timestampDirs = prefixes.filter((p) => TIMESTAMP_DIR_PATTERN.test(p)).sort();

  if (timestampDirs.length <= keepCount) {
    console.log(`[info] Found ${timestampDirs.length} version(s), no cleanup needed (keeping ${keepCount})`);
    return;
  }

  const dirsToDelete = timestampDirs.slice(0, timestampDirs.length - keepCount);
  console.log(`[info] Found ${timestampDirs.length} versions, will delete ${dirsToDelete.length} old version(s)`);

  for (const dir of dirsToDelete) {
    console.log(`[info]   Deleting ${dir}...`);
    const objectNames = await listAllObjects(ossClient, dir);

    for (let i = 0; i < objectNames.length; i += OSS_DELETE_BATCH_SIZE) {
      const batch = objectNames.slice(i, i + OSS_DELETE_BATCH_SIZE);
      await ossClient.deleteMulti(batch, { quiet: true });
    }

    console.log(`[info]   Deleted ${objectNames.length} objects from ${dir}`);
  }
}

function parseArgs() {
  const args = process.argv.slice(2);
  const options = {};
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--timestamp' && args[i + 1]) {
      options.timestamp = args[i + 1];
      i++;
    }
  }
  return options;
}

async function main() {
  const options = parseArgs();

  // 1. Validate env vars
  const missingVars = REQUIRED_ENV_VARS.filter((v) => !process.env[v]);
  if (missingVars.length > 0) {
    console.error(`[error] Missing required environment variables: ${missingVars.join(', ')}`);
    process.exit(1);
  }

  // 2. Validate --timestamp
  if (!options.timestamp) {
    console.error('[error] Missing required option: --timestamp <ts>');
    console.error('Usage: node scripts/update-cdn.js --timestamp 20260427182053');
    process.exit(1);
  }

  const timestamp = options.timestamp;
  const domain = normalizeDomain(process.env.DOCS_ALI_CDN_DOMAIN);

  // 3. Create OSS client (for cleanup)
  const Client = require('ali-oss');
  const ossClient = new Client({
    accessKeyId: process.env.DOCS_ALI_OSS_ACCESS_KEY_ID,
    accessKeySecret: process.env.DOCS_ALI_OSS_ACCESS_KEY_SECRET,
    bucket: process.env.DOCS_ALI_OSS_BUCKET,
    region: process.env.DOCS_ALI_OSS_REGION,
  });

  // 4. Update CDN origin rewrite rule
  console.log(`[info] Updating CDN origin rewrite rule for ${domain}...`);
  try {
    const cdnClient = createCdnClient();
    await updateCdnOriginRewrite(cdnClient, domain, timestamp);
    console.log(`[info] CDN origin rewrite updated to /${timestamp}/`);

    // 5. Poll until rewrite rule takes effect, then refresh CDN cache
    console.log('[info] Waiting for rewrite rule to propagate...');
    await waitForRewriteRule(cdnClient, domain, timestamp);
    console.log('[info] Refreshing CDN cache...');
    await refreshCdnCache(cdnClient, domain);
    console.log('[info] CDN cache refresh submitted');
  } catch (error) {
    console.error(`[error] CDN update failed: ${error.message}`);
    process.exit(1);
  }

  // 6. Cleanup old versions (non-fatal)
  console.log(`[info] Cleaning up old versions (keeping latest ${KEEP_VERSIONS})...`);
  try {
    await cleanupOldVersions(ossClient, KEEP_VERSIONS);
    console.log('[info] Cleanup complete');
  } catch (error) {
    console.warn(`[warn] Cleanup failed (non-fatal): ${error.message}`);
  }
}

main();
