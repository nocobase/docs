# ctx.action

## Overview

After the resource operation request is parsed by [`resourceManager.middleware()`](./resource-manager#middleware), some important request parameters are stored in `ctx.action` for use by subsequent middleware.

## API

### resourceName

`ctx.action.resourceName`

The name of the resource. It can take two forms:

- `a` - Operates on resource `a`.
- `a.b` - Operates on associated object `b` of resource `a`.

### actionName

`ctx.action.actionName`

The name of the action.

### sourceId

`ctx.action.sourceId`

When the operation object is an associated object of the resource, it represents the primary key value of the corresponding resource. For example: when `resourceName` is `a.b`, `sourceId` represents the primary key value of `a`.

### params

Request parameters.

- URL parameters can be directly obtained from `ctx.action.params`.

```ts
const { filterByTk } = ctx.action.params;
```

- Request body parameters can be obtained using `ctx.action.params.values`.

### mergeParams()

Combines parameter content with request parameters.

```ts
ctx.action.mergeParams(
  {
    filter: {
      name: 'foo',
    },
    fields: ['id', 'name'],
    except: ['name'],
    sort: ['id'],
    page: 1,
    pageSize: 10,
    values: {
      name: 'foo',
    },
  },
  {
    filter: 'and',
    fields: 'union',
    except: 'union',
    sort: 'overwrite',
    page: 'overwrite',
    pageSize: 'overwrite',
    values: 'deepMerge',
  },
);

ctx.action.mergeParams(
  {
    filter: {},
  },
  {
    filter: (x, y) => {
      // ...
    },
  },
);
```

#### Signature

- `mergeParams(params: ActionParams, strategies: MergeStrategies = {})`

#### Type

```ts
export interface ActionParams {
  filterByTk?: any;
  fields?: string[];
  appends?: string[];
  except?: string[];
  whitelist?: string[];
  blacklist?: string[];
  filter?: FilterOptions;
  sort?: string[];
  page?: number;
  pageSize?: number;
  values?: any;
  [key: string]: any;
}

type MergeStrategyType =
  | 'merge'
  | 'deepMerge'
  | 'overwrite'
  | 'andMerge'
  | 'orMerge'
  | 'intersect'
  | 'union';
type MergeStrategyFunc = (x: any, y: any) => any;
export type MergeStrategy = MergeStrategyType | MergeStrategyFunc;
export interface MergeStrategies {
  [key: string]: MergeStrategy;
}
```

#### Details

| Property     | Type                                                     | Description                                                   |
| ------------ | -------------------------------------------------------- | ------------------------------------------------------------- |
| `params`     | [`ActionParams`](#actionparams)                          | Request parameters                                            |
| `strategies` | [`{ [key: string]: MergeStrategies }`](#mergestrategies) | Merge strategies for various fields in the request parameters |

Default `strategies`:

```ts
{
  filter: 'andMerge',
  fields: 'intersect',
  appends: 'union',
  except: 'union',
  whitelist: 'intersect',
  blacklist: 'intersect',
  sort: 'overwrite',
};
```

##### ActionParams

| Property        | Type       | Description                                                             |
| --------------- | ---------- | ----------------------------------------------------------------------- |
| `filterByTk`    | `any`      | The primary key value of the operated resource                          |
| `filter`        | `Filter`   | Filtering parameters, refer to [Filter Operators](./database/operators) |
| `fields`        | `string[]` | Fields to retrieve                                                      |
| `except`        | `string[]` | Fields to exclude                                                       |
| `appends`       | `string[]` | Related fields to append                                                |
| `whitelist`     | `string[]` | Field whitelist                                                         |
| `blacklist`     | `string[]` | Field blacklist                                                         |
| `sort`          | `string[]` | Sorting parameters                                                      |
| `page`          | `number`   | Current page                                                            |
| `pageSize`      | `number`   | Number of data items per page                                           |
| `values`        | `any`      | Request body                                                            |
| `[key: string]` | `any`      | Other extended configurations                                           |

##### MergeStrategies

Predefined merge strategies or custom merge functions.

Predefined merge strategies:

| Strategy Name | Description                                       |
| ------------- | ------------------------------------------------- |
| `merge`       | `Object.assign`                                   |
| `deepMerge`   | Deep traversal merge                              |
| `overwrite`   | Overwrite                                         |
| `andMerge`    | Merge filter parameters using the `$and` operator |
| `orMerge`     | Merge filter parameters using the `$or` operator  |
| `intersect`   | Intersection                                      |
| `union`       | Union                                             |
