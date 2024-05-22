# 向已有的 Configure actions 里添加新子项

## 场景说明

NocoBase 中除了有许多 `Add block` 按钮用于向界面添加区块，还有很多 `Configure actions` 用于向界面添加操作按钮。

![img_v3_02b4_51f4918f-d344-43b2-b19e-48dca709467g](https://static-docs.nocobase.com/img_v3_02b4_51f4918f-d344-43b2-b19e-48dca709467g.jpg)

如果目前已有的操作按钮不一定满足我们的需求，我们需要向已有的 `Configure actions` 里添加子项用于创建新的操作按钮。

## 示例说明

本实例会创建一个按钮，点击后后打开对应区块的文档，并将这个按钮添加到 `Table`、`Details` 以及 `Form` 区块中的 `Configure actions` 中。

本文档完整的示例代码可以在 [plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-initializer-action) 中查看。

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
yarn pm create @nocobase-sample/plugin-initializer-action
yarn pm enable @nocobase-sample/plugin-initializer-action
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

### 1. 实现 `DocumentAction` 组件

首先我们新建 `packages/plugins/@nocobase-sample/plugin-initializer-action/src/client/DocumentAction.tsx` 文件，其内容如下：

```tsx | pure
import React, { FC } from 'react';
import { SchemaComponent } from "@nocobase/client"

export const DocumentAction: FC<{ blockComponent: string }> = ({ blockComponent }) => {
  const documentActionSchema = {
    type: 'void',
    name: 'document',
    'x-component': 'Action',
    title: 'Document',
    'x-component-props': {
      type: 'primary',
      onClick() {
        window.open(`https://client.docs.nocobase.com/components/${blockComponent}`)
      }
    }
  }
  return <SchemaComponent schema={documentActionSchema} />
}

```

`DocumentAction` 组件接收一个 `blockComponent` 参数，然后根据这个参数生成一个 `Action` 按钮，点击后打开对应的文档。

这里采用了 [SchemaComponent](https://client.docs.nocobase.com/core/ui-schema/schema-component) 组件，用于渲染 [Schema](https://client.docs.nocobase.com/core/ui-schema/what-is-ui-schema)。

### 2. 定义 Schema Initializer Item

我们继续修改 `packages/plugins/@nocobase-sample/plugin-initializer-action/src/client/DocumentAction.tsx` 文件，添加 `DocumentAction` 的 Schema Initializer Item：

```ts | pure
import { ISchema, SchemaInitializerItemType, useSchemaInitializer } from "@nocobase/client"

export const createDocumentActionInitializerItem = (blockComponent: string): SchemaInitializerItemType => ({
  type: 'item',
  title: 'Document',
  name: 'document',
  useComponentProps() {
    const { insert } = useSchemaInitializer();
    return {
      title: 'Document',
      onClick: () => {
        const documentActionSchema: ISchema = {
          type: 'void',
          'x-component': 'DocumentAction',
          'x-component-props': {
            blockComponent: blockComponent
          }
        };

        insert(documentActionSchema);
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

关于 `documentActionSchema` 的定义：

- `type`：类型，这里是 `void`，表示没有任何数据
- `x-decorator`：装饰器，这里是 [CardItem](https://client.docs.nocobase.com/components/card-item)，表示是一个卡片
- `x-component`：组件，这里是 `DocumentAction`，就是我们上面定义的新的区块类型

更多关于 Schema 的说明请查看 [UI Schema](/development/client/ui-schema/what-is-ui-schema) 文档。

### 3. 添加到页面 Configure actions 中

系统中有很多个 `Configure actions` 按钮，但他们的 **name 是不同的**，我们根据需要将其添加到 `Table`、`Details` 以及 `Form` 区块中的 `Configure actions` 中。

首先我们先找到对应的 name：

TODO

然后我们修改 `packages/plugins/@nocobase-sample/plugin-initializer-action/src/client/index.tsx` 文件：

```tsx | pure
import { Plugin } from '@nocobase/client';
import { DocumentAction, createDocumentActionInitializerItem } from './DocumentAction'

export class PluginAddInitializerItemToBlockClient extends Plugin {
  async load() {
    this.app.addComponents({ DocumentAction })
    this.app.schemaInitializerManager.addItem('table:configureActions', 'document', createDocumentActionInitializerItem('table-v2'));
    this.app.schemaInitializerManager.addItem('details:configureActions', 'document', createDocumentActionInitializerItem('details'));
    this.app.schemaInitializerManager.addItem('createForm:configureActions', 'document', createDocumentActionInitializerItem('form-v2'));
  }
}

export default PluginAddInitializerItemToBlockClient;
```

上述代码首先将 `DocumentAction` 组件注册到系统中，这样前面 `documentActionSchema` 定义的 `x-component: 'DocumentAction'` 才能找到对应的组件，更多详细解释可以查看 [全局注册 Component 和 Scope](/plugin-samples/component-and-scope/global)。

然后使用 [app.schemaInitializerManager.addItem](https://client.docs.nocobase.com/core/ui-schema/schema-initializer-manager#schemainitializermanageradditem) 将 `createDocumentActionInitializerItem()` 得到的 schema 添加到子项中。

然后我们 hover `Configure actions` 按钮，就可以看到 `Document` 这个新的按钮了，然后点击 `Document`，就可以添加一个新的 `DocumentAction` 按钮了。

![img_v3_02b4_77a66cd7-64c7-467d-b44c-6f246b49dfcg](https://static-docs.nocobase.com/img_v3_02b4_77a66cd7-64c7-467d-b44c-6f246b49dfcg.jpg)

### 4. 添加 Schema Settings

目前我们的 `DocumentAction` 添加后不能删除，我们可以使用 [Schema Settings](https://client.docs.nocobase.com/core/ui-schema/schema-settings) 来设置。

我们继续修改 `packages/plugins/@nocobase-sample/plugin-initializer-action/src/client/DocumentAction.tsx` 文件：

```tsx | pure
import { SchemaSettings } from "@nocobase/client"

export const documentActionSettings = new SchemaSettings({
  name: 'actionSettings:document',
  items: [
    {
      name: 'remove',
      type: 'remove',
    }
  ]
});
```

Schema Settings 不是本示例的重点，所以我们这里仅有一个 `remove` 操作。

然后修改 `documentActionSchema` 为：

```diff
  const documentActionSchema = {
    type: 'void',
    name: 'document',
    'x-component': 'Action',
+   'x-settings': documentActionSettings.name,
    title: 'Document',
    'x-component-props': {
      type: 'primary',
      onClick() {
        window.open(`https://client.docs.nocobase.com/components/${blockComponent}`)
      }
    }
  }
```

最后我们修改 `packages/plugins/@nocobase-sample/plugin-initializer-action/src/client/index.tsx` 文件，将其注册到系统中：

```tsx | pure
import { Plugin } from '@nocobase/client';
import { documentActionSettings } from './DocumentAction'

export class PluginInitializerActionClient extends Plugin {
  async load() {
    this.app.schemaSettingsManager.add(documentActionSettings)
  }
}
```

然后就可以看到 `Document` 按钮右上角有 Settings 按钮了。

![img_v3_02b4_16f0bb0e-5a7e-448d-bab0-cf19acfacddg](https://static-docs.nocobase.com/img_v3_02b4_16f0bb0e-5a7e-448d-bab0-cf19acfacddg.jpg)

## 打包和上传到生产环境

按照 [构建并打包插件](/development/your-fisrt-plugin#构建并打包插件) 文档说明，我们可以打包插件并上传到生产环境。

如果是 clone 的源码，需要先执行一次全量 build，将插件的依赖也构建好。

```bash
yarn build
```

如果是使用的 `create-nocobase-app` 创建的项目，可以直接执行：

```bash
yarn build @nocobase-sample/plugin-initializer-action --tar
```

这样就可以看到 `storage/tar/@nocobase-sample/plugin-initializer-action.tar.gz` 文件了，然后通过[上传的方式](/welcome/getting-started/plugin)进行安装。

