//seems not used yet or anymore
export default [
  {
    title: 'Quick Start',
    'title.zh-CN': '快速上手',
    'title.ja-JP': 'クイックスタート',
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
    'title.ja-JP': '機能ナビゲーション',
    type: 'group',
    children: [
      {
        title: 'Pages',
        'title.zh-CN': '页面',
        'title.ja-JP': 'ページ',
        children: [
          {
            title: 'Overview',
            'title.zh-CN': '概述',
            'title.ja-JP': '概要',
            link: '/manual/modules/pages',
          },
          {
            title: '可配置页面',
            'title.zh-CN': '可配置页面',
            'title.ja-JP': 'カスタマイズ可能なページ',
            link: '#',
          },
          {
            title: '插件管理器',
            'title.zh-CN': '插件管理器',
            'title.ja-JP': 'プラグインマネージャー',
            link: '/manual/modules/pages/plugin-manager',
          },
          {
            title: '插件设置中心',
            'title.zh-CN': '插件设置中心',
            'title.ja-JP': 'プラグイン設定センター',
            link: '/manual/modules/pages/plugin-settings',
          },
          {
            title: '个人中心',
            'title.zh-CN': '个人中心',
            'title.ja-JP': '個人センター',
            link: '#',
          },
          {
            title: '登录页',
            'title.zh-CN': '登录页',
            'title.ja-JP': 'ログインページ',
            link: '#',
          },
          {
            title: '注册页',
            'title.zh-CN': '注册页',
            'title.ja-JP': '登録ページ',
            link: '#',
          },
          {
            title: '移动端入口',
            'title.zh-CN': '移动端入口',
            'title.ja-JP': 'モバイルエントリ',
            link: '#',
          },
          {
            title: 'API 文档',
            'title.zh-CN': 'API 文档',
            'title.ja-JP': 'API ドキュメント',
            link: '#',
          },
        ],
      },
      {
        title: 'UI 配置',
        'title.zh-CN': 'UI 配置',
        'title.ja-JP': 'UI 設定',
        children: [
          {
            title: 'Overview',
            'title.zh-CN': '概述',
            'title.ja-JP': '概要',
            link: '/manual/modules/ui',
          },
          {
            title: '菜单',
            'title.zh-CN': '菜单',
            'title.ja-JP': 'メニュー',
            link: '/manual/modules/ui/menus',
          },
          {
            title: '页面',
            'title.zh-CN': '页面',
            'title.ja-JP': 'ページ',
            link: '/manual/modules/ui/pages',
          },
          {
            title: '区块',
            'title.zh-CN': '区块',
            'title.ja-JP': 'ブロック',
            children: [
              {
                title: 'Overview',
                'title.zh-CN': '概述',
                'title.ja-JP': '概要',
                link: '/manual/modules/ui/blocks',
              },
              {
                title: '数据表区块',
                'title.zh-CN': '数据表区块',
                'title.ja-JP': 'データテーブルブロック',
                children: [],
              },
              {
                title: '关系区块',
                'title.zh-CN': '关系区块',
                'title.ja-JP': 'リレーションブロック',
                children: [
                  {
                    title: '一对一 & 多对一',
                    'title.zh-CN': '一对一 & 多对一',
                    'title.ja-JP': '一対一 & 多対一',
                    link: '#',
                  },
                  {
                    title: '一对多 & 多对多',
                    'title.zh-CN': '一对多 & 多对多',
                    'title.ja-JP': '一対多 & 多対多',
                    link: '#',
                  },
                ],
              },
              {
                title: '筛选区块',
                'title.zh-CN': '筛选区块',
                'title.ja-JP': 'フィルターブロック',
                children: [
                  {
                    title: '表单',
                    'title.zh-CN': '表单',
                    'title.ja-JP': 'フォーム',
                    link: '#',
                  },
                  {
                    title: '折叠面板',
                    'title.zh-CN': '折叠面板',
                    'title.ja-JP': '折りたたみパネル',
                    link: '#',
                  },
                ],
              },
              {
                title: '其他区块',
                'title.zh-CN': '其他区块',
                'title.ja-JP': 'その他のブロック',
                children: [
                  {
                    title: 'Markdown',
                    'title.zh-CN': 'Markdown',
                    'title.ja-JP': 'Markdown',
                    link: '#',
                  },
                  {
                    title: 'Iframe',
                    'title.zh-CN': 'Iframe',
                    'title.ja-JP': 'Iframe',
                    link: '#',
                  },
                  {
                    title: '审计日志',
                    'title.zh-CN': '审计日志',
                    'title.ja-JP': '監査ログ',
                    link: '#',
                  },
                  {
                    title: '工作流待办',
                    'title.zh-CN': '工作流待办',
                    'title.ja-JP': 'ワークフローのタスク',
                    link: '#',
                  },
                ],
              },
            ],
          },
          {
            title: '字段',
            'title.zh-CN': '字段',
            'title.ja-JP': 'フィールド',
            children: [
              {
                title: 'Overview',
                'title.zh-CN': '概述',
                'title.ja-JP': '概要',
                link: '/manual/modules/ui/fields',
              },
              {
                title: '字段类型',
                'title.zh-CN': '字段类型',
                'title.ja-JP': 'フィールドタイプ',
                children: [
                  {
                    title: '基本类型',
                    'title.zh-CN': '基本类型',
                    'title.ja-JP': '基本タイプ',
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
                    'title.ja-JP': '選択タイプ',
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
                    'title.ja-JP': 'マルチメディア',
                    children: [
                      // Markdown
                      // 富文本
                      // 附件
                    ],
                  },
                  {
                    title: '日期 & 时间',
                    'title.zh-CN': '日期 & 时间',
                    'title.ja-JP': '日付 & 時間',
                    children: [
                      // 日期
                      // 时间
                    ],
                  },
                  {
                    title: '关系类型',
                    'title.zh-CN': '关系类型',
                    'title.ja-JP': 'リレーションタイプ',
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
                    'title.ja-JP': '地図ベースのジオメトリ',
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
                    'title.ja-JP': '高度なタイプ',
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
                    'title.ja-JP': 'システム情報',
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
                'title.ja-JP': '関連フィールドコンポーネント',
                children: [
                  {
                    title: 'Overview',
                    'title.zh-CN': '概述',
                    'title.ja-JP': '概要',
                    link: '/manual/modules/ui/fields/association-components',
                  },
                  {
                    title: 'Cascade select',
                    'title.zh-CN': '级联选择器',
                    'title.ja-JP': 'カスケードセレクト',
                    link: '/manual/modules/ui/fields/association-components/cascade-select',
                  },
                  {
                    title: 'File manager',
                    'title.zh-CN': '文件管理器',
                    'title.ja-JP': 'ファイルマネージャー',
                    link: '/manual/modules/ui/fields/association-components/file-manager',
                  },
                  {
                    title: 'Record picker',
                    'title.zh-CN': '数据选择器',
                    'title.ja-JP': 'レコードピッカー',
                    link: '/manual/modules/ui/fields/association-components/record-picker',
                  },
                  {
                    title: 'Select',
                    'title.zh-CN': '下拉选择器',
                    'title.ja-JP': 'セレクト',
                    link: '/manual/modules/ui/fields/association-components/select',
                  },
                  {
                    title: 'Sub detail',
                    'title.zh-CN': '子详情',
                    'title.ja-JP': 'サブ詳細',
                    link: '/manual/modules/ui/fields/association-components/sub-detail',
                  },
                  {
                    title: 'Sub form',
                    'title.zh-CN': '子表单',
                    'title.ja-JP': 'サブフォーム',
                    link: '/manual/modules/ui/fields/association-components/sub-form',
                  },
                  {
                    title: 'Sub-form(popover)',
                    'title.zh-CN': '子表单（弹窗）',
                    'title.ja-JP': 'サブフォーム（ポップオーバー）',
                    link: '/manual/modules/ui/fields/association-components/sub-form(popover)',
                  },
                  {
                    title: 'Sub table',
                    'title.zh-CN': '子表格',
                    'title.ja-JP': 'サブテーブル',
                    link: '/manual/modules/ui/fields/association-components/sub-table',
                  },
                  {
                    title: 'Tag',
                    'title.zh-CN': '标签',
                    'title.ja-JP': 'タグ',
                    link: '/manual/modules/ui/fields/association-components/tag',
                  },
                  {
                    title: 'Title',
                    'title.zh-CN': '标题',
                    'title.ja-JP': 'タイトル',
                    link: '/manual/modules/ui/fields/association-components/title',
                  },
                ],
              },
            ],
          },
          {
            title: '操作',
            'title.zh-CN': '操作',
            'title.ja-JP': '操作',
            children: [
              {
                title: 'Overview',
                'title.zh-CN': '概述',
                'title.ja-JP': '概要',
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
        'title.ja-JP': 'コレクションテンプレート',
        children: [
          {
            title: 'Overview',
            'title.zh-CN': '概述',
            'title.ja-JP': '概要',
            link: '/manual/modules/collection-templates',
          },
          {
            title: 'General collection',
            'title.zh-CN': '普通数据表',
            'title.ja-JP': '一般的なデータテーブル',
            link: '/manual/modules/collection-templates/general',
          },
          {
            title: 'Tree collection',
            'title.zh-CN': '树表',
            'title.ja-JP': '木構造コレクション',
            link: '/manual/modules/collection-templates/tree',
          },
          {
            title: 'Calender collection',
            'title.zh-CN': '日历表',
            'title.ja-JP': 'カレンダーコレクション',
            link: '/manual/modules/collection-templates/calender',
          },
          {
            title: 'File collection',
            'title.zh-CN': '文件表',
            'title.ja-JP': 'ファイルコレクション',
            link: '/manual/modules/collection-templates/file',
          },
          {
            title: 'Expression collection',
            'title.zh-CN': '表达式表',
            'title.ja-JP': '式コレクション',
            link: '/manual/modules/collection-templates/expression',
          },
          {
            title: 'Sql collection',
            'title.zh-CN': 'Sql表',
            'title.ja-JP': 'Sqlコレクション',
            link: '/manual/modules/collection-templates/sql',
          },
          {
            title: 'View collection',
            'title.zh-CN': '连接数据库视图',
            'title.ja-JP': 'データベースビューコレクション',
            link: '/manual/modules/collection-templates/view',
          },
        ],
      },
      {
        title: 'Workflow',
        'title.zh-CN': '工作流',
        'title.ja-JP': 'ワークフロー',
        children: [
          {
            title: '触发器',
            'title.zh-CN': '触发器',
            'title.ja-JP': 'トリガー',
            children: [
              {
                title: '表单事件',
                'title.zh-CN': '表单事件',
                'title.ja-JP': 'フォームイベント',
                link: '#',
              },
              {
                title: '数据表事件',
                'title.zh-CN': '数据表事件',
                'title.ja-JP': 'データテーブルイベント',
                link: '#',
              },
              {
                title: '定时任务',
                'title.zh-CN': '定时任务',
                'title.ja-JP': '定期タスク',
                link: '#',
              },
            ],
          },
          {
            title: '节点',
            'title.zh-CN': '节点',
            'title.ja-JP': 'ノード',
            children: [
              {
                title: '流程控制',
                'title.zh-CN': '流程控制',
                'title.ja-JP': 'フロー制御',
                children: [
                  {
                    title: '运算',
                    'title.zh-CN': '运算',
                    'title.ja-JP': '演算',
                    link: '#',
                  },
                  {
                    title: '条件',
                    'title.zh-CN': '条件',
                    'title.ja-JP': '条件',
                    link: '#',
                  },
                  {
                    title: '分支',
                    'title.zh-CN': '分支',
                    'title.ja-JP': '分岐',
                    link: '#',
                  },
                  {
                    title: '循环',
                    'title.zh-CN': '循环',
                    'title.ja-JP': 'ループ',
                    link: '#',
                  },
                  {
                    title: '延时',
                    'title.zh-CN': '延时',
                    'title.ja-JP': '遅延',
                    link: '#',
                  },
                ],
              },
              {
                title: '数据表操作',
                'title.zh-CN': '数据表操作',
                'title.ja-JP': 'データテーブル操作',
                children: [
                  {
                    title: '查询数据',
                    'title.zh-CN': '查询数据',
                    'title.ja-JP': 'データをクエリ',
                    link: '#',
                  },
                  {
                    title: '新增数据',
                    'title.zh-CN': '新增数据',
                    'title.ja-JP': 'データを追加',
                    link: '#',
                  },
                  {
                    title: '更新数据',
                    'title.zh-CN': '更新数据',
                    'title.ja-JP': 'データを更新',
                    link: '#',
                  },
                  {
                    title: '删除数据',
                    'title.zh-CN': '删除数据',
                    'title.ja-JP': 'データを削除',
                    link: '#',
                  },
                  {
                    title: '聚合查询',
                    'title.zh-CN': '聚合查询',
                    'title.ja-JP': '集約クエリ',
                    link: '#',
                  },
                  {
                    title: 'SQL 操作',
                    'title.zh-CN': 'SQL 操作',
                    'title.ja-JP': 'SQL 操作',
                    link: '#',
                  },
                ],
              },
              {
                title: '人工处理',
                'title.zh-CN': '人工处理',
                'title.ja-JP': '手動処理',
                children: [
                  {
                    title: '人工处理',
                    'title.zh-CN': '人工处理',
                    'title.ja-JP': '手動処理',
                    link: '#',
                  },
                  {
                    title: 'Approval',
                    'title.zh-CN': '审批',
                    'title.ja-JP': '承認',
                    link: '#',
                  },
                ],
              },
              {
                title: '扩展类型',
                'title.zh-CN': '扩展类型',
                'title.ja-JP': '拡張タイプ',
                children: [
                  {
                    title: 'HTTP 请求',
                    'title.zh-CN': 'HTTP 请求',
                    'title.ja-JP': 'HTTP リクエスト',
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
        'title.ja-JP': 'ユーザー認証',
        children: [
          {
            title: '密码',
            'title.zh-CN': '密码',
            'title.ja-JP': 'パスワード',
            link: '#',
          },
          {
            title: '短信',
            'title.zh-CN': '短信',
            'title.ja-JP': 'SMS',
            link: '#',
          },
          {
            title: 'SAML',
            'title.zh-CN': 'SAML',
            'title.ja-JP': 'SAML',
            link: '#',
          },
          {
            title: 'OIDC',
            'title.zh-CN': 'OIDC',
            'title.ja-JP': 'OIDC',
            link: '#',
          },
          {
            title: 'CAS',
            'title.zh-CN': 'CAS',
            'title.ja-JP': 'CAS',
            link: '#',
          },
        ],
      },
      {
        title: '文件存储',
        'title.zh-CN': '文件存储',
        'title.ja-JP': 'ファイルストレージ',
        children: [
          {
            title: '本地',
            'title.zh-CN': '本地',
            'title.ja-JP': 'ローカル',
            link: '#',
          },
          {
            title: '阿里云',
            'title.zh-CN': '阿里云',
            'title.ja-JP': 'アリババクラウド',
            link: '#',
          },
          {
            title: 'S3',
            'title.zh-CN': 'S3',
            'title.ja-JP': 'S3',
            link: '#',
          },
          {
            title: '腾讯云',
            'title.zh-CN': '腾讯云',
            'title.ja-JP': 'テンセントクラウド',
            link: '#',
          },
        ],
      },
      {
        title: '图表',
        'title.zh-CN': '图表',
        'title.ja-JP': 'チャート',
        children: [
          {
            title: '折线图',
            'title.zh-CN': '折线图',
            'title.ja-JP': '折れ線グラフ',
            link: '#',
          },
          {
            title: '面积图',
            'title.zh-CN': '面积图',
            'title.ja-JP': '面グラフ',
            link: '#',
          },
          {
            title: '柱状图',
            'title.zh-CN': '柱状图',
            'title.ja-JP': '棒グラフ',
            link: '#',
          },
          {
            title: '条形图',
            'title.zh-CN': '条形图',
            'title.ja-JP': '横棒グラフ',
            link: '#',
          },
          {
            title: '饼图',
            'title.zh-CN': '饼图',
            'title.ja-JP': '円グラフ',
            link: '#',
          },
          {
            title: '双轴图',
            'title.zh-CN': '双轴图',
            'title.ja-JP': '二軸グラフ',
            link: '#',
          },
          {
            title: '散点图',
            'title.zh-CN': '散点图',
            'title.ja-JP': '散布図',
            link: '#',
          },
          {
            title: '统计',
            'title.zh-CN': '统计',
            'title.ja-JP': '統計',
            link: '#',
          },
          {
            title: '表格',
            'title.zh-CN': '表格',
            'title.ja-JP': 'テーブル',
            link: '#',
          },
        ],
      },
      {
        title: '地图服务商',
        'title.zh-CN': '地图服务商',
        'title.ja-JP': '地図サービスプロバイダー',
        children: [
          {
            title: '高德',
            'title.zh-CN': '高德',
            'title.ja-JP': '高徳',
            link: '#',
          },
          {
            title: 'Google',
            'title.zh-CN': 'Google',
            'title.ja-JP': 'Google',
            link: '#',
          },
        ],
      },
      {
        title: '验证码服务商',
        'title.zh-CN': '验证码服务商',
        'title.ja-JP': '認証コードサービスプロバイダー',
        children: [
          {
            title: '阿里云 SMS',
            'title.zh-CN': '阿里云 SMS',
            'title.ja-JP': 'アリババクラウド SMS',
            link: '#',
          },
          {
            title: '腾讯云 SMS',
            'title.zh-CN': '腾讯云 SMS',
            'title.ja-JP': 'テンセントクラウド SMS',
            link: '#',
          },
        ],
      },
      {
        title: '更多模块见插件列表',
        'title.zh-CN': '更多模块见插件列表',
        'title.ja-JP': '詳細なモジュールはプラグインリストを参照してください',
        link: '/plugins',
      },
    ],
  },
]
