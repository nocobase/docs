# v0.16：2023-11-20

## 新特性

之前版本的 cache 可用性较差（仅支持 memory 缓存），v0.16 版本进行了重构，内置了 memory 和 redis 两种 store（缓存存储方式），也支持自定义存储方式，具体的使用方法请参考 [API 文档](https://docs-cn.nocobase.com/api/cache/cache-manager)。

## 不兼容的变化

### Node 最低版本更改为 18

Node v16 已经停止维护了，最低版本更改为 v18

```json
{
  "engines": {
    "node": ">=18"
  }
}
```

### 创建缓存方法变更

以前创建缓存通过 `createCache` 方法创建，该方法已废弃。

```ts
import { createCache } from '@nocobase/cache';

const cache = createCache();
```

新的缓存由 `CacheManager` 统一管理，通过 `app.cacheManager` 创建。

```ts
const cache = await app.cacheManager.createCache({
  name: 'memory', // 缓存唯一标识
  store: 'memory', // 缓存方式
  // 其他缓存配置
  max: 2000,
  ttl: 60 * 1000,
});
```

### 环境变量变更

以前的缓存环境变量配置需要配置一个 JSON 字符串作为配置参数。

```bash
CACHE_CONFIG={"storePackage":"cache-manager-fs-hash","ttl":86400,"max":1000}
```

新的环境变量：

```bash
# 默认缓存方式，值为缓存方式的唯一标识
CACHE_DEFAULT_STORE=memory
# 内存缓存项目最大数量
CACHE_MEMORY_MAX=2000
# Redis，可选
CACHE_REDIS_URL=redis://localhost:6379
```

## 完整更新记录

- refactor(cache): improve cache [`#3004`](https://github.com/nocobase/nocobase/pull/3004)
- fix: local storage base url [`#3063`](https://github.com/nocobase/nocobase/pull/3063)
- feat: show table definition [`#3061`](https://github.com/nocobase/nocobase/pull/3061)
- feat: mariadb support [`#3052`](https://github.com/nocobase/nocobase/pull/3052)
- fix(plugin-workflow): client minor fixes [`#3062`](https://github.com/nocobase/nocobase/pull/3062)
- chore: view inference [`#3060`](https://github.com/nocobase/nocobase/pull/3060)
- fix: sort by association collection [`#3058`](https://github.com/nocobase/nocobase/pull/3058)
- feat: node &gt;= 18 [`#3066`](https://github.com/nocobase/nocobase/pull/3066)
