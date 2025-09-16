"use strict";(self.webpackChunknocobase_docs=self.webpackChunknocobase_docs||[]).push([[28555],{128555:function(d,a,e){e.r(a),e.d(a,{texts:function(){return n}});const n=[{value:"NocoBase \u6709\u5F88\u591A ",paraId:0,tocIndex:1},{value:"Add block",paraId:0,tocIndex:1},{value:" \u6309\u94AE\u7528\u4E8E\u5411\u754C\u9762\u6DFB\u52A0\u533A\u5757\u3002\u5176\u4E2D\u6709\u4E9B\u548C\u6570\u636E\u8868\u6709\u5173\u7CFB\u7684\u88AB\u6210\u4E3A\u6570\u636E\u533A\u5757 ",paraId:0,tocIndex:1},{value:"Data Block",paraId:0,tocIndex:1},{value:"\uFF0C\u6709\u4E9B\u548C\u6570\u636E\u8868\u65E0\u5173\u7684\u88AB\u79F0\u4E3A\u7B80\u5355\u533A\u5757 ",paraId:0,tocIndex:1},{value:"Simple Block",paraId:0,tocIndex:1},{value:"\u3002",paraId:0,tocIndex:1},{value:"\u4F46\u662F\u76EE\u524D\u5DF2\u6709\u7684\u533A\u5757\u7C7B\u578B\u4E0D\u4E00\u5B9A\u6EE1\u8DB3\u6211\u4EEC\u7684\u9700\u6C42\uFF0C\u6211\u4EEC\u5C31\u9700\u8981\u6839\u636E\u9700\u6C42\u81EA\u5B9A\u5F00\u53D1\u4E00\u4E9B\u533A\u5757\uFF0C\u672C\u7BC7\u6587\u7AE0\u5C31\u662F\u9488\u5BF9\u7B80\u5355\u533A\u5757 ",paraId:1,tocIndex:1},{value:"Simple Block",paraId:1,tocIndex:1},{value:" \u8FDB\u884C\u8BF4\u660E\u3002",paraId:1,tocIndex:1},{value:"\u672C\u5B9E\u4F8B\u4F1A\u521B\u5EFA\u4E00\u4E2A\u56FE\u7247\u533A\u5757\u7C7B\u578B\uFF0C\u5E76\u5C06\u5176\u6DFB\u52A0\u5230 ",paraId:2,tocIndex:2},{value:"Page",paraId:2,tocIndex:2},{value:"\u3001",paraId:2,tocIndex:2},{value:"Table",paraId:2,tocIndex:2},{value:" \u4EE5\u53CA\u79FB\u52A8\u7AEF\u7684 ",paraId:2,tocIndex:2},{value:"Add block",paraId:2,tocIndex:2},{value:" \u4E2D\u3002",paraId:2,tocIndex:2},{value:"\u672C\u5B9E\u4F8B\u4E3B\u8981\u4E3A\u4E86\u6F14\u793A initializer \u7684\u4F7F\u7528\uFF0C\u66F4\u591A\u5173\u4E8E\u533A\u5757\u6269\u5C55\u53EF\u4EE5\u67E5\u770B ",paraId:3,tocIndex:2},{value:"\u533A\u5757\u6269\u5C55",paraId:4,tocIndex:2},{value:" \u6587\u6863\u3002",paraId:3,tocIndex:2},{value:"\u672C\u6587\u6863\u5B8C\u6574\u7684\u793A\u4F8B\u4EE3\u7801\u53EF\u4EE5\u5728 ",paraId:5,tocIndex:2},{value:"plugin-samples",paraId:5,tocIndex:2},{value:" \u4E2D\u67E5\u770B\u3002",paraId:5,tocIndex:2},{value:`
  `,paraId:6},{value:"\u6211\u4EEC\u6309\u7167 ",paraId:7,tocIndex:3},{value:"\u7F16\u5199\u7B2C\u4E00\u4E2A\u63D2\u4EF6",paraId:8,tocIndex:3},{value:" \u6587\u6863\u8BF4\u660E\uFF0C\u5982\u679C\u6CA1\u6709\u4E00\u4E2A\u9879\u76EE\uFF0C\u53EF\u4EE5\u5148\u521B\u5EFA\u4E00\u4E2A\u9879\u76EE\uFF0C\u5982\u679C\u5DF2\u7ECF\u6709\u4E86\u6216\u8005\u662F clone \u7684\u6E90\u7801\uFF0C\u5219\u8DF3\u8FC7\u8FD9\u4E00\u6B65\u3002",paraId:7,tocIndex:3},{value:`yarn create nocobase-app my-nocobase-app -d postgres
cd my-nocobase-app
yarn install
yarn nocobase install
`,paraId:9,tocIndex:3},{value:"\u7136\u540E\u521D\u59CB\u5316\u4E00\u4E2A\u63D2\u4EF6\uFF0C\u5E76\u6DFB\u52A0\u5230\u7CFB\u7EDF\u4E2D\uFF1A",paraId:10,tocIndex:3},{value:`yarn pm create @nocobase-sample/plugin-initializer-block-simple
yarn pm enable @nocobase-sample/plugin-initializer-block-simple
`,paraId:11,tocIndex:3},{value:"\u7136\u540E\u542F\u52A8\u9879\u76EE\u5373\u53EF\uFF1A",paraId:12,tocIndex:3},{value:`yarn dev
`,paraId:13,tocIndex:3},{value:"\u7136\u540E\u767B\u5F55\u540E\u8BBF\u95EE ",paraId:14,tocIndex:3},{value:"http://localhost:13000/admin/pm/list/local/",paraId:14,tocIndex:3},{value:" \u5C31\u53EF\u4EE5\u770B\u5230\u63D2\u4EF6\u5DF2\u7ECF\u5B89\u88C5\u5E76\u542F\u7528\u4E86\u3002",paraId:14,tocIndex:3},{value:"\u5728\u5B9E\u73B0\u672C\u793A\u4F8B\u4E4B\u524D\uFF0C\u6211\u4EEC\u9700\u8981\u5148\u4E86\u89E3\u4E00\u4E9B\u57FA\u7840\u77E5\u8BC6\uFF1A",paraId:15,tocIndex:4},{value:"SchemaInitializer \u6559\u7A0B",paraId:16,tocIndex:4},{value:"\uFF1A\u7528\u4E8E\u5411\u754C\u9762\u5185\u6DFB\u52A0\u5404\u79CD\u533A\u5757\u3001\u5B57\u6BB5\u3001\u64CD\u4F5C\u7B49",paraId:17,tocIndex:4},{value:"SchemaInitializer API",paraId:17,tocIndex:4},{value:"\uFF1A\u7528\u4E8E\u5411\u754C\u9762\u5185\u6DFB\u52A0\u5404\u79CD\u533A\u5757\u3001\u5B57\u6BB5\u3001\u64CD\u4F5C\u7B49",paraId:17,tocIndex:4},{value:"UI Schema \u534F\u8BAE",paraId:18,tocIndex:4},{value:"\uFF1A\u8BE6\u7EC6\u4ECB\u7ECD Schema \u7684\u7ED3\u6784\u548C\u6BCF\u4E2A\u5C5E\u6027\u7684\u4F5C\u7528",paraId:17,tocIndex:4},{value:"Designable \u8BBE\u8BA1\u5668",paraId:19,tocIndex:4},{value:"\uFF1A\u7528\u4E8E\u4FEE\u6539 Schema",paraId:17,tocIndex:4},{value:`.
\u251C\u2500\u2500 client # \u5BA2\u6237\u7AEF\u63D2\u4EF6
\u2502   \u251C\u2500\u2500 initializer # \u521D\u59CB\u5316\u5668
\u2502   \u251C\u2500\u2500 component # \u533A\u5757\u7EC4\u4EF6
\u2502   \u251C\u2500\u2500 index.tsx # \u5BA2\u6237\u7AEF\u63D2\u4EF6\u5165\u53E3
\u2502   \u251C\u2500\u2500 locale.ts # \u591A\u8BED\u8A00\u5DE5\u5177\u51FD\u6570
\u2502   \u251C\u2500\u2500 constants.ts # \u5E38\u91CF
\u2502   \u251C\u2500\u2500 schema # Schema
\u2502   \u2514\u2500\u2500 settings # Schema Settings
\u251C\u2500\u2500 locale # \u591A\u8BED\u8A00\u6587\u4EF6
\u2502   \u251C\u2500\u2500 en-US.json # \u82F1\u8BED
\u2502   \u2514\u2500\u2500 zh-CN.json # \u4E2D\u6587
\u251C\u2500\u2500 index.ts # \u670D\u52A1\u7AEF\u63D2\u4EF6\u5165\u53E3
\u2514\u2500\u2500 server # \u670D\u52A1\u7AEF\u63D2\u4EF6
`,paraId:20,tocIndex:4},{value:"\u6211\u4EEC\u9996\u5148\u9700\u8981\u5B9A\u4E49\u533A\u5757\u540D\u79F0\uFF0C\u5B83\u5C06\u4F1A\u4F7F\u7528\u5728\u5404\u4E2A\u5730\u65B9\u3002",paraId:21,tocIndex:5},{value:"\u6211\u4EEC\u65B0\u5EFA ",paraId:22,tocIndex:5},{value:"packages/plugins/@nocobase-sample/plugin-initializer-block-simple/src/client/constants.ts",paraId:22,tocIndex:5},{value:"\uFF1A",paraId:22,tocIndex:5},{value:`export const BlockName = 'Image';
export const BlockNameLowercase = BlockName.toLowerCase();
`,paraId:23,tocIndex:5},{value:"\u672C\u793A\u4F8B\u8981\u505A\u7684\u662F\u4E00\u4E2A\u56FE\u7247\u533A\u5757\u7EC4\u4EF6\uFF0C\u6211\u4EEC\u53D6\u540D\u4E3A ",paraId:24,tocIndex:7},{value:"Image",paraId:24,tocIndex:7},{value:"\u3002",paraId:24,tocIndex:7},{value:"\u6240\u4EE5\u6211\u4EEC\u65B0\u5EFA ",paraId:25,tocIndex:7},{value:"packages/plugins/@nocobase-sample/plugin-initializer-block-simple/src/client/component/Image.tsx",paraId:25,tocIndex:7},{value:" \u6587\u4EF6\uFF0C\u5176\u5185\u5BB9\u5982\u4E0B\uFF1A",paraId:25,tocIndex:7},{value:`import React, { FC } from 'react';
import { withDynamicSchemaProps } from '@nocobase/client';
import { BlockName } from '../constants';

export const Image: FC<{ height?: number }> = withDynamicSchemaProps(({ height = 500 }) => {
  return <div style={{ height }}>
    <img
      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      src="https://picsum.photos/2000/500"
    />
  </div>
}, { displayName: BlockName })
`,paraId:26,tocIndex:7},{value:"Image",paraId:27,tocIndex:7},{value:" \u7EC4\u4EF6\u6574\u4F53\u6765\u8BF4\u662F\u4E00\u4E2A\u88AB ",paraId:27,tocIndex:7},{value:"withDynamicSchemaProps",paraId:27,tocIndex:7},{value:" \u5305\u88F9\u7684\u51FD\u6570\u7EC4\u4EF6\uFF0C",paraId:27,tocIndex:7},{value:"withDynamicSchemaProps",paraId:28,tocIndex:7},{value:" \u662F\u4E00\u4E2A\u9AD8\u9636\u7EC4\u4EF6\uFF0C\u7528\u4E8E\u5904\u7406 Schema \u4E2D\u7684\u7684\u52A8\u6001\u5C5E\u6027\u3002",paraId:27,tocIndex:7},{value:"\u5982\u679C\u4E0D\u770B ",paraId:29,tocIndex:7},{value:"withDynamicSchemaProps",paraId:29,tocIndex:7},{value:" \u7684\u8BDD\uFF0C",paraId:29,tocIndex:7},{value:"Image",paraId:29,tocIndex:7},{value:" \u7EC4\u4EF6\u5C31\u662F\u4E00\u4E2A\u7B80\u5355\u7684\u51FD\u6570\u7EC4\u4EF6\u3002",paraId:29,tocIndex:7},{value:"\u7136\u540E\u5C06\u5176\u5728 ",paraId:30,tocIndex:7},{value:"packages/plugins/@nocobase-sample/plugin-initializer-block-simple/src/client/component/index.ts",paraId:30,tocIndex:7},{value:" \u4E2D\u5BFC\u51FA\uFF1A",paraId:30,tocIndex:7},{value:`export * from './Image';
`,paraId:31,tocIndex:7},{value:"\u6211\u4EEC\u9700\u8981\u5C06 ",paraId:32,tocIndex:8},{value:"Image",paraId:32,tocIndex:8},{value:" \u901A\u8FC7\u63D2\u4EF6\u6CE8\u518C\u5230\u7CFB\u7EDF\u4E2D\u3002",paraId:32,tocIndex:8},{value:`import { Plugin } from '@nocobase/client';
import { Image } from './component'

export class PluginInitializerBlockSimpleClient extends Plugin {
  async load() {
    this.app.addComponents({ Image })
  }
}

export default PluginInitializerBlockSimpleClient;
`,paraId:33,tocIndex:8},{value:"\u7EC4\u4EF6\u9A8C\u8BC1\u65B9\u5F0F\u6709 2 \u79CD\uFF1A",paraId:34,tocIndex:9},{value:"\u4E34\u65F6\u9875\u9762\u9A8C\u8BC1\uFF1A\u6211\u4EEC\u53EF\u4EE5\u4E34\u65F6\u5EFA\u4E00\u4E2A\u9875\u9762\uFF0C\u7136\u540E\u6E32\u67D3 ",paraId:35,tocIndex:9},{value:"Image",paraId:35,tocIndex:9},{value:" \u7EC4\u4EF6\uFF0C\u67E5\u770B\u662F\u5426\u7B26\u5408\u9700\u6C42",paraId:35,tocIndex:9},{value:"\u6587\u6863\u793A\u4F8B\u9A8C\u8BC1\uFF1A\u53EF\u4EE5\u542F\u52A8\u6587\u6863 ",paraId:35,tocIndex:9},{value:"yarn doc plugins/@nocobase-sample/plugin-initializer-block-simple",paraId:35,tocIndex:9},{value:"\uFF0C\u901A\u8FC7\u5199\u6587\u6863\u793A\u4F8B\u7684\u65B9\u5F0F\u9A8C\u8BC1\u662F\u5426\u7B26\u5408\u9700\u6C42\uFF08TODO\uFF09",paraId:35,tocIndex:9},{value:"\u6211\u4EEC\u4EE5 ",paraId:36,tocIndex:9},{value:"\u4E34\u65F6\u9875\u9762\u9A8C\u8BC1",paraId:36,tocIndex:9},{value:" \u4E3A\u4F8B\uFF0C\u6211\u4EEC\u65B0\u5EFA\u4E00\u4E2A\u9875\u9762\uFF0C\u6839\u636E\u5C5E\u6027\u53C2\u6570\u6DFB\u52A0\u4E00\u4E2A\u6216\u8005\u591A\u4E2A ",paraId:36,tocIndex:9},{value:"Image",paraId:36,tocIndex:9},{value:" \u7EC4\u4EF6\uFF0C\u67E5\u770B\u662F\u5426\u7B26\u5408\u9700\u6C42\u3002",paraId:36,tocIndex:9},{value:`import React from 'react';
import { Plugin } from '@nocobase/client';
import { Image } from './component'

export class PluginInitializerBlockSimpleClient extends Plugin {
  async load() {
    this.app.addComponents({ Image })

    this.app.router.add('admin.image-component', {
      path: '/admin/image-component',
      Component: () => {
        return <>
          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <Image />
          </div>

          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <Image height={400} />
          </div>
        </>
      }
    })
  }
}

export default PluginInitializerBlockSimpleClient;
`,paraId:37,tocIndex:9},{value:"\u7136\u540E\u8BBF\u95EE ",paraId:38,tocIndex:9},{value:"http://localhost:13000/admin/image-component",paraId:38,tocIndex:9},{value:" \u5C31\u53EF\u4EE5\u770B\u5230\u5BF9\u5E94\u6D4B\u8BD5\u9875\u9762\u7684\u5185\u5BB9\u4E86\u3002",paraId:38,tocIndex:9},{value:"\u9A8C\u8BC1\u5B8C\u6BD5\u540E\u9700\u8981\u5220\u9664\u6D4B\u8BD5\u9875\u9762\u3002",paraId:39,tocIndex:9},{value:"NocoBase \u7684\u52A8\u6001\u9875\u9762\u90FD\u662F\u901A\u8FC7 Schema \u6765\u6E32\u67D3\uFF0C\u6240\u4EE5\u6211\u4EEC\u9700\u8981\u5B9A\u4E49\u4E00\u4E2A Schema\uFF0C\u540E\u7EED\u7528\u4E8E\u5728\u754C\u9762\u4E2D\u6DFB\u52A0 ",paraId:40,tocIndex:11},{value:"Image",paraId:40,tocIndex:11},{value:" \u533A\u5757\u3002\u5728\u5B9E\u73B0\u672C\u5C0F\u8282\u4E4B\u524D\uFF0C\u6211\u4EEC\u9700\u8981\u5148\u4E86\u89E3\u4E00\u4E9B\u57FA\u7840\u77E5\u8BC6\uFF1A",paraId:40,tocIndex:11},{value:"UI Schema \u534F\u8BAE",paraId:41,tocIndex:11},{value:"\uFF1A\u8BE6\u7EC6\u4ECB\u7ECD Schema \u7684\u7ED3\u6784\u548C\u6BCF\u4E2A\u5C5E\u6027\u7684\u4F5C\u7528",paraId:42,tocIndex:11},{value:"\u6211\u4EEC\u65B0\u5EFA ",paraId:43,tocIndex:11},{value:"packages/plugins/@nocobase-sample/plugin-initializer-block-simple/src/client/schema/index.ts",paraId:43,tocIndex:11},{value:" \u6587\u4EF6\uFF1A",paraId:43,tocIndex:11},{value:`import { ISchema } from "@nocobase/client";
import { BlockName, BlockNameLowercase } from "../constants";

export const imageSchema: ISchema = {
  type: 'void',
  'x-component': 'CardItem',
  properties: {
    [BlockNameLowercase]: {
      'x-component': BlockName,
    }
  }
};
`,paraId:44,tocIndex:11},{value:"\u5173\u4E8E ",paraId:45,tocIndex:11},{value:"imageSchema",paraId:45,tocIndex:11},{value:" \u7684\u8BE6\u7EC6\u8BF4\u660E\uFF1A",paraId:45,tocIndex:11},{value:"type",paraId:46,tocIndex:11},{value:"\uFF1A\u7C7B\u578B\uFF0C\u8FD9\u91CC\u662F ",paraId:46,tocIndex:11},{value:"void",paraId:46,tocIndex:11},{value:"\uFF0C\u8868\u793A\u7EAF UI \u8282\u70B9\uFF0C\u6CA1\u6709\u6570\u636E",paraId:46,tocIndex:11},{value:"x-decorator",paraId:46,tocIndex:11},{value:"\uFF1A\u88C5\u9970\u5668\uFF0C\u8FD9\u91CC\u662F ",paraId:46,tocIndex:11},{value:"CardItem \u7EC4\u4EF6",paraId:46,tocIndex:11},{value:"\uFF0C\u76EE\u524D\u7684\u533A\u5757\u90FD\u662F\u88AB\u5305\u88F9\u5728\u5361\u7247\u4E2D\u7684\uFF0C\u7528\u4E8E\u63D0\u4F9B\u6837\u5F0F\u3001\u5E03\u5C40\u548C\u62D6\u62FD\u7B49\u529F\u80FD",paraId:46,tocIndex:11},{value:"x-component",paraId:46,tocIndex:11},{value:"\uFF1A\u7EC4\u4EF6\uFF0C\u8FD9\u91CC\u662F ",paraId:46,tocIndex:11},{value:"Image",paraId:46,tocIndex:11},{value:"\uFF0C\u5C31\u662F\u6211\u4EEC\u521A\u5B9A\u4E49\u7684\u7EC4\u4EF6",paraId:46,tocIndex:11},{value:"\u4E0A\u8FF0 Schema \u8F6C\u4E3A React \u7EC4\u4EF6\u540E\u76F8\u5F53\u4E8E\uFF1A",paraId:47,tocIndex:11},{value:`<CardItem>
  <Image />
</CardItem>
`,paraId:48,tocIndex:11},{value:"\u540C\u9A8C\u8BC1\u7EC4\u4EF6\u4E00\u6837\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u4E34\u65F6\u9875\u9762\u9A8C\u8BC1\u6216\u8005\u6587\u6863\u793A\u4F8B\u9A8C\u8BC1\u7684\u65B9\u5F0F\u6765\u9A8C\u8BC1 Schema \u662F\u5426\u7B26\u5408\u9700\u6C42\u3002\u6211\u4EEC\u8FD9\u91CC\u4EE5\u4E34\u65F6\u9875\u9762\u9A8C\u8BC1\u4E3A\u4F8B\uFF1A",paraId:49,tocIndex:12},{value:`import React from 'react';
import { Plugin, SchemaComponent } from '@nocobase/client';
import { Image } from './component'
import { imageSchema } from './schema'

export class PluginInitializerBlockSimpleClient extends Plugin {
  async load() {
    this.app.addComponents({ Image })

    this.app.router.add('admin.image-schema', {
      path: '/admin/image-schema',
      Component: () => {
        return <div style={{ marginTop: 20, marginBottom: 20 }}>
          <SchemaComponent schema={{ properties: { test: imageSchema } }} />
        </div>
      }
    })
  }
}

export default PluginInitializerBlockSimpleClient;
`,paraId:50,tocIndex:12},{value:"\u5173\u4E8E ",paraId:51,tocIndex:12},{value:"SchemaComponent",paraId:51,tocIndex:12},{value:" \u7684\u8BE6\u7EC6\u8BF4\u660E\u53EF\u4EE5\u67E5\u770B ",paraId:51,tocIndex:12},{value:"SchemaComponent",paraId:51,tocIndex:12},{value:" \u6587\u6863\u3002",paraId:51,tocIndex:12},{value:"\u6211\u4EEC\u8BBF\u95EE ",paraId:52,tocIndex:12},{value:"http://localhost:13000/admin/image-schema",paraId:52,tocIndex:12},{value:" \u5C31\u53EF\u4EE5\u770B\u5230\u5BF9\u5E94\u6D4B\u8BD5\u9875\u9762\u7684\u5185\u5BB9\u4E86\u3002",paraId:52,tocIndex:12},{value:"\u9A8C\u8BC1\u5B8C\u6BD5\u540E\u9700\u8981\u5220\u9664\u6D4B\u8BD5\u9875\u9762\u3002",paraId:53,tocIndex:12},{value:"\u6211\u4EEC\u65B0\u5EFA ",paraId:54,tocIndex:13},{value:"packages/plugins/@nocobase-sample/plugin-initializer-block-simple/src/client/initializer/index.ts",paraId:54,tocIndex:13},{value:" \u6587\u4EF6\uFF1A",paraId:54,tocIndex:13},{value:`import { SchemaInitializerItemType, useSchemaInitializer } from '@nocobase/client';

import { useT } from '../locale';
import { imageSchema } from '../schema';
import { BlockName, BlockNameLowercase } from '../constants';

export const imageInitializerItem: SchemaInitializerItemType = {
  type: 'item',
  name: BlockNameLowercase,
  icon: 'FileImageOutlined',
  useComponentProps() {
    const { insert } = useSchemaInitializer();
    const t = useT()
    return {
      title: t(BlockName),
      onClick: () => {
        insert(imageSchema);
      },
    };
  },
}
`,paraId:55,tocIndex:13},{value:"type",paraId:56,tocIndex:13},{value:"\uFF1A\u7C7B\u578B\uFF0C\u8FD9\u91CC\u662F ",paraId:56,tocIndex:13},{value:"item",paraId:56,tocIndex:13},{value:"\uFF0C\u8868\u793A\u662F\u4E00\u4E2A\u6587\u672C\uFF0C\u5176\u6709\u70B9\u51FB\u4E8B\u4EF6\uFF0C\u70B9\u51FB\u540E\u53EF\u4EE5\u63D2\u5165\u4E00\u4E2A\u65B0\u7684 Schema",paraId:56,tocIndex:13},{value:"name",paraId:56,tocIndex:13},{value:"\uFF1A\u552F\u4E00\u6807\u8BC6\u7B26\uFF0C\u7528\u4E8E\u533A\u5206\u4E0D\u540C\u7684 Schema Item \u548C\u589E\u5220\u6539\u67E5\u64CD\u4F5C",paraId:56,tocIndex:13},{value:"icon",paraId:56,tocIndex:13},{value:"\uFF1A\u56FE\u6807\uFF0C\u66F4\u591A icon \u53EF\u4EE5\u53C2\u8003 ",paraId:56,tocIndex:13},{value:"Ant Design Icons",paraId:56,tocIndex:13},{value:"useComponentProps",paraId:56,tocIndex:13},{value:"\uFF1A\u8FD4\u56DE\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5305\u542B ",paraId:56,tocIndex:13},{value:"title",paraId:56,tocIndex:13},{value:" \u548C ",paraId:56,tocIndex:13},{value:"onClick",paraId:56,tocIndex:13},{value:" \u4E24\u4E2A\u5C5E\u6027\uFF0C",paraId:56,tocIndex:13},{value:"title",paraId:56,tocIndex:13},{value:" \u662F\u663E\u793A\u7684\u6587\u672C\uFF0C",paraId:56,tocIndex:13},{value:"onClick",paraId:56,tocIndex:13},{value:" \u662F\u70B9\u51FB\u540E\u7684\u56DE\u8C03\u51FD\u6570",paraId:56,tocIndex:13},{value:"useSchemaInitializer()",paraId:56,tocIndex:13},{value:"\uFF1A\u7528\u4E8E\u83B7\u53D6 ",paraId:56,tocIndex:13},{value:"SchemaInitializerContext",paraId:56,tocIndex:13},{value:` \u4E0A\u4E0B\u6587
`,paraId:56,tocIndex:13},{value:"insert",paraId:57,tocIndex:13},{value:"\uFF1A\u63D2\u5165\u4E00\u4E2A\u65B0\u7684 Schema",paraId:57,tocIndex:13},{value:"\u66F4\u591A\u5173\u4E8E Schema Item \u7684\u5B9A\u4E49\u53EF\u4EE5\u53C2\u8003 ",paraId:58,tocIndex:13},{value:"Schema Initializer Item",paraId:58,tocIndex:13},{value:" \u6587\u6863\u3002",paraId:58,tocIndex:13},{value:"\u4E00\u4E2A\u5B8C\u6574\u7684 Block \u8FD8\u9700\u8981\u6709 Schema Settings\uFF0C\u7528\u4E8E\u914D\u7F6E\u4E00\u4E9B\u5C5E\u6027\u548C\u64CD\u4F5C\uFF0C\u4F46 Schema Settings \u4E0D\u662F\u672C\u793A\u4F8B\u7684\u91CD\u70B9\uFF0C\u6240\u4EE5\u6211\u4EEC\u8FD9\u91CC\u4EC5\u6709\u4E00\u4E2A ",paraId:59,tocIndex:15},{value:"remove",paraId:59,tocIndex:15},{value:" \u64CD\u4F5C\u3002",paraId:59,tocIndex:15},{value:"\u6211\u4EEC\u65B0\u5EFA ",paraId:60,tocIndex:15},{value:"packages/plugins/@nocobase-sample/plugin-initializer-block-simple/src/client/settings/index.ts",paraId:60,tocIndex:15},{value:" \u6587\u4EF6\uFF1A",paraId:60,tocIndex:15},{value:`import { SchemaSettings } from "@nocobase/client";
import { BlockNameLowercase } from "../constants";

export const imageSettings = new SchemaSettings({
  name: \`blockSettings:\${BlockNameLowercase}\`,
  items: [
    {
      type: 'remove',
      name: 'remove',
      componentProps: {
        removeParentsIfNoChildren: true,
        breakRemoveOn: {
          'x-component': 'Grid',
        },
      }
    }
  ]
});
`,paraId:61,tocIndex:15},{value:`componentProps
`,paraId:62,tocIndex:15},{value:"removeParentsIfNoChildren",paraId:63,tocIndex:15},{value:"\uFF1A\u5982\u679C\u6CA1\u6709\u5B50\u8282\u70B9\uFF0C\u662F\u5426\u5220\u9664\u7236\u8282\u70B9",paraId:63,tocIndex:15},{value:"breakRemoveOn",paraId:63,tocIndex:15},{value:"\uFF1A\u5220\u9664\u65F6\u7684\u4E2D\u65AD\u6761\u4EF6\u3002\u56E0\u4E3A ",paraId:63,tocIndex:15},{value:"Add Block",paraId:63,tocIndex:15},{value:" \u4F1A\u81EA\u52A8\u5C06\u5B50\u9879\u7684\u5305\u88F9\u5728 ",paraId:63,tocIndex:15},{value:"Grid",paraId:63,tocIndex:15},{value:" \u4E2D\uFF0C\u6240\u4EE5\u8FD9\u91CC\u8BBE\u7F6E ",paraId:63,tocIndex:15},{value:"breakRemoveOn: { 'x-component': 'Grid' }",paraId:63,tocIndex:15},{value:"\uFF0C\u5F53\u5220\u9664 ",paraId:63,tocIndex:15},{value:"Grid",paraId:63,tocIndex:15},{value:" \u65F6\uFF0C\u4E0D\u518D\u5411\u4E0A\u5220\u9664\u3002",paraId:63,tocIndex:15},{value:`import { Plugin } from '@nocobase/client';
import { imageSettings } from './settings';

export class PluginInitializerBlockSimpleClient extends Plugin {
  async load() {
    // ...
    this.app.schemaSettingsManager.add(imageSettings)
  }
}

export default PluginInitializerBlockSimpleClient;
`,paraId:64,tocIndex:16},{value:"\u6211\u4EEC\u4FEE\u6539 ",paraId:65,tocIndex:17},{value:"packages/plugins/@nocobase-sample/plugin-initializer-block-simple/src/client/schema/index.ts",paraId:65,tocIndex:17},{value:" \u4E2D\u7684 ",paraId:65,tocIndex:17},{value:"imageSchema",paraId:65,tocIndex:17},{value:"\uFF1A",paraId:65,tocIndex:17},{value:`+ import { imageSettings } from "../settings";

const imageSchema: ISchema = {
  type: 'void',
  'x-decorator': 'CardItem',
+ 'x-settings': imageSettings.name,
  // ...
};
`,paraId:66,tocIndex:17},{value:"\u7CFB\u7EDF\u4E2D\u6709\u5F88\u591A\u4E2A ",paraId:67,tocIndex:18},{value:"Add block",paraId:67,tocIndex:18},{value:" \u6309\u94AE\uFF0C\u4F46\u4ED6\u4EEC\u7684 ",paraId:67,tocIndex:18},{value:"name \u662F\u4E0D\u540C\u7684",paraId:67,tocIndex:18},{value:"\u3002",paraId:67,tocIndex:18},{value:"\u5982\u679C\u6211\u4EEC\u9700\u8981\u6DFB\u52A0\u5230\u9875\u9762\u7EA7\u522B\u7684 ",paraId:68,tocIndex:19},{value:"Add block",paraId:68,tocIndex:19},{value:" \u4E2D\uFF0C\u6211\u4EEC\u9700\u8981\u77E5\u9053\u5BF9\u5E94\u7684 ",paraId:68,tocIndex:19},{value:"name",paraId:68,tocIndex:19},{value:"\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7 TODO \u65B9\u5F0F\u67E5\u770B\u5BF9\u5E94\u7684 ",paraId:68,tocIndex:19},{value:"name",paraId:68,tocIndex:19},{value:"\u3002",paraId:68,tocIndex:19},{value:"TODO",paraId:69,tocIndex:19},{value:"\u901A\u8FC7\u4E0A\u56FE\u53EF\u4EE5\u770B\u5230\u9875\u9762\u7EA7\u522B\u7684 ",paraId:70,tocIndex:19},{value:"Add block",paraId:70,tocIndex:19},{value:" \u5BF9\u5E94\u7684 name \u4E3A ",paraId:70,tocIndex:19},{value:"page:addBlock",paraId:70,tocIndex:19},{value:"\uFF0C",paraId:70,tocIndex:19},{value:"Other Blocks",paraId:70,tocIndex:19},{value:" \u5BF9\u5E94\u7684 name \u4E3A ",paraId:70,tocIndex:19},{value:"otherBlocks",paraId:70,tocIndex:19},{value:"\u3002",paraId:70,tocIndex:19},{value:"\u7136\u540E\u6211\u4EEC\u4FEE\u6539 ",paraId:71,tocIndex:19},{value:"packages/plugins/@nocobase-sample/plugin-initializer-block-simple/src/client/index.tsx",paraId:71,tocIndex:19},{value:" \u6587\u4EF6\uFF1A",paraId:71,tocIndex:19},{value:`import { Plugin } from '@nocobase/client';

import { Image } from './component'
import { imageSettings } from './settings';
import { imageInitializerItem } from './initializer';

export class PluginInitializerBlockSimpleClient extends Plugin {
  async load() {
    this.app.addComponents({ Image })
    this.app.schemaSettingsManager.add(imageSettings)
    this.app.schemaInitializerManager.addItem('page:addBlock', \`otherBlocks.\${imageInitializerItem.name}\`, imageInitializerItem)
  }
}

export default PluginInitializerBlockSimpleClient;
`,paraId:72,tocIndex:19},{value:"\u4E0A\u8FF0\u4EE3\u7801\u9996\u5148\u5C06 ",paraId:73,tocIndex:19},{value:"Image",paraId:73,tocIndex:19},{value:" \u7EC4\u4EF6\u6CE8\u518C\u5230\u7CFB\u7EDF\u4E2D\uFF0C\u8FD9\u6837\u524D\u9762 ",paraId:73,tocIndex:19},{value:"imageSchema",paraId:73,tocIndex:19},{value:" \u5B9A\u4E49\u7684 ",paraId:73,tocIndex:19},{value:"x-component: 'Image'",paraId:73,tocIndex:19},{value:" \u624D\u80FD\u627E\u5230\u5BF9\u5E94\u7684\u7EC4\u4EF6\uFF0C\u66F4\u591A\u8BE6\u7EC6\u89E3\u91CA\u53EF\u4EE5\u67E5\u770B ",paraId:73,tocIndex:19},{value:"\u5168\u5C40\u6CE8\u518C Component \u548C Scope",paraId:74,tocIndex:19},{value:"\u3002",paraId:73,tocIndex:19},{value:"\u7136\u540E\u5C06 ",paraId:75,tocIndex:19},{value:"imageSettings",paraId:75,tocIndex:19},{value:" \u901A\u8FC7 ",paraId:75,tocIndex:19},{value:"app.schemaSettingsManager.add",paraId:75,tocIndex:19},{value:" \u6DFB\u52A0\u5230\u7CFB\u7EDF\u4E2D\u3002",paraId:75,tocIndex:19},{value:"\u7136\u540E\u4F7F\u7528 ",paraId:76,tocIndex:19},{value:"app.schemaInitializerManager.addItem",paraId:76,tocIndex:19},{value:" \u5C06 ",paraId:76,tocIndex:19},{value:"imageInitializerItem",paraId:76,tocIndex:19},{value:" \u6DFB\u52A0\u5BF9\u5E94 Initializer \u5B50\u9879\u4E2D\uFF0C\u5176\u4E2D ",paraId:76,tocIndex:19},{value:"page:addBlock",paraId:76,tocIndex:19},{value:" \u662F\u9875\u9762\u4E0A ",paraId:76,tocIndex:19},{value:"Add block",paraId:76,tocIndex:19},{value:" \u7684 name\uFF0C",paraId:76,tocIndex:19},{value:"otherBlocks",paraId:76,tocIndex:19},{value:" \u662F\u5176\u7236\u7EA7\u7684 name\u3002",paraId:76,tocIndex:19},{value:"\u7136\u540E\u6211\u4EEC hover ",paraId:77,tocIndex:19},{value:"Add block",paraId:77,tocIndex:19},{value:" \u6309\u94AE\uFF0C\u5C31\u53EF\u4EE5\u770B\u5230 ",paraId:77,tocIndex:19},{value:"Image",paraId:77,tocIndex:19},{value:" \u8FD9\u4E2A\u65B0\u7684\u533A\u5757\u7C7B\u578B\u4E86\uFF0C\u70B9\u51FB ",paraId:77,tocIndex:19},{value:"Image",paraId:77,tocIndex:19},{value:"\uFF0C\u5C31\u53EF\u4EE5\u6DFB\u52A0\u4E00\u4E2A\u65B0\u7684 ",paraId:77,tocIndex:19},{value:"Image",paraId:77,tocIndex:19},{value:" \u533A\u5757\u4E86\u3002",paraId:77,tocIndex:19},{value:`
  `,paraId:6},{value:"\u6211\u4EEC\u4E0D\u4EC5\u9700\u8981\u5C06\u5176\u6DFB\u52A0\u5230\u9875\u9762\u7EA7\u522B\u7684 ",paraId:78,tocIndex:20},{value:"Add block",paraId:78,tocIndex:20},{value:" \u4E2D\uFF0C\u8FD8\u9700\u8981\u5C06\u5176\u6DFB\u52A0\u5230 ",paraId:78,tocIndex:20},{value:"Table",paraId:78,tocIndex:20},{value:" \u533A\u5757 ",paraId:78,tocIndex:20},{value:"Add new",paraId:78,tocIndex:20},{value:" \u5F39\u7A97\u7684 ",paraId:78,tocIndex:20},{value:"Add block",paraId:78,tocIndex:20},{value:" \u4E2D\u3002",paraId:78,tocIndex:20},{value:"\u6211\u4EEC\u6309\u7167\u9875\u9762\u7EA7\u522B\u83B7\u53D6 ",paraId:79,tocIndex:20},{value:"name",paraId:79,tocIndex:20},{value:" \u7684\u65B9\u5F0F\u83B7\u53D6\u5230 ",paraId:79,tocIndex:20},{value:"Table",paraId:79,tocIndex:20},{value:" \u533A\u5757\u7684 ",paraId:79,tocIndex:20},{value:"Add block",paraId:79,tocIndex:20},{value:" \u7684 ",paraId:79,tocIndex:20},{value:"name",paraId:79,tocIndex:20},{value:" \u4E3A ",paraId:79,tocIndex:20},{value:"popup:addNew:addBlock",paraId:79,tocIndex:20},{value:"\uFF0C",paraId:79,tocIndex:20},{value:"Other Blocks",paraId:79,tocIndex:20},{value:" \u5BF9\u5E94\u7684 name \u4E3A ",paraId:79,tocIndex:20},{value:"otherBlocks",paraId:79,tocIndex:20},{value:"\u3002",paraId:79,tocIndex:20},{value:"\u7136\u540E\u4FEE\u6539 ",paraId:80,tocIndex:20},{value:"packages/plugins/@nocobase-sample/plugin-initializer-block-simple/src/client/index.tsx",paraId:80,tocIndex:20},{value:" \u6587\u4EF6\uFF1A",paraId:80,tocIndex:20},{value:`export class PluginInitializerBlockSimpleClient extends Plugin {
  async load() {
    this.app.addComponents({ Image })
    this.app.schemaSettingsManager.add(imageSettings)

    this.app.schemaInitializerManager.addItem('page:addBlock', \`otherBlocks.\${imageInitializerItem.name}\`, imageInitializerItem)
+   this.app.schemaInitializerManager.addItem('popup:addNew:addBlock', \`otherBlocks.\${imageInitializerItem.name}\`, imageInitializerItem)
  }
}
`,paraId:81,tocIndex:20},{value:"\u9996\u5148\u8981\u6FC0\u6D3B\u79FB\u52A8\u7AEF\u63D2\u4EF6\uFF0C\u53C2\u8003 ",paraId:82,tocIndex:21},{value:"\u6FC0\u6D3B\u63D2\u4EF6",paraId:83,tocIndex:21},{value:" \u6587\u6863\u3002",paraId:82,tocIndex:21},{value:"\u6211\u4EEC\u53EF\u4EE5\u5C06\u5176\u6DFB\u52A0\u5230\u79FB\u52A8\u7AEF\u7684 ",paraId:84,tocIndex:21},{value:"Add block",paraId:84,tocIndex:21},{value:" \u4E2D\uFF0C\u83B7\u53D6 ",paraId:84,tocIndex:21},{value:"name",paraId:84,tocIndex:21},{value:" \u7684\u65B9\u6CD5\u8FD9\u91CC\u5C31\u4E0D\u518D\u8D58\u8FF0\u4E86\u3002",paraId:84,tocIndex:21},{value:"\u7136\u540E\u4FEE\u6539 ",paraId:85,tocIndex:21},{value:"packages/plugins/@nocobase-sample/plugin-initializer-block-simple/src/client/index.tsx",paraId:85,tocIndex:21},{value:" \u6587\u4EF6\uFF1A",paraId:85,tocIndex:21},{value:`export class PluginInitializerBlockSimpleClient extends Plugin {
  async load() {
    this.app.addComponents({ Image })
    this.app.schemaSettingsManager.add(imageSettings)

    this.app.schemaInitializerManager.addItem('page:addBlock', \`otherBlocks.\${imageInitializerItem.name}\`, imageInitializerItem)
    this.app.schemaInitializerManager.addItem('popup:addNew:addBlock', \`otherBlocks.\${imageInitializerItem.name}\`, imageInitializerItem)
+   this.app.schemaInitializerManager.addItem('mobilePage:addBlock', \`otherBlocks.\${imageInitializerItem.name}\`, imageInitializerItem)
  }
}
`,paraId:86,tocIndex:21},{value:"\u5982\u679C\u9700\u8981\u66F4\u591A\u7684 ",paraId:87,tocIndex:21},{value:"Add block",paraId:87,tocIndex:21},{value:"\uFF0C\u53EF\u4EE5\u7EE7\u7EED\u6DFB\u52A0\uFF0C\u53EA\u9700\u8981\u77E5\u9053\u5BF9\u5E94\u7684 ",paraId:87,tocIndex:21},{value:"name",paraId:87,tocIndex:21},{value:" \u5373\u53EF\u3002",paraId:87,tocIndex:21},{value:"\u6309\u7167 ",paraId:88,tocIndex:22},{value:"\u6784\u5EFA\u5E76\u6253\u5305\u63D2\u4EF6",paraId:89,tocIndex:22},{value:" \u6587\u6863\u8BF4\u660E\uFF0C\u6211\u4EEC\u53EF\u4EE5\u6253\u5305\u63D2\u4EF6\u5E76\u4E0A\u4F20\u5230\u751F\u4EA7\u73AF\u5883\u3002",paraId:88,tocIndex:22},{value:"\u5982\u679C\u662F clone \u7684\u6E90\u7801\uFF0C\u9700\u8981\u5148\u6267\u884C\u4E00\u6B21\u5168\u91CF build\uFF0C\u5C06\u63D2\u4EF6\u7684\u4F9D\u8D56\u4E5F\u6784\u5EFA\u597D\u3002",paraId:90,tocIndex:22},{value:`yarn build
`,paraId:91,tocIndex:22},{value:"\u5982\u679C\u662F\u4F7F\u7528\u7684 ",paraId:92,tocIndex:22},{value:"create-nocobase-app",paraId:92,tocIndex:22},{value:" \u521B\u5EFA\u7684\u9879\u76EE\uFF0C\u53EF\u4EE5\u76F4\u63A5\u6267\u884C\uFF1A",paraId:92,tocIndex:22},{value:`yarn build @nocobase-sample/plugin-initializer-block-simple --tar
`,paraId:93,tocIndex:22},{value:"\u8FD9\u6837\u5C31\u53EF\u4EE5\u770B\u5230 ",paraId:94,tocIndex:22},{value:"storage/tar/@nocobase-sample/plugin-initializer-block-simple.tar.gz",paraId:94,tocIndex:22},{value:" \u6587\u4EF6\u4E86\uFF0C\u7136\u540E\u901A\u8FC7",paraId:94,tocIndex:22},{value:"\u4E0A\u4F20\u7684\u65B9\u5F0F",paraId:95,tocIndex:22},{value:"\u8FDB\u884C\u5B89\u88C5\u3002",paraId:94,tocIndex:22}]}}]);
