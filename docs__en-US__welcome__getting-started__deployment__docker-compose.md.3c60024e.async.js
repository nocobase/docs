"use strict";(self.webpackChunknocobase_docs=self.webpackChunknocobase_docs||[]).push([[26248],{805351:function(d,t,o){o.r(t);var a=o(572269),c=o(793359),u=o(861788),h=o(719977),x=o(20190),_=o(24268),m=o(496057),v=o(585939),I=o(28484),p=o(635206),P=o(375553),E=o(156266),j=o(572333),D=o(841118),M=o(39297),g=o(868526),O=o(605019),s=o(614651),i=o(280936),r=o(667294),n=o(367417),e=o(785893);function l(){return(0,e.jsx)(s.dY,{children:(0,e.jsx)(r.Suspense,{fallback:(0,e.jsx)(i.Z,{}),children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h1",{id:"docker",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#docker",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Docker"]}),(0,e.jsxs)("p",{children:[n.texts[0].value,(0,e.jsx)(s.rU,{to:"/welcome/getting-started/installation/docker-compose",children:n.texts[1].value}),n.texts[2].value]}),(0,e.jsx)("p",{children:(0,e.jsx)("strong",{children:n.texts[3].value})}),(0,e.jsxs)("ul",{children:[(0,e.jsxs)("li",{children:[(0,e.jsx)("code",{children:n.texts[4].value}),n.texts[5].value]}),(0,e.jsxs)("li",{children:[(0,e.jsx)("code",{children:n.texts[6].value}),n.texts[7].value]}),(0,e.jsxs)("li",{children:[(0,e.jsx)("code",{children:n.texts[8].value}),n.texts[9].value]}),(0,e.jsxs)("li",{children:[n.texts[10].value,(0,e.jsx)("code",{children:n.texts[11].value}),n.texts[12].value]}),(0,e.jsxs)("li",{children:[n.texts[13].value,(0,e.jsx)("code",{children:n.texts[14].value}),n.texts[15].value,(0,e.jsx)("code",{children:n.texts[16].value}),n.texts[17].value]})]}),(0,e.jsx)("br",{})]}),(0,e.jsx)(s.rU,{to:"/welcome/getting-started/env",children:n.texts[18].value}),(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"domain-binding",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#domain-binding",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Domain Binding"]}),(0,e.jsxs)("p",{children:[n.texts[19].value,(0,e.jsx)("a",{href:"http://127.0.0.1:13000/",children:n.texts[20].value})]}),(0,e.jsx)(_.Z,{lang:"bash",children:n.texts[21].value}),(0,e.jsxs)("h2",{id:"deploy-on-subpath",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#deploy-on-subpath",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Deploy on Subpath"]}),(0,e.jsxs)("p",{children:[n.texts[22].value,(0,e.jsx)("code",{children:n.texts[23].value}),n.texts[24].value]}),(0,e.jsx)(_.Z,{lang:"diff",children:n.texts[25].value}),(0,e.jsxs)("p",{children:[n.texts[26].value,(0,e.jsx)("a",{href:"http://127.0.0.1:13000/nocobase/",children:n.texts[27].value}),n.texts[28].value]}),(0,e.jsx)(_.Z,{lang:"bash",children:n.texts[29].value}),(0,e.jsx)("p",{children:n.texts[30].value})]})]})})})}t.default=l},367417:function(d,t,o){o.r(t),o.d(t,{texts:function(){return a}});const a=[{value:"The other processes are no different from the ",paraId:0,tocIndex:0},{value:"Docker installation",paraId:1,tocIndex:0},{value:".",paraId:0,tocIndex:0},{value:"Points to Note:",paraId:2,tocIndex:0},{value:"TZ",paraId:3,tocIndex:0},{value:" is used to set the application's time zone, with the default being the system's time zone;",paraId:3,tocIndex:0},{value:"APP_KEY",paraId:3,tocIndex:0},{value:" is the application's secret key, used for generating user tokens and so on (if APP_KEY is changed, the old tokens will also become invalid). It can be any random string. Please change it to your own secret key and ensure it is not disclosed to the public.",paraId:3,tocIndex:0},{value:"DB_*",paraId:3,tocIndex:0},{value:" is related to the database. If it is not the default database service in the example, please modify it according to the actual situation;",paraId:3,tocIndex:0},{value:"When deploying in a production environment, ",paraId:3,tocIndex:0},{value:"APP_ENV=production",paraId:3,tocIndex:0},{value:";",paraId:3,tocIndex:0},{value:"When deploying on a subpath, you need to configure ",paraId:3,tocIndex:0},{value:"APP_PUBLIC_PATH",paraId:3,tocIndex:0},{value:", such as ",paraId:3,tocIndex:0},{value:"APP_PUBLIC_PATH=/nocobase/",paraId:3,tocIndex:0},{value:".",paraId:3,tocIndex:0},{value:">>> For more information, view the complete 'Environment Variables' <<<",paraId:4},{value:"Taking nginx as an example, proxy through nginx ",paraId:5,tocIndex:1},{value:"http://127.0.0.1:13000/",paraId:5,tocIndex:1},{value:`server {
    listen 80;
    server_name your_domain.com;  # Replace your_domain.com with your domain

    location / {
        proxy_pass http://127.0.0.1:13000/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "Upgrade";
        proxy_set_header Host $host;
        proxy_buffering off;
    }
}
`,paraId:6,tocIndex:1},{value:"To deploy to a subpath, you need to configure the ",paraId:7,tocIndex:2},{value:"APP_PUBLIC_PATH",paraId:7,tocIndex:2},{value:" environment variable.",paraId:7,tocIndex:2},{value:`services:
  app:
    image: nocobase/nocobase:latest
    environment:
+     - APP_PUBLIC_PATH=/nocobase/
`,paraId:8,tocIndex:2},{value:"The application's URL is ",paraId:9,tocIndex:2},{value:"http://127.0.0.1:13000/nocobase/",paraId:9,tocIndex:2},{value:", and the Nginx configuration is",paraId:9,tocIndex:2},{value:`server {
    listen 80;
    server_name your_domain.com;  # Replace your_domain.com with your domain

    location /nocobase/ {
        proxy_pass http://127.0.0.1:13000/nocobase/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "Upgrade";
        proxy_set_header Host $host;
    }
}
`,paraId:10,tocIndex:2},{value:"Finally, you can access it through http://your_domain.com/nocobase/",paraId:11,tocIndex:2}]}}]);
