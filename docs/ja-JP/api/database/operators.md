# フィルター演算子

Repository の `find`、`findOne`、`findAndCount`、`count` などの API の filter パラメータで使用されます：

```ts
const repository = db.getRepository('books');

repository.find({
  filter: {
    title: {
      $eq: '春秋',
    },
  },
});
```

JSON 化をサポートするため、NocoBase ではクエリ演算子を `$` をプレフィックスとする文字列で識別します。

また、NocoBase は拡張演算子の API も提供しています。詳細は [`db.registerOperators()`](../database#registeroperators) を参照してください。

## 共通演算子

### `$eq`

フィールドの値が指定された値と等しいかどうかを判断します。SQL の `=` に相当します。

**例**

```ts
repository.find({
  filter: {
    title: {
      $eq: '春秋',
    },
  },
});
```

`title: '春秋'` と同等です。

### `$ne`

フィールドの値が指定された値と等しくないかどうかを判断します。SQL の `!=` に相当します。

**例**

```ts
repository.find({
  filter: {
    title: {
      $ne: '春秋',
    },
  },
});
```

### `$is`

フィールドの値が指定された値かどうかを判断します。SQL の `IS` に相当します。

**例**

```ts
repository.find({
  filter: {
    title: {
      $is: null,
    },
  },
});
```

### `$not`

フィールドの値が指定された値でないかどうかを判断します。SQL の `IS NOT` に相当します。

**例**

```ts
repository.find({
  filter: {
    title: {
      $not: null,
    },
  },
});
```

### `$col`

フィールドの値が別のフィールドの値と等しいかどうかを判断します。SQL の `=` に相当します。

**例**

```ts
repository.find({
  filter: {
    title: {
      $col: 'name',
    },
  },
});
```

### `$in`

フィールドの値が指定された配列に含まれているかどうかを判断します。SQL の `IN` に相当します。

**例**

```ts
repository.find({
  filter: {
    title: {
      $in: ['春秋', '战国'],
    },
  },
});
```

### `$notIn`

フィールドの値が指定された配列に含まれていないかどうかを判断します。SQL の `NOT IN` に相当します。

**例**

```ts
repository.find({
  filter: {
    title: {
      $notIn: ['春秋', '战国'],
    },
  },
});
```

### `$empty`

一般的なフィールドが空かどうかを判断します。文字列フィールドの場合、空文字列かどうかを判断し、配列フィールドの場合、空配列かどうかを判断します。

**例**

```ts
repository.find({
  filter: {
    title: {
      $empty: true,
    },
  },
});
```

### `$notEmpty`

一般的なフィールドが空でないかどうかを判断します。文字列フィールドの場合、空文字列でないかどうかを判断し、配列フィールドの場合、空配列でないかどうかを判断します。

**例**

```ts
repository.find({
  filter: {
    title: {
      $notEmpty: true,
    },
  },
});
```

## 論理演算子

### `$and`

論理 AND。SQL の `AND` に相当します。

**例**

```ts
repository.find({
  filter: {
    $and: [{ title: '诗经' }, { isbn: '1234567890' }],
  },
});
```

### `$or`

論理 OR。SQL の `OR` に相当します。

**例**

```ts
repository.find({
  filter: {
    $or: [{ title: '诗经' }, { publishedAt: { $lt: '0000-00-00T00:00:00Z' } }],
  },
});
```

## ブール型フィールド演算子

ブール型フィールド `type: 'boolean'` で使用されます。

### `$isFalsy`

ブール型フィールドの値が偽かどうかを判断します。ブールフィールドの値が `false`、`0`、`NULL` の場合、`$isFalsy: true` と判断されます。

**例**

```ts
repository.find({
  filter: {
    isPublished: {
      $isFalsy: true,
    },
  },
});
```

### `$isTruly`

ブール型フィールドの値が真かどうかを判断します。ブールフィールドの値が `true` および `1` の場合、`$isTruly: true` と判断されます。

**例**

```ts
repository.find({
  filter: {
    isPublished: {
      $isTruly: true,
    },
  },
});
```

## 数値型フィールド演算子

数値型フィールドで使用されます。以下を含みます：

- `type: 'integer'`
- `type: 'float'`
- `type: 'double'`
- `type: 'real'`
- `type: 'decimal'`

### `$gt`

フィールドの値が指定された値より大きいかどうかを判断します。SQL の `>` に相当します。

**例**

```ts
repository.find({
  filter: {
    price: {
      $gt: 100,
    },
  },
});
```

### `$gte`

フィールドの値が指定された値以上かどうかを判断します。SQL の `>=` に相当します。

**例**

```ts
repository.find({
  filter: {
    price: {
      $gte: 100,
    },
  },
});
```

### `$lt`

フィールドの値が指定された値より小さいかどうかを判断します。SQL の `<` に相当します。

**例**

```ts
repository.find({
  filter: {
    price: {
      $lt: 100,
    },
  },
});
```

### `$lte`

フィールドの値が指定された値以下かどうかを判断します。SQL の `<=` に相当します。

**例**

```ts
repository.find({
  filter: {
    price: {
      $lte: 100,
    },
  },
});
```

### `$between`

フィールドの値が指定された2つの値の間にあるかどうかを判断します。SQL の `BETWEEN` に相当します。

**例**

```ts
repository.find({
  filter: {
    price: {
      $between: [100, 200],
    },
  },
});
```

### `$notBetween`

フィールドの値が指定された2つの値の間にないかどうかを判断します。SQL の `NOT BETWEEN` に相当します。

**例**

```ts
repository.find({
  filter: {
    price: {
      $notBetween: [100, 200],
    },
  },
});
```

## 文字列型フィールド演算子

文字列型フィールドで使用されます。以下を含みます：`string`

### `$includes`

文字列フィールドが指定された部分文字列を含むかどうかを判断します。

**例**

```ts
repository.find({
  filter: {
    title: {
      $includes: '三字经',
    },
  },
});
```

### `$notIncludes`

文字列フィールドが指定された部分文字列を含まないかどうかを判断します。

**例**

```ts
repository.find({
  filter: {
    title: {
      $notIncludes: '三字经',
    },
  },
});
```

### `$startsWith`

文字列フィールドが指定された部分文字列で始まるかどうかを判断します。

**例**

```ts
repository.find({
  filter: {
    title: {
      $startsWith: '三字经',
    },
  },
});
```

### `$notStatsWith`

文字列フィールドが指定された部分文字列で始まらないかどうかを判断します。

**例**

```ts
repository.find({
  filter: {
    title: {
      $notStatsWith: '三字经',
    },
  },
});
```

### `$endsWith`

文字列フィールドが指定された部分文字列で終わるかどうかを判断します。

**例**

```ts
repository.find({
  filter: {
    title: {
      $endsWith: '三字经',
    },
  },
});
```

### `$notEndsWith`

文字列フィールドが指定された部分文字列で終わらないかどうかを判断します。

**例**

```ts
repository.find({
  filter: {
    title: {
      $notEndsWith: '三字经',
    },
  },
});
```

### `$like`

フィールドの値が指定された文字列を含むかどうかを判断します。SQL の `LIKE` に相当します。

**例**

```ts
repository.find({
  filter: {
    title: {
      $like: '计算机',
    },
  },
});
```

### `$notLike`

フィールドの値が指定された文字列を含まないかどうかを判断します。SQL の `NOT LIKE` に相当します。

**例**

```ts
repository.find({
  filter: {
    title: {
      $notLike: '计算机',
    },
  },
});
```

### `$iLike`

フィールドの値が指定された文字列を含むかどうかを判断します（大文字小文字を無視）。SQL の `ILIKE` に相当します（PG のみ適用）。

**例**

```ts
repository.find({
  filter: {
    title: {
      $iLike: 'Computer',
    },
  },
});
```

### `$notILike`

フィールドの値が指定された文字列を含まないかどうかを判断します（大文字小文字を無視）。SQL の `NOT ILIKE` に相当します（PG のみ適用）。

**例**

```ts
repository.find({
  filter: {
    title: {
      $notILike: 'Computer',
    },
  },
});
```

### `$regexp`

フィールドの値が指定された正規表現に一致するかどうかを判断します。SQL の `REGEXP` に相当します（PG のみ適用）。

**例**

```ts
repository.find({
  filter: {
    title: {
      $regexp: '^计算机',
    },
  },
});
```

### `$notRegexp`

フィールドの値が指定された正規表現に一致しないかどうかを判断します。SQL の `NOT REGEXP` に相当します（PG のみ適用）。

**例**

```ts
repository.find({
  filter: {
    title: {
      $notRegexp: '^计算机',
    },
  },
});
```

### `$iRegexp`

フィールドの値が指定された正規表現に一致するかどうかを判断します（大文字小文字を無視）。SQL の `~*` に相当します（PG のみ適用）。

**例**

```ts
repository.find({
  filter: {
    title: {
      $iRegexp: '^COMPUTER',
    },
  },
});
```

### `$notIRegexp`

フィールドの値が指定された正規表現に一致しないかどうかを判断します（大文字小文字を無視）。SQL の `!~*` に相当します（PG のみ適用）。

**例**

```ts
repository.find({
  filter: {
    title: {
      $notIRegexp: '^COMPUTER',
    },
  },
});
```

## 日付型フィールド演算子

日付型フィールド `type: 'date'` で使用されます。

### `$dateOn`

日付フィールドが指定された日付かどうかを判断します。

**例**

```ts
repository.find({
  filter: {
    createdAt: {
      $dateOn: '2021-01-01',
    },
  },
});
```

### `$dateNotOn`

日付フィールドが指定された日付でないかどうかを判断します。

**例**

```ts
repository.find({
  filter: {
    createdAt: {
      $dateNotOn: '2021-01-01',
    },
  },
});
```

### `$dateBefore`

日付フィールドが指定された値より前かどうかを判断します。指定された日付値より小さい場合に相当します。

**例**

```ts
repository.find({
  filter: {
    createdAt: {
      $dateBefore: '2021-01-01T00:00:00.000Z',
    },
  },
});
```

### `$dateNotBefore`

日付フィールドが指定された値より前でないかどうかを判断します。指定された日付値以上の場合に相当します。

**例**

```ts
repository.find({
  filter: {
    createdAt: {
      $dateNotBefore: '2021-01-01T00:00:00.000Z',
    },
  },
});
```

### `$dateAfter`

日付フィールドが指定された値より後かどうかを判断します。指定された日付値より大きい場合に相当します。

**例**

```ts
repository.find({
  filter: {
    createdAt: {
      $dateAfter: '2021-01-01T00:00:00.000Z',
    },
  },
});
```

### `$dateNotAfter`

日付フィールドが指定された値より後でないかどうかを判断します。指定された日付値以下の場合に相当します。

**例**

```ts
repository.find({
  filter: {
    createdAt: {
      $dateNotAfter: '2021-01-01T00:00:00.000Z',
    },
  },
});
```

## 配列型フィールド演算子

配列型フィールド `type: 'array'` で使用されます。

### `$match`

配列フィールドの値が指定された配列の値に一致するかどうかを判断します。

**例**

```ts
repository.find({
  filter: {
    tags: {
      $match: ['文学', '历史'],
    },
  },
});
```

### `$notMatch`

配列フィールドの値が指定された配列の値に一致しないかどうかを判断します。

**例**

```ts
repository.find({
  filter: {
    tags: {
      $notMatch: ['文学', '历史'],
    },
  },
});
```

### `$anyOf`

配列フィールドの値が指定された配列のいずれかの値を含むかどうかを判断します。

**例**

```ts
repository.find({
  filter: {
    tags: {
      $anyOf: ['文学', '历史'],
    },
  },
});
```

### `$noneOf`

配列フィールドの値が指定された配列のいずれの値も含まないかどうかを判断します。

**例**

```ts
repository.find({
  filter: {
    tags: {
      $noneOf: ['文学', '历史'],
    },
  },
});
```

### `$arrayEmpty`

配列フィールドが空かどうかを判断します。

**例**

```ts
repository.find({
  filter: {
    tags: {
      $arrayEmpty: true,
    },
  },
});
```

### `$arrayNotEmpty`

配列フィールドが空でないかどうかを判断します。

**例**

```ts
repository.find({
  filter: {
    tags: {
      $arrayNotEmpty: true,
    },
  },
});
```

## リレーションフィールド型演算子

リレーションが存在するかどうかを判断します。フィールドタイプは以下を含みます：

- `type: 'hasOne'`
- `type: 'hasMany'`
- `type: 'belongsTo'`
- `type: 'belongsToMany'`

### `$exists`

リレーションデータが存在するかどうかを判断します。

**例**

```ts
repository.find({
  filter: {
    author: {
      $exists: true,
    },
  },
});
```

### `$notExists`

リレーションデータが存在しないかどうかを判断します。

**例**

```ts
repository.find({
  filter: {
    author: {
      $notExists: true,
    },
  },
});
```