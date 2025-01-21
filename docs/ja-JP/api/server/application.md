# アプリケーション

`Application` は NocoBase サーバーサイドのコアアプリケーションモジュールで、<a href="https://koajs.com" target="_blank">Koa</a> を基に拡張されており、主なアプリケーション初期化ロジックを担当し、アプリケーションのライフサイクルを管理します。

## コンストラクタ

`constructor()`

#### シグネチャ

- `constructor(public options: ApplicationOptions)`

#### タイプ

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

#### 詳細

##### ApplicationOptions

| プロパティ        | タイプ                                  | 説明                                                                                                                                       |
| ----------------- | --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `name`            | `string`                                | アプリケーション識別子                                                                                                                     |
| `database`        | `IDatabaseOptions` \| `DataBase`        | `DataBase` インスタンスの設定または `DataBase` インスタンス、参照 [DataBase](../database/index.md)                                         |
| `cacheManager`    | `CacheManagerOptions`                   | `CacheManager` インスタンスの設定、参照 [CacheManager](../cache/cache-manager.md)                                                          |
| `resourceManager` | [`ResourcerOptions`](#resourceroptions) | リソース管理設定                                                                                                                           |
| `authManager`     | `AuthManagerOptions`                    | ユーザー認証管理設定、参照 [AuthManager](../auth/auth-manager.md)                                                                          |
| `bodyParser`      | `bodyParser.Options`                    | <a href="https://github.com/koajs/bodyparser" target="_blank">@koa/bodyparser</a> ミドルウェアに渡すパラメータ                             |
| `bodyParser`      | `any`                                   | <a href="https://github.com/koajs/cors" target="_blank">@koa/cors</a> ミドルウェアに渡すパラメータ                                         |
| `dataWrapping`    | `boolean`                               | レスポンスデータをフォーマットするかどうか                                                                                                 |
| `registerActions` | `boolean`                               | データシートリソースにデフォルトの CRUD 操作インターフェースを登録するかどうか                                                             |
| `i18n`            | `i18n` \| `InitOptions`                 | `i18n` 実装または初期化設定                                                                                                                |
| `plugins`         | `PluginConfiguration[]`                 | 組み込みインストールのプラグイン名またはインスタンスの配列                                                                                 |
| `acl`             | `boolean`                               | アクセス制御を有効にするかどうか                                                                                                           |
| `logger`          | [`AppLoggerOptions`](#apploggeroptions) | アプリケーションログ設定                                                                                                                   |
| `telemetry`       | `AppTelemetryOptions`                   | テレメトリモジュール設定、参照 [Telemetry](../telemetry/telemetry.md) <br />`telemetry.enabled` - テレメトリモジュールを有効にするかどうか |

##### ResourcerOptions

| プロパティ | タイプ   | 説明                                         |
| ---------- | -------- | -------------------------------------------- |
| `prefix`   | `string` | リソース管理インターフェースのプレフィックス |

##### AppLoggerOptions

| プロパティ | タイプ                 | 説明                                                                  |
| ---------- | ---------------------- | --------------------------------------------------------------------- |
| `request`  | `RequestLoggerOptions` | 参照 [Logger - requestLogger()](../logger.md#requestlogger)           |
| `system`   | `SystemLoggerOptions`  | 参照 [Logger - createSystemLogger()](../logger.md#createsystemlogger) |

## インスタンスプロパティ

### `name`

アプリケーション識別子。デフォルトは `main`.

### `version`

アプリケーションバージョン管理。`version.get()` でアプリケーションバージョンを取得できます。

### `mainDataSource`

メインデータソース。

### `db`

メインデータソース `DataBase` インスタンス。参照 [DataBase](../database/index.md).

### `acl`

`ACL` インスタンス。参照 [ACL](../acl/acl.md).

### `log`

システムログ。参照 [Logger](../logger.md).

### `logger`

`log` と同等。

### `cache`

アプリケーションキャッシュ、`Cache` インスタンス。参照 [Cache](../cache/cache.md).

### `cli`

アプリケーションコマンドラインメソッド。

### `i18n`

国際化。`i18n` インスタンス

### `telemetry`

`Telemetry` インスタンス。参照 [Telemetry](../telemetry/telemetry.md).

### `pm`

プラグイン管理。参照 [PluginManager](./plugin-manager).

### `dataSourceManager`

データソース管理。参照 [DataSourceManager](../data-source-manager/).

### `resourceManager`

リソース管理。参照 [ResourceManager](../resourcer/resource-manager.md).

### `cacheManager`

キャッシュ管理。参照 [CacheManager](../cache/cache-manager.md).

<!--
### `syncManager`

同期信号管理。参照 [SyncManager](./sync-manager.md).
-->

### `authManager`

ユーザー認証管理。参照 [AuthManager](../auth/auth-manager.md).

### `auditManager`

Resource audit management. Refer to [AuditManager](./audit-manager).

### `cronJobManager`

アプリケーションの定期タスク管理。

### `localeManager`

アプリケーションのローカライズリソース管理。

## プロセスメソッド

### `load()`

アプリケーションをロードし、初期化を行います。

#### シグネチャ

- `load(options?: LoadOptions): Promise<void>`

#### タイプ

```ts
interface LoadOptions {
  reload?: boolean;
  hooks?: boolean;
  sync?: boolean;
  [key: string]: any;
}
```

#### 詳細

| プロパティ      | タイプ    | 説明                                                    | デフォルト値 |
| --------------- | --------- | ------------------------------------------------------- | ------------ |
| `reload`        | `boolean` | 再ロードかどうか                                        | `false`      |
| `hooks`         | `boolean` | `beforeLoad` / `afterLoad` hooks をトリガーするかどうか | `true`       |
| `sync`          | `boolean` | データシート設定の変更を同期するかどうか                | `false`      |
| `[key: string]` | `any`     | 他の設定、hooks に渡される                              | -            |

### `reload()`

アプリケーションを再ロードし、再初期化します。

#### シグネチャ

- `reload(options?: LoadOptions): Promise<void>`

### `start()`

アプリケーションを起動し、リクエストを受け付けます。

#### シグネチャ

- `start(options: StartOptions = {}): Promise<void>`

#### タイプ

```ts
interface StartOptions {
  checkInstall?: boolean;
}
```

#### 詳細

| プロパティ     | タイプ    | 説明                                                       | デフォルト値 |
| -------------- | --------- | ---------------------------------------------------------- | ------------ |
| `checkInstall` | `boolean` | アプリケーションがインストールされているかどうかをチェック | `false`      |

### `restart()`

アプリケーションを再起動し、`reload()` と `start()` を実行します。

#### シグネチャ

- `restart(options: StartOptions = {}): Promise<void>`

### `install()`

アプリケーションをインストールし、初期化、データシート設定変更の同期、プラグインのインストールを行います。アプリケーションが起動している場合は再起動も実行されます。

#### シグネチャ

- `install(options: InstallOptions = {}): Promise<void>`

#### タイプ

```ts
export interface InstallOptions {
  force?: boolean;
}
```

| プロパティ | タイプ    | 説明                                                                                 | デフォルト値 |
| ---------- | --------- | ------------------------------------------------------------------------------------ | ------------ |
| `force`    | `boolean` | アプリケーションが既にインストールされている場合、強制的に再インストールするかどうか | `false`      |

### `upgrade()`

アプリケーションをアップグレードし、各プラグインの `migration` スクリプトを実行し、アプリケーションを再起動します。

#### シグネチャ

- `upgrade(): Promise<void>`

### `stop()`

アプリケーションを停止し、データベース、キャッシュミドルウェア、テレメトリ接続を閉じます。

#### シグネチャ

- `stop(): Promise<void>`

### `destroy()`

アプリケーションを破棄し、`stop()` を実行します。

#### シグネチャ

- `destroy(): Promise<void>`

### `isInstalled()`

アプリケーションがインストールされているかどうかをチェックします。

#### シグネチャ

- `isInstalled(): Promise<boolean>`

### `isStarted()`

アプリケーションが起動しているかどうかをチェックします。

- `isStarted(): Promise<boolean>`

## その他のメソッド

### `on()`

アプリケーションイベントをリスニングします。参照 <a href="https://nodejs.org/api/events.html#emitteroneventname-listener" target="_blank">emitter.on(eventName, listener)</a>.

#### シグネチャ

- `on(eventName: string | symbol, listener: (...args: any[]) => void): this`

### `off()`

イベントのリスニングを解除します。参照 <a href="https://nodejs.org/api/events.html#emitteroffeventname-listener" target="_blank">emitter.off(eventName, listener)</a>.

#### シグネチャ

- `off(eventName: string | symbol, listener: (...args: any[]) => void): this`

### `use()`

アプリケーションミドルウェアを追加します。参照 <a href="https://koajs.com/#application" target="_blank">Koa - Application</a>.

### `command()`

アプリケーションコマンドラインを追加します。

#### シグネチャ

- `command(name: string, desc?: string, opts?: CommandOptions): AppCommand`

#### 詳細

| パラメータ名 | タイプ           | 説明                                                                                               |
| ------------ | ---------------- | -------------------------------------------------------------------------------------------------- |
| `name`       | `string`         | コマンド                                                                                           |
| `desc`       | `string`         | コマンドの説明                                                                                     |
| `opts`       | `CommandOptions` | コマンド設定、<a href="https://github.com/tj/commander.js" target="_blank">Commander.js</a> を参照 |

### `runCommand()`

アプリケーションコマンドを実行します。

#### 署名

- `runCommand(command: string, ...args: any[])`

### `authenticate()`

DB接続チェック、バージョンチェック。

#### 署名

- `authenticate(): Promise<void>`

## イベント

### `'beforeLoad'` / `'afterLoad'`

[`load()`](#load), [`reload()`](#reload) の実行前後にトリガーされます。

### `'beforeReload'` / `'afterReload'`

[`reload()`](#reload) の実行前後にトリガーされます。

### `'beforeInstall'` / `'afterInstall'`

[`install()`](#install) の実行前後にトリガーされます。

### `'beforeUpgrade'` / `'afterUpgrade'`

[`upgrade()`](#upgrade) の実行前後にトリガーされます。

### `'beforeStart'` / `'afterStart'`

[`start()`](#start) の実行前後にトリガーされます。

### `'beforeStop'` / `'afterStop'`

- [`stop()`](#stop), [`destroy()`](#destroy) の実行前後にトリガーされます。
- [`restart()`](#restart) の前に `'beforeStop'` がトリガーされます。

### `'beforeDestroy'` / `'afterDestroy'`

[`destroy()`](#destroy) の実行前後にトリガーされます。
