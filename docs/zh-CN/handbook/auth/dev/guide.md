# 扩展认证类型

## 概览

NocoBase 支持按需要扩展用户认证类型。下面介绍如何注册服务端接口和客户端用户界面。

## 服务端

### 接口

NocoBase 内核提供了扩展认证类型的注册和管理。扩展登录插件的核心逻辑处理，需要继承内核的 `Auth` 抽象类，并对相应的标准接口进行实现。  
完整 API 参考 [Auth](../../../api/auth/auth.md).

```typescript
import { Auth } from '@nocobase/auth';

class CustomAuth extends Auth {
  set user(user) {}
  get user() {}

  async check() {}
  async signIn() {}
}
```

多数情况下，扩展的用户认证类型也可以沿用现有的 JWT 鉴权逻辑来生成用户访问 API 的凭证。内核的 `BaseAuth` 类对 `Auth` 抽象类做了基础实现，参考 [BaseAuth](../../../api/auth/base-auth.md). 插件可以直接继承 `BaseAuth` 类以便复用部分逻辑代码，降低开发成本。

```javascript
import { BaseAuth } from '@nocobase/auth';

class CustomAuth extends BaseAuth {
  constructor(config: AuthConfig) {
    // 设置用户数据表
    const userCollection = config.ctx.db.getCollection('users');
    super({ ...config, userCollection });
  }

  // 实现用户登录逻辑
  async validate() {}
}
```

### 用户数据

在 NocoBase 应用中，默认情况下相关的表定义为：

| 数据表                | 作用                                               | 插件                                                        |
| --------------------- | -------------------------------------------------- | ----------------------------------------------------------- |
| `users`               | 存储用户信息，邮箱、昵称和密码等                   | [用户插件 (`@nocobase/plugin-users`)](../../users/index.md) |
| `authenticators`      | 存储认证器（认证类型实体）信息，对应认证类型和配置 | 用户认证插件 (`@nocobase/plugin-auth`)                      |
| `usersAuthenticators` | 关联用户和认证器，保存用户在对应认证器下的信息     | 用户认证插件 (`@nocobase/plugin-auth`)                      |

通常情况下，扩展登录方式用 `users` 和 `usersAuthenticators` 来存储相应的用户数据即可，特殊情况下才需要自己新增 Collection.

`usersAuthenticators` 的主要字段为

| 字段            | 说明                                                 |
| --------------- | ---------------------------------------------------- |
| `uuid`          | 该种认证方式的用户唯一标识，如手机号、微信 openid 等 |
| `meta`          | JSON 字段，其他需要保存的信息                        |
| `userId`        | 用户 ID                                              |
| `authenticator` | 认证器名字（唯一标识）                               |

对于用户查询和创建操作，`authenticators` 的数据模型 `AuthModel` 也封装了几个方法，可以在 `CustomAuth` 类中通过 `this.authenticator[方法名]` 使用。完整 API 参考 [AuthModel](../dev/api.md#authmodel).

```ts
import { AuthModel } from '@nocobase/plugin-auth';

class CustomAuth extends BaseAuth {
  async validate() {
    // ...
    const authenticator = this.authenticator as AuthModel;
    this.authenticator.findUser(); // 查询用户
    this.authenticator.newUser(); // 创建新用户
    this.authenticator.findOrCreateUser(); // 查询或创建新用户
    // ...
  }
}
```

### 认证类型注册

扩展的认证方式需要向认证管理模块注册。

```javascript
class CustomAuthPlugin extends Plugin {
  async load() {
    this.app.authManager.registerTypes('custom-auth-type', {
      auth: CustomAuth,
    });
  }
}
```

## 客户端

客户端用户界面通过用户认证插件客户端提供的接口 `registerType` 进行注册：

```ts
import AuthPlugin from '@nocobase/plugin-auth/client';

class CustomAuthPlugin extends Plugin {
  async load() {
    const auth = this.app.pm.get(AuthPlugin);
    auth.registerType('custom-auth-type', {
      components: {
        SignInForm, // 登录表单
        SignInButton, // 登录（第三方）按钮，可以和登录表单二选一
        SignUpForm, // 注册表单
        AdminSettingsForm, // 后台管理表单
      },
    });
  }
}
```

### 登录表单

![](./static/2023-12-20-12-12-45.png)

如果有多个认证器对应的认证类型都注册了登录表单，会以 Tab 的形式展示。Tab 标题为后台配置的认证器标题。

![](./static/2023-12-20-12-08-49.png)

### 登录按钮

![](./static/2023-12-22-10-21-28.png)

通常为第三方登录按钮，实际上可以是任意组件。

### 注册表单

![](./static/2023-12-20-12-17-07.png)

如果需要从登录页跳转到注册页，需要在登录组件中自己处理。

### 后台管理表单

![](./static/2023-12-20-12-19-51.png)

上方为通用的认证器配置，下方为可注册的自定义配置表单部分。
