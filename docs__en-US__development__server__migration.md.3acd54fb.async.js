"use strict";(self.webpackChunknocobase_docs=self.webpackChunknocobase_docs||[]).push([[14707],{681373:function(s,t,n){n.r(t);var i=n(572269),c=n(793359),u=n(861788),h=n(719977),m=n(20190),o=n(24268),x=n(496057),g=n(585939),v=n(28484),p=n(635206),I=n(375553),f=n(156266),E=n(572333),M=n(841118),j=n(39297),P=n(868526),D=n(605019),d=n(614651),_=n(280936),r=n(667294),a=n(455992),e=n(785893);function l(){return(0,e.jsx)(d.dY,{children:(0,e.jsx)(r.Suspense,{fallback:(0,e.jsx)(_.Z,{}),children:(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h1",{id:"migration",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#migration",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Migration"]}),(0,e.jsxs)("p",{children:[a.texts[0].value,(0,e.jsx)("code",{children:a.texts[1].value}),a.texts[2].value]}),(0,e.jsx)("img",{style:{maxWidth:"800px",width:"800px"},src:n(607005)}),(0,e.jsx)("p",{children:a.texts[3].value}),(0,e.jsxs)("ul",{children:[(0,e.jsxs)("li",{children:[a.texts[4].value,(0,e.jsxs)("ul",{children:[(0,e.jsx)("li",{children:a.texts[5].value}),(0,e.jsx)("li",{children:a.texts[6].value}),(0,e.jsx)("li",{children:a.texts[7].value})]})]}),(0,e.jsxs)("li",{children:[a.texts[8].value,(0,e.jsxs)("ul",{children:[(0,e.jsx)("li",{children:a.texts[9].value}),(0,e.jsx)("li",{children:a.texts[10].value}),(0,e.jsx)("li",{children:a.texts[11].value})]})]}),(0,e.jsx)("li",{children:a.texts[12].value})]}),(0,e.jsxs)("h2",{id:"creating-migration-files",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#creating-migration-files",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Creating migration files"]}),(0,e.jsx)("p",{children:a.texts[13].value}),(0,e.jsx)(o.Z,{lang:"bash",children:a.texts[14].value}),(0,e.jsx)("p",{children:a.texts[15].value}),(0,e.jsx)(o.Z,{lang:"bash",children:a.texts[16].value}),(0,e.jsx)("p",{children:a.texts[17].value}),(0,e.jsx)(o.Z,{lang:"ts",children:a.texts[18].value}),(0,e.jsxs)("h2",{id:"triggering-migration",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#triggering-migration",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Triggering migration"]}),(0,e.jsxs)("p",{children:[a.texts[19].value,(0,e.jsx)("code",{children:a.texts[20].value}),a.texts[21].value]}),(0,e.jsx)(o.Z,{lang:"bash",children:a.texts[22].value}),(0,e.jsxs)("h2",{id:"testing-migration",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#testing-migration",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Testing migration"]}),(0,e.jsx)(o.Z,{lang:"ts",children:a.texts[23].value})]})})})})}t.default=l},455992:function(s,t,n){n.r(t),n.d(t,{texts:function(){return i}});const i=[{value:"During the update and iteration process of plugins, there might be some incompatible changes. These incompatible upgrades can be handled by writing migration files, which are triggered by the ",paraId:0,tocIndex:0},{value:"nocobase upgrade",paraId:0,tocIndex:0},{value:" command. The relevant process is as follows:",paraId:0,tocIndex:0},{value:"The migrations for upgrades are divided into beforeLoad, afterSync, and afterLoad:",paraId:1,tocIndex:0},{value:`beforeLoad: Executed before the loading of each module, divided into three phases:
`,paraId:2,tocIndex:0},{value:"Before the loading of the core module",paraId:3,tocIndex:0},{value:"Before the loading of preset plugins",paraId:3,tocIndex:0},{value:"Before the loading of other plugins",paraId:3,tocIndex:0},{value:`afterSync: After the synchronization of table configurations with the database, divided into three phases:
`,paraId:2,tocIndex:0},{value:"After the synchronization of the core tables with the database",paraId:4,tocIndex:0},{value:"After the synchronization of the preset plugins' tables with the database",paraId:4,tocIndex:0},{value:"After the synchronization of other plugins' tables with the database",paraId:4,tocIndex:0},{value:"afterLoad: Executed after all applications have been loaded",paraId:2,tocIndex:0},{value:"Create migration files through the create-migration command",paraId:5,tocIndex:1},{value:`yarn nocobase create-migration -h

Usage: nocobase create-migration [options] <name>

Options:
  --pkg <pkg>  package name
  --on [on]    Options include beforeLoad, afterSync, and afterLoad
  -h, --help   display help for command
`,paraId:6,tocIndex:1},{value:"Example",paraId:7,tocIndex:1},{value:`$ yarn nocobase create-migration update-ui --pkg=@nocobase/plugin-client

2024-01-07 17:33:13 [info ] add app main into supervisor     
2024-01-07 17:33:13 [info ] migration file in /nocobase/packages/plugins/@nocobase/plugin-client/src/server/migrations/20240107173313-update-ui.ts
\u2728  Done in 5.02s.
`,paraId:8,tocIndex:1},{value:"A migration file named 20240107173313-update-ui.ts will be generated in the src/server/migrations of the plugin package @nocobase/plugin-client, with the initial content as follows:",paraId:9,tocIndex:1},{value:`import { Migration } from '@nocobase/server';

export default class extends Migration {
  on = 'afterLoad'; // 'beforeLoad' | 'afterSync' | 'afterLoad'
  appVersion = '<0.19.0-alpha.3';

  async up() {
    // coding
  }
}
`,paraId:10,tocIndex:1},{value:"Triggered by the ",paraId:11,tocIndex:2},{value:"nocobase upgrade",paraId:11,tocIndex:2},{value:" command",paraId:11,tocIndex:2},{value:`$ yarn nocobase upgrade
`,paraId:12,tocIndex:2},{value:`import { createMockServer, MockServer } from '@nocobase/test';

describe('test example', () => {
  let app: MockServer;

  beforeEach(async () => {
    app = await createMockServer({
      plugins: ['my-plugin'], // Plugins
      version: '0.18.0-alpha.5', // Version before upgrade
    });
  });

  afterEach(async () => {
    await app.destroy();
  });

  test('case1', async () => {
    await app.runCommand('upgrade');
    // coding...
  });
});
`,paraId:13,tocIndex:3}]},607005:function(s,t,n){s.exports=n.p+"static/image-2.ed03e124.png"}}]);
