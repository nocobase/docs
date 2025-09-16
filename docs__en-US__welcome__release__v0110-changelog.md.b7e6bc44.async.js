"use strict";(self.webpackChunknocobase_docs=self.webpackChunknocobase_docs||[]).push([[63669],{771632:function(s,t,o){o.r(t);var a=o(572269),u=o(793359),c=o(861788),x=o(719977),h=o(20190),d=o(24268),v=o(496057),m=o(585939),p=o(28484),I=o(635206),P=o(375553),j=o(156266),E=o(572333),g=o(841118),f=o(39297),M=o(868526),D=o(605019),l=o(614651),i=o(280936),r=o(667294),n=o(414262),e=o(785893);function _(){return(0,e.jsx)(l.dY,{children:(0,e.jsx)(r.Suspense,{fallback:(0,e.jsx)(i.Z,{}),children:(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h1",{id:"v011-2023-07-08",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#v011-2023-07-08",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"v0.11: 2023-07-08"]}),(0,e.jsxs)("h2",{id:"new-features",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#new-features",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"New features"]}),(0,e.jsxs)("ul",{children:[(0,e.jsx)("li",{children:n.texts[0].value}),(0,e.jsx)("li",{children:n.texts[1].value}),(0,e.jsxs)("li",{children:[n.texts[2].value,(0,e.jsxs)("ul",{children:[(0,e.jsx)("li",{children:n.texts[3].value}),(0,e.jsx)("li",{children:n.texts[4].value}),(0,e.jsx)("li",{children:n.texts[5].value})]})]})]}),(0,e.jsxs)("h2",{id:"incompatible-changes",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#incompatible-changes",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Incompatible changes"]}),(0,e.jsxs)("h3",{id:"new-client-application-plugin-and-router",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#new-client-application-plugin-and-router",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"New client application, plugin and router"]}),(0,e.jsxs)("h4",{id:"plugin-changes",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#plugin-changes",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Plugin changes"]}),(0,e.jsxs)("p",{children:[n.texts[6].value,(0,e.jsx)("code",{children:n.texts[7].value}),n.texts[8].value]}),(0,e.jsx)(d.Z,{lang:"tsx",children:n.texts[9].value}),(0,e.jsx)("p",{children:n.texts[10].value}),(0,e.jsx)(d.Z,{lang:"diff",children:n.texts[11].value}),(0,e.jsxs)("p",{children:[n.texts[12].value,(0,e.jsx)("code",{children:n.texts[13].value}),n.texts[14].value]}),(0,e.jsxs)("ul",{children:[(0,e.jsx)("li",{children:n.texts[15].value}),(0,e.jsx)("li",{children:n.texts[16].value}),(0,e.jsx)("li",{children:n.texts[17].value}),(0,e.jsx)("li",{children:n.texts[18].value}),(0,e.jsx)("li",{children:n.texts[19].value})]}),(0,e.jsxs)("h4",{id:"routing-changes",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#routing-changes",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Routing changes"]}),(0,e.jsxs)("p",{children:[n.texts[20].value,(0,e.jsx)("code",{children:n.texts[21].value}),n.texts[22].value]}),(0,e.jsx)(d.Z,{lang:"tsx",children:n.texts[23].value}),(0,e.jsx)("p",{children:n.texts[24].value}),(0,e.jsx)(d.Z,{lang:"diff",children:n.texts[25].value}),(0,e.jsxs)("p",{children:[n.texts[26].value,(0,e.jsx)("a",{href:"https://github.com/nocobase/nocobase/blob/main/packages/core/client/src/application/index.md",children:n.texts[27].value})]}),(0,e.jsxs)("h3",{id:"antd-upgrade-to-v5",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#antd-upgrade-to-v5",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"antd upgrade to v5"]}),(0,e.jsxs)("ul",{children:[(0,e.jsxs)("li",{children:[n.texts[28].value,(0,e.jsx)("a",{href:"https://ant.design/docs/react/migration-v5",children:n.texts[29].value})]}),(0,e.jsxs)("li",{children:[(0,e.jsx)("code",{children:n.texts[30].value}),n.texts[31].value,(0,e.jsx)("code",{children:n.texts[32].value})]})]})]})})})})}t.default=_},414262:function(s,t,o){o.r(t),o.d(t,{texts:function(){return a}});const a=[{value:"New client application, plugin and router",paraId:0,tocIndex:1},{value:"Ant design upgrade to v5",paraId:0,tocIndex:1},{value:`New plugin
`,paraId:0,tocIndex:1},{value:"Data visualization",paraId:1,tocIndex:1},{value:"API keys",paraId:1,tocIndex:1},{value:"Google map",paraId:1,tocIndex:1},{value:"before you had to pass a component and the component needed to pass ",paraId:2,tocIndex:4},{value:"props.children",paraId:2,tocIndex:4},{value:", for example:",paraId:2,tocIndex:4},{value:`const HelloProvider = (props) => {
  // do something logic
  return <div>{props.children}</div>;
};

export default HelloProvider;
`,paraId:3,tocIndex:4},{value:"now you need to change to the plugin way, for example:",paraId:4,tocIndex:4},{value:`+import { Plugin } from '@nocobase/client'

const HelloProvider = (props) => {
  // do something logic
  return <div>
    {props.children}
  </div>;
}

+ export class HelloPlugin extends Plugin {
+   async load() {
+     this.app.addProvider(HelloProvider);
+   }
+ }

- export default HelloProvider;
+ export default HelloPlugin;
`,paraId:5,tocIndex:4},{value:"plugins are very powerful and can do a lot of things in the ",paraId:6,tocIndex:4},{value:"load",paraId:6,tocIndex:4},{value:" phase:",paraId:6,tocIndex:4},{value:"modify routes",paraId:7,tocIndex:4},{value:"add Components",paraId:7,tocIndex:4},{value:"add Providers",paraId:7,tocIndex:4},{value:"add Scopes",paraId:7,tocIndex:4},{value:"load other plugins",paraId:7,tocIndex:4},{value:"if you used ",paraId:8,tocIndex:5},{value:"RouteSwitchContext",paraId:8,tocIndex:5},{value:" to modify the route before, you now need to replace it with a plugin:",paraId:8,tocIndex:5},{value:`import { RouteSwitchContext } from '@nocobase/client';

const HelloProvider = () => {
  const { routes, ...others } = useContext(RouteSwitchContext);
  routes[1].routes.unshift({
    path: '/hello',
    component: Hello,
  });

  return (
    <div>
      <RouteSwitchContext.Provider value={{ ...others, routes }}>
        {props.children}
      </RouteSwitchContext.Provider>
    </div>
  );
};
`,paraId:9,tocIndex:5},{value:"now you need to change to the plugin way, for example:",paraId:10,tocIndex:5},{value:`- import { RouteSwitchContext } from '@nocobase/client';
+ import { Plugin } from '@nocobase/client';

const HelloProvider = (props) => {
-  const { routes, ...others } = useContext(RouteSwitchContext);
-  routes[1].routes.unshift({
-    path: '/hello',
-    component: Hello,
-  });

  return <div>
-   <RouteSwitchContext.Provider value={{ ...others, routes }}>
      {props.children}
-   </RouteSwitchContext.Provider>
  </div>
}

+ export class HelloPlugin extends Plugin {
+  async load() {
+    this.app.router.add('admin.hello', {
+       path: '/hello',
+       Component: Hello,
+    });
+    this.app.addProvider(HelloProvider);
+  }
+ }
+ export default HelloPlugin;
`,paraId:11,tocIndex:5},{value:"more details can be found in ",paraId:12,tocIndex:5},{value:"packages/core/client/src/application/index.md",paraId:12,tocIndex:5},{value:"antd related details view the official website ",paraId:13,tocIndex:6},{value:"V4 to V5",paraId:13,tocIndex:6},{value:"@formily/antd",paraId:13,tocIndex:6},{value:" replace with ",paraId:13,tocIndex:6},{value:"@formily/antd-v5",paraId:13,tocIndex:6}]}}]);
