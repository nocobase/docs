export default [
  {
    title: 'Guide',
    'title.zh-CN': '指南',
    link: '/handbook',
  },
  {
    title: 'Data modeling',
    'title.zh-CN': '数据建模',
    type: 'group',
    children: [
      {
        title: 'Overview',
        'title.zh-CN': '概述',
        link: '/handbook/data-modeling',
      },
      {
        title: 'Data sources',
        'title.zh-CN': '数据源',
        children: [
          {
            title: 'Data source manager',
            'title.zh-CN': '数据源管理',
            link: '/handbook/data-source-manager',
          },
          {
            title: 'Main database',
            'title.zh-CN': '主数据库',
            // subTitle: '@nocobase/plugin-collection-manager',
            link: '/handbook/data-source-main',
          },
          {
            title: 'External database',
            'title.zh-CN': '外部数据库',
            children: [
              {
                title: 'Overview',
                'title.zh-CN': '介绍',
                link: '/handbook/data-source-manager/external-database',
              },
              {
                title: 'External MySQL',
                'title.zh-CN': '外部 MySQL',
                // subTitle: '@nocobase/plugin-data-source-external-mysql',
                link: '/handbook/data-source-external-mysql',
              },
              {
                title: 'External MariaDB',
                'title.zh-CN': '外部 MariaDB',
                // subTitle: '@nocobase/plugin-data-source-external-mariadb',
                link: '/handbook/data-source-external-mariadb',
              },
              {
                title: 'External PostgreSQL',
                'title.zh-CN': '外部 PostgreSQL',
                // subTitle: '@nocobase/plugin-data-source-external-postgres',
                link: '/handbook/data-source-external-postgres',
              },
            ],
          },
          {
            title: 'HTTP API Data source',
            'title.zh-CN': 'HTTP API 数据源',
            // subTitle: '@nocobase/plugin-data-source-external-postgres',
            link: '/handbook/data-source-http-api',
          },
          {
            title: 'ER diagram-like tool',
            'title.zh-CN': '类 ER 工具',
            // subTitle: '@nocobase/plugin-graph-collection-manager',
            link: '/handbook/graph-collection-manager',
          },
        ],
      },
      // {
      //   title: 'Data sources',
      //   'title.zh-CN': '数据源',
      //   children: [
      //     {
      //       title: 'Overview',
      //       'title.zh-CN': '概述',
      //       link: '/handbook/data-modeling/data-source',
      //     },
      //     {
      //       title: 'Overview',
      //       'title.zh-CN': '数据源管理',
      //       link: '/handbook/data-modeling/data-source',
      //     },
      //     {
      //       title: 'Main database',
      //       'title.zh-CN': '主数据库',
      //       // subTitle: '@nocobase/plugin-collection-manager',
      //       link: '/handbook/data-source-main',
      //     },
      //     {
      //       title: 'External database',
      //       'title.zh-CN': '外部数据库',
      //       children: [
      //         {
      //           title: 'External MySQL',
      //           'title.zh-CN': '外部数据源：MySQL',
      //           // subTitle: '@nocobase/plugin-data-source-external-mysql',
      //           link: '/handbook/data-source-external-mysql',
      //         },
      //         {
      //           title: 'External MariaDB',
      //           'title.zh-CN': '外部数据源：MariaDB',
      //           // subTitle: '@nocobase/plugin-data-source-external-mariadb',
      //           link: '/handbook/data-source-external-mariadb',
      //         },
      //         {
      //           title: 'External PostgreSQL',
      //           'title.zh-CN': '外部数据源：PostgreSQL',
      //           // subTitle: '@nocobase/plugin-data-source-external-postgres',
      //           link: '/handbook/data-source-external-postgres',
      //         },
      //       ],
      //     },
      //     {
      //       title: 'External：HTTP API',
      //       'title.zh-CN': '外部数据源：HTTP API',
      //       // subTitle: '@nocobase/plugin-data-source-external-postgres',
      //       link: '/handbook/data-source-http-api',
      //     },
      //   ],
      // },
      {
        title: 'Collections',
        'title.zh-CN': '数据表',
        children: [
          {
            title: 'Overview',
            'title.zh-CN': '概述',
            link: '/handbook/data-modeling/collection',
          },
          {
            title: 'General collection',
            'title.zh-CN': '普通表',
            link: '/handbook/data-source-main/general-collection',
          },
          {
            title: 'Inheritance collection',
            'title.zh-CN': '继承表',
            link: '/handbook/data-source-main/inheritance-collection',
          },
          {
            title: 'File collection',
            'title.zh-CN': '文件表',
            link: '/handbook/file-manager/file-collection',
          },
          {
            title: 'Tree collection',
            'title.zh-CN': '树表',
            link: '/handbook/collection-tree',
          },
          {
            title: 'Calendar collection',
            'title.zh-CN': '日历表',
            link: '/handbook/calendar/calendar-collection',
          },
          {
            title: 'Expression collection',
            'title.zh-CN': '表达式表',
            link: '/handbook/workflow/plugins/dynamic-calculation/collection',
          },
          {
            title: 'SQL collection',
            'title.zh-CN': 'SQL 表',
            link: '/handbook/collection-sql',
          },
          {
            title: 'View collection',
            'title.zh-CN': '数据库视图',
            link: '/handbook/collection-view',
          },
          {
            title: 'Foreign data collection（FDW）',
            'title.zh-CN': '外部数据表',
            link: '/handbook/collection-fdw',
          },
        ],
      },
      {
        title: 'Collection fields',
        'title.zh-CN': '数据表字段',
        children: [
          {
            title: 'Overview',
            'title.zh-CN': '概述',
            // subTitle: '@nocobase/plugin-data-source-external-mariadb',
            link: '/handbook/data-modeling/collection-fields',
          },
          {
            title: 'Basic',
            'title.zh-CN': '基本类型',
            children: [
              {
                title: 'Single text',
                'title.zh-CN': '单行文本',
                link: '/handbook/data-modeling/collection-fields/basic/input',
              },
              {
                title: 'Long text',
                'title.zh-CN': '多行文本',
                link: '/handbook/data-modeling/collection-fields/basic/textarea',
              },
              {
                title: 'Phone',
                'title.zh-CN': '手机号码',
                link: '/handbook/data-modeling/collection-fields/basic/phone',
              },
              {
                title: 'Email',
                'title.zh-CN': '电子邮箱',
                link: '/handbook/data-modeling/collection-fields/basic/email',
              },
              {
                title: 'URL',
                'title.zh-CN': 'URL',
                link: '/handbook/data-modeling/collection-fields/basic/url',
              },
              {
                title: 'Integer',
                'title.zh-CN': '整数',
                link: '/handbook/data-modeling/collection-fields/basic/integer',
              },
              {
                title: 'Number',
                'title.zh-CN': '数字',
                link: '/handbook/data-modeling/collection-fields/basic/number',
              },
              {
                title: 'Percent',
                'title.zh-CN': '百分比',
                link: '/handbook/data-modeling/collection-fields/basic/percent',
              },
              {
                title: 'Password',
                'title.zh-CN': '密码',
                link: '/handbook/data-modeling/collection-fields/basic/password',
              },
              {
                title: 'Color',
                'title.zh-CN': '颜色',
                link: '/handbook/data-modeling/collection-fields/basic/color',
              },
              {
                title: 'Icon',
                'title.zh-CN': '图标',
                link: '/handbook/data-modeling/collection-fields/basic/icon',
              },
            ],
          },
          {
            title: 'Choices',
            'title.zh-CN': '选择类型',
            children: [
              {
                title: 'Checkbox',
                'title.zh-CN': '勾选',
                link: '/handbook/data-modeling/collection-fields/choices/checkbox',
              },
              {
                title: 'Single select',
                'title.zh-CN': '下拉菜单（单选）',
                link: '/handbook/data-modeling/collection-fields/choices/select',
              },
              {
                title: 'Multiple select',
                'title.zh-CN': '下拉菜单（多选）',
                link: '/handbook/data-modeling/collection-fields/choices/multiple-select',
              },
              {
                title: 'Radio group',
                'title.zh-CN': '单选框',
                link: '/handbook/data-modeling/collection-fields/choices/radio-group',
              },
              {
                title: 'Checkbox group',
                'title.zh-CN': '复选框',
                link: '/handbook/data-modeling/collection-fields/choices/checkbox-group',
              },
              {
                title: 'China region',
                'title.zh-CN': '中国行政区',
                link: '/handbook/field-china-region',
              },
            ],
          },
          {
            title: 'Media',
            'title.zh-CN': '多媒体',
            children: [
              {
                title: 'Markdown',
                'title.zh-CN': 'Markdown',
                link: '/handbook/data-modeling/collection-fields/media/markdown',
              },
              {
                title: 'Markdown(Vditor)',
                'title.zh-CN': 'Markdown(Vditor)',
                link: '/handbook/field-markdown-vditor',
              },
              {
                title: 'Rich text',
                'title.zh-CN': '富文本',
                link: '/handbook/data-modeling/collection-fields/media/rich-text',
              },
              {
                title: 'Attachment',
                'title.zh-CN': '附件',
                link: '/handbook/file-manager/field-attachment',
              },
            ],
          },
          {
            title: 'Date & Time',
            'title.zh-CN': '日期 & 时间',
            children: [
              {
                title: 'Datetime',
                'title.zh-CN': '日期',
                link: '/handbook/data-modeling/collection-fields/datetime/datetime',
              },
              {
                title: 'Unix timestamp',
                'title.zh-CN': 'Unix 时间戳',
                link: '/handbook/data-modeling/collection-fields/datetime/unix-timestamp',
              },
              {
                title: 'Time',
                'title.zh-CN': '时间',
                link: '/handbook/data-modeling/collection-fields/datetime/time',
              },
            ],
          },
          {
            title: 'Geometric',
            'title.zh-CN': '几何图形',
            children: [
              {
                title: 'Point',
                'title.zh-CN': '点',
                link: '/handbook/data-modeling/collection-fields/geometric/point',
              },
              {
                title: 'Line',
                'title.zh-CN': '线',
                link: '/handbook/data-modeling/collection-fields/geometric/line',
              },
              {
                title: 'Circle',
                'title.zh-CN': '圆',
                link: '/handbook/data-modeling/collection-fields/geometric/circle',
              },
              {
                title: 'Polygon',
                'title.zh-CN': '多边形',
                link: '/handbook/data-modeling/collection-fields/geometric/polygon',
              },
            ],
          },
          {
            title: 'Advanced',
            'title.zh-CN': '高级类型',
            children: [
              {
                title: 'UUID',
                'title.zh-CN': 'UUID',
                link: '/handbook/data-modeling/collection-fields/advanced/uuid',
              },
              {
                title: 'Nano ID',
                'title.zh-CN': 'Nano ID',
                link: '/handbook/data-modeling/collection-fields/advanced/nano-id',
              },
              {
                title: 'Sort',
                'title.zh-CN': '排序',
                link: '/handbook/field-sort',
              },
              {
                title: 'Formula',
                'title.zh-CN': '计算公式',
                link: '/handbook/field-formula',
              },
              {
                title: 'Sequence',
                'title.zh-CN': '自动编码',
                link: '/handbook/field-sequence',
              },
              {
                title: 'JSON',
                'title.zh-CN': 'JSON',
                link: '/handbook/data-modeling/collection-fields/advanced/json',
              },
              {
                title: 'Collection 选择器',
                'title.zh-CN': '数据表选择器',
                link: '/handbook/data-modeling/collection-fields/advanced/collection-select',
              },
            ],
          },
          {
            title: 'System info',
            'title.zh-CN': '系统信息',
            children: [
              {
                title: 'Created at',
                'title.zh-CN': '创建日期',
                link: '/handbook/data-modeling/collection-fields/system-info/created-at',
              },
              {
                title: 'Last updated at',
                'title.zh-CN': '最后修改日期',
                link: '/handbook/data-modeling/collection-fields/system-info/updated-at',
              },
              {
                title: 'Created by',
                'title.zh-CN': '创建人',
                link: '/handbook/users/field-created-by',
              },
              {
                title: 'Last updated by',
                'title.zh-CN': '最后修改人',
                link: '/handbook/users/field-updated-by',
              },
              {
                title: 'Table OID',
                'title.zh-CN': 'Table OID',
                link: '/handbook/data-modeling/collection-fields/system-info/table-oid',
              },
            ],
          },
          {
            title: 'Association',
            'title.zh-CN': '关系类型',
            children: [
              {
                title: 'Overview',
                'title.zh-CN': '概述',
                link: '/handbook/data-modeling/collection-fields/associations',
              },
              {
                title: 'One-to-one',
                'title.zh-CN': '一对一',
                link: '/handbook/data-modeling/collection-fields/associations/o2o',
              },
              {
                title: 'One-to-many',
                'title.zh-CN': '一对多',
                link: '/handbook/data-modeling/collection-fields/associations/o2m',
              },
              {
                title: 'Many-to-one',
                'title.zh-CN': '多对一',
                link: '/handbook/data-modeling/collection-fields/associations/m2o',
              },
              {
                title: 'Many-to-many',
                'title.zh-CN': '多对多',
                link: '/handbook/data-modeling/collection-fields/associations/m2m',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: 'Edit UI',
    'title.zh-CN': '配置界面',
    type: 'group',
    children: [
      {
        title: 'UI Editor mode',
        'title.zh-CN': '界面配置模式',
        link: '/handbook/ui/ui-editor',
      },
      {
        title: 'Menu',
        'title.zh-CN': '菜单',
        link: '/handbook/ui/menus',
      },
      {
        title: 'Page',
        'title.zh-CN': '页面',
        link: '/handbook/ui/pages',
      },
      {
        title: 'Pop-up',
        'title.zh-CN': '弹窗',
        link: '/handbook/ui/pop-up',
      },
      {
        title: 'Blocks',
        'title.zh-CN': '区块',
        children: [
          {
            title: 'Overview',
            'title.zh-CN': '概述',
            link: '/handbook/ui/blocks',
          },
          {
            title: 'Data blocks',
            'title.zh-CN': '数据区块',
            children: [
              {
                title: 'Table',
                'title.zh-CN': '表格',
                link: '/handbook/ui/blocks/data-blocks/table',
              },
              {
                title: 'Form',
                'title.zh-CN': '表单',
                link: '/handbook/ui/blocks/data-blocks/form',
              },
              {
                title: 'Details',
                'title.zh-CN': '详情',
                link: '/handbook/ui/blocks/data-blocks/details',
              },
              {
                title: 'List',
                'title.zh-CN': '列表',
                link: '/handbook/ui/blocks/data-blocks/list',
              },
              {
                title: 'Grid card',
                'title.zh-CN': '网格卡片',
                link: '/handbook/ui/blocks/data-blocks/grid-card',
              },
              {
                title: 'Calendar',
                'title.zh-CN': '日历',
                link: '/handbook/calendar',
              },
              {
                title: 'Gantt',
                'title.zh-CN': '甘特图',
                link: '/handbook/block-gantt',
              },
              {
                title: 'Kanban',
                'title.zh-CN': '看板',
                link: '/handbook/block-kanban',
              },
              {
                title: 'Map',
                'title.zh-CN': '地图',
                link: '/handbook/block-map',
              },
              {
                title: 'Charts',
                'title.zh-CN': '图表',
                link: '/handbook/data-visualization/',
              },
            ],
          },
          {
            title: 'Filter blocks',
            'title.zh-CN': '筛选区块',
            children: [
              {
                title: 'Form',
                'title.zh-CN': '表单',
                link: '/handbook/ui/blocks/filter-blocks/form',
              },
              {
                title: 'Collapse',
                'title.zh-CN': '折叠面板',
                link: '/handbook/ui/blocks/filter-blocks/collapse',
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
                link: '/handbook/ui/blocks/other-blocks/markdown',
              },
              {
                title: 'iframe',
                'title.zh-CN': 'iframe',
                link: '/handbook/block-iframe',
              },
              {
                title: 'Workflow todos',
                'title.zh-CN': '工作流待办',
                link: '/handbook/workflow/manual/nodes/manual/workflow-todos-block',
              },
              {
                title: 'Workflow todos',
                'title.zh-CN': '审批',
                link: '/handbook/workflow-approval',
              },
              {
                title: 'Audit logs',
                'title.zh-CN': '审计日志',
                link: '/handbook/audit-logs',
              },
            ],
          },
          {
            title: 'Block templates',
            'title.zh-CN': '区块模板',
            link: '/handbook/ui/blocks/block-templates',
          },
          {
            title: 'Block settings',
            'title.zh-CN': '区块设置项',
            children: [
              {
                title: 'Set the data scope',
                'title.zh-CN': '设置数据范围',
                link: '/handbook/ui/blocks/block-settings/data-scope',
              },
              {
                title: 'Set default sorting rules',
                'title.zh-CN': '设置排序规则',
                link: '/handbook/ui/blocks/block-settings/sorting-rule',
              },
              {
                title: 'Set data loading mode',
                'title.zh-CN': '设置数据加载方式',
                link: '/handbook/ui/blocks/block-settings/loading-mode',
              },
              {
                title: 'Connect data blocks',
                'title.zh-CN': '连接数据区块',
                link: '/handbook/ui/blocks/block-settings/connect-block',
              },
              {
                title: 'Save as template',
                'title.zh-CN': '保存为区块模板',
                link: '/handbook/ui/blocks/block-settings/block-template',
              },
              {
                title: 'Linkage rules',
                'title.zh-CN': '联动规则',
                link: '/handbook/ui/blocks/block-settings/linkage-rule',
              },
              {
                title: 'Edit block title',
                'title.zh-CN': '编辑区块标题',
                link: '/handbook/ui/blocks/block-settings/block-title',
              },
              {
                title: 'Set block height',
                'title.zh-CN': '设置区块高度',
                link: '/handbook/ui/blocks/block-settings/block-height',
              },
              {
                title: 'Delete',
                'title.zh-CN': '删除区块',
                link: '/handbook/ui/blocks/block-settings/block-delete',
              },
            ],
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
            link: '/handbook/ui/fields',
          },
          {
            title: 'Common ettings',
            'title.zh-CN': '通用配置项',
            children: [
              {
                title: 'Table column',
                'title.zh-CN': '表格字段',
                link: '/handbook/ui/fields/generic/table-column',
              },
              {
                title: 'Form',
                'title.zh-CN': '表单字段',
                link: '/handbook/ui/fields/generic/form-item',
              },
              {
                title: 'Detail',
                'title.zh-CN': '详情字段',
                link: '/handbook/ui/fields/generic/detail-form-item',
              },
              {
                title: 'Bulk edit form',
                'title.zh-CN': '批量编辑表单',
                link: '/handbook/ui/fields/generic/bulk-edit-form-item',
              },
              {
                title: 'Filter form',
                'title.zh-CN': '筛选表单',
                link: '/handbook/ui/fields/generic/filter-form-item',
              },
              {
                title: 'Collapse',
                'title.zh-CN': '折叠面板',
                link: '/handbook/ui/fields/generic/filter-collapse-item',
              },
            ],
          },
          {
            title: 'Specific settings',
            'title.zh-CN': '特有配置项',
            children: [
              {
                title: 'Date picker',
                'title.zh-CN': '时间日期',
                link: '/handbook/ui/fields/specific/date-picker',
              },
              {
                title: 'Cascade select',
                'title.zh-CN': '级联选择',
                link: '/handbook/ui/fields/specific/cascade-select',
              },
              {
                title: 'Nester',
                'title.zh-CN': '子表单',
                link: '/handbook/ui/fields/specific/nester',
              },
              {
                title: 'Popover nester',
                'title.zh-CN': '子表单（弹窗）',
                link: '/handbook/ui/fields/specific/popover-nester',
              },
              {
                title: 'Select',
                'title.zh-CN': '选择器',
                link: '/handbook/ui/fields/specific/select',
              },
              {
                title: 'Record picker',
                'title.zh-CN': '数据选择器',
                link: '/handbook/ui/fields/specific/picker',
              },
              {
                title: 'Sub table',
                'title.zh-CN': '子表格',
                link: '/handbook/ui/fields/specific/sub-table',
              },
              {
                title: 'Title',
                'title.zh-CN': '标题',
                link: '/handbook/ui/fields/specific/title',
              },
              {
                title: 'Tag',
                'title.zh-CN': '标签',
                link: '/handbook/ui/fields/specific/tag',
              },
              {
                title: 'File manager',
                'title.zh-CN': '文件管理器',
                link: '/handbook/ui/fields/specific/file-manager',
              },
            ],
          },
          {
            title: 'Field Settings',
            'title.zh-CN': '字段配置项',
            children: [
              {
                title: 'Required',
                'title.zh-CN': '必填',
                link: '/handbook/ui/fields/field-settings/required',
              },
              {
                title: 'Set default value',
                'title.zh-CN': '默认值',
                link: '/handbook/ui/fields/field-settings/default-value',
              },
              {
                title: 'Set validation rules',
                'title.zh-CN': '验证规则',
                link: '/handbook/ui/fields/field-settings/validation-rules',
              },
              {
                title: 'Format',
                'title.zh-CN': '数值格式化',
                link: '/handbook/ui/fields/field-settings/number-format',
              },
              {
                title: 'Data scope',
                'title.zh-CN': '设置数据范围',
                link: '/handbook/ui/fields/field-settings/data-scope',
              },
              {
                title: 'Title field',
                'title.zh-CN': '标题字段',
                link: '/handbook/ui/fields/field-settings/title-field',
              },
              {
                title: 'Pattern',
                'title.zh-CN': '显示模式',
                link: '/handbook/ui/fields/field-settings/pattern',
              },
              {
                title: 'Edit field title',
                'title.zh-CN': '编辑字段标题',
                link: '/handbook/ui/fields/field-settings/edit-title',
              },
              {
                title: 'Display title',
                'title.zh-CN': '显示标题',
                link: '/handbook/ui/fields/field-settings/display-title',
              },
              {
                title: 'Edit description',
                'title.zh-CN': '编辑描述',
                link: '/handbook/ui/fields/field-settings/edit-description',
              },
              {
                title: 'Edit tooltip',
                'title.zh-CN': '编辑提示信息',
                link: '/handbook/ui/fields/field-settings/edit-tooltip',
              },
            ],
          },
          {
            title: 'Asscoation field component',
            'title.zh-CN': '关系字段组件',
            link: '/handbook/ui/fields/association-field',
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
            link: '/handbook/ui/actions',
          },
          {
            title: 'Common settings',
            'title.zh-CN': '通用配置项',
            children: [
              {
                title: 'Linkage',
                'title.zh-CN': '联动规则',
                link: '/handbook/ui/actions/action-settings/linkage-rule',
              },
              {
                title: 'Open mode',
                'title.zh-CN': '打开方式',
                link: '/handbook/ui/actions/action-settings/open-mode',
              },
              {
                title: 'Popup size',
                'title.zh-CN': '弹窗尺寸',
                link: '/handbook/ui/actions/action-settings/popup-size',
              },
              {
                title: 'Second confirmation',
                'title.zh-CN': '二次确认',
                link: '/handbook/ui/actions/action-settings/double-check',
              },
              {
                title: 'Bind workflows',
                'title.zh-CN': '绑定工作流',
                link: '/handbook/ui/actions/action-settings/bind-workflow',
              },
              {
                title: 'Assign field values',
                'title.zh-CN': '字段赋值',
                link: '/handbook/ui/actions/action-settings/assign-values',
              },
              {
                title: 'Edit button',
                'title.zh-CN': '编辑按钮',
                link: '/handbook/ui/actions/action-settings/edit-button',
              },
              {
                title: 'After successful submission',
                'title.zh-CN': '提交成功后',
                link: '/handbook/ui/actions/action-settings/affter-successful',
              },
            ],
          },
          {
            title: 'Action types',
            'title.zh-CN': '操作类型',
            children: [
              {
                title: 'View',
                'title.zh-CN': '查看',
                link: '/handbook/ui/actions/types/view',
              },
              {
                title: 'Filter',
                'title.zh-CN': '筛选',
                link: '/handbook/ui/actions/types/filter',
              },
              {
                title: 'Add new',
                'title.zh-CN': '添加',
                link: '/handbook/ui/actions/types/add-new',
              },
              {
                title: 'Link',
                'title.zh-CN': '链接',
                link: '/handbook/ui/actions/types/link',
              },
              {
                title: 'Edit',
                'title.zh-CN': '编辑',
                link: '/handbook/ui/actions/types/edit',
              },
              {
                title: 'Delete',
                'title.zh-CN': '删除',
                link: '/handbook/ui/actions/types/delete',
              },
              {
                title: 'Refresh',
                'title.zh-CN': '刷新',
                link: '/handbook/ui/actions/types/refresh',
              },
              {
                title: 'Add record',
                'title.zh-CN': '添加记录',
                link: '/handbook/ui/actions/types/add-record',
              },
              {
                title: 'Custom pop-up',
                'title.zh-CN': '自定义弹窗',
                link: '/handbook/ui/actions/types/pop-up',
              },
              {
                title: 'Update record',
                'title.zh-CN': '更新记录',
                link: '/handbook/ui/actions/types/update-record',
              },
              {
                title: 'Save record',
                'title.zh-CN': '保存记录',
                link: '/handbook/ui/actions/types/save-record',
              },
              {
                title: 'Submit',
                'title.zh-CN': '提交',
                link: '/handbook/ui/actions/types/submit',
              },
              {
                title: 'Trigger workflow',
                'title.zh-CN': '触发工作流',
                link: '/handbook/ui/actions/types/trigger-workflow',
              },
              {
                title: 'Bulk edit',
                'title.zh-CN': '批量编辑',
                link: '/handbook/action-bulk-edit',
              },
              {
                title: 'Bulk update',
                'title.zh-CN': '批量更新',
                link: '/handbook/action-bulk-update',
              },
              {
                title: 'Custom request',
                'title.zh-CN': '自定义请求',
                link: '/handbook/action-custom-request',
              },
              {
                title: 'Duplicate',
                'title.zh-CN': '复制',
                link: '/handbook/action-duplicate',
              },
              {
                title: 'Print',
                'title.zh-CN': '打印',
                link: '/handbook/action-print',
              },
              {
                title: 'Import',
                'title.zh-CN': '导入',
                link: '/handbook/action-import',
              },
              {
                title: 'Import Pro',
                'title.zh-CN': '导入 Pro',
                link: '/handbook/action-import-pro',
              },
              {
                title: 'Export',
                'title.zh-CN': '导出',
                link: '/handbook/action-export',
              },
              {
                title: 'Export Pro',
                'title.zh-CN': '导出 Pro',
                link: '/handbook/action-export-pro',
              },
            ],
          },
        ],
      },
      {
        title: 'Variables',
        'title.zh-CN': '变量',
        link: '/handbook/ui/variables',
      },
      {
        title: 'Mobile client',
        'title.zh-CN': '移动端',
        link: '/handbook/mobile-client',
      },
    ],
  },
  {
    title: 'Core modules',
    'title.zh-CN': '核心模块',
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
            title: 'Roles & permissions',
            'title.zh-CN': '角色和权限',
            link: '/handbook/acl',
          },
          {
            title: 'Departments',
            'title.zh-CN': '部门',
            children: [
              {
                title: 'Overview',
                'title.zh-CN': '概述',
                link: '/handbook/departments',
              },
              {
                title: 'User manual',
                'title.zh-CN': '使用手册',
                link: '/handbook/departments/manual',
              },
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
                children: [
                  '/handbook/auth/dev/guide',
                  '/handbook/auth/dev/api',
                ],
              },
            ],
          },
          {
            title: 'Authentication - SMS',
            'title.zh-CN': '用户认证 - 短信',
            // subTitle: '@nocobase/plugin-sms-auth',
            link: '/handbook/auth-sms',
          },
          {
            title: 'Authentication - CAS',
            'title.zh-CN': '用户认证 - CAS',
            // subTitle: '@nocobase/plugin-cas',
            link: '/handbook/auth-cas',
          },
          {
            title: 'Authentication - OIDC',
            'title.zh-CN': '用户认证 - OIDC',
            // subTitle: '@nocobase/plugin-oidc',
            children: [
              {
                title: 'User manual',
                'title.zh-CN': '使用手册',
                link: '/handbook/auth-oidc',
              },
              {
                title: 'Example',
                'title.zh-CN': '示例',
                children: ['/handbook/auth-oidc/example/google'],
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
                link: '/handbook/auth-saml',
              },
              {
                title: 'Example',
                'title.zh-CN': '示例',
                children: ['/handbook/auth-saml/example/google'],
              },
            ],
          },
          {
            title: 'Authentication - LDAP',
            'title.zh-CN': '用户认证 - LDAP',
            // subTitle: '@nocobase/plugin-saml',
            children: [
              {
                title: 'User manual',
                'title.zh-CN': '使用手册',
                link: '/handbook/auth-ldap',
              },
            ],
          },
          {
            title: 'Authentication - DingTalk',
            'title.zh-CN': '用户认证 - 钉钉',
            link: '/handbook/auth-dingtalk',
          },
          {
            title: 'Verification',
            'title.zh-CN': '验证码',
            // subTitle: '@nocobase/plugin-verification',
            link: '/handbook/verification',
          },
          {
            title: 'API Keys',
            'title.zh-CN': 'API 密钥',
            // subTitle: '@nocobase/plugin-verification',
            link: '/handbook/api-keys',
          },
        ],
      },
      {
        title: 'File manager',
        'title.zh-CN': '文件管理器',
        children: [
          {
            title: 'Overview',
            'title.zh-CN': '概述',
            link: '/handbook/file-manager',
          },
          {
            title: 'File collection',
            'title.zh-CN': '文件表',
            link: '/handbook/file-manager/file-collection',
          },
          {
            title: 'Attachment field',
            'title.zh-CN': '附件字段',
            link: '/handbook/file-manager/field-attachment',
          },
          {
            title: 'File storage',
            'title.zh-CN': '文件存储引擎',
            children: [
              '/handbook/file-manager/storage',
              {
                title: 'File storage: Local',
                'title.zh-CN': '文件存储：本地',
                link: '/handbook/file-manager/storage/local',
              },
              {
                title: 'File storage: OSS',
                'title.zh-CN': '文件存储：OSS',
                link: '/handbook/file-manager/storage/aliyun-oss',
              },
              {
                title: 'File storage: S3',
                'title.zh-CN': '文件存储：S3',
                link: '/handbook/file-manager/storage/amazon-s3',
              },
              {
                title: 'File storage: COS',
                'title.zh-CN': '文件存储：COS',
                link: '/handbook/file-manager/storage/tencent-cos',
              },
            ],
          },
        ],
      },
      {
        title: 'Logging and monitoring',
        'title.zh-CN': '日志和监控',
        children: [
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
          {
            title: 'Audit logs',
            'title.zh-CN': '审计日志',
            // subTitle: '@nocobase/plugin-audit-logs',
            link: '/handbook/audit-logs',
          },
        ],
      },
      {
        title: 'Data visualization',
        'title.zh-CN': '数据可视化',
        children: [
          {
            title: 'Overview',
            'title.zh-CN': '概述',
            link: '/handbook/data-visualization',
          },
          {
            title: 'User manual',
            'title.zh-CN': '使用手册',
            children: [
              {
                title: 'Chart block',
                'title.zh-CN': '图表区块',
                link: '/handbook/data-visualization/user/chart-block',
              },
              {
                title: 'Configure',
                'title.zh-CN': '配置图表',
                link: '/handbook/data-visualization/user/configure',
              },
              {
                title: 'Filter block',
                'title.zh-CN': '筛选区块',
                link: '/handbook/data-visualization/user/filter',
              },
            ],
          },
          {
            title: 'Development',
            'title.zh-CN': '开发指南',
            children: [
              {
                title: 'Extend chart types',
                'title.zh-CN': '扩展图表类型',
                link: '/handbook/data-visualization/dev/',
              },
              {
                title: 'Example of integrating ECharts',
                'title.zh-CN': 'ECharts 集成示例',
                link: '/handbook/data-visualization/step-by-step',
              },
            ],
          },
          {
            title: 'FAQ',
            'title.zh-CN': '常见问题',
            link: '/handbook/data-visualization/faq',
          },
        ],
      },
      {
        title: 'Multi-app manager',
        'title.zh-CN': '多应用管理',
        // subTitle: '@nocobase/plugin-api-doc',
        link: '/handbook/multi-app-manager',
        // children: ['/plugins/api-doc'],
      },
    ],
  },
  {
    title: 'Workflow',
    'title.zh-CN': '工作流',
    type: 'group',
    children: [
      '/handbook/workflow',
      '/handbook/workflow/quick-start',
      '/handbook/workflow/advanced',
      {
        title: 'Triggers',
        'title.zh-CN': '触发器',
        children: [
          '/handbook/workflow/triggers',
          '/handbook/workflow/triggers/collection',
          '/handbook/workflow/triggers/schedule',
          '/handbook/workflow/triggers/pre-action',
          '/handbook/workflow/triggers/custom-action',
          '/handbook/workflow/triggers/post-action',
          '/handbook/workflow/triggers/approval',
        ],
      },
      {
        title: 'Nodes',
        'title.zh-CN': '节点',
        children: [
          '/handbook/workflow/nodes',
          {
            title: 'Control',
            'title.zh-CN': '流程控制类',
            type: 'group',
            children: [
              '/handbook/workflow/nodes/condition',
              '/handbook/workflow/nodes/calculation',
              '/handbook/workflow/nodes/dynamic-calculation',
              '/handbook/workflow/nodes/delay',
              '/handbook/workflow/nodes/end',
              '/handbook/workflow/nodes/loop',
              '/handbook/workflow/nodes/parallel',
            ],
          },
          {
            title: 'Collection actions',
            'title.zh-CN': '数据表操作',
            type: 'group',
            children: [
              '/handbook/workflow/nodes/create',
              '/handbook/workflow/nodes/update',
              '/handbook/workflow/nodes/destroy',
              '/handbook/workflow/nodes/query',
              '/handbook/workflow/nodes/aggregate',
              '/handbook/workflow/nodes/sql',
            ],
          },
          {
            title: 'Manual',
            'title.zh-CN': '人工处理',
            type: 'group',
            children: [
              '/handbook/workflow/nodes/manual',
              '/handbook/workflow/nodes/approval',
            ],
          },
          {
            title: 'Extended',
            'title.zh-CN': '扩展类型',
            type: 'group',
            children: [
              '/handbook/workflow/nodes/request',
              '/handbook/workflow/nodes/dynamic-calculation',
              '/handbook/workflow/nodes/json-query',
              '/handbook/workflow/nodes/response-message',
              '/handbook/workflow/nodes/variable',
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
      {
        title: 'Related plugins',
        'title.zh-CN': '相关插件',
        children: [
          {
            title: 'Post-action trigger',
            'title.zh-CN': '操作后事件',
            subTitle: '@nocobase/plugin-workflow-action-trigger',
            children: [
              '/handbook/workflow/plugins/action-trigger',
              '/handbook/workflow/plugins/action-trigger/trigger',
              '/handbook/workflow/plugins/action-trigger/action',
              '/handbook/workflow/plugins/action-trigger/example',
              '/handbook/workflow/plugins/action-trigger/http-api',
            ],
          },
          {
            title: 'Aggregate',
            'title.zh-CN': '聚合查询',
            subTitle: '@nocobase/plugin-workflow-aggregate',
            link: '/handbook/workflow/plugins/aggregate',
          },
          {
            title: 'Approval',
            'title.zh-CN': '审批',
            subTitle: '@nocobase/plugin-workflow-approval',
            children: [
              '/handbook/workflow/plugins/approval',
              '/handbook/workflow/plugins/approval/trigger',
              '/handbook/workflow/plugins/approval/node',
              '/handbook/workflow/plugins/approval/action',
              '/handbook/workflow/plugins/approval/block',
              '/handbook/workflow/plugins/approval/advanced',
              '/handbook/workflow/plugins/approval/http-api',
            ],
          },
          {
            title: 'Custom action trigger',
            'title.zh-CN': '自定义操作事件',
            subTitle: '@nocobase/plugin-workflow-custom-action-trigger',
            children: [
              '/handbook/workflow/plugins/custom-action-trigger',
              '/handbook/workflow/plugins/custom-action-trigger/trigger',
              '/handbook/workflow/plugins/custom-action-trigger/action',
              '/handbook/workflow/plugins/custom-action-trigger/example',
              '/handbook/workflow/plugins/custom-action-trigger/http-api',
            ],
          },
          {
            title: 'Delay',
            'title.zh-CN': '延时',
            subTitle: '@nocobase/plugin-workflow-delay',
            link: '/handbook/workflow/plugins/delay',
          },
          {
            title: 'Dynamic calculation',
            'title.zh-CN': '动态表达式',
            subTitle: '@nocobase/plugin-workflow-dynamic-calculation',
            children: [
              '/handbook/workflow/plugins/dynamic-calculation',
              '/handbook/workflow/plugins/dynamic-calculation/collection',
              '/handbook/workflow/plugins/dynamic-calculation/node',
            ],
          },
          {
            title: 'JSON query',
            'title.zh-CN': 'JSON 解析',
            subTitle: '@nocobase/plugin-workflow-json-query',
            link: '/handbook/workflow/plugins/json-query',
          },
          {
            title: 'Loop',
            'title.zh-CN': '循环',
            subTitle: '@nocobase/plugin-workflow-loop',
            link: '/handbook/workflow/plugins/loop',
          },
          {
            title: 'Manual process',
            'title.zh-CN': '人工处理',
            subTitle: '@nocobase/plugin-workflow-manual',
            children: [
              '/handbook/workflow/plugins/manual',
              '/handbook/workflow/plugins/manual/node',
              '/handbook/workflow/plugins/manual/block',
              '/handbook/workflow/plugins/manual/example',
            ],
          },
          {
            title: 'Parallel',
            'title.zh-CN': '并行分支',
            subTitle: '@nocobase/plugin-workflow-parallel',
            link: '/handbook/workflow/plugins/parallel',
          },
          {
            title: 'HTTP Request',
            'title.zh-CN': 'HTTP 请求',
            subTitle: '@nocobase/plugin-workflow-request',
            link: '/handbook/workflow/plugins/request',
          },
          {
            title: 'Pre-action trigger',
            'title.zh-CN': '操作前事件',
            subTitle: '@nocobase/plugin-workflow-request-interceptor',
            link: '/handbook/workflow/plugins/request-interceptor',
            children: [
              '/handbook/workflow/plugins/request-interceptor',
              '/handbook/workflow/plugins/request-interceptor/trigger',
              '/handbook/workflow/plugins/request-interceptor/action',
              '/handbook/workflow/plugins/request-interceptor/advanced',
              '/handbook/workflow/plugins/request-interceptor/example',
              '/handbook/workflow/plugins/request-interceptor/http-api',
            ],
          },
          {
            title: 'Response message',
            'title.zh-CN': '响应消息',
            subTitle: '@nocobase/plugin-workflow-response-message',
            link: '/handbook/workflow/plugins/response-message',
          },
          {
            title: 'SQL action',
            'title.zh-CN': 'SQL 操作',
            subTitle: '@nocobase/plugin-workflow-sql',
            link: '/handbook/workflow/plugins/sql',
          },
          {
            title: 'Custom variable',
            'title.zh-CN': '自定义变量',
            subTitle: '@nocobase/plugin-workflow-variable',
            link: '/handbook/workflow/plugins/variable',
          },
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
        'title.zh-CN': '插件管理',
        link: '/handbook/plugin-manager',
      },
      {
        title: 'System settings',
        'title.zh-CN': '系统设置',
        // subTitle: '@nocobase/plugin-system-settings',
        link: '/handbook/system-settings',
      },
      {
        title: 'Language settings',
        'title.zh-CN': '语言设置',
        // subTitle: '@nocobase/plugin-system-settings',
        link: '/handbook/system-settings/language-settings',
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
    title: 'Others',
    'title.zh-CN': '其他',
    type: 'group',
    children: [
      {
        title: 'API doc',
        'title.zh-CN': 'API 文档',
        // subTitle: '@nocobase/plugin-api-doc',
        link: '/handbook/api-doc',
        // children: ['/plugins/api-doc'],
      },
      {
        title: 'Embed',
        'title.zh-CN': '嵌入',
        link: '/handbook/embed',
      },
      {
        title: 'Custom brand',
        'title.zh-CN': '自定义品牌',
        link: '/handbook/custom-brand',
      },
    ],
  },
];
