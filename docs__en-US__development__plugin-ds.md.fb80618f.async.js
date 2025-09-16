"use strict";(self.webpackChunknocobase_docs=self.webpackChunknocobase_docs||[]).push([[95059],{422181:function(u,d,_){_.r(d);var o=_(572269),r=_(793359),c=_(861788),m=_(719977),E=_(20190),t=_(24268),x=_(496057),v=_(585939),h=_(28484),I=_(635206),D=_(375553),P=_(156266),M=_(572333),O=_(841118),f=_(39297),j=_(868526),C=_(605019),s=_(614651),l=_(280936),i=_(667294),n=_(513600),e=_(785893);function a(){return(0,e.jsx)(s.dY,{children:(0,e.jsx)(i.Suspense,{fallback:(0,e.jsx)(l.Z,{}),children:(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h1",{id:"\u63D2\u4EF6\u76EE\u5F55\u7ED3\u6784",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u63D2\u4EF6\u76EE\u5F55\u7ED3\u6784",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u63D2\u4EF6\u76EE\u5F55\u7ED3\u6784"]}),(0,e.jsxs)("p",{children:[n.texts[0].value,(0,e.jsx)("code",{children:n.texts[1].value}),n.texts[2].value]}),(0,e.jsx)(t.Z,{lang:"bash",children:n.texts[3].value}),(0,e.jsxs)("p",{children:[(0,e.jsx)("code",{children:n.texts[4].value}),n.texts[5].value,(0,e.jsx)(s.rU,{to:"/development/server",children:n.texts[6].value}),n.texts[7].value,(0,e.jsx)("code",{children:n.texts[8].value}),n.texts[9].value,(0,e.jsx)(s.rU,{to:"/development/client",children:n.texts[10].value}),n.texts[11].value]}),(0,e.jsxs)("p",{children:[n.texts[12].value,(0,e.jsx)("code",{children:n.texts[13].value}),n.texts[14].value]}),(0,e.jsx)(t.Z,{lang:"js",children:n.texts[15].value})]})})})})}d.default=a},513600:function(u,d,_){_.r(d),_.d(d,{texts:function(){return o}});const o=[{value:"\u53EF\u4EE5\u901A\u8FC7 ",paraId:0,tocIndex:0},{value:"yarn pm create my-plugin",paraId:0,tocIndex:0},{value:" \u5FEB\u901F\u521B\u5EFA\u4E00\u4E2A\u7A7A\u63D2\u4EF6\uFF0C\u76EE\u5F55\u7ED3\u6784\u5982\u4E0B\uFF1A",paraId:0,tocIndex:0},{value:`|- /my-plugin
  |- /src
    |- /client      # \u63D2\u4EF6\u5BA2\u6237\u7AEF\u4EE3\u7801
    |- /server      # \u63D2\u4EF6\u670D\u52A1\u7AEF\u4EE3\u7801
  |- client.d.ts
  |- client.js
  |- package.json   # \u63D2\u4EF6\u5305\u4FE1\u606F
  |- server.d.ts
  |- server.js
  |- build.config.ts # \u6216\u8005 \`build.config.js\` \uFF0C\u7528\u4E8E\u4FEE\u6539\u6253\u5305\u914D\u7F6E\uFF0C\u5B9E\u73B0\u81EA\u5B9A\u4E49\u903B\u8F91
`,paraId:1,tocIndex:0},{value:"/src/server",paraId:2,tocIndex:0},{value:" \u7684\u6559\u7A0B\u53C2\u8003 ",paraId:2,tocIndex:0},{value:"\u670D\u52A1\u7AEF",paraId:3,tocIndex:0},{value:" \u7AE0\u8282\uFF0C",paraId:2,tocIndex:0},{value:"/src/client",paraId:2,tocIndex:0},{value:" \u7684\u6559\u7A0B\u53C2\u8003 ",paraId:2,tocIndex:0},{value:"\u5BA2\u6237\u7AEF",paraId:4,tocIndex:0},{value:" \u7AE0\u8282\u3002",paraId:2,tocIndex:0},{value:"\u5982\u679C\u4F60\u60F3\u8981\u81EA\u5B9A\u4E49\u6253\u5305\u914D\u7F6E\uFF0C\u53EF\u4EE5\u5728\u6839\u76EE\u5F55\u4E0B\u521B\u5EFA ",paraId:5,tocIndex:0},{value:"config.js",paraId:5,tocIndex:0},{value:" \u6587\u4EF6\uFF0C\u5185\u5BB9\u5982\u4E0B\uFF1A",paraId:5,tocIndex:0},{value:`import { defineConfig } from '@nocobase/build';

export default defineConfig({
  modifyViteConfig: (config) => {
    // vite \u662F\u7528\u6765\u6253\u5305 \`src/client\` \u7AEF\u4EE3\u7801\u7684

    // \u4FEE\u6539 Vite \u914D\u7F6E\uFF0C\u5177\u4F53\u53EF\u53C2\u8003\uFF1Ahttps://vitejs.dev/guide/
    return config
  },
  modifyTsupConfig: (config) => {
    // tsup \u662F\u7528\u6765\u6253\u5305 \`src/server\` \u7AEF\u4EE3\u7801\u7684

    // \u4FEE\u6539 tsup \u914D\u7F6E\uFF0C\u5177\u4F53\u53EF\u53C2\u8003\uFF1Ahttps://tsup.egoist.dev/#using-custom-configuration
    return config
  },
  beforeBuild: (log) => {
    // \u6784\u5EFA\u5F00\u59CB\u524D\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u53EF\u4EE5\u5728\u6784\u5EFA\u5F00\u59CB\u524D\u505A\u4E00\u4E9B\u64CD\u4F5C
  },
  afterBuild: (log: PkgLog) => {
    // \u6784\u5EFA\u5B8C\u6210\u540E\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u53EF\u4EE5\u5728\u6784\u5EFA\u5B8C\u6210\u540E\u505A\u4E00\u4E9B\u64CD\u4F5C
  };
});
`,paraId:6,tocIndex:0}]}}]);
