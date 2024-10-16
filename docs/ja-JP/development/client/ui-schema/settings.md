# SchemaSettings 設定器

UI構成を有効にすると、指定されたブロック、フィールド、アクションの上にマウスを移動させた際に、対応するSchemaツールバーが表示されます。ツールバーの設定ボタンが現在のSchemaの設定器です。

## SchemaSettingsの役割

`SchemaSettings`は、[FieldSchema](https://client.docs.nocobase.com/core/ui-schema/designable#usefieldschema)または[Field](https://client.docs.nocobase.com/core/ui-schema/designable#usefield)の属性を変更することで、コンポーネントがこれらの属性を読み込み、ブロック、フィールド、アクションなどの構成を実現します。

`Field`は`FieldSchema`のインスタンスであり、`Field`を変更してもSchema構造はデータベースに保存されません。現在のインスタンスの属性を変更するだけで、ページをリフレッシュすると失われます。データベースに保存する必要がある場合は、`FieldSchema`を変更する必要があります。

## ビルトインの設定器

## 既存の設定器に設定項目を追加する

`schemaSettingsManager.addItem()`メソッドを使用して設定項目を追加することをお勧めします。itemの詳細な設定は[SchemaSettings Item API](https://client.docs.nocobase.com/core/ui-schema/schema-settings-manager#schemasettingsmanageradditem)を参照してください。

```ts
class PluginDemoAddSchemaSettingsItem extends Plugin {
  async load() {
    this.schemaSettingsManager.addItem(
      'mySettings', // 例、既存のschema settings
      'customItem',
      {
        type: 'item',
        useComponentProps() {},
      },
    );
  }
}
```

## 新しい設定器を追加する

SchemaSettingsの詳細なパラメータは[SchemaSettingsOptions API](https://client.docs-jp.nocobase.com/core/ui-schema/schema-settings#new-schemasettingsoptions)を参照してください。

```ts
const mySettings = new SchemaSettings({
  // 一意の識別子でなければならない
  name: 'mySettings',
  // ドロップダウンメニュー項目
  items: [
    {
      name: 'edit',
      type: 'item',
      useComponentProps() {},
    },
  ],
});
```

### プラグインのloadメソッドで追加する

新しく追加した設定器をアプリに追加するために、`schemaSettingsManager.add()`を使用することをお勧めします。

```ts
class PluginDemoAddSchemaSettings extends Plugin {
  async load() {
    // グローバルコンポーネントを登録する
    this.app.addComponents({ CardItem, HomePage });
    const mySettings = new SchemaSettings({
      name: 'mySettings',
      items: [
        {
          type: 'item',
          name: 'edit',
          useComponentProps() {
            // TODO: 関連設定ロジックを補完する
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

### 新しく追加した設定器の使用方法

追加したSchemaSettingsは、Schemaの`x-settings`パラメータに使用できます。ただし、すべてのコンポーネントが`x-settings`をサポートしているわけではなく、通常はBlockItem、FormItem、CardItemなどのラッパーコンポーネントと組み合わせて使用する必要があります。カスタムコンポーネントでも`useSchemaSettingsRender()`を使用して`x-settings`のレンダリングを処理できます。

#### 既存の`x-settings`をサポートしているSchemaコンポーネント

ほとんどのシーンで`x-settings`はBlockItem、FormItem、CardItemなどのラッパーコンポーネントと組み合わせて使用する必要があります。例えば：

```ts
{
  type: 'void',
  'x-settings': 'mySettings',
  'x-decorator': 'CardItem',
  'x-component': 'Hello',
}
```

#### カスタムコンポーネントが`x-settings`パラメータをサポートする方法

BlockItem、FormItem、CardItemなどのラッパーコンポーネントがニーズに合わない場合は、`useSchemaSettingsRender()`を使用して`x-settings`のレンダリングを処理できます。

ほとんどのシーンで設定はSchemaToolbarに配置されているため、カスタムコンポーネントが`x-toolbar`をサポートすることによって、間接的に`x-settings`をサポートすることも可能です。詳細な使用法は[Schemaツールバー](/development/client/ui-schema/toolbar)を参照してください。

## スキーマ設定の実装方法は？

`useSchemaSettings()`を使用して現在のスキーマの`Designable`を取得し、`Designable`を介してスキーマを操作します。よく使用されるAPIは以下の通りです。

- `dn.insertAdjacent()`
- `dn.getSchemaAttribute()`
- `dn.shallowMerge()`
- `dn.deepMerge()`
- `dn.findOne()`
- `dn.find()`
- `dn.remove()`

詳細については、以下を参照してください。

- [Designable デザイナー](/development/client/ui-schema/designable)
- [Designable API](https://client.docs-jp.nocobase.com/core/ui-schema/designable)

## API 参考

- [SchemaSettingsManager](https://client.docs-nocobase.com/core/ui-schema/schema-settings-manager)
- [SchemaSettings](https://client.docs-nocobase.com/core/ui-schema/schema-settings)
- [Designable](https://client.docs-nocobase.com/core/ui-schema/designable)

