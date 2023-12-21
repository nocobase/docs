# 0.17.0-alpha.8

## 用户认证客户端 API

### 背景

之前在扩展用户认证方式时，客户端是基于 React `Context`, 使用 `Provider` 的方式扩展自定义的登录、注册、配置界面，如：

```html
<OptionsComponentProvider authType="Email/Password" component={Options}>
  <SigninPageProvider authType="EmailPassword" tabTitle={t('Sign in via password')} component={SignInPage}>
    <SignupPageProvider authType="Email/Password" component={SignUpPage}>
      {props.children}
    </SignupPageProvider>
  </SigninPageProvider>
</OptionsComponentProvider>
```

扩展一个认证方式时需要经过多个 `Provider` 嵌套，代码不够简洁直观。

### 变更

现在扩展用户认证方式的自定义界面，通过 [用户认证插件 `@nocobase/plugin-auth`](../plugins/auth/index.md) 提供的接口 `registerType` 进行注册。

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

### 示例

#### 扩展登录表单 + 注册表单 + 后台配置表单

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
-       <SigninPageProvider authType="Email/Password" tabTitle="Sign in via password" component={SignInForm}>
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

#### 扩展第三方登录按钮 + 后台配置表单

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
```

完整用法可以参考文档: [用户认证 - 开发指南](../plugins/auth/dev/guide.md)

### 移除

原来的 `Provider` 已被移除：

- `SigninPageProvider`
- `SignupPageProvider`
- `OptionsComponentProvider`
- `SigninExtensionProvider`
