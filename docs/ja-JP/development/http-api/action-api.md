# アクション API

## 共通

---

コレクションおよびアソシエーションリソースの共通部分です。

### `create`

```bash
POST  /api/users:create?whitelist=a,b&blacklist=c,d

{} # リクエストボディ
```

- パラメータ
  - whitelist: ホワイトリスト
  - blacklist: ブラックリスト
- リクエストボディ: 挿入する JSON データ
- レスポンスボディ: 作成されたデータの JSON

#### ユーザーの追加

```bash
POST  /api/users:create

リクエストボディ
{
  "email": "demo@nocobase.com",
  "name": "Admin"
}

レスポンス 200 (application/json)
{
  "data": {}
}
```

#### ユーザー記事の追加

```bash
POST  /api/users/1/posts:create

リクエストボディ
{
  "title": "My first post"
}

レスポンス 200 (application/json)
{
  "data": {}
}
```

#### リクエストボディ内のアソシエーション

```bash
POST  /api/posts:create

リクエストボディ
{
  "title": "My first post",
  "user": 1
}

レスポンス 200 (application/json)
{
  "data": {
    "id": 1,
    "title": "My first post",
    "userId": 1,
    "user": {
      "id": 1
    }
  }
}
```

### `update`

```bash
POST  /api/users:create?filterByTk=1&whitelist=a,b&blacklist=c,d

{} # リクエストボディ
```

- パラメータ
  - whitelist: ホワイトリスト
  - blacklist: ブラックリスト
  - filterByTk: tk フィールドでのフィルタリング。デフォルトでは tk はデータテーブルの主キーです。
  - filter: フィルタリング。JSON 文字列をサポートします。
- リクエストボディ: 更新する JSON データ

#### リクエストボディ内のアソシエーション

```bash
POST  /api/posts:update/1

リクエストボディ
{
  "title": "My first post 2",
  "user": 2
}

レスポンス 200 (application/json)
{
  "data": [
    {
      "id": 1,
      "title": "My first post 2",
      "userId": 2,
      "user": {
        "id": 2
      }
    }
  ]
}
```

### `list`

### `get`

### `destroy`

### `move`

## アソシエーション

---

### `add`

### `set`

### `remove`

### `toggle`

