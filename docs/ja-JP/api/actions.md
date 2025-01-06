# @nocobase/actions

## 概要

`@nocobase/actions` は、CRUD関連の一般的なメソッドをカプセル化しており、[ResourceManager](./resourcer/resource-manager) を通じて簡単に登録することで、システムリソースにグローバルなCRUD操作インターフェースを追加できます。

### 基本的な使用法

```ts
import * as actions from `@nocobase/actions`;

const resourceManager = new ResourceManager({
  // ...options
});

resourceManager.registerActionHandlers(actions);
```

## 操作方法

### create

リソースを作成します。 `POST /api/<resource>:create`.

```shell
curl "http://localhost:13000/api/users:create" \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"username": "admin"}'
```

#### リクエストボディ

| パラメータ名      | タイプ | 説明                     |
| ----------------- | ------ | ------------------------ |
| `[key: string]`   | `any`  | リソースに含まれるフィールドのキーと値のペア |

### list

リソースのリストを取得します。`GET /api/<resource>:list`.

```shell
curl -X GET http://localhost:13000/api/users:list
```

#### パラメータ

| パラメータ名 | タイプ       | 説明                                                    | デフォルト値 |
| ------------ | ------------ | ------------------------------------------------------- | ------------ |
| `filter`     | `Filter`     | フィルタパラメータ、[Filter Operators](./database/operators) を参照 | -            |
| `fields`     | `string[]`   | 取得するフィールド                                      | -            |
| `except`     | `string[]`   | 除外するフィールド                                      | -            |
| `appends`    | `string[]`   | 追加するリレーションフィールド                          | -            |
| `sort`       | `string[]`   | ソートパラメータ                                        | -            |
| `pagniate`   | `boolean`    | ページネーションを行うかどうか                          | `true`       |
| `page`       | `number`     | 現在のページ                                            | `1`          |
| `pageSize`   | `number`     | 1ページあたりのデータ数                                 | `20`         |

### get

特定のリソースを取得します。`GET /api/<resource>:get`.

```shell
curl -X GET http://localhost:13000/api/users:get?filterByTk=1
```

#### パラメータ

| パラメータ名   | タイプ               | 説明                                                    | デフォルト値 |
| -------------- | -------------------- | ------------------------------------------------------- | ------------ |
| `filterByTk`   | `number \| string`   | 主キー値でフィルタ                                      | -            |
| `filter`       | `Filter`             | フィルタパラメータ、[Filter Operators](./database/operators) を参照 | -            |
| `fields`       | `string[]`           | 取得するフィールド                                      | -            |
| `except`       | `string[]`           | 除外するフィールド                                      | -            |
| `appends`      | `string[]`           | 追加するリレーションフィールド                          | -            |

### update

1つまたは複数のリソースを更新します。`PUT /api/<resource>:update`.

```shell
curl "http://localhost:13000/api/users:update?filterByTk=1" \
  -X PUT \
  -H "Content-Type: application/json" \
  -d '{"username": "admin"}'
```

#### パラメータ

| パラメータ名   | タイプ               | 説明                                                    |
| -------------- | -------------------- | ------------------------------------------------------- |
| `filter`       | `Filter`             | フィルタパラメータ、[Filter Operators](./database/operators) を参照 |
| `filterByTk`   | `number \| string`   | 主キー値でフィルタ                                      |

注：パラメータの `filter` と `filterByTk` の少なくとも1つを指定する必要があります。

#### リクエストボディ

| パラメータ名      | タイプ | 説明                     |
| ----------------- | ------ | ------------------------ |
| `[key: string]`   | `any`  | リソースに含まれるフィールドのキーと値のペア |

### destroy

1つまたは複数のリソースを削除します。`DELETE /api/<resource>:destroy`

```shell
curl -X DELETE http://localhost:13000/api/users:destory?filterByTk=1
```

#### パラメータ

| パラメータ名   | タイプ               | 説明                                                    |
| -------------- | -------------------- | ------------------------------------------------------- |
| `filter`       | `Filter`             | フィルタパラメータ、[Filter Operators](./database/operators) を参照 |
| `filterByTk`   | `number \| string`   | 主キー値でフィルタ                                      |

注：パラメータの `filter` と `filterByTk` の少なくとも1つを指定する必要があります。

### firstOrCreate

リソースを取得または作成します。`POST /api/<resource>:firstOrCreate`.

```shell
curl "http://localhost:13000/api/users:firstOrCreate?filterKeys[]=username" \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"username": "admin", "nickname": "Admin"}'
```

#### パラメータ

| パラメータ名   | タイプ       | 説明                           |
| -------------- | ------------ | ------------------------------ |
| `filterKeys`   | `string[]`   | リクエストボディで既存リソースを検索するためのフィールド |

#### リクエストボディ

| パラメータ名      | タイプ | 説明                     |
| ----------------- | ------ | ------------------------ |
| `[key: string]`   | `any`  | リソースに含まれるフィールドのキーと値のペア |

### updateOrCreate

リソースを更新または作成します。`POST /api/<resource>:updateOrCreate`.

```shell
curl "http://localhost:13000/api/users:updateOrCreate?filterKeys[]=username" \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"username": "admin", "nickname": "Admin"}'
```

#### パラメータ

| パラメータ名   | タイプ       | 説明                           |
| -------------- | ------------ | ------------------------------ |
| `filterKeys`   | `string[]`   | リクエストボディで既存リソースを検索するためのフィールド |

#### リクエストボディ

| パラメータ名      | タイプ | 説明                     |
| ----------------- | ------ | ------------------------ |
| `[key: string]`   | `any`  | リソースに含まれるフィールドのキーと値のペア |

### move

リソースを移動し、順序を調整します。通常、ページ内でドラッグアンドドロップによるソートを実装するために使用されます。`POST /api/<resource>:move`.

```shell
curl -X POST "http://localhost:13000/api/users:move?sourceId=1&targetId=2"
```

#### パラメータ

| パラメータ名    | タイプ                       | 説明                                                 | デフォルト値 |
| --------------- | ---------------------------- | ---------------------------------------------------- | ------------ |
| `sourceId`      | `targetKey`                  | 移動する要素のID                                     | -            |
| `targetId`      | `targetKey`                  | 移動する要素と位置を交換する要素のID                 | -            |
| `sortField`     | `string`                     | ソートを保存するフィールド名                         | `sort`       |
| `targetScope`   | `string`                     | ソートのスコープ、リソースは異なるスコープでソート可能 | -            |
| `sticky`        | `boolean`                    | 移動する要素を先頭に固定するかどうか                 | -            |
| `method`        | `insertAfter` \| `prepend`   | 挿入タイプ、ターゲット要素の前後に挿入               | -            |

### set

リソースの関連オブジェクトを設定します。`POST /api/<resource>/<resourceKey>/<association>:set`.

```shell
curl "http://localhost:13000/api/users/1/roles:set" \
  -X POST \
  -H "Content-Type: application/json" \
  -d '["admin", "member"]'
```

#### リクエストボディ

- `TargetKey | TargetKey[]` - 関連オブジェクトの主キー値の配列。

### add

リソースの関連オブジェクトを追加します。`POST /api/<resource>/<resourceKey>/<association>:add`.

```shell
curl "http://localhost:13000/api/users/1/roles:add" \
  -X POST \
  -H "Content-Type: application/json" \
  -d '["admin"]'
```

#### リクエストボディ

- `TargetKey | TargetKey[]` - 関連オブジェクトの主キー値の配列。

### remove

リソースの関連オブジェクトを削除します。`POST /api/<resource>/<resourceKey>/<association>:remove`.

```shell
curl "http://localhost:13000/api/users/1/roles:remove" \
  -X POST \
  -H "Content-Type: application/json" \
  -d '["admin"]'
```

#### リクエストボディ

- `TargetKey | TargetKey[]` - 関連オブジェクトの主キー値の配列。

### toggle

リソースの関連オブジェクトを切り替えます。存在する場合は削除し、存在しない場合は追加します。`POST /api/<resource>/<resourceKey>/<association>:toggle`.

```shell
curl "http://localhost:13000/api/users/1/roles:toggle" \
  -X POST \
  -H "Content-Type: application/json" \
  -d '["admin", "member"]'
```

#### リクエストボディ

- `TargetKey | TargetKey[]` - 関連オブジェクトの主キー値の配列。