# ライフサイクル

## バックエンドアプリケーションのライフサイクル

<img alt="バックエンドアプリケーションのライフサイクル" src="./server/image-1.png" style="width: 700px;" />

`app.on()` を使用してトリガーされます。詳細な使い方については、[サーバーサイド - イベント](/development/server/events) セクションを参照してください。

```ts
class PluginSampleHelloServer extends Plugin {
  async beforeLoad() {
    this.app.on('beforeInstall', async () => {
      // コーディング...
    });
  }
}
```

## バックエンドプラグインのライフサイクル

<img alt="バックエンドプラグインのライフサイクル" src="./server/image.png" style="width: 450px;" />

プラグインクラス内で記述します。詳細な使い方については、[サーバーサイド - 概要](/development/server) セクションを参照してください。

```ts
class PluginSampleHelloServer extends Plugin {
  async beforeLoad() {}
}
```

## フロントエンドプラグインのライフサイクル

<img alt="フロントエンドプラグインのライフサイクル" src="./client/image.png" style="width: 550px;" />

プラグインクラス内で記述します。詳細な使い方については、[クライアントサイド - 概要](/development/client) セクションを参照してください。

