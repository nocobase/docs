# 概要

NocoBase の HTTP API はリソースとアクションに基づいて設計されており、REST API のスーパーセットです。操作は CRUD にとどまらず、NocoBase ではリソースアクションを自由に拡張できます。

## リソース

NocoBase では、リソースは二つの表現方法があります：

- `<collection>`
- `<collection>.<association>`

<Alert>

- collection はすべての抽象データの集合です。
- association は collection の関連データです。
- resource は collection と collection.association の二つの種類を含みます。

</Alert>

### 例

- `posts` 記事
- `posts.user` 記事ユーザー
- `posts.tags` 記事タグ

## 操作

リソース操作は `:<action>` の形式で表します。

- `<collection>:<action>`
- `<collection>.<association>:<action>`

内蔵のグローバル操作は、collection または association に使用できます。

- `create`
- `get`
- `list`
- `update`
- `destroy`
- `move`

内蔵の関連操作は、association のみに使用されます。

- `set`
- `add`
- `remove`
- `toggle`

### 例

- `posts:create` 記事を作成
- `posts.user:get` 記事ユーザーを表示
- `posts.tags:add` 記事タグを追加（既存のタグを記事に関連付ける）

## リクエスト URL

```bash
<GET|POST>   /api/<collection>:<action>
<GET|POST>   /api/<collection>:<action>/<collectionIndex>
<GET|POST>   /api/<collection>/<collectionIndex>/<association>:<action>
<GET|POST>   /api/<collection>/<collectionIndex>/<association>:<action>/<associationIndex>
```

### 例

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

- collection リソースは `collectionIndex` を使用して処理対象データを特定します。`collectionIndex` は一意でなければなりません。
- association リソースは `collectionIndex` と `associationIndex` を組み合わせて処理対象データを特定します。`associationIndex` は一意でない可能性がありますが、`collectionIndex` と `associationIndex` の組み合わせは一意でなければなりません。

association リソースの詳細を確認する際は、リクエスト URL に `<collectionIndex>` と `<associationIndex>` の両方を同時に提供する必要があります。`<collectionIndex>` は不要ではなく、`<associationIndex>` は一意でない可能性があるためです。

例えば `tables.fields` はデータベースのフィールドを表します。

```bash
GET   /api/tables/table1/fields/title
GET   /api/tables/table2/fields/title
```

table1 と table2 の両方に title フィールドがありますが、table1 では title が一意です。しかし、他のテーブルにも title フィールドが存在する可能性があります。

## リクエストパラメータ

リクエストパラメータは、リクエストのヘッダー、パラメータ（クエリ文字列）、ボディ（GET リクエストにはボディがありません）に含めることができます。

いくつかの特別なリクエストパラメータ：

- `filter` データフィルタリング、関連操作のクエリに使用；
- `filterByTk` tk フィールドでフィルタリング、詳細データの操作に使用；
- `sort` ソート、関連操作のクエリに使用；
- `fields` 出力するデータを指定、関連操作のクエリに使用；
- `appends` 関連フィールドを追加、関連操作のクエリに使用；
- `except` 除外するフィールド（出力しない）、関連操作のクエリに使用；
- `whitelist` フィールドのホワイトリスト、データ作成と更新の関連操作に使用；
- `blacklist` フィールドのブラックリスト、データ作成と更新の関連操作に使用；

### filter

データフィルタリング

```bash
# シンプル
GET /api/posts?filter[status]=publish
# json 文字列の形式を推奨、encodeURIComponent でエンコードする必要があります
GET /api/posts?filter={"status":"published"}

# フィルターオペレーター
GET /api/posts?filter[status.$eq]=publish
GET /api/posts?filter={"status.$eq":"published"}

# $and
GET /api/posts?filter={"$and": [{"status.$eq":"published"}, {"title.$includes":"a"}]}
# $or
GET /api/posts?filter={"$or": [{"status.$eq":"pending"}, {"status.$eq":"draft"}]}

# 関連フィールド
GET /api/posts?filter[user.email.$includes]=gmail
GET /api/posts?filter={"user.email.$includes":"gmail"}
```

[こちらをクリックしてフィルタ演算子についての詳細を確認してください](http-api/filter-operators)

### filterByTk

tk フィールドでフィルタリングします。デフォルトでは：

- コレクションリソースの場合、tk はデータベースの主キーです。
- アソシエーションリソースの場合、tk はアソシエーションの targetKey フィールドです。

```bash
GET   /api/posts:get?filterByTk=1&fields=name,title&appends=tags
```

### sort

ソートします。降順の場合、フィールドの前にマイナス記号 `-` を付けます。

```bash
# createdAt フィールドの昇順
GET   /api/posts:get?sort=createdAt
# createdAt フィールドの降順
GET   /api/posts:get?sort=-createdAt
# 複数フィールドの組み合わせソート、createdAt フィールド降順、title A-Z 昇順
GET   /api/posts:get?sort=-createdAt,title
```

### fields

出力するデータを指定します。

```bash
GET   /api/posts:list?fields=name,title

Response 200 (application/json)
{
  "data": [
    {
      "name": "",
      "title": ""
    }
  ],
  "meta": {}
}
```

### appends

関連フィールドを追加します。

### except

除外するフィールド（出力しない）に関連する操作に使用します。

### whitelist

ホワイトリスト

```bash
POST  /api/posts:create?whitelist=title

{
  "title": "私の最初の投稿",
  "date": "2022-05-19"      # date フィールドはフィルタリングされ、データベースに書き込まれません
}
```

### blacklist

ブラックリスト

```bash
POST  /api/posts:create?blacklist=date

{
  "title": "私の最初の投稿",
  "date": "2022-05-19"      # date フィールドはフィルタリングされ、データベースに書き込まれません
}
```

## リクエスト応答

応答の形式

```ts
type ResponseResult = {
  data?: any; // 主体データ
  meta?: any; // 附加データ
  errors?: ResponseError[]; // エラー
};

type ResponseError = {
  code?: string;
  message: string;
};
```

### 例

リストを確認

```bash
GET /api/posts:list

Response 200 (application/json)

{
  data: [
    {
      id: 1
    }
  ],
  meta: {
    count: 1,
    page: 1,
    pageSize: 1,
    totalPage: 1
  },
}
```

詳細を確認

```bash
GET /api/posts:get/1

Response 200 (application/json)

{
  data: {
    id: 1
  },
}
```

エラー

```bash
POST /api/posts:create

Response 400 (application/json)

{
  errors: [
    {
      message: 'name は必須です',
    },
  ],
}
```

