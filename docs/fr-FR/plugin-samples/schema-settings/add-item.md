# 添加子项到已有的 SchemaSettings

## 场景说明

在实际开发中，我们区块、操作、字段都需要配置一些属性，但是已有的配置不一定满足我们的需求，我们就需要根据需求添加一些新的配置项。

## 示例说明

目前 Table 区块的配置项中没有 `showIndex` 属性，我们需要添加一个 `showIndex` 属性，用于控制是否显示序号。

本实例主要为了演示 SchemaSettings 的使用，更多关于区块扩展可以查看 [区块扩展](/plugin-samples/block) 文档。

本文档完整的示例代码可以在 [plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-schema-settings-add-item) 中查看。

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/20240601161535_rec_.mp4" type="video/mp4" />
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
yarn pm create @nocobase-sample/plugin-schema-settings-add-item
yarn pm enable @nocobase-sample/plugin-schema-settings-add-item
```

然后启动项目即可：

```bash
yarn dev
```

然后登录后访问 [http://localhost:13000/admin/pm/list/local/](http://localhost:13000/admin/pm/list/local/) 就可以看到插件已经安装并启用了。

## 功能实现

在实现本示例之前，我们需要先了解一些基础知识：

- [SchemaSettings 教程](/development/client/ui-schema/settings)：用于配置区块、字段、操作等的属性
- [SchemaSettings API](https://client.docs.nocobase.com/core/ui-schema/schema-settings)：用于配置区块、字段、操作等的属性
- [UI Schema 协议](/development/client/ui-schema/what-is-ui-schema)：详细介绍 Schema 的结构和每个属性的作用
- [Designable 设计器](/development/client/ui-schema/designable)：用于修改 Schema
- [TableV2](https://client.docs.nocobase.com/components/table-v2)：Table 区块的文档

想要实现向已有的区块、字段、操作等添加新的配置项，需要有 3 个前提：

- 组件需要支持新的配置
- 需要正确设置 Schema
- Schema 的属性需要到传递到组件中

以本示例为例，我们需要在 Table 区块中添加 `showIndex` 属性，用于控制是否显示序号。

- 首先需要确认 [TableV2](https://client.docs.nocobase.com/components/table-v2) 区块是否支持 `showIndex` 属性：我们通过 [文档](https://client.docs.nocobase.com/components/table-v2) 可以得知 Table 区块支持 `showIndex` 属性
- 然后需要确认 [Table Block Schema](https://client.docs.nocobase.com/ui-schema/blocks/data/table) 中 `TableV2` 组件的属性存储位置： 我们通过 [文档](https://client.docs.nocobase.com/ui-schema/blocks/data/table) 在 `x-decorator-props` 中
- 最后需要确认 `showIndex` 属性的值是否传递到 `TableV2` 组件中：我们通过 [文档](https://client.docs.nocobase.com/ui-schema/blocks/data/table) 可以得知 `showIndex` 属性是通过 `useTableBlockProps` 传递到 `TableV2` 组件中

### 1. 定义 SchemaSettingsItem

我们新建 `packages/plugins/@nocobase-sample/plugin-schema-settings-add-item/src/client/tableShowIndexSettingsItem.tsx` 文件：

```ts
import { SchemaSettingsItemType, useDesignable } from '@nocobase/client';
import { useFieldSchema } from '@formily/react';

export const tableShowIndexSettingsItem: SchemaSettingsItemType = {
  name: 'showIndex',
  type: 'switch',
  useComponentProps() {
    return {};
  },
};
```

我们定义了一个 `showIndex` 的配置项，类型为 `switch`。

- `name`：配置项的名称，用于增删改查
- `type`：配置项的类型，用于渲染不同的组件，更多类型可以查看 [SchemaSettings API](https://client.docs.nocobase.com/core/ui-schema/schema-settings#built-in-components-and-types)
- `useComponentProps`：用于配置组件的属性

### 2. 修改 Schema

```diff
import { SchemaSettingsItemType, useDesignable } from '@nocobase/client';
import { useFieldSchema } from '@formily/react';

export const tableShowIndexSettingsItem: SchemaSettingsItemType = {
  name: 'showIndex',
  type: 'switch',
  useComponentProps() {
+   const fieldSchema = useFieldSchema();
+   const dn = useDesignable();
+   return {
+     title: 'Show Index',
+     checked: !!fieldSchema['x-decorator-props'].showIndex,
+     onChange(v: boolean) {
+       dn.deepMerge({
+         'x-uid': fieldSchema['x-uid'],
+         'x-decorator-props': {
+           ...fieldSchema['x-decorator-props'],
+           showIndex: v,
+         },
+       });
+     },
+   };
  },
};
```

Hooks：

- [useFieldSchema](https://client.docs.nocobase.com/core/ui-schema/designable#usefieldschema)：用于获取当前字段的 Schema
- [useDesignable](https://client.docs.nocobase.com/core/ui-schema/designable#usedesignable)：用于修改 Schema

Props：

- `title`：Switch 组件的标题
- `checked`：Switch 组件的选中状态，通过 `fieldSchema['x-decorator-props'].showIndex` 获取，具体可以查看 [Table Block Schema](https://client.docs.nocobase.com/ui-schema/blocks/data/table)
- `onChange`：Switch 组件的值改变事件，通过 `dn.deepMerge` 修改 Schema

`dn.deepMerge`：用于修改 Schema

- `x-uid`：字段的唯一标识，用于服务端的查询和修改
- `x-decorator-props`：字段的属性，用于配置组件的属性

### 3. 注册 SchemaSettingsItem

我们修改 `packages/plugins/@nocobase-sample/plugin-schema-settings-add-item/src/client/index.ts` 文件：

```ts
import { Plugin } from '@nocobase/client';
import { tableShowIndexSettingsItem } from './tableShowIndexSettingsItem'

export class PluginSchemaSettingsAddItemClient extends Plugin {
  async load() {
    this.schemaSettingsManager.addItem('blockSettings:table', tableShowIndexSettingsItem.name, tableShowIndexSettingsItem)
  }
}

export default PluginSchemaSettingsAddItemClient;
```

然后我们就可以看到 Table 区块的配置项中多了一个 `Show Index` 的配置项。

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/20240601161535_rec_.mp4" type="video/mp4" />
</video>

## 打包和上传到生产环境

按照 [构建并打包插件](/development/your-fisrt-plugin#构建并打包插件) 文档说明，我们可以打包插件并上传到生产环境。

如果是 clone 的源码，需要先执行一次全量 build，将插件的依赖也构建好。

```bash
yarn build
```

如果是使用的 `create-nocobase-app` 创建的项目，可以直接执行：

```bash
yarn build nocobase-sample/plugin-schema-settings-add-item --tar
```

这样就可以看到 `storage/tar/nocobase-sample/plugin-schema-settings-add-item.tar.gz` 文件了，然后通过[上传的方式](/welcome/getting-started/plugin)进行安装。
