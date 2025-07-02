# `Carousel` 区块

## 场景说明

NocoBase 有很多 `Add block` 按钮用于向界面添加区块，但是目前已有的区块类型不一定满足我们的需求，我们就需要根据需求自定开发一些区块。

其中有些和数据表有关系的被成为数据区块 `Data Block`，有些和数据表无关的被称为简单区块 `Simple Block`，本篇文章就是针对简单区块 `Simple Block` 举例说明。

## 示例说明

本实例会基于 ant-design 的 [Carousel](https://ant.design/components/carousel) 组件创建 `Carousel` 区块，并将其添加到 `Page`、`Table` 以及移动端的 `Add block` 中。

本文档完整的示例代码可以在 [plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-block-carousel) 中查看。
<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/20240603155655_rec_.mp4" type="video/mp4" />
</video>

## 初始化插件

我们按照 [编写第一个插件](/development/your-fisrt-plugin) 文档说明，如果没有一个项目，可以先创建一个项目，如果已经有了或者是 clone 的源码，则跳过这一步。

```bash
yarn create nocobase-app my-nocobase-app -d sqlite
cd my-nocobase-app
yarn install
yarn nocobase install
```

然后初始化一个插件，并添加到系统中：

```bash
yarn pm create @nocobase-sample/plugin-block-carousel
yarn pm enable @nocobase-sample/plugin-block-carousel
```

然后启动项目即可：

```bash
yarn dev
```

然后登录后访问 [http://localhost:13000/admin/pm/list/locale/](http://localhost:13000/admin/pm/list/locale/) 就可以看到插件已经安装并启用了。

## 功能实现

在实现本示例之前，我们需要先了解一些基础知识：

- [ant-design Carousel](https://ant.design/components/carousel)
- [SchemaInitializer 教程](/development/client/ui-schema/initializer)：用于向界面内添加各种区块、字段、操作等
- [SchemaInitializer API](https://client.docs.nocobase.com/core/ui-schema/schema-initializer)：用于向界面内添加各种区块、字段、操作等
- [UI Schema 协议](/development/client/ui-schema/what-is-ui-schema)：详细介绍 Schema 的结构和每个属性的作用
- [Designable 设计器](/development/client/ui-schema/designable)：用于修改 Schema

```bash
.
├── client # 客户端插件
│   ├── initializer # 初始化器
│   ├── component # 区块组件
│   ├── index.tsx # 客户端插件入口
│   ├── locale.ts # 多语言工具函数
│   ├── constants.ts # 常量
│   ├── schema # Schema
│   └── settings # Schema Settings
├── locale # 多语言文件
│   ├── en-US.json # 英语
│   └── zh-CN.json # 中文
├── index.ts # 服务端插件入口
└── server # 服务端插件
```

### 1. 定义名称

我们首先需要定义区块名称，它将会使用在各个地方。

我们新建 `packages/plugins/@nocobase-sample/plugin-block-carousel/src/client/constants.ts`：

```ts
export const BlockName = 'Carousel';
export const BlockNameLowercase = BlockName.toLowerCase();
```

### 2. 实现区块组件

#### 2.1 定义区块组件

我们新建 `packages/plugins/@nocobase-sample/plugin-block-carousel/src/client/component/Carousel.tsx` 文件，其内容如下：

```tsx | pure
import React, { FC } from 'react';
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

```

`Carousel` 组件整体来说是一个被 `withDynamicSchemaProps` 包裹的函数组件，[withDynamicSchemaProps](/development/client/ui-schema/what-is-ui-schema#x-component-props-和-x-use-component-props) 是一个高阶组件，用于处理 Schema 中的的动态属性。

如果不看 `withDynamicSchemaProps` 的话，`Carousel` 组件就是一个简单的函数组件。

然后将其在 `packages/plugins/@nocobase-sample/plugin-block-carousel/src/client/component/index.ts` 中导出：

```tsx | pure
export * from './Carousel';
```

#### 2.2 注册区块组件

我们需要将 `Carousel` 通过插件注册到系统中。

```tsx | pure
import { Plugin } from '@nocobase/client';
import { Carousel } from './component';

export class PluginBlockCarouselClient extends Plugin {
  async load() {
    this.app.addComponents({ Carousel })
  }
}

export default PluginBlockCarouselClient;
```

#### 2.3 验证区块组件

组件验证方式有 2 种：

- 临时页面验证：我们可以临时建一个页面，然后渲染 `Carousel` 组件，查看是否符合需求
- 文档示例验证：可以启动文档 `yarn doc plugins/@nocobase-sample/plugin-block-carousel`，通过写文档示例的方式验证是否符合需求（TODO）

我们以 `临时页面验证` 为例，我们新建一个页面，根据属性参数添加一个或者多个 `Carousel` 组件，查看是否符合需求。

```tsx | pure
import React from 'react';
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
```

然后访问 `http://localhost:13000/admin/carousel-component` 就可以看到对应测试页面的内容了。

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/20240603155918_rec_.mp4" type="video/mp4" />
</video>

验证完毕后需要删除测试页面。

### 3. 定义区块 Schema

#### 3.1 定义区块 Schema

NocoBase 的动态页面都是通过 Schema 来渲染，所以我们需要定义一个 Schema，后续用于在界面中添加 `Carousel` 区块。在实现本小节之前，我们需要先了解一些基础知识：

- [UI Schema 协议](/development/client/ui-schema/what-is-ui-schema)：详细介绍 Schema 的结构和每个属性的作用

我们新建 `packages/plugins/@nocobase-sample/plugin-block-carousel/src/client/schema/index.ts` 文件：

```tsx | pure
import { ISchema } from '@nocobase/client';
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
```

`carouselSchema`：

- `type`：类型，这里是 `void`，表示纯 UI 节点，没有数据
- `'x-component': 'CardItem'`：[CardItem 组件](https://client.docs.nocobase.com/components/card-item)，目前的区块都是被包裹在卡片中的，用于提供样式、布局和拖拽等功能
- `x-decorator-props`：用于存储 `Carousel` 组件的属性
- `properties`：子节点
  - `carousel`：
    - `'x-component': BlockName`：`Carousel` 组件
    - `'x-use-component-props': 'useCarouselBlockProps'`：用于动态获取 `Carousel` 组件的属性

上述 Schema 转为 React 组件后相当于：

```tsx | pure
<CardItem>
  <Carousel {...useCarouselBlockProps()} />
</CardItem>
```

#### 3.2 注册 scope

我们需要将 `useCarouselBlockProps` 注册到系统中，这样 [x-use-component-props](/development/client/ui-schema/what-is-ui-schema#x-component-props-和-x-use-component-props) 才能找到对应的 scope。

```tsx | pure
import { Plugin } from '@nocobase/client';
import { Carousel } from './component';
import { useCarouselBlockProps } from './schema';

export class PluginBlockCarouselClient extends Plugin {
  async load() {
    this.app.addComponents({ Carousel })
    this.app.addScopes({ useCarouselBlockProps });
  }
}

export default PluginBlockCarouselClient;
```

更多关于 Scope 的说明可以查看 [全局注册 Component 和 Scope](/plugin-samples/component-and-scope/global)

#### 3.3 验证区块 Schema

同验证组件一样，我们可以通过临时页面验证或者文档示例验证的方式来验证 Schema 是否符合需求。我们这里以临时页面验证为例：

```tsx | pure
import React from 'react';
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
```

关于 `SchemaComponent` 的详细说明可以查看 [SchemaComponent](https://client.docs.nocobase.com/core/ui-schema/schema-component#schemacomponent-1) 文档。

我们访问 [http://localhost:13000/admin/carousel-schema](http://localhost:13000/admin/carousel-schema) 就可以看到对应测试页面的内容了。

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/20240603155918_rec_.mp4" type="video/mp4" />
</video>

验证完毕后需要删除测试页面。

### 4. 定义 Schema Initializer Item

我们新建 `packages/plugins/@nocobase-sample/plugin-block-carousel/src/client/initializer/index.ts` 文件：

```ts
import { SchemaInitializerItemType, useSchemaInitializer } from '@nocobase/client';

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
```

- `type`：类型，这里是 `item`，表示是一个文本，其有点击事件，点击后可以插入一个新的 Schema
- `name`：唯一标识符，用于区分不同的 Schema Item 和增删改查操作
- `icon`：图标，更多 icon 可以参考 [Ant Design Icons](https://ant.design/components/icon)
- `useComponentProps`：返回一个对象，包含 `title` 和 `onClick` 两个属性，`title` 是显示的文本，`onClick` 是点击后的回调函数
- [useSchemaInitializer()](https://client.docs.nocobase.com/core/ui-schema/schema-initializer#useschemainitializer)：用于获取 `SchemaInitializerContext` 上下文
  - `insert`：插入一个新的 Schema
- `useT()`：用于获取多语言工具函数

更多关于 Schema Item 的定义可以参考 [Schema Initializer Item](https://client.docs.nocobase.com/core/ui-schema/schema-initializer#built-in-components-and-types) 文档。

### 5. 添加到 Add block 中

系统中有很多个 `Add block` 按钮，但他们的 **name 是不同的**。

![img_v3_02b4_049b0a62-8e3b-420f-adaf-a6350d84840g](https://static-docs.nocobase.com/img_v3_02b4_049b0a62-8e3b-420f-adaf-a6350d84840g.jpg)

#### 5.1 添加到页面级别 Add block 中

如果我们需要添加到页面级别的 `Add block` 中，我们需要知道对应的 `name`，我们可以通过 TODO 方式查看对应的 `name`。

TODO

通过上图可以看到页面级别的 `Add block` 对应的 name 为 `page:addBlock`，`Other Blocks` 对应的 name 为 `otherBlocks`。

然后我们修改 `packages/plugins/@nocobase-sample/plugin-block-carousel/src/client/index.tsx` 文件：

```tsx | pure
import { Plugin } from '@nocobase/client';

import { Carousel } from './component';
import { carouselSchema, useCarouselBlockProps } from './schema';
import { carouselSettings } from './settings';
import { carouselInitializerItem } from './initializer';

export class PluginBlockCarouselClient extends Plugin {
  async load() {
    this.app.addComponents({ Carousel })
    this.app.schemaSettingsManager.add(carouselSettings);
    this.app.addScopes({ useCarouselBlockProps });

    this.app.schemaInitializerManager.addItem('page:addBlock', `otherBlocks.${carouselInitializerItem.name}`, carouselInitializerItem)
  }
}

export default PluginBlockCarouselClient;
```

上述代码首先将 `Carousel` 组件注册到系统中，这样前面 `carouselSchema` 定义的 `x-component: 'Carousel'` 才能找到对应的组件，更多详细解释可以查看 [全局注册 Component 和 Scope](/plugin-samples/component-and-scope/global)。

然后将 `carouselSettings` 通过 [app.schemaSettingsManager.add](https://client.docs.nocobase.com/core/ui-schema/schema-settings-manager#schemasettingsmanageradd) 添加到系统中。

然后使用 [app.schemaInitializerManager.addItem](https://client.docs.nocobase.com/core/ui-schema/schema-initializer-manager#schemainitializermanageradditem) 将 `carouselInitializerItem` 添加对应 Initializer 子项中，其中 `page:addBlock` 是页面上 `Add block` 的 name，`otherBlocks` 是其父级的 name。

然后我们 hover `Add block` 按钮，就可以看到 `Image` 这个新的区块类型了，点击 `Image`，就可以添加一个新的 `Carousel` 区块了。

![20240603161730](https://static-docs.nocobase.com/20240603161730.png)

#### 5.2 添加到弹窗 Add block 中

我们不仅需要将其添加到页面级别的 `Add block` 中，还需要将其添加到 `Table` 区块 `Add new` 弹窗的 `Add block` 中。

![img_v3_02b4_fc47fe3a-35a1-4186-999c-0b48e6e001dg](https://static-docs.nocobase.com/img_v3_02b4_fc47fe3a-35a1-4186-999c-0b48e6e001dg.jpg)

我们按照页面级别获取 `name` 的方式获取到 `Table` 区块的 `Add block` 的 `name` 为 `popup:addNew:addBlock`，`Other Blocks` 对应的 name 为 `otherBlocks`。

然后修改 `packages/plugins/@nocobase-sample/plugin-block-carousel/src/client/index.tsx` 文件：

```diff
export class PluginBlockCarouselClient extends Plugin {
  async load() {
    // ...
+   this.app.schemaInitializerManager.addItem('popup:addNew:addBlock', `otherBlocks.${carouselInitializerItem.name}`, carouselInitializerItem)
  }
}
```

![20240603161814](https://static-docs.nocobase.com/20240603161814.png)

#### 5.3 添加到移动端 Add block 中

> 首先要激活移动端插件，参考 [激活插件](/welcome/getting-started/plugin#3-activate-the-plugin) 文档。

我们可以将其添加到移动端的 `Add block` 中，获取 `name` 的方法这里就不再赘述了。

然后修改 `packages/plugins/@nocobase-sample/plugin-block-carousel/src/client/index.tsx` 文件：

```diff
export class PluginBlockCarouselClient extends Plugin {
  async load() {
    // ...
+   this.app.schemaInitializerManager.addItem('mobilePage:addBlock', `otherBlocks.${carouselInitializerItem.name}`, carouselInitializerItem)
  }
}
```

![20240603161913](https://static-docs.nocobase.com/20240603161913.png)

如果需要更多的 `Add block`，可以继续添加，只需要知道对应的 `name` 即可。

### 6. 实现 Schema Settings

#### 6.1 定义 Schema Settings

一个完整的 Block 还需要有 Schema Settings，用于配置一些属性和操作。

我们新建 `packages/plugins/@nocobase-sample/plugin-block-carousel/src/client/settings/index.ts` 文件：

```ts | pure
import { SchemaSettings } from "@nocobase/client";
import { BlockNameLowercase } from '../constants';

export const carouselSettings = new SchemaSettings({
  name: `blockSettings:${BlockNameLowercase}`,
  items: [
    // TODO
  ]
});
```

#### 6.2 注册 Schema Settings

```ts
import { Plugin } from '@nocobase/client';
import { carouselSettings } from './settings';

export class PluginBlockCarouselClient extends Plugin {
  async load() {
    // ...
    this.app.schemaSettingsManager.add(carouselSettings)
  }
}

export default PluginBlockCarouselClient;
```

#### 6.3 使用 Schema Settings

我们修改 `packages/plugins/@nocobase-sample/plugin-block-carousel/src/client/schema/index.ts` 中的 `carouselSchema`：

```diff
+ import { carouselSettings } from "../settings";

const carouselSchema: ISchema = {
  type: 'void',
  'x-decorator': 'CardItem',
+ 'x-settings': carouselSettings.name,
  // ...
};
```

![20240603162037](https://static-docs.nocobase.com/20240603162037.png)

### 7. 实现 Schema Settings items

目前我们只实现了 `Schema Settings`，但是没有实现任何操作，我们需要根据需求实现各个操作。

目前 Schema Settings 支持的内置操作类型请参考 [Schema Settings - Built-in Components and Types](https://client.docs.nocobase.com/core/ui-schema/schema-settings#built-in-components-and-types) 文档。

#### 7.1 实现 `remove` 操作

目前通过 initializers 添加的区块是无法删除的，我们需要实现 `remove` 操作。

[NocoBase] 内置了 [remove](https://client.docs.nocobase.com/core/ui-schema/schema-settings#schemasettingsremove-1) 操作类型，我们修改 `packages/plugins/@nocobase-sample/plugin-block-carousel/src/client/settings/index.ts` 文件：

```diff
import { SchemaSettings } from '@nocobase/client';
import { BlockNameLowercase } from '../constants';

export const carouselSettings = new SchemaSettings({
  name: `blockSettings:${BlockNameLowercase}`,
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
```

- componentProps
  - `removeParentsIfNoChildren`：如果没有子节点，是否删除父节点
  - `breakRemoveOn`：删除时的中断条件。因为 `Add Block` 会自动将子项的包裹在 `Grid` 中，所以这里设置 `breakRemoveOn: { 'x-component': 'Grid' }`，当删除 `Grid` 时，不再向上删除。

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/20240603162229_rec_.mp4" type="video/mp4" />
</video>

#### 7.2 实现 `Edit Block title` 操作

我们可以实现一个 `Edit Block title` 操作，用于修改区块的标题。

因为编辑区块标题是一个通用的逻辑，所以 NocoBase 提供了 SchemaSettingsBlockTitleItem（文档 TODO） 组件，我们可以直接使用。

我们修改 `packages/plugins/@nocobase-sample/plugin-block-carousel/src/client/settings/index.ts`：

```diff
- import { SchemaSettingsBlockTitleItem } from "@nocobase/client";
+ import { SchemaSettings, SchemaSettingsBlockTitleItem } from "@nocobase/client";

import { SchemaSettings, SchemaSettingsBlockTitleItem } from '@nocobase/client';
import { BlockNameLowercase } from '../constants';
import { heightSchemaSettingsItem } from './items/height';
import { objectFitSchemaSettingsItem } from './items/objectFit';
import { imagesSchemaSettingsItem } from './items/images';
import { autoplaySchemaSettingsItem } from './items/autoplay';

export const carouselSettings = new SchemaSettings({
  name: `blockSettings:${BlockNameLowercase}`,
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
```

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/20240603162340_rec_.mp4" type="video/mp4" />
</video>

更多可以复用的 SchemaSettings items 可以查看 TODO。

#### 7.3 实现 `Edit Images` 操作

我们可以实现一个 `Edit Images` 操作，用于修改轮播的的图片。

##### 7.3.1 定义 Schema Settings item

我们新建 `packages/plugins/@nocobase-sample/plugin-block-carousel/src/client/settings/items/images.ts` 文件：

```ts
import { SchemaSettingsItemType, useDesignable, } from "@nocobase/client";
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
```

关于 SchemaSettings Item 的定义可以查看 [SchemaSettingsItem](https://client.docs.nocobase.com/core/ui-schema/schema-settings#optionsitems)。

- `type`：内置类型。[actionModal](https://client.docs.nocobase.com/core/ui-schema/schema-settings#schemasettingsactionmodalitem) 为弹窗类型
- `name`：唯一标识，用于增删改查
- `useComponentProps`：返回 `actionModal` 对应组件 `SchemaSettingsActionModalItem` 的属性

`useComponentProps`：

- Hooks
  - `useFieldSchema`：获取当前节点 schema
  - `useDesignable`：获取当前 Designable 实例，deepMerge 用于合并 schema
    - `x-uid`：当前节点的唯一标识
    - `x-decorator-props`：当前节点的属性，存储了 `carousel` 的属性

- Props
  - `title`：弹窗标题
  - `schema`：弹窗表单 schema
    - [Upload.Attachment](https://client.docs.nocobase.com/components/upload)：上传组件
    - [FormItem](https://client.docs.nocobase.com/components/form-item)：表单项
  - `onSubmit`：表单提交事件

##### 7.3.2 使用 SchemaSettings Item

我们修改 `packages/plugins/@nocobase-sample/plugin-block-carousel/src/client/settings/index.ts`：

```diff
// ...
+ import { imagesSchemaSettingsItem } from "./items/images";

export const carouselSettings = new SchemaSettings({
  name: `blockSettings:${BlockNameLowercase}`,
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
```

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/20240603162436_rec_.mp4" type="video/mp4" />
</video>

#### 7.4 实现 Edit Height

##### 7.4.1 实现 SchemaSettings Item

我们新建 `packages/plugins/@nocobase-sample/plugin-block-carousel/src/client/settings/items/height.ts` 文件：

```ts
import { SchemaSettingsItemType, useDesignable, } from "@nocobase/client";
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
```

关于 SchemaSettings Item 的定义可以查看 [SchemaSettingsItem](https://client.docs.nocobase.com/core/ui-schema/schema-settings#optionsitems)。

- `type`：内置类型。[actionModal](https://client.docs.nocobase.com/core/ui-schema/schema-settings#schemasettingsactionmodalitem) 为弹窗类型
- `name`：唯一标识，用于增删改查
- `useComponentProps`：返回 `actionModal` 对应组件 `SchemaSettingsActionModalItem` 的属性

`useComponentProps`：

- Hooks
  - `useFieldSchema`：获取当前节点 schema
  - `useDesignable`：获取当前 Designable 实例，deepMerge 用于合并 schema
    - `x-uid`：当前节点的唯一标识
    - `x-decorator-props`：当前节点的属性，存储了 `carousel` 的属性

- Props
  - `title`：弹窗标题
  - `schema`：弹窗表单 schema
    - [InputNumber](https://client.docs.nocobase.com/components/input-number)：数字输入框
    - [FormItem](https://client.docs.nocobase.com/components/form-item)：表单项
  - `onSubmit`：表单提交事件

##### 7.4.2 使用 SchemaSettings Item

我们修改 `packages/plugins/@nocobase-sample/plugin-block-carousel/src/client/settings/index.ts`：

```diff
// ...
+ import { heightSchemaSettingsItem } from "./items/height";

export const carouselSettings = new SchemaSettings({
  name: `blockSettings:${BlockNameLowercase}`,
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
```
<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/20240603162555_rec_.mp4" type="video/mp4" />
</video>

#### 7.5 实现 ObjectFit

##### 7.5.1 实现 SchemaSettings Item

我们新建 `packages/plugins/@nocobase-sample/plugin-block-carousel/src/client/settings/items/objectFit.ts` 文件：

```ts
import { SchemaSettingsItemType, useDesignable, } from "@nocobase/client";
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
```

关于 SchemaSettings Item 的定义可以查看 [SchemaSettingsItem](https://client.docs.nocobase.com/core/ui-schema/schema-settings#optionsitems)。

- `type`：内置类型。[select](https://client.docs.nocobase.com/core/ui-schema/schema-settings#schemasettingsselectitem) 为选择类型
- `name`：唯一标识，用于增删改查
- `useComponentProps`：返回 `select` 对应组件 `SchemaSettingsSelectItem` 的属性

`useComponentProps`：

- Hooks
  - `useFieldSchema`：获取当前节点 schema
  - `useDesignable`：获取当前 Designable 实例，deepMerge 用于合并 schema
    - `x-uid`：当前节点的唯一标识
    - `x-decorator-props`：当前节点的属性，存储了 `carousel` 的属性

- Props
  - `title`：弹窗标题
  - `options`：选择项
  - `value`：默认值
  - `onChange`：选择事件

##### 7.5.2 使用 SchemaSettings Item

我们修改 `packages/plugins/@nocobase-sample/plugin-block-carousel/src/client/settings/index.ts`：

```diff
// ...
+ import { objectFitSchemaSettingsItem } from "./items/objectFit";

export const carouselSettings = new SchemaSettings({
  name: `blockSettings:${BlockNameLowercase}`,
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
```

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/20240603162655_rec_.mp4" type="video/mp4" />
</video>

#### 7.6 实现 Autoplay

##### 7.6.1 实现 SchemaSettings Item

我们新建 `packages/plugins/@nocobase-sample/plugin-block-carousel/src/client/settings/items/autoplay.ts` 文件：

```ts
import { SchemaSettingsItemType, useDesignable, } from "@nocobase/client";
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
```

关于 SchemaSettings Item 的定义可以查看 [SchemaSettingsItem](https://client.docs.nocobase.com/core/ui-schema/schema-settings#optionsitems)。

- `type`：内置类型。[switch](https://client.docs.nocobase.com/core/ui-schema/schema-settings#schemasettingsswitchitem) 为开关类型
- `name`：唯一标识，用于增删改查
- `useComponentProps`：返回 `switch` 对应组件 `SchemaSettingsSwitchItem` 的属性

`useComponentProps`：

- Hooks
  - `useFieldSchema`：获取当前节点 schema
  - `useDesignable`：获取当前 Designable 实例，deepMerge 用于合并 schema
    - `x-uid`：当前节点的唯一标识
    - `x-decorator-props`：当前节点的属性，存储了 `carousel` 的属性

- Props
  - `title`：弹窗标题
  - `checked`：默认值
  - `onChange`：开关事件


##### 7.6.2 使用 SchemaSettings Item

我们修改 `packages/plugins/@nocobase-sample/plugin-block-carousel/src/client/settings/index.ts`：

```diff
// ...
+ import { autoplaySchemaSettingsItem } from "./items/autoplay";

export const carouselSettings = new SchemaSettings({
  name: `blockSettings:${BlockNameLowercase}`,
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
```

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/20240603162803_rec_.mp4" type="video/mp4" />
</video>

#### 7.7 增加 divider

`editBlockTitle` 和 `remove` 是一个通用的逻辑，而 `src`、`height`、`objectFit`、`autoplay` 是针对 `Image` 的配置，我们可以通过 `divider` 来区分。

我们修改 `packages/plugins/@nocobase-sample/plugin-block-carousel/src/client/settings/index.ts`：

```diff
// ...
export const carouselSettings = new SchemaSettings({
  name: `blockSettings:${BlockNameLowercase}`,
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
```

![20240603162933](https://static-docs.nocobase.com/20240603162933.png)

### 8. 权限

TODO

### 9. 多语言

#### 9.1 英文

我们编辑 `packages/plugins/@nocobase-sample/plugin-block-carousel/src/locale/en-US.json` 文件：

```json
{
  "Carousel": "Carousel",
  "Edit Images": "Edit Images",
  "Images": "Images",
  "Autoplay": "Autoplay",
  "Edit Height": "Edit Height",
  "Height": "Height"
}
```

#### 9.2 中文

我们编辑 `packages/plugins/@nocobase-sample/plugin-block-carousel/src/locale/zh-CN.json` 文件：

```json
{
  "Carousel": "走马灯",
  "Edit Images": "编辑图片",
  "Images": "图片",
  "Autoplay": "自动播放",
  "Edit Height": "编辑高度",
  "Height": "高度"
}
```

我们可以通过 [http://localhost:13000/admin/settings/system-settings](http://localhost:13000/admin/settings/system-settings) 添加多个语言，并且在右上角切换语言。

![20240611113758](https://static-docs.nocobase.com/20240611113758.png)

![20240611114018](https://static-docs.nocobase.com/20240611114018.png)

## 打包和上传到生产环境

按照 [构建并打包插件](/development/your-fisrt-plugin#构建并打包插件) 文档说明，我们可以打包插件并上传到生产环境。

如果是 clone 的源码，需要先执行一次全量 build，将插件的依赖也构建好。

```bash
yarn build
```

如果是使用的 `create-nocobase-app` 创建的项目，可以直接执行：

```bash
yarn build @nocobase-sample/plugin-block-carousel --tar
```

这样就可以看到 `storage/tar/@nocobase-sample/plugin-block-carousel.tar.gz` 文件了，然后通过[上传的方式](/welcome/getting-started/plugin)进行安装。
