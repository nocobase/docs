# Древовидная коллекция

## Варианты коллекции

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

## Пользовательский интерфейс

### Создать древовидную коллекцию

<img src="./tree-collection/tree-collection.jpg">

### Поля по умолчанию

<img src="./tree-collection/init.jpg">

### Табличный блок

<img src="./tree-collection/tree-table.jpg">

### Добавить дочерний элемент

<img src="./tree-collection/add-child.jpg">

### Раскрыть/свернуть

<img src="./tree-collection/expend-collapse.jpg">
