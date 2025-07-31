# HasOneRepository (Репозиторий связи "один к одному")

## Обзор

`HasOneRepository` - это репозиторий для работы со связями типа "один к одному" (`HasOne`).

```typescript
// Определение коллекций
const User = db.collection({
  name: 'users',
  fields: [
    { type: 'hasOne', name: 'profile' },  // Связь один-к-одному
    { type: 'string', name: 'name' },
  ],
});

const Profile = db.collection({
  name: 'profiles',
  fields: [{ type: 'string', name: 'avatar' }],
});

// Создание пользователя
const user = await User.repository.create({
  values: { name: 'u1' },
});

// Получение репозитория связи
const userProfileRepository = User.repository
  .relation('profile')
  .of(user.get('id'));

// Или прямая инициализация
new HasOneRepository(User, 'profile', user.get('id'));
```

## Методы класса

### `find()`

Поиск связанного объекта.

```typescript
async find(options?: SingleRelationFindOption): Promise<Model<any> | null>
```

**Параметры:**
```typescript
interface SingleRelationFindOption extends Transactionable {
  fields?: Fields;    // Поля для выборки
  except?: Except;    // Исключаемые поля
  appends?: Appends;  // Дополнительные поля
  filter?: Filter;    // Условия фильтрации
}
```

**Пример:**
```typescript
const profile = await UserProfileRepository.find();
// Возвращает null, если связанный объект не существует
```

### `create()`

Создание связанного объекта.

```typescript
async create(options?: CreateOptions): Promise<Model>
```

**Пример:**
```typescript
const profile = await UserProfileRepository.create({
  values: { avatar: 'avatar1' },
});
```

### `update()`

Обновление связанного объекта.

```typescript
async update(options: UpdateOptions): Promise<Model>
```

**Пример:**
```typescript
const profile = await UserProfileRepository.update({
  values: { avatar: 'avatar2' },
});
```

### `remove()`

Удаление связи (без удаления самого объекта).

```typescript
async remove(options?: Transactionable): Promise<void>
```

**Пример:**
```typescript
await UserProfileRepository.remove();
```

### `destroy()`

Удаление связанного объекта.

```typescript
async destroy(options?: Transactionable): Promise<Boolean>
```

**Пример:**
```typescript
await UserProfileRepository.destroy();
```

### `set()`

Установка связанного объекта.

```typescript
async set(options: TargetKey | SetOption): Promise<void>
```

**Параметры:**
```typescript
interface SetOption extends Transactionable {
  tk?: TargetKey;  // Идентификатор связанного объекта
}
```

**Пример:**
```typescript
const newProfile = await Profile.repository.create({
  values: { avatar: 'avatar2' },
});

await UserProfileRepository.set(newProfile.get('id'));
```

Все методы поддерживают работу с транзакциями через параметр `transaction`. Если транзакция не передана, методы создают внутреннюю транзакцию автоматически.
