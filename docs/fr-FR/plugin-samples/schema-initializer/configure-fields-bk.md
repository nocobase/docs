# 实现数据字段 Initializer

## 场景说明

如果新创建的区块是一个复杂的数据区块，那么它内部可能包含多个动态添加的部分，其中重点就是通过 `Configure fields` 对应的 initializer 动态添加字段。例如 `Form` 区块，我们可以通过 `Configure fields` 来配置显示的字段。

![img_v3_02b4_111734a2-755f-4100-949d-96803ad1912g](https://static-docs.nocobase.com/img_v3_02b4_111734a2-755f-4100-949d-96803ad1912g.jpg)

## 示例说明

本实例会在 [添加数据区块 Data Block](/plugin-samples/schema-initializer/data-block) 基础上继续实现类似 `Form` 区块的效果，通过 `Configure fields` 来配置显示的字段。

本文档完整的示例代码可以在 [plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-initializer-configure-fields) 中查看。

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/20240522-190508.mp4" type="video/mp4" />
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
yarn pm create @nocobase-sample/plugin-initializer-configure-fields
yarn pm enable @nocobase-sample/plugin-initializer-configure-fields
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

前面已经说明本示例会在 [添加数据区块 Data Block](/plugin-samples/schema-initializer/data-block) 基础上继续实现，所以我们可以复制 `packages/plugins/@nocobase-sample/plugin-initializer-block-data/src/client` 目录覆盖 `packages/plugins/@nocobase-sample/plugin-initializer-configure-fields/src/client`。

然后修改 `packages/plugins/@nocobase-sample/plugin-initializer-configure-fields/src/client/index.tsx`：

```diff
import { Plugin } from '@nocobase/client';
import { InfoBlock, infoBlockSettings, infoBlockInitializerItem } from './InfoBlock';

- export class PluginInitializerBlockDataClient extends Plugin {
+ export class PluginInitializerConfigureFieldsClient extends Plugin {
  async load() {
    // ...
  }
}

- export default PluginInitializerBlockDataClient;
+ export default PluginInitializerConfigureFieldsClient;
```

为了避免和其他示例冲突，把所有 `InfoBlock` 改为了 `InfoBlock2`，但是本示例文档中仍然按照 `InfoBlock` 来说明。

### 2. 创建 `Configure fields` 对应的 initializer

我们新建 `packages/plugins/@nocobase-sample/plugin-initializer-configure-fields/src/client/configureFields.tsx` 文件：

```tsx | pure
import { Grid, SchemaInitializer, useSchemaInitializer } from "@nocobase/client";

export const configureFields = new SchemaInitializer({
  name: 'info:configureFields',
  icon: 'SettingOutlined',
  title: 'Configure fields',
  items: [
    {
      type: 'itemGroup',
      name: 'fields',
      title: 'Display fields',
      useChildren() {
        const { insert } = useSchemaInitializer();

        return []
      },
    }
  ]
});
```

- [SchemaInitializer](https://client.docs.nocobase.com/core/ui-schema/schema-initializer)：用于创建一个 Schema Initializer 实例
- `icon`：图标，更多图标可参考 Ant Design [Icons](https://ant.design/components/icon/)
- `title`：按钮标题
- [items](https://client.docs.nocobase.com/core/ui-schema/schema-initializer#built-in-components-and-types)：按钮下的子项
  - `type: 'itemGroup'`：子项类型，用于包装多个子项
  - `name: 'fields'`：子项名称
  - `title: 'Display fields'`：子项标题
  - `useChildren`：子项的子项，返回一个数组，数组中的每一项都是一个子项

### 3. 注册 `Configure fields` initializer

然后修改 `packages/plugins/@nocobase-sample/plugin-initializer-configure-fields/src/client/index.tsx` 文件，导入并注册这个 initializer：

```tsx | pure
import { configureFields } from './configureFields'

export class PluginInitializerConfigureFieldsClient extends Plugin {
  async load() {
    this.app.schemaInitializerManager.add(configureFields)
  }
}
```

### 4. 修改 `getInfoBlockSchema()` 区块

我们修改 `packages/plugins/@nocobase-sample/plugin-initializer-configure-fields/src/client/InfoBlock.tsx` 文件，将 `getInfoBlockSchema()` 区块修改为：

```diff
function getInfoBlockSchema({ dataSource, collection }) {
  return {
    // ...
    properties: {
      info: {
        type: 'void',
        'x-component': 'InfoBlock',
+       properties: {
+         fields: {
+           type: 'void',
+           'x-component': 'Grid',
+           'x-initializer': 'info:configureFields',
+         }
+       }
      }
    }
  }
}
```

我们在 `InfoBlock` 的子节点中添加了一个 `fields` 字段，为了更好的布局，我们使用 `Grid` 组件包裹了一下，并且指定了 `x-initializer` 为 `info:configureFields`，因为 `Grid` 内置了 [useSchemaInitializerRender()](https://client.docs.nocobase.com/core/ui-schema/schema-initializer#useschemainitializerrender) 的渲染逻辑，所以我们可以直接使用，如果是一个自定义的组件，需要自己通过 `useSchemaInitializerRender()` 实现渲染逻辑。

### 5. 修改 `InfoBlock` 组件

我们修改 `packages/plugins/@nocobase-sample/plugin-initializer-configure-fields/src/client/InfoBlock.tsx` 文件，将 `InfoBlock` 组件修改为：

```tsx | pure
export const InfoBlock = ({ children }) => {
  return <div>{children}</div>
}
```

`properties` 的内容会被传入到 `InfoBlock` 组件的 `children` 中，所以我们直接将 `children` 渲染出来即可。

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/20240522-190759.mp4" type="video/mp4" />
</video>

### 6. 读取数据表字段作为 `Configure fields` 的子项

我们继续修改 `packages/plugins/@nocobase-sample/plugin-initializer-configure-fields/src/client/configureFields.tsx` 文件：

```tsx | pure
interface GetFieldInitializerItemOptions {
  collectionField: CollectionFieldOptions;
}

function getFieldInitializerItem(options: GetFieldInitializerItemOptions) {
  const { collectionField } = options;
  const title = collectionField.uiSchema?.title || collectionField.name;
  const name = collectionField.name;
  return {
    name: collectionField.name,
    title: collectionField.uiSchema?.title || collectionField.name,
    type: 'switch',
    onClick() {
      // TODO
    }
  } as SchemaInitializerItemType;
}

export const configureFields = new SchemaInitializer({
  name: 'info:configureFields',
  icon: 'SettingOutlined',
  title: 'Configure fields',
  items: [
    {
      type: 'itemGroup',
      name: 'fields',
      title: 'Display fields',
      useChildren() {
        const collection = useCollection();

        const schemaItems = collection
          .getFields()
          .map<SchemaInitializerItemType>(getFieldInitializerItem({
            collectionField,
          }))

        return schemaItems;
      },
    }
  ]
});
```

- [useCollection()](https://client.docs.nocobase.com/core/data-source/collection-provider#usecollection)：用于获取当前数据表的实例。在 `getInfoBlockSchema()` 中我们使用了 [DataBlockProvider](https://client.docs.nocobase.com/core/data-block/data-block-provider) ，其内部包含了 [CollectionProvider](https://client.docs.nocobase.com/core/data-source/collection-provider) ，所以我们可以直接使用。
  - `collection.getFields()`：获取数据表的字段

- getFieldInitializerItem：用于获取字段的 Schema Initializer Item
  - `name`：子项名称，用于唯一标识
  - `title`：子项标题，用于显示，如果字段有 `uiSchema.title` 则使用 `uiSchema.title`，否则使用字段名称，关于 `field.uiSchema` 的数据结构可以参考 [CollectionField](https://client.docs.nocobase.com/core/data-source/collection-field)
  - `type: 'switch'`：子项类型，[Switch 类型](https://client.docs.nocobase.com/core/ui-schema/schema-initializer#type-switch--schemainitializerswitch)，其核心是要实现 `onClick` 方法，当点击后如果已经存在则删除，如果不存在则添加。
  - `onClick`：点击事件，我们这里暂时不实现，后续会实现。

![img_v3_02b4_7d5c145e-cb15-4d93-9004-bde406e42a5g](https://static-docs.nocobase.com/img_v3_02b4_7d5c145e-cb15-4d93-9004-bde406e42a5g.jpg)

### 7. 实现 `switch` 的添加和删除

我们修改 `packages/plugins/@nocobase-sample/plugin-initializer-configure-fields/src/client/configureFields.tsx` 文件：

```diff
+ import { CollectionFieldOptions, ISchema, SchemaInitializer, SchemaInitializerItemType, SchemaSettings, useCollection, useDesignable, useSchemaInitializer } from "@nocobase/client";

export const configureFields = new SchemaInitializer({
  name: 'info:configureFields',
  icon: 'SettingOutlined',
  title: 'Configure fields',
  items: [
    {
      type: 'itemGroup',
      name: 'fields',
      title: 'Display fields',
      useChildren() {
+       const { insert } = useSchemaInitializer();
+       const { remove } = useDesignable();
+       const schema = useFieldSchema();
        const collection = useCollection();

        const schemaItems = collection
          .getFields()
          .map<SchemaInitializerItemType>((collectionField) => getFieldInitializerItem({
            collectionField,
+           schema,
+           remove,
+           insert
+         }))

        return schemaItems;
      },
    }
  ]
});
```

- [useDesignable()](https://client.docs.nocobase.com/core/ui-schema/designable#usedesignable)：可以增删改查 Schema 的方法
- [useSchemaInitializer()](https://client.docs.nocobase.com/core/ui-schema/schema-initializer#useschemainitializer)：用于提供 SchemaInitializer 上下文
  - `insert`：用于插入 Schema。这里之所以使用 `useSchemaInitializer()` 所提供的 insert 方法，而不是 `useDesignable()` 提供的 insert 方法，是因为 Schema 是有层级的，`useSchemaInitializer()` 获取的是 `SchemaInitializer` 所在层级，而 `useDesignable()` 获取的是当前 Schema 所在层级，我们需要插入到 `SchemaInitializer` 所在层级的兄弟层，所以应该使用 `useSchemaInitializer()` 提供的 insert 方法。

```tsx | pure
function getInfoItemSchema(collectionFieldName: string) {
  return {
     type: 'void',
    'x-collection-field': collectionFieldName,
    // TODO
  }
}

interface GetFieldInitializerItemOptions {
  collectionField: CollectionFieldOptions;
  schema: ISchema;
  remove: (schema: ISchema) => void;
  insert: (schema: ISchema) => void;
}

function getFieldInitializerItem(options: GetFieldInitializerItemOptions) {
  const { collectionField, schema, remove, insert } = options;
  const title = collectionField.uiSchema?.title || collectionField.name;
  const name = collectionField.name;
  const collectionFieldSchema = Object.values(schema.properties || {}).find((item) => item['x-collection-field'] === name);
  return {
    name,
    type: 'switch',
    title,
    checked: !!collectionFieldSchema,
    onClick() {
      if (collectionFieldSchema) {
        remove(collectionFieldSchema)
        return;
      }
      insert(getInfoItemSchema(name))
    }
  } as SchemaInitializerItemType;
}
```

首先 `getInfoItemSchema` 用于返回一个字段的 Schema，其中一个关键点是 `x-collection-field` 字段，用于标识这个 Schema 是哪个字段的。

然后我们通过读取 `schema.properties` 中的数据，找到对应的字段的 Schema，如果存在则删除，如果不存在则插入。

### 8. 完善子节点 Schema 和组件

```ts
export const infoItemSettings = new SchemaSettings({
  name: 'fieldSettings:info',
  items: [
    {
      name: 'remove',
      type: 'remove',
      componentProps: {
        removeParentsIfNoChildren: true,
        breakRemoveOn(s) {
          return s['x-component'] === 'Grid';
        },
      },
    }
  ]
})

export const InfoItem = () => {
  const fieldSchema = useFieldSchema();
  const collection = useCollection();
  const collectionFieldName = fieldSchema.name;
  return <pre>{JSON.stringify(collection.getField(collectionFieldName), null, 2)}</pre>
}

function getInfoItemSchema(collectionFieldName: string) {
  return {
    type: 'void',
    'x-collection-field': collectionFieldName,
    'x-component': 'Grid.Row',
    properties: {
      [uid()]: {
        type: 'void',
        'x-component': 'Grid.Col',
        properties: {
          [collectionFieldName]: {
            type: 'void',
            'x-component': 'InfoItem',
            'x-decorator': 'CardItem',
            'x-settings': infoItemSettings.name,
          },
        },
      },
    },
  } as ISchema;
}
```

我们在 `getInfoBlockSchema()` 中使用 `Grid` 组件作为父级，那么子节点就需要使用 `Grid.Row` 和 `Grid.Col` 组件，然后在 `Grid.Col` 中使用 `InfoItem` 组件。

`InfoItem` 就是具体的字段信息展示组件，我们这里做的事情很简单，首先读取当前字段的 Schema，其中 `schema.name` 对应 `collectionFieldName`，然后通过 [collection.getField(collectionFieldName)](https://client.docs.nocobase.com/core/data-source/collection#collectiongetfieldname) 获取字段的详细信息，然后展示出来。

然后我们将 `InfoItem` 和 `infoItemSettings` 组件注册到系统中：

```ts
export class PluginInitializerComplexDataBlockClient extends Plugin {
  async load() {
    this.app.addComponents({ InfoBlock, InfoItem });
    this.app.schemaSettingsManager.add(infoBlockSettings, infoItemSettings);
  }
}
```

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/20240522-190508.mp4" type="video/mp4" />
</video>

## 打包和上传到生产环境

按照 [构建并打包插件](/development/your-fisrt-plugin#构建并打包插件) 文档说明，我们可以打包插件并上传到生产环境。

如果是 clone 的源码，需要先执行一次全量 build，将插件的依赖也构建好。

```bash
yarn build
```

如果是使用的 `create-nocobase-app` 创建的项目，可以直接执行：

```bash
yarn build @nocobase-sample/plugin-initializer-configure-fields --tar
```

这样就可以看到 `storage/tar/@nocobase-sample/plugin-initializer-configure-fields.tar.gz` 文件了，然后通过[上传的方式](/welcome/getting-started/plugin)进行安装。

