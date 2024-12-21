# BaseAuth

## Overview

`BaseAuth` inherits from the abstract class [Auth](./auth.md) and serves as the basic implementation for user authentication types, using JWT as the authentication method. In most cases, extending user authentication types can be achieved by inheriting from `BaseAuth` instead of directly inheriting from the `Auth` abstract class.

```ts
class BasicAuth extends BaseAuth {
  constructor(config: AuthConfig) {
    // Set user collection
    const userCollection = config.ctx.db.getCollection('users');
    super({ ...config, userCollection });
  }

  // User authentication logic, called by `auth.signIn`
  // Returns user data
  async validate() {
    const ctx = this.ctx;
    const { values } = ctx.action.params;
    // ...
    return user;
  }
}
```

## Class Methods

### `constructor()`

Constructor, creates an instance of `BaseAuth`.

#### Signature

- `constructor(config: AuthConfig & { userCollection: Collection })`

#### Details

| Parameter        | Type         | Description                                                                                                  |
| ---------------- | ------------ | ------------------------------------------------------------------------------------------------------------ |
| `config`         | `AuthConfig` | Refer to [Auth - AuthConfig](./auth.md#authconfig)                                                           |
| `userCollection` | `Collection` | User collection, e.g., `db.getCollection('users')`, refer to [DataBase - Collection](../database/collection) |

### `user()`

Accessor for setting and getting user information, defaulting to using the `ctx.state.currentUser` object.

#### Signature

- `set user()`
- `get user()`

### `check()`

Authenticates through the request token and returns user information.

### `signIn()`

User login, generates a token.

### `signUp()`

User registration.

### `signOut()`

User logout, token expiration.

### `validate()` \*

Core authentication logic, called by the `signIn` interface, to determine whether the user can successfully log in.
