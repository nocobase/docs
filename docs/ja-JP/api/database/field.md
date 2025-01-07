# Field

## 概要

データシートフィールド管理クラス（抽象クラス）。すべてのフィールドタイプの基底クラスであり、他の任意のフィールドタイプはこのクラスを継承して実装されます。

カスタムフィールドの作成方法については、[フィールドタイプの拡張](/development/server/collections-fields#フィールドタイプの拡張)を参照してください。

## コンストラクタ

通常、開発者が直接呼び出すことはなく、主に `db.collection({ fields: [] })` メソッドを通じてプロキシエントリとして呼び出されます。

フィールドを拡張する際には、主に `Field` 抽象クラスを継承し、Database インスタンスに登録することで実現されます。

**シグネチャ**

- `constructor(options: FieldOptions, context: FieldContext)`

**パラメータ**

| パラメータ名               | タイプ           | デフォルト値 | 説明                                     |
| -------------------------- | ---------------- | ------------ | ---------------------------------------- |
| `options`                  | `FieldOptions`   | -            | フィールド設定オブジェクト               |
| `options.name`             | `string`         | -            | フィールド名                             |
| `options.type`             | `string`         | -            | フィールドタイプ、db に登録されたフィールドタイプ名に対応 |
| `context`                  | `FieldContext`   | -            | フィールドコンテキストオブジェクト       |
| `context.database`         | `Database`       | -            | データベースインスタンス                 |
| `context.collection`       | `Collection`     | -            | データシートインスタンス                 |

## インスタンスメンバ

### `name`

フィールド名。

### `type`

フィールドタイプ。

### `dataType`

フィールドのデータベース保存タイプ。

### `options`

フィールド初期化設定パラメータ。

### `context`

フィールドコンテキストオブジェクト。

## 設定メソッド

### `on()`

データシートイベントに基づくショートカット定義方法。`db.on(this.collection.name + '.' + eventName, listener)` と同等です。

継承時に通常はこのメソッドをオーバーライドする必要はありません。

**シグネチャ**

- `on(eventName: string, listener: (...args: any[]) => void)`

**パラメータ**

| パラメータ名      | タイプ                       | デフォルト値 | 説明       |
| ----------------- | ---------------------------- | ------------ | ---------- |
| `eventName`       | `string`                     | -            | イベント名 |
| `listener`        | `(...args: any[]) => void`   | -            | イベントリスナー |

### `off()`

データシートイベントに基づくショートカット削除方法。`db.off(this.collection.name + '.' + eventName, listener)` と同等です。

継承時に通常はこのメソッドをオーバーライドする必要はありません。

**シグネチャ**

- `off(eventName: string, listener: (...args: any[]) => void)`

**パラメータ**

| パラメータ名      | タイプ                       | デフォルト値 | 説明       |
| ----------------- | ---------------------------- | ------------ | ---------- |
| `eventName`       | `string`                     | -            | イベント名 |
| `listener`        | `(...args: any[]) => void`   | -            | イベントリスナー |

### `bind()`

フィールドがデータシートに追加された時にトリガーされる実行内容。通常、データシートイベントリスナーの追加やその他の処理に使用されます。

継承時には、対応する `super.bind()` メソッドを最初に呼び出す必要があります。

**シグネチャ**

- `bind()`

### `unbind()`

フィールドがデータシートから削除された時にトリガーされる実行内容。通常、データシートイベントリスナーの削除やその他の処理に使用されます。

継承時には、対応する `super.unbind()` メソッドを最初に呼び出す必要があります。

**シグネチャ**

- `unbind()`

### `get()`

フィールドの設定項目の値を取得します。

**シグネチャ**

- `get(key: string): any`

**パラメータ**

| パラメータ名 | タイプ     | デフォルト値 | 説明       |
| ------------ | ---------- | ------------ | ---------- |
| `key`        | `string`   | -            | 設定項目名 |

**例**

```ts
const field = db.collection('users').getField('name');

// フィールド名設定項目の値を取得し、'name' を返す
console.log(field.get('name'));
```

### `merge()`

フィールドの設定項目の値をマージします。

**シグネチャ**

- `merge(options: { [key: string]: any }): void`

**パラメータ**

| パラメータ名    | タイプ                     | デフォルト値 | 説明               |
| --------------- | -------------------------- | ------------ | ------------------ |
| `options`       | `{ [key: string]: any }`   | -            | マージする設定項目オブジェクト |

**例**

```ts
const field = db.collection('users').getField('name');

field.merge({
  // インデックス設定を追加
  index: true,
});
```

### `remove()`

データシートからフィールドを削除します（メモリからのみ削除）。

**例**

```ts
const books = db.getCollections('books');

books.getField('isbn').remove();

// データベースから実際に削除
await books.sync();
```

## データベースメソッド

### `removeFromDb()`

データベースからフィールドを削除します。

**シグネチャ**

- `removeFromDb(options?: Transactionable): Promise<void>`

**パラメータ**

| パラメータ名                 | タイプ          | デフォルト値 | 説明     |
| ---------------------------- | --------------- | ------------ | -------- |
| `options.transaction?`       | `Transaction`   | -            | トランザクションインスタンス |

### `existsInDb()`

フィールドがデータベースに存在するかどうかを判断します。

**シグネチャ**

- `existsInDb(options?: Transactionable): Promise<boolean>`

**パラメータ**

| パラメータ名                 | タイプ          | デフォルト値 | 説明     |
| ---------------------------- | --------------- | ------------ | -------- |
| `options.transaction?`       | `Transaction`   | -            | トランザクションインスタンス |

## 組み込みフィールドタイプリスト

NocoBase には、いくつかの一般的なフィールドタイプが組み込まれており、データシートのフィールドを定義する際に直接 type 名を指定して使用できます。異なるタイプのフィールドパラメータ設定は異なります。詳細は以下のリストを参照してください。

すべてのフィールドタイプの設定項目は、以下に追加で紹介するものを除いて、すべて Sequelize に渡されるため、Sequelize がサポートするすべてのフィールド設定項目をここで使用できます（例: `allowNull`、`defaultValue` など）。

また、サーバー側のフィールドタイプは主にデータベースの保存と一部のアルゴリズムの問題を解決するためのものであり、フロントエンドのフィールド表示タイプや使用コンポーネントとは基本的に関係ありません。フロントエンドのフィールドタイプについては、チュートリアルの対応する説明を参照してください。

### `'boolean'`

論理値タイプ。

**例**

```js
db.collection({
  name: 'books',
  fields: [
    {
      type: 'boolean',
      name: 'published',
    },
  ],
});
```

### `'integer'`

整数型（32 ビット）。

**例**

```ts
db.collection({
  name: 'books',
  fields: [
    {
      type: 'integer',
      name: 'pages',
    },
  ],
});
```

### `'bigInt'`

長整数型（64 ビット）。

**例**

```ts
db.collection({
  name: 'books',
  fields: [
    {
      type: 'bigInt',
      name: 'words',
    },
  ],
});
```

### `'double'`

倍精度浮動小数点数型（64 ビット）。

**例**

```ts
db.collection({
  name: 'books',
  fields: [
    {
      type: 'double',
      name: 'price',
    },
  ],
});
```

### `'real'`

実数型（PG のみ適用）。

### `'decimal'`

10 進小数型。

### `'string'`

文字列型。大部分のデータベースの `VARCHAR` 型に相当します。

**例**

```ts
db.collection({
  name: 'books',
  fields: [
    {
      type: 'string',
      name: 'title',
    },
  ],
});
```

### `'text'`

テキスト型。大部分のデータベースの `TEXT` 型に相当します。

**例**

```ts
db.collection({
  name: 'books',
  fields: [
    {
      type: 'text',
      name: 'content',
    },
  ],
});
```

### `'password'`

パスワード型（NocoBase 拡張）。Node.js のネイティブ crypto パッケージの `scrypt` メソッドを使用してパスワードを暗号化します。

**例**

```ts
db.collection({
  name: 'users',
  fields: [
    {
      type: 'password',
      name: 'password',
      length: 64, // 長さ、デフォルト 64
      randomBytesSize: 8, // ランダムバイト長、デフォルト 8
    },
  ],
});
```

**パラメータ**

| パラメータ名            | タイプ     | デフォルト値 | 説明         |
| ----------------------- | ---------- | ------------ | ------------ |
| `length`                | `number`   | 64           | 文字長       |
| `randomBytesSize`       | `number`   | 8            | ランダムバイトサイズ |

### `'date'`

日付型。

### `'time'`

時間型。

### `'array'`

配列型（PG のみ適用）。

### `'json'`

JSON 型。

### `'jsonb'`

JSONB 型（PG のみ適用、その他は `'json'` 型に互換されます）。

### `'uuid'`

UUID 型。

### `'uid'`

UID 型（NocoBase 拡張）。短いランダム文字列識別子型。

### `'formula'`

数式型（NocoBase 拡張）。[mathjs](https://www.npmjs.com/package/mathjs) に基づく数式計算を設定でき、数式内で同じレコード内の他の列の値を参照して計算に参加させることができます。

**例**

```ts
db.collection({
  name: 'orders',
  fields: [
    {
      type: 'double',
      name: 'price',
    },
    {
      type: 'integer',
      name: 'quantity',
    },
    {
      type: 'formula',
      name: 'total',
      expression: 'price * quantity',
    },
  ],
});
```

### `'radio'`

ラジオ型（NocoBase 拡張）。テーブル全体で最大 1 行のデータのこのフィールド値が `true` で、他のすべてが `false` または `null` です。

**例**

システム全体で root としてマークされたユーザーは 1 人だけで、別のユーザーの root 値が `true` に変更されると、他のすべての root が `true` のレコードは `false` に変更されます：

```ts
db.collection({
  name: 'users',
  fields: [
    {
      type: 'radio',
      name: 'root',
    },
  ],
});
```

### `'sort'`

ソート型（NocoBase 拡張）。整数型の数字に基づいてソートし、新しいレコードに自動的に新しいシーケンス番号を生成し、データを移動する際にシーケンス番号を再配置します。

データシートに `sortable` オプションが定義されている場合、対応するフィールドも自動的に生成されます。

**例**

ユーザーごとに記事をソート可能：

```ts
db.collection({
  name: 'posts',
  fields: [
    {
      type: 'belongsTo',
      name: 'user',
    },
    {
      type: 'sort',
      name: 'priority',
      scopeKey: 'userId', // userId が同じ値のデータをグループ化してソート
    },
  ],
});
```

### `'virtual'`

仮想型。実際にはデータを保存せず、特別な getter/setter 定義時に使用されます。

### `'belongsTo'`

多対一関連型。外部キーは自身のテーブルに保存され、hasOne/hasMany と対になります。

**例**

任意の記事はある著者に属します：

```ts
db.collection({
  name: 'posts',
  fields: [
    {
      type: 'belongsTo',
      name: 'author',
      target: 'users', // 設定しない場合、デフォルトで name の複数形のテーブル名
      foreignKey: 'authorId', // 設定しない場合、デフォルトで <name> + Id の形式
      sourceKey: 'id', // 設定しない場合、デフォルトで target テーブルの id
    },
  ],
});
```

### `'hasOne'`

一対一関連型。外部キーは関連テーブルに保存され、belongsTo と対になります。

**例**

任意のユーザーは 1 つのプロフィールを持っています：

```ts
db.collection({
  name: 'users',
  fields: [
    {
      type: 'hasOne',
      name: 'profile',
      target: 'profiles', // 省略可能
    },
  ],
});
```

### `'hasMany'`

一対多関連型。外部キーは関連テーブルに保存され、belongsTo と対になります。

**例**

任意のユーザーは複数の記事を持つことができます：

```ts
db.collection({
  name: 'users',
  fields: [
    {
      type: 'hasMany',
      name: 'posts',
      foreignKey: 'authorId',
      sourceKey: 'id',
    },
  ],
});
```

### `'belongsToMany'`

多対多関連型。中間テーブルを使用して双方の外部キーを保存します。既存のテーブルを中間テーブルとして指定しない場合、中間テーブルが自動的に作成されます。

**例**

任意の記事に任意の数のタグを付けることができ、任意のタグも任意の数の記事に追加できます：

```ts
db.collection({
  name: 'posts',
  fields: [
    {
      type: 'belongsToMany',
      name: 'tags',
      target: 'tags', // 同名の場合、省略可能
      through: 'postsTags', // 中間テーブルを設定しない場合、自動生成
      foreignKey: 'postId', // 自身のテーブルの中間テーブルへの外部キー
      sourceKey: 'id', // 自身のテーブルの主キー
      otherKey: 'tagId', // 関連テーブルの中間テーブルへの外部キー
    },
  ],
});

db.collection({
  name: 'tags',
  fields: [
    {
      type: 'belongsToMany',
      name: 'posts',
      through: 'postsTags', // 同じ関係グループは同じ中間テーブルを指す
    },
  ],
});
```
