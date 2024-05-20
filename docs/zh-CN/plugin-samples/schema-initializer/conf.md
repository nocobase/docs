# 向已有的 Configure actions 里添加新子项

## 场景说明

NocoBase 中除了有许多 `Add block` 按钮用于向界面添加区块，还有很多 `Configure actions` 用于向界面添加操作按钮。

如果目前已有的操作按钮不一定满足我们的需求，我们需要向已有的 `Configure actions` 里添加子项用于创建新的操作按钮。

## 示例说明

本文档完整的示例代码可以在 [plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-add-initializer-item-to-actions) 中查看。

TODO：效果展示

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
yarn pm create @nocobase-sample/plugin-add-initializer-item-to-actions
yarn pm enable @nocobase-sample/plugin-add-initializer-item-to-actions
```

然后启动项目即可：

```bash
yarn dev
```

然后登录后访问 [http://localhost:13000/admin/pm/list/local/](http://localhost:13000/admin/pm/list/local/) 就可以看到插件已经安装并启用了。

## 功能实现

### 1. 实现新的区块类型

首先我们新建 `packages/plugins/@nocobase-sample/plugin-add-initializer-item-to-actions/src/client/CarouselBlock.tsx` 文件，其内容如下：

```tsx | pure
import React, { FC } from 'react';
import { Carousel, Result } from 'antd';
import { withDynamicSchemaProps } from '@nocobase/client';

export interface CarouselBlockProps {
  images: { url: string; title: string }[];
  /**
   * @default 300
   */
  height?: number;
}

export const CarouselBlock: FC<{ images: any[], height?: number }> = withDynamicSchemaProps(({ images, height = 300 }) => {
  return (images && images.length) ? (
    <Carousel>
      {images.map((image) => (
        <div>
          <img key={image.title} src={image.url} alt={image.title} style={{ height, width: '100%', objectFit: 'cover', display: 'inline-block' }} />
        </div>
      ))}
    </Carousel>
  ) : <Result status='404' />
}, { displayName: 'CarouselBlock' })
```

`CarouselBlock` 是一个基于 ant-design 的 `Carousel` 组件实现的新的区块类型，接受 `images` 和 `height` 两个参数。

需要注意其需要被 [withDynamicSchemaProps](/development/client/ui-schema/what-is-ui-schema#x-component-props-和-x-use-component-props) 包裹，这样就可以接受动态的参数了。

### 2. 定义 Schema Initializer Item

我们继续修改 `packages/plugins/@nocobase-sample/plugin-add-initializer-item-to-actions/src/client/CarouselBlock.tsx` 文件，添加 `CarouselBlock` 的 Schema Initializer Item：

```ts | pure
import { SchemaInitializerItemType, useSchemaInitializer } from '@nocobase/client';

export const CarouselInitializerItem: SchemaInitializerItemType = {
  type: 'item',
  name: 'CarouselBlock',
  icon: 'PlayCircleOutlined',
  useComponentProps() {
    const { insert } = useSchemaInitializer();
    return {
      title: 'Carousel',
      onClick: () => {
        const carouselBlockSchema: ISchema = {
          type: 'void',
          'x-decorator': 'CardItem',
          'x-component': 'CarouselBlock',
        };

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
- [useSchemaInitializer](https://client.docs.nocobase.com/core/ui-schema/schema-initializer#useschemainitializer)：用于获取 `SchemaInitializerContext` 上下文，包含了一些操作方法

更多关于 Schema Item 的定义可以参考 [Schema Initializer Item](https://client.docs.nocobase.com/core/ui-schema/schema-initializer#built-in-components-and-types) 文档。

关于 `carouselBlockSchema` 的定义：

- `type`：类型，这里是 `void`，表示没有任何数据
- `x-decorator`：装饰器，这里是 [CardItem](https://client.docs.nocobase.com/components/card-item)，表示是一个卡片
- `x-component`：组件，这里是 `CarouselBlock`，就是我们上面定义的新的区块类型

更多关于 Schema 的说明请查看 [UI Schema](/development/client/ui-schema/what-is-ui-schema) 文档。

### 4. 添加到页面 Add block 中

系统中有很多个 `Add block` 按钮，但他们的 **name 是不同的**，如果我们需要添加到页面级别的 `Add block` 中，我们需要知道对应的 `name`。

TODO：截图

然后我们修改 `packages/plugins/@nocobase-sample/plugin-add-initializer-item-to-actions/src/client/index.tsx` 文件：

```tsx | pure
import { Plugin } from '@nocobase/client';
import { CarouselBlock, CarouselInitializerItem } from './CarouselBlock';

export class PluginAddInitializerItemToBlockClient extends Plugin {
  async load() {
    this.app.addComponents({ CarouselBlock })
    this.app.schemaInitializerManager.addItem('page:addBlock', `otherBlocks.${CarouselInitializerItem.name}`, CarouselInitializerItem)
  }
}

export default PluginAddInitializerItemToBlockClient;
```

上述代码首先将 `CarouselBlock` 组件注册到系统中，这样前面 `carouselBlockSchema` 定义的 `x-component: 'CarouselBlock'` 才能找到对应的组件，更多详细解释可以查看 [全局注册 Component 和 Scope](/plugin-samples/component-and-scope/global)。

然后使用 [app.schemaInitializerManager.addItem](https://client.docs.nocobase.com/core/ui-schema/schema-initializer-manager#schemainitializermanageradditem) 将 `CarouselInitializerItem` 添加对应 Initializer 子项中，其中 `page:addBlock` 是页面上 `Add block` 的 name，`otherBlocks` 是其父级的 name。

然后我们 hover `Add block` 按钮，就可以看到 `Carousel` 这个新的区块类型了。

TODO：效果展示

然后点击 `Carousel`，就可以添加一个新的 `CarouselBlock` 区块了。

TODO：截图

### 5. 添加 Schema Settings

目前的 `CarouselBlock` 区块是没有任何数据的，我们需要通过 Schema Settings 的能力做到可视化配置数据。

我们继续修改 `packages/plugins/@nocobase-sample/plugin-add-initializer-item-to-actions/src/client/CarouselBlock.tsx` 文件：

```tsx | pure
import { useFieldSchema } from '@formily/react'
import { ISchema, SchemaInitializerItemType, SchemaSettings, useDesignable, useSchemaInitializer, withDynamicSchemaProps } from '@nocobase/client';

export const carouselSettings = new SchemaSettings({
  name: 'blockSettings:carousel',
  items: [
    {
      name: 'images',
      type: 'actionModal',
      useComponentProps() {
        const fieldSchema = useFieldSchema();
        const { deepMerge } = useDesignable();

        const modalSchema: ISchema = {
          type: 'object',
          properties: {
            images: {
              title: 'Edit images',
              type: 'string',
              default: fieldSchema['x-component-props']?.images,
              'x-decorator': 'FormItem',
              'x-component': 'Upload.Attachment',
              'x-component-props': {
                action: 'attachments:create',
                multiple: true,
              },
            },
          },
        }
        return {
          title: 'Edit images',
          schema: modalSchema,
          onSubmit({ images }: any) {
            deepMerge({
              'x-uid': fieldSchema['x-uid'],
              'x-component-props': {
                images,
              },
            });
          }
        }
      },
    },
    {
      name: 'height',
      type: 'actionModal',
      useComponentProps() {
        const fieldSchema = useFieldSchema();
        const { deepMerge } = useDesignable();

        const modalSchema: ISchema = {
          type: 'object',
          properties: {
            height: {
              title: 'Edit height',
              type: 'number',
              default: fieldSchema['x-component-props']?.height || 300,
              'x-decorator': 'FormItem',
              'x-component': 'InputNumber',
            },
          },
        }
        return {
          title: 'Edit height',
          schema: modalSchema,
          onSubmit({ height }: any) {
            deepMerge({
              'x-uid': fieldSchema['x-uid'],
              'x-component-props': {
                height,
              },
            });
          }
        }
      },
    },
    {
      type: 'remove',
      name: 'remove',
    }
  ]
});
```

我们总共定义了三个设置项：

- `images`：编辑图片，[actionModal](https://client.docs.nocobase.com/core/ui-schema/schema-settings#built-in-components-and-types) 类型，可以上传多个图片
- `height`：编辑高度，[actionModal](https://client.docs.nocobase.com/core/ui-schema/schema-settings#built-in-components-and-types) 类型，可以编辑高度
- `remove`：删除区块，[remove](https://client.docs.nocobase.com/core/ui-schema/schema-settings#schemasettingsremove-1) 类型 点击后可以删除当前区块

关于 SchemaSettings 更多详细的说明可以查看 [Schema Settings](/plugin-samples/schema-settings) 文档，这里就不做详细解释了。

然后我们修改 `carouselBlockSchema` 的定义：

```diff
export const CarouselInitializerItem: SchemaInitializerItemType = {
  type: 'item',
  name: 'CarouselBlock',
  icon: 'PlayCircleOutlined',
  useComponentProps() {
    const { insert } = useSchemaInitializer();
    return {
      title: 'Carousel',
      onClick: () => {
        const carouselBlockSchema: ISchema = {
          type: 'void',
          'x-decorator': 'CardItem',
          'x-component': 'CarouselBlock',
+         'x-settings': carouselSettings.name,
        };

        insert(carouselBlockSchema);
      },
    };
  },
}
```

然后修改 `packages/plugins/@nocobase-sample/plugin-add-initializer-item-to-actions/src/client/index.tsx`，将 `carouselSettings` 注册到系统中：

```diff
export class PluginAddInitializerItemToBlockClient extends Plugin {
  async load() {
    this.app.schemaInitializerManager.addItem('page:addBlock', `otherBlocks.${CarouselInitializerItem.name}`, CarouselInitializerItem)
    this.app.addComponents({ CarouselBlock })
+   this.app.schemaSettingsManager.add(carouselSettings)
  }
}
```

然后我们重新添加一个 `CarouselBlock` 区块，就可以看到右上角有一个 `Settings` 按钮了，点击后就可以编辑图片和高度了。

TODO：视频

### 5. 添加到弹窗 Add block 中

我们不仅需要将其添加到页面级别的 `Add block` 中，还需要将其添加到弹窗级别的 `Add block` 中。

我们先获取弹窗中 `Add block` 的 name，然后修改 `packages/plugins/@nocobase-sample/plugin-add-initializer-item-to-actions/src/client/index.tsx` 文件：

```diff
export class PluginAddInitializerItemToBlockClient extends Plugin {
  async load() {
    this.app.schemaInitializerManager.addItem('page:addBlock', `otherBlocks.${CarouselInitializerItem.name}`, CarouselInitializerItem)
    this.app.schemaInitializerManager.addItem('popup:addNew:addBlock', `otherBlocks.${CarouselInitializerItem.name}`, CarouselInitializerItem)
    this.app.addComponents({ CarouselBlock })
    this.app.schemaSettingsManager.add(carouselSettings)
  }
}
```

TODO：截图

如果需要更多的 `Add block`，可以继续添加，只需要知道对应的 `name` 即可。

## 打包和上传到生产环境

按照 [构建并打包插件](/development/your-fisrt-plugin#构建并打包插件) 文档说明，我们可以打包插件并上传到生产环境。

如果是 clone 的源码，需要先执行一次全量 build，将插件的依赖也构建好。

```bash
yarn build
```

如果是使用的 `create-nocobase-app` 创建的项目，可以直接执行：

```bash
yarn build @nocobase-sample/plugin-add-initializer-item-to-actions --tar
```

这样就可以看到 `storage/tar/@nocobase-sample/plugin-add-initializer-item-to-actions.tar.gz` 文件了，然后通过[上传的方式](/welcome/getting-started/plugin)进行安装。

