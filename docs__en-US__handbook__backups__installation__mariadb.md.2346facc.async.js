"use strict";(self.webpackChunknocobase_docs=self.webpackChunknocobase_docs||[]).push([[78702],{160411:function(d,o,n){n.r(o);var i=n(572269),c=n(793359),u=n(861788),m=n(719977),h=n(20190),s=n(24268),b=n(496057),x=n(585939),p=n(28484),E=n(635206),D=n(375553),v=n(156266),g=n(572333),f=n(841118),y=n(39297),I=n(868526),P=n(605019),t=n(614651),_=n(280936),r=n(667294),a=n(430575),e=n(785893);function l(){return(0,e.jsx)(t.dY,{children:(0,e.jsx)(r.Suspense,{fallback:(0,e.jsx)(_.Z,{}),children:(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h1",{id:"mariadb-database-client-installation",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#mariadb-database-client-installation",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"MariaDB Database Client Installation"]}),(0,e.jsxs)("h2",{id:"docker-installation",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#docker-installation",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Docker Installation"]}),(0,e.jsxs)("h3",{id:"create-a-dockerfile-in-the-directory-containing-the-nocobase-dockerfile",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#create-a-dockerfile-in-the-directory-containing-the-nocobase-dockerfile",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Create a Dockerfile in the directory containing the NocoBase Dockerfile"]}),(0,e.jsx)(s.Z,{lang:"Dockerfile",children:a.texts[0].value}),(0,e.jsxs)("h3",{id:"modify-the-docker-composeyml-file-for-nocobase",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#modify-the-docker-composeyml-file-for-nocobase",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Modify the docker-compose.yml File for NocoBase"]}),(0,e.jsx)(s.Z,{lang:"diff",children:a.texts[1].value}),(0,e.jsxs)("h3",{id:"upgrading",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#upgrading",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Upgrading"]}),(0,e.jsx)("p",{children:a.texts[2].value}),(0,e.jsx)(s.Z,{lang:"diff",children:a.texts[3].value}),(0,e.jsxs)("h2",{id:"other-installation-methods",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#other-installation-methods",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Other Installation Methods"]}),(0,e.jsxs)("p",{children:[a.texts[4].value,(0,e.jsx)(t.rU,{to:"/welcome/getting-started/installation/create-nocobase-app",children:a.texts[5].value}),a.texts[6].value,(0,e.jsx)(t.rU,{to:"/welcome/getting-started/installation/git-clone",children:a.texts[7].value}),a.texts[8].value]}),(0,e.jsx)("ul",{children:(0,e.jsxs)("li",{children:[a.texts[9].value,(0,e.jsx)("a",{href:"https://dev.mysql.com/downloads/mysql/",children:a.texts[10].value})]})})]})})})})}o.default=l},430575:function(d,o,n){n.r(o),n.d(o,{texts:function(){return i}});const i=[{value:`# Based on the "next" version
FROM nocobase/nocobase:latest

# Update sources.list with the official Debian repositories
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

# Run the installation script to install the latest MySQL client version
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
-   image: nocobase/nocobase:next  # (previously: registry.cn-shanghai.aliyuncs.com/nocobase/nocobase:next)
+   build:
+     dockerfile: Dockerfile
    networks:
      - nocobase
    restart: always
    depends_on:
      - mariadb
    environment:
      # Application secret key used for generating user tokens, etc.
      # Changing APP_KEY will invalidate existing tokens.
      # Use any random string and keep it confidential.
      - APP_KEY=your-secret-key
      # Database dialect; supports postgres, mysql, mariadb
      - DB_DIALECT=mariadb
      # Database host; can be replaced with an existing database server's IP
      - DB_HOST=mariadb
      # Database name
      - DB_DATABASE=nocobase
      # Database user
      - DB_USER=root
      # Database password
      - DB_PASSWORD=nocobase
      # Whether to convert table and field names to snake case
      - DB_UNDERSCORED=true
      # Time zone
      - TZ=Asia/Shanghai
    volumes:
      - ./storage:/app/nocobase/storage
    ports:
      - "13000:80"
    # init: true

  # If you are using an existing database service, you can omit starting mariadb
  mariadb:
-    image: nocobase/mariadb:11  # (previously: registry.cn-shanghai.aliyuncs.com/nocobase/mariadb:11)
+    image: nocobase/mariadb:11
    environment:
      MYSQL_DATABASE: nocobase
      MYSQL_USER: nocobase
      MYSQL_PASSWORD: nocobase
      MYSQL_ROOT_PASSWORD: nocobase
    restart: always
    volumes:
      - ./storage/db/mariadb:/var/lib/mysql
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
`,paraId:3,tocIndex:4},{value:"If your NocoBase was installed using ",paraId:4,tocIndex:5},{value:"create-nocobase-app",paraId:5,tocIndex:5},{value:" or by ",paraId:4,tocIndex:5},{value:"cloning the Git repository",paraId:6,tocIndex:5},{value:", please visit the official MySQL download page for installation.",paraId:4,tocIndex:5},{value:"Latest version: ",paraId:7,tocIndex:5},{value:"https://dev.mysql.com/downloads/mysql/",paraId:7,tocIndex:5}]}}]);
