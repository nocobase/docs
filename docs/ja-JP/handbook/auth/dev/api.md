# API 参考

## サーバー

### 認証

コアAPI、参照: [Auth](../../../api/auth/auth.md)

### BaseAuth

コアAPI、参照: [BaseAuth](../../../api/auth/base-auth.md)

### AuthModel

#### 概要

`AuthModel` は NocoBase アプリケーションで使用される認証器（`Authenticator`、参照: [AuthManager - setStorer](../../../api/auth/auth-manager.md#setstorer) および [Auth - constructor](../../../api/auth/auth.md#constructor)）のデータモデルで、ユーザーデータテーブルと対話するためのいくつかのメソッドを提供します。さらに、Sequelize Model によって提供されるメソッドも利用可能です。

```ts
import { AuthModel } from '@nocobase/plugin-auth';

class CustomAuth extends BaseAuth {
  async validate() {
    // ...
    const authenticator = this.authenticator as AuthModel;
    this.authenticator.findUser();
    this.authenticator.newUser();
    this.authenticator.findOrCreateUser();
    // ...
  }
}
```

#### クラスメソッド

- `findUser(uuid: string): UserModel` - `uuid` を使用してユーザーを検索します。

  - `uuid` - 現在の認証タイプからのユーザーの一意の識別子

- `newUser(uuid: string, userValues?: any): UserModel` - 新しいユーザーを作成し、`uuid` によりユーザーを現在の認証器にバインドします。

  - `uuid` - 現在の認証タイプからのユーザーの一意の識別子
  - `userValues` - 任意。ユーザーのその他の情報。指定しない場合、`uuid` がユーザーのニックネームとして使用されます。

- `findOrCreateUser(uuid: string, userValues?: any): UserModel` - ユーザーを検索または新しいユーザーを作成します。作成ルールは同様です。
  - `uuid` - 現在の認証タイプからのユーザーの一意の識別子
  - `userValues` - オプション。ユーザーのその他の情報。

## クライアント

### `plugin.registerType()`

認証タイプのクライアントを登録します。

```ts
import AuthPlugin from '@nocobase/plugin-auth/client';

class CustomAuthPlugin extends Plugin {
  async load() {
    const auth = this.app.pm.get(AuthPlugin);
    auth.registerType('custom-auth-type', {
      components: {
        SignInForm,
        // SignInButton
        SignUpForm,
        AdminSettingsForm,
      },
    });
  }
}
```

#### メソッド

- `registerType(authType: string, options: AuthOptions)`

#### 型

```ts
export type AuthOptions = {
  components: Partial<{
    SignInForm: ComponentType<{ authenticator: AuthenticatorType }>;
    SignInButton: ComponentType<{ authenticator: AuthenticatorType }>;
    SignUpForm: ComponentType<{ authenticatorName: string }>;
    AdminSettingsForm: ComponentType;
  }>;
};
```

#### 詳細情報

- `SignInForm` - サインインフォーム
- `SignInButton` - サインイン（サードパーティ）ボタン。サインインフォームのいずれかを選択できます。
- `SignUpForm` - サインアップフォーム
- `AdminSettingsForm` - 管理者設定フォーム

### ルート

authプラグインのフロントエンドルートは以下の通りです：

- Authレイアウト
  - 名前: `auth`
  - パス: `-`
  - コンポーネント: `AuthLayout`

- サインインページ
  - 名前: `auth.signin`
  - パス: `/signin`
  - コンポーネント: `SignInPage`

- サインアップページ
  - 名前: `auth.signup`
  - パス: `/signup`
  - コンポーネント: `SignUpPage`

