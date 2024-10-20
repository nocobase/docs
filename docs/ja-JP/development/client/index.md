# 概要

## ディレクトリ構造

初期化された空のプラグインおよびクライアント関連のディレクトリ構造は以下の通りです：

```bash
|- /plugin-sample-hello
  |- /src
    |- /client      # プラグインクライアントコード
      |- index.tsx   # クライアントエントリーファイル
  |- client.d.ts
  |- client.js
```

## プラグインクラス

プラグインクラスは、プラグインのライフサイクルに関するさまざまなメソッドを提供します。

```ts
import { Plugin } from '@nocobase/client';

export class PluginSampleHelloClient extends Plugin {
  async afterAdd() {}

  async beforeLoad() {}

  async load() {}
}

export default PluginSampleHelloClient;
```

## プラグインのライフサイクル

<img alt="プラグインのライフサイクル" src="./image.png" style="width: 600px;" />

- プラグインが初期化された後、`afterAdd`がトリガーされます。プラグインの追加は無秩序であるため、`afterAdd`内で他のプラグインのインスタンスを取得しないでください。他のプラグインのインスタンスを取得する必要がある場合は、`beforeLoad`または`load`内で取得できます。
- `beforeLoad`内では、すべてのアクティブなプラグインがインスタンス化されています。この時点で、[app.pluginManager.get()](https://client.docs.nocobase.com/core/application/plugin-settings-manager)を通じてインスタンスを取得できます。
- `load`内では、すべてのプラグインの`beforeLoad`メソッドが実行されています。

## プラグインクラスでよく使われるプロパティとメソッド

| API                          | チュートリアル                                                                     |
| ---------------------------- | --------------------------------------------------------------------------------- |
| app.i18n                     | [国際化](/development/client/i18n)                                                |
| app.apiClient                | [API クライアント](/development/client/api-client)                                |
| app.pluginManager            | [プラグイン管理者](https://client.docs.nocobase.com/core/application/plugin-manager) |
| app.router                   | [ルーティング管理](/development/client/router)                                     |
| app.pluginSettingsManager    | [プラグイン設定ページ](/development/client/router#プラグイン設定ページ拡張)         |
| app.schemaInitializerManager  | [Schema Initializer 設定](/development/client/ui-schema/initializer)              |
| app.schemaSettingsManager     | [Schema Settings 設定](/development/client/ui-schema/settings)                    |
| app.addProviders             | [Provider コンポーネント](/development/client/providers)                          |
| app.addComponents            | [Schema レンダリング](/development/client/ui-schema/rendering)                     |
| app.addScopes                | [Schema レンダリング](/development/client/ui-schema/rendering)                     |

## コンポーネントでよく使われる React **hooks**

| API            | チュートリアル                                                                                         |
| -------------- | ------------------------------------------------------------------------------------------------------ |
| useApp()       | [useApp() API](https://client.docs.nocobase.com/core/application/application#useapp)                   |
| usePlugin()    | [usePlugin() API](https://client.docs.nocobase.com/core/application/plugin-manager#useplugin)         |
| useAPIClient() | [API クライアント](/development/client/api-client)                                                     |
| useRequest()   | [API クライアント](/development/client/api-client)                                                     |

