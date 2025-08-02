# BelongsToManyRepository (Репозиторий связи "многие ко многим")

`BelongsToManyRepository` - это репозиторий для работы со связями типа "многие ко многим" (`BelongsToMany`).

В отличие от других типов связей, связь "многие ко многим" требует наличия промежуточной таблицы. В NocoBase эта таблица может создаваться автоматически или указываться явно при определении связи.

## Методы класса

### `find()`

Поиск связанных объектов.

```typescript
async find(options?: FindOptions): Promise<M[]>
```

Параметры запроса аналогичны [`Repository.find()`](../repository.md#find).

### `findOne()`

Поиск одного связанного объекта.

```typescript
async findOne(options?: FindOneOptions): Promise<M>
```

### `count()`

Получение количества записей, соответствующих условиям.

```typescript
async count(options?: CountOptions)
```

### `findAndCount()`

Поиск данных с одновременным получением их количества.

```typescript
async findAndCount(options?: FindAndCountOptions): Promise<[any[], number]>
```

### `create()`

Создание связанных объектов.

```typescript
async create(options?: CreateOptions): Promise<M>
```

### `update()`

Обновление связанных объектов по условиям.

```typescript
async update(options?: UpdateOptions): Promise<M>
```

### `destroy()`

Удаление связанных объектов.

```typescript
async destroy(options?: TargetKey | TargetKey[] | DestroyOptions): Promise<Boolean>
```

### `add()`

Добавление новых связанных объектов.

```typescript
async add(
  options: TargetKey | TargetKey[] | PrimaryKeyWithThroughValues | PrimaryKeyWithThroughValues[] | AssociatedOptions
): Promise<void>
```

Можно передавать:
- `targetKey` связанного объекта
- `targetKey` вместе со значениями полей промежуточной таблицы

**Пример:**
```typescript
// Просто ID
PostTagRepository.add([t1.id, t2.id]);

// С данными промежуточной таблицы
PostTagRepository.add([
  [t1.id, { tagged_at: '123' }],
  [t2.id, { tagged_at: '456' }],
]);
```

### `set()`

Установка связанных объектов.

```typescript
async set(
  options: TargetKey | TargetKey[] | PrimaryKeyWithThroughValues | PrimaryKeyWithThroughValues[] | AssociatedOptions,
): Promise<void>
```

Параметры аналогичны методу `add()`.

### `remove()`

Удаление связи с указанными объектами.

```typescript
async remove(options: TargetKey | TargetKey[] | AssociatedOptions)
```

### `toggle()`

Переключение состояния связи.

Полезно для сценариев типа "добавить/удалить из избранного".

```typescript
async toggle(options: TargetKey | { tk?: TargetKey; transaction?: Transaction }): Promise<void>
```

Метод автоматически проверяет наличие связи и либо добавляет, либо удаляет её.
