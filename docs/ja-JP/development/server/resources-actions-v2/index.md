# コア概念

## リソース Resource

NocoBase では、リソース（resource）には二つの表現方法があります：

- `<collection>`
- `<collection>.<association>`

<Alert>

- collection はすべての抽象データの集合です。
- association は collection の関連データです。

</Alert>

例

- `posts` 文章
- `posts.user` 文章ユーザー
- `posts.tags` 文章タグ

設定

```js
// 文章
{
  name: 'posts',
}
// 文章ユーザー
{
  name: 'posts.user',
}
// 文章タグ
{
  name: 'posts.tags',
}
```

## 操作 Action

リソース操作は `:<action>` の形式で表現します。

- `<collection>:<action>`
- `<collection>.<association>:<action>`

**例**

- `posts:create` 文章を作成
- `posts.user:get` 文章ユーザーを取得
- `posts.tags:add` 文章タグを追加（既存のタグを文章に関連付ける）

設定

```js
// 文章リソースの増減改修設定
{
  name: 'posts',
  actions: {
    create: async (ctx, next) => {},
    get: async (ctx, next) => {},
    list: async (ctx, next) => {},
    update: async (ctx, next) => {},
    destroy: async (ctx, next) => {},
  },
}

// 文章ユーザー
{
  name: 'posts.user',
  actions: {
    create: async (ctx, next) => {},
    get: async (ctx, next) => {},
    list: async (ctx, next) => {},
    update: async (ctx, next) => {},
    destroy: async (ctx, next) => {},
  },
}

// 文章タグ
{
  name: 'posts.tags',
  actions: {
    create: async (ctx, next) => {},
    get: async (ctx, next) => {},
    list: async (ctx, next) => {},
    update: async (ctx, next) => {},
    destroy: async (ctx, next) => {},
    add: async (ctx, next) => {},
    remove: async (ctx, next) => {},
  },
}
```

## リソースのリクエスト方法

```bash
<GET|POST>   /api/<collection>:<action>
<GET|POST>   /api/<collection>:<action>/<filterByTk>
<GET|POST>   /api/<collection>/<sourceId>/<association>:<action>
<GET|POST>   /api/<collection>/<sourceId>/<association>:<action>/<filterByTk>
```

**例**

posts リソース

```bash
POST  /api/posts:create
GET   /api/posts:list
GET   /api/posts:get/1
POST  /api/posts:update/1
POST  /api/posts:destroy/1
```

posts.comments リソース

```bash
POST  /api/posts/1/comments:create
GET   /api/posts/1/comments:list
GET   /api/posts/1/comments:get/1
POST  /api/posts/1/comments:update/1
POST  /api/posts/1/comments:destroy/1
```

posts.tags リソース

```bash
POST  /api/posts/1/tags:create
GET   /api/posts/1/tags:get
GET   /api/posts/1/tags:list
POST  /api/posts/1/tags:update
POST  /api/posts/1/tags:destroy
POST  /api/posts/1/tags:add
GET   /api/posts/1/tags:remove
```

## リソースの特定

すべてのリソースは `filterByTk` によって特定されます。

- collection リソースでは、`filterByTk` はユニークである必要があります。
- association リソースでは、`filterByTk` はユニークでない可能性があり、`sourceId` を同時に提供する必要があります。

例えば `tables.fields` はデータテーブルのフィールドを示します。

```bash
GET   /api/tables/table1/fields/title
GET   /api/tables/table2/fields/title
```

table1 と table2 の両方に title フィールドがあり、title は table1 ではユニークですが、他のテーブルにも title フィールドが存在する可能性があります。

