# Table Configuration Page

## Scenario Description

The configuration interface consists of a table that allows you to add, edit, and delete data.

## Example Description

Let’s assume we need to create an email notification plugin. This plugin can have multiple templates, and each template contains information such as the email subject and content. We need a configuration interface to manage these templates.

The complete example code for this document can be found in [plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-settings-table).

## Initialize the Plugin

Following the instructions in [Writing Your First Plugin](/development/your-first-plugin), if you don't have a project yet, you can create one first. If you already have a project or have cloned the source code, you can skip this step.

```bash
yarn create nocobase-app my-nocobase-app -d sqlite
cd my-nocobase-app
yarn install
yarn nocobase install
```

Next, initialize a plugin and add it to the system:

```bash
yarn pm create @nocobase-sample/plugin-settings-table
yarn pm enable @nocobase-sample/plugin-settings-table
```

Then, start the project:

```bash
yarn dev
```

After logging in, visit [http://localhost:13000/admin/pm/list/local/](http://localhost:13000/admin/pm/list/local/) to see the plugin installed and enabled.

## Backend Implementation

### 1. Create a Data Table

The backend mainly involves creating a data table to store configuration information. To create the data table, you'll need to familiarize yourself with the following concepts:

- [Tables and Fields](/development/server/collections)
- [Creating Tables](/development/server/collections/configure#defining-tables-in-plugin-code)
- [Field Type](/development/server/collections/options#field-type)
- [defineCollection() API](/api/database#definecollection)
- [Collection API](/api/database/collection)

For this example, we create the file `packages/plugins/@nocobase-sample/plugin-settings-table/src/server/collections/email-templates.ts` with the following content:

```ts
import { defineCollection } from '@nocobase/database';

export default defineCollection({
  name: 'samplesEmailTemplates',
  fields: [
    {
      type: 'string',
      name: 'subject',
    },
    {
      type: 'text',
      name: 'content',
    },
  ],
});
```

We created a `samplesEmailTemplates` data table with two fields: `subject` and `content`. Based on our needs, we used a single-line text field for `subject` and a rich text field for `content`.

- The `subject` field is of the single-line text type, so its type is set to `string`.
- The `content` field is of the long text type, so its type is set to `text`.

### 2. Apply the Update

We need to update the database with the new table definition. You can run the following command to apply the update:

```bash
yarn nocobase upgrade
```

![img_v3_02av_eb156d0e-9f25-4702-a5de-2bfa5cde84bg](https://static-docs.nocobase.com/img_v3_02av_eb156d0e-9f25-4702-a5de-2bfa5cde84bg.jpg)

## Frontend Implementation

### 1. Create the Plugin Configuration Page

In the previous [Adding a Plugin Configuration Page (Single Route)](/plugin-samples/router/add-setting-page-single-route) section, we explained this in detail. Here, we won’t repeat those instructions.

Modify the file `packages/plugins/@nocobase-sample/plugin-settings-table/src/client/index.tsx` with the following content:

```tsx | pure
import { Plugin } from '@nocobase/client';
// @ts-ignore
import { name } from '../../package.json';

export class PluginSettingsTableClient extends Plugin {
  async load() {
    this.app.pluginSettingsManager.add(name, {
      title: 'Plugin Settings Table',
      icon: 'TableOutlined',
      Component: () => 'TODO',
    });
  }
}

export default PluginSettingsTableClient;
```

Then, visit [http://localhost:13000/admin/settings/@nocobase-sample/plugin-settings-table](http://localhost:13000/admin/settings/@nocobase-sample/plugin-settings-table) to view the configuration page.

![img_v3_02av_c610403d-95d8-466a-a3d1-cfcab232057g](https://static-docs.nocobase.com/img_v3_02av_c610403d-95d8-466a-a3d1-cfcab232057g.jpg)

## Backend Functionality Implementation

### 1. Create a Data Table

The backend primarily involves creating a data table to store configuration information. For creating data tables, the following concepts need to be understood:

- [Data Tables and Fields](/development/server/collections)
- [Data Table Creation](/development/server/collections/configure#defining-in-plugin-code)
- [Field Type](/development/server/collections/options#field-type)
- [defineCollection() API](/api/database#definecollection)
- [Collection API](/api/database/collection)

In this example, we create a `packages/plugins/@nocobase-sample/plugin-settings-table/src/server/collections/email-templates.ts` file with the following content:

```ts
import { defineCollection } from '@nocobase/database';

export default defineCollection({
  name: 'samplesEmailTemplates',
  fields: [
    {
      type: 'string',
      name: 'subject',
    },
    {
      type: 'text',
      name: 'content',
    },
  ],
});
```

We create a `samplesEmailTemplates` data table with two fields: `subject` and `content`. The `subject` field is stored as single-line text, and the `content` field is stored as rich text, depending on the requirement.

- The `subject` field is of single-line text type, so the type is set to `string`.
- The `content` field is of rich text type, so the type is set to `text`.

### 2. Execute the Update

We also need to update the data table definition in the database. This can be done using the following command:

```bash
yarn nocobase upgrade
```

![img_v3_02av_eb156d0e-9f25-4702-a5de-2bfa5cde84bg](https://static-docs.nocobase.com/img_v3_02av_eb156d0e-9f25-4702-a5de-2bfa5cde84bg.jpg)

---

## Frontend Functionality Implementation

### 1. Create Plugin Configuration Page

We have already covered how to create a [Plugin Configuration Page (Single Route)](/plugin-samples/router/add-setting-page-single-route) in detail, so we won’t repeat it here.

We modify the `packages/plugins/@nocobase-sample/plugin-settings-table/src/client/index.tsx` file as follows:

```tsx | pure
import { Plugin } from '@nocobase/client';
// @ts-ignore
import { name } from '../../package.json';

export class PluginSettingsTableClient extends Plugin {
  async load() {
    this.app.pluginSettingsManager.add(name, {
      title: 'Plugin Settings Table',
      icon: 'TableOutlined',
      Component: () => 'TODO',
    });
  }
}

export default PluginSettingsTableClient;
```

Then, you can visit [http://localhost:13000/admin/settings/@nocobase-sample/plugin-settings-table](http://localhost:13000/admin/settings/@nocobase-sample/plugin-settings-table) to view the configuration page.

![img_v3_02av_c610403d-95d8-466a-a3d1-cfcab232057g](https://static-docs.nocobase.com/img_v3_02av_c610403d-95d8-466a-a3d1-cfcab232057g.jpg)

### 2. Define Data Table Structure

Using Schema-based writing, we first need to define the structure of the data table. To define the data table structure on the frontend, we need to understand the following concepts:

- [Data Tables and Fields](/development/server/collections#field-component)
- [Field Type](/development/server/collections/options#field-type)
- [Field Interface](/development/server/collections/options#field-interface)
- [UI Schema Protocol](/development/client/ui-schema/what-is-ui-schema)
- [Field Components](https://client.docs.nocobase.com/components)

Next, we create a `packages/plugins/@nocobase-sample/plugin-settings-table/src/client/PluginSettingsTable.tsx` file with the following content:

```ts
const emailTemplatesCollection = {
  name: 'samplesEmailTemplates',
  filterTargetKey: 'id',
  fields: [
    {
      type: 'string',
      name: 'subject',
      interface: 'input',
      uiSchema: {
        title: 'Subject',
        required: true,
        'x-component': 'Input',
      },
    },
    {
      type: 'text',
      name: 'content',
      interface: 'richText',
      uiSchema: {
        title: 'Content',
        required: true,
        'x-component': 'RichText',
      },
    },
  ],
};
```

We define a `samplesEmailTemplates` data table with two fields: `subject` and `content`. The following are explanations of the `fields`:

- `type`: The value needs to match the type of the data table field in the backend.
- `name`: The field name, which should match the name of the corresponding field in the backend.
- `interface`
  - `subject` field: Single-line text, so the value is `input`.
  - `content` field: Rich text, so the value is `richText`.
- `uiSchema`: Corresponds to the rendering of frontend form items.
  - `type`: Both single-line and rich text fields are of string type, so the value is `string`.
  - `title`: The title of the form item.
  - `required`: This is a required field, so the value is `true`.
  - `x-component`:
    - `subject` field: Uses the [Input Component](https://client.docs.nocobase.com/components/input).
    - `content` field: Uses the [RichText Component](https://client.docs.nocobase.com/components/rich-text).

### 3. Create Table Schema

For creating form Schema, the following knowledge is needed:

- [Table Component](https://client.docs.nocobase.com/components/table-v2)
- [CollectionField Component](https://client.docs.nocobase.com/core/data-source/collection-field)
- [CardItem Component](https://client.docs.nocobase.com/components/card-item)
- [Schema Protocol](/development/client/ui-schema/what-is-ui-schema)
- [DataBlockProvider Component](https://client.docs.nocobase.com/core/data-block/data-block-provider)

We refer to the [Extends Collection Table Example](https://client.docs.nocobase.com/components/table-v2#extends-collection) and continue to modify the `packages/plugins/@nocobase-sample/plugin-settings-table/src/client/PluginSettingsTable.tsx` file as follows:

```tsx | pure
import { ISchema } from '@nocobase/client';
import { uid } from '@formily/shared'

const schema: ISchema = {
  type: 'void',
  name: uid(),
  'x-component': 'CardItem',
  'x-decorator': 'TableBlockProvider',
  'x-decorator-props': {
    collection: emailTemplatesCollection.name,
    action: 'list',
    showIndex: true,
    dragSort: false,
  },
  properties: {
    table: {
      type: 'array',
      'x-component': 'TableV2',
      'x-use-component-props': 'useTableBlockProps',
      'x-component-props': {
        rowKey: 'id',
        rowSelection: {
          type: 'checkbox',
        },
      },
      properties: {
        subject: {
          type: 'void',
          title: 'Subject',
          'x-component': 'TableV2.Column',
          properties: {
            subject: {
              type: 'string',
              'x-component': 'CollectionField',
              'x-pattern': 'readPretty',
            },
          },
        },
        content: {
          type: 'void',
          title: 'Content',
          'x-component': 'TableV2.Column',
          properties: {
            content: {
              type: 'string',
              'x-component': 'CollectionField',
              'x-pattern': 'readPretty',
            },
          },
        },
      },
    },
  },
}
```

- [CardItem](https://client.docs.nocobase.com/components/card-item): A card component that provides card-style display.
- [DataBlockProvider](https://client.docs.nocobase.com/core/data-block/data-block-provider): A data block component used to provide data to child nodes. Since this is a form that fetches single-line data, we provide `collection` and `action` properties.
- [TableV2](https://client.docs.nocobase.com/components/table-v2): A table component used to render forms.
- `useTableBlockProps`: Used to get the properties of the data block and pass them to the TableV2 component, usually without modification.
- `TableV2.Column`: A Table column component for rendering table columns.
- [CollectionField](https://client.docs.nocobase.com/core/data-source/collection-field): A data table field component used to read the `UI Schema` from the Collection and render it.

### 4. Create Table Component

To render the Schema as a component, we need to understand the following:

- [ExtendCollectionsProvider](https://client.docs.nocobase.com/core/data-source/extend-collections-provider) component for extending data tables.
- [SchemaComponent](https://client.docs.nocobase.com/core/ui-schema/schema-component) component for rendering forms.

We continue writing in the `packages/plugins/@nocobase-sample/plugin-settings-table/src/client/PluginSettingsTable.tsx` file:



```tsx | pure
import React from 'react';
import { ExtendCollectionsProvider, SchemaComponent } from '@nocobase/client';
export const PluginSettingsTable = () => {
  return (
    <ExtendCollectionsProvider collections={[emailTemplatesCollection]}>
      <SchemaComponent schema={schema} scope={{ useFormBlockProps, useSubmitActionProps }} />
    </ExtendCollectionsProvider>
  );
};
```

### 5. Register Plugin Configuration Page

We modify the `packages/plugins/@nocobase-sample/plugin-settings-table/src/client/index.tsx` file as follows:

```diff
import { Plugin } from '@nocobase/client';
// @ts-ignore
import { name } from '../../package.json';
+ import { PluginSettingsTable } from './PluginSettingsTable'

export class PluginSettingFormClient extends Plugin {
  async load() {
    this.app.pluginSettingsManager.add(name, {
      title: 'Plugin Settings Form',
      icon: 'FormOutlined',
-     Component: () => 'TODO',
+     Component: PluginSettingsTable,
    });
  }
}

export default PluginSettingFormClient;
```

Then, you can visit [http://localhost:13000/admin/settings/@nocobase-sample/plugin-settings-table](http://localhost:13000/admin/settings/@nocobase-sample/plugin-settings-table) to view the configuration page.

![img_v3_02av_97fd272d-1333-4faf-9ce1-6363c6a049dg](https://static-docs.nocobase.com/img_v3_02av_97fd272d-1333-4faf-9ce1-6363c6a049dg.jpg)

### 6. Implementing the "Add New" Feature

Currently, our Table lacks any data, so we need to add the "Add New" functionality. To achieve this, please refer to the following documentation:

- Table component [With ActionToolbar Example](https://client.docs.nocobase.com/components/table-v2)
- [Form Component](https://client.docs.nocobase.com/components/form-v2)
- [Action Component](https://client.docs.nocobase.com/components/action)

We will continue editing the file `packages/plugins/@nocobase-sample/plugin-settings-table/src/client/PluginSettingsTable.tsx`:

```tsx | pure
import React from 'react';
import { ISchema, useActionContext, useDataBlockRequest, useDataBlockResource } from '@nocobase/client';
import { App as AntdApp } from 'antd';
import { useForm } from '@formily/react';

const schema: ISchema = {
  // ...
  properties: {
    actions: {
      type: 'void',
      'x-component': 'ActionBar',
      'x-component-props': {
        style: {
          marginBottom: 20,
        },
      },
      properties: {
        add: {
          type: 'void',
          'x-component': 'Action',
          title: 'Add New',
          'x-align': 'right',
          'x-component-props': {
            type: 'primary',
          },
          properties: {
            drawer: {
              type: 'void',
              'x-component': 'Action.Drawer',
              title: 'Add new',
              properties: {
                form: {
                  type: 'void',
                  'x-component': 'FormV2',
                  properties: {
                    subject: {
                      'x-decorator': 'FormItem',
                      'x-component': 'CollectionField',
                    },
                    content: {
                      'x-decorator': 'FormItem',
                      'x-component': 'CollectionField',
                    },
                    footer: {
                      type: 'void',
                      'x-component': 'Action.Drawer.Footer',
                      properties: {
                        submit: {
                          title: 'Submit',
                          'x-component': 'Action',
                          'x-use-component-props': 'useSubmitActionProps',
                        },
                      }
                    }
                  },
                },
              },
            },
          },
        },
      }
    },

    table: {
      // ...
    }
  }
}


const useSubmitActionProps = () => {
  const { setVisible } = useActionContext();
  const { message } = AntdApp.useApp();
  const form = useForm();
  const resource = useDataBlockResource();
  const { runAsync } = useDataBlockRequest();

  return {
    type: 'primary',
    async onClick() {
      await form.submit();
      const values = form.values;
      await resource.create({ values })
      await runAsync()
      message.success('Saved successfully');
      setVisible(false);
    },
  };
};
```

In this context:

- [ActionBar](https://client.docs.nocobase.com/components/action#actionbar): Provides the layout for action buttons.
- [Action](https://client.docs.nocobase.com/components/action): The "Add New" button.
- [Action.Drawer](https://client.docs.nocobase.com/components/action#actiondrawer): Opens a modal window when clicked.
- [FormV2](https://client.docs.nocobase.com/components/form-v2): The form component.
- [FormItem](https://client.docs.nocobase.com/components/form-v2#formitem): The form item component.
- [Action.Drawer.Footer](https://client.docs.nocobase.com/components/action#actiondrawerfooter): The footer of the modal window.
- [useSubmitActionProps](https://client.docs.nocobase.com/core/data-block/use-data-block-request#use-submit-action-props): Used for submitting the form.
  - `useActionContext()`: Retrieves the Action context.
  - [useDataBlockResource()](https://client.docs.nocobase.com/core/data-block/data-block-resource-provider): Obtains the `resource` provided by `TableBlockProvider`, used for CRUD operations on data.
  - [useDataBlockRequest()](https://client.docs.nocobase.com/core/data-block/data-block-request-provider): The request object for the Table block; calling `runAsync` will re-fetch data, thus refreshing the Table.

Next, we need to add `useSubmitActionProps` to the context:

```diff
export const PluginSettingsTable = () => {
  return (
    <ExtendCollectionsProvider collections={[emailTemplatesCollection]}>
-     <SchemaComponent schema={schema} />
+     <SchemaComponent schema={schema} scope={{ useSubmitActionProps }} />
    </ExtendCollectionsProvider>
  );
};
```

<video width="100%" controls>
  <source src="https://static-docs.nocobase.com/20240517-190400.mp4" type="video/mp4">
</video>

### 7. Implementing the Edit Feature

The edit feature is similar to the "Add New" functionality, except we need to add an edit button within the Table and modify data through a modal window. To implement the edit feature, please refer to the following documentation:

- Table component [View Or Edit Record](https://client.docs.nocobase.com/components/table-v2#view-or-edit-record)
- Form component [Default Values](https://client.docs.nocobase.com/components/form-v2#default-values)
- [useCollectionRecord()](https://client.docs.nocobase.com/core/data-block/collection-record-provider): Used to retrieve data of the current row

We will continue editing the file `packages/plugins/@nocobase-sample/plugin-settings-table/src/client/PluginSettingsTable.tsx`:

```tsx | pure
import { useCollectionRecordData } from '@nocobase/client';
import { useMemo } from 'react';

const useEditFormProps = () => {
  const recordData = useCollectionRecordData();
  const form = useMemo(
    () =>
      createForm({
        values: recordData,
      }),
    [],
  );

  return {
    form,
  };
}

const schema: ISchema = {
  // ...
  properties: {
    // ...
    table: {
      // ...
      properties: {
        // ...
        actions: {
          type: 'void',
          title: 'Actions',
          'x-component': 'TableV2.Column',
          properties: {
            actions: {
              type: 'void',
              'x-component': 'Space',
              'x-component-props': {
                split: '|',
              },
              properties: {
                edit: {
                  type: 'void',
                  title: 'Edit',
                  'x-component': 'Action.Link',
                  'x-component-props': {
                    openMode: 'drawer',
                    icon: 'EditOutlined',
                  },
                  properties: {
                    drawer: {
                      type: 'void',
                      title: 'Edit',
                      'x-component': 'Action.Drawer',
                      properties: {
                        form: {
                          type: 'void',
                          'x-component': 'FormV2',
                          'x-use-component-props': 'useEditFormProps',
                          properties: {
                            subject: {
                              'x-decorator': 'FormItem',
                              'x-component': 'CollectionField',
                            },
                            content: {
                              'x-decorator': 'FormItem',
                              'x-component': 'CollectionField',
                            },
                            footer: {
                              type: 'void',
                              'x-component': 'Action.Drawer.Footer',
                              properties: {
                                submit: {
                                  title: 'Submit',
                                  'x-component': 'Action',
                                  'x-use-component-props': 'useSubmitActionProps',
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            }
          },
        }
      }
    }
  }
}
```

`Table` passes each row's data to child nodes via the [CollectionRecordProvider](https://client.docs.nocobase.com/core/data-block/collection-record-provider).

In our `useEditFormProps`, we use `useCollectionRecordData()` to fetch the current row's data, then create a form using `createForm`, passing the current row's data as the default values.

Next, we modify the logic of `useSubmitActionProps()` to support both creation and editing:

```diff
const useSubmitActionProps = () => {
  // ...
+ const collection = useCollection();
  return {
    type: 'primary',
    async onClick() {
      await form.submit();
      const values = form.values;
-     await resource.create({ values })
+     if (values[collection.filterTargetKey]) {
+       await resource.update({
+         values,
+         filterByTk: values[collection.filterTargetKey],
+       });
+     } else {
+       await resource.create({
+         values,
+       });
+     }
      // ...
    },
  };
};
```

- [useCollection](https://client.docs.nocobase.com/core/data-source/collection-provider#usecollection): The data table object provided by DataBlockProvider.

Finally, register `useEditFormProps` into the context:

```diff
export const PluginSettingsTable = () => {
  return (
    <ExtendCollectionsProvider collections={[emailTemplatesCollection]}>
-     <SchemaComponent schema={schema} scope={{ useSubmitActionProps }} />
+     <SchemaComponent schema={schema} scope={{ useSubmitActionProps, useEditFormProps }} />
    </ExtendCollectionsProvider>
  );
};
```

<video width="100%" controls>
  <source src="https://static-docs.nocobase.com/20240517-190849.mp4" type="video/mp4">
</video>

### 8. Implementing the Delete Functionality

The delete functionality is relatively simple. We just need to add a `Delete` button in the Action column, and upon clicking it, call `resource.destroy()` followed by refreshing the Table data.

- Action [Confirm](https://client.docs.nocobase.com/components/action#confirm)

We continue by writing the following in the `packages/plugins/@nocobase-sample/plugin-settings-table/src/client/PluginSettingsTable.tsx` file:

```ts
import { ActionProps } from '@nocobase/client';

function useDeleteActionProps(): ActionProps {
  const { message } = AntdApp.useApp();
  const record = useCollectionRecordData();
  const resource = useDataBlockResource();
  const collection = useCollection();
  const { runAsync } = useDataBlockRequest();
  return {
    confirm: {
      title: 'Delete',
      content: 'Are you sure you want to delete it?',
    },
    async onClick() {
      await resource.destroy({
        filterByTk: record[collection.filterTargetKey]
      });
      await runAsync();
      message.success('Deleted!');
    },
  };
}

const schema: ISchema = {
  // ...
  properties: {
    // ...
    table: {
      // ...
      properties: {
        // ...
        actions: {
          // ...
          properties: {
            // ...
            delete: {
              type: 'void',
              title: 'Delete',
              'x-component': 'Action.Link',
              'x-use-component-props': 'useDeleteActionProps',
            }
          }
        }
      }
    }
  }
}
```

Then, we register `useDeleteActionProps` into the context.


```diff
export const PluginSettingsTable = () => {
  return (
    <ExtendCollectionsProvider collections={[emailTemplatesCollection]}>
-     <SchemaComponent schema={schema} scope={{ useSubmitActionProps, useEditFormProps }} />
+     <SchemaComponent schema={schema} scope={{ useSubmitActionProps, useEditFormProps, useDeleteActionProps }} />
    </ExtendCollectionsProvider>
  );
};
```

<video width="100%" controls>
  <source src="https://static-docs.nocobase.com/20240517-191110.mp4" type="video/mp4">
</video>

### 9. Using Configuration Data Within a Page

There are two scenarios for using form data: one is using it within the page, and the other is using it globally. The difference between the two is:

- **Global Usage**: When form data is updated, it needs to be synchronized to the global state to achieve real-time updates.
- **Page-Specific Usage**: Since the page will automatically be destroyed and recreated during navigation, there's no need to synchronize the data.

In this step, we will focus on using form data within a page.

We create the `packages/plugins/@nocobase-sample/plugin-settings-table/src/client/PluginSettingsTablePage.tsx` file with the following content:

```tsx | pure
import { useRequest } from '@nocobase/client';
import React from 'react';

export const PluginSettingsTablePage = () => {
  const { data, loading } = useRequest<{ data?: any[] }>({
    url: 'samplesEmailTemplates:list',
  });

  if (loading) return null;

  return <pre>{JSON.stringify(data?.data, null, 2)}</pre>
}
```

Then, we import the `PluginSettingsTablePage` component into the `PluginSettingsTable` component:

```tsx | pure
import { PluginSettingsTablePage } from './PluginSettingsTablePage'
// ...

export class PluginSettingFormClient extends Plugin {
  async load() {
    // ...

    this.app.router.add(`admin.${name}-page`, {
      path: '/admin/plugin-settings-table-page',
      Component: PluginSettingsTablePage,
    })
  }
}
```

Afterward, we can visit [http://localhost:13000/admin/plugin-settings-table-page](http://localhost:13000/admin/plugin-settings-table-page) to see our form data.

![img_v3_02av_753dd9f1-9e8c-43c5-a1c6-1fb217844cag](https://static-docs.nocobase.com/img_v3_02av_753dd9f1-9e8c-43c5-a1c6-1fb217844cag.jpg)

### 10. Global Usage of Configuration Data

To ensure global use and real-time refresh, you will need to use `Context` along with NocoBase [Provider](/development/client/providers) capabilities.

We create the file `packages/plugins/@nocobase-sample/plugin-settings-table/src/client/PluginSettingsTableProvider.tsx` with the following content:

```tsx | pure
import React, { createContext, FC } from 'react';
import { useRequest, UseRequestResult } from '@nocobase/client';

const PluginSettingsTableContext = createContext<UseRequestResult<{ data?: any[] }>>(null as any);

export const PluginSettingsTableProvider: FC<{ children: React.ReactNode }> = ({children}) => {
  const request = useRequest<{ data?: any[] }>({
    url: 'samplesEmailTemplates:list',
  });

  console.log('PluginSettingsTableProvider', request.data?.data);

  return <PluginSettingsTableContext.Provider value={request}>{children}</PluginSettingsTableContext.Provider>;
}

export const usePluginSettingsTableRequest = () => {
  return React.useContext(PluginSettingsTableContext);
};
```

Next, modify the `packages/plugins/@nocobase-sample/plugin-settings-table/src/client/index.tsx` file to register it globally:

```ts
import { PluginSettingsTableProvider } from './PluginSettingsTableProvider'
// ...

export class PluginSettingFormClient extends Plugin {
  async load() {
    // ...
    this.app.addProvider(PluginSettingsTableProvider)
  }
}
```

After updating the form, we need to retrieve the global data again. Modify `packages/plugins/@nocobase-sample/plugin-settings-table/src/client/PluginSettingsTable.tsx`:

```diff
import { usePluginSettingsTableRequest } from './PluginSettingsTableProvider';

// ...

const useSubmitActionProps = (): ActionProps => {
  // ...
+ const globalSettingsTableRequest = usePluginSettingsTableRequest();
  return {
    type: 'primary',
    htmlType: 'submit',
    async onClick() {
      // ...
+     await globalSettingsTableRequest.runAsync();
      message.success('Saved successfully!');
    },
  };
};

function useDeleteActionProps(): ActionProps {
+ const globalSettingsTableRequest = usePluginSettingsTableRequest();

  return {
    // ...
    async onClick() {
      // ...
+     await globalSettingsTableRequest.runAsync();
      message.success('Deleted!');
    }
  }
}
```

<video width="100%" controls>
  <source src="https://static-docs.nocobase.com/20240517-191452.mp4" type="video/mp4">
</video>

### Packaging and Uploading to Production Environment

Following the [Build and Package Plugin](/development/your-fisrt-plugin#build-and-package-plugin) documentation, we can package the plugin and upload it to the production environment.

If you cloned the source code, you need to perform a full build first to ensure the plugin dependencies are built properly.

```bash
yarn build
```

If your project was created using `create-nocobase-app`, you can directly run:

```bash
yarn build @nocobase-sample/plugin-settings-table --tar
```

This will generate the file `storage/tar/@nocobase-sample/plugin-settings-table.tar.gz`, which can be installed via the [upload method](/welcome/getting-started/plugin).
