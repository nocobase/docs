# Adding Data Blocks

## Scenario Description

NocoBase has many `Add block` buttons used to add blocks to the interface. Some of these blocks are related to data tables and are referred to as Data Blocks, while others that are not related to data tables are called Simple Blocks.

![img_v3_02b4_170eddb5-d3b4-461e-b74b-f83250941e5g](https://static-docs.nocobase.com/img_v3_02b4_170eddb5-d3b4-461e-b74b-f83250941e5g.jpg)

However, the existing block types may not fully meet our needs, so we may need to custom-develop some blocks according to our requirements. This article specifically explains how to create Data Blocks.

## Example Explanation

In this example, we will create an `Info` block and add it to the `Page`, `Table`, and the mobile `Add block` sections.

This example mainly demonstrates the usage of the initializer. For more information on block extensions, refer to the [Block Extension](/plugin-samples/block) documentation.

The complete sample code for this document can be found in the [plugin-samples repository](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-initializer-block-data).

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/20240522-182547.mp4" type="video/mp4" />
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
yarn pm create @nocobase-sample/plugin-initializer-block-data
yarn pm enable @nocobase-sample/plugin-initializer-block-data
```

Then, start the project:

```bash
yarn dev
```

After logging in, visit [http://localhost:13000/admin/pm/list/local/](http://localhost:13000/admin/pm/list/local/) to see that the plugin has been installed and enabled.

## Feature Implementation

Before implementing this example, we need to understand some basic concepts:

- [SchemaInitializer Tutorial](/development/client/ui-schema/initializer): Used to add various blocks, fields, operations, etc., to the interface.
- [SchemaInitializer API](https://client.docs.nocobase.com/core/ui-schema/schema-initializer): Provides an API for adding various blocks, fields, operations, etc., to the interface.
- [UI Schema](/development/client/ui-schema/what-is-ui-schema): Used for defining the structure and style of the interface.
- [Designable](/development/client/ui-schema/designable): A designer tool used for modifying schemas.

```bash
.
├── client # Client-side plugin
│   ├── initializer # Initializer
│   ├── component # Block components
│   ├── index.tsx # Entry point for the client-side plugin
│   ├── locale.ts # Multi-language utility functions
│   ├── constants.ts # Constants
│   ├── schema # Schema
│   └── settings # Schema settings
├── locale # Multi-language files
│   ├── en-US.json # English
│   └── zh-CN.json # Chinese
├── index.ts # Server-side plugin entry point
└── server # Server-side plugin
```

### 1. Defining Names

First, we need to define the block's name, which will be used in various places.

Create `packages/plugins/@nocobase-sample/plugin-initializer-block-data/src/client/constants.ts`:

```ts
export const BlockName = 'Info';
export const BlockNameLowercase = BlockName.toLowerCase();
```

### 2. Implementing Block Components

#### 2.1 Defining the Block Component

In this example, we need to create an `Info` block component with the following requirements:

- Display the name of the current block's data table.
- Display the current block's data list.

First, create `packages/plugins/@nocobase-sample/plugin-initializer-block-data/src/client/component/Info.tsx` with the following content:

```tsx | pure
import React, { FC } from 'react';
import { withDynamicSchemaProps } from '@nocobase/client'
import { BlockName } from '../constants';

export interface InfoProps {
  collectionName: string;
  data?: any[];
  loading?: boolean;
}

export const Info: FC<InfoProps> = withDynamicSchemaProps(({ collectionName, data }) => {
  return <div>
    <div>Collection: {collectionName}</div>
    <div>Data list: <pre>{JSON.stringify(data, null, 2)}</pre></div>
  </div>
}, { displayName: BlockName })
```

The `Info` component is essentially a functional component wrapped by `withDynamicSchemaProps`. The [withDynamicSchemaProps](/development/client/ui-schema/what-is-ui-schema#x-component-props-and-x-use-component-props) is a higher-order component used to handle dynamic properties in schemas.

Without considering `withDynamicSchemaProps`, the `Info` component is a simple functional component.

Next, export it in `packages/plugins/@nocobase-sample/plugin-initializer-block-data/src/client/component/index.ts`:

```tsx | pure
export * from './Info';
```

#### 2.2 Registering the Block Component

We need to register the `Info` component in the system via the plugin.

```tsx | pure
import { Plugin } from '@nocobase/client';
import { Info } from './component';

export class PluginInitializerBlockDataClient extends Plugin {
  async load() {
    this.app.addComponents({ Info })
  }
}

export default PluginInitializerBlockDataClient;
```

#### 2.3 Verifying the Block Component

There are two ways to verify the component:

- Temporary page verification: You can create a temporary page, render the `Info` component, and check if it meets the requirements.
- Documentation example verification: You can start the documentation with `yarn doc plugins/@nocobase-sample/plugin-initializer-block-data` and verify the component through a documentation example (TODO).

For this example, we'll use **Temporary Page Verification**. Create a page and add one or more `Info` components based on the parameters, then check if it meets the requirements.

```tsx | pure
import React from 'react';
import { Plugin } from '@nocobase/client';
import { Info } from './component';

export class PluginInitializerBlockDataClient extends Plugin {
  async load() {
    this.app.addComponents({ Info })

    this.app.router.add('admin.info-component', {
      path: '/admin/info-component',
      Component: () => {
        return <>
          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <Info collectionName='test' data={[{ id: 1 }, { id: 2 }]} />
          </div>
        </>
      }
    })
  }
}

export default PluginInitializerBlockDataClient;
```

Then, visit `http://localhost:13000/admin/info-component` to see the corresponding content on the test page.

![20240526165834](https://static-docs.nocobase.com/20240526165834.png)

After verification, delete the test page.

### 3. Defining Block Schema

#### 3.1 Defining Block Schema

NocoBase's dynamic pages are rendered through Schema, so we need to define a Schema that will be used to add the `Info` block to the interface. Before implementing this section, we need to understand some basic concepts:

- [UI Schema Protocol](/development/client/ui-schema/what-is-ui-schema): Detailed introduction to the structure of Schema and the role of each attribute
- [DataBlockProvider](https://client.docs.nocobase.com/core/data-block/data-block-provider): Data block provider

Create `packages/plugins/@nocobase-sample/plugin-initializer-block-data/src/client/schema/index.ts`:

```ts
import { useCollection, useDataBlockRequest } from "@nocobase/client";

import { InfoProps } from "../component";
import { BlockName, BlockNameLowercase } from "../constants";

export function useInfoProps(): InfoProps {
  const collection = useCollection();
  const { data, loading } = useDataBlockRequest<any[]>();

  return {
    collectionName: collection.name,
    data: data?.data,
    loading: loading
  }
}

export function getInfoSchema({ dataSource = 'main', collection }) {
  return {
    type: 'void',
    'x-decorator': 'DataBlockProvider',
    'x-decorator-props': {
      dataSource,
      collection,
      action: 'list',
    },
    'x-component': 'CardItem',
    "x-toolbar": "BlockSchemaToolbar",
    properties: {
      [BlockNameLowercase]: {
        type: 'void',
        'x-component': BlockName,
        'x-use-component-props': 'useInfoProps',
      }
    }
  }
}
```

There are 2 points to explain here:

- `getInfoSchema()`: Defined as a function because `dataSource` and `collection` are dynamic, determined by the clicked data table
- `useInfoProps()`: Used to handle dynamic properties of the `Info` component, and because it needs to be stored in the database, the value type here is string

`getInfoSchema()`: Returns the Info Schema
  - `type: 'void'`: Indicates no data
  - `x-decorator: 'DataBlockProvider'`: Data block provider for providing data. For more about DataBlockProvider, see [DataBlockProvider](https://client.docs.nocobase.com/core/data-block/data-block-provider)
  - `x-decorator-props`: Properties of `DataBlockProvider`
    - `dataSource`: Data source
    - `collection`: Data table
    - `action: 'list'`: Operation type, here it's `list`, to get the data list
  - `x-component: 'CardItem'`: [CardItem component](https://client.docs.nocobase.com/components/card-item), currently all blocks are wrapped in cards for styling, layout, and drag-and-drop functionality
  - `properties`: Child nodes
    - `info`: Info block

`useInfoProps()`: Dynamic properties of the Info component
  - [useCollection](https://client.docs.nocobase.com/core/data-source/collection-provider#usecollection): Gets the current data table, provided by [DataBlockProvider](https://client.docs.nocobase.com/core/data-block/data-block-provider)
  - [useDataBlockRequest](https://client.docs.nocobase.com/core/data-block/data-block-request-provider#usedatablockrequest): Gets the data block request, provided by [DataBlockProvider](https://client.docs.nocobase.com/core/data-block/data-block-provider)

The above Schema translates to the following React component:

```tsx | pure
<DataBlockProvider collection={collection} dataSource={dataSource} action='list'>
  <CardItem>
    <Info {...useInfoProps()} />
  </CardItem>
</DataBlockProvider>
```

#### 3.2 Registering Scope

We need to register `useInfoProps` in the system so that [x-use-component-props](/development/client/ui-schema/what-is-ui-schema#x-component-props-and-x-use-component-props) can find the corresponding scope.

```tsx | pure
import { Plugin } from '@nocobase/client';
import { Info } from './component';
import { useInfoProps } from './schema';

export class PluginInitializerBlockDataClient extends Plugin {
  async load() {
    this.app.addComponents({ Info })
    this.app.addScopes({ useInfoProps });
  }
}

export default PluginInitializerBlockDataClient;
```

For more about Scope, see [Globally Registering Component and Scope](/plugin-samples/component-and-scope/global)

#### 3.3 Verifying Block Schema

Like component verification, we can verify if the Schema meets the requirements through temporary page verification or documentation example verification. Here we use temporary page verification:

```tsx | pure
import React from 'react';
import { Plugin, SchemaComponent, SchemaComponentOptions } from '@nocobase/client';
import { Info } from './component';
import { getInfoSchema, useInfoProps } from './schema';

export class PluginInitializerBlockDataClient extends Plugin {
  async load() {
    // ...
    this.app.router.add('admin.info-schema', {
      path: '/admin/info-schema',
      Component: () => {
        return <>
          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <SchemaComponent schema={{ properties: { test1: getInfoSchema({ collection: 'users' }) } }} />
          </div>

          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <SchemaComponent schema={{ properties: { test2: getInfoSchema({ collection: 'roles' }) } }} />
          </div>
        </>
      }
    })
  }
}

export default PluginInitializerBlockDataClient;
```

- [SchemaComponentOptions](https://client.docs.nocobase.com/core/ui-schema/schema-component#schemacomponentoptions): Used to pass `components` and `scope` required by the Schema. For details, see [Locally Registering Component and Scope](/plugin-samples/component-and-scope/local)
- [SchemaComponent](https://client.docs.nocobase.com/core/ui-schema/schema-component#schemacomponent-1): Used to render Schema

Visit [http://localhost:13000/admin/info-schema](http://localhost:13000/admin/info-schema) to see the corresponding content on the test page.

![20240526170053](https://static-docs.nocobase.com/20240526170053.png)

After verification, delete the test page.

### 4. Defining Schema Initializer Item

Create `packages/plugins/@nocobase-sample/plugin-initializer-block-data/src/client/initializer/index.tsx`:

```tsx | pure
import React from 'react';
import { SchemaInitializerItemType, useSchemaInitializer } from '@nocobase/client'
import { CodeOutlined } from '@ant-design/icons';

import { getInfoSchema } from '../schema'
import { useT } from '../locale';
import { BlockName, BlockNameLowercase } from '../constants';

export const infoInitializerItem: SchemaInitializerItemType = {
  name: BlockNameLowercase,
  Component: 'DataBlockInitializer',
  useComponentProps() {
    const { insert } = useSchemaInitializer();
    const t = useT();
    return {
      title: t(BlockName),
      icon: <CodeOutlined />,
      componentType: BlockName,
      useTranslationHooks: useT,
      onCreateBlockSchema({ item }) {
        insert(getInfoSchema({ dataSource: item.dataSource, collection: item.name }))
      },
    };
  },
}
```

The core of implementing data blocks is DataBlockInitializer (documentation TODO).

`infoInitializerItem`:
  - `Component`: Unlike [Adding a Simple Block](/plugin-samples/schema-initializer/block-simple) which uses `type`, here we use `Component`. [Both definition methods](https://client.docs.nocobase.com/core/ui-schema/schema-initializer#two-ways-to-define-component-and-type) are valid
  - `useComponentProps`: Properties of the `DataBlockInitializer` component
    - `title`: Title
    - `icon`: Icon, more icons can be found at [Ant Design Icons](https://ant.design/components/icon/)
    - `componentType`: Component type, here it's `Info`
    - `onCreateBlockSchema`: Callback when a data table is clicked
      - `item`: Information about the clicked data table
        - `item.name`: Data table name
        - `item.dataSource`: Data source the data table belongs to
    - [useSchemaInitializer](https://client.docs.nocobase.com/core/ui-schema/schema-initializer#useschemainitializer): Provides methods for inserting Schema
  - `"x-toolbar": "BlockSchemaToolbar"`: `BlockSchemaToolbar` displays the current data table in the upper left corner, usually used with `DataBlockProvider`

For more details on defining Schema Initializer, see the [Schema Initializer](https://client.docs.nocobase.com/core/ui-schema/schema-initializer) documentation.

### 5. Implementing Schema Settings

#### 5.1 Defining Schema Settings

A complete Block also needs Schema Settings for configuring properties and operations. However, Schema Settings is not the focus of this example, so we only include a `remove` operation here.

Create `packages/plugins/@nocobase-sample/plugin-initializer-block-data/src/client/settings/index.ts`:

```ts
import { SchemaSettings } from "@nocobase/client";
import { BlockNameLowercase } from "../constants";

export const infoSettings = new SchemaSettings({
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
})
```

#### 5.2 Registering Schema Settings

```ts
import { Plugin } from '@nocobase/client';
import { infoSettings } from './settings';

export class PluginInitializerBlockDataClient extends Plugin {
  async load() {
    // ...
    this.app.schemaSettingsManager.add(infoSettings)
  }
}

export default PluginInitializerBlockDataClient;
```

#### 5.3 Using Schema Settings

Modify the `getInfoSchema` method in `packages/plugins/@nocobase-sample/plugin-initializer-block-data/src/client/schema/index.ts` to set `x-settings` to `infoSettings.name`.

```diff
+ import { infoSettings } from "../settings";

export function getInfoSchema({ dataSource = 'main', collection }) {
  return {
    type: 'void',
    'x-decorator': 'DataBlockProvider',
+   'x-settings': infoSettings.name,
    // ...
  }
}
```

### 6. Adding to Add Block

There are many `Add block` buttons in the system, but their **names are different**.

![img_v3_02b4_049b0a62-8e3b-420f-adaf-a6350d84840g](https://static-docs.nocobase.com/img_v3_02b4_049b0a62-8e3b-420f-adaf-a6350d84840g.jpg)

#### 6.1 Adding to Page-Level Add Block

If we need to add to the page-level `Add block`, we need to know the corresponding `name`. We can find the corresponding `name` through the TODO method.

TODO

From the image above, we can see that the page-level `Add block` corresponds to the name `page:addBlock`, and `Data Blocks` corresponds to the name `dataBlocks`.

Then modify `packages/plugins/@nocobase-sample/plugin-initializer-block-data/src/client/index.tsx`:

```tsx | pure
import { Plugin } from '@nocobase/client';
import { Info } from './component';
import { useInfoProps } from './schema';
import { infoSettings } from './settings';
import { infoInitializerItem } from './initializer';

export class PluginDataBlockInitializerClient extends Plugin {
  async load() {
    this.app.addComponents({ Info });
    this.app.addScopes({ useInfoProps });

    this.app.schemaSettingsManager.add(infoSettings);

    this.app.schemaInitializerManager.addItem('page:addBlock', `dataBlocks.${infoInitializerItem.name}`, infoInitializerItem)
  }
}

export default PluginDataBlockInitializerClient;
```

<video controls width='100%' src="https://static-docs.nocobase.com/20240526170424_rec_.mp4"></video>

#### 6.2 Adding to Popup Add Block

We not only need to add it to the page-level `Add block`, but also to the `Add block` in the `Table` block's `Add new` popup.

![img_v3_02b4_fc47fe3a-35a1-4186-999c-0b48e6e001dg](https://static-docs.nocobase.com/img_v3_02b4_fc47fe3a-35a1-4186-999c-0b48e6e001dg.jpg)

Following the method for getting the page-level `name`, the `Table` block's `Add block` `name` is `popup:addNew:addBlock`, and `Data Blocks` corresponds to the name `dataBlocks`.

Then modify `packages/plugins/@nocobase-sample/plugin-initializer-block-data/src/client/index.tsx`:

```diff
import { Plugin } from '@nocobase/client';
import { Plugin } from '@nocobase/client';
import { Info } from './component';
import { useInfoProps } from './schema';
import { infoSettings } from './settings';
import { infoInitializerItem } from './initializer';

export class PluginDataBlockInitializerClient extends Plugin {
  async load() {
    this.app.addComponents({ Info });
    this.app.addScopes({ useInfoProps });

    this.app.schemaSettingsManager.add(infoSettings);

    this.app.schemaInitializerManager.addItem('page:addBlock', `dataBlocks.${infoInitializerItem.name}`, infoInitializerItem)
+   this.app.schemaInitializerManager.addItem('popup:addNew:addBlock', `dataBlocks.${infoInitializerItem.name}`, infoInitializerItem)
  }
}

export default PluginDataBlockInitializerClient;

```

![img_v3_02b4_7062bfab-5a7b-439c-b385-92c5704b6b3g](https://static-docs.nocobase.com/img_v3_02b4_7062bfab-5a7b-439c-b385-92c5704b6b3g.jpg)

#### 6.3 Adding to Mobile Add Block

> First, activate the mobile plugin. Refer to the [Activating Plugins](/welcome/getting-started/plugin#3-activate-the-plugin) documentation.

We can add it to the mobile `Add block`. The method for getting the `name` is not repeated here.

Then modify `packages/plugins/@nocobase-sample/plugin-initializer-block-data/src/client/index.tsx`:

```diff
import { Plugin } from '@nocobase/client';
import { Info } from './component';
import { useInfoProps } from './schema';
import { infoSettings } from './settings';
import { infoInitializerItem } from './initializer';

export class PluginDataBlockInitializerClient extends Plugin {
  async load() {
    this.app.addComponents({ Info });
    this.app.addScopes({ useInfoProps });

    this.app.schemaSettingsManager.add(infoSettings);

    this.app.schemaInitializerManager.addItem('page:addBlock', `dataBlocks.${infoInitializerItem.name}`, infoInitializerItem)
    this.app.schemaInitializerManager.addItem('popup:addNew:addBlock', `dataBlocks.${infoInitializerItem.name}`, infoInitializerItem)
+   this.app.schemaInitializerManager.addItem('mobilePage:addBlock', `dataBlocks.${infoInitializerItem.name}`, infoInitializerItem)
  }
}

export default PluginDataBlockInitializerClient;
```

If you need more `Add block` locations, you can continue adding them by knowing the corresponding `name`.

## Packaging and Uploading to Production Environment

Following the [Build and Package Plugin](/development/your-fisrt-plugin#build-and-package-the-plugin) documentation, we can package the plugin and upload it to the production environment.

If you cloned the source code, you need to run a full build first to build the plugin dependencies.

```bash
yarn build
```

If you used `create-nocobase-app` to create the project, you can run:

```bash
yarn build @nocobase-sample/plugin-initializer-block-data --tar
```

Then you will see the `storage/tar/@nocobase-sample/plugin-initializer-block-data.tar.gz` file, which can be installed through the [upload method](/welcome/getting-started/plugin).
