"use strict";(self.webpackChunknocobase_docs=self.webpackChunknocobase_docs||[]).push([[23522],{246652:function(t,_,n){n.r(_);var r=n(572269),l=n(793359),m=n(861788),d=n(719977),h=n(20190),o=n(24268),x=n(496057),g=n(585939),E=n(28484),P=n(635206),D=n(375553),v=n(156266),R=n(572333),I=n(841118),M=n(39297),O=n(868526),j=n(605019),a=n(614651),i=n(280936),c=n(667294),s=n(270597),e=n(785893);function u(){return(0,e.jsx)(a.dY,{children:(0,e.jsx)(c.Suspense,{fallback:(0,e.jsx)(i.Z,{}),children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h1",{id:"extending-sync-target-resources",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#extending-sync-target-resources",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Extending Sync Target Resources"]}),(0,e.jsxs)("h2",{id:"overview",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#overview",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Overview"]}),(0,e.jsxs)("p",{children:[s.texts[0].value,(0,e.jsx)("strong",{children:s.texts[1].value}),s.texts[2].value,(0,e.jsx)("strong",{children:s.texts[3].value}),s.texts[4].value]})]}),(0,e.jsx)(d.Z,{type:"warning",title:"Experimental",children:(0,e.jsx)("p",{children:s.texts[5].value})}),(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"target-resource-handler-interface",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#target-resource-handler-interface",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Target Resource Handler Interface"]}),(0,e.jsx)(o.Z,{lang:"ts",children:s.texts[6].value}),(0,e.jsxs)("h2",{id:"registering-target-resources",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#registering-target-resources",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Registering Target Resources"]}),(0,e.jsx)("p",{children:(0,e.jsx)("code",{children:s.texts[7].value})}),(0,e.jsx)(o.Z,{lang:"ts",children:s.texts[8].value})]})]})})})}_.default=u},270597:function(t,_,n){n.r(_),n.d(_,{texts:function(){return r}});const r=[{value:"NocoBase natively supports syncing user data to the ",paraId:0,tocIndex:1},{value:"User",paraId:0,tocIndex:1},{value:" and ",paraId:0,tocIndex:1},{value:"Department",paraId:0,tocIndex:1},{value:" tables. It also allows for extending the target resources for data synchronization to write data to other tables or perform custom processing as needed.",paraId:0,tocIndex:1},{value:"Full documentation is pending.",paraId:1},{value:`export abstract class UserDataResource {
  name: string;
  accepts: SyncAccept[];
  db: Database;
  logger: SystemLogger;

  constructor(db: Database, logger: SystemLogger) {
    this.db = db;
    this.logger = logger;
  }

  abstract update(
    record: OriginRecord,
    resourcePks: PrimaryKey[],
    matchKey?: string,
  ): Promise<RecordResourceChanged[]>;
  abstract create(
    record: OriginRecord,
    matchKey: string,
  ): Promise<RecordResourceChanged[]>;

  get syncRecordRepo() {
    return this.db.getRepository('userDataSyncRecords');
  }

  get syncRecordResourceRepo() {
    return this.db.getRepository('userDataSyncRecordsResources');
  }
}
`,paraId:2,tocIndex:2},{value:"registerResource(resource: UserDataResource, options?: ToposortOptions)",paraId:3,tocIndex:3},{value:`import { Plugin } from '@nocobase/server';
import PluginUserDataSyncServer from '@nocobase/plugin-user-data-sync';

class CustomUserResourcePluginServer extends Plugin {
  async load() {
    const userDataSyncPlugin = this.app.pm.get(PluginUserDataSyncServer);
    if (userDataSyncPlugin && userDataSyncPlugin.enabled) {
      userDataSyncPlugin.resourceManager.registerResource(new CustomDataSyncResource(this.db, this.app.logger));
    }
  }
}
`,paraId:4,tocIndex:3}]}}]);
