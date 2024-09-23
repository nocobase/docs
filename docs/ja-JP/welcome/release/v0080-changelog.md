# v0.8：2022年11月1日

v0.8から、NocoBaseは利用可能なプラグインマネージャーと開発ドキュメントを提供し始めました。以下はv0.8の主な変更点です。

## インターフェース右上の調整

- インターフェース設定
- プラグインマネージャー
- 設定センター
- 個人センター

<img src="./v08-changelog/topright.jpg" style="max-width: 500px;" />

## 新しいプラグインマネージャー

v0.8では、ノーコードでプラグインを管理するための強力なプラグインマネージャーを提供します。

### プラグインマネージャーの流れ

<img src="./v08-changelog/pm-flow.svg" style="max-width: 580px;"/>

### プラグインマネージャーのインターフェース

現在、主にローカルプラグインの無効化、アクティブ化、削除に使用されます。組み込みプラグインは削除できませんので、プラグインマーケットにご期待ください。

<img src="./v08-changelog/pm-ui.jpg" />

### プラグインマネージャーのコマンドライン

ノーコードインターフェースでプラグインをアクティブ化、無効化できるだけでなく、コマンドラインからもプラグインをより完全に管理できます。

```bash
# プラグインを作成
yarn pm create hello
# プラグインを登録
yarn pm add hello
# プラグインをアクティブ化
yarn pm enable hello
# プラグインを無効化
yarn pm disable hello
# プラグインを削除
yarn pm remove hello
```

備考：プラグインの公開とアップグレードは、今後のバージョンでサポートされる予定です。

```bash
# プラグインを公開
yarn pm publish hello
# プラグインをアップグレード
yarn pm upgrade hello
```

プラグインのさらなる例については、[packages/samples](https://github.com/nocobase/nocobase/tree/main/packages/samples)をご覧ください。

## プラグインの変更

### プラグインディレクトリ構造

```bash
|- /hello
  |- /src
    |- /client      # プラグインクライアントコード
    |- /server      # プラグインサーバーコード
  |- client.d.ts
  |- client.js
  |- package.json   # プラグインパッケージ情報
  |- server.d.ts
  |- server.js
```

### プラグイン名の規則

NocoBase プラグインは NPM パッケージでもあり、プラグイン名と NPM パッケージ名の対応規則は `${PLUGIN_PACKAGE_PREFIX}-${pluginName}` です。

`PLUGIN_PACKAGE_PREFIX` はプラグインパッケージのプレフィックスであり、.env でカスタマイズ可能です。[こちらをクリックして PLUGIN_PACKAGE_PREFIX の説明を確認してください](../getting-started/env.md#plugin_package_prefix)。

例えば、`my-nocobase-app` というプロジェクトに `hello` プラグインを追加した場合、パッケージ名は `@my-nocobase-app/plugin-hello` になります。

PLUGIN_PACKAGE_PREFIX の設定は次の通りです：

```bash
PLUGIN_PACKAGE_PREFIX=@nocobase/plugin-,@nocobase/preset-,@my-nocobase-app/plugin-
```

プラグイン名とパッケージ名の対応関係は次の通りです：

- `users` プラグインのパッケージ名は `@nocobase/plugin-users`
- `nocobase` プラグインのパッケージ名は `@nocobase/preset-nocobase`
- `hello` プラグインのパッケージ名は `@my-nocobase-app/plugin-hello`

### プラグインのライフサイクル

v0.8 では、より包括的なプラグインライフサイクルメソッドが提供されています。

```ts
import { InstallOptions, Plugin } from '@nocobase/server';

export class HelloPlugin extends Plugin {
  afterAdd() {
    // プラグインが pm.add で追加された後
  }

  beforeLoad() {
    // すべてのプラグインが load を実行する前に、一般的にクラスやイベントリスナーを登録するために使用されます。
  }

  async load() {
    // 設定を読み込みます。
  }

  async install(options?: InstallOptions) {
    // インストールロジックを実行します。
  }

  async afterEnable() {
    // 有効化後の処理を実行します。
  }

  async afterDisable() {
    // 無効化後の処理を実行します。
  }

  async remove() {
    // 削除ロジックを実行します。
  }
}

export default HelloPlugin;
```

### プラグインの前後端入口

プラグインのライフサイクルはサーバーによって制御されます。

```ts
import { Application } from '@nocobase/server';

const app = new Application({
  // ...
});

class MyPlugin extends Plugin {
  afterAdd() {}
  beforeLoad() {}
  load() {}
  install() {}
  afterEnable() {}
  afterDisable() {}
  remove() {}
}

app.plugin(MyPlugin, { name: 'my-plugin' });
```

プラグインのクライアントは Context.Provider 形式で存在します（サーバー側の Middleware に似ています）。

```tsx | pure
import React from 'react';
import { Application } from '@nocobase/client';

const app = new Application({
  apiClient: {
    baseURL: process.env.API_BASE_URL,
  },
  dynamicImport: (name: string) => {
    return import(`../plugins/${name}`);
  },
});

// /helloページにアクセスすると「Hello world!」と表示されます。
const HelloProvider = React.memo((props) => {
  const location = useLocation();
  if (location.pathname === '/hello') {
    return <div>Hello world!</div>;
  }
  return <>{props.children}</>;
});
HelloProvider.displayName = 'HelloProvider';

app.use(HelloProvider);
```

## カスタムビジネスコード

v0.7のプラグインは未完成であり、カスタムビジネスコードは`packages/app/client`と`packages/app/server`に分散しているため、アップグレードやメンテナンスが困難です。v0.8では、プラグインパッケージの形式で整理し、`yarn pm`を使用してプラグインを管理することを推奨します。

## より完全なドキュメントを提供

- **ウェルカム**：NocoBaseの概要を迅速に理解
- **ユーザーガイド**：NocoBaseプラットフォームが提供するコア機能を深く理解
- **プラグイン開発チュートリアル**：プラグイン開発を詳細に学ぶ
- **APIリファレンス**：プラグイン開発中に各APIの使用法を確認
- **クライアントコンポーネントライブラリ**（準備中）：NocoBaseの各コンポーネントの例と使用法を提供

備考：ドキュメントにはまだ多くの詳細が追加される予定であり、皆様からのさらなるフィードバックに基づいて調整を続けていきます。

## より多くのプラグインの例を提供

- [コマンド](https://github.com/nocobase/nocobase/tree/develop/packages/samples/command 'コマンド')
- [カスタムブロック](https://github.com/nocobase/nocobase/tree/develop/packages/samples/custom-block 'カスタムブロック')
- [カスタムページ](https://github.com/nocobase/nocobase/tree/develop/packages/samples/custom-page 'カスタムページ')
- [カスタムサインアップページ](https://github.com/nocobase/nocobase/tree/develop/packages/samples/custom-signup-page 'カスタムサインアップページ')
- [ハロー](https://github.com/nocobase/nocobase/tree/develop/packages/samples/hello 'ハロー')
- [レートリミット](https://github.com/nocobase/nocobase/tree/develop/packages/samples/ratelimit 'レートリミット')
- [ショップアクション](https://github.com/nocobase/nocobase/tree/develop/packages/samples/shop-actions 'ショップアクション')
- [ショップイベント](https://github.com/nocobase/nocobase/tree/develop/packages/samples/shop-events 'ショップイベント')
- [ショップi18n](https://github.com/nocobase/nocobase/tree/develop/packages/samples/shop-i18n 'ショップi18n')
- [ショップモデリング](https://github.com/nocobase/nocobase/tree/develop/packages/samples/shop-modeling 'ショップモデリング')

## その他の新機能と機能

- インポート
- 一括更新および編集
- グラフィカルデータテーブル設定
- ワークフローの実行履歴表示サポート
- JSONフィールド

