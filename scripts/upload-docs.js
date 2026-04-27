#!/usr/bin/env node

/**
 * Upload v1 docs to Alibaba Cloud OSS and update CDN origin rewrite rule.
 *
 * Usage:
 *   node scripts/upload-docs.js --dir ./dist
 *
 * Required environment variables:
 *   DOCS_ALI_OSS_ACCESS_KEY_ID
 *   DOCS_ALI_OSS_ACCESS_KEY_SECRET
 *   DOCS_ALI_OSS_BUCKET
 *   DOCS_ALI_OSS_REGION
 *   DOCS_ALI_CDN_DOMAIN
 */

const fs = require('fs');
const path = require('path');

const REQUIRED_ENV_VARS = [
  'DOCS_ALI_OSS_ACCESS_KEY_ID',
  'DOCS_ALI_OSS_ACCESS_KEY_SECRET',
  'DOCS_ALI_OSS_BUCKET',
  'DOCS_ALI_OSS_REGION',
  'DOCS_ALI_CDN_DOMAIN',
];

const TIMESTAMP_DIR_PATTERN = /^\d{14}\/$/;
const KEEP_VERSIONS = 3;
const OSS_LIST_MAX_KEYS = 1000;
const OSS_DELETE_BATCH_SIZE = 1000;

function generateTimestamp() {
  const now = new Date();
  const pad = (n) => String(n).padStart(2, '0');
  return [
    now.getFullYear(),
    pad(now.getMonth() + 1),
    pad(now.getDate()),
    pad(now.getHours()),
    pad(now.getMinutes()),
    pad(now.getSeconds()),
  ].join('');
}

function normalizeDomain(domain) {
  return domain.replace(/^https?:\/\//, '').replace(/\/+$/, '');
}

/**
 * Recursively upload a directory to OSS
 */
async function uploadDirectoryToOSS(client, localDir, ossPrefix = '') {
  if (!fs.existsSync(localDir)) {
    console.log(`[warn] Directory does not exist: ${localDir}`);
    return 0;
  }

  const stats = fs.statSync(localDir);
  if (!stats.isDirectory()) {
    throw new Error(`${localDir} is not a directory`);
  }

  const files = fs.readdirSync(localDir);
  let uploadedCount = 0;

  for (const file of files) {
    const filePath = path.resolve(localDir, file);
    const fileStats = fs.statSync(filePath);

    if (fileStats.isDirectory()) {
      const subOssPrefix = ossPrefix ? `${ossPrefix}/${file}` : file;
      const subCount = await uploadDirectoryToOSS(client, filePath, subOssPrefix);
      uploadedCount += subCount;
    } else {
      const ossKey = ossPrefix ? `${ossPrefix}/${file}` : file;
      try {
        await client.put(ossKey, filePath);
        uploadedCount++;
      } catch (error) {
        console.error(`[error] Failed to upload ${ossKey}: ${error.message}`);
        throw error;
      }
    }
  }

  return uploadedCount;
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
      existingConfigId = configs[0].configId;
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

/**
 * Poll CDN API until the rewrite rule status becomes "success"
 * @param {import('@alicloud/cdn20180510').default} cdnClient
 * @param {string} domain
 * @param {string} timestampDir
 */
async function waitForRewriteRule(cdnClient, domain, timestampDir) {
  const Cdn20180510 = require('@alicloud/cdn20180510');
  const maxAttempts = 24; // 24 * 5s = 120s max
  const interval = 5000;

  for (let i = 1; i <= maxAttempts; i++) {
    try {
      const request = new Cdn20180510.DescribeCdnDomainConfigsRequest({
        domainName: domain,
        functionNames: 'back_to_origin_url_rewrite',
      });
      const response = await cdnClient.describeCdnDomainConfigs(request);
      const configs = response.body?.domainConfigs?.domainConfig;

      if (configs && configs.length > 0) {
        const config = configs[0];
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

  console.log('[warn] Rewrite rule verification timed out after 120s, proceeding with cache refresh anyway');
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
    if (args[i] === '--dir' && args[i + 1]) {
      options.dir = args[i + 1];
      i++;
    } else if (args[i] === '--timestamp' && args[i + 1]) {
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

  // 2. Validate --dir
  if (!options.dir) {
    console.error('[error] Missing required option: --dir <dir>');
    console.error('Usage: node scripts/upload-docs.js --dir ./dist');
    process.exit(1);
  }

  const dir = path.resolve(process.cwd(), options.dir);
  if (!fs.existsSync(dir)) {
    console.error(`[error] Directory does not exist: ${dir}`);
    process.exit(1);
  }

  const domain = normalizeDomain(process.env.DOCS_ALI_CDN_DOMAIN);

  // 3. Create OSS client
  const Client = require('ali-oss');
  const ossClient = new Client({
    accessKeyId: process.env.DOCS_ALI_OSS_ACCESS_KEY_ID,
    accessKeySecret: process.env.DOCS_ALI_OSS_ACCESS_KEY_SECRET,
    bucket: process.env.DOCS_ALI_OSS_BUCKET,
    region: process.env.DOCS_ALI_OSS_REGION,
  });

  // 4. Generate or use provided timestamp
  const timestamp = options.timestamp || generateTimestamp();

  // 5. Upload to OSS
  console.log(`[info] Uploading docs from ${dir} to OSS under ${timestamp}/...`);
  try {
    let uploadedCount = 0;

    // Upload en-US to the root of the timestamp directory (default language)
    const enUSDir = path.resolve(dir, 'en-US');
    if (fs.existsSync(enUSDir)) {
      console.log('[info] Uploading en-US as root (default language)...');
      uploadedCount += await uploadDirectoryToOSS(ossClient, enUSDir, timestamp);
    }

    // Upload other language directories (skip en-US since it's already at root)
    const langDirs = fs.readdirSync(dir);
    for (const lang of langDirs) {
      if (lang === 'en-US') continue;
      const langDir = path.resolve(dir, lang);
      if (fs.statSync(langDir).isDirectory()) {
        uploadedCount += await uploadDirectoryToOSS(ossClient, langDir, `${timestamp}/${lang}`);
      }
    }

    console.log(`[info] Successfully uploaded ${uploadedCount} files to OSS under ${timestamp}/`);
  } catch (error) {
    console.error(`[error] Upload failed: ${error.message}`);
    process.exit(1);
  }

  // 6. Update CDN origin rewrite rule
  console.log(`[info] Updating CDN origin rewrite rule for ${domain}...`);
  try {
    const cdnClient = createCdnClient();
    await updateCdnOriginRewrite(cdnClient, domain, timestamp);
    console.log(`[info] CDN origin rewrite updated to /${timestamp}/`);

    // 7. Poll until rewrite rule takes effect, then refresh CDN cache
    console.log('[info] Waiting for rewrite rule to propagate...');
    await waitForRewriteRule(cdnClient, domain, timestamp);
    console.log('[info] Refreshing CDN cache...');
    await refreshCdnCache(cdnClient, domain);
    console.log('[info] CDN cache refresh submitted');
  } catch (error) {
    console.error(`[error] CDN update failed: ${error.message}`);
    process.exit(1);
  }

  // 8. Cleanup old versions (non-fatal)
  console.log(`[info] Cleaning up old versions (keeping latest ${KEEP_VERSIONS})...`);
  try {
    await cleanupOldVersions(ossClient, KEEP_VERSIONS);
    console.log('[info] Cleanup complete');
  } catch (error) {
    console.warn(`[warn] Cleanup failed (non-fatal): ${error.message}`);
  }
}

main();
