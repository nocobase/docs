# 添加带弹窗的数据区块 Data Block Modal

## 场景说明

很多情况下在点击创建区块之前，我们需要先选择配置信息。例如：
- `Kanban` 区块点击后需要先选择 `Grouping field` 和 `Sorting field`
- `Calendar` 区块需要先选择 `Title field`、`Start date field`、`End date field`
- `Chart` 区块需要先配置图标相关信息

<br />

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/20240529223753_rec_.mp4" type="video/mp4" />
</video>

## 示例说明

本实例会基于 ant-design [Timeline 组件](https://ant.design/components/timeline) 创建一个 `Timeline` 区块，并且在区块创建前选择 `Time Field` 和 `Title Field`。

本实例主要为了演示 initializer 的使用，更多关于区块扩展可以查看 [区块扩展](/plugin-samples/block) 文档。

本文档完整的示例代码可以在 [plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-initializer-block-data-modal) 中查看。

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/20240529223457_rec_.mp4" type="video/mp4" />
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
yarn pm create @nocobase-sample/plugin-initializer-block-data-modal
yarn pm enable @nocobase-sample/plugin-initializer-block-data-modal
```

然后启动项目即可：

```bash
yarn dev
```

然后登录后访问 [http://localhost:13000/admin/pm/list/local/](http://localhost:13000/admin/pm/list/local/) 就可以看到插件已经安装并启用了。

## 功能实现

在实现本示例之前，我们需要先了解一些基础知识：

- ant-design [Timeline 组件](https://ant.design/components/timeline)
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

我们新建 `packages/plugins/@nocobase-sample/plugin-initializer-block-data-modal/src/client/constants.ts`：

```ts
export const BlockName = 'Timeline';
export const BlockNameLowercase = BlockName.toLowerCase();
```

### 2. 实现区块组件

#### 2.1 定义区块组件

本示例要做的是一个 `Timeline` 区块组件，其具体的需求是：

首先我们新建 `packages/plugins/@nocobase-sample/plugin-initializer-block-data-modal/src/client/component/Timeline.tsx` 文件，其内容如下：

```tsx | pure
import React, { FC } from 'react';
import { Timeline as AntdTimeline, TimelineProps as AntdTimelineProps, Spin } from 'antd';
import { withDynamicSchemaProps } from "@nocobase/client";
import { BlockName } from '../constants';

export interface TimelineProps {
  data?: AntdTimelineProps['items'];
  loading?: boolean;
}

export const Timeline: FC<TimelineProps> = withDynamicSchemaProps((props) => {
  const { data, loading } = props;
  if (loading) return <div style={{ height: 100, textAlign: 'center' }}><Spin /></div>
  return <AntdTimeline mode='left' items={data}></AntdTimeline>
}, { displayName: BlockName });
```

`Timeline` 组件整体来说是一个被 `withDynamicSchemaProps` 包裹的组件，其接受 2 个参数：

- `loading`：数据加载状态
- `data`：`Timeline` 组件的 `items` 属性

[withDynamicSchemaProps](/development/client/ui-schema/what-is-ui-schema#x-component-props-和-x-use-component-props) 是一个高阶组件，用于处理 Schema 中的的动态属性。

#### 2.2 注册区块组件

我们需要将 `Timeline` 通过插件注册到系统中。

```tsx | pure
import { Plugin } from '@nocobase/client';
import { Timeline } from './component';

export class PluginInitializerBlockDataModalClient extends Plugin {
  async load() {
    this.app.addComponents({ Timeline })
  }
}

export default PluginInitializerBlockDataModalClient;
```

#### 2.3 验证区块组件

组件验证方式有 2 种：

- 临时页面验证：我们可以临时建一个页面，然后渲染 `Timeline` 组件，查看是否符合需求
- 文档示例验证：可以启动文档 `yarn doc plugins/@nocobase-sample/plugin-initializer-block-data-modal`，通过写文档示例的方式验证是否符合需求（TODO）

我们以 `临时页面验证` 为例，我们新建一个页面，根据属性参数添加一个或者多个 `Timeline` 组件，查看是否符合需求。

```tsx | pure
import { Plugin } from '@nocobase/client';
import { Timeline } from './component';
import React from 'react';

export class PluginInitializerBlockDataModalClient extends Plugin {
  async load() {
    this.app.addComponents({ Timeline })

    this.app.router.add('admin.timeline-block-component', {
      path: '/admin/timeline-block-component',
      Component: () => {
        return <>
          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <Timeline
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
            <Timeline loading={true} />
          </div>
        </>
      }
    })
  }
}

export default PluginInitializerBlockDataModalClient;
```

然后访问 `http://localhost:13000/admin/timeline-block-component` 就可以看到对应测试页面的内容了。

![20240529210122](https://static-docs.nocobase.com/20240529210122.png)

验证完毕后需要删除测试页面。

### 3. 定义配置表单

根据需求，我们需要在选择数据表后配置 `Time Field` 和 `Title Field`，所以我们需要定义一个配置表单，取名为 `TimelineInitializerConfigForm`。

#### 3.1 定义配置表单组件

我们需要先了解以下知识：

- [Action](https://client.docs.nocobase.com/components/action)
- [Action.Modal](https://client.docs.nocobase.com/components/action#actionmodal)：弹窗
- [ActionContextProvider](https://client.docs.nocobase.com/components/action#actioncontext)：`Action` 上下文
- [SchemaComponent](https://client.docs.nocobase.com/core/ui-schema/schema-component#schemacomponent-1)：用于渲染 Schema

我们新建 `packages/plugins/@nocobase-sample/plugin-initializer-block-data-modal/src/client/initializer/ConfigForm.tsx` 文件，其内容如下：

```tsx | pure
import React, { FC, useMemo } from "react";
import { ISchema } from '@formily/react';
import { ActionContextProvider, SchemaComponent, useApp, CollectionFieldOptions } from '@nocobase/client';
import { useT } from "../locale";

const createSchema = (fields: CollectionFieldOptions, t: ReturnType<typeof useT>): ISchema => {
  // TODO
}

interface TimelineConfigFormValues {
  timeField: string;
  titleField: string;
}

export interface TimelineConfigFormProps {
  collection: string;
  dataSource?: string;
  onSubmit: (values: TimelineConfigFormValues) => void;
  visible: boolean;
  setVisible: (visible: boolean) => void;
}

export const TimelineInitializerConfigForm: FC<TimelineConfigFormProps> = ({ visible, setVisible, collection, dataSource, onSubmit }) => {
  const app = useApp();
  const fields = useMemo(() => app.getCollectionManager(dataSource).getCollection(collection).getFields(), [collection, dataSource])
  const t = useT();
  const schema = useMemo(() => createSchema(fields, t), [fields]);

  return <ActionContextProvider value={{ visible, setVisible }}>
    <SchemaComponent schema={schema}  />
  </ActionContextProvider>
}
```

`TimelineInitializerConfigForm` 组件接受 4 个参数：

- `visible`：是否显示
- `setVisible`：设置是否显示
- `collection`：数据表名称
- `dataSource`：数据源名称
- `onSubmit`：表单提交回调

其中 `collection` 和 `dataSource` 是通过点击数据表后获取的，所以这里是动态的。

- [app](https://client.docs.nocobase.com/core/application/application)：通过 [useApp()](https://client.docs.nocobase.com/core/application/application#useapp) 获取应用实例
- [app.getCollectionManager](https://client.docs.nocobase.com/core/application/application##appgetcollectionmanager)：获取 [CollectionManager](https://client.docs.nocobase.com/core/data-source/collection-manager) 实例
- [getCollection](https://client.docs.nocobase.com/core/data-source/collection-manager#getcollectionpath)：获取数据表
- [getFields](https://client.docs.nocobase.com/core/data-source/collection#collectiongetfieldspredicate)：获取数据表字段

[ActionContextProvider](https://client.docs.nocobase.com/components/action#actioncontext) 用于传递 `visible` 和 `setVisible` 给子节点，`SchemaComponent` 用于渲染 Schema。

#### 3.2 实现配置表单 Schema

我们需要先了解以下知识：

- [FormV2](https://client.docs.nocobase.com/components/form-v2)：表单组件
- [Select](https://client.docs.nocobase.com/components/action#select)：选择器

```tsx | pure
const useCloseActionProps = () => {
  const { setVisible } = useActionContext();
  return {
    type: 'default',
    onClick() {
      setVisible(false);
    },
  };
};

const useSubmitActionProps = (onSubmit: (values: TimelineConfigFormValues) => void) => {
  const { setVisible } = useActionContext();
  const form = useForm<TimelineConfigFormValues>();

  return {
    type: 'primary',
    async onClick() {
      await form.submit();
      const values = form.values;
      onSubmit(values);
      setVisible(false);
    },
  };
};

const createSchema = (fields: CollectionFieldOptions[]): ISchema => {
  return {
    type: 'void',
    name: uid(),
    'x-component': 'Action.Modal',
    'x-component-props': {
      width: 600,
    },
    'x-decorator': 'FormV2',
    properties: {
      titleField: {
        type: 'string',
        title: 'Title Field',
        required: true,
        enum: fields.map(item => ({ label: item.uiSchema?.title || item.name, value: item.name })),
        'x-decorator': 'FormItem',
        'x-component': 'Select',
      },
      timeField: {
        type: 'string',
        title: 'Time Field',
        required: true,
        enum: fields.filter(item => item.type === 'date').map(item => ({ label: item.uiSchema?.title || item.name, value: item.name })),
        'x-decorator': 'FormItem',
        'x-component': 'Select',
      },
      footer: {
        type: 'void',
        'x-component': 'Action.Modal.Footer',
        properties: {
          close: {
            title: 'Close',
            'x-component': 'Action',
            'x-component-props': {
              type: 'default',
            },
            'x-use-component-props': 'useCloseActionProps',
          },
          submit: {
            title: 'Submit',
            'x-component': 'Action',
            'x-use-component-props': 'useSubmitActionProps',
          },
        },
      },
    }
  };
}
```

我们定义了一个 `createSchema` 函数，用于生成配置表单的 Schema，其接受一个 `fields` 参数，这个参数是数据表的字段。

上述的效果是弹窗内有一个表单，表单内有 2 个选择器，一个是 `Title Field`，一个是 `Time Field`，并且有一个 `Close` 和 `Submit` 按钮。

- `Close` 和 `Submit` 按钮因为要使用 Hooks，所以我们使用了 [x-use-component-props](/development/client/ui-schema/what-is-ui-schema#x-component-props-和-x-use-component-props)
- `Title Field`：所有字段都可以选择
- `Time Field`：只有 `date` 类型的字段可以选择

然后我们还需要修改 `TimelineInitializerConfigForm`，将 `useSubmitActionProps` 和 `useCloseActionProps` 注册到 [scope](/plugin-samples/component-and-scope/local) 中。

```diff
-   <SchemaComponent schema={schema}/>
+   <SchemaComponent schema={schema} scope={{ useSubmitActionProps: useSubmitActionProps.bind(null, onSubmit), useCloseActionProps }} />
```

#### 3.3 验证配置表单

```tsx | pure
import { Plugin } from '@nocobase/client';
import { Timeline } from './component';
import React, { useState } from 'react';
import { TimelineInitializerConfigForm } from './initializer/ConfigForm';

export class PluginInitializerBlockDataModalClient extends Plugin {
  async load() {
    this.app.addComponents({ Timeline })

    this.app.router.add('admin.timeline-config-form', {
      path: '/admin/timeline-config-form',
      Component: () => {
        const [visible, setVisible] = useState(true);
        function onSubmit(values) {
          console.log(values);
        }
        return <>
          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <TimelineInitializerConfigForm visible={visible} onSubmit={onSubmit} setVisible={setVisible} collection='users' />
          </div>
        </>
      }
    })
  }
}

export default PluginInitializerBlockDataModalClient;
```

然后访问 `http://localhost:13000/admin/timeline-config-form` 就可以看到对应测试页面的内容了。

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/20240529215127_rec_.mp4" type="video/mp4" />
</video>

验证完毕后需要删除测试页面。

### 4. 定义区块 Schema

#### 4.1 定义区块 Schema

NocoBase 的动态页面都是通过 Schema 来渲染，所以我们需要定义一个 Schema，后续用于在界面中添加 `Timeline` 区块。在实现本小节之前，我们需要先了解一些基础知识：

- [UI Schema 协议](/development/client/ui-schema/what-is-ui-schema)：详细介绍 Schema 的结构和每个属性的作用
- [DataBlockProvider](https://client.docs.nocobase.com/core/data-block/data-block-provider)：数据区块

我们新建 `packages/plugins/@nocobase-sample/plugin-initializer-block-data-modal/src/client/schema/index.tsx` 文件：

```ts
import { useDataBlockProps, useDataBlockRequest } from "@nocobase/client";
import { TimelineProps } from '../component';
import { BlockName, BlockNameLowercase } from "../constants";

interface GetTimelineSchemaOptions {
  dataSource?: string;
  collection: string;
  titleField: string;
  timeField: string;
}

export function getTimelineSchema(options: GetTimelineSchemaOptions) {
  return {
    type: 'void',
    "x-toolbar": "BlockSchemaToolbar",
    'x-decorator': 'DataBlockProvider',
    'x-decorator-props': {
      dataSource,
      collection,
      action: 'list',
      params: {
        sort: `-${timeField}`
      },
      [BlockNameLowercase]: {
        titleField,
        timeField,
      }
    },
    'x-component': 'CardItem',
    properties: {
      [BlockNameLowercase]: {
        type: 'void',
        'x-component': BlockName,
        'x-use-component-props': 'useTimelineProps',
      }
    }
  }
}

export function useTimelineProps(): TimelineProps {
  const dataProps = useDataBlockProps();
  const props = dataProps[BlockNameLowercase];
  const { loading, data } = useDataBlockRequest<any[]>();
  return {
    loading,
    data: data?.data?.map((item) => ({
      label: item[props.timeField],
      children: item[props.titleField],
    }))
  }
}
```

这里有 2 个点需要说明：

`getTimelineSchema()` 接收 `dataSource`、`collection`、`titleField`、`timeField` 并返回一个 Schema，这个 Schema 用于渲染 `Timeline` 区块：
  - `type: 'void'`：表示没有任何数据
  - `x-decorator: 'DataBlockProvider'`：数据区块提供者，用于提供数据，更多关于 DataBlockProvider 可以查看 [DataBlockProvider](https://client.docs.nocobase.com/core/data-block/data-block-provider)
  - `x-decorator-props`：`DataBlockProvider` 的属性
  - `dataSource`：数据源
  - `collection`：数据表
  - `action: 'list'`：操作类型，这里是 `list`，获取数据列表
  - `params: { sort }`：请求参数，这里我们将 `timeField` 倒叙，更多关于请求参数请参考 [useRequest](https://client.docs.nocobase.com/core/request#userequest)
  - `x-component: 'CardItem'`：[CardItem 组件](https://client.docs.nocobase.com/components/card-item)，目前的区块都是被包裹在卡片中的，用于提供样式、布局和拖拽等功能
  - `'x-component': 'Timeline'`：区块组件，就是我们定义的 `Timeline` 组件
  - `'x-use-component-props': 'useTimelineProps'`：用于处理 `Timeline` 组件的动态属性，并且因为要存到数据库，所以这里的值类型为 string 类型。

`useTimelineProps()`：Timeline 组件的动态属性
  - [useDataBlockProps](https://client.docs.nocobase.com/core/data-block/data-block-provider#usedatablockprops)：获取 [DataBlockProvider](https://client.docs.nocobase.com/core/data-block/data-block-provider) 的 props 属性，也就是 `x-decorator-props` 的值
  - [useDataBlockRequest](https://client.docs.nocobase.com/core/data-block/data-block-request-provider#usedatablockrequest) 获取数据区块请求，由 [DataBlockProvider](https://client.docs.nocobase.com/core/data-block/data-block-provider) 提供

上述 Schema 转为 React 组件后相当于：

```tsx | pure
<DataBlockProvider collection={collection} dataSource={dataSource} action='list' params={{ sort: `-${timeField}` }} timeline={{ titleField, timeField }}>
  <CardItem>
    <Timeline {...useTimelineProps()} />
  </CardItem>
</DataBlockProvider>
```

#### 4.2 注册 scope

我们修改 `packages/plugins/@nocobase-sample/plugin-initializer-block-data-modal/src/client/index.tsx` 文件，将 `useTimelineProps` 注册到系统中，这样 `x-use-component-props` 才能找到对应的 scope。

```tsx | pure
import { Plugin } from '@nocobase/client';
import { Timeline } from './component';
import { useTimelineProps } from './schema';

export class PluginInitializerBlockDataModalClient extends Plugin {
  async load() {
    this.app.addComponents({ Timeline })
    this.app.addScopes({ useTimelineProps });
  }
}

export default PluginInitializerBlockDataModalClient;
```

更多关于 Scope 的说明可以查看 [全局注册 Component 和 Scope](/plugin-samples/component-and-scope/global)

#### 4.3 验证区块 Schema

同验证组件一样，我们可以通过临时页面验证或者文档示例验证的方式来验证 Schema 是否符合需求。我们这里以临时页面验证为例：

```tsx | pure
import { Plugin, SchemaComponent } from '@nocobase/client';
import { Timeline, getTimelineSchema, useTimelineProps } from './component';
import React from 'react';

export class PluginInitializerBlockDataModalClient extends Plugin {
  async load() {
    // ...

    this.app.router.add('admin.timeline-schema', {
      path: '/admin/timeline-schema',
      Component: () => {
        return <>
          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <SchemaComponent schema={{ properties: { test1: getTimelineSchema({ collection: 'users' })({ timeField: 'createdAt', titleField: 'nickname' }) } }} />
          </div>
        </>
      }
    })
  }
}

export default PluginInitializerBlockDataModalClient;

```

- [SchemaComponentOptions](https://client.docs.nocobase.com/core/ui-schema/schema-component#schemacomponentoptions)：用于传递 Schema 中所需的 `components` 和 `scope`，具体的可查看 [局部注册 Component 和 Scope](/plugin-samples/component-and-scope/local)
- [SchemaComponent](https://client.docs.nocobase.com/core/ui-schema/schema-component#schemacomponent-1)：用于渲染 Schema

我们访问 `http://localhost:13000/admin/timeline-schema` 就可以看到对应测试页面的内容了。

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/20240529220626_rec_.mp4" type="video/mp4" />
</video>

验证完毕后需要删除测试页面。

### 5. 定义 Schema Initializer Item

我们新建 `packages/plugins/@nocobase-sample/plugin-initializer-block-data-modal/src/client/initializer/index.tsx` 文件，定义 Schema Initializer Item：

```tsx | pure
import React, { useCallback, useState } from 'react';
import { FieldTimeOutlined } from '@ant-design/icons';
import { DataBlockInitializer, SchemaInitializerItemType, useSchemaInitializer } from "@nocobase/client";

import { getTimelineSchema } from '../schema';
import { useT } from '../locale';
import { TimelineConfigFormProps, TimelineInitializerConfigForm } from './ConfigForm';
import { BlockName, BlockNameLowercase } from '../constants';

export const TimelineInitializerComponent = () => {
  const { insert } = useSchemaInitializer();
  const [collection, setCollection] = useState<string>();
  const [dataSource, setDataSource] = useState<string>();
  const [showConfigForm, setShowConfigForm] = useState(false);
  const t = useT()

  const onSubmit: TimelineConfigFormProps['onSubmit'] = useCallback((values) => {
    const schema = getTimelineSchema({ collection, dataSource, timeField: values.timeField, titleField: values.titleField });
    insert(schema);
  }, [collection, dataSource])

  return <>
    {showConfigForm && <TimelineInitializerConfigForm
      visible={showConfigForm}
      setVisible={setShowConfigForm}
      onSubmit={onSubmit}
      collection={collection}
      dataSource={dataSource}
    />}
    <DataBlockInitializer
      name={BlockNameLowercase}
      title={t(BlockName)}
      icon={<FieldTimeOutlined />}
      componentType={BlockName}
      onCreateBlockSchema={({ item }) => {
        const { name: collection, dataSource } = item;
        setCollection(collection);
        setDataSource(dataSource);
        setShowConfigForm(true);
      }}>

    </DataBlockInitializer>
  </>
}

export const timelineInitializerItem: SchemaInitializerItemType = {
  name: 'Timeline',
  Component: TimelineInitializerComponent,
}
```

操作流程是，先点击数据表获取 `collection` 和 `dataSource` 的值，然后通过配置表单 `TimelineInitializerConfigForm` 获取 `timeField` 和 `titleField` 字段，当表单提交时，根据数据创建 schema 并插入到页面。

实现数据区块的效果核心是 DataBlockInitializer（文档 TODO）。

`timelineInitializerItem`：
  - `name`：唯一标识，用于增删改查
  - `Component`：与 [添加简单区块 Simple Block](/plugin-samples/schema-initializer/block-simple) 中使用的是 `type`，这里使用的是 `Component`，[2 种定义方式](https://client.docs.nocobase.com/core/ui-schema/schema-initializer#two-ways-to-define-component-and-type) 都是可以的

`TimelineInitializerComponent`：
  - `DataBlockInitializer`
    - `title`：标题
    - `icon`：图标，更多图标可以查看 [Ant Design Icons](https://ant.design/components/icon/)
    - `componentType`：组件类型，这里是 `Timeline`
    - `onCreateBlockSchema`：当点击数据表后的回调
      - `item`：点击的数据表信息
        - `item.name`：数据表名称
        - `item.dataSource`：数据表所属的数据源
    - [useSchemaInitializer](https://client.docs.nocobase.com/core/ui-schema/schema-initializer#useschemainitializer)：提供了插入 Schema 的方法

更多关于 Schema Initializer 的定义可以参考 [Schema Initializer](https://client.docs.nocobase.com/core/ui-schema/schema-initializer) 文档。

### 6. 实现 Schema Settings

#### 6.1 定义 Schema Settings

一个完整的 Block 还需要有 Schema Settings，用于配置一些属性和操作，但 Schema Settings 不是本示例的重点，所以我们这里仅有一个 `remove` 操作。

我们新建 `packages/plugins/@nocobase-sample/plugin-initializer-block-data-modal/src/client/settings/index.ts` 文件，其内容如下：

```ts
import { SchemaSettings } from "@nocobase/client";

export const timelineSettings = new SchemaSettings({
  name: 'blockSettings:info',
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

- componentProps
  - `removeParentsIfNoChildren`：如果没有子节点，是否删除父节点
  - `breakRemoveOn`：删除时的中断条件。因为 `Add Block` 会自动将子项的包裹在 `Grid` 中，所以这里设置 `breakRemoveOn: { 'x-component': 'Grid' }`，当删除 `Grid` 时，不再向上删除。

#### 6.2 注册 Schema Settings

```ts
import { Plugin } from '@nocobase/client';
import { timelineSettings } from './settings';

export class PluginInitializerBlockDataModalClient extends Plugin {
  async load() {
    // ...
    this.app.schemaSettingsManager.add(timelineSettings)
  }
}

export default PluginInitializerBlockDataModalClient;
```

#### 6.3 使用 Schema Settings

我们需要修改 `packages/plugins/@nocobase-sample/plugin-initializer-block-data-modal/src/client/schema/index.tsx` 的 `getTimelineSchema()` 为：

```diff
+ import { timelineSettings } from '../settings';

export function getTimelineSchema(options: GetTimelineSchemaOptions) {
  const { dataSource, collection, titleField, timeField } = options;
  return {
    type: 'void',
    'x-decorator': 'DataBlockProvider',
+   'x-settings': timelineSettings.name,
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

然后我们修改 `packages/plugins/@nocobase-sample/plugin-initializer-block-data-modal/src/client/index.tsx` 文件：

```tsx | pure
import { Plugin } from '@nocobase/client';
import { Timeline } from './component';
import { useTimelineProps } from './schema';
import { timelineSettings } from './settings';
import { timelineInitializerItem } from './timelineInitializerItem';

export class PluginInitializerBlockDataModalClient extends Plugin {
  async load() {
    this.app.addComponents({ Timeline })
    this.app.addScopes({ useTimelineProps });
    this.app.schemaSettingsManager.add(timelineSettings)

    this.app.schemaInitializerManager.addItem('page:addBlock', `dataBlocks.${timelineInitializerItem.name}`, timelineInitializerItem)
  }
}

export default PluginInitializerBlockDataModalClient;
```

<video controls width='100%' src="https://static-docs.nocobase.com/20240529222118_rec_.mp4"></video>

#### 7.2 添加到弹窗 Add block 中

我们不仅需要将其添加到页面级别的 `Add block` 中，还需要将其添加到 `Table` 区块 `Add new` 弹窗的 `Add block` 中。

![img_v3_02b4_fc47fe3a-35a1-4186-999c-0b48e6e001dg](https://static-docs.nocobase.com/img_v3_02b4_fc47fe3a-35a1-4186-999c-0b48e6e001dg.jpg)

我们按照页面级别获取 `name` 的方式获取到 `Table` 区块的 `Add block` 的 `name` 为 `popup:addNew:addBlock`，`Data Blocks` 对应的 name 为 `dataBlocks`。

然后修改 `packages/plugins/@nocobase-sample/plugin-initializer-block-data-modal/src/client/index.tsx` 文件：

```diff
import { Plugin } from '@nocobase/client';
import { Timeline } from './component';
import { useTimelineProps } from './schema';
import { timelineSettings } from './settings';
import { timelineInitializerItem } from './timelineInitializerItem';

export class PluginInitializerBlockDataModalClient extends Plugin {
  async load() {
    this.app.addComponents({ Timeline })
    this.app.addScopes({ useTimelineProps });
    this.app.schemaSettingsManager.add(timelineSettings)
    this.app.schemaInitializerManager.addItem('page:addBlock', `dataBlocks.${timelineInitializerItem.name}`, timelineInitializerItem)
+   this.app.schemaInitializerManager.addItem('popup:addNew:addBlock', `dataBlocks.${timelineInitializerItem.name}`, timelineInitializerItem);
  }
}

export default PluginInitializerBlockDataModalClient;
```

![20240529223046](https://static-docs.nocobase.com/20240529223046.png)

#### 7.3 添加到移动端 Add block 中

> 首先要激活移动端插件，参考 [激活插件](/welcome/getting-started/plugin#3-activate-the-plugin) 文档。

我们可以将其添加到移动端的 `Add block` 中，获取 `name` 的方法这里就不再赘述了。

然后修改 `packages/plugins/@nocobase-sample/plugin-initializer-block-data-modal/src/client/index.tsx` 文件：

```ts
// ...

export class PluginInitializerBlockDataModalClient extends Plugin {
  async load() {
    // ...
    this.app.schemaInitializerManager.addItem('mobilePage:addBlock', `dataBlocks.${timelineInitializerItem.name}`, timelineInitializerItem);
  }
}

export default PluginInitializerBlockDataModalClient;
```

![20240529223307](https://static-docs.nocobase.com/20240529223307.png)

如果需要更多的 `Add block`，可以继续添加，只需要知道对应的 `name` 即可。

### 8. 多语言

#### 8.1 英文

我们编辑 `packages/plugins/@nocobase-sample/plugin-initializer-block-data-modal/src/locale/en-US.json` 文件：

```diff
{
  "Timeline": "Timeline",
  "Title Field": "Title Field",
  "Time Field": "Time Field"
}
```

#### 8.2 中文

我们编辑 `packages/plugins/@nocobase-sample/plugin-initializer-block-data-modal/src/locale/zh-CN.json` 文件：

```diff
{
  "Timeline": "时间线",
  "Title Field": "标题字段",
  "Time Field": "时间字段"
}
```

我们可以通过 [http://localhost:13000/admin/settings/system-settings](http://localhost:13000/admin/settings/system-settings) 添加多个语言，并且在右上角切换语言。

![20240611113758](https://static-docs.nocobase.com/20240611113758.png)

## 打包和上传到生产环境

按照 [构建并打包插件](/development/your-fisrt-plugin#构建并打包插件) 文档说明，我们可以打包插件并上传到生产环境。

如果是 clone 的源码，需要先执行一次全量 build，将插件的依赖也构建好。

```bash
yarn build
```

如果是使用的 `create-nocobase-app` 创建的项目，可以直接执行：

```bash
yarn build @nocobase-sample/plugin-initializer-block-data-modal --tar
```

这样就可以看到 `storage/tar/@nocobase-sample/plugin-initializer-block-data-modal.tar.gz` 文件了，然后通过[上传的方式](/welcome/getting-started/plugin)进行安装。
