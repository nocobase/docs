# コレクションテンプレート

<Alert>
📢 コレクションテンプレートは2022年第4四半期に提供予定です。
</Alert>

実際のビジネスシーンでは、異なるコレクションがそれぞれ独自の初期化ルールやビジネスロジックを持つ可能性があります。NocoBaseは、コレクションテンプレートを提供することで、これらの問題を解決します。

## 一般的なコレクション

```ts
db.collection({
  name: 'posts',
  fields: [
    {
      type: 'string',
      name: 'title',
    },
  ],
});
```

## 階層構造コレクション

```ts
db.collection({
  name: 'categories',
  tree: 'adjacency-list',
  fields: [
    {
      type: 'string',
      name: 'name',
    },
    {
      type: 'string',
      name: 'description',
    },
    {
      type: 'belongsTo',
      name: 'parent',
      target: 'categories',
      foreignKey: 'parentId',
    },
    {
      type: 'hasMany',
      name: 'children',
      target: 'categories',
      foreignKey: 'parentId',
    },
  ],
});
```

## 親子継承コレクション

```ts
db.collection({
  name: 'a',
  fields: [],
});

db.collection({
  name: 'b',
  inherits: 'a',
  fields: [],
});
```

## その他のテンプレート

カレンダーコレクションのように、各初期化されたコレクションは特別なcronおよびexcludeフィールドで初期化する必要がありますが、これらのフィールドの定義はテンプレートによって行われます。

```ts
db.collection({
  name: 'events',
  template: 'calendar',
});
```

