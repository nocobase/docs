# AuthManager

## Overview

`AuthManager` is the authentication management module within NocoBase, designed for registering various types of authentication.

### Basic Usage

```ts
const authManager = new AuthManager({
  // Use for retrieving the current authenticator name from the request header
  authKey: 'X-Authenticator',
});

// Set methods for storing and retrieving authenticators data in AuthManager
authManager.setStorer({
  get: async (name: string) => {
    return db.getRepository('authenticators').find({ filter: { name } });
  },
});

// Register a new authentication type
authManager.registerTypes('basic', {
  auth: BasicAuth,
  title: 'Password',
});

// Use authentication middleware
app.resourcer.use(authManager.middleware());
```

### Concepts

- **Authentication type (`AuthType`)**: Different types of authentication, such as Password, SMS, OIDC, SAML, etc.
- **Authenticator**: An authenticator is a database-stored entity linked to a configuration record for a specific authentication type (`AuthType`). Multiple authenticators can exist for one authentication type, each offering diffrent authentications.
- **Authenticator name**: Unique identifier for an authenticator, used to determine the current authentication employed by the current request.

## Class Methods

### `constructor()`

To create a `AuthManager` instance.

#### Signature

- `constructor(options: AuthManagerOptions)`

#### Type

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

- `authKey` - Used to retrieve the current authenticator identifier from the request header, for example, `X-Authenticator`.
- `default` - Optional. Default authenticator name.
- `jwt` - Optional. Can be configured if using JWT authentication.
  - `secret` - JWT token seret key.
  - `expiresIn` - Optional. JWT token expiration period. Default is `7d`.

### `setStorer()`

Configure methods for storing and retrieving authenticator data.

#### Signature

- `setStorer(storer: Storer)`

#### Type

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

- `Authenticator`
  - `authType` - Authentication type
  - `options` - Authenticator options
- `Storer` - Authenticator storer interface
  - `get` - Retrieve an authenticator by the authenticator name. In the NocoBase application, the actual response type for this is [AuthModel](../../plugins/auth/dev/api.md#authmodel).

### `registerTypes()`

Register a authentication type.

#### Signature

- `registerTypes(authType: string, authConfig: AuthConfig)`

#### Type

```ts
export type AuthExtend<T extends Auth> = new (config: Config) => T;

type AuthConfig = {
  auth: AuthExtend<Auth>; // The authentication class.
  title?: string; // The display name of the authentication type.
};
```

#### Details

- `auth` - Refer to [Auth](./auth.md)
- `title` - Optional。The title displayed for this authentication type in the frontend.

### `listTypes()`

Retrieve a list of registered authentication types.

#### Signature

- `listTypes(): { name: string; title: string }[]`

#### Details

- `name` - Name of the authentication type
- `title` - Title of the authentication type

### `get()`

Get a authenticator.

#### Signature

- `get(name: string, ctx: Context)`

#### Details

- `name` - Authenticator name
- `ctx` - Request context

### `middleware()`

Authentication middleware. Retrieve the current authenticator and perform user authentication.
