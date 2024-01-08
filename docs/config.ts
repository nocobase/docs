const nav = [
  {
    title: 'Welcome',
    'title.zh-CN': '欢迎',
    link: '/welcome/introduction',
  },
  // {
  //   title: 'Blog',
  //   'title.zh-CN': '博客',
  //   link: '/blog',
  // },
  // {
  //   title: 'Release notes',
  //   'title.zh-CN': '发布说明',
  //   link: '/release-notes',
  // },
  // {
  //   title: 'Breaking changes',
  //   'title.zh-CN': '不兼容变化',
  //   link: '/breaking-changes',
  // },
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
    title: 'Plugin development',
    'title.zh-CN': '插件开发',
    link: '/development',
  },
  {
    title: 'API reference',
    'title.zh-CN': 'API 参考',
    link: '/api',
  },
  // {
  //   title: 'Schema components',
  //   'title.zh-CN': 'Schema 组件库',
  //   link: '/components',
  // },
];
const sidebar = {
  '/welcome': [
    {
      title: 'Welcome',
      'title.zh-CN': '欢迎',
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
      type: 'group',
      children: [
        {
          title: 'Installation',
          'title.zh-CN': '安装',
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
          children: [
            '/welcome/getting-started/upgrading',
            '/welcome/getting-started/upgrading/docker-compose',
            '/welcome/getting-started/upgrading/create-nocobase-app',
            '/welcome/getting-started/upgrading/git-clone',
          ],
        },
        '/welcome/getting-started/env',
      ],
    },
    {
      title: 'Releases',
      'title.zh-CN': '产品发布',
      type: 'group',
      children: [
        {
          type: 'item',
          title: 'Release notes',
          'title.zh-CN': '发布说明',
          link: 'https://blog.nocobase.com/tags/release/',
          'link.zh-CN': 'https://blog-cn.nocobase.com/tags/release/',
        },
        // {
        //   title: 'Release notes',
        //   'title.zh-CN': '发布说明',
        //   link: '/release-notes',
        // },
        {
          title: 'Breaking changes',
          'title.zh-CN': '不兼容变更',
          link: '/breaking-changes/v0-18-0-alpha-1',
        },
        {
          type: 'item',
          title: 'Changelog',
          'title.zh-CN': '更新日志',
          link: 'https://github.com/nocobase/nocobase/blob/main/CHANGELOG.md',
        },
        // '/welcome/release/index',
        // '/welcome/release/v08-changelog',
        // '/welcome/release/v14-changelog',
        // '/welcome/release/v13-changelog',
        // '/welcome/release/v12-changelog',
        // '/welcome/release/v11-changelog',
        // '/welcome/release/v10-changelog',
      ],
    },
    {
      title: 'Community',
      'title.zh-CN': '社区',
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
      type: 'group',
      children: [
        '/manual/quick-start/the-first-app',
        '/manual/quick-start/functional-zoning',
        '/manual/quick-start/ui-editor-mode',
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
              title: 'Overview',
              'title.zh-CN': '概述',
              link: '/manual/modules/pages',
            },
            {
              title: '可配置页面',
              'title.zh-CN': '可配置页面',
              link: '#',
            },
            {
              title: '插件管理器',
              'title.zh-CN': '插件管理器',
              link: '/manual/modules/pages/plugin-manager',
            },
            {
              title: '插件设置中心',
              'title.zh-CN': '插件设置中心',
              link: '/manual/modules/pages/plugin-settings',
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
              title: 'Overview',
              'title.zh-CN': '概述',
              link: '/manual/modules/ui',
            },
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
                  title: 'Overview',
                  'title.zh-CN': '概述',
                  link: '/manual/modules/ui/blocks',
                },
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
                  title: 'Overview',
                  'title.zh-CN': '概述',
                  link: '/manual/modules/ui/fields',
                },
                {
                  title: '字段类型',
                  'title.zh-CN': '字段类型',
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
                      ],
                    },
                    {
                      title: '多媒体',
                      'title.zh-CN': '多媒体',
                      children: [
                        // Markdown
                        // 富文本
                        // 附件
                      ],
                    },
                    {
                      title: '日期 & 时间',
                      'title.zh-CN': '日期 & 时间',
                      children: [
                        // 日期
                        // 时间
                      ],
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
                      ],
                    },
                    {
                      title: '基于地图的几何图形',
                      'title.zh-CN': '基于地图的几何图形',
                      children: [
                        // 点
                        // 线
                        // 圆
                        // 多边形
                      ],
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
                      ],
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
                      ],
                    },
                  ],
                },
                {
                  title: 'Association field components',
                  'title.zh-CN': '关系字段组件',
                  children: [
                    {
                      title: 'Overview',
                      'title.zh-CN': '概述',
                      link: '/manual/modules/ui/fields/association-components',
                    },
                    {
                      title: 'Cascade select',
                      'title.zh-CN': '级联选择器',
                      link: '/manual/modules/ui/fields/association-components/cascade-select',
                    },
                    {
                      title: 'File manager',
                      'title.zh-CN': '文件管理器',
                      link: '/manual/modules/ui/fields/association-components/file-manager',
                    },
                    {
                      title: 'Record picker',
                      'title.zh-CN': '数据选择器',
                      link: '/manual/modules/ui/fields/association-components/record-picker',
                    },
                    {
                      title: 'Select',
                      'title.zh-CN': '下拉选择器',
                      link: '/manual/modules/ui/fields/association-components/select',
                    },
                    {
                      title: 'Sub detail',
                      'title.zh-CN': '子详情',
                      link: '/manual/modules/ui/fields/association-components/sub-detail',
                    },
                    {
                      title: 'Sub form',
                      'title.zh-CN': '子表单',
                      link: '/manual/modules/ui/fields/association-components/sub-form',
                    },
                    {
                      title: 'Sub-form(popover)',
                      'title.zh-CN': '子表单（弹窗）',
                      link: '/manual/modules/ui/fields/association-components/sub-form(popover)',
                    },
                    {
                      title: 'Sub table',
                      'title.zh-CN': '子表格',
                      link: '/manual/modules/ui/fields/association-components/sub-table',
                    },
                    {
                      title: 'Tag',
                      'title.zh-CN': '标签',
                      link: '/manual/modules/ui/fields/association-components/tag',
                    },
                    {
                      title: 'Title',
                      'title.zh-CN': '标题',
                      link: '/manual/modules/ui/fields/association-components/title',
                    },
                  ],
                },
              ],
            },
            {
              title: '操作',
              'title.zh-CN': '操作',
              children: [
                {
                  title: 'Overview',
                  'title.zh-CN': '概述',
                  link: '/manual/modules/ui/actions',
                },
                '/manual/modules/ui/actions/add-new',
                '/manual/modules/ui/actions/view',
                '/manual/modules/ui/actions/edit',
                '/manual/modules/ui/actions/delete',
                '/manual/modules/ui/actions/filter',
                '/manual/modules/ui/actions/submit',
                '/manual/modules/ui/actions/add-record',
                '/manual/modules/ui/actions/update-record',
                '/manual/modules/ui/actions/save-record',
                '/manual/modules/ui/actions/open-popup',
                '/manual/modules/ui/actions/custom-request',
                '/manual/modules/ui/actions/duplicate',
                '/manual/modules/ui/actions/import',
                '/manual/modules/ui/actions/import',
                '/manual/modules/ui/actions/print',
                '/manual/modules/ui/actions/refresh',
                '/manual/modules/ui/actions/submit-to-workflow',
              ],
            },
          ],
        },
        {
          title: 'Collection templates',
          'title.zh-CN': '数据表模板',
          children: [
            {
              title: 'Overview',
              'title.zh-CN': '概述',
              link: '/manual/modules/collection-templates',
            },
            {
              title: 'General collection',
              'title.zh-CN': '普通数据表',
              link: '/manual/modules/collection-templates/general',
            },
            {
              title: 'Tree collection',
              'title.zh-CN': '树表',
              link: '/manual/modules/collection-templates/tree',
            },
            {
              title: 'Calender collection',
              'title.zh-CN': '日历表',
              link: '/manual/modules/collection-templates/calender',
            },
            {
              title: 'File collection',
              'title.zh-CN': '文件表',
              link: '/manual/modules/collection-templates/file',
            },
            {
              title: 'Expression collection',
              'title.zh-CN': '表达式表',
              link: '/manual/modules/collection-templates/expression',
            },
            {
              title: 'Sql collection',
              'title.zh-CN': 'Sql表',
              link: '/manual/modules/collection-templates/sql',
            },
            {
              title: 'View collection',
              'title.zh-CN': '连接数据库视图',
              link: '/manual/modules/collection-templates/view',
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
      type: 'group',
      children: [
        '/development',
        '/development/your-fisrt-plugin',
        // '/development/app-ds',
        // '/development/plugin-ds',
        '/development/life-cycle',
        // '/development/learning-guide',
      ],
    },
    {
      title: 'Server',
      'title.zh-CN': '服务端',
      type: 'group',
      children: [
        '/development/server',
        {
          title: 'Collections & Fields',
          'title.zh-CN': '数据表和字段',
          children: [
            '/development/server/collections',
            '/development/server/collections/options',
            '/development/server/collections/configure',
            '/development/server/collections/association-fields',
            '/development/server/collections/field-extension',
            '/development/server/collections/collection-template',
          ],
        },
        // {
        //   title: 'Resources & Actions',
        //   'title.zh-CN': '资源和操作',
        //   children: [
        //     '/development/server/resources-actions',
        //     '/development/server/resources-actions/configuration',
        //     // '/development/server/resources-actions/to-resource',
        //     '/development/server/resources-actions/vs-router',
        //   ],
        // },
        '/development/server/resources-actions',
        // '/development/server/routing',
        '/development/server/middleware',
        '/development/server/commands',
        '/development/server/events',
        '/development/server/i18n',
        '/development/server/logger',
        '/development/server/telemetry',
        '/development/server/migration',
        '/development/server/test',
      ],
    },
    {
      title: 'Client',
      'title.zh-CN': '客户端',
      type: 'group',
      children: [
        '/development/client',
        // '/development/client/life-cycle',
        '/development/client/router',
        '/development/client/styles-and-themes',
        '/development/client/api-client',
        '/development/client/providers',
        {
          title: 'UI Schema',
          'title.zh-CN': 'UI Schema',
          children: [
            '/development/client/ui-schema/quick-start',
            '/development/client/ui-schema/what-is-ui-schema',
            '/development/client/ui-schema/rendering',
            '/development/client/ui-schema/extending',
            '/development/client/ui-schema/components',
            '/development/client/ui-schema/designable',
            '/development/client/ui-schema/toolbar',
            '/development/client/ui-schema/initializer',
            '/development/client/ui-schema/settings',
          ],
        },
        '/development/client/i18n',
        '/development/client/test',
      ],
    },
    {
      title: 'Others',
      'title.zh-CN': '其他',
      type: 'group',
      children: [
        '/development/others/build',
        '/development/others/languages',
        '/development/others/deps',
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
          children: [
            {
              title: 'Overview',
              'title.zh-CN': '概述',
              link: '/plugins/acl',
            },
            '/plugins/acl/user',
          ],
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
          title: 'Audit logs',
          'title.zh-CN': '审计日志',
          subTitle: '@nocobase/plugin-audit-logs',
          link: '/plugins/audit-logs',
        },
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
          title: 'Backup & Restore',
          'title.zh-CN': '备份和还原',
          subTitle: '@nocobase/plugin-backup-restore',
          link: '/plugins/backup-restore',
        },
        {
          title: 'China region',
          'title.zh-CN': '中国行政区',
          subTitle: '@nocobase/plugin-china-region',
          link: '/plugins/china-region',
        },
        {
          title: 'Client - Web',
          'title.zh-CN': '客户端 - Web',
          subTitle: '@nocobase/plugin-client',
          children: [
            {
              title: 'Overview',
              'title.zh-CN': '概述',
              link: '/plugins/client',
            },
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
                    {
                      title: 'Blocks',
                      'title.zh-CN': '区块',
                      children: [
                        {
                          title: 'Overview',
                          'title.zh-CN': '概述',
                          link: '/plugins/client/user/ui-designer/blocks',
                        },
                      ],
                    },
                    {
                      title: 'Fields',
                      'title.zh-CN': '字段',
                      children: [
                        {
                          title: 'Overview',
                          'title.zh-CN': '概述',
                          link: '/plugins/client/user/ui-designer/fields',
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
                          link: '/plugins/client/user/ui-designer/actions',
                        },
                        '/plugins/client/user/ui-designer/actions/add-new',
                        '/plugins/client/user/ui-designer/actions/view',
                        '/plugins/client/user/ui-designer/actions/edit',
                        '/plugins/client/user/ui-designer/actions/delete',
                        '/plugins/client/user/ui-designer/actions/filter',
                        '/plugins/client/user/ui-designer/actions/submit',
                        '/plugins/client/user/ui-designer/actions/add-record',
                        '/plugins/client/user/ui-designer/actions/update-record',
                        '/plugins/client/user/ui-designer/actions/save-record',
                        '/plugins/client/user/ui-designer/actions/open-popup',
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          title: 'Client - Mobile',
          'title.zh-CN': '客户端 - 移动端',
          subTitle: '@nocobase/plugin-mobile-client',
          link: '/plugins/mobile-client',
        },
        {
          title: 'Connect to foreign data',
          'title.zh-CN': '连接外部数据',
          subTitle: '@nocobase/plugin-collection-fdw',
          link: '/plugins/collection-fdw',
        },
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
            {
              title: 'User manual',
              'title.zh-CN': '使用手册',
              children: [
                {
                  title: 'Overview',
                  'title.zh-CN': '概述',
                  link: '/plugins/collection-manager/user',
                },
                {
                  title: 'Collection templates',
                  'title.zh-CN': '数据表模板',
                  children: [
                    {
                      title: 'General collection',
                      'title.zh-CN': '普通数据表',
                      link: '/plugins/collection-manager/user/collection-templates/general',
                    },
                    {
                      title: 'Tree collection',
                      'title.zh-CN': '树表',
                      link: '/plugins/collection-manager/user/collection-templates/tree',
                    },
                    {
                      title: 'Calender collection',
                      'title.zh-CN': '日历表',
                      link: '/plugins/collection-manager/user/collection-templates/calender',
                    },
                    {
                      title: 'File collection',
                      'title.zh-CN': '文件表',
                      link: '/plugins/collection-manager/user/collection-templates/file',
                    },
                    {
                      title: 'Expression collection',
                      'title.zh-CN': '表达式表',
                      link: '/plugins/collection-manager/user/collection-templates/expression',
                    },
                    {
                      title: 'SQL collection',
                      'title.zh-CN': 'SQL 表',
                      link: '/plugins/collection-manager/user/collection-templates/sql',
                    },
                    {
                      title: 'View collection',
                      'title.zh-CN': '连接数据库视图',
                      link: '/plugins/collection-manager/user/collection-templates/view',
                    },
                  ],
                },
                {
                  title: 'Field interfaces',
                  'title.zh-CN': '数据表字段',
                  link: '/plugins/collection-manager/user/field-interfaces',
                },
                {
                  title: 'Association field components',
                  'title.zh-CN': '关系字段组件',
                  children: [
                    {
                      title: 'Cascade select',
                      'title.zh-CN': '级联选择器',
                      link: '/plugins/collection-manager/user/association-fields/cascade-select',
                    },
                    {
                      title: 'File manager',
                      'title.zh-CN': '文件管理器',
                      link: '/plugins/collection-manager/user/association-fields/file-manager',
                    },
                    {
                      title: 'Record picker',
                      'title.zh-CN': '数据选择器',
                      link: '/plugins/collection-manager/user/association-fields/record-picker',
                    },
                    {
                      title: 'Select',
                      'title.zh-CN': '下拉选择器',
                      link: '/plugins/collection-manager/user/association-fields/select',
                    },
                    {
                      title: 'Sub detail',
                      'title.zh-CN': '子详情',
                      link: '/plugins/collection-manager/user/association-fields/sub-detail',
                    },
                    {
                      title: 'Sub form',
                      'title.zh-CN': '子表单',
                      link: '/plugins/collection-manager/user/association-fields/sub-form',
                    },
                    {
                      title: 'Sub-form(popover)',
                      'title.zh-CN': '子表单（弹窗）',
                      link: '/plugins/collection-manager/user/association-fields/sub-form(popover)',
                    },
                    {
                      title: 'Sub table',
                      'title.zh-CN': '子表格',
                      link: '/plugins/collection-manager/user/association-fields/sub-table',
                    },
                    {
                      title: 'Tag',
                      'title.zh-CN': '标签',
                      link: '/plugins/collection-manager/user/association-fields/tag',
                    },
                    {
                      title: 'Title',
                      'title.zh-CN': '标题',
                      link: '/plugins/collection-manager/user/association-fields/title',
                    },
                    {
                      title: 'Usage Summary',
                      'title.zh-CN': '使用总结',
                      link: '/plugins/collection-manager/user/association-fields/summary',
                    },
                  ],
                },
              ],
            },
          ],
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
          title: 'File manager',
          'title.zh-CN': '文件管理器',
          subTitle: '@nocobase/plugin-file-manager',
          link: '/plugins/file-manager',
          // children: ['/plugins/file-manager', '/plugins/file-manager/user'],
        },
        {
          title: 'Formula field',
          'title.zh-CN': '计算公式字段',
          subTitle: '@nocobase/plugin-formula-field',
          link: '/plugins/formula-field',
        },
        {
          title: 'Gantt block',
          'title.zh-CN': '甘特图区块',
          subTitle: '@nocobase/plugin-gantt',
          link: '/plugins/gantt',
          // children: ['/plugins/gantt-block', '/plugins/gantt-block/user'],
        },
        {
          title: 'Graph collection manager',
          'title.zh-CN': '可视化数据表管理',
          subTitle: '@nocobase/plugin-graph-collection-manager',
          link: '/plugins/graph-collection-manager',
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
          title: 'Localization management',
          'title.zh-CN': '本地化管理',
          subTitle: '@nocobase/plugin-localization-management',
          link: '/plugins/localization-management',
        },
        {
          title: 'Map',
          'title.zh-CN': '地图',
          subTitle: '@nocobase/plugin-map',
          link: '/plugins/map',
        },
        {
          title: 'Multi-app manager',
          'title.zh-CN': '多应用管理',
          subTitle: '@nocobase/plugin-multi-app-manager',
          link: '/plugins/multi-app-manager',
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
          title: 'System settings',
          'title.zh-CN': '系统设置',
          subTitle: '@nocobase/plugin-system-settings',
          link: '/plugins/system-settings',
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
        {
          title: 'Theme editor',
          'title.zh-CN': '主题编辑器',
          subTitle: '@nocobase/plugin-theme-editor',
          link: '/plugins/theme-editor',
        },
        {
          title: 'UI schema storage',
          'title.zh-CN': 'UI schema 存储',
          subTitle: '@nocobase/plugin-ui-schema-storage',
          link: '/plugins/ui-schema-storage',
        },
        {
          title: 'Users',
          'title.zh-CN': '用户',
          subTitle: '@nocobase/plugin-users',
          link: '/plugins/users',
        },
        {
          title: 'Verification',
          'title.zh-CN': '验证码',
          subTitle: '@nocobase/plugin-verification',
          link: '/plugins/verification',
        },
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
                    '/plugins/workflow/manual/triggers/form',
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
                    '/plugins/workflow/manual/nodes/loop',
                    '/plugins/workflow/manual/nodes/calculation',
                    '/plugins/workflow/manual/nodes/parallel',
                    '/plugins/workflow/manual/nodes/delay',
                    '/plugins/workflow/manual/nodes/create',
                    '/plugins/workflow/manual/nodes/update',
                    '/plugins/workflow/manual/nodes/destroy',
                    '/plugins/workflow/manual/nodes/query',
                    '/plugins/workflow/manual/nodes/aggregate',
                    '/plugins/workflow/manual/nodes/sql',
                    '/plugins/workflow/manual/nodes/manual',
                    '/plugins/workflow/manual/nodes/request',
                    '/plugins/workflow/manual/nodes/dynamic-calculation',
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
          'title.zh-CN': 'Workflow - Aggregate',
          subTitle: '@nocobase/plugin-workflow-aggregate',
          link: '/plugins/workflow-aggregate',
        },
        {
          title: 'Workflow - Approval',
          'title.zh-CN': 'Workflow - Approval',
          subTitle: '@nocobase/plugin-workflow-approval',
          link: '/plugins/workflow-approval',
        },
        {
          title: 'Workflow - Delay',
          'title.zh-CN': 'Workflow - Delay',
          subTitle: '@nocobase/plugin-workflow-delay',
          link: '/plugins/workflow-delay',
        },
        {
          title: 'Workflow - Dynamic calculation',
          'title.zh-CN': 'Workflow - Dynamic calculation',
          subTitle: '@nocobase/plugin-workflow-dynamic-calculation',
          link: '/plugins/workflow-dynamic-calculation',
        },
        {
          title: 'Workflow - Form trigger',
          'title.zh-CN': 'Workflow - Form trigger',
          subTitle: '@nocobase/plugin-workflow-form-trigger',
          link: '/plugins/workflow-form-trigger',
        },
        {
          title: 'Workflow - JSON query',
          'title.zh-CN': 'Workflow - JSON query',
          subTitle: '@nocobase/plugin-workflow-json-query',
          link: '/plugins/workflow-json-query',
        },
        {
          title: 'Workflow - Loop',
          'title.zh-CN': 'Workflow - Loop',
          subTitle: '@nocobase/plugin-workflow-loop',
          link: '/plugins/workflow-loop',
        },
        {
          title: 'Workflow - Manual',
          'title.zh-CN': 'Workflow - Manual',
          subTitle: '@nocobase/plugin-workflow-manual',
          link: '/plugins/workflow-manual',
        },
        {
          title: 'Workflow - Parallel',
          'title.zh-CN': 'Workflow - Parallel',
          subTitle: '@nocobase/plugin-workflow-parallel',
          link: '/plugins/workflow-parallel',
        },
        {
          title: 'Workflow - Request',
          'title.zh-CN': 'Workflow - Request',
          subTitle: '@nocobase/plugin-workflow-request',
          link: '/plugins/workflow-request',
        },
        {
          title: 'Workflow - SQL',
          'title.zh-CN': 'Workflow - SQL',
          subTitle: '@nocobase/plugin-workflow-sql',
          link: '/plugins/workflow-sql',
        },
      ],
    },
  ],
  '/api': [
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
  ],
  '/breaking-changes': [
    {
      title: 'Breaking changes',
      'title.zh-CN': '不兼容变更',
      type: 'group',
      children: [
        '/breaking-changes/v0-18-0-alpha-1',
        '/breaking-changes/v0-17-0-alpha-5',
        '/breaking-changes/v0-17-0-alpha-3',
        '/breaking-changes/v0-17-0-alpha-1',
      ],
    },
  ],
};

export { nav, sidebar };
