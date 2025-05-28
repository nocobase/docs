# Schema settings

After activating the UI configuration, when the mouse moves over a specific block, field, or action, the corresponding Schema toolbar will be displayed. The settings button in the toolbar is the settings component for the current Schema.

![Alt text](https://static-docs.nocobase.com/3f37519ddd9ba1a99f1fdbfe32b4a454.png)

## Built-in settings

<img src="./image-4.png" />

## Adding settings items to existing settings

It is recommended to use the `schemaSettingsManager.addItem()` method to add settings items. For detailed item configurations, refer to [SchemaSettings Item API](#).

```ts
class PluginDemoAddSchemaSettingsItem extends Plugin {
  async load() {
    this.schemaSettingsManager.addItem(
      'mySettings', // Example of existing schema settings
      'customItem',
      {
        type: 'item',
        useComponentProps() {},
      },
    );
  }
}
```

<code src="./demos/schema-settings-manager-add-item/index.tsx"></code>

## Adding new settings

For detailed parameters of SchemaSettings, refer to [SchemaSettingsOptions API](https://client.docs-cn.nocobase.com/core/ui-schema/schema-settings#new-schemasettingsoptions).

```ts
const mySettings = new SchemaSettings({
  // Must be a unique identifier
  name: 'mySettings',
  // Dropdown menu items
  items: [
    {
      name: 'edit',
      type: 'item',
      useComponentProps() {},
    },
  ],
});
```

### Adding in the plugin's load method

It is recommended to use `schemaSettingsManager.add()` to add the new settings to the application.

```ts
class PluginDemoAddSchemaSettings extends Plugin {
  async load() {
    // Register global components
    this.app.addComponents({ CardItem, HomePage });
    const mySettings = new SchemaSettings({
      name: 'mySettings',
      items: [
        {
          type: 'item',
          name: 'edit',
          useComponentProps() {
            // TODO: Add relevant settings logic
            return {
              title: 'Edit',
              onClick() {
                // todo
              },
            };
          },
        },
      ],
    });
    this.schemaSettingsManager.add(mySettings);
  }
}
```

### How to use the newly added settings

The added SchemaSettings can be used in the Schema's `x-settings` parameter. Not all components support `x-settings`; it is usually used in combination with wrapper components such as BlockItem, FormItem, CardItem. In custom components, you can also use `useSchemaSettingsRender()` to handle the rendering of `x-settings` independently.

#### Schema components that currently support `x-settings`

In most scenarios, `x-settings` need to be used in combination with wrapper components such as BlockItem, FormItem, CardItem. For example:

```ts
{
  type: 'void',
  'x-settings': 'mySettings',
  'x-decorator': 'CardItem',
  'x-component': 'Hello',
}
```

<code src="./demos/schema-settings-manager-add/index.tsx"></code>

#### How to support `x-settings` in custom components

If the wrapper components like BlockItem, FormItem, CardItem do not meet your needs, you can use `useSchemaSettingsRender()` to handle the rendering of `x-settings`.

<code src="./demos/use-schema-settings-render/index.tsx"></code>

In most scenarios, settings are placed on the SchemaToolbar, so supporting `x-toolbar` for custom components can also indirectly support `x-settings`. For more usage details, refer to [Schema toolbar](/development/client/ui-schema/toolbar).

<code src="./demos/schema-toolbar-basic/button.tsx"></code>

## How to implement Schema settings?

Use `useSchemaSettings()` to get the current Schema's `Designable`, and operate the Schema through `Designable`. Common APIs include:

- `dn.insertAdjacent()`
- `dn.getSchemaAttribute()`
- `dn.shallowMerge()`
- `dn.deepMerge()`
- `dn.findOne()`
- `dn.find()`
- `dn.remove()`
- `dn.remove()`

For more details, refer to:

- [Designable Designer](/development/client/ui-schema/designable)
- [Designable API](https://client.docs-cn.nocobase.com/core/ui-schema/designable)

<code src="./demos/schema-settings-basic/index.tsx"></code>

## API Reference

- [SchemaSettingsManager](https://client.docs-cn.nocobase.com/core/ui-schema/schema-settings-manager)
- [SchemaSettings](https://client.docs-cn.nocobase.com/core/ui-schema/schema-settings)
- [Designable](https://client.docs-cn.nocobase.com/core/ui-schema/designable)
