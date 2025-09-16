"use strict";(self.webpackChunknocobase_docs=self.webpackChunknocobase_docs||[]).push([[34276],{434276:function(o,e,a){a.r(e),a.d(e,{texts:function(){return n}});const n=[{value:"Carousel",paraId:0},{value:"NocoBase \u6709\u5F88\u591A ",paraId:1,tocIndex:1},{value:"Add block",paraId:1,tocIndex:1},{value:" \u6309\u94AE\u7528\u4E8E\u5411\u754C\u9762\u6DFB\u52A0\u533A\u5757\uFF0C\u4F46\u662F\u76EE\u524D\u5DF2\u6709\u7684\u533A\u5757\u7C7B\u578B\u4E0D\u4E00\u5B9A\u6EE1\u8DB3\u6211\u4EEC\u7684\u9700\u6C42\uFF0C\u6211\u4EEC\u5C31\u9700\u8981\u6839\u636E\u9700\u6C42\u81EA\u5B9A\u5F00\u53D1\u4E00\u4E9B\u533A\u5757\u3002",paraId:1,tocIndex:1},{value:"\u5176\u4E2D\u6709\u4E9B\u548C\u6570\u636E\u8868\u6709\u5173\u7CFB\u7684\u88AB\u6210\u4E3A\u6570\u636E\u533A\u5757 ",paraId:2,tocIndex:1},{value:"Data Block",paraId:2,tocIndex:1},{value:"\uFF0C\u6709\u4E9B\u548C\u6570\u636E\u8868\u65E0\u5173\u7684\u88AB\u79F0\u4E3A\u7B80\u5355\u533A\u5757 ",paraId:2,tocIndex:1},{value:"Simple Block",paraId:2,tocIndex:1},{value:"\uFF0C\u672C\u7BC7\u6587\u7AE0\u5C31\u662F\u9488\u5BF9\u7B80\u5355\u533A\u5757 ",paraId:2,tocIndex:1},{value:"Simple Block",paraId:2,tocIndex:1},{value:" \u4E3E\u4F8B\u8BF4\u660E\u3002",paraId:2,tocIndex:1},{value:"\u672C\u5B9E\u4F8B\u4F1A\u57FA\u4E8E ant-design \u7684 ",paraId:3,tocIndex:2},{value:"Carousel",paraId:3,tocIndex:2},{value:" \u7EC4\u4EF6\u521B\u5EFA ",paraId:3,tocIndex:2},{value:"Carousel",paraId:3,tocIndex:2},{value:" \u533A\u5757\uFF0C\u5E76\u5C06\u5176\u6DFB\u52A0\u5230 ",paraId:3,tocIndex:2},{value:"Page",paraId:3,tocIndex:2},{value:"\u3001",paraId:3,tocIndex:2},{value:"Table",paraId:3,tocIndex:2},{value:" \u4EE5\u53CA\u79FB\u52A8\u7AEF\u7684 ",paraId:3,tocIndex:2},{value:"Add block",paraId:3,tocIndex:2},{value:" \u4E2D\u3002",paraId:3,tocIndex:2},{value:"\u672C\u6587\u6863\u5B8C\u6574\u7684\u793A\u4F8B\u4EE3\u7801\u53EF\u4EE5\u5728 ",paraId:4,tocIndex:2},{value:"plugin-samples",paraId:4,tocIndex:2},{value:" \u4E2D\u67E5\u770B\u3002",paraId:4,tocIndex:2},{value:`
  `,paraId:0},{value:"\u6211\u4EEC\u6309\u7167 ",paraId:5,tocIndex:3},{value:"\u7F16\u5199\u7B2C\u4E00\u4E2A\u63D2\u4EF6",paraId:6,tocIndex:3},{value:" \u6587\u6863\u8BF4\u660E\uFF0C\u5982\u679C\u6CA1\u6709\u4E00\u4E2A\u9879\u76EE\uFF0C\u53EF\u4EE5\u5148\u521B\u5EFA\u4E00\u4E2A\u9879\u76EE\uFF0C\u5982\u679C\u5DF2\u7ECF\u6709\u4E86\u6216\u8005\u662F clone \u7684\u6E90\u7801\uFF0C\u5219\u8DF3\u8FC7\u8FD9\u4E00\u6B65\u3002",paraId:5,tocIndex:3},{value:`yarn create nocobase-app my-nocobase-app -d postgres
cd my-nocobase-app
yarn install
yarn nocobase install
`,paraId:7,tocIndex:3},{value:"\u7136\u540E\u521D\u59CB\u5316\u4E00\u4E2A\u63D2\u4EF6\uFF0C\u5E76\u6DFB\u52A0\u5230\u7CFB\u7EDF\u4E2D\uFF1A",paraId:8,tocIndex:3},{value:`yarn pm create @nocobase-sample/plugin-block-carousel
yarn pm enable @nocobase-sample/plugin-block-carousel
`,paraId:9,tocIndex:3},{value:"\u7136\u540E\u542F\u52A8\u9879\u76EE\u5373\u53EF\uFF1A",paraId:10,tocIndex:3},{value:`yarn dev
`,paraId:11,tocIndex:3},{value:"\u7136\u540E\u767B\u5F55\u540E\u8BBF\u95EE ",paraId:12,tocIndex:3},{value:"http://localhost:13000/admin/pm/list/locale/",paraId:12,tocIndex:3},{value:" \u5C31\u53EF\u4EE5\u770B\u5230\u63D2\u4EF6\u5DF2\u7ECF\u5B89\u88C5\u5E76\u542F\u7528\u4E86\u3002",paraId:12,tocIndex:3},{value:"\u5728\u5B9E\u73B0\u672C\u793A\u4F8B\u4E4B\u524D\uFF0C\u6211\u4EEC\u9700\u8981\u5148\u4E86\u89E3\u4E00\u4E9B\u57FA\u7840\u77E5\u8BC6\uFF1A",paraId:13,tocIndex:4},{value:"ant-design Carousel",paraId:14,tocIndex:4},{value:"SchemaInitializer \u6559\u7A0B",paraId:15,tocIndex:4},{value:"\uFF1A\u7528\u4E8E\u5411\u754C\u9762\u5185\u6DFB\u52A0\u5404\u79CD\u533A\u5757\u3001\u5B57\u6BB5\u3001\u64CD\u4F5C\u7B49",paraId:14,tocIndex:4},{value:"SchemaInitializer API",paraId:14,tocIndex:4},{value:"\uFF1A\u7528\u4E8E\u5411\u754C\u9762\u5185\u6DFB\u52A0\u5404\u79CD\u533A\u5757\u3001\u5B57\u6BB5\u3001\u64CD\u4F5C\u7B49",paraId:14,tocIndex:4},{value:"UI Schema \u534F\u8BAE",paraId:16,tocIndex:4},{value:"\uFF1A\u8BE6\u7EC6\u4ECB\u7ECD Schema \u7684\u7ED3\u6784\u548C\u6BCF\u4E2A\u5C5E\u6027\u7684\u4F5C\u7528",paraId:14,tocIndex:4},{value:"Designable \u8BBE\u8BA1\u5668",paraId:17,tocIndex:4},{value:"\uFF1A\u7528\u4E8E\u4FEE\u6539 Schema",paraId:14,tocIndex:4},{value:`.
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
`,paraId:18,tocIndex:4},{value:"\u6211\u4EEC\u9996\u5148\u9700\u8981\u5B9A\u4E49\u533A\u5757\u540D\u79F0\uFF0C\u5B83\u5C06\u4F1A\u4F7F\u7528\u5728\u5404\u4E2A\u5730\u65B9\u3002",paraId:19,tocIndex:5},{value:"\u6211\u4EEC\u65B0\u5EFA ",paraId:20,tocIndex:5},{value:"packages/plugins/@nocobase-sample/plugin-block-carousel/src/client/constants.ts",paraId:20,tocIndex:5},{value:"\uFF1A",paraId:20,tocIndex:5},{value:`export const BlockName = 'Carousel';
export const BlockNameLowercase = BlockName.toLowerCase();
`,paraId:21,tocIndex:5},{value:"\u6211\u4EEC\u65B0\u5EFA ",paraId:22,tocIndex:7},{value:"packages/plugins/@nocobase-sample/plugin-block-carousel/src/client/component/Carousel.tsx",paraId:22,tocIndex:7},{value:" \u6587\u4EF6\uFF0C\u5176\u5185\u5BB9\u5982\u4E0B\uFF1A",paraId:22,tocIndex:7},{value:`import React, { FC } from 'react';
import { Carousel as AntdCarousel, Result, CarouselProps as AntdCarouselProps } from 'antd';
import { withDynamicSchemaProps } from '@nocobase/client';
import { BlockName } from './constants';

export interface CarouselProps extends AntdCarouselProps {
  images?: { url: string; title?: string }[];
  /**
   * @default 300
   */
  height?: number;
  /**
   * @default 'cover'
   */
  objectFit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
}

export const Carousel: FC<CarouselProps> = withDynamicSchemaProps((props) => {
  const { images, height = 300, objectFit = 'cover', ...carouselProps } = props;
  return (images && images.length) ? (
    <AntdCarousel {...carouselProps}>
      {images.map((image) => (
        <div key={image.url}>
          <img key={image.title} src={image.url} alt={image.title} style={{ height, width: '100%', objectFit }} />
        </div>
      ))}
    </AntdCarousel>
  ) : <Result status='404' />
}, { displayName: BlockName })

`,paraId:23,tocIndex:7},{value:"Carousel",paraId:24,tocIndex:7},{value:" \u7EC4\u4EF6\u6574\u4F53\u6765\u8BF4\u662F\u4E00\u4E2A\u88AB ",paraId:24,tocIndex:7},{value:"withDynamicSchemaProps",paraId:24,tocIndex:7},{value:" \u5305\u88F9\u7684\u51FD\u6570\u7EC4\u4EF6\uFF0C",paraId:24,tocIndex:7},{value:"withDynamicSchemaProps",paraId:25,tocIndex:7},{value:" \u662F\u4E00\u4E2A\u9AD8\u9636\u7EC4\u4EF6\uFF0C\u7528\u4E8E\u5904\u7406 Schema \u4E2D\u7684\u7684\u52A8\u6001\u5C5E\u6027\u3002",paraId:24,tocIndex:7},{value:"\u5982\u679C\u4E0D\u770B ",paraId:26,tocIndex:7},{value:"withDynamicSchemaProps",paraId:26,tocIndex:7},{value:" \u7684\u8BDD\uFF0C",paraId:26,tocIndex:7},{value:"Carousel",paraId:26,tocIndex:7},{value:" \u7EC4\u4EF6\u5C31\u662F\u4E00\u4E2A\u7B80\u5355\u7684\u51FD\u6570\u7EC4\u4EF6\u3002",paraId:26,tocIndex:7},{value:"\u7136\u540E\u5C06\u5176\u5728 ",paraId:27,tocIndex:7},{value:"packages/plugins/@nocobase-sample/plugin-block-carousel/src/client/component/index.ts",paraId:27,tocIndex:7},{value:" \u4E2D\u5BFC\u51FA\uFF1A",paraId:27,tocIndex:7},{value:`export * from './Carousel';
`,paraId:28,tocIndex:7},{value:"\u6211\u4EEC\u9700\u8981\u5C06 ",paraId:29,tocIndex:8},{value:"Carousel",paraId:29,tocIndex:8},{value:" \u901A\u8FC7\u63D2\u4EF6\u6CE8\u518C\u5230\u7CFB\u7EDF\u4E2D\u3002",paraId:29,tocIndex:8},{value:`import { Plugin } from '@nocobase/client';
import { Carousel } from './component';

export class PluginBlockCarouselClient extends Plugin {
  async load() {
    this.app.addComponents({ Carousel })
  }
}

export default PluginBlockCarouselClient;
`,paraId:30,tocIndex:8},{value:"\u7EC4\u4EF6\u9A8C\u8BC1\u65B9\u5F0F\u6709 2 \u79CD\uFF1A",paraId:31,tocIndex:9},{value:"\u4E34\u65F6\u9875\u9762\u9A8C\u8BC1\uFF1A\u6211\u4EEC\u53EF\u4EE5\u4E34\u65F6\u5EFA\u4E00\u4E2A\u9875\u9762\uFF0C\u7136\u540E\u6E32\u67D3 ",paraId:32,tocIndex:9},{value:"Carousel",paraId:32,tocIndex:9},{value:" \u7EC4\u4EF6\uFF0C\u67E5\u770B\u662F\u5426\u7B26\u5408\u9700\u6C42",paraId:32,tocIndex:9},{value:"\u6587\u6863\u793A\u4F8B\u9A8C\u8BC1\uFF1A\u53EF\u4EE5\u542F\u52A8\u6587\u6863 ",paraId:32,tocIndex:9},{value:"yarn doc plugins/@nocobase-sample/plugin-block-carousel",paraId:32,tocIndex:9},{value:"\uFF0C\u901A\u8FC7\u5199\u6587\u6863\u793A\u4F8B\u7684\u65B9\u5F0F\u9A8C\u8BC1\u662F\u5426\u7B26\u5408\u9700\u6C42\uFF08TODO\uFF09",paraId:32,tocIndex:9},{value:"\u6211\u4EEC\u4EE5 ",paraId:33,tocIndex:9},{value:"\u4E34\u65F6\u9875\u9762\u9A8C\u8BC1",paraId:33,tocIndex:9},{value:" \u4E3A\u4F8B\uFF0C\u6211\u4EEC\u65B0\u5EFA\u4E00\u4E2A\u9875\u9762\uFF0C\u6839\u636E\u5C5E\u6027\u53C2\u6570\u6DFB\u52A0\u4E00\u4E2A\u6216\u8005\u591A\u4E2A ",paraId:33,tocIndex:9},{value:"Carousel",paraId:33,tocIndex:9},{value:" \u7EC4\u4EF6\uFF0C\u67E5\u770B\u662F\u5426\u7B26\u5408\u9700\u6C42\u3002",paraId:33,tocIndex:9},{value:`import React from 'react';
import { Plugin } from '@nocobase/client';
import { Carousel } from './component';

export class PluginBlockCarouselClient extends Plugin {
  async load() {
    this.app.addComponents({ Carousel })

    this.app.router.add('admin.carousel-component', {
      path: '/admin/carousel-component',
      Component: () => {
        const images = [{ url: 'https://picsum.photos/id/1/1200/300' }, { url: 'https://picsum.photos/id/2/1200/300' }];
        return <>
          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <Carousel />
          </div>

          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <Carousel images={images} />
          </div>

          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <Carousel images={images} height={100} />
          </div>

          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <Carousel images={images} objectFit='contain' />
          </div>


          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <Carousel images={images} autoplay />
          </div>
        </>
      }
    });
  }
}

export default PluginBlockCarouselClient;
`,paraId:34,tocIndex:9},{value:"\u7136\u540E\u8BBF\u95EE ",paraId:35,tocIndex:9},{value:"http://localhost:13000/admin/carousel-component",paraId:35,tocIndex:9},{value:" \u5C31\u53EF\u4EE5\u770B\u5230\u5BF9\u5E94\u6D4B\u8BD5\u9875\u9762\u7684\u5185\u5BB9\u4E86\u3002",paraId:35,tocIndex:9},{value:`
  `,paraId:0},{value:"\u9A8C\u8BC1\u5B8C\u6BD5\u540E\u9700\u8981\u5220\u9664\u6D4B\u8BD5\u9875\u9762\u3002",paraId:36,tocIndex:9},{value:"NocoBase \u7684\u52A8\u6001\u9875\u9762\u90FD\u662F\u901A\u8FC7 Schema \u6765\u6E32\u67D3\uFF0C\u6240\u4EE5\u6211\u4EEC\u9700\u8981\u5B9A\u4E49\u4E00\u4E2A Schema\uFF0C\u540E\u7EED\u7528\u4E8E\u5728\u754C\u9762\u4E2D\u6DFB\u52A0 ",paraId:37,tocIndex:11},{value:"Carousel",paraId:37,tocIndex:11},{value:" \u533A\u5757\u3002\u5728\u5B9E\u73B0\u672C\u5C0F\u8282\u4E4B\u524D\uFF0C\u6211\u4EEC\u9700\u8981\u5148\u4E86\u89E3\u4E00\u4E9B\u57FA\u7840\u77E5\u8BC6\uFF1A",paraId:37,tocIndex:11},{value:"UI Schema \u534F\u8BAE",paraId:38,tocIndex:11},{value:"\uFF1A\u8BE6\u7EC6\u4ECB\u7ECD Schema \u7684\u7ED3\u6784\u548C\u6BCF\u4E2A\u5C5E\u6027\u7684\u4F5C\u7528",paraId:39,tocIndex:11},{value:"\u6211\u4EEC\u65B0\u5EFA ",paraId:40,tocIndex:11},{value:"packages/plugins/@nocobase-sample/plugin-block-carousel/src/client/schema/index.ts",paraId:40,tocIndex:11},{value:" \u6587\u4EF6\uFF1A",paraId:40,tocIndex:11},{value:`import { ISchema } from '@nocobase/client';
import { useFieldSchema } from '@formily/react'

import { BlockName, BlockNameLowercase } from '../constants';

export function useCarouselBlockProps() {
  const fieldSchema = useFieldSchema();
  return fieldSchema.parent?.['x-decorator-props']?.[BlockNameLowercase]
}

export const carouselSchema: ISchema = {
  type: 'void',
  'x-component': 'CardItem',
  'x-decorator-props': {
    [BlockNameLowercase]: {},
  },
  properties: {
    carousel: {
      type: 'void',
      'x-component': BlockName,
      'x-use-component-props': 'useCarouselBlockProps'
    }
  }
};
`,paraId:41,tocIndex:11},{value:"carouselSchema",paraId:42,tocIndex:11},{value:"\uFF1A",paraId:42,tocIndex:11},{value:"type",paraId:43,tocIndex:11},{value:"\uFF1A\u7C7B\u578B\uFF0C\u8FD9\u91CC\u662F ",paraId:43,tocIndex:11},{value:"void",paraId:43,tocIndex:11},{value:"\uFF0C\u8868\u793A\u7EAF UI \u8282\u70B9\uFF0C\u6CA1\u6709\u6570\u636E",paraId:43,tocIndex:11},{value:"'x-component': 'CardItem'",paraId:43,tocIndex:11},{value:"\uFF1A",paraId:43,tocIndex:11},{value:"CardItem \u7EC4\u4EF6",paraId:43,tocIndex:11},{value:"\uFF0C\u76EE\u524D\u7684\u533A\u5757\u90FD\u662F\u88AB\u5305\u88F9\u5728\u5361\u7247\u4E2D\u7684\uFF0C\u7528\u4E8E\u63D0\u4F9B\u6837\u5F0F\u3001\u5E03\u5C40\u548C\u62D6\u62FD\u7B49\u529F\u80FD",paraId:43,tocIndex:11},{value:"x-decorator-props",paraId:43,tocIndex:11},{value:"\uFF1A\u7528\u4E8E\u5B58\u50A8 ",paraId:43,tocIndex:11},{value:"Carousel",paraId:43,tocIndex:11},{value:" \u7EC4\u4EF6\u7684\u5C5E\u6027",paraId:43,tocIndex:11},{value:"properties",paraId:43,tocIndex:11},{value:`\uFF1A\u5B50\u8282\u70B9
`,paraId:43,tocIndex:11},{value:"carousel",paraId:44,tocIndex:11},{value:`\uFF1A
`,paraId:44,tocIndex:11},{value:"'x-component': BlockName",paraId:45,tocIndex:11},{value:"\uFF1A",paraId:45,tocIndex:11},{value:"Carousel",paraId:45,tocIndex:11},{value:" \u7EC4\u4EF6",paraId:45,tocIndex:11},{value:"'x-use-component-props': 'useCarouselBlockProps'",paraId:45,tocIndex:11},{value:"\uFF1A\u7528\u4E8E\u52A8\u6001\u83B7\u53D6 ",paraId:45,tocIndex:11},{value:"Carousel",paraId:45,tocIndex:11},{value:" \u7EC4\u4EF6\u7684\u5C5E\u6027",paraId:45,tocIndex:11},{value:"\u4E0A\u8FF0 Schema \u8F6C\u4E3A React \u7EC4\u4EF6\u540E\u76F8\u5F53\u4E8E\uFF1A",paraId:46,tocIndex:11},{value:`<CardItem>
  <Carousel {...useCarouselBlockProps()} />
</CardItem>
`,paraId:47,tocIndex:11},{value:"\u6211\u4EEC\u9700\u8981\u5C06 ",paraId:48,tocIndex:12},{value:"useCarouselBlockProps",paraId:48,tocIndex:12},{value:" \u6CE8\u518C\u5230\u7CFB\u7EDF\u4E2D\uFF0C\u8FD9\u6837 ",paraId:48,tocIndex:12},{value:"x-use-component-props",paraId:49,tocIndex:12},{value:" \u624D\u80FD\u627E\u5230\u5BF9\u5E94\u7684 scope\u3002",paraId:48,tocIndex:12},{value:`import { Plugin } from '@nocobase/client';
import { Carousel } from './component';
import { useCarouselBlockProps } from './schema';

export class PluginBlockCarouselClient extends Plugin {
  async load() {
    this.app.addComponents({ Carousel })
    this.app.addScopes({ useCarouselBlockProps });
  }
}

export default PluginBlockCarouselClient;
`,paraId:50,tocIndex:12},{value:"\u66F4\u591A\u5173\u4E8E Scope \u7684\u8BF4\u660E\u53EF\u4EE5\u67E5\u770B ",paraId:51,tocIndex:12},{value:"\u5168\u5C40\u6CE8\u518C Component \u548C Scope",paraId:52,tocIndex:12},{value:"\u540C\u9A8C\u8BC1\u7EC4\u4EF6\u4E00\u6837\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u4E34\u65F6\u9875\u9762\u9A8C\u8BC1\u6216\u8005\u6587\u6863\u793A\u4F8B\u9A8C\u8BC1\u7684\u65B9\u5F0F\u6765\u9A8C\u8BC1 Schema \u662F\u5426\u7B26\u5408\u9700\u6C42\u3002\u6211\u4EEC\u8FD9\u91CC\u4EE5\u4E34\u65F6\u9875\u9762\u9A8C\u8BC1\u4E3A\u4F8B\uFF1A",paraId:53,tocIndex:13},{value:`import React from 'react';
import { Plugin, SchemaComponent } from '@nocobase/client';
import { Carousel } from './component';
import { carouselSchema } from './schema';

export class PluginBlockCarouselClient extends Plugin {
  async load() {
    this.app.addComponents({ Carousel })
    this.app.addScopes({ useCarouselBlockProps });

    this.app.router.add('admin.carousel-schema', {
      path: '/admin/carousel-schema',
      Component: () => {
        const images = [{ url: 'https://picsum.photos/id/1/1200/300' }, { url: 'https://picsum.photos/id/2/1200/300' }];
        return <>
          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <SchemaComponent schema={{ properties: { test1: carouselSchema } }} />
          </div>
          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <SchemaComponent schema={{ properties: { test2: { ...carouselSchema, 'x-decorator-props': { carousel: { images, height: 100 } } } } }} />
          </div>
          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <SchemaComponent schema={{ properties: { test3: { ...carouselSchema, 'x-decorator-props': { carousel: { images, objectFit: 'contain' } } } } }} />
          </div>
          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <SchemaComponent schema={{ properties: { test4: { ...carouselSchema, 'x-decorator-props': { carousel: { images, autoplay: true } } } } }} />
          </div>
        </>
      }
    });
  }
}

export default PluginBlockCarouselClient;
`,paraId:54,tocIndex:13},{value:"\u5173\u4E8E ",paraId:55,tocIndex:13},{value:"SchemaComponent",paraId:55,tocIndex:13},{value:" \u7684\u8BE6\u7EC6\u8BF4\u660E\u53EF\u4EE5\u67E5\u770B ",paraId:55,tocIndex:13},{value:"SchemaComponent",paraId:55,tocIndex:13},{value:" \u6587\u6863\u3002",paraId:55,tocIndex:13},{value:"\u6211\u4EEC\u8BBF\u95EE ",paraId:56,tocIndex:13},{value:"http://localhost:13000/admin/carousel-schema",paraId:56,tocIndex:13},{value:" \u5C31\u53EF\u4EE5\u770B\u5230\u5BF9\u5E94\u6D4B\u8BD5\u9875\u9762\u7684\u5185\u5BB9\u4E86\u3002",paraId:56,tocIndex:13},{value:`
  `,paraId:0},{value:"\u9A8C\u8BC1\u5B8C\u6BD5\u540E\u9700\u8981\u5220\u9664\u6D4B\u8BD5\u9875\u9762\u3002",paraId:57,tocIndex:13},{value:"\u6211\u4EEC\u65B0\u5EFA ",paraId:58,tocIndex:14},{value:"packages/plugins/@nocobase-sample/plugin-block-carousel/src/client/initializer/index.ts",paraId:58,tocIndex:14},{value:" \u6587\u4EF6\uFF1A",paraId:58,tocIndex:14},{value:`import { SchemaInitializerItemType, useSchemaInitializer } from '@nocobase/client';

import { carouselSchema } from '../schema';
import { BlockName, BlockNameLowercase } from '../constants';
import { useT } from '../locale';

export const carouselInitializerItem: SchemaInitializerItemType = {
  type: 'item',
  name: BlockNameLowercase,
  icon: 'PlayCircleOutlined',
  useComponentProps() {
    const { insert } = useSchemaInitializer();
    const t = useT();
    return {
      title: t(BlockName),
      onClick: () => {
        insert(carouselSchema);
      },
    };
  },
}
`,paraId:59,tocIndex:14},{value:"type",paraId:60,tocIndex:14},{value:"\uFF1A\u7C7B\u578B\uFF0C\u8FD9\u91CC\u662F ",paraId:60,tocIndex:14},{value:"item",paraId:60,tocIndex:14},{value:"\uFF0C\u8868\u793A\u662F\u4E00\u4E2A\u6587\u672C\uFF0C\u5176\u6709\u70B9\u51FB\u4E8B\u4EF6\uFF0C\u70B9\u51FB\u540E\u53EF\u4EE5\u63D2\u5165\u4E00\u4E2A\u65B0\u7684 Schema",paraId:60,tocIndex:14},{value:"name",paraId:60,tocIndex:14},{value:"\uFF1A\u552F\u4E00\u6807\u8BC6\u7B26\uFF0C\u7528\u4E8E\u533A\u5206\u4E0D\u540C\u7684 Schema Item \u548C\u589E\u5220\u6539\u67E5\u64CD\u4F5C",paraId:60,tocIndex:14},{value:"icon",paraId:60,tocIndex:14},{value:"\uFF1A\u56FE\u6807\uFF0C\u66F4\u591A icon \u53EF\u4EE5\u53C2\u8003 ",paraId:60,tocIndex:14},{value:"Ant Design Icons",paraId:60,tocIndex:14},{value:"useComponentProps",paraId:60,tocIndex:14},{value:"\uFF1A\u8FD4\u56DE\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5305\u542B ",paraId:60,tocIndex:14},{value:"title",paraId:60,tocIndex:14},{value:" \u548C ",paraId:60,tocIndex:14},{value:"onClick",paraId:60,tocIndex:14},{value:" \u4E24\u4E2A\u5C5E\u6027\uFF0C",paraId:60,tocIndex:14},{value:"title",paraId:60,tocIndex:14},{value:" \u662F\u663E\u793A\u7684\u6587\u672C\uFF0C",paraId:60,tocIndex:14},{value:"onClick",paraId:60,tocIndex:14},{value:" \u662F\u70B9\u51FB\u540E\u7684\u56DE\u8C03\u51FD\u6570",paraId:60,tocIndex:14},{value:"useSchemaInitializer()",paraId:60,tocIndex:14},{value:"\uFF1A\u7528\u4E8E\u83B7\u53D6 ",paraId:60,tocIndex:14},{value:"SchemaInitializerContext",paraId:60,tocIndex:14},{value:` \u4E0A\u4E0B\u6587
`,paraId:60,tocIndex:14},{value:"insert",paraId:61,tocIndex:14},{value:"\uFF1A\u63D2\u5165\u4E00\u4E2A\u65B0\u7684 Schema",paraId:61,tocIndex:14},{value:"useT()",paraId:60,tocIndex:14},{value:"\uFF1A\u7528\u4E8E\u83B7\u53D6\u591A\u8BED\u8A00\u5DE5\u5177\u51FD\u6570",paraId:60,tocIndex:14},{value:"\u66F4\u591A\u5173\u4E8E Schema Item \u7684\u5B9A\u4E49\u53EF\u4EE5\u53C2\u8003 ",paraId:62,tocIndex:14},{value:"Schema Initializer Item",paraId:62,tocIndex:14},{value:" \u6587\u6863\u3002",paraId:62,tocIndex:14},{value:"\u7CFB\u7EDF\u4E2D\u6709\u5F88\u591A\u4E2A ",paraId:63,tocIndex:15},{value:"Add block",paraId:63,tocIndex:15},{value:" \u6309\u94AE\uFF0C\u4F46\u4ED6\u4EEC\u7684 ",paraId:63,tocIndex:15},{value:"name \u662F\u4E0D\u540C\u7684",paraId:63,tocIndex:15},{value:"\u3002",paraId:63,tocIndex:15},{value:"\u5982\u679C\u6211\u4EEC\u9700\u8981\u6DFB\u52A0\u5230\u9875\u9762\u7EA7\u522B\u7684 ",paraId:64,tocIndex:16},{value:"Add block",paraId:64,tocIndex:16},{value:" \u4E2D\uFF0C\u6211\u4EEC\u9700\u8981\u77E5\u9053\u5BF9\u5E94\u7684 ",paraId:64,tocIndex:16},{value:"name",paraId:64,tocIndex:16},{value:"\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7 TODO \u65B9\u5F0F\u67E5\u770B\u5BF9\u5E94\u7684 ",paraId:64,tocIndex:16},{value:"name",paraId:64,tocIndex:16},{value:"\u3002",paraId:64,tocIndex:16},{value:"TODO",paraId:65,tocIndex:16},{value:"\u901A\u8FC7\u4E0A\u56FE\u53EF\u4EE5\u770B\u5230\u9875\u9762\u7EA7\u522B\u7684 ",paraId:66,tocIndex:16},{value:"Add block",paraId:66,tocIndex:16},{value:" \u5BF9\u5E94\u7684 name \u4E3A ",paraId:66,tocIndex:16},{value:"page:addBlock",paraId:66,tocIndex:16},{value:"\uFF0C",paraId:66,tocIndex:16},{value:"Other Blocks",paraId:66,tocIndex:16},{value:" \u5BF9\u5E94\u7684 name \u4E3A ",paraId:66,tocIndex:16},{value:"otherBlocks",paraId:66,tocIndex:16},{value:"\u3002",paraId:66,tocIndex:16},{value:"\u7136\u540E\u6211\u4EEC\u4FEE\u6539 ",paraId:67,tocIndex:16},{value:"packages/plugins/@nocobase-sample/plugin-block-carousel/src/client/index.tsx",paraId:67,tocIndex:16},{value:" \u6587\u4EF6\uFF1A",paraId:67,tocIndex:16},{value:`import { Plugin } from '@nocobase/client';

import { Carousel } from './component';
import { carouselSchema, useCarouselBlockProps } from './schema';
import { carouselSettings } from './settings';
import { carouselInitializerItem } from './initializer';

export class PluginBlockCarouselClient extends Plugin {
  async load() {
    this.app.addComponents({ Carousel })
    this.app.schemaSettingsManager.add(carouselSettings);
    this.app.addScopes({ useCarouselBlockProps });

    this.app.schemaInitializerManager.addItem('page:addBlock', \`otherBlocks.\${carouselInitializerItem.name}\`, carouselInitializerItem)
  }
}

export default PluginBlockCarouselClient;
`,paraId:68,tocIndex:16},{value:"\u4E0A\u8FF0\u4EE3\u7801\u9996\u5148\u5C06 ",paraId:69,tocIndex:16},{value:"Carousel",paraId:69,tocIndex:16},{value:" \u7EC4\u4EF6\u6CE8\u518C\u5230\u7CFB\u7EDF\u4E2D\uFF0C\u8FD9\u6837\u524D\u9762 ",paraId:69,tocIndex:16},{value:"carouselSchema",paraId:69,tocIndex:16},{value:" \u5B9A\u4E49\u7684 ",paraId:69,tocIndex:16},{value:"x-component: 'Carousel'",paraId:69,tocIndex:16},{value:" \u624D\u80FD\u627E\u5230\u5BF9\u5E94\u7684\u7EC4\u4EF6\uFF0C\u66F4\u591A\u8BE6\u7EC6\u89E3\u91CA\u53EF\u4EE5\u67E5\u770B ",paraId:69,tocIndex:16},{value:"\u5168\u5C40\u6CE8\u518C Component \u548C Scope",paraId:70,tocIndex:16},{value:"\u3002",paraId:69,tocIndex:16},{value:"\u7136\u540E\u5C06 ",paraId:71,tocIndex:16},{value:"carouselSettings",paraId:71,tocIndex:16},{value:" \u901A\u8FC7 ",paraId:71,tocIndex:16},{value:"app.schemaSettingsManager.add",paraId:71,tocIndex:16},{value:" \u6DFB\u52A0\u5230\u7CFB\u7EDF\u4E2D\u3002",paraId:71,tocIndex:16},{value:"\u7136\u540E\u4F7F\u7528 ",paraId:72,tocIndex:16},{value:"app.schemaInitializerManager.addItem",paraId:72,tocIndex:16},{value:" \u5C06 ",paraId:72,tocIndex:16},{value:"carouselInitializerItem",paraId:72,tocIndex:16},{value:" \u6DFB\u52A0\u5BF9\u5E94 Initializer \u5B50\u9879\u4E2D\uFF0C\u5176\u4E2D ",paraId:72,tocIndex:16},{value:"page:addBlock",paraId:72,tocIndex:16},{value:" \u662F\u9875\u9762\u4E0A ",paraId:72,tocIndex:16},{value:"Add block",paraId:72,tocIndex:16},{value:" \u7684 name\uFF0C",paraId:72,tocIndex:16},{value:"otherBlocks",paraId:72,tocIndex:16},{value:" \u662F\u5176\u7236\u7EA7\u7684 name\u3002",paraId:72,tocIndex:16},{value:"\u7136\u540E\u6211\u4EEC hover ",paraId:73,tocIndex:16},{value:"Add block",paraId:73,tocIndex:16},{value:" \u6309\u94AE\uFF0C\u5C31\u53EF\u4EE5\u770B\u5230 ",paraId:73,tocIndex:16},{value:"Image",paraId:73,tocIndex:16},{value:" \u8FD9\u4E2A\u65B0\u7684\u533A\u5757\u7C7B\u578B\u4E86\uFF0C\u70B9\u51FB ",paraId:73,tocIndex:16},{value:"Image",paraId:73,tocIndex:16},{value:"\uFF0C\u5C31\u53EF\u4EE5\u6DFB\u52A0\u4E00\u4E2A\u65B0\u7684 ",paraId:73,tocIndex:16},{value:"Carousel",paraId:73,tocIndex:16},{value:" \u533A\u5757\u4E86\u3002",paraId:73,tocIndex:16},{value:"\u6211\u4EEC\u4E0D\u4EC5\u9700\u8981\u5C06\u5176\u6DFB\u52A0\u5230\u9875\u9762\u7EA7\u522B\u7684 ",paraId:74,tocIndex:17},{value:"Add block",paraId:74,tocIndex:17},{value:" \u4E2D\uFF0C\u8FD8\u9700\u8981\u5C06\u5176\u6DFB\u52A0\u5230 ",paraId:74,tocIndex:17},{value:"Table",paraId:74,tocIndex:17},{value:" \u533A\u5757 ",paraId:74,tocIndex:17},{value:"Add new",paraId:74,tocIndex:17},{value:" \u5F39\u7A97\u7684 ",paraId:74,tocIndex:17},{value:"Add block",paraId:74,tocIndex:17},{value:" \u4E2D\u3002",paraId:74,tocIndex:17},{value:"\u6211\u4EEC\u6309\u7167\u9875\u9762\u7EA7\u522B\u83B7\u53D6 ",paraId:75,tocIndex:17},{value:"name",paraId:75,tocIndex:17},{value:" \u7684\u65B9\u5F0F\u83B7\u53D6\u5230 ",paraId:75,tocIndex:17},{value:"Table",paraId:75,tocIndex:17},{value:" \u533A\u5757\u7684 ",paraId:75,tocIndex:17},{value:"Add block",paraId:75,tocIndex:17},{value:" \u7684 ",paraId:75,tocIndex:17},{value:"name",paraId:75,tocIndex:17},{value:" \u4E3A ",paraId:75,tocIndex:17},{value:"popup:addNew:addBlock",paraId:75,tocIndex:17},{value:"\uFF0C",paraId:75,tocIndex:17},{value:"Other Blocks",paraId:75,tocIndex:17},{value:" \u5BF9\u5E94\u7684 name \u4E3A ",paraId:75,tocIndex:17},{value:"otherBlocks",paraId:75,tocIndex:17},{value:"\u3002",paraId:75,tocIndex:17},{value:"\u7136\u540E\u4FEE\u6539 ",paraId:76,tocIndex:17},{value:"packages/plugins/@nocobase-sample/plugin-block-carousel/src/client/index.tsx",paraId:76,tocIndex:17},{value:" \u6587\u4EF6\uFF1A",paraId:76,tocIndex:17},{value:`export class PluginBlockCarouselClient extends Plugin {
  async load() {
    // ...
+   this.app.schemaInitializerManager.addItem('popup:addNew:addBlock', \`otherBlocks.\${carouselInitializerItem.name}\`, carouselInitializerItem)
  }
}
`,paraId:77,tocIndex:17},{value:"\u9996\u5148\u8981\u6FC0\u6D3B\u79FB\u52A8\u7AEF\u63D2\u4EF6\uFF0C\u53C2\u8003 ",paraId:78,tocIndex:18},{value:"\u6FC0\u6D3B\u63D2\u4EF6",paraId:79,tocIndex:18},{value:" \u6587\u6863\u3002",paraId:78,tocIndex:18},{value:"\u6211\u4EEC\u53EF\u4EE5\u5C06\u5176\u6DFB\u52A0\u5230\u79FB\u52A8\u7AEF\u7684 ",paraId:80,tocIndex:18},{value:"Add block",paraId:80,tocIndex:18},{value:" \u4E2D\uFF0C\u83B7\u53D6 ",paraId:80,tocIndex:18},{value:"name",paraId:80,tocIndex:18},{value:" \u7684\u65B9\u6CD5\u8FD9\u91CC\u5C31\u4E0D\u518D\u8D58\u8FF0\u4E86\u3002",paraId:80,tocIndex:18},{value:"\u7136\u540E\u4FEE\u6539 ",paraId:81,tocIndex:18},{value:"packages/plugins/@nocobase-sample/plugin-block-carousel/src/client/index.tsx",paraId:81,tocIndex:18},{value:" \u6587\u4EF6\uFF1A",paraId:81,tocIndex:18},{value:`export class PluginBlockCarouselClient extends Plugin {
  async load() {
    // ...
+   this.app.schemaInitializerManager.addItem('mobilePage:addBlock', \`otherBlocks.\${carouselInitializerItem.name}\`, carouselInitializerItem)
  }
}
`,paraId:82,tocIndex:18},{value:"\u5982\u679C\u9700\u8981\u66F4\u591A\u7684 ",paraId:83,tocIndex:18},{value:"Add block",paraId:83,tocIndex:18},{value:"\uFF0C\u53EF\u4EE5\u7EE7\u7EED\u6DFB\u52A0\uFF0C\u53EA\u9700\u8981\u77E5\u9053\u5BF9\u5E94\u7684 ",paraId:83,tocIndex:18},{value:"name",paraId:83,tocIndex:18},{value:" \u5373\u53EF\u3002",paraId:83,tocIndex:18},{value:"\u4E00\u4E2A\u5B8C\u6574\u7684 Block \u8FD8\u9700\u8981\u6709 Schema Settings\uFF0C\u7528\u4E8E\u914D\u7F6E\u4E00\u4E9B\u5C5E\u6027\u548C\u64CD\u4F5C\u3002",paraId:84,tocIndex:20},{value:"\u6211\u4EEC\u65B0\u5EFA ",paraId:85,tocIndex:20},{value:"packages/plugins/@nocobase-sample/plugin-block-carousel/src/client/settings/index.ts",paraId:85,tocIndex:20},{value:" \u6587\u4EF6\uFF1A",paraId:85,tocIndex:20},{value:`import { SchemaSettings } from "@nocobase/client";
import { BlockNameLowercase } from '../constants';

export const carouselSettings = new SchemaSettings({
  name: \`blockSettings:\${BlockNameLowercase}\`,
  items: [
    // TODO
  ]
});
`,paraId:86,tocIndex:20},{value:`import { Plugin } from '@nocobase/client';
import { carouselSettings } from './settings';

export class PluginBlockCarouselClient extends Plugin {
  async load() {
    // ...
    this.app.schemaSettingsManager.add(carouselSettings)
  }
}

export default PluginBlockCarouselClient;
`,paraId:87,tocIndex:21},{value:"\u6211\u4EEC\u4FEE\u6539 ",paraId:88,tocIndex:22},{value:"packages/plugins/@nocobase-sample/plugin-block-carousel/src/client/schema/index.ts",paraId:88,tocIndex:22},{value:" \u4E2D\u7684 ",paraId:88,tocIndex:22},{value:"carouselSchema",paraId:88,tocIndex:22},{value:"\uFF1A",paraId:88,tocIndex:22},{value:`+ import { carouselSettings } from "../settings";

const carouselSchema: ISchema = {
  type: 'void',
  'x-decorator': 'CardItem',
+ 'x-settings': carouselSettings.name,
  // ...
};
`,paraId:89,tocIndex:22},{value:"\u76EE\u524D\u6211\u4EEC\u53EA\u5B9E\u73B0\u4E86 ",paraId:90,tocIndex:23},{value:"Schema Settings",paraId:90,tocIndex:23},{value:"\uFF0C\u4F46\u662F\u6CA1\u6709\u5B9E\u73B0\u4EFB\u4F55\u64CD\u4F5C\uFF0C\u6211\u4EEC\u9700\u8981\u6839\u636E\u9700\u6C42\u5B9E\u73B0\u5404\u4E2A\u64CD\u4F5C\u3002",paraId:90,tocIndex:23},{value:"\u76EE\u524D Schema Settings \u652F\u6301\u7684\u5185\u7F6E\u64CD\u4F5C\u7C7B\u578B\u8BF7\u53C2\u8003 ",paraId:91,tocIndex:23},{value:"Schema Settings - Built-in Components and Types",paraId:91,tocIndex:23},{value:" \u6587\u6863\u3002",paraId:91,tocIndex:23},{value:"remove",paraId:0},{value:"\u76EE\u524D\u901A\u8FC7 initializers \u6DFB\u52A0\u7684\u533A\u5757\u662F\u65E0\u6CD5\u5220\u9664\u7684\uFF0C\u6211\u4EEC\u9700\u8981\u5B9E\u73B0 ",paraId:92,tocIndex:24},{value:"remove",paraId:92,tocIndex:24},{value:" \u64CD\u4F5C\u3002",paraId:92,tocIndex:24},{value:"[NocoBase] \u5185\u7F6E\u4E86 ",paraId:93,tocIndex:24},{value:"remove",paraId:93,tocIndex:24},{value:" \u64CD\u4F5C\u7C7B\u578B\uFF0C\u6211\u4EEC\u4FEE\u6539 ",paraId:93,tocIndex:24},{value:"packages/plugins/@nocobase-sample/plugin-block-carousel/src/client/settings/index.ts",paraId:93,tocIndex:24},{value:" \u6587\u4EF6\uFF1A",paraId:93,tocIndex:24},{value:`import { SchemaSettings } from '@nocobase/client';
import { BlockNameLowercase } from '../constants';

export const carouselSettings = new SchemaSettings({
  name: \`blockSettings:\${BlockNameLowercase}\`,
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
`,paraId:94,tocIndex:24},{value:`componentProps
`,paraId:95,tocIndex:24},{value:"removeParentsIfNoChildren",paraId:96,tocIndex:24},{value:"\uFF1A\u5982\u679C\u6CA1\u6709\u5B50\u8282\u70B9\uFF0C\u662F\u5426\u5220\u9664\u7236\u8282\u70B9",paraId:96,tocIndex:24},{value:"breakRemoveOn",paraId:96,tocIndex:24},{value:"\uFF1A\u5220\u9664\u65F6\u7684\u4E2D\u65AD\u6761\u4EF6\u3002\u56E0\u4E3A ",paraId:96,tocIndex:24},{value:"Add Block",paraId:96,tocIndex:24},{value:" \u4F1A\u81EA\u52A8\u5C06\u5B50\u9879\u7684\u5305\u88F9\u5728 ",paraId:96,tocIndex:24},{value:"Grid",paraId:96,tocIndex:24},{value:" \u4E2D\uFF0C\u6240\u4EE5\u8FD9\u91CC\u8BBE\u7F6E ",paraId:96,tocIndex:24},{value:"breakRemoveOn: { 'x-component': 'Grid' }",paraId:96,tocIndex:24},{value:"\uFF0C\u5F53\u5220\u9664 ",paraId:96,tocIndex:24},{value:"Grid",paraId:96,tocIndex:24},{value:" \u65F6\uFF0C\u4E0D\u518D\u5411\u4E0A\u5220\u9664\u3002",paraId:96,tocIndex:24},{value:`
  `,paraId:0},{value:"Edit Block title",paraId:0},{value:"\u6211\u4EEC\u53EF\u4EE5\u5B9E\u73B0\u4E00\u4E2A ",paraId:97,tocIndex:25},{value:"Edit Block title",paraId:97,tocIndex:25},{value:" \u64CD\u4F5C\uFF0C\u7528\u4E8E\u4FEE\u6539\u533A\u5757\u7684\u6807\u9898\u3002",paraId:97,tocIndex:25},{value:"\u56E0\u4E3A\u7F16\u8F91\u533A\u5757\u6807\u9898\u662F\u4E00\u4E2A\u901A\u7528\u7684\u903B\u8F91\uFF0C\u6240\u4EE5 NocoBase \u63D0\u4F9B\u4E86 SchemaSettingsBlockTitleItem\uFF08\u6587\u6863 TODO\uFF09 \u7EC4\u4EF6\uFF0C\u6211\u4EEC\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\u3002",paraId:98,tocIndex:25},{value:"\u6211\u4EEC\u4FEE\u6539 ",paraId:99,tocIndex:25},{value:"packages/plugins/@nocobase-sample/plugin-block-carousel/src/client/settings/index.ts",paraId:99,tocIndex:25},{value:"\uFF1A",paraId:99,tocIndex:25},{value:`- import { SchemaSettingsBlockTitleItem } from "@nocobase/client";
+ import { SchemaSettings, SchemaSettingsBlockTitleItem } from "@nocobase/client";

import { SchemaSettings, SchemaSettingsBlockTitleItem } from '@nocobase/client';
import { BlockNameLowercase } from '../constants';
import { heightSchemaSettingsItem } from './items/height';
import { objectFitSchemaSettingsItem } from './items/objectFit';
import { imagesSchemaSettingsItem } from './items/images';
import { autoplaySchemaSettingsItem } from './items/autoplay';

export const carouselSettings = new SchemaSettings({
  name: \`blockSettings:\${BlockNameLowercase}\`,
  items: [
+   {
+     name: 'editBlockTitle',
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
    }
  ]
});
`,paraId:100,tocIndex:25},{value:`
  `,paraId:0},{value:"\u66F4\u591A\u53EF\u4EE5\u590D\u7528\u7684 SchemaSettings items \u53EF\u4EE5\u67E5\u770B TODO\u3002",paraId:101,tocIndex:25},{value:"Edit Images",paraId:0},{value:"\u6211\u4EEC\u53EF\u4EE5\u5B9E\u73B0\u4E00\u4E2A ",paraId:102,tocIndex:26},{value:"Edit Images",paraId:102,tocIndex:26},{value:" \u64CD\u4F5C\uFF0C\u7528\u4E8E\u4FEE\u6539\u8F6E\u64AD\u7684\u7684\u56FE\u7247\u3002",paraId:102,tocIndex:26},{value:"\u6211\u4EEC\u65B0\u5EFA ",paraId:103,tocIndex:27},{value:"packages/plugins/@nocobase-sample/plugin-block-carousel/src/client/settings/items/images.ts",paraId:103,tocIndex:27},{value:" \u6587\u4EF6\uFF1A",paraId:103,tocIndex:27},{value:`import { SchemaSettingsItemType, useDesignable, } from "@nocobase/client";
import { useFieldSchema } from '@formily/react';

import { BlockNameLowercase } from "../../constants";
import { useT } from "../../locale";

export const imagesSchemaSettingsItem: SchemaSettingsItemType = {
  name: 'images',
  type: 'actionModal',
  useComponentProps() {
    const filedSchema = useFieldSchema();
    const { deepMerge } = useDesignable();
    const t = useT();

    return {
      title: t('Edit Images'),
      schema: {
        type: 'object',
        title: t('Edit Images'),
        properties: {
          src: {
            title: t('Images'),
            type: 'string',
            default: filedSchema['x-decorator-props'][BlockNameLowercase]?.images ?? [],
            'x-decorator': 'FormItem',
            'x-component': 'Upload.Attachment',
            'x-component-props': {
              action: 'attachments:create',
              multiple: true
            },
          },
        },
      },
      onSubmit({ src: images }: any) {
        deepMerge({
          'x-uid': filedSchema['x-uid'],
          'x-decorator-props': {
            ...filedSchema['x-decorator-props'],
            [BlockNameLowercase]: {
              ...filedSchema['x-decorator-props']?.[BlockNameLowercase],
              images,
            },
          },
        })
      }
    };
  },
};
`,paraId:104,tocIndex:27},{value:"\u5173\u4E8E SchemaSettings Item \u7684\u5B9A\u4E49\u53EF\u4EE5\u67E5\u770B ",paraId:105,tocIndex:27},{value:"SchemaSettingsItem",paraId:105,tocIndex:27},{value:"\u3002",paraId:105,tocIndex:27},{value:"type",paraId:106,tocIndex:27},{value:"\uFF1A\u5185\u7F6E\u7C7B\u578B\u3002",paraId:106,tocIndex:27},{value:"actionModal",paraId:106,tocIndex:27},{value:" \u4E3A\u5F39\u7A97\u7C7B\u578B",paraId:106,tocIndex:27},{value:"name",paraId:106,tocIndex:27},{value:"\uFF1A\u552F\u4E00\u6807\u8BC6\uFF0C\u7528\u4E8E\u589E\u5220\u6539\u67E5",paraId:106,tocIndex:27},{value:"useComponentProps",paraId:106,tocIndex:27},{value:"\uFF1A\u8FD4\u56DE ",paraId:106,tocIndex:27},{value:"actionModal",paraId:106,tocIndex:27},{value:" \u5BF9\u5E94\u7EC4\u4EF6 ",paraId:106,tocIndex:27},{value:"SchemaSettingsActionModalItem",paraId:106,tocIndex:27},{value:" \u7684\u5C5E\u6027",paraId:106,tocIndex:27},{value:"useComponentProps",paraId:107,tocIndex:27},{value:"\uFF1A",paraId:107,tocIndex:27},{value:"Hooks",paraId:108,tocIndex:27},{value:"useFieldSchema",paraId:109,tocIndex:27},{value:"\uFF1A\u83B7\u53D6\u5F53\u524D\u8282\u70B9 schema",paraId:109,tocIndex:27},{value:"useDesignable",paraId:109,tocIndex:27},{value:`\uFF1A\u83B7\u53D6\u5F53\u524D Designable \u5B9E\u4F8B\uFF0CdeepMerge \u7528\u4E8E\u5408\u5E76 schema
`,paraId:109,tocIndex:27},{value:"x-uid",paraId:110,tocIndex:27},{value:"\uFF1A\u5F53\u524D\u8282\u70B9\u7684\u552F\u4E00\u6807\u8BC6",paraId:110,tocIndex:27},{value:"x-decorator-props",paraId:110,tocIndex:27},{value:"\uFF1A\u5F53\u524D\u8282\u70B9\u7684\u5C5E\u6027\uFF0C\u5B58\u50A8\u4E86 ",paraId:110,tocIndex:27},{value:"carousel",paraId:110,tocIndex:27},{value:" \u7684\u5C5E\u6027",paraId:110,tocIndex:27},{value:"Props",paraId:111,tocIndex:27},{value:"title",paraId:112,tocIndex:27},{value:"\uFF1A\u5F39\u7A97\u6807\u9898",paraId:112,tocIndex:27},{value:"schema",paraId:112,tocIndex:27},{value:`\uFF1A\u5F39\u7A97\u8868\u5355 schema
`,paraId:112,tocIndex:27},{value:"Upload.Attachment",paraId:113,tocIndex:27},{value:"\uFF1A\u4E0A\u4F20\u7EC4\u4EF6",paraId:113,tocIndex:27},{value:"FormItem",paraId:113,tocIndex:27},{value:"\uFF1A\u8868\u5355\u9879",paraId:113,tocIndex:27},{value:"onSubmit",paraId:112,tocIndex:27},{value:"\uFF1A\u8868\u5355\u63D0\u4EA4\u4E8B\u4EF6",paraId:112,tocIndex:27},{value:"\u6211\u4EEC\u4FEE\u6539 ",paraId:114,tocIndex:28},{value:"packages/plugins/@nocobase-sample/plugin-block-carousel/src/client/settings/index.ts",paraId:114,tocIndex:28},{value:"\uFF1A",paraId:114,tocIndex:28},{value:`// ...
+ import { imagesSchemaSettingsItem } from "./items/images";

export const carouselSettings = new SchemaSettings({
  name: \`blockSettings:\${BlockNameLowercase}\`,
  items: [
    {
      name: 'editBlockTitle',
      Component: SchemaSettingsBlockTitleItem,
    },
+   imagesSchemaSettingsItem,
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
`,paraId:115,tocIndex:28},{value:`
  `,paraId:0},{value:"\u6211\u4EEC\u65B0\u5EFA ",paraId:116,tocIndex:30},{value:"packages/plugins/@nocobase-sample/plugin-block-carousel/src/client/settings/items/height.ts",paraId:116,tocIndex:30},{value:" \u6587\u4EF6\uFF1A",paraId:116,tocIndex:30},{value:`import { SchemaSettingsItemType, useDesignable, } from "@nocobase/client";
import { useFieldSchema } from '@formily/react';

import { BlockNameLowercase } from "../../constants";
import { useT } from "../../locale";

export const heightSchemaSettingsItem: SchemaSettingsItemType = {
  name: 'height',
  type: 'actionModal',
  useComponentProps() {
    const filedSchema = useFieldSchema();
    const { deepMerge } = useDesignable();
    const t = useT();

    return {
      title: t('Edit Height'),
      schema: {
        type: 'object',
        title: t('Edit Height'),
        properties: {
          height: {
            title: t('Height'),
            type: 'number',
            default: filedSchema['x-decorator-props']?.[BlockNameLowercase]?.height,
            'x-decorator': 'FormItem',
            'x-component': 'InputNumber',
          },
        },
      },
      onSubmit({ height }: any) {
        deepMerge({
          'x-uid': filedSchema['x-uid'],
          'x-decorator-props': {
            ...filedSchema['x-decorator-props'],
            [BlockNameLowercase]: {
              ...filedSchema['x-decorator-props']?.[BlockNameLowercase],
              height,
            },
          },
        })
      }
    };
  },
};
`,paraId:117,tocIndex:30},{value:"\u5173\u4E8E SchemaSettings Item \u7684\u5B9A\u4E49\u53EF\u4EE5\u67E5\u770B ",paraId:118,tocIndex:30},{value:"SchemaSettingsItem",paraId:118,tocIndex:30},{value:"\u3002",paraId:118,tocIndex:30},{value:"type",paraId:119,tocIndex:30},{value:"\uFF1A\u5185\u7F6E\u7C7B\u578B\u3002",paraId:119,tocIndex:30},{value:"actionModal",paraId:119,tocIndex:30},{value:" \u4E3A\u5F39\u7A97\u7C7B\u578B",paraId:119,tocIndex:30},{value:"name",paraId:119,tocIndex:30},{value:"\uFF1A\u552F\u4E00\u6807\u8BC6\uFF0C\u7528\u4E8E\u589E\u5220\u6539\u67E5",paraId:119,tocIndex:30},{value:"useComponentProps",paraId:119,tocIndex:30},{value:"\uFF1A\u8FD4\u56DE ",paraId:119,tocIndex:30},{value:"actionModal",paraId:119,tocIndex:30},{value:" \u5BF9\u5E94\u7EC4\u4EF6 ",paraId:119,tocIndex:30},{value:"SchemaSettingsActionModalItem",paraId:119,tocIndex:30},{value:" \u7684\u5C5E\u6027",paraId:119,tocIndex:30},{value:"useComponentProps",paraId:120,tocIndex:30},{value:"\uFF1A",paraId:120,tocIndex:30},{value:"Hooks",paraId:121,tocIndex:30},{value:"useFieldSchema",paraId:122,tocIndex:30},{value:"\uFF1A\u83B7\u53D6\u5F53\u524D\u8282\u70B9 schema",paraId:122,tocIndex:30},{value:"useDesignable",paraId:122,tocIndex:30},{value:`\uFF1A\u83B7\u53D6\u5F53\u524D Designable \u5B9E\u4F8B\uFF0CdeepMerge \u7528\u4E8E\u5408\u5E76 schema
`,paraId:122,tocIndex:30},{value:"x-uid",paraId:123,tocIndex:30},{value:"\uFF1A\u5F53\u524D\u8282\u70B9\u7684\u552F\u4E00\u6807\u8BC6",paraId:123,tocIndex:30},{value:"x-decorator-props",paraId:123,tocIndex:30},{value:"\uFF1A\u5F53\u524D\u8282\u70B9\u7684\u5C5E\u6027\uFF0C\u5B58\u50A8\u4E86 ",paraId:123,tocIndex:30},{value:"carousel",paraId:123,tocIndex:30},{value:" \u7684\u5C5E\u6027",paraId:123,tocIndex:30},{value:"Props",paraId:124,tocIndex:30},{value:"title",paraId:125,tocIndex:30},{value:"\uFF1A\u5F39\u7A97\u6807\u9898",paraId:125,tocIndex:30},{value:"schema",paraId:125,tocIndex:30},{value:`\uFF1A\u5F39\u7A97\u8868\u5355 schema
`,paraId:125,tocIndex:30},{value:"InputNumber",paraId:126,tocIndex:30},{value:"\uFF1A\u6570\u5B57\u8F93\u5165\u6846",paraId:126,tocIndex:30},{value:"FormItem",paraId:126,tocIndex:30},{value:"\uFF1A\u8868\u5355\u9879",paraId:126,tocIndex:30},{value:"onSubmit",paraId:125,tocIndex:30},{value:"\uFF1A\u8868\u5355\u63D0\u4EA4\u4E8B\u4EF6",paraId:125,tocIndex:30},{value:"\u6211\u4EEC\u4FEE\u6539 ",paraId:127,tocIndex:31},{value:"packages/plugins/@nocobase-sample/plugin-block-carousel/src/client/settings/index.ts",paraId:127,tocIndex:31},{value:"\uFF1A",paraId:127,tocIndex:31},{value:`// ...
+ import { heightSchemaSettingsItem } from "./items/height";

export const carouselSettings = new SchemaSettings({
  name: \`blockSettings:\${BlockNameLowercase}\`,
  items: [
    {
      name: 'editBlockTitle',
      Component: SchemaSettingsBlockTitleItem,
    },
    imagesSchemaSettingsItem,
+   heightSchemaSettingsItem,
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
`,paraId:128,tocIndex:31},{value:`
  `,paraId:0},{value:"\u6211\u4EEC\u65B0\u5EFA ",paraId:129,tocIndex:33},{value:"packages/plugins/@nocobase-sample/plugin-block-carousel/src/client/settings/items/objectFit.ts",paraId:129,tocIndex:33},{value:" \u6587\u4EF6\uFF1A",paraId:129,tocIndex:33},{value:`import { SchemaSettingsItemType, useDesignable, } from "@nocobase/client";
import { useFieldSchema } from '@formily/react';
import { BlockNameLowercase } from "../../constants";
import { useT } from "../../locale";

export const objectFitSchemaSettingsItem: SchemaSettingsItemType = {
  name: 'objectFit',
  type: 'select',
  useComponentProps() {
    const filedSchema = useFieldSchema();
    const { deepMerge } = useDesignable();
    const t = useT();

    return {
      title: t('Object Fit'),
      options: [
        { label: 'Cover', value: 'cover' },
        { label: 'Contain', value: 'contain' },
        { label: 'Fill', value: 'fill' },
        { label: 'None', value: 'none' },
        { label: 'Scale Down', value: 'scale-down' },
      ],
      value: filedSchema['x-decorator-props']?.[BlockNameLowercase]?.objectFit || 'cover',
      onChange(v) {
        deepMerge({
          'x-uid': filedSchema['x-uid'],
          'x-decorator-props': {
            ...filedSchema['x-decorator-props'],
            [BlockNameLowercase]: {
              ...filedSchema['x-decorator-props']?.[BlockNameLowercase],
              objectFit: v,
            },
          },
        })
      },
    };
  },
};
`,paraId:130,tocIndex:33},{value:"\u5173\u4E8E SchemaSettings Item \u7684\u5B9A\u4E49\u53EF\u4EE5\u67E5\u770B ",paraId:131,tocIndex:33},{value:"SchemaSettingsItem",paraId:131,tocIndex:33},{value:"\u3002",paraId:131,tocIndex:33},{value:"type",paraId:132,tocIndex:33},{value:"\uFF1A\u5185\u7F6E\u7C7B\u578B\u3002",paraId:132,tocIndex:33},{value:"select",paraId:132,tocIndex:33},{value:" \u4E3A\u9009\u62E9\u7C7B\u578B",paraId:132,tocIndex:33},{value:"name",paraId:132,tocIndex:33},{value:"\uFF1A\u552F\u4E00\u6807\u8BC6\uFF0C\u7528\u4E8E\u589E\u5220\u6539\u67E5",paraId:132,tocIndex:33},{value:"useComponentProps",paraId:132,tocIndex:33},{value:"\uFF1A\u8FD4\u56DE ",paraId:132,tocIndex:33},{value:"select",paraId:132,tocIndex:33},{value:" \u5BF9\u5E94\u7EC4\u4EF6 ",paraId:132,tocIndex:33},{value:"SchemaSettingsSelectItem",paraId:132,tocIndex:33},{value:" \u7684\u5C5E\u6027",paraId:132,tocIndex:33},{value:"useComponentProps",paraId:133,tocIndex:33},{value:"\uFF1A",paraId:133,tocIndex:33},{value:"Hooks",paraId:134,tocIndex:33},{value:"useFieldSchema",paraId:135,tocIndex:33},{value:"\uFF1A\u83B7\u53D6\u5F53\u524D\u8282\u70B9 schema",paraId:135,tocIndex:33},{value:"useDesignable",paraId:135,tocIndex:33},{value:`\uFF1A\u83B7\u53D6\u5F53\u524D Designable \u5B9E\u4F8B\uFF0CdeepMerge \u7528\u4E8E\u5408\u5E76 schema
`,paraId:135,tocIndex:33},{value:"x-uid",paraId:136,tocIndex:33},{value:"\uFF1A\u5F53\u524D\u8282\u70B9\u7684\u552F\u4E00\u6807\u8BC6",paraId:136,tocIndex:33},{value:"x-decorator-props",paraId:136,tocIndex:33},{value:"\uFF1A\u5F53\u524D\u8282\u70B9\u7684\u5C5E\u6027\uFF0C\u5B58\u50A8\u4E86 ",paraId:136,tocIndex:33},{value:"carousel",paraId:136,tocIndex:33},{value:" \u7684\u5C5E\u6027",paraId:136,tocIndex:33},{value:"Props",paraId:137,tocIndex:33},{value:"title",paraId:138,tocIndex:33},{value:"\uFF1A\u5F39\u7A97\u6807\u9898",paraId:138,tocIndex:33},{value:"options",paraId:138,tocIndex:33},{value:"\uFF1A\u9009\u62E9\u9879",paraId:138,tocIndex:33},{value:"value",paraId:138,tocIndex:33},{value:"\uFF1A\u9ED8\u8BA4\u503C",paraId:138,tocIndex:33},{value:"onChange",paraId:138,tocIndex:33},{value:"\uFF1A\u9009\u62E9\u4E8B\u4EF6",paraId:138,tocIndex:33},{value:"\u6211\u4EEC\u4FEE\u6539 ",paraId:139,tocIndex:34},{value:"packages/plugins/@nocobase-sample/plugin-block-carousel/src/client/settings/index.ts",paraId:139,tocIndex:34},{value:"\uFF1A",paraId:139,tocIndex:34},{value:`// ...
+ import { objectFitSchemaSettingsItem } from "./items/objectFit";

export const carouselSettings = new SchemaSettings({
  name: \`blockSettings:\${BlockNameLowercase}\`,
  items: [
    {
      name: 'editBlockTitle',
      Component: SchemaSettingsBlockTitleItem,
    },
    imagesSchemaSettingsItem,
    heightSchemaSettingsItem,
+   objectFitSchemaSettingsItem,
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
`,paraId:140,tocIndex:34},{value:`
  `,paraId:0},{value:"\u6211\u4EEC\u65B0\u5EFA ",paraId:141,tocIndex:36},{value:"packages/plugins/@nocobase-sample/plugin-block-carousel/src/client/settings/items/autoplay.ts",paraId:141,tocIndex:36},{value:" \u6587\u4EF6\uFF1A",paraId:141,tocIndex:36},{value:`import { SchemaSettingsItemType, useDesignable, } from "@nocobase/client";
import { useFieldSchema } from '@formily/react';

import { BlockNameLowercase } from "../../constants";
import { useT } from "../../locale";

export const autoplaySchemaSettingsItem: SchemaSettingsItemType = {
  name: 'autoplay',
  type: 'switch',
  useComponentProps() {
    const filedSchema = useFieldSchema();
    const { deepMerge } = useDesignable();
    const t = useT();

    return {
      title: t('Autoplay'),
      checked: !!filedSchema['x-decorator-props']?.[BlockNameLowercase]?.autoplay,
      onChange(v) {
        deepMerge({
          'x-uid': filedSchema['x-uid'],
          'x-decorator-props': {
            ...filedSchema['x-decorator-props'],
            [BlockNameLowercase]: {
              ...filedSchema['x-decorator-props']?.[BlockNameLowercase],
              autoplay: v,
            },
          },
        })
      },
    };
  },
};
`,paraId:142,tocIndex:36},{value:"\u5173\u4E8E SchemaSettings Item \u7684\u5B9A\u4E49\u53EF\u4EE5\u67E5\u770B ",paraId:143,tocIndex:36},{value:"SchemaSettingsItem",paraId:143,tocIndex:36},{value:"\u3002",paraId:143,tocIndex:36},{value:"type",paraId:144,tocIndex:36},{value:"\uFF1A\u5185\u7F6E\u7C7B\u578B\u3002",paraId:144,tocIndex:36},{value:"switch",paraId:144,tocIndex:36},{value:" \u4E3A\u5F00\u5173\u7C7B\u578B",paraId:144,tocIndex:36},{value:"name",paraId:144,tocIndex:36},{value:"\uFF1A\u552F\u4E00\u6807\u8BC6\uFF0C\u7528\u4E8E\u589E\u5220\u6539\u67E5",paraId:144,tocIndex:36},{value:"useComponentProps",paraId:144,tocIndex:36},{value:"\uFF1A\u8FD4\u56DE ",paraId:144,tocIndex:36},{value:"switch",paraId:144,tocIndex:36},{value:" \u5BF9\u5E94\u7EC4\u4EF6 ",paraId:144,tocIndex:36},{value:"SchemaSettingsSwitchItem",paraId:144,tocIndex:36},{value:" \u7684\u5C5E\u6027",paraId:144,tocIndex:36},{value:"useComponentProps",paraId:145,tocIndex:36},{value:"\uFF1A",paraId:145,tocIndex:36},{value:"Hooks",paraId:146,tocIndex:36},{value:"useFieldSchema",paraId:147,tocIndex:36},{value:"\uFF1A\u83B7\u53D6\u5F53\u524D\u8282\u70B9 schema",paraId:147,tocIndex:36},{value:"useDesignable",paraId:147,tocIndex:36},{value:`\uFF1A\u83B7\u53D6\u5F53\u524D Designable \u5B9E\u4F8B\uFF0CdeepMerge \u7528\u4E8E\u5408\u5E76 schema
`,paraId:147,tocIndex:36},{value:"x-uid",paraId:148,tocIndex:36},{value:"\uFF1A\u5F53\u524D\u8282\u70B9\u7684\u552F\u4E00\u6807\u8BC6",paraId:148,tocIndex:36},{value:"x-decorator-props",paraId:148,tocIndex:36},{value:"\uFF1A\u5F53\u524D\u8282\u70B9\u7684\u5C5E\u6027\uFF0C\u5B58\u50A8\u4E86 ",paraId:148,tocIndex:36},{value:"carousel",paraId:148,tocIndex:36},{value:" \u7684\u5C5E\u6027",paraId:148,tocIndex:36},{value:"Props",paraId:149,tocIndex:36},{value:"title",paraId:150,tocIndex:36},{value:"\uFF1A\u5F39\u7A97\u6807\u9898",paraId:150,tocIndex:36},{value:"checked",paraId:150,tocIndex:36},{value:"\uFF1A\u9ED8\u8BA4\u503C",paraId:150,tocIndex:36},{value:"onChange",paraId:150,tocIndex:36},{value:"\uFF1A\u5F00\u5173\u4E8B\u4EF6",paraId:150,tocIndex:36},{value:"\u6211\u4EEC\u4FEE\u6539 ",paraId:151,tocIndex:37},{value:"packages/plugins/@nocobase-sample/plugin-block-carousel/src/client/settings/index.ts",paraId:151,tocIndex:37},{value:"\uFF1A",paraId:151,tocIndex:37},{value:`// ...
+ import { autoplaySchemaSettingsItem } from "./items/autoplay";

export const carouselSettings = new SchemaSettings({
  name: \`blockSettings:\${BlockNameLowercase}\`,
  items: [
    {
      name: 'editBlockTitle',
      Component: SchemaSettingsBlockTitleItem,
    },
    imagesSchemaSettingsItem,
    heightSchemaSettingsItem,
    objectFitSchemaSettingsItem,
+   autoplaySchemaSettingsItem,
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
`,paraId:152,tocIndex:37},{value:`
  `,paraId:0},{value:"editBlockTitle",paraId:153,tocIndex:38},{value:" \u548C ",paraId:153,tocIndex:38},{value:"remove",paraId:153,tocIndex:38},{value:" \u662F\u4E00\u4E2A\u901A\u7528\u7684\u903B\u8F91\uFF0C\u800C ",paraId:153,tocIndex:38},{value:"src",paraId:153,tocIndex:38},{value:"\u3001",paraId:153,tocIndex:38},{value:"height",paraId:153,tocIndex:38},{value:"\u3001",paraId:153,tocIndex:38},{value:"objectFit",paraId:153,tocIndex:38},{value:"\u3001",paraId:153,tocIndex:38},{value:"autoplay",paraId:153,tocIndex:38},{value:" \u662F\u9488\u5BF9 ",paraId:153,tocIndex:38},{value:"Image",paraId:153,tocIndex:38},{value:" \u7684\u914D\u7F6E\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7 ",paraId:153,tocIndex:38},{value:"divider",paraId:153,tocIndex:38},{value:" \u6765\u533A\u5206\u3002",paraId:153,tocIndex:38},{value:"\u6211\u4EEC\u4FEE\u6539 ",paraId:154,tocIndex:38},{value:"packages/plugins/@nocobase-sample/plugin-block-carousel/src/client/settings/index.ts",paraId:154,tocIndex:38},{value:"\uFF1A",paraId:154,tocIndex:38},{value:`// ...
export const carouselSettings = new SchemaSettings({
  name: \`blockSettings:\${BlockNameLowercase}\`,
  items: [
    {
      name: 'editBlockTitle',
      Component: SchemaSettingsBlockTitleItem,
    },
+   {
+     name: 'divider1',
+     type: 'divider'
+   },
    imagesSchemaSettingsItem,
    heightSchemaSettingsItem,
    objectFitSchemaSettingsItem,
    autoplaySchemaSettingsItem,
+   {
+     name: 'divider2',
+     type: 'divider'
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
    }
  ]
});
`,paraId:155,tocIndex:38},{value:"TODO",paraId:156,tocIndex:39},{value:"\u6211\u4EEC\u7F16\u8F91 ",paraId:157,tocIndex:41},{value:"packages/plugins/@nocobase-sample/plugin-block-carousel/src/locale/en-US.json",paraId:157,tocIndex:41},{value:" \u6587\u4EF6\uFF1A",paraId:157,tocIndex:41},{value:`{
  "Carousel": "Carousel",
  "Edit Images": "Edit Images",
  "Images": "Images",
  "Autoplay": "Autoplay",
  "Edit Height": "Edit Height",
  "Height": "Height"
}
`,paraId:158,tocIndex:41},{value:"\u6211\u4EEC\u7F16\u8F91 ",paraId:159,tocIndex:42},{value:"packages/plugins/@nocobase-sample/plugin-block-carousel/src/locale/zh-CN.json",paraId:159,tocIndex:42},{value:" \u6587\u4EF6\uFF1A",paraId:159,tocIndex:42},{value:`{
  "Carousel": "\u8D70\u9A6C\u706F",
  "Edit Images": "\u7F16\u8F91\u56FE\u7247",
  "Images": "\u56FE\u7247",
  "Autoplay": "\u81EA\u52A8\u64AD\u653E",
  "Edit Height": "\u7F16\u8F91\u9AD8\u5EA6",
  "Height": "\u9AD8\u5EA6"
}
`,paraId:160,tocIndex:42},{value:"\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7 ",paraId:161,tocIndex:42},{value:"http://localhost:13000/admin/settings/system-settings",paraId:161,tocIndex:42},{value:" \u6DFB\u52A0\u591A\u4E2A\u8BED\u8A00\uFF0C\u5E76\u4E14\u5728\u53F3\u4E0A\u89D2\u5207\u6362\u8BED\u8A00\u3002",paraId:161,tocIndex:42},{value:"\u6309\u7167 ",paraId:162,tocIndex:43},{value:"\u6784\u5EFA\u5E76\u6253\u5305\u63D2\u4EF6",paraId:163,tocIndex:43},{value:" \u6587\u6863\u8BF4\u660E\uFF0C\u6211\u4EEC\u53EF\u4EE5\u6253\u5305\u63D2\u4EF6\u5E76\u4E0A\u4F20\u5230\u751F\u4EA7\u73AF\u5883\u3002",paraId:162,tocIndex:43},{value:"\u5982\u679C\u662F clone \u7684\u6E90\u7801\uFF0C\u9700\u8981\u5148\u6267\u884C\u4E00\u6B21\u5168\u91CF build\uFF0C\u5C06\u63D2\u4EF6\u7684\u4F9D\u8D56\u4E5F\u6784\u5EFA\u597D\u3002",paraId:164,tocIndex:43},{value:`yarn build
`,paraId:165,tocIndex:43},{value:"\u5982\u679C\u662F\u4F7F\u7528\u7684 ",paraId:166,tocIndex:43},{value:"create-nocobase-app",paraId:166,tocIndex:43},{value:" \u521B\u5EFA\u7684\u9879\u76EE\uFF0C\u53EF\u4EE5\u76F4\u63A5\u6267\u884C\uFF1A",paraId:166,tocIndex:43},{value:`yarn build @nocobase-sample/plugin-block-carousel --tar
`,paraId:167,tocIndex:43},{value:"\u8FD9\u6837\u5C31\u53EF\u4EE5\u770B\u5230 ",paraId:168,tocIndex:43},{value:"storage/tar/@nocobase-sample/plugin-block-carousel.tar.gz",paraId:168,tocIndex:43},{value:" \u6587\u4EF6\u4E86\uFF0C\u7136\u540E\u901A\u8FC7",paraId:168,tocIndex:43},{value:"\u4E0A\u4F20\u7684\u65B9\u5F0F",paraId:169,tocIndex:43},{value:"\u8FDB\u884C\u5B89\u88C5\u3002",paraId:168,tocIndex:43}]}}]);
