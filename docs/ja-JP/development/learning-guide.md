# 学習ルートガイド

## 1. NocoBaseのインストールと実行を始める

**関連文書：<a href="/welcome/getting-started/installation" target="_blank">クイックスタート</a>**

主なコマンドは以下の通りです：

ダウンロード

```bash
yarn create/git clone
yarn install
```

インストール

```bash
yarn nocobase install
```

実行

```bash
# 開発用
yarn dev

# 本番用
yarn build
yarn start
```

## 2. NocoBaseプラットフォームが提供する主要機能を理解する

**関連文書：<a href="/manual" target="_blank">使用マニュアル</a>**

主な三部構成は以下の通りです：

- UIデザイナー：主にブロック、フィールド、アクションを含む
- プラグインマネージャー：機能要件の拡張
- 設定センター：有効化されたプラグインが提供する設定機能

## 3. プラグインマネージャーの使用をさらに理解する

**関連文書：<a href="/development" target="_blank">プラグイン開発</a>**

NocoBaseは簡単なプラグインマネージャーインターフェースを提供していますが、インターフェースではローカルプラグインの有効化、無効化、削除のみを処理でき、完全な操作はCLIを通じて行う必要があります。

```bash
# プラグイン作成
yarn pm create hello
# プラグイン登録
yarn pm add hello
# プラグイン有効化
yarn pm enable hello
# プラグイン無効化
yarn pm disable hello
# プラグイン削除
yarn pm remove hello
```

さらに多くのプラグインの例は、`packages/samples`を確認してください。samplesプラグインを通じて基本的なプラグインの使用法を理解することで、プラグインの開発を進めることができます。

## 4. 新しいプラグインを開発し、モジュールの分布を理解する

**関連文書：<a href="/development/guide" target="_blank">拡張ガイド</a>**

[最初のプラグインを書く](/development/your-first-plugin)章では、プラグインの主要な開発プロセスについて簡単に説明されていますが、プラグインの詳細に迅速に関与するためには、NocoBaseフレームワークのモジュール分布をさらに理解する必要があります：

- サーバー
  - コレクション＆フィールド：主にシステムテーブルの設定に使用され、業務テーブルは「設定センター - データテーブルの設定」で設定することを推奨します。
  - リソース＆アクション：主にアクションAPIの拡張に使用。
  - ミドルウェア：ミドルウェア。
  - イベント：イベント。
  - I18n：サーバーサイドの国際化。
- クライアント
  - UIスキーマデザイナー：ページデザイナー。
  - UIルーター：カスタムページが必要な場合。
  - プラグイン設定マネージャー：プラグインに設定ページを提供。
  - I18n：クライアントサイドの国際化。
- 開発ツール
  - コマンド：カスタムコマンドライン。
  - マイグレーション：マイグレーションスクリプト。

## 5. 各モジュールの主要APIを参照する

**関連文書：<a href="/api" target="_blank">APIリファレンス</a>**

各モジュールの`packages/samples`を確認し、主要APIの使用法をさらに理解してください。

- サーバー
  - コレクション＆フィールド
    - db.collection
    - db.import
  - リソース＆アクション
    - app.resourcer.define
    - app.resourcer.registerActions
  - ミドルウェア
    - app.use
    - app.acl.use
    - app.resourcer.use
  - イベント
    - app.on
    - app.db.on
  - I18n
    - app.i18n
    - ctx.i18n
- クライアント
  - UIスキーマデザイナー
    - SchemaComponent
    - SchemaInitializer
    - SchemaSettings
  - UIルーター
    - RouteSwitchProvider
    - RouteSwitch
  - I18n
    - app.i18n
    - useTranslation
- 開発ツール
  - コマンド
    - app.command
    - app.findCommand
  - マイグレーション
    - app.db.addMigration
    - app.db.addMigrations

