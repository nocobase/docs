export default [
  {
    title: 'Overview',
    'title.zh-CN': '插件总览',
    link: '/plugins',
  },
  {
    title: 'Plugins',
    'title.zh-CN': '插件列表',
    type: 'group',
    children: [
      {
        title: 'Data modeling',
        'title.zh-CN': '数据建模',
        children: [
          {
            title: 'Collection manager',
            'title.zh-CN': '数据表管理',
            subTitle: '@nocobase/plugin-collection-manager',
            children: [
              {
                title: 'Overview',
                'title.zh-CN': '概述',
                link: '/plugins/collection-manager',
              },
            ],
          },
          {
            title: 'Graph collection manager',
            'title.zh-CN': '可视化数据表管理',
            subTitle: '@nocobase/plugin-graph-collection-manager',
            link: '/plugins/graph-collection-manager',
          },
          {
            title: 'Connect to foreign data（FDW）',
            'title.zh-CN': '连接外部数据（FDW）',
            subTitle: '@nocobase/plugin-collection-fdw',
            link: '/plugins/collection-fdw',
          },
          {
            title: 'Data source manager',
            'title.zh-CN': '数据源管理',
            subTitle: '@nocobase/plugin-data-source-manager',
            link: '/plugins/data-source-manager',
          },
          {
            title: 'Data source - MariaDB',
            'title.zh-CN': '数据源 - MariaDB',
            subTitle: '@nocobase/plugin-data-source-mariadb',
            link: '/plugins/data-source-mariadb',
          },
          {
            title: 'Data source - MySQL',
            'title.zh-CN': '数据源 - MySQL',
            subTitle: '@nocobase/plugin-data-source-mysql',
            link: '/plugins/data-source-mysql',
          },
          {
            title: 'Data source - PostgreSQL',
            'title.zh-CN': '数据源 - PostgreSQL',
            subTitle: '@nocobase/plugin-data-source-postgres',
            link: '/plugins/data-source-postgres',
          },
          {
            title: 'China region',
            'title.zh-CN': '中国行政区',
            subTitle: '@nocobase/plugin-china-region',
            link: '/plugins/china-region',
          },
          {
            title: 'Formula field',
            'title.zh-CN': '计算公式字段',
            subTitle: '@nocobase/plugin-formula-field',
            link: '/plugins/formula-field',
          },
          {
            title: 'Sequence field',
            'title.zh-CN': '自动编码',
            subTitle: '@nocobase/plugin-sequence-field',
            link: '/plugins/sequence-field',
          },
          {
            title: 'Snapshot field',
            'title.zh-CN': '快照字段',
            subTitle: '@nocobase/plugin-snapshot-field',
            link: '/plugins/snapshot-field',
          },
          {
            title: 'File manager',
            'title.zh-CN': '文件管理器',
            subTitle: '@nocobase/plugin-file-manager',
            link: '/plugins/file-manager',
            // children: ['/plugins/file-manager', '/plugins/file-manager/user'],
          },
        ],
      },
      {
        title: 'UI editor',
        'title.zh-CN': 'UI 配置',
        children: [
          {
            title: 'UI schema storage',
            'title.zh-CN': 'UI schema 存储',
            subTitle: '@nocobase/plugin-ui-schema-storage',
            link: '/plugins/ui-schema-storage',
          },
          {
            title: 'Web client',
            'title.zh-CN': 'WEB 客户端',
            subTitle: '@nocobase/plugin-client',
            link: '/plugins/client',
          },
          {
            title: 'Mobile client',
            'title.zh-CN': 'Mobile 客户端',
            subTitle: '@nocobase/plugin-mobile-client',
            link: '/plugins/mobile-client',
          },
          {
            title: 'Data visualization',
            'title.zh-CN': '数据可视化',
            subTitle: '@nocobase/plugin-data-visualization',
            children: [
              {
                title: 'Overview',
                'title.zh-CN': '概述',
                link: '/plugins/data-visualization',
              },
              {
                title: 'User manual',
                'title.zh-CN': '使用手册',
                children: [
                  '/plugins/data-visualization/user/chart-block',
                  '/plugins/data-visualization/user/configure',
                  '/plugins/data-visualization/user/filter',
                ],
              },
              {
                title: 'Development',
                'title.zh-CN': '开发指南',
                children: [
                  '/plugins/data-visualization/dev',
                  '/plugins/data-visualization/step-by-step',
                ],
              },
            ],
          },
          {
            title: 'Gantt block',
            'title.zh-CN': '甘特图区块',
            subTitle: '@nocobase/plugin-gantt',
            link: '/plugins/gantt',
            // children: ['/plugins/gantt-block', '/plugins/gantt-block/user'],
          },
          {
            title: 'Iframe block',
            'title.zh-CN': 'Iframe 区块',
            subTitle: '@nocobase/plugin-iframe-block',
            link: '/plugins/iframe-block',
          },
          {
            title: 'Kanban block',
            'title.zh-CN': '看板区块',
            subTitle: '@nocobase/plugin-kanban',
            link: '/plugins/kanban',
          },
          {
            title: 'Map',
            'title.zh-CN': '地图',
            subTitle: '@nocobase/plugin-map',
            link: '/plugins/map',
          },
          {
            title: 'Action - Bulk edit ',
            'title.zh-CN': '操作 - 批量编辑',
            subTitle: '@nocobase/plugin-action-bulk-edit',
            link: '/plugins/action-bulk-edit',
          },
          {
            title: 'Action - Bulk update',
            'title.zh-CN': '操作 - 批量更新',
            subTitle: '@nocobase/plugin-action-bulk-update',
            link: '/plugins/action-bulk-update',
          },
          {
            title: 'Action - Custom request',
            'title.zh-CN': '操作 - 自定义请求',
            subTitle: '@nocobase/plugin-custom-request',
            link: '/plugins/custom-request',
          },
          {
            title: 'Action - Duplicate',
            'title.zh-CN': '操作 - 复制',
            subTitle: '@nocobase/plugin-action-duplicate',
            link: '/plugins/action-duplicate',
          },
          {
            title: 'Action - Export',
            'title.zh-CN': '操作 - 导出',
            subTitle: '@nocobase/plugin-export',
            link: '/plugins/export',
          },
          {
            title: 'Action - Import',
            'title.zh-CN': '操作 - 导入',
            subTitle: '@nocobase/plugin-import',
            link: '/plugins/import',
          },
          {
            title: 'Action - Print',
            'title.zh-CN': '操作 - 打印',
            subTitle: '@nocobase/plugin-action-print',
            link: '/plugins/action-print',
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
            subTitle: '@nocobase/plugin-auth',
            children: [
              {
                title: 'Overview',
                'title.zh-CN': '概述',
                link: '/plugins/auth',
              },
              {
                title: 'User manual',
                'title.zh-CN': '使用手册',
                link: '/plugins/auth/user',
              },
              {
                title: 'Development',
                'title.zh-CN': '开发指南',
                children: ['/plugins/auth/dev/guide', '/plugins/auth/dev/api'],
              },
            ],
          },
          {
            title: 'Authentication - CAS',
            'title.zh-CN': '用户认证 - CAS',
            subTitle: '@nocobase/plugin-cas',
            link: '/plugins/cas',
          },
          {
            title: 'Authentication - OIDC',
            'title.zh-CN': '用户认证 - OIDC',
            subTitle: '@nocobase/plugin-oidc',
            children: [
              {
                title: 'User manual',
                'title.zh-CN': '使用手册',
                link: '/plugins/oidc',
              },
              {
                title: 'Example',
                'title.zh-CN': '示例',
                children: ['/plugins/oidc/example/google'],
              },
            ],
          },
          {
            title: 'Authentication - SAML',
            'title.zh-CN': '用户认证 - SAML',
            subTitle: '@nocobase/plugin-saml',
            children: [
              {
                title: 'User manual',
                'title.zh-CN': '使用手册',
                link: '/plugins/saml',
              },
              {
                title: 'Example',
                'title.zh-CN': '示例',
                children: ['/plugins/saml/example/google'],
              },
            ],
          },
          {
            title: 'Authentication - SMS',
            'title.zh-CN': '用户认证 - 短信',
            subTitle: '@nocobase/plugin-sms-auth',
            link: '/plugins/sms-auth',
          },
          {
            title: 'Verification',
            'title.zh-CN': '验证码',
            subTitle: '@nocobase/plugin-verification',
            link: '/plugins/verification',
          },
        ],
      },
      {
        title: 'Users & permissions',
        'title.zh-CN': '用户和权限',
        children: [
          {
            title: 'Users',
            'title.zh-CN': '用户',
            subTitle: '@nocobase/plugin-users',
            link: '/plugins/users',
          },
          {
            title: 'ACL',
            'title.zh-CN': '权限控制',
            subTitle: '@nocobase/plugin-acl',
            children: [
              {
                title: 'Overview',
                'title.zh-CN': '概述',
                link: '/plugins/acl',
              },
              '/plugins/acl/user',
            ],
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
            subTitle: '@nocobase/plugin-workflow',
            children: [
              {
                title: 'Overview',
                'title.zh-CN': '概述',
                link: '/plugins/workflow',
              },
              {
                title: 'User manual',
                'title.zh-CN': '使用手册',
                children: [
                  '/plugins/workflow/manual',
                  '/plugins/workflow/manual/advanced',
                  {
                    title: 'Triggers',
                    'title.zh-CN': '触发器',
                    children: [
                      '/plugins/workflow/manual/triggers',
                      '/plugins/workflow/manual/triggers/collection',
                      '/plugins/workflow/manual/triggers/schedule',
                    ],
                  },
                  {
                    title: 'Nodes',
                    'title.zh-CN': '节点',
                    children: [
                      '/plugins/workflow/manual/nodes',
                      '/plugins/workflow/manual/nodes/condition',
                      '/plugins/workflow/manual/nodes/calculation',
                      '/plugins/workflow/manual/nodes/create',
                      '/plugins/workflow/manual/nodes/update',
                      '/plugins/workflow/manual/nodes/destroy',
                      '/plugins/workflow/manual/nodes/query',
                    ],
                  },
                ],
              },
              {
                title: 'Development',
                'title.zh-CN': '开发指南',
                children: [
                  '/plugins/workflow/development',
                  '/plugins/workflow/development/trigger',
                  '/plugins/workflow/development/instruction',
                  '/plugins/workflow/development/api',
                ],
              },
            ],
          },
          {
            title: 'Workflow - Aggregate',
            'title.zh-CN': '工作流 - 聚合节点',
            subTitle: '@nocobase/plugin-workflow-aggregate',
            link: '/plugins/workflow-aggregate',
          },
          {
            title: 'Workflow - Approval',
            'title.zh-CN': '工作流 - 审批',
            subTitle: '@nocobase/plugin-workflow-approval',
            link: '/plugins/workflow-approval',
          },
          {
            title: 'Workflow - Delay',
            'title.zh-CN': '工作流 - 延时节点',
            subTitle: '@nocobase/plugin-workflow-delay',
            link: '/plugins/workflow-delay',
          },
          {
            title: 'Workflow - Dynamic calculation',
            'title.zh-CN': '工作流 - 动态表达式计算',
            subTitle: '@nocobase/plugin-workflow-dynamic-calculation',
            link: '/plugins/workflow-dynamic-calculation',
          },
          {
            title: 'Workflow - Form trigger',
            'title.zh-CN': '工作流 - 表单事件',
            subTitle: '@nocobase/plugin-workflow-form-trigger',
            link: '/plugins/workflow-form-trigger',
          },
          {
            title: 'Workflow - JSON query',
            'title.zh-CN': '工作流 - JSON 解析节点',
            subTitle: '@nocobase/plugin-workflow-json-query',
            link: '/plugins/workflow-json-query',
          },
          {
            title: 'Workflow - Loop',
            'title.zh-CN': '工作流 - 循环节点',
            subTitle: '@nocobase/plugin-workflow-loop',
            link: '/plugins/workflow-loop',
          },
          {
            title: 'Workflow - Manual',
            'title.zh-CN': '工作流 - 人工节点',
            subTitle: '@nocobase/plugin-workflow-manual',
            link: '/plugins/workflow-manual',
          },
          {
            title: 'Workflow - Parallel',
            'title.zh-CN': '工作流 - 并行分支节点',
            subTitle: '@nocobase/plugin-workflow-parallel',
            link: '/plugins/workflow-parallel',
          },
          {
            title: 'Workflow - Request',
            'title.zh-CN': '工作流 - HTTP 请求节点',
            subTitle: '@nocobase/plugin-workflow-request',
            link: '/plugins/workflow-request',
          },
          {
            title: 'Workflow - SQL',
            'title.zh-CN': '工作流 - SQL 操作节点',
            subTitle: '@nocobase/plugin-workflow-sql',
            link: '/plugins/workflow-sql',
          },
          {
            title: 'Workflow - Varaible',
            'title.zh-CN': '工作流 - 变量节点',
            subTitle: '@nocobase/plugin-workflow-variable',
            link: '/plugins/workflow-variable',
          },
        ],
      },
      {
        title: 'Monitoring and logging',
        'title.zh-CN': '监控和日志',
        children: [
          {
            title: 'Audit logs',
            'title.zh-CN': '审计日志',
            subTitle: '@nocobase/plugin-audit-logs',
            link: '/plugins/audit-logs',
          },
          {
            title: 'Logger',
            'title.zh-CN': '日志',
            subTitle: '@nocobase/plugin-logger',
            link: '/plugins/logger',
          },
          {
            title: 'Telemetry - Prometheus',
            'title.zh-CN': '遥测 - Prometheus',
            subTitle: '@nocobase/plugin-telemetry-prometheus',
            link: '/plugins/telemetry-prometheus',
          },
        ],
      },
      {
        title: 'Others',
        'title.zh-CN': '其他',
        children: [
          {
            title: 'API doc',
            'title.zh-CN': 'API 文档',
            subTitle: '@nocobase/plugin-api-doc',
            link: '/plugins/api-doc',
            // children: ['/plugins/api-doc'],
          },
          {
            title: 'API keys',
            'title.zh-CN': 'API 密钥',
            subTitle: '@nocobase/plugin-api-keys',
            link: '/plugins/api-keys',
            // children: ['/plugins/api-keys'],
          },
          {
            title: 'Backup & Restore',
            'title.zh-CN': '备份和还原',
            subTitle: '@nocobase/plugin-backup-restore',
            link: '/plugins/backup-restore',
          },
          {
            title: 'Localization management',
            'title.zh-CN': '本地化管理',
            subTitle: '@nocobase/plugin-localization-management',
            link: '/plugins/localization-management',
          },
          {
            title: 'Multi-app manager',
            'title.zh-CN': '多应用管理',
            subTitle: '@nocobase/plugin-multi-app-manager',
            link: '/plugins/multi-app-manager',
          },
          {
            title: 'System settings',
            'title.zh-CN': '系统设置',
            subTitle: '@nocobase/plugin-system-settings',
            link: '/plugins/system-settings',
          },
          {
            title: 'Theme editor',
            'title.zh-CN': '主题编辑器',
            subTitle: '@nocobase/plugin-theme-editor',
            link: '/plugins/theme-editor',
          },
        ],
      },
    ],
  },
]