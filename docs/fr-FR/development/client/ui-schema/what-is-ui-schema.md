# UI Schema

A protocol for describing frontend components, based on Formily Schema 2.0, in a JSON Schema style.

```ts
interface ISchema {
  type: 'void' | 'string' | 'number' | 'object' | 'array';
  name?: string;
  title?: any;
  // Decorator component
  ['x-decorator']?: string;
  // Decorator component properties
  ['x-decorator-props']?: any;
  // Dynamic decorator component properties
  ['x-use-decorator-props']?: any;
  // Component
  ['x-component']?: string;
  // Component properties
  ['x-component-props']?: any;
  // Dynamic component properties
  ['x-use-component-props']?: any;
  // Display state, default is 'visible'
  ['x-display']?: 'none' | 'hidden' | 'visible';
  // Component's child nodes, simple usage
  ['x-content']?: any;
  // children node schema
  properties?: Record<string, ISchema>;

  // Below are only used for field components

  // Field reactions
  ['x-reactions']?: SchemaReactions;
  // Field UI interaction mode, default is 'editable'
  ['x-pattern']?: 'editable' | 'disabled' | 'readPretty';
  // Field validation
  ['x-validator']?: Validator;
  // Default data
  default?: any;

  // For designer related

  // Initializer, determines what can be inserted adjacent to the current schema
  ['x-initializer']?: string;
  ['x-initializer-props']?: any;

  // Block settings, determines what parameters can be configured for the current schema
  ['x-settings']?: string;
  ['x-settings-props']?: any;

  // Toolbar component
  ['x-toolbar']?: string;
  ['x-toolbar-props']?: any;
}
```

## Examples

### Simplest Component

All native HTML tags can be written as schemas. For example:

```ts
{
  type: 'void',
  'x-component': 'h1',
  'x-content': 'Hello, world!',
}
```

JSX Example

```tsx | pure
<h1>Hello, world!</h1>
```

### Child Components

Children components are written in properties

```tsx | pure
{
  type: 'void',
  'x-component': 'div',
  'x-component-props': { className: 'form-item' },
  properties: {
    title: {
      type: 'string',
      'x-component': 'input',
    },
  },
}
```

Equivalent JSX

```tsx | pure
<div className={'form-item'}>
  <input name={'title'} />
</div>
```

## Parameter Descriptions

### `type`

Type of the node

```ts
type SchemaTypes =
  | 'string'
  | 'object'
  | 'array'
  | 'number'
  | 'boolean'
  | 'void';
interface ISchema {
  type?: SchemaTypes;
}
```

### `name`

Schema name

```ts
type SchemaName = string;
interface ISchema {
  name?: SchemaName; // Root node
  properties?: {
    [name: SchemaName]?: ISchema; // Child node
  }
};
```

All schemas have a name, and child node names are also the keys of properties

```ts
{
  name: 'root',
  properties: {
    child1: {
      // No need to write name here
    },
  },
}
```

### `title`

Node title

```ts
type SchemaTitle = string;
interface ISchema {
  title?: SchemaTitle;
}
```

### `properties`

Children components can be written in properties

```ts
{
  type: 'void',
  'x-component': 'div',
  'x-component-props': { className: 'form-item' },
  properties: {
    title: {
      type: 'string',
      'x-component': 'input',
    },
  },
}
```

Equivalent JSX

```tsx | pure
<div className={'form-item'}>
  <input name={'title'} />
</div>
```

### `x-component`

Component

```ts
type Component = any;
interface ISchema {
  ['x-component']?: Component;
}
```

All native HTML tags can be written as schemas. For example:

```ts
{
  type: 'void',
  'x-component': 'h1',
  'x-content': 'Hello, world!',
}
```

JSX Example

```tsx | pure
<h1>Hello, world!</h1>
```

### `x-component-props` and `x-use-component-props`

`x-component-props` are component properties.

```ts
{
  type: 'void',
  'x-component': 'Table',
  'x-component-props': {
    loading: true,
  },
}
```

In some cases, component properties are dynamic, so you can use `x-use-component-props`.

```ts
{
  type: 'void',
  'x-component': 'MyTable',
  'x-use-component-props': 'useTableProps',
}
```

The `MyTable` component needs to be wrapped with a higher-order function `withDynamicSchemaProps`. For example:

```ts
const MyTable = withDynamicSchemaProps(Table, { displayName: 'MyTable' });
```

`useTableProps` is a custom hook for dynamically generating component properties.

```ts
const useTableProps = () => {
  const service = useRequest({xx});
  return {
    loading: service.loading,
  };
};
```

You also need to register it in the scope, refer to the documentation [Schema Rendering](/development/client/ui-schema/rendering).

```tsx | pure
<SchemaComponent
  scope={{ useTableProps }}
  components={{ MyTable }}
  schema={{
    type: 'void',
    'x-component': 'MyTable',
    'x-use-component-props': 'useTableProps',
  }}
>
```

### `x-decorator`

Decorator component

```ts
type Decorator = any;
interface ISchema {
  ['x-decorator']?: Decorator;
}
```

The combination of x-decorator and x-component allows you to place two components in one schema node, reducing schema structure complexity and increasing component reusability.

For example, in a form scenario, you can combine the FormItem component with any field component, where FormItem is the Decorator.

```ts
{
  type: 'void',
  ['x-component']: 'div',
  properties: {
    title: {
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    content: {
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'Input.TextArea',
    },
  },
}
```

Equivalent JSX

```tsx | pure
<div>
  <FormItem>
    <Input name={'title'} />
  </FormItem>
  <FormItem>
    <Input.TextArea name={'content'} />
  </FormItem>
</div>
```

You can also provide a CardItem component to wrap all blocks, so all blocks are wrapped by Card.

```ts
{
  type: 'void',
  ['x-component']: 'div',
  properties: {
    table: {
      type: 'array',
      'x-decorator': 'CardItem',
      'x-component': 'Table',
    },
    kanban: {
      type: 'array',
      'x-decorator': 'CardItem',
      'x-component': 'Kanban',
    },
  },
}
```

Equivalent JSX

```tsx | pure
<div>
  <CardItem>
    <Table />
  </CardItem>
  <CardItem>
    <Kanban />
  </CardItem>
</div>
```

### `x-decorator-props` and `x-use-decorator-props`

Use similarly to `x-component-props` and `x-use-component-props`. The `withDynamicSchemaProps()` higher-order function needs to be used for decorator components.

### `x-display`

Component display state

- `'x-display': 'visible'`: Show component
- `'x-display': 'hidden'`: Hide component, data is not hidden
- `'x-display': 'none'`: Hide component, data is also hidden

#### `'x-display': 'visible'`

```ts
{
  type: 'void',
  'x-component': 'div',
  'x-component-props': { className: 'form-item' },
  properties: {
    title: {
      type: 'string',
      'x-component': 'input',
      'x-display': 'visible'
    },
  },
}
```

Equivalent JSX

```tsx | pure
<div className={'form-item'}>
  <input name={'title'} />
</div>
```

#### `'x-display': 'hidden'`

```ts
{
  type: 'void',
  'x-component': 'div',
  'x-component-props': { className: 'form-item' },
  properties: {
    title: {
      type: 'string',
      'x-component': 'input',
      'x-display': 'hidden'
    },
  },
}
```

Equivalent JSX

```tsx | pure
<div className={'form-item'}>
  {/* No input component is output here, but the field model with name=title still exists */}
</div>
```

#### `'x-display': 'none'`

```ts
{
  type: 'void',
  'x-component': 'div',
  'x-component-props': { className: 'form-item' },
  properties: {
    title: {
      type: 'string',
      'x-component': 'input',
      'x-display': 'none'
    },
  },
}
```

Equivalent JSX

```tsx | pure
<div className={'form-item'}>
  {/* No input component is output here, and the field model with name=title does not exist */}
</div>
```

### `x-pattern`

Component display mode

Used for field components, there are three display modes:

- `'x-pattern': 'editable'`: Editable
- `'x-pattern': 'disabled'`: Non-editable
- `'x-pattern': 'readPretty'`: Read-only

For example, the single-line text `<SingleText />` component, editable and non-editable modes are `<input />`, read-only mode is `<div />`.

#### `'x-pattern': 'editable'`

```ts
const schema = {
  name: 'test',
  type: 'void',
  'x-component': 'div',
  'x-component-props': { className: 'form-item' },
  properties: {
    title: {
      type: 'string',
      default: 'Hello',
      'x-component': 'SingleText',
      'x-pattern': 'editable',
    },
  },
};
```

Equivalent JSX

```tsx | pure
<div className={'form-item'}>
  <input name={'title'} value={'Hello'} />
</div>
```

#### `'x-pattern': 'disabled'`

```ts
const schema = {
  name: 'test',
  type: 'void',
  'x-component': 'div',
  'x-component-props': { className: 'form-item' },
  properties: {
    title: {
      type: 'string',
      default: 'Hello',
      'x-component': 'SingleText',
      'x-pattern': 'disabled',
    },
  },
};
```

Equivalent JSX

```tsx | pure
<div className={'form-item'}>
  <input name={'title'} value={'Hello'} disabled />
</div>
```

#### `'x-pattern': 'readPretty'`

```ts
const schema = {
  name: 'test',
  type: 'void',
  'x-component': 'div',
  'x-component-props': { className: 'form-item' },
  properties: {
    title: {
      type: 'string',
      default: 'Hello',
      'x-component': 'SingleText',
      'x-pattern': 'readPretty',
    },
  },
};
```

Equivalent JSX

```tsx | pure
<div className={'form-item'}>
  <div>Hello</div>
</div>
```

### `x-initializer`

Not all components support `x-initializer`. Among existing common schema components, only Grid, ActionBar, and Tabs support the `x-initializer` parameter.

```ts
{
  type: 'void',
  'x-component': 'Grid',
  'x-initializer': 'myInitializer',
}
```

Custom components can also use `useSchemaInitializerRender()` to handle `x-initializer` rendering. Refer to the [SchemaInitializer Initializer](/development/client/ui-schema/initializer) section for detailed usage.

### `x-settings`

Not all components support `x-settings`. Usually, it needs to be combined with wrapper components such as BlockItem, FormItem, CardItem.

```ts
{
  type: 'void',
  'x-settings': 'mySettings',
  'x-decorator': 'CardItem',
  'x-component': 'Hello',
}
```

Custom components can also use `useSchemaSettingsRender()` to handle `x-settings` rendering. Refer to the [SchemaSettings Configurator](/development/client/ui-schema/settings) section for detailed usage.

### `x-toolbar`

Not all components support `x-toolbar`. Usually, it needs to be combined with wrapper components such as BlockItem, FormItem, CardItem.

```ts
{
  type: 'void',
  'x-toolbar': 'HelloToolbar',
  'x-decorator': 'CardItem',
  'x-component': 'Hello',
}
```

Custom components can also use `useToolbarRender()` to handle `x-toolbar` rendering. Refer to the [SchemaToolbar Toolbar](/development/client/ui-schema/toolbar) section for detailed usage.