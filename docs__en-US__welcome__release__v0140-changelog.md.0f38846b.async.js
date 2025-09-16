"use strict";(self.webpackChunknocobase_docs=self.webpackChunknocobase_docs||[]).push([[44254],{29582:function(t,a,n){n.r(a);var d=n(572269),u=n(793359),c=n(861788),h=n(719977),m=n(20190),o=n(24268),p=n(496057),x=n(585939),g=n(28484),v=n(635206),I=n(375553),E=n(156266),j=n(572333),f=n(841118),P=n(39297),M=n(868526),D=n(605019),i=n(614651),_=n(280936),l=n(667294),s=n(571842),e=n(785893);function r(){return(0,e.jsx)(i.dY,{children:(0,e.jsx)(l.Suspense,{fallback:(0,e.jsx)(_.Z,{}),children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h1",{id:"v014-2023-09-12",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#v014-2023-09-12",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"v0.14: 2023-09-12"]}),(0,e.jsx)("p",{children:s.texts[0].value}),(0,e.jsxs)("h2",{id:"new-features",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#new-features",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"New features"]}),(0,e.jsxs)("h3",{id:"new-plugin-manager-interface",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#new-plugin-manager-interface",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"New plugin manager interface"]}),(0,e.jsx)("p",{children:(0,e.jsx)("img",{src:"https://static-docs.nocobase.com/20240429074459.png",alt:"20240429074459"})}),(0,e.jsxs)("h3",{id:"uploaded-plugins-are-located-in-the-storageplugins-directory",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#uploaded-plugins-are-located-in-the-storageplugins-directory",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Uploaded plugins are located in the storage/plugins directory."]}),(0,e.jsx)("p",{children:s.texts[1].value}),(0,e.jsx)(o.Z,{lang:"bash",children:s.texts[2].value}),(0,e.jsxs)("h3",{id:"plugin-updates",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#plugin-updates",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Plugin updates"]}),(0,e.jsx)("p",{children:s.texts[3].value}),(0,e.jsx)("p",{children:(0,e.jsx)("img",{src:"https://static-docs.nocobase.com/20240429074511.png",alt:"20240429074511"})}),(0,e.jsx)("p",{children:s.texts[4].value}),(0,e.jsxs)("h2",{id:"incompatible-changes",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#incompatible-changes",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Incompatible changes"]}),(0,e.jsxs)("h3",{id:"changes-to-plugin-names",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#changes-to-plugin-names",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Changes to plugin names"]}),(0,e.jsxs)("ul",{children:[(0,e.jsx)("li",{children:s.texts[5].value}),(0,e.jsx)("li",{children:s.texts[6].value})]}),(0,e.jsxs)("h3",{id:"improvements-to-pmadd",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#improvements-to-pmadd",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Improvements to pm.add"]}),(0,e.jsx)(o.Z,{lang:"bash",children:s.texts[7].value}),(0,e.jsxs)("h3",{id:"nginx-configuration-changes",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#nginx-configuration-changes",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Nginx configuration changes"]}),(0,e.jsxs)("p",{children:[s.texts[8].value,(0,e.jsx)("code",{children:s.texts[9].value}),s.texts[10].value]}),(0,e.jsx)(o.Z,{lang:"conf",children:s.texts[11].value}),(0,e.jsxs)("p",{children:[s.texts[12].value,(0,e.jsx)("a",{href:"https://github.com/nocobase/nocobase/blob/main/docker/nocobase/nocobase.conf",children:s.texts[13].value})]}),(0,e.jsxs)("h2",{id:"plugin-development-guide",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#plugin-development-guide",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Plugin development guide"]})]}),(0,e.jsx)(i.rU,{to:"/development/your-fisrt-plugin",children:s.texts[14].value})]})})})}a.default=r},571842:function(t,a,n){n.r(a),n.d(a,{texts:function(){return d}});const d=[{value:"This release enables plug-and-play plugins in production environments. You can now add plugins directly through the UI, and support downloading from the npm registry (which can be private), local uploads, and URL downloads.",paraId:0,tocIndex:0},{value:"The storage/plugins directory is used to upload plugins, and is organized as npm packages.",paraId:1,tocIndex:3},{value:`|- /storage/
  |- /plugins/
    |- /@nocobase/
      |- /plugin-hello1/
      |- /plugin-hello2/
    |- /@foo/
      |- /bar/
    |- /my-nocobase-plugin-hello/
`,paraId:2,tocIndex:3},{value:"Currently, only plugins under storage/plugins can be updated, as shown here:",paraId:3,tocIndex:4},{value:"Note: In order to facilitate maintenance and upgrading, and to avoid unavailability of the storage plugins due to upgrading, you can put the new plugin directly into storage/plugins and then perform the upgrade operation.",paraId:4,tocIndex:4},{value:"PLUGIN_PACKAGE_PREFIX environment variable is no longer provided.",paraId:5,tocIndex:6},{value:"Plugin names and package names are unified, old plugin names can still exist as aliases.",paraId:5,tocIndex:6},{value:`# Use packageName instead of pluginName, lookup locally, error if not found
pm add packageName

# Download from remote only if registry is provided, can also specify version
pm add packageName --registry=xx --auth-token=yy --version=zz

# You can also provide a local zip, add multiple times and replace it with the last one
pm add /a/plugin.zip

# Remote zip, replace it with the same name
pm add http://url/plugin.zip
`,paraId:6,tocIndex:7},{value:"Add ",paraId:7,tocIndex:8},{value:"/static/plugins/",paraId:7,tocIndex:8},{value:" location",paraId:7,tocIndex:8},{value:`server {
    location ^~ /static/plugins/ {
        proxy_pass http://127.0.0.1:13000/static/plugins/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_connect_timeout 600;
        proxy_send_timeout 600;
        proxy_read_timeout 600;
        send_timeout 600;
    }
}
`,paraId:8,tocIndex:8},{value:"More see full version of ",paraId:9,tocIndex:8},{value:"nocobase.conf",paraId:9,tocIndex:8},{value:"Develop the first plugin",paraId:10}]}}]);
