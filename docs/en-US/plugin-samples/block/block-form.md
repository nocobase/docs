# `Form` 区块

## 场景说明

`Form` 区块是 NocoBase 中最重要的区块之一，它用于展示和编辑数据表的数据。文本会详细介绍 `Form` 区块实现。

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/2024-07-19-18-07-25.mov" type="video/mp4" />
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
yarn pm create @nocobase-sample/plugin-block-form
yarn pm enable @nocobase-sample/plugin-block-form
```

然后启动项目即可：

```bash
yarn dev
```

然后登录后访问 [http://localhost:13000/admin/pm/list/locale/](http://localhost:13000/admin/pm/list/locale/) 就可以看到插件已经安装并启用了。

## 功能实现

在实现本示例之前，我们需要先了解一些基础知识：

- [ant-design Form](https://ant.design/components/form)
- [@formily/antd-v5 Form](https://antd5.formilyjs.org/components/form)
- [SchemaInitializer 教程](/development/client/ui-schema/initializer)：用于向界面内添加各种区块、字段、操作等
- [SchemaInitializer API](https://client.docs.nocobase.com/core/ui-schema/schema-initializer)：用于向界面内添加各种区块、字段、操作等
- [UI Schema 协议](/development/client/ui-schema/what-is-ui-schema)：详细介绍 Schema 的结构和每个属性的作用
- [Designable 设计器](/development/client/ui-schema/designable)：用于修改 Schema

```bash
.
├── client # 客户端插件
│   ├── FormV3.configActions # 配置初始化器
│   ├── index.ts
│   └── items
│       └── submit # 提交操作
│           ├── index.ts
│           ├── initializer.tsx
│           ├── schema.ts
│           └── settings.ts
│   ├── FormV3.configFields # 字段初始化器
│   ├── FormV3.settings # 设置
│   ├── FormV3.initializer.ts # 初始化器
│   ├── FormV3.schema.ts # Schema
│   ├── FormV3.tsx # Component
│   ├── index.tsx # 客户端插件入口
│   └── locale.ts # 多语言工具函数
├── locale # 多语言文件
│   ├── en-US.json # 英语
│   └── zh-CN.json # 中文
├── index.ts # 服务端插件入口
└── server # 服务端插件
```

### 1. 定义名称

我们首先需要定义区块名称，它将会使用在各个地方。

我们新建 `packages/plugins/@nocobase-sample/plugin-block-form/src/client/constants.ts`：

```ts
export const FormV3BlockName = 'FormV3';
export const FormV3BlockNameLowercase = 'form-v3';
```

> 为了不与已有的 `Form` 组件冲突，我们这里将其命名为 `FormV3`

### 2. 实现区块组件

#### 2.1 定义区块组件

我们新建 `packages/plugins/@nocobase-sample/plugin-block-form/src/client/FormV3.tsx` 文件，其内容如下：

```tsx | pure
import React, { FC } from 'react';
import { Form, FormProps } from '@formily/antd-v5';
import { withDynamicSchemaProps } from '@nocobase/client';
import { FormV3BlockName } from './constants'

export interface FormV3Props extends FormProps {
  children?: React.ReactNode;
}

export const FormV3: FC<FormV3Props> = withDynamicSchemaProps((props) => {
  return <Form {...props} layout={props.layout || 'vertical'} />
}, { displayName: FormV3BlockName });
```

`Form` 组件整体来说是一个被 `withDynamicSchemaProps` 包裹的函数组件，[withDynamicSchemaProps](/development/client/ui-schema/what-is-ui-schema#x-component-props-和-x-use-component-props) 是一个高阶组件，用于处理 Schema 中的的动态属性。

如果不看 `withDynamicSchemaProps` 的话，`Form` 组件就是一个简单的函数组件。

#### 2.2 注册区块组件

我们需要将 `FormV3` 通过插件注册到系统中。

```tsx | pure
import { Plugin } from '@nocobase/client';
import { FormV3 } from './FormV3';

export class PluginBlockFormClient extends Plugin {
  async load() {
    this.app.addComponents({ FormV3 })
  }
}

export default PluginBlockFormClient;
```

#### 2.3 验证区块组件

组件验证方式有 2 种：

- 临时页面验证：我们可以临时建一个页面，然后渲染 `Form` 组件，查看是否符合需求
- 文档示例验证：可以启动文档 `yarn doc plugins/@nocobase-sample/plugin-block-form`，通过写文档示例的方式验证是否符合需求（TODO）

我们以 `临时页面验证` 为例，我们新建一个页面，根据属性参数添加一个或者多个 `Form` 组件，查看是否符合需求。

```tsx | pure
import React from 'react';
import { Plugin, SchemaComponent } from '@nocobase/client';
import { FormV3 } from './FormV3';

export class PluginBlockFormClient extends Plugin {
  async load() {
    this.app.addComponents({ FormV3 })

    this.app.router.add('admin.block-form-component', {
      path: '/admin/block-form-component',
      Component: () => {
        return <FormV3>
          <SchemaComponent schema={{
            type: 'void',
            properties: {
              username: {
                type: 'string',
                'x-decorator': 'FormItem',
                'x-component': 'Input',
                title: 'Username',
                required: true,
              },
              nickname: {
                type: 'string',
                'x-decorator': 'FormItem',
                'x-component': 'Input',
                title: 'Nickname',
              },
              password: {
                type: 'string',
                'x-decorator': 'FormItem',
                'x-component': 'Input',
                title: 'Password',
              },
              button: {
                type: 'void',
                'x-component': 'Action',
                title: 'Submit',
                'x-use-component-props': useSubmitActionProps,
              },
            }
          }} />
        </FormV3>
      }
    });
  }
}

export default PluginBlockFormClient;
```

然后访问 `http://localhost:13000/admin/form-component` 就可以看到对应测试页面的内容了。

![20240718175735](https://static-docs.nocobase.com/20240718175735.png)

验证完毕后需要删除测试页面。

### 3. 定义区块 Schema

#### 3.1 定义区块 Schema

NocoBase 的动态页面都是通过 Schema 来渲染，所以我们需要定义一个 Schema，后续用于在界面中添加 `Form` 区块。在实现本小节之前，我们需要先了解一些基础知识：

- [UI Schema 协议](/development/client/ui-schema/what-is-ui-schema)：详细介绍 Schema 的结构和每个属性的作用

我们新建 `packages/plugins/@nocobase-sample/plugin-block-form/src/client/FormV3.schema.ts` 文件：

```tsx | pure
import { ISchema, useDataBlockProps } from "@nocobase/client";

import { FormV3BlockName, FormV3BlockNameLowercase } from "./constants";
import { FormV3Props } from "./FormV3";

export function useFormV3Props(): FormV3Props {
  const blockProps = useDataBlockProps();
  return blockProps[FormV3BlockNameLowercase];
}

interface GetFormV3SchemaOptions {
  dataSource?: string;
  collection: string;
  properties?: ISchema['properties'];
}

export function getFormV3Schema(options: GetFormV3SchemaOptions): ISchema {
  const { dataSource, collection, properties = {} } = options;
  return {
    type: 'void',
    'x-component': 'CardItem',
    'x-decorator': 'DataBlockProvider',
    'x-decorator-props': {
      dataSource,
      collection,
      [FormV3BlockNameLowercase]: {},
    },
    properties: {
      [FormV3BlockNameLowercase]: {
        type: 'void',
        'x-component': FormV3BlockName,
        'x-use-component-props': 'useFormV3Props',
        properties: {
          ...properties,
        }
      },
    }
  }
}
```

`getFormV3Schema`：
  - `type`：类型，这里是 `void`，表示纯 UI 节点，没有数据
  - `'x-component': 'CardItem'`：[CardItem 组件](https://client.docs.nocobase.com/components/card-item)，目前的区块都是被包裹在卡片中的，用于提供样式、布局和拖拽等功能
  - `x-decorator: 'DataBlockProvider'`：数据区块提供者，用于提供数据，更多关于 DataBlockProvider 可以查看 [DataBlockProvider](https://client.docs.nocobase.com/core/data-block/data-block-provider)
  - `x-decorator-props`：`DataBlockProvider` 的属性
    - `dataSource`：数据源
    - `collection`：数据表
    - `[FormV3BlockNameLowercase]: {}`：`FormV3` 组件的属性
  - `properties: { [FormV3BlockNameLowercase]: { ... } }`：子节点
    - `[FormV3BlockNameLowercase]`：`FormV3` 组件的属性
    - `'x-component': FormV3BlockName`：`FormV3` 组件
    - `'x-use-component-props': 'useFormV3Props'`：使用 [x-use-component-props](/development/client/ui-schema/what-is-ui-schema#x-component-props-和-x-use-component-props) 获取 `FormV3` 组件的属性
  - `"x-toolbar": "BlockSchemaToolbar"`：`BlockSchemaToolbar` 用于左上角显示当前数据表，一般和 `DataBlockProvider` 搭配使用

`useFormV3Props`：Hooks，用于获取 `FormV3` 组件的属性
  - [useDataBlockProps](https://client.docs.nocobase.com/core/data-block/data-block-provider#usedatablockprops)：获取 [DataBlockProvider](https://client.docs.nocobase.com/core/data-block/data-block-provider) 的 props 属性，也就是 `x-decorator-props` 的值
  - `blockProps[FormV3BlockNameLowercase]`：对应 `FormV3` 组件的属性

上述 Schema 转为 React 组件后相当于：

```tsx | pure
<CardItem>
  <DataBlockProvider dataSource={dataSource} collection={collection} formV3={{}}>
    <FormV3 {...useFormV3Props()}>
      {children}
    </FormV3>
  </DataBlockProvider>
</CardItem>
```

#### 3.2 注册 scope

我们需要将 `useFormV3Props` 注册到系统中，这样 [x-use-component-props](/development/client/ui-schema/what-is-ui-schema#x-component-props-和-x-use-component-props) 才能找到对应的 scope。

```tsx | pure
import { Plugin } from '@nocobase/client';
import { FormV3 } from './FormV3';
import { useFormV3Props } from './FormV3.schema';

export class PluginBlockFormClient extends Plugin {
  async load() {
    this.app.addComponents({ FormV3 })
    this.app.addScopes({ useFormV3Props });
  }
}

export default PluginBlockFormClient;
```

更多关于 Scope 的说明可以查看 [全局注册 Component 和 Scope](/plugin-samples/component-and-scope/global)

#### 3.3 验证区块 Schema

同验证组件一样，我们可以通过临时页面验证或者文档示例验证的方式来验证 Schema 是否符合需求。我们这里以临时页面验证为例：

```tsx | pure
import React from 'react';
import { Plugin, SchemaComponent } from '@nocobase/client';
import { FormV3 } from './FormV3';
import { useFormV3Props, getFormV3Schema } from './FormV3.schema';

import { useForm } from '@formily/react';
function useSubmitActionProps(): ActionProps {
  const form = useForm();

  return {
    type: 'primary',
    htmlType: 'submit',
    async onClick() {
      await form.submit();
      const values = form.values;

      console.log('values', values);
    },
  };
}

export class PluginBlockFormClient extends Plugin {
  async load() {
    this.app.addComponents({ FormV3 })
    this.app.addScopes({ useFormV3Props });

    this.app.router.add('admin.block-form-schema', {
      path: '/admin/block-form-schema',
      Component: () => {
        return <>
          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <SchemaComponent schema={{
              properties: {
                test: getFormV3Schema({
                  collection: 'users',
                  properties: {
                    username: {
                      type: 'string',
                      'x-decorator': 'FormItem',
                      'x-component': 'CollectionField',
                    },
                    nickname: {
                      type: 'string',
                      'x-decorator': 'FormItem',
                      'x-component': 'CollectionField',
                    },
                    submit: {
                      type: 'void',
                      'x-component': 'Action',
                      title: 'Submit',
                      'x-use-component-props': useSubmitActionProps,
                    },
                  }
                })
              }
            }} />
          </div>
        </>
      }
    })
  }
}

export default PluginBlockFormClient;
```

关于 `SchemaComponent` 的详细说明可以查看 [SchemaComponent](https://client.docs.nocobase.com/core/ui-schema/schema-component#schemacomponent-1) 文档。

我们访问 [http://localhost:13000/admin/block-form-schema](http://localhost:13000/admin/block-form-schema) 就可以看到对应测试页面的内容了。

![20240718180826](https://static-docs.nocobase.com/20240718180826.png)

验证完毕后需要删除测试页面。

### 4. 定义 Schema Initializer Item

我们新建 `packages/plugins/@nocobase-sample/plugin-block-form/src/client/FormV3.initializer.tsx` 文件：

```ts
import React from 'react';
import { SchemaInitializerItemType, useSchemaInitializer } from '@nocobase/client'
import { FormOutlined } from '@ant-design/icons';

import { getFormV3Schema } from './FormV3.schema'
import { FormV3BlockName } from './constants';
import { useT } from './locale';

export const formV3InitializerItem: SchemaInitializerItemType = {
  name: FormV3BlockName,
  Component: 'DataBlockInitializer',
  useComponentProps() {
    const { insert } = useSchemaInitializer();
    const t = useT();

    return {
      title: t(FormV3BlockName),
      icon: <FormOutlined />,
      componentType: FormV3BlockName,
      onCreateBlockSchema({ item }) {
        insert(getFormV3Schema({ dataSource: item.dataSource, collection: item.name }))
      },
    };
  },
}
```

`formV3InitializerItem`：

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

更多关于 Schema Initializer 的定义可以参考 [Schema Initializer](https://client.docs.nocobase.com/core/ui-schema/schema-initializer) 文档。

### 5. 添加到 Add block 中

系统中有很多个 `Add block` 按钮，但他们的 **name 是不同的**。

![img_v3_02b4_049b0a62-8e3b-420f-adaf-a6350d84840g](https://static-docs.nocobase.com/img_v3_02b4_049b0a62-8e3b-420f-adaf-a6350d84840g.jpg)

如果我们需要添加到页面级别的 `Add block` 中，我们需要知道对应的 `name`，我们可以通过 TODO 方式查看对应的 `name`。

TODO

通过上图可以看到页面级别的 `Add block` 对应的 name 为 `page:addBlock`，`Data Blocks` 对应的 name 为 `dataBlocks`。

然后我们修改 `packages/plugins/@nocobase-sample/plugin-block-form/src/client/index.tsx` 文件：

```tsx | pure
import { Plugin } from '@nocobase/client';

import { FormV3 } from './FormV3';
import { useFormV3Props } from './FormV3.schema';
import { formV3InitializerItem } from './FormV3.initializer';

export class PluginBlockFormClient extends Plugin {
  async load() {
    this.app.addComponents({ FormV3 })
    this.app.addScopes({ useFormV3Props });

    this.app.schemaInitializerManager.addItem('page:addBlock', `dataBlocks.${formV3InitializerItem.name}`, formV3InitializerItem);
  }
}

export default PluginBlockFormClient;
```

这里使用 [app.schemaInitializerManager.addItem](https://client.docs.nocobase.com/core/ui-schema/schema-initializer-manager#schemainitializermanageradditem) 将 `formV3InitializerItem` 添加对应 Initializer 子项中，其中 `page:addBlock` 是页面上 `Add block` 的 name，`dataBlocks` 是其父级的 name。

然后我们 hover `Add block` 按钮，就可以看到 `FormV3` 这个新的区块类型。

![20240719112105](https://static-docs.nocobase.com/20240719112105.png)

点击 `Users` 表，就可以添加一个新的 `FormV3` 区块了，但是目前子节点是空的。

![20240719112149](https://static-docs.nocobase.com/20240719112149.png)

### 6. 实现 Schema Settings

目前的区块只能添加，但是无法删除，我们需要实现 `Schema Settings`，用于配置一些属性和操作。

#### 6.1 定义 Schema Settings

一个完整的 Block 还需要有 Schema Settings，用于配置一些属性和操作。

我们新建 `packages/plugins/@nocobase-sample/plugin-block-form/src/client/FormV3.settings/index.ts` 文件：

```ts | pure
import { SchemaSettings } from "@nocobase/client";
import { FormV3BlockNameLowercase } from "../constants";

export const formV3Settings = new SchemaSettings({
  name: `blockSettings:${FormV3BlockNameLowercase}`,
  items: [
    // TODO
  ]
})
```

#### 6.2 注册 Schema Settings

```ts
import { Plugin } from '@nocobase/client';
import { formV3Settings } from './FormV3.settings';

export class PluginBlockFormClient extends Plugin {
  async load() {
    // ...
    this.app.schemaSettingsManager.add(formV3Settings)
  }
}

export default PluginBlockFormClient;
```

#### 6.3 使用 Schema Settings

我们修改 `packages/plugins/@nocobase-sample/plugin-block-form/src/client/schema/index.ts` 中的 `getFormV3Schema`：

```diff
+ import { formV3Settings } from "./FormV3.settings";

export function getFormV3Schema(options: GetFormV3SchemaOptions): ISchema {
  const { dataSource, collection, properties = {} } = options;
  return {
    type: 'void',
    'x-decorator': 'CardItem',
+   'x-settings': formV3Settings.name,
    // ...
  }
};
```


### 7. 实现 Schema Settings items

目前我们只实现了 `Schema Settings`，但是没有实现任何操作，我们需要根据需求实现各个操作。

目前 Schema Settings 支持的内置操作类型请参考 [Schema Settings - Built-in Components and Types](https://client.docs.nocobase.com/core/ui-schema/schema-settings#built-in-components-and-types) 文档。

#### 7.1 实现 `remove` 操作

目前通过 initializers 添加的区块是无法删除的，我们需要实现 `remove` 操作。

[NocoBase] 内置了 [remove](https://client.docs.nocobase.com/core/ui-schema/schema-settings#schemasettingsremove-1) 操作类型，我们修改 `packages/plugins/@nocobase-sample/plugin-block-form/src/client/settings/index.ts` 文件：

```diff
import { SchemaSettings } from '@nocobase/client';
import { BlockNameLowercase } from '../constants';

export const formV3Settings = new SchemaSettings({
  name: `blockSettings:${FormV3BlockNameLowercase}`,
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

:::warning
schema 的变更不会影响之前添加的区块，只有新添加的区块会才能有最新的 schema，我们这里需要新添加一个区块来查看效果。
:::

![20240719145202](https://static-docs.nocobase.com/20240719145202.png)

#### 7.2 实现 `Edit block title` 操作

`Edit block title` 也是一个常见的操作，`@nocobase/client` 内置了 `SchemaSettingsBlockTitleItem` 组件，我们可以直接使用。

```diff
- import { SchemaSettings } from "@nocobase/client";
+ import { SchemaSettings, SchemaSettingsBlockTitleItem } from "@nocobase/client";

export const formV3Settings = new SchemaSettings({
  name: `blockSettings:${FormV3BlockNameLowercase}`,
  items: [
+   {
+     name: 'blockTitle',
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
    },
  ]
})
```

![20240719145326](https://static-docs.nocobase.com/20240719145326.png)


### 8. 实现 `Configure actions`

`Configure actions` 用于添加一些操作，比如 `Submit`、`Custom request` 等。

关于 `Configure actions` 的详细说明可以查看 [区块内嵌的 Initializer - 配置操作](/plugin-samples/schema-initializer/configure-actions) 文档。

#### 8.1 定义 initializer

我们新建 `packages/plugins/@nocobase-sample/plugin-block-form/src/client/FormV3.configFields/index.ts` 文件：

```ts
import { SchemaInitializer } from "@nocobase/client";
import { FormV3BlockNameLowercase } from "../constants";

export const formV3ConfigureActionsInitializer = new SchemaInitializer({
  name: `${FormV3BlockNameLowercase}:configureActions`,
  icon: 'SettingOutlined',
  title: tStr('Configure actions'),
  style: {
    marginLeft: 8,
  },
  items: [
    // TODO
  ]
});
```

我们通过上述代码定义了一个新的 `SchemaInitializer`，其子项暂时为空。

- [SchemaInitializer](https://client.docs.nocobase.com/core/ui-schema/schema-initializer)：用于创建一个 Schema Initializer 实例
- `icon`：图标，更多图标可参考 Ant Design [Icons](https://ant.design/components/icon/)
- `title`：按钮标题
- [items](https://client.docs.nocobase.com/core/ui-schema/schema-initializer#built-in-components-and-types)：按钮下的子项

#### 8.2 注册 initializer

然后修改 `packages/plugins/@nocobase-sample/plugin-block-form/src/client/index.tsx` 文件，导入并注册这个 initializer：

```tsx | pure
// ...
import { formV3ConfigureActionsInitializer } from './FormV3.configActions';

export class PluginBlockFormClient extends Plugin {
  async load() {
    this.app.schemaInitializerManager.add(formV3ConfigureActionsInitializer);

    // ...
  }
}
```

#### 8.3 使用 initializer

我们修改 `packages/plugins/@nocobase-sample/plugin-block-form/src/client/FormV3.schema.ts` 文件，新增 `actionBar` 子节点：

```diff
// ...
+ import { formV3ConfigureActionsInitializer } from "./FormV3.configActions";

export function getFormV3Schema(options: GetFormV3SchemaOptions): ISchema {
  const { dataSource, collection, properties = {} } = options;
  return {
    type: 'void',
    'x-component': 'CardItem',
    'x-decorator': 'DataBlockProvider',
    'x-decorator-props': {
      dataSource,
      collection,
      action,
      params,
      [FormV3BlockNameLowercase]: {},
    },
    'x-settings': formV3Settings.name,
    "x-toolbar": "BlockSchemaToolbar",
    properties: {
      [FormV3BlockNameLowercase]: {
        type: 'void',
        'x-component': FormV3BlockName,
        'x-use-component-props': 'useFormV3Props',
        properties: {
          ...properties as any,
+         actionBar: {
+           type: 'void',
+           "x-initializer": formV3ConfigureActionsInitializer.name,
+           "x-component": "ActionBar",
+           "x-component-props": {
+             "layout": "one-column",
+             "style": {
+               "marginTop": 24
+             }
+           },
+         },
        }
      }
    }
  }
}
```

`configure actions` 一般与 [ActionBar](https://client.docs.nocobase.com/components/action#actionbar) 组件搭配使用。

我们在 `FormV3` 的子节点中添加了一个 `actionBar` 节点：

- `type: 'void'`：类型为 `void`，表示这是一个容器
- `x-component: 'ActionBar'`：使用 [ActionBar](https://client.docs.nocobase.com/components/action#actionbar) 组件，用于展示按钮
- `x-initializer: formV3ConfigureActionsInitializer.name`：使用我们刚创建的 Initializer
- `x-component-props.layout: 'one-column'`：左侧布局，具体示例可参考 [ActionBar one-column](https://client.docs.nocobase.com/components/action#one-column)

![20240719152528](https://static-docs.nocobase.com/20240719152528.png)

### 9. 实现 `Configure actions` items

```bash
.
├── FormV3.configActions
├── index.ts
└── items
    └── submit # 提交操作
        ├── index.ts
        ├── initializer.tsx
        ├── schema.ts
        └── settings.ts
```

#### 9.1 实现 `Submit` 操作

##### 9.1.1 定义 Schema

我们新建 `packages/plugins/@nocobase-sample/plugin-block-form/src/client/FormV3.configActions/items/submit/schema.ts` 文件：

```ts
import { useForm } from '@formily/react';
import { App } from 'antd';
import { ActionProps, useDataBlockResource } from "@nocobase/client";
import { tStr } from '../../../locale'

export const useFormV3SubmitActionProps = (): ActionProps => {
  const resource = useDataBlockResource();
  const form = useForm();
  const { message } = App.useApp();
  return {
    type: 'primary',
    htmlType: 'submit',
    async onClick() {
      await form.submit();
      const values = form.values;
      await resource.create({ values })
      await form.reset();
      message.success('Created successfully');
    },
  }
}

export const submitActionSchema = {
  type: 'void',
  title: tStr('Submit'),
  'x-component': 'Action',
  'x-use-component-props': 'useFormV3SubmitActionProps',
  'x-toolbar': 'ActionSchemaToolbar'
};
```

`submitActionSchema`：
  - `type: 'void'`：类型为 `void`，表示普通 UI，不包含数据
  - `x-component: 'Action'`：使用 [Action](https://client.docs.nocobase.com/components/action) 组件，用于展示按钮
  - `title: 'Submit'`：按钮标题
  - `x-use-component-props: 'useFormV3SubmitActionProps'`：使用 `useFormV3SubmitActionProps` 这个 Hooks 返回的属性。因为 Schema 会保存到服务器，所以这里需要使用字符串的方式。
  - `'x-toolbar': 'ActionSchemaToolbar'`：一般于 `Action` 组件搭配使用，与默认的 ToolBar 不同的是，其将 Action 右上角的 `Initializer` 隐藏，仅保留 Drag 和 Settings。

`useFormV3SubmitActionProps`：这个是 React Hooks，需要返回 Action 组件的属性。
  - [useDataBlockResource()](https://client.docs.nocobase.com/core/data-block/data-block-request-provider)：数据区块的请求对象，由 `DataBlockProvider` 内部提供，用于自动获取数据区块的数据
    - `resource.create`：用于创建数据
  - `useForm`：获取 Formily 的 form 对象
    - `form.submit()`：提交表单，触发校验
    - `form.values`：获取表单数据
    - `form.reset()`：重置表单
  - `type: 'primary'`：按钮类型为 `primary`
  - `onClick`：点击事件。


然后将其在 `packages/plugins/@nocobase-sample/plugin-block-form/src/client/FormV3.configActions/items/submit/index.ts` 中导出：

```ts
export * from './schema';
```

##### 9.1.2 注册 Scope

我们还需要将 `useFormV3SubmitActionProps` 注册到上下文中。我们修改 `packages/plugins/@nocobase-sample/plugin-block-form/src/client/index.tsx` 文件：

```diff
// ...
+ import { useFormV3SubmitActionProps } from './FormV3.configActions/items/submit';

export class PluginBlockFormClient extends Plugin {
  async load() {
    // ...
-   this.app.addScopes({ useFormV3Props });
+   this.app.addScopes({ useFormV3Props, useFormV3SubmitActionProps });
  }
}
```

关于 `SchemaComponentOptions` 的使用可以参考 [SchemaComponentOptions](https://client.docs.nocobase.com/core/ui-schema/schema-component#schemacomponentoptions) 文档以及 [全局注册 Component 和 Scope](/plugin-samples/component-and-scope/global)。

##### 9.1.3 定义 SchemaInitializer item

我们新增 `packages/plugins/@nocobase-sample/plugin-block-form/src/client/FormV3.configActions/items/submit/initializer.tsx` 文件：

```tsx | pure
import { SchemaInitializerItemType, useSchemaInitializer } from "@nocobase/client";
import { submitActionSchema } from "./schema";
import { tStr } from '../../../locale';

export const submitActionInitializerItem: SchemaInitializerItemType = {
  type: 'item',
  name: 'submit',
  title: tStr('Submit'),
  useComponentProps() {
    const { insert } = useSchemaInitializer();
    return {
      onClick() {
        insert(submitActionSchema)
      },
    };
  },
};
```

- `type: 'item'`：类型为 `item`，表示文本，当点击后会触发 `onClick` 事件
- `name: 'submit'`：唯一标识符，用于区分不同的 Schema Item 和增删改查操作
- `title: 'Submit'`：按钮标题

更多关于 Schema Item 的定义可以参考 [Schema Initializer Item](https://client.docs.nocobase.com/core/ui-schema/schema-initializer#built-in-components-and-types) 文档。


然后修改 `packages/plugins/@nocobase-sample/plugin-block-form/src/client/FormV3.configActions/items/submit/index.ts` 将其导出：

```tsx | pure
export * from './initializer';
```

###### 10.1.4 使用 SchemaInitializer item

我们修改 `packages/plugins/@nocobase-sample/plugin-block-form/src/client/FormV3.configActions/index.ts` 文件，将 `submitActionInitializerItem` 添加到 `items` 中：

```diff
// ...
+ import { submitActionInitializerItem } from "./items/submit";

export const formV3ConfigureActionsInitializer = new SchemaInitializer({
  name: `${FormV3BlockNameLowercase}:configureActions`,
  icon: 'SettingOutlined',
  title: 'Configure actions',
  style: {
    marginLeft: 8,
  },
  items: [
+   submitActionInitializerItem,
  ]
});
```

##### 9.1.4 定义 settings

我们新建 `packages/plugins/@nocobase-sample/plugin-block-form/src/client/FormV3.configActions/items/submit/settings.ts`

```tsx | pure
import { ButtonEditor, SchemaSettings, useSchemaToolbar } from "@nocobase/client";

export const formV3SubmitActionSettings = new SchemaSettings({
  name: `actionSettings:formV3Submit`,
  items: [
    {
      name: 'editButton',
      Component: ButtonEditor,
      useComponentProps() {
        const { buttonEditorProps } = useSchemaToolbar();
        return buttonEditorProps;
      },
    },
    {
      name: 'remove',
      type: 'remove',
    }
  ]
})
```

`formV3SubmitActionSettings`：
  - `editButton`：用于编辑按钮的样式。
  - `remove`：用于删除

更多关于 Schema Settings 的定义可以参考 [Schema Settings](https://client.docs.nocobase.com/core/ui-schema/schema-settings) 文档。

修改 `packages/plugins/@nocobase-sample/plugin-block-form/src/client/FormV3.configActions/items/submit/index.ts` 将其导出：

```tsx | pure
export * from './settings';
```

##### 9.1.5 注册 settings

然后将 `formV3SubmitActionSettings` 注册到系统中。我们修改 `packages/plugins/@nocobase-sample/plugin-block-form/src/client/index.tsx` 文件：

```diff
- import { useFormV3SubmitActionProps } from './FormV3.configActions/items/submit';
+ import { formV3SubmitActionSettings, useFormV3SubmitActionProps } from './FormV3.configActions/items/submit';

export class PluginBlockFormClient extends Plugin {
  async load() {
+   this.app.schemaSettingsManager.add(formV3SubmitActionSettings);
  }
}
```

##### 9.1.6 使用 settings

我们修改 `packages/plugins/@nocobase-sample/plugin-block-form/src/client/FormV3.configActions/items/submit/schema.ts` 文件的 `submitActionSchema` 方法，将 `x-settings` 设置为 `formV3SubmitActionSettings.name`。

```diff
+ import { formV3SubmitActionSettings } from './settings';

export const submitActionSchema = {
  type: 'void',
  title: tStr('Submit'),
  'x-component': 'Action',
+ 'x-settings': formV3SubmitActionSettings.name,
  'x-use-component-props': 'useFormV3SubmitActionProps',
  'x-toolbar': 'ActionSchemaToolbar'
};
```

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/20240719160328.mov" type="video/mp4" />
</video>

#### 9.2 实现 `Custom request`

`Custom request` 是一个常见的操作，NocoBase 内置了 `CustomRequest` 组件，我们可以直接使用。

我们修改 `packages/plugins/@nocobase-sample/plugin-block-form/src/client/FormV3.configActions/index.ts`：

```diff

import { SchemaInitializer } from "@nocobase/client";
import { FormV3BlockNameLowercase } from "../constants";
import { submitActionInitializerItem } from "./items/submit";
+ import { tStr } from '../locale'

export const formV3ConfigureActionsInitializer = new SchemaInitializer({
  name: `${FormV3BlockNameLowercase}:configureActions`,
  icon: 'SettingOutlined',
  title: 'Configure actions',
  style: {
    marginLeft: 8,
  },
  items: [
    submitActionInitializerItem,
+   {
+     name: 'customRequest',
+     title: tStr('Custom request'),
+     Component: 'CustomRequestInitializer',
+   },
  ]
});
```

![20240719165222](https://static-docs.nocobase.com/20240719165222.png)

### 10. 实现 `Configure fields`

`Configure fields` 的作用是向 FormV3 区块添加数据字段。

#### 10.1 定义 initializer

我们新建 `packages/plugins/@nocobase-sample/plugin-block-form/src/client/FormV3.configFields/index.ts` 文件：

```ts
import { gridRowColWrap, SchemaInitializer } from "@nocobase/client";
import { FormV3BlockNameLowercase } from '../constants';

export const formV3ConfigureFieldsInitializer = new SchemaInitializer({
  name: `${FormV3BlockNameLowercase}:configureFields`,
  icon: 'SettingOutlined',
  wrap: gridRowColWrap,
  title: tStr('Configure fields'),
  items: [
    // TODO
  ]
});
```

`formV3ConfigureFieldsInitializer`：
  - `name`：唯一标识符
  - `icon`：图标
  - `wrap`：我们将每个字段包裹在 `Grid` 中，这样可以方便布局和拖拽
  - `title`：标题
  - `items`：子项

更多关于 Schema Item 的定义可以参考 [Schema Initializer Item](https://client.docs.nocobase.com/core/ui-schema/schema-initializer#built-in-components-and-types) 文档。

#### 10.2 注册 initializer

然后修改 `packages/plugins/@nocobase-sample/plugin-block-form/src/client/index.tsx` 文件，导入并注册这个 initializer：

```diff
+ import { formV3ConfigureFieldsInitializer } from './FormV3.configFields';

export class PluginBlockFormClient extends Plugin {
  async load() {
-   this.app.schemaInitializerManager.add(formV3ConfigureActionsInitializer);
+   this.app.schemaInitializerManager.add(formV3ConfigureActionsInitializer, formV3ConfigureFieldsInitializer);
    // ...
  }
}
```

#### 10.3 使用 initializer

我们修改 `packages/plugins/@nocobase-sample/plugin-block-form/src/client/FormV3.schema.ts` 文件，新增 `fields` 子节点：

```diff
// ...
+ import { formV3ConfigureFieldsInitializer } from "./FormV3.configFields";

export function getFormV3Schema(options: GetFormV3SchemaOptions): ISchema {
  const { dataSource, collection, properties = {} } = options;
  return {
    type: 'void',
    'x-component': 'CardItem',
    'x-decorator': 'DataBlockProvider',
    'x-decorator-props': {
      dataSource,
      collection,
      [FormV3BlockNameLowercase]: {},
    },
    'x-settings': formV3Settings.name,
    "x-toolbar": "BlockSchemaToolbar",
    properties: {
      [FormV3BlockNameLowercase]: {
        type: 'void',
        'x-component': FormV3BlockName,
        'x-use-component-props': 'useFormV3Props',
        properties: {
          ...properties as any,
+         fields: {
+           "type": "void",
+           "x-component": "Grid",
+           "x-initializer": formV3ConfigureFieldsInitializer.name
+         },
          actionBar: {
            type: 'void',
            "x-initializer": formV3ConfigureActionsInitializer.name,
            "x-component": "ActionBar",
            "x-component-props": {
              "layout": "one-column",
              "style": {
                "marginTop": 24
              }
            },
          },
        }
      }
    }
  }
}
```

为了方便布局，我们将其包裹在 `Grid` 中，这样可以方便布局和拖拽。

![20240719171211](https://static-docs.nocobase.com/20240719171211.png)

### 11. 实现 `Configure fields` items

#### 11.1 实现 `Collection Fields`

`Configure fields` 主要是基于 [CollectionFieldsToInitializerItems](https://client.docs-en.nocobase.com/core/data-source/collection-fields-to-initializer-items#collectionfieldstoinitializeritems) 实现。

我们这里可以直接内核提供的 `CollectionFieldsToFormInitializerItems`，它的作用就是将数据表的字段转换为 `Initializer` 的子项。

我们修改 `packages/plugins/@nocobase-sample/plugin-block-form/src/client/FormV3.configFields/index.ts` 文件：

```diff
- import { gridRowColWrap, SchemaInitializer } from "@nocobase/client";
+ import { gridRowColWrap, SchemaInitializer, CollectionFieldsToFormInitializerItems } from "@nocobase/client";

export const formV3ConfigureFieldsInitializer = new SchemaInitializer({
  name: `${FormV3BlockNameLowercase}:configureFields`,
  icon: 'SettingOutlined',
  wrap: gridRowColWrap,
  title: 'Configure fields',
  items: [
+   {
+     name: 'collectionFields',
+     Component: CollectionFieldsToFormInitializerItems,
+   },
  ]
});
```

- `name: 'collectionFields'`：唯一标识符
- `Component: CollectionFieldsToFormInitializerItems`：内核提供的组件，用于将数据表的字段转换 FormItem 类型的 Initializer 子项

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/2024-07-19-17-17-38.mov" type="video/mp4" />
</video>

#### 11.2 实现 `Add text`

向界面添加文本，这是一个常见的需求。因此，NocoBase 在 `@nocobase/client` 中提供了 `MarkdownFormItemInitializer` 来实现此功能。

我们修改 `packages/plugins/@nocobase-sample/plugin-block-form/src/client/FormV3.configFields/index.ts` 文件：

```diff
// ...
+ import { tStr } from '../locale'

export const formV3ConfigureFieldsInitializer = new SchemaInitializer({
  name: `${FormV3BlockNameLowercase}:configureFields`,
  icon: 'SettingOutlined',
  wrap: gridRowColWrap,
  title: 'Configure fields',
  items: [
    {
      name: 'collectionFields',
      Component: CollectionFieldsToFormInitializerItems,
    },
+   {
+     name: 'divider',
+     type: 'divider',
+   },
+   {
+     name: 'addText',
+     title: tStr('Add text'),
+     Component: 'MarkdownFormItemInitializer',
+   },
  ]
});
```

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/2024-07-19-17-27-21.mov" type="video/mp4" />
</video>

### 12. 权限

TODO

### 13. 多语言

我们可以通过 [http://localhost:13000/admin/settings/system-settings](http://localhost:13000/admin/settings/system-settings) 添加多个语言，并且在右上角切换语言。

![20240611113758](https://static-docs.nocobase.com/20240611113758.png)

由于 FormV3 所使用的文案和 FormV2 相同，已经做了多语言处理，所以这里并没有什么需要更改的。

## 打包和上传到生产环境

按照 [构建并打包插件](/development/your-fisrt-plugin#构建并打包插件) 文档说明，我们可以打包插件并上传到生产环境。

如果是 clone 的源码，需要先执行一次全量 build，将插件的依赖也构建好。

```bash
yarn build
```

如果是使用的 `create-nocobase-app` 创建的项目，可以直接执行：

```bash
yarn build @nocobase-sample/plugin-block-form --tar
```

这样就可以看到 `storage/tar/@nocobase-sample/plugin-block-form.tar.gz` 文件了，然后通过[上传的方式](/welcome/getting-started/plugin)进行安装。
