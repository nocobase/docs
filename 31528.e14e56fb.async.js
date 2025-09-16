"use strict";(self.webpackChunknocobase_docs=self.webpackChunknocobase_docs||[]).push([[31528],{31528:function(t,e,n){n.r(e),n.d(e,{texts:function(){return a}});const a=[{value:"The configuration interface consists of a table that allows you to add, edit, and delete data.",paraId:0,tocIndex:1},{value:"Let\u2019s assume we need to create an email notification plugin. This plugin can have multiple templates, and each template contains information such as the email subject and content. We need a configuration interface to manage these templates.",paraId:1,tocIndex:2},{value:"The complete example code for this document can be found in ",paraId:2,tocIndex:2},{value:"plugin-samples",paraId:2,tocIndex:2},{value:".",paraId:2,tocIndex:2},{value:"Following the instructions in ",paraId:3,tocIndex:3},{value:"Writing Your First Plugin",paraId:4,tocIndex:3},{value:", if you don't have a project yet, you can create one first. If you already have a project or have cloned the source code, you can skip this step.",paraId:3,tocIndex:3},{value:`yarn create nocobase-app my-nocobase-app -d postgres
cd my-nocobase-app
yarn install
yarn nocobase install
`,paraId:5,tocIndex:3},{value:"Next, initialize a plugin and add it to the system:",paraId:6,tocIndex:3},{value:`yarn pm create @nocobase-sample/plugin-settings-table
yarn pm enable @nocobase-sample/plugin-settings-table
`,paraId:7,tocIndex:3},{value:"Then, start the project:",paraId:8,tocIndex:3},{value:`yarn dev
`,paraId:9,tocIndex:3},{value:"After logging in, visit ",paraId:10,tocIndex:3},{value:"http://localhost:13000/admin/pm/list/local/",paraId:10,tocIndex:3},{value:" to see the plugin installed and enabled.",paraId:10,tocIndex:3},{value:"The backend mainly involves creating a data table to store configuration information. To create the data table, you'll need to familiarize yourself with the following concepts:",paraId:11,tocIndex:5},{value:"Tables and Fields",paraId:12,tocIndex:5},{value:"Creating Tables",paraId:13,tocIndex:5},{value:"Field Type",paraId:14,tocIndex:5},{value:"defineCollection() API",paraId:15,tocIndex:5},{value:"Collection API",paraId:16,tocIndex:5},{value:"For this example, we create the file ",paraId:17,tocIndex:5},{value:"packages/plugins/@nocobase-sample/plugin-settings-table/src/server/collections/email-templates.ts",paraId:17,tocIndex:5},{value:" with the following content:",paraId:17,tocIndex:5},{value:`import { defineCollection } from '@nocobase/database';

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
`,paraId:18,tocIndex:5},{value:"We created a ",paraId:19,tocIndex:5},{value:"samplesEmailTemplates",paraId:19,tocIndex:5},{value:" data table with two fields: ",paraId:19,tocIndex:5},{value:"subject",paraId:19,tocIndex:5},{value:" and ",paraId:19,tocIndex:5},{value:"content",paraId:19,tocIndex:5},{value:". Based on our needs, we used a single-line text field for ",paraId:19,tocIndex:5},{value:"subject",paraId:19,tocIndex:5},{value:" and a rich text field for ",paraId:19,tocIndex:5},{value:"content",paraId:19,tocIndex:5},{value:".",paraId:19,tocIndex:5},{value:"The ",paraId:20,tocIndex:5},{value:"subject",paraId:20,tocIndex:5},{value:" field is of the single-line text type, so its type is set to ",paraId:20,tocIndex:5},{value:"string",paraId:20,tocIndex:5},{value:".",paraId:20,tocIndex:5},{value:"The ",paraId:20,tocIndex:5},{value:"content",paraId:20,tocIndex:5},{value:" field is of the long text type, so its type is set to ",paraId:20,tocIndex:5},{value:"text",paraId:20,tocIndex:5},{value:".",paraId:20,tocIndex:5},{value:"We need to update the database with the new table definition. You can run the following command to apply the update:",paraId:21,tocIndex:6},{value:`yarn nocobase upgrade
`,paraId:22,tocIndex:6},{value:"In the previous ",paraId:23,tocIndex:8},{value:"Adding a Plugin Configuration Page (Single Route)",paraId:24,tocIndex:8},{value:" section, we explained this in detail. Here, we won\u2019t repeat those instructions.",paraId:23,tocIndex:8},{value:"Modify the file ",paraId:25,tocIndex:8},{value:"packages/plugins/@nocobase-sample/plugin-settings-table/src/client/index.tsx",paraId:25,tocIndex:8},{value:" with the following content:",paraId:25,tocIndex:8},{value:`import { Plugin } from '@nocobase/client';
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
`,paraId:26,tocIndex:8},{value:"Then, visit ",paraId:27,tocIndex:8},{value:"http://localhost:13000/admin/settings/@nocobase-sample/plugin-settings-table",paraId:27,tocIndex:8},{value:" to view the configuration page.",paraId:27,tocIndex:8},{value:"The backend primarily involves creating a data table to store configuration information. For creating data tables, the following concepts need to be understood:",paraId:28,tocIndex:10},{value:"Data Tables and Fields",paraId:29,tocIndex:10},{value:"Data Table Creation",paraId:30,tocIndex:10},{value:"Field Type",paraId:31,tocIndex:10},{value:"defineCollection() API",paraId:32,tocIndex:10},{value:"Collection API",paraId:33,tocIndex:10},{value:"In this example, we create a ",paraId:34,tocIndex:10},{value:"packages/plugins/@nocobase-sample/plugin-settings-table/src/server/collections/email-templates.ts",paraId:34,tocIndex:10},{value:" file with the following content:",paraId:34,tocIndex:10},{value:`import { defineCollection } from '@nocobase/database';

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
`,paraId:35,tocIndex:10},{value:"We create a ",paraId:36,tocIndex:10},{value:"samplesEmailTemplates",paraId:36,tocIndex:10},{value:" data table with two fields: ",paraId:36,tocIndex:10},{value:"subject",paraId:36,tocIndex:10},{value:" and ",paraId:36,tocIndex:10},{value:"content",paraId:36,tocIndex:10},{value:". The ",paraId:36,tocIndex:10},{value:"subject",paraId:36,tocIndex:10},{value:" field is stored as single-line text, and the ",paraId:36,tocIndex:10},{value:"content",paraId:36,tocIndex:10},{value:" field is stored as rich text, depending on the requirement.",paraId:36,tocIndex:10},{value:"The ",paraId:37,tocIndex:10},{value:"subject",paraId:37,tocIndex:10},{value:" field is of single-line text type, so the type is set to ",paraId:37,tocIndex:10},{value:"string",paraId:37,tocIndex:10},{value:".",paraId:37,tocIndex:10},{value:"The ",paraId:37,tocIndex:10},{value:"content",paraId:37,tocIndex:10},{value:" field is of rich text type, so the type is set to ",paraId:37,tocIndex:10},{value:"text",paraId:37,tocIndex:10},{value:".",paraId:37,tocIndex:10},{value:"We also need to update the data table definition in the database. This can be done using the following command:",paraId:38,tocIndex:11},{value:`yarn nocobase upgrade
`,paraId:39,tocIndex:11},{value:"We have already covered how to create a ",paraId:40,tocIndex:13},{value:"Plugin Configuration Page (Single Route)",paraId:41,tocIndex:13},{value:" in detail, so we won\u2019t repeat it here.",paraId:40,tocIndex:13},{value:"We modify the ",paraId:42,tocIndex:13},{value:"packages/plugins/@nocobase-sample/plugin-settings-table/src/client/index.tsx",paraId:42,tocIndex:13},{value:" file as follows:",paraId:42,tocIndex:13},{value:`import { Plugin } from '@nocobase/client';
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
`,paraId:43,tocIndex:13},{value:"Then, you can visit ",paraId:44,tocIndex:13},{value:"http://localhost:13000/admin/settings/@nocobase-sample/plugin-settings-table",paraId:44,tocIndex:13},{value:" to view the configuration page.",paraId:44,tocIndex:13},{value:"Using Schema-based writing, we first need to define the structure of the data table. To define the data table structure on the frontend, we need to understand the following concepts:",paraId:45,tocIndex:14},{value:"Data Tables and Fields",paraId:46,tocIndex:14},{value:"Field Type",paraId:47,tocIndex:14},{value:"Field Interface",paraId:48,tocIndex:14},{value:"UI Schema Protocol",paraId:49,tocIndex:14},{value:"Field Components",paraId:50,tocIndex:14},{value:"Next, we create a ",paraId:51,tocIndex:14},{value:"packages/plugins/@nocobase-sample/plugin-settings-table/src/client/PluginSettingsTable.tsx",paraId:51,tocIndex:14},{value:" file with the following content:",paraId:51,tocIndex:14},{value:`const emailTemplatesCollection = {
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
`,paraId:52,tocIndex:14},{value:"We define a ",paraId:53,tocIndex:14},{value:"samplesEmailTemplates",paraId:53,tocIndex:14},{value:" data table with two fields: ",paraId:53,tocIndex:14},{value:"subject",paraId:53,tocIndex:14},{value:" and ",paraId:53,tocIndex:14},{value:"content",paraId:53,tocIndex:14},{value:". The following are explanations of the ",paraId:53,tocIndex:14},{value:"fields",paraId:53,tocIndex:14},{value:":",paraId:53,tocIndex:14},{value:"type",paraId:54,tocIndex:14},{value:": The value needs to match the type of the data table field in the backend.",paraId:54,tocIndex:14},{value:"name",paraId:54,tocIndex:14},{value:": The field name, which should match the name of the corresponding field in the backend.",paraId:54,tocIndex:14},{value:"interface",paraId:54,tocIndex:14},{value:"subject",paraId:55,tocIndex:14},{value:" field: Single-line text, so the value is ",paraId:55,tocIndex:14},{value:"input",paraId:55,tocIndex:14},{value:".",paraId:55,tocIndex:14},{value:"content",paraId:55,tocIndex:14},{value:" field: Rich text, so the value is ",paraId:55,tocIndex:14},{value:"richText",paraId:55,tocIndex:14},{value:".",paraId:55,tocIndex:14},{value:"uiSchema",paraId:54,tocIndex:14},{value:`: Corresponds to the rendering of frontend form items.
`,paraId:54,tocIndex:14},{value:"type",paraId:56,tocIndex:14},{value:": Both single-line and rich text fields are of string type, so the value is ",paraId:56,tocIndex:14},{value:"string",paraId:56,tocIndex:14},{value:".",paraId:56,tocIndex:14},{value:"title",paraId:56,tocIndex:14},{value:": The title of the form item.",paraId:56,tocIndex:14},{value:"required",paraId:56,tocIndex:14},{value:": This is a required field, so the value is ",paraId:56,tocIndex:14},{value:"true",paraId:56,tocIndex:14},{value:".",paraId:56,tocIndex:14},{value:"x-component",paraId:56,tocIndex:14},{value:`:
`,paraId:56,tocIndex:14},{value:"subject",paraId:57,tocIndex:14},{value:" field: Uses the ",paraId:57,tocIndex:14},{value:"Input Component",paraId:57,tocIndex:14},{value:".",paraId:57,tocIndex:14},{value:"content",paraId:57,tocIndex:14},{value:" field: Uses the ",paraId:57,tocIndex:14},{value:"RichText Component",paraId:57,tocIndex:14},{value:".",paraId:57,tocIndex:14},{value:"For creating form Schema, the following knowledge is needed:",paraId:58,tocIndex:15},{value:"Table Component",paraId:59,tocIndex:15},{value:"CollectionField Component",paraId:59,tocIndex:15},{value:"CardItem Component",paraId:59,tocIndex:15},{value:"Schema Protocol",paraId:60,tocIndex:15},{value:"DataBlockProvider Component",paraId:59,tocIndex:15},{value:"We refer to the ",paraId:61,tocIndex:15},{value:"Extends Collection Table Example",paraId:61,tocIndex:15},{value:" and continue to modify the ",paraId:61,tocIndex:15},{value:"packages/plugins/@nocobase-sample/plugin-settings-table/src/client/PluginSettingsTable.tsx",paraId:61,tocIndex:15},{value:" file as follows:",paraId:61,tocIndex:15},{value:`import { ISchema } from '@nocobase/client';
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
`,paraId:62,tocIndex:15},{value:"CardItem",paraId:63,tocIndex:15},{value:": A card component that provides card-style display.",paraId:63,tocIndex:15},{value:"DataBlockProvider",paraId:63,tocIndex:15},{value:": A data block component used to provide data to child nodes. Since this is a form that fetches single-line data, we provide ",paraId:63,tocIndex:15},{value:"collection",paraId:63,tocIndex:15},{value:" and ",paraId:63,tocIndex:15},{value:"action",paraId:63,tocIndex:15},{value:" properties.",paraId:63,tocIndex:15},{value:"TableV2",paraId:63,tocIndex:15},{value:": A table component used to render forms.",paraId:63,tocIndex:15},{value:"useTableBlockProps",paraId:63,tocIndex:15},{value:": Used to get the properties of the data block and pass them to the TableV2 component, usually without modification.",paraId:63,tocIndex:15},{value:"TableV2.Column",paraId:63,tocIndex:15},{value:": A Table column component for rendering table columns.",paraId:63,tocIndex:15},{value:"CollectionField",paraId:63,tocIndex:15},{value:": A data table field component used to read the ",paraId:63,tocIndex:15},{value:"UI Schema",paraId:63,tocIndex:15},{value:" from the Collection and render it.",paraId:63,tocIndex:15},{value:"To render the Schema as a component, we need to understand the following:",paraId:64,tocIndex:16},{value:"ExtendCollectionsProvider",paraId:65,tocIndex:16},{value:" component for extending data tables.",paraId:65,tocIndex:16},{value:"SchemaComponent",paraId:65,tocIndex:16},{value:" component for rendering forms.",paraId:65,tocIndex:16},{value:"We continue writing in the ",paraId:66,tocIndex:16},{value:"packages/plugins/@nocobase-sample/plugin-settings-table/src/client/PluginSettingsTable.tsx",paraId:66,tocIndex:16},{value:" file:",paraId:66,tocIndex:16},{value:`import React from 'react';
import { ExtendCollectionsProvider, SchemaComponent } from '@nocobase/client';
export const PluginSettingsTable = () => {
  return (
    <ExtendCollectionsProvider collections={[emailTemplatesCollection]}>
      <SchemaComponent schema={schema} scope={{ useFormBlockProps, useSubmitActionProps }} />
    </ExtendCollectionsProvider>
  );
};
`,paraId:67,tocIndex:16},{value:"We modify the ",paraId:68,tocIndex:17},{value:"packages/plugins/@nocobase-sample/plugin-settings-table/src/client/index.tsx",paraId:68,tocIndex:17},{value:" file as follows:",paraId:68,tocIndex:17},{value:`import { Plugin } from '@nocobase/client';
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
`,paraId:69,tocIndex:17},{value:"Then, you can visit ",paraId:70,tocIndex:17},{value:"http://localhost:13000/admin/settings/@nocobase-sample/plugin-settings-table",paraId:70,tocIndex:17},{value:" to view the configuration page.",paraId:70,tocIndex:17},{value:'Currently, our Table lacks any data, so we need to add the "Add New" functionality. To achieve this, please refer to the following documentation:',paraId:71,tocIndex:18},{value:"Table component ",paraId:72,tocIndex:18},{value:"With ActionToolbar Example",paraId:72,tocIndex:18},{value:"Form Component",paraId:72,tocIndex:18},{value:"Action Component",paraId:72,tocIndex:18},{value:"We will continue editing the file ",paraId:73,tocIndex:18},{value:"packages/plugins/@nocobase-sample/plugin-settings-table/src/client/PluginSettingsTable.tsx",paraId:73,tocIndex:18},{value:":",paraId:73,tocIndex:18},{value:`import React from 'react';
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
`,paraId:74,tocIndex:18},{value:"In this context:",paraId:75,tocIndex:18},{value:"ActionBar",paraId:76,tocIndex:18},{value:": Provides the layout for action buttons.",paraId:76,tocIndex:18},{value:"Action",paraId:76,tocIndex:18},{value:': The "Add New" button.',paraId:76,tocIndex:18},{value:"Action.Drawer",paraId:76,tocIndex:18},{value:": Opens a modal window when clicked.",paraId:76,tocIndex:18},{value:"FormV2",paraId:76,tocIndex:18},{value:": The form component.",paraId:76,tocIndex:18},{value:"FormItem",paraId:76,tocIndex:18},{value:": The form item component.",paraId:76,tocIndex:18},{value:"Action.Drawer.Footer",paraId:76,tocIndex:18},{value:": The footer of the modal window.",paraId:76,tocIndex:18},{value:"useSubmitActionProps",paraId:76,tocIndex:18},{value:`: Used for submitting the form.
`,paraId:76,tocIndex:18},{value:"useActionContext()",paraId:77,tocIndex:18},{value:": Retrieves the Action context.",paraId:77,tocIndex:18},{value:"useDataBlockResource()",paraId:77,tocIndex:18},{value:": Obtains the ",paraId:77,tocIndex:18},{value:"resource",paraId:77,tocIndex:18},{value:" provided by ",paraId:77,tocIndex:18},{value:"TableBlockProvider",paraId:77,tocIndex:18},{value:", used for CRUD operations on data.",paraId:77,tocIndex:18},{value:"useDataBlockRequest()",paraId:77,tocIndex:18},{value:": The request object for the Table block; calling ",paraId:77,tocIndex:18},{value:"runAsync",paraId:77,tocIndex:18},{value:" will re-fetch data, thus refreshing the Table.",paraId:77,tocIndex:18},{value:"Next, we need to add ",paraId:78,tocIndex:18},{value:"useSubmitActionProps",paraId:78,tocIndex:18},{value:" to the context:",paraId:78,tocIndex:18},{value:`export const PluginSettingsTable = () => {
  return (
    <ExtendCollectionsProvider collections={[emailTemplatesCollection]}>
-     <SchemaComponent schema={schema} />
+     <SchemaComponent schema={schema} scope={{ useSubmitActionProps }} />
    </ExtendCollectionsProvider>
  );
};
`,paraId:79,tocIndex:18},{value:`
  `,paraId:80},{value:'The edit feature is similar to the "Add New" functionality, except we need to add an edit button within the Table and modify data through a modal window. To implement the edit feature, please refer to the following documentation:',paraId:81,tocIndex:19},{value:"Table component ",paraId:82,tocIndex:19},{value:"View Or Edit Record",paraId:82,tocIndex:19},{value:"Form component ",paraId:82,tocIndex:19},{value:"Default Values",paraId:82,tocIndex:19},{value:"useCollectionRecord()",paraId:82,tocIndex:19},{value:": Used to retrieve data of the current row",paraId:82,tocIndex:19},{value:"We will continue editing the file ",paraId:83,tocIndex:19},{value:"packages/plugins/@nocobase-sample/plugin-settings-table/src/client/PluginSettingsTable.tsx",paraId:83,tocIndex:19},{value:":",paraId:83,tocIndex:19},{value:`import { useCollectionRecordData } from '@nocobase/client';
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
`,paraId:84,tocIndex:19},{value:"Table",paraId:85,tocIndex:19},{value:" passes each row's data to child nodes via the ",paraId:85,tocIndex:19},{value:"CollectionRecordProvider",paraId:85,tocIndex:19},{value:".",paraId:85,tocIndex:19},{value:"In our ",paraId:86,tocIndex:19},{value:"useEditFormProps",paraId:86,tocIndex:19},{value:", we use ",paraId:86,tocIndex:19},{value:"useCollectionRecordData()",paraId:86,tocIndex:19},{value:" to fetch the current row's data, then create a form using ",paraId:86,tocIndex:19},{value:"createForm",paraId:86,tocIndex:19},{value:", passing the current row's data as the default values.",paraId:86,tocIndex:19},{value:"Next, we modify the logic of ",paraId:87,tocIndex:19},{value:"useSubmitActionProps()",paraId:87,tocIndex:19},{value:" to support both creation and editing:",paraId:87,tocIndex:19},{value:`const useSubmitActionProps = () => {
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
`,paraId:88,tocIndex:19},{value:"useCollection",paraId:89,tocIndex:19},{value:": The data table object provided by DataBlockProvider.",paraId:89,tocIndex:19},{value:"Finally, register ",paraId:90,tocIndex:19},{value:"useEditFormProps",paraId:90,tocIndex:19},{value:" into the context:",paraId:90,tocIndex:19},{value:`export const PluginSettingsTable = () => {
  return (
    <ExtendCollectionsProvider collections={[emailTemplatesCollection]}>
-     <SchemaComponent schema={schema} scope={{ useSubmitActionProps }} />
+     <SchemaComponent schema={schema} scope={{ useSubmitActionProps, useEditFormProps }} />
    </ExtendCollectionsProvider>
  );
};
`,paraId:91,tocIndex:19},{value:`
  `,paraId:80},{value:"The delete functionality is relatively simple. We just need to add a ",paraId:92,tocIndex:20},{value:"Delete",paraId:92,tocIndex:20},{value:" button in the Action column, and upon clicking it, call ",paraId:92,tocIndex:20},{value:"resource.destroy()",paraId:92,tocIndex:20},{value:" followed by refreshing the Table data.",paraId:92,tocIndex:20},{value:"Action ",paraId:93,tocIndex:20},{value:"Confirm",paraId:93,tocIndex:20},{value:"We continue by writing the following in the ",paraId:94,tocIndex:20},{value:"packages/plugins/@nocobase-sample/plugin-settings-table/src/client/PluginSettingsTable.tsx",paraId:94,tocIndex:20},{value:" file:",paraId:94,tocIndex:20},{value:`import { ActionProps } from '@nocobase/client';

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
`,paraId:95,tocIndex:20},{value:"Then, we register ",paraId:96,tocIndex:20},{value:"useDeleteActionProps",paraId:96,tocIndex:20},{value:" into the context.",paraId:96,tocIndex:20},{value:`export const PluginSettingsTable = () => {
  return (
    <ExtendCollectionsProvider collections={[emailTemplatesCollection]}>
-     <SchemaComponent schema={schema} scope={{ useSubmitActionProps, useEditFormProps }} />
+     <SchemaComponent schema={schema} scope={{ useSubmitActionProps, useEditFormProps, useDeleteActionProps }} />
    </ExtendCollectionsProvider>
  );
};
`,paraId:97,tocIndex:20},{value:`
  `,paraId:80},{value:"There are two scenarios for using form data: one is using it within the page, and the other is using it globally. The difference between the two is:",paraId:98,tocIndex:21},{value:"Global Usage",paraId:99,tocIndex:21},{value:": When form data is updated, it needs to be synchronized to the global state to achieve real-time updates.",paraId:99,tocIndex:21},{value:"Page-Specific Usage",paraId:99,tocIndex:21},{value:": Since the page will automatically be destroyed and recreated during navigation, there's no need to synchronize the data.",paraId:99,tocIndex:21},{value:"In this step, we will focus on using form data within a page.",paraId:100,tocIndex:21},{value:"We create the ",paraId:101,tocIndex:21},{value:"packages/plugins/@nocobase-sample/plugin-settings-table/src/client/PluginSettingsTablePage.tsx",paraId:101,tocIndex:21},{value:" file with the following content:",paraId:101,tocIndex:21},{value:`import { useRequest } from '@nocobase/client';
import React from 'react';

export const PluginSettingsTablePage = () => {
  const { data, loading } = useRequest<{ data?: any[] }>({
    url: 'samplesEmailTemplates:list',
  });

  if (loading) return null;

  return <pre>{JSON.stringify(data?.data, null, 2)}</pre>
}
`,paraId:102,tocIndex:21},{value:"Then, we import the ",paraId:103,tocIndex:21},{value:"PluginSettingsTablePage",paraId:103,tocIndex:21},{value:" component into the ",paraId:103,tocIndex:21},{value:"PluginSettingsTable",paraId:103,tocIndex:21},{value:" component:",paraId:103,tocIndex:21},{value:`import { PluginSettingsTablePage } from './PluginSettingsTablePage'
// ...

export class PluginSettingFormClient extends Plugin {
  async load() {
    // ...

    this.app.router.add(\`admin.\${name}-page\`, {
      path: '/admin/plugin-settings-table-page',
      Component: PluginSettingsTablePage,
    })
  }
}
`,paraId:104,tocIndex:21},{value:"Afterward, we can visit ",paraId:105,tocIndex:21},{value:"http://localhost:13000/admin/plugin-settings-table-page",paraId:105,tocIndex:21},{value:" to see our form data.",paraId:105,tocIndex:21},{value:"To ensure global use and real-time refresh, you will need to use ",paraId:106,tocIndex:22},{value:"Context",paraId:106,tocIndex:22},{value:" along with NocoBase ",paraId:106,tocIndex:22},{value:"Provider",paraId:107,tocIndex:22},{value:" capabilities.",paraId:106,tocIndex:22},{value:"We create the file ",paraId:108,tocIndex:22},{value:"packages/plugins/@nocobase-sample/plugin-settings-table/src/client/PluginSettingsTableProvider.tsx",paraId:108,tocIndex:22},{value:" with the following content:",paraId:108,tocIndex:22},{value:`import React, { createContext, FC } from 'react';
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
`,paraId:109,tocIndex:22},{value:"Next, modify the ",paraId:110,tocIndex:22},{value:"packages/plugins/@nocobase-sample/plugin-settings-table/src/client/index.tsx",paraId:110,tocIndex:22},{value:" file to register it globally:",paraId:110,tocIndex:22},{value:`import { PluginSettingsTableProvider } from './PluginSettingsTableProvider'
// ...

export class PluginSettingFormClient extends Plugin {
  async load() {
    // ...
    this.app.addProvider(PluginSettingsTableProvider)
  }
}
`,paraId:111,tocIndex:22},{value:"After updating the form, we need to retrieve the global data again. Modify ",paraId:112,tocIndex:22},{value:"packages/plugins/@nocobase-sample/plugin-settings-table/src/client/PluginSettingsTable.tsx",paraId:112,tocIndex:22},{value:":",paraId:112,tocIndex:22},{value:`import { usePluginSettingsTableRequest } from './PluginSettingsTableProvider';

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
`,paraId:113,tocIndex:22},{value:`
  `,paraId:80},{value:"Following the ",paraId:114,tocIndex:23},{value:"Build and Package Plugin",paraId:115,tocIndex:23},{value:" documentation, we can package the plugin and upload it to the production environment.",paraId:114,tocIndex:23},{value:"If you cloned the source code, you need to perform a full build first to ensure the plugin dependencies are built properly.",paraId:116,tocIndex:23},{value:`yarn build
`,paraId:117,tocIndex:23},{value:"If your project was created using ",paraId:118,tocIndex:23},{value:"create-nocobase-app",paraId:118,tocIndex:23},{value:", you can directly run:",paraId:118,tocIndex:23},{value:`yarn build @nocobase-sample/plugin-settings-table --tar
`,paraId:119,tocIndex:23},{value:"This will generate the file ",paraId:120,tocIndex:23},{value:"storage/tar/@nocobase-sample/plugin-settings-table.tar.gz",paraId:120,tocIndex:23},{value:", which can be installed via the ",paraId:120,tocIndex:23},{value:"upload method",paraId:121,tocIndex:23},{value:".",paraId:120,tocIndex:23}]}}]);
