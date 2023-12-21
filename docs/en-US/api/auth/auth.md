# Auth

## Overview

`Auth` is an abstract class for registering a authentication type, defining the necessary interfaces for completing the user authentication. To extend and implement a new authentication type, inherit from the `Auth` class and implement its methods. A foundational implementation can be found in [BaseAuth](./base-auth.md).

```ts
interface IAuth {
  user: Model;
  // Check the authenticaiton status and return the current user.
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
  // check: core logic of authentication
  async check() {
    // ...
  }
}
```

## Properties

### `user`

Authenticated user infomation.

#### Signature

- `abstract user: Model`

## Class Methods

### `constructor()`

To create a `Auth` instance.

#### Signature

- `constructor(config: AuthConfig)`

#### Type

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

- `authenticator` - Authenticator data model. In NocoBase application, the actual type is [AuthModel](../../plugins/auth/dev/api.md#authmodel)
- `options` - Configuration of the authenticator
- `ctx` - The request context

### `check()`

Authentication logic, returning user information. A abstract method that all authentication types must implement.

#### Signature

- `abstract check(): Promise<Model>`

### `signIn()`

User sign-in.

#### Signature

- `signIn(): Promise<any>`

### `signUp()`

User sign-up.

#### Signature

- `signUp(): Promise<any>`

### `signOut()`

User sign-out.

#### Signature

- `signOut(): Promise<any>`
