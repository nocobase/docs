# SchemaToolbar ツールバー

UI 設定が有効化されると、マウスを指定されたブロック、フィールド、アクションの上に移動すると、対応する Schema のツールバーが表示されます。

![Alt text](https://static-docs.nocobase.com/e6d327da8e85d6548529e1051d06c31a.png)

ツールバーの構成要素は以下の通りです：

- タイトル（デフォルトは空）
- ドラッグ可能なコントロール（ドラッグ機能を提供し、デフォルトでドラッグ可能）
- イニシャライザー（デフォルトは空）
- セッター（デフォルトは空）

```tsx | pure
<SchemaToolbar
  title="Title"
  draggable
  initialize={'myInitializer'}
  settings={'mySettings'}
/>
```

## 使用法

SchemaToolbar コンポーネントは `x-toolbar` の中で使用されます。例：

```ts
// 組み込みの SchemaToolbar を使用
{
  'x-toolbar': 'SchemaToolbar',
  'x-toolbar-props': {},
}
// カスタム SchemaToolbar
{
  'x-toolbar': 'MySchemaToolbar',
  'x-toolbar-props': {},
}
```

## `x-toolbar` をサポートする Schema コンポーネント

- `BlockItem`（ラッパーコンポーネント、一般的に `x-decorator` に使用）
- `CardItem`（ラッパーコンポーネント、一般的に `x-decorator` に使用）
- `FormItem`（ラッパーコンポーネント、一般的に `x-decorator` に使用）
- `Action`（アクションボタンコンポーネント、`x-component` に使用）

もし schema の `x-component` または `x-decorator` が上記のコンポーネントを使用し、かつ `x-settings` が設定されている場合、`x-toolbar` は省略可能で、デフォルトで組み込みの `SchemaToolbar` がレンダリングされます。

<code src="./demos/schema-toolbar-basic/index.tsx"></code>

ツールバーコンポーネントをカスタマイズすることも可能です。

<code src="./demos/schema-toolbar-basic/custom.tsx"></code>

Grid レイアウト内で使用される場合、行内の schema は Grid の `x-initializer` を継承します。

<code src="./demos/schema-toolbar-basic/grid.tsx"></code>

## カスタムコンポーネントに `x-toolbar` をサポート

<code src="./demos/schema-toolbar-basic/button.tsx"></code>

