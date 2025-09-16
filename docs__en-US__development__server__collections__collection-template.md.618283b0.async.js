"use strict";(self.webpackChunknocobase_docs=self.webpackChunknocobase_docs||[]).push([[48275],{496870:function(d,s,e){e.r(s);var o=e(572269),r=e(793359),m=e(861788),u=e(719977),h=e(20190),t=e(24268),E=e(496057),x=e(585939),M=e(28484),P=e(635206),D=e(375553),I=e(156266),O=e(572333),v=e(841118),j=e(39297),f=e(868526),C=e(605019),i=e(614651),l=e(280936),a=e(667294),_=e(531404),n=e(785893);function c(){return(0,n.jsx)(i.dY,{children:(0,n.jsx)(a.Suspense,{fallback:(0,n.jsx)(l.Z,{}),children:(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsxs)("h1",{id:"collection-templates",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#collection-templates",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"Collection templates"]}),(0,n.jsx)("p",{children:_.texts[0].value}),(0,n.jsxs)("h2",{id:"general-collections",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#general-collections",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"General collections"]}),(0,n.jsx)(t.Z,{lang:"ts",children:_.texts[1].value}),(0,n.jsxs)("h2",{id:"tree-structure-collections",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#tree-structure-collections",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"Tree structure collections"]}),(0,n.jsx)(t.Z,{lang:"ts",children:_.texts[2].value}),(0,n.jsxs)("h2",{id:"parent-child-inheritance-collections",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#parent-child-inheritance-collections",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"Parent-child inheritance collections"]}),(0,n.jsx)(t.Z,{lang:"ts",children:_.texts[3].value}),(0,n.jsxs)("h2",{id:"more-templates",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#more-templates",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"More templates"]}),(0,n.jsx)("p",{children:_.texts[4].value}),(0,n.jsx)(t.Z,{lang:"ts",children:_.texts[5].value})]})})})})}s.default=c},531404:function(d,s,e){e.r(s),e.d(s,{texts:function(){return o}});const o=[{value:"In real business scenarios, different collections may have their own initialization rules and business logic, and NocoBase addresses such issues by providing collection templates.",paraId:0,tocIndex:0},{value:`db.collection({
  name: 'posts',
  fields: [
    {
      type: 'string',
      name: 'title',
    },
  ],
});
`,paraId:1,tocIndex:1},{value:`db.collection({
  name: 'categories',
  tree: 'adjacency-list',
  fields: [
    {
      type: 'string',
      name: 'name',
    },
    {
      type: 'string',
      name: 'description',
    },
    {
      type: 'belongsTo',
      name: 'parent',
      target: 'categories',
      foreignKey: 'parentId',
    },
    {
      type: 'hasMany',
      name: 'children',
      target: 'categories',
      foreignKey: 'parentId',
    },
  ],
});
`,paraId:2,tocIndex:2},{value:`db.collection({
  name: 'a',
  fields: [],
});

db.collection({
  name: 'b',
  inherits: 'a',
  fields: [],
});
`,paraId:3,tocIndex:3},{value:"As in the case of calendar collections, each initialized collection needs to be initialized with special cron and exclude fields, and the definition of such fields is done by the template",paraId:4,tocIndex:4},{value:`db.collection({
  name: 'events',
  template: 'calendar',
});
`,paraId:5,tocIndex:4}]}}]);
