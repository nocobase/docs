# Обзор HTTP API NocoBase

HTTP API NocoBase разработан на основе концепции "Ресурсы и Действия" (Resource & Action), представляя собой расширенную версию REST API. Поддерживаемые операции включают, но не ограничиваются созданием, чтением, обновлением и удалением данных. Действия с ресурсами могут быть произвольно расширены в NocoBase.

## Ресурсы

В NocoBase ресурсы представлены в двух формах:

- `<коллекция>`
- `<коллекция>.<ассоциация>`

<Alert>

- Коллекция - это набор абстрактных данных
- Ассоциация - связанные данные коллекции
- Ресурс включает как коллекции, так и их ассоциации

</Alert>

### Примеры

- `posts` - Посты
- `posts.user` - Автор поста
- `posts.tags` - Теги поста

## Действия

Действия с ресурсами обозначаются через `:<действие>`:

- `<коллекция>:<действие>`
- `<коллекция>.<ассоциация>:<действие>`

Встроенные глобальные действия для коллекций и ассоциаций:

- `create` - Создать
- `get` - Получить
- `list` - Получить список
- `update` - Обновить
- `destroy` - Удалить
- `move` - Переместить

Специальные действия для ассоциаций:

- `set` - Установить
- `add` - Добавить
- `remove` - Удалить
- `toggle` - Переключить

### Примеры

- `posts:create` - Создать пост
- `posts.user:get` - Получить автора поста
- `posts.tags:add` - Добавить теги к посту (связать существующие теги)

## URL запросов

```bash
<GET|POST>   /api/<коллекция>:<действие>
<GET|POST>   /api/<коллекция>:<действие>/<индекс_коллекции>
<GET|POST>   /api/<коллекция>/<индекс_коллекции>/<ассоциация>:<действие>
<GET|POST>   /api/<коллекция>/<индекс_коллекции>/<ассоциация>:<действие>/<индекс_ассоциации>
```

### Примеры

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

## Локализация ресурсов

- Ресурсы коллекции идентифицируются по `индекс_коллекции`, который должен быть уникальным
- Ресурсы ассоциации идентифицируются парой `индекс_коллекции` и `индекс_ассоциации`, где только их комбинация должна быть уникальной

При запросе деталей ассоциации URL должен содержать оба индекса, так как `индекс_ассоциации` может повторяться.

Например, для `tables.fields` (поля таблиц):

```bash
GET   /api/tables/table1/fields/title
GET   /api/tables/table2/fields/title
```

Обе таблицы содержат поле title, которое уникально в пределах одной таблицы, но может повторяться в других таблицах.

## Параметры запросов

Параметры могут передаваться в:
- Заголовках (headers)
- Параметрах строки запроса (query string) 
- Теле запроса (для GET-запросов тело не используется)

Специальные параметры:

- `filter` - Фильтрация данных (для запросов)
- `filterByTk` - Фильтр по полю tk (для уточнения данных)
- `sort` - Сортировка (для запросов)
- `fields` - Поля для вывода (для запросов)
- `appends` - Дополнительные связанные поля (для запросов)
- `except` - Исключаемые поля (для запросов)
- `whitelist` - Белый список полей (для создания/обновления)
- `blacklist` - Черный список полей (для создания/обновления)

### filter

Фильтрация данных:

```bash
# Простой вариант
GET /api/posts?filter[status]=publish
# Рекомендуемый формат JSON (требует encodeURIComponent)
GET /api/posts?filter={"status":"published"}

# Операторы фильтрации
GET /api/posts?filter[status.$eq]=publish
GET /api/posts?filter={"status.$eq":"published"}

# Логические операторы
GET /api/posts?filter={"$and": [{"status.$eq":"published"}, {"title.$includes":"a"}]}
GET /api/posts?filter={"$or": [{"status.$eq":"pending"}, {"status.$eq":"draft"}]}

# Фильтрация по ассоциациям
GET /api/posts?filter[user.email.$includes]=gmail
GET /api/posts?filter={"user.email.$includes":"gmail"}
```

[Подробнее об операторах фильтрации](http-api/filter-operators)

### filterByTk

Фильтрация по полю `tk`. При стандартных настройках:

- Для ресурсов коллекции: `tk` — это первичный ключ таблицы данных.
- Для ассоциативных ресурсов: `tk` — это поле `targetKey` ассоциации.

```bash
GET   /api/posts:get?filterByTk=1&fields=name,title&appends=tags
```

### sort

Сортировка. Чтобы отсортировать по убыванию, добавьте `-` перед названием поля.

```bash
# Сортировка по полю createdAt по возрастанию
GET /api/posts:get?sort=createdAt
# Сортировка по полю createdAt по убыванию
GET /api/posts:get?sort=-createdAt
# Совместная сортировка по нескольким полям: createdAt — по убыванию, title — по возрастанию (A–Z)
GET /api/posts:get?sort=-createdAt,title
```

### fields

Поля данных для вывода.

```bash
GET   /api/posts:list?fields=name,title

Ответ 200 (application/json)
{
  "data": [
    {
      "name": "",
      "title": ""
    }
  ],
  "meta": {}
}
```

### appends

Дополнительные поля связанных данных (связанные ресурсы).

### except

Исключает указанные поля из вывода (не возвращаются). Используется в операциях, связанных с запросами.

### whitelist

Белый список полей.

```bash
POST  /api/posts:create?whitelist=title

{
  "title": "Мой первый пост",
  "date": "2022-05-19"      # Поле date будет отфильтровано и не попадёт в базу данных
}
```

### blacklist

Чёрный список полей.

```bash
POST  /api/posts:create?blacklist=date

# Поле date будет отфильтровано и не попадёт в базу данных
{
  "title": "Мой первый пост"
}
```

## Ответ на запрос

Формат ответа:

```ts
type ResponseResult = {
  data?: any; // Основные данные
  meta?: any; // Дополнительная информация
  errors?: ResponseError[]; // Ошибки
};

type ResponseError = {
  code?: string;
  message: string;
};
```

### Примеры

Получение списка:

```bash
GET /api/posts:list

Ответ 200 (application/json)

{
  data: [
    {
      id: 1
    }
  ],
  meta: {
    count: 1,
    page: 1,
    pageSize: 1,
    totalPage: 1
  }
}
```

Просмотр деталей:

```bash
GET /api/posts:get/1

Ответ 200 (application/json)

{
  data: {
    id: 1
  }
}
```

Ошибка:

```bash
POST /api/posts:create

Ответ 400 (application/json)

{
  errors: [
    {
      message: 'имя обязательно для заполнения',
    }
  ]
}
```
