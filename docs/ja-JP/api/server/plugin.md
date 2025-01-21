# Plugin

## 概要

`Plugin` は NocoBase サーバーサイドのプラグインクラスで、プラグインのサーバーサイドに関連する設定プロパティとライフサイクルメソッドを提供します。

### 基本的な使い方

```ts
import { Plugin } from '@nocobase/server';

export class PluginDemoServer extends Plugin {}

export default PluginDemoServer;
```

## インスタンスプロパティ

### `options`

プラグインの設定。

### `name`

`string` - プラグインの名前。

### `enabled`

`boolean` - プラグインが有効かどうか。

### `installed`

`boolean` - プラグインがインストールされているかどうか。

### `log`

システムログのインスタンスで、ログ情報の `module` をデフォルトでプラグイン名として出力します。詳細は [Logger](../logger.md) を参照してください。

### `app`

現在のアプリケーションの `Application` インスタンス。詳細は [Application](./application.md) を参照してください。

### `pm`

現在のアプリケーションの `PluginManager` インスタンス。詳細は [PluginManager](./plugin-manager.md) を参照してください。

### `db`

現在のアプリケーションの `DataBase` インスタンス。詳細は [DataBase](../database/index.md) を参照してください。

## ライフサイクルメソッド

### `afterAdd()`

プラグインが追加された後、つまり [`pm.add()`](./plugin-manager.md#add) の後に実行されます。

### `beforeLoad()`

[`pm.load()`](./plugin-manager.md#load) の間に実行されます。プラグインがロードされる前に、イベントを登録したり、クラスを初期化したり、他の前処理ロジックを実行するために使用されます。この段階では、カーネル API にアクセスできますが、他のプラグイン API にはアクセスできません。

### `load()`

プラグインと関連する設定をロードします。[`pm.load()`](./plugin-manager.md#load) の間に、すべてのプラグインの [`beforeLoad()`](#beforeload) メソッドが実行された後に実行されます。この段階では、他のプラグイン API にアクセスできます。

### `install()`

プラグインのインストールロジックで、アプリケーションのインストール、アップグレード中、またはプラグインが初めて有効になった時に実行されます。通常、データシートのプリセットデータ挿入などのロジックを実行できます。

### `beforeEnable()`

プラグインが有効になる前に実行されます。

### `afterEnable()`

プラグインが有効になった後に実行されます。

### `beforeDisable()`

プラグインが無効になる前に実行されます。

### `afterDisable()`

プラグインが無効になった後に実行されます。

### `beforeRemove()`

プラグインが削除される前に実行されます。

### `afterRemove()`

プラグインが削除された後に実行されます。

## その他のメソッド

### `t()`

国際化メソッド。

### `createLogger()`

ログを作成します。詳細は [Logger](../logger.md) を参照してください。

### `toJSON()`

実装メソッド。プラグインに関連する設定情報を出力します。

### `sendSyncMessage()`

同期メッセージを送信します。このメソッドを使用して送信された同期メッセージは、他のノードの同じプラグインによってのみ受信され、他のプラグインとは無関係です。

#### シグネチャ

```ts
sendSyncMessage(message: any): Promise<void>
```

#### パラメータ

- `data`：同期メッセージのデータ。キーと値のペアの形式。

#### 例

```ts
await this.sendSyncMessage({
  key: 'value'
});
```

### `handleSyncMessage()`

分散環境で、他のノードの現在のプラグインから送信された同期イベントを処理します。プラグインがメモリ状態を使用している場合、他のノードとの状態同期を保証するために、このイベントの処理ロジックをオーバーライドする必要があります。

#### シグネチャ

```
handleSyncMessage(message: any): void | Promise<void>
```

#### パラメータ

- `message` 同期メッセージ。他のノードから送信されたメッセージの内容。

#### 例

```ts
handleSyncMessage(message) {
  console.log('handleSyncMessage', message);
  // this.reloadData();
}
```