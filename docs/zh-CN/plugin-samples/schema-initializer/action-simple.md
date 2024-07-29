# 添加简单的 Action

## 场景说明

NocoBase 中有很多 `Configure actions` 用于向界面添加操作按钮。

![img_v3_02b4_51f4918f-d344-43b2-b19e-48dca709467g](https://static-docs.nocobase.com/img_v3_02b4_51f4918f-d344-43b2-b19e-48dca709467g.jpg)

如果目前已有的操作按钮不一定满足我们的需求，我们需要向已有的 `Configure actions` 里添加子项用于创建新的操作按钮。

标题中简单的 Action 指的是不需要弹窗的 Action，可以查看 [添加弹窗 Action](/plugin-samples/schema-initializer/action-modal)。

## 示例说明

本实例会创建一个按钮，点击后打开对应区块的文档，并将这个按钮添加到 `Table`、`Details` 以及 `Form` 区块中的 `Configure actions` 中。

本文档完整的示例代码可以在 [plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-initializer-action-simple) 中查看。

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/20240522-185359.mp4" type="video/mp4" />
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
yarn pm create @nocobase-sample/plugin-initializer-action-simple
yarn pm enable @nocobase-sample/plugin-initializer-action-simple
```

然后启动项目即可：

```bash
yarn dev
```

然后登录后访问 [http://localhost:13000/admin/pm/list/local/](http://localhost:13000/admin/pm/list/local/) 就可以看到插件已经安装并启用了。

## 功能实现

在实现本示例之前，我们需要先了解一些基础知识：

- [Action 组件](https://client.docs.nocobase.com/components/action)
- [SchemaInitializer 教程](/development/client/ui-schema/initializer)：用于向界面内添加各种区块、字段、操作等
- [SchemaInitializer API](https://client.docs.nocobase.com/core/ui-schema/schema-initializer)：用于向界面内添加各种区块、字段、操作等
- [UI Schema](/development/client/ui-schema/what-is-ui-schema)：用于定义界面的结构和样式
- [Designable 设计器](/development/client/ui-schema/designable)：用于修改 Schema


```bash
.
├── client # 客户端插件
│   ├── initializer # 初始化器
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

我们首先需要定义操作名称，它将会使用在各个地方。

我们新建 `packages/plugins/@nocobase-sample/plugin-initializer-action-simple/src/client/constants.ts`：

```ts
export const ActionName = 'Document';
export const ActionNameLowercase = ActionName.toLowerCase();
```

### 2. 多语言

#### 2.1 定义工具函数

如果插件需要支持多语言，我们需要定义多语言工具函数。

我们新建 `packages/plugins/@nocobase-sample/plugin-initializer-action-simple/src/client/locale.ts` 文件：

```ts
// @ts-ignore
import pkg from './../../package.json';
import { useApp } from '@nocobase/client';

export function useT() {
  const app = useApp();
  return (str: string) => app.i18n.t(str, { ns: pkg.name });
}

export function tStr(key: string) {
  return `{{t('${key}', { ns: '${pkg.name}', nsMode: 'fallback' })}}`;
}

```

- `useT()`：获取插件的多语言工具函数，需要将插件的名字作为命名空间
- `tStr()`：用于生成插件的多语言字符串模板

#### 2.2 多语言文件

:::warning
多语言文件变更后，需要重启服务才能生效
:::

##### 2.2.1 英语

我们新建 `packages/plugins/@nocobase-sample/plugin-initializer-action-simple/src/locale/en-US.json` 内容为：

```json
{
  "Document": "Document"
}
```

##### 2.2.2 中文

我们新建 `packages/plugins/@nocobase-sample/plugin-initializer-action-simple/src/locale/zh-CN.json` 内容为：

```json
{
  "Document": "文档"
}
```

如果需要更多的多语言支持，可以继续添加。

### 3. 定义 Schema

#### 3.1 定义 Schema

NocoBase 的动态页面都是通过 Schema 来渲染，所以我们需要定义一个 Schema，后续用于在界面中添加。在实现本小节之前，我们需要先了解一些基础知识：

- [Action 组件](https://client.docs.nocobase.com/components/action)
- [UI Schema 协议](/development/client/ui-schema/what-is-ui-schema)：详细介绍 Schema 的结构和每个属性的作用

我们新增 `packages/plugins/@nocobase-sample/plugin-initializer-action-simple/src/client/schema/index.ts` 文件，内容为：

```ts
import { useFieldSchema } from '@formily/react';
import { ISchema } from "@nocobase/client"
import { useT } from '../locale';
import { ActionName } from '../constants';

export function useDocumentActionProps() {
  const fieldSchema = useFieldSchema();
  const t = useT();
  return {
    title: t(ActionName),
    type: 'primary',
    onClick() {
      window.open(fieldSchema['x-doc-url'])
    }
  }
}

export const createDocumentActionSchema = (blockComponent: string): ISchema & { 'x-doc-url': string } => {
  return {
    type: 'void',
    'x-component': 'Action',
    'x-doc-url': `https://client.docs.nocobase.com/components/${blockComponent}`,
    'x-use-component-props': 'useDocumentActionProps',
  }
}
```

`createDocumentActionSchema` 组件接收一个 `blockComponent` 参数，返回一个 Schema，这个 Schema 用于在界面中添加一个按钮，点击后打开对应区块的文档。

`createDocumentActionSchema`：
- `type`：类型，这里是 `void`，表示纯 UI 组件
- `x-component: 'Action'`：[Action 组件](https://client.docs.nocobase.com/components/action) 用于生成一个按钮
- `title: 'Document'`：按钮的标题
- `x-doc-url`：自定义的 Schema 属性，代表文档地址
- `x-use-component-props: 'useDocumentActionProps'`：动态属性，更多请参考 [文档](/development/client/ui-schema/what-is-ui-schema#x-component-props-和-x-use-component-props)

`useDocumentActionProps()`：
- [useFieldSchema()](https://client.docs.nocobase.com/core/ui-schema/designable#usefieldschema)：获取当前节点的 Schema
- `type: 'primary'`：按钮类型
- `onClick`：点击事件，打开对应区块的文档

更多关于 Schema 的说明请查看 [UI Schema](/development/client/ui-schema/what-is-ui-schema) 文档。

#### 3.2 注册 scope

我们需要将 `useDocumentActionProps` 注册到系统中，这样 `x-use-component-props` 才能找到对应的 scope。

```ts
import { useDocumentActionProps } from './schema';
import { Plugin } from '@nocobase/client';

export class PluginInitializerActionSimpleClient extends Plugin {
  async load() {
    this.app.addScopes({ useDocumentActionProps });
  }
}

export default PluginInitializerActionSimpleClient;
```

#### 3.3 验证区块 Schema

验证 Schema 方式有 2 种：

- 临时页面验证：我们可以临时建一个页面，然后渲染 Schema，查看是否符合需求
- 文档示例验证：可以启动文档 `yarn doc plugins/@nocobase-sample/plugin-initializer-action-modal`，通过写文档示例的方式验证是否符合需求（TODO）

我们以 `临时页面验证` 为例，我们新建一个页面，根据属性参数添加一个或者多个示例，查看是否符合需求。

```tsx | pure
import { Plugin, SchemaComponent } from '@nocobase/client';
import { createDocumentActionSchema, useDocumentActionProps } from './schema';
import React from 'react';

export class PluginInitializerActionSimpleClient extends Plugin {
  async load() {
    this.app.addScopes({ useDocumentActionProps });
    this.app.router.add('admin.document-action-schema', {
      path: '/admin/document-action-schema',
      Component: () => {
        return <>
          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <SchemaComponent schema={{ properties: { test1: createDocumentActionSchema('table-v2') } }} />
          </div>
          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <SchemaComponent schema={{ properties: { test2: createDocumentActionSchema('details') } }} />
          </div>
        </>
      }
    })
  }
}

export default PluginInitializerActionSimpleClient;
```

然后我们访问 [http://localhost:13000/admin/document-action-schema](http://localhost:13000/admin/document-action-schema) 就可以看到我们添加的临时页面了。

关于 `SchemaComponent` 的详细说明可以查看 [SchemaComponent](https://client.docs.nocobase.com/core/ui-schema/schema-component#schemacomponent-1) 文档。

<video controls width='100%' src="https://static-docs.nocobase.com/20240526171318_rec_.mp4"></video>

验证完毕后需要删除测试页面。

### 4. 定义 Schema Initializer Item

我们新增 `packages/plugins/@nocobase-sample/plugin-initializer-action-simple/src/client/initializer/index.ts` 文件：

```tsx | pure
import { SchemaInitializerItemType, useSchemaInitializer } from "@nocobase/client"

import { createDocumentActionSchema } from '../schema';
import { ActionNameLowercase, ActionName } from "../constants";
import { useT } from "../locale";

export const createDocumentActionInitializerItem = (blockComponent: string): SchemaInitializerItemType => ({
  type: 'item',
  name: ActionNameLowercase,
  useComponentProps() {
    const { insert } = useSchemaInitializer();
    const t = useT();
    return {
      title: t(ActionName),
      onClick: () => {
        insert(createDocumentActionSchema(blockComponent));
      },
    };
  },
})
```

因为我们需要根据不同的 `blockComponent` 生成不同的 `DocumentAction`，所以我们定义了一个 `createDocumentActionInitializerItem` 函数，用于生成对应的 Schema Initializer Item。

- `type`：类型，这里是 `item`，表示是一个文本，其有点击事件，点击后可以插入一个新的 Schema
- `name`：唯一标识符，用于区分不同的 Schema Item 和增删改查操作
- `useComponentProps`：返回一个对象，包含 `title` 和 `onClick` 两个属性，`title` 是显示的文本，`onClick` 是点击后的回调函数
- [useSchemaInitializer](https://client.docs.nocobase.com/core/ui-schema/schema-initializer#useschemainitializer)：用于获取 `SchemaInitializerContext` 上下文，包含了一些操作方法

更多关于 Schema Item 的定义可以参考 [Schema Initializer Item](https://client.docs.nocobase.com/core/ui-schema/schema-initializer#built-in-components-and-types) 文档。

### 5. 实现 Schema Settings

#### 5.1 定义 Schema Settings

目前我们通过 `createDocumentActionInitializerItem()` 添加后不能删除，我们可以使用 [Schema Settings](https://client.docs.nocobase.com/core/ui-schema/schema-settings) 来设置。

我们新增 `packages/plugins/@nocobase-sample/plugin-initializer-action-simple/src/client/settings/index.ts` 文件：

```ts
import { SchemaSettings } from "@nocobase/client";

import { ActionNameLowercase } from "../constants";

export const documentActionSettings = new SchemaSettings({
  name: `actionSettings:${ActionNameLowercase}`,
  items: [
    {
      name: 'remove',
      type: 'remove',
    }
  ]
});
```

#### 5.2 注册 Schema Settings

```diff
import { Plugin } from '@nocobase/client';
import { useDocumentActionProps } from './schema';
+ import { documentActionSettings } from './settings';

export class PluginInitializerActionSimpleClient extends Plugin {
  async load() {
    this.app.addScopes({ useDocumentActionProps });
+   this.app.schemaSettingsManager.add(documentActionSettings);
  }
}

export default PluginInitializerActionSimpleClient;
```

#### 5.3 使用 Schema Settings

我们修改 `packages/plugins/@nocobase-sample/plugin-initializer-action-simple/src/client/schema/index.ts` 文件中的 `createDocumentActionSchema` 为：

```diff
+ import { documentActionSettings } from '../settings';

export const createDocumentActionSchema = (blockComponent: string): ISchema & { 'x-doc-url': string } => {
  return {
    type: 'void',
    'x-component': 'Action',
+   'x-settings': documentActionSettings.name,
    // ...
  }
}
```

### 6. 添加到页面 Configure actions 中

系统中有很多个 `Configure actions` 按钮，但他们的 **name 是不同的**，我们根据需要将其添加到 `Table`、`Details` 以及 `Form` 区块中的 `Configure actions` 中。

首先我们先找到对应的 name：

TODO

然后我们修改 `packages/plugins/@nocobase-sample/plugin-initializer-action-simple/src/client/index.tsx` 文件：

```diff
import { Plugin } from '@nocobase/client';
import { useDocumentActionProps } from './schema';
import { documentActionSettings } from './settings';
+ import { createDocumentActionInitializerItem } from './initializer';

export class PluginInitializerActionSimpleClient extends Plugin {
  async load() {
    this.app.addScopes({ useDocumentActionProps });
    this.app.schemaSettingsManager.add(documentActionSettings);
+   this.app.schemaInitializerManager.addItem('table:configureActions', 'document', createDocumentActionInitializerItem('table-v2'));
+   this.app.schemaInitializerManager.addItem('details:configureActions', 'document', createDocumentActionInitializerItem('details'));
+   this.app.schemaInitializerManager.addItem('createForm:configureActions', 'document', createDocumentActionInitializerItem('form-v2'));
  }
}

export default PluginInitializerActionSimpleClient;
```

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/20240522-185359.mp4" type="video/mp4" />
</video>

## 打包和上传到生产环境

按照 [构建并打包插件](/development/your-fisrt-plugin#构建并打包插件) 文档说明，我们可以打包插件并上传到生产环境。

如果是 clone 的源码，需要先执行一次全量 build，将插件的依赖也构建好。

```bash
yarn build
```

如果是使用的 `create-nocobase-app` 创建的项目，可以直接执行：

```bash
yarn build @nocobase-sample/plugin-initializer-action-simple --tar
```

这样就可以看到 `storage/tar/@nocobase-sample/plugin-initializer-action-simple.tar.gz` 文件了，然后通过[上传的方式](/welcome/getting-started/plugin)进行安装。

