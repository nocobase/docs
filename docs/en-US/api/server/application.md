# Application

`Application` is the core module of the NocoBase server, based on [Koa](https://koajs.com) extensions. It's responsible for major application initialization logic and managing the application lifecycle.

## Constructor

### `constructor()`

#### Signature

- `constructor(public options: ApplicationOptions)`

#### Types

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

#### Details

##### ApplicationOptions

| Property          | Type                                    | Description                                                           |
| ----------------- | --------------------------------------- | --------------------------------------------------------------------- |
| `name`            | `string`                                | Application identifier                                                |
| `database`        | `IDatabaseOptions` \| `DataBase`        | Configuration for `DataBase` instance or the instance itself          |
| `cacheManager`    | `CacheManagerOptions`                   | Configuration for `CacheManager` instance                             |
| `resourceManager` | [`ResourcerOptions`](#resourceroptions) | Configuration for resource management                                 |
| `authManager`     | `AuthManagerOptions`                    | Configuration for user authentication management                      |
| `bodyParser`      | `bodyParser.Options`                    | Parameters passed to the `@koa/bodyparser` middleware                 |
| `bodyParser`      | `any`                                   | Parameters passed to the `@koa/cors` middleware                       |
| `dataWrapping`    | `boolean`                               | Whether to format response data                                       |
| `registerActions` | `boolean`                               | Whether to register default CRUD operation interfaces for data tables |
| `i18n`            | `i18n` \| `InitOptions`                 | `i18n` instance or initialization configuration                       |
| `plugins`         | `PluginConfiguration[]`                 | Names of built-in installed plugins or an array of instances          |
| `acl`             | `boolean`                               | Whether to enable access control                                      |
| `logger`          | [`AppLoggerOptions`](#apploggeroptions) | Configuration for application logging                                 |
| `telemetry`       | `AppTelemetryOptions`                   | Configuration for telemetry module                                    |

##### ResourcerOptions

| Property | Type     | Description              |
| -------- | -------- | ------------------------ |
| `prefix` | `string` | Prefix for resource APIs |

##### AppLoggerOptions

| Property  | Type                   | Description                                                               |
| --------- | ---------------------- | ------------------------------------------------------------------------- |
| `request` | `RequestLoggerOptions` | Refer to [Logger - requestLogger()](../logger.md#requestlogger)           |
| `system`  | `SystemLoggerOptions`  | Refer to [Logger - createSystemLogger()](../logger.md#createsystemlogger) |

## Instance Properties

### `name`

Application identifier. Default is `main`.

### `version`

Application version management. Application version can be obtained using `version.get()`.

### `mainDataSource`

Main data source.

### `db`

Instance of `DataBase` for the main data source. Refer to [DataBase](../database/index.md).

### `acl`

Instance of `ACL`. Refer to [ACL](../acl/acl.md).

### `log`

System logs. Refer to [Logger](../logger.md).

### `logger`

Equivalent to `log`.

### `cache`

Application cache, instance of `Cache`. Refer to [Cache](../cache/cache.md).

### `cli`

Application command-line methods.

### `i18n`

Internationalization. Instance of `i18n`.

### `telemetry`

Instance of `Telemetry`. Refer to [Telemetry](../telemetry/telemetry.md).

### `pm`

Plugin management. Refer to [PluginManager](./plugin-manager).

### `dataSourceManager`

Data source management. Refer to [DataSourceManager](../data-source-manager/).

### `resourceManager`

Resource management. Refer to [ResourceManager](../resourcer/resource-manager.md).

### `cacheManager`

Cache management. Refer to [CacheManager](../cache/cache-manager.md).

### `authManager`

User authentication management. Refer to [AuthManager](../auth/auth-manager.md).

### `cronJobManager`

Application cron job management.

### `localeManager`

Application localization resource management.

## Lifecycle Methods

### `load()`

Loads the application and performs application initialization.

#### Signature

- `load(options?: LoadOptions): Promise<void>`

#### Types

```typescript
interface LoadOptions {
  reload?: boolean;
  hooks?: boolean;
  sync?: boolean;
  [key: string]: any;
}
```

#### Details

| Property        | Type      | Description                                             | Default |
| --------------- | --------- | ------------------------------------------------------- | ------- |
| `reload`        | `boolean` | Indicates if it's a reload operation                    | `false` |
| `hooks`         | `boolean` | Whether to trigger `beforeLoad` / `afterLoad` hooks     | `true`  |
| `sync`          | `boolean` | Whether to synchronize data table configuration changes | `false` |
| `[key: string]` | `any`     | Additional configuration, will be passed to hooks       | -       |

### `reload()`

Reloads the application, triggering a re-initialization.

#### Signature

- `reload(options?: LoadOptions): Promise<void>`

### `start()`

Starts the application to accept requests.

#### Signature

- `start(options: StartOptions = {}): Promise<void>`

#### Types

```typescript
interface StartOptions {
  checkInstall?: boolean;
}
```

#### Details

| Property       | Type      | Description                                                | Default |
| -------------- | --------- | ---------------------------------------------------------- | ------- |
| `checkInstall` | `boolean` | Indicates whether to check if the application is installed | `false` |

### `restart()`

Restarts the application, executing `reload()` and `start()`.

#### Signature

- `restart(options: StartOptions = {}): Promise<void>`

### `install()`

Installs the application, which involves application initialization, synchronization of data table configuration changes, plugin installation, and application restart if it's already started.

#### Signature

- `install(options: InstallOptions = {}): Promise<void>`

#### Details

| Property | Type      | Description                                                              | Default |
| -------- | --------- | ------------------------------------------------------------------------ | ------- |
| `force`  | `boolean` | Indicates whether to reinstall the application if it's already installed | `false` |

### `upgrade()`

Upgrades the application by executing migration scripts for each plugin and restarting the application.

#### Signature

- `upgrade(): Promise<void>`

### `

stop()`

Stops the application by closing database connections, cache middleware, and telemetry connections.

#### Signature

- `stop(): Promise<void>`

### `destroy()`

Destroys the application, equivalent to calling `stop()`.

#### Signature

- `destroy(): Promise<void>`

### `isInstalled()`

Checks if the application is installed.

#### Signature

- `isInstalled(): Promise<boolean>`

### `isStarted()`

Checks if the application is started.

#### Signature

- `isStarted(): Promise<boolean>`

## Other Methods

### `on()`

Listens for application events. Refer to [emitter.on(eventName, listener)](https://nodejs.org/api/events.html#emitteroneventname-listener).

#### Signature

- `on(eventName: string | symbol, listener: (...args: any[]) => void): this`

### `off()`

Removes event listeners. Refer to [emitter.off(eventName, listener)](https://nodejs.org/api/events.html#emitteroffeventname-listener).

#### Signature

- `off(eventName: string | symbol, listener: (...args: any[]) => void): this`

### `use()`

Adds application middleware. Refer to [Koa - Application](https://koajs.com/#application).

### `command()`

Adds application command-line commands.

#### Signature

- `command(name: string, desc?: string, opts?: CommandOptions): AppCommand`

#### Details

| Property | Type             | Description                                                                        |
| -------- | ---------------- | ---------------------------------------------------------------------------------- |
| `name`   | `string`         | Command                                                                            |
| `desc`   | `string`         | Command description                                                                |
| `opts`   | `CommandOptions` | Command configuration, refer to [Commander.js](https://github.com/tj/commander.js) |

### `runCommand()`

Runs application commands.

#### Signature

- `runCommand(command: string, ...args: any[])`

### `authenticate()`

Performs DB connection check and version check.

#### Signature

- `authenticate(): Promise<void>`

## Events

### `'beforeLoad'` / `'afterLoad'`

Triggered before and after [`load()`](#load) and [`reload()`](#reload).

### `'beforeReload'` / `'afterReload'`

Triggered before and after [`reload()`](#reload).

### `'beforeInstall'` / `'afterInstall'`

Triggered before and after [`install()`](#install).

### `'beforeUpgrade'` / `'afterUpgrade'`

Triggered before and after [`upgrade()`](#upgrade).

### `'beforeStart'` / `'afterStart'`

Triggered before and after [`start()`](#start).

### `'beforeStop'` / `'afterStop'`

Triggered before and after [`stop()`](#stop) and [`destroy()`](#destroy). `'beforeStop'` is triggered before [`restart()`](#restart).

### `'beforeDestroy'` / `'afterDestroy'`

Triggered before and after [`destroy()`](#destroy).
