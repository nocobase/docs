"use strict";(self.webpackChunknocobase_docs=self.webpackChunknocobase_docs||[]).push([[9161],{661400:function(d,s,n){n.r(s);var i=n(572269),c=n(793359),u=n(861788),h=n(719977),m=n(20190),t=n(24268),b=n(496057),p=n(585939),x=n(28484),g=n(635206),E=n(375553),f=n(156266),v=n(572333),D=n(841118),P=n(39297),I=n(868526),O=n(605019),a=n(614651),r=n(280936),_=n(667294),o=n(463324),e=n(785893);function l(){return(0,e.jsx)(a.dY,{children:(0,e.jsx)(_.Suspense,{fallback:(0,e.jsx)(r.Z,{}),children:(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h1",{id:"postgres-database-client-installation",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#postgres-database-client-installation",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Postgres Database Client Installation"]}),(0,e.jsxs)("h2",{id:"docker-installation",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#docker-installation",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Docker Installation"]}),(0,e.jsxs)("h3",{id:"create-a-dockerfile-in-the-directory-where-your-nocobase-dockerfile-is-located",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#create-a-dockerfile-in-the-directory-where-your-nocobase-dockerfile-is-located",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Create a Dockerfile in the directory where your NocoBase Dockerfile is located"]}),(0,e.jsx)(t.Z,{lang:"Dockerfile",children:o.texts[0].value}),(0,e.jsxs)("h3",{id:"modify-the-docker-composeyml-file-for-nocobase",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#modify-the-docker-composeyml-file-for-nocobase",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Modify the docker-compose.yml File for NocoBase"]}),(0,e.jsx)(t.Z,{lang:"diff",children:o.texts[1].value}),(0,e.jsxs)("h3",{id:"upgrading",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#upgrading",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Upgrading"]}),(0,e.jsx)("p",{children:o.texts[2].value}),(0,e.jsx)(t.Z,{lang:"diff",children:o.texts[3].value}),(0,e.jsxs)("h2",{id:"other-installation-methods",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#other-installation-methods",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Other Installation Methods"]}),(0,e.jsxs)("p",{children:[o.texts[4].value,(0,e.jsx)(a.rU,{to:"/welcome/getting-started/installation/create-nocobase-app",children:o.texts[5].value}),o.texts[6].value,(0,e.jsx)(a.rU,{to:"/welcome/getting-started/installation/git-clone",children:o.texts[7].value}),o.texts[8].value,(0,e.jsx)("a",{href:"https://www.postgresql.org/download/",children:o.texts[9].value}),o.texts[10].value]})]})})})})}s.default=l},463324:function(d,s,n){n.r(s),n.d(s,{texts:function(){return i}});const i=[{value:`# Based on the "next" version
FROM nocobase/nocobase:latest

# Choose the appropriate PostgreSQL version as needed; here we use version 16 as an example.
ARG PG_VERSION=16

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

# Execute the installation script
RUN apt update && apt install -y postgresql-common gnupg \\
  && /usr/share/postgresql-common/pgdg/apt.postgresql.org.sh -y \\
  && apt install -y postgresql-client-\${PG_VERSION}
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
    image: nocobase/postgres:16
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
`,paraId:3,tocIndex:4},{value:"If you installed NocoBase using ",paraId:4,tocIndex:5},{value:"create-nocobase-app",paraId:5,tocIndex:5},{value:" or by ",paraId:4,tocIndex:5},{value:"cloning the Git repository",paraId:6,tocIndex:5},{value:", please visit ",paraId:4,tocIndex:5},{value:"PostgreSQL's official download page",paraId:4,tocIndex:5},{value:" to select the appropriate PostgreSQL version and follow the official documentation for installation.",paraId:4,tocIndex:5}]}}]);
