# 認証タイプの拡張

## 概要

NocoBaseは、必要に応じてユーザー認証タイプを拡張できます。ユーザー認証には一般的に2種類のタイプがあります。一つはNocoBaseアプリ内でユーザーの身分を確認する方法（パスワードログイン、SMSログインなど）、もう一つは第三者サービスがユーザーの身分を確認し、その結果をコールバックでNocoBaseアプリに通知する方法（OIDC、SAMLなどの認証方式）です。NocoBaseにおけるこれら2つの異なる認証方式のフローは基本的に以下の通りです。

### 第三者コールバックに依存しない場合

1. クライアントはNocoBase SDKを使用してログインインターフェース `api.auth.signIn()` を呼び出し、ログインインターフェース `auth:signIn` にリクエストを送信します。同時に、現在使用している認証器の識別子をリクエストヘッダー `X-Authenticator` でバックエンドに送信します。
2. `auth:signIn` インターフェースは、リクエストヘッダーの認証器識別子に基づいて該当する認証タイプに転送し、その認証タイプに登録された認証クラスの `validate` メソッドで適切なロジック処理を行います。
3. クライアントは `auth:signIn` インターフェースのレスポンスからユーザー情報と認証 `token` を取得し、`token` をローカルストレージに保存してログインを完了します。このステップはSDK内部で自動的に処理されます。

<img src="https://static-docs.nocobase.com/202404211852848.png"/>

### 第三者コールバックに依存する場合

1. クライアントは自分が登録したインターフェース（例えば `auth:getAuthUrl`）を通じて第三者ログインURLを取得し、プロトコルに従ってアプリの名称や認証器識別子などの情報を携帯します。
2. 第三者URLにリダイレクトしてログインを完了し、第三者サービスがNocoBaseアプリのコールバックインターフェース（自分で登録が必要、例えば `auth:redirect`）を呼び出し、認証結果を返します。同時にアプリ名称や認証器識別子などの情報も返します。
3. コールバックインターフェースのメソッドでパラメータを解析し認証器識別子を取得、`AuthManager`を通じて該当する認証クラスを取得し、`auth.signIn()` メソッドを呼び出します。`auth.signIn()` メソッドは `validate()` メソッドを呼び出して認証ロジックを処理します。
4. コールバックメソッドは認証 `token` を取得し、302リダイレクトでフロントエンドページに戻ります。URLパラメータに `token` と認証器識別子を持たせます。`?authenticator=xxx&token=yyy`。

以下にサーバーインターフェースとクライアントユーザーインターフェースの登録方法について説明します。

## サーバーサイド

### 認証インターフェース

NocoBase コアは、拡張認証タイプの登録と管理を提供します。拡張ログインプラグインのコアロジック処理には、コアの `Auth` 抽象クラスを継承し、対応する標準インターフェースを実装する必要があります。  
完全な API 参照は [Auth](../../../api/auth/auth.md) をご覧ください。

```typescript
import { Auth } from '@nocobase/auth';

class CustomAuth extends Auth {
  set user(user) {}
  get user() {}

  async check() {}
  async signIn() {}
}
```

コアは、ユーザー認証に関連する基本的なリソース操作も登録しています。

| API            | 説明                           |
| -------------- | ------------------------------ |
| `auth:check`   | ユーザーがログインしているかを判断 |
| `auth:signIn`  | ログイン                        |
| `auth:signUp`  | 登録                           |
| `auth:signOut` | ログアウト                     |

ほとんどの場合、拡張されたユーザー認証タイプは、既存の JWT 認証ロジックを利用してユーザーが API へアクセスするための証明書を生成できます。コアの `BaseAuth` クラスは `Auth` 抽象クラスの基本実装を提供しており、詳細は [BaseAuth](../../../api/auth/base-auth.md) をご覧ください。プラグインは `BaseAuth` クラスを直接継承することで、一部のロジックコードを再利用し、開発コストを低減できます。

```javascript
import { BaseAuth } from '@nocobase/auth';

class CustomAuth extends BaseAuth {
  constructor(config: AuthConfig) {
    // ユーザーデータテーブルを設定
    const userCollection = config.ctx.db.getCollection('users');
    super({ ...config, userCollection });
  }

  // ユーザー認証ロジックを実装
  async validate() {}
}
```

### ユーザーデータ

ユーザー認証ロジックを実装する際には、通常、ユーザーデータの処理が関与します。NocoBase アプリケーションでは、デフォルトで関連するテーブルが以下のように定義されています：

| データテーブル         | 目的                                               | プラグイン                                                      |
| --------------------- | -------------------------------------------------- | ------------------------------------------------------------- |
| `users`               | ユーザー情報（メール、ニックネーム、パスワードなど）を保存する | [ユーザープラグイン (`@nocobase/plugin-users`)](../../users/index.md) |
| `authenticators`      | 認証器（認証タイプエンティティ）情報を保存し、対応する認証タイプと設定を保持する | [ユーザー認証プラグイン (`@nocobase/plugin-auth`)](../../auth/index.md)                |
| `usersAuthenticators` | ユーザーと認証器を関連付け、ユーザーが対応する認証器に基づく情報を保存する | [ユーザー認証プラグイン (`@nocobase/plugin-auth`)](../../auth/index.md)                |

通常、拡張ログイン方式では、`users` と `usersAuthenticators` を使用して対応するユーザーデータを保存します。特別な場合にのみ、自分でコレクションを追加する必要があります。

`usersAuthenticators` の主なフィールドは次のとおりです。

| フィールド       | 説明                                               |
| --------------- | -------------------------------------------------- |
| `uuid`          | この認証方式のユーザーのユニーク識別子（例：電話番号、WeChat openid など） |
| `meta`          | JSON フィールドで、他に保存する必要がある情報      |
| `userId`        | ユーザー ID                                       |
| `authenticator` | 認証器の名前（ユニーク識別子）                    |

ユーザーの検索および作成操作に関して、`authenticators` のデータモデル `AuthModel` にはいくつかのメソッドが封装されており、`CustomAuth` クラス内で `this.authenticator[メソッド名]` を通じて使用できます。完全な API 参照は [AuthModel](../dev/api.md#authmodel) をご覧ください。

```ts
import { AuthModel } from '@nocobase/plugin-auth';

class CustomAuth extends BaseAuth {
  async validate() {
    // ...
    const authenticator = this.authenticator as AuthModel;
    this.authenticator.findUser(); // ユーザーを検索
    this.authenticator.newUser(); // 新規ユーザーを作成
    this.authenticator.findOrCreateUser(); // ユーザーを検索または作成
    // ...
  }
}
```

### 認証タイプ登録

拡張された認証方式は、認証管理モジュールに登録する必要があります。

```javascript
class CustomAuthPlugin extends Plugin {
  async load() {
    this.app.authManager.registerTypes('custom-auth-type', {
      auth: CustomAuth,
    });
  }
}
```

## クライアント

クライアントユーザーインターフェースは、ユーザー認証プラグインクライアントが提供するインターフェース `registerType` を使用して登録します：

```ts
import AuthPlugin from '@nocobase/plugin-auth/client';

class CustomAuthPlugin extends Plugin {
  async load() {
    const auth = this.app.pm.get(AuthPlugin);
    auth.registerType('custom-auth-type', {
      components: {
        SignInForm, // サインインフォーム
        SignInButton, // サインイン（サードパーティ）ボタン、サインインフォームと選択可能
        SignUpForm, // サインアップフォーム
        AdminSettingsForm, // 管理者設定フォーム
      },
    });
  }
}
```

### サインインフォーム

![](https://static-docs.nocobase.com/33afe18f229c3db45c7a1921c2c050b7.png)

複数の認証器に対応する認証タイプがログインフォームに登録されている場合、タブ形式で表示されます。タブのタイトルはバックエンドで設定された認証器の名称です。

![](https://static-docs.nocobase.com/ada6d7add744be0c812359c23bf4c7fc.png)

### ログインボタン

![](https://static-docs.nocobase.com/e706f7785782adc77b0f4ee4faadfab8.png)

通常はサードパーティのログインボタンが使用されますが、実際には任意のコンポーネントに変更することも可能です。

### 登録フォーム

![](https://static-docs.nocobase.com/f95c53431bf21ec312fcfd51923f0b42.png)

ログインページから登録ページに移動する必要がある場合、ログインコンポーネント内で処理を行う必要があります。

### バックエンド管理フォーム

![](https://static-docs.nocobase.com/f4b544b5b0f5afee5621ad4abf66b24f.png)

上部には一般的な認証器の設定があり、下部には登録可能なカスタム設定フォームがあります。

### リクエストインターフェース

クライアント側でユーザー認証に関連するインターフェースリクエストを発行するには、NocoBaseが提供するSDKを使用することができます。

```ts
import { useAPIClient } from '@nocobase/client';

// コンポーネント内で使用する
const api = useAPIClient();
api.auth.signIn(data, authenticator);
```

詳細なAPIについては [@nocobase/sdk - Auth](../../../api/sdk/auth.md) を参照してください。

