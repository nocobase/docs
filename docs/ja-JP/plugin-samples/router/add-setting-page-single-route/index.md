# プラグイン設定ページの追加（単一ルート）

## シーンの説明

プラグインには簡単な設定ページが必要で、ルートは一つだけです。

## サンプルの説明

第三者のメールサービスと連携する際には、メールサービスのトークンを設定する必要があります。このとき、設定ページが求められます。

本稿では、内容の詳細な開発には触れず、プラグイン設定ページの追加方法を示します。具体的な設定ページの内容やロジックについては、[Plugin Settings プラグインの例](/plugin-samples/plugin-settings) ドキュメントを参照してください。

この文書の完全なサンプルコードは、[plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-add-setting-page-single-route) で確認できます。

![20240512201126](https://static-docs.nocobase.com/20240512201126.png)

## プラグインの初期化

[最初のプラグインを書く](/development/your-first-plugin) ドキュメントに従い、プロジェクトがない場合は新しく作成します。すでに存在するか、クローンしたソースコードがある場合は、このステップをスキップしてください。

```bash
yarn create nocobase-app my-nocobase-app -d sqlite
cd my-nocobase-app
yarn install
yarn nocobase install
```

次に、プラグインを初期化してシステムに追加します。

```bash
yarn pm create @nocobase-sample/plugin-add-setting-page-single-route
yarn pm enable @nocobase-sample/plugin-add-setting-page-single-route
```

その後、プロジェクトを起動します。

```bash
yarn dev
```

ログイン後、[http://localhost:13000/admin/pm/list/local/](http://localhost:13000/admin/pm/list/local/) にアクセスすると、プラグインがインストールされて有効になっていることを確認できます。

## 機能の実装

プラグイン開発チュートリアルの[プラグイン設定ページの拡張](/development/client/router#プラグイン設定ページの拡張)に従い、プラグインの `packages/plugins/@nocobase-sample/plugin-add-setting-page-single-route/src/client/index.tsx` を修正します。

```ts
import React from 'react';
import { Plugin } from '@nocobase/client';

// @ts-ignore
import { name } from '../../package.json';

const MySettingPage = () => <div>こんにちは設定ページ</div>;

export class PluginAddSettingPageSingleRouteClient extends Plugin {
  async load() {
    this.app.pluginSettingsManager.add(name, {
      title: '単一ルート',
      icon: 'ApiOutlined',
      Component: MySettingPage,
    });
  }
}

export default PluginAddSettingPageSingleRouteClient;
```

- `name`：プラグインの名称で、プラグインを一意に識別するために使用されます。
- `title`：プラグイン設定管理ページのメニュータイトル。
- `icon`：プラグイン設定管理ページのメニューアイコン。詳細なアイコンについては、[Ant Design アイコン](https://ant.design/components/icon/) を参照してください。
- `Component`：設定ページの内容。

次に、[http://localhost:13000/admin/settings/@nocobase-sample/plugin-add-setting-page-single-route](http://localhost:13000/admin/settings/@nocobase-sample/plugin-add-setting-page-single-route) にアクセスしてプラグイン設定ページを確認します。

![20240512201126](https://static-docs.nocobase.com/20240512201126.png)

## 権限設定

デフォルトでは、プラグイン設定ページには権限がありません。誰でもアクセスできるため、プラグイン設定で権限を設定する必要があります。

[http://localhost:13000/admin/settings/users-permissions/roles](http://localhost:13000/admin/settings/users-permissions/roles) にアクセスすると、すべての役割が表示されます。ここでプラグイン設定に権限を設定できます。

![20240512201234](https://static-docs.nocobase.com/20240512201234.png)

## パッケージ化と本番環境へのアップロード

[プラグインをビルドしてパッケージ化する](/development/your-first-plugin#プラグインをビルドしてパッケージ化する) ドキュメントに従い、プラグインをパッケージ化して本番環境にアップロードします。

クローンしたソースコードの場合、まず全量ビルドを実行してプラグインの依存関係を構築します。

```bash
yarn build
```

`create-nocobase-app` を使って作成したプロジェクトの場合、次のように実行できます。

```bash
yarn build @nocobase-sample/plugin-add-setting-page-single-route --tar
```

これにより、`storage/tar/@nocobase-sample/plugin-add-setting-page-single-route.tar.gz` ファイルが生成され、[アップロードの方法](/welcome/getting-started/plugin) でインストールできます。

