"use strict";(self.webpackChunknocobase_docs=self.webpackChunknocobase_docs||[]).push([[5939],{586650:function(t,o,_){_.r(o);var s=_(572269),r=_(793359),m=_(861788),c=_(719977),h=_(20190),d=_(24268),E=_(496057),x=_(585939),M=_(28484),v=_(635206),P=_(375553),D=_(156266),O=_(572333),I=_(841118),f=_(39297),C=_(868526),L=_(605019),a=_(614651),l=_(280936),u=_(667294),n=_(761269),e=_(785893);function i(){return(0,e.jsx)(a.dY,{children:(0,e.jsx)(u.Suspense,{fallback:(0,e.jsx)(l.Z,{}),children:(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h1",{id:"how-to-enable-the-federated-engine-in-mysql",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#how-to-enable-the-federated-engine-in-mysql",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"How to Enable the Federated Engine in MySQL"]}),(0,e.jsx)("p",{children:n.texts[0].value}),(0,e.jsx)(d.Z,{lang:"yml",children:n.texts[1].value}),(0,e.jsxs)("p",{children:[n.texts[2].value,(0,e.jsx)("code",{children:n.texts[3].value}),n.texts[4].value]}),(0,e.jsx)(d.Z,{lang:"conf",children:n.texts[5].value}),(0,e.jsx)("p",{children:n.texts[6].value}),(0,e.jsx)(d.Z,{lang:"bash",children:n.texts[7].value}),(0,e.jsx)("p",{children:n.texts[8].value}),(0,e.jsx)(d.Z,{lang:"sql",children:n.texts[9].value}),(0,e.jsx)("p",{children:(0,e.jsx)("img",{src:"https://static-docs.nocobase.com/ac5d97cf902ad164e141633a41a23e46.png",alt:"Alt text"})})]})})})})}o.default=i},761269:function(t,o,_){_.r(o),_.d(o,{texts:function(){return s}});const s=[{value:"The MySQL database does not enable the federated module by default. You need to modify the my.cnf configuration. If you are using the Docker version, you can handle the extension situation through volumes:",paraId:0,tocIndex:0},{value:`mysql:
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
`,paraId:1,tocIndex:0},{value:"Create a new ",paraId:2,tocIndex:0},{value:"./storage/mysql-conf/federated.cnf",paraId:2,tocIndex:0},{value:" file",paraId:2,tocIndex:0},{value:`[mysqld]
federated
`,paraId:3,tocIndex:0},{value:"Restart MySQL",paraId:4,tocIndex:0},{value:`docker compose up -d mysql
`,paraId:5,tocIndex:0},{value:"Check if federated is activated",paraId:6,tocIndex:0},{value:`show engines
`,paraId:7,tocIndex:0}]}}]);
