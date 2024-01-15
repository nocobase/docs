export default [
  '/api',
  {
    title: 'HTTP API',
    type: 'subMenu',
    children: ['/api/http', '/api/http/rest-api'],
  },
  {
    title: '@nocobase/server',
    type: 'subMenu',
    children: [
      '/api/server/application',
      // '/api/server/plugin-manager',
      '/api/server/plugin',
    ],
  },
  {
    title: '@nocobase/database',
    type: 'subMenu',
    children: [
      '/api/database',
      '/api/database/collection',
      '/api/database/field',
      '/api/database/repository',
      '/api/database/relation-repository/has-one-repository',
      '/api/database/relation-repository/has-many-repository',
      '/api/database/relation-repository/belongs-to-repository',
      '/api/database/relation-repository/belongs-to-many-repository',
      '/api/database/operators',
    ],
  },
  {
    title: '@nocobase/resourcer',
    type: 'subMenu',
    children: [
      '/api/resourcer',
      '/api/resourcer/resource',
      '/api/resourcer/action',
      '/api/resourcer/middleware',
    ],
  },
  {
    title: '@nocobase/acl',
    type: 'subMenu',
    children: ['/api/acl/acl', '/api/acl/acl-role', '/api/acl/acl-resource'],
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
    title: '@nocobase/client',
    type: 'subMenu',
    children: [
      // '/api/client',
      '/api/client/application',
      '/api/client/router',
      {
        title: 'SchemaDesigner',
        'title.zh-CN': 'SchemaDesigner',
        children: [
          '/api/client/schema-designer/schema-component',
          '/api/client/schema-designer/schema-initializer',
          '/api/client/schema-designer/schema-settings',
        ],
      },
      {
        title: 'Extensions',
        'title.zh-CN': 'Extensions',
        children: [
          // '/api/client/extensions/schema-component',
          '/api/client/extensions/collection-manager',
          '/api/client/extensions/block-provider',
          '/api/client/extensions/acl',
        ],
      },
    ],
  },
  {
    title: '@nocobase/cache',
    type: 'subMenu',
    children: ['/api/cache/cache-manager', '/api/cache/cache'],
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
    title: '@nocobase/logger',
    link: '/api/logger',
  },
  {
    title: '@nocobase/cli',
    link: '/api/cli',
  },
  {
    title: '@nocobase/actions',
    link: '/api/actions',
  },
  {
    title: '@nocobase/sdk',
    link: '/api/sdk',
  },
  {
    title: '@nocobase/test',
    type: 'subMenu',
    children: ['/api/test/e2e'],
  },
]