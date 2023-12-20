# BaseAuth

## Overview

`BaseAuth` extends the abstract class [Auth](./auth.md) and provides a foundational implementation for authentication types, utilizing JWT as the authentication method. In most cases, it's preferable to extend `BaseAuth` for customizing authentication type, rather than directly inheriting from the abstract class `Auth`.

```ts
class BasicAuth extends BaseAuth {
  constructor(config: AuthConfig) {
    // Set user collection
    const userCollection = config.ctx.db.getCollection('users');
    super({ ...config, userCollection });
  }

  // User sign-in logic，called by `auth.signIn`
  // Returning user information
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

To create a `BaseAuth` instance.

#### Signature

- `constructor(config: AuthConfig & { userCollection: Collection })`

#### Details

- `config` - Refer to [Auth - constructor](./auth.md#constructor)
- `userCollection` - User collection, E.g. `db.getCollection('users')`

### `user()`

Accessors for setting and getting user information，utilizing `ctx.state.currentUser` as the default storage mechanism.

#### Signature

- `set user()`
- `get user()`

### `check()`

Authenticate using the request token and return the user information.

### `signIn()`

User sign-in，generate token.

### `signUp()`

User sign-up.

### `signOut()`

User sign-out, and the token expires.

### `validate()` \*

Core logic to be implemented and invoked by `signIn` to determine if a user can successfully sign-in.
