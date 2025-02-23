# ResourceManager

## Overview

`ResourceManager` is the resource management module of NocoBase, used to define resources and register operation methods for resources.

## Class Methods

### `define()`

Defines a resource.

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

#### Signature

- `define(options: ResourceOptions): Resource`

#### Type

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

#### Details

##### ResourceOptions

| Property      | Type                                           | Description            | Default  |
| ------------- | ---------------------------------------------- | ---------------------- | -------- |
| `name`        | `string`                                       | Resource name          | -        |
| `type`        | `ResourceType`                                 | Resource type          | `single` |
| `actions`     | [`{ [key: string]: ActionType }`](#actiontype) | Actions                | -        |
| `only`        | `ActionName[]`                                 | Whitelist of `actions` | -        |
| `except`      | `ActionName[]`                                 | Blacklist of `actions` | -        |
| `middleware`  | `MiddlewareType`                               | Middleware             | -        |
| `middlewares` | `MiddlewareType`                               | Middlewares            | -        |

##### ActionType

There are two types of action methods:

- `HandlerType`

This type directly defines the operation method through middleware. Example:

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

This type is mainly used to override the request parameters of a certain existing operation. Example:

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

| Property        | Type             | Description                                                                 |
| --------------- | ---------------- | --------------------------------------------------------------------------- |
| `values`        | `any`            | Default values for the action request                                       |
| `filter`        | `Filter`         | Filtering parameters, refer to [Filter Operators](../database/operators.md) |
| `fields`        | `string[]`       | Fields to retrieve                                                          |
| `except`        | `string[]`       | Fields to exclude                                                           |
| `appends`       | `string[]`       | Related fields to append                                                    |
| `whitelist`     | `string[]`       | Field whitelist                                                             |
| `blacklist`     | `string[]`       | Field blacklist                                                             |
| `sort`          | `string[]`       | Sorting parameters                                                          |
| `page`          | `number`         | Current page                                                                |
| `pageSize`      | `number`         | Number of data items per page                                               |
| `maxPageSize`   | `number`         | Maximum number of data items per page                                       |
| `middleware`    | `MiddlewareType` | Middleware                                                                  |
| `middlewares`   | `MiddlewareType` | Middlewares                                                                 |
| `handler`       | `HandlerType`    | Method executed for the action                                              |
| `[key: string]` | `any`            | Other extended configurations                                               |

### `registerActionHandlers()`

Registers action methods.

#### Signature

- `registerActionHandler(name: ActionName, handler: HandlerType)`

#### Type

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

#### Details

| Property  | Type          | Description                                                                                                                                                        |
| --------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `name`    | `ActionName`  | Action name.<br />1. As a regular string, registers actions for all resources.<br />2. In the form `<resource>:<action>`, registers actions for specific resources |
| `handler` | `HandlerType` | Middleware for the action                                                                                                                                          |

### `isDefined()`

Checks if a resource is defined.

#### Signature

- `isDefined(name: string)`

#### Details

| Property | Type     | Description   |
| -------- | -------- | ------------- |
| `name`   | `string` | Resource name |

### `import()`

Loads resource configurations from a specified directory.

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

const resourceManager = new ResourceManager();
await resourceManager.import({
  directory: path.resolve(__dirname, 'resources'),
});
```

#### Signature

- `import(options: ImportOptions): Promise<Map<string, Resource>>`

#### Type

```ts
export interface ImportOptions {
  directory: string;
  extensions?: string[];
}
```

#### Details

| Property     | Type       | Description               | Default Value          |
| ------------ | ---------- | ------------------------- | ---------------------- |
| `directory`  | `string`   | Directory path            | -                      |
| `extensions` | `string[]` | Optional, file extensions | `['js', 'ts', 'json']` |

### `use()`

Adds `ResourceManager` middleware.

```ts
resourceManager.use(async () => {
  return async function (ctx, next) {
    // ...
    await next();
  };
});
```

#### Signature

- `use(middlewares: HandlerType | HandlerType[], options: ToposortOptions = {})`

#### Details

Refer to [Middleware](../../development/server/middleware.md).

### `middleware()`

Middleware for `ResourceManager`, parses request parameters (refer to [ctx.action](./action.md)) and executes operation methods.
