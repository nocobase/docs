# 配置资源和操作

最简单的 resource actions
带默认参数的 Action
使用全局 Action
Action 参数的多来源合并
内置 Actions 的用法

在 NocoBase 中，resource 是为 collection 服务的，已配置的 collections（包括 associations） 会自动转为相应的 resources。

## 自动转换

```ts
export class PluginSampleToResourcesServer extends Plugin {
  async load() {
    this.db.collection({
      name: 'posts',
      fields: [
        {
          type: 'hasMany',
          name: 'comments',
          target: 'comments',
        },
      ],
    });
    this.db.collection({
      name: 'comments',
    });
  }
}
```

以上示例的 `posts` 和 `posts.comments` 的接口如下：

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

NocoBase 的 HTTP API 是 REST API 的超集，标准的 CRUD API 也支持 RESTful 风格。

## 内置的操作

上面 collection 转为 resource 之后，之所以可以直接进行 CRUD 操作了，是因为内置了一些常用的操作

内置的全局操作，可用于 collection 或 association

- create
- get
- list
- update
- destroy
- move

内置的关联操作，仅用于 association

- set
- add
- remove
- toggle

内置 Actions 的用法参考 API 文档

## 自定义操作

### 全局操作

```ts
export class PluginSampleResourcerServer extends Plugin {
  async load() {
    this.resourcer.registerActions({
      import: async (ctx, next) => {},
      export: async (ctx, next) => {},
    });
  }
}
```

### 某资源的操作

```ts
export class PluginSampleResourcerServer extends Plugin {
  async load() {
    this.resourcer.registerActions({
      'posts:listPublished': async (ctx, next) => {},
    });
  }
}
```

## 自定义资源

如果有特殊需求，也可以显式的定义资源及相关操作

```ts
app.resourcer.define({
  name: 'posts',
  actions: {
    create: {},
    get: {},
    list: {},
    update: {},
    destroy: {},
  },
});
```
