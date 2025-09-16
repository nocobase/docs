"use strict";(self.webpackChunknocobase_docs=self.webpackChunknocobase_docs||[]).push([[12572],{587413:function(o,d,n){n.r(d);var s=n(572269),r=n(793359),c=n(861788),m=n(719977),h=n(20190),t=n(24268),E=n(496057),x=n(585939),D=n(28484),M=n(635206),P=n(375553),I=n(156266),O=n(572333),v=n(841118),j=n(39297),C=n(868526),f=n(605019),a=n(614651),i=n(280936),l=n(667294),e=n(238554),_=n(785893);function u(){return(0,_.jsx)(a.dY,{children:(0,_.jsx)(l.Suspense,{fallback:(0,_.jsx)(i.Z,{}),children:(0,_.jsx)(_.Fragment,{children:(0,_.jsxs)("div",{className:"markdown",children:[(0,_.jsxs)("h1",{id:"\u6811\u8868",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u6811\u8868",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"\u6811\u8868"]}),(0,_.jsx)("p",{children:(0,_.jsx)("img",{src:"https://static-docs.nocobase.com/48ea3612a65ba18ea6d898b25a78c4f4.png",alt:""})}),(0,_.jsx)("p",{children:e.texts[0].value}),(0,_.jsx)("p",{children:(0,_.jsx)("img",{src:"https://static-docs.nocobase.com/f49bac32396d6fbdbf979de37a2546f7.png",alt:""})}),(0,_.jsx)("p",{children:e.texts[1].value}),(0,_.jsx)(t.Z,{lang:"go",children:e.texts[2].value}),(0,_.jsx)("p",{children:e.texts[3].value}),(0,_.jsx)("p",{children:(0,_.jsx)("img",{src:"https://static-docs.nocobase.com/0b06b5a954c8d40567d3dcafa2baff96.png",alt:""})}),(0,_.jsx)("p",{children:e.texts[4].value}),(0,_.jsxs)("ul",{children:[(0,_.jsx)("li",{children:e.texts[5].value}),(0,_.jsx)("li",{children:e.texts[6].value})]}),(0,_.jsxs)("h2",{id:"\u5728\u533A\u5757\u4E2D\u4F7F\u7528",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u5728\u533A\u5757\u4E2D\u4F7F\u7528",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"\u5728\u533A\u5757\u4E2D\u4F7F\u7528"]}),(0,_.jsxs)("ul",{children:[(0,_.jsx)("li",{children:e.texts[7].value}),(0,_.jsx)("li",{children:e.texts[8].value})]}),(0,_.jsx)("p",{children:(0,_.jsx)("img",{src:"https://static-docs.nocobase.com/97a7ddf0f26c323a2c986d10b43d7174.png",alt:""})})]})})})})}d.default=u},238554:function(o,d,n){n.r(d),n.d(d,{texts:function(){return s}});const s=[{value:"\u548C\u666E\u901A\u8868\u4E00\u6837\u652F\u6301\u81EA\u5B9A\u4E49\u8BBE\u7F6E\u6570\u636E\u8868\u7684\u884C\u4E3A",paraId:0,tocIndex:0},{value:"\u6811\u8868\u6A21\u677F\u7684\u9884\u5B9A\u4E49\u5B57\u6BB5",paraId:1,tocIndex:0},{value:`[
      {
        interface: 'integer',
        name: 'parentId',
        type: 'bigInt',
        isForeignKey: true,
      },
      {
        interface: 'm2o',
        type: 'belongsTo',
        name: 'parent',
        foreignKey: 'parentId',
        treeParent: true,
        onDelete: 'CASCADE',
      },
      {
        interface: 'o2m',
        type: 'hasMany',
        name: 'children',
        foreignKey: 'parentId',
        treeChildren: true,
        onDelete: 'CASCADE',
      },
    ]
`,paraId:2,tocIndex:0},{value:"\u6811\u8868\u521B\u5EFA\u540E\u521D\u59CB\u5316\u5B57\u6BB5",paraId:3,tocIndex:0},{value:"\u6811\u8868\u6570\u636E\u8868\u6A21\u677F\u662F\u901A\u8FC7\u81EA\u5173\u8054\u5B57\u6BB5\u5B9E\u73B0\u6811\u5F62\u7ED3\u6784\u7684\u8BBE\u8BA1",paraId:4,tocIndex:0},{value:'\u7236\u8282\u70B9\u5173\u8054\u5B57\u6BB5\uFF08Many to One\uFF09\uFF1A\u901A\u5E38\u79F0\u4E3A "Parent" \u5B57\u6BB5\uFF0C\u5B83\u4E0E\u540C\u4E00\u8868\u4E2D\u7684\u5176\u4ED6\u8BB0\u5F55\u5EFA\u7ACB\u5173\u8054\uFF0C\u8868\u793A\u6BCF\u4E2A\u8282\u70B9\u7684\u7236\u8282\u70B9\u3002',paraId:5,tocIndex:0},{value:'\u5B50\u8282\u70B9\u5173\u8054\u5B57\u6BB5\uFF08One to Many\uFF09\uFF1A\u901A\u5E38\u79F0\u4E3A "Children" \u5B57\u6BB5\uFF0C\u5B83\u8868\u793A\u6BCF\u4E2A\u8282\u70B9\u53EF\u4EE5\u6709\u591A\u4E2A\u5B50\u8282\u70B9',paraId:5,tocIndex:0},{value:"\u6811\u8868\u683C :\u9ED8\u8BA4\u5F00\u542F\uFF08\u7981\u7528\u65F6\uFF0C\u6570\u636E\u5C06\u5E73\u94FA\u8FD4\u56DE\uFF09",paraId:6,tocIndex:1},{value:"\u6DFB\u52A0\u5B50\u8BB0\u5F55\uFF1A\u4E3A\u5F53\u524D\u8BB0\u5F55\u6DFB\u52A0\u5B50\u8BB0\u5F55",paraId:6,tocIndex:1}]}}]);
