# Auth

## Overview

`Auth` is an abstract class for user authentication types, defining the interfaces required to complete user authentication. To extend new user authentication types, you need to inherit from the `Auth` class and implement its methods. The basic implementation can be referred to as [BaseAuth](./base-auth.md).

```ts
interface IAuth {
  user: Model;
  // Check the authentication status and return the current user.
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
  // check: Authentication
  async check() {
    // ...
  }
}
```

## Instance Properties

### `user`

Information of the authenticated user.

#### Signature

- `abstract user: Model`

## Class Methods

### `constructor()`

Constructor, creates an instance of `Auth`.

#### Signature

- `constructor(config: AuthConfig)`

#### Types

```ts
export type AuthConfig = {
  authenticator: Authenticator;
  options: {
    [key: string]: any;
  };
  ctx: Context;
};
```

#### Details

##### AuthConfig

| Attribute       | Type                                            | Description                                                                                                                 |
| --------------- | ----------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `authenticator` | [`Authenticator`](./auth-manager#authenticator) | Authenticator data model, the actual type in NocoBase applications is [AuthModel](../../handbook/auth/dev/api.md#authmodel) |
| `options`       | `Record<string, any>`                           | Authenticator-related configurations                                                                                        |
| `ctx`           | `Context`                                       | Request context                                                                                                             |

### `check()`

User authentication, returns user information. This is an abstract method that all authentication types must implement.

#### Signature

- `abstract check(): Promise<Model>`

### `signIn()`

User login.

#### Signature

- `signIn(): Promise<any>`

### `signUp()`

User registration.

#### Signature

- `signUp(): Promise<any>`

### `signOut()`

User logout.

#### Signature

- `signOut(): Promise<any>`
