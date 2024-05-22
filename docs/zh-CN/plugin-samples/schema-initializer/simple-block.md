# 添加新的简单区块 Simple Block

## 场景说明

NocoBase 有很多 `Add block` 按钮用于向界面添加区块。其中有些和数据表有关系的被成为数据区块 `Data Block`，有些和数据表无关的被称为简单区块 `Simple Block`。

TODO：目前已有的图片的截图

但是目前已有的区块类型不一定满足我们的需求，我们就需要根据需求自定开发一些区块，本篇文章就是针对简单区块 `Simple Block` 进行说明。

## 示例说明

本实例会创建一个图片区块类型，并将其添加到 `Page`、`Table` 以及移动端的 `Add block` 中。

本实例主要为了演示 initializer 的使用，更多关于区块扩展可以查看 [区块扩展](/plugin-samples/block) 文档。

本文档完整的示例代码可以在 [plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-initializer-simple-block) 中查看。

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
yarn pm create @nocobase-sample/plugin-initializer-simple-block
yarn pm enable @nocobase-sample/plugin-initializer-simple-block
```

然后启动项目即可：

```bash
yarn dev
```

然后登录后访问 [http://localhost:13000/admin/pm/list/local/](http://localhost:13000/admin/pm/list/local/) 就可以看到插件已经安装并启用了。

## 功能实现

### 1. 实现 Image 区块类型

首先我们新建 `packages/plugins/@nocobase-sample/plugin-initializer-simple-block/src/client/ImageBlock.tsx` 文件，其内容如下：

```tsx | pure
import React, { FC } from 'react';

export const ImageBlock = () => {
  return <div style={{ height: 500 }}>
    <img
      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      src="https://picsum.photos/2000/500"
    />
  </div>
}
```

其就是一个普通的 React 组件，用于展示图片，也没有任何属性。

### 2. 定义 Schema Initializer Item

我们继续修改 `packages/plugins/@nocobase-sample/plugin-initializer-simple-block/src/client/ImageBlock.tsx` 文件，添加 `ImageBlock` 的 Schema Initializer Item：

```ts | pure
import { ISchema, SchemaInitializerItemType, useSchemaInitializer } from '@nocobase/client';

export const imageInitializerItem: SchemaInitializerItemType = {
  type: 'item',
  name: 'ImageBlock',
  icon: 'FileImageOutlined',
  useComponentProps() {
    const { insert } = useSchemaInitializer();
    return {
      title: 'Image',
      onClick: () => {
        const imageBlockSchema: ISchema = {
          type: 'void',
          'x-decorator': 'CardItem',
          'x-component': 'ImageBlock',
        };

        insert(imageBlockSchema);
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

关于 `imageBlockSchema` 的定义：

- `type`：类型，这里是 `void`，表示没有任何数据
- `x-decorator`：装饰器，这里是 [CardItem](https://client.docs.nocobase.com/components/card-item)，表示是一个卡片
- `x-component`：组件，这里是 `ImageBlock`，就是我们刚定义的组件

更多关于 Schema 的说明请查看 [UI Schema](/development/client/ui-schema/what-is-ui-schema) 文档。

### 3. 定义 Schema Settings

一个完整的 Block 还需要有 Schema Settings，用于配置一些属性，但 Schema Settings 不是本示例的重点，所以我们这里仅有一个 `remove` 操作。

```ts | pure
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

然后修改 `imageBlockSchema` 为：

```diff
const imageBlockSchema: ISchema = {
  type: 'void',
  'x-decorator': 'CardItem',
  'x-component': 'ImageBlock',
+ 'x-settings': imageBlockSettings.name,
};
```

### 4. 添加到页面 Add block 中

系统中有很多个 `Add block` 按钮，但他们的 **name 是不同的**，如果我们需要添加到页面级别的 `Add block` 中，我们需要知道对应的 `name`。

TODO：截图

然后我们修改 `packages/plugins/@nocobase-sample/plugin-initializer-simple-block/src/client/index.tsx` 文件：

```tsx | pure
import { Plugin } from '@nocobase/client';
import { ImageBlock, imageBlockSettings, imageInitializerItem } from './ImageBlock';

export class PluginInitializerSimpleBlockClient extends Plugin {
  async load() {
    this.app.addComponents({ ImageBlock })
    this.app.schemaSettingsManager.add(imageBlockSettings)

    this.app.schemaInitializerManager.addItem('page:addBlock', `otherBlocks.${imageInitializerItem.name}`, imageInitializerItem)
  }
}

export default PluginInitializerSimpleBlockClient;
```

上述代码首先将 `ImageBlock` 组件注册到系统中，这样前面 `imageBlockSchema` 定义的 `x-component: 'ImageBlock'` 才能找到对应的组件，更多详细解释可以查看 [全局注册 Component 和 Scope](/plugin-samples/component-and-scope/global)。

然后将 `imageBlockSettings` 通过 [app.schemaSettingsManager.add](https://client.docs.nocobase.com/core/ui-schema/schema-settings-manager#schemasettingsmanageradd) 添加到系统中。

然后使用 [app.schemaInitializerManager.addItem](https://client.docs.nocobase.com/core/ui-schema/schema-initializer-manager#schemainitializermanageradditem) 将 `imageInitializerItem` 添加对应 Initializer 子项中，其中 `page:addBlock` 是页面上 `Add block` 的 name，`otherBlocks` 是其父级的 name。

然后我们 hover `Add block` 按钮，就可以看到 `Image` 这个新的区块类型了。

TODO：效果展示

然后点击 `Image`，就可以添加一个新的 `ImageBlock` 区块了。

TODO：截图

### 5. 添加到弹窗 Add block 中

我们不仅需要将其添加到页面级别的 `Add block` 中，还需要将其添加到弹窗级别的 `Add block` 中。

我们先获取弹窗中 `Add block` 的 name。

TODO：获取 name

然后修改 `packages/plugins/@nocobase-sample/plugin-initializer-simple-block/src/client/index.tsx` 文件：

```diff
export class PluginInitializerSimpleBlockClient extends Plugin {
  async load() {
    this.app.addComponents({ ImageBlock })
    this.app.schemaSettingsManager.add(imageBlockSettings)

    this.app.schemaInitializerManager.addItem('page:addBlock', `otherBlocks.${imageInitializerItem.name}`, imageInitializerItem)
+   this.app.schemaInitializerManager.addItem('popup:addNew:addBlock', `otherBlocks.${imageInitializerItem.name}`, imageInitializerItem)
  }
}
```

TODO：截图


### 6. 添加到移动端 Add block 中

> 首先要激活移动端插件，参考 [激活插件](/welcome/getting-started/plugin#3-activate-the-plugin) 文档。

我们可以将其添加到移动端的 `Add block` 中。

我们先获取对应 `Add block` 的 name。

TODO：获取 name

然后修改 `packages/plugins/@nocobase-sample/plugin-initializer-simple-block/src/client/index.tsx` 文件：

```diff
export class PluginInitializerSimpleBlockClient extends Plugin {
  async load() {
    this.app.addComponents({ ImageBlock })
    this.app.schemaSettingsManager.add(imageBlockSettings)

    this.app.schemaInitializerManager.addItem('page:addBlock', `otherBlocks.${imageInitializerItem.name}`, imageInitializerItem)
    this.app.schemaInitializerManager.addItem('popup:addNew:addBlock', `otherBlocks.${imageInitializerItem.name}`, imageInitializerItem)
+   this.app.schemaInitializerManager.addItem('mobilePage:addBlock', `otherBlocks.${imageInitializerItem.name}`, imageInitializerItem)
  }
}
```

如果需要更多的 `Add block`，可以继续添加，只需要知道对应的 `name` 即可。

## 打包和上传到生产环境

按照 [构建并打包插件](/development/your-fisrt-plugin#构建并打包插件) 文档说明，我们可以打包插件并上传到生产环境。

如果是 clone 的源码，需要先执行一次全量 build，将插件的依赖也构建好。

```bash
yarn build
```

如果是使用的 `create-nocobase-app` 创建的项目，可以直接执行：

```bash
yarn build @nocobase-sample/plugin-initializer-simple-block --tar
```

这样就可以看到 `storage/tar/@nocobase-sample/plugin-initializer-simple-block.tar.gz` 文件了，然后通过[上传的方式](/welcome/getting-started/plugin)进行安装。
