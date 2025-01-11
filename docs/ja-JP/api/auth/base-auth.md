# BaseAuth

## 概要

`BaseAuth` は [Auth](./auth.md) 抽象クラスを継承し、ユーザー認証タイプの基本実装であり、JWT を認証方式として使用します。ほとんどの場合、ユーザー認証タイプを拡張するには `BaseAuth` を継承して拡張することができ、直接 `Auth` 抽象クラスを継承する必要はありません。

```ts
class BasicAuth extends BaseAuth {
  constructor(config: AuthConfig) {
    // ユーザーデータシートを設定
    const userCollection = config.ctx.db.getCollection('users');
    super({ ...config, userCollection });
  }

  // ユーザー認証ロジック、`auth.signIn` によって呼び出される
  // ユーザーデータを返す
  async validate() {
    const ctx = this.ctx;
    const { values } = ctx.action.params;
    // ...
    return user;
  }
}
```

## クラスメソッド

### `constructor()`

コンストラクタ、`BaseAuth` インスタンスを作成します。

#### シグネチャ

- `constructor(config: AuthConfig & { userCollection: Collection })`

#### 詳細

| パラメータ         | タイプ         | 説明                                                                                                |
| ------------------ | -------------- | --------------------------------------------------------------------------------------------------- |
| `config`           | `AuthConfig`   | [Auth - AuthConfig](./auth.md#authconfig) を参照                                                    |
| `userCollection`   | `Collection`   | ユーザーデータシート, 例: `db.getCollection('users')`，[DataBase - Collection](../database/collection) を参照 |

### `user()`

アクセサ、ユーザー情報を設定および取得します。デフォルトでは `ctx.state.currentUser` オブジェクトを使用してアクセスします。

#### シグネチャ

- `set user()`
- `get user()`

### `check()`

リクエストトークンによる認証を行い、ユーザー情報を返します。

### `signIn()`

ユーザーログイン、トークンを生成します。

### `signUp()`

ユーザー登録。

### `signOut()`

ユーザーログアウト、トークンを無効にします。

### `validate()` \*

認証のコアロジック、`signIn` インターフェースによって呼び出され、ユーザーが正常にログインできるかどうかを判断します。