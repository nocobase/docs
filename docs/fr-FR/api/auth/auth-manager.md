# AuthManager

## Overview

`AuthManager` is the user authentication management module in NocoBase, used for registering different types of user authentication.

### Basic Usage

```ts
const authManager = new AuthManager({
  // Key to retrieve the current authenticator identifier from the request header
  authKey: 'X-Authenticator',
});

// Set methods for storing and retrieving authenticators in AuthManager
authManager.setStorer({
  get: async (name: string) => {
    return db.getRepository('authenticators').find({ filter: { name } });
  },
});

// Register an authentication type
authManager.registerTypes('basic', {
  auth: BasicAuth,
  title: 'Password',
});

// Use authentication middleware
app.resourceManager.use(authManager.middleware());
```

### Concepts

- **Authentication type (`AuthType`)**: Different types of authentication, such as Password, SMS, OIDC, SAML, etc.
- **Authenticator**: An authenticator is a database-stored entity linked to a configuration record for a specific authentication type (`AuthType`). Multiple authenticators can exist for one authentication type, each offering diffrent authentications.
- **Authenticator name**: Unique identifier for an authenticator, used to determine the current authentication employed by the current request.

## Class Methods

### `constructor()`

Constructor, creates an instance of `AuthManager`.

#### Signature

- `constructor(options: AuthManagerOptions)`

#### Types

```ts
export interface JwtOptions {
  secret: string;
  expiresIn?: string;
}

export type AuthManagerOptions = {
  authKey: string;
  default?: string;
  jwt?: JwtOptions;
};
```

#### Details

##### AuthManagerOptions

| Attribute | Type                        | Description                                                                     | Default           |
| --------- | --------------------------- | ------------------------------------------------------------------------------- | ----------------- |
| `authKey` | `string`                    | Optional key to save the current authenticator identifier in the request header | `X-Authenticator` |
| `default` | `string`                    | Optional, default authenticator identifier                                      | `basic`           |
| `jwt`     | [`JwtOptions`](#jwtoptions) | Optional, configure if using JWT for authentication                             | -                 |

##### JwtOptions

| Attribute   | Type     | Description                       | Default           |
| ----------- | -------- | --------------------------------- | ----------------- |
| `secret`    | `string` | Token secret key                  | `X-Authenticator` |
| `expiresIn` | `string` | Optional, token expiration period | `7d`              |

### `setStorer()`

Set methods for storing and retrieving authenticator data.

#### Signature

- `setStorer(storer: Storer)`

#### Types

```ts
export interface Authenticator = {
  authType: string;
  options: Record<string, any>;
  [key: string]: any;
};

export interface Storer {
  get: (name: string) => Promise<Authenticator>;
}
```

#### Details

##### Authenticator

| Attribute  | Type                  | Description                          |
| ---------- | --------------------- | ------------------------------------ |
| `authType` | `string`              | Authentication type                  |
| `options`  | `Record<string, any>` | Authenticator-related configurations |

##### Storer

`Storer` is the interface for authenticator storage, containing one method.

- `get(name: string): Promise<Authenticator>` - Get authenticator by identifier. In NocoBase, the actual returned type is [AuthModel](../../handbook/auth/dev/api#authmodel).

### `registerTypes()`

Register authentication types.

#### Signature

- `registerTypes(authType: string, authConfig: AuthConfig)`

#### Types

```ts
export type AuthExtend<T extends Auth> = new (config: Config) => T;

type AuthConfig = {
  auth: AuthExtend<Auth>; // The authentication class.
  title?: string; // The display name of the authentication type.
};
```

#### Details

| Attribute | Type               | Description                                                          |
| --------- | ------------------ | -------------------------------------------------------------------- |
| `auth`    | `AuthExtend<Auth>` | Authentication type implementation, refer to [Auth](./auth.md)       |
| `title`   | `string`           | Optional. Title of the authentication type displayed on the frontend |

### `listTypes()`

Get a list of registered authentication types.

#### Signature

- `listTypes(): { name: string; title: string }[]`

#### Details

| Attribute | Type     | Description                      |
| --------- | -------- | -------------------------------- |
| `name`    | `string` | Authentication type identifier   |
| `title`   | `string` | Title of the authentication type |

### `get()`

Get authenticator.

#### Signature

- `get(name: string, ctx: Context)`

#### Details

| Attribute | Type      | Description              |
| --------- | --------- | ------------------------ |
| `name`    | `string`  | Authenticator identifier |
| `ctx`     | `Context` | Request context          |

### `middleware()`

Authentication middleware. Get the current authenticator and perform user authentication.
