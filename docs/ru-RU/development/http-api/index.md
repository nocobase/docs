### **Обзор**

HTTP API NocoBase основан на концепции «Ресурс и действие» (Resource & Action), является надмножеством REST API и не ограничивается стандартными операциями CRUD. В NocoBase действия ресурсов (Resource Action) могут расширяться произвольным образом.

#### **Ресурс (Resource)**

В NocoBase ресурс (resource) может быть представлен двумя способами:

- `<collection>`
- `<collection>.<association>`

<Alert>

- collection — это набор всех абстрактных данных
- association — связанные данные collection
- resource включает в себя два типа: collection и collection.association

</Alert>

##### **Примеры**

- `posts` — статьи
- `posts.user` — пользователь статьи
- `posts.tags` — теги статьи

#### **Действие (Action)**

Действия ресурса обозначаются как `:<action>`:

- `<collection>:<action>`
- `<collection>.<association>:<action>`

Встроенные глобальные действия, доступные для collection и association:

- `create`
- `get`
- `list`
- `update`
- `destroy`
- `move`

Встроенные действия для связей, доступные только для association:

- `set`
- `add`
- `remove`
- `toggle`

##### **Примеры**

- `posts:create` — создать статью
- `posts.user:get` — просмотреть пользователя статьи
- `posts.tags:add` — добавить тег к статье (связать существующий тег со статьёй)

#### **URL запроса**

```bash
<GET|POST>   /api/<collection>:<action>
<GET|POST>   /api/<collection>:<action>/<collectionIndex>
<GET|POST>   /api/<collection>/<collectionIndex>/<association>:<action>
<GET|POST>   /api/<collection>/<collectionIndex>/<association>:<action>/<associationIndex>
```

##### **Примеры**

Ресурс `posts`:

```bash
POST  /api/posts:create
GET   /api/posts:list
GET   /api/posts:get/1
POST  /api/posts:update/1
POST  /api/posts:destroy/1
```

Ресурс `posts.comments`:

```bash
POST  /api/posts/1/comments:create
GET   /api/posts/1/comments:list
GET   /api/posts/1/comments:get/1
POST  /api/posts/1/comments:update/1
POST  /api/posts/1/comments:destroy/1
```

Ресурс `posts.tags`:

```bash
POST  /api/posts/1/tags:create
GET   /api/posts/1/tags:get
GET   /api/posts/1/tags:list
POST  /api/posts/1/tags:update
POST  /api/posts/1/tags:destroy
POST  /api/posts/1/tags:add
GET   /api/posts/1/tags:remove
```

#### **Определение ресурса**

- Ресурс collection определяется по `collectionIndex`, который должен быть уникальным.
- Ресурс association определяется по комбинации `collectionIndex` и `associationIndex`. При этом `associationIndex` может быть неуникальным, но совместный индекс `collectionIndex` и `associationIndex` должен быть уникальным.

При запросе деталей ресурса association в URL необходимо указывать и `<collectionIndex>`, и `<associationIndex>`. Параметр `<collectionIndex>` не является избыточным, так как `<associationIndex>` может быть неуникальным.

Например, `tables.fields` означает поля таблицы данных:

```bash
GET   /api/tables/table1/fields/title
GET   /api/tables/table2/fields/title
```

Таблицы `table1` и `table2` обе содержат поле `title`. Значение `title` уникально в пределах `table1`, но другие таблицы также могут содержать поле `title`.

#### **Параметры запроса**

Параметры запроса могут передаваться в заголовках (headers), параметрах (query string) или теле запроса (body, для GET-запросов тело отсутствует).

Несколько специальных параметров:

- `filter` — фильтрация данных, используется в операциях запроса;
- `filterByTk` — фильтрация по полю `tk`, используется для указания конкретной записи в операциях детализации;
- `sort` — сортировка, используется в операциях запроса;
- `fields` — какие поля выводить, используется в операциях запроса;
- `appends` — дополнительные связанные поля, используется в операциях запроса;
- `except` — исключить поля (не выводить), используется в операциях запроса;
- `whitelist` — белый список полей, используется при создании и обновлении данных;
- `blacklist` — чёрный список полей, используется при создании и обновлении данных.

##### **filter**

Фильтрация данных:

```bash
# простой вариант
GET /api/posts?filter[status]=publish
# рекомендуется использовать формат json string, требует кодирования через encodeURIComponent
GET /api/posts?filter={"status":"published"}

# операторы фильтрации
GET /api/posts?filter[status.$eq]=publish
GET /api/posts?filter={"status.$eq":"published"}

# $and
GET /api/posts?filter={"$and": [{"status.$eq":"published"}, {"title.$includes":"a"}]}
# $or
GET /api/posts?filter={"$or": [{"status.$eq":"pending"}, {"status.$eq":"draft"}]}

# поле связи
GET /api/posts?filter[user.email.$includes]=gmail
GET /api/posts?filter={"user.email.$includes":"gmail"}
```

[Дополнительная информация об операторах фильтрации](http-api/filter-operators)

### filterByTk

Фильтрация по полю `tk`. По умолчанию:

- для ресурса collection — `tk` является первичным ключом таблицы данных;
- для ресурса association — `tk` соответствует полю `targetKey` связи.

```bash
GET   /api/posts:get?filterByTk=1&fields=name,title&appends=tags
```

### sort

Сортировка. Для сортировки по убыванию перед полем ставится знак минус `-`.

```bash
# по возрастанию по полю createdAt
GET   /api/posts:get?sort=createdAt
# по убыванию по полю createdAt
GET   /api/posts:get?sort=-createdAt
# сортировка по нескольким полям: по убыванию по createdAt, по возрастанию по title (A–Z)
GET   /api/posts:get?sort=-createdAt,title
```

### fields

Указание, какие поля включать в ответ.

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

Добавление связанных полей.

### except

Исключение полей (не выводить), используется в операциях запроса.

### whitelist

Белый список

```bash
POST  /api/posts:create?whitelist=title

{
  "title": "My first post",
  "date": "2022-05-19"      # поле date будет отфильтровано и не попадёт в базу данных
}
```

### blacklist

Чёрный список

```bash
POST  /api/posts:create?blacklist=date

{
  "title": "My first post",
  "date": "2022-05-19"      # поле date будет отфильтровано и не попадёт в базу данных
}
```

## Ответ на запрос

Формат ответа

```ts
type ResponseResult = {
  data?: any; // основные данные
  meta?: any; // дополнительные данные
  errors?: ResponseError[]; // ошибки
};

type ResponseError = {
  code?: string;
  message: string;
};
```

### Примеры

Просмотр списка

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
    count: 1
    page: 1,
    pageSize: 1,
    totalPage: 1
  },
}
```

Просмотр деталей

```bash
GET /api/posts:get/1

Ответ 200 (application/json)

{
  data: {
    id: 1
  },
}
```

Ошибка

```bash
POST /api/posts:create

Ответ 400 (application/json)

{
  errors: [
    {
      message: 'name must be required',
    },
  ],
}
```
