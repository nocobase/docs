# 0.17.0-alpha.1

:::warning
This article only covers incompatibility changes related to plugin development.
:::

## Changes to SchemaInitializer

- Added `SchemaInitializerManager` for registering `SchemaInitializer`
- Added `useSchemaInitializerRender()` to replace the original `useSchemaInitializer()` `render()`
- Added `useSchemaInitializerItem()` for obtaining the context of the current initialization item
- Added `SchemaInitializerItemGroup` component as the default component for `type: 'itemGroup'`
- Added `SchemaInitializerSubMenu` component as the default component for `type: 'subMenu'`
- Added `SchemaInitializerDivider` component as the default component for `type: 'divider'`
- Added `SchemaInitializerChildren` component for custom rendering of multiple list items
- Added `SchemaInitializerChild` component for custom rendering of a single list item
- Changed the responsibilities of `SchemaInitializerContext` for storing the context of the current initializer
- Changed the responsibilities of `useSchemaInitializer()` for obtaining the context of the current initializer
- Changed `function SchemaInitializer` to `class SchemaInitializer` for defining initializer
- Changed parameters of `SchemaInitializer`
  - Added `name` required parameter for the value of `x-initializer`
  - Added `Component` parameter for custom rendering of the button. Default is `SchemaInitializerButton`.
  - Added `componentProps`, `style` for configuring the properties and style of `Component`
  - Added `ItemsComponent` parameter for custom rendering of the list. Default is `SchemaInitializerItems`.
  - Added `itemsComponentProps`, `itemsComponentStyle` for configuring the properties and style of `ItemsComponent`
  - Added `popover` parameter for configuring whether to display the `popover` effect
  - Added `useInsert` parameter for when the `insert` function needs to use hooks
  - Changed `dropdown` parameter to `popoverProps`, using `Popover` instead of `Dropdown`
- Changed parameters of `items` for `SchemaInitializer`
  - Added `useChildren` function for dynamically controlling child items
  - Added `componentProps` function for the properties of the component itself
  - Added `useComponentProps` function for dynamically processing the props of the component
  - Changed `key` parameter to `name` for the unique identification of list items
  - Changed `visible` parameter to `useVisible` function for dynamically controlling whether to display
  - Changed `component` parameter to `Component` for rendering list items
- Changed `SchemaInitializer.Button` to `SchemaInitializerButton`, the default value for the Component parameter of SchemaInitializer
- Changed `SchemaInitializer.Item` to `SchemaInitializerItem`, with unchanged parameters
- Changed `SchemaInitializer.ActionModal` to `SchemaInitializerActionModal`, with unchanged parameters
- Changed `SchemaInitializer.SwitchItem` to `SchemaInitializer.Switch`, with unchanged parameters
- Deleted `SchemaInitializerProvider`, replaced by `SchemaInitializerManager`
- Deleted `SchemaInitializer.itemWrap`, no longer need to wrap the `item` component

For more information, refer to the following documentation:

- [Plugin Development / Schema Initializer](/development/client/ui-schema/initializer)
- [API Documentation / SchemaInitializer](https://client.docs.nocobase.com/core/ui-schema/schema-component)

### Adding items to an existing initializer

In the past, we used to get all the `Initializers` through `SchemaInitializerContext` and then add, delete or change them. For example, the following code adds `Hello` to `media` in `BlockInitializers`:

```tsx | pure
const items = useContext<any>(SchemaInitializerContext);
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
```

The new way to add items is to use the `schemaInitializerManager.addItem()` method in the load method of the plugin.

```tsx | pure
class MyPlugin extends Plugin {
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
```

Detailed documentation reference

- [Plugin Development / Schema Initializer / Adding items to an existing initializer](/development/client/ui-schema/initializer)
- [API Documentation / SchemaInitializer / Built-in components and types](https://client.docs.nocobase.com/core/ui-schema/schema-initializer)

### Add the new initializer to the application

Previously added via `SchemaInitializerProvider`, for example:

```tsx | pure
<SchemaInitializerProvider
  initializers={{ BlockInitializers }}
  components={{ ManualActionDesigner }}
></SchemaInitializerProvider>
```

Now add it in the load of the plugin, for example:

```tsx | pure
import { Plugin } from '@nocobase/client';

class MyPlugin extends Plugin {
  async load() {
    this.app.schemaInitializerManager.add(blockInitializers);
    this.app.addComponents({ ManualActionDesigner });
  }
}
```

For detailed documentation refer to

- [Plugin Development / Schema Initializer / Add New Initializer](/development/client/ui-schema/initializer)
- [API Documentation / SchemaInitializerManager / schemaInitializerManager.addItem()](https://client.docs.nocobase.com/core/ui-schema/schema-initializer-manager)

### Add new initializer

Before `SchemaInitializer` support JSON object and component writing, now only `new SchemaInitializer()`.

Example 1: The old way of writing JSON is changed to `new SchemaInitializer()`.

```diff
- export const BlockInitializers = {
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
```

Example 2: Modify the way the component is written to `new SchemaInitializer()`.

Turns out it's the way components are defined:

```tsx | pure
export const BulkEditFormItemInitializers = (props: any) => {
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
```

Now it needs to be changed to the `new SchemaInitializer()` approach:

```tsx | pure
const bulkEditFormItemInitializers = new SchemaInitializer({
  name: 'BulkEditFormItemInitializers',
  'data-testid': 'configure-fields-button-of-bulk-edit-form-item',
  wrap: gridRowColWrap,
  icon: 'SettingOutlined',
  // The original insertPosition and component are transparently passed
  items: [
    {
      type: 'itemGroup',
      title: t('Display fields'),
      name: 'displayFields', // remember to add name
      useChildren: useCustomBulkEditFormItemInitializerFields, // useChildren is used
    },
    {
      type: 'divider',
    },
    {
      title: t('Add text'),
      name: 'addText',
      Component: BlockItemInitializer, // component replace with Component
    },
  ],
});
```

For detailed documentation refer to

- [Plugin Development / Schema Initializer / Add new initializer](/development/client/ui-schema/initializer)
- [API Documentation / SchemaInitializer / new SchemaInitializer(options)](https://client.docs.nocobase.com/core/ui-schema/schema-initializer)

### Item definition and implementation

Previously, when configuring an Item, the props of the components were placed in the item, but now it is recommended to use `componentProps` and `useComponentProps`.

```diff
{
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
```

In the Item component, Item configuration used to be passed directly by props, but now it is obtained by `useSchemaInitializerItem()`, and the related hooks are included:

- `useSchemaInitializer()` to get the current initializer context.
- `useSchemaInitializerItem()` gets the context of the current item.

```diff
const XXXSchemaInitializerItem = (props) => {
-  const { insert, title, schema, foo } = props;
+  const { foo } = props;
+  const { insert } = useSchemaInitializer();
+  const { title, schema } = useSchemaInitializerItem();
 // ...
}
```

Detailed Documentation Reference

- [API Documentation / SchemaInitializer / Built-in Components and Types](https://client.docs.nocobase.com/core/ui-schema/schema-initializer)

## Changes to SchemaSettings

- Added `SchemaSettingsManager` for registering `SchemaSettings`
- Added `useSchemaSettingsItem()`
- Added `useSchemaSettingsRender()`
- Added `x-settings` parameter for configuring schema settings
- Added `x-toolbar` parameter for configuring schema toolbar
- Added `SchemaToolbar` component for customizing schema toolbar
- Added `useSchemaToolbarRender()` to replace the original `useDesigner()`
- Changed `function SchemaSettings` to `class SchemaSettings` for defining settings
- Changed the original `SchemaSettings` to `SchemaSettingsDropdown`
- Changed `SchemaSettings.Item` to `SchemaSettingsItem`
- Changed `SchemaSettings.ItemGroup` to `SchemaSettingsItemGroup`
- Changed `SchemaSettings.SubMenu` to `SchemaSettingsSubMenu`
- Changed `SchemaSettings.Divider` to `SchemaSettingsDivider`
- Changed `SchemaSettings.Remove` to `SchemaSettingsRemove`
- Changed `SchemaSettings.SelectItem` to `SchemaSettingsSelectItem`
- Changed `SchemaSettings.CascaderItem` to `SchemaSettingsCascaderItem`
- Changed `SchemaSettings.SwitchItem` to `SchemaSettingsSwitchItem`
- Changed `SchemaSettings.ModalItem` to `SchemaSettingsModalItem`
- Changed `SchemaSettings.ActionModalItem` to `SchemaSettingsActionModalItem`
- Deleted `x-designer` parameter, deprecated, will be removed in the future, use `x-toolbar` instead
- Deleted `useDesigner()`, deprecated, will be removed in the future, use `useSchemaToolbarRender()` instead

Related Documentation

- [Plugin Development / SchemaSettings Settings](/development/client/ui-schema/initializer)
- [Plugins / SchemaToolbar](/development/client/ui-schema/initializer)
- [API Documentation / SchemaSettings](https://client.docs.nocobase.com/core/ui-schema/schema-component)
- [API Documentation / SchemaSettingsManager](https://client.docs.nocobase.com/core/ui-schema/schema-component)
- [API Documentation / SchemaToolbar](https://client.docs.nocobase.com/core/ui-schema/schema-component)

### Settings definition and implementation

Previously SchemaSettings was implemented with GeneralSchemaDesigner and used in `x-designer`.

```tsx | pure
<GeneralSchemaDesigner>
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
```

Now split the two into `x-toolbar` and `x-settings`, with `x-toolbar` missing and SchemaSettings used in `x-settings`.

```ts
const mySettings = new SchemaSettings({
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
        // useSchemaDesigner() passes props
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
```

Changes in the schema

```diff
{
  type: 'void',
- 'x-designer': 'CustomButton.Designer'
+ 'x-toolbar': 'CustomButtonToolbar',  // optional
+ 'x-settings': 'CustomButtonSettings',
  'x-component': 'CustomButton',
  'x-content': 'Hello2',
}
```

### Implementation of Item for Settings

The previous version of the Item component was very tedious to implement, but now we use useSchemaSettings() to get the Designable of the current Schema, and use the Designable to modify the current Schema.

```diff
function EditBlockTitle(props) {
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
              // obtain schema default value
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
```

Related Documentation Reference

- [Plugin Development / SchemaSettings Setter / How to implement Schema settings](/development/client/ui-schema/settings)
- [Plugin Development / Designable Designer](/development/client/ui-schema/designable)
- [API Reference / SchemaSettings / Built-in Components and Types](https://client.docs.nocobase.com/core/ui-schema/schema-settings)
- [API Reference / Designable](https://client.docs.nocobase.com/core/ui-schema/designable)

## Other

### app.addComponent method privatization

The `app.addComponent` method is privatized and no longer exposed to the public, you need to register the component via the `app.addComponents` method.

```diff
- app.addComponent(MyComponent, 'MyComponent')
+ app.addComponents({ MyComponent })
```

### Delete the `PluginManagerContext`.

```diff
const MyProvider = props => {
- const ctx = useContext(PluginManagerContext);
return <div>
- <PluginManagerContext.Provider value={{components: { ...ctx?.components }}}>
  {/* ... */}
- </PluginManagerContext.Provider>
</div>
}
```
