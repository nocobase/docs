# Extend Authentication Type

## Overview

NocoBase supports extending user authentication types as needed. Here's how to register server interfaces and client user interfaces.

## Server

### Interface

The NocoBase kernel provides registration and management for extending authentication types. The core logic processing of extending the login plugin requires inheriting the `Auth` abstract class of the kernel and implementing the corresponding standard interfaces.  
For the complete API, see [Auth](../../../api/auth/auth.md).

```typescript
import { Auth } from '@nocobase/auth';

class CustomAuth extends Auth {
  set user(user) {}
  get user() {}

  async check() {}
  async signIn() {}
}
```

In most cases, the extended user authentication type can also use the existing JWT authentication logic to generate the credential for the user to access the API. The `BaseAuth` class in the kernel has done the basic implementation of the `Auth` abstract class, see [BaseAuth](../../../api/auth/base-auth.md). Plugins can directly inherit the `BaseAuth` class to reuse part of the logic code and reduce development costs.

```javascript
import { BaseAuth } from '@nocobase/auth';

class CustomAuth extends BaseAuth {
  constructor(config: AuthConfig) {
    // Set user data table
    const userCollection = config.ctx.db.getCollection('users');
    super({ ...config, userCollection });
  }

  // Implement user login logic
  async validate() {}
}
```

### User Data

In a NocoBase application, the related collections are defined by default as:

| Collections             | Description                                       | Plugin                                                        |
| ------------------------ | -------------------------------------------------- | ------------------------------------------------------------- |
| `users`                  | Store user information, such as email, nickname, and password                   | [User Plugin (`@nocobase/plugin-users`)](../../users/index.md) |
| `authenticators`         | Store authenticator (authentication type entity) information, corresponding to authentication type and configuration | User Authentication Plugin (`@nocobase/plugin-auth`)                      |
| `usersAuthenticators`    | Associates users and authenticators, saves user information under the corresponding authenticator     | User Authentication Plugin (`@nocobase/plugin-auth`)                      |

In general, extended login methods use `users` and `usersAuthenticators` to store corresponding user data. Only in special cases do you need to add a new Collection yourself.

The main fields of `usersAuthenticators` are

| Field             | Description                                                 |
| ----------------- | ----------------------------------------------------------- |
| `uuid`            | Unique identifier for this type of authentication, such as phone number, WeChat openid, etc |
| `meta`            | JSON field, other information to be saved                        |
| `userId`          | User ID                                              |
| `authenticator`   | Authenticator name (unique identifier)                               |

For user query and creation operations, the `authenticators` data model `AuthModel` also encapsulates several methods that can be used in the `CustomAuth` class via `this.authenticator[methodName]`. For the complete API, see [AuthModel](../dev/api.md#authmodel).

```ts
import { AuthModel } from '@nocobase/plugin-auth';

class CustomAuth extends BaseAuth {
  async validate() {
    // ...
    const authenticator = this.authenticator as AuthModel;
    this.authenticator.findUser(); // Query user
    this.authenticator.newUser(); // Create new user
    this.authenticator.findOrCreateUser(); // Query or create new user
    // ...
  }
}
```

### Authentication Type Registration

The extended authentication method needs to be registered with the authentication management module.

```javascript
class CustomAuthPlugin extends Plugin {
  async load() {
    this.app.authManager.registerTypes('custom-auth-type', {
      auth: CustomAuth,
    });
  }
}
```

## Client

The client user interface is registered through the interface `registerType` provided by the user authentication plugin client:

```ts
import AuthPlugin from '@nocobase/plugin-auth/client';

class CustomAuthPlugin extends Plugin {
  async load() {
    const auth = this.app.pm.get(AuthPlugin);
    auth.registerType('custom-auth-type', {
      components: {
        SignInForm, // Login form
        SignInButton, // Login (third party) button, can be either with the login form
        SignUpForm, // Registration form
        AdminSettingsForm, // Backstage management form
      },
    });
  }
}
```

### Login Form

![](https://static-docs.nocobase.com/33afe18f229c3db45c7a1921c2c050b7.png)

If multiple authenticators corresponding to the authentication type have registered login forms, they will be displayed in the form of Tabs. The Tab title is the title of the authenticator configured in the background.

![](https://static-docs.nocobase.com/ada6d7add744be0c812359c23bf4c7fc.png)

### Login Button

![](https://static-docs.nocobase.com/e706f7785782adc77b0f4ee4faadfab8.png)

Usually for third-party login buttons, but can actually be any component.

### Registration Form

![](https://static-docs.nocobase.com/f95c53431bf21ec312fcfd51923f0b42.png)

If you need to jump from the login page to the registration page, you need to handle it yourself in the login component.

### Backend Management Form

![](https://static-docs.nocobase.com/f4b544b5b0f5afee5621ad4abf66b24f.png)

The top is the generic authenticator configuration, and the bottom is the part of the custom configuration form that can be registered.