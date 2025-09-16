# HasManyRepository (Репозиторий связи "один ко многим")

`HasManyRepository` - это репозиторий для работы со связями типа "один ко многим" (`HasMany`).

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
async destroy(options?: TK | DestroyOptions): Promise<M>
```

### `add()`

Добавление связей между объектами.

```typescript
async add(options: TargetKey | TargetKey[] | AssociatedOptions)
```

Параметры:
- `tk` - идентификатор связанного объекта (может быть массивом)
- Поддержка транзакций

### `remove()`

Удаление связи с указанными объектами.

```typescript
async remove(options: TargetKey | TargetKey[] | AssociatedOptions)
```

Параметры аналогичны методу `add()`.

### `set()`

Установка связанных объектов для текущей связи.

```typescript
async set(options: TargetKey | TargetKey[] | AssociatedOptions)
```

Параметры аналогичны методу `add()`.

