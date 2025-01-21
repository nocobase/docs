# PluginManager

`PluginManager` は NocoBase のプラグインマネージャーです。

## インスタンス属性

### `repository`

プラグインデータシートの `Repository` インスタンス。API リファレンスは [DataBase - Repository](../database/repository.md) を参照してください。

## インスタンスメソッド

### `addPreset()`

システム組み込みのプラグインを追加します。組み込みプラグインはデフォルトで有効化されており、クライアントのプラグインマネージャーリストには表示されません。

#### シグネチャ

- `addPreset(plugin: string | typeof Plugin, options: any = {})`

#### 詳細

| パラメータ名 | タイプ                        | 説明             |
| ------------ | ----------------------------- | ---------------- |
| `plugin`     | `string` \| `typeof Plugin` | プラグイン名またはプラグインインスタンス |
| `options`    | `any`                       | プラグイン設定項目       |

### `getPlugins()`

現在のアプリケーションのすべてのプラグインインスタンスを取得します。

#### シグネチャ

- `getPlugins(): Map<typeof Plugin, Plugin<any>>`

### `getAliases()`

すべてのプラグイン名を取得します。

#### シグネチャ

- `getAliases(): IterableIterator<string>`

### `get()`

特定のプラグインを取得します。

#### シグネチャ

- `get(name: string | typeof Plugin): Plugin<any>`

### `has()`

特定のプラグインが存在するかどうかを確認します。

#### シグネチャ

- `has(name: string | typeof Plugin): boolean`

### `create()`

プラグインを作成し、プラグインディレクトリを生成します。

#### シグネチャ

- `create(pluginName: string, options?: { forceRecreate?: boolean }): Promise<void>`

#### 詳細

| パラメータ名                  | タイプ      | 説明                           | デフォルト値  |
| ----------------------------- | ----------- | ------------------------------ | ------------- |
| `pluginName`                  | `string`  | プラグイン名                       | -             |
| `options.forceRecreate`       | `boolean` | 既存のプラグインディレクトリを削除して再生成するかどうか | `false`       |

### `add()`

プラグインを追加またはアップグレードします。

#### シグネチャ

- `add(plugin?: any, options: any = {}, insert = false, isUpgrade = false): Promise<void>`

#### 詳細

| パラメータ名      | タイプ                        | 説明                   | デフォルト値  |
| ----------------- | ----------------------------- | ---------------------- | ------------- |
| `plugin`          | `string` \| `typeof Plugin` | プラグイン名またはプラグインインスタンス     | -             |
| `options`         | `any`                       | プラグイン設定               | -             |
| `insert`          | `boolean`                   | プラグインデータシートレコードを追加するかどうか | `false`       |
| `isUpgrade`       | `boolean`                   | プラグインのアップグレードかどうか         | `false`       |

### `load()`

すべての有効化されたプラグインをロードします。

#### シグネチャ

- `load(): Promise<void>`

### `install()`

有効化されているがまだインストールされていないすべてのプラグインをインストールします。

#### シグネチャ

- `install(): Promise<void>`

### `enable()`

一つまたは複数の無効化されているプラグインを有効化します。

#### シグネチャ

- `enable(name: string | string[]): Promise<void>`

### `disable()`

一つまたは複数の有効化されているプラグインを無効化します。

#### シグネチャ

- `disable(name: string | string[]): Promise<void>`

### `remove()`

一つまたは複数のプラグインを削除します。

#### シグネチャ

- `remove(name: string | string[], options?: { removeDir?: boolean; force?: boolean })`

#### 詳細

| パラメータ名              | タイプ                   | 説明                                                            | デフォルト値  |
| ------------------------- | ------------------------ | --------------------------------------------------------------- | ------------- |
| `name`                    | `string` \| `string[]` | プラグイン名                                                        | -             |
| `options.removeDir`       | `boolean`              | プラグインディレクトリを削除するかどうか                                                | `false`       |
| `options.force`           | `boolean`              | プラグインの `beforeRemove` / `afterRemove` をスキップして直接データベースレコードを削除するかどうか | `false`       |
