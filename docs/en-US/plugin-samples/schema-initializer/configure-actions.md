# Block Embedded Initializer - Configure Actions

## Scenario Description

If a newly created block is a complex data block, it may contain multiple dynamically added parts. The `Configure actions` initializer is primarily responsible for dynamically adding buttons to implement various operations. For example, in a `Details` block, we can add `Edit`, `Print`, and other buttons through `Configure actions`.

![img_v3_02b4_9b80a4a0-6d9b-4e53-a544-f92c17d81d2g](https://static-docs.nocobase.com/img_v3_02b4_9b80a4a0-6d9b-4e53-a544-f92c17d81d2g.jpg)

## Example Explanation

This example will continue from [Adding a Data Block](/plugin-samples/schema-initializer/data-block) to implement a `Details` block-like effect, configuring buttons through `Configure actions`.

The complete sample code for this document can be found in [plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-initializer-configure-actions).

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/20240522-191602.mp4" type="video/mp4" />
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
yarn pm create @nocobase-sample/plugin-initializer-configure-actions
yarn pm enable @nocobase-sample/plugin-initializer-configure-actions
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

### 1. Creating the Block

As mentioned earlier, this example will continue from [Adding a Data Block](/plugin-samples/schema-initializer/data-block), so we can copy the `packages/plugins/@nocobase-sample/plugin-initializer-block-data/src/client` directory to `packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client`.

Then modify `packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/index.tsx`:

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

Then modify `packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/constants.ts`:

```ts
export const BlockName = 'InfoV2';
export const BlockNameLowercase = 'info-v2';
```

### 2. Implementing the Initializer

#### 2.1 Defining the Initializer

Create `packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/initializer/configureActions/configureActionsInitializer.ts`:

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

We defined a new `SchemaInitializer` with empty items for now.

- [SchemaInitializer](https://client.docs.nocobase.com/core/ui-schema/schema-initializer): Used to create a Schema Initializer instance
- `icon`: Icon, more icons can be found at Ant Design [Icons](https://ant.design/components/icon/)
- `title`: Button title
- [items](https://client.docs.nocobase.com/core/ui-schema/schema-initializer#built-in-components-and-types): Sub-items under the button

Then export it in `packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/initializer/configureActions/index.ts`:

```tsx | pure
export * from './configureActionsInitializer';
```

And modify `packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/initializer/index.tsx` to export `configureActions`:

```diff
import React from 'react';
import { SchemaInitializerItemType, useSchemaInitializer } from '@nocobase/client'
import { CodeOutlined } from '@ant-design/icons';

+ export * from './configureActions'
// ...
```

#### 2.2 Registering the Initializer

Then modify `packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/index.tsx` to import and register this initializer:

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

#### 2.3 Using the Initializer

Modify `packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/schema/index.ts` to add the `actions` child node:

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

`configure actions` is typically used with the [ActionBar](https://client.docs.nocobase.com/components/action#actionbar) component.

We added an `actions` field to the child nodes of `Info`:

- `type: 'void'`: Type is `void`, indicating it's a container
- `x-component: 'ActionBar'`: Uses the [ActionBar](https://client.docs.nocobase.com/components/action#actionbar) component to display buttons
- `x-initializer: configureActionsInitializer.name`: Uses the Schema Initializer we just created
- `x-component-props.layout: 'two-column'`: Two-column layout, see [ActionBar two-column](https://client.docs.nocobase.com/components/action#two-column) for examples

#### 2.4 Block Rendering Child Nodes

Modify `packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/component/Info.tsx` to update the `Info` component:

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

- `children`: The content of `properties` will be passed to the `InfoV2` component's `children`, so we simply render `children`.

![img_v3_02b4_4c6cb675-789e-48d5-99ce-072984dcfc9g](https://static-docs.nocobase.com/img_v3_02b4_4c6cb675-789e-48d5-99ce-072984dcfc9g.jpg)

### 3. Implementing Initializer Items

#### 3.1 Reusing: `Custom request` Action

Continue modifying `packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/initializer/configureActions/configureActionsInitializer.ts`:

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

For `Custom request`, we directly reuse the `CustomRequestInitializer` component. For more reusable Initializer Items, see *TODO*.

![img_v3_02b4_0d439087-cfe1-4681-bfab-4e4bc3e34cbg](https://static-docs.nocobase.com/img_v3_02b4_0d439087-cfe1-4681-bfab-4e4bc3e34cbg.jpg)

#### 3.2 Custom: `Custom Refresh` Action

Besides reusing existing Initializer Items, we can also customize Actions. For detailed steps on customizing Actions, refer to [Adding a Simple Action](/plugin-samples/schema-initializer/action-simple) and [Adding a Popup Action](/plugin-samples/schema-initializer/action-modal).

Here we implement a `Custom Refresh` Action.

#### 3.2.1 Defining the Name

Create `packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/initializer/configureActions/items/customRefresh/constants.ts`:

```ts
export const ActionName = 'Custom Request';
export const ActionNameLowercase = 'customRequest';
```

#### 3.2.2 Defining the Schema

##### 3.2.2.1 Defining the Schema

Create `packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/initializer/configureActions/items/customRefresh/schema.ts`:

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

We defined `customRefreshActionSchema` and the dynamic property `useCustomRefreshActionProps`.

`customRefreshActionSchema`:
  - `type: 'void'`: Type is `void`, indicating pure UI without data
  - `x-component: 'Action'`: Uses the [Action](https://client.docs.nocobase.com/components/action) component to display a button
  - `title: 'Custom Refresh'`: Button title
  - `x-use-component-props: 'useCustomRefreshActionProps'`: Uses the properties returned by this Hook. Since Schema is saved to the server, we use a string here.
  - `'x-toolbar': 'ActionSchemaToolbar'`: Typically used with the `Action` component. Unlike the default ToolBar, it hides the Initializer in the upper right corner of Action, keeping only Drag and Settings.

`useCustomRefreshActionProps`: This is a React Hook that returns properties for the Action component.
  - [useDataBlockRequest()](https://client.docs.nocobase.com/core/data-block/data-block-request-provider): The data block request object, provided internally by `DataBlockProvider`, used to automatically get data block data
    - `runAsync`: An async request method for refreshing data block data
  - `type: 'primary'`: Button type is `primary`
  - `onClick`: Click event.

Then export it in `packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/initializer/configureActions/items/customRefresh/index.ts`:

```ts
export * from './initializer';
```

And modify `packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/initializer/configureActions/index.ts` to export `customRefresh`:

```diff
export * from './configureActionsInitializer';
+ export * from './items/customRefresh';
```

##### 3.2.2.2 Registering the Context

We also need to register `useCustomRefreshActionProps` in the context. Modify `packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/index.tsx`:

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

For more about `SchemaComponentOptions`, see the [SchemaComponentOptions](https://client.docs.nocobase.com/core/ui-schema/schema-component#schemacomponentoptions) documentation and [Globally Registering Component and Scope](/plugin-samples/component-and-scope/global).

#### 3.3.2 Implementing Settings

##### 3.3.2.1 Defining Settings

Create `packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/initializer/configureActions/items/customRefresh/settings.ts`:

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

`customRefreshActionSettings`: Here we only simply define a `remove` operation. For more about Schema Settings definition, see the [Schema Settings](https://client.docs.nocobase.com/core/ui-schema/schema-settings) documentation.

Modify `packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/initializer/configureActions/items/customRefresh/index.ts` to export it:

```tsx | pure
export * from './settings';
```

##### 3.3.2.2 Registering Settings

Then register `customRefreshActionSettings` in the system. Modify `packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/index.tsx`:

```diff
- import { infoInitializerItem, useCustomRefreshActionProps } from './initializer';
+ import { infoInitializerItem, useCustomRefreshActionProps, customRefreshActionSettings } from './initializer';

export class PluginInitializerConfigureActionsClient extends Plugin {
  async load() {
+   this.app.schemaSettingsManager.add(customRefreshActionSettings);
  }
}
```

##### 3.3.2.2 Using Settings

Modify `packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/initializer/configureActions/items/customRefresh/schema.ts` `customRefreshActionSchema` to set `x-settings` to `customRefreshActionSettings.name`.

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

##### 3.3.3 Defining SchemaInitializer Item

###### 3.3.3.1 Defining SchemaInitializer Item

Continue modifying `packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/initializer/configureActions/items/customRefresh/initializer.ts`:

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

- `type: 'item'`: Type is `item`, indicating text that triggers an `onClick` event when clicked
- `name: 'custom refresh'`: Unique identifier for distinguishing different Schema Items and CRUD operations
- `title: 'Custom Refresh'`: Button title

For more about Schema Item definition, see the [Schema Initializer Item](https://client.docs.nocobase.com/core/ui-schema/schema-initializer#built-in-components-and-types) documentation.

Then modify `packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/initializer/configureActions/index.ts` to export it:

```tsx | pure
export * from './initializer';
```

###### 3.3.3.2 Using SchemaInitializer Item

Modify `packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/initializer/configureActions/configureActionsInitializer.ts` to add `customRefreshActionInitializerItem` to `items`:

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

You can implement more `Actions` as needed.

## Packaging and Uploading to Production Environment

Following the [Build and Package Plugin](/development/your-fisrt-plugin#build-and-package-the-plugin) documentation, we can package the plugin and upload it to the production environment.

If you cloned the source code, you need to run a full build first to build the plugin dependencies.

```bash
yarn build
```

If you used `create-nocobase-app` to create the project, you can run:

```bash
yarn build @nocobase-sample/plugin-initializer-configure-actions --tar
```

Then you will see the `storage/tar/@nocobase-sample/plugin-initializer-configure-actions.tar.gz` file, which can be installed through the [upload method](/welcome/getting-started/plugin).
