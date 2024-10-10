# フロントエンドルーティングの概要

NocoBaseのフロントエンドページには、現在以下の[ページルーティング](/development/client/router#既存のページルーティング)が組み込まれています：

| 名称           | パス               | コンポーネント        | 説明 |
| -------------- | ------------------ | ------------------- |---------|
| admin          | /admin/\*          | AdminLayout         | バックエンド管理ページ  |
| admin.page     | /admin/:name       | AdminDynamicPage    | 動的に作成されたページ |
| admin.settings | /admin/settings/\* | AdminSettingsLayout | プラグイン設定ページ  |
| admin.pm.list  | /admin/pm/list/\* | PluginManager       | プラグイン管理ページ  |

これらのページがすべての要件を満たすわけではありません。例えば：

**追加シナリオ**

- フロントエンドの表示専用ページを追加します。例えば、`/about`でウェブサイトに関する情報を表示します。
- `/admin/*`の下に新しいページを追加します。このページはログイン後にアクセス可能でなければなりません。
- 新しいプラグインを追加し、その設定ページを作成する必要があります。

**変更シナリオ**

- 既存のページを完全に置き換えます。例えば、デフォルトのログインページではなく、カスタムログインページを作成します。
- 既存ページのレイアウトを変更します。例えば、`/admin/*`のレイアウトを変更し、上部のメニューバーを不要にします。

**削除シナリオ**

- 例えば、すでに登録されているページが不要な場合、そのページを削除できます。

上記のシナリオに対処するために、NocoBaseが提供するフロントエンドルーティングの拡張機能を利用して実現できます。以下のサンプルを提供します：

- [ページの追加](/plugin-samples/router/add-page)
- [ページの変更](/plugin-samples/router/replace-page)
- [プラグイン設定ページ（単一ルート）](/plugin-samples/router/add-setting-page-single-route)
- [プラグイン設定ページ（タブルート）](/plugin-samples/router/add-setting-page-tabs-routes)
- [プラグイン設定ページ（異なるレイアウト）](/plugin-samples/router/add-setting-page-layout-routes)

