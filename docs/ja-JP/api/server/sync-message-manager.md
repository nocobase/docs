# SyncMessageManager

複数のノード間の同期信号を管理するために使用されます。分散型デプロイメントでは、メモリ状態が変更された場合、他のノードに通知して同期する必要があります。同期信号管理は、任意のモジュールで統一された方法で使用できる汎用的な呼び出しインターフェースを提供します。

同期マネージャー自体は具体的な同期機能を実装せず、統一されたインターフェースを提供し、基盤の pubSubManager を呼び出してメッセージの送受信を行います。

## `SyncMessageManager`

### メンバー

#### `constructor()`

コンストラクター。同期マネージャーのインスタンスを作成します。アプリケーションの初期化時に自動的にインスタンスが作成され、アプリケーションのグローバルアクセス可能なプロパティ（`app.syncManager`）として利用可能になります。呼び出す必要はありません。

#### `subscribe(channel: string, callback: PubSubCallback)`

同期イベントをサブスクライブします。

- `channel`：チャネル名。異なる同期イベントを区別するために使用されます。
- `callback`：イベントコールバック関数。同期イベントが発生した場合にこの関数が呼び出されます。

#### `unsubscribe(channel: string, callback: PubSubCallback)`

同期イベントのサブスクリプションを解除します。

#### `publish(channel: string, message: any)`

同期メッセージを発行します。

- `channel`：チャネル名。異なる同期イベントを区別するために使用されます。
- `message`：同期メッセージデータ。

### 関連タイプ

```ts
export type PubSubCallback = (message: any) => Promise<void>;
```