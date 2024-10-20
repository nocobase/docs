# フィールド拡張

NocoBase におけるコレクションフィールドの構成は以下の通りです：

<img src="./collection-field.svg" />

## フィールドタイプの拡張

例えば、パスワードタイプフィールドを拡張する場合は、次のように記述します： `type: 'password'`

```ts
export class MyPlugin extends Plugin {
  beforeLoad() {
    this.db.registerFieldTypes({
      password: PasswordField,
    });
  }
}

export class PasswordField extends Field {
  get dataType() {
    return DataTypes.STRING;
  }
}
```

- [その他のビルトインフィールドタイプの実装についてはこちらを参照](https://github.com/nocobase/nocobase/tree/main/packages/core/database/src/fields)
- 完全なサンプルプラグインは [packages/samples/shop-modeling](https://github.com/nocobase/nocobase/tree/main/packages/samples/shop-modeling) で確認できます

## フィールドコンポーネントの拡張

関連する拡張ドキュメントは以下をご覧ください：

- [スキーマコンポーネントの拡張](/development/client/ui-schema-designer/extending-schema-components)
- [スキーマコンポーネントライブラリ](/development/client/ui-schema-designer/component-library)

## フィールドインターフェースの拡張

- [ビルトインフィールドインターフェースの詳細はこちらを参照](https://github.com/nocobase/nocobase/tree/main/packages/core/client/src/collection-manager/interfaces)

