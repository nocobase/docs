# 0.18.0-alpha.1

:::warning
This article only covers incompatibility changes related to plugin development.
:::

## Test framework changed from jest to vitest

- [Server - Testing](/development/server/test)
- [Client - Testing](/development/client/test)

## Authentication Client API changes

### Background

Previously, when developing the client for a custom authentication method, it was based on React `Context`.
It utilized the `Provider` to extend custom sign-in, sign-up, and admin settings forms. For example:

```html
<OptionsComponentProvider authType="Email/Password" component={Options}>
  <SigninPageProvider authType="EmailPassword" tabTitle={t('Sign in via password')} component={SignInPage}>
    <SignupPageProvider authType="Email/Password" component={SignUpPage}>
      {props.children}
    </SignupPageProvider>
  </SigninPageProvider>
</OptionsComponentProvider>
```

It was required nested Providers, leading to less concise and intuitive code.

### Changes

Now the client for a custom authentication can be registered by utilizing the `registerType` method provided by the [authentication plugin `@nocobase/plugin-auth`](../plugins/auth/index.md).

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

### Example

#### Customize sign-in form + sign-up form + admin settings form

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

#### Customize sign-in (thirt-party) button + admin settings form

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

For more details, refer to the documentation: [Authentication - Development](../plugins/auth/dev/guide.md)

### Removed

The following `Provider` has been removed：

- `SigninPageProvider`
- `SignupPageProvider`
- `OptionsComponentProvider`
- `SigninExtensionProvider`
