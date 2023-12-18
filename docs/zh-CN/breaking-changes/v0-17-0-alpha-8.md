# 0.17.0-alpha.8

## 用户认证客户端 API

### 背景

之前在扩展用户认证方式时，客户端是基于 React Context, 使用 Provider 的方式扩展自定义的登录、注册、配置界面，如：

```html
<OptionsComponentProvider authType="Email/Password" component={Options}>
  <SigninPageProvider authType="EmailPassword" tabTitle={t('Sign in via password')} component={SignInPage}>
    <SignupPageProvider authType="Email/Password" component={SignUpPage}>
      {props.children}
    </SignupPageProvider>
  </SigninPageProvider>
</OptionsComponentProvider>
```

扩展一个认证方式时需要经过多个 Provider 嵌套，代码不够简洁直观。

### 变更

现在扩展用户认证方式的自定义界面，通过用户认证插件提供的接口进行注册。

```ts
import AuthPlugin from '@nocobase/plugin-auth/client';

export class CustomAuthPlugin extends Plugin {
  async load() {
    const auth = this.app.pm.get(AuthPlugin);
    auth.authPages.register('custom-auth-type', {
      signIn: {
        display: 'form', // or 'custom'
        tabTitle: 'Sign in with custom type', // optional
        Component: SignInPageComponent,
      },
      signUp: {
        Component: SignUpPageComponent,
      },
      configForm: {
        Component: OptionsComponent,
      },
    });
  }
}
```

完整用法可以参考文档：(待补充)

原来的 Provider 已被移除：

- `SigninPageProvider`
- `SignupPageProvider`
- `OptionsComponentProvider`
- `SigninExtensionProvider`
