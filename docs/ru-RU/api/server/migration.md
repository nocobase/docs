# Миграция

`Migration` — это класс в NocoBase, используемый для скриптов обновления, обычно применяемых для синхронизации изменений, связанных с базой данных.

## Свойства экземпляра

### `appVersion`

Текущая версия приложения. Скрипт будет выполнен только в том случае, если версия совпадает.

```typescript
export default class extends Migration {
  appVersion = '<=1.0.0-alpha.1';
  // ...
}
```

### `on`

Момент запуска скрипта обновления. Значение по умолчанию — `afterLoad`. См. [Приложение — События](./application.md#events).

```typescript
export default class extends Migration {
  on = 'afterLoad';
  // ...
}
```

### `app`

Экземпляр `Application` текущего приложения. См. [Приложение](./application.md).

### `pm`

Экземпляр `PluginManager` текущего приложения. См. [PluginManager](./plugin-manager.md).

### `plugin`

Экземпляр `Plugin` текущего плагина. См. [Плагин](./plugin.md).

### `db`

Экземпляр `DataBase` текущего приложения. См. [База данных](../database/index.md).

### `sequelize`

Экземпляр `Sequelize`. См. [Sequelize](https://sequelize.org/).

### `queryInterface`

См. [Sequelize — Интерфейс запросов](https://sequelize.org/docs/v6/other-topics/query-interface/).

## Методы экземпляра

### `up()`

Метод, выполняющий обновление (миграцию вперёд).

### `down()`

Метод, выполняющий откат обновления (миграцию назад).
