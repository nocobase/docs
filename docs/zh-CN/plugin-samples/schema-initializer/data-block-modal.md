# 添加带弹窗的数据区块 Data Block

## 场景说明

很多情况下在点击创建区块之前，我们需要先选择配置信息。例如：
- `Kanban` 区块点击后需要先选择 `Grouping field` 和 `Sorting field`
- `Calendar` 区块需要先选择 `Title field`、`Start date field`、`End date field`
- `Chart` 区块需要先配置图标相关信息

TODO：Calendar 视频 

## 示例说明

本实例会基于 ant-design [Timeline 组件](https://ant.design/components/timeline) 创建一个 `Timeline` 区块，并且在区块创建前选择 `Time Field` 和 `Title Field`。

本实例主要为了演示 initializer 的使用，更多关于区块扩展可以查看 [区块扩展](/plugin-samples/block) 文档。

本文档完整的示例代码可以在 [plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-initializer-data-block-modal) 中查看。

<video width="100%" controls="">
  <!-- <source src="https://static-docs.nocobase.com/20240522-182547.mp4" type="video/mp4" /> -->
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
yarn pm create @nocobase-sample/plugin-initializer-data-block-modal
yarn pm enable @nocobase-sample/plugin-initializer-data-block-modal
```

然后启动项目即可：

```bash
yarn dev
```

然后登录后访问 [http://localhost:13000/admin/pm/list/local/](http://localhost:13000/admin/pm/list/local/) 就可以看到插件已经安装并启用了。

## 功能实现

在实现本示例之前，我们需要先了解一些基础知识：

- [Timeline 组件](https://ant.design/components/timeline)
- [SchemaInitializer 教程](/development/client/ui-schema/initializer)：用于向界面内添加各种区块、字段、操作等
- [SchemaInitializer API](https://client.docs.nocobase.com/core/ui-schema/schema-initializer)：用于向界面内添加各种区块、字段、操作等
- [UI Schema](/development/client/ui-schema/what-is-ui-schema)：用于定义界面的结构和样式
- [Designable 设计器](/development/client/ui-schema/designable)：用于修改 Schema

### 1. 实现区块组件

#### 1.1 定义区块组件

本示例要做的是一个 `Timeline` 区块组件，我们取名为 `TimelineBlock`，其具体的需求是：

首先我们新建 `packages/plugins/@nocobase-sample/plugin-initializer-data-block-modal/src/client/TimelineBlock.tsx` 文件，其内容如下：

```tsx | pure
import React, { FC } from 'react';
import { Timeline, TimelineProps, Spin } from 'antd';
import { withDynamicSchemaProps } from "@nocobase/client";

export interface TimelineBlockProps {
    data?: TimelineProps['items'];
    loading?: boolean;
}

export const TimelineBlock: FC<TimelineBlockProps> = withDynamicSchemaProps((props) => {
    const { data, loading } = props;
    if (loading) return <div style={{ height: 100, textAlign: 'center' }}> <Spin /></div>
    return <div>
        <Timeline mode='left' items={data}></Timeline>
    </div>
}, { displayName: 'TimelineBlock' })
```

`TimelineBlock` 组件整体来说是一个被 `withDynamicSchemaProps` 包裹的组件，其接受 2 个参数：

- `loading`：数据加载状态
- `data`：`Timeline` 组件的 `items` 属性

[withDynamicSchemaProps](/development/client/ui-schema/what-is-ui-schema#x-component-props-和-x-use-component-props) 是一个高阶组件，用于处理 Schema 中的的动态属性。

#### 1.2 注册区块组件

我们需要将 `TimelineBlock` 通过插件注册到系统中。

```tsx | pure
import { Plugin } from '@nocobase/client';
import { TimelineBlock } from './TimelineBlock';

export class PluginInitializerDataBlockModalClient extends Plugin {
  async load() {
    this.app.addComponents({ TimelineBlock })
  }
}

export default PluginInitializerDataBlockModalClient;
```

#### 1.3 验证区块组件

组件验证方式有 2 种：

- 临时页面验证：我们可以临时建一个页面，然后渲染 `TimelineBlock` 组件，查看是否符合需求
- 文档示例验证：可以启动文档 `yarn doc packages/plugins/@nocobase-sample/plugin-initializer-data-block-modal`，通过写文档示例的方式验证是否符合需求（TODO）

我们以 `临时页面验证` 为例，我们新建一个页面，根据属性参数添加一个或者多个 `TimelineBlock` 组件，查看是否符合需求。

```tsx | pure
import { Plugin } from '@nocobase/client';
import { TimelineBlock } from './TimelineBlock';
import React from 'react';

export class PluginInitializerDataBlockModalClient extends Plugin {
  async load() {
    this.app.addComponents({ TimelineBlock })

    this.app.router.add('admin.data-block-modal', {
      path: '/admin/data-block-modal',
      Component: () => {
        return <>
          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <TimelineBlock
              data={[
                {
                  label: '2015-09-01',
                  children: 'user1',
                },
                {
                  label: '2015-09-02',
                  children: 'user2',
                },
                {
                  label: '2015-09-03',
                  children: 'user3',
                },
              ]} />
          </div>
          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <TimelineBlock loading={true} />
          </div>
        </>
      }
    })
  }
}

export default PluginInitializerDataBlockModalClient;
```

然后访问 `http://localhost:13000/admin/data-block-modal` 就可以看到对应测试页面的内容了。

TODO：截图

验证完毕后需要删除测试页面。

### 2. 定义区块 Schema

#### 2.1 定义区块 Schema

NocoBase 的动态页面都是通过 Schema 来渲染，所以我们需要定义一个 Schema，后续用于在界面中添加 `TimelineBlock` 区块。在实现本小节之前，我们需要先了解一些基础知识：

- [UI Schema 协议](/development/client/ui-schema/what-is-ui-schema)：详细介绍 Schema 的结构和每个属性的作用
- [DataBlockProvider](https://client.docs.nocobase.com/core/data-block/data-block-provider)：数据区块

我们继续 `packages/plugins/@nocobase-sample/plugin-initializer-data-block-modal/src/client/TimelineBlock.tsx` 文件，添加 `TimelineBlock` 的 Schema：

```ts
import { useDataBlockProps, useDataBlockRequest } from "@nocobase/client";

export function getTimelineBlockSchema({ dataSource = 'main', collection }) {
    return (options: { titleField: string, timeField: string }) => {
        const { titleField, timeField } = options;
        return {
            type: 'void',
            'x-decorator': 'DataBlockProvider',
            'x-decorator-props': {
                dataSource,
                collection,
                action: 'list',
                params: {
                    sort: `-${timeField}`
                },
                timeline: {
                    titleField,
                    timeField,
                }
            },
            'x-component': 'CardItem',
            properties: {
                timeline: {
                    type: 'void',
                    'x-component': 'TimelineBlock',
                    'x-use-component-props': 'useTimelineBlockProps',
                }
            }
        }
    }
}

export function useTimelineBlockProps(): TimelineBlockProps {
    const { timeline } = useDataBlockProps();
    const { loading, data } = useDataBlockRequest<any[]>();
    return {
        loading,
        data: data?.data?.map((item) => ({
            label: item[timeline.timeField],
            children: item[timeline.titleField],
        }))
    }
}
```

这里有 2 个点需要说明：

- `getTimelineBlockSchema()`：之所以定义为函数，因为 `dataSource` 和 `collection` 是动态的，由点击的数据表决定，其返回值也是一个函数，因为 `titleField` 和 `timeField` 是后面配置得到的
- `useTimelineBlockProps()`：用于处理 `TimelineBlock` 组件的动态属性，并且因为要存到数据库，所以这里的值类型为 string 类型。

`getTimelineBlockSchema({ dataSource, collection })({ titleField, timeField })`：返回 TimelineBlock 的 Schema
  - `type: 'void'`：表示没有任何数据
  - `x-decorator: 'DataBlockProvider'`：数据区块提供者，用于提供数据，更多关于 DataBlockProvider 可以查看 [DataBlockProvider](https://client.docs.nocobase.com/core/data-block/data-block-provider)
  - `x-decorator-props`：`DataBlockProvider` 的属性
    - `dataSource`：数据源
    - `collection`：数据表
    - `action: 'list'`：操作类型，这里是 `list`，获取数据列表
    - `params: { sort }`：请求参数，这里我们将 `timeField` 倒叙，更多关于请求参数请参考 [useRequest](https://client.docs.nocobase.com/core/request#userequest)
  - `x-component: 'CardItem'`：[CardItem 组件](https://client.docs.nocobase.com/components/card-item)，目前的区块都是被包裹在卡片中的，用于提供样式、布局和拖拽等功能
  - `properties`：子节点
    - `timeline`：区块组件

`useTimelineBlockProps()`：InfoBlock 组件的动态属性
  - [useDataBlockProps](https://client.docs.nocobase.com/core/data-block/data-block-provider#usedatablockprops)：获取 [DataBlockProvider](https://client.docs.nocobase.com/core/data-block/data-block-provider) 的 props 属性，也就是 `x-decorator-props` 的值
  - [useDataBlockRequest](https://client.docs.nocobase.com/core/data-block/data-block-request-provider#usedatablockrequest) 获取数据区块请求，由 [DataBlockProvider](https://client.docs.nocobase.com/core/data-block/data-block-provider) 提供

上述 Schema 转为 React 组件后相当于：

```tsx | pure
<DataBlockProvider collection={collection} dataSource={dataSource} action='list' params={{ sort: `-${timeField}` }} timeline={{ titleField, timeField }}>
  <CardItem>
    <TimelineBlock {...useTimelineBlockProps()} />
  </CardItem>
</DataBlockProvider>
```

#### 2.2 注册 scope

我们需要将 `useTimelineBlockProps` 注册到系统中，这样 `x-use-component-props` 才能找到对应的 scope。

```tsx | pure
import { Plugin } from '@nocobase/client';
import { TimelineBlock, useTimelineBlockProps } from './TimelineBlock';

export class PluginInitializerDataBlockModalClient extends Plugin {
  async load() {
    this.app.addComponents({ TimelineBlock })
    this.app.addScopes({ useTimelineBlockProps });
  }
}

export default PluginInitializerDataBlockModalClient;
```

更多关于 Scope 的说明可以查看 [全局注册 Component 和 Scope](/plugin-samples/component-and-scope/global)

#### 2.3 验证区块 Schema

同验证组件一样，我们可以通过临时页面验证或者文档示例验证的方式来验证 Schema 是否符合需求。我们这里以临时页面验证为例：

```tsx | pure
import { Plugin, SchemaComponent } from '@nocobase/client';
import { TimelineBlock, getTimelineBlockSchema, useTimelineBlockProps } from './TimelineBlock';
import React from 'react';

export class PluginInitializerDataBlockModalClient extends Plugin {
  async load() {
    // ...

    this.app.router.add('admin.data-block', {
      path: '/admin/data-block-modal',
      Component: () => {
        return <>
          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <SchemaComponent schema={{ properties: { test1: getTimelineBlockSchema({ collection: 'users' })({ timeField: 'createdAt', titleField: 'nickname' }) } }} />
          </div>
        </>
      }
    })
  }
}

export default PluginInitializerDataBlockModalClient;

```

- [SchemaComponentOptions](https://client.docs.nocobase.com/core/ui-schema/schema-component#schemacomponentoptions)：用于传递 Schema 中所需的 `components` 和 `scope`，具体的可查看 [局部注册 Component 和 Scope](/plugin-samples/component-and-scope/local)
- [SchemaComponent](https://client.docs.nocobase.com/core/ui-schema/schema-component#schemacomponent-1)：用于渲染 Schema

TODO：截图

验证完毕后需要删除测试页面。

### 3. 定义 Schema Initializer Item

我们继续修改 `packages/plugins/@nocobase-sample/plugin-initializer-data-block-modal/src/client/TimelineBlock.tsx` 文件，添加 `TimelineBlock` 的 Schema Initializer Item：

```ts | pure
import React from 'react';
import { SchemaInitializerItemType, useSchemaInitializer } from '@nocobase/client'
import { FieldTimeOutlined } from '@ant-design/icons';

export const infoInitializerItem: SchemaInitializerItemType = {
  name: 'TimelineBlock',
  Component: 'DataBlockInitializer',
  useComponentProps() {
    const { insert } = useSchemaInitializer();
    return {
      title: 'Timeline',
      icon: <FieldTimeOutlined />,
      componentType: 'Timeline',
      onCreateBlockSchema({ item }) {
        insert(getTimelineBlockSchema({ dataSource: item.dataSource, collection: item.name }))
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
    - `componentType`：组件类型，这里是 `Timeline`
    - `onCreateBlockSchema`：当点击数据表后的回调
      - `item`：点击的数据表信息
        - `item.name`：数据表名称
        - `item.dataSource`：数据表所属的数据源
    - [useSchemaInitializer](https://client.docs.nocobase.com/core/ui-schema/schema-initializer#useschemainitializer)：提供了插入 Schema 的方法

更多关于 Schema Initializer 的定义可以参考 [Schema Initializer](https://client.docs.nocobase.com/core/ui-schema/schema-initializer) 文档。

### 4. 实现 Schema Settings

#### 4.1 定义 Schema Settings

一个完整的 Block 还需要有 Schema Settings，用于配置一些属性，但 Schema Settings 不是本示例的重点，所以我们这里仅有一个 `remove` 操作。

```ts
export const infoBlockSettings = new SchemaSettings({
  name: 'blockSettings:info',
  items: [
    {
      name: 'remove',
      type: 'remove',
    }
  ]
})
```

#### 4.2 注册 Schema Settings

```ts
import { Plugin } from '@nocobase/client';
import { infoBlockSettings } from './TimelineBlock';

export class PluginInitializerDataBlockModalClient extends Plugin {
  async load() {
    // ...
    this.app.schemaSettingsManager.add(infoBlockSettings)
  }
}

export default PluginInitializerDataBlockModalClient;
```

#### 4.3 使用 Schema Settings

修改 `getTimelineBlockSchema` 为：

```diff
export function getTimelineBlockSchema({ dataSource = 'main', collection }) {
  return {
    type: 'void',
    'x-decorator': 'DataBlockProvider',
    'x-decorator-props': {
      dataSource,
      collection,
      action: 'list',
    },
+   'x-settings': infoBlockSettings.name,
    'x-component': 'CardItem',
    properties: {
      info: {
        type: 'void',
        'x-component': 'TimelineBlock',
        'x-use-component-props': 'useTimelineBlockProps',
      }
    }
  }
}
```

### 5. 添加到 Add block 中

系统中有很多个 `Add block` 按钮，但他们的 **name 是不同的**。

![img_v3_02b4_049b0a62-8e3b-420f-adaf-a6350d84840g](https://static-docs.nocobase.com/img_v3_02b4_049b0a62-8e3b-420f-adaf-a6350d84840g.jpg)

#### 5.1 添加到页面级别 Add block 中

如果我们需要添加到页面级别的 `Add block` 中，我们需要知道对应的 `name`，我们可以通过 TODO 方式查看对应的 `name`。

TODO

通过上图可以看到页面级别的 `Add block` 对应的 name 为 `page:addBlock`，`Data Blocks` 对应的 name 为 `dataBlocks`。

然后我们修改 `packages/plugins/@nocobase-sample/plugin-initializer-data-block-modal/src/client/index.tsx` 文件：

```tsx | pure
import { Plugin } from '@nocobase/client';
import { TimelineBlock, infoBlockSettings, infoInitializerItem } from './TimelineBlock';

export class PluginInitializerDataBlockModalClient extends Plugin {
  async load() {
    this.app.addComponents({ TimelineBlock });
    this.app.schemaSettingsManager.add(infoBlockSettings);

    this.app.schemaInitializerManager.addItem('page:addBlock', `dataBlocks.${infoInitializerItem.name}`, infoInitializerItem)
  }
}

export default PluginInitializerDataBlockModalClient;
```

<video controls width='100%' src="https://static-docs.nocobase.com/20240526170424_rec_.mp4"></video>

#### 5.2 添加到弹窗 Add block 中

我们不仅需要将其添加到页面级别的 `Add block` 中，还需要将其添加到 `Table` 区块 `Add new` 弹窗的 `Add block` 中。

![img_v3_02b4_fc47fe3a-35a1-4186-999c-0b48e6e001dg](https://static-docs.nocobase.com/img_v3_02b4_fc47fe3a-35a1-4186-999c-0b48e6e001dg.jpg)

我们按照页面级别获取 `name` 的方式获取到 `Table` 区块的 `Add block` 的 `name` 为 `popup:addNew:addBlock`，`Data Blocks` 对应的 name 为 `dataBlocks`。

然后修改 `packages/plugins/@nocobase-sample/plugin-initializer-data-block-modal/src/client/index.tsx` 文件：

```diff
import { Plugin } from '@nocobase/client';
import { TimelineBlock, infoBlockSettings, infoInitializerItem } from './TimelineBlock';

export class PluginInitializerDataBlockModalClient extends Plugin {
  async load() {
    this.app.addComponents({ TimelineBlock });
    this.app.schemaSettingsManager.add(infoBlockSettings);

    this.app.schemaInitializerManager.addItem('page:addBlock', `dataBlocks.${infoInitializerItem.name}`, infoInitializerItem)
+   this.app.schemaInitializerManager.addItem('popup:addNew:addBlock', `dataBlocks.${infoInitializerItem.name}`, infoInitializerItem)
  }
}

export default PluginInitializerDataBlockModalClient;
```

![img_v3_02b4_7062bfab-5a7b-439c-b385-92c5704b6b3g](https://static-docs.nocobase.com/img_v3_02b4_7062bfab-5a7b-439c-b385-92c5704b6b3g.jpg)

#### 5.3 添加到移动端 Add block 中

> 首先要激活移动端插件，参考 [激活插件](/welcome/getting-started/plugin#3-activate-the-plugin) 文档。

我们可以将其添加到移动端的 `Add block` 中，获取 `name` 的方法这里就不再赘述了。

然后修改 `packages/plugins/@nocobase-sample/plugin-initializer-data-block-modal/src/client/index.tsx` 文件：

```diff
import { Plugin } from '@nocobase/client';
import { TimelineBlock, infoBlockSettings, infoInitializerItem } from './TimelineBlock';

export class PluginInitializerDataBlockModalClient extends Plugin {
  async load() {
    this.app.addComponents({ TimelineBlock });
    this.app.schemaSettingsManager.add(infoBlockSettings);

    this.app.schemaInitializerManager.addItem('page:addBlock', `dataBlocks.${infoInitializerItem.name}`, infoInitializerItem)
    this.app.schemaInitializerManager.addItem('popup:addNew:addBlock', `dataBlocks.${infoInitializerItem.name}`, infoInitializerItem)
+   this.app.schemaInitializerManager.addItem('mobilePage:addBlock', `dataBlocks.${infoInitializerItem.name}`, infoInitializerItem)
  }
}

export default PluginInitializerDataBlockModalClient;
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
yarn build @nocobase-sample/plugin-initializer-data-block-modal --tar
```

这样就可以看到 `storage/tar/@nocobase-sample/plugin-initializer-data-block-modal.tar.gz` 文件了，然后通过[上传的方式](/welcome/getting-started/plugin)进行安装。
