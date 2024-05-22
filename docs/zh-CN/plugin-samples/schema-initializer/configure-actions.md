# 实现配置操作 Initializer

## 场景说明

如果新创建的区块是一个复杂的数据区块，那么它内部可能包含多个动态添加的部分，其中 `Configure actions` 对应的 initializer 主要是负责动态添加一些按钮实现各种操作。例如 `Form` 区块，我们可以通过 `Configure actions` 添加 `Submit`、`Custom Request` 按钮。

TODO：截图

## 示例说明

本实例会在 [添加数据区块 Data Block](/plugin-samples/schema-initializer/data-block) 基础上继续实现类似 `Form` 区块的效果，通过 `Configure actions` 来配置按钮。

本文档完整的示例代码可以在 [plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-initializer-configure-actions) 中查看。

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
yarn pm create @nocobase-sample/plugin-initializer-configure-actions
yarn pm enable @nocobase-sample/plugin-initializer-configure-actions
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

### 1. Copy 代码并修改插件名称

前面已经说明本示例会在 [添加数据区块 Data Block](/plugin-samples/schema-initializer/data-block) 基础上继续实现，所以我们可以直接复制以下 2 个文件：

- `packages/plugins/@nocobase-sample/plugin-initializer-data-block/src/client/InfoBlock.tsx`
- `packages/plugins/@nocobase-sample/plugin-initializer-data-block/src/client/index.tsx`

到 `packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client` 目录，并修改 `packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/index.tsx` 为：

```diff
import { Plugin } from '@nocobase/client';
import { InfoBlock, infoBlockSettings, infoInitializerItem } from './InfoBlock';

- export class PluginInitializerDataBlockClient extends Plugin {
+ export class PluginInitializerConfigureActionsClient extends Plugin {
  async load() {
    // ...
  }
}

- export default PluginInitializerDataBlockClient;
+ export default PluginInitializerConfigureActionsClient;
```

### 2. 创建 `Configure actions` 对应的 initializer

我们新建 `packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/configureActions.tsx` 文件：

```tsx | pure
import { Grid, SchemaInitializer, useSchemaInitializer } from "@nocobase/client";

export const configureActions = new SchemaInitializer({
  name: 'info:configureActions',
  icon: 'SettingOutlined',
  title: 'Configure actions',
  style: {
    marginLeft: 8,
  },
  items: [

  ]
});
```

- [SchemaInitializer](https://client.docs.nocobase.com/core/ui-schema/schema-initializer)：用于创建一个 Schema Initializer 实例
- `icon`：图标，更多图标可参考 Ant Design [Icons](https://ant.design/components/icon/)
- `title`：按钮标题
- [items](https://client.docs.nocobase.com/core/ui-schema/schema-initializer#built-in-components-and-types)：按钮下的子项


### 3. 注册 `Configure actions` initializer

然后修改 `packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/index.tsx` 文件，导入并注册这个 initializer：

```tsx | pure
import { configureActions } from './configureActions'

export class PluginInitializerConfigureActionsClient extends Plugin {
  async load() {
    this.app.schemaInitializerManager.add(configureActions)
  }
}
```

### 4. 修改 `getInfoBlockSchema()` 区块

我们修改 `packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/InfoBlock.tsx` 文件，将 `getInfoBlockSchema()` 区块修改为：

```diff
function getInfoBlockSchema({ dataSource, collection }) {
  return {
    // ...
    properties: {
      info: {
        type: 'void',
        'x-component': 'InfoBlock',
+       properties: {
+         actions: {
+           type: 'void',
+           'x-component': 'ActionBar',
+           'x-initializer': 'info:configureActions',
+           'x-component-props': {
+             layout: 'one-column'
+           }
+         }
+       }
      }
    }
  }
}
```

我们在 `InfoBlock` 的子节点中添加了一个 `actions` 字段：

- `type: 'void'`：类型为 `void`，表示这是一个容器
- `x-component: 'ActionBar'`：使用 [ActionBar](https://client.docs.nocobase.com/components/action#actionbar) 组件，用于展示按钮
- `x-initializer: 'createForm:configureActions'`：使用 `configureActions` 这个 Schema Initializer
- `x-component-props.layout: 'one-column'`：布局为一列，具体示例可参考 [ActionBar one-column](https://client.docs.nocobase.com/components/action#one-column)

### 5. 修改 `InfoBlock` 组件

我们修改 `packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/InfoBlock.tsx` 文件，将 `InfoBlock` 组件修改为：

```tsx | pure
export const InfoBlock = ({ children }) => {
  const { data } = useDataBlockRequest<any[]>();
  return <div>
    {children}
    <div>data length: {data?.data?.length}</div>
  </div>
}
```

- `children`： `properties` 的内容会被传入到 `InfoBlock` 组件的 `children` 中，所以我们直接将 `children` 渲染出来即可。
- [useDataBlockRequest()](https://client.docs.nocobase.com/core/data-block/data-block-request-provider)：数据区块的请求对象，由 `DataBlockProvider` 内部提供，用于自动获取数据区块的数据。

TODO：效果演示

### 6. 实现 `Custom request` Action

我们继续修改 `packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/configureActions.tsx` 文件：

```diff
export const configureActions = new SchemaInitializer({
  name: 'info:configureActions',
  title: 'Configure actions',
  icon: 'SettingOutlined',
  items: [
+   {
+     name: 'customRequest',
+     title: '{{t("Custom request")}}',
+     Component: 'CustomRequestInitializer',
+   },
  ]
});
```

因为 `Custom request` 我们这里直接复用了 `CustomRequestInitializer` 组件，更多可复用的 Initializer Item 可参考 *TODO*。

TODO：效果演示

### 7. 实现自定义 Action

除了复用已有的 Initializer Item，我们也可以自定义 Action，这里我们实现一个 `Custom Refresh` Action。

我们继续修改 `packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/configureActions.tsx` 文件：

```tsx | pure
import { ISchema, SchemaInitializer, useDataBlockRequest, useSchemaInitializer } from "@nocobase/client";

export const configureActions = new SchemaInitializer({
  // ...
  items: [
    // ...
    {
      type: 'item',
      name: 'custom refresh',
      title: 'Custom Refresh',
      useComponentProps() {
        const { insert } = useSchemaInitializer();
        return {
          onClick() {
            insert(refreshActionSchema)
          },
        };
      },
    },
  ]
});
```

这是一个标准的 Schema Initializer Item 定义：

- `type: 'item'`：类型为 `item`，表示文本，当点击后会触发 `onClick` 事件
- `name: 'custom refresh'`：唯一标识符，用于区分不同的 Schema Item 和增删改查操作
- `title: 'Custom Refresh'`：按钮标题

更多关于 Schema Item 的定义可以参考 [Schema Initializer Item](https://client.docs.nocobase.com/core/ui-schema/schema-initializer#built-in-components-and-types) 文档。

```tsx | pure
import { ISchema, ActionProps, SchemaInitializer, SchemaSettings, useDataBlockRequest, useSchemaInitializer } from "@nocobase/client";

export const customRequestActionSettings = new SchemaSettings({
  name: 'actionSettings:customRefresh',
  items: [
    {
      name: 'remove',
      type: 'remove',
    }
  ]
})

export const useCustomRequestActionProps = (): ActionProps => {
  const { runAsync } = useDataBlockRequest();
  return {
    type: 'primary',
    async onClick() {
      await runAsync();
    },
  }
}

const refreshActionSchema: ISchema = {
  type: 'void',
  'x-component': 'Action',
  "x-settings": customRequestActionSettings.name,
  title: 'Custom Refresh',
  'x-use-component-props': 'useCustomRequestActionProps'
}
```

`refreshActionSchema`：
  - `type: 'void'`：类型为 `void`，表示普通 UI，不包含数据
  - `x-component: 'Action'`：使用 [Action](https://client.docs.nocobase.com/components/action) 组件，用于展示按钮
  - `x-settings: customRequestActionSettings.name`：使用 `customRequestActionSettings` 这个 Schema Settings
  - `title: 'Custom Refresh'`：按钮标题
  - `x-use-component-props: 'useCustomRequestActionProps'`：使用 `useCustomRequestActionProps` 这个 Hooks 返回的属性。这个 Schema 会保存到服务器，所以这里需要使用字符串的方式。

`customRequestActionSettings`：这里只简单定义了一个 `remove` 操作，更多关于 Schema Settings 的定义可以参考 [Schema Settings](https://client.docs.nocobase.com/core/ui-schema/schema-settings) 文档。

`useCustomRequestActionProps`：这个是 React Hooks，需要返回 Action 组件的属性。
  - [useDataBlockRequest()](https://client.docs.nocobase.com/core/data-block/data-block-request-provider)：数据区块的请求对象，由 `DataBlockProvider` 内部提供，用于自动获取数据区块的数据
    - `runAsync`：一个异步请求方法，用于刷新数据区块的数据
  - `type: 'primary'`：按钮类型为 `primary`
  - `onClick`：点击事件。

然后将 `customRequestActionSettings` 注册到系统中。我们修改 `packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/index.tsx` 文件：

```ts
import { configureActions, customRequestActionSettings } from './configureActions';
export class PluginInitializerConfigureActionsClient extends Plugin {
  async load() {
    this.app.schemaSettingsManager.add(infoBlockSettings, customRequestActionSettings);
  }
}
```

我们还需要将 `useCustomRequestActionProps` 注册到上下文中。我们修改 `packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/InfoBlock.tsx` 文件：

```tsx | pure
import { useCustomRequestActionProps } from './configureActions'
export const InfoBlock = ({ children }) => {
  const { data } = useDataBlockRequest<any[]>();
  return <SchemaComponentOptions scope={{ useCustomRequestActionProps }}>
    <div>
      {children}
      <div>data length: {data?.data?.length}</div>
    </div>
  </SchemaComponentOptions>
}
```

关于 `SchemaComponentOptions` 的使用可以参考 [SchemaComponentOptions](https://client.docs.nocobase.com/core/ui-schema/schema-component#schemacomponentoptions) 文档以及 [局部注册 Component 和 Scope](/plugin-samples/component-and-scope/local)。

TODO：演示

## 打包和上传到生产环境

按照 [构建并打包插件](/development/your-fisrt-plugin#构建并打包插件) 文档说明，我们可以打包插件并上传到生产环境。

如果是 clone 的源码，需要先执行一次全量 build，将插件的依赖也构建好。

```bash
yarn build
```

如果是使用的 `create-nocobase-app` 创建的项目，可以直接执行：

```bash
yarn build @nocobase-sample/plugin-initializer-configure-actions --tar
```

这样就可以看到 `storage/tar/@nocobase-sample/plugin-initializer-configure-actions.tar.gz` 文件了，然后通过[上传的方式](/welcome/getting-started/plugin)进行安装。

