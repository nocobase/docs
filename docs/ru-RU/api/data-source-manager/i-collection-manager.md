# ICollectionManager (Интерфейс менеджера коллекций)

Интерфейс `ICollectionManager` используется для управления экземплярами `Collection` в источниках данных.

## API методы

### registerFieldTypes()

Регистрирует типы полей в коллекции.

```typescript
registerFieldTypes(types: Record<string, any>): void
```

### registerFieldInterfaces()

Регистрирует интерфейсы для коллекции.

```typescript
registerFieldInterfaces(interfaces: Record<string, any>): void
```

### registerCollectionTemplates()

Регистрирует шаблоны коллекций.

```typescript
registerCollectionTemplates(templates: Record<string, any>): void
```

### registerModels()

Регистрирует модели данных.

```typescript
registerModels(models: Record<string, any>): void
```

### registerRepositories()

Регистрирует репозитории данных.

```typescript
registerRepositories(repositories: Record<string, any>): void
```

### getRegisteredRepository()

Получает экземпляр зарегистрированного репозитория.

```typescript
getRegisteredRepository(key: string): IRepository
```

### defineCollection()

Определяет новую коллекцию.

```typescript
defineCollection(options: CollectionOptions): ICollection
```

### extendCollection()

Изменяет свойства существующей коллекции.

```typescript
extendCollection(collectionOptions: CollectionOptions, mergeOptions?: MergeOptions): ICollection
```

### hasCollection()

Проверяет существование коллекции.

```typescript
hasCollection(name: string): boolean
```

### getCollection()

Получает экземпляр коллекции.

```typescript
getCollection(name: string): ICollection
```

### getCollections()

Получает все экземпляры коллекций.

```typescript
getCollections(): Array<ICollection>
```

### getRepository()

Получает экземпляр репозитория.

```typescript
getRepository(name: string, sourceId?: string | number): IRepository
```

### sync()

Синхронизирует источник данных (логика реализуется в подклассах).

```typescript
sync(): Promise<void>
```

Этот интерфейс предоставляет полный набор методов для управления коллекциями данных, их типами полей, интерфейсами, шаблонами, моделями и репозиториями в системе NocoBase.
