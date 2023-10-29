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
    title: 'Plugins',
    'title.zh-CN': '插件列表',
    link: '/plugins',
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
        '/welcome/introduction/when',
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
        {
          title: '可配置的界面',
          'title.zh-CN': '可配置的界面',
          link: '#',
        },
        {
          title: '插件管理器',
          'title.zh-CN': '插件管理器',
          link: '#',
        },
      ],
    },
    {
      title: '功能导航',
      'title.zh-CN': '功能导航',
      type: 'group',
      children: [
        {
          title: 'Pages',
          'title.zh-CN': '页面',
          children: [
            {
              title: '概述',
              'title.zh-CN': '概述',
              link: '#',
            },
            {
              title: '可配置页面',
              'title.zh-CN': '可配置页面',
              link: '#',
            },
            {
              title: '插件管理器',
              'title.zh-CN': '插件管理器',
              link: '#',
            },
            {
              title: '管理中心',
              'title.zh-CN': '管理中心',
              link: '#',
            },
            {
              title: '个人中心',
              'title.zh-CN': '个人中心',
              link: '#',
            },
            {
              title: '登录页',
              'title.zh-CN': '登录页',
              link: '#',
            },
            {
              title: '注册页',
              'title.zh-CN': '注册页',
              link: '#',
            },
            {
              title: '移动端入口',
              'title.zh-CN': '移动端入口',
              link: '#',
            },
            {
              title: 'API 文档',
              'title.zh-CN': 'API 文档',
              link: '#',
            },
          ],
        },
        {
          title: 'UI 配置',
          'title.zh-CN': 'UI 配置',
          children: [
            {
              title: '菜单',
              'title.zh-CN': '菜单',
              link: '/manual/modules/ui/menus',
            },
            {
              title: '页面',
              'title.zh-CN': '页面',
              link: '/manual/modules/ui/pages',
            },
            {
              title: '区块',
              'title.zh-CN': '区块',
              children: [
                {
                  title: '数据表区块',
                  'title.zh-CN': '数据表区块',
                  children: [],
                },
                {
                  title: '关系区块',
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
                  title: '筛选区块',
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
                  title: '其他区块',
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
                      title: '审计日志',
                      'title.zh-CN': '审计日志',
                      link: '#',
                    },
                    {
                      title: '工作流待办',
                      'title.zh-CN': '工作流待办',
                      link: '#',
                    },
                  ],
                },
              ],
            },
            {
              title: '字段',
              'title.zh-CN': '字段',
              children: [
                {
                  title: '字段类型',
                  'title.zh-CN': '字段类型',
                  children: [
                  ],
                },
                {
                  title: '关系字段组件',
                  'title.zh-CN': '关系字段组件',
                  children: [
                  ],
                },
              ]
            },
            {
              title: '操作',
              'title.zh-CN': '操作',
              children: [
                {
                  title: '查看',
                  'title.zh-CN': '查看',
                  link: '#',
                },
                {
                  title: '编辑',
                  'title.zh-CN': '编辑',
                  link: '#',
                },
                {
                  title: '删除',
                  'title.zh-CN': '删除',
                  link: '#',
                },
                {
                  title: '筛选',
                  'title.zh-CN': '筛选',
                  link: '#',
                },
                {
                  title: '刷新',
                  'title.zh-CN': '刷新',
                  link: '#',
                },
                {
                  title: '提交（表单区块特有）',
                  'title.zh-CN': '提交（表单区块特有）',
                  link: '#',
                },
                {
                  title: '刷新',
                  'title.zh-CN': '刷新',
                  link: '#',
                },
                {
                  title: '复制',
                  'title.zh-CN': '复制',
                  link: '#',
                },
                {
                  title: '刷新',
                  'title.zh-CN': '刷新',
                  link: '#',
                },
                {
                  title: '导入',
                  'title.zh-CN': '导入',
                  link: '#',
                },
                {
                  title: '导出',
                  'title.zh-CN': '导出',
                  link: '#',
                },
                {
                  title: '自定义',
                  'title.zh-CN': '自定义',
                  children: [
                    {
                      title: '批量更新',
                      'title.zh-CN': '批量更新',
                      link: '#',
                    },
                    {
                      title: '批量编辑',
                      'title.zh-CN': '批量编辑',
                      link: '#',
                    },
                    {
                      title: '添加数据',
                      'title.zh-CN': '添加数据',
                      link: '#',
                    },
                    {
                      title: '打开弹窗',
                      'title.zh-CN': '打开弹窗',
                      link: '#',
                    },
                    {
                      title: '更新数据',
                      'title.zh-CN': '更新数据',
                      link: '#',
                    },
                    {
                      title: '保存数据（表单区块特有）',
                      'title.zh-CN': '保存数据（表单区块特有）',
                      link: '#',
                    },
                    {
                      title: '自定义请求',
                      'title.zh-CN': '自定义请求',
                      link: '#',
                    },
                    {
                      title: '提交至工作流',
                      'title.zh-CN': '提交至工作流',
                      link: '#',
                    },
                  ],
                },
                
              ],
            },
          ],
        },
        {
          title: '数据表和字段',
          'title.zh-CN': '数据表和字段',
          children: [
            {
              title: '数据表模板',
              'title.zh-CN': '数据表模板',
              children: [
                {
                  title: '普通数据表',
                  'title.zh-CN': '普通数据表',
                  link: '#',
                },
                {
                  title: '文件数据表',
                  'title.zh-CN': '文件数据表',
                  link: '#',
                },
                {
                  title: '日历数据表',
                  'title.zh-CN': '日历数据表',
                  link: '#',
                },
                {
                  title: '树结构表',
                  'title.zh-CN': '树结构表',
                  link: '#',
                },
                {
                  title: 'SQL 数据表',
                  'title.zh-CN': 'SQL 数据表',
                  link: '#',
                },
                {
                  title: '表达式表',
                  'title.zh-CN': '表达式表',
                  link: '#',
                },
                {
                  title: '连接数据库视图',
                  'title.zh-CN': '连接数据库视图',
                  link: '#',
                },
              ]
            },
            {
              title: '数据表字段类型',
              'title.zh-CN': '数据表字段类型',
              children: [
                {
                  title: '基本类型',
                  'title.zh-CN': '基本类型',
                  children: [
                    // 单行文本
                    // 多行文本
                    // 手机号码
                    // 电子邮箱
                    // URL
                    // 整数
                    // 数字
                    // 百分比
                    // 密码
                    // 颜色
                    // 图标
                  ],
                },
                {
                  title: '选择类型',
                  'title.zh-CN': '选择类型',
                  children: [
// 勾选
// 下拉菜单（单选）
// 下拉菜单（多选）
// 单选框
// 复选框
// 中国行政区
                  ]
                },
                {
                  title: '多媒体',
                  'title.zh-CN': '多媒体',
                  children: [
                    // Markdown
                    // 富文本
                    // 附件
                  ]
                },
                {
                  title: '日期 & 时间',
                  'title.zh-CN': '日期 & 时间',
                  children: [
// 日期
// 时间
                  ]
                },
                {
                  title: '关系类型',
                  'title.zh-CN': '关系类型',
                  children: [
                    // 一对一（belongs to）
                    // 一对一（has one）
                    // 一对多
                    // 多对一
                    // 多对多
                  ]
                },
                {
                  title: '基于地图的几何图形',
                  'title.zh-CN': '基于地图的几何图形',
                  children: [
                    // 点
                    // 线
                    // 圆
                    // 多边形
                  ]
                },
                {
                  title: '高级类型',
                  'title.zh-CN': '高级类型',
                  children: [
                    // 公式
                    // 自动编码
                    // JSON
                    // 数据表
                    // 快照
                  ]
                },
                {
                  title: '系统信息',
                  'title.zh-CN': '系统信息',
                  children: [
                    // ID
                    // Table OID
                    // 创建日期
                    // 最后修改日期
                    // 创建人
                    // 最后修改人
                  ]
                },
              ]
            },
          ],
        },
        {
          title: 'Workflow',
          'title.zh-CN': '工作流',
          children: [
            {
              title: '触发器',
              'title.zh-CN': '触发器',
              children: [
                {
                  title: '表单事件',
                  'title.zh-CN': '表单事件',
                  link: '#',
                },
                {
                  title: '数据表事件',
                  'title.zh-CN': '数据表事件',
                  link: '#',
                },
                {
                  title: '定时任务',
                  'title.zh-CN': '定时任务',
                  link: '#',
                },
              ],
            },
            {
              title: '节点',
              'title.zh-CN': '节点',
              children: [
                {
                  title: '流程控制',
                  'title.zh-CN': '流程控制',
                  children: [
                    {
                      title: '运算',
                      'title.zh-CN': '运算',
                      link: '#',
                    },
                    {
                      title: '条件',
                      'title.zh-CN': '条件',
                      link: '#',
                    },
                    {
                      title: '分支',
                      'title.zh-CN': '分支',
                      link: '#',
                    },
                    {
                      title: '循环',
                      'title.zh-CN': '循环',
                      link: '#',
                    },
                    {
                      title: '延时',
                      'title.zh-CN': '延时',
                      link: '#',
                    },
                  ],
                },
                {
                  title: '数据表操作',
                  'title.zh-CN': '数据表操作',
                  children: [
                    {
                      title: '查询数据',
                      'title.zh-CN': '查询数据',
                      link: '#',
                    },
                    {
                      title: '新增数据',
                      'title.zh-CN': '新增数据',
                      link: '#',
                    },
                    {
                      title: '更新数据',
                      'title.zh-CN': '更新数据',
                      link: '#',
                    },
                    {
                      title: '删除数据',
                      'title.zh-CN': '删除数据',
                      link: '#',
                    },
                    {
                      title: '聚合查询',
                      'title.zh-CN': '聚合查询',
                      link: '#',
                    },
                    {
                      title: 'SQL 操作',
                      'title.zh-CN': 'SQL 操作',
                      link: '#',
                    },
                  ],
                },
                {
                  title: '人工处理',
                  'title.zh-CN': '人工处理',
                  children: [
                    {
                      title: '人工处理',
                      'title.zh-CN': '人工处理',
                      link: '#',
                    },
                    {
                      title: 'Approval',
                      'title.zh-CN': '审批',
                      link: '#',
                    },
                  ],
                },
                {
                  title: '扩展类型',
                  'title.zh-CN': '扩展类型',
                  children: [
                    {
                      title: 'HTTP 请求',
                      'title.zh-CN': 'HTTP 请求',
                      link: '#',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          title: '用户认证',
          'title.zh-CN': '用户认证',
          children: [
            {
              title: '密码',
              'title.zh-CN': '密码',
              link: '#',
            },
            {
              title: '短信',
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
        {
          title: '文件存储',
          'title.zh-CN': '文件存储',
          children: [
            {
              title: '本地',
              'title.zh-CN': '本地',
              link: '#',
            },
            {
              title: '阿里云',
              'title.zh-CN': '阿里云',
              link: '#',
            },
            {
              title: 'S3',
              'title.zh-CN': 'S3',
              link: '#',
            },
            {
              title: '腾讯云',
              'title.zh-CN': '腾讯云',
              link: '#',
            },
          ],
        },
        {
          title: '图表',
          'title.zh-CN': '图表',
          children: [
            {
              title: '折线图',
              'title.zh-CN': '折线图',
              link: '#',
            },
            {
              title: '面积图',
              'title.zh-CN': '面积图',
              link: '#',
            },
            {
              title: '柱状图',
              'title.zh-CN': '柱状图',
              link: '#',
            },
            {
              title: '条形图',
              'title.zh-CN': '条形图',
              link: '#',
            },
            {
              title: '饼图',
              'title.zh-CN': '饼图',
              link: '#',
            },
            {
              title: '双轴图',
              'title.zh-CN': '双轴图',
              link: '#',
            },
            {
              title: '散点图',
              'title.zh-CN': '散点图',
              link: '#',
            },
            {
              title: '统计',
              'title.zh-CN': '统计',
              link: '#',
            },
            {
              title: '表格',
              'title.zh-CN': '表格',
              link: '#',
            },
          ],
        },
        {
          title: '地图服务商',
          'title.zh-CN': '地图服务商',
          children: [
            {
              title: '高德',
              'title.zh-CN': '高德',
              link: '#',
            },
            {
              title: 'Google',
              'title.zh-CN': 'Google',
              link: '#',
            },
          ],
        },
        {
          title: '验证码服务商',
          'title.zh-CN': '验证码服务商',
          children: [
            {
              title: '阿里云 SMS',
              'title.zh-CN': '阿里云 SMS',
              link: '#',
            },
            {
              title: '腾讯云 SMS',
              'title.zh-CN': '腾讯云 SMS',
              link: '#',
            },
          ],
        },
        {
          title: '更多模块见插件列表',
          'title.zh-CN': '更多模块见插件列表',
          link: '/plugins',
        },
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
  '/plugins': [
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
          title: 'ACL',
          'title.zh-CN': '权限控制',
          subTitle: '@nocobase/plugin-acl',
          children: ['/plugins/acl', '/plugins/acl/user'],
        },
        {
          title: 'API doc',
          'title.zh-CN': 'API 文档',
          subTitle: '@nocobase/plugin-api-doc',
          children: ['/plugins/api-doc'],
        },
        {
          title: 'API keys',
          'title.zh-CN': 'API 密钥',
          subTitle: '@nocobase/plugin-api-keys',
          children: ['/plugins/api-keys'],
        },
        {
          title: 'Audit logs',
          'title.zh-CN': '审计日志',
          subTitle: '@nocobase/plugin-audit-logs',
          children: ['/plugins/audit-logs'],
        },
        {
          title: 'Auth',
          'title.zh-CN': '用户认证',
          subTitle: '@nocobase/plugin-auth',
          children: [
            '/plugins/auth',
            '/plugins/auth/user',
            '/plugins/auth/dev',
          ],
        },
        {
          title: 'CAS auth',
          'title.zh-CN': 'CAS 认证',
          subTitle: '@nocobase/plugin-cas',
          children: ['/plugins/cas'],
        },
        {
          title: 'China region',
          'title.zh-CN': '中国行政区',
          subTitle: '@nocobase/plugin-china-region',
          children: ['/plugins/china-region'],
        },
        {
          title: 'Client',
          'title.zh-CN': '客户端',
          subTitle: '@nocobase/plugin-client',
          children: [
            '/plugins/client',
            {
              title: '使用手册',
              'title.zh-CN': '使用手册',
              children: [
                '/plugins/client/user/plugin-manager',
                '/plugins/client/user/plugin-settings',
                '/plugins/client/user/user-center',
                {
                  title: 'UI designer',
                  'title.zh-CN': '界面设计器',
                  children: [
                    '/plugins/client/user/ui-designer',
                    '/plugins/client/user/ui-designer/menus',
                    '/plugins/client/user/ui-designer/pages',
                    '/plugins/client/user/ui-designer/blocks',
                    '/plugins/client/user/ui-designer/fields',
                    '/plugins/client/user/ui-designer/actions',
                  ],
                },
              ],
            },
          ],
        },
        {
          title: 'Collection manager',
          'title.zh-CN': 'Collection manager',
          subTitle: '@nocobase/plugin-collection-manager',
          children: ['/plugins/collection-manager'],
        },
        {
          title: 'Custom request',
          'title.zh-CN': 'Custom request',
          subTitle: '@nocobase/plugin-custom-request',
          children: ['/plugins/custom-request'],
        },
        {
          title: 'Data visualization',
          'title.zh-CN': 'Data visualization',
          subTitle: '@nocobase/plugin-data-visualization',
          children: [
            '/plugins/data-visualization',
            '/plugins/data-visualization/user',
            '/plugins/data-visualization/dev',
            '/plugins/data-visualization/step-by-step',
          ],
        },
        {
          title: 'Export',
          'title.zh-CN': 'Export',
          subTitle: '@nocobase/plugin-export',
          children: ['/plugins/export'],
        },
        {
          title: 'File manager',
          'title.zh-CN': 'File manager',
          subTitle: '@nocobase/plugin-file-manager',
          children: ['/plugins/file-manager', '/plugins/file-manager/user'],
        },
        {
          title: 'Formula field',
          'title.zh-CN': 'Formula field',
          subTitle: '@nocobase/plugin-formula-field',
          children: ['/plugins/formula-field'],
        },
        {
          title: 'Graph collection manager',
          'title.zh-CN': 'Graph collection manager',
          subTitle: '@nocobase/plugin-graph-collection-manager',
          children: ['/plugins/graph-collection-manager'],
        },
        {
          title: 'Iframe block',
          'title.zh-CN': 'Iframe block',
          subTitle: '@nocobase/plugin-iframe-block',
          children: ['/plugins/iframe-block'],
        },
        {
          title: 'Import',
          'title.zh-CN': 'Import',
          subTitle: '@nocobase/plugin-import',
          children: ['/plugins/import'],
        },
        {
          title: 'localization-management',
          'title.zh-CN': '本地化管理',
          subTitle: '@nocobase/plugin-localization-management',
          children: ['/plugins/localization-management'],
        },
        {
          title: 'map',
          'title.zh-CN': 'Map',
          subTitle: '@nocobase/plugin-map',
          children: ['/plugins/map'],
        },
        {
          title: 'Mobile client',
          'title.zh-CN': '移动客户端',
          subTitle: '@nocobase/plugin-mobile-client',
          children: ['/plugins/mobile-client'],
        },
        {
          title: 'Multi-app manager',
          'title.zh-CN': '多应用管理',
          subTitle: '@nocobase/plugin-multi-app-manager',
          children: ['/plugins/multi-app-manager'],
        },
        {
          title: 'OIDC auth',
          'title.zh-CN': 'OIDC auth',
          subTitle: '@nocobase/plugin-oidc',
          children: ['/plugins/oidc'],
        },
        {
          title: 'SAML auth',
          'title.zh-CN': 'SAML auth',
          subTitle: '@nocobase/plugin-saml',
          children: ['/plugins/saml'],
        },
        {
          title: 'Sequence field',
          'title.zh-CN': 'Sequence field',
          subTitle: '@nocobase/plugin-sequence-field',
          children: ['/plugins/sequence-field'],
        },
        {
          title: 'SMS auth',
          'title.zh-CN': 'SMS auth',
          subTitle: '@nocobase/plugin-sms-auth',
          children: ['/plugins/sms-auth'],
        },
        {
          title: 'Snapshot field',
          'title.zh-CN': 'Snapshot field',
          subTitle: '@nocobase/plugin-snapshot-field',
          children: ['/plugins/snapshot-field'],
        },
        {
          title: 'System settings',
          'title.zh-CN': '系统设置',
          subTitle: '@nocobase/plugin-system-settings',
          children: ['/plugins/system-settings'],
        },
        {
          title: 'Theme editor',
          'title.zh-CN': '主题编辑器',
          subTitle: '@nocobase/plugin-theme-editor',
          children: ['/plugins/theme-editor'],
        },
        {
          title: 'UI schema storage',
          'title.zh-CN': 'UI schema storage',
          subTitle: '@nocobase/plugin-ui-schema-storage',
          children: ['/plugins/ui-schema-storage'],
        },
        {
          title: 'Users',
          'title.zh-CN': '用户',
          subTitle: '@nocobase/plugin-users',
          children: ['/plugins/users'],
        },
        {
          title: 'Verification',
          'title.zh-CN': '验证码',
          subTitle: '@nocobase/plugin-verification',
          children: ['/plugins/verification'],
        },
        {
          title: 'Workflow',
          'title.zh-CN': '工作流',
          subTitle: '@nocobase/plugin-workflow',
          children: [
            '/plugins/workflow',
            '/plugins/workflow/triggers',
            '/plugins/workflow/nodes',
          ],
        },
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
