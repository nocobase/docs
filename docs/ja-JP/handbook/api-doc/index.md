# APIドキュメント

<PluginInfo name="api-doc"></PluginInfo>

## 紹介

Swaggerに基づいてNocoBase HTTP APIドキュメントを生成します。

## インストール

組み込みプラグインで、インストールは不要です。アクティベートするだけで使用できます。

## 使用説明

### APIドキュメントページへのアクセス

http://localhost:13000/admin/settings/api-doc/documentation

![](https://static-docs.nocobase.com/8db51cf50e3c666aba5a850a0fb664a0.png)

### ドキュメント概要

![](https://static-docs.nocobase.com/5bb4d3e5bba6c6fdfcd830592e72385b.png)

- 総APIドキュメント：`/api/swagger:get`
- コアAPIドキュメント：`/api/swagger:get?ns=core`
- すべてのプラグインAPIドキュメント：`/api/swagger:get?ns=plugins`
- 各プラグインのドキュメント：`/api/swagger:get?ns=plugins/{name}`
- ユーザー定義コレクションのAPIドキュメント：`/api/swagger:get?ns=collections`
- 指定された`${collection}`および関連する`${collection}.${association}`リソース：`/api/swagger:get?ns=collections/{name}`

## 開発ガイド

### プラグインのためにSwaggerドキュメントを書く方法

プラグインの`src`フォルダーに`swagger/index.ts`ファイルを追加し、以下の内容にします：

```typescript
export default {
  info: {
    title: 'NocoBase API - Authプラグイン',
  },
  tags: [],
  paths: {},
  components: {
    schemas: {},
  },
};
```

詳細な記述ルールについては、[Swagger公式ドキュメント](https://swagger.io/docs/specification/about/)を参照してください。

