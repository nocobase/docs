# プラグイン設定ページの追加（異なるレイアウト）

## シナリオ説明

プラグインは複数の設定ページを必要とし、いくつかのページは [AdminSettingsLayout](/development/client/router#既存ページルーティング) の下にありません。一般的には詳細ページです。例えば、`@nocobase/plugin-mobile-client` や `@nocobase/plugin-workflow` などがあります。

## 実例

本サンプルでは、1つの設定ページがあり、その中に詳細リンクがあります。詳細リンクをクリックすると、新しいページに遷移します。

この内容は、コンテンツの詳細な開発には触れず、プラグイン設定ページの追加方法を示すためだけに使用されます。具体的な設定ページの内容やロジックについては、[Plugin Settings プラグインサンプル](/plugin-samples/plugin-settings) ドキュメントを参照してください。

この文書の完全なサンプルコードは [plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-add-setting-page-layout-routes) で確認できます。

<video width="100%" controls>
  <source src="https://static-docs.nocobase.com/10.mp4" type="video/mp4">
</video>

## プラグインの初期化

[最初のプラグインを書く](/development/your-fisrt-plugin) ドキュメントに従い、プロジェクトがない場合は新しく作成します。すでにプロジェクトがある場合やソースコードをクローンしている場合は、このステップをスキップしてください。

```bash
yarn create nocobase-app my-nocobase-app -d sqlite
cd my-nocobase-app
yarn install
yarn nocobase install
```

次に、プラグインを初期化してシステムに追加します：

```bash
yarn pm create @nocobase-sample/plugin-add-setting-page-layout-routes
yarn pm enable @nocobase-sample/plugin-add-setting-page-layout-routes
```

プロジェクトを起動します：

```bash
yarn dev
```

ログイン後、[http://localhost:13000/admin/pm/list/local/](http://localhost:13000/admin/pm/list/local/) にアクセスすると、プラグインがインストールされ、有効になっていることが確認できます。

## 機能の実装

### 1. プラグイン設定ページの登録

プラグイン開発チュートリアルの [プラグイン設定ページの拡張](/development/client/router#プラグイン設定ページの拡張) に従い、プラグインの `packages/plugins/@nocobase-sample/plugin-add-setting-page-layout-routes/src/client/index.tsx` を修正します：

```tsx | pure
import React from 'react';
import { Plugin } from '@nocobase/client';

// @ts-ignore
import { name } from '../../package.json';

const PluginSettingPage = () => <div>
  詳細
</div>

export class PluginAddSettingPageLayoutRoutesClient extends Plugin {
  async load() {
    this.app.pluginSettingsManager.add(name, {
      title: '異なるレイアウト',
      icon: 'ApiOutlined',
      Component: PluginSettingPage,
    });
  }
}

export default PluginAddSettingPageLayoutRoutesClient;
```

次に、[http://localhost:13000/admin/settings/@nocobase-sample/plugin-add-setting-page-layout-routes](http://localhost:13000/admin/settings/@nocobase-sample/plugin-add-setting-page-layout-routes) にアクセスしてプラグイン設定ページを確認します。

### 2. 詳細ページの追加

`AdminLayout` の下に新しい詳細ページを追加します。引き続き `packages/plugins/@nocobase-sample/plugin-add-setting-page-layout-routes/src/client/index.tsx` を修正します：

```diff
+ import { Link } from 'react-router-dom'

const PluginSettingPage = () => <div>
- 詳細
+ <Link to={`/admin/${name}-detail`}>詳細</Link>
</div>

export class PluginAddSettingPageLayoutRoutesClient extends Plugin {
  async load() {
    // ...
+   this.app.router.add(`admin.${name}-details`, {
+     path: `/admin/${name}-detail`,
+     Component: () => <div>詳細</div>,
+   });
  }
}
```

`詳細` リンクをクリックすると、`/admin/@nocobase-sample/plugin-add-setting-page-layout-routes-detail` ページに遷移します。

<video width="100%" controls>
  <source src="https://static-docs.nocobase.com/10.mp4" type="video/mp4">
</video>

## 権限設定

デフォルトでは、プラグイン設定ページには権限がなく、誰でもアクセスおよび設定が可能です。プラグイン設定内で権限を設定する必要があります。

[http://localhost:13000/admin/settings/users-permissions/roles](http://localhost:13000/admin/settings/users-permissions/roles) にアクセスすると、すべての役割が表示されます。プラグイン設定で権限を構成することができます。

![20240512201624](https://static-docs.nocobase.com/20240512201624.png)

## パッケージングと本番環境へのアップロード

[プラグインのビルドとパッケージング](/development/your-fisrt-plugin#プラグインのビルドとパッケージング) の指示に従って、プラグインをパッケージングし、本番環境にアップロードします。

クローンしたソースコードの場合、最初にフルビルドを実行して、プラグインの依存関係もビルドする必要があります。

```bash
yarn build
```

`create-nocobase-app` を使用して作成したプロジェクトの場合、次のコマンドを直接実行できます：

```bash
yarn build @nocobase-sample/plugin-add-setting-page-layout-routes --tar
```

これにより、`storage/tar/@nocobase-sample/plugin-add-setting-page-layout-routes.tar.gz` ファイルが生成されます。その後、[アップロードの方法](/welcome/getting-started/plugin)に従ってインストールしてください。

