"use strict";(self.webpackChunknocobase_docs=self.webpackChunknocobase_docs||[]).push([[90060],{451522:function(l,i,e){e.r(i);var o=e(572269),c=e(793359),u=e(861788),f=e(719977),h=e(20190),s=e(24268),m=e(496057),x=e(585939),b=e(28484),I=e(635206),v=e(375553),E=e(156266),O=e(572333),D=e(841118),p=e(39297),P=e(868526),M=e(605019),t=e(614651),d=e(280936),a=e(667294),_=e(615443),n=e(785893);function r(){return(0,n.jsx)(t.dY,{children:(0,n.jsx)(a.Suspense,{fallback:(0,n.jsx)(d.Z,{}),children:(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsxs)("h3",{id:"install-plugins",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#install-plugins",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"Install Plugins"]}),(0,n.jsxs)("p",{children:[_.texts[0].value,(0,n.jsx)(t.rU,{to:"/welcome/getting-started/plugin",children:_.texts[1].value})]}),(0,n.jsxs)("h3",{id:"install-libreoffice-optional",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#install-libreoffice-optional",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"Install LibreOffice (Optional)"]}),(0,n.jsxs)("p",{children:[_.texts[2].value,(0,n.jsx)("a",{href:"https://www.libreoffice.org/download/download-libreoffice",children:_.texts[3].value}),_.texts[4].value,(0,n.jsx)("code",{children:_.texts[5].value}),_.texts[6].value]}),(0,n.jsx)(s.Z,{lang:"bash",children:_.texts[7].value}),(0,n.jsxs)("p",{children:[_.texts[8].value,(0,n.jsx)("code",{children:_.texts[9].value}),_.texts[10].value]}),(0,n.jsx)(s.Z,{lang:"sh",children:_.texts[11].value}),(0,n.jsxs)("p",{children:[_.texts[12].value,(0,n.jsx)("code",{children:_.texts[13].value}),_.texts[14].value]}),(0,n.jsx)(s.Z,{lang:"bash",children:_.texts[15].value}),(0,n.jsx)("p",{children:_.texts[16].value}),(0,n.jsx)(s.Z,{lang:"bash",children:_.texts[17].value})]})})})})}i.default=r},615443:function(l,i,e){e.r(i),e.d(i,{texts:function(){return o}});const o=[{value:"Refer to ",paraId:0,tocIndex:0},{value:"Installing and Upgrading Commercial Plugins",paraId:1,tocIndex:0},{value:"Generating PDFs requires installing LibreOffice. ",paraId:2,tocIndex:1},{value:"Please download it from the official website",paraId:2,tocIndex:1},{value:". For the Docker version, you can create a script directly in the ",paraId:2,tocIndex:1},{value:"./storage/scripts",paraId:2,tocIndex:1},{value:" directory.",paraId:2,tocIndex:1},{value:`mkdir ./storage/scripts
cd ./storage/scripts
vim install-libreoffice.sh
`,paraId:3,tocIndex:1},{value:"The content of ",paraId:4,tocIndex:1},{value:"install-libreoffice.sh",paraId:4,tocIndex:1},{value:" is as follows:",paraId:4,tocIndex:1},{value:`#!/bin/bash

# Define variables
INSTALL_DIR="/opt/libreoffice24.8"
DOWNLOAD_URL="https://downloadarchive.documentfoundation.org/libreoffice/old/24.8.5.2/deb/x86_64/LibreOffice_24.8.5.2_Linux_x86-64_deb.tar.gz"

# Check if LibreOffice is already installed
if [ -d "$INSTALL_DIR" ]; then
    echo "LibreOffice is already installed, skipping installation."
    exit 0
fi

# Update APT and install dependencies
apt-get update

apt-get install -y \\
    libfreetype6 \\
    fontconfig \\
    libgssapi-krb5-2 \\
    libxml2 \\
    libnss3 \\
    libdbus-1-3 \\
    libcairo2 \\
    libxslt1.1 \\
    libglib2.0-0 \\
    libcups2 \\
    libx11-xcb1 \\
    fonts-liberation \\
    fonts-noto-cjk \\
    wget

rm -rf /var/lib/apt/lists/*

cd /app/nocobase/storage/scripts

# Download and install LibreOffice if not already present
if [ ! -d "./libreoffice" ]; then
    rm -rf libreoffice.tar.gz
    wget --no-check-certificate -O libreoffice.tar.gz $DOWNLOAD_URL
    if [ $? -ne 0 ]; then
        echo "Failed to download LibreOffice."
        exit 1
    fi
    rm -rf libreoffice && mkdir libreoffice
    tar -zxvf libreoffice.tar.gz -C ./libreoffice --strip-components=1
    if [ $? -ne 0 ]; then
        echo "Failed to extract LibreOffice."
        exit 1
    fi
fi

# Install LibreOffice
dpkg -i libreoffice/DEBS/*.deb

ln -s /opt/libreoffice24.8/program/soffice.bin /usr/bin/libreoffice
libreoffice --version

if [ $? -ne 0 ]; then
    echo "Failed to install LibreOffice."
    exit 1
fi

echo "LibreOffice installation completed successfully."
`,paraId:5,tocIndex:1},{value:"Restart the ",paraId:6,tocIndex:1},{value:"app",paraId:6,tocIndex:1},{value:" container:",paraId:6,tocIndex:1},{value:`docker compose restart app
# View logs
docker compose logs app
`,paraId:7,tocIndex:1},{value:"Verify the installation was successful:",paraId:8,tocIndex:1},{value:`$ docker compose exec app bash -c "libreoffice --version"

LibreOffice 24.8.4.2 bb3cfa12c7b1bf994ecc5649a80400d06cd71002
`,paraId:9,tocIndex:1}]}}]);
