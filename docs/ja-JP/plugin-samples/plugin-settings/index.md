# プラグイン設定ページの概要

## シナリオ紹介

プラグインを作成する際、ユーザーがプラグインのさまざまなパラメータを設定できる設定ページが必要です。

プラグイン設定インターフェースには、以下の4つのケースがあります。

### フォーム設定ページ

ユーザーはフォームに必要なパラメータを入力し、保存します。これらのパラメータはデータベースに保存され、プラグインが実行される際に読み取られます。例えば、[Custom Brand プラグイン](/handbook/custom-brand#使用説明)。

![img_v3_02av_cc1d4351-3a24-4cd9-b5a6-98fb3b8dae6g](https://static-docs.nocobase.com/img_v3_02av_cc1d4351-3a24-4cd9-b5a6-98fb3b8dae6g.jpg)

上の図から、この設定ページがフォームであることがわかります。ユーザーはフォームに `Brand` と `About` のパラメータを入力し、`Submit` ボタンをクリックして保存します。

### テーブル設定ページ

プラグインの設定はデータのセットであり、ユーザーはテーブルを通じてこれらのデータを追加、削除、変更できます。例えば、[Users & Permissions プラグイン](/handbook/users)。

![img_v3_02av_11e5f726-f716-4c0f-a244-2b6543b1b5dg](https://static-docs.nocobase.com/img_v3_02av_11e5f726-f716-4c0f-a244-2b6543b1b5dg.jpg)

上の図から、この設定ページがテーブルであることがわかります。ユーザーはテーブルにユーザー情報を追加、削除、変更できます。

### テーブル設定ページ（複数の追加フォーム）

プラグインの設定はデータのセットですが、データを追加するフォームにはさまざまなケースがあります。例えば、[File Manager プラグイン](/handbook/file-manager)。

![img_v3_02av_1d023074-402a-4586-848a-b4abd0ee5d4g](https://static-docs.nocobase.com/img_v3_02av_1d023074-402a-4586-848a-b4abd0ee5d4g.jpg)

上の図から、複数のデータ追加フォームがあり、ユーザーは異なるフォームを選択してデータを追加できます。

### その他のケース

他にもいくつかの特殊なケースがあります。例えば、[Theme Editor プラグイン](/handbook/theme-editor#テーマ設定ページへのリンク)。

![img_v3_02av_ec2fa97f-2d1a-415c-8106-e3d979740fcg](https://static-docs.nocobase.com/img_v3_02av_ec2fa97f-2d1a-415c-8106-e3d979740fcg.jpg)

上の図から、対応するテーマエディタが見えます。

## 例

上記のシナリオに基づいて、以下の例を提供します。

- [フォーム設定ページ](/plugin-samples/plugin-settings/form)
- [テーブル設定ページ](/plugin-samples/plugin-settings/table)
- [テーブル設定ページ（複数の追加フォーム）](/plugin-samples/plugin-settings/table-multiple-forms.md)

特殊なケースについては、実際の状況に応じて開発を行ってください。

## 設定ページのルーティング

プラグインのルーティングに関する内容は、以下を参考にしてください。

- [プラグイン設定ページ（単一ルート）](/plugin-samples/router/add-setting-page-single-route)
- [プラグイン設定ページ（タブルート）](/plugin-samples/router/add-setting-page-tabs-routes)
- [プラグイン設定ページ（異なるレイアウト）](/plugin-samples/router/add-setting-page-layout-routes)

このプラグインの例については、ルーティングの詳細を繰り返し説明することはありません。必要な方はご自身で確認してください。

