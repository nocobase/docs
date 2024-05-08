# CacheManager

## Overview

CacheManager is based on [node-cache-manager](https://github.com/node-cache-manager/node-cache-manager) and provides caching module management for NocoBase. The built-in cache types are:

- **memory**: Provided by the default lru-cache of node-cache-manager.
- **redis**: Supported by node-cache-manager-redis-yet for Redis caching.

More types can be extended and registered through the API.

### Concepts

- **Store**: Defines a caching method, including a factory method for creating caches and other related configurations. Each caching method has a unique identifier provided during registration. The two built-in caching methods correspond to the unique identifiers `memory` and `redis`.

- **Store Factory Method**: Provided by `node-cache-manager` and related extension packages, used to create caches. Examples include `memory` provided by `node-cache-manager` by default, and `redisStore` provided by `node-cache-manager-redis-yet`. In this context, the object to be provided corresponds to [`StoreOptions`](#storeoptions), which is the first parameter of the `caching` method in `node-cache-manager`.

- **Cache**: A class encapsulated by NocoBase, providing methods related to cache usage. When actually using caching, operations are performed on instances of `Cache`. Each `Cache` instance has a unique identifier, which serves as a namespace for distinguishing different modules.

## Class Methods

### `constructor()`

#### Signature

- `constructor(options?: CacheManagerOptions)`

#### Type

```ts
export type CacheManagerOptions = Partial<{
  defaultStore: string;
  stores: {
    [storeType: string]: StoreOptions;
  };
}>;

type StoreOptions = {
  store?: 'memory' | FactoryStore<Store, any>;
  close?: (store: Store) => Promise<void>;
  // global config
  [key: string]: any;
};
```

#### Details

##### CacheManagerOptions

| Property       | Type                           | Description                                                                                                                                                          |
| -------------- | ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `defaultStore` | `string`                       | Unique identifier for the default cache type.                                                                                                                        |
| `stores`       | `Record<string, StoreOptions>` | Registers cache types. The key is the unique identifier for the cache type, and the value is an object containing the registration method and global configurations. |

##### StoreOptions

| Property        | Type                                   | Description                                                                                                                                                                                              |
| --------------- | -------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `store`         | `memory` \| `FactoryStore<Store, any>` | The store factory method, corresponding to the first parameter of the `caching` method.                                                                                                                  |
| `close`         | `(store: Store) => Promise<void>`      | Optional. For middleware that requires establishing a connection, such as Redis, provide a callback method for closing the connection. The parameter is the object returned by the store factory method. |
| `[key: string]` | `any`                                  | Other global configurations for the store, corresponding to the second parameter of the `caching` method.                                                                                                |

#### Default `options`

```ts
import { redisStore, RedisStore } from 'cache-manager-redis-yet';

const defaultOptions: CacheManagerOptions = {
  defaultStore: 'memory',
  stores: {
    memory: {
      store: 'memory',
      // global config
      max: 2000,
    },
    redis: {
      store: redisStore,
      close: async (redis: RedisStore) => {
        await redis.client.quit();
      },
    },
  },
};
```

The `options` parameter will be merged with the default options. Existing default options can be omitted. For example:

```ts
const cacheManager = new CacheManager({
  stores: {
    defaultStore: 'redis',
    redis: {
      // redisStore is already provided in the default options, so only need to provide redisStore configuration.
      url: 'redis://localhost:6379',
    },
  },
});
```

### `registerStore()`

Register a new caching method. Example:

```ts
import { redisStore } from 'cache-manager-redis-yet';

cacheManager.registerStore({
  // Unique identifier for the store
  name: 'redis',
  // Factory method for creating the store
  store: redisStore,
  // Callback method for closing the store connection
  close: async (redis: RedisStore) => {
    await redis.client.quit();
  },
  // Global configurations
  url: 'xxx',
});
```

#### Signature

- `registerStore(options: { name: string } & StoreOptions)`

### `createCache()`

Create a cache. Example:

```ts
await cacheManager.createCache({
  name: 'default', // Unique identifier for the cache
  store: 'memory', // Unique identifier for the store
  prefix: 'mycache', // Automatically adds the 'mycache:' prefix to cache keys, optional
  // Other store configurations, custom configurations that will be merged with global store configurations
  max: 2000,
});
```

#### Signature

- `createCache(options: { name: string; prefix?: string; store?: string; [key: string]: any }): Promise<Cache>`

#### Details

##### options

| Property        | Type     | Description                                        |
| --------------- | -------- | -------------------------------------------------- |
| `name`          | `string` | Unique identifier for the cache                    |
| `store`         | `string` | Unique identifier for the store                    |
| `prefix`        | `string` | Optional. Prefix automatically added to cache keys |
| `[key: string]` | `any`    | Other custom store configurations                  |

When `store` is omitted, the `defaultStore` will be used. In this case, the caching
