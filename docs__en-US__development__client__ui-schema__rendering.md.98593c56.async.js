"use strict";(self.webpackChunknocobase_docs=self.webpackChunknocobase_docs||[]).push([[64647],{926735:function(c,s,o){o.r(s);var d=o(572269),r=o(793359),m=o(861788),u=o(719977),h=o(20190),t=o(24268),p=o(496057),x=o(585939),v=o(28484),I=o(635206),C=o(375553),E=o(156266),P=o(572333),j=o(841118),D=o(39297),O=o(868526),M=o(605019),a=o(614651),i=o(280936),l=o(667294),n=o(574901),e=o(785893);function _(){return(0,e.jsx)(a.dY,{children:(0,e.jsx)(l.Suspense,{fallback:(0,e.jsx)(i.Z,{}),children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h1",{id:"schema-rendering",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#schema-rendering",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Schema Rendering"]}),(0,e.jsxs)("h2",{id:"core-components",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#core-components",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Core Components"]}),(0,e.jsx)("p",{children:n.texts[0].value}),(0,e.jsxs)("ul",{children:[(0,e.jsxs)("li",{children:[(0,e.jsx)("code",{children:n.texts[1].value}),n.texts[2].value]}),(0,e.jsxs)("li",{children:[(0,e.jsx)("code",{children:n.texts[3].value}),n.texts[4].value]}),(0,e.jsxs)("li",{children:[(0,e.jsx)("code",{children:n.texts[5].value}),n.texts[6].value,(0,e.jsx)("code",{children:n.texts[7].value}),n.texts[8].value]})]}),(0,e.jsx)("p",{children:n.texts[9].value})]}),(0,e.jsx)(a.Dl,{demo:{id:"docs-en-us-development-client-ui-schema-rendering-demo-0"},previewerProps:{}}),(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("p",{children:[n.texts[10].value,(0,e.jsx)("a",{href:"https://client.docs.nocobase.com/core/ui-schema/schema-component",children:n.texts[11].value}),n.texts[12].value]}),(0,e.jsxs)("h2",{id:"what-is-scope",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#what-is-scope",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"What is Scope?"]}),(0,e.jsxs)("p",{children:[n.texts[13].value,(0,e.jsx)("code",{children:n.texts[14].value}),n.texts[15].value]}),(0,e.jsx)(t.Z,{lang:"tsx",children:n.texts[16].value}),(0,e.jsxs)("h2",{id:"registering-components-and-scopes",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#registering-components-and-scopes",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Registering Components and Scopes"]}),(0,e.jsx)("p",{children:n.texts[17].value}),(0,e.jsxs)("ul",{children:[(0,e.jsx)("li",{children:n.texts[18].value}),(0,e.jsx)("li",{children:n.texts[19].value}),(0,e.jsx)("li",{children:n.texts[20].value})]}),(0,e.jsx)("p",{children:n.texts[21].value}),(0,e.jsx)(t.Z,{lang:"tsx",children:n.texts[22].value}),(0,e.jsxs)("ul",{children:[(0,e.jsx)("li",{children:n.texts[23].value}),(0,e.jsx)("li",{children:n.texts[24].value}),(0,e.jsx)("li",{children:n.texts[25].value}),(0,e.jsx)("li",{children:n.texts[26].value})]}),(0,e.jsxs)("h2",{id:"using-in-application",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#using-in-application",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Using in Application"]}),(0,e.jsx)("p",{children:n.texts[27].value}),(0,e.jsx)(t.Z,{lang:"ts",children:n.texts[28].value}),(0,e.jsx)("p",{children:n.texts[29].value}),(0,e.jsx)(t.Z,{lang:"tsx",children:n.texts[30].value}),(0,e.jsx)("p",{children:n.texts[31].value})]}),(0,e.jsx)(a.Dl,{demo:{id:"docs-en-us-development-client-ui-schema-rendering-demo-1"},previewerProps:{}}),(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("p",{children:[n.texts[32].value,(0,e.jsx)("code",{children:n.texts[33].value}),n.texts[34].value,(0,e.jsx)("code",{children:n.texts[35].value}),n.texts[36].value]}),(0,e.jsx)(t.Z,{lang:"ts",children:n.texts[37].value})]})]})})})}s.default=_},574901:function(c,s,o){o.r(s),o.d(s,{texts:function(){return d}});const d=[{value:"Schema rendering involves several core components:",paraId:0,tocIndex:1},{value:"<SchemaComponentProvider />",paraId:1,tocIndex:1},{value:" provides the context needed for schema rendering.",paraId:1,tocIndex:1},{value:"<SchemaComponentOptions />",paraId:1,tocIndex:1},{value:" extends components and scopes, optional.",paraId:1,tocIndex:1},{value:"<SchemaComponent />",paraId:1,tocIndex:1},{value:" renders the schema, must be used within ",paraId:1,tocIndex:1},{value:"<SchemaComponentProvider />",paraId:1,tocIndex:1},{value:".",paraId:1,tocIndex:1},{value:"Basic usage is as follows:",paraId:2,tocIndex:1},{value:"For specific API details, refer to ",paraId:3},{value:"SchemaComponent",paraId:3},{value:".",paraId:3},{value:"Scope refers to variables or functions available within the schema. For example, the function ",paraId:4,tocIndex:2},{value:"t()",paraId:4,tocIndex:2},{value:" in the following example needs to be registered in the scope to render the title correctly.",paraId:4,tocIndex:2},{value:`<SchemaComponent
  scope={{ t }}
  schema={{
    title: '{{t("Hello")}}',
  }}
>
`,paraId:5,tocIndex:2},{value:"Components and scopes can be registered with SchemaComponentProvider, SchemaComponentOptions, and SchemaComponent. The differences are:",paraId:6,tocIndex:3},{value:"SchemaComponentProvider provides the top-level context.",paraId:7,tocIndex:3},{value:"SchemaComponentOptions is used to replace and extend the local context.",paraId:7,tocIndex:3},{value:"SchemaComponent provides the current schema's context.",paraId:7,tocIndex:3},{value:"For example:",paraId:8,tocIndex:3},{value:`<SchemaComponentProvider components={{ ComponentA }}>
  <SchemaComponent components={{ ComponentB }} schema={schema1}>
  <SchemaComponent components={{ ComponentC }} schema={schema2}>
  <SchemaComponentOptions components={{ ComponentD }}>
    <SchemaComponent components={{ ComponentE }} schema={schema3}>
    <SchemaComponent components={{ ComponentF }} schema={schema4}>
  </SchemaComponentOptions>
</SchemaComponentProvider>
`,paraId:9,tocIndex:3},{value:"schema1 can use ComponentA and ComponentB",paraId:10,tocIndex:3},{value:"schema2 can use ComponentA and ComponentC",paraId:10,tocIndex:3},{value:"schema3 can use ComponentA, ComponentD, and ComponentE",paraId:10,tocIndex:3},{value:"schema4 can use ComponentA, ComponentD, and ComponentF",paraId:10,tocIndex:3},{value:"The Application in the NocoBase client has built-in SchemaComponentProvider components in its Providers.",paraId:11,tocIndex:4},{value:`class Application {
  // Default Providers
  addDefaultProviders() {
    this.addProvider(SchemaComponentProvider, {
      scopes: this.scopes,
      components: this.components,
    });
  }
}
`,paraId:12,tocIndex:4},{value:"The final rendering component structure is as follows:",paraId:13,tocIndex:4},{value:`<Router>
  {/* Context Provider for routing */}
  <SchemaComponentProvider components={app.components} scopes={app.scopes}>
    {/* Custom Provider components - start tag */}
    <Routes />
    {/* Custom Provider components - end tag */}
  </SchemaComponentProvider>
</Router>
`,paraId:14,tocIndex:4},{value:"When using it within the application, you don't need to wrap it with SchemaComponentProvider; you can directly use SchemaComponent.",paraId:15,tocIndex:4},{value:"In the application's lifecycle methods, you can use ",paraId:16},{value:"app.addComponents()",paraId:16},{value:" and ",paraId:16},{value:"app.addScopes()",paraId:16},{value:" to extend global components and scopes.",paraId:16},{value:`class PluginHello extends Plugin {
  async load() {
    this.app.addComponents({
      // Extended components
    });
    this.app.addScopes({
      // Extended scope
    });
  }
}
`,paraId:17}]}}]);
