# 添加数据区块 Data Block

## 场景说明

NocoBase 有很多 `Add block` 按钮用于向界面添加区块。其中有些和数据表有关系的被成为数据区块 `Data Block`，有些和数据表无关的被称为简单区块 `Simple Block`。

![img_v3_02b4_170eddb5-d3b4-461e-b74b-f83250941e5g](https://static-docs.nocobase.com/img_v3_02b4_170eddb5-d3b4-461e-b74b-f83250941e5g.jpg)

但是目前已有的区块类型不一定满足我们的需求，我们就需要根据需求自定开发一些区块，本篇文章就是针对简单区块 `Data Block` 进行说明。

## 示例说明

本实例会创建一个 `Info` 区块，并将其添加到 `Page`、`Table` 以及移动端的 `Add block` 中。

本实例主要为了演示 initializer 的使用，更多关于区块扩展可以查看 [区块扩展](/plugin-samples/block) 文档。

本文档完整的示例代码可以在 [plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-initializer-block-data) 中查看。

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/20240522-182547.mp4" type="video/mp4" />
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
yarn pm create @nocobase-sample/plugin-initializer-block-data
yarn pm enable @nocobase-sample/plugin-initializer-block-data
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

我们新建 `packages/plugins/@nocobase-sample/plugin-initializer-block-data/src/client/constants.ts`：

```ts
export const BlockName = 'Info';
export const BlockNameLowercase = BlockName.toLowerCase();
```

### 2. 多语言

#### 2.1 定义工具函数

如果插件需要支持多语言，我们需要定义多语言工具函数。

我们新建 `packages/plugins/@nocobase-sample/plugin-initializer-block-data/src/client/locale.ts` 文件：

```ts
import { useTranslation } from 'react-i18next';

// @ts-ignore
import pkg from './../../package.json';

export function usePluginTranslation() {
  return useTranslation([pkg.name, 'client'], { nsMode: 'fallback' });
}

export function generatePluginTranslationTemplate(key: string) {
  return `{{t('${key}', { ns: ['${pkg.name}', 'client'], nsMode: 'fallback' })}}`;
}
```

- [useTranslation()](https://react.i18next.com/latest/usetranslation-hook)：用于获取多语言工具函数
- `usePluginTranslation()`：获取插件的多语言工具函数，需要将插件的名字作为命名空间
- `generatePluginTranslationTemplate()`：用于生成插件的多语言模板

#### 2.2 多语言文件

:::warning
多语言文件变更后，需要重启服务才能生效
:::

##### 2.2.1 英语

我们新建 `packages/plugins/@nocobase-sample/plugin-initializer-block-data/src/locale/en-US.json` 内容为：

```json
{
  "Info": "Info"
}
```

##### 2.2.2 中文

我们新建 `packages/plugins/@nocobase-sample/plugin-initializer-block-data/src/locale/zh-CN.json` 内容为：

```json
{
  "Info": "信息"
}
```

如果需要更多的多语言支持，可以继续添加。

### 3. 实现区块组件

#### 3.1 定义区块组件

本示例要做的是一个 `Info` 区块组件，具体的需求是：

- 显示当前区块数据表名称
- 显示当前区块数据列表

首先我们新建 `packages/plugins/@nocobase-sample/plugin-initializer-block-data/src/client/component/Info.tsx` 文件，其内容如下：

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
    <div>collection: {collectionName}</div>
    <div>data list: <pre>{JSON.stringify(data, null, 2)}</pre></div>
  </div>
}, { displayName: BlockName })
```

`Info` 组件整体来说是一个被 `withDynamicSchemaProps` 包裹的函数组件，[withDynamicSchemaProps](/development/client/ui-schema/what-is-ui-schema#x-component-props-和-x-use-component-props) 是一个高阶组件，用于处理 Schema 中的的动态属性。

如果不看 `withDynamicSchemaProps` 的话，`Info` 组件就是一个简单的函数组件。

然后将其在 `packages/plugins/@nocobase-sample/plugin-initializer-block-data/src/client/component/index.ts` 中导出：

```tsx | pure
export * from './Info';
```

#### 3.2 注册区块组件

我们需要将 `Info` 通过插件注册到系统中。

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

#### 3.3 验证区块组件

组件验证方式有 2 种：

- 临时页面验证：我们可以临时建一个页面，然后渲染 `Info` 组件，查看是否符合需求
- 文档示例验证：可以启动文档 `yarn doc plugins/@nocobase-sample/plugin-initializer-block-data`，通过写文档示例的方式验证是否符合需求（TODO）

我们以 `临时页面验证` 为例，我们新建一个页面，根据属性参数添加一个或者多个 `Info` 组件，查看是否符合需求。

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

然后访问 `http://localhost:13000/admin/info-component` 就可以看到对应测试页面的内容了。

![20240526165834](https://static-docs.nocobase.com/20240526165834.png)

验证完毕后需要删除测试页面。

### 4. 定义区块 Schema

#### 4.1 定义区块 Schema

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

#### 4.2 注册 scope

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

#### 4.3 验证区块 Schema

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

### 5. 定义 Schema Initializer Item

我们新建 `packages/plugins/@nocobase-sample/plugin-initializer-block-data/src/client/initializer/index.tsx` 文件：

```tsx | pure
import React from 'react';
import { SchemaInitializerItemType, useSchemaInitializer } from '@nocobase/client'
import { CodeOutlined } from '@ant-design/icons';

import { getInfoSchema } from '../schema'
import { usePluginTranslation } from '../locale';
import { BlockName, BlockNameLowercase } from '../constants';

export const infoInitializerItem: SchemaInitializerItemType = {
  name: BlockNameLowercase,
  Component: 'DataBlockInitializer',
  useComponentProps() {
    const { insert } = useSchemaInitializer();
    const { t } = usePluginTranslation();
    return {
      title: t(BlockName),
      icon: <CodeOutlined />,
      componentType: BlockName,
      useTranslationHooks: usePluginTranslation,
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

### 6. 实现 Schema Settings

#### 6.1 定义 Schema Settings

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

#### 6.2 注册 Schema Settings

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

#### 6.3 使用 Schema Settings

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

### 7. 添加到 Add block 中

系统中有很多个 `Add block` 按钮，但他们的 **name 是不同的**。

![img_v3_02b4_049b0a62-8e3b-420f-adaf-a6350d84840g](https://static-docs.nocobase.com/img_v3_02b4_049b0a62-8e3b-420f-adaf-a6350d84840g.jpg)

#### 7.1 添加到页面级别 Add block 中

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

#### 7.2 添加到弹窗 Add block 中

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

#### 7.3 添加到移动端 Add block 中

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
