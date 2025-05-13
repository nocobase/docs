# Adding Data Blocks

## Scenario Description

NocoBase has many `Add block` buttons used to add blocks to the interface. Some of these blocks are related to data tables and are referred to as Data Blocks, while others that are not related to data tables are called Simple Blocks.

![img_v3_02b4_170eddb5-d3b4-461e-b74b-f83250941e5g](https://static-docs.nocobase.com/img_v3_02b4_170eddb5-d3b4-461e-b74b-f83250941e5g.jpg)

However, the existing block types may not fully meet our needs, so we may need to custom-develop some blocks according to our requirements. This article specifically explains how to create Data Blocks.

## Example Explanation

In this example, we will create an `Info` block and add it to the `Page`, `Table`, and the mobile `Add block` sections.

This example mainly demonstrates the usage of the initializer. For more information on block extensions, refer to the [Block Extension](/plugin-samples/block) documentation.

The complete sample code for this document can be found in the [plugin-samples repository](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-initializer-block-data).

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/20240522-182547.mp4" type="video/mp4" />
</video>

## Initializing the Plugin

Following the instructions in the [Creating Your First Plugin](/development/your-fisrt-plugin) document, if you don't have a project yet, you can create one first. If you already have a project or have cloned the source code, skip this step.

```bash
yarn create nocobase-app my-nocobase-app -d sqlite
cd my-nocobase-app
yarn install
yarn nocobase install
```

Next, initialize a plugin and add it to the system:

```bash
yarn pm create @nocobase-sample/plugin-initializer-block-data
yarn pm enable @nocobase-sample/plugin-initializer-block-data
```

Then, start the project:

```bash
yarn dev
```

After logging in, visit [http://localhost:13000/admin/pm/list/local/](http://localhost:13000/admin/pm/list/local/) to see that the plugin has been installed and enabled.

## Feature Implementation

Before implementing this example, we need to understand some basic concepts:

- [SchemaInitializer Tutorial](/development/client/ui-schema/initializer): Used to add various blocks, fields, operations, etc., to the interface.
- [SchemaInitializer API](https://client.docs.nocobase.com/core/ui-schema/schema-initializer): Provides an API for adding various blocks, fields, operations, etc., to the interface.
- [UI Schema](/development/client/ui-schema/what-is-ui-schema): Used for defining the structure and style of the interface.
- [Designable](/development/client/ui-schema/designable): A designer tool used for modifying schemas.

```bash
.
├── client # Client-side plugin
│   ├── initializer # Initializer
│   ├── component # Block components
│   ├── index.tsx # Entry point for the client-side plugin
│   ├── locale.ts # Multi-language utility functions
│   ├── constants.ts # Constants
│   ├── schema # Schema
│   └── settings # Schema settings
├── locale # Multi-language files
│   ├── en-US.json # English
│   └── zh-CN.json # Chinese
├── index.ts # Server-side plugin entry point
└── server # Server-side plugin
```

### 1. Defining Names

First, we need to define the block's name, which will be used in various places.

Create `packages/plugins/@nocobase-sample/plugin-initializer-block-data/src/client/constants.ts`:

```ts
export const BlockName = 'Info';
export const BlockNameLowercase = BlockName.toLowerCase();
```

### 2. Implementing Block Components

#### 2.1 Defining the Block Component

In this example, we need to create an `Info` block component with the following requirements:

- Display the name of the current block's data table.
- Display the current block's data list.

First, create `packages/plugins/@nocobase-sample/plugin-initializer-block-data/src/client/component/Info.tsx` with the following content:

```tsx | pure
import React, { FC } from 'react';
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
```

The `Info` component is essentially a functional component wrapped by `withDynamicSchemaProps`. The [withDynamicSchemaProps](/development/client/ui-schema/what-is-ui-schema#x-component-props-和-x-use-component-props) is a higher-order component used to handle dynamic properties in schemas.

Without considering `withDynamicSchemaProps`, the `Info` component is a simple functional component.

Next, export it in `packages/plugins/@nocobase-sample/plugin-initializer-block-data/src/client/component/index.ts`:

```tsx | pure
export * from './Info';
```

#### 2.2 Registering the Block Component

We need to register the `Info` component in the system via the plugin.

```tsx | pure
import { Plugin } from '@nocobase/client';
import { Info } from './component';

export class PluginInitializerBlockDataClient extends Plugin {
  async load() {
    this.app.addComponents({ Info })
  }
}

export default PluginInitializerBlockDataClient;
```

#### 2.3 Verifying the Block Component

There are two ways to verify the component:

- Temporary page verification: You can create a temporary page, render the `Info` component, and check if it meets the requirements.
- Documentation example verification: You can start the documentation with `yarn doc plugins/@nocobase-sample/plugin-initializer-block-data` and verify the component through a documentation example (TODO).

For this example, we'll use **Temporary Page Verification**. Create a page and add one or more `Info` components based on the parameters, then check if it meets the requirements.

```tsx | pure
import React from 'react';
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
```

Then, visit `http://localhost:13000/admin/info-component` to see the corresponding content on the test page.

![20240526165834](https://static-docs.nocobase.com/20240526165834.png)

After verification, delete the test page.


















### 3. 定义区块 Schema

#### 3.1 定义区块 Schema

NocoBase 的动态页面都是通过 Schema 来渲染，所以我们需要定义一个 Schema，后续用于在界面中添加 `Info` 区块。在实现本小节之前，我们需要先了解一些基础知识：

- [UI Schema 协议](/development/client/ui-schema/what-is-ui-schema)：详细介绍 Schema 的结构和每个属性的作用
- [DataBlockProvider](https://client.docs.nocobase.com/core/data-block/data-block-provider)：数据区块

我们新建 `packages/plugins/@nocobase-sample/plugin-initializer-block-data/src/client/schema/index.ts` 文件：

```ts
import { useCollection, useDataBlockRequest } from "@nocobase/client";

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
```

这里有 2 个点需要说明：

- `getInfoSchema()`：之所以定义为函数，因为 `dataSource` 和 `collection` 是动态的，由点击的数据表决定
- `useInfoProps()`：用于处理 `Info` 组件的动态属性，并且因为要存到数据库，所以这里的值类型为 string 类型。

`getInfoSchema()`：返回 Info 的 Schema
  - `type: 'void'`：表示没有任何数据
  - `x-decorator: 'DataBlockProvider'`：数据区块提供者，用于提供数据，更多关于 DataBlockProvider 可以查看 [DataBlockProvider](https://client.docs.nocobase.com/core/data-block/data-block-provider)
  - `x-decorator-props`：`DataBlockProvider` 的属性
    - `dataSource`：数据源
    - `collection`：数据表
    - `action: 'list'`：操作类型，这里是 `list`，获取数据列表
  - `x-component: 'CardItem'`：[CardItem 组件](https://client.docs.nocobase.com/components/card-item)，目前的区块都是被包裹在卡片中的，用于提供样式、布局和拖拽等功能
  - `properties`：子节点
    - `info`：信息区块

`useInfoProps()`：Info 组件的动态属性
  - [useCollection](https://client.docs.nocobase.com/core/data-source/collection-provider#usecollection)：获取当前数据表，由 [DataBlockProvider](https://client.docs.nocobase.com/core/data-block/data-block-provider) 提供
  - [useDataBlockRequest](https://client.docs.nocobase.com/core/data-block/data-block-request-provider#usedatablockrequest) 获取数据区块请求，由 [DataBlockProvider](https://client.docs.nocobase.com/core/data-block/data-block-provider) 提供

上述 Schema 转为 React 组件后相当于：

```tsx | pure
<DataBlockProvider collection={collection} dataSource={dataSource} action='list'>
  <CardItem>
    <Info {...useInfoProps()} />
  </CardItem>
</DataBlockProvider>
```

#### 3.2 注册 scope

我们需要将 `useInfoProps` 注册到系统中，这样 [x-use-component-props](/development/client/ui-schema/what-is-ui-schema#x-component-props-和-x-use-component-props) 才能找到对应的 scope。

```tsx | pure
import { Plugin } from '@nocobase/client';
import { Info } from './component';
import { useInfoProps } from './schema';

export class PluginInitializerBlockDataClient extends Plugin {
  async load() {
    this.app.addComponents({ Info })
    this.app.addScopes({ useInfoProps });
  }
}

export default PluginInitializerBlockDataClient;
```

更多关于 Scope 的说明可以查看 [全局注册 Component 和 Scope](/plugin-samples/component-and-scope/global)

#### 3.3 验证区块 Schema

同验证组件一样，我们可以通过临时页面验证或者文档示例验证的方式来验证 Schema 是否符合需求。我们这里以临时页面验证为例：

```tsx | pure
import React from 'react';
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
```

- [SchemaComponentOptions](https://client.docs.nocobase.com/core/ui-schema/schema-component#schemacomponentoptions)：用于传递 Schema 中所需的 `components` 和 `scope`，具体的可查看 [局部注册 Component 和 Scope](/plugin-samples/component-and-scope/local)
- [SchemaComponent](https://client.docs.nocobase.com/core/ui-schema/schema-component#schemacomponent-1)：用于渲染 Schema

我们访问 [http://localhost:13000/admin/info-schema](http://localhost:13000/admin/info-schema) 就可以看到对应测试页面的内容了。

![20240526170053](https://static-docs.nocobase.com/20240526170053.png)

验证完毕后需要删除测试页面。

### 4. 定义 Schema Initializer Item

我们新建 `packages/plugins/@nocobase-sample/plugin-initializer-block-data/src/client/initializer/index.tsx` 文件：

```tsx | pure
import React from 'react';
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
```

实现数据区块的效果核心是 DataBlockInitializer（文档 TODO）。

`infoInitializerItem`：
  - `Component`：与 [添加简单区块 Simple Block](/plugin-samples/schema-initializer/block-simple) 中使用的是 `type`，这里使用的是 `Component`，[2 种定义方式](https://client.docs.nocobase.com/core/ui-schema/schema-initializer#two-ways-to-define-component-and-type) 都是可以的
  - `useComponentProps`：`DataBlockInitializer` 组件的属性
    - `title`：标题
    - `icon`：图标，更多图标可以查看 [Ant Design Icons](https://ant.design/components/icon/)
    - `componentType`：组件类型，这里是 `Info`
    - `onCreateBlockSchema`：当点击数据表后的回调
      - `item`：点击的数据表信息
        - `item.name`：数据表名称
        - `item.dataSource`：数据表所属的数据源
    - [useSchemaInitializer](https://client.docs.nocobase.com/core/ui-schema/schema-initializer#useschemainitializer)：提供了插入 Schema 的方法
  - `"x-toolbar": "BlockSchemaToolbar"`：`BlockSchemaToolbar` 用于左上角显示当前数据表，一般和 `DataBlockProvider` 搭配使用

更多关于 Schema Initializer 的定义可以参考 [Schema Initializer](https://client.docs.nocobase.com/core/ui-schema/schema-initializer) 文档。




























### 5. 实现 Schema Settings

#### 5.1 定义 Schema Settings

一个完整的 Block 还需要有 Schema Settings，用于配置一些属性和操作，但 Schema Settings 不是本示例的重点，所以我们这里仅有一个 `remove` 操作。

我们新建 `packages/plugins/@nocobase-sample/plugin-initializer-block-data/src/client/settings/index.ts` 文件：

```ts
import { SchemaSettings } from "@nocobase/client";
import { BlockNameLowercase } from "../constants";

export const infoSettings = new SchemaSettings({
  name: `blockSettings:${BlockNameLowercase}`,
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
```

#### 5.2 注册 Schema Settings

```ts
import { Plugin } from '@nocobase/client';
import { infoSettings } from './settings';

export class PluginInitializerBlockDataClient extends Plugin {
  async load() {
    // ...
    this.app.schemaSettingsManager.add(infoSettings)
  }
}

export default PluginInitializerBlockDataClient;
```

#### 5.3 使用 Schema Settings

我们修改 `packages/plugins/@nocobase-sample/plugin-initializer-block-data/src/client/schema/index.ts` 文件的 `getInfoSchema` 方法，将 `x-settings` 设置为 `infoSettings.name`。

```diff
+ import { infoSettings } from "../settings";

export function getInfoSchema({ dataSource = 'main', collection }) {
  return {
    type: 'void',
    'x-decorator': 'DataBlockProvider',
+   'x-settings': infoSettings.name,
    // ...
  }
}
```

### 6. 添加到 Add block 中

系统中有很多个 `Add block` 按钮，但他们的 **name 是不同的**。

![img_v3_02b4_049b0a62-8e3b-420f-adaf-a6350d84840g](https://static-docs.nocobase.com/img_v3_02b4_049b0a62-8e3b-420f-adaf-a6350d84840g.jpg)

#### 6.1 添加到页面级别 Add block 中

如果我们需要添加到页面级别的 `Add block` 中，我们需要知道对应的 `name`，我们可以通过 TODO 方式查看对应的 `name`。

TODO

通过上图可以看到页面级别的 `Add block` 对应的 name 为 `page:addBlock`，`Data Blocks` 对应的 name 为 `dataBlocks`。

然后我们修改 `packages/plugins/@nocobase-sample/plugin-initializer-block-data/src/client/index.tsx` 文件：

```tsx | pure
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

    this.app.schemaInitializerManager.addItem('page:addBlock', `dataBlocks.${infoInitializerItem.name}`, infoInitializerItem)
  }
}

export default PluginDataBlockInitializerClient;
```

<video controls width='100%' src="https://static-docs.nocobase.com/20240526170424_rec_.mp4"></video>

#### 6.2 添加到弹窗 Add block 中

我们不仅需要将其添加到页面级别的 `Add block` 中，还需要将其添加到 `Table` 区块 `Add new` 弹窗的 `Add block` 中。

![img_v3_02b4_fc47fe3a-35a1-4186-999c-0b48e6e001dg](https://static-docs.nocobase.com/img_v3_02b4_fc47fe3a-35a1-4186-999c-0b48e6e001dg.jpg)

我们按照页面级别获取 `name` 的方式获取到 `Table` 区块的 `Add block` 的 `name` 为 `popup:addNew:addBlock`，`Data Blocks` 对应的 name 为 `dataBlocks`。

然后修改 `packages/plugins/@nocobase-sample/plugin-initializer-block-data/src/client/index.tsx` 文件：

```diff
import { Plugin } from '@nocobase/client';
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

    this.app.schemaInitializerManager.addItem('page:addBlock', `dataBlocks.${infoInitializerItem.name}`, infoInitializerItem)
+   this.app.schemaInitializerManager.addItem('popup:addNew:addBlock', `dataBlocks.${infoInitializerItem.name}`, infoInitializerItem)
  }
}

export default PluginDataBlockInitializerClient;

```

![img_v3_02b4_7062bfab-5a7b-439c-b385-92c5704b6b3g](https://static-docs.nocobase.com/img_v3_02b4_7062bfab-5a7b-439c-b385-92c5704b6b3g.jpg)

#### 6.3 添加到移动端 Add block 中

> 首先要激活移动端插件，参考 [激活插件](/welcome/getting-started/plugin#3-activate-the-plugin) 文档。

我们可以将其添加到移动端的 `Add block` 中，获取 `name` 的方法这里就不再赘述了。

然后修改 `packages/plugins/@nocobase-sample/plugin-initializer-block-data/src/client/index.tsx` 文件：

```diff
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

    this.app.schemaInitializerManager.addItem('page:addBlock', `dataBlocks.${infoInitializerItem.name}`, infoInitializerItem)
    this.app.schemaInitializerManager.addItem('popup:addNew:addBlock', `dataBlocks.${infoInitializerItem.name}`, infoInitializerItem)
+   this.app.schemaInitializerManager.addItem('mobilePage:addBlock', `dataBlocks.${infoInitializerItem.name}`, infoInitializerItem)
  }
}

export default PluginDataBlockInitializerClient;
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
yarn build @nocobase-sample/plugin-initializer-block-data --tar
```

这样就可以看到 `storage/tar/@nocobase-sample/plugin-initializer-block-data.tar.gz` 文件了，然后通过[上传的方式](/welcome/getting-started/plugin)进行安装。
