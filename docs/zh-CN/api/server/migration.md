# Migration

`Migration` 是 NocoBase 的升级脚本类，通常用于同步数据库相关变更。

## 实例属性

### `appVersion`

当前应用版本号。符合版本号才会执行脚本。

```ts
export default class extends Migration {
  appVersion = '<=1.0.0-alpha.1';
  // ...
}
```

### `on`

升级脚本执行的触发时机，值为 `Application` 的生命周期事件，默认 `afterLoad`。参考 [Application - 事件](./application.md#事件)。

```ts
export default class extends Migration {
  on = 'afterLoad';
  // ...
}
```

### `app`

当前应用的 `Application` 实例。参考 [Application](./application.md).

### `pm`

当前应用的 `PluginManager` 实例。参考 [PluginManager](./plugin-manager.md).

### `plugin`

当前插件的 `Plugin` 实例。参考 [Plugin](./plugin.md).

### `db`

当前应用的 `DataBase` 实例。参考 [DataBase](../database/index.md).

### `sequelize`

`Sequelize` 实例。参考 <a href="https://sequelize.org/" target="_blank">Sequelize</a>.

### `queryInterface`

参考 <a href="https://sequelize.org/docs/v6/other-topics/query-interface/" target="_blank">Sequelize - Query Interface</a>.

### 实例方法

### `up()`

升级执行方法。

### `down()`

降级执行方法。
