"use strict";(self.webpackChunknocobase_docs=self.webpackChunknocobase_docs||[]).push([[42084],{6153:function(s,_,n){n.r(_);var t=n(572269),c=n(793359),r=n(861788),m=n(719977),E=n(20190),d=n(24268),h=n(496057),x=n(585939),I=n(28484),P=n(635206),O=n(375553),D=n(156266),M=n(572333),v=n(841118),f=n(39297),C=n(868526),A=n(605019),l=n(614651),i=n(280936),a=n(667294),o=n(527343),e=n(785893);function u(){return(0,e.jsx)(l.dY,{children:(0,e.jsx)(a.Suspense,{fallback:(0,e.jsx)(i.Z,{}),children:(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h1",{id:"v090-collection-\u6A21\u677F",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#v090-collection-\u6A21\u677F",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"v0.9.0: Collection \u6A21\u677F"]}),(0,e.jsx)("img",{src:n(316089)}),(0,e.jsxs)("h2",{id:"\u4E3A\u4EC0\u4E48\u9700\u8981-collection-\u6A21\u677F",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4E3A\u4EC0\u4E48\u9700\u8981-collection-\u6A21\u677F",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u4E3A\u4EC0\u4E48\u9700\u8981 Collection \u6A21\u677F\uFF1F"]}),(0,e.jsx)("p",{children:o.texts[0].value}),(0,e.jsxs)("h2",{id:"\u914D\u7F6E\u53C2\u6570\u8BF4\u660E",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u914D\u7F6E\u53C2\u6570\u8BF4\u660E",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u914D\u7F6E\u53C2\u6570\u8BF4\u660E"]}),(0,e.jsx)(d.Z,{lang:"ts",children:o.texts[1].value}),(0,e.jsxs)("h2",{id:"\u793A\u4F8B",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u793A\u4F8B",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u793A\u4F8B"]}),(0,e.jsx)("p",{children:o.texts[2].value}),(0,e.jsx)(d.Z,{lang:"ts",children:o.texts[3].value}),(0,e.jsxs)("p",{children:[o.texts[4].value,(0,e.jsx)("a",{href:"https://github.com/nocobase/nocobase/tree/feat/collection-templates/packages/samples/custom-collection-template",children:o.texts[5].value})]})]})})})})}_.default=u},527343:function(s,_,n){n.r(_),n.d(_,{texts:function(){return t}});const t=[{value:"\u5F85\u8865\u5145",paraId:0,tocIndex:1},{value:`interface ICollectionTemplate {
  name: string;
  title?: string;
  /** \u6392\u5E8F */
  order?: number;
  /** \u9ED8\u8BA4\u914D\u7F6E */
  default?: CollectionOptions;
  /** UI \u53EF\u914D\u7F6E\u7684 CollectionOptions \u53C2\u6570\uFF08\u6DFB\u52A0\u6216\u7F16\u8F91\u7684 Collection \u8868\u5355\u7684\u5B57\u6BB5\uFF09 */
  configurableProperties?: Record<string, ISchema>;
  /** \u5F53\u524D\u6A21\u677F\u53EF\u7528\u7684\u5B57\u6BB5\u7C7B\u578B */
  availableFieldInterfaces?:
    | AvailableFieldInterfacesInclude
    | AvailableFieldInterfacesExclude;
}

interface AvailableFieldInterfacesInclude {
  include?: any[];
}

interface AvailableFieldInterfacesExclude {
  exclude?: any[];
}

interface CollectionOptions {
  /**
   * \u81EA\u52A8\u751F\u6210 id
   * @default true
   * */
  autoGenId?: boolean;
  /** \u521B\u5EFA\u4EBA */
  createdBy?: boolean;
  /** \u6700\u540E\u66F4\u65B0\u4EBA */
  updatedBy?: boolean;
  /** \u521B\u5EFA\u65E5\u671F */
  createdAt?: boolean;
  /** \u66F4\u65B0\u65E5\u671F */
  updatedAt?: boolean;
  /** \u53EF\u6392\u5E8F */
  sortable?: boolean;
  /* \u6811\u7ED3\u6784 */
  tree?: string;
  /* \u65E5\u5FD7 */
  logging?: boolean;
  /** \u7EE7\u627F */
  inherits: string | string[];
  /* \u5B57\u6BB5\u5217\u8868 */
  fields?: FieldOptions[];
}
`,paraId:1,tocIndex:2},{value:"\u521B\u5EFA\u65F6\u90FD\u4E0D\u9700\u8981 autoGenId\uFF0C\u5E76\u4E14\u53EA\u63D0\u4F9B title \u548C name \u914D\u7F6E\u9879",paraId:2,tocIndex:3},{value:`import { collectionConfigurableProperties } from '@nocobase/client';

{
  default: {
    autoGenId: false,
    fields: [],
  },
  configurableProperties: {
    ...collectionConfigurableProperties('name', 'title'),
  },
}
`,paraId:3,tocIndex:3},{value:"\u5B8C\u6574\u63D2\u4EF6\u793A\u4F8B\u53C2\u8003\uFF1A",paraId:4,tocIndex:3},{value:"samples/custom-collection-template",paraId:4,tocIndex:3}]},316089:function(s,_,n){s.exports=n.p+"static/v08-1-collection-templates.964e3da7.jpg"}}]);
