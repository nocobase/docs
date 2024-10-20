# プラグイン設定ページの追加（複数のタブ）

## シーン説明

プラグインには複数の設定ページが必要であり、各設定ページは1つのタブに対応します。

## 例の説明

例えば、第三者のメールサービスと連携し、メールサービスのトークンを設定する必要があると同時に、メールサービスのテンプレートを設定するページも必要です。この場合、2つのタブを持つ設定ページが必要です。

本稿では、内容の詳細な開発には触れず、プラグイン設定ページの追加方法を示すことを目的としています。具体的な設定ページの内容やロジックについては、[Plugin Settings プラグインの例](/plugin-samples/plugin-settings) ドキュメントを参照してください。

この文書の完全な例コードは、[plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-add-setting-page-tabs-routes) で確認できます。

<video width="100%" controls>
  <source src="https://static-docs.nocobase.com/7.mp4" type="video/mp4">
</video>

## プラグインの初期化

[最初のプラグインの作成](/development/your-first-plugin) ドキュメントに従い、プロジェクトがない場合は新たに作成してください。すでにプロジェクトがある場合や、ソースコードをクローンしている場合は、このステップをスキップしてください。

```bash
yarn create nocobase-app my-nocobase-app -d sqlite
cd my-nocobase-app
yarn install
yarn nocobase install
```

次に、プラグインを初期化し、システムに追加します：

```bash
yarn pm create @nocobase-sample/plugin-add-setting-page-tabs-routes
yarn pm enable @nocobase-sample/plugin-add-setting-page-tabs-routes
```

その後、プロジェクトを起動します：

```bash
yarn dev
```

ログイン後、[http://localhost:13000/admin/pm/list/local/](http://localhost:13000/admin/pm/list/local/) にアクセスすると、プラグインがインストールされ、有効化されていることが確認できます。

## 機能の実装

プラグイン開発チュートリアルの [プラグイン設定ページの拡張](/development/client/router#プラグイン設定ページの拡張) に従い、プラグインの `packages/plugins/@nocobase-sample/plugin-add-setting-page-tabs-routes/src/client/index.tsx` を修正します：

```tsx | pure
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Plugin } from '@nocobase/client';

// @ts-ignore
import { name } from '../../package.json';

const TokenPage = () => <div>トークンページ</div>;

const TemplatePage = () => <div>テンプレートページ</div>;

export class PluginAddSettingPageTabsRoutesClient extends Plugin {
  async load() {
    this.app.pluginSettingsManager.add(name, {
      title: 'タブルート',
      icon: 'ApiOutlined',
      Component: Outlet, // 省略可能またはカスタムコンポーネントを使用
    });

    this.app.pluginSettingsManager.add(`${name}.token`, {
      title: 'トークンページ',
      Component: TokenPage,
      sort: 1,
    });

    this.app.pluginSettingsManager.add(`${name}.template`, {
      title: 'テンプレートページ',
      Component: TemplatePage,
      sort: 2,
    });

    this.app.pluginSettingsManager.add(`${name}.nestedRoute`, {
      title: 'テスト',
      Component: Outlet, // 省略可能またはカスタムコンポーネントを使用
      sort: 3,
    });

    this.app.pluginSettingsManager.add(`${name}.nestedRoute.a`, {
      title: 'テストA',
      Component: () => <div>テストAページ</div>,
    });

    this.app.pluginSettingsManager.add(`${name}.nestedRoute.b`, {
      title: 'テストB',
      Component: () => <div>テストBページ</div>,
    });
  }
}

export default PluginAddSettingPageTabsRoutesClient;
```

複数の設定ページのシーンでは、`pluginSettingsManager.add()` の `name` プロパティは `.` で区切る必要があります。例えば `pluginName.pageName` のようにすることで、複数の設定ページのタブを実現できます。

次に、[http://localhost:13000/admin/settings/@nocobase-sample/plugin-add-setting-page-tabs-routes](http://localhost:13000/admin/settings/@nocobase-sample/plugin-add-setting-page-tabs-routes) にアクセスして、プラグイン設定ページを確認できます。

<video width="100%" controls>
  <source src="https://static-docs.nocobase.com/7.mp4" type="video/mp4">
</video>

## 権限設定

デフォルトでは、プラグイン設定ページは権限がなく、誰でもアクセスして設定できます。プラグイン設定で権限を設定する必要があります。

[http://localhost:13000/admin/settings/users-permissions/roles](http://localhost:13000/admin/settings/users-permissions/roles) にアクセスすると、すべての役割を確認できます。ここでプラグイン設定に権限を設定できます。

![20240512201446](https://static-docs.nocobase.com/20240512201446.png)

## パッケージ化と本番環境へのアップロード

[プラグインのビルドとパッケージ化](/development/your-first-plugin#ビルドとパッケージ化)のドキュメントに従って、プラグインをパッケージ化し、本番環境にアップロードします。

クローンしたソースコードの場合、最初にフルビルドを実行して、プラグインの依存関係もビルドする必要があります。

```bash
yarn build
```

`create-nocobase-app`を使用して作成したプロジェクトの場合、次のように直接実行できます：

```bash
yarn build @nocobase-sample/plugin-add-setting-page-tabs-routes --tar
```

これにより、`storage/tar/@nocobase-sample/plugin-add-setting-page-tabs-routes.tar.gz`ファイルが生成されます。その後、[アップロードの方法](/welcome/getting-started/plugin)に従ってインストールしてください。

