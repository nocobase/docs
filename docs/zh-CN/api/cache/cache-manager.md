# CacheManager

## 概览

CacheManager 基于 <a href="https://github.com/node-cache-manager/node-cache-manager" target="_blank">node-cache-manager</a>, 为 NocoBase 提供 Cache 模块管理功能。内置的 Cache 类型为

- memory - 由 node-cache-manager 默认提供的 lru-cache
- redis - 由 node-cache-manager-redis-yet 支持相关功能

更多类型可通过 API 进行扩展注册。

## 基本概念

### Store

定义一种缓存方式，包含创建缓存的工厂方法，和其他相关配置。每种缓存方式都有一个唯一标识，在注册的时候提供。
内置的两种缓存方式对应的唯一标识即 `memory` 和 `redis`.

### Store 工厂方法

由 `node-cache-manager` 和相关扩展包提供，用于创建缓存的的方法。如 `node-cache-manager` 默认提供的 `'memory'`, `node-cache-manager-redis-yet` 提供的 `redisStore` 等。即 `node-cache-manager` 的 `caching` 方法的第一个参数。

### Cache

NocoBase 封装的类，提供了使用缓存的相关方法。实际使用缓存时操作的是 `Cache` 的实例，每个 `Cache` 实例有唯一的标识，可作为区分不同模块的命名空间。

## 构造函数

`constructor(options?: CacheManagerOptions)`

### 参数

- `defaultStore` - `string`  
  默认 Cache 类型的唯一标识
- `stores` - `Object`  
  注册 Cache 类型，key为 Cache 类型的唯一标识，值为包含 Cache 类型的注册方法和全局配置的对象。
  在 `node-cache-manager` 中，创建缓存的方法为 `await caching(store, config)`. 而在这里要提供的对象为

  ```ts
  {
    // store工厂方法, 对应 caching 第一个参数
    store: 'memory' | FactoryStore<Store, any>;
    // 如果是 Redis 等需要建立连接的中间件，需要提供一个关闭连接的回调方法，入参为store工厂方法返回的对象
    close?: (store: Store) => Promise<void>;
    // store 全局配置，对应 caching 第二个参数
    [key: string]: any;
  }
  ```

### 默认 `options`

```ts
import { redisStore, RedisStore } from 'cache-manager-redis-yet';

const defaultOptions: CacheManagerOptions = {
  defaultStore: 'memory',
  stores: {
    memory: {
      store: 'memory',
      // 全局配置
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

`options` 参数会和默认 options 合并，默认 options 参数已有内容可以缺省，例如：

```ts
const cacheManager = new CacheManager({
  stores: {
    defaultStore: 'redis',
    redis: {
      // redisStore已经在默认options中提供，只需要提供redisStore配置即可。
      url: 'redis://localhost:6379',
    },
  },
});
```

## 方法

### `registerStore()`

注册新的缓存方式，参考

```ts
import { redisStore } from 'cache-manager-redis-yet';

cacheManager.registerStore({
  // store唯一标识
  name: 'redis',
  // 创建store的工厂方法
  store: redisStore,
  // 关闭store连接
  close: async (redis: RedisStore) => {
    await redis.client.quit();
  },
  // 全局配置
  url: 'xxx',
});
```

### `createCache()`

创建缓存，参考

```ts
await cacheManager.createCache({
  name: 'default', // cache唯一标识
  store: 'memory', // store唯一标识
  prefix: 'mycache', // 自动给缓存key加上'mycache:'前缀，可选
  // 其他store配置, 自定义配置，会和store全局配置合并
  max: 2000,
});
```

`store` 省略时，将使用 `defaultStore` , 此时缓存方式会跟随系统默认缓存方式改变而改变。

没有自定义配置时，会返回由全局配置创建，当前缓存方式共享的默认缓存空间，推荐加上 prefix 避免 key 冲突。

```ts
// 使用默认缓存，使用全局配置
await cacheManager.createCache({ name: 'default', prefix: 'mycache' });
```

`Cache` 的使用方法参考: [Cache](/api/cache/cache)

### `getCache()`

获取对应的缓存

```ts
cacheManager.getCache('default');
```

### `flushAll()`

重置所有缓存

```ts
await cacheManager.flushAll();
```

### `close()`

关闭所有缓存中间件连接

```ts
await cacheManager.close();
```
