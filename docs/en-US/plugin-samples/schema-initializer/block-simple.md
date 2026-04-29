# Adding a Simple Block

## Scenario Description

NocoBase has many `Add block` buttons used to add blocks to the interface. Some blocks that are related to data tables are called Data Blocks, while others that are not related to data tables are called Simple Blocks.

![img_v3_02b4_a4529308-62e3-4fa7-be4d-5dcae332c49g](https://static-docs.nocobase.com/img_v3_02b4_a4529308-62e3-4fa7-be4d-5dcae332c49g.jpg)

However, the existing block types may not fully meet our needs, so we need to custom-develop some blocks according to our requirements. This article specifically explains how to create Simple Blocks.

## Example Explanation

This example will create an Image block type and add it to the `Page`, `Table`, and mobile `Add block` sections.

This example primarily demonstrates the usage of the initializer. For more information on block extensions, refer to the [Block Extension](/plugin-samples/block) documentation.

The complete sample code for this document can be found in the [plugin-samples repository](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-initializer-block-simple).

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/20240522-181816.mp4" type="video/mp4" />
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
yarn pm create @nocobase-sample/plugin-initializer-block-simple
yarn pm enable @nocobase-sample/plugin-initializer-block-simple
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
- [UI Schema Protocol](/development/client/ui-schema/what-is-ui-schema): Detailed introduction to the structure of Schema and the role of each attribute
- [Designable Designer](/development/client/ui-schema/designable): Used for modifying Schema

```bash
.
├── client # Client-side plugin
│   ├── initializer # Initializer
│   ├── component # Block component
│   ├── index.tsx # Client-side plugin entry point
│   ├── locale.ts # Multi-language utility functions
│   ├── constants.ts # Constants
│   ├── schema # Schema
│   └── settings # Schema Settings
├── locale # Multi-language files
│   ├── en-US.json # English
│   └── zh-CN.json # Chinese
├── index.ts # Server-side plugin entry point
└── server # Server-side plugin
```

### 1. Defining Names

First, we need to define the block name, which will be used in various places.

Create `packages/plugins/@nocobase-sample/plugin-initializer-block-simple/src/client/constants.ts`:

```ts
export const BlockName = 'Image';
export const BlockNameLowercase = BlockName.toLowerCase();
```

### 2. Implementing Block Components

#### 2.1 Defining the Block Component

In this example, we will create an Image block component named `Image`.

Create `packages/plugins/@nocobase-sample/plugin-initializer-block-simple/src/client/component/Image.tsx` with the following content:

```tsx | pure
import React, { FC } from 'react';
import { withDynamicSchemaProps } from '@nocobase/client';
import { BlockName } from '../constants';

export const Image: FC<{ height?: number }> = withDynamicSchemaProps(({ height = 500 }) => {
  return <div style={{ height }}>
    <img
      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      src="https://picsum.photos/2000/500"
    />
  </div>
}, { displayName: BlockName })
```

The `Image` component is essentially a functional component wrapped by `withDynamicSchemaProps`. The [withDynamicSchemaProps](/development/client/ui-schema/what-is-ui-schema#x-component-props-and-x-use-component-props) is a higher-order component used to handle dynamic properties in Schema.

Without considering `withDynamicSchemaProps`, the `Image` component is a simple functional component.

Then export it in `packages/plugins/@nocobase-sample/plugin-initializer-block-simple/src/client/component/index.ts`:

```tsx | pure
export * from './Image';
```

#### 2.2 Registering the Block Component

We need to register the `Image` component in the system via the plugin.

```tsx | pure
import { Plugin } from '@nocobase/client';
import { Image } from './component'

export class PluginInitializerBlockSimpleClient extends Plugin {
  async load() {
    this.app.addComponents({ Image })
  }
}

export default PluginInitializerBlockSimpleClient;
```

#### 2.3 Verifying the Block Component

There are two ways to verify the component:

- Temporary page verification: You can create a temporary page, render the `Image` component, and check if it meets the requirements
- Documentation example verification: You can start the documentation with `yarn doc plugins/@nocobase-sample/plugin-initializer-block-simple` and verify by writing documentation examples (TODO)

For this example, we'll use **Temporary Page Verification**. Create a page and add one or more `Image` components based on the parameters, then check if it meets the requirements.

```tsx | pure
import React from 'react';
import { Plugin } from '@nocobase/client';
import { Image } from './component'

export class PluginInitializerBlockSimpleClient extends Plugin {
  async load() {
    this.app.addComponents({ Image })

    this.app.router.add('admin.image-component', {
      path: '/admin/image-component',
      Component: () => {
        return <>
          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <Image />
          </div>

          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <Image height={400} />
          </div>
        </>
      }
    })
  }
}

export default PluginInitializerBlockSimpleClient;
```

Then visit `http://localhost:13000/admin/image-component` to see the corresponding content on the test page.

![20240526165057](https://static-docs.nocobase.com/20240526165057.png)

After verification, delete the test page.

### 3. Defining Block Schema

#### 3.1 Defining Block Schema

NocoBase's dynamic pages are rendered through Schema, so we need to define a Schema that will be used later to add the `Image` block to the interface. Before implementing this section, we need to understand some basic concepts:

- [UI Schema Protocol](/development/client/ui-schema/what-is-ui-schema): Detailed introduction to the structure of Schema and the role of each attribute

Create `packages/plugins/@nocobase-sample/plugin-initializer-block-simple/src/client/schema/index.ts`:

```tsx | pure
import { ISchema } from "@nocobase/client";
import { BlockName, BlockNameLowercase } from "../constants";

export const imageSchema: ISchema = {
  type: 'void',
  'x-component': 'CardItem',
  properties: {
    [BlockNameLowercase]: {
      'x-component': BlockName,
    }
  }
};
```

Detailed explanation of `imageSchema`:

- `type`: Type, here it's `void`, indicating a pure UI node with no data
- `x-decorator`: Decorator, here it's the [CardItem component](https://client.docs.nocobase.com/components/card-item). Currently, all blocks are wrapped in cards, which provides styling, layout, and drag-and-drop functionality
- `x-component`: Component, here it's `Image`, the component we just defined

The above Schema translates to the following React component:

```tsx | pure
<CardItem>
  <Image />
</CardItem>
```

#### 3.2 Verifying Block Schema

Like component verification, we can verify if the Schema meets the requirements through temporary page verification or documentation example verification. Here we use temporary page verification:

```tsx | pure
import React from 'react';
import { Plugin, SchemaComponent } from '@nocobase/client';
import { Image } from './component'
import { imageSchema } from './schema'

export class PluginInitializerBlockSimpleClient extends Plugin {
  async load() {
    this.app.addComponents({ Image })

    this.app.router.add('admin.image-schema', {
      path: '/admin/image-schema',
      Component: () => {
        return <div style={{ marginTop: 20, marginBottom: 20 }}>
          <SchemaComponent schema={{ properties: { test: imageSchema } }} />
        </div>
      }
    })
  }
}

export default PluginInitializerBlockSimpleClient;
```

For more details on `SchemaComponent`, see the [SchemaComponent](https://client.docs.nocobase.com/core/ui-schema/schema-component#schemacomponent-1) documentation.

Visit [http://localhost:13000/admin/image-schema](http://localhost:13000/admin/image-schema) to see the corresponding content on the test page.

![20240526165408](https://static-docs.nocobase.com/20240526165408.png)

After verification, delete the test page.

### 4. Defining Schema Initializer Item

Create `packages/plugins/@nocobase-sample/plugin-initializer-block-simple/src/client/initializer/index.ts`:

```ts
import { SchemaInitializerItemType, useSchemaInitializer } from '@nocobase/client';

import { useT } from '../locale';
import { imageSchema } from '../schema';
import { BlockName, BlockNameLowercase } from '../constants';

export const imageInitializerItem: SchemaInitializerItemType = {
  type: 'item',
  name: BlockNameLowercase,
  icon: 'FileImageOutlined',
  useComponentProps() {
    const { insert } = useSchemaInitializer();
    const t = useT()
    return {
      title: t(BlockName),
      onClick: () => {
        insert(imageSchema);
      },
    };
  },
}
```

- `type`: Type, here it's `item`, indicating text with a click event that can insert a new Schema when clicked
- `name`: Unique identifier, used to distinguish different Schema Items and CRUD operations
- `icon`: Icon, more icons can be found in [Ant Design Icons](https://ant.design/components/icon)
- `useComponentProps`: Returns an object containing `title` and `onClick` properties. `title` is the displayed text, and `onClick` is the callback function when clicked
- [useSchemaInitializer()](https://client.docs.nocobase.com/core/ui-schema/schema-initializer#useschemainitializer): Used to get the `SchemaInitializerContext` context
  - `insert`: Inserts a new Schema

For more details on defining Schema Items, see the [Schema Initializer Item](https://client.docs.nocobase.com/core/ui-schema/schema-initializer#built-in-components-and-types) documentation.

### 5. Implementing Schema Settings

#### 5.1 Defining Schema Settings

A complete Block also needs Schema Settings for configuring properties and operations. However, Schema Settings is not the focus of this example, so we only include a `remove` operation here.

Create `packages/plugins/@nocobase-sample/plugin-initializer-block-simple/src/client/settings/index.ts`:

```ts | pure
import { SchemaSettings } from "@nocobase/client";
import { BlockNameLowercase } from "../constants";

export const imageSettings = new SchemaSettings({
  name: `blockSettings:${BlockNameLowercase}`,
  items: [
    {
      type: 'remove',
      name: 'remove',
      componentProps: {
        removeParentsIfNoChildren: true,
        breakRemoveOn: {
          'x-component': 'Grid',
        },
      }
    }
  ]
});
```

- componentProps
  - `removeParentsIfNoChildren`: Whether to delete the parent node if there are no children
  - `breakRemoveOn`: The break condition when removing. Since `Add Block` automatically wraps child items in `Grid`, we set `breakRemoveOn: { 'x-component': 'Grid' }` so that when deleting `Grid`, it doesn't continue deleting upwards.

#### 5.2 Registering Schema Settings

```ts
import { Plugin } from '@nocobase/client';
import { imageSettings } from './settings';

export class PluginInitializerBlockSimpleClient extends Plugin {
  async load() {
    // ...
    this.app.schemaSettingsManager.add(imageSettings)
  }
}

export default PluginInitializerBlockSimpleClient;
```

#### 5.3 Using Schema Settings

Modify `imageSchema` in `packages/plugins/@nocobase-sample/plugin-initializer-block-simple/src/client/schema/index.ts`:

```diff
+ import { imageSettings } from "../settings";

const imageSchema: ISchema = {
  type: 'void',
  'x-decorator': 'CardItem',
+ 'x-settings': imageSettings.name,
  // ...
};
```

### 6. Adding to Add Block

There are many `Add block` buttons in the system, but their **names are different**.

![img_v3_02b4_049b0a62-8e3b-420f-adaf-a6350d84840g](https://static-docs.nocobase.com/img_v3_02b4_049b0a62-8e3b-420f-adaf-a6350d84840g.jpg)

#### 6.1 Adding to Page-Level Add Block

If we need to add to the page-level `Add block`, we need to know the corresponding `name`. We can find the corresponding `name` through the TODO method.

TODO

From the image above, we can see that the page-level `Add block` corresponds to the name `page:addBlock`, and `Other Blocks` corresponds to the name `otherBlocks`.

Then modify `packages/plugins/@nocobase-sample/plugin-initializer-block-simple/src/client/index.tsx`:

```tsx | pure
import { Plugin } from '@nocobase/client';

import { Image } from './component'
import { imageSettings } from './settings';
import { imageInitializerItem } from './initializer';

export class PluginInitializerBlockSimpleClient extends Plugin {
  async load() {
    this.app.addComponents({ Image })
    this.app.schemaSettingsManager.add(imageSettings)
    this.app.schemaInitializerManager.addItem('page:addBlock', `otherBlocks.${imageInitializerItem.name}`, imageInitializerItem)
  }
}

export default PluginInitializerBlockSimpleClient;
```

The above code first registers the `Image` component in the system, so the `x-component: 'Image'` defined in `imageSchema` can find the corresponding component. For more details, see [Globally Registering Component and Scope](/plugin-samples/component-and-scope/global).

Then it adds `imageSettings` to the system through [app.schemaSettingsManager.add](https://client.docs.nocobase.com/core/ui-schema/schema-settings-manager#schemasettingsmanageradd).

Then it uses [app.schemaInitializerManager.addItem](https://client.docs.nocobase.com/core/ui-schema/schema-initializer-manager#schemainitializermanageradditem) to add `imageInitializerItem` to the corresponding Initializer sub-item, where `page:addBlock` is the name of the `Add block` on the page, and `otherBlocks` is its parent name.

Now hover over the `Add block` button to see `Image` as a new block type. Click `Image` to add a new `Image` block.

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/20240522-175523.mp4" type="video/mp4" />
</video>

#### 6.2 Adding to Popup Add Block

We not only need to add it to the page-level `Add block`, but also to the `Add block` in the `Table` block's `Add new` popup.

![img_v3_02b4_fc47fe3a-35a1-4186-999c-0b48e6e001dg](https://static-docs.nocobase.com/img_v3_02b4_fc47fe3a-35a1-4186-999c-0b48e6e001dg.jpg)

Following the method for getting the page-level `name`, the `Table` block's `Add block` `name` is `popup:addNew:addBlock`, and `Other Blocks` corresponds to the name `otherBlocks`.

Then modify `packages/plugins/@nocobase-sample/plugin-initializer-block-simple/src/client/index.tsx`:

```diff
export class PluginInitializerBlockSimpleClient extends Plugin {
  async load() {
    this.app.addComponents({ Image })
    this.app.schemaSettingsManager.add(imageSettings)

    this.app.schemaInitializerManager.addItem('page:addBlock', `otherBlocks.${imageInitializerItem.name}`, imageInitializerItem)
+   this.app.schemaInitializerManager.addItem('popup:addNew:addBlock', `otherBlocks.${imageInitializerItem.name}`, imageInitializerItem)
  }
}
```

![img_v3_02b4_7062bfab-5a7b-439c-b385-92c5704b6b3g](https://static-docs.nocobase.com/img_v3_02b4_7062bfab-5a7b-439c-b385-92c5704b6b3g.jpg)

#### 6.3 Adding to Mobile Add Block

> First, activate the mobile plugin. Refer to the [Activating Plugins](/welcome/getting-started/plugin#3-activate-the-plugin) documentation.

We can add it to the mobile `Add block`. The method for getting the `name` is not repeated here.

Then modify `packages/plugins/@nocobase-sample/plugin-initializer-block-simple/src/client/index.tsx`:

```diff
export class PluginInitializerBlockSimpleClient extends Plugin {
  async load() {
    this.app.addComponents({ Image })
    this.app.schemaSettingsManager.add(imageSettings)

    this.app.schemaInitializerManager.addItem('page:addBlock', `otherBlocks.${imageInitializerItem.name}`, imageInitializerItem)
    this.app.schemaInitializerManager.addItem('popup:addNew:addBlock', `otherBlocks.${imageInitializerItem.name}`, imageInitializerItem)
+   this.app.schemaInitializerManager.addItem('mobilePage:addBlock', `otherBlocks.${imageInitializerItem.name}`, imageInitializerItem)
  }
}
```

![img_v3_02b4_ec873b25-5a09-4f3a-883f-1d722035799g](https://static-docs.nocobase.com/img_v3_02b4_ec873b25-5a09-4f3a-883f-1d722035799g.jpg)

If you need more `Add block` locations, you can continue adding them by knowing the corresponding `name`.

## Packaging and Uploading to Production Environment

Following the [Build and Package Plugin](/development/your-fisrt-plugin#build-and-package-the-plugin) documentation, we can package the plugin and upload it to the production environment.

If you cloned the source code, you need to run a full build first to build the plugin dependencies.

```bash
yarn build
```

If you used `create-nocobase-app` to create the project, you can run:

```bash
yarn build @nocobase-sample/plugin-initializer-block-simple --tar
```

Then you will see the `storage/tar/@nocobase-sample/plugin-initializer-block-simple.tar.gz` file, which can be installed through the [upload method](/welcome/getting-started/plugin).
