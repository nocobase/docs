"use strict";(self.webpackChunknocobase_docs=self.webpackChunknocobase_docs||[]).push([[88895],{724807:function(a,r,n){n.r(r);var s=n(572269),c=n(793359),h=n(861788),d=n(719977),x=n(20190),i=n(24268),g=n(496057),v=n(585939),p=n(28484),m=n(635206),I=n(375553),f=n(156266),w=n(572333),E=n(841118),j=n(39297),P=n(868526),T=n(605019),o=n(614651),l=n(280936),_=n(667294),t=n(396556),e=n(785893);function u(){return(0,e.jsx)(o.dY,{children:(0,e.jsx)(_.Suspense,{fallback:(0,e.jsx)(l.Z,{}),children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h1",{id:"extend-trigger-types",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#extend-trigger-types",children:(0,e.jsx)("span",{className:"icon icon-link"})}),(0,e.jsx)("strong",{children:t.texts[0].value})]}),(0,e.jsx)("p",{children:t.texts[1].value}),(0,e.jsx)("p",{children:t.texts[2].value}),(0,e.jsx)("p",{children:t.texts[3].value}),(0,e.jsxs)("ul",{children:[(0,e.jsxs)("li",{children:[(0,e.jsx)("code",{children:t.texts[4].value}),t.texts[5].value]}),(0,e.jsxs)("li",{children:[(0,e.jsx)("code",{children:t.texts[6].value}),t.texts[7].value]}),(0,e.jsxs)("li",{children:[(0,e.jsx)("code",{children:t.texts[8].value}),t.texts[9].value]})]}),(0,e.jsx)("p",{children:t.texts[10].value}),(0,e.jsxs)("h2",{id:"server-side-implementation",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#server-side-implementation",children:(0,e.jsx)("span",{className:"icon icon-link"})}),(0,e.jsx)("strong",{children:t.texts[11].value})]}),(0,e.jsxs)("p",{children:[t.texts[12].value,(0,e.jsx)("code",{children:t.texts[13].value}),t.texts[14].value,(0,e.jsx)("code",{children:t.texts[15].value}),t.texts[16].value,(0,e.jsx)("code",{children:t.texts[17].value}),t.texts[18].value,(0,e.jsx)("code",{children:t.texts[19].value}),t.texts[20].value,(0,e.jsx)("code",{children:t.texts[21].value}),t.texts[22].value,(0,e.jsx)("code",{children:t.texts[23].value}),t.texts[24].value]}),(0,e.jsxs)("p",{children:[t.texts[25].value,(0,e.jsx)("code",{children:t.texts[26].value}),t.texts[27].value,(0,e.jsx)("code",{children:t.texts[28].value}),t.texts[29].value]}),(0,e.jsx)(i.Z,{lang:"ts",children:t.texts[30].value}),(0,e.jsx)("p",{children:t.texts[31].value}),(0,e.jsx)(i.Z,{lang:"ts",children:t.texts[32].value}),(0,e.jsxs)("p",{children:[t.texts[33].value,(0,e.jsx)("code",{children:t.texts[34].value}),t.texts[35].value]}),(0,e.jsxs)("h2",{id:"client-side-configuration",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#client-side-configuration",children:(0,e.jsx)("span",{className:"icon icon-link"})}),(0,e.jsx)("strong",{children:t.texts[36].value})]}),(0,e.jsx)("p",{children:t.texts[37].value}),(0,e.jsxs)("p",{children:[t.texts[38].value,(0,e.jsx)("code",{children:t.texts[39].value}),t.texts[40].value]}),(0,e.jsx)(i.Z,{lang:"ts",children:t.texts[41].value}),(0,e.jsx)("p",{children:t.texts[42].value}),(0,e.jsx)(i.Z,{lang:"ts",children:t.texts[43].value}),(0,e.jsx)("p",{children:t.texts[44].value})]}),(0,e.jsx)(d.Z,{type:"info",title:"Tip",children:(0,e.jsx)("p",{children:t.texts[45].value})}),(0,e.jsx)("div",{className:"markdown",children:(0,e.jsxs)("p",{children:[t.texts[46].value,(0,e.jsx)(o.rU,{to:"/handbook/workflow/development/api#pluginregisterTrigger",children:t.texts[47].value}),t.texts[48].value]})})]})})})}r.default=u},396556:function(a,r,n){n.r(r),n.d(r,{texts:function(){return s}});const s=[{value:"Extend Trigger Types",paraId:0},{value:"Every workflow must be configured with a specific trigger that serves as the entry point for executing the process.",paraId:1,tocIndex:0},{value:"Trigger types typically correspond to specific system events. Throughout an application's lifecycle, any event that offers a subscription option can be defined as a trigger type. Examples include receiving requests, data table operations, or scheduled tasks.",paraId:2,tocIndex:0},{value:"Trigger types are registered in the plugin's trigger registry using unique string identifiers. The workflow plugin comes with several built-in triggers:",paraId:3,tocIndex:0},{value:"'collection'",paraId:4,tocIndex:0},{value:": Triggered by data table operations.",paraId:4,tocIndex:0},{value:"'schedule'",paraId:4,tocIndex:0},{value:": Triggered by scheduled tasks.",paraId:4,tocIndex:0},{value:"'action'",paraId:4,tocIndex:0},{value:": Triggered by post-operation events.",paraId:4,tocIndex:0},{value:"When extending trigger types, it's essential to ensure that each identifier is unique. The server side should handle the registration for subscribing and unsubscribing to triggers, while the client side should provide the corresponding configuration interface.",paraId:5,tocIndex:0},{value:"Server-Side Implementation",paraId:0},{value:"Any custom trigger should extend the ",paraId:6,tocIndex:1},{value:"Trigger",paraId:6,tocIndex:1},{value:" base class and implement the ",paraId:6,tocIndex:1},{value:"on",paraId:6,tocIndex:1},{value:" and ",paraId:6,tocIndex:1},{value:"off",paraId:6,tocIndex:1},{value:" methods, which manage the subscription and unsubscription to specific system events. The ",paraId:6,tocIndex:1},{value:"on",paraId:6,tocIndex:1},{value:" method must invoke ",paraId:6,tocIndex:1},{value:"this.workflow.trigger()",paraId:6,tocIndex:1},{value:" within the event callback to trigger the workflow. The ",paraId:6,tocIndex:1},{value:"off",paraId:6,tocIndex:1},{value:" method should ensure proper cleanup during unsubscription.",paraId:6,tocIndex:1},{value:"The ",paraId:7,tocIndex:1},{value:"this.workflow",paraId:7,tocIndex:1},{value:" property refers to the workflow plugin instance, passed into the ",paraId:7,tocIndex:1},{value:"Trigger",paraId:7,tocIndex:1},{value:" base class during construction.",paraId:7,tocIndex:1},{value:`import { Trigger } from '@nocobase/plugin-workflow';

class MyTrigger extends Trigger {
  timer: NodeJS.Timeout;

  on(workflow) {
    // Register event
    this.timer = setInterval(() => {
      // Trigger workflow
      this.workflow.trigger(workflow, { date: new Date() });
    }, workflow.config.interval ?? 60000);
  }

  off(workflow) {
    // Unregister event
    clearInterval(this.timer);
  }
}
`,paraId:8,tocIndex:1},{value:"Next, register the trigger instance with the workflow engine in the plugin that extends the workflow:",paraId:9,tocIndex:1},{value:`import WorkflowPlugin from '@nocobase/plugin-workflow';

export default class MyPlugin extends Plugin {
  load() {
    // Get workflow plugin instance
    const workflowPlugin = this.app.pm.get(WorkflowPlugin) as WorkflowPlugin;

    // Register trigger
    workflowPlugin.registerTrigger('interval', MyTrigger);
  }
}
`,paraId:10,tocIndex:1},{value:"Once the server is up and running, the ",paraId:11,tocIndex:1},{value:"'interval'",paraId:11,tocIndex:1},{value:" trigger type will be available for addition and execution.",paraId:11,tocIndex:1},{value:"Client-Side Configuration",paraId:0},{value:"On the client side, the primary task is to provide a configuration interface tailored to the specific settings required for each trigger type. Each trigger type should also be registered with the workflow plugin.",paraId:12,tocIndex:2},{value:"For instance, to configure the interval-based trigger mentioned earlier, define the ",paraId:13,tocIndex:2},{value:"interval",paraId:13,tocIndex:2},{value:" configuration field in the form interface:",paraId:13,tocIndex:2},{value:`import { Trigger } from '@nocobase/workflow/client';

class MyTrigger extends Trigger {
  title = 'Interval Timer Trigger';
  // Fields of trigger config
  fieldset = {
    interval: {
      type: 'number',
      title: 'Interval',
      name: 'config.interval',
      'x-decorator': 'FormItem',
      'x-component': 'InputNumber',
      default: 60000,
    },
  };
}
`,paraId:14,tocIndex:2},{value:"Then, register this trigger type with the workflow plugin instance in the extending plugin:",paraId:15,tocIndex:2},{value:`import { Plugin } from '@nocobase/client';
import WorkflowPlugin from '@nocobase/plugin-workflow/client';

import MyTrigger from './MyTrigger';

export default class extends Plugin {
  // Modify the app instance here if necessary
  async load() {
    const workflow = this.app.pm.get(WorkflowPlugin) as WorkflowPlugin;
    workflow.registerTrigger('interval', MyTrigger);
  }
}
`,paraId:16,tocIndex:2},{value:"Once registered, the new trigger type will appear in the workflow configuration interface.",paraId:17,tocIndex:2},{value:"Ensure that the trigger type identifier registered on the client side matches the one on the server side to avoid errors.",paraId:18},{value:"For further details on defining trigger types, refer to the ",paraId:19},{value:"Workflow API Reference",paraId:20},{value:" section.",paraId:19}]}}]);
