# Collection Arborescente (Tree Collection)

## Options de la collection

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

## Interface Utilisateur (UI)

### Créer une collection arborescente

![Créer une collection arborescente](./tree-collection/tree-collection.jpg)

### Champs par défaut

![Champs par défaut](./tree-collection/init.jpg)

### Bloc Tableau

![Bloc Tableau](./tree-collection/tree-table.jpg)

### Ajouter un enfant

![Ajouter un enfant](./tree-collection/add-child.jpg)

### Développer/Réduire

![Développer/Réduire](./tree-collection/expend-collapse.jpg)
