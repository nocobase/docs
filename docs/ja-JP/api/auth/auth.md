# Auth

## 概要

`Auth` はユーザー認証タイプの抽象クラスで、ユーザー認証を完了するために必要なインターフェースを定義しています。新しいユーザー認証タイプを拡張するには、`Auth` クラスを継承し、その中のメソッドを実装する必要があります。基本的な実装は以下を参照してください: [BaseAuth](./base-auth.md).

```ts
interface IAuth {
  user: Model;
  // 認証ステータスを確認し、現在のユーザーを返します。
  check(): Promise<Model>;
  signIn(): Promise<any>;
  signUp(): Promise<any>;
  signOut(): Promise<any>;
}

export abstract class Auth implements IAuth {
  abstract user: Model;
  abstract check(): Promise<Model>;
  // ...
}

class CustomAuth extends Auth {
  // check: 認証
  async check() {
    // ...
  }
}
```

## インスタンスプロパティ

### `user`

認証ユーザー情報。

#### シグネチャ

- `abstract user: Model`

## クラスメソッド

### `constructor()`

コンストラクタ、`Auth` インスタンスを作成します。

#### シグネチャ

- `constructor(config: AuthConfig)`

#### タイプ

```ts
export type AuthConfig = {
  authenticator: Authenticator;
  options: {
    [key: string]: any;
  };
  ctx: Context;
};
```

#### 詳細

##### AuthConfig

| プロパティ       | タイプ                                            | 説明                                                                                                 |
| ---------------- | ------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `authenticator`  | [`Authenticator`](./auth-manager#authenticator)   | 認証器データモデル、NocoBase アプリケーションでの実際のタイプは [AuthModel](../../handbook/auth/dev/api.md#authmodel) |
| `options`        | `Record<string, any>`                             | 認証器関連設定                                                                                       |
| `ctx`            | `Context`                                         | リクエストコンテキスト                                                                               |

### `check()`

ユーザー認証、ユーザー情報を返します。すべての認証タイプで実装する必要がある抽象メソッドです。

#### シグネチャ

- `abstract check(): Promise<Model>`

### `signIn()`

ユーザーログイン。

#### シグネチャ

- `signIn(): Promise<any>`

### `signUp()`

ユーザー登録。

#### シグネチャ

- `signUp(): Promise<any>`

### `signOut()`

ユーザーログアウト。

#### シグネチャ

- `signOut(): Promise<any>`