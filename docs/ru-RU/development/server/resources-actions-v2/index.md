# 核心概念

## 资源 Resource

在 NocoBase 里，资源（resource）有两种表达方式：

- `<collection>`
- `<collection>.<association>`

<Alert>

- collection 是所有抽象数据的集合
- association 为 collection 的关联数据

</Alert>

示例

- `posts` 文章
- `posts.user` 文章用户
- `posts.tags` 文章标签

配置

```js
// 文章
{
  name: 'posts',
}
// 文章用户
{
  name: 'posts.user',
}
// 文章标签
{
  name: 'posts.tags',
}
```

## 操作 Action

以 `:<action>` 的方式表示资源操作

- `<collection>:<action>`
- `<collection>.<association>:<action>`

**示例**

- `posts:create` 创建文章
- `posts.user:get` 查看文章用户
- `posts.tags:add` 附加文章标签（将现有的标签与文章关联）

配置

```js
// 文章资源的增删改查配置
{
  name: 'posts',
  actions: {
    create: async (ctx, next) => {},
    get: async (ctx, next) => {},
    list: async (ctx, next) => {},
    update: async (ctx, next) => {},
    destroy: async (ctx, next) => {},
  },
}

// 文章用户
{
  name: 'posts.tags',
  actions: {
    create: async (ctx, next) => {},
    get: async (ctx, next) => {},
    list: async (ctx, next) => {},
    update: async (ctx, next) => {},
    destroy: async (ctx, next) => {},
    add: async (ctx, next) => {},
    remove: async (ctx, next) => {},
  },
}
```

## 如何请求资源

```bash
<GET|POST>   /api/<collection>:<action>
<GET|POST>   /api/<collection>:<action>/<filterByTk>
<GET|POST>   /api/<collection>/<sourceId>/<association>:<action>
<GET|POST>   /api/<collection>/<sourceId>/<association>:<action>/<filterByTk>
```

**示例**

posts 资源

```bash
POST  /api/posts:create
GET   /api/posts:list
GET   /api/posts:get/1
POST  /api/posts:update/1
POST  /api/posts:destroy/1
```

posts.comments 资源

```bash
POST  /api/posts/1/comments:create
GET   /api/posts/1/comments:list
GET   /api/posts/1/comments:get/1
POST  /api/posts/1/comments:update/1
POST  /api/posts/1/comments:destroy/1
```

posts.tags 资源

```bash
POST  /api/posts/1/tags:create
GET   /api/posts/1/tags:get
GET   /api/posts/1/tags:list
POST  /api/posts/1/tags:update
POST  /api/posts/1/tags:destroy
POST  /api/posts/1/tags:add
GET   /api/posts/1/tags:remove
```

## 资源定位

所有资源都通过 `filterByTk` 定位

- collection 资源，`filterByTk` 必须是唯一的
- association 资源，`filterByTk` 可能并不是唯一的，需要同时提供 `sourceId` 来定位。

例如 `tables.fields` 表示数据表的字段

```bash
GET   /api/tables/table1/fields/title
GET   /api/tables/table2/fields/title
```

table1 和 table2 都有 title 字段，title 在 table1 里是唯一的，但是其他表也可能有 title 字段
