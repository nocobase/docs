"use strict";(self.webpackChunknocobase_docs=self.webpackChunknocobase_docs||[]).push([[45526],{945847:function(d,s,a){a.r(s);var l=a(572269),c=a(793359),u=a(861788),h=a(719977),x=a(20190),t=a(24268),m=a(496057),p=a(585939),I=a(28484),v=a(635206),g=a(375553),E=a(156266),j=a(572333),P=a(841118),f=a(39297),M=a(868526),D=a(605019),i=a(614651),o=a(280936),_=a(667294),n=a(438512),e=a(785893);function r(){return(0,e.jsx)(i.dY,{children:(0,e.jsx)(_.Suspense,{fallback:(0,e.jsx)(o.Z,{}),children:(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h1",{id:"internalization",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#internalization",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Internalization"]}),(0,e.jsxs)("h2",{id:"internationalization-files",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#internationalization-files",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Internationalization Files"]}),(0,e.jsxs)("p",{children:[n.texts[0].value,(0,e.jsx)("code",{children:n.texts[1].value}),n.texts[2].value,(0,e.jsx)(i.rU,{to:"/development/others/languages",children:n.texts[3].value}),n.texts[4].value]}),(0,e.jsx)(t.Z,{lang:"bash",children:n.texts[5].value}),(0,e.jsxs)("p",{children:[n.texts[6].value,(0,e.jsx)("code",{children:n.texts[7].value}),n.texts[8].value,(0,e.jsx)("code",{children:n.texts[9].value}),n.texts[10].value]}),(0,e.jsx)("p",{children:(0,e.jsx)("a",{href:"http://localhost:13000/api/app:getLang?locale=zh-CN",children:n.texts[11].value})}),(0,e.jsxs)("h2",{id:"how-to-support-internationalization",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#how-to-support-internationalization",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"How to Support Internationalization"]}),(0,e.jsx)("p",{children:n.texts[12].value}),(0,e.jsxs)("h3",{id:"appi18n",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#appi18n",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"app.i18n"]}),(0,e.jsx)("p",{children:n.texts[13].value}),(0,e.jsx)(t.Z,{lang:"ts",children:n.texts[14].value}),(0,e.jsxs)("h3",{id:"ctxi18n",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#ctxi18n",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"ctx.i18n"]}),(0,e.jsx)("p",{children:n.texts[15].value}),(0,e.jsx)("p",{children:n.texts[16].value}),(0,e.jsx)(t.Z,{lang:"bash",children:n.texts[17].value}),(0,e.jsx)("p",{children:n.texts[18].value}),(0,e.jsx)(t.Z,{lang:"bash",children:n.texts[19].value}),(0,e.jsx)("p",{children:n.texts[20].value}),(0,e.jsx)(t.Z,{lang:"ts",children:n.texts[21].value}),(0,e.jsxs)("p",{children:[n.texts[22].value,(0,e.jsx)("a",{href:"http://localhost:13000/api/test-i18n?locale=zh-CN",children:n.texts[23].value})]}),(0,e.jsxs)("h2",{id:"api",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"API"]}),(0,e.jsxs)("p",{children:[n.texts[24].value,(0,e.jsx)("a",{href:"https://www.i18next.com/overview/api",children:n.texts[25].value}),n.texts[26].value]}),(0,e.jsxs)("h3",{id:"i18nt",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#i18nt",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"i18n.t()"]}),(0,e.jsx)("p",{children:n.texts[27].value}),(0,e.jsx)(t.Z,{lang:"ts",children:n.texts[28].value}),(0,e.jsxs)("h3",{id:"i18nchangelanguage",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#i18nchangelanguage",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"i18n.changeLanguage()"]}),(0,e.jsx)("p",{children:n.texts[29].value}),(0,e.jsx)(t.Z,{lang:"ts",children:n.texts[30].value}),(0,e.jsxs)("h2",{id:"complete-plugin-example",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#complete-plugin-example",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Complete Plugin Example"]}),(0,e.jsx)("ul",{children:(0,e.jsx)("li",{children:(0,e.jsx)(i.rU,{to:"#",children:n.texts[31].value})})})]})})})})}s.default=r},438512:function(d,s,a){a.r(s),a.d(s,{texts:function(){return l}});const l=[{value:"In a plugin, both frontend and backend multilingual files are stored in the ",paraId:0,tocIndex:1},{value:"src/locale",paraId:0,tocIndex:1},{value:" folder. Click here to see ",paraId:0,tocIndex:1},{value:"all languages",paraId:1,tocIndex:1},{value:" supported by NocoBase.",paraId:0,tocIndex:1},{value:`|- /plugin-sample-i18n
  |- /src
    |- /locale      # Multilingual folder
      |- en_US.ts   # English language file
      |- zh_CN.ts   # Chinese language file
`,paraId:2,tocIndex:1},{value:"Just add translation entries in the corresponding multilingual files (",paraId:3,tocIndex:1},{value:"/src/locale/${lang}.ts",paraId:3,tocIndex:1},{value:"). If it's the first time adding a multilingual file, the application needs to be restarted to take effect. You can check the ",paraId:3,tocIndex:1},{value:"app:getLang",paraId:3,tocIndex:1},{value:" API to verify whether the translation entries have been added successfully.",paraId:3,tocIndex:1},{value:"http://localhost:13000/api/app:getLang?locale=zh-CN",paraId:4,tocIndex:1},{value:"The server has two i18n instances: app.i18n and ctx.i18n.",paraId:5,tocIndex:2},{value:"app.i18n is a global i18n instance, generally used in CLI. For example, it can be combined with inquirer to implement command-line interactions.",paraId:6,tocIndex:3},{value:`import { select } from '@inquirer/select';
import { input } from '@inquirer/input';

export class PluginSampleI18nServer extends Plugin {
  load() {
    this.app.command('test-i18n').action(async () => {
      const answer1 = await select({
        message: 'Select a language',
        choices: [
          {
            name: '\u4E2D\u6587',
            value: 'zh-CN',
          },
          {
            name: 'English',
            value: 'en-US',
          },
        ],
      });
      await this.app.changeLanguage(answer1);
      const answer2 = await input({
        message: this.app.i18n.t('Enter your name'),
      });
      console.log(this.app.i18n.t(\`Your name is {{name}}\`, { name: answer2 }));
    });
  }
}
`,paraId:7,tocIndex:3},{value:"It's a cloneInstance of the global app.i18n. Each request's ctx is completely independent, responding to multilingual information according to the client's language.",paraId:8,tocIndex:4},{value:"Client request parameters can be placed in the query string",paraId:9,tocIndex:4},{value:`GET /?locale=en-US HTTP/1.1
Host: localhost:13000
`,paraId:10,tocIndex:4},{value:"Or in the request headers (recommended)",paraId:11,tocIndex:4},{value:`GET / HTTP/1.1
Host: localhost:13000
X-Locale: en-US
`,paraId:12,tocIndex:4},{value:"Example",paraId:13,tocIndex:4},{value:`export class PluginSampleI18nServer extends Plugin {
  load() {
    this.app.use(async (ctx, next) => {
      if (ctx.path === '/api/test-i18n') {
        ctx.body = \`\${ctx.i18n.t('Hello')} \${ctx.i18n.t('World')}\`;
      }
      await next();
    });
  }
}
`,paraId:14,tocIndex:4},{value:"Visit ",paraId:15,tocIndex:4},{value:"http://localhost:13000/api/test-i18n?locale=zh-CN",paraId:15,tocIndex:4},{value:"NocoBase's i18n is implemented based on i18next. For detailed usage instructions, refer to the ",paraId:16,tocIndex:5},{value:"I18next API documentation",paraId:16,tocIndex:5},{value:". Below are some important examples listed.",paraId:16,tocIndex:5},{value:"Each plugin's locale is distinguished by the namespace (ns), which is the plugin name, such as:",paraId:17,tocIndex:6},{value:`t('Hello', { ns: '@nocobase/plugin-sample-i18n' });
`,paraId:18,tocIndex:6},{value:"To change the current language",paraId:19,tocIndex:7},{value:`await i18n.changeLanguage('en-US');
`,paraId:20,tocIndex:7},{value:"@nocobase/plugin-sample-i18n",paraId:21,tocIndex:8}]}}]);
