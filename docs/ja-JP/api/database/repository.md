# Repository

## 概要

特定の `Collection` オブジェクト上で、その `Repository` オブジェクトを取得し、データシートに対する読み書き操作を行うことができます。

```javascript
const { UserCollection } = require('./collections');

const UserRepository = UserCollection.repository;

const user = await UserRepository.findOne({
  filter: {
    id: 1,
  },
});

user.name = 'new name';
await user.save();
```

### クエリ

#### 基本クエリ

`Repository` オブジェクト上で、`find*` 関連メソッドを呼び出すことで、クエリ操作を実行できます。クエリメソッドはすべて `filter` パラメータをサポートしており、データをフィルタリングするために使用されます。

```javascript
// SELECT * FROM users WHERE id = 1
userRepository.find({
  filter: {
    id: 1,
  },
});
```

#### 演算子

`Repository` の `filter` パラメータは、さらに多様なクエリ操作を実行するための複数の演算子を提供します。

```javascript
// SELECT * FROM users WHERE age > 18
userRepository.find({
  filter: {
    age: {
      $gt: 18,
    },
  },
});

// SELECT * FROM users WHERE age > 18 OR name LIKE '%张%'
userRepository.find({
  filter: {
    $or: [{ age: { $gt: 18 } }, { name: { $like: '%张%' } }],
  },
});
```

演算子の詳細については、[Filter Operators](/api/database/operators) を参照してください。

#### フィールド制御

クエリ操作時に、`fields`、`except`、`appends` パラメータを使用して出力フィールドを制御できます。

- `fields`: 出力フィールドを指定
- `except`: 出力フィールドを除外
- `appends`: 関連フィールドを追加

```javascript
// 結果に id と name フィールドのみ含める
userRepository.find({
  fields: ['id', 'name'],
});

// 結果から password フィールドを除外
userRepository.find({
  except: ['password'],
});

// 結果に関連オブジェクト posts のデータを含める
userRepository.find({
  appends: ['posts'],
});
```

#### 関連フィールドクエリ

`filter` パラメータは、関連フィールドによるフィルタリングをサポートしています。例えば：

```javascript
// user オブジェクトをクエリし、関連する posts に title が 'post title' のオブジェクトが存在する場合
userRepository.find({
  filter: {
    'posts.title': 'post title',
  },
});
```

関連フィールドはネストすることもできます。

```javascript
// user オブジェクトをクエリし、その posts の comments が keywords を含む場合
await userRepository.find({
  filter: {
    'posts.comments.content': {
      $like: '%keywords%',
    },
  },
});
```

#### ソート

`sort` パラメータを使用して、クエリ結果をソートできます。

```javascript
// SELECT * FROM users ORDER BY age
await userRepository.find({
  sort: 'age',
});

// SELECT * FROM users ORDER BY age DESC
await userRepository.find({
  sort: '-age',
});

// SELECT * FROM users ORDER BY age DESC, name ASC
await userRepository.find({
  sort: ['-age', 'name'],
});
```

関連オブジェクトのフィールドでソートすることもできます。

```javascript
await userRepository.find({
  sort: 'profile.createdAt',
});
```

### 作成

#### 基本作成

`Repository` を使用して新しいデータオブジェクトを作成します。

```javascript
await userRepository.create({
  name: '张三',
  age: 18,
});
// INSERT INTO users (name, age) VALUES ('张三', 18)

// バッチ作成をサポート
await userRepository.create([
  {
    name: '张三',
    age: 18,
  },
  {
    name: '李四',
    age: 20,
  },
]);
```

#### 関連作成

作成時に同時に関連オブジェクトを作成できます。クエリと同様に、関連オブジェクトのネストもサポートされています。例えば：

```javascript
await userRepository.create({
  name: '张三',
  age: 18,
  posts: [
    {
      title: 'post title',
      content: 'post content',
      tags: [
        {
          name: 'tag1',
        },
        {
          name: 'tag2',
        },
      ],
    },
  ],
});
// ユーザーを作成すると同時に、post とユーザーを関連付け、tags を post に関連付ける。
```

関連オブジェクトがすでにデータベースに存在する場合、そのIDを渡すことで、作成時に関連オブジェクトとの関連関係を確立できます。

```javascript
const tag1 = await tagRepository.findOne({
  filter: {
    name: 'tag1',
  },
});

await userRepository.create({
  name: '张三',
  age: 18,
  posts: [
    {
      title: 'post title',
      content: 'post content',
      tags: [
        {
          id: tag1.id, // 既存の関連オブジェクトとの関連関係を確立
        },
        {
          name: 'tag2',
        },
      ],
    },
  ],
});
```

### 更新

#### 基本更新

データオブジェクトを取得した後、データオブジェクト(`Model`)上で直接属性を変更し、`save` メソッドを呼び出して変更を保存できます。

```javascript
const user = await userRepository.findOne({
  filter: {
    name: '张三',
  },
});

user.age = 20;
await user.save();
```

データオブジェクト `Model` は Sequelize Model を継承しており、`Model` の操作については [Sequelize Model](https://sequelize.org/master/manual/model-basics.html) を参照してください。

`Repository` を使用してデータを更新することもできます。

```javascript
// フィルタ条件に一致するデータレコードを更新
await userRepository.update({
  filter: {
    name: '张三',
  },
  values: {
    age: 20,
  },
});
```

更新時、`whitelist`、`blacklist` パラメータを使用して更新フィールドを制御できます。例えば：

```javascript
await userRepository.update({
  filter: {
    name: '张三',
  },
  values: {
    age: 20,
    name: '李四',
  },
  whitelist: ['age'], // age フィールドのみ更新
});
```

#### 関連フィールドの更新

更新時に、関連オブジェクトを設定できます。例えば：

```javascript
const tag1 = tagRepository.findOne({
  filter: {
    id: 1,
  },
});

await postRepository.update({
  filter: {
    id: 1,
  },
  values: {
    title: 'new post title',
    tags: [
      {
        id: tag1.id, // tag1 と関連を確立
      },
      {
        name: 'tag2', // 新しい tag を作成し、関連を確立
      },
    ],
  },
});

await postRepository.update({
  filter: {
    id: 1,
  },
  values: {
    tags: null, // post と tags の関連を解除
  },
});
```

### 削除

`Repository` の `destroy()` メソッドを呼び出して削除操作を実行できます。削除時にはフィルタ条件を指定する必要があります。

```javascript
await userRepository.destroy({
  filter: {
    status: 'blocked',
  },
});
```

## コンストラクタ

通常、開発者が直接呼び出すことはなく、主に `db.registerRepositories()` でタイプを登録した後、`db.colletion()` のパラメータで登録済みのリポジトリタイプを指定し、インスタンス化します。

**シグネチャ**

- `constructor(collection: Collection)`

**例**

```ts
import { Repository } from '@nocobase/database';

class MyRepository extends Repository {
  async myQuery(sql) {
    return this.database.sequelize.query(sql);
  }
}

db.registerRepositories({
  books: MyRepository,
});

db.collection({
  name: 'books',
  // ここで登録済みのリポジトリにリンク
  repository: 'books',
});

await db.sync();

const books = db.getRepository('books') as MyRepository;
await books.myQuery('SELECT * FROM books;');
```

## インスタンスメンバ

### `database`

コンテキストが属するデータベース管理インスタンス。

### `collection`

対応するデータシート管理インスタンス。

### `model`

対応するデータモデルクラス。

## インスタンスメソッド

### `find()`

データベースからデータセットをクエリし、フィルタ条件やソートなどを指定できます。

**シグネチャ**

- `async find(options?: FindOptions): Promise<Model[]>`

**タイプ**

```typescript
type Filter = FilterWithOperator | FilterWithValue | FilterAnd | FilterOr;
type Appends = string[];
type Except = string[];
type Fields = string[];
type Sort = string[] | string;

interface SequelizeFindOptions {
  limit?: number;
  offset?: number;
}

interface FilterByTk {
  filterByTk?: TargetKey;
}

interface CommonFindOptions extends Transactionable {
  filter?: Filter;
  fields?: Fields;
  appends?: Appends;
  except?: Except;
  sort?: Sort;
}

type FindOptions = SequelizeFindOptions & CommonFindOptions & FilterByTk;
```

**詳細**

#### `filter: Filter`

クエリ条件で、データ結果をフィルタリングします。クエリパラメータの `key` はクエリするフィールド名、`value` はクエリする値、または演算子を使用して他の条件でデータをフィルタリングできます。

```typescript
// name が foo で、かつ age が 18 より大きいレコードをクエリ
repository.find({
  filter: {
    name: 'foo',
    age: {
      $gt: 18,
    },
  },
});
```

その他の演算子については、[クエリ演算子](./operators.md) を参照してください。

#### `filterByTk: TargetKey`

`TargetKey` を使用してデータをクエリします。`filter` パラメータの簡易メソッドです。`TargetKey` がどのフィールドであるかは、`Collection` で[設定](./collection.md#filtertargetkey)でき、デフォルトは `primaryKey` です。

```typescript
// デフォルトでは、id が 1 のレコードを検索
repository.find({
  filterByTk: 1,
});
```

#### `fields: string[]`

クエリ列で、データフィールド結果を制御します。このパラメータを渡すと、指定されたフィールドのみが返されます。

#### `except: string[]`

除外列で、データフィールド結果を制御します。このパラメータを渡すと、指定されたフィールドは出力されません。

#### `appends: string[]`

追加列で、関連データをロードします。このパラメータを渡すと、指定された関連フィールドが出力に含まれます。

#### `sort: string[] | string`

クエリ結果のソート方法を指定します。パラメータはフィールド名で、デフォルトは昇順 `asc` でソートされます。降順 `desc` でソートする場合は、フィールド名の前に `-` 記号を付けます。例：`['-id', 'name']` は、`id desc, name asc` でソートされます。

#### `limit: number`

結果数を制限します。`SQL` の `limit` と同じです。

#### `offset: number`

クエリオフセットで、`SQL` の `offset` と同じです。

**例**

```ts
const posts = db.getRepository('posts');

const results = await posts.find({
  filter: {
    createdAt: {
      $gt: '2022-01-01T00:00:00.000Z',
    },
  },
  fields: ['title'],
  appends: ['user'],
});
```

### `findOne()`

データベースから特定条件の単一データをクエリします。Sequelize の `Model.findOne()` に相当します。

**シグネチャ**

- `async findOne(options?: FindOneOptions): Promise<Model | null>`

<embed src="./shared/find-one.md"></embed>

**例**

```ts
const posts = db.getRepository('posts');

const result = await posts.findOne({
  filterByTk: 1,
});
```

### `count()`

データベースから特定条件のデータ総数をクエリします。Sequelize の `Model.count()` に相当します。

**シグネチャ**

- `count(options?: CountOptions): Promise<number>`

**タイプ**

```typescript
interface CountOptions
  extends Omit<SequelizeCountOptions, 'distinct' | 'where' | 'include'>,
    Transactionable {
  filter?: Filter;
}
```

**例**

```ts
const books = db.getRepository('books');

const count = await books.count({
  filter: {
    title: '三字经',
  },
});
```

### `findAndCount()`

データベースから特定条件のデータセットと結果数をクエリします。Sequelize の `Model.findAndCountAll()` に相当します。

**シグネチャ**

- `async findAndCount(options?: FindAndCountOptions): Promise<[Model[], number]>`

**タイプ**

```typescript
type FindAndCountOptions = Omit<
  SequelizeAndCountOptions,
  'where' | 'include' | 'order'
> &
  CommonFindOptions;
```

**詳細**

クエリパラメータは `find()` と同じです。戻り値は配列で、最初の要素がクエリ結果、2番目の要素が結果の総数です。

### `create()`

データシートに新しく作成されたデータを挿入します。Sequelize の `Model.create()` に相当します。作成するデータオブジェクトに関連フィールドの情報が含まれている場合、関連データレコードも作成または更新されます。

**シグネチャ**

- `async create<M extends Model>(options: CreateOptions): Promise<M>`

<embed src="./shared/create-options.md"></embed>

**例**

```ts
const posts = db.getRepository('posts');

const result = await posts.create({
  values: {
    title: 'NocoBase 1.0 リリースノート',
    tags: [
      // 関連テーブルの主キー値がある場合はそのデータを更新
      { id: 1 },
      // 主キー値がない場合は新しいデータを作成
      { name: 'NocoBase' },
    ],
  },
});
```

### `createMany()`

データシートに複数の新規データを挿入します。`create()` メソッドを複数回呼び出すのと同等です。

**シグネチャ**

- `createMany(options: CreateManyOptions): Promise<Model[]>`

**タイプ**

```typescript
interface CreateManyOptions extends BulkCreateOptions {
  records: Values[];
}
```

**詳細**

- `records`：作成するレコードのデータオブジェクトの配列。
- `transaction`: トランザクションオブジェクト。トランザクションパラメータが渡されない場合、このメソッドは内部でトランザクションを自動的に作成します。

**例**

```ts
const posts = db.getRepository('posts');

const results = await posts.createMany({
  records: [
    {
      title: 'NocoBase 1.0 リリースノート',
      tags: [
        // 関連テーブルの主キー値がある場合はそのデータを更新
        { id: 1 },
        // 主キー値がない場合は新しいデータを作成
        { name: 'NocoBase' },
      ],
    },
    {
      title: 'NocoBase 1.1 リリースノート',
      tags: [{ id: 1 }],
    },
  ],
});
```

### `update()`

データシートのデータを更新します。Sequelize の `Model.update()` と同等です。更新するデータオブジェクトに関連フィールドの情報が含まれている場合、関連するデータレコードも作成または更新されます。

**シグネチャ**

- `async update<M extends Model>(options: UpdateOptions): Promise<M>`

<embed src="./shared/update-options.md"></embed>

**例**

```ts
const posts = db.getRepository('posts');

const result = await posts.update({
  filterByTk: 1,
  values: {
    title: 'NocoBase 1.0 リリースノート',
    tags: [
      // 関連テーブルの主キー値がある場合はそのデータを更新
      { id: 1 },
      // 主キー値がない場合は新しいデータを作成
      { name: 'NocoBase' },
    ],
  },
});
```

### `destroy()`

データシートのデータを削除します。Sequelize の `Model.destroy()` と同等です。

**シグネチャ**

- `async destory(options?: TargetKey | TargetKey[] | DestoryOptions): Promise<number>`

**タイプ**

```typescript
interface DestroyOptions extends SequelizeDestroyOptions {
  filter?: Filter;
  filterByTk?: TargetKey | TargetKey[];
  truncate?: boolean;
  context?: any;
}
```

**詳細**

- `filter`：削除するレコードのフィルタ条件を指定します。Filter の詳細な使用方法は [`find()`](#find) メソッドを参照してください。
- `filterByTk`：TargetKey を使用して削除するレコードのフィルタ条件を指定します。
- `truncate`: テーブルデータをクリアするかどうか。`filter` または `filterByTk` パラメータが渡されない場合に有効です。
- `transaction`: トランザクションオブジェクト。トランザクションパラメータが渡されない場合、このメソッドは内部でトランザクションを自動的に作成します。
