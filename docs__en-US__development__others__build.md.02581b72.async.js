"use strict";(self.webpackChunknocobase_docs=self.webpackChunknocobase_docs||[]).push([[25690],{654511:function(i,o,_){_.r(o);var d=_(572269),a=_(793359),c=_(861788),m=_(719977),h=_(20190),t=_(24268),E=_(496057),f=_(585939),x=_(28484),P=_(635206),M=_(375553),D=_(156266),O=_(572333),g=_(841118),v=_(39297),I=_(868526),C=_(605019),s=_(614651),u=_(280936),l=_(667294),e=_(336286),n=_(785893);function r(){return(0,n.jsx)(s.dY,{children:(0,n.jsx)(l.Suspense,{fallback:(0,n.jsx)(u.Z,{}),children:(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsxs)("h1",{id:"building",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#building",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"Building"]}),(0,n.jsxs)("h2",{id:"custom-build-configuration",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#custom-build-configuration",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"Custom Build Configuration"]}),(0,n.jsxs)("p",{children:[e.texts[0].value,(0,n.jsx)("code",{children:e.texts[1].value}),e.texts[2].value]}),(0,n.jsx)(t.Z,{lang:"js",children:e.texts[3].value}),(0,n.jsxs)("h2",{id:"plugin-example",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#plugin-example",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"Plugin Example"]}),(0,n.jsx)("ul",{children:(0,n.jsx)("li",{children:(0,n.jsx)(s.rU,{to:"#",children:e.texts[4].value})})})]})})})})}o.default=r},336286:function(i,o,_){_.r(o),_.d(o,{texts:function(){return d}});const d=[{value:"If you want to customize the build configuration, you can create a ",paraId:0,tocIndex:1},{value:"build.config.ts",paraId:0,tocIndex:1},{value:" file in the root directory of the plugin with the following content:",paraId:0,tocIndex:1},{value:`import { defineConfig } from '@nocobase/build';

export default defineConfig({
  modifyViteConfig: (config) => {
    // Vite is used for packaging the \`src/client\` side code

    // Modify the Vite configuration. For details, refer to: https://vitejs.dev/guide/
    return config;
  },
  modifyTsupConfig: (config) => {
    // Tsup is used for packaging the \`src/server\` side code

    // Modify the Tsup configuration. For details, refer to: https://tsup.egoist.dev/#using-custom-configuration
    return config;
  },
  beforeBuild: (log) => {
    // Callback function before the build starts. You can perform some actions before the build.
  },
  afterBuild: (log: PkgLog) => {
    // Callback function after the build is completed. You can perform some actions after the build.
  };
});
`,paraId:1,tocIndex:1},{value:"@nocobase/plugin-sample-custom-build",paraId:2,tocIndex:2}]}}]);
