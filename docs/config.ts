const nav = [
  {
    title: 'Welcome',
    'title.zh-CN': '欢迎',
    link: '/welcome/introduction',
  },
  {
    title: 'User manual',
    'title.zh-CN': '使用手册',
    link: '/manual/quick-start/the-first-app',
  },
  {
    title: 'Plugin Development',
    'title.zh-CN': '插件开发',
    link: '/development',
  },
  {
    title: 'API reference',
    'title.zh-CN': 'API 参考',
    link: '/api',
  },
  {
    title: 'Schema components',
    'title.zh-CN': 'Schema 组件库',
    link: '/components',
  },
];
const sidebar = {
  '/welcome': [
    {
      title: 'Welcome',
      'title.zh-CN': '欢迎',
      'title.tr-TR': 'Hoşgeldiniz',
      type: 'group',
      children: [
        '/welcome/introduction',
        '/welcome/introduction/features',
        '/welcome/introduction/why',
        // '/welcome/introduction/learning-guide',
      ],
    },
    {
      title: 'Getting started',
      'title.zh-CN': '快速开始',
      'title.tr-TR': 'Başlangıç',
      type: 'group',
      children: [
        {
          title: 'Installation',
          'title.zh-CN': '安装',
          'title.TR-TR': 'Kurulum',
          children: [
            '/welcome/getting-started/installation',
            '/welcome/getting-started/installation/docker-compose',
            '/welcome/getting-started/installation/create-nocobase-app',
            '/welcome/getting-started/installation/git-clone',
          ],
        },
        {
          title: 'Upgrading',
          'title.zh-CN': '升级',
          'title.TR-TR': 'Güncelleme',
          children: [
            '/welcome/getting-started/upgrading',
            '/welcome/getting-started/upgrading/docker-compose',
            '/welcome/getting-started/upgrading/create-nocobase-app',
            '/welcome/getting-started/upgrading/git-clone',
          ],
        },
      ],
    },
    {
      title: 'Releases',
      'title.zh-CN': '产品发布',
      'title.TR-TR': 'Sürüm',
      type: 'group',
      children: [
        {
          type: 'item',
          title: 'Changelog',
          'title.zh-CN': '更新日志',
          link: 'https://github.com/nocobase/nocobase/blob/main/CHANGELOG.md',
        },
        // '/welcome/release/index',
        // '/welcome/release/v08-changelog',
        '/welcome/release/v14-changelog',
        '/welcome/release/v13-changelog',
        '/welcome/release/v12-changelog',
        '/welcome/release/v11-changelog',
        '/welcome/release/v10-changelog',
      ],
    },
    {
      title: 'Community',
      'title.zh-CN': '社区',
      'title.TR-TR': 'Topluluk',
      type: 'group',
      children: [
        '/welcome/community/contributing',
        // '/welcome/community/faq',
        '/welcome/community/translations',

        '/welcome/community/thanks',
      ],
    },
  ],
  '/manual': [
    {
      title: 'Quick Start',
      'title.zh-CN': '快速上手',
      'title.TR-TR': 'Hızlı Başlangıç',
      type: 'group',
      children: [
        '/manual/quick-start/the-first-app',
        '/manual/quick-start/functional-zoning',
        '/manual/quick-start/ui-editor-mode',
        '/manual/quick-start/plugins',
      ],
    },
    {
      title: 'Core Concepts',
      'title.zh-CN': '核心概念',
      'title.TR-TR': 'Temel Kavramlar',
      type: 'group',
      children: [
        '/manual/core-concepts/collections',
        '/manual/core-concepts/blocks',
        '/manual/core-concepts/actions',
        '/manual/core-concepts/menus',
        '/manual/core-concepts/containers',
      ],
    },
  ],
  '/development': [
    {
      title: 'Getting started',
      'title.zh-CN': '快速开始',
      'title.TR-TR': 'Başlarken',
      type: 'group',
      children: [
        '/development',
        '/development/your-fisrt-plugin',
        '/development/app-ds',
        '/development/plugin-ds',
        '/development/life-cycle',
        // '/development/learning-guide',
      ],
    },
    {
      title: 'Server',
      'title.zh-CN': '服务端',
      'title.TR-TR': 'Sunucu',
      type: 'group',
      children: [
        '/development/server',
        {
          title: 'Collections & Fields',
          'title.zh-CN': '数据表和字段',
          'title.TR-TR': 'Koleksiyonlar & Alanlar',
          children: [
            '/development/server/collections',
            '/development/server/collections/options',
            '/development/server/collections/configure',
            '/development/server/collections/association-fields',
            '/development/server/collections/field-extension',
            '/development/server/collections/collection-template',
          ],
        },
        // '/development/server/collections-fields',
        '/development/server/resources-actions',
        '/development/server/middleware',
        '/development/server/commands',
        '/development/server/events',
        '/development/server/i18n',
        '/development/server/migration',
        '/development/server/test',
      ],
    },
    {
      title: 'Client',
      'title.zh-CN': '客户端',
      'title.TR-TR': 'Ziyaretçi(Client)',
      type: 'group',
      children: [
        '/development/client',
        {
          title: 'UI designer',
          'title.zh-CN': 'UI 设计器',
          'title.TR-TR': 'Kullanıcı Arayüz Tasarımcısı',
          children: [
            // '/development/client/ui-schema-designer',
            '/development/client/ui-schema-designer/what-is-ui-schema',
            '/development/client/ui-schema-designer/extending-schema-components',
            // '/development/client/ui-schema-designer/insert-adjacent',
            '/development/client/ui-schema-designer/designable',
            '/development/client/ui-schema-designer/component-library',
            // '/development/client/ui-schema-designer/collection-manager',
            // '/development/client/ui-schema-designer/acl',
            '/development/client/ui-schema-designer/x-designer',
            '/development/client/ui-schema-designer/x-initializer',
          ],
        },
        '/development/client/ui-router',
        '/development/client/settings-center',
        '/development/client/i18n',
        '/development/client/test',
      ],
    },
  ],
  '/api': [
    '/api',
    '/api/env',
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
      children: ['/api/resourcer', '/api/resourcer/resource', '/api/resourcer/action', '/api/resourcer/middleware'],
    },
    {
      title: '@nocobase/acl',
      type: 'subMenu',
      children: ['/api/acl/acl', '/api/acl/acl-role', '/api/acl/acl-resource'],
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
          'title.TR-TR': 'Şema Tasarımcısı',

          children: [
            '/api/client/schema-designer/schema-component',
            '/api/client/schema-designer/schema-initializer',
            '/api/client/schema-designer/schema-settings',
          ],
        },
        {
          title: 'Extensions',
          'title.zh-CN': 'Extensions',
          'title.TR-TR': 'Eklentiler',
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
  ],
};
export { nav, sidebar };
