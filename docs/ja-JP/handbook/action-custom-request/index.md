# カスタムリクエスト
<PluginInfo name="action-custom-request"></PluginInfo>

## 概要

## インストール

ビルトインプラグインのため、個別のインストールは不要です。

## 使用方法

![20240426120014](https://static-docs.nocobase.com/20240426120014.png)

### 権限設定

「設定画面を許可する」にチェックを入れると、カスタムリクエストの設定が可能になります。

![20240426114957](https://static-docs.nocobase.com/20240426114957.png)

`customRequests` テーブルはシステムレベルであり、`acl.registerSnippet` を通じて権限を設定します。

```typescript
this.app.acl.registerSnippet({
  name: 'ui.customRequests', // ui.* に対応する設定画面の権限
  actions: ['customRequests:*'],
});
```

### 変数

URL とリクエストボディ内で変数を設定することがサポートされています。

- 現在のレコード
- 現在のユーザー
- 現在の時間
- APIトークン（v1.3.22-beta 以上のバージョンでサポート）

![20240426120953](https://static-docs.nocobase.com/20240426120953.png)

![20240426121051](https://static-docs.nocobase.com/20240426121051.png)

## 操作設定項目

### リクエスト設定

![20240426120131](https://static-docs.nocobase.com/20240426120131.png)

### 権限管理

各カスタムリクエスト操作はカスタムロール権限をサポートしており、デフォルトで全ユーザーに権限が付与されています。

![20240426120451](https://static-docs.nocobase.com/20240426120451.png)

