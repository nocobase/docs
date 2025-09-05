# Менеджер кэширования (CacheManager)

## Обзор

CacheManager основан на [node-cache-manager](https://github.com/node-cache-manager/node-cache-manager) и предоставляет систему управления кэшированием для NocoBase. Встроенные типы кэша:

- **memory**: Использует стандартный lru-cache из node-cache-manager
- **redis**: Поддержка Redis через node-cache-manager-redis-yet

Дополнительные типы можно расширять и регистрировать через API.

### Основные понятия

- **Store (Хранилище)**: Определяет способ кэширования, включая фабричный метод для создания кэшей и другие настройки. Каждое хранилище имеет уникальный идентификатор.

- **Фабричный метод хранилища**: Методы из node-cache-manager для создания кэшей (например, `memory` или `redisStore`). Соответствует параметру [`StoreOptions`](#storeoptions).

- **Cache (Кэш)**: Класс NocoBase для работы с кэшем. Каждый экземпляр Cache имеет уникальный ID как пространство имен.

## Методы класса

### `constructor()`

#### Сигнатура
```ts
constructor(options?: CacheManagerOptions)
```

#### Типы
```ts
type CacheManagerOptions = {
  defaultStore?: string;
  stores?: {
    [storeType: string]: StoreOptions;
  };
};

type StoreOptions = {
  store?: 'memory' | FactoryStore<Store, any>;
  close?: (store: Store) => Promise<void>;
  [key: string]: any;
};
```

#### Параметры

##### CacheManagerOptions

| Параметр      | Тип                           | Описание                          |
|---------------|-------------------------------|-----------------------------------|
| `defaultStore`| `string`                      | ID хранилища по умолчанию         |
| `stores`      | `Record<string, StoreOptions>`| Регистрация типов хранилищ        |

##### StoreOptions

| Параметр     | Тип                                   | Описание                          |
|--------------|---------------------------------------|-----------------------------------|
| `store`      | `memory` \| `FactoryStore<Store, any>`| Фабричный метод хранилища         |
| `close`      | `(store: Store) => Promise<void>`     | Метод закрытия соединения         |
| `[key: string]` | `any`                              | Доп. настройки хранилища          |

#### Настройки по умолчанию
```ts
{
  defaultStore: 'memory',
  stores: {
    memory: {
      store: 'memory',
      max: 2000,
    },
    redis: {
      store: redisStore,
      close: async (redis) => {
        await redis.client.quit();
      },
    },
  },
}
```

Пример использования:
```ts
const cacheManager = new CacheManager({
  stores: {
    defaultStore: 'redis',
    redis: {
      url: 'redis://localhost:6379',
    },
  },
});
```

### `registerStore()`

Регистрация нового хранилища.

Пример:
```ts
cacheManager.registerStore({
  name: 'redis',
  store: redisStore,
  close: async (redis) => {
    await redis.client.quit();
  },
  url: 'xxx',
});
```

#### Сигнатура
```ts
registerStore(options: { name: string } & StoreOptions)
```

### `createCache()`

Создание экземпляра кэша.

Пример:
```ts
await cacheManager.createCache({
  name: 'default',
  store: 'memory', 
  prefix: 'mycache',
  max: 2000,
});
```

#### Сигнатура
```ts
createCache(options: { 
  name: string;
  prefix?: string;
  store?: string;
  [key: string]: any;
}): Promise<Cache>
```

#### Параметры

| Параметр | Тип      | Описание                          |
|----------|----------|-----------------------------------|
| `name`   | `string` | Уникальный ID кэша               |
| `store`  | `string` | ID хранилища (по умолчанию - defaultStore) |
| `prefix` | `string` | Префикс для ключей кэша          |
| `[key: string]` | `any` | Доп. настройки хранилища          |

## Использование кэша

После создания кэша можно использовать методы:
- `get(key)` - получение значения
- `set(key, value, ttl?)` - запись значения
- `del(key)` - удаление значения
- `reset()` - очистка всего кэша

Пример:
```ts
const cache = await cacheManager.createCache({name: 'myapp'});
await cache.set('user:1', {name: 'John'}, 3600);
const user = await cache.get('user:1');
```
