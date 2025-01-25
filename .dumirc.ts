import { defineConfig } from 'dumi';
import { defineThemeConfig } from 'dumi-theme-nocobase';
import { nav, sidebar } from './docs/config';

const lang = process.env.DOC_LANG || 'zh-CN';

console.log('process.env.DOC_LANG', lang);

// 设置多语言的 title
function setTitle(menuChildren: any) {
  if (!menuChildren) return;
  menuChildren.forEach((item: any) => {
    if (typeof item === 'object') {
      item.title = item[`title.${lang}`] || item.title;
      item.link = item[`link.${lang}`] || item.link;
      if (item.children) {
        setTitle(item.children);
      }
    }
  });
}
if (lang !== 'en-US') {
  Object.values(sidebar).forEach(setTitle);
}

let site_url=""
if (lang==='zh-CN'){
  site_url = "https://docs-cn.nocobase.com"
}else if (lang==='ja-JP'){
  site_url = "https://docs-jp.nocobase.com"
}else {
  site_url = "https://docs.nocobase.com"
}


export default defineConfig({
  hash: true,
  alias: {},
  exportStatic: {
    ignorePreRenderError: true,
  },
  cacheDirectoryPath: `node_modules/.docs-${lang}-cache`,
  outputPath: `./dist/${lang}`,
  resolve: {
    docDirs: [`./docs/${lang}`],
  },
  locales: [
    { id: 'en-US', name: 'English' },
    { id: 'zh-CN', name: '中文' },
    { id: 'ja-JP', name: '日本語' },
  ],
  themeConfig: defineThemeConfig({
    title: 'NocoBase',
    lang,
    logo: 'https://www.nocobase.com/images/logo.png',
    nav: nav.map((item) => ({
      ...item,
      title: item[`title.${lang}`] || item.title,
      link: item[`link.${lang}`] || item.link,
    })),
    sidebarEnhance: sidebar as any,
    github: 'https://github.com/nocobase/nocobase',
    footer: '© 2020-2024 NocoBase. All rights reserved.',
    alert:
      lang === 'zh-CN'
        ? '文档正在建设中，部分内容可能缺失或缺少翻译，详情查看 <a target="_blank" href="https://github.com/nocobase/docs/commits/main/">文档更新日志</a>'
        : 'The document is currently under construction, with some content possibly missing or awaiting translation. For details, please refer to the <a target="_blank" href="https://github.com/nocobase/docs/commits/main/">changelog</a>',
    localesEnhance: [
      { id: 'zh-CN', switchPrefix: '中', hostname: 'docs-cn.nocobase.com' },
      { id: 'en-US', switchPrefix: 'en', hostname: 'docs.nocobase.com' },
      { id: 'ja-JP', switchPrefix: 'ja', hostname: 'docs-ja.nocobase.com' },
    ],
    algolia: {
      appId: 'SOXMYGAM7C',
      apiKey: '64843cbaefbee8de62326b2ae47b8601',
      indexName: 'nocobase',
    },
  }),
  favicons: [
    '/favicon.ico',
    '/favicon-32x32.png',
    '/favicon-16x16.png',
  ],
  sitemap: {
    hostname: site_url,
  },
});
