# AuthManager

## 概要

`AuthManager` は NocoBase のユーザー認証管理モジュールであり、異なるユーザー認証タイプを登録するために使用されます。

### 基本的な使用法

```ts
const authManager = new AuthManager({
  // リクエストヘッダーから現在の認証器識別子を取得するために使用
  authKey: 'X-Authenticator',
});

// AuthManager の認証器の保存および取得方法を設定
authManager.setStorer({
  get: async (name: string) => {
    return db.getRepository('authenticators').find({ filter: { name } });
  },
});

// 認証タイプを登録
authManager.registerTypes('basic', {
  auth: BasicAuth,
  title: 'パスワード',
});

// 認証ミドルウェアを使用
app.resourceManager.use(authManager.middleware());
```

### 概念の説明

- **認証タイプ (`AuthType`)**: 異なるユーザー認証方法、例えば：パスワード、SMS、OIDC, SAML など。
- **認証器 (`Authenticator`)**: 認証方法の実体で、実際にデータシートに保存され、特定の認証タイプ (`AuthType`) の設定レコードに対応します。一つの認証方法は複数の認証器を持つことができ、複数の設定に対応し、異なるユーザー認証方法を提供します。
- **認証器識別子 (`Authenticator name`)**: 認証器の一意の識別子で、現在のリクエストで使用される認証方法を決定するために使用されます。

## クラスメソッド

### `constructor()`

コンストラクタ、`AuthManager` インスタンスを作成します。

#### シグネチャ

- `constructor(options: AuthManagerOptions)`

#### タイプ

```ts
export interface JwtOptions {
  secret: string;
  expiresIn?: string;
}

export type AuthManagerOptions = {
  authKey: string;
  default?: string;
  jwt?: JwtOptions;
};
```

#### 詳細

##### AuthManagerOptions

| プロパティ  | タイプ                      | 説明                                  | デフォルト値      |
| ----------- | --------------------------- | ------------------------------------- | ----------------- |
| `authKey`   | `string`                    | オプション、リクエストヘッダーに保存される現在の認証器識別子のキー | `X-Authenticator` |
| `default`   | `string`                    | オプション、デフォルトの認証器識別子  | `basic`           |
| `jwt`       | [`JwtOptions`](#jwtoptions) | オプション、JWT を使用して認証する場合に設定可能 | -                 |

##### JwtOptions

| プロパティ    | タイプ     | 説明               | デフォルト値      |
| ------------- | ---------- | ------------------ | ----------------- |
| `secret`      | `string`   | token の秘密鍵     | `X-Authenticator` |
| `expiresIn`   | `string`   | オプション、token の有効期限 | `7d`              |

### `setStorer()`

認証器データの保存および取得方法を設定します。

#### シグネチャ

- `setStorer(storer: Storer)`

#### タイプ

```ts
export interface Authenticator = {
  authType: string;
  options: Record<string, any>;
  [key: string]: any;
};

export interface Storer {
  get: (name: string) => Promise<Authenticator>;
}
```

#### 詳細

##### Authenticator

| プロパティ    | タイプ                  | 説明           |
| ------------- | ----------------------- | -------------- |
| `authType`    | `string`                | 認証タイプ     |
| `options`     | `Record<string, any>`   | 認証器関連の設定 |

##### Storer

`Storer` は認証器ストレージのインターフェースで、一つのメソッドを含みます。

- `get(name: string): Promise<Authenticator>` - 認証器識別子を通じて認証器を取得します。NocoBase で実際に返されるタイプは [AuthModel](../../handbook/auth/dev/api#authmodel) です。

### `registerTypes()`

認証タイプを登録します。

#### シグネチャ

- `registerTypes(authType: string, authConfig: AuthConfig)`

#### タイプ

```ts
export type AuthExtend<T extends Auth> = new (config: Config) => T;

type AuthConfig = {
  auth: AuthExtend<Auth>; // 認証クラス。
  title?: string; // 認証タイプの表示名。
};
```

#### 詳細

| プロパティ  | タイプ               | 説明                                 |
| ----------- | -------------------- | ------------------------------------ |
| `auth`      | `AuthExtend<Auth>`   | 認証タイプの実装、[Auth](./auth.md) を参照 |
| `title`     | `string`             | オプション。この認証タイプのフロントエンド表示タイトル |

### `listTypes()`

登録済みの認証タイプリストを取得します。

#### シグネチャ

- `listTypes(): { name: string; title: string }[]`

#### 詳細

| プロパティ  | タイプ     | 説明         |
| ----------- | ---------- | ------------ |
| `name`      | `string`   | 認証タイプ識別子 |
| `title`     | `string`   | 認証タイプのタイトル |

### `get()`

認証器を取得します。

#### シグネチャ

- `get(name: string, ctx: Context)`

#### 詳細

| プロパティ  | タイプ      | 説明       |
| ----------- | ----------- | ---------- |
| `name`      | `string`    | 認証器識別子 |
| `ctx`       | `Context`   | リクエストコンテキスト |

### `middleware()`

認証ミドルウェア。現在の認証器を取得し、ユーザー認証を行います。