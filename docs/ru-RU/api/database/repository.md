# Репозиторий (Repository)

## Обзор

Для любого объекта `Collection` можно получить соответствующий объект `Repository`, чтобы выполнять операции чтения и записи с таблицей данных.

```javascript
const { UserCollection } = require('./collections');

const UserRepository = UserCollection.repository;

const user = await UserRepository.findOne({
  filter: {
    id: 1,
  },
});

user.name = 'новое имя';
await user.save();
```

### Запросы

#### Базовые запросы

На объекте `Repository` можно вызывать методы `find*` для выполнения запросов. Все методы запроса поддерживают параметр `filter` для фильтрации данных.

```javascript
// SELECT * FROM users WHERE id = 1
userRepository.find({
  filter: {
    id: 1,
  },
});
```

#### Операторы

Параметр `filter` в `Repository` также поддерживает множество операторов для более сложных запросов.

```javascript
// SELECT * FROM users WHERE age > 18
userRepository.find({
  filter: {
    age: {
      $gt: 18,
    },
  },
});

// SELECT * FROM users WHERE age > 18 OR name LIKE '%张%'
userRepository.find({
  filter: {
    $or: [{ age: { $gt: 18 } }, { name: { $like: '%张%' } }],
  },
});
```

Более подробную информацию об операторах см. в разделе [Операторы фильтрации](/api/database/operators).

#### Управление полями

Управляйте выводимыми полями с помощью параметров `fields`, `except` и `appends` при выполнении запроса.

- `fields`: указывает, какие поля включить в результат
- `except`: исключает указанные поля из результата
- `appends`: добавляет связанные поля в результат

```javascript
// Результат содержит только поля id и name
userRepository.find({
  fields: ['id', 'name'],
});

// Результат не содержит поле password
userRepository.find({
  except: ['password'],
});

// Результат содержит данные связанных объектов posts
userRepository.find({
  appends: ['posts'],
});
```

#### Запросы по связанным полям

Параметр `filter` поддерживает фильтрацию по связанным полям, например:

```javascript
// Найти пользователей, у которых связанные посты имеют заголовок "post title"
userRepository.find({
  filter: {
    'posts.title': 'post title',
  },
});
```

Связанные поля могут быть вложенными:

```javascript
// Найти пользователей, у которых в комментариях к постам содержится "keywords"
await userRepository.find({
  filter: {
    'posts.comments.content': {
      $like: '%keywords%',
    },
  },
});
```

#### Сортировка

Управляйте порядком сортировки с помощью параметра `sort`.

```javascript
// SELECT * FROM users ORDER BY age
await userRepository.find({
  sort: 'age',
});

// SELECT * FROM users ORDER BY age DESC
await userRepository.find({
  sort: '-age',
});

// SELECT * FROM users ORDER BY age DESC, name ASC
await userRepository.find({
  sort: ['-age', 'name'],
});
```

Поддерживается сортировка по полям связанных объектов:

```javascript
await userRepository.find({
  sort: 'profile.createdAt',
});
```

### Создание

#### Базовое создание

Создавайте новые объекты данных с помощью `Repository`.

```javascript
await userRepository.create({
  name: 'Mark',
  age: 18,
});
// INSERT INTO users (name, age) VALUES ('Mark', 18)

// Массовое создание
await userRepository.create([
  {
    name: 'Mark',
    age: 18,
  },
  {
    name: 'Alex',
    age: 20,
  },
]);
```

#### Создание связей

Можно создавать связанные объекты одновременно с созданием основного объекта. Как и в запросах, поддерживаются вложенные связи. Например:

```javascript
await userRepository.create({
  name: 'Mark',
  age: 18,
  posts: [
    {
      title: 'заголовок поста',
      content: 'содержание поста',
      tags: [
        {
          name: 'тег1',
        },
        {
          name: 'тег2',
        },
      ],
    },
  ],
});
// При создании пользователя также создаётся пост, связанный с ним, и теги, связанные с постом
```

Если связанный объект уже существует в базе данных, можно передать его ID, чтобы установить с ним связь.

```javascript
const tag1 = await tagRepository.findOne({
  filter: {
    name: 'тег1',
  },
});

await userRepository.create({
  name: 'Mark',
  age: 18,
  posts: [
    {
      title: 'заголовок поста',
      content: 'содержание поста',
      tags: [
        {
          id: tag1.id, // установить связь с существующим объектом
        },
        {
          name: 'тег2',
        },
      ],
    },
  ],
});
```

### Обновление

#### Базовое обновление

После получения объекта данных можно напрямую изменить его свойства (объект `Model`) и затем вызвать метод `save()` для сохранения изменений.

```javascript
const user = await userRepository.findOne({
  filter: {
    name: 'Mark',
  },
});

user.age = 20;
await user.save();
```

Объект данных `Model` наследуется от Sequelize Model. Подробнее о работе с `Model` см. в [Sequelize Model](https://sequelize.org/master/manual/model-basics.html).

Также можно обновлять данные через `Repository`:

```javascript
// Обновить записи, соответствующие условию фильтрации
await userRepository.update({
  filter: {
    name: 'Mark',
  },
  values: {
    age: 20,
  },
});
```

Управляйте полями для обновления с помощью параметров `whitelist` и `blacklist`, например:

```javascript
await userRepository.update({
  filter: {
    name: 'Mark',
  },
  values: {
    age: 20,
    name: 'Alex',
  },
  whitelist: ['age'], // Обновлять только поле age
});
```

#### Обновление связанных полей

При обновлении можно устанавливать связанные объекты, например:

```javascript
const tag1 = await tagRepository.findOne({
  filter: {
    id: 1,
  },
});

await postRepository.update({
  filter: {
    id: 1,
  },
  values: {
    title: 'новый заголовок поста',
    tags: [
      {
        id: tag1.id, // связать с tag1
      },
      {
        name: 'тег2', // создать новый тег и связать с ним
      },
    ],
  },
});

await postRepository.update({
  filter: {
    id: 1,
  },
  values: {
    tags: null, // отвязать пост от тегов
  },
});
```

### Удаление

Вызовите метод `destroy()` в `Repository` для удаления записей. Для удаления необходимо указать условие фильтрации.

```javascript
await userRepository.destroy({
  filter: {
    status: 'blocked',
  },
});
```

## Конструктор

Как правило, конструктор не вызывается напрямую разработчиком. Экземпляр создаётся автоматически при указании соответствующего типа репозитория, зарегистрированного в параметре `db.collection()`. Тип репозитория регистрируется с помощью `db.registerRepositories()`.

**Сигнатура**

- `constructor(collection: Collection)`

**Пример**

```ts
import { Repository } from '@nocobase/database';

class MyRepository extends Repository {
  async myQuery(sql) {
    return this.database.sequelize.query(sql);
  }
}

db.registerRepositories({
  books: MyRepository,
});

db.collection({
  name: 'books',
  // здесь указывается зарегистрированный репозиторий
  repository: 'books',
});

await db.sync();

const books = db.getRepository('books') as MyRepository;
await books.myQuery('SELECT * FROM books;');
```

## Экземплярные свойства

### `database`

Экземпляр менеджера базы данных, в контексте которого работает репозиторий.

### `collection`

Соответствующий экземпляр менеджера таблицы данных.

### `model`

Соответствующий класс модели данных.

## Методы экземпляра

### `find()`

Находит набор данных из базы данных по заданным условиям фильтрации, сортировке и другим параметрам.

**Сигнатура**

- `async find(options?: FindOptions): Promise<Model[]>`

**Типы**

```typescript
type Filter = FilterWithOperator | FilterWithValue | FilterAnd | FilterOr;
type Appends = string[];
type Except = string[];
type Fields = string[];
type Sort = string[] | string;

interface SequelizeFindOptions {
  limit?: number;
  offset?: number;
}

interface FilterByTk {
  filterByTk?: TargetKey;
}

interface CommonFindOptions extends Transactionable {
  filter?: Filter;
  fields?: Fields;
  appends?: Appends;
  except?: Except;
  sort?: Sort;
}

type FindOptions = SequelizeFindOptions & CommonFindOptions & FilterByTk;
```

**Подробное описание**

#### `filter: Filter`

Условия запроса для фильтрации результатов. В передаваемых параметрах `key` — имя поля, `value` — соответствующее значение. Можно использовать операторы и комбинировать условия фильтрации.

```typescript
// Найти записи с именем "foo" и возрастом больше 18
repository.find({
  filter: {
    name: 'foo',
    age: {
      $gt: 18,
    },
  },
});
```

Подробнее об операторах см. в разделе [Операторы](./operators.md).

#### `filterByTk: TargetKey`

Поиск данных по `TargetKey` — это сокращённый способ указать параметр `filter`. Поле `TargetKey` можно [настроить](./collection.md#filtertargetkey) в `Collection`, по умолчанию используется первичный ключ (`primaryKey`).

```typescript
// По умолчанию найти запись с id = 1
repository.find({
  filterByTk: 1,
});
```

#### `fields: string[]`

Список запрашиваемых колонок. Используется для управления тем, какие поля данных будут возвращены. При использовании этого параметра возвращаются только указанные поля.

#### `except: string[]`

Исключаемые колонки. Используется для управления выводом полей — указанные поля не будут включены в результат.

#### `appends: string[]`

Дополнительные колонки. Используется для загрузки связанных данных. При указании этого параметра возвращаются также данные из указанных связанных полей.

#### `sort: string[] | string`

Задаёт порядок сортировки результатов запроса. Параметр — имя поля. По умолчанию сортировка по возрастанию (`asc`). Чтобы отсортировать по убыванию (`desc`), перед именем поля нужно поставить символ `-`. Например, `['-id', 'name']` означает сортировку по `id desc, name asc`.

#### `limit: number`

Ограничивает количество возвращаемых результатов, аналог `LIMIT` в SQL.

#### `offset: number`

Смещение для запроса, аналог `OFFSET` в SQL.

**Пример**

```ts
const posts = db.getRepository('posts');

const results = await posts.find({
  filter: {
    createdAt: {
      $gt: '2022-01-01T00:00:00.000Z',
    },
  },
  fields: ['title'],
  appends: ['user'],
});
```

---

### `findOne()`

Находит одну запись из базы данных по заданным условиям. Аналог `Model.findOne()` в Sequelize.

**Сигнатура**

- `async findOne(options?: FindOneOptions): Promise<Model | null>`

<embed src="./shared/find-one.md"></embed>

**Пример**

```ts
const posts = db.getRepository('posts');

const result = await posts.findOne({
  filterByTk: 1,
});
```

---

### `count()`

Подсчитывает количество записей, соответствующих заданным условиям. Аналог `Model.count()` в Sequelize.

**Сигнатура**

- `count(options?: CountOptions): Promise<number>`

**Типы**

```typescript
interface CountOptions
  extends Omit<SequelizeCountOptions, 'distinct' | 'where' | 'include'>,
    Transactionable {
  filter?: Filter;
}
```

**Пример**

```ts
const books = db.getRepository('books');

const count = await books.count({
  filter: {
    title: 'Три столпа китайской культуры',
  },
});
```

---

### `findAndCount()`

Находит набор данных по заданным условиям и возвращает одновременно сами данные и их количество. Аналог `Model.findAndCountAll()` в Sequelize.

**Сигнатура**

- `async findAndCount(options?: FindAndCountOptions): Promise<[Model[], number]>`

**Типы**

```typescript
type FindAndCountOptions = Omit<
  SequelizeAndCountOptions,
  'where' | 'include' | 'order'
> &
  CommonFindOptions;
```

### `findAndCount()`

**Подробное описание**

Параметры запроса те же, что и у метода `find()`. Возвращается массив, где первый элемент — результаты запроса, а второй — общее количество найденных записей.

---

### `create()`

Добавляет новую запись в таблицу данных. Аналог `Model.create()` в Sequelize. Если создаваемый объект содержит связанные поля, то соответствующие связанные записи также будут созданы или обновлены одновременно.

**Сигнатура**

- `async create<M extends Model>(options: CreateOptions): Promise<M>`

<embed src="./shared/create-options.md"></embed>

**Пример**

```ts
const posts = db.getRepository('posts');

const result = await posts.create({
  values: {
    title: 'Заметки о релизе NocoBase 1.0',
    tags: [
      // Обновление данных, если указан первичный ключ связанной таблицы
      { id: 1 },
      // Создание новой записи, если первичный ключ не указан
      { name: 'NocoBase' },
    ],
  },
});
```

---

### `createMany()`

Добавляет несколько новых записей в таблицу данных. Эквивалентно многократному вызову метода `create()`.

**Сигнатура**

- `createMany(options: CreateManyOptions): Promise<Model[]>`

**Типы**

```typescript
interface CreateManyOptions extends BulkCreateOptions {
  records: Values[];
}
```

**Подробное описание**

- `records`: массив объектов данных, которые необходимо создать.
- `transaction`: объект транзакции. Если параметр транзакции не передан, метод автоматически создаст внутреннюю транзакцию.

**Пример**

```ts
const posts = db.getRepository('posts');

const results = await posts.createMany({
  records: [
    {
      title: 'Заметки о релизе NocoBase 1.0',
      tags: [
        // Обновление записи по id
        { id: 1 },
        // Создание новой записи
        { name: 'NocoBase' },
      ],
    },
    {
      title: 'Заметки о релизе NocoBase 1.1',
      tags: [{ id: 1 }],
    },
  ],
});
```

---

### `update()`

Обновляет данные в таблице. Аналог `Model.update()` в Sequelize. Если обновляемый объект содержит связанные поля, то соответствующие связанные записи также будут созданы или обновлены.

**Сигнатура**

- `async update<M extends Model>(options: UpdateOptions): Promise<M>`

<embed src="./shared/update-options.md"></embed>

**Пример**

```ts
const posts = db.getRepository('posts');

const result = await posts.update({
  filterByTk: 1,
  values: {
    title: 'Заметки о релизе NocoBase 1.0',
    tags: [
      // Обновление по id
      { id: 1 },
      // Создание новой записи
      { name: 'NocoBase' },
    ],
  },
});
```

---

### `destroy()`

Удаляет данные из таблицы. Аналог `Model.destroy()` в Sequelize.

**Сигнатура**

- `async destroy(options?: TargetKey | TargetKey[] | DestroyOptions): Promise<number>`

**Типы**

```typescript
interface DestroyOptions extends SequelizeDestroyOptions {
  filter?: Filter;
  filterByTk?: TargetKey | TargetKey[];
  truncate?: boolean;
  context?: any;
}
```

**Подробное описание**

- `filter`: задаёт условия фильтрации для удаляемых записей. Подробнее об использовании фильтра см. в методе [`find()`](#find).
- `filterByTk`: указывает первичный ключ (или массив ключей) записи, которую нужно удалить. Это сокращённый способ задать условие фильтрации по первичному ключу.tering conditions by TargetKey.
- `truncate`: Whether to empty the table data, this parameter is valid if no `filter` or `filterByTk` parameter is passed.
- `transaction`: Transaction object. If no transaction parameter is passed, the method will automatically create an internal transaction.
