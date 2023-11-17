# CacheManager

## Overview

CacheManager is the cache management of Nocobase encapsulated based on <a href="https://github.com/node-cache-manager/node-cache-manager" target="_blank">node-cache-manager</a>. Integrated cache methods include:

- `memory` - `lru-cache` provided by default from `node-cache-manager`
- `redis` - provided by [`node-cache-manager-redis-yet`](https://github.com/node-cache-manager/node-cache-manager-redis-yet)

Additional cache methods can be registered through the API.

## Basic concept

### Store

Define a cache method, including the factory method for creating the cache and other related configurations. Each caching method has a unique name provided during registration. The names of the two integrated cache methods are `memory` and `redis`.

### Store factory method

Cache creation methods provided by `node-cache-manager` and related extension packages, such as `'memory'` provided default by `node-cache-manager` or the `redisStore` provided by `node-cache-manager-redis-yet`. This correspondings to the first parameter of the `caching` method in `node-cache-manager`.

### Cache

A class encapsulated by NocoBase that provides methods for using caching. Actual caching operations involve instances of the `Cache` class. Each instances of `Cache` has a unique name, serving as a namespace for module differentiation.

## Constructor

`constructor(options?: CacheManagerOptions)`

### Parameters

- `defaultStore` - `string`  
  Unique name of default cache method
- `stores` - `Object`  
  Registering cache methods, using the unique name of method as the key, paired with an object containing
  factory method and global configurations. In `node-cache-manager`, the cache creation method is `await caching(store, config)`. The required object is:

  ```ts
  {
    // Store factory method, Corresponding to the first parameter of the 'caching' method
    store: 'memory' | FactoryStore<Store, any>;
    // For cache method like Redis that requires connection setup,
    // provide a callback method to close the connection,
    // taking the object returned by the store factory method as a parameter
    close?: (store: Store) => Promise<void>;
    // Global configurations of store, corresponding to the second parameter of the 'caching' method
    [key: string]: any;
  }
  ```

### Default `options`

```ts
import { redisStore, RedisStore } from 'cache-manager-redis-yet';

const defaultOptions: CacheManagerOptions = {
  defaultStore: 'memory',
  stores: {
    memory: {
      store: 'memory',
      // Global configurations
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

The `options` parameter will be merged with the default options; existing content in the default options can be omitted, e.g.

```ts
const cacheManager = new CacheManager({
  stores: {
    defaultStore: 'redis',
    redis: {
      // redisStore is in default options
      // provide only its specific configuration.
      url: 'redis://localhost:6379',
    },
  },
});
```

## Methods

### `registerStore()`

Register a new cache method, for example:

```ts
import { redisStore } from 'cache-manager-redis-yet';

cacheManager.registerStore({
  // unique name
  name: 'redis',
  // factory method of store
  store: redisStore,
  // close the connection of store
  close: async (redis: RedisStore) => {
    await redis.client.quit();
  },
  // global configurations
  url: 'xxx',
  // ...
});
```

### `createCache()`

Create a cache, for example:

```ts
await cacheManager.createCache({
  name: 'default', // unique name of cache
  store: 'memory', // unique name of store
  prefix: 'mycache', // adds a 'mycache:' prefix to cache keys, optional
  // other custom configurations of store, will be merged with global configurations
  max: 2000,
});
```

When `store` is omitted, it will use `defaultStore`. In this case, the caching method will change along with the system's default caching method.

When no custom configuration is provided, it returns the default cache space created by global configuration, shared by the current cache method. It is recommended to include a prefix to avoid key conflicts.

```ts
// Use default cache method with global configurations
await cacheManager.createCache({ name: 'default', prefix: 'mycache' });
```

Usage of `Cache` refer to: [Cache](/api/cache/cache)

### `getCache()`

Get a cache.

```ts
cacheManager.getCache('default');
```

### `flushAll()`

Reset all cache spaces.

```ts
await cacheManager.flushAll();
```

### `close()`

Close the connections of all cache methods.

```ts
await cacheManager.close();
```
