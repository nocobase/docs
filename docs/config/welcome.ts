export default [
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
        link: '/breaking-changes/v0-19-0-alpha-1',
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
]