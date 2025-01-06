# ACL

## 概要

`ACL` は NocoBase で使用される権限管理モジュールで、ユーザーロール管理、権限登録と承認、権限ポリシーの判断およびアクセス制御を担当します。

### 概念の説明

- **リソース** (`Resource`): データシート、またはカスタムリソースを登録することもできます。詳細は [`@nocobase/resourcer`](../resourcer/resource-manager.md) を参照してください。
- **操作** (`Action`): 特定のリソースに対する操作インターフェースで、作成、表示、更新、削除、またはその他のカスタム操作が含まれます。詳細は [`@nocobase/actions`](../actions) を参照してください。
- **ポリシー** (`Strategy`): ロールのグローバル権限を設定します。リソース操作権限（作成、表示、更新、削除、インポート、エクスポートなど）やシステム権限（ユーザーインターフェースの設定など）を含みます。
- **スニペット** (`Snippet`): 一連の操作を定義し、一連の操作権限を統一管理します。スニペット識別子は <a href="https://github.com/isaacs/minimatch" target="_blank">minimatch</a> ルールに従って曖昧一致させることができます。

## クラスメソッド

### `define()`

ロールを定義します。

#### シグネチャ

- `define(options: DefineOptions): ACLRole`

#### タイプ

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

#### 詳細

##### DefineOptions

| プロパティ       | タイプ                                                                | 説明                                                   |
| ---------- | ------------------------------------------------------------------- | ------------------------------------------------------ |
| `role`     | `string`                                                            | ロールの一意識別子                                           |
| `strategy` | `string` \| [`AvailableStrategyOptions`](#availablestrategyoptions) | オプション、ロールのグローバルアクセスポリシー、ポリシー識別子またはポリシー設定。 |
| `actions`  | [`{ [actionName: string]: RoleActionParams; }`](#roleactionparams)  | オプション、操作に対する権限設定                               |
| `snippets` | `string[]`                                                          | オプション、ロールが権限を持つスニペットを定義                             |

##### AvailableStrategyOptions

| プロパティ             | タイプ                              | 説明                       |
| ---------------- | --------------------------------- | -------------------------- |
| `displayName`    | `string`                          | オプション、ポリシーの表示タイトル         |
| `action`         | `false` \| `string` \| `string[]` | オプション, 操作インターフェース             |
| `allowConfigure` | `boolean`                         | オプション、ユーザーインターフェースの設定を許可するかどうか |
| `resource`       | `*`                               | すべてのリソースに適用         |

##### RoleActionParams

| プロパティ        | タイプ       | 説明                                                   |
| ----------- | ---------- | ------------------------------------------------------ |
| `fields`    | `string[]` | オプション、操作するデータシートのフィールド                             |
| `filter`    | `any`      | オプション, 操作を実行するために満たす必要のあるフィルタパラメータ、条件に合致するレコードのみ操作可能 |
| `own`       | `boolean`  | オプション、自分が作成したレコードのみ操作可能                       |
| `whitelist` | `string[]` | オプション、フィールドのホワイトリスト、リスト内のフィールドのみアクセス可能             |
| `blacklist` | `string[]` | オプション、フィールドのブラックリスト、リスト内のフィールドはアクセス不可               |

### `can()`

操作の実行権限を判断し、最終的な操作パラメータを返します。`null` を返す場合は権限がないことを示します。

#### シグネチャ

- `can(options: CanArgs): CanResult | null`

#### タイプ

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

#### 詳細

##### CanArgs

| プロパティ       | タイプ     | 説明             |
| ---------- | -------- | ---------------- |
| `role`     | `string` | ロール識別子         |
| `resource` | `string` | リソース識別子         |
| `action`   | `string` | 操作識別子         |
| `ctx`      | `any`    | オプション、リクエストコンテキスト |

##### CanResult

| プロパティ       | タイプ     | 説明           |
| ---------- | -------- | -------------- |
| `role`     | `string` | ロール識別子       |
| `resource` | `string` | リソース識別子       |
| `action`   | `string` | 操作識別子       |
| `params`   | `any`    | オプション、操作パラメータ |

### `registerSnippet()`

スニペットを登録します。

#### シグネチャ

- `registerSnippet(snippet: SnippetOptions)`

#### タイプ

```ts
export type SnippetOptions = {
  name: string;
  actions: string[];
};
```

#### 詳細

| プロパティ      | タイプ       | 説明                                                                                                                                       |
| --------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `name`    | `string`   | スニペット識別子、<a href="https://github.com/isaacs/minimatch" target="_blank">minimatch</a> ルールに従って一致させることができます。例: `auth.auth` は `auth.*` に一致。 |
| `actions` | `string[]` | スニペットに含まれるリソース操作, `resource:action` の形式。例: `users:list`.                                                                          |

### `setAvailableAction()`

許可される操作を設定します。

#### シグネチャ

- `setAvailableAction(name: string, options: AvailableActionOptions = {})`

```ts
export interface AvailableActionOptions {
  displayName?: string;
  aliases?: string[] | string;
  resource?: string;
  // 新規データに対する操作
  onNewRecord?: boolean;
  // フィールドの設定を許可
  allowConfigureFields?: boolean;
}
```

#### 詳細

| プロパティ                   | タイプ                   | 説明                                                  |
| ---------------------- | ---------------------- | ----------------------------------------------------- |
| `displayName`          | `string`               | オプション、操作の表示タイトル                                    |
| `aliases`              | `string` \| `string[]` | オプション、操作の別名。例: `get`, `list` 操作の別名は `view`. |
| `resource`             | `string`               | オプション, リソース                                            |
| `onNewRecord`          | `boolean`              | オプション、操作が新規データに対するものかどうか。例: 作成操作。                |
| `allowConfigureFields` | `boolean`              | オプション、フィールドの設定を許可するかどうか                                |

### `setAvailableStrategy()`

許可される操作のポリシーを設定します。

#### シグネチャ

- `setAvailableStrategy(name: string, options: AvailableStrategyOptions)`

詳細は [AvailableStrategyOptions](#availablestrategyoptions) を参照してください。

### `allow()`

許可される操作の条件を設定します。

```ts
acl.allow('plugins', '*', 'public');
```

#### シグネチャ

- `allow(resourceName: string, actionNames: string[] | string, condition?: string | ConditionFunc)`

#### タイプ

```ts
export type ConditionFunc = (ctx: any) => Promise<boolean> | boolean;
```

#### 詳細

| パラメータ           | タイプ                        | 説明                                 | デフォルト値   |
| -------------- | --------------------------- | ------------------------------------ | -------- |
| `resourceName` | `string`                    | リソース                                 | -        |
| `actionNames`  | `string` \| `string[]`      | 操作                                 | -        |
| `condition`    | `string` \| `ConditionFunc` | オプション, 事前定義された条件識別子、または条件判断関数 | `public` |

事前定義された条件識別子：

- `public`: 公開インターフェース。
- `loggedIn`: ユーザーがログインしている場合に許可。
- `allowConfigure`: 現在のユーザーロールがユーザーインターフェースの設定権限を持っている場合に許可。

### `addFixedParams()`

操作に固定パラメータを追加し、現在のリクエストパラメータと結合します。

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

#### シグネチャ

- `addFixedParams(resource: string, action: string, merger: Merger)`

#### タイプ

```ts
export type Merger = () => object;
```

#### 詳細

| パラメータ       | タイプ     | 説明                           |
| ---------- | -------- | ------------------------------ |
| `resource` | `string` | リソース                           |
| `action`   | `string` | 操作                           |
| `merger`   | `Merger` | 関数、追加する固定パラメータオブジェクトを返す |

### `use()`

`ACL` ミドルウェアを追加します。

```ts
acl.use(async () => {
  return async function (ctx, next) {
    // ...
    await next();
  };
});
```

#### シグネチャ

- `use(fn: any, options?: ToposortOptions)`

#### 詳細

詳細は[ミドルウェア](../../development/server/middleware)を参照してください。

### `middleware()`

NocoBase のアクセス制御ミドルウェア。