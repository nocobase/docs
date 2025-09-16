"use strict";(self.webpackChunknocobase_docs=self.webpackChunknocobase_docs||[]).push([[89107],{772254:function(i,o,a){a.r(o);var l=a(572269),c=a(793359),r=a(861788),p=a(719977),h=a(20190),s=a(24268),g=a(496057),m=a(585939),x=a(28484),b=a(635206),v=a(375553),I=a(156266),E=a(572333),f=a(841118),j=a(39297),P=a(868526),M=a(605019),d=a(614651),t=a(280936),_=a(667294),e=a(472227),n=a(785893);function u(){return(0,n.jsx)(d.dY,{children:(0,n.jsx)(_.Suspense,{fallback:(0,n.jsx)(t.Z,{}),children:(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsxs)("h3",{id:"plugin-organization-methods",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#plugin-organization-methods",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"Plugin Organization Methods"]}),(0,n.jsxs)("p",{children:[e.texts[0].value,(0,n.jsx)("code",{children:e.texts[1].value}),e.texts[2].value]}),(0,n.jsx)("p",{children:(0,n.jsx)("img",{src:"https://static-docs.nocobase.com/20240428091419.png",alt:"20240428091419"})}),(0,n.jsxs)("h4",{id:"storagesplugins",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#storagesplugins",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"storages/plugins"]}),(0,n.jsxs)("p",{children:[e.texts[3].value,(0,n.jsx)("code",{children:e.texts[4].value}),e.texts[5].value]}),(0,n.jsx)(s.Z,{lang:"bash",children:e.texts[6].value}),(0,n.jsx)("p",{children:e.texts[7].value}),(0,n.jsx)(s.Z,{lang:"bash",children:e.texts[8].value}),(0,n.jsxs)("h4",{id:"packagesplugins",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#packagesplugins",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"packages/plugins"]}),(0,n.jsxs)("p",{children:[e.texts[9].value,(0,n.jsx)("code",{children:e.texts[10].value}),e.texts[11].value]}),(0,n.jsx)(s.Z,{lang:"bash",children:e.texts[12].value}),(0,n.jsxs)("h4",{id:"packagejson--dependencies",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#packagejson--dependencies",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"package.json + dependencies"]}),(0,n.jsxs)("p",{children:[e.texts[13].value,(0,n.jsx)("code",{children:e.texts[14].value}),e.texts[15].value,(0,n.jsx)("code",{children:e.texts[16].value}),e.texts[17].value,(0,n.jsx)("code",{children:e.texts[18].value}),e.texts[19].value]}),(0,n.jsx)(s.Z,{lang:"js",children:e.texts[20].value})]})})})})}o.default=u},472227:function(i,o,a){a.r(o),a.d(o,{texts:function(){return l}});const l=[{value:"NocoBase offers three distinct methods for organizing plugins, ensuring that all plugin packages are ultimately consolidated within the ",paraId:0,tocIndex:0},{value:"node_modules",paraId:0,tocIndex:0},{value:" directory at the project's root:",paraId:0,tocIndex:0},{value:"This directory is reserved for storing pre-compiled plugins that require no additional dependencies. These plugins are designed for immediate use\u2014simply plug and play. Plugins added via the interface are placed in this directory, and you can also add plugins using the ",paraId:1,tocIndex:1},{value:"pm add",paraId:1,tocIndex:1},{value:" command.",paraId:1,tocIndex:1},{value:`tar -xvzf /downloads/plugin-data-source-external-mysql-0.21.0-alpha.10.tgz -C /my-nocobase-app/storage/plugins/@nocobase/plugin-data-source-external-mysql --strip-components=1
`,paraId:2,tocIndex:1},{value:"The directory structure is organized as follows:",paraId:3,tocIndex:1},{value:`|- /storage/
  |- /plugins/
    |- /@nocobase/
      |- /plugin-data-source-external-mysql/
`,paraId:4,tocIndex:1},{value:"For plugins that are still in development, maintenance is handled through Yarn workspaces. Running ",paraId:5,tocIndex:2},{value:"yarn install",paraId:5,tocIndex:2},{value:" will ensure that all dependencies for these plugins are downloaded. The source code is accessible, but these plugins require compilation before they can be deployed in a production environment. The structure of these plugin packages mirrors that of npm packages, as illustrated below:",paraId:5,tocIndex:2},{value:`|- /packages/
  |- /plugins/
    |- /@nocobase/
      |- /plugin-hello1/
      |- /plugin-hello2/
    |- /my-nocobase-plugin-hello1/
    |- /my-nocobase-plugin-hello2/
`,paraId:6,tocIndex:2},{value:"An example of this method is the NocoBase preset plugin, which lists its plugins under the ",paraId:7,tocIndex:3},{value:"dependencies",paraId:7,tocIndex:3},{value:" section in ",paraId:7,tocIndex:3},{value:"package.json",paraId:7,tocIndex:3},{value:". When you run ",paraId:7,tocIndex:3},{value:"yarn install",paraId:7,tocIndex:3},{value:", all specified plugins are automatically downloaded and ready for use.",paraId:7,tocIndex:3},{value:`{
  "name": "@nocobase/preset-nocobase",
  "version": "0.21.0-alpha.15",
  "license": "AGPL-3.0",
  "main": "./lib/server/index.js",
  "dependencies": {
    "@nocobase/plugin-acl": "0.21.0-alpha.15",
    "@nocobase/plugin-action-bulk-edit": "0.21.0-alpha.15",
    "@nocobase/plugin-action-bulk-update": "0.21.0-alpha.15",
    "@nocobase/plugin-action-duplicate": "0.21.0-alpha.15",
    "@nocobase/plugin-action-print": "0.21.0-alpha.15",
    "@nocobase/plugin-api-doc": "0.21.0-alpha.15",
    "@nocobase/plugin-api-keys": "0.21.0-alpha.15",
    "@nocobase/plugin-audit-logs": "0.21.0-alpha.15",
    "@nocobase/plugin-auth": "0.21.0-alpha.15",
    "@nocobase/plugin-backup-restore": "0.21.0-alpha.15",
    "@nocobase/plugin-calendar": "0.21.0-alpha.15",
    "@nocobase/plugin-cas": "0.21.0-alpha.15",
    "@nocobase/plugin-charts": "0.21.0-alpha.15",
    "@nocobase/plugin-china-region": "0.21.0-alpha.15",
    "@nocobase/plugin-client": "0.21.0-alpha.15",
    "@nocobase/plugin-collection-manager": "0.21.0-alpha.15",
    "@nocobase/plugin-custom-request": "0.21.0-alpha.15",
    "@nocobase/plugin-data-source-manager": "0.21.0-alpha.15",
    "@nocobase/plugin-data-visualization": "0.21.0-alpha.15",
    "@nocobase/plugin-error-handler": "0.21.0-alpha.15",
    "@nocobase/plugin-export": "0.21.0-alpha.15",
    "@nocobase/plugin-file-manager": "0.21.0-alpha.15",
    "@nocobase/plugin-formula-field": "0.21.0-alpha.15",
    "@nocobase/plugin-gantt": "0.21.0-alpha.15",
    "@nocobase/plugin-graph-collection-manager": "0.21.0-alpha.15",
    "@nocobase/plugin-iframe-block": "0.21.0-alpha.15",
    "@nocobase/plugin-import": "0.21.0-alpha.15",
    "@nocobase/plugin-kanban": "0.21.0-alpha.15",
    "@nocobase/plugin-localization-management": "0.21.0-alpha.15",
    "@nocobase/plugin-logger": "0.21.0-alpha.15",
    "@nocobase/plugin-map": "0.21.0-alpha.15",
    "@nocobase/plugin-mobile-client": "0.21.0-alpha.15",
    "@nocobase/plugin-mock-collections": "0.21.0-alpha.15",
    "@nocobase/plugin-multi-app-manager": "0.21.0-alpha.15",
    "@nocobase/plugin-multi-app-share-collection": "0.21.0-alpha.15",
    "@nocobase/plugin-oidc": "0.21.0-alpha.15",
    "@nocobase/plugin-saml": "0.21.0-alpha.15",
    "@nocobase/plugin-sequence-field": "0.21.0-alpha.15",
    "@nocobase/plugin-sms-auth": "0.21.0-alpha.15",
    "@nocobase/plugin-snapshot-field": "0.21.0-alpha.15",
    "@nocobase/plugin-system-settings": "0.21.0-alpha.15",
    "@nocobase/plugin-theme-editor": "0.21.0-alpha.15",
    "@nocobase/plugin-ui-schema-storage": "0.21.0-alpha.15",
    "@nocobase/plugin-users": "0.21.0-alpha.15",
    "@nocobase/plugin-verification": "0.21.0-alpha.15",
    "@nocobase/plugin-workflow": "0.21.0-alpha.15",
    "@nocobase/plugin-workflow-action-trigger": "0.21.0-alpha.15",
    "@nocobase/plugin-workflow-aggregate": "0.21.0-alpha.15",
    "@nocobase/plugin-workflow-delay": "0.21.0-alpha.15",
    "@nocobase/plugin-workflow-dynamic-calculation": "0.21.0-alpha.15",
    "@nocobase/plugin-workflow-loop": "0.21.0-alpha.15",
    "@nocobase/plugin-workflow-manual": "0.21.0-alpha.15",
    "@nocobase/plugin-workflow-parallel": "0.21.0-alpha.15",
    "@nocobase/plugin-workflow-request": "0.21.0-alpha.15",
    "@nocobase/plugin-workflow-sql": "0.21.0-alpha.15"
  }
}
`,paraId:8,tocIndex:3}]}}]);
