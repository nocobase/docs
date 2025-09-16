"use strict";(self.webpackChunknocobase_docs=self.webpackChunknocobase_docs||[]).push([[54634],{633294:function(r,t,e){e.r(t);var d=e(572269),u=e(793359),m=e(861788),c=e(719977),h=e(20190),_=e(24268),x=e(496057),E=e(585939),p=e(28484),v=e(635206),j=e(375553),I=e(156266),P=e(572333),M=e(841118),O=e(39297),D=e(868526),f=e(605019),s=e(614651),i=e(280936),a=e(667294),o=e(625467),n=e(785893);function l(){return(0,n.jsx)(s.dY,{children:(0,n.jsx)(a.Suspense,{fallback:(0,n.jsx)(i.Z,{}),children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsxs)("h1",{id:"router",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#router",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"Router"]}),(0,n.jsxs)("h2",{id:"api",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"API"]}),(0,n.jsxs)("h3",{id:"initial",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#initial",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"Initial"]}),(0,n.jsx)(_.Z,{lang:"tsx",children:o.texts[0].value}),(0,n.jsxs)("h3",{id:"add-route",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#add-route",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"add Route"]}),(0,n.jsxs)("h4",{id:"basic",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#basic",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"basic"]}),(0,n.jsx)(_.Z,{lang:"tsx",children:o.texts[1].value}),(0,n.jsxs)("h4",{id:"component-is-string",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#component-is-string",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"Component is String"]}),(0,n.jsx)(_.Z,{lang:"tsx",children:o.texts[2].value}),(0,n.jsxs)("h4",{id:"nested",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#nested",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"nested"]}),(0,n.jsx)(_.Z,{lang:"tsx",children:o.texts[3].value}),(0,n.jsx)("p",{children:o.texts[4].value}),(0,n.jsx)(_.Z,{lang:"tsx",children:o.texts[5].value}),(0,n.jsxs)("h3",{id:"remove-route",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#remove-route",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"remove Route"]}),(0,n.jsx)(_.Z,{lang:"tsx",children:o.texts[6].value}),(0,n.jsxs)("h4",{id:"router-in-plugin",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#router-in-plugin",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"Router in plugin"]}),(0,n.jsx)(_.Z,{lang:"tsx",children:o.texts[7].value}),(0,n.jsxs)("h2",{id:"example",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#example",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"Example"]})]}),(0,n.jsx)(s.Dl,{demo:{id:"docs-en-us-api-client-router-demo-0"},previewerProps:{defaultShowCode:!0}})]})})})}t.default=l},625467:function(r,t,e){e.r(t),e.d(t,{texts:function(){return d}});const d=[{value:`const app = new Application({
  router: {
    type: 'browser', // type default value is \`browser\`
  },
});

// or
const app = new Application({
  router: {
    type: 'memory',
    initialEntries: ['/'],
  },
});
`,paraId:0,tocIndex:2},{value:`import { RouteObject } from 'react-router-dom';
const app = new Application();

const Hello = () => {
  return <div>Hello</div>;
};

// first argument is \`name\` of route, second argument is \`RouteObject\`
app.router.add('root', {
  path: '/',
  element: <Hello />,
});

app.router.add('root', {
  path: '/',
  Component: Hello,
});
`,paraId:1,tocIndex:4},{value:`app.addComponents({
  Hello,
});
app.router.add('root', {
  path: '/',
  Component: 'Hello',
});
`,paraId:2,tocIndex:5},{value:`import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <Link to="/home">Home</Link>
      <Link to="/about">about</Link>

      <Outlet />
    </div>
  );
};

const Home = () => {
  return <div>Home</div>;
};

const About = () => {
  return <div>About</div>;
};

app.router.add('root', {
  element: <Layout />,
});
app.router.add('root.home', {
  path: '/home',
  element: <Home />,
});
app.router.add('root.about', {
  path: '/about',
  element: <About />,
});
`,paraId:3,tocIndex:6},{value:"It will generate the following routes:",paraId:4,tocIndex:6},{value:`{
  element: <Layout />,
  children: [
    {
      path: '/home',
      element: <Home />
    },
    {
      path: '/about',
      element: <About />
    }
  ]
}
`,paraId:5,tocIndex:6},{value:`// remove route by name
app.router.remove('root.home');
app.router.remove('hello');
`,paraId:6,tocIndex:7},{value:`class MyPlugin extends Plugin {
  async load() {
    // add route
    this.app.router.add('hello', {
      path: '/hello',
      element: <div>hello</div>,
    });

    // remove route
    this.app.router.remove('world');
  }
}
`,paraId:7,tocIndex:8}]}}]);
