"use strict";(self.webpackChunknocobase_docs=self.webpackChunknocobase_docs||[]).push([[35831],{192313:function(_,s,n){n.r(s);var d=n(572269),h=n(793359),m=n(861788),i=n(719977),x=n(20190),o=n(24268),b=n(496057),E=n(585939),D=n(28484),v=n(635206),g=n(375553),I=n(156266),j=n(572333),r=n(841118),P=n(39297),p=n(868526),O=n(605019),t=n(614651),l=n(280936),c=n(667294),a=n(598231),e=n(785893);function u(){return(0,e.jsx)(t.dY,{children:(0,e.jsx)(c.Suspense,{fallback:(0,e.jsx)(l.Z,{}),children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:"markdown",children:(0,e.jsxs)("h1",{id:"data-source---kingbasees-database",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#data-source---kingbasees-database",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Data Source - KingbaseES Database"]})}),(0,e.jsx)(r.Z,{name:"data-source-kingbase",licenseBundled:"true",licensebundled:"true"}),(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"introduction",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#introduction",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Introduction"]}),(0,e.jsx)("p",{children:a.texts[0].value})]}),(0,e.jsx)(i.Z,{type:"warning",children:(0,e.jsx)("p",{children:a.texts[1].value})}),(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"installation",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#installation",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Installation"]}),(0,e.jsxs)("h3",{id:"using-as-the-primary-database",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#using-as-the-primary-database",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Using as the Primary Database"]}),(0,e.jsxs)("p",{children:[a.texts[2].value,(0,e.jsx)(t.rU,{to:"/welcome/getting-started/installation",children:a.texts[3].value}),a.texts[4].value]}),(0,e.jsxs)("h4",{id:"environment-variables",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#environment-variables",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Environment Variables"]}),(0,e.jsx)("p",{children:a.texts[5].value}),(0,e.jsx)(o.Z,{lang:"bash",children:a.texts[6].value}),(0,e.jsxs)("h4",{id:"docker-installation",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#docker-installation",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Docker Installation"]}),(0,e.jsx)(o.Z,{lang:"yml",children:a.texts[7].value}),(0,e.jsxs)("h4",{id:"installation-using-create-nocobase-app",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#installation-using-create-nocobase-app",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Installation Using create-nocobase-app"]}),(0,e.jsx)(o.Z,{lang:"bash",children:a.texts[8].value}),(0,e.jsxs)("h3",{id:"using-as-an-external-database",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#using-as-an-external-database",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Using as an External Database"]}),(0,e.jsx)("p",{children:a.texts[9].value}),(0,e.jsx)(o.Z,{lang:"bash",children:a.texts[10].value}),(0,e.jsx)("p",{children:a.texts[11].value}),(0,e.jsx)("p",{children:(0,e.jsx)("img",{src:"https://static-docs.nocobase.com/20241024121815.png",alt:"20241024121815"})}),(0,e.jsxs)("h2",{id:"user-guide",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#user-guide",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"User Guide"]}),(0,e.jsxs)("ul",{children:[(0,e.jsxs)("li",{children:[a.texts[12].value,(0,e.jsx)(t.rU,{to:"/handbook",children:a.texts[13].value})]}),(0,e.jsxs)("li",{children:[a.texts[14].value,(0,e.jsx)(t.rU,{to:"/handbook/data-source-manager/external-database",children:a.texts[15].value})]})]})]})]})})})}s.default=u},598231:function(_,s,n){n.r(s),n.d(s,{texts:function(){return d}});const d=[{value:"KingbaseES can be used as a data source, either as the primary database or an external database.",paraId:0,tocIndex:1},{value:"Currently, only KingbaseES databases running in pg mode are supported.",paraId:1},{value:"Refer to the ",paraId:2,tocIndex:3},{value:"Installation Overview",paraId:3,tocIndex:3},{value:" for the setup procedures, the difference is mainly due to the environment variables.",paraId:2,tocIndex:3},{value:"Edit the .env file to add or modify the following environment variable configurations:",paraId:4,tocIndex:4},{value:`# Adjust DB parameters as needed
DB_DIALECT=kingbase
DB_HOST=localhost
DB_PORT=54321
DB_DATABASE=kingbase
DB_USER=nocobase
DB_PASSWORD=nocobase
`,paraId:5,tocIndex:4},{value:`version: "3"

networks:
  nocobase:
    driver: bridge

  app:
    image: registry.cn-shanghai.aliyuncs.com/nocobase/nocobase:latest
    restart: always
    networks:
      - nocobase
    depends_on:
      - postgres
    environment:
      # Application key for generating user tokens, etc.
      # Changing APP_KEY invalidates old tokens
      # Use a random string and keep it confidential
      - APP_KEY=your-secret-key
      # Database type
      - DB_DIALECT=kingbase
      # Database host, replace with existing database server IP if needed
      - DB_HOST=kingbase
      # Database name
      - DB_DATABASE=kingbase
      # Database user
      - DB_USER=nocobase
      # Database password
      - DB_PASSWORD=nocobase
      # Timezone
      - TZ=UTC
    volumes:
      - ./storage:/app/nocobase/storage
    ports:
      - "13000:80"

  # Kingbase service for testing purposes only
  kingbase:
    image: registry.cn-shanghai.aliyuncs.com/nocobase/kingbase:v009r001c001b0030_single_x86
    platform: linux/amd64
    restart: always
    privileged: true
    networks:
      - nocobase
    volumes:
      - ./storage/db/kingbase:/home/kingbase/userdata
    environment:
      ENABLE_CI: no # Must be set to no
      DB_USER: nocobase
      DB_PASSWORD: nocobase
      DB_MODE: pg  # pg only
      NEED_START: yes
    command: ["/usr/sbin/init"]
`,paraId:6,tocIndex:5},{value:`yarn create nocobase-app my-nocobase-app -d kingbase \\
   -e DB_HOST=localhost \\
   -e DB_PORT=54321 \\
   -e DB_DATABASE=kingbase \\
   -e DB_USER=nocobase \\
   -e DB_PASSWORD=nocobase \\
   -e TZ=UTC
`,paraId:7,tocIndex:6},{value:"Execute the installation or upgrade command",paraId:8,tocIndex:7},{value:`yarn nocobase install
# or
yarn nocobase upgrade
`,paraId:9,tocIndex:7},{value:"Activate the Plugin",paraId:10,tocIndex:7},{value:"Primary Database: Refer to the ",paraId:11,tocIndex:8},{value:"handbook",paraId:12,tocIndex:8},{value:"External Database: See ",paraId:11,tocIndex:8},{value:"Data Source / External Database",paraId:13,tocIndex:8}]}}]);
