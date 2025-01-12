# ctx.action

## 概要

リソース操作リクエストは [`resourceManager.middleware()`](./resource-manager#middleware) によって解析された後、いくつかの重要なリクエストパラメータが `ctx.action` に保存され、後続のミドルウェアで使用されます。

## API

### resourceName

`ctx.action.resourceName`

リソース名。以下の2つの形式があります：

- `a` - リソース `a` に対する操作。
- `a.b` - リソース `a` の関連オブジェクト `b` に対する操作。

### actionName

`ctx.action.actionName`

操作名。

### sourceId

`ctx.action.sourceId`

操作対象がリソースの関連オブジェクトである場合、対応するリソースの主キー値。例えば、`resourceName` が `a.b` の場合、`sourceId` は `a` の主キー値を表します。

### params

リクエストパラメータ。

- URL パラメータは `ctx.action.params` から直接取得できます。

```ts
const { filterByTk } = ctx.action.params;
```

- リクエストボディは `ctx.action.params.values` から取得できます。

### mergeParams()

パラメータの内容を提供し、リクエストパラメータとマージします。

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

#### シグネチャ

- `mergeParams(params: ActionParams, strategies: MergeStrategies = {})`

#### タイプ

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

#### 詳細

| パラメータ名   | 型                                                       | 説明                               |
| -------------- | -------------------------------------------------------- | ---------------------------------- |
| `params`       | [`ActionParams`](#actionparams)                          | 操作リクエストパラメータ           |
| `strategies`   | [`{ [key: string]: MergeStrategies }`](#mergestrategies) | リクエストパラメータの各フィールドに対するマージ戦略 |

デフォルトの `strategies`：

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

| パラメータ名      | 型         | 説明                                                    |
| ----------------- | ---------- | ------------------------------------------------------- |
| `filterByTk`      | `any`      | 操作リソースの主キー値                                  |
| `filter`          | `Filter`   | フィルタパラメータ、[Filter Operators](./database/operators) を参照 |
| `fields`          | `string[]` | 取得するフィールド                                      |
| `except`          | `string[]` | 除外するフィールド                                      |
| `appends`         | `string[]` | 追加するリレーションフィールド                          |
| `whitelist`       | `string[]` | フィールドホワイトリスト                                |
| `blacklist`       | `string[]` | フィールドブラックリスト                                |
| `sort`            | `string[]` | ソートパラメータ                                        |
| `page`            | `number`   | 現在のページ                                            |
| `pageSize`        | `number`   | ページあたりのデータ数                                  |
| `values`          | `any`      | リクエストボディ                                        |
| `[key: string]`   | `any`      | その他の拡張設定                                        |

##### MergeStrategies

プリセットのマージ戦略またはカスタムマージ関数。

プリセットのマージ戦略：

| 戦略名      | 説明                           |
| ----------- | ------------------------------ |
| `merge`     | `Object.assign`                |
| `deepMerge` | 深層トラバースマージ           |
| `overwrite` | 上書き                         |
| `andMerge`  | `$and` 演算子を使用してフィルタパラメータをマージ |
| `orMerge`   | `$or` 演算子を使用してフィルタパラメータをマージ  |
| `intersect` | 交差                           |
| `union`     | 和集合                         |
