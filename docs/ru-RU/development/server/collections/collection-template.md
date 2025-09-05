# Шаблоны коллекций

В реальных бизнес-сценариях разные коллекции могут иметь свои правила инициализации и бизнес-логику. NocoBase решает такие проблемы с помощью шаблонов коллекций.

## Обычные коллекции

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

## Древовидные коллекции

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

## Наследуемые коллекции

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

## Другие шаблоны

Например, для календарных коллекций при инициализации требуются специальные поля cron и exclude, которые определяются шаблоном:

```ts
db.collection({
  name: 'events',
  template: 'calendar',
});
```
