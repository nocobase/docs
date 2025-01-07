# 概要

NocoBase の HTTP API は Resource & Action 設計に基づいており、REST API のスーパーセットです。操作は CRUD に限定されず、NocoBase では Resource Action を自由に拡張できます。

## リソース Resource

NocoBase では、リソース（resource）は以下の2つの方法で表現されます：

- `<collection>`
- `<collection>.<association>`

<Alert>

- collection は全ての抽象データの集合です
- association は collection の関連データです
- resource は collection と collection.association の2種類を含みます

</Alert>

### 例

- `posts` 記事
- `posts.user` 記事のユーザー
- `posts.tags` 記事のタグ

## 操作 Action

リソース操作は `:<action>` の形式で表現されます

- `<collection>:<action>`
- `<collection>.<association>:<action>`

組み込みのグローバル操作は、collection または association に使用できます

- `create`
- `get`
- `list`
- `update`
- `destroy`
- `move`

組み込みの関連操作は、association のみに使用されます

- `set`
- `add`
- `remove`
- `toggle`

### 例

- `posts:create` 記事を作成
- `posts.user:get` 記事のユーザーを表示
- `posts.tags:add` 記事のタグを追加（既存のタグを記事に関連付ける）

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

## リソースの位置特定

- collection リソースは、`collectionIndex` を使用して処理対象のデータを特定します。`collectionIndex` は一意でなければなりません
- association リソースは、`collectionIndex` と `associationIndex` を組み合わせて処理対象のデータを特定します。`associationIndex` は一意でない場合がありますが、`collectionIndex` と `associationIndex` の組み合わせは一意でなければなりません

association リソースの詳細を表示する場合、リクエスト URL には `<collectionIndex>` と `<associationIndex>` の両方を指定する必要があります。`<associationIndex>` が一意でない場合があるため、`<collectionIndex>` は冗長ではありません。

例えば `tables.fields` はデータシートのフィールドを表します

```bash
GET   /api/tables/table1/fields/title
GET   /api/tables/table2/fields/title
```

table1 と table2 にはどちらも title フィールドがあります。title は table1 内では一意ですが、他のテーブルにも title フィールドが存在する可能性があります

## リクエストパラメータ

リクエストパラメータは、Request の headers、parameters（クエリ文字列）、body（GET リクエストには body はありません）に含めることができます。

いくつかの特殊な Parameters リクエストパラメータ

- `filter` データフィルタリング、関連する操作で使用されます
- `filterByTk` tk フィールドによるフィルタリング、特定の詳細データ操作で使用されます
- `sort` ソート、関連する操作で使用されます
- `fields` 出力するデータ、関連する操作で使用されます
- `appends` 関連フィールドの追加、関連する操作で使用されます
- `except` 除外するフィールド（出力しない）、関連する操作で使用されます
- `whitelist` フィールドのホワイトリスト、データの作成および更新関連の操作で使用されます
- `blacklist` フィールドのブラックリスト、データの作成および更新関連の操作で使用されます

### filter

データフィルタリング

```bash
# シンプル
GET /api/posts?filter[status]=publish
# json 文字列形式の使用を推奨、encodeURIComponent でエンコードする必要があります
GET /api/posts?filter={"status":"published"}

# フィルタ演算子
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

[フィルタ演算子の詳細についてはこちらを参照してください](http-api/filter-operators)

### filterByTk

tk フィールドによるフィルタリング、デフォルトでは：

- collection リソースの場合、tk はデータシートの主キーです
- association リソースの場合、tk は association の targetKey フィールドです

```bash
GET   /api/posts:get?filterByTk=1&fields=name,title&appends=tags
```

### sort

ソート。降順の場合、フィールドの前にマイナス記号 `-` を付けます。

```bash
# createAt フィールドの昇順
GET   /api/posts:get?sort=createdAt
# createAt フィールドの降順
GET   /api/posts:get?sort=-createdAt
# 複数のフィールドを組み合わせてソート、createAt フィールドの降順、title A-Z 昇順
GET   /api/posts:get?sort=-createdAt,title
```

### fields

出力するデータ

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

関連フィールドの追加

### except

除外するフィールド（出力しない）、関連する操作で使用されます

### whitelist

ホワイトリスト

```bash
POST  /api/posts:create?whitelist=title

{
  "title": "My first post",
  "date": "2022-05-19"      # date フィールドはフィルタリングされ、データベースに書き込まれません
}
```

### blacklist

ブラックリスト

```bash
POST  /api/posts:create?blacklist=date

# date フィールドはフィルタリングされ、データベースに書き込まれません
{
  "title": "My first post"
}
```

## リクエストのレスポンス

レスポンスの形式

```ts
type ResponseResult = {
  data?: any; // メインデータ
  meta?: any; // 追加データ
  errors?: ResponseError[]; // エラー
};

type ResponseError = {
  code?: string;
  message: string;
};
```

### 例

リストの表示

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
    count: 1
    page: 1,
    pageSize: 1,
    totalPage: 1
  },
}
```

詳細の表示

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
      message: 'name must be required',
    },
  ],
}
```