"use strict";(self.webpackChunknocobase_docs=self.webpackChunknocobase_docs||[]).push([[47510],{683621:function(d,t,n){n.r(t);var _=n(572269),u=n(793359),c=n(861788),h=n(719977),m=n(20190),a=n(24268),x=n(496057),v=n(585939),p=n(28484),g=n(635206),I=n(375553),E=n(156266),P=n(572333),j=n(841118),D=n(39297),M=n(868526),O=n(605019),o=n(614651),l=n(280936),r=n(667294),s=n(251749),e=n(785893);function i(){return(0,e.jsx)(o.dY,{children:(0,e.jsx)(r.Suspense,{fallback:(0,e.jsx)(l.Z,{}),children:(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h1",{id:"directory-structure",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#directory-structure",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Directory Structure"]}),(0,e.jsxs)("p",{children:[s.texts[0].value,(0,e.jsx)(o.rU,{to:"/welcome/getting-started/installation/git-clone",children:s.texts[1].value}),s.texts[2].value,(0,e.jsx)(o.rU,{to:"/welcome/getting-started/installation/create-nocobase-app",children:s.texts[3].value}),s.texts[4].value]}),(0,e.jsx)(a.Z,{lang:"bash",children:s.texts[5].value}),(0,e.jsxs)("h2",{id:"plugins-directory",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#plugins-directory",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Plugins Directory"]}),(0,e.jsxs)("p",{children:[s.texts[6].value,(0,e.jsx)("code",{children:s.texts[7].value}),s.texts[8].value]}),(0,e.jsx)(a.Z,{lang:"bash",children:s.texts[9].value}),(0,e.jsxs)("p",{children:[s.texts[10].value,(0,e.jsx)("code",{children:s.texts[11].value}),s.texts[12].value]}),(0,e.jsx)(a.Z,{lang:"bash",children:s.texts[13].value}),(0,e.jsxs)("p",{children:[s.texts[14].value,(0,e.jsx)("code",{children:s.texts[15].value}),s.texts[16].value,(0,e.jsx)("code",{children:s.texts[17].value}),s.texts[18].value,(0,e.jsx)("code",{children:s.texts[19].value}),s.texts[20].value]}),(0,e.jsx)(a.Z,{lang:"bash",children:s.texts[21].value}),(0,e.jsxs)("h2",{id:"plugin-directory-structure",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#plugin-directory-structure",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Plugin Directory Structure"]}),(0,e.jsxs)("p",{children:[s.texts[22].value,(0,e.jsx)("code",{children:s.texts[23].value}),s.texts[24].value]}),(0,e.jsx)(a.Z,{lang:"bash",children:s.texts[25].value})]})})})})}t.default=i},251749:function(d,t,n){n.r(t),n.d(t,{texts:function(){return _}});const _=[{value:"Whether it is a NocoBase application created via ",paraId:0,tocIndex:0},{value:"Git source",paraId:1,tocIndex:0},{value:" or ",paraId:0,tocIndex:0},{value:"create-nocobase-app",paraId:2,tocIndex:0},{value:", the directory structure is the same, as follows:",paraId:0,tocIndex:0},{value:`\u251C\u2500\u2500 my-nocobase-app
  \u251C\u2500\u2500 packages        # Packages under development
    \u251C\u2500\u2500 plugins       # Plugins under development
  \u251C\u2500\u2500 storage         # Used to store database files, attachments, cache, etc.
    \u251C\u2500\u2500 backups       # Backup files directory
    \u251C\u2500\u2500 plugins       # Plug-and-play plugins (already compiled)
    \u251C\u2500\u2500 tar           # Location for storing output of yarn build --tar
    \u251C\u2500\u2500 uploads       # Local storage directory
  \u251C\u2500\u2500 .env            # Environment variables
  \u251C\u2500\u2500 .env.e2e        # Environment variables for e2e tests yarn e2e test
  \u251C\u2500\u2500 .env.test       # Environment variables for unit tests yarn test
  \u251C\u2500\u2500 lerna.json
  \u251C\u2500\u2500 package.json
  \u251C\u2500\u2500 playwright.config.ts
  \u251C\u2500\u2500 tsconfig.json
  \u251C\u2500\u2500 tsconfig.server.json
  \u251C\u2500\u2500 vitest.config.mts
`,paraId:3,tocIndex:0},{value:"Plugins under development are stored in the ",paraId:4,tocIndex:1},{value:"packages/plugins",paraId:4,tocIndex:1},{value:" directory, organized as npm packages, example as below:",paraId:4,tocIndex:1},{value:`|- /packages/
  |- /plugins/
    |- /@nocobase/
      |- /plugin-hello1/
      |- /plugin-hello2/
    |- /my-nocobase-plugin-hello1/
    |- /my-nocobase-plugin-hello2/
`,paraId:5,tocIndex:1},{value:"Plugins added via the interface are stored in the ",paraId:6,tocIndex:1},{value:"storage/plugins",paraId:6,tocIndex:1},{value:" directory, organized as npm packages, example as below:",paraId:6,tocIndex:1},{value:`|- /storage/
  |- /plugins/
    |- /@nocobase/
      |- /plugin-hello1/
      |- /plugin-hello2/
    |- /my-nocobase-plugin-hello1/
    |- /my-nocobase-plugin-hello2/
`,paraId:7,tocIndex:1},{value:"Built-in plugins or plugins declared in the ",paraId:8,tocIndex:1},{value:"dependencies",paraId:8,tocIndex:1},{value:" of ",paraId:8,tocIndex:1},{value:"package.json",paraId:8,tocIndex:1},{value:" will all be in ",paraId:8,tocIndex:1},{value:"node_modules",paraId:8,tocIndex:1},{value:", example as below:",paraId:8,tocIndex:1},{value:`|- /node_modules/
  |- /@nocobase/
    |- /plugin-acl/
    |- /plugin-auth/
`,paraId:9,tocIndex:1},{value:"You can quickly create an empty plugin with ",paraId:10,tocIndex:2},{value:"yarn pm create @my-project/plugin-hello",paraId:10,tocIndex:2},{value:". The directory structure is as follows:",paraId:10,tocIndex:2},{value:`|- /packages/plugins/@my-project/plugin-hello
  |- /dist          # The produ\u0441t of build
  |- /src
    |- /client      # Plugin client code
    |- /server      # Plugin server code
  |- .npmignore     # Which files or directories should be ignored when publishing the plugin package
  |- client.d.ts
  |- client.js
  |- package.json   # Plugin package information
  |- server.d.ts
  |- server.js
`,paraId:11,tocIndex:2}]}}]);
