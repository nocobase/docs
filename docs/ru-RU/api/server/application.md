# Приложение (Application)

## Обзор

`Application` - это центральный модуль сервера NocoBase, основанный на расширениях [Koa](https://koajs.com). Отвечает за основную логику инициализации приложения и управление его жизненным циклом.

## Конструктор

### `constructor()`

#### Сигнатура

- `constructor(public options: ApplicationOptions)`

#### Типы

```typescript
export type PluginType = string | typeof Plugin;
export type PluginConfiguration = PluginType | [PluginType, any];

export interface ResourceManagerOptions {
  prefix?: string;
}

export interface AppLoggerOptions {
  request: RequestLoggerOptions;
  system: SystemLoggerOptions;
}

export interface AppTelemetryOptions extends TelemetryOptions {
  enabled?: boolean;
}

export interface ApplicationOptions {
  database?: IDatabaseOptions | Database;
  cacheManager?: CacheManagerOptions;
  resourceManager?: ResourceManagerOptions;
  bodyParser?: any;
  cors?: any;
  dataWrapping?: boolean;
  registerActions?: boolean;
  i18n?: i18n | InitOptions;
  plugins?: PluginConfiguration[];
  acl?: boolean;
  logger?: AppLoggerOptions;
  name?: string;
  authManager?: AuthManagerOptions;
  telemetry?: AppTelemetryOptions;
}
```

#### Детали

##### ApplicationOptions

| Свойство          | Тип                                    | Описание                                                           |
| ----------------- | --------------------------------------- | ----------------------------------------------------------------- |
| `name`            | `string`                                | Идентификатор приложения                                          |
| `database`        | `IDatabaseOptions` \| `DataBase`        | Конфигурация или экземпляр `DataBase`                             |
| `cacheManager`    | `CacheManagerOptions`                   | Конфигурация `CacheManager`                                       |
| `resourceManager` | [`ResourcerOptions`](#resourceroptions) | Конфигурация управления ресурсами                                 |
| `authManager`     | `AuthManagerOptions`                    | Конфигурация аутентификации пользователей                         |
| `bodyParser`      | `bodyParser.Options`                    | Параметры для middleware `@koa/bodyparser`                        |
| `cors`            | `any`                                   | Параметры для middleware `@koa/cors`                              |
| `dataWrapping`    | `boolean`                               | Форматировать ли данные ответа                                    |
| `registerActions` | `boolean`                               | Регистрировать ли CRUD-интерфейсы для таблиц данных по умолчанию |
| `i18n`            | `i18n` \| `InitOptions`                 | Экземпляр или конфигурация инициализации `i18n`                   |
| `plugins`         | `PluginConfiguration[]`                 | Имена встроенных плагинов или массив экземпляров                  |
| `acl`             | `boolean`                               | Включить контроль доступа                                         |
| `logger`          | [`AppLoggerOptions`](#apploggeroptions) | Конфигурация логирования                                          |
| `telemetry`       | `AppTelemetryOptions`                   | Конфигурация телеметрии                                           |

##### ResourcerOptions

| Свойство | Тип     | Описание               |
| -------- | ------- | ---------------------- |
| `prefix` | `string`| Префикс API ресурсов   |

##### AppLoggerOptions

| Свойство  | Тип                   | Описание                                                               |
| --------- | --------------------- | --------------------------------------------------------------------- |
| `request` | `RequestLoggerOptions` | См. [Logger - requestLogger()](../logger.md#requestlogger)            |
| `system`  | `SystemLoggerOptions`  | См. [Logger - createSystemLogger()](../logger.md#createsystemlogger)  |

## Свойства экземпляра

### `name`

Идентификатор приложения. По умолчанию `main`.

### `version`

Управление версиями приложения. Версия доступна через `version.get()`.

### `mainDataSource`

Основной источник данных.

### `db`

Экземпляр `DataBase` для основного источника данных. См. [DataBase](../database/index.md).

### `acl`

Экземпляр `ACL`. См. [ACL](../acl/acl.md).

### `log`

Системные логи. См. [Logger](../logger.md).

### `logger`

Аналог `log`.

### `cache`

Кэш приложения, экземпляр `Cache`. См. [Cache](../cache/cache.md).

### `cli`

Методы командной строки приложения.

### `i18n`

Интернационализация. Экземпляр `i18n`.

### `telemetry`

Экземпляр `Telemetry`. См. [Telemetry](../telemetry/telemetry.md).

### `pm`

Управление плагинами. См. [PluginManager](./plugin-manager).

### `dataSourceManager`

Управление источниками данных. См. [DataSourceManager](../data-source-manager/).

### `resourceManager`

Управление ресурсами. См. [ResourceManager](../resourcer/resource-manager.md).

### `cacheManager`

Управление кэшем. См. [CacheManager](../cache/cache-manager.md).

### `authManager`

Управление аутентификацией. См. [AuthManager](../auth/auth-manager.md).

### `auditManager`

Аудит ресурсов. См. [AuditManager](./audit-manager).

### `cronJobManager`

Управление cron-задачами.

### `localeManager`

Управление локализацией.

## Методы жизненного цикла

### `load()`

Загружает приложение и выполняет инициализацию.

#### Сигнатура

- `load(options?: LoadOptions): Promise<void>`

#### Типы

```typescript
interface LoadOptions {
  reload?: boolean;
  hooks?: boolean;
  sync?: boolean;
  [key: string]: any;
}
```

#### Детали

| Свойство        | Тип      | Описание                                             | По умолчанию |
| --------------- | -------- | --------------------------------------------------- | ------------ |
| `reload`        | `boolean`| Является ли операцией перезагрузки                  | `false`      |
| `hooks`         | `boolean`| Вызывать ли хуки `beforeLoad` / `afterLoad`        | `true`       |
| `sync`          | `boolean`| Синхронизировать ли изменения таблиц данных         | `false`      |
| `[key: string]` | `any`    | Дополнительная конфигурация для хуков               | -            |

### `reload()`

Перезагружает приложение, выполняя повторную инициализацию.

#### Сигнатура

- `reload(options?: LoadOptions): Promise<void>`

### `start()`

Запускает приложение для обработки запросов.

#### Сигнатура

- `start(options: StartOptions = {}): Promise<void>`

#### Типы

```typescript
interface StartOptions {
  checkInstall?: boolean;
}
```

#### Детали

| Свойство       | Тип      | Описание                                                | По умолчанию |
| -------------- | -------- | ------------------------------------------------------ | ------------ |
| `checkInstall` | `boolean`| Проверять ли установку приложения                      | `false`      |

### `restart()`

Перезапускает приложение, выполняя `reload()` и `start()`.

#### Сигнатура

- `restart(options: StartOptions = {}): Promise<void>`

### `install()`

Устанавливает приложение, включая инициализацию, синхронизацию таблиц, установку плагинов и перезапуск.

#### Сигнатура

- `install(options: InstallOptions = {}): Promise<void>`

#### Детали

| Свойство | Тип      | Описание                                                              | По умолчанию |
| -------- | -------- | -------------------------------------------------------------------- | ------------ |
| `force`  | `boolean`| Переустанавливать ли приложение, если оно уже установлено            | `false`      |

### `upgrade()`

Обновляет приложение, выполняя миграции плагинов и перезапуская его.

#### Сигнатура

- `upgrade(): Promise<void>`

### `stop()`

Останавливает приложение, закрывая соединения с БД, кэш и телеметрию.

#### Сигнатура

- `stop(): Promise<void>`

### `destroy()`

Уничтожает приложение (аналогично `stop()`).

#### Сигнатура

- `destroy(): Promise<void>`

### `isInstalled()`

Проверяет установку приложения.

#### Сигнатура

- `isInstalled(): Promise<boolean>`

### `isStarted()`

Проверяет запуск приложения.

#### Сигнатура

- `isStarted(): Promise<boolean>`

## Другие методы

### `on()`

Подписывается на события приложения. См. [emitter.on()](https://nodejs.org/api/events.html#emitteroneventname-listener).

#### Сигнатура

- `on(eventName: string | symbol, listener: (...args: any[]) => void): this`

### `off()`

Отписывается от событий. См. [emitter.off()](https://nodejs.org/api/events.html#emitteroffeventname-listener).

#### Сигнатура

- `off(eventName: string | symbol, listener: (...args: any[]) => void): this`

### `use()`

Добавляет middleware приложения. См. [Koa - Application](https://koajs.com/#application).

### `command()`

Добавляет команды CLI.

#### Сигнатура

- `command(name: string, desc?: string, opts?: CommandOptions): AppCommand`

#### Детали

| Свойство | Тип             | Описание                                                                        |
| -------- | --------------- | ------------------------------------------------------------------------------ |
| `name`   | `string`        | Имя команды                                                                    |
| `desc`   | `string`        | Описание команды                                                               |
| `opts`   | `CommandOptions`| Конфигурация команды (см. [Commander.js](https://github.com/tj/commander.js))  |

### `runCommand()`

Выполняет команды приложения.

#### Сигнатура

- `runCommand(command: string, ...args: any[])`

### `authenticate()`

Проверяет соединение с БД и версию.

#### Сигнатура

- `authenticate(): Promise<void>`

## События

### `'beforeLoad'` / `'afterLoad'`

Вызываются до и после [`load()`](#load) и [`reload()`](#reload).

### `'beforeReload'` / `'afterReload'`

Вызываются до и после [`reload()`](#reload).

### `'beforeInstall'` / `'afterInstall'`

Вызываются до и после [`install()`](#install).

### `'beforeUpgrade'` / `'afterUpgrade'`

Вызываются до и после [`upgrade()`](#upgrade).

### `'beforeStart'` / `'afterStart'`

Вызываются до и после [`start()`](#start).

### `'beforeStop'` / `'afterStop'`

Вызываются до и после [`stop()`](#stop) и [`destroy()`](#destroy). `'beforeStop'` также перед [`restart()`](#restart).

### `'beforeDestroy'` / `'afterDestroy'`

Вызываются до и после [`destroy()`](#destroy).
