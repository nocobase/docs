# 配置资源

Resource 是一种用于描述资源和操作的协议

## 参数说明

```ts
interface ResourceOptions {
  name: string;
  type?: string;
  actions?: any;
  middlewares?: any;
}
```

### `name`

在 NocoBase 里，资源（resource）有两种表达方式：

- `<collection>`
- `<collection>.<association>`

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

### `actions`

资源的操作

```ts
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

### `middlewares`
