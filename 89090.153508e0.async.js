"use strict";(self.webpackChunknocobase_docs=self.webpackChunknocobase_docs||[]).push([[89090],{189090:function(t,e,a){a.r(e),a.d(e,{texts:function(){return n}});const n=[{value:"\u5982\u679C\u65B0\u521B\u5EFA\u7684\u533A\u5757\u662F\u4E00\u4E2A\u590D\u6742\u7684\u6570\u636E\u533A\u5757\uFF0C\u90A3\u4E48\u5B83\u5185\u90E8\u53EF\u80FD\u5305\u542B\u591A\u4E2A\u52A8\u6001\u6DFB\u52A0\u7684\u90E8\u5206\uFF0C\u5176\u4E2D ",paraId:0,tocIndex:1},{value:"Configure actions",paraId:0,tocIndex:1},{value:" \u5BF9\u5E94\u7684 initializer \u4E3B\u8981\u662F\u8D1F\u8D23\u52A8\u6001\u6DFB\u52A0\u4E00\u4E9B\u6309\u94AE\u5B9E\u73B0\u5404\u79CD\u64CD\u4F5C\u3002\u4F8B\u5982 ",paraId:0,tocIndex:1},{value:"Details",paraId:0,tocIndex:1},{value:" \u533A\u5757\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7 ",paraId:0,tocIndex:1},{value:"Configure actions",paraId:0,tocIndex:1},{value:" \u6DFB\u52A0 ",paraId:0,tocIndex:1},{value:"Edit",paraId:0,tocIndex:1},{value:"\u3001",paraId:0,tocIndex:1},{value:"Print",paraId:0,tocIndex:1},{value:" \u7B49\u6309\u94AE\u3002",paraId:0,tocIndex:1},{value:"\u672C\u5B9E\u4F8B\u4F1A\u5728 ",paraId:1,tocIndex:2},{value:"\u6DFB\u52A0\u6570\u636E\u533A\u5757 Data Block",paraId:2,tocIndex:2},{value:" \u57FA\u7840\u4E0A\u7EE7\u7EED\u5B9E\u73B0\u7C7B\u4F3C ",paraId:1,tocIndex:2},{value:"Details",paraId:1,tocIndex:2},{value:" \u533A\u5757\u7684\u6548\u679C\uFF0C\u901A\u8FC7 ",paraId:1,tocIndex:2},{value:"Configure actions",paraId:1,tocIndex:2},{value:" \u6765\u914D\u7F6E\u6309\u94AE\u3002",paraId:1,tocIndex:2},{value:"\u672C\u6587\u6863\u5B8C\u6574\u7684\u793A\u4F8B\u4EE3\u7801\u53EF\u4EE5\u5728 ",paraId:3,tocIndex:2},{value:"plugin-samples",paraId:3,tocIndex:2},{value:" \u4E2D\u67E5\u770B\u3002",paraId:3,tocIndex:2},{value:`
  `,paraId:4},{value:"\u6211\u4EEC\u6309\u7167 ",paraId:5,tocIndex:3},{value:"\u7F16\u5199\u7B2C\u4E00\u4E2A\u63D2\u4EF6",paraId:6,tocIndex:3},{value:" \u6587\u6863\u8BF4\u660E\uFF0C\u5982\u679C\u6CA1\u6709\u4E00\u4E2A\u9879\u76EE\uFF0C\u53EF\u4EE5\u5148\u521B\u5EFA\u4E00\u4E2A\u9879\u76EE\uFF0C\u5982\u679C\u5DF2\u7ECF\u6709\u4E86\u6216\u8005\u662F clone \u7684\u6E90\u7801\uFF0C\u5219\u8DF3\u8FC7\u8FD9\u4E00\u6B65\u3002",paraId:5,tocIndex:3},{value:`yarn create nocobase-app my-nocobase-app -d postgres
cd my-nocobase-app
yarn install
yarn nocobase install
`,paraId:7,tocIndex:3},{value:"\u7136\u540E\u521D\u59CB\u5316\u4E00\u4E2A\u63D2\u4EF6\uFF0C\u5E76\u6DFB\u52A0\u5230\u7CFB\u7EDF\u4E2D\uFF1A",paraId:8,tocIndex:3},{value:`yarn pm create @nocobase-sample/plugin-initializer-configure-actions
yarn pm enable @nocobase-sample/plugin-initializer-configure-actions
`,paraId:9,tocIndex:3},{value:"\u7136\u540E\u542F\u52A8\u9879\u76EE\u5373\u53EF\uFF1A",paraId:10,tocIndex:3},{value:`yarn dev
`,paraId:11,tocIndex:3},{value:"\u7136\u540E\u767B\u5F55\u540E\u8BBF\u95EE ",paraId:12,tocIndex:3},{value:"http://localhost:13000/admin/pm/list/local/",paraId:12,tocIndex:3},{value:" \u5C31\u53EF\u4EE5\u770B\u5230\u63D2\u4EF6\u5DF2\u7ECF\u5B89\u88C5\u5E76\u542F\u7528\u4E86\u3002",paraId:12,tocIndex:3},{value:"\u5728\u5B9E\u73B0\u672C\u793A\u4F8B\u4E4B\u524D\uFF0C\u6211\u4EEC\u9700\u8981\u5148\u4E86\u89E3\u4E00\u4E9B\u57FA\u7840\u77E5\u8BC6\uFF1A",paraId:13,tocIndex:4},{value:"SchemaInitializer \u6559\u7A0B",paraId:14,tocIndex:4},{value:"\uFF1A\u7528\u4E8E\u5411\u754C\u9762\u5185\u6DFB\u52A0\u5404\u79CD\u533A\u5757\u3001\u5B57\u6BB5\u3001\u64CD\u4F5C\u7B49",paraId:15,tocIndex:4},{value:"SchemaInitializer API",paraId:15,tocIndex:4},{value:"\uFF1A\u7528\u4E8E\u5411\u754C\u9762\u5185\u6DFB\u52A0\u5404\u79CD\u533A\u5757\u3001\u5B57\u6BB5\u3001\u64CD\u4F5C\u7B49",paraId:15,tocIndex:4},{value:"UI Schema",paraId:16,tocIndex:4},{value:"\uFF1A\u7528\u4E8E\u5B9A\u4E49\u754C\u9762\u7684\u7ED3\u6784\u548C\u6837\u5F0F",paraId:15,tocIndex:4},{value:"Designable \u8BBE\u8BA1\u5668",paraId:17,tocIndex:4},{value:"\uFF1A\u7528\u4E8E\u4FEE\u6539 Schema",paraId:15,tocIndex:4},{value:"\u524D\u9762\u5DF2\u7ECF\u8BF4\u660E\u672C\u793A\u4F8B\u4F1A\u5728 ",paraId:18,tocIndex:5},{value:"\u6DFB\u52A0\u6570\u636E\u533A\u5757 Data Block",paraId:19,tocIndex:5},{value:" \u57FA\u7840\u4E0A\u7EE7\u7EED\u5B9E\u73B0\uFF0C\u6240\u4EE5\u6211\u4EEC\u53EF\u4EE5\u590D\u5236 ",paraId:18,tocIndex:5},{value:"packages/plugins/@nocobase-sample/plugin-initializer-block-data/src/client",paraId:18,tocIndex:5},{value:" \u76EE\u5F55\u8986\u76D6 ",paraId:18,tocIndex:5},{value:"packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client",paraId:18,tocIndex:5},{value:"\u3002",paraId:18,tocIndex:5},{value:"\u7136\u540E\u4FEE\u6539 ",paraId:20,tocIndex:5},{value:"packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/index.tsx",paraId:20,tocIndex:5},{value:"\uFF1A",paraId:20,tocIndex:5},{value:`import { Plugin } from '@nocobase/client';
- import { Info } from './component';
+ import { InfoV2 } from './component';

- export class PluginInitializerBlockDataClient extends Plugin {
+ export class PluginInitializerConfigureActionsClient extends Plugin {
  async load() {
-   this.app.addComponents({ Info })
+   this.app.addComponents({ InfoV2 })
    // ...
  }
}

- export default PluginInitializerBlockDataClient;
+ export default PluginInitializerConfigureActionsClient;
`,paraId:21,tocIndex:5},{value:"\u7136\u540E\u4FEE\u6539 ",paraId:22,tocIndex:5},{value:"packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/constants.ts",paraId:22,tocIndex:5},{value:"\uFF1A",paraId:22,tocIndex:5},{value:`export const BlockName = 'InfoV2';
export const BlockNameLowercase = 'info-v2';
`,paraId:23,tocIndex:5},{value:"\u6211\u4EEC\u65B0\u5EFA ",paraId:24,tocIndex:7},{value:"packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/initializer/configureActions/configureActionsInitializer.ts",paraId:24,tocIndex:7},{value:" \u6587\u4EF6\uFF1A",paraId:24,tocIndex:7},{value:`import { SchemaInitializer } from "@nocobase/client";
import { BlockNameLowercase } from "../../constants";

export const configureActionsInitializer = new SchemaInitializer({
  name: \`\${BlockNameLowercase}:configureActions\`,
  icon: 'SettingOutlined',
  title: 'Configure actions',
  style: {
    marginLeft: 8,
  },
  items: [

  ]
});
`,paraId:25,tocIndex:7},{value:"\u6211\u4EEC\u901A\u8FC7\u4E0A\u8FF0\u4EE3\u7801\u5B9A\u4E49\u4E86\u4E00\u4E2A\u65B0\u7684 ",paraId:26,tocIndex:7},{value:"SchemaInitializer",paraId:26,tocIndex:7},{value:"\uFF0C\u5176\u5B50\u9879\u6682\u65F6\u4E3A\u7A7A\u3002",paraId:26,tocIndex:7},{value:"SchemaInitializer",paraId:27,tocIndex:7},{value:"\uFF1A\u7528\u4E8E\u521B\u5EFA\u4E00\u4E2A Schema Initializer \u5B9E\u4F8B",paraId:27,tocIndex:7},{value:"icon",paraId:27,tocIndex:7},{value:"\uFF1A\u56FE\u6807\uFF0C\u66F4\u591A\u56FE\u6807\u53EF\u53C2\u8003 Ant Design ",paraId:27,tocIndex:7},{value:"Icons",paraId:27,tocIndex:7},{value:"title",paraId:27,tocIndex:7},{value:"\uFF1A\u6309\u94AE\u6807\u9898",paraId:27,tocIndex:7},{value:"items",paraId:27,tocIndex:7},{value:"\uFF1A\u6309\u94AE\u4E0B\u7684\u5B50\u9879",paraId:27,tocIndex:7},{value:"\u7136\u540E\u5C06\u5176\u5728 ",paraId:28,tocIndex:7},{value:"packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/initializer/configureActions/index.ts",paraId:28,tocIndex:7},{value:" \u4E2D\u5BFC\u51FA\uFF1A",paraId:28,tocIndex:7},{value:`export * from './configureActionsInitializer';
`,paraId:29,tocIndex:7},{value:"\u5E76\u4E14\u4FEE\u6539 ",paraId:30,tocIndex:7},{value:"packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/initializer/index.tsx",paraId:30,tocIndex:7},{value:" \u5C06 ",paraId:30,tocIndex:7},{value:"configureActions",paraId:30,tocIndex:7},{value:" \u5BFC\u51FA\uFF1A",paraId:30,tocIndex:7},{value:`import React from 'react';
import { SchemaInitializerItemType, useSchemaInitializer } from '@nocobase/client'
import { CodeOutlined } from '@ant-design/icons';

+ export * from './configureActions'
// ...
`,paraId:31,tocIndex:7},{value:"\u7136\u540E\u4FEE\u6539 ",paraId:32,tocIndex:8},{value:"packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/index.tsx",paraId:32,tocIndex:8},{value:" \u6587\u4EF6\uFF0C\u5BFC\u5165\u5E76\u6CE8\u518C\u8FD9\u4E2A initializer\uFF1A",paraId:32,tocIndex:8},{value:`// ...
import { infoInitializerItem, configureActionsInitializer } from './initializer';

export class PluginInitializerConfigureActionsClient extends Plugin {
  async load() {
    this.app.schemaInitializerManager.add(configureActionsInitializer)

    // ...
  }
}
`,paraId:33,tocIndex:8},{value:"\u6211\u4EEC\u4FEE\u6539 ",paraId:34,tocIndex:9},{value:"packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/schema/index.ts",paraId:34,tocIndex:9},{value:" \u6587\u4EF6\uFF0C\u65B0\u589E ",paraId:34,tocIndex:9},{value:"actions",paraId:34,tocIndex:9},{value:" \u5B50\u8282\u70B9\uFF1A",paraId:34,tocIndex:9},{value:`// ...
+ import { configureActionsInitializer } from "../initializer";

function getInfoBlockSchema({ dataSource, collection }) {
  return {
    // ...
    properties: {
      info: {
        'x-component': BlockName,
        'x-use-component-props': 'useInfoProps',
+       properties: {
+         actions: {
+           type: 'void',
+           'x-component': 'ActionBar',
+           'x-component-props': {
+             layout: 'two-column',
+             style: { marginBottom: 20 }
+           },
+           'x-initializer': configureActionsInitializer.name,
+         }
+       }
      }
    }
  }
}
`,paraId:35,tocIndex:9},{value:"configure actions",paraId:36,tocIndex:9},{value:" \u4E00\u822C\u4E0E ",paraId:36,tocIndex:9},{value:"ActionBar",paraId:36,tocIndex:9},{value:" \u7EC4\u4EF6\u642D\u914D\u4F7F\u7528\u3002",paraId:36,tocIndex:9},{value:"\u6211\u4EEC\u5728 ",paraId:37,tocIndex:9},{value:"Info",paraId:37,tocIndex:9},{value:" \u7684\u5B50\u8282\u70B9\u4E2D\u6DFB\u52A0\u4E86\u4E00\u4E2A ",paraId:37,tocIndex:9},{value:"actions",paraId:37,tocIndex:9},{value:" \u5B57\u6BB5\uFF1A",paraId:37,tocIndex:9},{value:"type: 'void'",paraId:38,tocIndex:9},{value:"\uFF1A\u7C7B\u578B\u4E3A ",paraId:38,tocIndex:9},{value:"void",paraId:38,tocIndex:9},{value:"\uFF0C\u8868\u793A\u8FD9\u662F\u4E00\u4E2A\u5BB9\u5668",paraId:38,tocIndex:9},{value:"x-component: 'ActionBar'",paraId:38,tocIndex:9},{value:"\uFF1A\u4F7F\u7528 ",paraId:38,tocIndex:9},{value:"ActionBar",paraId:38,tocIndex:9},{value:" \u7EC4\u4EF6\uFF0C\u7528\u4E8E\u5C55\u793A\u6309\u94AE",paraId:38,tocIndex:9},{value:"x-initializer: configureActionsInitializer.name",paraId:38,tocIndex:9},{value:"\uFF1A\u4F7F\u7528\u6211\u4EEC\u521A\u521B\u5EFA\u7684 Schema Initializer",paraId:38,tocIndex:9},{value:"x-component-props.layout: 'two-column'",paraId:38,tocIndex:9},{value:"\uFF1A\u5DE6\u53F3\u5E03\u5C40\uFF0C\u5177\u4F53\u793A\u4F8B\u53EF\u53C2\u8003 ",paraId:38,tocIndex:9},{value:"ActionBar two-column",paraId:38,tocIndex:9},{value:"\u6211\u4EEC\u4FEE\u6539 ",paraId:39,tocIndex:10},{value:"packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/component/Info.tsx",paraId:39,tocIndex:10},{value:" \u6587\u4EF6\uFF0C\u5C06 ",paraId:39,tocIndex:10},{value:"Info",paraId:39,tocIndex:10},{value:" \u7EC4\u4EF6\u4FEE\u6539\u4E3A\uFF1A",paraId:39,tocIndex:10},{value:`import React, { FC } from 'react';
import { withDynamicSchemaProps } from '@nocobase/client'

export interface InfoV2Props {
  collectionName: string;
  data?: any[];
  loading?: boolean;
+ children?: React.ReactNode;
}

export const InfoV2: FC<InfoV2Props> = withDynamicSchemaProps(({ children, collectionName, data }) => {
  return <div>
+   {children}
-   <div>collection: {collectionName}</div>
-   <div>data list: <pre>{JSON.stringify(data, null, 2)}</pre></div>
+   <div>data length: {data?.length}</div>
  </div>
}, { displayName: BlockName })
`,paraId:40,tocIndex:10},{value:"children",paraId:41,tocIndex:10},{value:"\uFF1A ",paraId:41,tocIndex:10},{value:"properties",paraId:41,tocIndex:10},{value:" \u7684\u5185\u5BB9\u4F1A\u88AB\u4F20\u5165\u5230 ",paraId:41,tocIndex:10},{value:"InfoV2",paraId:41,tocIndex:10},{value:" \u7EC4\u4EF6\u7684 ",paraId:41,tocIndex:10},{value:"children",paraId:41,tocIndex:10},{value:" \u4E2D\uFF0C\u6240\u4EE5\u6211\u4EEC\u76F4\u63A5\u5C06 ",paraId:41,tocIndex:10},{value:"children",paraId:41,tocIndex:10},{value:" \u6E32\u67D3\u51FA\u6765\u5373\u53EF\u3002",paraId:41,tocIndex:10},{value:"Custom request",paraId:4},{value:"\u6211\u4EEC\u7EE7\u7EED\u4FEE\u6539 ",paraId:42,tocIndex:12},{value:"packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/initializer/configureActions/configureActionsInitializer.ts",paraId:42,tocIndex:12},{value:" \u6587\u4EF6\uFF1A",paraId:42,tocIndex:12},{value:`export const configureActions = new SchemaInitializer({
  name: 'info:configureActions',
  title: 'Configure actions',
  icon: 'SettingOutlined',
  items: [
+   {
+     name: 'customRequest',
+     title: '{{t("Custom request")}}',
+     Component: 'CustomRequestInitializer',
+   },
  ]
});
`,paraId:43,tocIndex:12},{value:"\u56E0\u4E3A ",paraId:44,tocIndex:12},{value:"Custom request",paraId:44,tocIndex:12},{value:" \u6211\u4EEC\u8FD9\u91CC\u76F4\u63A5\u590D\u7528\u4E86 ",paraId:44,tocIndex:12},{value:"CustomRequestInitializer",paraId:44,tocIndex:12},{value:" \u7EC4\u4EF6\uFF0C\u66F4\u591A\u53EF\u590D\u7528\u7684 Initializer Item \u53EF\u53C2\u8003 ",paraId:44,tocIndex:12},{value:"TODO",paraId:44,tocIndex:12},{value:"\u3002",paraId:44,tocIndex:12},{value:"Custom Refresh",paraId:4},{value:"\u9664\u4E86\u590D\u7528\u5DF2\u6709\u7684 Initializer Item\uFF0C\u6211\u4EEC\u4E5F\u53EF\u4EE5\u81EA\u5B9A\u4E49 Action\u3002\u5173\u4E8E\u81EA\u5B9A\u4E49 Action \u7684\u8BE6\u7EC6\u6B65\u9AA4\u53EF\u4EE5\u53C2\u8003 ",paraId:45,tocIndex:13},{value:"\u6DFB\u52A0\u7B80\u5355 Action",paraId:46,tocIndex:13},{value:" \u548C ",paraId:45,tocIndex:13},{value:"\u6DFB\u52A0\u5F39\u7A97 Action",paraId:47,tocIndex:13},{value:"\u3002",paraId:45,tocIndex:13},{value:"\u8FD9\u91CC\u6211\u4EEC\u5B9E\u73B0\u4E00\u4E2A ",paraId:48,tocIndex:13},{value:"Custom Refresh",paraId:48,tocIndex:13},{value:" Action\u3002",paraId:48,tocIndex:13},{value:"\u6211\u4EEC\u65B0\u5EFA ",paraId:49,tocIndex:14},{value:"packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/initializer/configureActions/items/customRefresh/constants.ts",paraId:49,tocIndex:14},{value:"\uFF1A",paraId:49,tocIndex:14},{value:`export const ActionName = 'Custom Request';
export const ActionNameLowercase = 'customRequest';
`,paraId:50,tocIndex:14},{value:"\u6211\u4EEC\u65B0\u5EFA ",paraId:51,tocIndex:16},{value:"packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/initializer/configureActions/items/customRefresh/schema.ts",paraId:51,tocIndex:16},{value:" \u6587\u4EF6\uFF1A",paraId:51,tocIndex:16},{value:`import { ActionProps, useDataBlockRequest, ISchema } from "@nocobase/client";
import { useT } from "../../../../locale";

export const useCustomRefreshActionProps = (): ActionProps => {
  const { runAsync } = useDataBlockRequest();
  const t = useT();
  return {
    type: 'primary',
    title: t('Custom Refresh'),
    async onClick() {
      await runAsync();
    },
  }
}

export const customRefreshActionSchema: ISchema = {
  type: 'void',
  'x-component': 'Action',
  'x-toolbar': 'ActionSchemaToolbar',
  'x-use-component-props': 'useCustomRefreshActionProps'
}
`,paraId:52,tocIndex:16},{value:"\u6211\u4EEC\u5B9A\u4E49\u4E86 ",paraId:53,tocIndex:16},{value:"customRefreshActionSchema",paraId:53,tocIndex:16},{value:" \u4EE5\u53CA\u52A8\u6001\u5C5E\u6027 ",paraId:53,tocIndex:16},{value:"useCustomRefreshActionProps",paraId:53,tocIndex:16},{value:"\u3002",paraId:53,tocIndex:16},{value:"customRefreshActionSchema",paraId:54,tocIndex:16},{value:"\uFF1A",paraId:54,tocIndex:16},{value:"type: 'void'",paraId:55,tocIndex:16},{value:"\uFF1A\u7C7B\u578B\u4E3A ",paraId:55,tocIndex:16},{value:"void",paraId:55,tocIndex:16},{value:"\uFF0C\u8868\u793A\u666E\u901A UI\uFF0C\u4E0D\u5305\u542B\u6570\u636E",paraId:55,tocIndex:16},{value:"x-component: 'Action'",paraId:55,tocIndex:16},{value:"\uFF1A\u4F7F\u7528 ",paraId:55,tocIndex:16},{value:"Action",paraId:55,tocIndex:16},{value:" \u7EC4\u4EF6\uFF0C\u7528\u4E8E\u5C55\u793A\u6309\u94AE",paraId:55,tocIndex:16},{value:"title: 'Custom Refresh'",paraId:55,tocIndex:16},{value:"\uFF1A\u6309\u94AE\u6807\u9898",paraId:55,tocIndex:16},{value:"x-use-component-props: 'useCustomRefreshActionProps'",paraId:55,tocIndex:16},{value:"\uFF1A\u4F7F\u7528 ",paraId:55,tocIndex:16},{value:"useCustomRefreshActionProps",paraId:55,tocIndex:16},{value:" \u8FD9\u4E2A Hooks \u8FD4\u56DE\u7684\u5C5E\u6027\u3002\u56E0\u4E3A Schema \u4F1A\u4FDD\u5B58\u5230\u670D\u52A1\u5668\uFF0C\u6240\u4EE5\u8FD9\u91CC\u9700\u8981\u4F7F\u7528\u5B57\u7B26\u4E32\u7684\u65B9\u5F0F\u3002",paraId:55,tocIndex:16},{value:"'x-toolbar': 'ActionSchemaToolbar'",paraId:55,tocIndex:16},{value:"\uFF1A\u4E00\u822C\u4E8E ",paraId:55,tocIndex:16},{value:"Action",paraId:55,tocIndex:16},{value:" \u7EC4\u4EF6\u642D\u914D\u4F7F\u7528\uFF0C\u4E0E\u9ED8\u8BA4\u7684 ToolBar \u4E0D\u540C\u7684\u662F\uFF0C\u5176\u5C06 Action \u53F3\u4E0A\u89D2\u7684 ",paraId:55,tocIndex:16},{value:"Initializer",paraId:55,tocIndex:16},{value:" \u9690\u85CF\uFF0C\u4EC5\u4FDD\u7559 Drag \u548C Settings\u3002",paraId:55,tocIndex:16},{value:"useCustomRefreshActionProps",paraId:56,tocIndex:16},{value:"\uFF1A\u8FD9\u4E2A\u662F React Hooks\uFF0C\u9700\u8981\u8FD4\u56DE Action \u7EC4\u4EF6\u7684\u5C5E\u6027\u3002",paraId:56,tocIndex:16},{value:"useDataBlockRequest()",paraId:57,tocIndex:16},{value:"\uFF1A\u6570\u636E\u533A\u5757\u7684\u8BF7\u6C42\u5BF9\u8C61\uFF0C\u7531 ",paraId:57,tocIndex:16},{value:"DataBlockProvider",paraId:57,tocIndex:16},{value:` \u5185\u90E8\u63D0\u4F9B\uFF0C\u7528\u4E8E\u81EA\u52A8\u83B7\u53D6\u6570\u636E\u533A\u5757\u7684\u6570\u636E
`,paraId:57,tocIndex:16},{value:"runAsync",paraId:58,tocIndex:16},{value:"\uFF1A\u4E00\u4E2A\u5F02\u6B65\u8BF7\u6C42\u65B9\u6CD5\uFF0C\u7528\u4E8E\u5237\u65B0\u6570\u636E\u533A\u5757\u7684\u6570\u636E",paraId:58,tocIndex:16},{value:"type: 'primary'",paraId:57,tocIndex:16},{value:"\uFF1A\u6309\u94AE\u7C7B\u578B\u4E3A ",paraId:57,tocIndex:16},{value:"primary",paraId:57,tocIndex:16},{value:"onClick",paraId:57,tocIndex:16},{value:"\uFF1A\u70B9\u51FB\u4E8B\u4EF6\u3002",paraId:57,tocIndex:16},{value:"\u7136\u540E\u5C06\u5176\u5728 ",paraId:59,tocIndex:16},{value:"packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/initializer/configureActions/items/customRefresh/index.ts",paraId:59,tocIndex:16},{value:" \u4E2D\u5BFC\u51FA\uFF1A",paraId:59,tocIndex:16},{value:`export * from './initializer';
`,paraId:60,tocIndex:16},{value:"\u5E76\u4FEE\u6539 ",paraId:61,tocIndex:16},{value:"packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/initializer/configureActions/index.ts",paraId:61,tocIndex:16},{value:" \u5C06 ",paraId:61,tocIndex:16},{value:"customRefresh",paraId:61,tocIndex:16},{value:" \u5BFC\u51FA\uFF1A",paraId:61,tocIndex:16},{value:`export * from './configureActionsInitializer';
+ export * from './items/customRefresh';
`,paraId:62,tocIndex:16},{value:"\u6211\u4EEC\u8FD8\u9700\u8981\u5C06 ",paraId:63,tocIndex:17},{value:"useCustomRefreshActionProps",paraId:63,tocIndex:17},{value:" \u6CE8\u518C\u5230\u4E0A\u4E0B\u6587\u4E2D\u3002\u6211\u4EEC\u4FEE\u6539 ",paraId:63,tocIndex:17},{value:"packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/index.tsx",paraId:63,tocIndex:17},{value:" \u6587\u4EF6\uFF1A",paraId:63,tocIndex:17},{value:`// ...
- import { infoInitializerItem } from './initializer';
+ import { infoInitializerItem, useCustomRefreshActionProps } from './initializer';

export class PluginInitializerConfigureActionsClient extends Plugin {
  async load() {
    // ...
-   this.app.addScopes({ useInfoProps });
+   this.app.addScopes({ useInfoProps, useCustomRefreshActionProps });
  }
}
`,paraId:64,tocIndex:17},{value:"\u5173\u4E8E ",paraId:65,tocIndex:17},{value:"SchemaComponentOptions",paraId:65,tocIndex:17},{value:" \u7684\u4F7F\u7528\u53EF\u4EE5\u53C2\u8003 ",paraId:65,tocIndex:17},{value:"SchemaComponentOptions",paraId:65,tocIndex:17},{value:" \u6587\u6863\u4EE5\u53CA ",paraId:65,tocIndex:17},{value:"\u5168\u5C40\u6CE8\u518C Component \u548C Scope",paraId:66,tocIndex:17},{value:"\u3002",paraId:65,tocIndex:17},{value:"\u6211\u4EEC\u65B0\u5EFA ",paraId:67,tocIndex:19},{value:"packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/initializer/configureActions/items/customRefresh/settings.ts",paraId:67,tocIndex:19},{value:`import { SchemaSettings } from "@nocobase/client";
import { ActionNameLowercase } from "./constants";

export const customRefreshActionSettings = new SchemaSettings({
  name: \`actionSettings:\${ActionNameLowercase}\`,
  items: [
    {
      name: 'remove',
      type: 'remove',
    }
  ]
})
`,paraId:68,tocIndex:19},{value:"customRefreshActionSettings",paraId:69,tocIndex:19},{value:"\uFF1A\u8FD9\u91CC\u53EA\u7B80\u5355\u5B9A\u4E49\u4E86\u4E00\u4E2A ",paraId:69,tocIndex:19},{value:"remove",paraId:69,tocIndex:19},{value:" \u64CD\u4F5C\uFF0C\u66F4\u591A\u5173\u4E8E Schema Settings \u7684\u5B9A\u4E49\u53EF\u4EE5\u53C2\u8003 ",paraId:69,tocIndex:19},{value:"Schema Settings",paraId:69,tocIndex:19},{value:" \u6587\u6863\u3002",paraId:69,tocIndex:19},{value:"\u4FEE\u6539 ",paraId:70,tocIndex:19},{value:"packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/initializer/configureActions/items/customRefresh/index.ts",paraId:70,tocIndex:19},{value:" \u5C06\u5176\u5BFC\u51FA\uFF1A",paraId:70,tocIndex:19},{value:`export * from './settings';
`,paraId:71,tocIndex:19},{value:"\u7136\u540E\u5C06 ",paraId:72,tocIndex:20},{value:"customRefreshActionSettings",paraId:72,tocIndex:20},{value:" \u6CE8\u518C\u5230\u7CFB\u7EDF\u4E2D\u3002\u6211\u4EEC\u4FEE\u6539 ",paraId:72,tocIndex:20},{value:"packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/index.tsx",paraId:72,tocIndex:20},{value:" \u6587\u4EF6\uFF1A",paraId:72,tocIndex:20},{value:`- import { infoInitializerItem, useCustomRefreshActionProps } from './initializer';
+ import { infoInitializerItem, useCustomRefreshActionProps, customRefreshActionSettings } from './initializer';

export class PluginInitializerConfigureActionsClient extends Plugin {
  async load() {
+   this.app.schemaSettingsManager.add(customRefreshActionSettings);
  }
}
`,paraId:73,tocIndex:20},{value:"\u6211\u4EEC\u4FEE\u6539 ",paraId:74,tocIndex:21},{value:"packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/initializer/configureActions/items/customRefresh/schema.ts",paraId:74,tocIndex:21},{value:" \u6587\u4EF6\u7684 ",paraId:74,tocIndex:21},{value:"customRefreshActionSchema",paraId:74,tocIndex:21},{value:" \u65B9\u6CD5\uFF0C\u5C06 ",paraId:74,tocIndex:21},{value:"x-settings",paraId:74,tocIndex:21},{value:" \u8BBE\u7F6E\u4E3A ",paraId:74,tocIndex:21},{value:"customRefreshActionSettings.name",paraId:74,tocIndex:21},{value:"\u3002",paraId:74,tocIndex:21},{value:`+ import { customRefreshActionSettings } from "./settings";

export const customRefreshActionSchema: ISchema = {
  type: 'void',
  'x-component': 'Action',
+ "x-settings": customRefreshActionSettings.name,
  title: 'Custom Refresh',
  'x-use-component-props': 'useCustomRefreshActionProps'
}
`,paraId:75,tocIndex:21},{value:"\u6211\u4EEC\u7EE7\u7EED\u4FEE\u6539 ",paraId:76,tocIndex:23},{value:"packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/initializer/configureActions/items/customRefresh/initializer.ts",paraId:76,tocIndex:23},{value:" \u6587\u4EF6\uFF1A",paraId:76,tocIndex:23},{value:`import { SchemaInitializerItemType, useSchemaInitializer } from "@nocobase/client";
import { customRefreshActionSchema } from "./schema";
import { ActionName } from "./constants";
import { useT } from "../../../../locale";

export const customRefreshActionInitializerItem: SchemaInitializerItemType = {
  type: 'item',
  name: ActionName,
  useComponentProps() {
    const { insert } = useSchemaInitializer();
    const t = useT();
    return {
      title: t(ActionName),
      onClick() {
        insert(customRefreshActionSchema)
      },
    };
  },
};
`,paraId:77,tocIndex:23},{value:"type: 'item'",paraId:78,tocIndex:23},{value:"\uFF1A\u7C7B\u578B\u4E3A ",paraId:78,tocIndex:23},{value:"item",paraId:78,tocIndex:23},{value:"\uFF0C\u8868\u793A\u6587\u672C\uFF0C\u5F53\u70B9\u51FB\u540E\u4F1A\u89E6\u53D1 ",paraId:78,tocIndex:23},{value:"onClick",paraId:78,tocIndex:23},{value:" \u4E8B\u4EF6",paraId:78,tocIndex:23},{value:"name: 'custom refresh'",paraId:78,tocIndex:23},{value:"\uFF1A\u552F\u4E00\u6807\u8BC6\u7B26\uFF0C\u7528\u4E8E\u533A\u5206\u4E0D\u540C\u7684 Schema Item \u548C\u589E\u5220\u6539\u67E5\u64CD\u4F5C",paraId:78,tocIndex:23},{value:"title: 'Custom Refresh'",paraId:78,tocIndex:23},{value:"\uFF1A\u6309\u94AE\u6807\u9898",paraId:78,tocIndex:23},{value:"\u66F4\u591A\u5173\u4E8E Schema Item \u7684\u5B9A\u4E49\u53EF\u4EE5\u53C2\u8003 ",paraId:79,tocIndex:23},{value:"Schema Initializer Item",paraId:79,tocIndex:23},{value:" \u6587\u6863\u3002",paraId:79,tocIndex:23},{value:"\u7136\u540E\u4FEE\u6539 ",paraId:80,tocIndex:23},{value:"packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/initializer/configureActions/index.ts",paraId:80,tocIndex:23},{value:" \u5C06\u5176\u5BFC\u51FA\uFF1A",paraId:80,tocIndex:23},{value:`export * from './initializer';
`,paraId:81,tocIndex:23},{value:"\u6211\u4EEC\u4FEE\u6539 ",paraId:82,tocIndex:24},{value:"packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/initializer/configureActions/configureActionsInitializer.ts",paraId:82,tocIndex:24},{value:" \u6587\u4EF6\uFF0C\u5C06 ",paraId:82,tocIndex:24},{value:"customRefreshActionInitializerItem",paraId:82,tocIndex:24},{value:" \u6DFB\u52A0\u5230 ",paraId:82,tocIndex:24},{value:"items",paraId:82,tocIndex:24},{value:" \u4E2D\uFF1A",paraId:82,tocIndex:24},{value:`import { SchemaInitializer } from "@nocobase/client";
+ import { customRefreshActionInitializerItem } from "./items/customRefresh";

export const configureActionsInitializer = new SchemaInitializer({
  name: 'info:configureActions',
  title: 'Configure actions',
  icon: 'SettingOutlined',
  style: {
    marginLeft: 8,
  },
  items: [
    {
      name: 'customRequest',
      title: '{{t("Custom request")}}',
      Component: 'CustomRequestInitializer',
      'x-align': 'right',
    },
+   customRefreshActionInitializerItem
  ]
});
`,paraId:83,tocIndex:24},{value:`
  `,paraId:4},{value:"\u4F60\u53EF\u4EE5\u6839\u636E\u9700\u8981\u5B9E\u73B0\u66F4\u591A\u7684 ",paraId:84,tocIndex:24},{value:"Action",paraId:84,tocIndex:24},{value:"\u3002",paraId:84,tocIndex:24},{value:"\u6309\u7167 ",paraId:85,tocIndex:25},{value:"\u6784\u5EFA\u5E76\u6253\u5305\u63D2\u4EF6",paraId:86,tocIndex:25},{value:" \u6587\u6863\u8BF4\u660E\uFF0C\u6211\u4EEC\u53EF\u4EE5\u6253\u5305\u63D2\u4EF6\u5E76\u4E0A\u4F20\u5230\u751F\u4EA7\u73AF\u5883\u3002",paraId:85,tocIndex:25},{value:"\u5982\u679C\u662F clone \u7684\u6E90\u7801\uFF0C\u9700\u8981\u5148\u6267\u884C\u4E00\u6B21\u5168\u91CF build\uFF0C\u5C06\u63D2\u4EF6\u7684\u4F9D\u8D56\u4E5F\u6784\u5EFA\u597D\u3002",paraId:87,tocIndex:25},{value:`yarn build
`,paraId:88,tocIndex:25},{value:"\u5982\u679C\u662F\u4F7F\u7528\u7684 ",paraId:89,tocIndex:25},{value:"create-nocobase-app",paraId:89,tocIndex:25},{value:" \u521B\u5EFA\u7684\u9879\u76EE\uFF0C\u53EF\u4EE5\u76F4\u63A5\u6267\u884C\uFF1A",paraId:89,tocIndex:25},{value:`yarn build @nocobase-sample/plugin-initializer-configure-actions --tar
`,paraId:90,tocIndex:25},{value:"\u8FD9\u6837\u5C31\u53EF\u4EE5\u770B\u5230 ",paraId:91,tocIndex:25},{value:"storage/tar/@nocobase-sample/plugin-initializer-configure-actions.tar.gz",paraId:91,tocIndex:25},{value:" \u6587\u4EF6\u4E86\uFF0C\u7136\u540E\u901A\u8FC7",paraId:91,tocIndex:25},{value:"\u4E0A\u4F20\u7684\u65B9\u5F0F",paraId:92,tocIndex:25},{value:"\u8FDB\u884C\u5B89\u88C5\u3002",paraId:91,tocIndex:25}]}}]);
