# 木構造コレクション

## コレクションオプション

```ts
{
  name: 'categories',
  tree: 'adjacency-list',
  fields: [
    {
      type: 'belongsTo',
      name: 'parent',
      treeParent: true,
    },
    {
      type: 'hasMany',
      name: 'children',
      treeChildren: true,
    },
  ],
}
```

## UI

### 木構造コレクションの作成

<img src="./tree-collection/tree-collection.jpg">

### デフォルトフィールド

<img src="./tree-collection/init.jpg">

### テーブルブロック

<img src="./tree-collection/tree-table.jpg">

### 子アイテムの追加

<img src="./tree-collection/add-child.jpg">

### 展開/折りたたみ

<img src="./tree-collection/expend-collapse.jpg">

