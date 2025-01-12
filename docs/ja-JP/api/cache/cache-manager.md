# CacheManager

## 概要

CacheManager は <a href="https://github.com/node-cache-manager/node-cache-manager" target="_blank">node-cache-manager</a> をベースにしており、NocoBase に Cache モジュール管理機能を提供します。組み込みの Cache タイプは以下の通りです。

- memory - node-cache-manager がデフォルトで提供する lru-cache
- redis - node-cache-manager-redis-yet がサポートする関連機能

その他のタイプは API を通じて拡張登録が可能です。

### 概念の説明

- **Store**: キャッシュ方法を定義し、キャッシュを作成するファクトリメソッドやその他の関連設定を含みます。各キャッシュ方法には一意の識別子があり、登録時に提供されます。
  組み込みの2つのキャッシュ方法の一意の識別子はそれぞれ `memory` と `redis` です。

- **Store ファクトリメソッド**: `node-cache-manager` および関連拡張パッケージが提供する、キャッシュを作成するためのメソッドです。例えば、`node-cache-manager` がデフォルトで提供する `'memory'`、`node-cache-manager-redis-yet` が提供する `redisStore` などです。つまり、`node-cache-manager` の `caching` メソッドの最初のパラメータです。

- **Cache**: NocoBase がカプセル化したクラスで、キャッシュを使用するための関連メソッドを提供します。実際にキャッシュを使用する際に操作するのは `Cache` のインスタンスで、各 `Cache` インスタンスには一意の識別子があり、異なるモジュールの名前空間として区別することができます。

## クラスメソッド

### `constructor()`

#### シグネチャ

- `constructor(options?: CacheManagerOptions)`

#### タイプ

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
  // グローバル設定
  [key: string]: any;
};
```

#### 詳細

##### CacheManagerOptions

| プロパティ      | タイプ                           | 説明                                                                                                                                                                                                                                  |
| --------------- | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `defaultStore`  | `string`                       | デフォルトの Cache タイプの一意の識別子                                                                                                                                                                                               |
| `stores`        | `Record<string, StoreOptions>` | Cache タイプを登録し、key は Cache タイプの一意の識別子、値は Cache タイプの登録方法とグローバル設定を含むオブジェクトです。<br />`node-cache-manager` では、キャッシュを作成するメソッドは `await caching(store, config)` です。ここで提供するオブジェクトは [`StoreOptions`](#storeoptions) です |

##### StoreOptions

| プロパティ      | タイプ                                   | 説明                                                                                                     |
| --------------- | ---------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `store`         | `memory` \| `FactoryStore<Store, any>` | store ファクトリメソッド, caching の最初のパラメータに対応します                                                                 |
| `close`         | `(store: Store) => Promise<void>`      | オプション。Redis などの接続が必要なミドルウェアの場合、接続を閉じるコールバックメソッドを提供する必要があります。パラメータは store ファクトリメソッドが返すオブジェクトです |
| `[key: string]` | `any`                                  | その他の store グローバル設定、caching の2番目のパラメータに対応します                                                             |

#### デフォルト `options`

```ts
import { redisStore, RedisStore } from 'cache-manager-redis-yet';

const defaultOptions: CacheManagerOptions = {
  defaultStore: 'memory',
  stores: {
    memory: {
      store: 'memory',
      // グローバル設定
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

`options` パラメータはデフォルトの options とマージされます。デフォルトの options パラメータに既に含まれている内容は省略できます。例えば：

```ts
const cacheManager = new CacheManager({
  stores: {
    defaultStore: 'redis',
    redis: {
      // redisStore はデフォルトの options で既に提供されているため、redisStore の設定のみを提供します。
      url: 'redis://localhost:6379',
    },
  },
});
```

### `registerStore()`

新しいキャッシュ方法を登録します。参考：

```ts
import { redisStore } from 'cache-manager-redis-yet';

cacheManager.registerStore({
  // store の一意の識別子
  name: 'redis',
  // store を作成するファクトリメソッド
  store: redisStore,
  // store 接続を閉じる
  close: async (redis: RedisStore) => {
    await redis.client.quit();
  },
  // グローバル設定
  url: 'xxx',
});
```

#### シグネチャ

- `registerStore(options: { name: string } & StoreOptions)`

### `createCache()`

キャッシュを作成します。参考：

```ts
await cacheManager.createCache({
  name: 'default', // cache の一意の識別子
  store: 'memory', // store の一意の識別子
  prefix: 'mycache', // キャッシュ key に自動的に 'mycache:' プレフィックスを追加します。オプション
  // その他の store 設定, カスタム設定は store のグローバル設定とマージされます
  max: 2000,
});
```

#### シグネチャ

- `createCache(options: { name: string; prefix?: string; store?: string; [key: string]: any }): Promise<Cache>`

#### 詳細

##### options

| プロパティ      | タイプ     | 説明                          |
| --------------- | ---------- | ----------------------------- |
| `name`          | `string` | cache の一意の識別子                |
| `store`         | `string` | store の一意の識別子                |
| `prefix`        | `string` | オプション、キャッシュ key のプレフィックス           |
| `[key: string]` | `any`    | その他の store 関連のカスタム設定項 |

`store` を省略すると、`defaultStore` が使用されます。この場合、キャッシュ方法はシステムのデフォルトのキャッシュ方法に従って変更されます。

カスタム設定がない場合、グローバル設定によって作成され、現在のキャッシュ方法で共有されるデフォルトのキャッシュスペースが返されます。key の衝突を避けるために prefix を追加することを推奨します。

```ts
// デフォルトのキャッシュを使用し、グローバル設定を使用します
await cacheManager.createCache({ name: 'default', prefix: 'mycache' });
```

##### Cache

詳細は [Cache](./cache.md) を参照してください。

### `getCache()`

対応するキャッシュを取得します

```ts
cacheManager.getCache('default');
```

#### シグネチャ

- `getCache(name: string): Cache`

### `flushAll()`

すべてのキャッシュをリセットします

```ts
await cacheManager.flushAll();
```

### `close()`

すべてのキャッシュミドルウェアの接続を閉じます

```ts
await cacheManager.close();
```