# 无值字段组件

## 场景说明

某些表单字段由于特殊需求，它并不与字段直接关联，可能是独立的一个字段或者读取其他字段的值，做一些特殊处理后展示在界面上。

## 示例说明

本示例会演示一个通过实时检测订单号字段变化，查询订单详情并展示的场景。

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/1721721250.mov" type="video/mp4" />
</video>

本文档完整的示例代码可以在 [plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-field-component-without-value) 中查看。

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
yarn pm create @nocobase-sample/plugin-field-component-without-value
yarn pm enable @nocobase-sample/plugin-field-component-without-value
```

然后启动项目即可：

```bash
yarn dev
```

然后登录后访问 [http://localhost:13000/admin/pm/list/locale/](http://localhost:13000/admin/pm/list/locale/) 就可以看到插件已经安装并启用了。

## 功能实现

在实现本示例之前，我们需要先了解一些基础知识：

- [SchemaInitializer 教程](/development/client/ui-schema/initializer)：用于向界面内添加各种区块、字段、操作等
- [SchemaInitializer API](https://client.docs.nocobase.com/core/ui-schema/schema-initializer)：用于向界面内添加各种区块、字段、操作等
- [UI Schema 协议](/development/client/ui-schema/what-is-ui-schema)：详细介绍 Schema 的结构和每个属性的作用
- [Designable 设计器](/development/client/ui-schema/designable)：用于修改 Schema
- [FormV2](https://client.docs.nocobase.com/components/form-v2)：表单组件
- [FormItem](https://client.docs.nocobase.com/components/form-item)：表单项组件

```bash
.
├── client # 客户端插件
│   ├── initializer # 初始化器
│   ├── component # 字段组件
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

我们首先需要定义字段名称，它将会使用在各个地方。

我们新建 `packages/plugins/@nocobase-sample/plugin-field-component-without-value/src/client/constants.ts`：

```ts
export const FiledComponentName = 'OrderDetails';
export const FieldTitle = 'Order Details';
export const FieldNameLowercase = 'orderDetails';
```

### 2. 实现字段组件

#### 2.1 定义字段组件

我们新建 `packages/plugins/@nocobase-sample/plugin-field-component-without-value/src/client/component/OrderDetails.tsx` 文件，其内容如下：

```tsx | pure
import { observer } from '@formily/react'
import { Spin, Empty } from 'antd';
import React, { FC } from 'react';
import { useForm } from '@formily/react';
import { FiledComponentName } from '../constants';
import { useRequest } from '@nocobase/client';

export interface OrderDetailsProps {
  orderField?: string;
}

export const OrderDetails: FC<OrderDetailsProps> = observer(({ orderField }) => {
  const form = useForm();
  const value = orderField ? form.values[orderField] : undefined;

  const { data, loading } = useRequest<{ data: any[] }>({ url: `https://jsonplaceholder.typicode.com/todos/${value}` }, {
    ready: !!value,
    refreshDeps: [orderField, value],
  })

  if (!orderField) return <div style={{ padding: 20 }}>Please select order Field</div>

  if (loading) {
    return <div style={{ textAlign: 'center', height: 200 }}><Spin /></div>
  }

  if (!data?.data) return <Empty />;

  return <pre>{JSON.stringify(data?.data, null, 2)}</pre>;
}, { displayName: FiledComponentName });
```

- [observer](https://react.formilyjs.org/api/shared/observer)：用于将函数组件转换为响应式组件，当表单数据变化时，组件会自动更新
- [useForm()](https://react.formilyjs.org/api/hooks/use-form)：用于获取当前表单实例
  - `values`：表单数据
- [useRequest()](https://client.docs.nocobase.com/core/request)：用于请求数据

默认情况下，系统只有 `users` 和 `roles` 表，为了简单说明，我们这里根据通过传入的 `orderField` 获取对应的 `users` 表的数据，然后展示在界面上。

然后将其在 `packages/plugins/@nocobase-sample/plugin-field-component-without-value/src/client/component/index.ts` 中导出：

```tsx | pure
export * from './OrderDetails'
```

#### 2.2 注册字段组件

我们需要将 `OrderDetails` 通过插件注册到系统中。

```tsx | pure
import { Plugin } from '@nocobase/client';
import { OrderDetails } from './component';
import { FieldComponentName } from './constants';

export class PluginFieldComponentWithoutValueClient extends Plugin {
  async load() {
    this.app.addComponents({ [FieldComponentName]: OrderDetails })
  }
}

export default PluginFieldComponentWithoutValueClient;
```

#### 2.3 验证字段组件

组件验证方式有 2 种：

- 临时页面验证：我们可以临时建一个页面，然后渲染 `OrderDetails` 组件，查看是否符合需求
- 文档示例验证：可以启动文档 `yarn doc plugins/@nocobase-sample/plugin-field-component-without-value`，通过写文档示例的方式验证是否符合需求（TODO）

我们以 `临时页面验证` 为例，我们新建一个页面，根据属性参数添加一个或者多个 `OrderDetails` 组件，查看是否符合需求。

```tsx | pure
import React from 'react';
import { Plugin, SchemaComponent } from '@nocobase/client';

import { OrderDetails } from './component';
import { FieldComponentName } from './constants';

export class PluginFieldOrderDetailsClient extends Plugin {
  async load() {
    this.app.addComponents({ [FiledComponentName]: OrderDetails })

    function Demo() {
      const schema = {
        type: 'void',
        name: 'root',
        properties: {
          test: {
            type: 'void',
            'x-component': 'FormV2',
            properties: {
              username: {
                type: 'string',
                'x-decorator': 'FormItem',
                'x-component': 'Input',
                title: 'Username',
                required: true,
              },
              orderDetails: {
                type: 'string',
                'x-decorator': 'FormItem',
                'x-component': OrderDetails,
                title: 'Order Details',
                'x-component-props': {
                  orderField: 'username',
                },
              }
            },
          },
        },
      };

      return <SchemaComponent schema={schema} />;
    }

    this.app.router.add('admin.order-details-component', {
      path: '/admin/order-details-component',
      Component: Demo
    })
  }
}

export default PluginFieldOrderDetailsClient;
```

我们参考 [Form 组件](https://client.docs.nocobase.com/components/form-v2#basic-usage) 示例，新建一个 `Demo` 组件，然后在 `orderDetails` 字段中添加 `OrderDetails` 组件，然后将 `orderField` 设置为 `username`，这样就可以根据 `username` 字段的值获取对应的 `users` 表的数据。

关于 `SchemaComponent` 的详细说明可以查看 [SchemaComponent](https://client.docs.nocobase.com/core/ui-schema/schema-component#schemacomponent-1) 文档。

然后访问 `http://localhost:13000/admin/order-details-component` 就可以看到对应测试页面的内容了。

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/1721721815326.mov" type="video/mp4" />
</video>

验证完毕后需要删除测试页面。

### 3. 定义字段 Schema

NocoBase 的动态页面都是通过 Schema 来渲染，所以我们需要定义一个 Schema，后续用于在界面中添加 `Carousel` 区块。在实现本小节之前，我们需要先了解一些基础知识：

- [UI Schema 协议](/development/client/ui-schema/what-is-ui-schema)：详细介绍 Schema 的结构和每个属性的作用

#### 3.1 定义字段 Schema

我们新建 `packages/plugins/@nocobase-sample/plugin-field-component-without-value/src/client/schema/index.ts` 文件：

```tsx | pure
import { ISchema } from "@nocobase/client"
import { FieldComponentName } from '../constants';

export const getOrderDetailsSchema = (orderField: string): ISchema => ({
  type: 'void',
  'x-decorator': 'FormItem',
  'x-toolbar': 'FormItemSchemaToolbar',
  'x-component': FieldComponentName,
  'x-component-props': {
    'orderField': orderField,
  }
})
```

`getOrderDetailsSchema`：

- `type`：类型，这里是 `void`，表示纯 UI 节点
- `'x-decorator': 'FormItem'`：[FormItem 组件](https://client.docs.nocobase.com/components/form-item)，用于包裹字段组件。
- `'x-toolbar': 'FormItemSchemaToolbar'`：与 `x-decorator` 配合使用，用于显示右上角的操作和设置
- `'x-component': FiledComponentName`：就是我们上面定义的 `OrderDetails` 组件
- `x-component-props`：`OrderDetails` 组件的属性，会自动传入到组件中
  - `orderField`：订单字段

上述 Schema 转为 React 组件后相当于：

```tsx | pure
<FormItem>
  <OrderDetails orderField />
</FormItem>
```

#### 3.2 验证字段 Schema

同验证组件一样，我们可以通过临时页面验证或者文档示例验证的方式来验证 Schema 是否符合需求。我们这里以临时页面验证为例：


```tsx | pure
import { Plugin, SchemaComponent } from '@nocobase/client';
import { OrderDetails } from './component';
import { FieldComponentName } from './constants';

import React from 'react';

export class PluginFieldOrderDetailsClient extends Plugin {
  async load() {
    this.app.addComponents({ [FiledComponentName]: OrderDetails })

    function Demo() {
      const schema = {
        type: 'void',
        name: 'root',
        properties: {
          test: {
            type: 'void',
            'x-component': 'FormV2',
            properties: {
              username: {
                type: 'string',
                'x-decorator': 'FormItem',
                'x-component': 'Input',
                title: 'Username',
                required: true,
              },
              orderDetails: getOrderDetailsSchema('username')
            },
          },
        },
      };

      return <SchemaComponent schema={schema} />;
    }

    this.app.router.add('admin.order-details-schema', {
      path: '/admin/order-details-schema',
      Component: Demo
    })
  }
}

export default PluginFieldOrderDetailsClient;
```

我们访问 [http://localhost:13000/admin/order-details-schema](http://localhost:13000/admin/order-details-schema) 就可以看到对应测试页面的内容了。

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/1721721815326.mov" type="video/mp4" />
</video>

### 4. 定义 Schema Initializer Item

我们新建 `packages/plugins/@nocobase-sample/plugin-field-component-without-value/src/client/initializer/index.tsx` 文件：

```ts
import React from "react";
import { SchemaInitializerActionModal, SchemaInitializerItemType, SelectProps, useCollection, useCompile, useSchemaInitializer } from "@nocobase/client"
import { MenuOutlined } from "@ant-design/icons";

import { FieldNameLowercase } from "../constants";
import { useT } from "../locale";
import { getOrderDetailsSchema } from '../schema'

export function useFieldOptions(): SelectProps['options'] {
  const collection = useCollection();

  const compile = useCompile();
  return collection
    .getFields()
    .map(field => ({ label: field.uiSchema?.title ? compile(field.uiSchema.title) : field.name, value: field.name }));
}

const OrderDetailsSchemaInitializer = () => {
  const t = useT();
  const { insert } = useSchemaInitializer();
  const options = useFieldOptions();
  return <SchemaInitializerActionModal
    buttonText={t("Order Details")}
    title={t("Select Order Field")}
    icon={<MenuOutlined />}
    isItem
    onSubmit={({ orderField }) => {
      insert(getOrderDetailsSchema(orderField));
    }}
    schema={{
      orderField: {
        type: 'string',
        title: 'orderField',
        required: true,
        'x-component': 'Select',
        'x-decorator': 'FormItem',
        enum: options
      },
    }}
  ></SchemaInitializerActionModal>
}

export const orderDetailsInitializerItem: SchemaInitializerItemType = {
  name: FieldNameLowercase,
  Component: OrderDetailsSchemaInitializer
};
```

`orderDetailsInitializerItem`：
  - `name`：唯一标识符，用于区分不同的 Schema Item 和增删改查操作
  - `Component`：Schema Initializer Item 对应的组件

`OrderDetailsSchemaInitializer`：
  - [SchemaInitializerActionModal](https://client.docs.nocobase.com/core/ui-schema/schema-initializer#type-actionmodal---schemainitializeractionmodal)：带弹窗的 Schema Initializer Item
    - `buttonText`：按钮文本
    - `title`：弹窗标题
    - `isItem`：是否是 Item，这里必须为 true
    - `schema`：弹窗内的表单 schema
    - `onSubmit`：表单提交事件
  - `useFieldOptions`：获取字段选项
  - `useT`：获取多语言工具函数
  - [useSchemaInitializer()](https://client.docs.nocobase.com/core/ui-schema/schema-initializer#useschemainitializer)：获取 Schema Initializer 上下文
    - `insert`：插入 Schema Item

`useFieldOptions`：
  - [useCollection](https://client.docs.nocobase.com/core/data-source/collection-provider#usecollection)：获取当前表的集合
  - `useCompile`：编译函数

更多关于 Schema Item 的定义可以参考 [Schema Initializer Item](https://client.docs.nocobase.com/core/ui-schema/schema-initializer#built-in-components-and-types) 文档。

### 5. 添加到 Form Block `Configure fields` 中

表单区块的 `Configure fields` 对应的 name 为 `form:configureFields`。

我们修改 `packages/plugins/@nocobase-sample/plugin-field-component-without-value/src/client/index.tsx` 文件：

```diff
// ...
+ import { orderDetailsInitializerItem } from './initializer';

export class PluginFieldComponentWithoutValueClient extends Plugin {
  async load() {
    // ...
+   this.app.schemaInitializerManager.addItem('form:configureFields', orderDetailsInitializerItem.name, orderDetailsInitializerItem);
  }
}

export default PluginFieldComponentWithoutValueClient;
```

我们使用 [app.schemaInitializerManager.addItem](https://client.docs.nocobase.com/core/ui-schema/schema-initializer-manager#schemainitializermanageradditem) 将 `orderDetailsInitializerItem` 添加对应 Initializer 子项中。

![20240723161400](https://static-docs.nocobase.com/20240723161400.png)

### 6. 实现 Schema Settings

#### 6.1 定义 Schema Settings

一个完整的 Block 还需要有 Schema Settings，用于配置一些属性和操作。

我们新建 `packages/plugins/@nocobase-sample/plugin-field-component-without-value/src/client/settings/index.ts` 文件：

```ts | pure
import { SchemaSettings } from "@nocobase/client";
import { FieldNameLowercase } from '../constants';
import { orderFieldSchemaSettingsItem } from "./items/orderField";

export const orderDetailsSettings = new SchemaSettings({
  name: `blockSettings:${FieldNameLowercase}`,
  items: [
    // TODO
  ]
});
```

#### 6.2 注册 Schema Settings

```ts
import { Plugin } from '@nocobase/client';
import { orderDetailsSettings } from './settings';

export class PluginFieldComponentWithoutValueClient extends Plugin {
  async load() {
    // ...
    this.app.schemaSettingsManager.add(orderDetailsSettings)
  }
}

export default PluginFieldComponentWithoutValueClient;
```

#### 6.3 使用 Schema Settings

我们修改 `packages/plugins/@nocobase-sample/plugin-field-component-without-value/src/client/schema/index.ts` 中的 `carouselSchema`：

```diff
+ import { orderDetailsSettings } from "../settings";

export const getOrderDetailsSchema = (orderField: string): ISchema => ({
  type: 'void',
  'x-decorator': 'FormItem',
+ 'x-settings': orderDetailsSettings.name,
  // ...
};
```

### 7. 实现 Schema Settings items

目前我们只实现了 `Schema Settings`，但是没有实现任何操作，我们需要根据需求实现各个操作。

目前 Schema Settings 支持的内置操作类型请参考 [Schema Settings - Built-in Components and Types](https://client.docs.nocobase.com/core/ui-schema/schema-settings#built-in-components-and-types) 文档。

#### 7.1 实现 `remove` 操作

目前通过 initializers 添加的字段是无法删除的，我们需要实现 `remove` 操作。

[NocoBase] 内置了 [remove](https://client.docs.nocobase.com/core/ui-schema/schema-settings#schemasettingsremove-1) 操作类型，我们修改 `packages/plugins/@nocobase-sample/plugin-field-component-without-value/src/client/settings/index.ts` 文件：

```diff
export const orderDetailsSettings = new SchemaSettings({
  name: `blockSettings:${FieldNameLowercase}`,
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
  - `breakRemoveOn`：删除时的中断条件。因为 `Configure fields` 会自动将子项的包裹在 `Grid` 中，所以这里设置 `breakRemoveOn: { 'x-component': 'Grid' }`，当删除 `Grid` 时，不再向上删除。

![20240613183852](https://static-docs.nocobase.com/20240613183852.png)

#### 7.2 实现 `Order field` 选择

我们除了在添加字段的时候选择了 `Order field`，还可以在 `Schema Settings` 中选择 `Order field`。

##### 7.2.1 定义 Schema Settings item

我们新建 `packages/plugins/@nocobase-sample/plugin-field-component-without-value/src/client/settings/items/orderField.ts` 文件：

```ts
import { createSelectSchemaSettingsItem } from "@nocobase/client";
import { generateNTemplate } from "../../locale";
import { useFieldOptions } from '../../initializer'

export const orderFieldSchemaSettingsItem = createSelectSchemaSettingsItem({
  name: 'orderField',
  title: generateNTemplate('Order field'),
  useOptions: useFieldOptions,
  schemaKey: `x-component-props.orderField`,
});
```

关于 SchemaSettings Item 的定义可以查看 [SchemaSettingsItem](https://client.docs.nocobase.com/core/ui-schema/schema-settings#optionsitems)。

`createSelectSchemaSettingsItem`：用于快速创建选择类型的 SchemaSettings Item。

- `name`：唯一标识，用于增删改查
- `title`：标题
- `useOptions`：获取选项
- `schemaKey`：对应 schema 的 key

##### 7.3.2 使用 SchemaSettings Item

我们修改 `packages/plugins/@nocobase-sample/plugin-field-component-without-value/src/client/settings/index.ts`：

```diff
import { SchemaSettings } from "@nocobase/client";
import { FieldNameLowercase } from '../constants';
+ import { orderFieldSchemaSettingsItem } from "./items/orderField";

export const orderDetailsSettings = new SchemaSettings({
  name: `blockSettings:${FieldNameLowercase}`,
  items: [
+   orderFieldSchemaSettingsItem,
    {
      name: 'remove',
      type: 'remove',
      componentProps: {
        removeParentsIfNoChildren: true,
        breakRemoveOn: {
          'x-component': 'Grid',
        },
      }
    },
  ]
});
```

![20240723161525](https://static-docs.nocobase.com/20240723161525.png)

你可以根据需要实现更多的 Settings 配置。

### 8. 多语言

#### 8.1 英文

我们编辑 `packages/plugins/@nocobase-sample/plugin-field-component-without-value/src/locale/en-US.json` 文件：

```ts
{
  "Order Details": "Order Details",
  "Order field": "Order field"
}
```

#### 8.2 中文

我们编辑 `packages/plugins/@nocobase-sample/plugin-field-component-without-value/src/locale/zh-CN.json` 文件：

```ts
{
  "Order Details": "订单详情",
  "Order field": "订单字段"
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
yarn build @nocobase-sample/plugin-field-component-without-value --tar
```

这样就可以看到 `storage/tar/@nocobase-sample/plugin-field-component-without-value.tar.gz` 文件了，然后通过[上传的方式](/welcome/getting-started/plugin)进行安装。
