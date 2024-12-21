# 区块内嵌的 Initializer - 配置操作

## 场景说明

如果新创建的区块是一个复杂的数据区块，那么它内部可能包含多个动态添加的部分，其中 `Configure actions` 对应的 initializer 主要是负责动态添加一些按钮实现各种操作。例如 `Details` 区块，我们可以通过 `Configure actions` 添加 `Edit`、`Print` 等按钮。

![img_v3_02b4_9b80a4a0-6d9b-4e53-a544-f92c17d81d2g](https://static-docs.nocobase.com/img_v3_02b4_9b80a4a0-6d9b-4e53-a544-f92c17d81d2g.jpg)

## 示例说明

本实例会在 [添加数据区块 Data Block](/plugin-samples/schema-initializer/data-block) 基础上继续实现类似 `Details` 区块的效果，通过 `Configure actions` 来配置按钮。

本文档完整的示例代码可以在 [plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-initializer-configure-actions) 中查看。

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/20240522-191602.mp4" type="video/mp4" />
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

### 1. 创建区块

前面已经说明本示例会在 [添加数据区块 Data Block](/plugin-samples/schema-initializer/data-block) 基础上继续实现，所以我们可以复制 `packages/plugins/@nocobase-sample/plugin-initializer-block-data/src/client` 目录覆盖 `packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client`。

然后修改 `packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/index.tsx`：

```diff
import { Plugin } from '@nocobase/client';
- import { Info } from './component';
+ import { InfoV2 } from './component';

- export class PluginInitializerBlockDataClient extends Plugin {
+ export class PluginInitializerConfigureActionsClient extends Plugin {
  async load() {
-   this.app.addComponents({ Info })
+   this.app.addComponents({ InfoV2 })
    // ...
  }
}

- export default PluginInitializerBlockDataClient;
+ export default PluginInitializerConfigureActionsClient;
```

然后修改 `packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/constants.ts`：

```ts
export const BlockName = 'InfoV2';
export const BlockNameLowercase = 'info-v2';
```

### 2. 实现 initializer

#### 2.1 定义 initializer

我们新建 `packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/initializer/configureActions/configureActionsInitializer.ts` 文件：

```tsx | pure
import { SchemaInitializer } from "@nocobase/client";
import { BlockNameLowercase } from "../../constants";

export const configureActionsInitializer = new SchemaInitializer({
  name: `${BlockNameLowercase}:configureActions`,
  icon: 'SettingOutlined',
  title: 'Configure actions',
  style: {
    marginLeft: 8,
  },
  items: [

  ]
});
```

我们通过上述代码定义了一个新的 `SchemaInitializer`，其子项暂时为空。

- [SchemaInitializer](https://client.docs.nocobase.com/core/ui-schema/schema-initializer)：用于创建一个 Schema Initializer 实例
- `icon`：图标，更多图标可参考 Ant Design [Icons](https://ant.design/components/icon/)
- `title`：按钮标题
- [items](https://client.docs.nocobase.com/core/ui-schema/schema-initializer#built-in-components-and-types)：按钮下的子项

然后将其在 `packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/initializer/configureActions/index.ts` 中导出：

```tsx | pure
export * from './configureActionsInitializer';
```

并且修改 `packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/initializer/index.tsx` 将 `configureActions` 导出：

```diff
import React from 'react';
import { SchemaInitializerItemType, useSchemaInitializer } from '@nocobase/client'
import { CodeOutlined } from '@ant-design/icons';

+ export * from './configureActions'
// ...
```

#### 2.2 注册 initializer

然后修改 `packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/index.tsx` 文件，导入并注册这个 initializer：

```tsx | pure
// ...
import { infoInitializerItem, configureActionsInitializer } from './initializer';

export class PluginInitializerConfigureActionsClient extends Plugin {
  async load() {
    this.app.schemaInitializerManager.add(configureActionsInitializer)

    // ...
  }
}
```

#### 2.3 使用 initializer

我们修改 `packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/schema/index.ts` 文件，新增 `actions` 子节点：

```diff
// ...
+ import { configureActionsInitializer } from "../initializer";

function getInfoBlockSchema({ dataSource, collection }) {
  return {
    // ...
    properties: {
      info: {
        'x-component': BlockName,
        'x-use-component-props': 'useInfoProps',
+       properties: {
+         actions: {
+           type: 'void',
+           'x-component': 'ActionBar',
+           'x-component-props': {
+             layout: 'two-column',
+             style: { marginBottom: 20 }
+           },
+           'x-initializer': configureActionsInitializer.name,
+         }
+       }
      }
    }
  }
}
```

`configure actions` 一般与 [ActionBar](https://client.docs.nocobase.com/components/action#actionbar) 组件搭配使用。


我们在 `Info` 的子节点中添加了一个 `actions` 字段：

- `type: 'void'`：类型为 `void`，表示这是一个容器
- `x-component: 'ActionBar'`：使用 [ActionBar](https://client.docs.nocobase.com/components/action#actionbar) 组件，用于展示按钮
- `x-initializer: configureActionsInitializer.name`：使用我们刚创建的 Schema Initializer
- `x-component-props.layout: 'two-column'`：左右布局，具体示例可参考 [ActionBar two-column](https://client.docs.nocobase.com/components/action#two-column)

#### 2.4 区块渲染子节点

我们修改 `packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/component/Info.tsx` 文件，将 `Info` 组件修改为：

```diff
import React, { FC } from 'react';
import { withDynamicSchemaProps } from '@nocobase/client'

export interface InfoV2Props {
  collectionName: string;
  data?: any[];
  loading?: boolean;
+ children?: React.ReactNode;
}

export const InfoV2: FC<InfoV2Props> = withDynamicSchemaProps(({ children, collectionName, data }) => {
  return <div>
+   {children}
-   <div>collection: {collectionName}</div>
-   <div>data list: <pre>{JSON.stringify(data, null, 2)}</pre></div>
+   <div>data length: {data?.length}</div>
  </div>
}, { displayName: BlockName })
```

- `children`： `properties` 的内容会被传入到 `InfoV2` 组件的 `children` 中，所以我们直接将 `children` 渲染出来即可。

![img_v3_02b4_4c6cb675-789e-48d5-99ce-072984dcfc9g](https://static-docs.nocobase.com/img_v3_02b4_4c6cb675-789e-48d5-99ce-072984dcfc9g.jpg)

### 3. 实现 initializer items

#### 3.1 复用：`Custom request` Action

我们继续修改 `packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/initializer/configureActions/configureActionsInitializer.ts` 文件：

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

![img_v3_02b4_0d439087-cfe1-4681-bfab-4e4bc3e34cbg](https://static-docs.nocobase.com/img_v3_02b4_0d439087-cfe1-4681-bfab-4e4bc3e34cbg.jpg)

#### 3.2 自定义：`Custom Refresh` Action

除了复用已有的 Initializer Item，我们也可以自定义 Action。关于自定义 Action 的详细步骤可以参考 [添加简单 Action](/plugin-samples/schema-initializer/action-simple) 和 [添加弹窗 Action](/plugin-samples/schema-initializer/action-modal)。

这里我们实现一个 `Custom Refresh` Action。

#### 3.2.1 定义名称

我们新建 `packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/initializer/configureActions/items/customRefresh/constants.ts`：

```ts
export const ActionName = 'Custom Request';
export const ActionNameLowercase = 'customRequest';
```

#### 3.2.2 定义 Schema

##### 3.2.2.1 定义 Schema

我们新建 `packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/initializer/configureActions/items/customRefresh/schema.ts` 文件：

```ts
import { ActionProps, useDataBlockRequest, ISchema } from "@nocobase/client";
import { useT } from "../../../../locale";

export const useCustomRefreshActionProps = (): ActionProps => {
  const { runAsync } = useDataBlockRequest();
  const t = useT();
  return {
    type: 'primary',
    title: t('Custom Refresh'),
    async onClick() {
      await runAsync();
    },
  }
}

export const customRefreshActionSchema: ISchema = {
  type: 'void',
  'x-component': 'Action',
  'x-toolbar': 'ActionSchemaToolbar',
  'x-use-component-props': 'useCustomRefreshActionProps'
}
```

我们定义了 `customRefreshActionSchema` 以及动态属性 `useCustomRefreshActionProps`。

`customRefreshActionSchema`：
  - `type: 'void'`：类型为 `void`，表示普通 UI，不包含数据
  - `x-component: 'Action'`：使用 [Action](https://client.docs.nocobase.com/components/action) 组件，用于展示按钮
  - `title: 'Custom Refresh'`：按钮标题
  - `x-use-component-props: 'useCustomRefreshActionProps'`：使用 `useCustomRefreshActionProps` 这个 Hooks 返回的属性。因为 Schema 会保存到服务器，所以这里需要使用字符串的方式。
  - `'x-toolbar': 'ActionSchemaToolbar'`：一般于 `Action` 组件搭配使用，与默认的 ToolBar 不同的是，其将 Action 右上角的 `Initializer` 隐藏，仅保留 Drag 和 Settings。

`useCustomRefreshActionProps`：这个是 React Hooks，需要返回 Action 组件的属性。
  - [useDataBlockRequest()](https://client.docs.nocobase.com/core/data-block/data-block-request-provider)：数据区块的请求对象，由 `DataBlockProvider` 内部提供，用于自动获取数据区块的数据
    - `runAsync`：一个异步请求方法，用于刷新数据区块的数据
  - `type: 'primary'`：按钮类型为 `primary`
  - `onClick`：点击事件。

然后将其在 `packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/initializer/configureActions/items/customRefresh/index.ts` 中导出：

```ts
export * from './initializer';
```

并修改 `packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/initializer/configureActions/index.ts` 将 `customRefresh` 导出：

```diff
export * from './configureActionsInitializer';
+ export * from './items/customRefresh';
```

##### 3.2.2.2 注册上下文

我们还需要将 `useCustomRefreshActionProps` 注册到上下文中。我们修改 `packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/index.tsx` 文件：

```diff
// ...
- import { infoInitializerItem } from './initializer';
+ import { infoInitializerItem, useCustomRefreshActionProps } from './initializer';

export class PluginInitializerConfigureActionsClient extends Plugin {
  async load() {
    // ...
-   this.app.addScopes({ useInfoProps });
+   this.app.addScopes({ useInfoProps, useCustomRefreshActionProps });
  }
}
```

关于 `SchemaComponentOptions` 的使用可以参考 [SchemaComponentOptions](https://client.docs.nocobase.com/core/ui-schema/schema-component#schemacomponentoptions) 文档以及 [全局注册 Component 和 Scope](/plugin-samples/component-and-scope/global)。

#### 3.3.2 实现 settings

##### 3.3.2.1 定义 settings

我们新建 `packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/initializer/configureActions/items/customRefresh/settings.ts`

```tsx | pure
import { SchemaSettings } from "@nocobase/client";
import { ActionNameLowercase } from "./constants";

export const customRefreshActionSettings = new SchemaSettings({
  name: `actionSettings:${ActionNameLowercase}`,
  items: [
    {
      name: 'remove',
      type: 'remove',
    }
  ]
})
```

`customRefreshActionSettings`：这里只简单定义了一个 `remove` 操作，更多关于 Schema Settings 的定义可以参考 [Schema Settings](https://client.docs.nocobase.com/core/ui-schema/schema-settings) 文档。


修改 `packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/initializer/configureActions/items/customRefresh/index.ts` 将其导出：

```tsx | pure
export * from './settings';
```

##### 3.3.2.2 注册 settings

然后将 `customRefreshActionSettings` 注册到系统中。我们修改 `packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/index.tsx` 文件：

```diff
- import { infoInitializerItem, useCustomRefreshActionProps } from './initializer';
+ import { infoInitializerItem, useCustomRefreshActionProps, customRefreshActionSettings } from './initializer';

export class PluginInitializerConfigureActionsClient extends Plugin {
  async load() {
+   this.app.schemaSettingsManager.add(customRefreshActionSettings);
  }
}
```

##### 3.3.2.2 使用 settings

我们修改 `packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/initializer/configureActions/items/customRefresh/schema.ts` 文件的 `customRefreshActionSchema` 方法，将 `x-settings` 设置为 `customRefreshActionSettings.name`。

```diff
+ import { customRefreshActionSettings } from "./settings";

export const customRefreshActionSchema: ISchema = {
  type: 'void',
  'x-component': 'Action',
+ "x-settings": customRefreshActionSettings.name,
  title: 'Custom Refresh',
  'x-use-component-props': 'useCustomRefreshActionProps'
}
```

##### 3.3.3 定义 SchemaInitializer item

###### 3.3.3.1 定义 SchemaInitializer item

我们继续修改 `packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/initializer/configureActions/items/customRefresh/initializer.ts` 文件：

```tsx | pure
import { SchemaInitializerItemType, useSchemaInitializer } from "@nocobase/client";
import { customRefreshActionSchema } from "./schema";
import { ActionName } from "./constants";
import { useT } from "../../../../locale";

export const customRefreshActionInitializerItem: SchemaInitializerItemType = {
  type: 'item',
  name: ActionName,
  useComponentProps() {
    const { insert } = useSchemaInitializer();
    const t = useT();
    return {
      title: t(ActionName),
      onClick() {
        insert(customRefreshActionSchema)
      },
    };
  },
};
```

- `type: 'item'`：类型为 `item`，表示文本，当点击后会触发 `onClick` 事件
- `name: 'custom refresh'`：唯一标识符，用于区分不同的 Schema Item 和增删改查操作
- `title: 'Custom Refresh'`：按钮标题

更多关于 Schema Item 的定义可以参考 [Schema Initializer Item](https://client.docs.nocobase.com/core/ui-schema/schema-initializer#built-in-components-and-types) 文档。


然后修改 `packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/initializer/configureActions/index.ts` 将其导出：

```tsx | pure
export * from './initializer';
```

###### 3.3.3.2 使用 SchemaInitializer item

我们修改 `packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/initializer/configureActions/configureActionsInitializer.ts` 文件，将 `customRefreshActionInitializerItem` 添加到 `items` 中：

```diff
import { SchemaInitializer } from "@nocobase/client";
+ import { customRefreshActionInitializerItem } from "./items/customRefresh";

export const configureActionsInitializer = new SchemaInitializer({
  name: 'info:configureActions',
  title: 'Configure actions',
  icon: 'SettingOutlined',
  style: {
    marginLeft: 8,
  },
  items: [
    {
      name: 'customRequest',
      title: '{{t("Custom request")}}',
      Component: 'CustomRequestInitializer',
      'x-align': 'right',
    },
+   customRefreshActionInitializerItem
  ]
});
```

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/20240522-191602.mp4" type="video/mp4" />
</video>

你可以根据需要实现更多的 `Action`。

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

