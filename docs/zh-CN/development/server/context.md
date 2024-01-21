# 请求和响应的上下文 - Context

Context 是 Koa 中处理用户请求中的一个对象，贯穿整个请求生命周期。一般在 Middleware、Action 中使用，简称为 ctx。

在中间件中使用

```ts
app.use(async (ctx, next) => {});
app.resourceManager.use(async (ctx, next) => {});
```

在资源操作中使用

```ts
resourceManager.registerActionHandlers({
  async create(ctx, next) {},
});

resourceManager.define({
  name: 'users',
  actions: {
    async create(ctx, next) {},
  },
});
```

## 常用的 API

### ctx.action

#### action.actionName

#### action.resourceName

#### action.sourceId

#### action.params

#### action.mergeParams()

### ctx.app

### ctx.getCurrentLocale()

### ctx.getBearerToken()

### ctx.i18n

### ctx.withoutDataWrapping

