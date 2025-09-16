# База данных (Database)

## Обзор

Database - это инструмент для взаимодействия с базами данных в NocoBase, предоставляющий удобные функции для no-code и low-code приложений. Поддерживаемые СУБД:

- SQLite 3.8.8+
- MySQL 8.0.17+
- PostgreSQL 10.0+

### Подключение к базе данных

В конструкторе `Database` можно настроить подключение к БД, передав параметр `options`.

```javascript
const { Database } = require('@nocobase/database');

// Конфигурация для SQLite
const database = new Database({
  dialect: 'sqlite',
  storage: 'path/to/database.sqlite'
})

// Конфигурация для MySQL/PostgreSQL
const database = new Database({
  dialect: /* 'postgres' или 'mysql' */,
  database: 'database',
  username: 'username',
  password: 'password',
  host: 'localhost',
  port: 'port'
})
```

Подробные параметры конфигурации смотрите в разделе [Конструктор](#constructor).

### Определение структуры данных

`Database` определяет структуру БД через `Collection`, где каждый объект `Collection` представляет таблицу в базе данных.

```javascript
// Определение коллекции
const UserCollection = database.collection({
  name: 'users',
  fields: [
    {
      name: 'name',
      type: 'string',
    },
    {
      name: 'age',
      type: 'integer',
    },
  ],
});
```

После определения структуры используйте метод `sync()` для синхронизации с базой данных.

```javascript
await database.sync();
```

Подробнее об использовании `Collection` см. в [документации Collection](/api/database/collection).

### CRUD операции с данными

`Database` работает с данными через `Repository`.

```javascript
const UserRepository = UserCollection.repository();

// Создание
await UserRepository.create({
  name: 'Mark',
  age: 18,
});

// Запрос
const user = await UserRepository.findOne({
  filter: {
    name: 'Mark',
  },
});

// Обновление
await UserRepository.update({
  values: {
    age: 20,
  },
});

// Удаление
await UserRepository.destroy(user.id);
```

Подробнее о CRUD операциях см. в [документации Repository](/api/database/repository).

## Конструктор

**Сигнатура**

- `constructor(options: DatabaseOptions)`

Создаёт экземпляр базы данных.

**Параметры**

| Имя                      | Тип            | По умолчанию  | Описание                                                                                                                                         |
|--------------------------|----------------|---------------|--------------------------------------------------------------------------------------------------------------------------------------------------|
| `options.host`           | `string`       | `'localhost'` | Хост базы данных                                                                                                                                 |
| `options.port`           | `number`       | —             | Порт службы базы данных, значение по умолчанию зависит от типа используемой СУБД                                                                  |
| `options.username`       | `string`       | —             | Имя пользователя базы данных                                                                                                                     |
| `options.password`       | `string`       | —             | Пароль базы данных                                                                                                                               |
| `options.database`       | `string`       | —             | Название базы данных                                                                                                                             |
| `options.dialect`        | `string`       | `'mysql'`     | Тип базы данных                                                                                                                                  |
| `options.storage?`       | `string`       | `':memory:'`  | Режим хранения для SQLite                                                                                                                        |
| `options.logging?`       | `boolean`      | `false`       | Включить логирование                                                                                                                             |
| `options.define?`        | `Object`       | `{}`          | Параметры по умолчанию для определения таблиц                                                                                                    |
| `options.tablePrefix?`   | `string`       | `''`          | Расширение NocoBase, префикс таблиц                                                                                                              |
| `options.migrator?`      | `UmzugOptions` | `{}`          | Расширение NocoBase, параметры мигратора, см. [Umzug](https://github.com/sequelize/umzug/blob/main/src/types.ts#L15) для реализации               |

## Методы миграций

### `addMigration()`

Добавляет один файл миграции.

**Сигнатура**

- `addMigration(options: MigrationItem)`

**Параметры**

| Имя                  | Тип                | По умолчанию | Описание                                  |
|----------------------|--------------------|--------------|-------------------------------------------|
| `options.name`       | `string`           | —            | Название файла миграции                   |
| `options.context?`   | `string`           | —            | Контекст файла миграции                   |
| `options.migration?` | `typeof Migration` | —            | Пользовательский тип миграции             |
| `options.up`         | `Function`         | —            | Метод `up` в файле миграции               |
| `options.down`       | `Function`         | —            | Метод `down` в файле миграции             |

**Пример**

```ts
db.addMigration({
  name: '20220916120411-test-1',
  async up() {
    const queryInterface = this.context.db.sequelize.getQueryInterface();
    await queryInterface.query(/* ваши SQL-запросы миграции */);
  },
});
```

### `addMigrations()`

Добавляет файлы миграций из указанной директории.

**Сигнатура**

- `addMigrations(options: AddMigrationsOptions): void`

**Параметры**

| Имя                  | Тип        | По умолчанию     | Описание                                     |
|----------------------|------------|------------------|----------------------------------------------|
| `options.directory`  | `string`   | `''`             | Директория с файлами миграций                |
| `options.extensions` | `string[]` | `['js', 'ts']`   | Расширения файлов                             |
| `options.namespace?` | `string`   | `''`             | Пространство имён (namespace)                |
| `options.context?`   | `Object`   | `{ db }`         | Контекст файлов миграций                     |

**Пример**

```ts
db.addMigrations({
  directory: path.resolve(__dirname, './migrations'),
  namespace: 'test',
});
```

## Вспомогательные методы

### `inDialect()`

Проверяет, является ли текущий тип базы данных указанным.

**Сигнатура**

- `inDialect(dialect: string[]): boolean`

**Параметры**

| Имя       | Тип        | По умолчанию | Описание                                                      |
|-----------|------------|--------------|---------------------------------------------------------------|
| `dialect` | `string[]` | —            | Тип базы данных: возможные значения — `mysql`, `postgres`, `sqlite` |

### `getTablePrefix()`

Возвращает префикс имени таблицы из конфигурации.

**Сигнатура**

- `getTablePrefix(): string`

## Конфигурация таблиц данных

### `collection()`

Определяет таблицу данных. Работает аналогично методу `define` из Sequelize — создаёт структуру таблицы только в памяти. Для сохранения в базе данных необходимо вызвать метод `sync`.

**Сигнатура**

- `collection(options: CollectionOptions): Collection`

**Параметры**

Все параметры `options` соответствуют параметрам конструктора класса `Collection`, см. [Collection](/api/database/collection#Constructor).

**События**

- `'beforeDefineCollection'`: срабатывает перед созданием таблицы.
- `'afterDefineCollection'`: срабатывает после создания таблицы.

**Пример**

```ts
db.collection({
  name: 'books',
  fields: [
    {
      type: 'string',
      name: 'title',
    },
    {
      type: 'float',
      name: 'price',
    },
  ],
});

// синхронизировать коллекцию как таблицу в базе данных
await db.sync();
```

### `getCollection()`

Получает ранее определённую таблицу данных.

**Сигнатура**

- `getCollection(name: string): Collection`

**Параметры**

| Имя    | Тип      | По умолчанию | Описание       |
|--------|----------|--------------|----------------|
| `name` | `string` | —            | Имя таблицы    |

**Пример**

```ts
const collection = db.getCollection('books');
```

### `hasCollection()`

Проверяет, определена ли таблица данных с указанным именем.

**Сигнатура**

- `hasCollection(name: string): boolean`

**Параметры**

| Имя    | Тип      | По умолчанию | Описание       |
|--------|----------|--------------|----------------|
| `name` | `string` | —            | Имя таблицы    |

**Пример**

```ts
db.collection({ name: 'books' });

db.hasCollection('books'); // true

db.hasCollection('authors'); // false
```

### `removeCollection()`

Удаляет определённую таблицу данных. Удаление происходит только из памяти. Чтобы изменения были сохранены в базе данных, необходимо вызвать метод `sync`.

**Сигнатура**

- `removeCollection(name: string): void`

**Параметры**

| Имя    | Тип      | По умолчанию | Описание       |
|--------|----------|--------------|----------------|
| `name` | `string` | —            | Имя таблицы    |

**События**

- `'beforeRemoveCollection'`: срабатывает перед удалением таблицы.
- `'afterRemoveCollection'`: срабатывает после удаления таблицы.

**Пример**

```ts
db.collection({ name: 'books' });

db.removeCollection('books');
```

### `import()`

Загружает все файлы из указанной директории в память и использует их как конфигурацию коллекций.

**Сигнатура**

- `async import(options: { directory: string; extensions?: ImportFileExtension[] }): Promise<Map<string, Collection>>`

**Параметры**

| Имя                 | Тип        | По умолчанию     | Описание                                 |
|---------------------|------------|------------------|------------------------------------------|
| `options.directory` | `string`   | —                | Путь к директории для импорта            |
| `options.extensions`| `string[]` | `['ts', 'js']`   | Расширения файлов для сканирования       |

**Пример**

Файл `./collections/books.ts` содержит следующую конфигурацию:

```ts
export default {
  name: 'books',
  fields: [
    {
      type: 'string',
      name: 'title',
    },
  ],
};
```

Импортируем конфигурации при загрузке плагина:

```ts
class Plugin {
  async load() {
    await this.app.db.import({
      directory: path.resolve(__dirname, './collections'),
    });
  }
}
```

## Регистрация и получение расширений

### `registerFieldTypes()`

Регистрирует пользовательский тип поля.

**Сигнатура**

- `registerFieldTypes(fieldTypes: MapOf<typeof Field>): void`

**Параметры**

`fieldTypes` — это объект с парами ключ-значение, где ключ — имя типа поля, а значение — класс типа поля.

**Пример**

```ts
import { Field } from '@nocobase/database';

class MyField extends Field {
  // ...
}

db.registerFieldTypes({
  myField: MyField,
});
```

### `registerModels()`

Регистрирует пользовательский класс модели данных.

**Сигнатура**

- `registerModels(models: MapOf<ModelStatic<any>>): void`

**Параметры**

`models` — объект с парами ключ-значение, где ключ — имя модели данных, а значение — класс модели.

**Пример**

```ts
import { Model } from '@nocobase/database';

class MyModel extends Model {
  // ...
}

db.registerModels({
  myModel: MyModel,
});

db.collection({
  name: 'myCollection',
  model: 'myModel',
});
```

### `registerRepositories()`

Регистрирует пользовательский класс репозитория данных.

**Сигнатура**

- `registerRepositories(repositories: MapOf<RepositoryType>): void`

**Параметры**

`repositories` — объект с парами ключ-значение, где ключ — имя репозитория, а значение — класс репозитория.

**Пример**

```ts
import { Repository } from '@nocobase/database';

class MyRepository extends Repository {
  // ...
}

db.registerRepositories({
  myRepository: MyRepository,
});

db.collection({
  name: 'myCollection',
  repository: 'myRepository',
});
```

### `registerOperators()`

Регистрирует пользовательский оператор запроса данных.

**Сигнатура**

- `registerOperators(operators: MapOf<OperatorFunc>): void`

**Параметры**

`operators` — объект с парами ключ-значение, где ключ — имя оператора, а значение — функция, возвращающая условие сравнения.

**Пример**

```ts
db.registerOperators({
  $dateOn(value) {
    return {
      [Op.and]: [
        { [Op.gte]: stringToDate(value) },
        { [Op.lt]: getNextDay(value) },
      ],
    };
  },
});

db.getRepository('books').count({
  filter: {
    createdAt: {
      // зарегистрированный оператор
      $dateOn: '2020-01-01',
    },
  },
});
```

### `getModel()`

Возвращает зарегистрированный класс модели данных. Если пользовательский класс модели не был зарегистрирован ранее, возвращается класс модели по умолчанию из Sequelize. Имя по умолчанию совпадает с именем, заданным при определении коллекции.

**Сигнатура**

- `getModel(name: string): Model`

**Параметры**

| Имя    | Тип      | По умолчанию | Описание                     |
|--------|----------|--------------|------------------------------|
| `name` | `string` | —            | Имя зарегистрированной модели|

**Пример**

```ts
db.registerModels({
  books: class MyModel extends Model {},
});

const ModelClass = db.getModel('books');

console.log(ModelClass.prototype instanceof MyModel); // true
```

> **Примечание**: Класс модели, полученный через `getModel()`, строго не равен классу, переданному при регистрации, но он от него наследуется. Поскольку Sequelize модифицирует свойства класса модели во время инициализации, NocoBase автоматически обрабатывает это наследование. Все определения работают корректно, за исключением того, что сами классы не являются одинаковыми (не равны по ссылке).> 

### `getRepository()`

Получает определённый класс репозитория данных. Если пользовательский класс репозитория не был зарегистрирован ранее, возвращается класс репозитория по умолчанию из NocoBase. Имя по умолчанию совпадает с именем, заданным при определении коллекции.

Класс репозитория в основном используется для операций CRUD (создание, чтение, обновление, удаление) на основе модели данных. Подробнее см. [Repository](/api/database/repository).

**Сигнатура**

- `getRepository(name: string): Repository`
- `getRepository(name: string, relationId?: string | number): Repository`

**Параметры**

| Имя         | Тип                 | По умолчанию | Описание                                      |
|-------------|---------------------|--------------|-----------------------------------------------|
| `name`      | `string`            | —            | Имя зарегистрированного репозитория данных    |
| `relationId`| `string` \| `number`| —            | Значение внешнего ключа для связанных данных  |

Если имя содержит связь в формате `'таблица.связь'`, возвращается репозиторий связанных данных. Если указан второй параметр, репозиторий будет использоваться (запросы, изменения и т.д.) с учётом значения внешнего ключа в связанных данных.

**Пример**

Предположим, есть две таблицы: `posts` (посты) и `authors` (авторы), причём в таблице `posts` есть внешний ключ, ссылающийся на `authors`:

```ts
const AuthorsRepo = db.getRepository('authors');
const author1 = await AuthorsRepo.create({ name: 'author1' });

const PostsRepo = db.getRepository('authors.posts', author1.id);
const post1 = await PostsRepo.create({ title: 'post1' });
console.assert(post1.authorId === author1.id); // true
```

## События базы данных

### `on()`

Подписывается на события базы данных.

**Сигнатура**

- `on(event: string, listener: (...args: any[]) => void | Promise<void>): void`

**Параметры**

| Имя       | Тип      | По умолчанию | Описание         |
|-----------|----------|--------------|------------------|
| `event`   | `string` | —            | Имя события      |
| `listener`| `Function`| —           | Обработчик события|

Имена событий по умолчанию поддерживают события моделей Sequelize. Глобальные события прослушиваются по имени `<sequelize_model_global_event>`, события отдельной модели — по имени `<имя_модели>.<sequelize_model_event>`.

См. раздел [Встроенные события](#built-in-events) для описания параметров и подробных примеров всех встроенных типов событий.

### `off()`

Удаляет обработчик события.

**Сигнатура**

- `off(name: string, listener: Function): void`

**Параметры**

| Имя       | Тип      | По умолчанию | Описание         |
|-----------|----------|--------------|------------------|
| `name`    | `string` | —            | Имя события      |
| `listener`| `Function`| —           | Обработчик события|

**Пример**

```ts
const listener = async (model, options) => {
  console.log(model);
};

db.on('afterCreate', listener);

db.off('afterCreate', listener);
```

## Операции с базой данных

### `auth()`

Проверка подключения к базе данных. Может использоваться для убеждения, что приложение установило соединение с БД.

**Сигнатура**

- `auth(options: QueryOptions & { retry?: number } = {}): Promise<boolean>`

**Параметры**

| Имя                   | Тип                  | По умолчанию | Описание                                      |
|-----------------------|----------------------|--------------|-----------------------------------------------|
| `options?`            | `Object`             | —            | Параметры проверки                            |
| `options.retry?`      | `number`             | `10`         | Количество попыток при неудачной проверке     |
| `options.transaction?`| `Transaction`        | —            | Объект транзакции                             |
| `options.logging?`    | `boolean \| Function`| `false`      | Выводить ли логи                              |

**Пример**

```ts
await db.auth();
```

### `reconnect()`

Повторное подключение к базе данных.

**Пример**

```ts
await db.reconnect();
```

### `closed()`

Проверяет, закрыто ли соединение с базой данных.

**Сигнатура**

- `closed(): boolean`

### `close()`

Закрывает соединение с базой данных. Аналогично `sequelize.close()`.

### `sync()`

Синхронизирует структуру таблиц базы данных. Аналогично `sequelize.sync()`. Подробнее о параметрах см. в [документации Sequelize](https://sequelize.org/api/v6/class/src/sequelize.js~sequelize#instance-method-sync).

### `clean()`

Очищает базу данных — удаляет все таблицы данных.

**Сигнатура**

- `clean(options: CleanOptions): Promise<void>`

**Параметры**

| Имя                   | Тип           | По умолчанию | Описание                          |
|-----------------------|---------------|--------------|-----------------------------------|
| `options.drop`        | `boolean`     | `false`      | Удалять ли все таблицы            |
| `options.skip`        | `string[]`    | —            | Имена таблиц, которые нужно пропустить |
| `options.transaction` | `Transaction` | —            | Объект транзакции                 |

**Пример**

Удалить все таблицы, кроме таблицы `users`:

```ts
await db.clean({
  drop: true,
  skip: ['users'],
});
```

## Экспорт на уровне пакета

### `defineCollection()`

Создаёт конфигурацию таблицы данных.

**Сигнатура**

- `defineCollection(name: string, config: CollectionOptions): CollectionOptions`

**Параметры**

| Имя                | Тип                | По умолчанию | Описание                                        |
|--------------------|--------------------|--------------|-------------------------------------------------|
| `collectionOptions`| `CollectionOptions`| —            | Все параметры те же, что и у `db.collection()`  |

**Пример**

Файл конфигурации таблицы, который будет импортирован через `db.import()`:

```ts
import { defineCollection } from '@nocobase/database';

export default defineCollection({
  name: 'users',
  fields: [
    {
      type: 'string',
      name: 'name',
    },
  ],
});
```

### `extendCollection()`

Расширяет конфигурацию уже загруженной в память таблицы данных. В основном используется для модификации конфигураций, загруженных через метод `import()`. Это метод верхнего уровня из пакета `@nocobase/database`, который вызывается не через экземпляр `db`, а напрямую. Также можно использовать алиас `extend`.

**Сигнатура**

- `extendCollection(collectionOptions: CollectionOptions, mergeOptions?: MergeOptions): ExtendedCollectionOptions`

**Параметры**

| Имя                | Тип                | По умолчанию | Описание                                                             |
|--------------------|--------------------|--------------|----------------------------------------------------------------------|
| `collectionOptions`| `CollectionOptions`| —            | Параметры аналогичны `db.collection()`                               |
| `mergeOptions?`    | `MergeOptions`     | —            | Параметры для [deepmerge](https://npmjs.com/package/deepmerge)       |

**Пример**

Исходное определение таблицы `books` (файл `books.ts`):

```ts
export default {
  name: 'books',
  fields: [{ name: 'title', type: 'string' }],
};
```

Расширение определения таблицы `books` (файл `books.extend.ts`):

```ts
import { extend } from '@nocobase/database';

// Расширяем существующую конфигурацию
export default extend({
  name: 'books',
  fields: [{ name: 'price', type: 'number' }],
});
```

Если оба файла будут загружены через `import()`, после применения `extend()` таблица `books` будет содержать два поля: `title` и `price`.

Этот метод особенно полезен при расширении структуры таблиц, уже определённых в существующем плагине.

---

## Встроенные события

Следующие события вызываются на соответствующих этапах жизненного цикла базы данных. Подписаться на них можно с помощью метода `on()`, чтобы выполнять определённые действия и удовлетворять бизнес-требования.

### `'beforeSync'` / `'afterSync'`

События, вызываемые до или после синхронизации новой конфигурации структуры таблицы (полей, индексов и т.д.) с базой данных. Обычно срабатывают при вызове `collection.sync()` (внутренний вызов) — используются для логической обработки специальных полей или расширений.

**Сигнатура**

```ts
on(eventName: `${string}.beforeSync` | 'beforeSync' | `${string}.afterSync` | 'afterSync', listener: SyncListener): this
```

**Типы**

```ts
import type { SyncOptions, HookReturn } from 'sequelize/types';

type SyncListener = (options?: SyncOptions) => HookReturn;
```

**Пример**

```ts
const users = db.collection({
  name: 'users',
  fields: [{ type: 'string', name: 'username' }],
});

// Событие перед синхронизацией всех таблиц
db.on('beforeSync', async (options) => {
  // выполнить какие-то действия
});

// Событие после синхронизации таблицы "users"
db.on('users.afterSync', async (options) => {
  // выполнить какие-то действия
});

await users.sync();
```

---

### `'beforeValidate'` / `'afterValidate'`

Перед созданием или обновлением данных выполняется валидация на основе правил, заданных в коллекции. Соответствующие события срабатывают до и после этой валидации. Вызываются при вызове `repository.create()` или `repository.update()`.

**Сигнатура**

```ts
on(eventName: `${string}.beforeValidate` | 'beforeValidate' | `${string}.afterValidate` | 'afterValidate', listener: ValidateListener): this
```

**Типы**

```ts
import type { ValidationOptions } from 'sequelize/types/lib/instance-validator';
import type { HookReturn } from 'sequelize/types';
import type { Model } from '@nocobase/database';

type ValidateListener = (
  model: Model,
  options?: ValidationOptions,
) => HookReturn;
```

**Пример**

```ts
db.collection({
  name: 'tests',
  fields: [
    {
      type: 'string',
      name: 'email',
      validate: {
        isEmail: true,
      },
    },
  ],
});

// Событие до валидации для всех моделей
db.on('beforeValidate', async (model, options) => {
  // выполнить какие-то действия
});

// Событие до валидации только для модели "tests"
db.on('tests.beforeValidate', async (model, options) => {
  // выполнить какие-то действия
});

// Событие после валидации для всех моделей
db.on('afterValidate', async (model, options) => {
  // выполнить какие-то действия
});

// Событие после валидации только для модели "tests"
db.on('tests.afterValidate', async (model, options) => {
  // выполнить какие-то действия
});

const repository = db.getRepository('tests');
await repository.create({
  values: {
    email: 'abc', // будет проверен на соответствие формату email
  },
});

// или
await repository.update({
  filterByTk: 1,
  values: {
    email: 'abc', // будет проверен на соответствие формату email
  },
});
```

### `'beforeCreate'` / `'afterCreate'`

События, вызываемые до или после создания одной записи данных. Срабатывают при вызове `repository.create()`.

**Сигнатура**

```ts
on(eventName: `${string}.beforeCreate` | 'beforeCreate' | `${string}.afterCreate` | 'afterCreate', listener: CreateListener): this
```

**Типы**

```ts
import type { CreateOptions, HookReturn } from 'sequelize/types';
import type { Model } from '@nocobase/database';

export type CreateListener = (
  model: Model,
  options?: CreateOptions,
) => HookReturn;
```

**Пример**

```ts
db.on('beforeCreate', async (model, options) => {
  // выполнить какие-то действия
});

db.on('books.afterCreate', async (model, options) => {
  const { transaction } = options;
  const result = await model.constructor.findByPk(model.id, {
    transaction,
  });
  console.log(result);
});
```

---

### `'beforeUpdate'` / `'afterUpdate'`

События, вызываемые до или после обновления одной записи данных. Срабатывают при вызове `repository.update()`.

**Сигнатура**

```ts
on(eventName: `${string}.beforeUpdate` | 'beforeUpdate' | `${string}.afterUpdate` | 'afterUpdate', listener: UpdateListener): this
```

**Типы**

```ts
import type { UpdateOptions, HookReturn } from 'sequelize/types';
import type { Model } from '@nocobase/database';

export type UpdateListener = (
  model: Model,
  options?: UpdateOptions,
) => HookReturn;
```

**Пример**

```ts
db.on('beforeUpdate', async (model, options) => {
  // выполнить какие-то действия
});

db.on('books.afterUpdate', async (model, options) => {
  // выполнить какие-то действия
});
```

---

### `'beforeSave'` / `'afterSave'`

События, вызываемые до или после создания или обновления одной записи данных. Срабатывают при вызове `repository.create()` или `repository.update()`.

**Сигнатура**

```ts
on(eventName: `${string}.beforeSave` | 'beforeSave' | `${string}.afterSave` | 'afterSave', listener: SaveListener): this
```

**Типы**

```ts
import type { SaveOptions, HookReturn } from 'sequelize/types';
import type { Model } from '@nocobase/database';

export type SaveListener = (model: Model, options?: SaveOptions) => HookReturn;
```

**Пример**

```ts
db.on('beforeSave', async (model, options) => {
  // выполнить какие-то действия
});

db.on('books.afterSave', async (model, options) => {
  // выполнить какие-то действия
});
```

---

### `'beforeDestroy'` / `'afterDestroy'`

События, вызываемые до или после удаления одной записи данных. Срабатывают при вызове `repository.destroy()`.

**Сигнатура**

```ts
on(eventName: `${string}.beforeDestroy` | 'beforeDestroy' | `${string}.afterDestroy` | 'afterDestroy', listener: DestroyListener): this
```

**Типы**

```ts
import type { DestroyOptions, HookReturn } from 'sequelize/types';
import type { Model } from '@nocobase/database';

export type DestroyListener = (
  model: Model,
  options?: DestroyOptions,
) => HookReturn;
```

**Пример**

```ts
db.on('beforeDestroy', async (model, options) => {
  // выполнить какие-то действия
});

db.on('books.afterDestroy', async (model, options) => {
  // выполнить какие-то действия
});
```

---

### `'afterCreateWithAssociations'`

Событие, вызываемое после создания записи, содержащей иерархические (связанные) данные. Срабатывает при вызове `repository.create()`.

**Сигнатура**

```ts
on(eventName: `${string}.afterCreateWithAssociations` | 'afterCreateWithAssociations', listener: CreateWithAssociationsListener): this
```

**Типы**

```ts
import type { CreateOptions, HookReturn } from 'sequelize/types';
import type { Model } from '@nocobase/database';

export type CreateWithAssociationsListener = (
  model: Model,
  options?: CreateOptions,
) => HookReturn;
```

**Пример**

```ts
db.on('afterCreateWithAssociations', async (model, options) => {
  // выполнить какие-то действия
});

db.on('books.afterCreateWithAssociations', async (model, options) => {
  // выполнить какие-то действия
});
```

---

### `'afterUpdateWithAssociations'`

Событие, вызываемое после обновления записи, содержащей иерархические (связанные) данные. Срабатывает при вызове `repository.update()`.

**Сигнатура**

```ts
on(eventName: `${string}.afterUpdateWithAssociations` | 'afterUpdateWithAssociations', listener: UpdateWithAssociationsListener): this
```

**Типы**

```ts
import type { UpdateOptions, HookReturn } from 'sequelize/types';
import type { Model } from '@nocobase/database';

export type UpdateWithAssociationsListener = (
  model: Model,
  options?: UpdateOptions,
) => HookReturn;
```

**Пример**

```ts
db.on('afterUpdateWithAssociations', async (model, options) => {
  // выполнить какие-то действия
});

db.on('books.afterUpdateWithAssociations', async (model, options) => {
  // выполнить какие-то действия
});
```

---

### `'afterSaveWithAssociations'`

Событие, вызываемое после создания или обновления записи, содержащей иерархические (связанные) данные. Срабатывает при вызове `repository.create()` или `repository.update()`.

**Сигнатура**

```ts
on(eventName: `${string}.afterSaveWithAssociations` | 'afterSaveWithAssociations', listener: SaveWithAssociationsListener): this
```

**Типы**

```ts
import type { SaveOptions, HookReturn } from 'sequelize/types';
import type { Model } from '@nocobase/database';

export type SaveWithAssociationsListener = (
  model: Model,
  options?: SaveOptions,
) => HookReturn;
```

**Пример**

```ts
db.on('afterSaveWithAssociations', async (model, options) => {
  // выполнить какие-то действия
});

db.on('books.afterSaveWithAssociations', async (model, options) => {
  // выполнить какие-то действия
});
```

---

### `'beforeDefineCollection'`

Событие, вызываемое перед определением таблицы данных, например, при вызове `db.collection()`.

> **Примечание**: Это синхронное событие.

**Сигнатура**

```ts
on(eventName: 'beforeDefineCollection', listener: BeforeDefineCollectionListener): this
```

**Типы**

```ts
import type { CollectionOptions } from '@nocobase/database';

export type BeforeDefineCollectionListener = (
  options: CollectionOptions,
) => void;
```

**Пример**

```ts
db.on('beforeDefineCollection', (options) => {
  // выполнить какие-то действия
});
```

---

### `'afterDefineCollection'`

Событие, вызываемое после определения таблицы данных, например, при вызове `db.collection()`.

> **Примечание**: Это синхронное событие.

**Сигнатура**

```ts
on(eventName: 'afterDefineCollection', listener: AfterDefineCollectionListener): this
```

**Типы**

```ts
import type { Collection } from '@nocobase/database';

export type AfterDefineCollectionListener = (collection: Collection) => void;
```

**Пример**

```ts
db.on('afterDefineCollection', (collection) => {
  // выполнить какие-то действия
});
```

---

### `'beforeRemoveCollection'` / `'afterRemoveCollection'`

События, вызываемые до или после удаления таблицы данных из памяти, например, при вызове `db.removeCollection()`.

> **Примечание**: Это синхронные события.

**Сигнатура**

```ts
on(eventName: 'beforeRemoveCollection' | 'afterRemoveCollection', listener: RemoveCollectionListener): this
```

**Типы**

```ts
import type { Collection } from '@nocobase/database';

export type RemoveCollectionListener = (collection: Collection) => void;
```

**Пример**

```ts
db.on('beforeRemoveCollection', (collection) => {
  // выполнить какие-то действия
});

db.on('afterRemoveCollection', (collection) => {
  // выполнить какие-то действия
});
```
