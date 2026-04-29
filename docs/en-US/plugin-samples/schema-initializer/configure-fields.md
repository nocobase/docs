# Implementing Data Field Initializer

## Scenario Description

If a newly created block is a complex data block, it may contain multiple dynamically added parts. The key focus is dynamically adding fields through the `Configure fields` initializer. For example, in a `Form` block, we can configure the displayed fields through `Configure fields`.

![img_v3_02b4_111734a2-755f-4100-949d-96803ad1912g](https://static-docs.nocobase.com/img_v3_02b4_111734a2-755f-4100-949d-96803ad1912g.jpg)

## Example Explanation

This example will continue from [Adding a Data Block](/plugin-samples/schema-initializer/data-block) to implement a `Form` block-like effect, configuring displayed fields through `Configure fields`.

The complete sample code for this document can be found in [plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-initializer-configure-fields).

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/20240522-190508.mp4" type="video/mp4" />
</video>

## Initializing the Plugin

Following the instructions in the [Creating Your First Plugin](/development/your-fisrt-plugin) document, if you don't have a project yet, you can create one first. If you already have a project or have cloned the source code, skip this step.

```bash
yarn create nocobase-app my-nocobase-app -d postgres
cd my-nocobase-app
yarn install
yarn nocobase install
```

Next, initialize a plugin and add it to the system:

```bash
yarn pm create @nocobase-sample/plugin-initializer-configure-fields
yarn pm enable @nocobase-sample/plugin-initializer-configure-fields
```

Then, start the project:

```bash
yarn dev
```

After logging in, visit [http://localhost:13000/admin/pm/list/local/](http://localhost:13000/admin/pm/list/local/) to see that the plugin has been installed and enabled.

## Feature Implementation

Before implementing this example, we need to understand some basic concepts:

- [SchemaInitializer Tutorial](/development/client/ui-schema/initializer): Used to add various blocks, fields, operations, etc., to the interface
- [SchemaInitializer API](https://client.docs.nocobase.com/core/ui-schema/schema-initializer): Provides an API for adding various blocks, fields, operations, etc., to the interface
- [UI Schema](/development/client/ui-schema/what-is-ui-schema): Used for defining the structure and style of the interface
- [Designable Designer](/development/client/ui-schema/designable): Used for modifying Schema

### 1. Copy Code and Modify Plugin Name

As mentioned earlier, this example will continue from [Adding a Data Block](/plugin-samples/schema-initializer/data-block), so we can copy the `packages/plugins/@nocobase-sample/plugin-initializer-block-data/src/client` directory to `packages/plugins/@nocobase-sample/plugin-initializer-configure-fields/src/client`.

Then modify `packages/plugins/@nocobase-sample/plugin-initializer-configure-fields/src/client/index.tsx`:

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

To avoid conflicts with other examples, all `InfoBlock` has been changed to `InfoBlock2`, but this documentation still uses `InfoBlock` for explanation.

### 2. Creating the `Configure fields` Initializer

Create `packages/plugins/@nocobase-sample/plugin-initializer-configure-fields/src/client/configureFields.tsx`:

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

- [SchemaInitializer](https://client.docs.nocobase.com/core/ui-schema/schema-initializer): Used to create a Schema Initializer instance
- `icon`: Icon, more icons can be found at Ant Design [Icons](https://ant.design/components/icon/)
- `title`: Button title
- [items](https://client.docs.nocobase.com/core/ui-schema/schema-initializer#built-in-components-and-types): Sub-items under the button
  - `type: 'itemGroup'`: Sub-item type, used to wrap multiple sub-items
  - `name: 'fields'`: Sub-item name
  - `title: 'Display fields'`: Sub-item title
  - `useChildren`: Sub-items of the sub-item, returns an array where each item is a sub-item

### 3. Registering the `Configure fields` Initializer

Then modify `packages/plugins/@nocobase-sample/plugin-initializer-configure-fields/src/client/index.tsx` to import and register this initializer:

```tsx | pure
import { configureFields } from './configureFields'

export class PluginInitializerConfigureFieldsClient extends Plugin {
  async load() {
    this.app.schemaInitializerManager.add(configureFields)
  }
}
```

### 4. Modifying the `getInfoBlockSchema()` Block

Modify `packages/plugins/@nocobase-sample/plugin-initializer-configure-fields/src/client/InfoBlock.tsx` to change `getInfoBlockSchema()`:

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

We added a `fields` field to the child nodes of `InfoBlock`. For better layout, we wrapped it with the `Grid` component and specified `x-initializer` as `info:configureFields`. Since `Grid` has built-in [useSchemaInitializerRender()](https://client.docs.nocobase.com/core/ui-schema/schema-initializer#useschemainitializerrender) rendering logic, we can use it directly. If it's a custom component, you need to implement the rendering logic through `useSchemaInitializerRender()`.

### 5. Modifying the `InfoBlock` Component

Modify `packages/plugins/@nocobase-sample/plugin-initializer-configure-fields/src/client/InfoBlock.tsx` to change the `InfoBlock` component:

```tsx | pure
export const InfoBlock = ({ children }) => {
  return <div>{children}</div>
}
```

The content of `properties` will be passed to the `children` of the `InfoBlock` component, so we simply render `children`.

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/20240522-190759.mp4" type="video/mp4" />
</video>

### 6. Reading Data Table Fields as `Configure fields` Sub-items

Continue modifying `packages/plugins/@nocobase-sample/plugin-initializer-configure-fields/src/client/configureFields.tsx`:

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

- [useCollection()](https://client.docs.nocobase.com/core/data-source/collection-provider#usecollection): Used to get the current data table instance. In `getInfoBlockSchema()`, we used [DataBlockProvider](https://client.docs.nocobase.com/core/data-block/data-block-provider), which internally includes [CollectionProvider](https://client.docs.nocobase.com/core/data-source/collection-provider), so we can use it directly.
  - `collection.getFields()`: Gets the data table fields

- getFieldInitializerItem: Gets the Schema Initializer Item for a field
  - `name`: Sub-item name, used as a unique identifier
  - `title`: Sub-item title for display. If the field has `uiSchema.title`, use it; otherwise, use the field name. For the data structure of `field.uiSchema`, see [CollectionField](https://client.docs.nocobase.com/core/data-source/collection-field)
  - `type: 'switch'`: Sub-item type, [Switch type](https://client.docs.nocobase.com/core/ui-schema/schema-initializer#type-switch--schemainitializerswitch). The key is to implement the `onClick` method: when clicked, delete if it exists, add if it doesn't
  - `onClick`: Click event, we'll implement this later

![img_v3_02b4_7d5c145e-cb15-4d93-9004-bde406e42a5g](https://static-docs.nocobase.com/img_v3_02b4_7d5c145e-cb15-4d93-9004-bde406e42a5g.jpg)

### 7. Implementing `switch` Add and Remove

Modify `packages/plugins/@nocobase-sample/plugin-initializer-configure-fields/src/client/configureFields.tsx`:

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

- [useDesignable()](https://client.docs.nocobase.com/core/ui-schema/designable#usedesignable): Provides methods for adding, deleting, updating, and querying Schema
- [useSchemaInitializer()](https://client.docs.nocobase.com/core/ui-schema/schema-initializer#useschemainitializer): Provides the SchemaInitializer context
  - `insert`: Used to insert Schema. Here we use the insert method from `useSchemaInitializer()` rather than from `useDesignable()` because Schema is hierarchical. `useSchemaInitializer()` gets the level where `SchemaInitializer` is located, while `useDesignable()` gets the current Schema level. We need to insert at the sibling level of `SchemaInitializer`, so we should use the insert method from `useSchemaInitializer()`.

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

First, `getInfoItemSchema` returns a field's Schema, where the key point is the `x-collection-field` field, used to identify which field this Schema belongs to.

Then we read data from `schema.properties` to find the corresponding field's Schema. If it exists, delete it; if not, insert it.

### 8. Completing Child Node Schema and Component

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

In `getInfoBlockSchema()`, we use the `Grid` component as the parent, so child nodes need to use `Grid.Row` and `Grid.Col` components, then use the `InfoItem` component inside `Grid.Col`.

`InfoItem` is the specific field information display component. What we do here is simple: first read the current field's Schema, where `schema.name` corresponds to `collectionFieldName`, then get the field's detailed information through [collection.getField(collectionFieldName)](https://client.docs.nocobase.com/core/data-source/collection#collectiongetfieldname) and display it.

Then register the `InfoItem` and `infoItemSettings` components in the system:

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

## Packaging and Uploading to Production Environment

Following the [Build and Package Plugin](/development/your-fisrt-plugin#build-and-package-the-plugin) documentation, we can package the plugin and upload it to the production environment.

If you cloned the source code, you need to run a full build first to build the plugin dependencies.

```bash
yarn build
```

If you used `create-nocobase-app` to create the project, you can run:

```bash
yarn build @nocobase-sample/plugin-initializer-configure-fields --tar
```

Then you will see the `storage/tar/@nocobase-sample/plugin-initializer-configure-fields.tar.gz` file, which can be installed through the [upload method](/welcome/getting-started/plugin).
