# ctx.action

## 概览

资源操作请求经过 [`resourceManager.middleware()`](./resource-manager#middleware) 解析之后，一些重要的请求参数会被保存到 `ctx.action` 中，供后续的中间件使用。

## API

### resourceName

`ctx.action.resourceName`

资源名称，有两种形式：

- `a` - 对资源 `a` 操作。
- `a.b` - 对资源 `a` 的关联对象 `b` 操作。

### actionName

`ctx.action.actionName`

操作名称。

### sourceId

`ctx.action.sourceId`

当操作对象为资源的关联对象时，对应资源的主键值。比如： `resourceName` 为 `a.b` 时，`sourceId` 代表 `a` 的主键值。

### params

请求参数。

- URL 参数可以直接从 `ctx.action.params` 中获取。

```ts
const { filterByTk } = ctx.action.params;
```

- 请求体可以通过 `ctx.action.params.values` 获取。

### mergeParams()

提供参数内容，和请求参数进行合并。

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

#### 签名

- `mergeParams(params: ActionParams, strategies: MergeStrategies = {})`

#### 类型

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

#### 详细信息

| 参数名       | 类型                                                     | 描述                               |
| ------------ | -------------------------------------------------------- | ---------------------------------- |
| `params`     | [`ActionParams`](#actionparams)                          | 操作请求参数                       |
| `strategies` | [`{ [key: string]: MergeStrategies }`](#mergestrategies) | 针对请求参数中的各个字段的合并策略 |

默认 `strategies`：

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

| 参数名          | 类型       | 描述                                                    |
| --------------- | ---------- | ------------------------------------------------------- |
| `filterByTk`    | `any`      | 操作资源主键值                                          |
| `filter`        | `Filter`   | 过滤参数，参考 [Filter Operators](./database/operators) |
| `fields`        | `string[]` | 要获取的字段                                            |
| `except`        | `string[]` | 要排除的字段                                            |
| `appends`       | `string[]` | 要附加的关系字段                                        |
| `whitelist`     | `string[]` | 字段白名单                                              |
| `blacklist`     | `string[]` | 字段黑名单                                              |
| `sort`          | `string[]` | 排序参数                                                |
| `page`          | `number`   | 当前页                                                  |
| `pageSize`      | `number`   | 每页数据条数                                            |
| `values`        | `any`      | 请求体                                                  |
| `[key: string]` | `any`      | 其他扩展配置                                            |

##### MergeStrategies

预置的合并策略或自定义的合并函数。

预置的合并策略：

| 策略名      | 描述                           |
| ----------- | ------------------------------ |
| `merge`     | `Object.assign`                |
| `deepMerge` | 深层遍历合并                   |
| `overwrite` | 覆盖                           |
| `andMerge`  | 使用 `$and` 运算符合并过滤参数 |
| `orMerge`   | 使用 `$or` 运算符合并过滤参数  |
| `intersect` | 交集                           |
| `union`     | 并集                           |
