# ACL

## 概览

`ACL` 是 NocoBase 用的权限管理模块，负责用户角色管理、权限注册和授权、权限策略判断和访问控制。

### 概念解释

- **资源** (`Resource`): 数据表，也可以注册自定义的资源，参考 [`@nocobase/resourcer`](../resourcer/resource-manager.md).
- **操作** (`Action`): 某个资源的操作接口，如创建、查看、更新、删除或其他自定义操作。参考 [`@nocobase/actions`](../actions).
- **策略** (`Strategy`): 配置角色的全局权限，如创建、查看、更新、删除、导入和导出等资源操作权限，以及配置用户界面等系统权限。
- **片段** (`Snippet`): 定义一组操作的集合，实现一组操作权限的统一管理。片段标识可以按照 <a href="https://github.com/isaacs/minimatch" target="_blank">minimatch</a> 规则模糊匹配。

## 类方法

### `define()`

定义一个角色。

#### 签名

- `define(options: DefineOptions): ACLRole`

#### 类型

```ts
export interface DefineOptions {
  role: string;
  strategy?: string | AvailableStrategyOptions;
  actions?: ResourceActionsOptions;
  snippets?: string[];
}

export interface AvailableStrategyOptions {
  displayName?: string;
  actions?: false | string | string[];
  allowConfigure?: boolean;
  resource?: '*';
}

export interface ResourceActionsOptions {
  [actionName: string]: RoleActionParams;
}

export interface RoleActionParams {
  fields?: string[];
  filter?: any;
  own?: boolean;
  whitelist?: string[];
  blacklist?: string[];
}
```

#### 详细信息

##### DefineOptions

| 属性       | 类型                                                                | 描述                                                   |
| ---------- | ------------------------------------------------------------------- | ------------------------------------------------------ |
| `role`     | `string`                                                            | 角色唯一标识                                           |
| `strategy` | `string` \| [`AvailableStrategyOptions`](#availablestrategyoptions) | 可选，角色的全局访问策略, 可以是策略标识或者策略配置。 |
| `actions`  | [`{ [actionName: string]: RoleActionParams; }`](#roleactionparams)  | 可选，针对动作的权限配置                               |
| `snippets` | `string[]`                                                          | 可选，定义角色有权限的片段                             |

##### AvailableStrategyOptions

| 属性             | 类型                              | 描述                       |
| ---------------- | --------------------------------- | -------------------------- |
| `displayName`    | `string`                          | 可选，策略展示标题         |
| `action`         | `false` \| `string` \| `string[]` | 可选, 操作接口             |
| `allowConfigure` | `boolean`                         | 可选，是否允许配置用户界面 |
| `resource`       | `*`                               | 表示对所有资源生效         |

##### RoleActionParams

| 属性        | 类型       | 描述                                                   |
| ----------- | ---------- | ------------------------------------------------------ |
| `fields`    | `string[]` | 可选，需要操作的数据表字段                             |
| `filter`    | `any`      | 可选, 需要满足的过滤参数，只能对符合条件的记录执行操作 |
| `own`       | `boolean`  | 可选，是否只能操作自己创建的记录                       |
| `whitelist` | `string[]` | 可选，字段白名单，在名单中的字段才可以访问             |
| `blacklist` | `string[]` | 可选，字段黑名单，在名单中的字段不能访问               |

### `can()`

判断操作执行权限，并返回最终的操作参数。返回 `null` 时表示无权限。

#### 签名

- `can(options: CanArgs): CanResult | null`

#### 类型

```ts
interface CanArgs {
  role: string;
  resource: string;
  action: string;
  ctx?: any;
}

interface CanResult {
  role: string;
  resource: string;
  action: string;
  params?: any;
}
```

#### 详细信息

##### CanArgs

| 属性       | 类型     | 描述             |
| ---------- | -------- | ---------------- |
| `role`     | `string` | 角色标识         |
| `resource` | `string` | 资源标识         |
| `action`   | `string` | 操作标识         |
| `ctx`      | `any`    | 可选，请求上下文 |

##### CanResult

| 属性       | 类型     | 描述           |
| ---------- | -------- | -------------- |
| `role`     | `string` | 角色标识       |
| `resource` | `string` | 资源标识       |
| `action`   | `string` | 操作标识       |
| `params`   | `any`    | 可选，操作参数 |

### `registerSnippet()`

注册片段。

#### 签名

- `registerSnippet(snippet: SnippetOptions)`

#### 类型

```ts
export type SnippetOptions = {
  name: string;
  actions: string[];
};
```

#### 详细信息

| 属性      | 类型       | 描述                                                                                                                                       |
| --------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `name`    | `string`   | 片段标识，可以按照 <a href="https://github.com/isaacs/minimatch" target="_blank">minimatch</a> 规则进行匹配。如 `auth.auth` 匹配 `auth.*`. |
| `actions` | `string[]` | 片段包含的资源操作, 以 `resource:action` 的格式。如 `users:list`.                                                                          |

### `setAvailableAction()`

设定允许的操作。

#### 签名

- `setAvailableAction(name: string, options: AvailableActionOptions = {})`

```ts
export interface AvailableActionOptions {
  displayName?: string;
  aliases?: string[] | string;
  resource?: string;
  // 对新数据进行操作
  onNewRecord?: boolean;
  // 允许配置字段
  allowConfigureFields?: boolean;
}
```

#### 详细信息

| 属性                   | 类型                   | 描述                                                  |
| ---------------------- | ---------------------- | ----------------------------------------------------- |
| `displayName`          | `string`               | 可选，操作展示标题                                    |
| `aliases`              | `string` \| `string[]` | 可选，操作别名。如 `get`, `list` 操作别名都为 `view`. |
| `resource`             | `string`               | 可选, 资源                                            |
| `onNewRecord`          | `boolean`              | 可选，操作是否针对新数据。如创建操作。                |
| `allowConfigureFields` | `boolean`              | 可选，是否允许配置字段                                |

### `setAvailableStrategy()`

设定允许操作的策略

#### 签名

- `setAvailableStrategy(name: string, options: AvailableStrategyOptions)`

参考 [AvailableStrategyOptions](#availablestrategyoptions)

### `allow()`

设定允许操作的条件。

```ts
acl.allow('plugins', '*', 'public');
```

#### 签名

- `allow(resourceName: string, actionNames: string[] | string, condition?: string | ConditionFunc)`

#### 类型

```ts
export type ConditionFunc = (ctx: any) => Promise<boolean> | boolean;
```

#### 详细信息

| 参数           | 类型                        | 描述                                 | 默认值   |
| -------------- | --------------------------- | ------------------------------------ | -------- |
| `resourceName` | `string`                    | 资源                                 | -        |
| `actionNames`  | `string` \| `string[]`      | 操作                                 | -        |
| `condition`    | `string` \| `ConditionFunc` | 可选, 预置的条件标识，或条件判断函数 | `public` |

预置的条件标识：

- `public`: 公开接口。
- `loggedIn`: 用户已登录时允许。
- `allowConfigure`: 当前用户角色有配置用户界面权限时允许。

### `addFixedParams()`

给操作添加固定参数，和当前请求参数合并。

```ts
acl.addFixedParams('users', 'list', () => {
  return {
    filter: {
      id: {
        $eq: 1,
      },
    },
  };
});
```

#### 签名

- `addFixedParams(resource: string, action: string, merger: Merger)`

#### 类型

```ts
export type Merger = () => object;
```

#### 详细信息

| 参数       | 类型     | 描述                           |
| ---------- | -------- | ------------------------------ |
| `resource` | `string` | 资源                           |
| `action`   | `string` | 操作                           |
| `merger`   | `Merger` | 函数，返回要添加的固定参数对象 |

### `use()`

添加 `ACL` 中间件。

```ts
acl.use(async () => {
  return async function (ctx, next) {
    // ...
    await next();
  };
});
```

#### 签名

- `use(fn: any, options?: ToposortOptions)`

#### 详细信息

参考[中间件](../../development/server/middleware)。

### `middleware()`

NocoBase 访问控制中间件。
