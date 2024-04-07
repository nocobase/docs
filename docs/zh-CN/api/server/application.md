# Application

`Application` 是 NocoBase 服务端核心的应用模块，基于 <a href="https://koajs.com" target="_blank">Koa</a> 扩展，负责主要的应用初始化逻辑，管理应用的生命周期。

## 构造函数

`constructor()`

#### 签名

- `constructor(public options: ApplicationOptions)`

#### 类型

```ts
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

#### 详细信息

##### ApplicationOptions

| 属性              | 类型                                    | 描述                                                                                                   |
| ----------------- | --------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| `name`            | `string`                                | 应用标识                                                                                               |
| `database`        | `IDatabaseOptions` \| `DataBase`        | `DataBase` 实例配置或 `DataBase` 实例，参考 [DataBase](../database/index.md)                           |
| `cacheManager`    | `CacheManagerOptions`                   | `CacheManager` 实例配置，参考 [CacheManager](../cache/cache-manager.md)                                |
| `resourceManager` | [`ResourcerOptions`](#resourceroptions) | 资源管理配置                                                                                           |
| `authManager`     | `AuthManagerOptions`                    | 用户认证管理配置，参考 [AuthManager](../auth/auth-manager.md)                                          |
| `bodyParser`      | `bodyParser.Options`                    | 传递给 <a href="https://github.com/koajs/bodyparser" target="_blank">@koa/bodyparser</a> 中间件的参数  |
| `bodyParser`      | `any`                                   | 传递给 <a href="https://github.com/koajs/cors" target="_blank">@koa/cors</a> 中间件的参数              |
| `dataWrapping`    | `boolean`                               | 是否格式化响应数据                                                                                     |
| `registerActions` | `boolean`                               | 是否给数据表资源注册默认的 CRUD 操作接口                                                               |
| `i18n`            | `i18n` \| `InitOptions`                 | `i18n` 实现或初始化配置                                                                                |
| `plugins`         | `PluginConfiguration[]`                 | 内置安装的插件名字或实例数组                                                                           |
| `acl`             | `boolean`                               | 是否启用访问控制                                                                                       |
| `logger`          | [`AppLoggerOptions`](#apploggeroptions) | 应用日志配置                                                                                           |
| `telemetry`       | `AppTelemetryOptions`                   | 遥测模块配置，参考 [Telemetry](../telemetry/telemetry.md) <br />`telemetry.enabled` - 是否开启遥测模块 |

##### ResourcerOptions

| 属性     | 类型     | 描述             |
| -------- | -------- | ---------------- |
| `prefix` | `string` | 资源管理接口前缀 |

##### AppLoggerOptions

| 属性      | 类型                   | 描述                                                                  |
| --------- | ---------------------- | --------------------------------------------------------------------- |
| `request` | `RequestLoggerOptions` | 参考 [Logger - requestLogger()](../logger.md#requestlogger)           |
| `system`  | `SystemLoggerOptions`  | 参考 [Logger - createSystemLogger()](../logger.md#createsystemlogger) |

## 实例属性

### `name`

应用标识。默认 `main`.

### `version`

应用版本号管理。可以通过 `version.get()` 获取应用版本号。

### `mainDataSource`

主数据源。

### `db`

主数据源 `DataBase` 实例。参考 [DataBase](../database/index.md).

### `acl`

`ACL` 实例。参考 [ACL](../acl/acl.md).

### `log`

系统日志。参考 [Logger](../logger.md).

### `logger`

和 `log` 等价。

### `cache`

应用缓存，`Cache` 实例。参考 [Cache](../cache/cache.md).

### `cli`

应用命令行方法。

### `i18n`

国际化。`i18n` 实例

### `telemetry`

`Telemetry` 实例。参考 [Telemetry](../telemetry/telemetry.md).

### `pm`

插件管理。参考 [PluginManager](./plugin-manager).

### `dataSourceManager`

数据源管理。参考 [DataSourceManager](../data-source-manager/).

### `resourceManager`

资源管理。参考 [ResourceManager](../resourcer/resource-manager.md).

### `cacheManager`

缓存管理。参考 [CacheManager](../cache/cache-manager.md).

### `authManager`

用户认证管理。参考 [AuthManager](../auth/auth-manager.md).

### `cronJobManager`

应用定时任务管理。

### `localeManager`

应用本地化资源管理。

## 流程方法

### `load()`

加载应用，进行应用初始化。

#### 签名

- `load(options?: LoadOptions): Promise<void>`

#### 类型

```ts
interface LoadOptions {
  reload?: boolean;
  hooks?: boolean;
  sync?: boolean;
  [key: string]: any;
}
```

#### 详细信息

| 属性            | 类型      | 描述                                      | 默认值  |
| --------------- | --------- | ----------------------------------------- | ------- |
| `reload`        | `boolean` | 是否是重新加载                            | `false` |
| `hooks`         | `boolean` | 是否触发 `beforeLoad` / `afterLoad` hooks | `true`  |
| `sync`          | `boolean` | 是否同步数据表配置变更                    | `false` |
| `[key: string]` | `any`     | 其他配置，会传递给 hooks                  | -       |

### `reload()`

重载应用，重新初始化。

#### 签名

- `reload(options?: LoadOptions): Promise<void>`

### `start()`

启动应用，接收请求。

#### 签名

- `start(options: StartOptions = {}): Promise<void>`

#### 类型

```ts
interface StartOptions {
  checkInstall?: boolean;
}
```

#### 详细信息

| 属性           | 类型      | 描述               | 默认值  |
| -------------- | --------- | ------------------ | ------- |
| `checkInstall` | `boolean` | 检查应用是否已安装 | `false` |

### `restart()`

重启应用，会执行 `reload()` 和 `start()`.

#### 签名

- `restart(options: StartOptions = {}): Promise<void>`

### `install()`

安装应用，整个过程会进行应用初始化，数据表配置变更同步，插件安装，在应用已启动的情况下还会执行应用重启。

#### 签名

- `install(options: InstallOptions = {}): Promise<void>`

#### 类型

```ts
export interface InstallOptions {
  force?: boolean;
}
```

| 属性    | 类型      | 描述                       | 默认值  |
| ------- | --------- | -------------------------- | ------- |
| `force` | `boolean` | 应用已安装时，是否强制重装 | `false` |

### `upgrade()`

升级应用，执行各个插件的 `migration` 脚本，并重启应用。

#### 签名

- `upgrade(): Promise<void>`

### `stop()`

停止应用，关闭数据库、缓存中间件、遥测连接。

#### 签名

- `stop(): Promise<void>`

### `destroy()`

销毁应用，执行 `stop()`.

#### 签名

- `destroy(): Promise<void>`

### `isInstalled()`

检查应用是否已安装。

#### 签名

- `isInstalled(): Promise<boolean>`

### `isStarted()`

检查应用是否已启动。

- `isStarted(): Promise<boolean>`

## 其他方法

### `on()`

监听应用事件。参考 <a href="https://nodejs.org/api/events.html#emitteroneventname-listener" target="_blank">emitter.on(eventName, listener)</a>.

#### 签名

- `on(eventName: string | symbol, listener: (...args: any[]) => void): this`

### `off()`

取消监听事件。参考 <a href="https://nodejs.org/api/events.html#emitteroffeventname-listener" target="_blank">emitter.off(eventName, listener)</a>.

#### 签名

- `off(eventName: string | symbol, listener: (...args: any[]) => void): this`

### `use()`

添加应用中间件。参考 <a href="https://koajs.com/#application" target="_blank">Koa - Application</a>.

### `command()`

添加应用命令行。

#### 签名

- `command(name: string, desc?: string, opts?: CommandOptions): AppCommand`

#### 详细信息

| 参数名 | 类型             | 描述                                                                                         |
| ------ | ---------------- | -------------------------------------------------------------------------------------------- |
| `name` | `string`         | 命令                                                                                         |
| `desc` | `string`         | 命令描述                                                                                     |
| `opts` | `CommandOptions` | 命令配置，参考 <a href="https://github.com/tj/commander.js" target="_blank">Commander.js</a> |

### `runCommand()`

运行应用命令。

#### 签名

- `runCommand(command: string, ...args: any[])`

### `authenticate()`

DB 连接检查，版本检查。

#### 签名

- `authenticate(): Promise<void>`

## 事件

### `'beforeLoad'` / `'afterLoad'`

[`load()`](#load), [`reload()`](#reload) 执行前后触发。

### `'beforeReload'` / `'afterReload'`

[`reload()`](#reload) 执行前后触发。

### `'beforeInstall'` / `'afterInstall'`

[`install()`](#install) 执行前后触发。

### `'beforeUpgrade'` / `'afterUpgrade'`

[`upgrade()`](#upgrade) 执行前后触发。

### `'beforeStart'` / `'afterStart'`

[`start()`](#start) 执行前后触发。

### `'beforeStop'` / `'afterStop'`

- [`stop()`](#stop), [`destroy()`](#destroy) 执行前后触发。
- [`restart()`](#restart) 前会触发 `'beforeStop'`.

### `'beforeDestroy'` / `'afterDestroy'`

[`destroy()`](#destroy) 执行前后触发。
