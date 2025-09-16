"use strict";(self.webpackChunknocobase_docs=self.webpackChunknocobase_docs||[]).push([[67118],{893342:function(_,i,n){n.r(i);var t=n(572269),l=n(793359),m=n(861788),u=n(719977),h=n(20190),s=n(24268),x=n(496057),v=n(585939),p=n(28484),P=n(635206),E=n(375553),g=n(156266),f=n(572333),M=n(841118),I=n(39297),O=n(868526),S=n(605019),r=n(614651),d=n(280936),a=n(667294),o=n(143626),e=n(785893);function c(){return(0,e.jsx)(r.dY,{children:(0,e.jsx)(a.Suspense,{fallback:(0,e.jsx)(d.Z,{}),children:(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h1",{id:"extend-sms-provider",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#extend-sms-provider",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Extend SMS Provider"]}),(0,e.jsxs)("p",{children:[o.texts[0].value,(0,e.jsx)(r.rU,{to:"/handbook/verification/sms",children:o.texts[1].value}),o.texts[2].value]}),(0,e.jsxs)("h2",{id:"client",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#client",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Client"]}),(0,e.jsxs)("h3",{id:"register-configuration-form",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#register-configuration-form",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Register Configuration Form"]}),(0,e.jsx)("p",{children:o.texts[3].value}),(0,e.jsx)("p",{children:(0,e.jsx)("img",{src:"https://static-docs.nocobase.com/202503011221912.png",alt:""})}),(0,e.jsx)(s.Z,{lang:"ts",children:o.texts[4].value}),(0,e.jsxs)("h2",{id:"server",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#server",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Server"]}),(0,e.jsxs)("h3",{id:"implement-sending-interface",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#implement-sending-interface",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Implement Sending Interface"]}),(0,e.jsx)("p",{children:o.texts[5].value}),(0,e.jsx)(s.Z,{lang:"ts",children:o.texts[6].value}),(0,e.jsxs)("h3",{id:"register-verification-type",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#register-verification-type",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Register Verification Type"]}),(0,e.jsx)("p",{children:o.texts[7].value}),(0,e.jsx)(s.Z,{lang:"ts",children:o.texts[8].value})]})})})})}i.default=c},143626:function(_,i,n){n.r(i),n.d(i,{texts:function(){return t}});const t=[{value:"This article primarily explains how to extend the SMS provider functionality in the ",paraId:0,tocIndex:0},{value:"Auth: SMS",paraId:1,tocIndex:0},{value:" feature via a plugin.",paraId:0,tocIndex:0},{value:"When configuring the SMS verifier, after selecting an SMS provider type, a configuration form associated with that provider type will appear. This configuration form needs to be registered by the developer on the client side.",paraId:2,tocIndex:2},{value:`import { Plugin, SchemaComponent } from '@nocobase/client';
import PluginVerificationClient from '@nocobase/plugin-verification/client';
import React from 'react';

const CustomSMSProviderSettingsForm: React.FC = () => {
  return <SchemaComponent schema={{
    type: 'void',
    properties: {
      accessKeyId: {
        title: \`{{t("Access Key ID", { ns: "\${NAMESPACE}" })}}\`,
        type: 'string',
        'x-decorator': 'FormItem',
        'x-component': 'TextAreaWithGlobalScope',
        required: true,
      },
      accessKeySecret: {
        title: \`{{t("Access Key Secret", { ns: "\${NAMESPACE}" })}}\`,
        type: 'string',
        'x-decorator': 'FormItem',
        'x-component': 'TextAreaWithGlobalScope',
        'x-component-props': { password: true },
        required: true,
      },
    }
  }} />
}

class PluginCustomSMSProviderClient extends Plugin {
  async load() {
    const plugin = this.app.pm.get('verification') as PluginVerificationClient;
    plugin.smsOTPProviderManager.registerProvider('custom-sms-provider-name', {
      components: {
        AdminSettingsForm: CustomSMSProviderSettingsForm,
      },
    });
  }
}
`,paraId:3,tocIndex:2},{value:"The verification plugin has already encapsulated the process of creating one-time dynamic passwords (OTPs), so developers only need to implement the logic for sending messages to interact with the SMS provider.",paraId:4,tocIndex:4},{value:`class CustomSMSProvider extends SMSProvider {
  constructor(options) {
    super(options);
    // options is the configuration object from the client
    const options = this.options;
    // ...
  }

  async send(phoneNumber: string, data: { code: string }) {
    // ...
  }
}
`,paraId:5,tocIndex:4},{value:"Once the sending interface is implemented, it needs to be registered.",paraId:6,tocIndex:5},{value:`import { Plugin } from '@nocobase/server';
import PluginVerificationServer from '@nocobase/plugin-verification';
import { tval } from '@nocobase/utils';

class PluginCustomSMSProviderServer extends Plugin {
  async load() {
    const plugin = this.app.pm.get('verification') as PluginVerificationServer;
    // The name must correspond to the one used on the client
    plugin.smsOTPProviderManager.registerProvider('custom-sms-provider-name', {
      title: tval('Custom SMS provider', { ns: namespace }),
      provider: CustomSMSProvider,
    });
  }
}
`,paraId:7,tocIndex:5}]}}]);
