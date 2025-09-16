"use strict";(self.webpackChunknocobase_docs=self.webpackChunknocobase_docs||[]).push([[14822],{982162:function(o,a,s){s.r(a);var l=s(572269),u=s(793359),m=s(861788),h=s(719977),p=s(20190),t=s(24268),x=s(496057),g=s(585939),v=s(28484),E=s(635206),I=s(375553),M=s(156266),P=s(572333),b=s(841118),D=s(39297),j=s(868526),_=s(605019),d=s(614651),i=s(280936),r=s(667294),n=s(795656),e=s(785893);function c(){return(0,e.jsx)(d.dY,{children:(0,e.jsx)(r.Suspense,{fallback:(0,e.jsx)(i.Z,{}),children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h3",{id:"install-database-client",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#install-database-client",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Install Database Client"]}),(0,e.jsx)("p",{children:n.texts[0].value}),(0,e.jsxs)("ul",{children:[(0,e.jsxs)("li",{children:[n.texts[1].value,(0,e.jsx)("a",{href:"https://dev.mysql.com/downloads/",children:n.texts[2].value})]}),(0,e.jsxs)("li",{children:[n.texts[3].value,(0,e.jsx)("a",{href:"https://www.postgresql.org/download/",children:n.texts[4].value})]})]}),(0,e.jsxs)("p",{children:[n.texts[5].value,(0,e.jsx)("code",{children:n.texts[6].value}),n.texts[7].value]}),(0,e.jsx)(t.Z,{lang:"bash",children:n.texts[8].value}),(0,e.jsxs)("p",{children:[n.texts[9].value,(0,e.jsx)("code",{children:n.texts[10].value}),n.texts[11].value]})]}),(0,e.jsxs)(_.Z,{children:[(0,e.jsx)("div",{label:"PostgreSQL",name:"PostgreSQL",children:(0,e.jsx)(t.Z,{lang:"bash",children:n.texts[12].value})}),(0,e.jsx)("div",{label:"MySQL/MariaDB",name:"MySQL/MariaDB",children:(0,e.jsx)(t.Z,{lang:"bash",children:n.texts[13].value})})]}),(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsx)("p",{children:n.texts[14].value}),(0,e.jsx)(t.Z,{lang:"bash",children:n.texts[15].value}),(0,e.jsx)("p",{children:n.texts[16].value})]}),(0,e.jsxs)(_.Z,{children:[(0,e.jsx)("div",{label:"PostgreSQL",name:"PostgreSQL",children:(0,e.jsx)(t.Z,{lang:"bash",children:n.texts[17].value})}),(0,e.jsx)("div",{label:"MySQL/MariaDB",name:"MySQL/MariaDB",children:(0,e.jsx)(t.Z,{lang:"bash",children:n.texts[18].value})})]}),(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h3",{id:"install-plugins",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#install-plugins",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Install Plugins"]}),(0,e.jsxs)("p",{children:[n.texts[19].value,(0,e.jsx)(d.rU,{to:"/welcome/getting-started/plugin",children:n.texts[20].value})]})]})]})})})}a.default=c},795656:function(o,a,s){s.r(a),s.d(a,{texts:function(){return l}});const l=[{value:"Visit the official website to download the client that matches the version of the database you are using:",paraId:0,tocIndex:0},{value:"MySQL: ",paraId:1,tocIndex:0},{value:"https://dev.mysql.com/downloads/",paraId:1,tocIndex:0},{value:"PostgreSQL: ",paraId:1,tocIndex:0},{value:"https://www.postgresql.org/download/",paraId:1,tocIndex:0},{value:"For Docker versions, you can directly write a script in the ",paraId:2,tocIndex:0},{value:"./storage/scripts",paraId:2,tocIndex:0},{value:" directory",paraId:2,tocIndex:0},{value:`mkdir ./storage/scripts
cd ./storage/scripts
vim install-database-client.sh
`,paraId:3,tocIndex:0},{value:"The content of ",paraId:4,tocIndex:0},{value:"install-database-client.sh",paraId:4,tocIndex:0},{value:" is as follows:",paraId:4,tocIndex:0},{value:`#!/bin/bash

# Check if pg_dump is installed
if [ ! -f /usr/bin/pg_dump ]; then
    echo "pg_dump is not installed, starting PostgreSQL client installation..."

    # Install necessary tools and clean cache
    apt-get update && apt-get install -y --no-install-recommends wget gnupg \\
      && rm -rf /var/lib/apt/lists/*

    # Configure PostgreSQL source
    echo "deb [signed-by=/usr/share/keyrings/pgdg.asc] https://apt.postgresql.org/pub/repos/apt bookworm-pgdg main" > /etc/apt/sources.list.d/pgdg.list
    wget --quiet -O /usr/share/keyrings/pgdg.asc https://apt.postgresql.org/pub/repos/apt/ACCC4CF8.asc

    # Install PostgreSQL client
    apt-get update && apt-get install -y --no-install-recommends postgresql-client-16 \\
      && rm -rf /var/lib/apt/lists/*

    echo "PostgreSQL client installation completed."
else
    echo "pg_dump is already installed, skipping PostgreSQL client installation."
fi
`,paraId:5},{value:`#!/bin/bash

if [ ! -f /usr/bin/mysql ]; then
    echo "MySQL client is not installed, starting MySQL client installation..."
    echo "Updating package list and installing necessary tools..."
    apt-get update && apt-get install -y --no-install-recommends wget gnupg \\
        && rm -rf /var/lib/apt/lists/*

    wget --no-check-certificate https://downloads.mysql.com/archives/get/p/23/file/mysql-community-client-core_8.0.39-1debian12_amd64.deb && \\
        dpkg -x mysql-community-client-core_8.0.39-1debian12_amd64.deb /tmp/mysql-client && \\
        cp /tmp/mysql-client/usr/bin/mysqldump /usr/bin/ && \\
        cp /tmp/mysql-client/usr/bin/mysql /usr/bin/

    echo "MySQL client installation completed."
else
    echo "MySQL client is already installed, skipping installation."
fi
`,paraId:6},{value:"Then restart the app container",paraId:7},{value:`docker compose restart app
# View logs
docker compose logs app
`,paraId:8},{value:"Check the database client version number, which must match the database server version number",paraId:9},{value:`docker compose exec app bash -c "pg_dump -V"
`,paraId:10},{value:`docker compose exec app bash -c "mysql -V"
`,paraId:11},{value:"Refer to ",paraId:12,tocIndex:1},{value:"Installation and Upgrade of Commercial Plugins",paraId:13,tocIndex:1}]}}]);
