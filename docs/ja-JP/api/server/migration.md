# マイグレーション

`Migration` は NocoBase のアップグレードスクリプトクラスで、通常データベース関連の変更を同期するために使用されます。

## インスタンスプロパティ

### `appVersion`

現在のアプリケーションバージョン番号。このバージョン番号に一致する場合にのみスクリプトが実行されます。

```ts
export default class extends Migration {
  appVersion = '<=1.0.0-alpha.1';
  // ...
}
```

### `on`

アップグレードスクリプトが実行されるトリガーとなるタイミングで、値は `Application` のライフサイクルイベントです。デフォルトは `afterLoad` です。詳細は [Application - イベント](./application.md#イベント) を参照してください。

```ts
export default class extends Migration {
  on = 'afterLoad';
  // ...
}
```

### `app`

現在のアプリケーションの `Application` インスタンス。詳細は [Application](./application.md) を参照してください。

### `pm`

現在のアプリケーションの `PluginManager` インスタンス。詳細は [PluginManager](./plugin-manager.md) を参照してください。

### `plugin`

現在のプラグインの `Plugin` インスタンス。詳細は [Plugin](./plugin.md) を参照してください。

### `db`

現在のアプリケーションの `DataBase` インスタンス。詳細は [DataBase](../database/index.md) を参照してください。

### `sequelize`

`Sequelize` インスタンス。詳細は <a href="https://sequelize.org/" target="_blank">Sequelize</a> を参照してください。

### `queryInterface`

詳細は <a href="https://sequelize.org/docs/v6/other-topics/query-interface/" target="_blank">Sequelize - Query Interface</a> を参照してください。

### インスタンスメソッド

### `up()`

アップグレード実行メソッド。

### `down()`

ダウングレード実行メソッド。