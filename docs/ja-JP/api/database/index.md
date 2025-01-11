# Database

## 概要

Database は Nocobase が提供するデータベース操作ツールで、ノーコードおよびローコードアプリケーションに非常に便利なデータベース操作機能を提供します。現在サポートされているデータベースは以下の通りです：

- SQLite 3.8.8+
- MySQL 8.0.17+
- PostgreSQL 10.0+

### データベース接続

`Database` コンストラクタでは、`options` パラメータを渡すことでデータベース接続を設定できます。

```javascript
const { Database } = require('@nocobase/database');

// SQLite データベース設定パラメータ
const database = new Database({
  dialect: 'sqlite',
  storage: 'path/to/database.sqlite'
})

// MySQL \ PostgreSQL データベース設定パラメータ
const database = new Database({
  dialect: /* 'postgres' または 'mysql' */,
  database: 'database',
  username: 'username',
  password: 'password',
  host: 'localhost',
  port: 'port'
})

```

詳細な設定パラメータについては、[コンストラクタ](#コンストラクタ) を参照してください。

### データモデル定義

`Database` は `Collection` を使用してデータベース構造を定義し、`Collection` オブジェクトはデータベース内のテーブルを表します。

```javascript
// Collection を定義
const UserCollection = database.collection({
  name: 'users',
  fields: [
    {
      name: 'name',
      type: 'string',
    },
    {
      name: 'age',
      type: 'integer',
    },
  ],
});
```

データベース構造定義が完了したら、`sync()` メソッドを使用してデータベース構造を同期できます。

```javascript
await database.sync();
```

`Collection` の詳細な使用方法については、[Collection](/api/database/collection) を参照してください。

### データの読み書き

`Database` は `Repository` を使用してデータを操作します。

```javascript
const UserRepository = UserCollection.repository();

// 作成
await UserRepository.create({
  name: '张三',
  age: 18,
});

// 検索
const user = await UserRepository.findOne({
  filter: {
    name: '张三',
  },
});

// 更新
await UserRepository.update({
  values: {
    age: 20,
  },
});

// 削除
await UserRepository.destroy(user.id);
```

データの CRUD 操作の詳細な使用方法については、[Repository](/api/database/repository) を参照してください。

## コンストラクタ

**シグネチャ**

- `constructor(options: DatabaseOptions)`

データベースインスタンスを作成します。

**パラメータ**

| パラメータ名                 | タイプ           | デフォルト値        | 説明                                                                                                                |
| ---------------------- | -------------- | ------------- | ------------------------------------------------------------------------------------------------------------------- |
| `options.host`         | `string`       | `'localhost'` | データベースホスト                                                                                                          |
| `options.port`         | `number`       | -             | データベースサービスポート、使用するデータベースに対応するデフォルトポートがあります                                                                      |
| `options.username`     | `string`       | -             | データベースユーザー名                                                                                                        |
| `options.password`     | `string`       | -             | データベースパスワード                                                                                                          |
| `options.database`     | `string`       | -             | データベース名                                                                                                          |
| `options.dialect`      | `string`       | `'mysql'`     | データベースタイプ                                                                                                          |
| `options.storage?`     | `string`       | `':memory:'`  | SQLite のストレージモード                                                                                                   |
| `options.logging?`     | `boolean`      | `false`       | ログを有効にするかどうか                                                                                                        |
| `options.define?`      | `Object`       | `{}`          | デフォルトのテーブル定義パラメータ                                                                                                    |
| `options.tablePrefix?` | `string`       | `''`          | NocoBase 拡張、テーブル名プレフィックス                                                                                             |
| `options.migrator?`    | `UmzugOptions` | `{}`          | NocoBase 拡張、マイグレーションマネージャー関連パラメータ、[Umzug](https://github.com/sequelize/umzug/blob/main/src/types.ts#L15) 実装を参照 |

## マイグレーション関連メソッド

### `addMigration()`

単一のマイグレーションファイルを追加します。

**シグネチャ**

- `addMigration(options: MigrationItem)`

**パラメータ**

| パラメータ名               | タイプ               | デフォルト値 | 説明                   |
| -------------------- | ------------------ | ------ | ---------------------- |
| `options.name`       | `string`           | -      | マイグレーションファイル名           |
| `options.context?`   | `string`           | -      | マイグレーションファイルのコンテキスト       |
| `options.migration?` | `typeof Migration` | -      | マイグレーションファイルのカスタムクラス     |
| `options.up`         | `Function`         | -      | マイグレーションファイルの `up` メソッド   |
| `options.down`       | `Function`         | -      | マイグレーションファイルの `down` メソッド |

**例**

```ts
db.addMigration({
  name: '20220916120411-test-1',
  async up() {
    const queryInterface = this.context.db.sequelize.getQueryInterface();
    await queryInterface.query(/* your migration sqls */);
  },
});
```

### `addMigrations()`

指定されたディレクトリ内のマイグレーションファイルを追加します。

**シグネチャ**

- `addMigrations(options: AddMigrationsOptions): void`

**パラメータ**

| パラメータ名               | タイプ       | デフォルト値         | 説明             |
| -------------------- | ---------- | -------------- | ---------------- |
| `options.directory`  | `string`   | `''`           | マイグレーションファイルが存在するディレクトリ |
| `options.extensions` | `string[]` | `['js', 'ts']` | ファイル拡張子       |
| `options.namespace?` | `string`   | `''`           | 名前空間         |
| `options.context?`   | `Object`   | `{ db }`       | マイグレーションファイルのコンテキスト |

**例**

```ts
db.addMigrations({
  directory: path.resolve(__dirname, './migrations'),
  namespace: 'test',
});
```

## ユーティリティメソッド

### `inDialect()`

現在のデータベースタイプが指定されたタイプであるかどうかを判断します。

**シグネチャ**

- `inDialect(dialect: string[]): boolean`

**パラメータ**

| パラメータ名    | タイプ       | デフォルト値 | 説明                                             |
| --------- | ---------- | ------ | ------------------------------------------------ |
| `dialect` | `string[]` | -      | データベースタイプ、オプションは `mysql`/`postgres`/`sqlite` |

### `getTablePrefix()`

設定されているテーブル名プレフィックスを取得します。

**シグネチャ**

- `getTablePrefix(): string`

## データテーブル設定

### `collection()`

データテーブルを定義します。この呼び出しは Sequelize の `define` メソッドに似ており、メモリ内にテーブル構造を作成します。データベースに永続化するには、`sync` メソッドを呼び出す必要があります。

**シグネチャ**

- `collection(options: CollectionOptions): Collection`

**パラメータ**

`options` のすべての設定パラメータは `Collection` クラスのコンストラクタと一致し、[Collection](/api/database/collection#コンストラクタ) を参照してください。

**イベント**

- `'beforeDefineCollection'`：テーブル定義前にトリガーされます。
- `'afterDefineCollection'`：テーブル定義後にトリガーされます。

**例**

```ts
db.collection({
  name: 'books',
  fields: [
    {
      type: 'string',
      name: 'title',
    },
    {
      type: 'float',
      name: 'price',
    },
  ],
});

// コレクションをデータベースに同期
await db.sync();
```

### `getCollection()`

定義済みのデータテーブルを取得します。

**シグネチャ**

- `getCollection(name: string): Collection`

**パラメータ**

| パラメータ名 | タイプ     | デフォルト値 | 説明 |
| ------ | -------- | ------ | ---- |
| `name` | `string` | -      | テーブル名 |

**例**

```ts
const collection = db.getCollection('books');
```

### `hasCollection()`

指定されたデータテーブルが定義されているかどうかを判断します。

**シグネチャ**

- `hasCollection(name: string): boolean`

**パラメータ**

| パラメータ名 | タイプ     | デフォルト値 | 説明 |
| ------ | -------- | ------ | ---- |
| `name` | `string` | -      | テーブル名 |

**例**

```ts
db.collection({ name: 'books' });

db.hasCollection('books'); // true

db.hasCollection('authors'); // false
```

### `removeCollection()`

定義済みのデータテーブルを削除します。メモリ内でのみ削除され、永続化するには `sync` メソッドを呼び出す必要があります。

**シグネチャ**

- `removeCollection(name: string): void`

**パラメータ**

| パラメータ名 | タイプ     | デフォルト値 | 説明 |
| ------ | -------- | ------ | ---- |
| `name` | `string` | -      | テーブル名 |

**イベント**

- `'beforeRemoveCollection'`：テーブル削除前にトリガーされます。
- `'afterRemoveCollection'`：テーブル削除後にトリガーされます。

**例**

```ts
db.collection({ name: 'books' });

db.removeCollection('books');
```

### `import()`

ファイルディレクトリ内のすべてのファイルをコレクション設定としてメモリにロードします。

**シグネチャ**

- `async import(options: { directory: string; extensions?: ImportFileExtension[] }): Promise<Map<string, Collection>>`

**パラメータ**

| パラメータ名               | タイプ       | デフォルト値         | 説明             |
| -------------------- | ---------- | -------------- | ---------------- |
| `options.directory`  | `string`   | -              | インポートするディレクトリパス |
| `options.extensions` | `string[]` | `['ts', 'js']` | 特定の拡張子をスキャン     |

**例**

`./collections/books.ts` ファイルで定義されたコレクションは以下の通りです：

```ts
export default {
  name: 'books',
  fields: [
    {
      type: 'string',
      name: 'title',
    },
  ],
};
```

プラグインロード時に関連設定をインポートします：

```ts
class Plugin {
  async load() {
    await this.app.db.import({
      directory: path.resolve(__dirname, './collections'),
    });
  }
}
```

## 拡張登録と取得

### `registerFieldTypes()`

カスタムフィールドタイプを登録します。

**シグネチャ**

- `registerFieldTypes(fieldTypes: MapOf<typeof Field>): void`

**パラメータ**

`fieldTypes` はキーと値のペアで、キーはフィールドタイプ名、値はフィールドタイプクラスです。

**例**

```ts
import { Field } from '@nocobase/database';

class MyField extends Field {
```
```typescript
db.registerFieldTypes({
  myField: MyField,
});
```

### `registerModels()`

カスタムデータモデルクラスを登録します。

**シグネチャ**

- `registerModels(models: MapOf<ModelStatic<any>>): void`

**パラメータ**

`models` はキーと値のペアで、キーはデータモデル名、値はデータモデルクラスです。

**例**

```typescript
import { Model } from '@nocobase/database';

class MyModel extends Model {
  // ...
}

db.registerModels({
  myModel: MyModel,
});

db.collection({
  name: 'myCollection',
  model: 'myModel',
});
```

### `registerRepositories()`

カスタムデータリポジトリクラスを登録します。

**シグネチャ**

- `registerRepositories(repositories: MapOf<RepositoryType>): void`

**パラメータ**

`repositories` はキーと値のペアで、キーはデータリポジトリ名、値はデータリポジトリクラスです。

**例**

```typescript
import { Repository } from '@nocobase/database';

class MyRepository extends Repository {
  // ...
}

db.registerRepositories({
  myRepository: MyRepository,
});

db.collection({
  name: 'myCollection',
  repository: 'myRepository',
});
```

### `registerOperators()`

カスタムデータクエリ演算子を登録します。

**シグネチャ**

- `registerOperators(operators: MapOf<OperatorFunc>)`

**パラメータ**

`operators` はキーと値のペアで、キーは演算子名、値は演算子比較文生成関数です。

**例**

```typescript
db.registerOperators({
  $dateOn(value) {
    return {
      [Op.and]: [
        { [Op.gte]: stringToDate(value) },
        { [Op.lt]: getNextDay(value) },
      ],
    };
  },
});

db.getRepository('books').count({
  filter: {
    createdAt: {
      // 登録された演算子
      $dateOn: '2020-01-01',
    },
  },
});
```

### `getModel()`

定義済みのデータモデルクラスを取得します。以前にカスタムモデルクラスを登録していない場合、Sequelizeのデフォルトのモデルクラスが返されます。デフォルトの名前はcollectionで定義された名前と同じです。

**シグネチャ**

- `getModel(name: string): Model`

**パラメータ**

| パラメータ名 | タイプ     | デフォルト値 | 説明           |
| ------------ | ---------- | ------------ | -------------- |
| `name`       | `string`   | -            | 登録済みのモデル名 |

**例**

```typescript
db.registerModels({
  books: class MyModel extends Model {},
});

const ModelClass = db.getModel('books');

console.log(ModelClass.prototype instanceof MyModel); // true
```

注：collectionから取得したモデルクラスは、登録時のモデルクラスと厳密には等しくありませんが、登録時のモデルクラスから継承されています。Sequelizeのモデルクラスは初期化プロセス中に属性が変更されるため、NocoBaseがこの継承関係を自動的に処理します。クラスが等しくない以外は、他のすべての定義が正常に使用できます。

### `getRepository()`

カスタムデータリポジトリクラスを取得します。以前にカスタムデータリポジトリクラスを登録していない場合、NocoBaseのデフォルトのデータリポジトリクラスが返されます。デフォルトの名前はcollectionで定義された名前と同じです。

データリポジトリクラスは主にデータモデルに基づくCRUD操作に使用されます。詳細は[データリポジトリ](/api/server/database/repository)を参照してください。

**シグネチャ**

- `getRepository(name: string): Repository`
- `getRepository(name: string, relationId?: string | number): Repository`

**パラメータ**

| パラメータ名       | タイプ                 | デフォルト値 | 説明               |
| ------------------ | ---------------------- | ------------ | ------------------ |
| `name`             | `string`               | -            | 登録済みのデータリポジトリ名 |
| `relationId`       | `string` \| `number`   | -            | リレーションデータの外部キー値 |

名前が`'tables.relactions'`のような関連名の場合、関連するデータリポジトリクラスが返されます。第二引数が提供された場合、データリポジトリは使用時（クエリ、変更など）にリレーションデータの外部キー値に基づいて動作します。

**例**

*articles*と*authors*の2つのデータシートがあり、articlesテーブルにauthorsテーブルを指す外部キーがあるとします：

```typescript
const AuthorsRepo = db.getRepository('authors');
const author1 = AuthorsRepo.create({ name: 'author1' });

const PostsRepo = db.getRepository('authors.posts', author1.id);
const post1 = AuthorsRepo.create({ title: 'post1' });
asset(post1.authorId === author1.id); // true
```

## データベースイベント

### `on()`

データベースイベントを監視します。

**シグネチャ**

- `on(event: string, listener: (...args: any[]) => void | Promise<void>): void`

**パラメータ**

| パラメータ名   | タイプ     | デフォルト値 | 説明       |
| -------------- | ---------- | ------------ | ---------- |
| event          | string     | -            | イベント名 |
| listener       | Function   | -            | イベントリスナー |

イベント名はデフォルトでSequelizeのModelイベントをサポートします。グローバルイベントは`<sequelize_model_global_event>`の名前で、単一Modelイベントは`<model_name>.<sequelize_model_event>`の名前で監視します。

すべての組み込みイベントタイプのパラメータ説明と詳細な例は[組み込みイベント](#組み込みイベント)セクションを参照してください。

### `off()`

イベントリスナー関数を削除します。

**シグネチャ**

- `off(name: string, listener: Function)`

**パラメータ**

| パラメータ名   | タイプ     | デフォルト値 | 説明       |
| -------------- | ---------- | ------------ | ---------- |
| name           | string     | -            | イベント名 |
| listener       | Function   | -            | イベントリスナー |

**例**

```typescript
const listener = async (model, options) => {
  console.log(model);
};

db.on('afterCreate', listener);

db.off('afterCreate', listener);
```

## データベース操作

### `auth()`

データベース接続を検証します。アプリケーションとデータが接続されていることを確認するために使用できます。

**シグネチャ**

- `auth(options: QueryOptions & { retry?: number } = {}): Promise<boolean>`

**パラメータ**

| パラメータ名                 | タイプ                  | デフォルト値 | 説明               |
| ---------------------------- | ----------------------- | ------------ | ------------------ |
| `options?`                   | `Object`                | -            | 検証オプション     |
| `options.retry?`             | `number`                | `10`         | 検証失敗時の再試行回数 |
| `options.transaction?`       | `Transaction`           | -            | トランザクションオブジェクト |
| `options.logging?`           | `boolean \| Function`   | `false`      | ログを出力するかどうか |

**例**

```typescript
await db.auth();
```

### `reconnect()`

データベースを再接続します。

**例**

```typescript
await db.reconnect();
```

### `closed()`

データベース接続が閉じられているかどうかを判断します。

**シグネチャ**

- `closed(): boolean`

### `close()`

データベース接続を閉じます。`sequelize.close()`と同じです。

### `sync()`

データベーステーブル構造を同期します。`sequelize.sync()`と同じで、パラメータは[Sequelizeドキュメント](https://sequelize.org/api/v6/class/src/sequelize.js~sequelize#instance-method-sync)を参照してください。

### `clean()`

データベースをクリアし、すべてのデータシートを削除します。

**シグネチャ**

- `clean(options: CleanOptions): Promise<void>`

**パラメータ**

| パラメータ名                | タイプ          | デフォルト値 | 説明               |
| --------------------------- | --------------- | ------------ | ------------------ |
| `options.drop`              | `boolean`       | `false`      | すべてのデータシートを削除するかどうか |
| `options.skip`              | `string[]`      | -            | スキップするテーブル名設定 |
| `options.transaction`       | `Transaction`   | -            | トランザクションオブジェクト |

**例**

`users`テーブル以外のすべてのテーブルを削除します。

```typescript
await db.clean({
  drop: true,
  skip: ['users'],
});
```

## パッケージエクスポート

### `defineCollection()`

データシートの設定内容を作成します。

**シグネチャ**

- `defineCollection(name: string, config: CollectionOptions): CollectionOptions`

**パラメータ**

| パラメータ名              | タイプ                | デフォルト値 | 説明                                |
| ------------------------- | --------------------- | ------------ | ----------------------------------- |
| `collectionOptions`       | `CollectionOptions`   | -            | すべての`db.collection()`のパラメータと同じ |

**例**

`db.import()`でインポートされるデータシート設定ファイルの場合：

```typescript
import { defineCollection } from '@nocobase/database';

export default defineCollection({
  name: 'users',
  fields: [
    {
      type: 'string',
      name: 'name',
    },
  ],
});
```

### `extendCollection()`

メモリ内のテーブル構造設定内容を拡張します。主に`import()`メソッドでインポートされたファイル内容に使用されます。このメソッドは`@nocobase/database`パッケージのトップレベルメソッドで、dbインスタンスを介して呼び出されません。`extend`エイリアスも使用できます。

**シグネチャ**

- `extendCollection(collectionOptions: CollectionOptions, mergeOptions?: MergeOptions): ExtendedCollectionOptions`

**パラメータ**

| パラメータ名              | タイプ                | デフォルト値 | 説明                                                           |
| ------------------------- | --------------------- | ------------ | -------------------------------------------------------------- |
| `collectionOptions`       | `CollectionOptions`   | -            | すべての`db.collection()`のパラメータと同じ                    |
| `mergeOptions?`           | `MergeOptions`        | -            | npmパッケージ[deepmerge](https://npmjs.com/package/deepmerge)のパラメータ |

**例**

元のbooksテーブル定義（books.ts）：

```typescript
export default {
  name: 'books',
  fields: [{ name: 'title', type: 'string' }],
};
```

拡張booksテーブル定義（books.extend.ts）：

```typescript
import { extend } from '@nocobase/database';

// 再度拡張
export default extend({
  name: 'books',
  fields: [{ name: 'price', type: 'number' }],
});
```

上記の2つのファイルを`import()`でインポートすると、`extend()`で再度拡張された後、booksテーブルは`title`と`price`の2つのフィールドを持つことになります。

このメソッドは、既存のプラグインで定義されたテーブル構造を拡張する際に非常に有用です。

## 組み込みイベント

データベースは対応するライフサイクルで以下のイベントをトリガーし、`on()`メソッドでサブスクライブして特定の処理を行うことで、いくつかのビジネスニーズを満たすことができます。

### `'beforeSync'` / `'afterSync'`

新しいテーブル構造設定（フィールド、インデックスなど）がデータベースに同期される前後にトリガーされます。通常、`collection.sync()`（内部呼び出し）を実行するとトリガーされ、特別なフィールド拡張のロジック処理に使用されます。

**シグネチャ**

```typescript
on(eventName: `${string}.beforeSync` | 'beforeSync' | `${string}.afterSync` | 'afterSync', listener: SyncListener): this
```

**タイプ**

```typescript
import type { SyncOptions, HookReturn } from 'sequelize/types';

type SyncListener = (options?: SyncOptions) => HookReturn;
```

**例**

```typescript
const users = db.collection({
  name: 'users',
  fields: [{ type: 'string', name: 'username' }],
});

db.on('beforeSync', async (options) => {
  // 何か処理を行う
});

db.on('users.afterSync', async (options) => {
  // 何か処理を行う
});

await users.sync();
```

### `'beforeValidate'` / `'afterValidate'`

データを作成または更新する前に、collectionで定義されたルールに基づいてデータの検証が行われ、検証の前後にそれぞれ対応するイベントがトリガーされます。`repository.create()`または`repository.update()`を呼び出すとトリガーされます。

**シグネチャ**

```typescript
on(eventName: `${string}.beforeValidate` | 'beforeValidate' | `${string}.afterValidate` | 'afterValidate', listener: ValidateListener): this
```

**タイプ**

```typescript
import type { ValidationOptions } from 'sequelize/types/lib/instance-validator';
import type { HookReturn } from 'sequelize/types';
import type { Model } from '@nocobase/database';

type ValidateListener = (
  model: Model,
  options?: ValidationOptions,
) => HookReturn;
```

**例**

```ts
db.collection({
  name: 'tests',
  fields: [
    {
      type: 'string',
      name: 'email',
      validate: {
        isEmail: true,
      },
    },
  ],
});

// すべてのモデル
db.on('beforeValidate', async (model, options) => {
  // 何かを行う
});
// tests モデル
db.on('tests.beforeValidate', async (model, options) => {
  // 何かを行う
});

// すべてのモデル
db.on('afterValidate', async (model, options) => {
  // 何かを行う
});
// tests モデル
db.on('tests.afterValidate', async (model, options) => {
  // 何かを行う
});

const repository = db.getRepository('tests');
await repository.create({
  values: {
    email: 'abc', // メール形式をチェック
  },
});
// または
await repository.update({
  filterByTk: 1,
  values: {
    email: 'abc', // メール形式をチェック
  },
});
```

### `'beforeCreate'` / `'afterCreate'`

データを作成する前後にイベントがトリガーされます。`repository.create()` を呼び出すとトリガーされます。

**シグネチャ**

```ts
on(eventName: `${string}.beforeCreate` | 'beforeCreate' | `${string}.afterCreate` | 'afterCreate', listener: CreateListener): this
```

**タイプ**

```ts
import type { CreateOptions, HookReturn } from 'sequelize/types';
import type { Model } from '@nocobase/database';

export type CreateListener = (
  model: Model,
  options?: CreateOptions,
) => HookReturn;
```

**例**

```ts
db.on('beforeCreate', async (model, options) => {
  // 何かを行う
});

db.on('books.afterCreate', async (model, options) => {
  const { transaction } = options;
  const result = await model.constructor.findByPk(model.id, {
    transaction,
  });
  console.log(result);
});
```

### `'beforeUpdate'` / `'afterUpdate'`

データを更新する前後にイベントがトリガーされます。`repository.update()` を呼び出すとトリガーされます。

**シグネチャ**

```ts
on(eventName: `${string}.beforeUpdate` | 'beforeUpdate' | `${string}.afterUpdate` | 'afterUpdate', listener: UpdateListener): this
```

**タイプ**

```ts
import type { UpdateOptions, HookReturn } from 'sequelize/types';
import type { Model } from '@nocobase/database';

export type UpdateListener = (
  model: Model,
  options?: UpdateOptions,
) => HookReturn;
```

**例**

```ts
db.on('beforeUpdate', async (model, options) => {
  // 何かを行う
});

db.on('books.afterUpdate', async (model, options) => {
  // 何かを行う
});
```

### `'beforeSave'` / `'afterSave'`

データを作成または更新する前後にイベントがトリガーされます。`repository.create()` または `repository.update()` を呼び出すとトリガーされます。

**シグネチャ**

```ts
on(eventName: `${string}.beforeSave` | 'beforeSave' | `${string}.afterSave` | 'afterSave', listener: SaveListener): this
```

**タイプ**

```ts
import type { SaveOptions, HookReturn } from 'sequelize/types';
import type { Model } from '@nocobase/database';

export type SaveListener = (model: Model, options?: SaveOptions) => HookReturn;
```

**例**

```ts
db.on('beforeSave', async (model, options) => {
  // 何かを行う
});

db.on('books.afterSave', async (model, options) => {
  // 何かを行う
});
```

### `'beforeDestroy'` / `'afterDestroy'`

データを削除する前後にイベントがトリガーされます。`repository.destroy()` を呼び出すとトリガーされます。

**シグネチャ**

```ts
on(eventName: `${string}.beforeDestroy` | 'beforeDestroy' | `${string}.afterDestroy' | 'afterDestroy', listener: DestroyListener): this
```

**タイプ**

```ts
import type { DestroyOptions, HookReturn } from 'sequelize/types';
import type { Model } from '@nocobase/database';

export type DestroyListener = (
  model: Model,
  options?: DestroyOptions,
) => HookReturn;
```

**例**

```ts
db.on('beforeDestroy', async (model, options) => {
  // 何かを行う
});

db.on('books.afterDestroy', async (model, options) => {
  // 何かを行う
});
```

### `'afterCreateWithAssociations'`

階層関係を持つデータを作成した後にイベントがトリガーされます。`repository.create()` を呼び出すとトリガーされます。

**シグネチャ**

```ts
on(eventName: `${string}.afterCreateWithAssociations` | 'afterCreateWithAssociations', listener: CreateWithAssociationsListener): this
```

**タイプ**

```ts
import type { CreateOptions, HookReturn } from 'sequelize/types';
import type { Model } from '@nocobase/database';

export type CreateWithAssociationsListener = (
  model: Model,
  options?: CreateOptions,
) => HookReturn;
```

**例**

```ts
db.on('afterCreateWithAssociations', async (model, options) => {
  // 何かを行う
});

db.on('books.afterCreateWithAssociations', async (model, options) => {
  // 何かを行う
});
```

### `'afterUpdateWithAssociations'`

階層関係を持つデータを更新した後にイベントがトリガーされます。`repository.update()` を呼び出すとトリガーされます。

**シグネチャ**

```ts
on(eventName: `${string}.afterUpdateWithAssociations` | 'afterUpdateWithAssociations', listener: CreateWithAssociationsListener): this
```

**タイプ**

```ts
import type { UpdateOptions, HookReturn } from 'sequelize/types';
import type { Model } from '@nocobase/database';

export type UpdateWithAssociationsListener = (
  model: Model,
  options?: UpdateOptions,
) => HookReturn;
```

**例**

```ts
db.on('afterUpdateWithAssociations', async (model, options) => {
  // 何かを行う
});

db.on('books.afterUpdateWithAssociations', async (model, options) => {
  // 何かを行う
});
```

### `'afterSaveWithAssociations'`

階層関係を持つデータを作成または更新した後にイベントがトリガーされます。`repository.create()` または `repository.update()` を呼び出すとトリガーされます。

**シグネチャ**

```ts
on(eventName: `${string}.afterSaveWithAssociations` | 'afterSaveWithAssociations', listener: SaveWithAssociationsListener): this
```

**タイプ**

```ts
import type { SaveOptions, HookReturn } from 'sequelize/types';
import type { Model } from '@nocobase/database';

export type SaveWithAssociationsListener = (
  model: Model,
  options?: SaveOptions,
) => HookReturn;
```

**例**

```ts
db.on('afterSaveWithAssociations', async (model, options) => {
  // 何かを行う
});

db.on('books.afterSaveWithAssociations', async (model, options) => {
  // 何かを行う
});
```

### `'beforeDefineCollection'`

データシートを定義する前にトリガーされます。例えば `db.collection()` を呼び出すとき。

注：このイベントは同期イベントです。

**シグネチャ**

```ts
on(eventName: 'beforeDefineCollection', listener: BeforeDefineCollectionListener): this
```

**タイプ**

```ts
import type { CollectionOptions } from '@nocobase/database';

export type BeforeDefineCollectionListener = (
  options: CollectionOptions,
) => void;
```

**例**

```ts
db.on('beforeDefineCollection', (options) => {
  // 何かを行う
});
```

### `'afterDefineCollection'`

データシートを定義した後にトリガーされます。例えば `db.collection()` を呼び出すとき。

注：このイベントは同期イベントです。

**シグネチャ**

```ts
on(eventName: 'afterDefineCollection', listener: AfterDefineCollectionListener): this
```

**タイプ**

```ts
import type { Collection } from '@nocobase/database';

export type AfterDefineCollectionListener = (options: Collection) => void;
```

**例**

```ts
db.on('afterDefineCollection', (collection) => {
  // 何かを行う
});
```

### `'beforeRemoveCollection'` / `'afterRemoveCollection'`

メモリからデータシートを削除する前後にトリガーされます。例えば `db.removeCollection()` を呼び出すとき。

注：このイベントは同期イベントです。

**シグネチャ**

```ts
on(eventName: 'beforeRemoveCollection' | 'afterRemoveCollection', listener: RemoveCollectionListener): this
```

**タイプ**

```ts
import type { Collection } from '@nocobase/database';

export type RemoveCollectionListener = (options: Collection) => void;
```

**例**

```ts
db.on('beforeRemoveCollection', (collection) => {
  // 何かを行う
});

db.on('afterRemoveCollection', (collection) => {
  // 何かを行う
});
```
