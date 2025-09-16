"use strict";(self.webpackChunknocobase_docs=self.webpackChunknocobase_docs||[]).push([[39652],{939652:function(o,a,e){e.r(a),e.d(a,{texts:function(){return n}});const n=[{value:"NocoBase has many ",paraId:0,tocIndex:1},{value:"Add block",paraId:0,tocIndex:1},{value:" buttons used to add blocks to the interface. Some of these blocks are related to data tables and are referred to as Data Blocks, while others that are not related to data tables are called Simple Blocks.",paraId:0,tocIndex:1},{value:"However, the existing block types may not fully meet our needs, so we may need to custom-develop some blocks according to our requirements. This article specifically explains how to create Data Blocks.",paraId:1,tocIndex:1},{value:"In this example, we will create an ",paraId:2,tocIndex:2},{value:"Info",paraId:2,tocIndex:2},{value:" block and add it to the ",paraId:2,tocIndex:2},{value:"Page",paraId:2,tocIndex:2},{value:", ",paraId:2,tocIndex:2},{value:"Table",paraId:2,tocIndex:2},{value:", and the mobile ",paraId:2,tocIndex:2},{value:"Add block",paraId:2,tocIndex:2},{value:" sections.",paraId:2,tocIndex:2},{value:"This example mainly demonstrates the usage of the initializer. For more information on block extensions, refer to the ",paraId:3,tocIndex:2},{value:"Block Extension",paraId:4,tocIndex:2},{value:" documentation.",paraId:3,tocIndex:2},{value:"The complete sample code for this document can be found in the ",paraId:5,tocIndex:2},{value:"plugin-samples repository",paraId:5,tocIndex:2},{value:".",paraId:5,tocIndex:2},{value:`
  `,paraId:6},{value:"Following the instructions in the ",paraId:7,tocIndex:3},{value:"Creating Your First Plugin",paraId:8,tocIndex:3},{value:" document, if you don't have a project yet, you can create one first. If you already have a project or have cloned the source code, skip this step.",paraId:7,tocIndex:3},{value:`yarn create nocobase-app my-nocobase-app -d postgres
cd my-nocobase-app
yarn install
yarn nocobase install
`,paraId:9,tocIndex:3},{value:"Next, initialize a plugin and add it to the system:",paraId:10,tocIndex:3},{value:`yarn pm create @nocobase-sample/plugin-initializer-block-data
yarn pm enable @nocobase-sample/plugin-initializer-block-data
`,paraId:11,tocIndex:3},{value:"Then, start the project:",paraId:12,tocIndex:3},{value:`yarn dev
`,paraId:13,tocIndex:3},{value:"After logging in, visit ",paraId:14,tocIndex:3},{value:"http://localhost:13000/admin/pm/list/local/",paraId:14,tocIndex:3},{value:" to see that the plugin has been installed and enabled.",paraId:14,tocIndex:3},{value:"Before implementing this example, we need to understand some basic concepts:",paraId:15,tocIndex:4},{value:"SchemaInitializer Tutorial",paraId:16,tocIndex:4},{value:": Used to add various blocks, fields, operations, etc., to the interface.",paraId:17,tocIndex:4},{value:"SchemaInitializer API",paraId:17,tocIndex:4},{value:": Provides an API for adding various blocks, fields, operations, etc., to the interface.",paraId:17,tocIndex:4},{value:"UI Schema",paraId:18,tocIndex:4},{value:": Used for defining the structure and style of the interface.",paraId:17,tocIndex:4},{value:"Designable",paraId:19,tocIndex:4},{value:": A designer tool used for modifying schemas.",paraId:17,tocIndex:4},{value:`.
\u251C\u2500\u2500 client # Client-side plugin
\u2502   \u251C\u2500\u2500 initializer # Initializer
\u2502   \u251C\u2500\u2500 component # Block components
\u2502   \u251C\u2500\u2500 index.tsx # Entry point for the client-side plugin
\u2502   \u251C\u2500\u2500 locale.ts # Multi-language utility functions
\u2502   \u251C\u2500\u2500 constants.ts # Constants
\u2502   \u251C\u2500\u2500 schema # Schema
\u2502   \u2514\u2500\u2500 settings # Schema settings
\u251C\u2500\u2500 locale # Multi-language files
\u2502   \u251C\u2500\u2500 en-US.json # English
\u2502   \u2514\u2500\u2500 zh-CN.json # Chinese
\u251C\u2500\u2500 index.ts # Server-side plugin entry point
\u2514\u2500\u2500 server # Server-side plugin
`,paraId:20,tocIndex:4},{value:"First, we need to define the block's name, which will be used in various places.",paraId:21,tocIndex:5},{value:"Create ",paraId:22,tocIndex:5},{value:"packages/plugins/@nocobase-sample/plugin-initializer-block-data/src/client/constants.ts",paraId:22,tocIndex:5},{value:":",paraId:22,tocIndex:5},{value:`export const BlockName = 'Info';
export const BlockNameLowercase = BlockName.toLowerCase();
`,paraId:23,tocIndex:5},{value:"In this example, we need to create an ",paraId:24,tocIndex:7},{value:"Info",paraId:24,tocIndex:7},{value:" block component with the following requirements:",paraId:24,tocIndex:7},{value:"Display the name of the current block's data table.",paraId:25,tocIndex:7},{value:"Display the current block's data list.",paraId:25,tocIndex:7},{value:"First, create ",paraId:26,tocIndex:7},{value:"packages/plugins/@nocobase-sample/plugin-initializer-block-data/src/client/component/Info.tsx",paraId:26,tocIndex:7},{value:" with the following content:",paraId:26,tocIndex:7},{value:`import React, { FC } from 'react';
import { withDynamicSchemaProps } from '@nocobase/client'
import { BlockName } from '../constants';

export interface InfoProps {
  collectionName: string;
  data?: any[];
  loading?: boolean;
}

export const Info: FC<InfoProps> = withDynamicSchemaProps(({ collectionName, data }) => {
  return <div>
    <div>Collection: {collectionName}</div>
    <div>Data list: <pre>{JSON.stringify(data, null, 2)}</pre></div>
  </div>
}, { displayName: BlockName })
`,paraId:27,tocIndex:7},{value:"The ",paraId:28,tocIndex:7},{value:"Info",paraId:28,tocIndex:7},{value:" component is essentially a functional component wrapped by ",paraId:28,tocIndex:7},{value:"withDynamicSchemaProps",paraId:28,tocIndex:7},{value:". The ",paraId:28,tocIndex:7},{value:"withDynamicSchemaProps",paraId:29,tocIndex:7},{value:" is a higher-order component used to handle dynamic properties in schemas.",paraId:28,tocIndex:7},{value:"Without considering ",paraId:30,tocIndex:7},{value:"withDynamicSchemaProps",paraId:30,tocIndex:7},{value:", the ",paraId:30,tocIndex:7},{value:"Info",paraId:30,tocIndex:7},{value:" component is a simple functional component.",paraId:30,tocIndex:7},{value:"Next, export it in ",paraId:31,tocIndex:7},{value:"packages/plugins/@nocobase-sample/plugin-initializer-block-data/src/client/component/index.ts",paraId:31,tocIndex:7},{value:":",paraId:31,tocIndex:7},{value:`export * from './Info';
`,paraId:32,tocIndex:7},{value:"We need to register the ",paraId:33,tocIndex:8},{value:"Info",paraId:33,tocIndex:8},{value:" component in the system via the plugin.",paraId:33,tocIndex:8},{value:`import { Plugin } from '@nocobase/client';
import { Info } from './component';

export class PluginInitializerBlockDataClient extends Plugin {
  async load() {
    this.app.addComponents({ Info })
  }
}

export default PluginInitializerBlockDataClient;
`,paraId:34,tocIndex:8},{value:"There are two ways to verify the component:",paraId:35,tocIndex:9},{value:"Temporary page verification: You can create a temporary page, render the ",paraId:36,tocIndex:9},{value:"Info",paraId:36,tocIndex:9},{value:" component, and check if it meets the requirements.",paraId:36,tocIndex:9},{value:"Documentation example verification: You can start the documentation with ",paraId:36,tocIndex:9},{value:"yarn doc plugins/@nocobase-sample/plugin-initializer-block-data",paraId:36,tocIndex:9},{value:" and verify the component through a documentation example (TODO).",paraId:36,tocIndex:9},{value:"For this example, we'll use ",paraId:37,tocIndex:9},{value:"Temporary Page Verification",paraId:37,tocIndex:9},{value:". Create a page and add one or more ",paraId:37,tocIndex:9},{value:"Info",paraId:37,tocIndex:9},{value:" components based on the parameters, then check if it meets the requirements.",paraId:37,tocIndex:9},{value:`import React from 'react';
import { Plugin } from '@nocobase/client';
import { Info } from './component';

export class PluginInitializerBlockDataClient extends Plugin {
  async load() {
    this.app.addComponents({ Info })

    this.app.router.add('admin.info-component', {
      path: '/admin/info-component',
      Component: () => {
        return <>
          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <Info collectionName='test' data={[{ id: 1 }, { id: 2 }]} />
          </div>
        </>
      }
    })
  }
}

export default PluginInitializerBlockDataClient;
`,paraId:38,tocIndex:9},{value:"Then, visit ",paraId:39,tocIndex:9},{value:"http://localhost:13000/admin/info-component",paraId:39,tocIndex:9},{value:" to see the corresponding content on the test page.",paraId:39,tocIndex:9},{value:"After verification, delete the test page.",paraId:40,tocIndex:9},{value:"NocoBase \u7684\u52A8\u6001\u9875\u9762\u90FD\u662F\u901A\u8FC7 Schema \u6765\u6E32\u67D3\uFF0C\u6240\u4EE5\u6211\u4EEC\u9700\u8981\u5B9A\u4E49\u4E00\u4E2A Schema\uFF0C\u540E\u7EED\u7528\u4E8E\u5728\u754C\u9762\u4E2D\u6DFB\u52A0 ",paraId:41,tocIndex:11},{value:"Info",paraId:41,tocIndex:11},{value:" \u533A\u5757\u3002\u5728\u5B9E\u73B0\u672C\u5C0F\u8282\u4E4B\u524D\uFF0C\u6211\u4EEC\u9700\u8981\u5148\u4E86\u89E3\u4E00\u4E9B\u57FA\u7840\u77E5\u8BC6\uFF1A",paraId:41,tocIndex:11},{value:"UI Schema \u534F\u8BAE",paraId:42,tocIndex:11},{value:"\uFF1A\u8BE6\u7EC6\u4ECB\u7ECD Schema \u7684\u7ED3\u6784\u548C\u6BCF\u4E2A\u5C5E\u6027\u7684\u4F5C\u7528",paraId:43,tocIndex:11},{value:"DataBlockProvider",paraId:43,tocIndex:11},{value:"\uFF1A\u6570\u636E\u533A\u5757",paraId:43,tocIndex:11},{value:"\u6211\u4EEC\u65B0\u5EFA ",paraId:44,tocIndex:11},{value:"packages/plugins/@nocobase-sample/plugin-initializer-block-data/src/client/schema/index.ts",paraId:44,tocIndex:11},{value:" \u6587\u4EF6\uFF1A",paraId:44,tocIndex:11},{value:`import { useCollection, useDataBlockRequest } from "@nocobase/client";

import { InfoProps } from "../component";
import { BlockName, BlockNameLowercase } from "../constants";

export function useInfoProps(): InfoProps {
  const collection = useCollection();
  const { data, loading } = useDataBlockRequest<any[]>();

  return {
    collectionName: collection.name,
    data: data?.data,
    loading: loading
  }
}

export function getInfoSchema({ dataSource = 'main', collection }) {
  return {
    type: 'void',
    'x-decorator': 'DataBlockProvider',
    'x-decorator-props': {
      dataSource,
      collection,
      action: 'list',
    },
    'x-component': 'CardItem',
    "x-toolbar": "BlockSchemaToolbar",
    properties: {
      [BlockNameLowercase]: {
        type: 'void',
        'x-component': BlockName,
        'x-use-component-props': 'useInfoProps',
      }
    }
  }
}
`,paraId:45,tocIndex:11},{value:"\u8FD9\u91CC\u6709 2 \u4E2A\u70B9\u9700\u8981\u8BF4\u660E\uFF1A",paraId:46,tocIndex:11},{value:"getInfoSchema()",paraId:47,tocIndex:11},{value:"\uFF1A\u4E4B\u6240\u4EE5\u5B9A\u4E49\u4E3A\u51FD\u6570\uFF0C\u56E0\u4E3A ",paraId:47,tocIndex:11},{value:"dataSource",paraId:47,tocIndex:11},{value:" \u548C ",paraId:47,tocIndex:11},{value:"collection",paraId:47,tocIndex:11},{value:" \u662F\u52A8\u6001\u7684\uFF0C\u7531\u70B9\u51FB\u7684\u6570\u636E\u8868\u51B3\u5B9A",paraId:47,tocIndex:11},{value:"useInfoProps()",paraId:47,tocIndex:11},{value:"\uFF1A\u7528\u4E8E\u5904\u7406 ",paraId:47,tocIndex:11},{value:"Info",paraId:47,tocIndex:11},{value:" \u7EC4\u4EF6\u7684\u52A8\u6001\u5C5E\u6027\uFF0C\u5E76\u4E14\u56E0\u4E3A\u8981\u5B58\u5230\u6570\u636E\u5E93\uFF0C\u6240\u4EE5\u8FD9\u91CC\u7684\u503C\u7C7B\u578B\u4E3A string \u7C7B\u578B\u3002",paraId:47,tocIndex:11},{value:"getInfoSchema()",paraId:48,tocIndex:11},{value:"\uFF1A\u8FD4\u56DE Info \u7684 Schema",paraId:48,tocIndex:11},{value:"type: 'void'",paraId:49,tocIndex:11},{value:"\uFF1A\u8868\u793A\u6CA1\u6709\u4EFB\u4F55\u6570\u636E",paraId:49,tocIndex:11},{value:"x-decorator: 'DataBlockProvider'",paraId:49,tocIndex:11},{value:"\uFF1A\u6570\u636E\u533A\u5757\u63D0\u4F9B\u8005\uFF0C\u7528\u4E8E\u63D0\u4F9B\u6570\u636E\uFF0C\u66F4\u591A\u5173\u4E8E DataBlockProvider \u53EF\u4EE5\u67E5\u770B ",paraId:49,tocIndex:11},{value:"DataBlockProvider",paraId:49,tocIndex:11},{value:"x-decorator-props",paraId:49,tocIndex:11},{value:"\uFF1A",paraId:49,tocIndex:11},{value:"DataBlockProvider",paraId:49,tocIndex:11},{value:` \u7684\u5C5E\u6027
`,paraId:49,tocIndex:11},{value:"dataSource",paraId:50,tocIndex:11},{value:"\uFF1A\u6570\u636E\u6E90",paraId:50,tocIndex:11},{value:"collection",paraId:50,tocIndex:11},{value:"\uFF1A\u6570\u636E\u8868",paraId:50,tocIndex:11},{value:"action: 'list'",paraId:50,tocIndex:11},{value:"\uFF1A\u64CD\u4F5C\u7C7B\u578B\uFF0C\u8FD9\u91CC\u662F ",paraId:50,tocIndex:11},{value:"list",paraId:50,tocIndex:11},{value:"\uFF0C\u83B7\u53D6\u6570\u636E\u5217\u8868",paraId:50,tocIndex:11},{value:"x-component: 'CardItem'",paraId:49,tocIndex:11},{value:"\uFF1A",paraId:49,tocIndex:11},{value:"CardItem \u7EC4\u4EF6",paraId:49,tocIndex:11},{value:"\uFF0C\u76EE\u524D\u7684\u533A\u5757\u90FD\u662F\u88AB\u5305\u88F9\u5728\u5361\u7247\u4E2D\u7684\uFF0C\u7528\u4E8E\u63D0\u4F9B\u6837\u5F0F\u3001\u5E03\u5C40\u548C\u62D6\u62FD\u7B49\u529F\u80FD",paraId:49,tocIndex:11},{value:"properties",paraId:49,tocIndex:11},{value:`\uFF1A\u5B50\u8282\u70B9
`,paraId:49,tocIndex:11},{value:"info",paraId:51,tocIndex:11},{value:"\uFF1A\u4FE1\u606F\u533A\u5757",paraId:51,tocIndex:11},{value:"useInfoProps()",paraId:52,tocIndex:11},{value:"\uFF1AInfo \u7EC4\u4EF6\u7684\u52A8\u6001\u5C5E\u6027",paraId:52,tocIndex:11},{value:"useCollection",paraId:53,tocIndex:11},{value:"\uFF1A\u83B7\u53D6\u5F53\u524D\u6570\u636E\u8868\uFF0C\u7531 ",paraId:53,tocIndex:11},{value:"DataBlockProvider",paraId:53,tocIndex:11},{value:" \u63D0\u4F9B",paraId:53,tocIndex:11},{value:"useDataBlockRequest",paraId:53,tocIndex:11},{value:" \u83B7\u53D6\u6570\u636E\u533A\u5757\u8BF7\u6C42\uFF0C\u7531 ",paraId:53,tocIndex:11},{value:"DataBlockProvider",paraId:53,tocIndex:11},{value:" \u63D0\u4F9B",paraId:53,tocIndex:11},{value:"\u4E0A\u8FF0 Schema \u8F6C\u4E3A React \u7EC4\u4EF6\u540E\u76F8\u5F53\u4E8E\uFF1A",paraId:54,tocIndex:11},{value:`<DataBlockProvider collection={collection} dataSource={dataSource} action='list'>
  <CardItem>
    <Info {...useInfoProps()} />
  </CardItem>
</DataBlockProvider>
`,paraId:55,tocIndex:11},{value:"\u6211\u4EEC\u9700\u8981\u5C06 ",paraId:56,tocIndex:12},{value:"useInfoProps",paraId:56,tocIndex:12},{value:" \u6CE8\u518C\u5230\u7CFB\u7EDF\u4E2D\uFF0C\u8FD9\u6837 ",paraId:56,tocIndex:12},{value:"x-use-component-props",paraId:57,tocIndex:12},{value:" \u624D\u80FD\u627E\u5230\u5BF9\u5E94\u7684 scope\u3002",paraId:56,tocIndex:12},{value:`import { Plugin } from '@nocobase/client';
import { Info } from './component';
import { useInfoProps } from './schema';

export class PluginInitializerBlockDataClient extends Plugin {
  async load() {
    this.app.addComponents({ Info })
    this.app.addScopes({ useInfoProps });
  }
}

export default PluginInitializerBlockDataClient;
`,paraId:58,tocIndex:12},{value:"\u66F4\u591A\u5173\u4E8E Scope \u7684\u8BF4\u660E\u53EF\u4EE5\u67E5\u770B ",paraId:59,tocIndex:12},{value:"\u5168\u5C40\u6CE8\u518C Component \u548C Scope",paraId:60,tocIndex:12},{value:"\u540C\u9A8C\u8BC1\u7EC4\u4EF6\u4E00\u6837\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u4E34\u65F6\u9875\u9762\u9A8C\u8BC1\u6216\u8005\u6587\u6863\u793A\u4F8B\u9A8C\u8BC1\u7684\u65B9\u5F0F\u6765\u9A8C\u8BC1 Schema \u662F\u5426\u7B26\u5408\u9700\u6C42\u3002\u6211\u4EEC\u8FD9\u91CC\u4EE5\u4E34\u65F6\u9875\u9762\u9A8C\u8BC1\u4E3A\u4F8B\uFF1A",paraId:61,tocIndex:13},{value:`import React from 'react';
import { Plugin, SchemaComponent, SchemaComponentOptions } from '@nocobase/client';
import { Info } from './component';
import { getInfoSchema, useInfoProps } from './schema';

export class PluginInitializerBlockDataClient extends Plugin {
  async load() {
    // ...
    this.app.router.add('admin.info-schema', {
      path: '/admin/info-schema',
      Component: () => {
        return <>
          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <SchemaComponent schema={{ properties: { test1: getInfoSchema({ collection: 'users' }) } }} />
          </div>

          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <SchemaComponent schema={{ properties: { test2: getInfoSchema({ collection: 'roles' }) } }} />
          </div>
        </>
      }
    })
  }
}

export default PluginInitializerBlockDataClient;
`,paraId:62,tocIndex:13},{value:"SchemaComponentOptions",paraId:63,tocIndex:13},{value:"\uFF1A\u7528\u4E8E\u4F20\u9012 Schema \u4E2D\u6240\u9700\u7684 ",paraId:63,tocIndex:13},{value:"components",paraId:63,tocIndex:13},{value:" \u548C ",paraId:63,tocIndex:13},{value:"scope",paraId:63,tocIndex:13},{value:"\uFF0C\u5177\u4F53\u7684\u53EF\u67E5\u770B ",paraId:63,tocIndex:13},{value:"\u5C40\u90E8\u6CE8\u518C Component \u548C Scope",paraId:64,tocIndex:13},{value:"SchemaComponent",paraId:63,tocIndex:13},{value:"\uFF1A\u7528\u4E8E\u6E32\u67D3 Schema",paraId:63,tocIndex:13},{value:"\u6211\u4EEC\u8BBF\u95EE ",paraId:65,tocIndex:13},{value:"http://localhost:13000/admin/info-schema",paraId:65,tocIndex:13},{value:" \u5C31\u53EF\u4EE5\u770B\u5230\u5BF9\u5E94\u6D4B\u8BD5\u9875\u9762\u7684\u5185\u5BB9\u4E86\u3002",paraId:65,tocIndex:13},{value:"\u9A8C\u8BC1\u5B8C\u6BD5\u540E\u9700\u8981\u5220\u9664\u6D4B\u8BD5\u9875\u9762\u3002",paraId:66,tocIndex:13},{value:"\u6211\u4EEC\u65B0\u5EFA ",paraId:67,tocIndex:14},{value:"packages/plugins/@nocobase-sample/plugin-initializer-block-data/src/client/initializer/index.tsx",paraId:67,tocIndex:14},{value:" \u6587\u4EF6\uFF1A",paraId:67,tocIndex:14},{value:`import React from 'react';
import { SchemaInitializerItemType, useSchemaInitializer } from '@nocobase/client'
import { CodeOutlined } from '@ant-design/icons';

import { getInfoSchema } from '../schema'
import { useT } from '../locale';
import { BlockName, BlockNameLowercase } from '../constants';

export const infoInitializerItem: SchemaInitializerItemType = {
  name: BlockNameLowercase,
  Component: 'DataBlockInitializer',
  useComponentProps() {
    const { insert } = useSchemaInitializer();
    const t = useT();
    return {
      title: t(BlockName),
      icon: <CodeOutlined />,
      componentType: BlockName,
      useTranslationHooks: useT,
      onCreateBlockSchema({ item }) {
        insert(getInfoSchema({ dataSource: item.dataSource, collection: item.name }))
      },
    };
  },
}
`,paraId:68,tocIndex:14},{value:"\u5B9E\u73B0\u6570\u636E\u533A\u5757\u7684\u6548\u679C\u6838\u5FC3\u662F DataBlockInitializer\uFF08\u6587\u6863 TODO\uFF09\u3002",paraId:69,tocIndex:14},{value:"infoInitializerItem",paraId:70,tocIndex:14},{value:"\uFF1A",paraId:70,tocIndex:14},{value:"Component",paraId:71,tocIndex:14},{value:"\uFF1A\u4E0E ",paraId:71,tocIndex:14},{value:"\u6DFB\u52A0\u7B80\u5355\u533A\u5757 Simple Block",paraId:72,tocIndex:14},{value:" \u4E2D\u4F7F\u7528\u7684\u662F ",paraId:71,tocIndex:14},{value:"type",paraId:71,tocIndex:14},{value:"\uFF0C\u8FD9\u91CC\u4F7F\u7528\u7684\u662F ",paraId:71,tocIndex:14},{value:"Component",paraId:71,tocIndex:14},{value:"\uFF0C",paraId:71,tocIndex:14},{value:"2 \u79CD\u5B9A\u4E49\u65B9\u5F0F",paraId:71,tocIndex:14},{value:" \u90FD\u662F\u53EF\u4EE5\u7684",paraId:71,tocIndex:14},{value:"useComponentProps",paraId:71,tocIndex:14},{value:"\uFF1A",paraId:71,tocIndex:14},{value:"DataBlockInitializer",paraId:71,tocIndex:14},{value:` \u7EC4\u4EF6\u7684\u5C5E\u6027
`,paraId:71,tocIndex:14},{value:"title",paraId:73,tocIndex:14},{value:"\uFF1A\u6807\u9898",paraId:73,tocIndex:14},{value:"icon",paraId:73,tocIndex:14},{value:"\uFF1A\u56FE\u6807\uFF0C\u66F4\u591A\u56FE\u6807\u53EF\u4EE5\u67E5\u770B ",paraId:73,tocIndex:14},{value:"Ant Design Icons",paraId:73,tocIndex:14},{value:"componentType",paraId:73,tocIndex:14},{value:"\uFF1A\u7EC4\u4EF6\u7C7B\u578B\uFF0C\u8FD9\u91CC\u662F ",paraId:73,tocIndex:14},{value:"Info",paraId:73,tocIndex:14},{value:"onCreateBlockSchema",paraId:73,tocIndex:14},{value:`\uFF1A\u5F53\u70B9\u51FB\u6570\u636E\u8868\u540E\u7684\u56DE\u8C03
`,paraId:73,tocIndex:14},{value:"item",paraId:74,tocIndex:14},{value:`\uFF1A\u70B9\u51FB\u7684\u6570\u636E\u8868\u4FE1\u606F
`,paraId:74,tocIndex:14},{value:"item.name",paraId:75,tocIndex:14},{value:"\uFF1A\u6570\u636E\u8868\u540D\u79F0",paraId:75,tocIndex:14},{value:"item.dataSource",paraId:75,tocIndex:14},{value:"\uFF1A\u6570\u636E\u8868\u6240\u5C5E\u7684\u6570\u636E\u6E90",paraId:75,tocIndex:14},{value:"useSchemaInitializer",paraId:73,tocIndex:14},{value:"\uFF1A\u63D0\u4F9B\u4E86\u63D2\u5165 Schema \u7684\u65B9\u6CD5",paraId:73,tocIndex:14},{value:'"x-toolbar": "BlockSchemaToolbar"',paraId:71,tocIndex:14},{value:"\uFF1A",paraId:71,tocIndex:14},{value:"BlockSchemaToolbar",paraId:71,tocIndex:14},{value:" \u7528\u4E8E\u5DE6\u4E0A\u89D2\u663E\u793A\u5F53\u524D\u6570\u636E\u8868\uFF0C\u4E00\u822C\u548C ",paraId:71,tocIndex:14},{value:"DataBlockProvider",paraId:71,tocIndex:14},{value:" \u642D\u914D\u4F7F\u7528",paraId:71,tocIndex:14},{value:"\u66F4\u591A\u5173\u4E8E Schema Initializer \u7684\u5B9A\u4E49\u53EF\u4EE5\u53C2\u8003 ",paraId:76,tocIndex:14},{value:"Schema Initializer",paraId:76,tocIndex:14},{value:" \u6587\u6863\u3002",paraId:76,tocIndex:14},{value:"\u4E00\u4E2A\u5B8C\u6574\u7684 Block \u8FD8\u9700\u8981\u6709 Schema Settings\uFF0C\u7528\u4E8E\u914D\u7F6E\u4E00\u4E9B\u5C5E\u6027\u548C\u64CD\u4F5C\uFF0C\u4F46 Schema Settings \u4E0D\u662F\u672C\u793A\u4F8B\u7684\u91CD\u70B9\uFF0C\u6240\u4EE5\u6211\u4EEC\u8FD9\u91CC\u4EC5\u6709\u4E00\u4E2A ",paraId:77,tocIndex:16},{value:"remove",paraId:77,tocIndex:16},{value:" \u64CD\u4F5C\u3002",paraId:77,tocIndex:16},{value:"\u6211\u4EEC\u65B0\u5EFA ",paraId:78,tocIndex:16},{value:"packages/plugins/@nocobase-sample/plugin-initializer-block-data/src/client/settings/index.ts",paraId:78,tocIndex:16},{value:" \u6587\u4EF6\uFF1A",paraId:78,tocIndex:16},{value:`import { SchemaSettings } from "@nocobase/client";
import { BlockNameLowercase } from "../constants";

export const infoSettings = new SchemaSettings({
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
})
`,paraId:79,tocIndex:16},{value:`import { Plugin } from '@nocobase/client';
import { infoSettings } from './settings';

export class PluginInitializerBlockDataClient extends Plugin {
  async load() {
    // ...
    this.app.schemaSettingsManager.add(infoSettings)
  }
}

export default PluginInitializerBlockDataClient;
`,paraId:80,tocIndex:17},{value:"\u6211\u4EEC\u4FEE\u6539 ",paraId:81,tocIndex:18},{value:"packages/plugins/@nocobase-sample/plugin-initializer-block-data/src/client/schema/index.ts",paraId:81,tocIndex:18},{value:" \u6587\u4EF6\u7684 ",paraId:81,tocIndex:18},{value:"getInfoSchema",paraId:81,tocIndex:18},{value:" \u65B9\u6CD5\uFF0C\u5C06 ",paraId:81,tocIndex:18},{value:"x-settings",paraId:81,tocIndex:18},{value:" \u8BBE\u7F6E\u4E3A ",paraId:81,tocIndex:18},{value:"infoSettings.name",paraId:81,tocIndex:18},{value:"\u3002",paraId:81,tocIndex:18},{value:`+ import { infoSettings } from "../settings";

export function getInfoSchema({ dataSource = 'main', collection }) {
  return {
    type: 'void',
    'x-decorator': 'DataBlockProvider',
+   'x-settings': infoSettings.name,
    // ...
  }
}
`,paraId:82,tocIndex:18},{value:"\u7CFB\u7EDF\u4E2D\u6709\u5F88\u591A\u4E2A ",paraId:83,tocIndex:19},{value:"Add block",paraId:83,tocIndex:19},{value:" \u6309\u94AE\uFF0C\u4F46\u4ED6\u4EEC\u7684 ",paraId:83,tocIndex:19},{value:"name \u662F\u4E0D\u540C\u7684",paraId:83,tocIndex:19},{value:"\u3002",paraId:83,tocIndex:19},{value:"\u5982\u679C\u6211\u4EEC\u9700\u8981\u6DFB\u52A0\u5230\u9875\u9762\u7EA7\u522B\u7684 ",paraId:84,tocIndex:20},{value:"Add block",paraId:84,tocIndex:20},{value:" \u4E2D\uFF0C\u6211\u4EEC\u9700\u8981\u77E5\u9053\u5BF9\u5E94\u7684 ",paraId:84,tocIndex:20},{value:"name",paraId:84,tocIndex:20},{value:"\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7 TODO \u65B9\u5F0F\u67E5\u770B\u5BF9\u5E94\u7684 ",paraId:84,tocIndex:20},{value:"name",paraId:84,tocIndex:20},{value:"\u3002",paraId:84,tocIndex:20},{value:"TODO",paraId:85,tocIndex:20},{value:"\u901A\u8FC7\u4E0A\u56FE\u53EF\u4EE5\u770B\u5230\u9875\u9762\u7EA7\u522B\u7684 ",paraId:86,tocIndex:20},{value:"Add block",paraId:86,tocIndex:20},{value:" \u5BF9\u5E94\u7684 name \u4E3A ",paraId:86,tocIndex:20},{value:"page:addBlock",paraId:86,tocIndex:20},{value:"\uFF0C",paraId:86,tocIndex:20},{value:"Data Blocks",paraId:86,tocIndex:20},{value:" \u5BF9\u5E94\u7684 name \u4E3A ",paraId:86,tocIndex:20},{value:"dataBlocks",paraId:86,tocIndex:20},{value:"\u3002",paraId:86,tocIndex:20},{value:"\u7136\u540E\u6211\u4EEC\u4FEE\u6539 ",paraId:87,tocIndex:20},{value:"packages/plugins/@nocobase-sample/plugin-initializer-block-data/src/client/index.tsx",paraId:87,tocIndex:20},{value:" \u6587\u4EF6\uFF1A",paraId:87,tocIndex:20},{value:`import { Plugin } from '@nocobase/client';
import { Info } from './component';
import { useInfoProps } from './schema';
import { infoSettings } from './settings';
import { infoInitializerItem } from './initializer';

export class PluginDataBlockInitializerClient extends Plugin {
  async load() {
    this.app.addComponents({ Info });
    this.app.addScopes({ useInfoProps });

    this.app.schemaSettingsManager.add(infoSettings);

    this.app.schemaInitializerManager.addItem('page:addBlock', \`dataBlocks.\${infoInitializerItem.name}\`, infoInitializerItem)
  }
}

export default PluginDataBlockInitializerClient;
`,paraId:88,tocIndex:20},{value:"\u6211\u4EEC\u4E0D\u4EC5\u9700\u8981\u5C06\u5176\u6DFB\u52A0\u5230\u9875\u9762\u7EA7\u522B\u7684 ",paraId:89,tocIndex:21},{value:"Add block",paraId:89,tocIndex:21},{value:" \u4E2D\uFF0C\u8FD8\u9700\u8981\u5C06\u5176\u6DFB\u52A0\u5230 ",paraId:89,tocIndex:21},{value:"Table",paraId:89,tocIndex:21},{value:" \u533A\u5757 ",paraId:89,tocIndex:21},{value:"Add new",paraId:89,tocIndex:21},{value:" \u5F39\u7A97\u7684 ",paraId:89,tocIndex:21},{value:"Add block",paraId:89,tocIndex:21},{value:" \u4E2D\u3002",paraId:89,tocIndex:21},{value:"\u6211\u4EEC\u6309\u7167\u9875\u9762\u7EA7\u522B\u83B7\u53D6 ",paraId:90,tocIndex:21},{value:"name",paraId:90,tocIndex:21},{value:" \u7684\u65B9\u5F0F\u83B7\u53D6\u5230 ",paraId:90,tocIndex:21},{value:"Table",paraId:90,tocIndex:21},{value:" \u533A\u5757\u7684 ",paraId:90,tocIndex:21},{value:"Add block",paraId:90,tocIndex:21},{value:" \u7684 ",paraId:90,tocIndex:21},{value:"name",paraId:90,tocIndex:21},{value:" \u4E3A ",paraId:90,tocIndex:21},{value:"popup:addNew:addBlock",paraId:90,tocIndex:21},{value:"\uFF0C",paraId:90,tocIndex:21},{value:"Data Blocks",paraId:90,tocIndex:21},{value:" \u5BF9\u5E94\u7684 name \u4E3A ",paraId:90,tocIndex:21},{value:"dataBlocks",paraId:90,tocIndex:21},{value:"\u3002",paraId:90,tocIndex:21},{value:"\u7136\u540E\u4FEE\u6539 ",paraId:91,tocIndex:21},{value:"packages/plugins/@nocobase-sample/plugin-initializer-block-data/src/client/index.tsx",paraId:91,tocIndex:21},{value:" \u6587\u4EF6\uFF1A",paraId:91,tocIndex:21},{value:`import { Plugin } from '@nocobase/client';
import { Plugin } from '@nocobase/client';
import { Info } from './component';
import { useInfoProps } from './schema';
import { infoSettings } from './settings';
import { infoInitializerItem } from './initializer';

export class PluginDataBlockInitializerClient extends Plugin {
  async load() {
    this.app.addComponents({ Info });
    this.app.addScopes({ useInfoProps });

    this.app.schemaSettingsManager.add(infoSettings);

    this.app.schemaInitializerManager.addItem('page:addBlock', \`dataBlocks.\${infoInitializerItem.name}\`, infoInitializerItem)
+   this.app.schemaInitializerManager.addItem('popup:addNew:addBlock', \`dataBlocks.\${infoInitializerItem.name}\`, infoInitializerItem)
  }
}

export default PluginDataBlockInitializerClient;

`,paraId:92,tocIndex:21},{value:"\u9996\u5148\u8981\u6FC0\u6D3B\u79FB\u52A8\u7AEF\u63D2\u4EF6\uFF0C\u53C2\u8003 ",paraId:93,tocIndex:22},{value:"\u6FC0\u6D3B\u63D2\u4EF6",paraId:94,tocIndex:22},{value:" \u6587\u6863\u3002",paraId:93,tocIndex:22},{value:"\u6211\u4EEC\u53EF\u4EE5\u5C06\u5176\u6DFB\u52A0\u5230\u79FB\u52A8\u7AEF\u7684 ",paraId:95,tocIndex:22},{value:"Add block",paraId:95,tocIndex:22},{value:" \u4E2D\uFF0C\u83B7\u53D6 ",paraId:95,tocIndex:22},{value:"name",paraId:95,tocIndex:22},{value:" \u7684\u65B9\u6CD5\u8FD9\u91CC\u5C31\u4E0D\u518D\u8D58\u8FF0\u4E86\u3002",paraId:95,tocIndex:22},{value:"\u7136\u540E\u4FEE\u6539 ",paraId:96,tocIndex:22},{value:"packages/plugins/@nocobase-sample/plugin-initializer-block-data/src/client/index.tsx",paraId:96,tocIndex:22},{value:" \u6587\u4EF6\uFF1A",paraId:96,tocIndex:22},{value:`import { Plugin } from '@nocobase/client';
import { Info } from './component';
import { useInfoProps } from './schema';
import { infoSettings } from './settings';
import { infoInitializerItem } from './initializer';

export class PluginDataBlockInitializerClient extends Plugin {
  async load() {
    this.app.addComponents({ Info });
    this.app.addScopes({ useInfoProps });

    this.app.schemaSettingsManager.add(infoSettings);

    this.app.schemaInitializerManager.addItem('page:addBlock', \`dataBlocks.\${infoInitializerItem.name}\`, infoInitializerItem)
    this.app.schemaInitializerManager.addItem('popup:addNew:addBlock', \`dataBlocks.\${infoInitializerItem.name}\`, infoInitializerItem)
+   this.app.schemaInitializerManager.addItem('mobilePage:addBlock', \`dataBlocks.\${infoInitializerItem.name}\`, infoInitializerItem)
  }
}

export default PluginDataBlockInitializerClient;
`,paraId:97,tocIndex:22},{value:"\u5982\u679C\u9700\u8981\u66F4\u591A\u7684 ",paraId:98,tocIndex:22},{value:"Add block",paraId:98,tocIndex:22},{value:"\uFF0C\u53EF\u4EE5\u7EE7\u7EED\u6DFB\u52A0\uFF0C\u53EA\u9700\u8981\u77E5\u9053\u5BF9\u5E94\u7684 ",paraId:98,tocIndex:22},{value:"name",paraId:98,tocIndex:22},{value:" \u5373\u53EF\u3002",paraId:98,tocIndex:22},{value:"\u6309\u7167 ",paraId:99,tocIndex:23},{value:"\u6784\u5EFA\u5E76\u6253\u5305\u63D2\u4EF6",paraId:100,tocIndex:23},{value:" \u6587\u6863\u8BF4\u660E\uFF0C\u6211\u4EEC\u53EF\u4EE5\u6253\u5305\u63D2\u4EF6\u5E76\u4E0A\u4F20\u5230\u751F\u4EA7\u73AF\u5883\u3002",paraId:99,tocIndex:23},{value:"\u5982\u679C\u662F clone \u7684\u6E90\u7801\uFF0C\u9700\u8981\u5148\u6267\u884C\u4E00\u6B21\u5168\u91CF build\uFF0C\u5C06\u63D2\u4EF6\u7684\u4F9D\u8D56\u4E5F\u6784\u5EFA\u597D\u3002",paraId:101,tocIndex:23},{value:`yarn build
`,paraId:102,tocIndex:23},{value:"\u5982\u679C\u662F\u4F7F\u7528\u7684 ",paraId:103,tocIndex:23},{value:"create-nocobase-app",paraId:103,tocIndex:23},{value:" \u521B\u5EFA\u7684\u9879\u76EE\uFF0C\u53EF\u4EE5\u76F4\u63A5\u6267\u884C\uFF1A",paraId:103,tocIndex:23},{value:`yarn build @nocobase-sample/plugin-initializer-block-data --tar
`,paraId:104,tocIndex:23},{value:"\u8FD9\u6837\u5C31\u53EF\u4EE5\u770B\u5230 ",paraId:105,tocIndex:23},{value:"storage/tar/@nocobase-sample/plugin-initializer-block-data.tar.gz",paraId:105,tocIndex:23},{value:" \u6587\u4EF6\u4E86\uFF0C\u7136\u540E\u901A\u8FC7",paraId:105,tocIndex:23},{value:"\u4E0A\u4F20\u7684\u65B9\u5F0F",paraId:106,tocIndex:23},{value:"\u8FDB\u884C\u5B89\u88C5\u3002",paraId:105,tocIndex:23}]}}]);
