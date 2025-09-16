# Коллекция (Collection)

## Обзор

Класс `Collection` используется для определения модели данных в системе, включая имя модели, поля, индексы, связи и другую информацию. Обычно вызывается через метод `collection` экземпляра `Database`.

```javascript
const { Database } = require('@nocobase/database')

// Создание экземпляра базы данных
const db = new Database({...});

// Определение модели данных
db.collection({
  name: 'users',
  fields: [
    // Скалярное поле
    {
      name: 'name',
      type: 'string',
    },

    // Связь
    {
      name: 'profile',
      type: 'hasOne' // Также 'hasMany', 'belongsTo', 'belongsToMany'
    }
  ],
});
```

## Конструктор

**Сигнатура**
```typescript
constructor(options: CollectionOptions, context: CollectionContext)
```

**Параметры**

| Параметр             | Тип                          | По умолчанию | Описание                                                                 |
|----------------------|------------------------------|--------------|--------------------------------------------------------------------------|
| `options.name`       | `string`                     | -            | Идентификатор коллекции                                                 |
| `options.tableName`  | `string`                     | -            | Имя таблицы в БД (если не указано, используется `options.name`)         |
| `options.fields`     | `FieldOptions[]`             | -            | Определение полей                                                       |
| `options.model`      | `string \| ModelStatic<Model>`| -            | Тип модели Sequelize                                                    |
| `options.repository` | `string \| RepositoryType`   | -            | Тип репозитория данных                                                  |
| `options.sortable`   | `string \| boolean \| object`| -            | Настройка сортируемых полей                                             |
| `options.autoGenId`  | `boolean`                    | `true`       | Автогенерация первичного ключа                                          |
| `context.database`   | `Database`                   | -            | Экземпляр базы данных                                                   |

**Пример**
```typescript
const posts = new Collection(
  {
    name: 'posts',
    fields: [
      { type: 'string', name: 'title' },
      { type: 'double', name: 'price' },
    ],
  },
  { database: db } // Существующий экземпляр БД
);
```

## Свойства экземпляра

- `options` - Исходные параметры конфигурации таблицы
- `context` - Контекст (экземпляр базы данных)
- `name` - Имя таблицы данных
- `db` - Экземпляр базы данных
- `filterTargetKey` - Имя поля первичного ключа
- `isThrough` - Является ли промежуточной таблицей
- `model` - Соответствующий тип модели Sequelize
- `repository` - Экземпляр репозитория данных

## Методы работы с полями

### `getField()`
Получить поле по имени.

```typescript
getField(name: string): Field
```

### `setField()`
Установить поле.

```typescript 
setField(name: string, options: FieldOptions): Field
```

### `setFields()`
Установить несколько полей.

```typescript
setFields(fields: FieldOptions[], resetFields = true): Field[]
```

### `removeField()`
Удалить поле.

```typescript
removeField(name: string): void | Field
```

### `resetFields()`
Сбросить все поля.

```typescript 
resetFields(): void
```

### `hasField()`
Проверить наличие поля.

```typescript
hasField(name: string): boolean
```

### `findField()`
Найти поле по условию.

```typescript
findField(predicate: (field: Field) => boolean): Field | undefined
```

### `forEachField()`
Итерироваться по полям.

```typescript
forEachField(callback: (field: Field) => void): void
```

## Методы работы с индексами

### `addIndex()`
Добавить индекс.

```typescript
addIndex(index: string | string[] | object)
```

### `removeIndex()`
Удалить индекс.

```typescript
removeIndex(fields: string[])
```

## Методы работы с таблицей

### `remove()`
Удалить таблицу.

```typescript
remove(): void
```

## Методы работы с БД

### `sync()`
Синхронизировать таблицу с БД.

```typescript
sync(): Promise<void>
```

### `existsInDb()`
Проверить существование таблицы в БД.

```typescript
existsInDb(options?: Transactionable): Promise<boolean>
```

### `removeFromDb()`
Удалить таблицу из БД.

```typescript
removeFromDb(): Promise<void>
```
