# 概要

初期化された空のプラグインおよびサーバー関連のディレクトリ構造は以下の通りです：

```bash
|- /plugin-sample-hello
  |- /src              # プラグインソースコード
    |- /server
      |- collections   # 規定のディレクトリ、プラグインのデータテーブル設定
      |- commands      # 規定のディレクトリ、カスタムコマンド
      |- migrations    # 規定のディレクトリ、マイグレーションファイル
      |- plugin.ts     # プラグインクラス
      |- index.ts      # サーバーエントリ
  |- package.json
  |- server.d.ts
  |- server.js
```

## プラグイン

`plugin.ts` はプラグインライフサイクルのさまざまなメソッドを提供します。

```ts
import { Plugin } from '@nocobase/server';

export class PluginSampleHelloServer extends Plugin {
  async afterAdd() {
    // プラグインが pm.add で登録された後。主に app beforeLoad イベントのリスナーを配置するために使用します。
    this.app.on('beforeLoad');
  }
  
  async beforeLoad() {
    // カスタムクラスまたはメソッドの登録
    this.db.registerFieldTypes();
    this.db.registerModels();
    this.db.registerRepositories();
    this.db.registerOperators();
    // イベントリスナーの登録
    this.app.on();
    this.db.on();
  }
  
  async load() {
    // リソースの定義
    this.resourcer.define();
    // リソースアクションの登録
    this.resourcer.registerActions();
    // ミドルウェアの登録
    this.resourcer.use();
    this.acl.use();
    this.app.use();

    this.app.i18n;
  }
  
  async install() {
    // インストールロジック
  }
  
  async afterEnable() {
    // 有効化後の処理
  }
  
  async afterDisable() {
    // 無効化後の処理
  }
  
  async remove() {
    // 削除ロジック
  }
}

export default MyPlugin;
```

## プラグインのライフサイクル

<img alt="プラグインのライフサイクル" src="./image.png" style="width: 320px;" />

- プラグインの初期化後、`afterAdd` がトリガーされます。`afterAdd` 内では他のプラグインが必ずしもインスタンス化されるわけではありません。
- `beforeLoad` では、すべてのアクティブなプラグインがインスタンス化され、`app.pluginManager.get()` を通じてインスタンスを取得可能です。
- `load` では、すべてのプラグインの `beforeLoad` メソッドが実行済みです。

## プラグインクラスでよく使われる属性とメソッド

| API                              | チュートリアル       |
| -------------------------------- | ------------------ |
| this.name                        | プラグイン名         |
| this.enabled                     | 有効化されている     |
| this.installed                   | インストールされている |
| this.app                         | アプリインスタンス   |
| this.pm                          | プラグイン管理者インスタンス |
| this.db                          | データベースインスタンス |
| this.resourcer                   | リソース管理者       |
| this.acl                         | アクセス制御         |
| this.log                         | ログ                 |
| this.app.i18n                   | 国際化               |
| this.db.registerFieldTypes()     | フィールドタイプを登録 |
| this.db.registerModels()         | モデルを登録         |
| this.db.registerRepositories()   | リポジトリを登録     |
| this.db.registerOperators()      | カスタム演算子を登録 |
| this.app.on()                    | アプリイベント       |
| this.db.on()                     | データベースイベント |
| this.db.collection()             | データテーブルの設定 |
| this.db.import()                 | データテーブル設定のインポート |
| this.db.addMigrations()          | マイグレーション       |
| this.resourcer.registerActions() | リソース操作を登録   |
| this.resourcer.use()             | ミドルウェア         |
| this.acl.use()                   | ミドルウェア         |
| this.app.use()                   | ミドルウェア         |
| this.app.command()               | コマンドライン       |

