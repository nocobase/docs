# 0.18.0-alpha.1

:::warning
本記事ではプラグイン開発に関連する互換性のない変更のみを紹介します。
:::

## テストフレームワークが jest から vitest に変更

- [サーバー - テスト](/development/server/test)
- [クライアント - テスト](/development/client/test)

## ユーザー認証クライアント API の変更

### 背景

以前は、ユーザー認証方法を拡張する際、クライアントは React の `Context` を基に、`Provider` を使用してカスタムのログイン、登録、設定インターフェースを拡張していました。例えば：

```html
<OptionsComponentProvider authType="Email/Password" component={Options}>
  <SigninPageProvider authType="EmailPassword" tabTitle={t('パスワードでサインイン')} component={SignInPage}>
    <SignupPageProvider authType="Email/Password" component={SignUpPage}>
      {props.children}
    </SignupPageProvider>
  </SigninPageProvider>
</OptionsComponentProvider>
```

認証方法を拡張するには、複数の `Provider` をネストする必要があり、コードがあまり簡潔で直感的ではありませんでした。

### 変更

現在、ユーザー認証方法のカスタムインターフェースは、[ユーザー認証プラグイン `@nocobase/plugin-auth`](../plugins/auth/index.md) が提供するインターフェース `registerType` を使用して登録します。

```ts
export type AuthOptions = {
  components: Partial<{
    SignInForm: ComponentType<{ authenticator: AuthenticatorType }>;
    SignInButton: ComponentType<{ authenticator: AuthenticatorType }>;
    SignUpForm: ComponentType<{ authenticatorName: string }>;
    AdminSettingsForm: ComponentType;
  }>;
};

export class AuthPlugin extends Plugin {
  registerType(authType: string, options: AuthOptions);
}
```

### 例

#### ログインフォーム + 登録フォーム + 管理設定フォームを拡張

```diff
- import { OptionsComponentProvider, SigninPageProvider, SignupPageProvider } from '@nocobase/client';
+ import AuthPlugin from '@nocobase/plugin-auth/client';
  import React, { FC } from 'react';
  import { Options } from './basic/Options';
  import SignInForm from './basic/SignInForm';
  import SignUpForm from './basic/SignUpForm';

- export const BasicAuthPluginProvider: FC = (props) => {
-   return (
-     <OptionsComponentProvider authType="EmailPassword" component={Options}>
-       <SigninPageProvider authType="Email/Password" tabTitle="パスワードでサインイン" component={SignInForm}>
-         <SignupPageProvider authType="EmailPassword" component={SignUpForm}>
-           {props.children}
-         </SignupPageProvider>
-       </SigninPageProvider>
-     </OptionsComponentProvider>
-   );
- }

 export class BasicAuthPlugin extends Plugin {
   async load() {
-    this.app.use(BasicAuthPluginProvider);
+    const auth = this.app.pm.get(AuthPlugin);
+    auth.registerType("Email/Password", {
+      components: {
+        SignInForm: SignInForm,
+        SignUpForm: SignUpForm,
+        AdminSettingsForm: Options,
+      },
+    });
   }
 }
```

#### サードパーティのログインボタン + 管理設定フォームを拡張

```diff
- import { OptionsComponentProvider, SigninPageExtensionProvider } from '@nocobase/client';
+ import AuthPlugin from '@nocobase/plugin-auth/client';
  import React, { FC } from 'react';
  import { OIDCButton } from './OIDCButton';
  import { Options } from './Options';

- export const OIDCProvider: FC = (props) => {
-   return (
-     <SigninPageExtensionProvider component={OIDCButton} authType="OIDC">
-       <OptionsComponentProvider authType="OIDC" component={Options}>
-         {props.children}
-       </OptionsComponentProvider>
-     </SigninPageExtensionProvider>
-   );
- };

export class OidcPlugin extends Plugin {
  async load() {
-     const auth = this.app.pm.get(AuthPlugin);
+     auth.registerType("OIDC", {
+       components: {
+         SignInButton: OIDCButton,
+         AdminSettingsForm: Options,
+       },
+     });
   }
}

完全な使い方はドキュメントを参照してください: [ユーザー認証 - 開発ガイド](../plugins/auth/dev/guide.md)

### 削除

元の `Provider` は削除されました：

- `SigninPageProvider`
- `SignupPageProvider`
- `OptionsComponentProvider`
- `SigninExtensionProvider`

