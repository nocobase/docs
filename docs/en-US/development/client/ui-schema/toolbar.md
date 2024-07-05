# Schema toolbar

After activating the UI configuration, a toolbar corresponding to the Schema will appear when the mouse hovers over the specified block, field, or action.

![Alt text](https://static-docs.nocobase.com/e6d327da8e85d6548529e1051d06c31a.png)

The toolbar consists of:

- Title, default is empty
- Drag control, providing drag capability, default is draggable
- Initializer, default is empty
- Settings, default is empty

```tsx | pure
<SchemaToolbar
  title="Title"
  draggable
  initialize={'myInitializer'}
  settings={'mySettings'}
/>
```

## Usage

The SchemaToolbar component is used in `x-toolbar`, for example:

```ts
// Using the built-in SchemaToolbar
{
  'x-toolbar': 'SchemaToolbar',
  'x-toolbar-props': {},
}
// Custom SchemaToolbar
{
  'x-toolbar': 'MySchemaToolbar',
  'x-toolbar-props': {},
}
```

## Schema components that support `x-toolbar` include

- `BlockItem` (wrapper component, generally used in `x-decorator`)
- `CardItem` (wrapper component, generally used in `x-decorator`)
- `FormItem` (wrapper component, generally used in `x-decorator`)
- `Action` (action button component, used in `x-component`)

If the schema's `x-component` or `x-decorator` uses the above components and `x-settings` is configured, `x-toolbar` can be omitted, and the built-in `SchemaToolbar` will be used by default.

<code src="./demos/schema-toolbar-basic/index.tsx"></code>

You can also customize the toolbar component.

<code src="./demos/schema-toolbar-basic/custom.tsx"></code>

When used in a Grid layout, schemas within the rows and columns will inherit the Grid's `x-initializer`.

<code src="./demos/schema-toolbar-basic/grid.tsx"></code>

## Supporting `x-toolbar` for custom components

<code src="./demos/schema-toolbar-basic/button.tsx"></code>