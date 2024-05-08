# UI Schema

一种描述前端组件的协议，基于 Formily Schema 2.0，类 JSON Schema 风格。

```ts
interface ISchema {
  type: 'void' | 'string' | 'number' | 'object' | 'array';
  name?: string;
  title?: any;
  // 包装器组件
  ['x-decorator']?: string;
  // 包装器组件属性
  ['x-decorator-props']?: any;
  // 动态包装器组件属性
  ['x-use-decorator-props']?: any;
  // 组件
  ['x-component']?: string;
  // 组件属性
  ['x-component-props']?: any;
  // 动态组件属性
  ['x-use-component-props']?: any;
  // 展示状态，默认为 'visible'
  ['x-display']?: 'none' | 'hidden' | 'visible';
  // 组件的子节点，简单使用
  ['x-content']?: any;
  // children 节点 schema
  properties?: Record<string, ISchema>;

  // 以下仅字段组件时使用

  // 字段联动
  ['x-reactions']?: SchemaReactions;
  // 字段 UI 交互模式，默认为 'editable'
  ['x-pattern']?: 'editable' | 'disabled' | 'readPretty';
  // 字段校验
  ['x-validator']?: Validator;
  // 默认数据
  default: ?:any;

  // 设计器相关

  // 初始化器，决定当前 schema 相邻位置可以插入什么
  ['x-initializer']?: string;
  ['x-initializer-props']?: any;

  // 区块设置，决定当前 schema 可以配置哪些参数
  ['x-settings']?: string;
  ['x-settings-props']?: any;

  // 工具栏组件
  ['x-toolbar']?: string;
  ['x-toolbar-props']?: any;
}
```

## 示例

### 最简单的组件

所有的原生 html 标签都可以转为 schema 的写法。如：

```ts
{
  type: 'void',
  'x-component': 'h1',
  'x-content': 'Hello, world!',
}
```

JSX 示例

```tsx | pure
<h1>Hello, world!</h1>
```

### 子组件

children 组件写在 properties 里

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

JSX 等同于

```tsx | pure
<div className={'form-item'}>
  <input name={'title'} />
</div>
```

## 参数说明

### `type`

节点的类型

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

schema 名称

```ts
type SchemaName = string;
interface ISchema {
  name?: SchemaName; // 根节点
  properties?: {
    [name: SchemaName]?: ISchema; // 子节点
  }
};
```

所有的 schema 都有 name，子节点 name 也是 properties 的 key

```ts
{
  name: 'root',
  properties: {
    child1: {
      // 这里就不需要写 name 了
    },
  },
}
```

### `title`

节点标题

```ts
type SchemaTitle = string;
interface ISchema {
  title?: SchemaTitle;
}
```

### `properties`

children 组件可以写在 properties 里

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

JSX 等同于

```tsx | pure
<div className={'form-item'}>
  <input name={'title'} />
</div>
```

### `x-component`

组件

```ts
type Component = any;
interface ISchema {
  ['x-component']?: Component;
}
```

所有的原生 html 标签都可以转为 schema 的写法。如：

```ts
{
  type: 'void',
  'x-component': 'h1',
  'x-content': 'Hello, world!',
}
```

JSX 示例

```tsx | pure
<h1>Hello, world!</h1>
```

### `x-component-props` 和 `x-use-component-props`

`x-component-props` 是组件属性。

```ts
{
  type: 'void',
  'x-component': 'Table',
  'x-component-props': {
    loading: true,
  },
}
```

有些情况下，组件属性是动态的，可以使用 `x-use-component-props`。

```ts
{
  type: 'void',
  'x-component': 'MyTable',
  'x-use-component-props': 'useTableProps',
}
```

这里的 MyTable 组件需要使用 `withDynamicSchemaProps` 高阶函数包一下，例如：

```ts
const MyTable = withDynamicSchemaProps(Table, { displayName: 'MyTable' });
```

`useTableProps` 是一个自定义的 hook，用于动态生成组件属性。

```ts
const useTableProps = () => {
  const service = useRequest({xx});
  return {
    loading: service.loading,
  };
};
```

我们还需要将其注册到 scope 中，具体参考文档 [Schema 渲染](/development/client/ui-schema/rendering)。

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

包装器组件

```ts
type Decorator = any;
interface ISchema {
  ['x-decorator']?: Decorator;
}
```

x-decorator + x-component 的组合，可以将两个组件放在一个 schema 节点里，降低 schema 结构复杂度，提高组件的复用率。

例如表单场景里，可以将 FormItem 组件与任意字段组件组合，在这里 FormItem 就是 Decorator。

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

JSX 等同于

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

也可以提供一个 CardItem 组件，用于包裹所有区块，这样所有区块就都是 Card 包裹的了。

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

JSX 等同于

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

### `x-decorator-props` 和 `x-use-decorator-props`

同 `x-component-props` 和 `x-use-component-props` 使用方式想通，`withDynamicSchemaProps()` 高阶函数需要用于包装器组件。

### `x-display`

组件的展示状态

- `'x-display': 'visible'`：显示组件
- `'x-display': 'hidden'`：隐藏组件，数据不隐藏
- `'x-display': 'none'`：隐藏组件，数据也隐藏

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

JSX 等同于

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

JSX 等同于

```tsx | pure
<div className={'form-item'}>
  {/* 此处不输出 input 组件，对应的 name=title 的字段模型还存在 */}
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

JSX 等同于

```tsx | pure
<div className={'form-item'}>
  {/* 此处不输出 input 组件，对应的 name=title 的字段模型也不存在了 */}
</div>
```

### `x-pattern`

组件的显示模式

用于字段组件，有三种显示模式：

- `'x-pattern': 'editable'` 可编辑
- `'x-pattern': 'disabled'` 不可编辑
- `'x-pattern': 'readPretty'` 友好阅读

如单行文本 `<SingleText />` 组件，编辑和不可编辑模式为 `<input />`，友好阅读模式为 `<div />`

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

JSX 等同于

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

JSX 等同于

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

JSX 等同于

```tsx | pure
<div className={'form-item'}>
  <div>Hello</div>
</div>
```

### `x-initializer`

并不是所有的组件都支持 `x-initializer`，已有的通用的 schema 组件中，只有 Grid、ActionBar、Tabs 支持 `x-initializer` 参数。

```ts
{
  type: 'void',
  'x-component': 'Grid',
  'x-initializer': 'myInitializer',
}
```

自定义的组件中，也可以使用 `useSchemaInitializerRender()` 自主处理 `x-initializer` 的渲染，详细用法参考 [SchemaInitializer 初始化器](#) 章节。

### `x-settings`

并不是所有的组件都支持 `x-settings`，通常需要和 BlockItem、FormItem、CardItem 这类包装器组件结合使用。

```ts
{
  type: 'void',
  'x-settings': 'mySettings',
  'x-decorator': 'CardItem',
  'x-component': 'Hello',
}
```

自定义的组件中，也可以使用 `useSchemaSettingsRender()` 自主处理 `x-settings` 的渲染，详细用法参考 [SchemaSettings 配置器](#) 章节。

### `x-toolbar`

并不是所有的组件都支持 `x-toolbar`，通常需要和 BlockItem、FormItem、CardItem 这类包装器组件结合使用。

```ts
{
  type: 'void',
  'x-toolbar': 'HelloToolbar',
  'x-decorator': 'CardItem',
  'x-component': 'Hello',
}
```

自定义的组件中，也可以使用 `useToolbarRender()` 自主处理 `x-toolbar` 的渲染，详细用法参考 [SchemaToolbar 工具栏](#) 章节。
