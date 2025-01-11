# Collection

## 概要

`Collection` は、システム内のデータモデルを定義するために使用されます。モデル名、フィールド、インデックス、関連情報などを定義します。
通常、`Database` インスタンスの `collection` メソッドをプロキシエントリとして呼び出します。

```javascript
const { Database } = require('@nocobase/database')

// データベースインスタンスを作成
const db = new Database({...});

// データモデルを定義
db.collection({
  name: 'users',
  // モデルフィールドを定義
  fields: [
    // スカラーフィールド
    {
      name: 'name',
      type: 'string',
    },

    // 関連フィールド
    {
      name: 'profile',
      type: 'hasOne' // 'hasMany', 'belongsTo', 'belongsToMany'
    }
  ],
});
```

その他のフィールドタイプについては、[Fields](/api/database/field) を参照してください。

## コンストラクタ

**シグネチャ**

- `constructor(options: CollectionOptions, context: CollectionContext)`

**パラメータ**

| パラメータ名                | タイプ                                                        | デフォルト値 | 説明                                                                                   |
| --------------------- | ----------------------------------------------------------- | ------ | -------------------------------------------------------------------------------------- |
| `options.name`        | `string`                                                    | -      | collection 識別子                                                                        |
| `options.tableName?`  | `string`                                                    | -      | データベーステーブル名、指定されない場合は `options.name` の値を使用                                           |
| `options.fields?`     | `FieldOptions[]`                                            | -      | フィールド定義、詳細は [Field](./field) を参照                                                        |
| `options.model?`      | `string \| ModelStatic<Model>`                              | -      | Sequelize の Model タイプ、`string` を使用する場合、事前に db に登録されている必要があります |
| `options.repository?` | `string \| RepositoryType`                                  | -      | データリポジトリタイプ、`string` を使用する場合、事前に db に登録されている必要があります                |
| `options.sortable?`   | `string \| boolean \| { name?: string; scopeKey?: string }` | -      | データのソート可能フィールド設定、デフォルトではソートされません                                                         |
| `options.autoGenId?`  | `boolean`                                                   | `true` | 一意の主キーを自動生成するかどうか、デフォルトは `true`                                                    |
| `context.database`    | `Database`                                                  | -      | コンテキスト環境のデータベース                                                                 |

**例**

記事テーブルを作成：

```ts
const posts = new Collection(
  {
    name: 'posts',
    fields: [
      {
        type: 'string',
        name: 'title',
      },
      {
        type: 'double',
        name: 'price',
      },
    ],
  },
  {
    // 既存のデータベースインスタンス
    database: db,
  },
);
```

## インスタンスメンバー

### `options`

データシートの初期設定パラメータ。コンストラクタの `options` パラメータと同じです。

### `context`

現在のデータシートが属するコンテキスト環境、主にデータベースインスタンスです。

### `name`

データシート名。

### `db`

所属するデータベースインスタンス。

### `filterTargetKey`

主キーとして使用されるフィールド名。

### `isThrough`

中間テーブルかどうか。

### `model`

Sequelize の Model タイプにマッチします。

### `repository`

データリポジトリインスタンス。

## フィールド設定メソッド

### `getField()`

データシートに定義されている対応する名前のフィールドオブジェクトを取得します。

**シグネチャ**

- `getField(name: string): Field`

**パラメータ**

| パラメータ名 | タイプ     | デフォルト値 | 説明     |
| ------ | -------- | ------ | -------- |
| `name` | `string` | -      | フィールド名 |

**例**

```ts
const posts = db.collection({
  name: 'posts',
  fields: [
    {
      type: 'string',
      name: 'title',
    },
  ],
});

const field = posts.getField('title');
```

### `setField()`

データシートにフィールドを設定します。

**シグネチャ**

- `setField(name: string, options: FieldOptions): Field`

**パラメータ**

| パラメータ名    | タイプ           | デフォルト値 | 説明                            |
| --------- | -------------- | ------ | ------------------------------- |
| `name`    | `string`       | -      | フィールド名                        |
| `options` | `FieldOptions` | -      | フィールド設定、詳細は [Field](./field) を参照 |

**例**

```ts
const posts = db.collection({ name: 'posts' });

posts.setField('title', { type: 'string' });
```

### `setFields()`

データシートに複数のフィールドを一括設定します。

**シグネチャ**

- `setFields(fields: FieldOptions[], resetFields = true): Field[]`

**パラメータ**

| パラメータ名        | タイプ             | デフォルト値 | 説明                            |
| ------------- | ---------------- | ------ | ------------------------------- |
| `fields`      | `FieldOptions[]` | -      | フィールド設定、詳細は [Field](./field) を参照 |
| `resetFields` | `boolean`        | `true` | 既存のフィールドをリセットするかどうか            |

**例**

```ts
const posts = db.collection({ name: 'posts' });

posts.setFields([
  { type: 'string', name: 'title' },
  { type: 'double', name: 'price' },
]);
```

### `removeField()`

データシートに定義されている対応する名前のフィールドオブジェクトを削除します。

**シグネチャ**

- `removeField(name: string): void | Field`

**パラメータ**

| パラメータ名 | タイプ     | デフォルト値 | 説明     |
| ------ | -------- | ------ | -------- |
| `name` | `string` | -      | フィールド名 |

**例**

```ts
const posts = db.collection({
  name: 'posts',
  fields: [
    {
      type: 'string',
      name: 'title',
    },
  ],
});

posts.removeField('title');
```

### `resetFields()`

データシートのフィールドをリセット（クリア）します。

**シグネチャ**

- `resetFields(): void`

**例**

```ts
const posts = db.collection({
  name: 'posts',
  fields: [
    {
      type: 'string',
      name: 'title',
    },
  ],
});

posts.resetFields();
```

### `hasField()`

データシートに定義されている対応する名前のフィールドオブジェクトが存在するかどうかを判断します。

**シグネチャ**

- `hasField(name: string): boolean`

**パラメータ**

| パラメータ名 | タイプ     | デフォルト値 | 説明     |
| ------ | -------- | ------ | -------- |
| `name` | `string` | -      | フィールド名 |

**例**

```ts
const posts = db.collection({
  name: 'posts',
  fields: [
    {
      type: 'string',
      name: 'title',
    },
  ],
});

posts.hasField('title'); // true
```

### `findField()`

データシート内で条件に合致するフィールドオブジェクトを検索します。

**シグネチャ**

- `findField(predicate: (field: Field) => boolean): Field | undefined`

**パラメータ**

| パラメータ名      | タイプ                        | デフォルト値 | 説明     |
| ----------- | --------------------------- | ------ | -------- |
| `predicate` | `(field: Field) => boolean` | -      | 検索条件 |

**例**

```ts
const posts = db.collection({
  name: 'posts',
  fields: [
    {
      type: 'string',
      name: 'title',
    },
  ],
});

posts.findField((field) => field.name === 'title');
```

### `forEachField()`

データシート内のフィールドオブジェクトを走査します。

**シグネチャ**

- `forEachField(callback: (field: Field) => void): void`

**パラメータ**

| パラメータ名     | タイプ                     | デフォルト値 | 説明     |
| ---------- | ------------------------ | ------ | -------- |
| `callback` | `(field: Field) => void` | -      | コールバック関数 |

**例**

```ts
const posts = db.collection({
  name: 'posts',
  fields: [
    {
      type: 'string',
      name: 'title',
    },
  ],
});

posts.forEachField((field) => console.log(field.name));
```

## インデックス設定メソッド

### `addIndex()`

データシートにインデックスを追加します。

**シグネチャ**

- `addIndex(index: string | string[] | { fields: string[], unique?: boolean,[key: string]: any })`

**パラメータ**

| パラメータ名  | タイプ                                                         | デフォルト値 | 説明                 |
| ------- | ------------------------------------------------------------ | ------ | -------------------- |
| `index` | `string \| string[]`                                         | -      | インデックスを設定するフィールド名 |
| `index` | `{ fields: string[], unique?: boolean, [key: string]: any }` | -      | 完全設定             |

**例**

```ts
const posts = db.collection({
  name: 'posts',
  fields: [
    {
      type: 'string',
      name: 'title',
    },
  ],
});

posts.addIndex({
  fields: ['title'],
  unique: true,
});
```

### `removeIndex()`

データシートからインデックスを削除します。

**シグネチャ**

- `removeIndex(fields: string[])`

**パラメータ**

| パラメータ名   | タイプ       | デフォルト値 | 説明                     |
| -------- | ---------- | ------ | ------------------------ |
| `fields` | `string[]` | -      | インデックスを削除するフィールド名の組み合わせ |

**例**

```ts
const posts = db.collection({
  name: 'posts',
  fields: [
    {
      type: 'string',
      name: 'title',
    },
  ],
  indexes: [
    {
      fields: ['title'],
      unique: true,
    },
  ],
});

posts.removeIndex(['title']);
```

## テーブル設定メソッド

### `remove()`

データシートを削除します。

**シグネチャ**

- `remove(): void`

**例**

```ts
const posts = db.collection({
  name: 'posts',
  fields: [
    {
      type: 'string',
      name: 'title',
    },
  ],
});

posts.remove();
```

## データベース操作メソッド

### `sync()`

データシートの定義をデータベースに同期します。Sequelize のデフォルトの `Model.sync` ロジックに加えて、関連フィールドに対応するデータシートも処理します。

**シグネチャ**

- `sync(): Promise<void>`

**例**

```ts
const posts = db.collection({
  name: 'posts',
  fields: [
    {
      type: 'string',
      name: 'title',
    },
  ],
});

await posts.sync();
```

### `existsInDb()`

データシートがデータベースに存在するかどうかを判断します。

**シグネチャ**

- `existsInDb(options?: Transactionable): Promise<boolean>`

**パラメータ**

| パラメータ名                 | タイプ          | デフォルト値 | 説明     |
| ---------------------- | ------------- | ------ | -------- |
| `options?.transaction` | `Transaction` | -      | トランザクションインスタンス |

**例**

```ts
const posts = db.collection({
name: 'posts',
fields: [
  {
    type: 'string',
    name: 'title',
  },
],
});

const existed = await posts.existsInDb();

console.log(existed); // false
```

### `removeFromDb()`

**シグネチャ**

- `removeFromDb(): Promise<void>`

**例**

```ts
const books = db.collection({
  name: 'books',
});

// データベースに書籍テーブルを同期
await db.sync();

// データベースから書籍テーブルを削除
await books.removeFromDb();
```
