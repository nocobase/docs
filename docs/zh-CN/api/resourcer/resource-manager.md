# ResourceManager

## 概览

`ResourceManager` 是 NocoBase 的资源管理模块，用于定义资源和给资源注册操作方法。

## 类方法

### `define()`

定义资源。

```ts
app.resourceManager.define({
  name: 'auth',
  actions: {
    check: async (ctx, next) => {
      // ...
      await next();
    },
  },
});
```

#### 签名

- `define(options: ResourceOptions): Resource`

#### 类型

```ts
export interface ResourceOptions {
  name: string;
  type?: ResourceType;
  actions?: {
    [key: string]: ActionType;
  };
  only?: Array<ActionName>;
  except?: Array<ActionName>;
  middleware?: MiddlewareType;
  middlewares?: MiddlewareType;
}

export type ResourceType =
  | 'single'
  | 'hasOne'
  | 'hasMany'
  | 'belongsTo'
  | 'belongsToMany';

export type ActionType = HandlerType | ActionOptions;
export type HandlerType = (
  ctx: ResourcerContext,
  next: () => Promise<any>,
) => any;
export interface ActionOptions {
  values?: any;
  fields?: string[];
  appends?: string[];
  except?: string[];
  whitelist?: string[];
  blacklist?: string[];
  filter?: FilterOptions;
  sort?: string[];
  page?: number;
  pageSize?: number;
  maxPageSize?: number;
  middleware?: MiddlewareType;
  middlewares?: MiddlewareType;
  handler?: HandlerType;
  [key: string]: any;
}
```

#### 详细信息

##### ResourceOptions

| 属性          | 类型                                           | 描述             | 默认值   |
| ------------- | ---------------------------------------------- | ---------------- | -------- |
| `name`        | `string`                                       | 资源名称         | -        |
| `type`        | `ResourceType`                                 | 资源类型         | `single` |
| `actions`     | [`{ [key: string]: ActionType }`](#actiontype) | 操作             | -        |
| `only`        | `ActionName[]`                                 | `actions` 白名单 | -        |
| `except`      | `ActionName[]`                                 | `actions` 黑名单 | -        |
| `middleware`  | `MiddlewareType`                               | 中间件           | -        |
| `middlewares` | `MiddlewareType`                               | 中间件           | -        |

##### ActionType

操作方法有两种类型：

- `HandlerType`

这种类型是通过中间件的方式直接定义操作方法。示例：

```ts
app.resourceManager.define({
  name: 'users',
  actions: {
    updateProfile: async (ctx, next) => {
      // ...
      await next();
    },
  },
});
```

- `ActionOptions`

这种类型主要用于覆盖某个已有操作的请求参数。示例：

```ts
app.resourceManager.define({
  name: 'users',
  actions: {
    list: {
      fields: [],
      filter: {},
      // ...
    },
  },
});
```

| 参数名          | 类型             | 描述                                                     |
| --------------- | ---------------- | -------------------------------------------------------- |
| `values`        | `any`            | 操作请求默认值                                           |
| `filter`        | `Filter`         | 过滤参数，参考 [Filter Operators](../database/operators) |
| `fields`        | `string[]`       | 要获取的字段                                             |
| `except`        | `string[]`       | 要排除的字段                                             |
| `appends`       | `string[]`       | 要附加的关系字段                                         |
| `whitelist`     | `string[]`       | 字段白名单                                               |
| `blacklist`     | `string[]`       | 字段黑名单                                               |
| `sort`          | `string[]`       | 排序参数                                                 |
| `page`          | `number`         | 当前页                                                   |
| `pageSize`      | `number`         | 每页数据条数                                             |
| `maxPageSize`   | `number`         | 最大数据条数                                             |
| `middleware`    | `MiddlewareType` | 中间件                                                   |
| `middlewares`   | `MiddlewareType` | 中间件                                                   |
| `handler`       | `HandlerType`    | 当前操作执行的方法                                       |
| `[key: string]` | `any`            | 其他扩展配置                                             |

### `registerActionHandlers()`

注册操作方法。

#### 签名

- `registerActionHandler(name: ActionName, handler: HandlerType)`

#### 类型

```ts
export type DefaultActionType =
  | 'list'
  | 'create'
  | 'get'
  | 'update'
  | 'destroy'
  | 'set'
  | 'add'
  | 'remove';
export type ActionName = DefaultActionType | Omit<string, DefaultActionType>;

export type HandlerType = (
  ctx: ResourcerContext,
  next: () => Promise<any>,
) => any;
```

#### 详细信息

| 参数名    | 类型          | 描述                                                                                                          |
| --------- | ------------- | ------------------------------------------------------------------------------------------------------------- |
| `name`    | `ActionName`  | 操作名称。<br />1. 普通字符串形式，给所有资源注册操作。<br /> 2. `<resource>:<action>` 形式给特定资源注册操作 |
| `handler` | `HandlerType` | 操作中间件                                                                                                    |

### `isDefined()`

检查资源是否定义过。

#### 签名

- `isDefined(name: string)`

#### 详细信息

| 参数名 | 类型     | 描述     |
| ------ | -------- | -------- |
| `name` | `string` | 资源名称 |

### `import()`

载入指定目录下的资源配置。

```ts
// ./resources/demo.ts
export default {
  name: 'demo',
  actions: {
    async list(ctx, next) {
      // ...
      await next();
    },
  },
};

const resourceMangaer = new ResourceManager();
await resourceManager.import({
  directory: path.resolve(__dirname, 'resources'),
});
```

#### 签名

- `import(options: ImportOptions): Promise<Map<string, Resource>>`

#### 类型

```ts
export interface ImportOptions {
  directory: string;
  extensions?: string[];
}
```

#### 详细信息

| 属性         | 类型       | 描述             | 默认值                 |
| ------------ | ---------- | ---------------- | ---------------------- |
| `directory`  | `string`   | 配置目录路径     | -                      |
| `extensions` | `string[]` | 可选，文件扩展名 | `['js', 'ts', 'json']` |

### `use()`

添加 `ResourceMangaer` 中间件。

```ts
resourceManager.use(async () => {
  return async function (ctx, next) {
    // ...
    await next();
  };
});
```

#### 签名

- `use(middlewares: HandlerType | HandlerType[], options: ToposortOptions = {})`

#### 详细信息

参考[中间件](../../development/server/middleware)

### `middleware()`

`ResourceManager` 中间件，解析请求参数 (参考 [ctx.action](./action.md))，执行操作方法。
