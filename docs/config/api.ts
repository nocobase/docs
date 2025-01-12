export default [
  '/api',
  // {
  //   title: 'HTTP API',
  //   type: 'subMenu',
  //   children: ['/api/http', '/api/http/rest-api'],
  // },
  {
    title: '@nocobase/acl',
    link: '/api/acl/acl',
  },
  {
    title: '@nocobase/actions',
    link: '/api/actions',
  },
  {
    title: '@nocobase/auth',
    type: 'subMenu',
    children: [
      '/api/auth/auth-manager',
      '/api/auth/auth',
      '/api/auth/base-auth',
    ],
  },
  {
    title: '@nocobase/cache',
    type: 'subMenu',
    children: ['/api/cache/cache-manager', '/api/cache/cache'],
  },
  {
    title: '@nocobase/cli',
    link: '/api/cli',
  },
  {
    title: '@nocobase/client',
    link: 'https://client.docs.nocobase.com/core/application/application',
    'link.zh-CN':
      'https://client.docs-cn.nocobase.com/core/application/application',
  },
  {
    title: '@nocobase/database',
    type: 'subMenu',
    children: [
      '/api/database',
      '/api/database/collection',
      '/api/database/field',
      '/api/database/repository',
      '/api/database/interfaces/base-interface',
      '/api/database/relation-repository/has-one-repository',
      '/api/database/relation-repository/has-many-repository',
      '/api/database/relation-repository/belongs-to-repository',
      '/api/database/relation-repository/belongs-to-many-repository',
      '/api/database/operators',
    ],
  },
  {
    title: '@nocobase/data-source-manager',
    type: 'subMenu',
    children: [
      '/api/data-source-manager',
      '/api/data-source-manager/data-source',
      '/api/data-source-manager/i-collection-manager',
      '/api/data-source-manager/i-collection',
      '/api/data-source-manager/i-repository',
      '/api/data-source-manager/i-model',
    ],
  },
  {
    title: '@nocobase/field',
    type: 'subMenu',
    children: [
      {
        title: 'markdown-vditor',
        link: '/api/field/markdown-vditor'
      },
    ],
  },
  {
    title: '@nocobase/handlebars-helpers',
    link: '/api/handlebars-helpers',
    children: [
      {
        title: 'Overview',
        'title.zh-CN': '概述',
        link: '/api/handlebars-helpers',
      },
      '/api/handlebars-helpers/core',
      '/api/handlebars-helpers/array',
      '/api/handlebars-helpers/comparison',
      '/api/handlebars-helpers/date',
      '/api/handlebars-helpers/i18n',
      '/api/handlebars-helpers/math',
      '/api/handlebars-helpers/number',
      '/api/handlebars-helpers/object',
      '/api/handlebars-helpers/path',
      '/api/handlebars-helpers/regex',
      '/api/handlebars-helpers/string',
      '/api/handlebars-helpers/url',
    ],
  },
  {
    title: '@nocobase/logger',
    link: '/api/logger',
  },
  {
    title: '@nocobase/resourcer',
    type: 'subMenu',
    children: [
      '/api/resourcer/resource-manager',
      // '/api/resourcer/resource',
      '/api/resourcer/action',
      // '/api/resourcer/middleware',
    ],
  },
  {
    title: '@nocobase/sdk',
    children: ['/api/sdk', '/api/sdk/auth', '/api/sdk/storage'],
  },
  {
    title: '@nocobase/server',
    type: 'subMenu',
    children: [
      '/api/server/application',
      '/api/server/plugin-manager',
      '/api/server/plugin',
      '/api/server/migration',
      // '/api/server/sync-manager',
    ],
  },
  {
    title: '@nocobase/telemetry',
    type: 'subMenu',
    children: [
      '/api/telemetry/telemetry',
      '/api/telemetry/trace',
      '/api/telemetry/metric',
    ],
  },
  {
    title: '@nocobase/test',
    type: 'subMenu',
    children: ['/api/test/server', '/api/test/client', '/api/test/e2e'],
  },
];
