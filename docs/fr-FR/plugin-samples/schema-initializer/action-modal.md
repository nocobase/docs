# Adding a Popup Action

## Scenario Description

In NocoBase, there are many `Configure actions` used to add operation buttons to the interface.

![img_v3_02b4_51f4918f-d344-43b2-b19e-48dca709467g](https://static-docs.nocobase.com/img_v3_02b4_51f4918f-d344-43b2-b19e-48dca709467g.jpg)

If the existing action buttons do not fully meet our needs, we can add sub-items to the current `Configure actions` to create new action buttons.

## Example Description

In this example, we will create a button that, when clicked, opens a popup. The popup contains a document embedded in an iframe. This button will be added to the `Table`, `Details`, and `Form` blocks within the `Configure actions`.

The complete example code can be found in [plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-initializer-action-modal).

<video controls width='100%' src="https://static-docs.nocobase.com/20240526172851_rec_.mp4"></video>

## Initializing the Plugin

Follow the instructions in [Creating Your First Plugin](/development/your-fisrt-plugin). If you don’t already have a project, you can create one. If you already have one or have cloned the source code, you can skip this step.

```bash
yarn create nocobase-app my-nocobase-app -d sqlite
cd my-nocobase-app
yarn install
yarn nocobase install
```

Next, initialize a plugin and add it to the system:

```bash
yarn pm create @nocobase-sample/plugin-initializer-action-modal
yarn pm enable @nocobase-sample/plugin-initializer-action-modal
```

Then, start the project:

```bash
yarn dev
```

After logging in, visit [http://localhost:13000/admin/pm/list/local/](http://localhost:13000/admin/pm/list/local/) to verify that the plugin is installed and enabled.

## Functionality Implementation

Before implementing this example, we need to understand some foundational knowledge:

- [Action Component](https://client.docs.nocobase.com/components/action)
- [SchemaInitializer Tutorial](/development/client/ui-schema/initializer): Used to add blocks, fields, actions, etc., to the interface
- [SchemaInitializer API](https://client.docs.nocobase.com/core/ui-schema/schema-initializer): Also for adding blocks, fields, actions, etc., to the interface
- [UI Schema](/development/client/ui-schema/what-is-ui-schema): Defines the structure and style of the interface
- [Designable Designer](/development/client/ui-schema/designable): Used to modify the schema

```bash
.
├── client # Client-side plugin
│   ├── initializer # Initializer
│   ├── index.tsx # Client-side plugin entry point
│   ├── locale.ts # Localization utility functions
│   ├── constants.ts # Constants
│   ├── schema # Schema
│   └── settings # Schema Settings
├── locale # Localization files
│   ├── en-US.json # English
│   └── zh-CN.json # Chinese
├── index.ts # Server-side plugin entry point
└── server # Server-side plugin
```

## 1. Define the Name

First, we need to define the action name, which will be used in several places.

Create the file `packages/plugins/@nocobase-sample/plugin-initializer-action-modal/src/client/constants.ts`:

```ts
export const ActionName = 'Open Document';
export const ActionNameLowercase = 'open-document';
```

## 2. Define the Schema

### 2.1 Define the Schema

NocoBase’s dynamic pages are rendered using schemas, so we need to define a schema for later use to add elements to the interface. Before proceeding, we need to understand the following concepts:

- [Action Component](https://client.docs.nocobase.com/components/action)
- [Action.Drawer Component](https://client.docs.nocobase.com/components/action#actiondrawer)
- [UI Schema Protocol](/development/client/ui-schema/what-is-ui-schema): This document explains the structure of the schema and the purpose of each attribute

We will create a new file, `packages/plugins/@nocobase-sample/plugin-initializer-action-modal/src/client/schema/index.ts`, with the following content:

```ts
import { ISchema } from "@nocobase/client"
import { tStr } from "../locale";
import { ActionName } from "../constants";

export const createDocumentActionModalSchema = (blockComponent: string): ISchema => {
  return {
    type: 'void',
    'x-component': 'Action',
    title: tStr(ActionName),
    'x-component-props': {
      type: 'primary'
    },
    properties: {
      drawer: {
        type: 'void',
        'x-component': 'Action.Drawer',
        'x-component-props': {
          size: 'large'
        },
        properties: {
          iframe: {
            type: 'void',
            'x-component': 'iframe',
            'x-component-props': {
              src: `https://client.docs.nocobase.com/components/${blockComponent}`,
              style: {
                border: 'none',
                width: '100%',
                height: '100%'
              }
            },
          }
        }
      },
    },
  }
}
```

The `createDocumentActionModalSchema` component accepts a `blockComponent` parameter and returns a schema. This schema adds a button to the interface that, when clicked, opens a popup. The popup contains an iframe with the block's document as its source.

`createDocumentActionModalSchema`:
- `type`: Specifies the type of component. Here, it’s `void`, meaning it’s a purely UI component
- `x-component: 'Action'`: [Action Component](https://client.docs.nocobase.com/components/action), used to generate a button
- `title: 'Open Document'`: The title of the button
- `properties`: Child nodes
  - ['x-component': 'Action.Drawer'](https://client.docs.nocobase.com/components/action#actiondrawer): Refers to the Action.Drawer component

For more details on the schema, refer to the [UI Schema](/development/client/ui-schema/what-is-ui-schema) documentation.

### 2.2 Validate the Schema

There are two methods for validating the schema:

- Temporary page validation: You can create a temporary page, render the schema, and check if it meets the requirements
- Documentation example validation: Start the documentation by running `yarn doc plugins/@nocobase-sample/plugin-initializer-action-modal`, and validate by creating a documentation example (TODO)

We’ll use the `Temporary Page Validation` method. Create a new page, add one or more examples based on the attribute parameters, and check if they meet the requirements.

```tsx | pure
import React from 'react';
import { Plugin, SchemaComponent } from '@nocobase/client';
import { createDocumentActionModalSchema } from './schema';

export class PluginInitializerActionModalClient extends Plugin {
  async load() {
    this.app.router.add('admin.open-document-schema', {
      path: '/admin/open-document-schema',
      Component: () => {
        return <>
          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <SchemaComponent schema={{ properties: { test1: createDocumentActionModalSchema('table-v2') } }} />
          </div>
          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <SchemaComponent schema={{ properties: { test2: createDocumentActionModalSchema('details') } }} />
          </div>
        </>
      }
    })
  }
}

export default PluginInitializerActionModalClient;
```

Afterward, visit [http://localhost:13000/admin/open-document-schema](http://localhost:13000/admin/open-document-schema) to view the temporary page we’ve added.

For detailed information on `SchemaComponent`, refer to the [SchemaComponent](https://client.docs.nocobase.com/core/ui-schema/schema-component#schemacomponent-1) documentation.

<video controls width='100%' src="https://static-docs.nocobase.com/20240526171945_rec_.mp4"></video>

Once validation is complete, be sure to remove the test page.

# 3. Define Schema Initializer Item

We will add a new file `packages/plugins/@nocobase-sample/plugin-initializer-action-modal/src/client/initializer/index.ts`:

```ts
import { SchemaInitializerItemType, useSchemaInitializer } from "@nocobase/client"

import { useT } from "../locale";
import { createDocumentActionModalSchema } from '../schema';
import { ActionName, ActionNameLowercase } from "../constants";

export const createDocumentActionModalInitializerItem = (blockComponent: string): SchemaInitializerItemType => ({
  type: 'item',
  title: ActionName,
  name: ActionNameLowercase,
  useComponentProps() {
    const { insert } = useSchemaInitializer();
    const t = useT();
    return {
      title: t(ActionName),
      onClick: () => {
        insert(createDocumentActionModalSchema(blockComponent));
      },
    };
  },
})
```

Since we need to generate different `DocumentActionModal` instances based on various `blockComponent` values, we define the `createDocumentActionModalInitializerItem` function to generate the corresponding Schema Initializer Item.

- `type`: This is set as `item`, indicating a text element that triggers an event upon clicking, inserting a new Schema.
- `name`: A unique identifier that helps distinguish between different Schema Items and operations, such as creating, reading, updating, and deleting.
- `useComponentProps`: Returns an object that includes the `title` and `onClick` properties. The `title` is the displayed text, and `onClick` is the callback function executed when clicked.
- [useSchemaInitializer](https://client.docs.nocobase.com/core/ui-schema/schema-initializer#useschemainitializer): Retrieves the `SchemaInitializerContext`, which provides methods for operational tasks.

For further details on defining Schema Items, refer to the [Schema Initializer Item](https://client.docs.nocobase.com/core/ui-schema/schema-initializer#built-in-components-and-types) documentation.

# 4. Implement Schema Settings

## 4.1 Define Schema Settings

At the moment, once added via `createDocumentActionInitializerItem()`, items cannot be removed. We can address this by using [Schema Settings](https://client.docs.nocobase.com/core/ui-schema/schema-settings).

We will add a new file: `packages/plugins/@nocobase-sample/plugin-initializer-action-modal/src/client/settings/index.ts`:

```ts
import { SchemaSettings } from "@nocobase/client";
import { ActionNameLowercase } from "../constants";

export const documentActionModalSettings = new SchemaSettings({
  name: `actionSettings:${ActionNameLowercase}`,
  items: [
    {
      name: 'remove',
      type: 'remove',
    }
  ]
});
```

## 4.2 Register Schema Settings

```ts
import { Plugin } from '@nocobase/client';
import { documentActionModalSettings } from './settings';

export class PluginInitializerActionModalClient extends Plugin {
  async load() {
    this.app.schemaSettingsManager.add(documentActionModalSettings);
  }
}

export default PluginInitializerActionModalClient;
```

## 4.3 Use Schema Settings

We will modify the `createDocumentActionModalSchema` function in `packages/plugins/@nocobase-sample/plugin-initializer-action-modal/src/client/schema/index.ts`, adding `documentActionModalSettings` to `x-settings`.

```diff
export const createDocumentActionModalSchema = (blockComponent: string): ISchema => {
  return {
    type: 'void',
    'x-component': 'Action',
+   'x-settings': documentActionModalSettings.name,
    // ..
  }
}
```

# 5. Add to Configure Actions in the Page

There are several `Configure actions` buttons in the system, but their **names differ**. We will add the necessary items to the `Table`, `Details`, and `Form` sections' `Configure actions`.

First, we will identify the appropriate names:

TODO

Then, modify the `packages/plugins/@nocobase-sample/plugin-initializer-action-modal/src/client/index.tsx` file:

```diff
import { Plugin } from '@nocobase/client';
import { documentActionModalSettings } from './documentActionModalSettings';
import { createDocumentActionModalInitializerItem } from './documentActionModalInitializerItem';

export class PluginInitializerActionModalClient extends Plugin {
  async load() {
    this.app.schemaSettingsManager.add(documentActionModalSettings);
+   this.app.schemaInitializerManager.addItem('table:configureActions', 'open-document', createDocumentActionModalInitializerItem('table-v2'));
+   this.app.schemaInitializerManager.addItem('details:configureActions', 'open-document', createDocumentActionModalInitializerItem('details'));
+   this.app.schemaInitializerManager.addItem('createForm:configureActions', 'open-document', createDocumentActionModalInitializerItem('form-v2'));
  }
}

export default PluginInitializerActionModalClient;
```

<video controls width='100%' src="https://static-docs.nocobase.com/20240526172851_rec_.mp4"></video>

# 6. Multi-language Support

:::warning
Changes to the language files will take effect only after restarting the service.
:::

### 6.1 English

We will edit the file `packages/plugins/@nocobase-sample/plugin-initializer-action-simple/src/locale/en-US.json`:

```json
{
  "Document": "Document"
}
```

### 6.2 Chinese

We will edit the file `packages/plugins/@nocobase-sample/plugin-initializer-action-simple/src/locale/zh-CN.json`:

```json
{
  "Document": "文档"
}
```

If additional language support is required, more languages can be added.

You can manage multiple languages and switch between them through the UI at [http://localhost:13000/admin/settings/system-settings](http://localhost:13000/admin/settings/system-settings).

![20240611113758](https://static-docs.nocobase.com/20240611113758.png)

## Packaging and Uploading to Production

Following the guidelines outlined in the [Build and Package Plugins](/development/your-fisrt-plugin#build-and-package-plugins) documentation, we can package the plugin and deploy it to the production environment.

For cloned source code, ensure a full build is executed first to compile plugin dependencies:

```bash
yarn build
```

For projects created using `create-nocobase-app`, execute the following:

```bash
yarn build @nocobase-sample/plugin-initializer-action-modal --tar
```

This will generate the file `storage/tar/@nocobase-sample/plugin-initializer-action-modal.tar.gz`, which can then be installed by following the [upload process](/welcome/getting-started/plugin).

