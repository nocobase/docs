"use strict";(self.webpackChunknocobase_docs=self.webpackChunknocobase_docs||[]).push([[90736],{339322:function(i,t,e){e.r(t);var o=e(572269),c=e(793359),u=e(861788),m=e(719977),h=e(20190),a=e(24268),x=e(496057),I=e(585939),v=e(28484),E=e(635206),p=e(375553),P=e(156266),b=e(572333),M=e(841118),f=e(39297),j=e(868526),T=e(605019),_=e(614651),d=e(280936),l=e(667294),s=e(142222),n=e(785893);function r(){return(0,n.jsx)(_.dY,{children:(0,n.jsx)(l.Suspense,{fallback:(0,n.jsx)(d.Z,{}),children:(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsxs)("h1",{id:"access-control",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#access-control",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"Access Control"]}),(0,n.jsxs)("h2",{id:"introduction",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#introduction",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"Introduction"]}),(0,n.jsx)("p",{children:s.texts[0].value}),(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{children:[(0,n.jsx)("code",{children:s.texts[1].value}),s.texts[2].value]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("code",{children:s.texts[3].value}),s.texts[4].value]})]}),(0,n.jsxs)("h2",{id:"installation",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#installation",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"Installation"]}),(0,n.jsx)("p",{children:s.texts[5].value}),(0,n.jsxs)("h2",{id:"development-guide",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#development-guide",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"Development Guide"]}),(0,n.jsxs)("h3",{id:"extending-a-new-permission-configuration-tab",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#extending-a-new-permission-configuration-tab",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"Extending a new permission configuration tab"]}),(0,n.jsx)("p",{children:s.texts[6].value}),(0,n.jsx)("p",{children:(0,n.jsx)("img",{src:"https://static-docs.nocobase.com/20240903210248.png",alt:"20240903210248"})}),(0,n.jsx)("p",{children:s.texts[7].value}),(0,n.jsx)(a.Z,{lang:"typescript",children:s.texts[8].value}),(0,n.jsxs)("p",{children:[s.texts[9].value,(0,n.jsx)("code",{children:s.texts[10].value}),s.texts[11].value,(0,n.jsx)("a",{href:"https://docs.nocobase.com/development/client/life-cycle#%E8%8E%B7%E5%8F%96%E6%8F%92%E4%BB%B6",children:s.texts[12].value}),s.texts[13].value,(0,n.jsx)("code",{children:s.texts[14].value}),s.texts[15].value]}),(0,n.jsxs)("p",{children:[s.texts[16].value,(0,n.jsx)("code",{children:s.texts[17].value}),s.texts[18].value,(0,n.jsx)("code",{children:s.texts[19].value}),s.texts[20].value]}),(0,n.jsx)(a.Z,{lang:"typescript",children:s.texts[21].value})]})})})})}t.default=r},142222:function(i,t,e){e.r(t),e.d(t,{texts:function(){return o}});const o=[{value:"NocoBase's ACL module mainly consists of two parts:",paraId:0,tocIndex:1},{value:"@nocobase/acl",paraId:1,tocIndex:1},{value:" in the kernel, which provides core functions",paraId:1,tocIndex:1},{value:"@nocobase/plugin-acl",paraId:1,tocIndex:1},{value:" in the plugin, which provides dynamic configuration capabilities",paraId:1,tocIndex:1},{value:"Built-in plugin, no separate installation required.",paraId:2,tocIndex:2},{value:'Below is an example of the "Mobile Menu" configuration item, demonstrating how to extend a new permission configuration tab. The effect is shown in the figure below:',paraId:3,tocIndex:4},{value:"The code is as follows:",paraId:4,tocIndex:4},{value:`import { Plugin } from '@nocobase/client';
import PluginACLClient from '@nocobase/plugin-acl/client';

class PluginMobileClient extends Plugin {
  async load() {
    const aclInstance = this.app.pm.get(PluginACLClient);

    aclInstance?.settingsUI.addPermissionsTab(({ t, TabLayout, activeKey }) => ({
      key: 'mobile-menu',
      label: t('Mobile menu', {
        ns: 'plugin-mobile',
      }),
      children: (
        <TabLayout>
          <MenuPermissions />
        </TabLayout>
      ),
    }));
  }
}
`,paraId:5,tocIndex:4},{value:"First, we need to obtain an instance of the ",paraId:6,tocIndex:4},{value:"PluginACLClient",paraId:6,tocIndex:4},{value:" plugin (",paraId:6,tocIndex:4},{value:"other methods to obtain plugin instances",paraId:6,tocIndex:4},{value:"), and add a new permission configuration tab using the ",paraId:6,tocIndex:4},{value:"settingsUI.addPermissionsTab",paraId:6,tocIndex:4},{value:' method. In this example, we added a permission configuration tab named "Mobile Menu".',paraId:6,tocIndex:4},{value:"The value of the ",paraId:7,tocIndex:4},{value:"settingsUI",paraId:7,tocIndex:4},{value:" property is an instance of a class named ",paraId:7,tocIndex:4},{value:"ACLSettingsUI",paraId:7,tocIndex:4},{value:", and its type information is as follows:",paraId:7,tocIndex:4},{value:`import { TabsProps } from 'antd/es/tabs/index';

interface ACLSettingsUI {
  addPermissionsTab(tab: Tab | TabCallback): void;
  getPermissionsTabs(props: PermissionsTabsProps): Tab[];
}

type Tab = TabsProps['items'][0];

type TabCallback = (props: PermissionsTabsProps) => Tab;

interface PermissionsTabsProps {
  /**
   * the key of the currently active tab panel
   */
  activeKey: string;
  /**
   * the currently selected role
   */
  role: Role;
  /**
   * translation function
   */
  t: TFunction;
  /**
   * used to constrain the size of the container in the Tab
   */
  TabLayout: React.FC;
}
`,paraId:8,tocIndex:4}]}}]);
