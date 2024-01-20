export default [
  {
    title: 'Quick Start',
    'title.zh-CN': '快速上手',
    type: 'group',
    children: [
      '/manual/quick-start/the-first-app',
      // '/manual/quick-start/functional-zoning',
      // '/manual/quick-start/ui-editor-mode',
    ],
  },
  {
    title: '功能导航',
    'title.zh-CN': '功能导航',
    type: 'group',
    children: [
      {
        title: 'Data source',
        'title.zh-CN': '数据源配置',
        children: [
          {
            title: 'Overview',
            'title.zh-CN': '概述',
            link: '/manual/collection',
          },
          {
            title: 'Collection management',
            'title.zh-CN': '数据表管理',
            children: [
              {
                title: 'Collection management',
                'title.zh-CN': '数据表管理',
                link: '/manual/collection/management',
              },
              {
                title: 'Collection templates',
                'title.zh-CN': '数据表模板',
                children: [
                  '/manual/collection/collection-templates',
                  '/manual/collection/collection-templates/general',
                  '/manual/collection/collection-templates/tree',
                  '/manual/collection/collection-templates/calender',
                  '/manual/collection/collection-templates/file',
                  '/manual/collection/collection-templates/expression',
                  '/manual/collection/collection-templates/sql',
                  '/manual/collection/collection-templates/view',
                ],
              }
            ],
          },
          {
            title: 'Third-party databases',
            'title.zh-CN': '第三方数据库',
            children: [
              {
                title: 'Connect to external data tables',
                'title.zh-CN': '连接外部数据表',
                children: [
                  '/manual/collection/collection-fdw',
                  '/manual/collection/collection-fdw/enable-federated',
                ],
              },
              '/manual/collection/multiple-databases',
            ],
          },
          {
            title: 'Fields',
            'title.zh-CN': '字段',
            children: [
              '/manual/collection/fields',
              '/manual/collection/fields/basic',
              '/manual/collection/fields/choices',
              '/manual/collection/fields/media',
              '/manual/collection/fields/date',
              '/manual/collection/fields/relation',
              '/manual/collection/fields/map',
              '/manual/collection/fields/advanced',
              '/manual/collection/fields/system',
            ],
          },
          {
            title: 'Inherit',
            'title.zh-CN': '继承',
            link: '/manual/collection/inherit',
          },
        ],
      },
      {
        title: 'UI Editor',
        'title.zh-CN': 'UI 配置',
        children: [
          {
            title: 'Overview',
            'title.zh-CN': '概述',
            link: '/manual/ui',
          },
          {
            title: 'Menu',
            'title.zh-CN': '菜单',
            link: '/manual/ui/menus',
          },
          {
            title: 'Page & Popup',
            'title.zh-CN': '页面和弹窗',
            link: '/manual/ui/pages',
          },
          {
            title: 'Block',
            'title.zh-CN': '区块',
            children: [
              {
                title: 'Overview',
                'title.zh-CN': '概述',
                link: '/manual/ui/blocks',
              },
              {
                title: 'Block types',
                'title.zh-CN': '区块类型',
                link: '#',
              },
              {
                title: 'Data blocks',
                'title.zh-CN': '数据区块',
                children: [
                  {
                    title: 'Table',
                    'title.zh-CN': '表格',
                    link: '#',
                  },
                  {
                    title: 'Form',
                    'title.zh-CN': '表单',
                    link: '#',
                  },
                  {
                    title: 'Details',
                    'title.zh-CN': '详情',
                    link: '#',
                  },
                  {
                    title: 'List',
                    'title.zh-CN': '列表',
                    link: '#',
                  },
                  {
                    title: 'Grid Card',
                    'title.zh-CN': '卡片',
                    link: '#',
                  },
                  {
                    title: 'Calendar',
                    'title.zh-CN': '日历',
                    link: '#',
                  },
                  {
                    title: 'kanban',
                    'title.zh-CN': '看板',
                    link: '#',
                  },
                  {
                    title: 'Map',
                    'title.zh-CN': '地图',
                    link: '#',
                  },
                  {
                    title: 'Charts',
                    'title.zh-CN': '图表',
                    link: '#',
                  },
                ],
              },
              {
                title: 'Association blocks',
                'title.zh-CN': '关系区块',
                children: [
                  {
                    title: '一对一 & 多对一',
                    'title.zh-CN': '一对一 & 多对一',
                    link: '#',
                  },
                  {
                    title: '一对多 & 多对多',
                    'title.zh-CN': '一对多 & 多对多',
                    link: '#',
                  },
                ],
              },
              {
                title: 'Filter blocks',
                'title.zh-CN': '筛选区块',
                children: [
                  {
                    title: '表单',
                    'title.zh-CN': '表单',
                    link: '#',
                  },
                  {
                    title: '折叠面板',
                    'title.zh-CN': '折叠面板',
                    link: '#',
                  },
                ],
              },
              {
                title: 'Other blocks',
                'title.zh-CN': '其他区块',
                children: [
                  {
                    title: 'Markdown',
                    'title.zh-CN': 'Markdown',
                    link: '#',
                  },
                  {
                    title: 'Iframe',
                    'title.zh-CN': 'Iframe',
                    link: '#',
                  },
                  {
                    title: '工作流待办',
                    'title.zh-CN': '工作流待办',
                    link: '#',
                  },
                ],
              },
              {
                title: 'Block template',
                'title.zh-CN': '区块模板',
                link: '#',
              },
            ],
          },
          {
            title: 'Actions',
            'title.zh-CN': '操作',
            children: [
              {
                title: 'Overview',
                'title.zh-CN': '概述',
                link: '/manual/ui/actions',
              },
              '/manual/ui/actions/add-new',
              '/manual/ui/actions/view',
              '/manual/ui/actions/edit',
              '/manual/ui/actions/delete',
              '/manual/ui/actions/filter',
              '/manual/ui/actions/submit',
              '/manual/ui/actions/add-record',
              '/manual/ui/actions/update-record',
              '/manual/ui/actions/save-record',
              '/manual/ui/actions/open-popup',
              '/manual/ui/actions/custom-request',
              '/manual/ui/actions/duplicate',
              '/manual/ui/actions/import',
              '/manual/ui/actions/import',
              '/manual/ui/actions/print',
              '/manual/ui/actions/refresh',
              '/manual/ui/actions/submit-to-workflow',
            ],
          },
          {
            title: 'Fields',
            'title.zh-CN': '字段',
            children: [
              {
                title: 'Fields',
                'title.zh-CN': '字段',
                link: '/manual/ui/fields',
              },
              {
                title: 'Association field components',
                'title.zh-CN': '关系字段组件',
                children: [
                  '/manual/ui/fields/association-components',
                  '/manual/ui/fields/association-components/record-picker',
                  '/manual/ui/fields/association-components/select',
                  '/manual/ui/fields/association-components/cascade-select',
                  '/manual/ui/fields/association-components/file-manager',
                  '/manual/ui/fields/association-components/sub-form',
                  '/manual/ui/fields/association-components/sub-form(popover)',
                  '/manual/ui/fields/association-components/sub-table',
                  '/manual/ui/fields/association-components/sub-detail',
                  '/manual/ui/fields/association-components/tag',
                  '/manual/ui/fields/association-components/title',
                ],
              }
            ]
          },
          {
            title: 'Inherit collection\'s UI',
            'title.zh-CN': '继承表的 UI',
            link: '/manual/ui/inherit',
          }
        ],
      },
      {
        title: 'Users',
        'title.zh-CN': '用户',
        children: [
          {
            title: 'Overview',
            'title.zh-CN': '概述',
            link: '#',
          },
          {
            title: 'User center',
            'title.zh-CN': '个人中心',
            link: '/manual/user/user-center',
          },
          {
            title: 'Auth types',
            'title.zh-CN': '认证方式',
            children: [
              {
                title: 'Overview',
                'title.zh-CN': '概述',
                link: '#',
              },
              {
                title: 'Password',
                'title.zh-CN': '密码',
                link: '#',
              },
              {
                title: 'SMS',
                'title.zh-CN': '短信',
                link: '#',
              },
              {
                title: 'SAML',
                'title.zh-CN': 'SAML',
                link: '#',
              },
              {
                title: 'OIDC',
                'title.zh-CN': 'OIDC',
                link: '#',
              },
              {
                title: 'CAS',
                'title.zh-CN': 'CAS',
                link: '#',
              },
            ],
          },
        ],
      },
      {
        title: 'Access Control',
        'title.zh-CN': '访问控制',
        children: [
          {
            title: 'Role',
            'title.zh-CN': '角色',
            link: '#',
          },
          {
            title: 'Permission',
            'title.zh-CN': '权限',
            children: [
              {
                title: 'General permissions',
                'title.zh-CN': '通用配置',
                link: '#',
              },
              {
                title: 'Action permissions',
                'title.zh-CN': '数据表操作权限',
                link: '#',
              },
              {
                title: 'Menu permissions',
                'title.zh-CN': '菜单访问权限',
                link: '#',
              },
              {
                title: 'Plugin settings permissions',
                'title.zh-CN': '插件配置权限',
                link: '#',
              },
            ],
          },
        ],
      },
      {
        title: 'Workflow',
        'title.zh-CN': '工作流',
        children: [
          {
            title: 'Overview',
            'title.zh-CN': '概述',
            link: '/manual/workflow',
          },
          {
            title: 'Quick start',
            'title.zh-CN': '快速入门',
            link: '/manual/workflow/start',
          },
          {
            title: 'Advanced usage',
            'title.zh-CN': '进阶使用',
            link: '/manual/workflow/advanced',
          },
          {
            title: 'Triggers',
            'title.zh-CN': '触发器',
            children: [
              '/manual/workflow/triggers',
              '/manual/workflow/triggers/collection',
              '/manual/workflow/triggers/schedule',
              '/manual/workflow/triggers/form',
            ],
          },
          {
            title: 'Nodes',
            'title.zh-CN': '节点',
            children: [
              '/manual/workflow/nodes',
              '/manual/workflow/nodes/condition',
              '/manual/workflow/nodes/calculation',
              '/manual/workflow/nodes/create',
              '/manual/workflow/nodes/update',
              '/manual/workflow/nodes/destroy',
              '/manual/workflow/nodes/query',
              '/manual/workflow/nodes/aggregate',
              '/manual/workflow/nodes/delay',
              '/manual/workflow/nodes/dynamic-calculation',
              '/manual/workflow/nodes/loop',
              '/manual/workflow/nodes/manual',
              '/manual/workflow/nodes/parallel',
              '/manual/workflow/nodes/request',
              '/manual/workflow/nodes/sql',
            ],
          },
        ],
      },
      {
        title: 'Data visualization',
        'title.zh-CN': '数据可视化',
        children: [
          '/manual/data-visualization',
          '/manual/data-visualization/chart-block',
          '/manual/data-visualization/configure',
          '/manual/data-visualization/filter',
        ],
      },
      {
        title: 'Files management',
        'title.zh-CN': '文件存储',
        children: [
          {
            title: 'Overview',
            'title.zh-CN': '概述',
            link: '/manual/file-manager',
          },
          {
            title: 'Storage types',
            'title.zh-CN': '存储类型',
            children: [
              '/manual/file-manager/local',
              '/manual/file-manager/aliyun-oss',
              '/manual/file-manager/tencent-cos',
              '/manual/file-manager/amazon-s3',
            ],
          },
        ],
      },
      {
        title: 'Backup & restore',
        'title.zh-CN': '备份和还原',
        link: '/manual/backup-restore',
      },
      {
        title: 'Localization management',
        'title.zh-CN': '多语言管理',
        link: '/manual/localization-management',
      },
      {
        title: 'Theme editor',
        'title.zh-CN': '主题配置',
        link: '/manual/theme-editor',
      },
      {
        title: 'Mobile client',
        'title.zh-CN': '移动端',
        link: '/manual/mobile-client',
      },
      {
        title: 'System settings',
        'title.zh-CN': '系统设置',
        link: '/manual/system-settings',
      },
      {
        title: 'Plugins',
        'title.zh-CN': '插件管理和配置',
        children: [
          {
            title: 'Plugin management',
            'title.zh-CN': '插件管理器',
            link: '/manual/plugin-manager/plugin-manager',
          },
          {
            title: 'Plugin settings center',
            'title.zh-CN': '插件设置中心',
            link: '/manual/plugin-manager/plugin-settings',
          },
        ],
      },
      {
        title: 'See plugin list for more features',
        'title.zh-CN': '更多特性见插件列表',
        link: '/plugins',
      },
    ],
  },
]
