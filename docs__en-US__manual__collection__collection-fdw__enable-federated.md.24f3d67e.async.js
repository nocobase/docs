"use strict";(self.webpackChunknocobase_docs=self.webpackChunknocobase_docs||[]).push([[24899],{274590:function(t,d,_){_.r(d);var o=_(572269),m=_(793359),c=_(861788),i=_(719977),E=_(20190),s=_(24268),h=_(496057),x=_(585939),M=_(28484),P=_(635206),v=_(375553),D=_(156266),O=_(572333),I=_(841118),f=_(39297),C=_(868526),j=_(605019),a=_(614651),l=_(280936),u=_(667294),n=_(309063),e=_(785893);function r(){return(0,e.jsx)(a.dY,{children:(0,e.jsx)(u.Suspense,{fallback:(0,e.jsx)(l.Z,{}),children:(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h1",{id:"mysql-\u5982\u4F55\u542F\u7528-federated-\u5F15\u64CE",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#mysql-\u5982\u4F55\u542F\u7528-federated-\u5F15\u64CE",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"MySQL \u5982\u4F55\u542F\u7528 federated \u5F15\u64CE"]}),(0,e.jsx)("p",{children:n.texts[0].value}),(0,e.jsx)(s.Z,{lang:"yml",children:n.texts[1].value}),(0,e.jsxs)("p",{children:[n.texts[2].value,(0,e.jsx)("code",{children:n.texts[3].value}),n.texts[4].value]}),(0,e.jsx)(s.Z,{lang:"conf",children:n.texts[5].value}),(0,e.jsx)("p",{children:n.texts[6].value}),(0,e.jsx)(s.Z,{lang:"bash",children:n.texts[7].value}),(0,e.jsx)("p",{children:n.texts[8].value}),(0,e.jsx)(s.Z,{lang:"sql",children:n.texts[9].value}),(0,e.jsx)("p",{children:(0,e.jsx)("img",{src:"https://static-docs.nocobase.com/ac5d97cf902ad164e141633a41a23e46.png",alt:"Alt text"})})]})})})})}d.default=r},309063:function(t,d,_){_.r(d),_.d(d,{texts:function(){return o}});const o=[{value:"MySQL \u6570\u636E\u5E93\u9ED8\u8BA4\u6CA1\u6709\u5F00\u542F federated \u6A21\u5757\uFF0C\u9700\u8981\u4FEE\u6539 my.cnf \u914D\u7F6E\uFF0C\u5982\u679C\u662F docker \u7248\u672C\uFF0C\u53EF\u4EE5\u901A\u8FC7 volumes \u6765\u5904\u7406\u6269\u5C55\u7684\u60C5\u51B5\uFF1A",paraId:0,tocIndex:0},{value:`mysql:
  image: mysql:8.1.0
  volumes:
    - ./storage/mysql-conf:/etc/mysql/conf.d
  environment:
    MYSQL_DATABASE: nocobase
    MYSQL_USER: nocobase
    MYSQL_PASSWORD: nocobase
    MYSQL_ROOT_PASSWORD: nocobase
  restart: always
  networks:
    - nocobase
`,paraId:1,tocIndex:0},{value:"\u65B0\u5EFA ",paraId:2,tocIndex:0},{value:"./storage/mysql-conf/federated.cnf",paraId:2,tocIndex:0},{value:" \u6587\u4EF6",paraId:2,tocIndex:0},{value:`[mysqld]
federated
`,paraId:3,tocIndex:0},{value:"\u91CD\u542F mysql",paraId:4,tocIndex:0},{value:`docker compose up -d mysql
`,paraId:5,tocIndex:0},{value:"\u67E5\u770B federated \u662F\u5426\u5DF2\u7ECF\u6FC0\u6D3B",paraId:6,tocIndex:0},{value:`show engines
`,paraId:7,tocIndex:0}]}}]);
