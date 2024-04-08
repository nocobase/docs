# @nocobase/actions

## 概览

`@nocobase/actions` 封装了 CRUD 相关的常用方法，通过 [ResourceManager](./resourcer/resource-manager) 简单注册，即可给系统资源全局添加 CRUD 操作接口。

### 基本使用

```ts
import * as actions from `@nocobase/actions`;

const resourceManager = new ResourceManager({
  // ...options
});

resourceManager.registerActionHandlers(actions);
```

## 操作方法

### create

创建资源。 `POST /api/<resource>:create`.

```shell
curl "http://localhost:13000/api/users:create" \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"username": "admin"}'
```

#### 请求体

| 参数名          | 类型  | 描述                 |
| --------------- | ----- | -------------------- |
| `[key: string]` | `any` | 资源包含的字段键值对 |

### list

获取资源列表。`GET /api/<resource>:list`.

```shell
curl -X GET http://localhost:13000/api/users:list
```

#### 参数

| 参数名     | 类型       | 描述                                                    | 默认值 |
| ---------- | ---------- | ------------------------------------------------------- | ------ |
| `filter`   | `Filter`   | 过滤参数，参考 [Filter Operators](./database/operators) | -      |
| `fields`   | `string[]` | 要获取的字段                                            | -      |
| `except`   | `string[]` | 要排除的字段                                            | -      |
| `appends`  | `string[]` | 要附加的关系字段                                        | -      |
| `sort`     | `string[]` | 排序参数                                                | -      |
| `pagniate` | `boolean`  | 是否分页                                                | `true` |
| `page`     | `number`   | 当前页                                                  | `1`    |
| `pageSize` | `number`   | 每页数据条数                                            | `20`   |

### get

获取某个资源。`GET /api/<resource>:get`.

```shell
curl -X GET http://localhost:13000/api/users:get?filterByTk=1
```

#### 参数

| 参数名       | 类型               | 描述                                                    | 默认值 |
| ------------ | ------------------ | ------------------------------------------------------- | ------ |
| `filterByTk` | `number \| string` | 过滤主键值                                              | -      |
| `filter`     | `Filter`           | 过滤参数，参考 [Filter Operators](./database/operators) | -      |
| `fields`     | `string[]`         | 要获取的字段                                            | -      |
| `except`     | `string[]`         | 要排除的字段                                            | -      |
| `appends`    | `string[]`         | 要附加的关系字段                                        | -      |

### update

更新一个或多个资源。`PUT /api/<resource>:update`.

```shell
curl "http://localhost:13000/api/users:update?filterByTk=1" \
  -X PUT \
  -H "Content-Type: application/json" \
  -d '{"username": "admin"}'
```

#### 参数

| 参数名       | 类型               | 描述                                                    |
| ------------ | ------------------ | ------------------------------------------------------- |
| `filter`     | `Filter`           | 过滤参数，参考 [Filter Operators](./database/operators) |
| `filterByTk` | `number \| string` | 过滤主键值                                              |

注：参数中的 `filter` 和 `filterByTk` 至少提供一项。

#### 请求体

| 参数名          | 类型  | 描述                 |
| --------------- | ----- | -------------------- |
| `[key: string]` | `any` | 资源包含的字段键值对 |

### destroy

删除一个或多个资源。`DELETE /api/<resource>:destroy`

```shell
curl -X DELETE http://localhost:13000/api/users:destory?filterByTk=1
```

#### 参数

| 参数名       | 类型               | 描述                                                    |
| ------------ | ------------------ | ------------------------------------------------------- |
| `filter`     | `Filter`           | 过滤参数，参考 [Filter Operators](./database/operators) |
| `filterByTk` | `number \| string` | 过滤主键值                                              |

注：参数中的 `filter` 和 `filterByTk` 至少提供一项。

### firstOrCreate

获取或创建一个资源。`POST /api/<resource>:firstOrCreate`.

```shell
curl "http://localhost:13000/api/users:firstOrCreate?filterKeys[]=username" \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"username": "admin", "nickname": "Admin"}'
```

#### 参数

| 参数名       | 类型       | 描述                           |
| ------------ | ---------- | ------------------------------ |
| `filterKeys` | `string[]` | 请求体中用来查找已有资源的字段 |

#### 请求体

| 参数名          | 类型  | 描述                 |
| --------------- | ----- | -------------------- |
| `[key: string]` | `any` | 资源包含的字段键值对 |

### updateOrCreate

更新或创建一个资源。`POST /api/<resource>:updateOrCreate`.

```shell
curl "http://localhost:13000/api/users:updateOrCreate?filterKeys[]=username" \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"username": "admin", "nickname": "Admin"}'
```

#### 参数

| 参数名       | 类型       | 描述                           |
| ------------ | ---------- | ------------------------------ |
| `filterKeys` | `string[]` | 请求体中用来查找已有资源的字段 |

#### 请求体

| 参数名          | 类型  | 描述                 |
| --------------- | ----- | -------------------- |
| `[key: string]` | `any` | 资源包含的字段键值对 |

### move

移动资源，调整排序。通常用于页面中实现拖拽排序。`POST /api/<resource>:move`.

```shell
curl -X POST "http://localhost:13000/api/users:move?sourceId=1&targetId=2"
```

#### 参数

| 参数名        | 类型                       | 描述                                                 | 默认值 |
| ------------- | -------------------------- | ---------------------------------------------------- | ------ |
| `sourceId`    | `targetKey`                | 移动的元素ID                                         | -      |
| `targetId`    | `targetKey`                | 与移动元素交换位置的元素ID                           | -      |
| `sortField`   | `string`                   | 排序存储的字段名                                     | `sort` |
| `targetScope` | `string`                   | 排序的scope，一个 resource 可以按照不同的 scope 排序 | -      |
| `sticky`      | `boolean`                  | 是否置顶移动的元素                                   | -      |
| `method`      | `insertAfter` \| `prepend` | 插入类型，插入目标元素之前还是之后                   | -      |

### set

设置资源的关联对象。`POST /api/<resource.association>:set`.

```shell
curl "http://localhost:13000/api/users.roles:set" \
  -X POST \
  -H "Content-Type: application/json" \
  -d '["admin", "member"]'
```

#### 请求体

- `TargetKey | TargetKey[]` - 关联对象主键值数组。

### add

添加资源的关联对象。`POST /api/<resource.association>:add`.

```shell
curl "http://localhost:13000/api/users.roles:add" \
  -X POST \
  -H "Content-Type: application/json" \
  -d '["admin"]'
```

#### 请求体

- `TargetKey | TargetKey[]` - 关联对象主键值数组。

### remove

移除资源的关联对象。`POST /api/<resource.association>:remove`.

```shell
curl "http://localhost:13000/api/users.roles:remove" \
  -X POST \
  -H "Content-Type: application/json" \
  -d '["admin"]'
```

#### 请求体

- `TargetKey | TargetKey[]` - 关联对象主键值数组。

### toggle

切换资源的关联对象，存在的移除，不存在的添加。`POST /api/<resource.association>:toggle`.

```shell
curl "http://localhost:13000/api/users.roles:toggle" \
  -X POST \
  -H "Content-Type: application/json" \
  -d '["admin", "member"]'
```

#### 请求体

- `TargetKey | TargetKey[]` - 关联对象主键值数组。
