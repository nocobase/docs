# 概要

- 最初のプラグインの作成
  - @my-project/plugin-hello
- データテーブルおよびフィールド関連
  - sample-collection-define
  - sample-collection-extend
  - sample-collection-model
  - sample-collection-repository
  - sample-collection-template
  - sample-collection-field-type
  - sample-collection-field-interface
- リソースおよび操作関連
  - sample-resource-manager-register-action-handlers
  - sample-resource-manager-define
  - sample-resource-manager-actions
- データベースの使用法
  - sample-db-registerFieldTypes
  - sample-db-registerModels
  - sample-db-registerRepositories
  - sample-db-registerOperators
  - sample-db-repository
- カスタムコマンドライン
  - sample-cli-create-command
- マイグレーションスクリプト
  - sample-migration-create-migration
- キャッシュ
  - sample-cache-register-store
  - sample-cache-create-cache
- サーバーサイドミドルウェア
  - sample-middleware-ratelimit
- データソース拡張
  - sample-data-source-nocobase-api
- グラフ拡張
  - sample-dv-echarts
- 国際化
  - sample-i18n-zh-cn
- フロントエンドルーティング拡張
  - ページの追加
  - ページの置き換え
  - プラグイン設定ページ（単一ルート）
  - プラグイン設定ページ（タブ型レイアウト）
  - プラグイン設定ページ（異なるレイアウト）
- プラグイン設定ページ
  - フォーム設定ページ
  - テーブル設定ページ
  - 多態性テーブル設定ページ
- プロバイダーコンポーネント
  - グローバル通知バー
- コンポーネントの拡張
- スキーマイニシャライザー
  - 既存の Add block に初期項目を追加
  - 既存の Configure actions に初期項目を追加
  - 既存の Configure fields に初期項目を追加
  - 既存の SchemaInitializerItem を再利用
    - 直接ブロックを追加
      - ポップアップ設定後に追加（カレンダーのように）
  - 新しいイニシャライザーを作成
    - ボタンおよびドロップダウンメニュー
- スキーマ設定
  - 既存の Settings に初期項目を追加
  - 既存の SchemaSettingsItem を再利用
  - 新しい設定器を作成
- ブロック拡張
  - シンプルなブロック例 - ギャラリー画像カルーセルブロック
    - ブロックコンポーネント開発
    - イニシャライザーアイテム
    - ブロック設定
  - ブロック内埋め込みのイニシャライザー
    - 操作の設定
    - フィールドの設定
    - カスタムイニシャライザー
- 操作拡張
  - コマンド型操作
  - ポップアップ型操作
- フィールド拡張
  - カスタムフィールドインターフェースタイプ
  - カスタムフィールドデータタイプ
  - フィールドコンポーネントの開発
    - connect + mapReadPretty
    - observer + mapReadPretty
  - フィールドに設定器を提供
