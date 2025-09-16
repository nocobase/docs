"use strict";(self.webpackChunknocobase_docs=self.webpackChunknocobase_docs||[]).push([[36417],{36417:function(o,a,e){e.r(a),e.d(a,{texts:function(){return n}});const n=[{value:"Form",paraId:0},{value:"Form",paraId:1,tocIndex:1},{value:" \u533A\u5757\u662F NocoBase \u4E2D\u6700\u91CD\u8981\u7684\u533A\u5757\u4E4B\u4E00\uFF0C\u5B83\u7528\u4E8E\u5C55\u793A\u548C\u7F16\u8F91\u6570\u636E\u8868\u7684\u6570\u636E\u3002\u6587\u672C\u4F1A\u8BE6\u7EC6\u4ECB\u7ECD ",paraId:1,tocIndex:1},{value:"Form",paraId:1,tocIndex:1},{value:" \u533A\u5757\u5B9E\u73B0\u3002",paraId:1,tocIndex:1},{value:`
  `,paraId:0},{value:"\u6211\u4EEC\u6309\u7167 ",paraId:2,tocIndex:2},{value:"\u7F16\u5199\u7B2C\u4E00\u4E2A\u63D2\u4EF6",paraId:3,tocIndex:2},{value:" \u6587\u6863\u8BF4\u660E\uFF0C\u5982\u679C\u6CA1\u6709\u4E00\u4E2A\u9879\u76EE\uFF0C\u53EF\u4EE5\u5148\u521B\u5EFA\u4E00\u4E2A\u9879\u76EE\uFF0C\u5982\u679C\u5DF2\u7ECF\u6709\u4E86\u6216\u8005\u662F clone \u7684\u6E90\u7801\uFF0C\u5219\u8DF3\u8FC7\u8FD9\u4E00\u6B65\u3002",paraId:2,tocIndex:2},{value:`yarn create nocobase-app my-nocobase-app -d postgres
cd my-nocobase-app
yarn install
yarn nocobase install
`,paraId:4,tocIndex:2},{value:"\u7136\u540E\u521D\u59CB\u5316\u4E00\u4E2A\u63D2\u4EF6\uFF0C\u5E76\u6DFB\u52A0\u5230\u7CFB\u7EDF\u4E2D\uFF1A",paraId:5,tocIndex:2},{value:`yarn pm create @nocobase-sample/plugin-block-form
yarn pm enable @nocobase-sample/plugin-block-form
`,paraId:6,tocIndex:2},{value:"\u7136\u540E\u542F\u52A8\u9879\u76EE\u5373\u53EF\uFF1A",paraId:7,tocIndex:2},{value:`yarn dev
`,paraId:8,tocIndex:2},{value:"\u7136\u540E\u767B\u5F55\u540E\u8BBF\u95EE ",paraId:9,tocIndex:2},{value:"http://localhost:13000/admin/pm/list/locale/",paraId:9,tocIndex:2},{value:" \u5C31\u53EF\u4EE5\u770B\u5230\u63D2\u4EF6\u5DF2\u7ECF\u5B89\u88C5\u5E76\u542F\u7528\u4E86\u3002",paraId:9,tocIndex:2},{value:"\u5728\u5B9E\u73B0\u672C\u793A\u4F8B\u4E4B\u524D\uFF0C\u6211\u4EEC\u9700\u8981\u5148\u4E86\u89E3\u4E00\u4E9B\u57FA\u7840\u77E5\u8BC6\uFF1A",paraId:10,tocIndex:3},{value:"ant-design Form",paraId:11,tocIndex:3},{value:"@formily/antd-v5 Form",paraId:11,tocIndex:3},{value:"SchemaInitializer \u6559\u7A0B",paraId:12,tocIndex:3},{value:"\uFF1A\u7528\u4E8E\u5411\u754C\u9762\u5185\u6DFB\u52A0\u5404\u79CD\u533A\u5757\u3001\u5B57\u6BB5\u3001\u64CD\u4F5C\u7B49",paraId:11,tocIndex:3},{value:"SchemaInitializer API",paraId:11,tocIndex:3},{value:"\uFF1A\u7528\u4E8E\u5411\u754C\u9762\u5185\u6DFB\u52A0\u5404\u79CD\u533A\u5757\u3001\u5B57\u6BB5\u3001\u64CD\u4F5C\u7B49",paraId:11,tocIndex:3},{value:"UI Schema \u534F\u8BAE",paraId:13,tocIndex:3},{value:"\uFF1A\u8BE6\u7EC6\u4ECB\u7ECD Schema \u7684\u7ED3\u6784\u548C\u6BCF\u4E2A\u5C5E\u6027\u7684\u4F5C\u7528",paraId:11,tocIndex:3},{value:"Designable \u8BBE\u8BA1\u5668",paraId:14,tocIndex:3},{value:"\uFF1A\u7528\u4E8E\u4FEE\u6539 Schema",paraId:11,tocIndex:3},{value:`.
\u251C\u2500\u2500 client # \u5BA2\u6237\u7AEF\u63D2\u4EF6
\u2502   \u251C\u2500\u2500 FormV3.configActions # \u914D\u7F6E\u521D\u59CB\u5316\u5668
\u2502   \u251C\u2500\u2500 index.ts
\u2502   \u2514\u2500\u2500 items
\u2502       \u2514\u2500\u2500 submit # \u63D0\u4EA4\u64CD\u4F5C
\u2502           \u251C\u2500\u2500 index.ts
\u2502           \u251C\u2500\u2500 initializer.tsx
\u2502           \u251C\u2500\u2500 schema.ts
\u2502           \u2514\u2500\u2500 settings.ts
\u2502   \u251C\u2500\u2500 FormV3.configFields # \u5B57\u6BB5\u521D\u59CB\u5316\u5668
\u2502   \u251C\u2500\u2500 FormV3.settings # \u8BBE\u7F6E
\u2502   \u251C\u2500\u2500 FormV3.initializer.ts # \u521D\u59CB\u5316\u5668
\u2502   \u251C\u2500\u2500 FormV3.schema.ts # Schema
\u2502   \u251C\u2500\u2500 FormV3.tsx # Component
\u2502   \u251C\u2500\u2500 index.tsx # \u5BA2\u6237\u7AEF\u63D2\u4EF6\u5165\u53E3
\u2502   \u2514\u2500\u2500 locale.ts # \u591A\u8BED\u8A00\u5DE5\u5177\u51FD\u6570
\u251C\u2500\u2500 locale # \u591A\u8BED\u8A00\u6587\u4EF6
\u2502   \u251C\u2500\u2500 en-US.json # \u82F1\u8BED
\u2502   \u2514\u2500\u2500 zh-CN.json # \u4E2D\u6587
\u251C\u2500\u2500 index.ts # \u670D\u52A1\u7AEF\u63D2\u4EF6\u5165\u53E3
\u2514\u2500\u2500 server # \u670D\u52A1\u7AEF\u63D2\u4EF6
`,paraId:15,tocIndex:3},{value:"\u6211\u4EEC\u9996\u5148\u9700\u8981\u5B9A\u4E49\u533A\u5757\u540D\u79F0\uFF0C\u5B83\u5C06\u4F1A\u4F7F\u7528\u5728\u5404\u4E2A\u5730\u65B9\u3002",paraId:16,tocIndex:4},{value:"\u6211\u4EEC\u65B0\u5EFA ",paraId:17,tocIndex:4},{value:"packages/plugins/@nocobase-sample/plugin-block-form/src/client/constants.ts",paraId:17,tocIndex:4},{value:"\uFF1A",paraId:17,tocIndex:4},{value:`export const FormV3BlockName = 'FormV3';
export const FormV3BlockNameLowercase = 'form-v3';
`,paraId:18,tocIndex:4},{value:"\u4E3A\u4E86\u4E0D\u4E0E\u5DF2\u6709\u7684 ",paraId:19,tocIndex:4},{value:"Form",paraId:19,tocIndex:4},{value:" \u7EC4\u4EF6\u51B2\u7A81\uFF0C\u6211\u4EEC\u8FD9\u91CC\u5C06\u5176\u547D\u540D\u4E3A ",paraId:19,tocIndex:4},{value:"FormV3",paraId:19,tocIndex:4},{value:"\u6211\u4EEC\u65B0\u5EFA ",paraId:20,tocIndex:6},{value:"packages/plugins/@nocobase-sample/plugin-block-form/src/client/FormV3.tsx",paraId:20,tocIndex:6},{value:" \u6587\u4EF6\uFF0C\u5176\u5185\u5BB9\u5982\u4E0B\uFF1A",paraId:20,tocIndex:6},{value:`import React, { FC } from 'react';
import { Form, FormProps } from '@formily/antd-v5';
import { withDynamicSchemaProps } from '@nocobase/client';
import { FormV3BlockName } from './constants'

export interface FormV3Props extends FormProps {
  children?: React.ReactNode;
}

export const FormV3: FC<FormV3Props> = withDynamicSchemaProps((props) => {
  return <Form {...props} layout={props.layout || 'vertical'} />
}, { displayName: FormV3BlockName });
`,paraId:21,tocIndex:6},{value:"Form",paraId:22,tocIndex:6},{value:" \u7EC4\u4EF6\u6574\u4F53\u6765\u8BF4\u662F\u4E00\u4E2A\u88AB ",paraId:22,tocIndex:6},{value:"withDynamicSchemaProps",paraId:22,tocIndex:6},{value:" \u5305\u88F9\u7684\u51FD\u6570\u7EC4\u4EF6\uFF0C",paraId:22,tocIndex:6},{value:"withDynamicSchemaProps",paraId:23,tocIndex:6},{value:" \u662F\u4E00\u4E2A\u9AD8\u9636\u7EC4\u4EF6\uFF0C\u7528\u4E8E\u5904\u7406 Schema \u4E2D\u7684\u7684\u52A8\u6001\u5C5E\u6027\u3002",paraId:22,tocIndex:6},{value:"\u5982\u679C\u4E0D\u770B ",paraId:24,tocIndex:6},{value:"withDynamicSchemaProps",paraId:24,tocIndex:6},{value:" \u7684\u8BDD\uFF0C",paraId:24,tocIndex:6},{value:"Form",paraId:24,tocIndex:6},{value:" \u7EC4\u4EF6\u5C31\u662F\u4E00\u4E2A\u7B80\u5355\u7684\u51FD\u6570\u7EC4\u4EF6\u3002",paraId:24,tocIndex:6},{value:"\u6211\u4EEC\u9700\u8981\u5C06 ",paraId:25,tocIndex:7},{value:"FormV3",paraId:25,tocIndex:7},{value:" \u901A\u8FC7\u63D2\u4EF6\u6CE8\u518C\u5230\u7CFB\u7EDF\u4E2D\u3002",paraId:25,tocIndex:7},{value:`import { Plugin } from '@nocobase/client';
import { FormV3 } from './FormV3';

export class PluginBlockFormClient extends Plugin {
  async load() {
    this.app.addComponents({ FormV3 })
  }
}

export default PluginBlockFormClient;
`,paraId:26,tocIndex:7},{value:"\u7EC4\u4EF6\u9A8C\u8BC1\u65B9\u5F0F\u6709 2 \u79CD\uFF1A",paraId:27,tocIndex:8},{value:"\u4E34\u65F6\u9875\u9762\u9A8C\u8BC1\uFF1A\u6211\u4EEC\u53EF\u4EE5\u4E34\u65F6\u5EFA\u4E00\u4E2A\u9875\u9762\uFF0C\u7136\u540E\u6E32\u67D3 ",paraId:28,tocIndex:8},{value:"Form",paraId:28,tocIndex:8},{value:" \u7EC4\u4EF6\uFF0C\u67E5\u770B\u662F\u5426\u7B26\u5408\u9700\u6C42",paraId:28,tocIndex:8},{value:"\u6587\u6863\u793A\u4F8B\u9A8C\u8BC1\uFF1A\u53EF\u4EE5\u542F\u52A8\u6587\u6863 ",paraId:28,tocIndex:8},{value:"yarn doc plugins/@nocobase-sample/plugin-block-form",paraId:28,tocIndex:8},{value:"\uFF0C\u901A\u8FC7\u5199\u6587\u6863\u793A\u4F8B\u7684\u65B9\u5F0F\u9A8C\u8BC1\u662F\u5426\u7B26\u5408\u9700\u6C42\uFF08TODO\uFF09",paraId:28,tocIndex:8},{value:"\u6211\u4EEC\u4EE5 ",paraId:29,tocIndex:8},{value:"\u4E34\u65F6\u9875\u9762\u9A8C\u8BC1",paraId:29,tocIndex:8},{value:" \u4E3A\u4F8B\uFF0C\u6211\u4EEC\u65B0\u5EFA\u4E00\u4E2A\u9875\u9762\uFF0C\u6839\u636E\u5C5E\u6027\u53C2\u6570\u6DFB\u52A0\u4E00\u4E2A\u6216\u8005\u591A\u4E2A ",paraId:29,tocIndex:8},{value:"Form",paraId:29,tocIndex:8},{value:" \u7EC4\u4EF6\uFF0C\u67E5\u770B\u662F\u5426\u7B26\u5408\u9700\u6C42\u3002",paraId:29,tocIndex:8},{value:`import React from 'react';
import { Plugin, SchemaComponent } from '@nocobase/client';
import { FormV3 } from './FormV3';

export class PluginBlockFormClient extends Plugin {
  async load() {
    this.app.addComponents({ FormV3 })

    this.app.router.add('admin.block-form-component', {
      path: '/admin/block-form-component',
      Component: () => {
        return <FormV3>
          <SchemaComponent schema={{
            type: 'void',
            properties: {
              username: {
                type: 'string',
                'x-decorator': 'FormItem',
                'x-component': 'Input',
                title: 'Username',
                required: true,
              },
              nickname: {
                type: 'string',
                'x-decorator': 'FormItem',
                'x-component': 'Input',
                title: 'Nickname',
              },
              password: {
                type: 'string',
                'x-decorator': 'FormItem',
                'x-component': 'Input',
                title: 'Password',
              },
              button: {
                type: 'void',
                'x-component': 'Action',
                title: 'Submit',
                'x-use-component-props': useSubmitActionProps,
              },
            }
          }} />
        </FormV3>
      }
    });
  }
}

export default PluginBlockFormClient;
`,paraId:30,tocIndex:8},{value:"\u7136\u540E\u8BBF\u95EE ",paraId:31,tocIndex:8},{value:"http://localhost:13000/admin/form-component",paraId:31,tocIndex:8},{value:" \u5C31\u53EF\u4EE5\u770B\u5230\u5BF9\u5E94\u6D4B\u8BD5\u9875\u9762\u7684\u5185\u5BB9\u4E86\u3002",paraId:31,tocIndex:8},{value:"\u9A8C\u8BC1\u5B8C\u6BD5\u540E\u9700\u8981\u5220\u9664\u6D4B\u8BD5\u9875\u9762\u3002",paraId:32,tocIndex:8},{value:"NocoBase \u7684\u52A8\u6001\u9875\u9762\u90FD\u662F\u901A\u8FC7 Schema \u6765\u6E32\u67D3\uFF0C\u6240\u4EE5\u6211\u4EEC\u9700\u8981\u5B9A\u4E49\u4E00\u4E2A Schema\uFF0C\u540E\u7EED\u7528\u4E8E\u5728\u754C\u9762\u4E2D\u6DFB\u52A0 ",paraId:33,tocIndex:10},{value:"Form",paraId:33,tocIndex:10},{value:" \u533A\u5757\u3002\u5728\u5B9E\u73B0\u672C\u5C0F\u8282\u4E4B\u524D\uFF0C\u6211\u4EEC\u9700\u8981\u5148\u4E86\u89E3\u4E00\u4E9B\u57FA\u7840\u77E5\u8BC6\uFF1A",paraId:33,tocIndex:10},{value:"UI Schema \u534F\u8BAE",paraId:34,tocIndex:10},{value:"\uFF1A\u8BE6\u7EC6\u4ECB\u7ECD Schema \u7684\u7ED3\u6784\u548C\u6BCF\u4E2A\u5C5E\u6027\u7684\u4F5C\u7528",paraId:35,tocIndex:10},{value:"\u6211\u4EEC\u65B0\u5EFA ",paraId:36,tocIndex:10},{value:"packages/plugins/@nocobase-sample/plugin-block-form/src/client/FormV3.schema.ts",paraId:36,tocIndex:10},{value:" \u6587\u4EF6\uFF1A",paraId:36,tocIndex:10},{value:`import { ISchema, useDataBlockProps } from "@nocobase/client";

import { FormV3BlockName, FormV3BlockNameLowercase } from "./constants";
import { FormV3Props } from "./FormV3";

export function useFormV3Props(): FormV3Props {
  const blockProps = useDataBlockProps();
  return blockProps[FormV3BlockNameLowercase];
}

interface GetFormV3SchemaOptions {
  dataSource?: string;
  collection: string;
  properties?: ISchema['properties'];
}

export function getFormV3Schema(options: GetFormV3SchemaOptions): ISchema {
  const { dataSource, collection, properties = {} } = options;
  return {
    type: 'void',
    'x-component': 'CardItem',
    'x-decorator': 'DataBlockProvider',
    'x-decorator-props': {
      dataSource,
      collection,
      [FormV3BlockNameLowercase]: {},
    },
    properties: {
      [FormV3BlockNameLowercase]: {
        type: 'void',
        'x-component': FormV3BlockName,
        'x-use-component-props': 'useFormV3Props',
        properties: {
          ...properties,
        }
      },
    }
  }
}
`,paraId:37,tocIndex:10},{value:"getFormV3Schema",paraId:38,tocIndex:10},{value:"\uFF1A",paraId:38,tocIndex:10},{value:"type",paraId:39,tocIndex:10},{value:"\uFF1A\u7C7B\u578B\uFF0C\u8FD9\u91CC\u662F ",paraId:39,tocIndex:10},{value:"void",paraId:39,tocIndex:10},{value:"\uFF0C\u8868\u793A\u7EAF UI \u8282\u70B9\uFF0C\u6CA1\u6709\u6570\u636E",paraId:39,tocIndex:10},{value:"'x-component': 'CardItem'",paraId:39,tocIndex:10},{value:"\uFF1A",paraId:39,tocIndex:10},{value:"CardItem \u7EC4\u4EF6",paraId:39,tocIndex:10},{value:"\uFF0C\u76EE\u524D\u7684\u533A\u5757\u90FD\u662F\u88AB\u5305\u88F9\u5728\u5361\u7247\u4E2D\u7684\uFF0C\u7528\u4E8E\u63D0\u4F9B\u6837\u5F0F\u3001\u5E03\u5C40\u548C\u62D6\u62FD\u7B49\u529F\u80FD",paraId:39,tocIndex:10},{value:"x-decorator: 'DataBlockProvider'",paraId:39,tocIndex:10},{value:"\uFF1A\u6570\u636E\u533A\u5757\u63D0\u4F9B\u8005\uFF0C\u7528\u4E8E\u63D0\u4F9B\u6570\u636E\uFF0C\u66F4\u591A\u5173\u4E8E DataBlockProvider \u53EF\u4EE5\u67E5\u770B ",paraId:39,tocIndex:10},{value:"DataBlockProvider",paraId:39,tocIndex:10},{value:"x-decorator-props",paraId:39,tocIndex:10},{value:"\uFF1A",paraId:39,tocIndex:10},{value:"DataBlockProvider",paraId:39,tocIndex:10},{value:` \u7684\u5C5E\u6027
`,paraId:39,tocIndex:10},{value:"dataSource",paraId:40,tocIndex:10},{value:"\uFF1A\u6570\u636E\u6E90",paraId:40,tocIndex:10},{value:"collection",paraId:40,tocIndex:10},{value:"\uFF1A\u6570\u636E\u8868",paraId:40,tocIndex:10},{value:"[FormV3BlockNameLowercase]: {}",paraId:40,tocIndex:10},{value:"\uFF1A",paraId:40,tocIndex:10},{value:"FormV3",paraId:40,tocIndex:10},{value:" \u7EC4\u4EF6\u7684\u5C5E\u6027",paraId:40,tocIndex:10},{value:"properties: { [FormV3BlockNameLowercase]: { ... } }",paraId:39,tocIndex:10},{value:`\uFF1A\u5B50\u8282\u70B9
`,paraId:39,tocIndex:10},{value:"[FormV3BlockNameLowercase]",paraId:41,tocIndex:10},{value:"\uFF1A",paraId:41,tocIndex:10},{value:"FormV3",paraId:41,tocIndex:10},{value:" \u7EC4\u4EF6\u7684\u5C5E\u6027",paraId:41,tocIndex:10},{value:"'x-component': FormV3BlockName",paraId:41,tocIndex:10},{value:"\uFF1A",paraId:41,tocIndex:10},{value:"FormV3",paraId:41,tocIndex:10},{value:" \u7EC4\u4EF6",paraId:41,tocIndex:10},{value:"'x-use-component-props': 'useFormV3Props'",paraId:41,tocIndex:10},{value:"\uFF1A\u4F7F\u7528 ",paraId:41,tocIndex:10},{value:"x-use-component-props",paraId:42,tocIndex:10},{value:" \u83B7\u53D6 ",paraId:41,tocIndex:10},{value:"FormV3",paraId:41,tocIndex:10},{value:" \u7EC4\u4EF6\u7684\u5C5E\u6027",paraId:41,tocIndex:10},{value:'"x-toolbar": "BlockSchemaToolbar"',paraId:39,tocIndex:10},{value:"\uFF1A",paraId:39,tocIndex:10},{value:"BlockSchemaToolbar",paraId:39,tocIndex:10},{value:" \u7528\u4E8E\u5DE6\u4E0A\u89D2\u663E\u793A\u5F53\u524D\u6570\u636E\u8868\uFF0C\u4E00\u822C\u548C ",paraId:39,tocIndex:10},{value:"DataBlockProvider",paraId:39,tocIndex:10},{value:" \u642D\u914D\u4F7F\u7528",paraId:39,tocIndex:10},{value:"useFormV3Props",paraId:43,tocIndex:10},{value:"\uFF1AHooks\uFF0C\u7528\u4E8E\u83B7\u53D6 ",paraId:43,tocIndex:10},{value:"FormV3",paraId:43,tocIndex:10},{value:" \u7EC4\u4EF6\u7684\u5C5E\u6027",paraId:43,tocIndex:10},{value:"useDataBlockProps",paraId:44,tocIndex:10},{value:"\uFF1A\u83B7\u53D6 ",paraId:44,tocIndex:10},{value:"DataBlockProvider",paraId:44,tocIndex:10},{value:" \u7684 props \u5C5E\u6027\uFF0C\u4E5F\u5C31\u662F ",paraId:44,tocIndex:10},{value:"x-decorator-props",paraId:44,tocIndex:10},{value:" \u7684\u503C",paraId:44,tocIndex:10},{value:"blockProps[FormV3BlockNameLowercase]",paraId:44,tocIndex:10},{value:"\uFF1A\u5BF9\u5E94 ",paraId:44,tocIndex:10},{value:"FormV3",paraId:44,tocIndex:10},{value:" \u7EC4\u4EF6\u7684\u5C5E\u6027",paraId:44,tocIndex:10},{value:"\u4E0A\u8FF0 Schema \u8F6C\u4E3A React \u7EC4\u4EF6\u540E\u76F8\u5F53\u4E8E\uFF1A",paraId:45,tocIndex:10},{value:`<CardItem>
  <DataBlockProvider dataSource={dataSource} collection={collection} formV3={{}}>
    <FormV3 {...useFormV3Props()}>
      {children}
    </FormV3>
  </DataBlockProvider>
</CardItem>
`,paraId:46,tocIndex:10},{value:"\u6211\u4EEC\u9700\u8981\u5C06 ",paraId:47,tocIndex:11},{value:"useFormV3Props",paraId:47,tocIndex:11},{value:" \u6CE8\u518C\u5230\u7CFB\u7EDF\u4E2D\uFF0C\u8FD9\u6837 ",paraId:47,tocIndex:11},{value:"x-use-component-props",paraId:48,tocIndex:11},{value:" \u624D\u80FD\u627E\u5230\u5BF9\u5E94\u7684 scope\u3002",paraId:47,tocIndex:11},{value:`import { Plugin } from '@nocobase/client';
import { FormV3 } from './FormV3';
import { useFormV3Props } from './FormV3.schema';

export class PluginBlockFormClient extends Plugin {
  async load() {
    this.app.addComponents({ FormV3 })
    this.app.addScopes({ useFormV3Props });
  }
}

export default PluginBlockFormClient;
`,paraId:49,tocIndex:11},{value:"\u66F4\u591A\u5173\u4E8E Scope \u7684\u8BF4\u660E\u53EF\u4EE5\u67E5\u770B ",paraId:50,tocIndex:11},{value:"\u5168\u5C40\u6CE8\u518C Component \u548C Scope",paraId:51,tocIndex:11},{value:"\u540C\u9A8C\u8BC1\u7EC4\u4EF6\u4E00\u6837\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u4E34\u65F6\u9875\u9762\u9A8C\u8BC1\u6216\u8005\u6587\u6863\u793A\u4F8B\u9A8C\u8BC1\u7684\u65B9\u5F0F\u6765\u9A8C\u8BC1 Schema \u662F\u5426\u7B26\u5408\u9700\u6C42\u3002\u6211\u4EEC\u8FD9\u91CC\u4EE5\u4E34\u65F6\u9875\u9762\u9A8C\u8BC1\u4E3A\u4F8B\uFF1A",paraId:52,tocIndex:12},{value:`import React from 'react';
import { Plugin, SchemaComponent } from '@nocobase/client';
import { FormV3 } from './FormV3';
import { useFormV3Props, getFormV3Schema } from './FormV3.schema';

import { useForm } from '@formily/react';
function useSubmitActionProps(): ActionProps {
  const form = useForm();

  return {
    type: 'primary',
    htmlType: 'submit',
    async onClick() {
      await form.submit();
      const values = form.values;

      console.log('values', values);
    },
  };
}

export class PluginBlockFormClient extends Plugin {
  async load() {
    this.app.addComponents({ FormV3 })
    this.app.addScopes({ useFormV3Props });

    this.app.router.add('admin.block-form-schema', {
      path: '/admin/block-form-schema',
      Component: () => {
        return <>
          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <SchemaComponent schema={{
              properties: {
                test: getFormV3Schema({
                  collection: 'users',
                  properties: {
                    username: {
                      type: 'string',
                      'x-decorator': 'FormItem',
                      'x-component': 'CollectionField',
                    },
                    nickname: {
                      type: 'string',
                      'x-decorator': 'FormItem',
                      'x-component': 'CollectionField',
                    },
                    submit: {
                      type: 'void',
                      'x-component': 'Action',
                      title: 'Submit',
                      'x-use-component-props': useSubmitActionProps,
                    },
                  }
                })
              }
            }} />
          </div>
        </>
      }
    })
  }
}

export default PluginBlockFormClient;
`,paraId:53,tocIndex:12},{value:"\u5173\u4E8E ",paraId:54,tocIndex:12},{value:"SchemaComponent",paraId:54,tocIndex:12},{value:" \u7684\u8BE6\u7EC6\u8BF4\u660E\u53EF\u4EE5\u67E5\u770B ",paraId:54,tocIndex:12},{value:"SchemaComponent",paraId:54,tocIndex:12},{value:" \u6587\u6863\u3002",paraId:54,tocIndex:12},{value:"\u6211\u4EEC\u8BBF\u95EE ",paraId:55,tocIndex:12},{value:"http://localhost:13000/admin/block-form-schema",paraId:55,tocIndex:12},{value:" \u5C31\u53EF\u4EE5\u770B\u5230\u5BF9\u5E94\u6D4B\u8BD5\u9875\u9762\u7684\u5185\u5BB9\u4E86\u3002",paraId:55,tocIndex:12},{value:"\u9A8C\u8BC1\u5B8C\u6BD5\u540E\u9700\u8981\u5220\u9664\u6D4B\u8BD5\u9875\u9762\u3002",paraId:56,tocIndex:12},{value:"\u6211\u4EEC\u65B0\u5EFA ",paraId:57,tocIndex:13},{value:"packages/plugins/@nocobase-sample/plugin-block-form/src/client/FormV3.initializer.tsx",paraId:57,tocIndex:13},{value:" \u6587\u4EF6\uFF1A",paraId:57,tocIndex:13},{value:`import React from 'react';
import { SchemaInitializerItemType, useSchemaInitializer } from '@nocobase/client'
import { FormOutlined } from '@ant-design/icons';

import { getFormV3Schema } from './FormV3.schema'
import { FormV3BlockName } from './constants';
import { useT } from './locale';

export const formV3InitializerItem: SchemaInitializerItemType = {
  name: FormV3BlockName,
  Component: 'DataBlockInitializer',
  useComponentProps() {
    const { insert } = useSchemaInitializer();
    const t = useT();

    return {
      title: t(FormV3BlockName),
      icon: <FormOutlined />,
      componentType: FormV3BlockName,
      onCreateBlockSchema({ item }) {
        insert(getFormV3Schema({ dataSource: item.dataSource, collection: item.name }))
      },
    };
  },
}
`,paraId:58,tocIndex:13},{value:"formV3InitializerItem",paraId:59,tocIndex:13},{value:"\uFF1A",paraId:59,tocIndex:13},{value:"Component",paraId:60,tocIndex:13},{value:"\uFF1A\u4E0E ",paraId:60,tocIndex:13},{value:"\u6DFB\u52A0\u7B80\u5355\u533A\u5757 Simple Block",paraId:61,tocIndex:13},{value:" \u4E2D\u4F7F\u7528\u7684\u662F ",paraId:60,tocIndex:13},{value:"type",paraId:60,tocIndex:13},{value:"\uFF0C\u8FD9\u91CC\u4F7F\u7528\u7684\u662F ",paraId:60,tocIndex:13},{value:"Component",paraId:60,tocIndex:13},{value:"\uFF0C",paraId:60,tocIndex:13},{value:"2 \u79CD\u5B9A\u4E49\u65B9\u5F0F",paraId:60,tocIndex:13},{value:" \u90FD\u662F\u53EF\u4EE5\u7684",paraId:60,tocIndex:13},{value:"useComponentProps",paraId:60,tocIndex:13},{value:"\uFF1A",paraId:60,tocIndex:13},{value:"DataBlockInitializer",paraId:60,tocIndex:13},{value:` \u7EC4\u4EF6\u7684\u5C5E\u6027
`,paraId:60,tocIndex:13},{value:"title",paraId:62,tocIndex:13},{value:"\uFF1A\u6807\u9898",paraId:62,tocIndex:13},{value:"icon",paraId:62,tocIndex:13},{value:"\uFF1A\u56FE\u6807\uFF0C\u66F4\u591A\u56FE\u6807\u53EF\u4EE5\u67E5\u770B ",paraId:62,tocIndex:13},{value:"Ant Design Icons",paraId:62,tocIndex:13},{value:"componentType",paraId:62,tocIndex:13},{value:"\uFF1A\u7EC4\u4EF6\u7C7B\u578B\uFF0C\u8FD9\u91CC\u662F ",paraId:62,tocIndex:13},{value:"Info",paraId:62,tocIndex:13},{value:"onCreateBlockSchema",paraId:62,tocIndex:13},{value:`\uFF1A\u5F53\u70B9\u51FB\u6570\u636E\u8868\u540E\u7684\u56DE\u8C03
`,paraId:62,tocIndex:13},{value:"item",paraId:63,tocIndex:13},{value:`\uFF1A\u70B9\u51FB\u7684\u6570\u636E\u8868\u4FE1\u606F
`,paraId:63,tocIndex:13},{value:"item.name",paraId:64,tocIndex:13},{value:"\uFF1A\u6570\u636E\u8868\u540D\u79F0",paraId:64,tocIndex:13},{value:"item.dataSource",paraId:64,tocIndex:13},{value:"\uFF1A\u6570\u636E\u8868\u6240\u5C5E\u7684\u6570\u636E\u6E90",paraId:64,tocIndex:13},{value:"useSchemaInitializer",paraId:62,tocIndex:13},{value:"\uFF1A\u63D0\u4F9B\u4E86\u63D2\u5165 Schema \u7684\u65B9\u6CD5",paraId:62,tocIndex:13},{value:"\u66F4\u591A\u5173\u4E8E Schema Initializer \u7684\u5B9A\u4E49\u53EF\u4EE5\u53C2\u8003 ",paraId:65,tocIndex:13},{value:"Schema Initializer",paraId:65,tocIndex:13},{value:" \u6587\u6863\u3002",paraId:65,tocIndex:13},{value:"\u7CFB\u7EDF\u4E2D\u6709\u5F88\u591A\u4E2A ",paraId:66,tocIndex:14},{value:"Add block",paraId:66,tocIndex:14},{value:" \u6309\u94AE\uFF0C\u4F46\u4ED6\u4EEC\u7684 ",paraId:66,tocIndex:14},{value:"name \u662F\u4E0D\u540C\u7684",paraId:66,tocIndex:14},{value:"\u3002",paraId:66,tocIndex:14},{value:"\u5982\u679C\u6211\u4EEC\u9700\u8981\u6DFB\u52A0\u5230\u9875\u9762\u7EA7\u522B\u7684 ",paraId:67,tocIndex:14},{value:"Add block",paraId:67,tocIndex:14},{value:" \u4E2D\uFF0C\u6211\u4EEC\u9700\u8981\u77E5\u9053\u5BF9\u5E94\u7684 ",paraId:67,tocIndex:14},{value:"name",paraId:67,tocIndex:14},{value:"\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7 TODO \u65B9\u5F0F\u67E5\u770B\u5BF9\u5E94\u7684 ",paraId:67,tocIndex:14},{value:"name",paraId:67,tocIndex:14},{value:"\u3002",paraId:67,tocIndex:14},{value:"TODO",paraId:68,tocIndex:14},{value:"\u901A\u8FC7\u4E0A\u56FE\u53EF\u4EE5\u770B\u5230\u9875\u9762\u7EA7\u522B\u7684 ",paraId:69,tocIndex:14},{value:"Add block",paraId:69,tocIndex:14},{value:" \u5BF9\u5E94\u7684 name \u4E3A ",paraId:69,tocIndex:14},{value:"page:addBlock",paraId:69,tocIndex:14},{value:"\uFF0C",paraId:69,tocIndex:14},{value:"Data Blocks",paraId:69,tocIndex:14},{value:" \u5BF9\u5E94\u7684 name \u4E3A ",paraId:69,tocIndex:14},{value:"dataBlocks",paraId:69,tocIndex:14},{value:"\u3002",paraId:69,tocIndex:14},{value:"\u7136\u540E\u6211\u4EEC\u4FEE\u6539 ",paraId:70,tocIndex:14},{value:"packages/plugins/@nocobase-sample/plugin-block-form/src/client/index.tsx",paraId:70,tocIndex:14},{value:" \u6587\u4EF6\uFF1A",paraId:70,tocIndex:14},{value:`import { Plugin } from '@nocobase/client';

import { FormV3 } from './FormV3';
import { useFormV3Props } from './FormV3.schema';
import { formV3InitializerItem } from './FormV3.initializer';

export class PluginBlockFormClient extends Plugin {
  async load() {
    this.app.addComponents({ FormV3 })
    this.app.addScopes({ useFormV3Props });

    this.app.schemaInitializerManager.addItem('page:addBlock', \`dataBlocks.\${formV3InitializerItem.name}\`, formV3InitializerItem);
  }
}

export default PluginBlockFormClient;
`,paraId:71,tocIndex:14},{value:"\u8FD9\u91CC\u4F7F\u7528 ",paraId:72,tocIndex:14},{value:"app.schemaInitializerManager.addItem",paraId:72,tocIndex:14},{value:" \u5C06 ",paraId:72,tocIndex:14},{value:"formV3InitializerItem",paraId:72,tocIndex:14},{value:" \u6DFB\u52A0\u5BF9\u5E94 Initializer \u5B50\u9879\u4E2D\uFF0C\u5176\u4E2D ",paraId:72,tocIndex:14},{value:"page:addBlock",paraId:72,tocIndex:14},{value:" \u662F\u9875\u9762\u4E0A ",paraId:72,tocIndex:14},{value:"Add block",paraId:72,tocIndex:14},{value:" \u7684 name\uFF0C",paraId:72,tocIndex:14},{value:"dataBlocks",paraId:72,tocIndex:14},{value:" \u662F\u5176\u7236\u7EA7\u7684 name\u3002",paraId:72,tocIndex:14},{value:"\u7136\u540E\u6211\u4EEC hover ",paraId:73,tocIndex:14},{value:"Add block",paraId:73,tocIndex:14},{value:" \u6309\u94AE\uFF0C\u5C31\u53EF\u4EE5\u770B\u5230 ",paraId:73,tocIndex:14},{value:"FormV3",paraId:73,tocIndex:14},{value:" \u8FD9\u4E2A\u65B0\u7684\u533A\u5757\u7C7B\u578B\u3002",paraId:73,tocIndex:14},{value:"\u70B9\u51FB ",paraId:74,tocIndex:14},{value:"Users",paraId:74,tocIndex:14},{value:" \u8868\uFF0C\u5C31\u53EF\u4EE5\u6DFB\u52A0\u4E00\u4E2A\u65B0\u7684 ",paraId:74,tocIndex:14},{value:"FormV3",paraId:74,tocIndex:14},{value:" \u533A\u5757\u4E86\uFF0C\u4F46\u662F\u76EE\u524D\u5B50\u8282\u70B9\u662F\u7A7A\u7684\u3002",paraId:74,tocIndex:14},{value:"\u76EE\u524D\u7684\u533A\u5757\u53EA\u80FD\u6DFB\u52A0\uFF0C\u4F46\u662F\u65E0\u6CD5\u5220\u9664\uFF0C\u6211\u4EEC\u9700\u8981\u5B9E\u73B0 ",paraId:75,tocIndex:15},{value:"Schema Settings",paraId:75,tocIndex:15},{value:"\uFF0C\u7528\u4E8E\u914D\u7F6E\u4E00\u4E9B\u5C5E\u6027\u548C\u64CD\u4F5C\u3002",paraId:75,tocIndex:15},{value:"\u4E00\u4E2A\u5B8C\u6574\u7684 Block \u8FD8\u9700\u8981\u6709 Schema Settings\uFF0C\u7528\u4E8E\u914D\u7F6E\u4E00\u4E9B\u5C5E\u6027\u548C\u64CD\u4F5C\u3002",paraId:76,tocIndex:16},{value:"\u6211\u4EEC\u65B0\u5EFA ",paraId:77,tocIndex:16},{value:"packages/plugins/@nocobase-sample/plugin-block-form/src/client/FormV3.settings/index.ts",paraId:77,tocIndex:16},{value:" \u6587\u4EF6\uFF1A",paraId:77,tocIndex:16},{value:`import { SchemaSettings } from "@nocobase/client";
import { FormV3BlockNameLowercase } from "../constants";

export const formV3Settings = new SchemaSettings({
  name: \`blockSettings:\${FormV3BlockNameLowercase}\`,
  items: [
    // TODO
  ]
})
`,paraId:78,tocIndex:16},{value:`import { Plugin } from '@nocobase/client';
import { formV3Settings } from './FormV3.settings';

export class PluginBlockFormClient extends Plugin {
  async load() {
    // ...
    this.app.schemaSettingsManager.add(formV3Settings)
  }
}

export default PluginBlockFormClient;
`,paraId:79,tocIndex:17},{value:"\u6211\u4EEC\u4FEE\u6539 ",paraId:80,tocIndex:18},{value:"packages/plugins/@nocobase-sample/plugin-block-form/src/client/schema/index.ts",paraId:80,tocIndex:18},{value:" \u4E2D\u7684 ",paraId:80,tocIndex:18},{value:"getFormV3Schema",paraId:80,tocIndex:18},{value:"\uFF1A",paraId:80,tocIndex:18},{value:`+ import { formV3Settings } from "./FormV3.settings";

export function getFormV3Schema(options: GetFormV3SchemaOptions): ISchema {
  const { dataSource, collection, properties = {} } = options;
  return {
    type: 'void',
    'x-decorator': 'CardItem',
+   'x-settings': formV3Settings.name,
    // ...
  }
};
`,paraId:81,tocIndex:18},{value:"\u76EE\u524D\u6211\u4EEC\u53EA\u5B9E\u73B0\u4E86 ",paraId:82,tocIndex:19},{value:"Schema Settings",paraId:82,tocIndex:19},{value:"\uFF0C\u4F46\u662F\u6CA1\u6709\u5B9E\u73B0\u4EFB\u4F55\u64CD\u4F5C\uFF0C\u6211\u4EEC\u9700\u8981\u6839\u636E\u9700\u6C42\u5B9E\u73B0\u5404\u4E2A\u64CD\u4F5C\u3002",paraId:82,tocIndex:19},{value:"\u76EE\u524D Schema Settings \u652F\u6301\u7684\u5185\u7F6E\u64CD\u4F5C\u7C7B\u578B\u8BF7\u53C2\u8003 ",paraId:83,tocIndex:19},{value:"Schema Settings - Built-in Components and Types",paraId:83,tocIndex:19},{value:" \u6587\u6863\u3002",paraId:83,tocIndex:19},{value:"remove",paraId:0},{value:"\u76EE\u524D\u901A\u8FC7 initializers \u6DFB\u52A0\u7684\u533A\u5757\u662F\u65E0\u6CD5\u5220\u9664\u7684\uFF0C\u6211\u4EEC\u9700\u8981\u5B9E\u73B0 ",paraId:84,tocIndex:20},{value:"remove",paraId:84,tocIndex:20},{value:" \u64CD\u4F5C\u3002",paraId:84,tocIndex:20},{value:"[NocoBase] \u5185\u7F6E\u4E86 ",paraId:85,tocIndex:20},{value:"remove",paraId:85,tocIndex:20},{value:" \u64CD\u4F5C\u7C7B\u578B\uFF0C\u6211\u4EEC\u4FEE\u6539 ",paraId:85,tocIndex:20},{value:"packages/plugins/@nocobase-sample/plugin-block-form/src/client/settings/index.ts",paraId:85,tocIndex:20},{value:" \u6587\u4EF6\uFF1A",paraId:85,tocIndex:20},{value:`import { SchemaSettings } from '@nocobase/client';
import { BlockNameLowercase } from '../constants';

export const formV3Settings = new SchemaSettings({
  name: \`blockSettings:\${FormV3BlockNameLowercase}\`,
  items: [
+   {
+     type: 'remove',
+     name: 'remove',
+     componentProps: {
+       removeParentsIfNoChildren: true,
+       breakRemoveOn: {
+         'x-component': 'Grid',
+       },
+     }
+   }
  ]
});
`,paraId:86,tocIndex:20},{value:`componentProps
`,paraId:87,tocIndex:20},{value:"removeParentsIfNoChildren",paraId:88,tocIndex:20},{value:"\uFF1A\u5982\u679C\u6CA1\u6709\u5B50\u8282\u70B9\uFF0C\u662F\u5426\u5220\u9664\u7236\u8282\u70B9",paraId:88,tocIndex:20},{value:"breakRemoveOn",paraId:88,tocIndex:20},{value:"\uFF1A\u5220\u9664\u65F6\u7684\u4E2D\u65AD\u6761\u4EF6\u3002\u56E0\u4E3A ",paraId:88,tocIndex:20},{value:"Add Block",paraId:88,tocIndex:20},{value:" \u4F1A\u81EA\u52A8\u5C06\u5B50\u9879\u7684\u5305\u88F9\u5728 ",paraId:88,tocIndex:20},{value:"Grid",paraId:88,tocIndex:20},{value:" \u4E2D\uFF0C\u6240\u4EE5\u8FD9\u91CC\u8BBE\u7F6E ",paraId:88,tocIndex:20},{value:"breakRemoveOn: { 'x-component': 'Grid' }",paraId:88,tocIndex:20},{value:"\uFF0C\u5F53\u5220\u9664 ",paraId:88,tocIndex:20},{value:"Grid",paraId:88,tocIndex:20},{value:" \u65F6\uFF0C\u4E0D\u518D\u5411\u4E0A\u5220\u9664\u3002",paraId:88,tocIndex:20},{value:"schema \u7684\u53D8\u66F4\u4E0D\u4F1A\u5F71\u54CD\u4E4B\u524D\u6DFB\u52A0\u7684\u533A\u5757\uFF0C\u53EA\u6709\u65B0\u6DFB\u52A0\u7684\u533A\u5757\u4F1A\u624D\u80FD\u6709\u6700\u65B0\u7684 schema\uFF0C\u6211\u4EEC\u8FD9\u91CC\u9700\u8981\u65B0\u6DFB\u52A0\u4E00\u4E2A\u533A\u5757\u6765\u67E5\u770B\u6548\u679C\u3002",paraId:89},{value:"Edit block title",paraId:0},{value:"Edit block title",paraId:90,tocIndex:21},{value:" \u4E5F\u662F\u4E00\u4E2A\u5E38\u89C1\u7684\u64CD\u4F5C\uFF0C",paraId:90,tocIndex:21},{value:"@nocobase/client",paraId:90,tocIndex:21},{value:" \u5185\u7F6E\u4E86 ",paraId:90,tocIndex:21},{value:"SchemaSettingsBlockTitleItem",paraId:90,tocIndex:21},{value:" \u7EC4\u4EF6\uFF0C\u6211\u4EEC\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\u3002",paraId:90,tocIndex:21},{value:`- import { SchemaSettings } from "@nocobase/client";
+ import { SchemaSettings, SchemaSettingsBlockTitleItem } from "@nocobase/client";

export const formV3Settings = new SchemaSettings({
  name: \`blockSettings:\${FormV3BlockNameLowercase}\`,
  items: [
+   {
+     name: 'blockTitle',
+     Component: SchemaSettingsBlockTitleItem,
+   },
    {
      type: 'remove',
      name: 'remove',
      componentProps: {
        removeParentsIfNoChildren: true,
        breakRemoveOn: {
          'x-component': 'Grid',
        },
      }
    },
  ]
})
`,paraId:91,tocIndex:21},{value:"Configure actions",paraId:0},{value:"Configure actions",paraId:92,tocIndex:22},{value:" \u7528\u4E8E\u6DFB\u52A0\u4E00\u4E9B\u64CD\u4F5C\uFF0C\u6BD4\u5982 ",paraId:92,tocIndex:22},{value:"Submit",paraId:92,tocIndex:22},{value:"\u3001",paraId:92,tocIndex:22},{value:"Custom request",paraId:92,tocIndex:22},{value:" \u7B49\u3002",paraId:92,tocIndex:22},{value:"\u5173\u4E8E ",paraId:93,tocIndex:22},{value:"Configure actions",paraId:93,tocIndex:22},{value:" \u7684\u8BE6\u7EC6\u8BF4\u660E\u53EF\u4EE5\u67E5\u770B ",paraId:93,tocIndex:22},{value:"\u533A\u5757\u5185\u5D4C\u7684 Initializer - \u914D\u7F6E\u64CD\u4F5C",paraId:94,tocIndex:22},{value:" \u6587\u6863\u3002",paraId:93,tocIndex:22},{value:"\u6211\u4EEC\u65B0\u5EFA ",paraId:95,tocIndex:23},{value:"packages/plugins/@nocobase-sample/plugin-block-form/src/client/FormV3.configFields/index.ts",paraId:95,tocIndex:23},{value:" \u6587\u4EF6\uFF1A",paraId:95,tocIndex:23},{value:`import { SchemaInitializer } from "@nocobase/client";
import { FormV3BlockNameLowercase } from "../constants";

export const formV3ConfigureActionsInitializer = new SchemaInitializer({
  name: \`\${FormV3BlockNameLowercase}:configureActions\`,
  icon: 'SettingOutlined',
  title: tStr('Configure actions'),
  style: {
    marginLeft: 8,
  },
  items: [
    // TODO
  ]
});
`,paraId:96,tocIndex:23},{value:"\u6211\u4EEC\u901A\u8FC7\u4E0A\u8FF0\u4EE3\u7801\u5B9A\u4E49\u4E86\u4E00\u4E2A\u65B0\u7684 ",paraId:97,tocIndex:23},{value:"SchemaInitializer",paraId:97,tocIndex:23},{value:"\uFF0C\u5176\u5B50\u9879\u6682\u65F6\u4E3A\u7A7A\u3002",paraId:97,tocIndex:23},{value:"SchemaInitializer",paraId:98,tocIndex:23},{value:"\uFF1A\u7528\u4E8E\u521B\u5EFA\u4E00\u4E2A Schema Initializer \u5B9E\u4F8B",paraId:98,tocIndex:23},{value:"icon",paraId:98,tocIndex:23},{value:"\uFF1A\u56FE\u6807\uFF0C\u66F4\u591A\u56FE\u6807\u53EF\u53C2\u8003 Ant Design ",paraId:98,tocIndex:23},{value:"Icons",paraId:98,tocIndex:23},{value:"title",paraId:98,tocIndex:23},{value:"\uFF1A\u6309\u94AE\u6807\u9898",paraId:98,tocIndex:23},{value:"items",paraId:98,tocIndex:23},{value:"\uFF1A\u6309\u94AE\u4E0B\u7684\u5B50\u9879",paraId:98,tocIndex:23},{value:"\u7136\u540E\u4FEE\u6539 ",paraId:99,tocIndex:24},{value:"packages/plugins/@nocobase-sample/plugin-block-form/src/client/index.tsx",paraId:99,tocIndex:24},{value:" \u6587\u4EF6\uFF0C\u5BFC\u5165\u5E76\u6CE8\u518C\u8FD9\u4E2A initializer\uFF1A",paraId:99,tocIndex:24},{value:`// ...
import { formV3ConfigureActionsInitializer } from './FormV3.configActions';

export class PluginBlockFormClient extends Plugin {
  async load() {
    this.app.schemaInitializerManager.add(formV3ConfigureActionsInitializer);

    // ...
  }
}
`,paraId:100,tocIndex:24},{value:"\u6211\u4EEC\u4FEE\u6539 ",paraId:101,tocIndex:25},{value:"packages/plugins/@nocobase-sample/plugin-block-form/src/client/FormV3.schema.ts",paraId:101,tocIndex:25},{value:" \u6587\u4EF6\uFF0C\u65B0\u589E ",paraId:101,tocIndex:25},{value:"actionBar",paraId:101,tocIndex:25},{value:" \u5B50\u8282\u70B9\uFF1A",paraId:101,tocIndex:25},{value:`// ...
+ import { formV3ConfigureActionsInitializer } from "./FormV3.configActions";

export function getFormV3Schema(options: GetFormV3SchemaOptions): ISchema {
  const { dataSource, collection, properties = {} } = options;
  return {
    type: 'void',
    'x-component': 'CardItem',
    'x-decorator': 'DataBlockProvider',
    'x-decorator-props': {
      dataSource,
      collection,
      action,
      params,
      [FormV3BlockNameLowercase]: {},
    },
    'x-settings': formV3Settings.name,
    "x-toolbar": "BlockSchemaToolbar",
    properties: {
      [FormV3BlockNameLowercase]: {
        type: 'void',
        'x-component': FormV3BlockName,
        'x-use-component-props': 'useFormV3Props',
        properties: {
          ...properties as any,
+         actionBar: {
+           type: 'void',
+           "x-initializer": formV3ConfigureActionsInitializer.name,
+           "x-component": "ActionBar",
+           "x-component-props": {
+             "layout": "one-column",
+             "style": {
+               "marginTop": 24
+             }
+           },
+         },
        }
      }
    }
  }
}
`,paraId:102,tocIndex:25},{value:"configure actions",paraId:103,tocIndex:25},{value:" \u4E00\u822C\u4E0E ",paraId:103,tocIndex:25},{value:"ActionBar",paraId:103,tocIndex:25},{value:" \u7EC4\u4EF6\u642D\u914D\u4F7F\u7528\u3002",paraId:103,tocIndex:25},{value:"\u6211\u4EEC\u5728 ",paraId:104,tocIndex:25},{value:"FormV3",paraId:104,tocIndex:25},{value:" \u7684\u5B50\u8282\u70B9\u4E2D\u6DFB\u52A0\u4E86\u4E00\u4E2A ",paraId:104,tocIndex:25},{value:"actionBar",paraId:104,tocIndex:25},{value:" \u8282\u70B9\uFF1A",paraId:104,tocIndex:25},{value:"type: 'void'",paraId:105,tocIndex:25},{value:"\uFF1A\u7C7B\u578B\u4E3A ",paraId:105,tocIndex:25},{value:"void",paraId:105,tocIndex:25},{value:"\uFF0C\u8868\u793A\u8FD9\u662F\u4E00\u4E2A\u5BB9\u5668",paraId:105,tocIndex:25},{value:"x-component: 'ActionBar'",paraId:105,tocIndex:25},{value:"\uFF1A\u4F7F\u7528 ",paraId:105,tocIndex:25},{value:"ActionBar",paraId:105,tocIndex:25},{value:" \u7EC4\u4EF6\uFF0C\u7528\u4E8E\u5C55\u793A\u6309\u94AE",paraId:105,tocIndex:25},{value:"x-initializer: formV3ConfigureActionsInitializer.name",paraId:105,tocIndex:25},{value:"\uFF1A\u4F7F\u7528\u6211\u4EEC\u521A\u521B\u5EFA\u7684 Initializer",paraId:105,tocIndex:25},{value:"x-component-props.layout: 'one-column'",paraId:105,tocIndex:25},{value:"\uFF1A\u5DE6\u4FA7\u5E03\u5C40\uFF0C\u5177\u4F53\u793A\u4F8B\u53EF\u53C2\u8003 ",paraId:105,tocIndex:25},{value:"ActionBar one-column",paraId:105,tocIndex:25},{value:"Configure actions",paraId:0},{value:`.
\u251C\u2500\u2500 FormV3.configActions
\u251C\u2500\u2500 index.ts
\u2514\u2500\u2500 items
    \u2514\u2500\u2500 submit # \u63D0\u4EA4\u64CD\u4F5C
        \u251C\u2500\u2500 index.ts
        \u251C\u2500\u2500 initializer.tsx
        \u251C\u2500\u2500 schema.ts
        \u2514\u2500\u2500 settings.ts
`,paraId:106,tocIndex:26},{value:"Submit",paraId:0},{value:"\u6211\u4EEC\u65B0\u5EFA ",paraId:107,tocIndex:28},{value:"packages/plugins/@nocobase-sample/plugin-block-form/src/client/FormV3.configActions/items/submit/schema.ts",paraId:107,tocIndex:28},{value:" \u6587\u4EF6\uFF1A",paraId:107,tocIndex:28},{value:`import { useForm } from '@formily/react';
import { App } from 'antd';
import { ActionProps, useDataBlockResource } from "@nocobase/client";
import { tStr } from '../../../locale'

export const useFormV3SubmitActionProps = (): ActionProps => {
  const resource = useDataBlockResource();
  const form = useForm();
  const { message } = App.useApp();
  return {
    type: 'primary',
    htmlType: 'submit',
    async onClick() {
      await form.submit();
      const values = form.values;
      await resource.create({ values })
      await form.reset();
      message.success('Created successfully');
    },
  }
}

export const submitActionSchema = {
  type: 'void',
  title: tStr('Submit'),
  'x-component': 'Action',
  'x-use-component-props': 'useFormV3SubmitActionProps',
  'x-toolbar': 'ActionSchemaToolbar'
};
`,paraId:108,tocIndex:28},{value:"submitActionSchema",paraId:109,tocIndex:28},{value:"\uFF1A",paraId:109,tocIndex:28},{value:"type: 'void'",paraId:110,tocIndex:28},{value:"\uFF1A\u7C7B\u578B\u4E3A ",paraId:110,tocIndex:28},{value:"void",paraId:110,tocIndex:28},{value:"\uFF0C\u8868\u793A\u666E\u901A UI\uFF0C\u4E0D\u5305\u542B\u6570\u636E",paraId:110,tocIndex:28},{value:"x-component: 'Action'",paraId:110,tocIndex:28},{value:"\uFF1A\u4F7F\u7528 ",paraId:110,tocIndex:28},{value:"Action",paraId:110,tocIndex:28},{value:" \u7EC4\u4EF6\uFF0C\u7528\u4E8E\u5C55\u793A\u6309\u94AE",paraId:110,tocIndex:28},{value:"title: 'Submit'",paraId:110,tocIndex:28},{value:"\uFF1A\u6309\u94AE\u6807\u9898",paraId:110,tocIndex:28},{value:"x-use-component-props: 'useFormV3SubmitActionProps'",paraId:110,tocIndex:28},{value:"\uFF1A\u4F7F\u7528 ",paraId:110,tocIndex:28},{value:"useFormV3SubmitActionProps",paraId:110,tocIndex:28},{value:" \u8FD9\u4E2A Hooks \u8FD4\u56DE\u7684\u5C5E\u6027\u3002\u56E0\u4E3A Schema \u4F1A\u4FDD\u5B58\u5230\u670D\u52A1\u5668\uFF0C\u6240\u4EE5\u8FD9\u91CC\u9700\u8981\u4F7F\u7528\u5B57\u7B26\u4E32\u7684\u65B9\u5F0F\u3002",paraId:110,tocIndex:28},{value:"'x-toolbar': 'ActionSchemaToolbar'",paraId:110,tocIndex:28},{value:"\uFF1A\u4E00\u822C\u4E8E ",paraId:110,tocIndex:28},{value:"Action",paraId:110,tocIndex:28},{value:" \u7EC4\u4EF6\u642D\u914D\u4F7F\u7528\uFF0C\u4E0E\u9ED8\u8BA4\u7684 ToolBar \u4E0D\u540C\u7684\u662F\uFF0C\u5176\u5C06 Action \u53F3\u4E0A\u89D2\u7684 ",paraId:110,tocIndex:28},{value:"Initializer",paraId:110,tocIndex:28},{value:" \u9690\u85CF\uFF0C\u4EC5\u4FDD\u7559 Drag \u548C Settings\u3002",paraId:110,tocIndex:28},{value:"useFormV3SubmitActionProps",paraId:111,tocIndex:28},{value:"\uFF1A\u8FD9\u4E2A\u662F React Hooks\uFF0C\u9700\u8981\u8FD4\u56DE Action \u7EC4\u4EF6\u7684\u5C5E\u6027\u3002",paraId:111,tocIndex:28},{value:"useDataBlockResource()",paraId:112,tocIndex:28},{value:"\uFF1A\u6570\u636E\u533A\u5757\u7684\u8BF7\u6C42\u5BF9\u8C61\uFF0C\u7531 ",paraId:112,tocIndex:28},{value:"DataBlockProvider",paraId:112,tocIndex:28},{value:` \u5185\u90E8\u63D0\u4F9B\uFF0C\u7528\u4E8E\u81EA\u52A8\u83B7\u53D6\u6570\u636E\u533A\u5757\u7684\u6570\u636E
`,paraId:112,tocIndex:28},{value:"resource.create",paraId:113,tocIndex:28},{value:"\uFF1A\u7528\u4E8E\u521B\u5EFA\u6570\u636E",paraId:113,tocIndex:28},{value:"useForm",paraId:112,tocIndex:28},{value:`\uFF1A\u83B7\u53D6 Formily \u7684 form \u5BF9\u8C61
`,paraId:112,tocIndex:28},{value:"form.submit()",paraId:114,tocIndex:28},{value:"\uFF1A\u63D0\u4EA4\u8868\u5355\uFF0C\u89E6\u53D1\u6821\u9A8C",paraId:114,tocIndex:28},{value:"form.values",paraId:114,tocIndex:28},{value:"\uFF1A\u83B7\u53D6\u8868\u5355\u6570\u636E",paraId:114,tocIndex:28},{value:"form.reset()",paraId:114,tocIndex:28},{value:"\uFF1A\u91CD\u7F6E\u8868\u5355",paraId:114,tocIndex:28},{value:"type: 'primary'",paraId:112,tocIndex:28},{value:"\uFF1A\u6309\u94AE\u7C7B\u578B\u4E3A ",paraId:112,tocIndex:28},{value:"primary",paraId:112,tocIndex:28},{value:"onClick",paraId:112,tocIndex:28},{value:"\uFF1A\u70B9\u51FB\u4E8B\u4EF6\u3002",paraId:112,tocIndex:28},{value:"\u7136\u540E\u5C06\u5176\u5728 ",paraId:115,tocIndex:28},{value:"packages/plugins/@nocobase-sample/plugin-block-form/src/client/FormV3.configActions/items/submit/index.ts",paraId:115,tocIndex:28},{value:" \u4E2D\u5BFC\u51FA\uFF1A",paraId:115,tocIndex:28},{value:`export * from './schema';
`,paraId:116,tocIndex:28},{value:"\u6211\u4EEC\u8FD8\u9700\u8981\u5C06 ",paraId:117,tocIndex:29},{value:"useFormV3SubmitActionProps",paraId:117,tocIndex:29},{value:" \u6CE8\u518C\u5230\u4E0A\u4E0B\u6587\u4E2D\u3002\u6211\u4EEC\u4FEE\u6539 ",paraId:117,tocIndex:29},{value:"packages/plugins/@nocobase-sample/plugin-block-form/src/client/index.tsx",paraId:117,tocIndex:29},{value:" \u6587\u4EF6\uFF1A",paraId:117,tocIndex:29},{value:`// ...
+ import { useFormV3SubmitActionProps } from './FormV3.configActions/items/submit';

export class PluginBlockFormClient extends Plugin {
  async load() {
    // ...
-   this.app.addScopes({ useFormV3Props });
+   this.app.addScopes({ useFormV3Props, useFormV3SubmitActionProps });
  }
}
`,paraId:118,tocIndex:29},{value:"\u5173\u4E8E ",paraId:119,tocIndex:29},{value:"SchemaComponentOptions",paraId:119,tocIndex:29},{value:" \u7684\u4F7F\u7528\u53EF\u4EE5\u53C2\u8003 ",paraId:119,tocIndex:29},{value:"SchemaComponentOptions",paraId:119,tocIndex:29},{value:" \u6587\u6863\u4EE5\u53CA ",paraId:119,tocIndex:29},{value:"\u5168\u5C40\u6CE8\u518C Component \u548C Scope",paraId:120,tocIndex:29},{value:"\u3002",paraId:119,tocIndex:29},{value:"\u6211\u4EEC\u65B0\u589E ",paraId:121,tocIndex:30},{value:"packages/plugins/@nocobase-sample/plugin-block-form/src/client/FormV3.configActions/items/submit/initializer.tsx",paraId:121,tocIndex:30},{value:" \u6587\u4EF6\uFF1A",paraId:121,tocIndex:30},{value:`import { SchemaInitializerItemType, useSchemaInitializer } from "@nocobase/client";
import { submitActionSchema } from "./schema";
import { tStr } from '../../../locale';

export const submitActionInitializerItem: SchemaInitializerItemType = {
  type: 'item',
  name: 'submit',
  title: tStr('Submit'),
  useComponentProps() {
    const { insert } = useSchemaInitializer();
    return {
      onClick() {
        insert(submitActionSchema)
      },
    };
  },
};
`,paraId:122,tocIndex:30},{value:"type: 'item'",paraId:123,tocIndex:30},{value:"\uFF1A\u7C7B\u578B\u4E3A ",paraId:123,tocIndex:30},{value:"item",paraId:123,tocIndex:30},{value:"\uFF0C\u8868\u793A\u6587\u672C\uFF0C\u5F53\u70B9\u51FB\u540E\u4F1A\u89E6\u53D1 ",paraId:123,tocIndex:30},{value:"onClick",paraId:123,tocIndex:30},{value:" \u4E8B\u4EF6",paraId:123,tocIndex:30},{value:"name: 'submit'",paraId:123,tocIndex:30},{value:"\uFF1A\u552F\u4E00\u6807\u8BC6\u7B26\uFF0C\u7528\u4E8E\u533A\u5206\u4E0D\u540C\u7684 Schema Item \u548C\u589E\u5220\u6539\u67E5\u64CD\u4F5C",paraId:123,tocIndex:30},{value:"title: 'Submit'",paraId:123,tocIndex:30},{value:"\uFF1A\u6309\u94AE\u6807\u9898",paraId:123,tocIndex:30},{value:"\u66F4\u591A\u5173\u4E8E Schema Item \u7684\u5B9A\u4E49\u53EF\u4EE5\u53C2\u8003 ",paraId:124,tocIndex:30},{value:"Schema Initializer Item",paraId:124,tocIndex:30},{value:" \u6587\u6863\u3002",paraId:124,tocIndex:30},{value:"\u7136\u540E\u4FEE\u6539 ",paraId:125,tocIndex:30},{value:"packages/plugins/@nocobase-sample/plugin-block-form/src/client/FormV3.configActions/items/submit/index.ts",paraId:125,tocIndex:30},{value:" \u5C06\u5176\u5BFC\u51FA\uFF1A",paraId:125,tocIndex:30},{value:`export * from './initializer';
`,paraId:126,tocIndex:30},{value:"\u6211\u4EEC\u4FEE\u6539 ",paraId:127,tocIndex:31},{value:"packages/plugins/@nocobase-sample/plugin-block-form/src/client/FormV3.configActions/index.ts",paraId:127,tocIndex:31},{value:" \u6587\u4EF6\uFF0C\u5C06 ",paraId:127,tocIndex:31},{value:"submitActionInitializerItem",paraId:127,tocIndex:31},{value:" \u6DFB\u52A0\u5230 ",paraId:127,tocIndex:31},{value:"items",paraId:127,tocIndex:31},{value:" \u4E2D\uFF1A",paraId:127,tocIndex:31},{value:`// ...
+ import { submitActionInitializerItem } from "./items/submit";

export const formV3ConfigureActionsInitializer = new SchemaInitializer({
  name: \`\${FormV3BlockNameLowercase}:configureActions\`,
  icon: 'SettingOutlined',
  title: 'Configure actions',
  style: {
    marginLeft: 8,
  },
  items: [
+   submitActionInitializerItem,
  ]
});
`,paraId:128,tocIndex:31},{value:"\u6211\u4EEC\u65B0\u5EFA ",paraId:129,tocIndex:32},{value:"packages/plugins/@nocobase-sample/plugin-block-form/src/client/FormV3.configActions/items/submit/settings.ts",paraId:129,tocIndex:32},{value:`import { ButtonEditor, SchemaSettings, useSchemaToolbar } from "@nocobase/client";

export const formV3SubmitActionSettings = new SchemaSettings({
  name: \`actionSettings:formV3Submit\`,
  items: [
    {
      name: 'editButton',
      Component: ButtonEditor,
      useComponentProps() {
        const { buttonEditorProps } = useSchemaToolbar();
        return buttonEditorProps;
      },
    },
    {
      name: 'remove',
      type: 'remove',
    }
  ]
})
`,paraId:130,tocIndex:32},{value:"formV3SubmitActionSettings",paraId:131,tocIndex:32},{value:"\uFF1A",paraId:131,tocIndex:32},{value:"editButton",paraId:132,tocIndex:32},{value:"\uFF1A\u7528\u4E8E\u7F16\u8F91\u6309\u94AE\u7684\u6837\u5F0F\u3002",paraId:132,tocIndex:32},{value:"remove",paraId:132,tocIndex:32},{value:"\uFF1A\u7528\u4E8E\u5220\u9664",paraId:132,tocIndex:32},{value:"\u66F4\u591A\u5173\u4E8E Schema Settings \u7684\u5B9A\u4E49\u53EF\u4EE5\u53C2\u8003 ",paraId:133,tocIndex:32},{value:"Schema Settings",paraId:133,tocIndex:32},{value:" \u6587\u6863\u3002",paraId:133,tocIndex:32},{value:"\u4FEE\u6539 ",paraId:134,tocIndex:32},{value:"packages/plugins/@nocobase-sample/plugin-block-form/src/client/FormV3.configActions/items/submit/index.ts",paraId:134,tocIndex:32},{value:" \u5C06\u5176\u5BFC\u51FA\uFF1A",paraId:134,tocIndex:32},{value:`export * from './settings';
`,paraId:135,tocIndex:32},{value:"\u7136\u540E\u5C06 ",paraId:136,tocIndex:33},{value:"formV3SubmitActionSettings",paraId:136,tocIndex:33},{value:" \u6CE8\u518C\u5230\u7CFB\u7EDF\u4E2D\u3002\u6211\u4EEC\u4FEE\u6539 ",paraId:136,tocIndex:33},{value:"packages/plugins/@nocobase-sample/plugin-block-form/src/client/index.tsx",paraId:136,tocIndex:33},{value:" \u6587\u4EF6\uFF1A",paraId:136,tocIndex:33},{value:`- import { useFormV3SubmitActionProps } from './FormV3.configActions/items/submit';
+ import { formV3SubmitActionSettings, useFormV3SubmitActionProps } from './FormV3.configActions/items/submit';

export class PluginBlockFormClient extends Plugin {
  async load() {
+   this.app.schemaSettingsManager.add(formV3SubmitActionSettings);
  }
}
`,paraId:137,tocIndex:33},{value:"\u6211\u4EEC\u4FEE\u6539 ",paraId:138,tocIndex:34},{value:"packages/plugins/@nocobase-sample/plugin-block-form/src/client/FormV3.configActions/items/submit/schema.ts",paraId:138,tocIndex:34},{value:" \u6587\u4EF6\u7684 ",paraId:138,tocIndex:34},{value:"submitActionSchema",paraId:138,tocIndex:34},{value:" \u65B9\u6CD5\uFF0C\u5C06 ",paraId:138,tocIndex:34},{value:"x-settings",paraId:138,tocIndex:34},{value:" \u8BBE\u7F6E\u4E3A ",paraId:138,tocIndex:34},{value:"formV3SubmitActionSettings.name",paraId:138,tocIndex:34},{value:"\u3002",paraId:138,tocIndex:34},{value:`+ import { formV3SubmitActionSettings } from './settings';

export const submitActionSchema = {
  type: 'void',
  title: tStr('Submit'),
  'x-component': 'Action',
+ 'x-settings': formV3SubmitActionSettings.name,
  'x-use-component-props': 'useFormV3SubmitActionProps',
  'x-toolbar': 'ActionSchemaToolbar'
};
`,paraId:139,tocIndex:34},{value:`
  `,paraId:0},{value:"Custom request",paraId:0},{value:"Custom request",paraId:140,tocIndex:35},{value:" \u662F\u4E00\u4E2A\u5E38\u89C1\u7684\u64CD\u4F5C\uFF0CNocoBase \u5185\u7F6E\u4E86 ",paraId:140,tocIndex:35},{value:"CustomRequest",paraId:140,tocIndex:35},{value:" \u7EC4\u4EF6\uFF0C\u6211\u4EEC\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\u3002",paraId:140,tocIndex:35},{value:"\u6211\u4EEC\u4FEE\u6539 ",paraId:141,tocIndex:35},{value:"packages/plugins/@nocobase-sample/plugin-block-form/src/client/FormV3.configActions/index.ts",paraId:141,tocIndex:35},{value:"\uFF1A",paraId:141,tocIndex:35},{value:`
import { SchemaInitializer } from "@nocobase/client";
import { FormV3BlockNameLowercase } from "../constants";
import { submitActionInitializerItem } from "./items/submit";
+ import { tStr } from '../locale'

export const formV3ConfigureActionsInitializer = new SchemaInitializer({
  name: \`\${FormV3BlockNameLowercase}:configureActions\`,
  icon: 'SettingOutlined',
  title: 'Configure actions',
  style: {
    marginLeft: 8,
  },
  items: [
    submitActionInitializerItem,
+   {
+     name: 'customRequest',
+     title: tStr('Custom request'),
+     Component: 'CustomRequestInitializer',
+   },
  ]
});
`,paraId:142,tocIndex:35},{value:"Configure fields",paraId:0},{value:"Configure fields",paraId:143,tocIndex:36},{value:" \u7684\u4F5C\u7528\u662F\u5411 FormV3 \u533A\u5757\u6DFB\u52A0\u6570\u636E\u5B57\u6BB5\u3002",paraId:143,tocIndex:36},{value:"\u6211\u4EEC\u65B0\u5EFA ",paraId:144,tocIndex:37},{value:"packages/plugins/@nocobase-sample/plugin-block-form/src/client/FormV3.configFields/index.ts",paraId:144,tocIndex:37},{value:" \u6587\u4EF6\uFF1A",paraId:144,tocIndex:37},{value:`import { gridRowColWrap, SchemaInitializer } from "@nocobase/client";
import { FormV3BlockNameLowercase } from '../constants';

export const formV3ConfigureFieldsInitializer = new SchemaInitializer({
  name: \`\${FormV3BlockNameLowercase}:configureFields\`,
  icon: 'SettingOutlined',
  wrap: gridRowColWrap,
  title: tStr('Configure fields'),
  items: [
    // TODO
  ]
});
`,paraId:145,tocIndex:37},{value:"formV3ConfigureFieldsInitializer",paraId:146,tocIndex:37},{value:"\uFF1A",paraId:146,tocIndex:37},{value:"name",paraId:147,tocIndex:37},{value:"\uFF1A\u552F\u4E00\u6807\u8BC6\u7B26",paraId:147,tocIndex:37},{value:"icon",paraId:147,tocIndex:37},{value:"\uFF1A\u56FE\u6807",paraId:147,tocIndex:37},{value:"wrap",paraId:147,tocIndex:37},{value:"\uFF1A\u6211\u4EEC\u5C06\u6BCF\u4E2A\u5B57\u6BB5\u5305\u88F9\u5728 ",paraId:147,tocIndex:37},{value:"Grid",paraId:147,tocIndex:37},{value:" \u4E2D\uFF0C\u8FD9\u6837\u53EF\u4EE5\u65B9\u4FBF\u5E03\u5C40\u548C\u62D6\u62FD",paraId:147,tocIndex:37},{value:"title",paraId:147,tocIndex:37},{value:"\uFF1A\u6807\u9898",paraId:147,tocIndex:37},{value:"items",paraId:147,tocIndex:37},{value:"\uFF1A\u5B50\u9879",paraId:147,tocIndex:37},{value:"\u66F4\u591A\u5173\u4E8E Schema Item \u7684\u5B9A\u4E49\u53EF\u4EE5\u53C2\u8003 ",paraId:148,tocIndex:37},{value:"Schema Initializer Item",paraId:148,tocIndex:37},{value:" \u6587\u6863\u3002",paraId:148,tocIndex:37},{value:"\u7136\u540E\u4FEE\u6539 ",paraId:149,tocIndex:38},{value:"packages/plugins/@nocobase-sample/plugin-block-form/src/client/index.tsx",paraId:149,tocIndex:38},{value:" \u6587\u4EF6\uFF0C\u5BFC\u5165\u5E76\u6CE8\u518C\u8FD9\u4E2A initializer\uFF1A",paraId:149,tocIndex:38},{value:`+ import { formV3ConfigureFieldsInitializer } from './FormV3.configFields';

export class PluginBlockFormClient extends Plugin {
  async load() {
-   this.app.schemaInitializerManager.add(formV3ConfigureActionsInitializer);
+   this.app.schemaInitializerManager.add(formV3ConfigureActionsInitializer, formV3ConfigureFieldsInitializer);
    // ...
  }
}
`,paraId:150,tocIndex:38},{value:"\u6211\u4EEC\u4FEE\u6539 ",paraId:151,tocIndex:39},{value:"packages/plugins/@nocobase-sample/plugin-block-form/src/client/FormV3.schema.ts",paraId:151,tocIndex:39},{value:" \u6587\u4EF6\uFF0C\u65B0\u589E ",paraId:151,tocIndex:39},{value:"fields",paraId:151,tocIndex:39},{value:" \u5B50\u8282\u70B9\uFF1A",paraId:151,tocIndex:39},{value:`// ...
+ import { formV3ConfigureFieldsInitializer } from "./FormV3.configFields";

export function getFormV3Schema(options: GetFormV3SchemaOptions): ISchema {
  const { dataSource, collection, properties = {} } = options;
  return {
    type: 'void',
    'x-component': 'CardItem',
    'x-decorator': 'DataBlockProvider',
    'x-decorator-props': {
      dataSource,
      collection,
      [FormV3BlockNameLowercase]: {},
    },
    'x-settings': formV3Settings.name,
    "x-toolbar": "BlockSchemaToolbar",
    properties: {
      [FormV3BlockNameLowercase]: {
        type: 'void',
        'x-component': FormV3BlockName,
        'x-use-component-props': 'useFormV3Props',
        properties: {
          ...properties as any,
+         fields: {
+           "type": "void",
+           "x-component": "Grid",
+           "x-initializer": formV3ConfigureFieldsInitializer.name
+         },
          actionBar: {
            type: 'void',
            "x-initializer": formV3ConfigureActionsInitializer.name,
            "x-component": "ActionBar",
            "x-component-props": {
              "layout": "one-column",
              "style": {
                "marginTop": 24
              }
            },
          },
        }
      }
    }
  }
}
`,paraId:152,tocIndex:39},{value:"\u4E3A\u4E86\u65B9\u4FBF\u5E03\u5C40\uFF0C\u6211\u4EEC\u5C06\u5176\u5305\u88F9\u5728 ",paraId:153,tocIndex:39},{value:"Grid",paraId:153,tocIndex:39},{value:" \u4E2D\uFF0C\u8FD9\u6837\u53EF\u4EE5\u65B9\u4FBF\u5E03\u5C40\u548C\u62D6\u62FD\u3002",paraId:153,tocIndex:39},{value:"Configure fields",paraId:0},{value:"Collection Fields",paraId:0},{value:"Configure fields",paraId:154,tocIndex:41},{value:" \u4E3B\u8981\u662F\u57FA\u4E8E ",paraId:154,tocIndex:41},{value:"CollectionFieldsToInitializerItems",paraId:154,tocIndex:41},{value:" \u5B9E\u73B0\u3002",paraId:154,tocIndex:41},{value:"\u6211\u4EEC\u8FD9\u91CC\u53EF\u4EE5\u76F4\u63A5\u5185\u6838\u63D0\u4F9B\u7684 ",paraId:155,tocIndex:41},{value:"CollectionFieldsToFormInitializerItems",paraId:155,tocIndex:41},{value:"\uFF0C\u5B83\u7684\u4F5C\u7528\u5C31\u662F\u5C06\u6570\u636E\u8868\u7684\u5B57\u6BB5\u8F6C\u6362\u4E3A ",paraId:155,tocIndex:41},{value:"Initializer",paraId:155,tocIndex:41},{value:" \u7684\u5B50\u9879\u3002",paraId:155,tocIndex:41},{value:"\u6211\u4EEC\u4FEE\u6539 ",paraId:156,tocIndex:41},{value:"packages/plugins/@nocobase-sample/plugin-block-form/src/client/FormV3.configFields/index.ts",paraId:156,tocIndex:41},{value:" \u6587\u4EF6\uFF1A",paraId:156,tocIndex:41},{value:`- import { gridRowColWrap, SchemaInitializer } from "@nocobase/client";
+ import { gridRowColWrap, SchemaInitializer, CollectionFieldsToFormInitializerItems } from "@nocobase/client";

export const formV3ConfigureFieldsInitializer = new SchemaInitializer({
  name: \`\${FormV3BlockNameLowercase}:configureFields\`,
  icon: 'SettingOutlined',
  wrap: gridRowColWrap,
  title: 'Configure fields',
  items: [
+   {
+     name: 'collectionFields',
+     Component: CollectionFieldsToFormInitializerItems,
+   },
  ]
});
`,paraId:157,tocIndex:41},{value:"name: 'collectionFields'",paraId:158,tocIndex:41},{value:"\uFF1A\u552F\u4E00\u6807\u8BC6\u7B26",paraId:158,tocIndex:41},{value:"Component: CollectionFieldsToFormInitializerItems",paraId:158,tocIndex:41},{value:"\uFF1A\u5185\u6838\u63D0\u4F9B\u7684\u7EC4\u4EF6\uFF0C\u7528\u4E8E\u5C06\u6570\u636E\u8868\u7684\u5B57\u6BB5\u8F6C\u6362 FormItem \u7C7B\u578B\u7684 Initializer \u5B50\u9879",paraId:158,tocIndex:41},{value:`
  `,paraId:0},{value:"Add text",paraId:0},{value:"\u5411\u754C\u9762\u6DFB\u52A0\u6587\u672C\uFF0C\u8FD9\u662F\u4E00\u4E2A\u5E38\u89C1\u7684\u9700\u6C42\u3002\u56E0\u6B64\uFF0CNocoBase \u5728 ",paraId:159,tocIndex:42},{value:"@nocobase/client",paraId:159,tocIndex:42},{value:" \u4E2D\u63D0\u4F9B\u4E86 ",paraId:159,tocIndex:42},{value:"MarkdownFormItemInitializer",paraId:159,tocIndex:42},{value:" \u6765\u5B9E\u73B0\u6B64\u529F\u80FD\u3002",paraId:159,tocIndex:42},{value:"\u6211\u4EEC\u4FEE\u6539 ",paraId:160,tocIndex:42},{value:"packages/plugins/@nocobase-sample/plugin-block-form/src/client/FormV3.configFields/index.ts",paraId:160,tocIndex:42},{value:" \u6587\u4EF6\uFF1A",paraId:160,tocIndex:42},{value:`// ...
+ import { tStr } from '../locale'

export const formV3ConfigureFieldsInitializer = new SchemaInitializer({
  name: \`\${FormV3BlockNameLowercase}:configureFields\`,
  icon: 'SettingOutlined',
  wrap: gridRowColWrap,
  title: 'Configure fields',
  items: [
    {
      name: 'collectionFields',
      Component: CollectionFieldsToFormInitializerItems,
    },
+   {
+     name: 'divider',
+     type: 'divider',
+   },
+   {
+     name: 'addText',
+     title: tStr('Add text'),
+     Component: 'MarkdownFormItemInitializer',
+   },
  ]
});
`,paraId:161,tocIndex:42},{value:`
  `,paraId:0},{value:"TODO",paraId:162,tocIndex:43},{value:"\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7 ",paraId:163,tocIndex:44},{value:"http://localhost:13000/admin/settings/system-settings",paraId:163,tocIndex:44},{value:" \u6DFB\u52A0\u591A\u4E2A\u8BED\u8A00\uFF0C\u5E76\u4E14\u5728\u53F3\u4E0A\u89D2\u5207\u6362\u8BED\u8A00\u3002",paraId:163,tocIndex:44},{value:"\u7531\u4E8E FormV3 \u6240\u4F7F\u7528\u7684\u6587\u6848\u548C FormV2 \u76F8\u540C\uFF0C\u5DF2\u7ECF\u505A\u4E86\u591A\u8BED\u8A00\u5904\u7406\uFF0C\u6240\u4EE5\u8FD9\u91CC\u5E76\u6CA1\u6709\u4EC0\u4E48\u9700\u8981\u66F4\u6539\u7684\u3002",paraId:164,tocIndex:44},{value:"\u6309\u7167 ",paraId:165,tocIndex:45},{value:"\u6784\u5EFA\u5E76\u6253\u5305\u63D2\u4EF6",paraId:166,tocIndex:45},{value:" \u6587\u6863\u8BF4\u660E\uFF0C\u6211\u4EEC\u53EF\u4EE5\u6253\u5305\u63D2\u4EF6\u5E76\u4E0A\u4F20\u5230\u751F\u4EA7\u73AF\u5883\u3002",paraId:165,tocIndex:45},{value:"\u5982\u679C\u662F clone \u7684\u6E90\u7801\uFF0C\u9700\u8981\u5148\u6267\u884C\u4E00\u6B21\u5168\u91CF build\uFF0C\u5C06\u63D2\u4EF6\u7684\u4F9D\u8D56\u4E5F\u6784\u5EFA\u597D\u3002",paraId:167,tocIndex:45},{value:`yarn build
`,paraId:168,tocIndex:45},{value:"\u5982\u679C\u662F\u4F7F\u7528\u7684 ",paraId:169,tocIndex:45},{value:"create-nocobase-app",paraId:169,tocIndex:45},{value:" \u521B\u5EFA\u7684\u9879\u76EE\uFF0C\u53EF\u4EE5\u76F4\u63A5\u6267\u884C\uFF1A",paraId:169,tocIndex:45},{value:`yarn build @nocobase-sample/plugin-block-form --tar
`,paraId:170,tocIndex:45},{value:"\u8FD9\u6837\u5C31\u53EF\u4EE5\u770B\u5230 ",paraId:171,tocIndex:45},{value:"storage/tar/@nocobase-sample/plugin-block-form.tar.gz",paraId:171,tocIndex:45},{value:" \u6587\u4EF6\u4E86\uFF0C\u7136\u540E\u901A\u8FC7",paraId:171,tocIndex:45},{value:"\u4E0A\u4F20\u7684\u65B9\u5F0F",paraId:172,tocIndex:45},{value:"\u8FDB\u884C\u5B89\u88C5\u3002",paraId:171,tocIndex:45}]}}]);
