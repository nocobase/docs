export default [
  {
    title: 'Guide',
    'title.zh-CN': '指南',
    link: '/handbook',
  },
  {
    title: '数据建模',
    'title.zh-CN': '数据建模',
    type: 'group',
    children: [
      {
        title: 'Overview',
        'title.zh-CN': '概述',
        link: '/handbook/data-modeling',
      },
      {
        title: 'Data model tools',
        'title.zh-CN': '数据建模工具',
        children: [
          {
            title: 'Data source manager',
            'title.zh-CN': '数据源管理',
            // subTitle: '@nocobase/plugin-data-source-manager',
            link: '/handbook/data-source-manager',
          },
          {
            title: 'Graph collection manager',
            'title.zh-CN': '可视化数据表管理',
            // subTitle: '@nocobase/plugin-graph-collection-manager',
            link: '/handbook/graph-collection-manager',
          },
        ],
      },
      {
        title: 'Data sources',
        'title.zh-CN': '数据源',
        children: [
          {
            title: 'Data sources: Main database',
            'title.zh-CN': '主数据库',
            // subTitle: '@nocobase/plugin-collection-manager',
            link: '/handbook/collection-manager',
          },
          {
            title: 'External MySQL',
            'title.zh-CN': '外部 MySQL',
            // subTitle: '@nocobase/plugin-data-source-external-mysql',
            link: '/handbook/data-source-mysql',
          },
          {
            title: 'External MariaDB',
            'title.zh-CN': '外部 MariaDB',
            // subTitle: '@nocobase/plugin-data-source-external-mariadb',
            link: '/handbook/data-source-mariadb',
          },
          {
            title: 'External PostgreSQL',
            'title.zh-CN': '外部 PostgreSQL',
            // subTitle: '@nocobase/plugin-data-source-external-postgres',
            link: '/handbook/data-source-postgres',
          },
        ],
      },
      {
        title: 'Collections',
        'title.zh-CN': '数据表',
        children: [
          {
            title: '数据表：数据库视图',
            'title.zh-CN': '数据表：数据库视图',
            // subTitle: '@nocobase/plugin-collection-view',
            link: '/plugins/collection-view',
          },
          {
            title: '数据表：SQL 表',
            'title.zh-CN': '数据表：SQL 表',
            // subTitle: '@nocobase/plugin-collection-sql',
            link: '/plugins/collection-sql',
          },
          {
            title: 'Connect to foreign data（FDW）',
            'title.zh-CN': '连接外部数据（FDW）',
            // subTitle: '@nocobase/plugin-collection-fdw',
            link: '/plugins/collection-fdw',
          },
          {
            title: '数据表：表达式',
            'title.zh-CN': '数据表：表达式',
            // subTitle: '@nocobase/plugin-collection-fdw',
            link: '/plugins/collection-fdw',
          },
          {
            title: '日历表',
            'title.zh-CN': '日历表',
            // subTitle: '@nocobase/plugin-collection-fdw',
            link: '/plugins/collection-fdw',
          },
          {
            title: '数据表：树表',
            'title.zh-CN': '数据表：树表',
            // subTitle: '@nocobase/plugin-collection-fdw',
            link: '/plugins/collection-fdw',
          },
          {
            title: '文件表',
            'title.zh-CN': '文件表',
            // subTitle: '@nocobase/plugin-collection-fdw',
            link: '/plugins/collection-fdw',
          },
        ],
      },
      {
        title: 'Collection fields',
        'title.zh-CN': '数据表字段',
        children: [
        ],
      },

    ],
  },
  {
    title: 'UI editor',
    'title.zh-CN': '配置界面',
    type: 'group',
    children: [
      {
        title: 'UI Editor',
        'title.zh-CN': '界面配置模式',
        link: '/handbook/ui-editor'
      },
      {
        title: 'Menu',
        'title.zh-CN': '菜单',
        link: '/handbook/menus'
      },
      {
        title: 'Page',
        'title.zh-CN': '页面和弹窗',
        link: '/handbook/pages'
      },
      {
        title: 'Blocks',
        'title.zh-CN': '添加区块',
        children: [
        ],
      },
      {
        title: 'Configure fields',
        'title.zh-CN': '配置字段',
        children: [
        ],
      },
      {
        title: 'Configure actions',
        'title.zh-CN': '配置操作',
        children: [
        ],
      },
    ],
  },
  {
    title: 'System management',
    'title.zh-CN': '系统管理',
    type: 'group',
    children: [
      {
        title: 'Plugin manager',
        'title.zh-CN': '插件管理器',
        link: '/handbook/plugin-manager'
      },
      {
        title: 'System settings',
        'title.zh-CN': '系统设置',
        // subTitle: '@nocobase/plugin-system-settings',
        link: '/handbook/system-settings',
      },
      {
        title: 'Theme editor',
        'title.zh-CN': '主题编辑器',
        // subTitle: '@nocobase/plugin-theme-editor',
        link: '/handbook/theme-editor',
      },
      {
        title: 'Localization management',
        'title.zh-CN': '本地化管理',
        // subTitle: '@nocobase/plugin-localization-management',
        link: '/handbook/localization-management',
      },
      {
        title: 'Backup & Restore',
        'title.zh-CN': '备份和还原',
        // subTitle: '@nocobase/plugin-backup-restore',
        link: '/handbook/backup-restore',
      },
    ],
  },
  {
    title: '其他模块',
    'title.zh-CN': '其他模块',
    type: 'group',
    children: [
      {
        title: 'Users & permissions',
        'title.zh-CN': '用户和权限',
        children: [
          {
            title: 'Users',
            'title.zh-CN': '用户',
            // subTitle: '@nocobase/plugin-users',
            link: '/handbook/users',
          },
          {
            title: 'ACL',
            'title.zh-CN': '权限控制',
            // subTitle: '@nocobase/plugin-acl',
            children: [
              {
                title: 'Overview',
                'title.zh-CN': '概述',
                link: '/handbook/acl',
              },
              '/handbook/acl/user',
            ],
          },
        ],
      },
      {
        title: 'Users authentication',
        'title.zh-CN': '用户认证',
        children: [
          {
            title: 'Authentication',
            'title.zh-CN': '用户认证',
            // subTitle: '@nocobase/plugin-auth',
            children: [
              {
                title: 'Overview',
                'title.zh-CN': '概述',
                link: '/handbook/auth',
              },
              {
                title: 'User manual',
                'title.zh-CN': '使用手册',
                link: '/handbook/auth/user',
              },
              {
                title: 'Development',
                'title.zh-CN': '开发指南',
                children: ['/handbook/auth/dev/guide', '/handbook/auth/dev/api'],
              },
            ],
          },
          {
            title: 'Authentication - CAS',
            'title.zh-CN': '用户认证 - CAS',
            // subTitle: '@nocobase/plugin-cas',
            link: '/handbook/cas',
          },
          {
            title: 'Authentication - OIDC',
            'title.zh-CN': '用户认证 - OIDC',
            // subTitle: '@nocobase/plugin-oidc',
            children: [
              {
                title: 'User manual',
                'title.zh-CN': '使用手册',
                link: '/handbook/oidc',
              },
              {
                title: 'Example',
                'title.zh-CN': '示例',
                children: ['/handbook/oidc/example/google'],
              },
            ],
          },
          {
            title: 'Authentication - SAML',
            'title.zh-CN': '用户认证 - SAML',
            // subTitle: '@nocobase/plugin-saml',
            children: [
              {
                title: 'User manual',
                'title.zh-CN': '使用手册',
                link: '/handbook/saml',
              },
              {
                title: 'Example',
                'title.zh-CN': '示例',
                children: ['/handbook/saml/example/google'],
              },
            ],
          },
          {
            title: 'Authentication - SMS',
            'title.zh-CN': '用户认证 - 短信',
            // subTitle: '@nocobase/plugin-sms-auth',
            link: '/handbook/sms-auth',
          },
          {
            title: 'Verification',
            'title.zh-CN': '验证码',
            // subTitle: '@nocobase/plugin-verification',
            link: '/handbook/verification',
          },
        ],
      },
      {
        title: 'Workflow',
        'title.zh-CN': '工作流',
        children: [
          {
            title: 'Workflow',
            'title.zh-CN': '工作流',
            // subTitle: '@nocobase/plugin-workflow',
            children: [
              {
                title: 'Overview',
                'title.zh-CN': '概述',
                link: '/handbook/workflow',
              },
              {
                title: 'User manual',
                'title.zh-CN': '使用手册',
                children: [
                  '/handbook/workflow/manual',
                  '/handbook/workflow/manual/advanced',
                  {
                    title: 'Triggers',
                    'title.zh-CN': '触发器',
                    children: [
                      '/handbook/workflow/manual/triggers',
                      '/handbook/workflow/manual/triggers/collection',
                      '/handbook/workflow/manual/triggers/schedule',
                    ],
                  },
                  {
                    title: 'Nodes',
                    'title.zh-CN': '节点',
                    children: [
                      '/handbook/workflow/manual/nodes',
                      '/handbook/workflow/manual/nodes/condition',
                      '/handbook/workflow/manual/nodes/calculation',
                      '/handbook/workflow/manual/nodes/create',
                      '/handbook/workflow/manual/nodes/update',
                      '/handbook/workflow/manual/nodes/destroy',
                      '/handbook/workflow/manual/nodes/query',
                      '/handbook/workflow/manual/nodes/end',
                    ],
                  },
                ],
              },
              {
                title: 'Development',
                'title.zh-CN': '开发指南',
                children: [
                  '/handbook/workflow/development',
                  '/handbook/workflow/development/trigger',
                  '/handbook/workflow/development/instruction',
                  '/handbook/workflow/development/api',
                ],
              },
            ],
          },
          {
            title: 'Workflow - Aggregate',
            'title.zh-CN': '工作流 - 聚合节点',
            // subTitle: '@nocobase/plugin-workflow-aggregate',
            link: '/handbook/workflow-aggregate',
          },
          {
            title: 'Workflow - Approval',
            'title.zh-CN': '工作流 - 审批',
            // subTitle: '@nocobase/plugin-workflow-approval',
            link: '/handbook/workflow-approval',
          },
          {
            title: 'Workflow - Delay',
            'title.zh-CN': '工作流 - 延时节点',
            // subTitle: '@nocobase/plugin-workflow-delay',
            link: '/handbook/workflow-delay',
          },
          {
            title: 'Workflow - Dynamic calculation',
            'title.zh-CN': '工作流 - 动态表达式计算',
            // subTitle: '@nocobase/plugin-workflow-dynamic-calculation',
            link: '/handbook/workflow-dynamic-calculation',
          },
          {
            title: 'Workflow - Form trigger',
            'title.zh-CN': '工作流 - 表单事件',
            // subTitle: '@nocobase/plugin-workflow-form-trigger',
            link: '/handbook/workflow-form-trigger',
          },
          {
            title: 'Workflow - JSON query',
            'title.zh-CN': '工作流 - JSON 解析节点',
            // subTitle: '@nocobase/plugin-workflow-json-query',
            link: '/handbook/workflow-json-query',
          },
          {
            title: 'Workflow - Loop',
            'title.zh-CN': '工作流 - 循环节点',
            // subTitle: '@nocobase/plugin-workflow-loop',
            link: '/handbook/workflow-loop',
          },
          {
            title: 'Workflow - Manual',
            'title.zh-CN': '工作流 - 人工节点',
            // subTitle: '@nocobase/plugin-workflow-manual',
            link: '/handbook/workflow-manual',
          },
          {
            title: 'Workflow - Parallel',
            'title.zh-CN': '工作流 - 并行分支节点',
            // subTitle: '@nocobase/plugin-workflow-parallel',
            link: '/handbook/workflow-parallel',
          },
          {
            title: 'Workflow - Request',
            'title.zh-CN': '工作流 - HTTP 请求节点',
            // subTitle: '@nocobase/plugin-workflow-request',
            link: '/handbook/workflow-request',
          },
          {
            title: 'Workflow - Request interceptor',
            'title.zh-CN': '工作流 - 请求拦截器',
            // subTitle: '@nocobase/plugin-workflow-request-interceptor',
            link: '/handbook/workflow-request-interceptor',
          },
          {
            title: 'Workflow - Response message',
            'title.zh-CN': '工作流 - 响应消息',
            // subTitle: '@nocobase/plugin-workflow-response-message',
            link: '/handbook/workflow-response-message',
          },
          {
            title: 'Workflow - SQL',
            'title.zh-CN': '工作流 - SQL 操作节点',
            // subTitle: '@nocobase/plugin-workflow-sql',
            link: '/handbook/workflow-sql',
          },
          {
            title: 'Workflow - Varaible',
            'title.zh-CN': '工作流 - 变量节点',
            // subTitle: '@nocobase/plugin-workflow-variable',
            link: '/handbook/workflow-variable',
          },
        ],
      },
      {
        title: 'File storages',
        'title.zh-CN': '文件存储',
        children: [],
      },
      {
        title: 'Logging and monitoring',
        'title.zh-CN': '日志和监控',
        children: [
          {
            title: 'Audit logs',
            'title.zh-CN': '审计日志',
            // subTitle: '@nocobase/plugin-audit-logs',
            link: '/handbook/audit-logs',
          },
          {
            title: 'Logger',
            'title.zh-CN': '日志',
            // subTitle: '@nocobase/plugin-logger',
            link: '/handbook/logger',
          },
          {
            title: 'Telemetry - Prometheus',
            'title.zh-CN': '遥测 - Prometheus',
            // subTitle: '@nocobase/plugin-telemetry-prometheus',
            link: '/handbook/telemetry-prometheus',
          },
        ],
      },
      {
        title: 'API doc',
        'title.zh-CN': 'API 文档',
        // subTitle: '@nocobase/plugin-api-doc',
        link: '/plugins/api-doc',
        // children: ['/plugins/api-doc'],
      },
    ],
  },
]
