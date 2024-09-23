# UI スキーマ

フロントエンドコンポーネントを記述するためのプロトコルで、Formily Schema 2.0 に基づき、JSON Schema スタイルです。

```ts
interface ISchema {
  type: 'void' | 'string' | 'number' | 'object' | 'array';
  name?: string;
  title?: any;
  // ラッパーコンポーネント
  ['x-decorator']?: string;
  // ラッパーコンポーネントの属性
  ['x-decorator-props']?: any;
  // 動的ラッパーコンポーネントの属性
  ['x-use-decorator-props']?: any;
  // コンポーネント
  ['x-component']?: string;
  // コンポーネントの属性
  ['x-component-props']?: any;
  // 動的コンポーネントの属性
  ['x-use-component-props']?: any;
  // 表示状態、デフォルトは 'visible'
  ['x-display']?: 'none' | 'hidden' | 'visible';
  // コンポーネントの子ノード、簡単に使用
  ['x-content']?: any;
  // children ノードのスキーマ
  properties?: Record<string, ISchema>;

  // 以下はフィールドコンポーネントのみで使用

  // フィールドの反応
  ['x-reactions']?: SchemaReactions;
  // フィールド UI インタラクションモード、デフォルトは 'editable'
  ['x-pattern']?: 'editable' | 'disabled' | 'readPretty';
  // フィールドの検証
  ['x-validator']?: Validator;
  // デフォルトデータ
  default?: any;

  // デザイナー関連

  // 初期化器、現在のスキーマの隣接位置に挿入可能な要素を決定
  ['x-initializer']?: string;
  ['x-initializer-props']?: any;

  // ブロック設定、現在のスキーマで設定可能なパラメータを決定
  ['x-settings']?: string;
  ['x-settings-props']?: any;

  // ツールバーコンポーネント
  ['x-toolbar']?: string;
  ['x-toolbar-props']?: any;
}
```

## サンプル

### 最も簡単なコンポーネント

すべてのネイティブ HTML タグはスキーマ形式に変換できます。例えば：

```ts
{
  type: 'void',
  'x-component': 'h1',
  'x-content': 'Hello, world!',
}
```

JSX サンプル

```tsx | pure
<h1>Hello, world!</h1>
```

### 子コンポーネント

children コンポーネントは properties に記述します。

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

JSX は次のように等価です。

```tsx | pure
<div className={'form-item'}>
  <input name={'title'} />
</div>
```

## パラメータの説明

### `type`

ノードのタイプ

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

スキーマ名

```ts
type SchemaName = string;
interface ISchema {
  name?: SchemaName; // ルートノード
  properties?: {
    [name: SchemaName]?: ISchema; // 子ノード
  }
};
```

すべてのスキーマには name があり、子ノードの name も properties のキーとして使用されます。

```ts
{
  name: 'root',
  properties: {
    child1: {
      // ここでは name を書く必要はありません
    },
  },
}
```

### `title`

ノードタイトル

```ts
type SchemaTitle = string;
interface ISchema {
  title?: SchemaTitle;
}
```

### `properties`

children コンポーネントは properties に記述できます。

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

JSX は次のように等価です。

```tsx | pure
<div className={'form-item'}>
  <input name={'title'} />
</div>
```

### `x-component`

コンポーネント

```ts
type Component = any;
interface ISchema {
  ['x-component']?: Component;
}
```

すべてのネイティブ HTML タグはスキーマ形式に変換できます。例えば：

```ts
{
  type: 'void',
  'x-component': 'h1',
  'x-content': 'Hello, world!',
}
```

JSX サンプル

```tsx | pure
<h1>Hello, world!</h1>
```

### `x-component-props` と `x-use-component-props`

`x-component-props` はコンポーネントの属性です。

```ts
{
  type: 'void',
  'x-component': 'Table',
  'x-component-props': {
    loading: true,
  },
}
```

場合によっては、コンポーネントの属性は動的であり、`x-use-component-props`を使用することができます。

```ts
{
  type: 'void',
  'x-component': 'MyTable',
  'x-use-component-props': 'useTableProps',
}
```

ここでの MyTable コンポーネントは、`withDynamicSchemaProps` 高階関数でラップする必要があります。例えば：

```ts
const MyTable = withDynamicSchemaProps(Table, { displayName: 'MyTable' });
```

`useTableProps` は、コンポーネントの属性を動的に生成するためのカスタムフックです。

```ts
const useTableProps = () => {
  const service = useRequest({ xx });
  return {
    loading: service.loading,
  };
};
```

これをスコープに登録する必要があります。詳細はドキュメント [Schema 渲染](/development/client/ui-schema/rendering) を参照してください。

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

ラッパーコンポーネント

```ts
type Decorator = any;
interface ISchema {
  ['x-decorator']?: Decorator;
}
```

`x-decorator` と `x-component` の組み合わせにより、2つのコンポーネントを1つのスキーマノードに配置でき、スキーマ構造の複雑さを軽減し、コンポーネントの再利用率を向上させます。

例えば、フォームのシナリオでは、FormItem コンポーネントと任意のフィールドコンポーネントを組み合わせることができます。この場合、FormItem はデコレーターです。

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

JSX は次のようになります。

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

すべてのブロックを包むための CardItem コンポーネントを提供することもでき、これによりすべてのブロックが Card で包まれます。

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

JSX は次のようになります。

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

### `x-decorator-props` と `x-use-decorator-props`

`x-component-props` と `x-use-component-props` の使用法と同様に、コンポーネントを `withDynamicSchemaProps()` 高階関数でラップする必要があります。

### `x-display`

コンポーネントの表示状態

- `'x-display': 'visible'`：コンポーネントを表示
- `'x-display': 'hidden'`：コンポーネントを非表示にし、データは非表示にしない
- `'x-display': 'none'`：コンポーネントを非表示にし、データも非表示

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

JSX は次のようになります。

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

JSX は次のようになります。

```tsx | pure
<div className={'form-item'}>
  {/* ここでは input コンポーネントは出力されず、name=title のフィールドモデルは存在します */}
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

JSX は次のようになります。

```tsx | pure
<div className={'form-item'}>
  {/* ここでは input コンポーネントは出力されず、name=title のフィールドモデルも存在しません */}
</div>
```

### `x-pattern`

コンポーネントの表示モード

フィールドコンポーネントに使用され、3つの表示モードがあります。

- `'x-pattern': 'editable'`：編集可能
- `'x-pattern': 'disabled'`：編集不可
- `'x-pattern': 'readPretty'`：読みやすい

単一行テキスト `<SingleText />` コンポーネントの場合、編集可能と編集不可モードは `<input />`、読みやすいモードは `<div />` です。

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

JSX は次のように等価です。

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

JSX は次のように等価です。

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

JSX は次のように等価です。

```tsx | pure
<div className={'form-item'}>
  <div>Hello</div>
</div>
```

### `x-initializer`

すべてのコンポーネントが `x-initializer` をサポートしているわけではなく、既存の汎用スキーマコンポーネントでは、Grid、ActionBar、Tabs のみが `x-initializer` パラメータをサポートします。

```ts
{
  type: 'void',
  'x-component': 'Grid',
  'x-initializer': 'myInitializer',
}
```

カスタムコンポーネントでも、`useSchemaInitializerRender()` を使用して `x-initializer` のレンダリングを処理できます。詳細な使い方は [SchemaInitializer 初期化器](#) セクションを参照してください。

### `x-settings`

すべてのコンポーネントが `x-settings` をサポートしているわけではなく、通常は BlockItem、FormItem、CardItem などのラッパーコンポーネントと組み合わせて使用します。

```ts
{
  type: 'void',
  'x-settings': 'mySettings',
  'x-decorator': 'CardItem',
  'x-component': 'Hello',
}
```

カスタムコンポーネントでも、`useSchemaSettingsRender()` を使用して `x-settings` のレンダリングを処理できます。詳細な使い方は [SchemaSettings 設定器](#) セクションを参照してください。

### `x-toolbar`

すべてのコンポーネントが `x-toolbar` をサポートしているわけではなく、通常は BlockItem、FormItem、CardItem などのラッパーコンポーネントと組み合わせて使用します。

```ts
{
  type: 'void',
  'x-toolbar': 'HelloToolbar',
  'x-decorator': 'CardItem',
  'x-component': 'Hello',
}
```

カスタムコンポーネントでも、`useToolbarRender()` を使用して `x-toolbar` のレンダリングを処理できます。詳細な使い方は [SchemaToolbar ツールバー](#) セクションを参照してください。

