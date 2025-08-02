# Основные концепции

## Ресурсы (Resource)

В NocoBase ресурсы могут быть представлены двумя способами:

- `<коллекция>`
- `<коллекция>.<ассоциация>`

<Alert>

- Коллекция - это набор абстрактных данных
- Ассоциация - связанные данные коллекции

</Alert>

Примеры:

- `posts` - статьи
- `posts.user` - пользователи статей
- `posts.tags` - теги статей

Конфигурация:

```js
// Статьи
{
  name: 'posts',
}
// Пользователи статей
{
  name: 'posts.user',
}
// Теги статей
{
  name: 'posts.tags',
}
```

## Действия (Action)

Действия над ресурсами обозначаются через `:<действие>`:

- `<коллекция>:<действие>`
- `<коллекция>.<ассоциация>:<действие>`

**Примеры:**

- `posts:create` - создать статью
- `posts.user:get` - получить пользователя статьи
- `posts.tags:add` - добавить тег к статье

Конфигурация:

```js
// CRUD для статей
{
  name: 'posts',
  actions: {
    create: async (ctx, next) => {},
    get: async (ctx, next) => {},
    list: async (ctx, next) => {},
    update: async (ctx, next) => {},
    destroy: async (ctx, next) => {},
  },
}

// Теги статей
{
  name: 'posts.tags',
  actions: {
    create: async (ctx, next) => {},
    get: async (ctx, next) => {},
    list: async (ctx, next) => {},
    update: async (ctx, next) => {},
    destroy: async (ctx, next) => {},
    add: async (ctx, next) => {},
    remove: async (ctx, next) => {},
  },
}
```

## Запросы к ресурсам

```bash
<GET|POST>   /api/<коллекция>:<действие>
<GET|POST>   /api/<коллекция>:<действие>/<filterByTk>
<GET|POST>   /api/<коллекция>/<sourceId>/<ассоциация>:<действие>
<GET|POST>   /api/<коллекция>/<sourceId>/<ассоциация>:<действие>/<filterByTk>
```

**Примеры:**

Ресурс posts:

```bash
POST  /api/posts:create
GET   /api/posts:list
GET   /api/posts:get/1
POST  /api/posts:update/1
POST  /api/posts:destroy/1
```

Ресурс posts.comments:

```bash
POST  /api/posts/1/comments:create
GET   /api/posts/1/comments:list
GET   /api/posts/1/comments:get/1
POST  /api/posts/1/comments:update/1
POST  /api/posts/1/comments:destroy/1
```

Ресурс posts.tags:

```bash
POST  /api/posts/1/tags:create
GET   /api/posts/1/tags:get
GET   /api/posts/1/tags:list
POST  /api/posts/1/tags:update
POST  /api/posts/1/tags:destroy
POST  /api/posts/1/tags:add
GET   /api/posts/1/tags:remove
```

## Идентификация ресурсов

Ресурсы идентифицируются через `filterByTk`:

- Для коллекций `filterByTk` должен быть уникальным
-Для ресурсов ассоциации `filterByTk` может быть не единственным, и `sourceid` должен быть указан одновременно, чтобы найти его.

Например, `tables.fields` представляют собой поля таблицы данных

```bash
GET   /api/tables/table1/fields/title
GET   /api/tables/table2/fields/title
```

Как в таблице 1, так и в таблице 2 есть поля заголовка. Заголовок уникален для таблицы 1, но в других таблицах также могут быть поля заголовка.

