# 创建新的 Schema Initializer

## 场景说明

如果新创建的区块是一个复杂的数据区块，那么它内部可能包含多个动态添加的部分，例如 `Table` 区块中的 `Configure actions` 对应的 initializer 和 `Configure columns` 对应的 initializer。

TODO：截图

我们就需要创建新的 Schema Initializer 实现内部动态添加的功能。

## 示例说明

本实例会创建一个 Demo 区块，内部也会包含两个动态添加的部分，一个是 `Configure actions` 对应的 initializer，另一个是 `Configure fields` 对应的 initializer。

- `Configure fields`：会将对应数据表结构中的字段列出来，并且点击后将字段结构输出为 JSON 字符串
- `Configure actions`：会注册一个 `Add new` 按钮和一个 `Refresh` 按钮，点击 `Add new` 会打开一个空的弹窗，点击 `Refresh` 会重新请求数据

本文档完整的示例代码可以在 [plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-initializer-new) 中查看。

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
yarn pm create @nocobase-sample/plugin-initializer-new
yarn pm enable @nocobase-sample/plugin-initializer-new
```

然后启动项目即可：

```bash
yarn dev
```

然后登录后访问 [http://localhost:13000/admin/pm/list/local/](http://localhost:13000/admin/pm/list/local/) 就可以看到插件已经安装并启用了。

## 功能实现

### 1. 创建一个新的区块类型

我们参考 [向已有的 Add block 里添加新子项](/plugin-samples/schema-initializer/block) 迅速创建一个新的区块类型。

首先我们新建 `packages/plugins/@nocobase-sample/plugin-initializer-new/src/client/JsonBlock.tsx` 文件：

```tsx | pure
import React from 'react';
import { ISchema, SchemaInitializerItemType, SchemaSettings, useSchemaInitializer } from '@nocobase/client'

export const JsonBlock = () => {
  return <div>JSON Block</div>
}

export const JsonBlockSettings = new SchemaSettings({
  name: 'blockSettings:json',
  items: [
    {
      name: 'remove',
      type: 'remove',
    }
  ]
})

const jsonBlockSchema: ISchema = {
  type: 'void',
  'x-decorator': 'CardItem',
  'x-component': 'JsonBlock',
  'x-settings': JsonBlockSettings.name
};

export const jsonInitializerItem: SchemaInitializerItemType = {
  type: 'item',
  name: 'JsonBlock',
  icon: 'CodeOutlined',
  useComponentProps() {
    const { insert } = useSchemaInitializer();
    return {
      title: 'Json',
      onClick: () => {
        insert(jsonBlockSchema);
      },
    };
  },
}
```

然后修改 `packages/plugins/@nocobase-sample/plugin-initializer-new/src/client/index.tsx` 文件，导入并注册这个区块：

```tsx | pure
import { Plugin } from '@nocobase/client';
import { JsonBlock, JsonBlockSettings, jsonInitializerItem } from './JsonBlock'

export class PluginInitializerNewClient extends Plugin {
  async load() {
    this.app.addComponents({ JsonBlock });

    this.app.schemaInitializerManager.addItem('page:addBlock', `otherBlocks.${jsonInitializerItem.name}`, jsonInitializerItem)

    this.app.schemaSettingsManager.add(JsonBlockSettings);
  }
}

export default PluginInitializerNewClient;
```

TODO：视频演示添加新区块

### 2. 实现数据表结构的动态添加

目前是将区块注册到了 `otherBlocks` 中，我们需要将区块注册到 `Data blocks` 中，并且根据数据表结构动态添加子项。




### 3. 实现 `Configure fields` initializer

#### 3.1 新建 `Configure fields` initializer

我们新建 `packages/plugins/@nocobase-sample/plugin-initializer-new/src/client/configureFields.tsx` 文件：

```tsx | pure
import { Grid, SchemaInitializer, useSchemaInitializer } from "@nocobase/client";

export const configureFields = new SchemaInitializer({
  wrap: Grid.wrap,
  name: 'json:configureFields',
  icon: 'SettingOutlined',
  title: 'Configure fields',
  items: [
    {
      type: 'itemGroup',
      name: 'fields',
      title: 'Display fields',
      useChildren() {
        const { insert } = useSchemaInitializer();

        return [
          {
            name: 'test',
            type: 'item',
            title: 'Test',
            onClick() {
              insert({
                type: 'void',
                'x-component': 'div',
                'x-content': 'Test content'
              })
            }
          }
        ]
      },
    }
  ]
});
```

- [SchemaInitializer](https://client.docs.nocobase.com/core/ui-schema/schema-initializer)：用于创建一个 Schema Initializer 实例
- `wrap`：布局包装器，它是一个函数，当点击 Item 时，Item 的 Schema 会自动传入，并返回处理后的 Schema。`Grid.wrap` 是将 Item Schema 包装在 `Col` 组件中，更多是说明参考 [Grid 组件](https://client.docs.nocobase.com/components/grid)
- `icon`：图标，更多图标可参考 Ant Design [Icons](https://ant.design/components/icon/)
- `title`：按钮标题
- [items](https://client.docs.nocobase.com/core/ui-schema/schema-initializer#built-in-components-and-types)：按钮下的子项
  - `type: 'itemGroup'`：子项类型，用于包装多个子项
  - `name: 'fields'`：子项名称
  - `title: 'Display fields'`：子项标题
  - `useChildren`：子项的子项，返回一个数组，数组中的每一项都是一个子项

目前只是简单的添加了一个 `Test` 字段，点击后会在页面上显示 `Test content`。

#### 3.2 注册 `Configure fields` initializer

然后修改 `packages/plugins/@nocobase-sample/plugin-initializer-new/src/client/index.tsx` 文件，导入并注册这个 initializer：

```tsx | pure
import { configureFields } from './configureFields'

export class PluginInitializerNewClient extends Plugin {
  async load() {
    this.app.schemaInitializerManager.add(configureFields)
  }
}
```

#### 3.3 修改 `jsonBlockSchema` 区块

我们修改 `packages/plugins/@nocobase-sample/plugin-initializer-new/src/client/JsonBlock.tsx` 文件，将 `jsonBlockSchema` 区块修改为：

```diff
const jsonBlockSchema: ISchema = {
  type: 'void',
  'x-decorator': 'CardItem',
  'x-component': 'JsonBlock',
  'x-settings': JsonBlockSettings.name,
+ properties: {
+   fields: {
+     type: 'void',
+     'x-component': 'Grid',
+     'x-initializer': 'json:configureFields',
+  }
+ }
};
```

我们在 `jsonBlockSchema` 中添加了一个 `fields` 字段，它的组件是 `Grid`，并且指定了 `x-initializer` 为 `json:configureFields`，因为 `Grid` 内置了 [useSchemaInitializerRender()](https://client.docs.nocobase.com/core/ui-schema/schema-initializer#useschemainitializerrender) 的渲染逻辑，所以我们可以直接使用，如果是一个自定义的组件，需要自己通过 `useSchemaInitializerRender()` 实现渲染逻辑。

#### 3.4 修改 `JsonBlock` 组件

我们修改 `packages/plugins/@nocobase-sample/plugin-initializer-new/src/client/JsonBlock.tsx` 文件，将 `JsonBlock` 组件修改为：

```tsx | pure
export const JsonBlock = ({ children }) => {
  return <div>{children}</div>
}
```

`properties` 的内容会被传入到 `JsonBlock` 组件的 `children` 中，所以我们直接将 `children` 渲染出来即可。

TODO：效果演示

#### 3.5 读取数据表结构

### 3. 实现 `Configure actions` initializer

## 打包和上传到生产环境

按照 [构建并打包插件](/development/your-fisrt-plugin#构建并打包插件) 文档说明，我们可以打包插件并上传到生产环境。

如果是 clone 的源码，需要先执行一次全量 build，将插件的依赖也构建好。

```bash
yarn build
```

如果是使用的 `create-nocobase-app` 创建的项目，可以直接执行：

```bash
yarn build @nocobase-sample/plugin-initializer-new --tar
```

这样就可以看到 `storage/tar/@nocobase-sample/plugin-initializer-new.tar.gz` 文件了，然后通过[上传的方式](/welcome/getting-started/plugin)进行安装。

