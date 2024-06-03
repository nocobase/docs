# `Carousel` 区块

## 场景说明

NocoBase 有很多 `Add block` 按钮用于向界面添加区块。其中有些和数据表有关系的被成为数据区块 `Data Block`，有些和数据表无关的被称为简单区块 `Simple Block`。

![img_v3_02b4_a4529308-62e3-4fa7-be4d-5dcae332c49g](https://static-docs.nocobase.com/img_v3_02b4_a4529308-62e3-4fa7-be4d-5dcae332c49g.jpg)

但是目前已有的区块类型不一定满足我们的需求，我们就需要根据需求自定开发一些区块，本篇文章就是针对简单区块 `Simple Block` 进行说明。

## 示例说明

本实例会基于 ant-design 的 [Carousel](https://ant.design/components/carousel) 组件创建 `Carousel` 区块，并将其添加到 `Page`、`Table` 以及移动端的 `Add block` 中。

本文档完整的示例代码可以在 [plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-block-carousel) 中查看。

<video width="100%" controls="">
  <source src="" type="video/mp4" />
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

然后登录后访问 [http://localhost:13000/admin/pm/list/local/](http://localhost:13000/admin/pm/list/local/) 就可以看到插件已经安装并启用了。

## 功能实现

在实现本示例之前，我们需要先了解一些基础知识：

- [ant-design Carousel](https://ant.design/components/carousel)
- [SchemaInitializer 教程](/development/client/ui-schema/initializer)：用于向界面内添加各种区块、字段、操作等
- [SchemaInitializer API](https://client.docs.nocobase.com/core/ui-schema/schema-initializer)：用于向界面内添加各种区块、字段、操作等
- [UI Schema 协议](/development/client/ui-schema/what-is-ui-schema)：详细介绍 Schema 的结构和每个属性的作用
- [Designable 设计器](/development/client/ui-schema/designable)：用于修改 Schema

### 0. 定义名称

我们首先需要定义区块名称，它将会使用在各个地方。

我们新建 `packages\plugins\@nocobase-sample\plugin-block-carousel\src\client\constants.ts`：

```ts
export const CarouselBlockName = 'Carousel';
export const CarouselBlockNameLowercase = CarouselBlockName.toLowerCase();
```

### 1. 实现区块组件

#### 1.1 定义区块组件

我们新建 `packages/plugins/@nocobase-sample/plugin-block-carousel/src/client/Carousel.tsx` 文件，其内容如下：

```tsx | pure
import React, { FC } from 'react';
import { Carousel as AntdCarousel, Result, CarouselProps as AntdCarouselProps } from 'antd';
import { withDynamicSchemaProps } from '@nocobase/client';
import { CarouselBlockName } from './constants';

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
}, { displayName: CarouselBlockName })

```

`Carousel` 组件整体来说是一个被 `withDynamicSchemaProps` 包裹的函数组件，[withDynamicSchemaProps](/development/client/ui-schema/what-is-ui-schema#x-component-props-和-x-use-component-props) 是一个高阶组件，用于处理 Schema 中的的动态属性。

如果不看 `withDynamicSchemaProps` 的话，`Carousel` 组件就是一个简单的函数组件。

#### 1.2 注册区块组件

我们需要将 `Carousel` 通过插件注册到系统中。

```tsx | pure
import { Plugin } from '@nocobase/client';
import { Carousel } from './Carousel';

export class PluginBlockCarouselClient extends Plugin {
  async load() {
    this.app.addComponents({ Carousel })
  }
}

export default PluginBlockCarouselClient;
```

#### 1.3 验证区块组件

组件验证方式有 2 种：

- 临时页面验证：我们可以临时建一个页面，然后渲染 `Carousel` 组件，查看是否符合需求
- 文档示例验证：可以启动文档 `yarn doc packages/plugins/@nocobase-sample/plugin-block-carousel`，通过写文档示例的方式验证是否符合需求（TODO）

我们以 `临时页面验证` 为例，我们新建一个页面，根据属性参数添加一个或者多个 `Carousel` 组件，查看是否符合需求。

```tsx | pure
import React from 'react';
import { Plugin } from '@nocobase/client';
import { Carousel } from './Carousel';

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

![20240526165057](https://static-docs.nocobase.com/20240526165057.png)

验证完毕后需要删除测试页面。

### 2. 定义区块 Schema

#### 2.1 定义区块 Schema

NocoBase 的动态页面都是通过 Schema 来渲染，所以我们需要定义一个 Schema，后续用于在界面中添加 `Carousel` 区块。在实现本小节之前，我们需要先了解一些基础知识：

- [UI Schema 协议](/development/client/ui-schema/what-is-ui-schema)：详细介绍 Schema 的结构和每个属性的作用

我们新建 `packages/plugins/@nocobase-sample/plugin-block-carousel/src/client/carouselBlockSchema.ts` 文件：

```tsx | pure
import { ISchema } from '@nocobase/client';
import { useFieldSchema } from '@formily/react'

import { CarouselBlockName, CarouselBlockNameLowercase } from './constants';

export function useCarouselBlockProps() {
  const fieldSchema = useFieldSchema();
  return fieldSchema.parent?.['x-decorator-props']?.[CarouselBlockNameLowercase]
}

export const carouselBlockSchema: ISchema = {
  type: 'void',
  'x-component': 'CardItem',
  'x-decorator-props': {
    [CarouselBlockNameLowercase]: {},
  },
  properties: {
    carousel: {
      type: 'void',
      'x-component': CarouselBlockName,
      'x-use-component-props': useCarouselBlockProps.name
    }
  }
};
```

`carouselBlockSchema`：

- `type`：类型，这里是 `void`，表示纯 UI 节点，没有数据
- `x-decorator`：装饰器，这里是 [CardItem 组件](https://client.docs.nocobase.com/components/card-item)，目前的区块都是被包裹在卡片中的，用于提供样式、布局和拖拽等功能
- `x-component`：组件，这里是 `Carousel`，就是我们刚定义的组件

上述 Schema 转为 React 组件后相当于：

```tsx | pure
<CardItem>
  <Carousel />
</CardItem>
```

#### 2.2 验证区块 Schema

同验证组件一样，我们可以通过临时页面验证或者文档示例验证的方式来验证 Schema 是否符合需求。我们这里以临时页面验证为例：

```tsx | pure
import React from 'react';
import { Plugin, SchemaComponent } from '@nocobase/client';
import { Carousel } from './Carousel';
import { carouselBlockSchema } from './carouselBlockSchema';

export class PluginBlockCarouselClient extends Plugin {
  async load() {
    this.app.addComponents({ Carousel })

    this.app.router.add('admin.carousel-schema', {
      path: '/admin/carousel-schema',
      Component: () => {
        return <div style={{ marginTop: 20, marginBottom: 20 }}>
          <SchemaComponent schema={{ properties: { test: carouselBlockSchema } }} />
        </div>
      }
    })
  }
}

export default PluginBlockCarouselClient;
```

关于 `SchemaComponent` 的详细说明可以查看 [SchemaComponent](https://client.docs.nocobase.com/core/ui-schema/schema-component#schemacomponent-1) 文档。

我们访问 [http://localhost:13000/admin/carousel-schema](http://localhost:13000/admin/carousel-schema) 就可以看到对应测试页面的内容了。

![20240526165408](https://static-docs.nocobase.com/20240526165408.png)

验证完毕后需要删除测试页面。

### 3. 定义 Schema Initializer Item

我们新建 `packages/plugins/@nocobase-sample/plugin-block-carousel/src/client/imageBlockInitializerItem.ts` 文件：

```ts
import { SchemaInitializerItemType, useSchemaInitializer } from '@nocobase/client';
import { carouselBlockSchema } from './carouselBlockSchema';

export const imageBlockInitializerItem: SchemaInitializerItemType = {
  type: 'item',
  name: 'Carousel',
  icon: 'FileImageOutlined',
  useComponentProps() {
    const { insert } = useSchemaInitializer();
    return {
      title: 'Image',
      onClick: () => {

        insert(carouselBlockSchema);
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

更多关于 Schema Item 的定义可以参考 [Schema Initializer Item](https://client.docs.nocobase.com/core/ui-schema/schema-initializer#built-in-components-and-types) 文档。

### 4. 实现 Schema Settings

#### 4.1 定义 Schema Settings

一个完整的 Block 还需要有 Schema Settings，用于配置一些属性，但 Schema Settings 不是本示例的重点，所以我们这里仅有一个 `remove` 操作。

我们新建 `packages/plugins/@nocobase-sample/plugin-block-carousel/src/client/imageBlockSettings.ts` 文件：

```ts | pure
import { SchemaSettings } from "@nocobase/client";

export const imageBlockSettings = new SchemaSettings({
  name: 'blockSettings:image',
  items: [
    {
      type: 'remove',
      name: 'remove',
    }
  ]
});
```

#### 4.2 注册 Schema Settings

```ts
import { Plugin } from '@nocobase/client';
import { imageBlockSettings } from './imageBlockSettings';

export class PluginBlockCarouselClient extends Plugin {
  async load() {
    // ...
    this.app.schemaSettingsManager.add(imageBlockSettings)
  }
}

export default PluginBlockCarouselClient;
```

#### 4.3 使用 Schema Settings

我们修改 `packages/plugins/@nocobase-sample/plugin-block-carousel/src/client/carouselBlockSchema.ts` 中的 `carouselBlockSchema`：

```diff
+ import { imageBlockSettings } from "./imageBlockSettings";

const carouselBlockSchema: ISchema = {
  type: 'void',
  'x-decorator': 'CardItem',
+ 'x-settings': imageBlockSettings.name,
  // ...
};
```

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
import { Carousel } from './Carousel';
import { imageBlockInitializerItem } from './imageBlockInitializerItem';
import { imageBlockSettings } from './imageBlockSettings';

export class PluginBlockCarouselClient extends Plugin {
  async load() {
    this.app.addComponents({ Carousel })
    this.app.schemaSettingsManager.add(imageBlockSettings)
    this.app.schemaInitializerManager.addItem('page:addBlock', `otherBlocks.${imageBlockInitializerItem.name}`, imageBlockInitializerItem)
  }
}

export default PluginBlockCarouselClient;
```

上述代码首先将 `Carousel` 组件注册到系统中，这样前面 `carouselBlockSchema` 定义的 `x-component: 'Carousel'` 才能找到对应的组件，更多详细解释可以查看 [全局注册 Component 和 Scope](/plugin-samples/component-and-scope/global)。

然后将 `imageBlockSettings` 通过 [app.schemaSettingsManager.add](https://client.docs.nocobase.com/core/ui-schema/schema-settings-manager#schemasettingsmanageradd) 添加到系统中。

然后使用 [app.schemaInitializerManager.addItem](https://client.docs.nocobase.com/core/ui-schema/schema-initializer-manager#schemainitializermanageradditem) 将 `imageBlockInitializerItem` 添加对应 Initializer 子项中，其中 `page:addBlock` 是页面上 `Add block` 的 name，`otherBlocks` 是其父级的 name。

然后我们 hover `Add block` 按钮，就可以看到 `Image` 这个新的区块类型了，点击 `Image`，就可以添加一个新的 `Carousel` 区块了。

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/20240522-175523.mp4" type="video/mp4" />
</video>

#### 5.2 添加到弹窗 Add block 中

我们不仅需要将其添加到页面级别的 `Add block` 中，还需要将其添加到 `Table` 区块 `Add new` 弹窗的 `Add block` 中。

![img_v3_02b4_fc47fe3a-35a1-4186-999c-0b48e6e001dg](https://static-docs.nocobase.com/img_v3_02b4_fc47fe3a-35a1-4186-999c-0b48e6e001dg.jpg)

我们按照页面级别获取 `name` 的方式获取到 `Table` 区块的 `Add block` 的 `name` 为 `popup:addNew:addBlock`，`Other Blocks` 对应的 name 为 `otherBlocks`。

然后修改 `packages/plugins/@nocobase-sample/plugin-block-carousel/src/client/index.tsx` 文件：

```diff
export class PluginBlockCarouselClient extends Plugin {
  async load() {
    this.app.addComponents({ Carousel })
    this.app.schemaSettingsManager.add(imageBlockSettings)

    this.app.schemaInitializerManager.addItem('page:addBlock', `otherBlocks.${imageBlockInitializerItem.name}`, imageBlockInitializerItem)
+   this.app.schemaInitializerManager.addItem('popup:addNew:addBlock', `otherBlocks.${imageBlockInitializerItem.name}`, imageBlockInitializerItem)
  }
}
```

![img_v3_02b4_7062bfab-5a7b-439c-b385-92c5704b6b3g](https://static-docs.nocobase.com/img_v3_02b4_7062bfab-5a7b-439c-b385-92c5704b6b3g.jpg)

#### 5.3 添加到移动端 Add block 中

> 首先要激活移动端插件，参考 [激活插件](/welcome/getting-started/plugin#3-activate-the-plugin) 文档。

我们可以将其添加到移动端的 `Add block` 中，获取 `name` 的方法这里就不再赘述了。

然后修改 `packages/plugins/@nocobase-sample/plugin-block-carousel/src/client/index.tsx` 文件：

```diff
export class PluginBlockCarouselClient extends Plugin {
  async load() {
    this.app.addComponents({ Carousel })
    this.app.schemaSettingsManager.add(imageBlockSettings)

    this.app.schemaInitializerManager.addItem('page:addBlock', `otherBlocks.${imageBlockInitializerItem.name}`, imageBlockInitializerItem)
    this.app.schemaInitializerManager.addItem('popup:addNew:addBlock', `otherBlocks.${imageBlockInitializerItem.name}`, imageBlockInitializerItem)
+   this.app.schemaInitializerManager.addItem('mobilePage:addBlock', `otherBlocks.${imageBlockInitializerItem.name}`, imageBlockInitializerItem)
  }
}
```

![img_v3_02b4_ec873b25-5a09-4f3a-883f-1d722035799g](https://static-docs.nocobase.com/img_v3_02b4_ec873b25-5a09-4f3a-883f-1d722035799g.jpg)

如果需要更多的 `Add block`，可以继续添加，只需要知道对应的 `name` 即可。

### 6. 总结

通过上述步骤，我们就可以实现一个简单的区块 `Simple Block`，并将其添加到 `Page`、`Table` 以及移动端的 `Add block` 中。

其中上述各个概念的关系是：

`Schema Initializer Item` 提供了样式和点击事件回调 -> 通过点击事件回调插入 `Schema` 到界面 -> `Schema` 包含了组件和 `SchemaSettings`。

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
