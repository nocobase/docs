# SchemaInitializer

Используется для инициализации различных схем. Недавно добавленная схема может быть вставлена в любое место существующего узла схемы, включая:

```ts
{
  properties: {
    // beforeBegin - Insert in front of the current node
    node1: {
      properties: {
        // afterBegin - Insert in front of the first child node of the current node
        // ...
        // beforeEnd - After the last child node of the current node
      },
    },
    // afterEnd - After the current node
  },
}
```

Ядро SchemaInitializer включает в себя `<SchemaInitializer.Button />` и `<SchemaInitializer.Item />`. `<SchemaInitializer.Button />` используется для создания кнопки выпадающего меню схемы, а параметрами выпадающего меню являются `<SchemaInitializer.Item/>`.

### `<SchemaInitializerProvider />`

### `<SchemaInitializer.Button />`

### `<SchemaInitializer.Item/>`
