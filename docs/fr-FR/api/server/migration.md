# Migration

`Migration` is a class in NocoBase used for upgrade scripts, typically used to synchronize database-related changes.

## Instance Properties

### `appVersion`

Current application version. The script will be executed only if it matches the version.

```typescript
export default class extends Migration {
  appVersion = '<=1.0.0-alpha.1';
  // ...
}
```

### `on`

The trigger timing for the upgrade script execution, with a default value of `afterLoad`. Refer to [Application - Events](./application.md#events).

```typescript
export default class extends Migration {
  on = 'afterLoad';
  // ...
}
```

### `app`

The `Application` instance of the current application. Refer to [Application](./application.md).

### `pm`

The `PluginManager` instance of the current application. Refer to [PluginManager](./plugin-manager.md).

### `plugin`

The `Plugin` instance of the current plugin. Refer to [Plugin](./plugin.md).

### `db`

The `DataBase` instance of the current application. Refer to [DataBase](../database/index.md).

### `sequelize`

The `Sequelize` instance. Refer to [Sequelize](https://sequelize.org/).

### `queryInterface`

Refer to [Sequelize - Query Interface](https://sequelize.org/docs/v6/other-topics/query-interface/).

### Instance Methods

### `up()`

Method for upgrade execution.

### `down()`

Method for downgrade execution.
