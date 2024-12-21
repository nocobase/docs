# 0.17.0-alpha.5

## Server `ctx.state.currentUser`

### Background

The new version introduces caching for the user information stored in `ctx.state.currentUser`.

Previously, `ctx.state.currentUser` stored a Sequelize UserModel object:

```json
{
  "dataValues": {
    "username": "nocobase"
    // Other user information
  }
  // Other Model properties
}
```

The actual user information is located in `dataValues`. You can access the corresponding properties through a `getter` accessor or use methods provided by Sequelize Model like `get`, `setDataValues`, `toJSON`, etc.

With the addition of caching, if the user selects a caching method other than in-memory caching, retrieving results from the cache will yield a plain object. Consequently, Model-related methods used in the code will throw exceptions.

### Changes

`ctx.state.currentUser` now directly utilizes a plain object containing user information, specifically the contents of `dataValues` of the original Model.

```json
{
  "username": "nocobase"
  // Other user information
}
```

Model-related methods no longer apply to `ctx.state.currentUser`.

#### Accessing User Attributes

Previously

```ts
ctx.state.currentUser.get('id');
// or
ctx.state.currentUser.id;
```

Now

```ts
// Only applicable method
ctx.state.currentUser.id;
```

#### Modifying User Attributes

Previously

```ts
ctx.state.currentUser.setDataValues('roles', roles);
// or
ctx.state.currentUser.roles = roles;
```

Now

```ts
// Only applicable method
ctx.state.currentUser.roles = roles;
```

#### Retrieving User Information Object

Previously

```ts
ctx.state.currentUser.toJSON();
```

Now

Deprecated. `ctx.state.currentUser` itself represents the result of `toJSON` on the UserModel.
