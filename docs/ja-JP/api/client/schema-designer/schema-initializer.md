# SchemaInitializer

各種スキーマの初期化に使用されます。新しいスキーマは、既存のスキーマノードの任意の位置に挿入することができます。以下にその例を示します：

```ts
{
  properties: {
    // beforeBegin 現在のノードの前に挿入
    node1: {
      properties: {
        // afterBegin 現在のノードの最初の子ノードの前に挿入
        // ...
        // beforeEnd 現在のノードの最後の子ノードの後ろに挿入
      },
    },
    // afterEnd 現在のノードの後ろに挿入
  },
}
```

SchemaInitializerのコアは、`<SchemaInitializer.Button />`と`<SchemaInitializer.Item />`の2つのコンポーネントで構成されています。`<SchemaInitializer.Button />`は、スキーマのドロップダウンメニューボタンを作成するために使用され、ドロップダウンメニューのメニュー項目は`<SchemaInitializer.Item/>`です。

### `<SchemaInitializerProvider />`

### `<SchemaInitializer.Button />`

### `<SchemaInitializer.Item/>`