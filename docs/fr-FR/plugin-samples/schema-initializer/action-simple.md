# Adding a Simple Action

## Scenario Description

NocoBase provides various `Configure actions` for adding action buttons to the interface.

![img_v3_02b4_51f4918f-d344-43b2-b19e-48dca709467g](https://static-docs.nocobase.com/img_v3_02b4_51f4918f-d344-43b2-b19e-48dca709467g.jpg)

If the existing action buttons do not fully meet our needs, we can add new buttons by creating sub-items within the `Configure actions`.

The term "simple action" in the title refers to actions that do not require a popup. For details on how to add a popup action, refer to [Adding a Popup Action](/plugin-samples/schema-initializer/action-modal).

## Example Explanation

This example creates a button that opens the corresponding block's documentation when clicked. This button will be added to the `Table`, `Details`, and `Form` blocks within the `Configure actions`.

You can view the complete sample code in [plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-initializer-action-simple).

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/20240522-185359.mp4" type="video/mp4" />
</video>

## Initializing the Plugin

Following the instructions in the [Writing Your First Plugin](/development/your-first-plugin) document, you can create a project if one does not already exist. If you have an existing project or cloned the source code, skip this step.

```bash
yarn create nocobase-app my-nocobase-app -d sqlite
cd my-nocobase-app
yarn install
yarn nocobase install
```

Next, initialize a plugin and add it to the system:

```bash
yarn pm create @nocobase-sample/plugin-initializer-action-simple
yarn pm enable @nocobase-sample/plugin-initializer-action-simple
```

Then, start the project:

```bash
yarn dev
```

Once logged in, visit [http://localhost:13000/admin/pm/list/local/](http://localhost:13000/admin/pm/list/local/) to confirm that the plugin is installed and enabled.

## Functionality Implementation

Before implementing this example, we need to understand some basic concepts:

- [Action Component](https://client.docs.nocobase.com/components/action)
- [SchemaInitializer Tutorial](/development/client/ui-schema/initializer): Used for adding various blocks, fields, and actions to the interface.
- [SchemaInitializer API](https://client.docs.nocobase.com/core/ui-schema/schema-initializer): Used for adding various blocks, fields, and actions to the interface.
- [UI Schema](/development/client/ui-schema/what-is-ui-schema): Defines the structure and style of the interface.
- [Designable Designer](/development/client/ui-schema/designable): Used for modifying the schema.

```bash
.
├── client # Client-side plugin
│   ├── initializer # Initializer
│   ├── index.tsx # Client-side plugin entry
│   ├── locale.ts # Multilingual utility functions
│   ├── constants.ts # Constants
│   ├── schema # Schema
│   └── settings # Schema Settings
├── locale # Multilingual files
│   ├── en-US.json # English
│   └── zh-CN.json # Chinese
├── index.ts # Server-side plugin entry
└── server # Server-side plugin
```

### 1. Define the Name

First, we need to define the action name, which will be used in various places.

Create the file `packages/plugins/@nocobase-sample/plugin-initializer-action-simple/src/client/constants.ts`:

```ts
export const ActionName = 'Document';
export const ActionNameLowercase = ActionName.toLowerCase();
```

### 2. Define the Schema

#### 2.1 Define the Schema

NocoBase’s dynamic pages are rendered through schemas, so we need to define a schema that will be used to add the button to the interface. Before proceeding, it's important to understand some basic concepts:

- [Action Component](https://client.docs.nocobase.com/components/action)
- [UI Schema Protocol](/development/client/ui-schema/what-is-ui-schema): Detailed introduction to the structure and functionality of schema attributes.

Create the file `packages/plugins/@nocobase-sample/plugin-initializer-action-simple/src/client/schema/index.ts` with the following content:

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

The `createDocumentActionSchema` component takes a `blockComponent` parameter and returns a schema that adds a button to the interface, which opens the corresponding block’s documentation when clicked.

`createDocumentActionSchema`:
- `type`: Type, here it's `void`, meaning a pure UI component.
- `x-component: 'Action'`: [Action Component](https://client.docs.nocobase.com/components/action) used to create a button.
- `title: 'Document'`: Button title.
- `x-doc-url`: A custom schema property representing the documentation URL.
- `x-use-component-props: 'useDocumentActionProps'`: Dynamic properties, more details can be found in [the documentation](/development/client/ui-schema/what-is-ui-schema#x-component-props-和-x-use-component-props).

`useDocumentActionProps()`:
- [useFieldSchema()](https://client.docs.nocobase.com/core/ui-schema/designable#usefieldschema): Retrieves the schema of the current node.
- `type: 'primary'`: Button type.
- `onClick`: Click event, opens the corresponding block’s documentation.

For more details on schemas, refer to the [UI Schema](/development/client/ui-schema/what-is-ui-schema) documentation.

### 4. Implement Schema Settings

#### 4.1 Define Schema Settings

Currently, after adding through `createDocumentActionInitializerItem()`, items cannot be deleted. We can use [Schema Settings](https://client.docs.nocobase.com/core/ui-schema/schema-settings) for configuration.

We add a new file `packages/plugins/@nocobase-sample/plugin-initializer-action-simple/src/client/settings/index.ts`:

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

#### 4.2 Register Schema Settings

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

#### 4.3 Use Schema Settings

We modify the `createDocumentActionSchema` in `packages/plugins/@nocobase-sample/plugin-initializer-action-simple/src/client/schema/index.ts`:

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

### 5. Add to the Configure Actions Page

There are many `Configure actions` buttons in the system, but their **names are different**. We need to add them to the `Table`, `Details`, and `Form` blocks based on specific requirements.

First, let's find the corresponding names:

TODO

Next, we modify the `packages/plugins/@nocobase-sample/plugin-initializer-action-simple/src/client/index.tsx` file:

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

### 6. Multi-language Support

:::warning
After modifying the multi-language files, you need to restart the service for the changes to take effect.
:::

#### 6.1 English

We edit the `packages/plugins/@nocobase-sample/plugin-initializer-action-simple/src/locale/en-US.json` file:

```json
{
  "Document": "Document"
}
```

#### 6.2 Chinese

We edit the `packages/plugins/@nocobase-sample/plugin-initializer-action-simple/src/locale/zh-CN.json` file:

```json
{
  "Document": "文档"
}
```

If more language support is needed, additional entries can be added.

You can add multiple languages via [http://localhost:13000/admin/settings/system-settings](http://localhost:13000/admin/settings/system-settings) and switch languages in the upper right corner.

![20240611113758](https://static-docs.nocobase.com/20240611113758.png)

### Packaging and Uploading to the Production Environment

Following the [Build and Package Plugin](/development/your-fisrt-plugin#构建并打包插件) guide, we can package the plugin and upload it to the production environment.

If the source code was cloned, a full build is needed first to construct the plugin dependencies.

```bash
yarn build
```

If the project was created using `create-nocobase-app`, simply run:

```bash
yarn build @nocobase-sample/plugin-initializer-action-simple --tar
```

Afterward, you will see the file `storage/tar/@nocobase-sample/plugin-initializer-action-simple.tar.gz`, which can be uploaded for installation following the [upload guide](/welcome/getting-started/plugin).
