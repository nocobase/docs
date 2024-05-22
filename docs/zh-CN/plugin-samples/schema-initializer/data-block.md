# 添加数据区块 Data Block

## 场景说明

NocoBase 有很多 `Add block` 按钮用于向界面添加区块。其中有些和数据表有关系的被成为数据区块 `Data Block`，有些和数据表无关的被称为简单区块 `Simple Block`。

TODO：目前已有的图片的截图

但是目前已有的区块类型不一定满足我们的需求，我们就需要根据需求自定开发一些区块，本篇文章就是针对简单区块 `Data Block` 进行说明。

## 示例说明

本实例会创建一个信息区块类型，并将其添加到 `Page`、`Table` 以及移动端的 `Add block` 中。

本实例主要为了演示 initializer 的使用，更多关于区块扩展可以查看 [区块扩展](/plugin-samples/block) 文档。

本文档完整的示例代码可以在 [plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-initializer-data-block) 中查看。

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
yarn pm create @nocobase-sample/plugin-initializer-data-block
yarn pm enable @nocobase-sample/plugin-initializer-data-block
```

然后启动项目即可：

```bash
yarn dev
```

然后登录后访问 [http://localhost:13000/admin/pm/list/local/](http://localhost:13000/admin/pm/list/local/) 就可以看到插件已经安装并启用了。

## 功能实现

在实现本示例之前，我们需要先了解一些基础知识：

- [SchemaInitializer 教程](/development/client/ui-schema/initializer)：用于向界面内添加各种区块、字段、操作等
- [SchemaInitializer API](https://client.docs.nocobase.com/core/ui-schema/schema-initializer)：用于向界面内添加各种区块、字段、操作等
- [UI Schema](/development/client/ui-schema/what-is-ui-schema)：用于定义界面的结构和样式
- [Designable 设计器](/development/client/ui-schema/designable)：用于修改 Schema

### 1. 实现 InfoBlock 组件

首先我们新建 `packages/plugins/@nocobase-sample/plugin-initializer-data-block/src/client/InfoBlock.tsx` 文件，其内容如下：

```tsx | pure
import React from 'react';

export const InfoBlock = () => {
  return 'TODO'
}
```

### 2. 定义 Schema Initializer Item

我们继续修改 `packages/plugins/@nocobase-sample/plugin-initializer-data-block/src/client/InfoBlock.tsx` 文件，添加 `InfoBlock` 的 Schema Initializer Item：

```ts | pure
import React from 'react';
import { SchemaInitializerItemType, useSchemaInitializer } from '@nocobase/client'
import { CodeOutlined } from '@ant-design/icons';

export const infoInitializerItem: SchemaInitializerItemType = {
  name: 'InfoBlock',
  Component: 'DataBlockInitializer',
  useComponentProps() {
    const { insert } = useSchemaInitializer();
    return {
      title: 'Info',
      icon: <CodeOutlined />,
      componentType: 'Info',
      onCreateBlockSchema({ item }) {
        console.log('item', item)
      },
    };
  },
}
```

实现数据区块的效果核心是 DataBlockInitializer（文档 TODO）。

`infoInitializerItem`：
  - `Component`：与 [添加简单区块 Simple Block](/plugin-samples/schema-initializer/simple-block) 中使用的是 `type`，这里使用的是 `Component`，[2 种定义方式](https://client.docs.nocobase.com/core/ui-schema/schema-initializer#two-ways-to-define-component-and-type) 都是可以的
  - `useComponentProps`：`DataBlockInitializer` 组件的属性
    - `title`：标题
    - `icon`：图标，更多图标可以查看 [Ant Design Icons](https://ant.design/components/icon/)
    - `componentType`：组件类型，这里是 `Info`
    - `onCreateBlockSchema`：当点击数据表后的回调
      - [useSchemaInitializer](https://client.docs.nocobase.com/core/ui-schema/schema-initializer#useschemainitializer)：提供了插入 Schema 的方法

更多关于 Schema Initializer 的定义可以参考 [Schema Initializer](https://client.docs.nocobase.com/core/ui-schema/schema-initializer) 文档。

TODO：点击效果。

### 3. 注册组件和 Schema Initializer Item

然后我们修改 `packages/plugins/@nocobase-sample/plugin-initializer-data-block/src/client/index.tsx` 文件：

```tsx | pure
import { Plugin } from '@nocobase/client';
import { InfoBlock, infoBlockSettings, infoInitializerItem } from './InfoBlock';

export class PluginInitializerNewClient extends Plugin {
  async load() {
    this.app.addComponents({ InfoBlock });
    this.app.schemaInitializerManager.addItem('page:addBlock', `dataBlocks.${infoInitializerItem.name}`, infoInitializerItem)
  }
}

export default PluginInitializerNewClient;
```

然后我们就可以看到 `Info` 这个新的区块类型了，点击后看到控制台就有我们的输出了，其中 2 个重要的信息是 `item.name` 数据表名称 和 `item.dataSource` 数据表所属的数据源。

### 4. 实现 infoBlockSchema

```tsx | pure
export const infoBlockSettings = new SchemaSettings({
  name: 'blockSettings:info',
  items: [
    {
      name: 'remove',
      type: 'remove',
    }
  ]
})

function getInfoBlockSchema({ dataSource, collection }) {
  return {
    type: 'void',
    'x-decorator': 'DataBlockProvider',
    'x-decorator-props': {
      dataSource,
      collection,
      action: 'list',
    },
    'x-settings': infoBlockSettings.name,
    'x-component': 'CardItem',
    properties: {
      info: {
        type: 'void',
        'x-component': 'InfoBlock',
      }
    }
  }
}
```

```diff
export const infoInitializerItem: SchemaInitializerItemType = {
  name: 'InfoBlock',
  Component: 'DataBlockInitializer',
  useComponentProps() {
    const { insert } = useSchemaInitializer();
    return {
      title: 'Info',
      icon: <CodeOutlined />,
      componentType: 'Info',
      onCreateBlockSchema({ item }) {
-       console.log('item', item)
+       insert(getInfoBlockSchema({ dataSource: item.dataSource, collection: item.name }))
      },
    };
  },
}
```

我们将 `console.log` 替换为 `insert` 方法，将 `getInfoBlockSchema` 的返回值插入到 Schema 中。

`getInfoBlockSchema` 返回的 Schema 说明：
  - `type: 'void'`：表示没有任何数据
  - `x-decorator: 'DataBlockProvider'`：数据区块提供者，用于提供数据，更多关于 DataBlockProvider 可以查看 [DataBlockProvider](https://client.docs.nocobase.com/core/data-block/data-block-provider)
  - `x-decorator-props`：`DataBlockProvider` 的属性
    - `dataSource`：数据源
    - `collection`：数据表
    - `action: 'list'`：操作类型，这里是 `list`，获取数据列表
  - `x-settings: infoBlockSettings.name`：Schema Settings
  - `x-component: 'CardItem'`：[CardItem 组件](https://client.docs.nocobase.com/components/card-item)
  - `properties`：子节点
    - `info`：信息区块

然后修改 `packages/plugins/@nocobase-sample/plugin-initializer-data-block/src/client/index.tsx` 文件，将 `infoBlockSettings` 添加到系统中：

```diff
import { Plugin } from '@nocobase/client';
import { InfoBlock, infoBlockSettings, infoInitializerItem } from './InfoBlock';

export class PluginInitializerDataBlockClient extends Plugin {
  async load() {
    // ...
+   this.app.schemaSettingsManager.add(infoBlockSettings);
  }
}
```

然后我们点击 `Info` 区块，就可以看到一个新的信息区块了，里面显示的是 TODO。

### 5. 实现 InfoBlock 组件

我们继续修改 `packages/plugins/@nocobase-sample/plugin-initializer-data-block/src/client/InfoBlock.tsx` 文件：

```tsx | pure
import { SchemaInitializerItemType, SchemaSettings, useCollection, useDataBlockRequest, useSchemaInitializer } from '@nocobase/client'

export const InfoBlock = () => {
  const collection = useCollection();
  const { data } = useDataBlockRequest();
  return <div>
    <div>collection: {collection.name}</div>
    <div>data list: <pre>{JSON.stringify(data?.data, null, 2)}</pre></div>
  </div>
}
```

DataBlockProvider 会将数据传递子节点，通过我们可以通过 [useCollection](https://client.docs.nocobase.com/core/data-source/collection-provider#usecollection) 获取当前数据表，通过 [useDataBlockRequest](https://client.docs.nocobase.com/core/data-block/data-block-request-provider#usedatablockrequest) 获取数据区块请求。


TODO：截图效果

### 6. 添加到更多的 Add block 中

目前我们只添加到了 `page:addBlock` 中，我们可以添加到更多的地方，比如 `table:addBlock`、`mobile:addBlock` 等。

```diff
import { Plugin } from '@nocobase/client';
import { InfoBlock, infoBlockSettings, infoInitializerItem } from './InfoBlock';

export class PluginInitializerDataBlockClient extends Plugin {
  async load() {
    this.app.addComponents({ InfoBlock });
    this.app.schemaSettingsManager.add(infoBlockSettings);

    this.app.schemaInitializerManager.addItem('page:addBlock', `dataBlocks.${infoInitializerItem.name}`, infoInitializerItem)
+   this.app.schemaInitializerManager.addItem('popup:addNew:addBlock', `dataBlocks.${infoInitializerItem.name}`, infoInitializerItem)
+   this.app.schemaInitializerManager.addItem('mobilePage:addBlock', `dataBlocks.${infoInitializerItem.name}`, infoInitializerItem)
  }
}

export default PluginInitializerDataBlockClient;
```

TODO：截图效果

## 打包和上传到生产环境

按照 [构建并打包插件](/development/your-fisrt-plugin#构建并打包插件) 文档说明，我们可以打包插件并上传到生产环境。

如果是 clone 的源码，需要先执行一次全量 build，将插件的依赖也构建好。

```bash
yarn build
```

如果是使用的 `create-nocobase-app` 创建的项目，可以直接执行：

```bash
yarn build @nocobase-sample/plugin-initializer-data-block --tar
```

这样就可以看到 `storage/tar/@nocobase-sample/plugin-initializer-data-block.tar.gz` 文件了，然后通过[上传的方式](/welcome/getting-started/plugin)进行安装。
