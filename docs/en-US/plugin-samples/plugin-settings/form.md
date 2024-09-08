# Form Configuration Page

## Scenario Description

The configuration interface is composed of a form.

## Example Description

Suppose we need to connect to a third-party map service and configure the map's `key` and `secret`. We can add a configuration page via a plugin to fill in this information.

The complete example code in this document can be found in [plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-settings-form).

## Initialize the Plugin

Following the [Writing Your First Plugin](/development/your-fisrt-plugin) document, if you don’t have a project yet, you can create one first. If you already have one or have cloned the source code, you can skip this step.

```bash
yarn create nocobase-app my-nocobase-app -d sqlite
cd my-nocobase-app
yarn install
yarn nocobase install
```

Then, initialize a plugin and add it to the system:

```bash
yarn pm create @nocobase-sample/plugin-settings-form
yarn pm enable @nocobase-sample/plugin-settings-form
```

Now, start the project:

```bash
yarn dev
```

After logging in, visit [http://localhost:13000/admin/pm/list/local/](http://localhost:13000/admin/pm/list/local/) to see that the plugin has been installed and enabled.

## Backend Implementation

### 1. Create the Database Table

The backend mainly involves creating a database table to store configuration information. For creating database tables, we need to be familiar with the following:

- [Tables and Fields](/development/server/collections)
- [Creating Tables](/development/server/collections/configure#在插件代码里定义)
- [Field Type](/development/server/collections/options#field-type)
- [defineCollection() API](/api/database#definecollection)
- [Collection API](/api/database/collection)

In this example, we create the `packages/plugins/@nocobase-sample/plugin-settings-form/src/server/collections/map-configuration.ts` file with the following content:

```ts
import { defineCollection } from '@nocobase/database';

export default defineCollection({
  name: 'SamplesMapConfiguration',
  fields: [
    {
      type: 'string',
      name: 'key',
    },
    {
      type: 'string',
      name: 'secret',
    },
  ],
});
```

As needed, we created a `SamplesMapConfiguration` database table containing two fields: `key` and `secret`, both of string type.

### 2. Execute the Update

We need to update the database with the defined table, which can be done with the following command:

```bash
yarn nocobase upgrade
```

![img_v3_02av_db5e9985-eb20-4420-a0b2-8a809ff05a5g](https://static-docs.nocobase.com/img_v3_02av_db5e9985-eb20-4420-a0b2-8a809ff05a5g.jpg)

## Frontend Implementation

### 1. Create the Plugin Configuration Page

We've already introduced the detailed steps for [Adding a Plugin Configuration Page (Single Route)](/plugin-samples/router/add-setting-page-single-route), so we won’t repeat them here.

We modify the `packages/plugins/@nocobase-sample/plugin-settings-form/src/client/index.tsx` file as follows:

```tsx | pure
import { Plugin } from '@nocobase/client';
// @ts-ignore
import { name } from '../../package.json';

export class PluginSettingsFormClient extends Plugin {
  async load() {
    this.app.pluginSettingsManager.add(name, {
      title: 'Plugin Settings Form',
      icon: 'FormOutlined',
      Component: () => 'TODO',
    });
  }
}

export default PluginSettingsFormClient;
```

Then, visit [http://localhost:13000/admin/settings/@nocobase-sample/plugin-settings-form](http://localhost:13000/admin/settings/@nocobase-sample/plugin-settings-form) to see the configuration page.

![img_v3_02av_c90b5767-97dd-4fef-8dd0-c7ff9a136a9g](https://static-docs.nocobase.com/img_v3_02av_c90b5767-97dd-4fef-8dd0-c7ff9a136a9g.jpg)

### 2. Define the Data Table Structure

Based on the Schema definition method, we first need to define the structure of the data table. To define the data table structure on the frontend, we need to understand the following concepts:

- [Tables and Fields](/development/server/collections#field-component)
- [Field Type](/development/server/collections/options#field-type)
- [Field Interface](/development/server/collections/options#field-interface)
- [UI Schema Protocol](/development/client/ui-schema/what-is-ui-schema)
- [Field Components](https://client.docs.nocobase.com/components)

We then create the `packages/plugins/@nocobase-sample/plugin-settings-form/src/client/PluginSettingsForm.tsx` file with the following content:

```ts
const mapConfigurationCollection = {
  name: 'SamplesMapConfiguration',
  filterTargetKey: 'id',
  fields: [
    {
      type: 'string',
      name: 'key',
      interface: 'input',
      uiSchema: {
        title: 'Title',
        required: true,
        'x-component': 'Input',
      },
    },
    {
      type: 'string',
      name: 'secret',
      interface: 'input',
      uiSchema: {
        title: 'Secret',
        required: true,
        'x-component': 'Input',
      },
    },
  ],
};
```

We've defined a `SamplesMapConfiguration` data table with two fields: `key` and `secret`. The `fields` are explained as follows:

- `type`: Since the values are strings, it is set to `string` and must match the backend field type.
- `name`: The field's name, which must match the backend field name.
- `interface`: Corresponding to the string value, it is set to `input`.
- `uiSchema`: Refers to the rendering of the frontend form components.
  - `title`: The title of the form field.
  - `required`: As it is mandatory, it is set to `true`.
  - `x-component`: The [Input component](https://client.docs.nocobase.com/components/input) is chosen for single-line text input.

### 3. Create Form Schema

For writing form schemas, the following concepts are important:

- [Form Component](https://client.docs.nocobase.com/components/form-v2)
- [CollectionField Component](https://client.docs.nocobase.com/core/data-source/collection-field)
- [CardItem Component](https://client.docs.nocobase.com/components/card-item)
- [Schema Protocol](/development/client/ui-schema/what-is-ui-schema)
- [DataBlockProvider Component](https://client.docs.nocobase.com/core/data-block/data-block-provider)
- [Action Component](https://client.docs.nocobase.com/components/action)

We continue to write the following in `packages/plugins/@nocobase-sample/plugin-settings-form/src/client/PluginSettingsForm.tsx`:

```ts
import { useMemo } from 'react';
import { App as AntdApp } from 'antd';
import { createForm } from '@formily/core';
import { useForm } from '@formily/react';
import { uid } from '@formily/shared';
import { ActionProps, ISchema, useCollection, useCollectionRecordData, useDataBlockResource } from '@nocobase/client';

const schema: ISchema = {
  type: 'void',
  name: uid(),
  'x-component': 'CardItem',
  'x-decorator': 'DataBlockProvider',
  'x-decorator-props': {
    collection: mapConfigurationCollection.name,
    action: 'get',
  },
  properties: {
    form: {
      type: 'void',
      'x-component': 'FormV2',
      'x-use-component-props': 'useFormBlockProps',
      properties: {
        key: {
          title: 'Key',
          'x-decorator': 'FormItem',
          'x-component': 'CollectionField',
        },
        secret: {
          title: 'Secret',
          'x-decorator': 'FormItem',
          'x-component': 'CollectionField',
        },
        footer: {
          type: 'void',
          'x-component': 'Action',
          title: 'Submit',
          'x-use-component-props': 'useSubmitActionProps',
        },
      },
    },
  },
};

const useFormBlockProps = () => {
  const recordData = useCollectionRecordData();
  const form = useMemo(
    () => createForm({
      initialValues: recordData,
    }),
    [recordData],
  );
  return {
    form,
  };
};

const useSubmitActionProps = (): ActionProps => {
  const form = useForm();
  const { message } = AntdApp.useApp();
  const collection = useCollection();
  const resource = useDataBlockResource();
  return {
    type: 'primary',
    htmlType: 'submit',
    async onClick() {
      await form.submit();
      const values = form.values;
      await resource.updateOrCreate({
        values,
        filterKeys: [collection.filterTargetKey],
      });
      message.success('Saved successfully!');
    },
  };
};
```

- [CardItem](https://client

.docs.nocobase.com/components/card-item): A card component that provides card-style layouts.
- [DataBlockProvider](https://client.docs.nocobase.com/core/data-block/data-block-provider): A component that provides data to child nodes, with the `collection` and `action` attributes since the form fetches single-row data.
- [FormV2](https://client.docs.nocobase.com/components/form-v2): A form component used to render the form.
- `useFormBlockProps`: Used to get the data block's attributes and pass them to the FormV2 component. For detailed examples, see FormV2 [Default values](https://client.docs.nocobase.com/components/form-v2#default-values).
- [CollectionField](https://client.docs.nocobase.com/core/data-source/collection-field): A data table field component used to read the UI Schema of the Collection and render it.
- [Action](https://client.docs.nocobase.com/components/action): An action button component used to submit the form.
- `useSubmitActionProps`: Used to get the attributes of the submit button.
  - [useCollection](/core/data-source/collection-provider): Used to get information about the data table.
  - [useDataBlockResource](/core/data-block/data-block-resource-provider): A hook provided by DataBlockProvider to access the data block's resources for CRUD operations.

### 4. Create the Form Component

To render the schema into a component, we need to understand the following concepts:

- [ExtendCollectionsProvider](https://client.docs.nocobase.com/core/data-source/extend-collections-provider) component to extend data tables.
- [SchemaComponent](https://client.docs.nocobase.com/core/ui-schema/schema-component) component to render forms.

We continue writing in `packages/plugins/@nocobase-sample/plugin-settings-form/src/client/PluginSettingsForm.tsx`:

```tsx | pure
import React from 'react';
import { ExtendCollectionsProvider, SchemaComponent } from '@nocobase/client';
export const PluginSettingsForm = () => {
  return (
    <ExtendCollectionsProvider collections={[mapConfigurationCollection]}>
      <SchemaComponent schema={schema} scope={{ useFormBlockProps, useSubmitActionProps }} />
    </ExtendCollectionsProvider>
  );
};
```

### 5. Register the Plugin Configuration Page

We modify the `packages/plugins/@nocobase-sample/plugin-settings-form/src/client/index.tsx` file as follows:

```diff
import { Plugin } from '@nocobase/client';
// @ts-ignore
import { name } from '../../package.json';
+ import { PluginSettingsForm } from './PluginSettingsForm'

export class PluginSettingFormClient extends Plugin {
  async load() {
    this.app.pluginSettingsManager.add(name, {
      title: 'Plugin Settings Form',
      icon: 'FormOutlined',
-     Component: () => 'TODO',
+     Component: PluginSettingsForm,
    });
  }
}

export default PluginSettingFormClient;
```

Now, visit [http://localhost:13000/admin/settings/@nocobase-sample/plugin-settings-form](http://localhost:13000/admin/settings/@nocobase-sample/plugin-settings-form) to see the configuration page.

<video width="100%" controls>
  <source src="https://static-docs.nocobase.com/20240517-182716.mp4" type="video/mp4">
</video>

### 6. Use Configuration Data Inside the Page

When using form data, there are two scenarios: using the data inside the page and using it globally. The difference is:

- Global usage: After updating the form data, it needs to be synchronized to the global state for real-time updates.
- Page-specific usage: Since the page will be automatically destroyed and created upon switching, there’s no need to synchronize the data.

In this step, we'll demonstrate using form data inside a page.

We create the `packages/plugins/@nocobase-sample/plugin-settings-form/src/client/PluginSettingsFormPage.tsx` file with the following content:

```tsx | pure
import { useRequest } from '@nocobase/client';
import React from 'react';

export const PluginSettingsFormPage = () => {
  const { data, loading } = useRequest<{ data?: { key: string; secret: string } }>({
    url: 'SamplesMapConfiguration:get',
  });

  if (loading) return null;

  return <pre>{JSON.stringify(data?.data, null, 2)}</pre>
}
```

Then we introduce the `PluginSettingsFormPage` component in the `PluginSettingsForm` component:

```tsx | pure
import { PluginSettingsFormPage } from './PluginSettingsFormPage'
// ...

export class PluginSettingFormClient extends Plugin {
  async load() {
    // ...

    this.app.router.add(`admin.${name}-page`, {
      path: '/admin/plugin-settings-form-page',
      Component: PluginSettingsFormPage,
    })
  }
}
```

Now, visit [http://localhost:13000/admin/plugin-settings-form-page](http://localhost:13000/admin/plugin-settings-form-page) to see the form data.

![img_v3_02av_70ade722-7069-4fc7-a2c3-c080f85ff30g](https://static-docs.nocobase.com/img_v3_02av_70ade722-7069-4fc7-a2c3-c080f85ff30g.jpg)

### 7. Use Configuration Data Globally

To use the data globally and ensure real-time updates, we need to use `Context` and NocoBase's [Provider](/development/client/providers) capabilities.

We create the `packages/plugins/@nocobase-sample/plugin-settings-form/src/client/PluginSettingsFormProvider.tsx` file with the following content:

```tsx | pure
import React, { createContext, FC } from 'react';
import { useRequest, UseRequestResult } from '@nocobase/client';

const PluginSettingsFormContext = createContext<UseRequestResult<{ data?: { key: string; secret: string } }>>(null as any);

export const PluginSettingsFormProvider: FC<{ children: React.ReactNode }> = ({children}) => {
  const request = useRequest<{ data?: { key: string; secret: string } }>({
    url: 'SamplesMapConfiguration:get',
  });

  console.log('PluginSettingsFormProvider', request.data?.data);

  return <PluginSettingsFormContext.Provider value={request}>{children}</PluginSettingsFormContext.Provider>;
}

export const usePluginSettingsFormRequest = () => {
  return React.useContext(PluginSettingsFormContext);
};
```

Then we modify the `packages/plugins/@nocobase-sample/plugin-settings-form/src/client/index.tsx` file to register it globally:

```ts
import { PluginSettingsFormProvider } from './PluginSettingsFormProvider'
// ...

export class PluginSettingFormClient extends Plugin {
  async load() {
    // ...
    this.app.addProvider(PluginSettingsFormProvider)
  }
}
```

After updating the form, we need to re-fetch the global data. We modify the `packages/plugins/@nocobase-sample/plugin-settings-form/src/client/PluginSettingsForm.tsx` file:

```diff
+ import { usePluginSettingsFormRequest } from './PluginSettingsFormProvider';

const useSubmitActionProps = (): ActionProps => {
  const form = useForm();
  const { message } = AntdApp.useApp();
  const collection = useCollection();
  const resource = useDataBlockResource();
+ const globalSettingsFormRequest = usePluginSettingsFormRequest();
  return {
    type: 'primary',
    htmlType: 'submit',
    async onClick() {
      await form.submit();
      const values = form.values;
      await resource.updateOrCreate({
        values,
        filterKeys: [collection.filterTargetKey],
      });
+     await globalSettingsFormRequest.runAsync();
      message.success('Saved successfully!');
    },
  };
};
```

<video width="100%" controls>
  <source src="https://static-docs.nocobase.com/20240517-182717.mp4" type="video/mp4">
</video>

## Packaging and Uploading to Production Environment

Following the [Build and Package Plugin](/development/your-fisrt-plugin#构建并打包插件) document, we can package the plugin and upload it to the production environment.

If you've cloned the source code, you need to perform a full build first to package the plugin's dependencies.

```bash
yarn build
```

If you used the `create-nocobase-app` to create the project, you can directly execute:

```bash
yarn build @nocobase-sample/plugin-settings-form --tar
```

Then you’ll see the `storage/tar/@nocobase-sample/plugin-settings-form.tar.gz` file, which can be installed by following the [uploading instructions](/welcome/getting-started/plugin).
