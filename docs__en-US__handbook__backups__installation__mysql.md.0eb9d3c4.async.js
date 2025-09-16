"use strict";(self.webpackChunknocobase_docs=self.webpackChunknocobase_docs||[]).push([[38812],{759076:function(d,o,n){n.r(o);var i=n(572269),c=n(793359),u=n(861788),m=n(719977),h=n(20190),t=n(24268),b=n(496057),p=n(585939),x=n(28484),E=n(635206),v=n(375553),g=n(156266),y=n(572333),f=n(841118),D=n(39297),I=n(868526),P=n(605019),a=n(614651),_=n(280936),r=n(667294),s=n(318734),e=n(785893);function l(){return(0,e.jsx)(a.dY,{children:(0,e.jsx)(r.Suspense,{fallback:(0,e.jsx)(_.Z,{}),children:(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h1",{id:"mysql-database-client-installation",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#mysql-database-client-installation",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"MySQL Database Client Installation"]}),(0,e.jsxs)("h2",{id:"docker-installation",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#docker-installation",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Docker Installation"]}),(0,e.jsxs)("h3",{id:"create-a-dockerfile-in-the-directory-where-your-nocobase-dockerfile-is-located",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#create-a-dockerfile-in-the-directory-where-your-nocobase-dockerfile-is-located",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Create a Dockerfile in the directory where your NocoBase Dockerfile is located"]}),(0,e.jsx)(t.Z,{lang:"Dockerfile",children:s.texts[0].value}),(0,e.jsxs)("h3",{id:"modify-nocobases-docker-composeyml-file",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#modify-nocobases-docker-composeyml-file",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Modify NocoBase\u2019s docker-compose.yml File"]}),(0,e.jsx)(t.Z,{lang:"diff",children:s.texts[1].value}),(0,e.jsxs)("h3",{id:"upgrading",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#upgrading",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Upgrading"]}),(0,e.jsx)("p",{children:s.texts[2].value}),(0,e.jsx)(t.Z,{lang:"diff",children:s.texts[3].value}),(0,e.jsxs)("h2",{id:"other-installation-methods",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#other-installation-methods",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Other Installation Methods"]}),(0,e.jsxs)("p",{children:[s.texts[4].value,(0,e.jsx)(a.rU,{to:"/welcome/getting-started/installation/create-nocobase-app",children:s.texts[5].value}),s.texts[6].value,(0,e.jsx)(a.rU,{to:"/welcome/getting-started/installation/git-clone",children:s.texts[7].value}),s.texts[8].value]}),(0,e.jsxs)("ul",{children:[(0,e.jsxs)("li",{children:[s.texts[9].value,(0,e.jsx)("a",{href:"https://downloads.mysql.com/archives/community/",children:s.texts[10].value})]}),(0,e.jsxs)("li",{children:[s.texts[11].value,(0,e.jsx)("a",{href:"https://dev.mysql.com/downloads/mysql/",children:s.texts[12].value})]})]})]})})})})}o.default=l},318734:function(d,o,n){n.r(o),n.d(o,{texts:function(){return i}});const i=[{value:`# Based on the "next" version
FROM nocobase/nocobase:latest

# Update sources.list to use the official Debian repositories
RUN tee /etc/apt/sources.list > /dev/null <<EOF
deb http://deb.debian.org/debian/ bullseye main contrib non-free
deb-src http://deb.debian.org/debian/ bullseye main contrib non-free
deb http://security.debian.org/debian-security bullseye-security main contrib non-free
deb-src http://security.debian.org/debian-security bullseye-security main contrib non-free
deb http://deb.debian.org/debian/ bullseye-updates main contrib non-free
deb-src http://deb.debian.org/debian/ bullseye-updates main contrib non-free
deb http://deb.debian.org/debian/ bullseye-backports main contrib non-free
deb-src http://deb.debian.org/debian/ bullseye-backports main contrib non-free
EOF

# Execute the installation script.
# Please replace the link below with the appropriate MySQL version link if necessary.
RUN apt-get update && apt-get install -y wget && \\
 wget https://downloads.mysql.com/archives/get/p/23/file/mysql-community-client-core_8.1.0-1debian11_amd64.deb && \\
 dpkg -x mysql-community-client-core_8.1.0-1debian11_amd64.deb /tmp/mysql-client && \\
 cp /tmp/mysql-client/usr/bin/mysqldump /usr/bin/ && \\
 cp /tmp/mysql-client/usr/bin/mysql /usr/bin/
`,paraId:0,tocIndex:2},{value:`version: "3"
networks:
  nocobase:
    driver: bridge
services:
  app:
-   image: nocobase/nocobase:next
+   build:
+     dockerfile: Dockerfile
    networks:
      - nocobase
    restart: always
    depends_on:
      - postgres
    environment:
      # Application secret key used for generating user tokens, etc.
      # Changing APP_KEY will invalidate existing tokens.
      # Use any random string and keep it confidential.
      - APP_KEY=your-secret-key
      # Database dialect; supports postgres, mysql, mariadb
      - DB_DIALECT=postgres
      # Database host; replace with the IP address of your existing database server if needed
      - DB_HOST=postgres
      # Database name
      - DB_DATABASE=nocobase
      # Database user
      - DB_USER=nocobase
      # Database password
      - DB_PASSWORD=nocobase
      # Time zone
      - TZ=Asia/Shanghai
    volumes:
      - ./storage:/app/nocobase/storage
    ports:
      - "13000:80"
    # init: true
  # If you are using an existing database service, you can omit the postgres service.
  postgres:
-    image: nocobase/postgres:16
+    image: nocobase/postgres:16
    restart: always
    command: postgres -c wal_level=logical
    environment:
      POSTGRES_USER: nocobase
      POSTGRES_DB: nocobase
      POSTGRES_PASSWORD: nocobase
    volumes:
      - ./storage/db/postgres:/var/lib/postgresql/data
    networks:
      - nocobase
`,paraId:1,tocIndex:3},{value:"Previously, you would pull a new image for each update. Now, you need to build a new image every time:",paraId:2,tocIndex:4},{value:`# Pull the latest image
- docker-compose pull app
# Update the app container
+ docker-compose build app --pull
# Start the container
docker-compose up -d app
# Check the app logs
docker-compose logs app
`,paraId:3,tocIndex:4},{value:"If you installed NocoBase using ",paraId:4,tocIndex:5},{value:"create-nocobase-app installation",paraId:5,tocIndex:5},{value:" or by ",paraId:4,tocIndex:5},{value:"cloning the Git repository",paraId:6,tocIndex:5},{value:", please visit the official MySQL download page to select the appropriate MySQL version and follow the official documentation for installation:",paraId:4,tocIndex:5},{value:"Historical versions: ",paraId:7,tocIndex:5},{value:"https://downloads.mysql.com/archives/community/",paraId:7,tocIndex:5},{value:"Latest version: ",paraId:7,tocIndex:5},{value:"https://dev.mysql.com/downloads/mysql/",paraId:7,tocIndex:5}]}}]);
