# ResourceManager

## 概要

`ResourceManager` は NocoBase のリソース管理モジュールで、リソースを定義し、リソースに操作メソッドを登録するために使用されます。

## クラスメソッド

### `define()`

リソースを定義します。

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

#### シグネチャ

- `define(options: ResourceOptions): Resource`

#### タイプ

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

#### 詳細

##### ResourceOptions

| 属性          | 型                                           | 説明             | デフォルト値 |
| ------------- | -------------------------------------------- | ---------------- | ------------ |
| `name`        | `string`                                     | リソース名       | -            |
| `type`        | `ResourceType`                               | リソースタイプ   | `single`     |
| `actions`     | [`{ [key: string]: ActionType }`](#actiontype) | 操作             | -            |
| `only`        | `ActionName[]`                               | `actions` ホワイトリスト | -            |
| `except`      | `ActionName[]`                               | `actions` ブラックリスト | -            |
| `middleware`  | `MiddlewareType`                             | ミドルウェア     | -            |
| `middlewares` | `MiddlewareType`                             | ミドルウェア     | -            |

##### ActionType

操作メソッドには2つのタイプがあります：

- `HandlerType`

このタイプはミドルウェアの方法で直接操作メソッドを定義します。例：

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

このタイプは主に既存の操作のリクエストパラメータを上書きするために使用されます。例：

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

| パラメータ名      | 型             | 説明                                                     |
| ----------------- | -------------- | -------------------------------------------------------- |
| `values`          | `any`          | 操作リクエストのデフォルト値                             |
| `filter`          | `Filter`       | フィルタパラメータ、[フィルタオペレータ](../database/operators)を参照 |
| `fields`          | `string[]`     | 取得するフィールド                                       |
| `except`          | `string[]`     | 除外するフィールド                                       |
| `appends`         | `string[]`     | 追加するリレーションフィールド                           |
| `whitelist`       | `string[]`     | フィールドホワイトリスト                                 |
| `blacklist`       | `string[]`     | フィールドブラックリスト                                 |
| `sort`            | `string[]`     | ソートパラメータ                                         |
| `page`            | `number`       | 現在のページ                                             |
| `pageSize`        | `number`       | ページあたりのデータ数                                   |
| `maxPageSize`     | `number`       | 最大データ数                                             |
| `middleware`      | `MiddlewareType` | ミドルウェア                                             |
| `middlewares`     | `MiddlewareType` | ミドルウェア                                             |
| `handler`         | `HandlerType`  | 現在の操作を実行するメソッド                             |
| `[key: string]`   | `any`          | その他の拡張設定                                         |

### `registerActionHandlers()`

操作メソッドを登録します。

#### シグネチャ

- `registerActionHandler(name: ActionName, handler: HandlerType)`

#### タイプ

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

#### 詳細

| パラメータ名 | 型          | 説明                                                                                                          |
| ------------ | ----------- | ------------------------------------------------------------------------------------------------------------- |
| `name`       | `ActionName` | 操作名。<br />1. 通常の文字列形式で、すべてのリソースに操作を登録します。<br /> 2. `<resource>:<action>` 形式で特定のリソースに操作を登録します |
| `handler`    | `HandlerType` | 操作ミドルウェア                                                                                              |

### `isDefined()`

リソースが定義されているかどうかを確認します。

#### シグネチャ

- `isDefined(name: string)`

#### 詳細

| パラメータ名 | 型     | 説明     |
| ------------ | ------ | -------- |
| `name`       | `string` | リソース名 |

### `import()`

指定されたディレクトリのリソース設定を読み込みます。

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

#### シグネチャ

- `import(options: ImportOptions): Promise<Map<string, Resource>>`

#### タイプ

```ts
export interface ImportOptions {
  directory: string;
  extensions?: string[];
}
```

#### 詳細

| 属性         | 型       | 説明             | デフォルト値                 |
| ------------ | -------- | ---------------- | ---------------------------- |
| `directory`  | `string` | 設定ディレクトリのパス | -                            |
| `extensions` | `string[]` | オプション、ファイル拡張子 | `['js', 'ts', 'json']`       |

### `use()`

`resourceManager` ミドルウェアを追加します。

```ts
resourceManager.use(async () => {
  return async function (ctx, next) {
    // ...
    await next();
  };
});
```

#### シグネチャ

- `use(middlewares: HandlerType | HandlerType[], options: ToposortOptions = {})`

#### 詳細

[ミドルウェア](../../development/server/middleware)を参照してください。

### `middleware()`

`ResourceManager` ミドルウェア、リクエストパラメータを解析し（[ctx.action](./action.md)を参照）、操作メソッドを実行します。
