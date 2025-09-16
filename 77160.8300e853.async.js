"use strict";(self.webpackChunknocobase_docs=self.webpackChunknocobase_docs||[]).push([[77160],{177160:function(t,e,a){a.r(e),a.d(e,{texts:function(){return n}});const n=[{value:"This article only covers incompatibility changes related to plugin development.",paraId:0},{value:"Added ",paraId:1,tocIndex:1},{value:"SchemaInitializerManager",paraId:1,tocIndex:1},{value:" for registering ",paraId:1,tocIndex:1},{value:"SchemaInitializer",paraId:1,tocIndex:1},{value:"Added ",paraId:1,tocIndex:1},{value:"useSchemaInitializerRender()",paraId:1,tocIndex:1},{value:" to replace the original ",paraId:1,tocIndex:1},{value:"useSchemaInitializer()",paraId:1,tocIndex:1},{value:" ",paraId:1,tocIndex:1},{value:"render()",paraId:1,tocIndex:1},{value:"Added ",paraId:1,tocIndex:1},{value:"useSchemaInitializerItem()",paraId:1,tocIndex:1},{value:" for obtaining the context of the current initialization item",paraId:1,tocIndex:1},{value:"Added ",paraId:1,tocIndex:1},{value:"SchemaInitializerItemGroup",paraId:1,tocIndex:1},{value:" component as the default component for ",paraId:1,tocIndex:1},{value:"type: 'itemGroup'",paraId:1,tocIndex:1},{value:"Added ",paraId:1,tocIndex:1},{value:"SchemaInitializerSubMenu",paraId:1,tocIndex:1},{value:" component as the default component for ",paraId:1,tocIndex:1},{value:"type: 'subMenu'",paraId:1,tocIndex:1},{value:"Added ",paraId:1,tocIndex:1},{value:"SchemaInitializerDivider",paraId:1,tocIndex:1},{value:" component as the default component for ",paraId:1,tocIndex:1},{value:"type: 'divider'",paraId:1,tocIndex:1},{value:"Added ",paraId:1,tocIndex:1},{value:"SchemaInitializerChildren",paraId:1,tocIndex:1},{value:" component for custom rendering of multiple list items",paraId:1,tocIndex:1},{value:"Added ",paraId:1,tocIndex:1},{value:"SchemaInitializerChild",paraId:1,tocIndex:1},{value:" component for custom rendering of a single list item",paraId:1,tocIndex:1},{value:"Changed the responsibilities of ",paraId:1,tocIndex:1},{value:"SchemaInitializerContext",paraId:1,tocIndex:1},{value:" for storing the context of the current initializer",paraId:1,tocIndex:1},{value:"Changed the responsibilities of ",paraId:1,tocIndex:1},{value:"useSchemaInitializer()",paraId:1,tocIndex:1},{value:" for obtaining the context of the current initializer",paraId:1,tocIndex:1},{value:"Changed ",paraId:1,tocIndex:1},{value:"function SchemaInitializer",paraId:1,tocIndex:1},{value:" to ",paraId:1,tocIndex:1},{value:"class SchemaInitializer",paraId:1,tocIndex:1},{value:" for defining initializer",paraId:1,tocIndex:1},{value:"Changed parameters of ",paraId:1,tocIndex:1},{value:"SchemaInitializer",paraId:1,tocIndex:1},{value:"Added ",paraId:2,tocIndex:1},{value:"name",paraId:2,tocIndex:1},{value:" required parameter for the value of ",paraId:2,tocIndex:1},{value:"x-initializer",paraId:2,tocIndex:1},{value:"Added ",paraId:2,tocIndex:1},{value:"Component",paraId:2,tocIndex:1},{value:" parameter for custom rendering of the button. Default is ",paraId:2,tocIndex:1},{value:"SchemaInitializerButton",paraId:2,tocIndex:1},{value:".",paraId:2,tocIndex:1},{value:"Added ",paraId:2,tocIndex:1},{value:"componentProps",paraId:2,tocIndex:1},{value:", ",paraId:2,tocIndex:1},{value:"style",paraId:2,tocIndex:1},{value:" for configuring the properties and style of ",paraId:2,tocIndex:1},{value:"Component",paraId:2,tocIndex:1},{value:"Added ",paraId:2,tocIndex:1},{value:"ItemsComponent",paraId:2,tocIndex:1},{value:" parameter for custom rendering of the list. Default is ",paraId:2,tocIndex:1},{value:"SchemaInitializerItems",paraId:2,tocIndex:1},{value:".",paraId:2,tocIndex:1},{value:"Added ",paraId:2,tocIndex:1},{value:"itemsComponentProps",paraId:2,tocIndex:1},{value:", ",paraId:2,tocIndex:1},{value:"itemsComponentStyle",paraId:2,tocIndex:1},{value:" for configuring the properties and style of ",paraId:2,tocIndex:1},{value:"ItemsComponent",paraId:2,tocIndex:1},{value:"Added ",paraId:2,tocIndex:1},{value:"popover",paraId:2,tocIndex:1},{value:" parameter for configuring whether to display the ",paraId:2,tocIndex:1},{value:"popover",paraId:2,tocIndex:1},{value:" effect",paraId:2,tocIndex:1},{value:"Added ",paraId:2,tocIndex:1},{value:"useInsert",paraId:2,tocIndex:1},{value:" parameter for when the ",paraId:2,tocIndex:1},{value:"insert",paraId:2,tocIndex:1},{value:" function needs to use hooks",paraId:2,tocIndex:1},{value:"Changed ",paraId:2,tocIndex:1},{value:"dropdown",paraId:2,tocIndex:1},{value:" parameter to ",paraId:2,tocIndex:1},{value:"popoverProps",paraId:2,tocIndex:1},{value:", using ",paraId:2,tocIndex:1},{value:"Popover",paraId:2,tocIndex:1},{value:" instead of ",paraId:2,tocIndex:1},{value:"Dropdown",paraId:2,tocIndex:1},{value:"Changed parameters of ",paraId:1,tocIndex:1},{value:"items",paraId:1,tocIndex:1},{value:" for ",paraId:1,tocIndex:1},{value:"SchemaInitializer",paraId:1,tocIndex:1},{value:"Added ",paraId:3,tocIndex:1},{value:"useChildren",paraId:3,tocIndex:1},{value:" function for dynamically controlling child items",paraId:3,tocIndex:1},{value:"Added ",paraId:3,tocIndex:1},{value:"componentProps",paraId:3,tocIndex:1},{value:" function for the properties of the component itself",paraId:3,tocIndex:1},{value:"Added ",paraId:3,tocIndex:1},{value:"useComponentProps",paraId:3,tocIndex:1},{value:" function for dynamically processing the props of the component",paraId:3,tocIndex:1},{value:"Changed ",paraId:3,tocIndex:1},{value:"key",paraId:3,tocIndex:1},{value:" parameter to ",paraId:3,tocIndex:1},{value:"name",paraId:3,tocIndex:1},{value:" for the unique identification of list items",paraId:3,tocIndex:1},{value:"Changed ",paraId:3,tocIndex:1},{value:"visible",paraId:3,tocIndex:1},{value:" parameter to ",paraId:3,tocIndex:1},{value:"useVisible",paraId:3,tocIndex:1},{value:" function for dynamically controlling whether to display",paraId:3,tocIndex:1},{value:"Changed ",paraId:3,tocIndex:1},{value:"component",paraId:3,tocIndex:1},{value:" parameter to ",paraId:3,tocIndex:1},{value:"Component",paraId:3,tocIndex:1},{value:" for rendering list items",paraId:3,tocIndex:1},{value:"Changed ",paraId:1,tocIndex:1},{value:"SchemaInitializer.Button",paraId:1,tocIndex:1},{value:" to ",paraId:1,tocIndex:1},{value:"SchemaInitializerButton",paraId:1,tocIndex:1},{value:", the default value for the Component parameter of SchemaInitializer",paraId:1,tocIndex:1},{value:"Changed ",paraId:1,tocIndex:1},{value:"SchemaInitializer.Item",paraId:1,tocIndex:1},{value:" to ",paraId:1,tocIndex:1},{value:"SchemaInitializerItem",paraId:1,tocIndex:1},{value:", with unchanged parameters",paraId:1,tocIndex:1},{value:"Changed ",paraId:1,tocIndex:1},{value:"SchemaInitializer.ActionModal",paraId:1,tocIndex:1},{value:" to ",paraId:1,tocIndex:1},{value:"SchemaInitializerActionModal",paraId:1,tocIndex:1},{value:", with unchanged parameters",paraId:1,tocIndex:1},{value:"Changed ",paraId:1,tocIndex:1},{value:"SchemaInitializer.SwitchItem",paraId:1,tocIndex:1},{value:" to ",paraId:1,tocIndex:1},{value:"SchemaInitializer.Switch",paraId:1,tocIndex:1},{value:", with unchanged parameters",paraId:1,tocIndex:1},{value:"Deleted ",paraId:1,tocIndex:1},{value:"SchemaInitializerProvider",paraId:1,tocIndex:1},{value:", replaced by ",paraId:1,tocIndex:1},{value:"SchemaInitializerManager",paraId:1,tocIndex:1},{value:"Deleted ",paraId:1,tocIndex:1},{value:"SchemaInitializer.itemWrap",paraId:1,tocIndex:1},{value:", no longer need to wrap the ",paraId:1,tocIndex:1},{value:"item",paraId:1,tocIndex:1},{value:" component",paraId:1,tocIndex:1},{value:"For more information, refer to the following documentation:",paraId:4,tocIndex:1},{value:"Plugin Development / Schema Initializer",paraId:5,tocIndex:1},{value:"API Documentation / SchemaInitializer",paraId:6,tocIndex:1},{value:"In the past, we used to get all the ",paraId:7,tocIndex:2},{value:"Initializers",paraId:7,tocIndex:2},{value:" through ",paraId:7,tocIndex:2},{value:"SchemaInitializerContext",paraId:7,tocIndex:2},{value:" and then add, delete or change them. For example, the following code adds ",paraId:7,tocIndex:2},{value:"Hello",paraId:7,tocIndex:2},{value:" to ",paraId:7,tocIndex:2},{value:"media",paraId:7,tocIndex:2},{value:" in ",paraId:7,tocIndex:2},{value:"BlockInitializers",paraId:7,tocIndex:2},{value:":",paraId:7,tocIndex:2},{value:`const items = useContext<any>(SchemaInitializerContext);
const mediaItems = items.BlockInitializers.items.find(
  (item) => item.key === 'media',
);

if (process.env.NODE_ENV !== 'production' && !mediaItems) {
  throw new Error('media block initializer not found');
}

const children = mediaItems.children;
if (!children.find((item) => item.key === 'hello')) {
  children.push({
    key: 'hello',
    type: 'item',
    title: '{{t("Hello block")}}',
    component: HelloBlockInitializer,
  });
}
`,paraId:8,tocIndex:2},{value:"The new way to add items is to use the ",paraId:9,tocIndex:2},{value:"schemaInitializerManager.addItem()",paraId:9,tocIndex:2},{value:" method in the load method of the plugin.",paraId:9,tocIndex:2},{value:`class MyPlugin extends Plugin {
  async load() {
    this.schemaInitializerManager.addItem(
      'BlockInitializers',
      'otherBlocks.hello',
      {
        title: '{{t("Hello block")}}',
        Component: HelloBlockInitializer,
      },
    );
  }
}
`,paraId:10,tocIndex:2},{value:"Detailed documentation reference",paraId:11,tocIndex:2},{value:"Plugin Development / Schema Initializer / Adding items to an existing initializer",paraId:12,tocIndex:2},{value:"API Documentation / SchemaInitializer / Built-in components and types",paraId:13,tocIndex:2},{value:"Previously added via ",paraId:14,tocIndex:3},{value:"SchemaInitializerProvider",paraId:14,tocIndex:3},{value:", for example:",paraId:14,tocIndex:3},{value:`<SchemaInitializerProvider
  initializers={{ BlockInitializers }}
  components={{ ManualActionDesigner }}
></SchemaInitializerProvider>
`,paraId:15,tocIndex:3},{value:"Now add it in the load of the plugin, for example:",paraId:16,tocIndex:3},{value:`import { Plugin } from '@nocobase/client';

class MyPlugin extends Plugin {
  async load() {
    this.app.schemaInitializerManager.add(blockInitializers);
    this.app.addComponents({ ManualActionDesigner });
  }
}
`,paraId:17,tocIndex:3},{value:"For detailed documentation refer to",paraId:18,tocIndex:3},{value:"Plugin Development / Schema Initializer / Add New Initializer",paraId:19,tocIndex:3},{value:"API Documentation / SchemaInitializerManager / schemaInitializerManager.addItem()",paraId:20,tocIndex:3},{value:"Before ",paraId:21,tocIndex:4},{value:"SchemaInitializer",paraId:21,tocIndex:4},{value:" support JSON object and component writing, now only ",paraId:21,tocIndex:4},{value:"new SchemaInitializer()",paraId:21,tocIndex:4},{value:".",paraId:21,tocIndex:4},{value:"Example 1: The old way of writing JSON is changed to ",paraId:22,tocIndex:4},{value:"new SchemaInitializer()",paraId:22,tocIndex:4},{value:".",paraId:22,tocIndex:4},{value:`- export const BlockInitializers = {
+ export const blockInitializers = new SchemaInitializer({
+ name: 'BlockInitializers',
  'data-testid': 'add-block-button-in-page',
  title: '{{t("Add block")}}',
  icon: 'PlusOutlined',
  wrap: gridRowColWrap,
   items: [
    {
-     key: 'dataBlocks',
+     name: 'data-blocks',
      type: 'itemGroup',
      title: '{{t("Data blocks")}}',
      children: [
        {
-         key: 'table',
+         name: 'table',
-         type: 'item',
          title: '{{t("Table")}}',
-         component: TableBlockInitializer,
+         Component: TableBlockInitializer,
        },
         {
          key: 'form',
          type: 'item',
          title: '{{t("Form")}}',
          component: FormBlockInitializer,
        }
      ],
    },
  ],
});
`,paraId:23,tocIndex:4},{value:"Example 2: Modify the way the component is written to ",paraId:24,tocIndex:4},{value:"new SchemaInitializer()",paraId:24,tocIndex:4},{value:".",paraId:24,tocIndex:4},{value:"Turns out it's the way components are defined:",paraId:25,tocIndex:4},{value:`export const BulkEditFormItemInitializers = (props: any) => {
  const { t } = useTranslation();
  const { insertPosition, component } = props;
  const associationFields = useAssociatedFormItemInitializerFields({
    readPretty: true,
    block: 'Form',
  });
  return (
    <SchemaInitializer.Button
      data-testid="configure-fields-button-of-bulk-edit-form-item"
      wrap={gridRowColWrap}
      icon={'SettingOutlined'}
      items={[
        {
          type: 'itemGroup',
          title: t('Display fields'),
          children: useCustomBulkEditFormItemInitializerFields(),
        },
        {
          type: 'divider',
        },
        {
          type: 'item',
          title: t('Add text'),
          component: BlockItemInitializer,
        },
      ]}
      insertPosition={insertPosition}
      component={component}
      title={component ? null : t('Configure fields')}
    />
  );
};
`,paraId:26,tocIndex:4},{value:"Now it needs to be changed to the ",paraId:27,tocIndex:4},{value:"new SchemaInitializer()",paraId:27,tocIndex:4},{value:" approach:",paraId:27,tocIndex:4},{value:`const bulkEditFormItemInitializers = new SchemaInitializer({
  name: 'BulkEditFormItemInitializers',
  'data-testid': 'configure-fields-button-of-bulk-edit-form-item',
  wrap: gridRowColWrap,
  icon: 'SettingOutlined',
  // \u539F insertPosition \u548C component \u662F\u900F\u4F20\u7684\uFF0C\u8FD9\u91CC\u4E0D\u7528\u7BA1\uFF0C\u4E5F\u662F\u900F\u4F20\u7684
  items: [
    {
      type: 'itemGroup',
      title: t('Display fields'),
      name: 'displayFields', // \u8BB0\u5F97\u52A0\u4E0A name
      useChildren: useCustomBulkEditFormItemInitializerFields, // \u4F7F\u7528\u5230\u4E86 useChildren
    },
    {
      type: 'divider',
    },
    {
      title: t('Add text'),
      name: 'addText',
      Component: BlockItemInitializer, // component \u66FF\u6362\u4E3A Component
    },
  ],
});
`,paraId:28,tocIndex:4},{value:"For detailed documentation refer to",paraId:29,tocIndex:4},{value:"Plugin Development / Schema Initializer / Add new initializer",paraId:30,tocIndex:4},{value:"API Documentation / SchemaInitializer / new SchemaInitializer(options)",paraId:31,tocIndex:4},{value:"Previously, when configuring an Item, the props of the components were placed in the item, but now it is recommended to use ",paraId:32,tocIndex:5},{value:"componentProps",paraId:32,tocIndex:5},{value:" and ",paraId:32,tocIndex:5},{value:"useComponentProps",paraId:32,tocIndex:5},{value:".",paraId:32,tocIndex:5},{value:`{
 name: 'BlockInitializers',
 items: [
  {
    name: 'xxx',
    Component: XXXSchemaInitializerItem,
    title: 'Title 1',
    schema: {},
-   foo: 'bar',
+   useComponentProps: () => {
+     return { foo: 'bar' }
+   }
  }
 ]
}
`,paraId:33,tocIndex:5},{value:"In the Item component, Item configuration used to be passed directly by props, but now it is obtained by ",paraId:34,tocIndex:5},{value:"useSchemaInitializerItem()",paraId:34,tocIndex:5},{value:", and the related hooks are included:",paraId:34,tocIndex:5},{value:"useSchemaInitializer()",paraId:35,tocIndex:5},{value:" to get the current initializer context.",paraId:35,tocIndex:5},{value:"useSchemaInitializerItem()",paraId:35,tocIndex:5},{value:" gets the context of the current item.",paraId:35,tocIndex:5},{value:`const XXXSchemaInitializerItem = (props) => {
-  const { insert, title, schema, foo } = props;
+  const { foo } = props;
+  const { insert } = useSchemaInitializer();
+  const { title, schema } = useSchemaInitializerItem();
 // ...
}
`,paraId:36,tocIndex:5},{value:"Detailed Documentation Reference",paraId:37,tocIndex:5},{value:"API Documentation / SchemaInitializer / Built-in Components and Types",paraId:38,tocIndex:5},{value:"Added ",paraId:39,tocIndex:6},{value:"SchemaSettingsManager",paraId:39,tocIndex:6},{value:" for registering ",paraId:39,tocIndex:6},{value:"SchemaSettings",paraId:39,tocIndex:6},{value:"Added ",paraId:39,tocIndex:6},{value:"useSchemaSettingsItem()",paraId:39,tocIndex:6},{value:"Added ",paraId:39,tocIndex:6},{value:"useSchemaSettingsRender()",paraId:39,tocIndex:6},{value:"Added ",paraId:39,tocIndex:6},{value:"x-settings",paraId:39,tocIndex:6},{value:" parameter for configuring schema settings",paraId:39,tocIndex:6},{value:"Added ",paraId:39,tocIndex:6},{value:"x-toolbar",paraId:39,tocIndex:6},{value:" parameter for configuring schema toolbar",paraId:39,tocIndex:6},{value:"Added ",paraId:39,tocIndex:6},{value:"SchemaToolbar",paraId:39,tocIndex:6},{value:" component for customizing schema toolbar",paraId:39,tocIndex:6},{value:"Added ",paraId:39,tocIndex:6},{value:"useSchemaToolbarRender()",paraId:39,tocIndex:6},{value:" to replace the original ",paraId:39,tocIndex:6},{value:"useDesigner()",paraId:39,tocIndex:6},{value:"Changed ",paraId:39,tocIndex:6},{value:"function SchemaSettings",paraId:39,tocIndex:6},{value:" to ",paraId:39,tocIndex:6},{value:"class SchemaSettings",paraId:39,tocIndex:6},{value:" for defining settings",paraId:39,tocIndex:6},{value:"Changed the original ",paraId:39,tocIndex:6},{value:"SchemaSettings",paraId:39,tocIndex:6},{value:" to ",paraId:39,tocIndex:6},{value:"SchemaSettingsDropdown",paraId:39,tocIndex:6},{value:"Changed ",paraId:39,tocIndex:6},{value:"SchemaSettings.Item",paraId:39,tocIndex:6},{value:" to ",paraId:39,tocIndex:6},{value:"SchemaSettingsItem",paraId:39,tocIndex:6},{value:"Changed ",paraId:39,tocIndex:6},{value:"SchemaSettings.ItemGroup",paraId:39,tocIndex:6},{value:" to ",paraId:39,tocIndex:6},{value:"SchemaSettingsItemGroup",paraId:39,tocIndex:6},{value:"Changed ",paraId:39,tocIndex:6},{value:"SchemaSettings.SubMenu",paraId:39,tocIndex:6},{value:" to ",paraId:39,tocIndex:6},{value:"SchemaSettingsSubMenu",paraId:39,tocIndex:6},{value:"Changed ",paraId:39,tocIndex:6},{value:"SchemaSettings.Divider",paraId:39,tocIndex:6},{value:" to ",paraId:39,tocIndex:6},{value:"SchemaSettingsDivider",paraId:39,tocIndex:6},{value:"Changed ",paraId:39,tocIndex:6},{value:"SchemaSettings.Remove",paraId:39,tocIndex:6},{value:" to ",paraId:39,tocIndex:6},{value:"SchemaSettingsRemove",paraId:39,tocIndex:6},{value:"Changed ",paraId:39,tocIndex:6},{value:"SchemaSettings.SelectItem",paraId:39,tocIndex:6},{value:" to ",paraId:39,tocIndex:6},{value:"SchemaSettingsSelectItem",paraId:39,tocIndex:6},{value:"Changed ",paraId:39,tocIndex:6},{value:"SchemaSettings.CascaderItem",paraId:39,tocIndex:6},{value:" to ",paraId:39,tocIndex:6},{value:"SchemaSettingsCascaderItem",paraId:39,tocIndex:6},{value:"Changed ",paraId:39,tocIndex:6},{value:"SchemaSettings.SwitchItem",paraId:39,tocIndex:6},{value:" to ",paraId:39,tocIndex:6},{value:"SchemaSettingsSwitchItem",paraId:39,tocIndex:6},{value:"Changed ",paraId:39,tocIndex:6},{value:"SchemaSettings.ModalItem",paraId:39,tocIndex:6},{value:" to ",paraId:39,tocIndex:6},{value:"SchemaSettingsModalItem",paraId:39,tocIndex:6},{value:"Changed ",paraId:39,tocIndex:6},{value:"SchemaSettings.ActionModalItem",paraId:39,tocIndex:6},{value:" to ",paraId:39,tocIndex:6},{value:"SchemaSettingsActionModalItem",paraId:39,tocIndex:6},{value:"Deleted ",paraId:39,tocIndex:6},{value:"x-designer",paraId:39,tocIndex:6},{value:" parameter, deprecated, will be removed in the future, use ",paraId:39,tocIndex:6},{value:"x-toolbar",paraId:39,tocIndex:6},{value:" instead",paraId:39,tocIndex:6},{value:"Deleted ",paraId:39,tocIndex:6},{value:"useDesigner()",paraId:39,tocIndex:6},{value:", deprecated, will be removed in the future, use ",paraId:39,tocIndex:6},{value:"useSchemaToolbarRender()",paraId:39,tocIndex:6},{value:" instead",paraId:39,tocIndex:6},{value:"Related Documentation",paraId:40,tocIndex:6},{value:"Plugin Development / SchemaSettings Settings",paraId:41,tocIndex:6},{value:"Plugins / SchemaToolbar",paraId:42,tocIndex:6},{value:"API Documentation / SchemaSettings",paraId:43,tocIndex:6},{value:"API Documentation / SchemaSettingsManager",paraId:43,tocIndex:6},{value:"API Documentation / SchemaToolbar",paraId:43,tocIndex:6},{value:"Previously SchemaSettings was implemented with GeneralSchemaDesigner and used in ",paraId:44,tocIndex:7},{value:"x-designer",paraId:44,tocIndex:7},{value:".",paraId:44,tocIndex:7},{value:`<GeneralSchemaDesigner>
  <SchemaSettings.SwitchItem
    title={'Enable Header'}
    onClick={() => {}}
  ></SchemaSettings.SwitchItem>
  <SchemaSettings.Divider />
  <SchemaSettings.ModalItem
    title={'xxx'}
    schema={}
    onSubmit={props.onSubmit}
  ></SchemaSettings.ModalItem>
</GeneralSchemaDesigner>
`,paraId:45,tocIndex:7},{value:"Now split the two into ",paraId:46,tocIndex:7},{value:"x-toolbar",paraId:46,tocIndex:7},{value:" and ",paraId:46,tocIndex:7},{value:"x-settings",paraId:46,tocIndex:7},{value:", with ",paraId:46,tocIndex:7},{value:"x-toolbar",paraId:46,tocIndex:7},{value:" missing and SchemaSettings used in ",paraId:46,tocIndex:7},{value:"x-settings",paraId:46,tocIndex:7},{value:".",paraId:46,tocIndex:7},{value:`const mySettings = new SchemaSettings({
  name: 'MySettings',
  items: [
    {
      name: 'enableHeader',
      type: 'switch',
      componentProps: {
        title: 'Enable Header',
        onClick: () => {},
      },
    },
    {
      name: 'divider',
      type: 'divider',
    },
    {
      name: 'xxx',
      type: 'modal',
      useComponentProps() {
        // useSchemaDesigner() \u4F1A\u4F20\u5165 props
        const { onSubmit } = useSchemaDesigner();
        return {
          title: 'xxx',
          schema: {},
          onSubmit,
        };
      },
    },
  ],
});
`,paraId:47,tocIndex:7},{value:"Changes in the schema",paraId:48,tocIndex:7},{value:`{
  type: 'void',
- 'x-designer': 'CustomButton.Designer'
+ 'x-toolbar': 'CustomButtonToolbar',  // \u975E\u5FC5\u987B
+ 'x-settings': 'CustomButtonSettings',
  'x-component': 'CustomButton',
  'x-content': 'Hello2',
}
`,paraId:49,tocIndex:7},{value:"The previous version of the Item component was very tedious to implement, but now we use useSchemaSettings() to get the Designable of the current Schema, and use the Designable to modify the current Schema.",paraId:50,tocIndex:8},{value:`function EditBlockTitle(props) {
- const field = useField();
- const fieldSchema = useFieldSchema();
- const { dn } = useDesignable();
+ const { dn } = useSchemaSettings();

  return (
    <SchemaSettings.ModalItem
      title={'Edit block title'}
      schema={
        {
          type: 'object',
          title: 'Edit block title',
          properties: {
            title: {
              title: 'Block title',
              type: 'string',
              // \u83B7\u53D6 schema \u7684\u9ED8\u8BA4\u503C
-             default: fieldSchema?.['x-decorator-props']?.title,
+             default: dn.getSchemaAttribute('x-decorator-props.title'),
              'x-decorator': 'FormItem',
              'x-component': 'Input',
              'x-compile-omitted': ['default'],
            },
          },
        } as ISchema
      }
      onSubmit={({ title }) => {
-       field.decoratorProps.title = title;
-       fieldSchema['x-decorator-props'] = fieldSchema['x-decorator-props'] || {};
-       fieldSchema['x-decorator-props'].title = title;
-       dn.emit('patch', {
-         schema: {
-           ['x-uid']: fieldSchema['x-uid'],
-           'x-decorator-props': {
-             ...fieldSchema['x-decorator-props'],
-           },
-         },
-       });
-       dn.refresh();
+       dn.deepMerge({
+         'x-decorator-props': {
+           title,
+         },
+       });
      }}
    />
  );
}
`,paraId:51,tocIndex:8},{value:"Related Documentation Reference",paraId:52,tocIndex:8},{value:"Plugin Development / SchemaSettings Setter / How to implement Schema settings",paraId:53,tocIndex:8},{value:"Plugin Development / Designable Designer",paraId:54,tocIndex:8},{value:"API Reference / SchemaSettings / Built-in Components and Types",paraId:55,tocIndex:8},{value:"API Reference / Designable",paraId:55,tocIndex:8},{value:"The ",paraId:56,tocIndex:10},{value:"app.addComponent",paraId:56,tocIndex:10},{value:" method is privatized and no longer exposed to the public, you need to register the component via the ",paraId:56,tocIndex:10},{value:"app.addComponents",paraId:56,tocIndex:10},{value:" method.",paraId:56,tocIndex:10},{value:`- app.addComponent(MyComponent, 'MyComponent')
+ app.addComponents({ MyComponent })
`,paraId:57,tocIndex:10},{value:"PluginManagerContext",paraId:58},{value:`const MyProvider = props => {
- const ctx = useContext(PluginManagerContext);
return <div>
- <PluginManagerContext.Provider value={{components: { ...ctx?.components }}}>
  {/* ... */}
- </PluginManagerContext.Provider>
</div>
}
`,paraId:59,tocIndex:11}]}}]);
