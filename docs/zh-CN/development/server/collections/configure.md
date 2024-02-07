# 如何配置数据表？

NocoBase 有三种方式配置数据表：

<img src="./cm.svg" style="max-width: 800px;" />

## 通过界面配置数据表

业务数据一般建议使用界面配置，NocoBase 平台提供了两种界面配置数据表

### 常规的表格界面

<img src="./table.jpg" style="max-width: 800px;" />

### 图形化配置界面

<img src="./graph.jpg" style="max-width: 800px;" />

## 在插件代码里定义

在插件里，自定义的数据表必须放在插件的 `src/server/collections/*.ts` 目录下，内容如下：

```ts
import { defineCollection } from '@nocobase/database';

export default defineCollection({
  name: 'examples',
});
```

扩展已有 collection 的配置，使用 `extendCollection()`

```ts
import { extendCollection } from '@nocobase/database';

export default extendCollection({
  name: 'examples',
});
```

相关 API 参考

- [defineCollection()](/api/database#definecollection)
- [extendCollection()](/api/database#extendcollection)

:::info{title="提示"}
在插件里配置的 collection，插件激活时自动与数据库同步，生成相对应的数据表和字段。如果插件已经激活，需要通过升级命令 `yarn nocobase upgrade` 来处理数据表的同步问题。
:::

## 通过 REST API 管理数据表

第三方还可以通过 HTTP 接口管理数据表（需要开放权限）

### Collections

```bash
GET     /api/collections
POST    /api/collections
GET     /api/collections/<collectionName>
PUT     /api/collections/<collectionName>
DELETE  /api/collections/<collectionName>
```

### Collection fields

```bash
GET     /api/collections/<collectionName>/fields
POST    /api/collections/<collectionName>/fields
GET     /api/collections/<collectionName>/fields/<fieldName>
PUT     /api/collections/<collectionName>/fields/<fieldName>
DELETE  /api/collections/<collectionName>/fields/<fieldName>
```
