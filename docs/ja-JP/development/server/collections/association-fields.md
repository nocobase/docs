# 関係フィールド設定

リレーショナルデータベースにおける標準的なテーブル作成方法は、外部キーフィールドを追加し、その後外部キー制約を設定することです。以下は、Knexを使用したテーブル作成の例です：

```ts
knex.schema.table('posts', function (table) {
  table.integer('userId').unsigned();
  table.foreign('userId').references('users.id');
});
```

このプロセスにより、postsテーブルにuserIdフィールドが作成され、posts.userIdがusers.idを参照する外部キー制約が設定されます。NocoBaseのコレクションでは、関係フィールドを設定することでこのような関係制約を確立します。以下のように設定します：

```ts
{
  name: 'posts',
  fields: [
    {
      type: 'belongsTo',
      name: 'user',
      target: 'users',
      foreignKey: 'userId',
    },
  ],
}
```

## 関係パラメータの説明

### BelongsTo

```ts
interface BelongsTo {
  type: 'belongsTo';
  name: string;
  // デフォルト値は name の複数形
  target?: string;
  // デフォルト値は target model の主キー、一般的には 'id'
  targetKey?: any;
  // デフォルト値は target + 'Id'
  foreignKey?: any;
}

// authorsテーブルの主キーidとbooksテーブルの外部キーauthorIdが接続される
{
  name: 'books',
  fields: [
    {
      type: 'belongsTo',
      name: 'author',
      target: 'authors',
      targetKey: 'id',         // authorsテーブルの主キー
      foreignKey: 'authorId',  // 外部キーはbooksテーブル
    }
  ],
}
```

### HasOne

```ts
interface HasOne {
  type: 'hasOne';
  name: string;
  // デフォルト値は name の複数形
  target?: string;
  // デフォルト値は source model の主キー、一般的には 'id'
  sourceKey?: string;
  // デフォルト値は source collection name の単数形 + 'Id'
  foreignKey?: string;
}

// usersテーブルの主キーidとprofilesテーブルの外部キーuserIdが接続される
{
  name: 'users',
  fields: [
    {
      type: 'hasOne',
      name: 'profile',
      target: 'profiles',
      sourceKey: 'id',      // usersテーブルの主キー
      foreignKey: 'userId', // 外部キーはprofilesテーブル
    }
  ],
}
```

### HasMany

```ts
interface HasMany {
  type: 'hasMany';
  name: string;
  // デフォルト値は name
  target?: string;
  // デフォルト値は source model の主キー、一般的には 'id'
  sourceKey?: string;
  // デフォルト値は source collection name の単数形 + 'Id'
  foreignKey?: string;
}

// postsテーブルの主キーidとcommentsテーブルの外部キーpostIdが接続される
{
  name: 'posts',
  fields: [
    {
      type: 'hasMany',
      name: 'comments',
      target: 'comments',
      sourceKey: 'id',          // postsテーブルの主キー
      foreignKey: 'postId',     // 外部キーはcommentsテーブル
    }
  ],
}
```

### BelongsToMany

```ts
interface BelongsToMany {
  type: 'belongsToMany';
  name: string;
  // デフォルト値は name
  target?: string;
  // デフォルト値は source collection name と target の先頭文字を自然順に結合した文字列
  through?: string;
  // デフォルト値は source collection name の単数形 + 'Id'
  foreignKey?: string;
  // デフォルト値は source model の主キー、一般的には id
  sourceKey?: string;
  // デフォルト値は target の単数形 + 'Id'
  otherKey?: string;
  // デフォルト値は target model の主キー、一般的には id
  targetKey?: string;
}

// tagsテーブルの主キー、postsテーブルの主キーとposts_tagsの2つの外部キーが接続される
{
  name: 'posts',
  fields: [
    {
      type: 'belongsToMany',
      name: 'tags',
      target: 'tags',
      through: 'posts_tags', // 中間テーブル
      foreignKey: 'tagId',   // 外部キー1、posts_tagsテーブルにある
      otherKey: 'postId',    // 外部キー2、posts_tagsテーブルにある
      targetKey: 'id',       // tagsテーブルの主キー
      sourceKey: 'id',       // postsテーブルの主キー
    }
  ],
}
```

