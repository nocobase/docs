# 配置插件的数据表

NocoBase 提供了许多插件用于各种数据源的数据表管理，但是插件的数据表并不适合暴露给这些插件管理。在插件里，自定义的数据表必须放在插件的 `src/server/collections/*.ts` 目录下，这些配置的数据表，在插件激活时自动与数据库同步，并生成相对应的数据表和字段。

:::warning
插件配置的数据表一般不会暴露给数据表管理插件管理，所以在数据表管理界面并不可见，但权限允许范畴内的 CRUD 等操作是允许的。
:::

## API 参考

### defineCollection

例如 `examples.ts`，内容如下：

```ts
import { defineCollection } from '@nocobase/server';

export default defineCollection({
  name: 'examples',
});
```

详情参考 [defineCollection()](/api/database#definecollection)

### extendCollection

扩展已有 collection 的配置，使用 `extendCollection()`

```ts
import { extendCollection } from '@nocobase/server';

export default extendCollection({
  name: 'examples',
});
```

详情参考 [extendCollection()](/api/database#extendcollection)

## 示例

- 待补充