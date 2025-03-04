# ACL

## Vue d'ensemble

`ACL` est le moduel de gestion des permissions de NocoBase. Il est responsable de la gestion des rôles utilisateurs, de l'enregistrement des permissions et des autorisations. Il évalue aussi la politique de permission et le contrôle des accèss.

### Concepts

- **Resource**: Collections, ou ressources personnalisées enregistrées. Se reférer à [`@nocobase/resourcer`](../resourcer/resource-manager.md).
- **Action**: Une interface d'opération pour une ressource, comme la création, la lecture, la modification, la suppression ou d'autres actions personnalisées. Se reférer à [`@nocobase/actions`](../actions).
- **Strategy**: Configure des permission globales pour les rôles, comme des permissions pour une opération sur une ressource comme la création, la lecture, la modification, la suppression, l'importation, l'exportation, et les permission système comme configurer l'interface utilisateur.
- **Snippet**: Defines a collection of operations, enabling unified management of operation permissions. Snippet identifiers can be matched using the [minimatch](https://github.com/isaacs/minimatch) rules.
- **Snippet**: Définit une collection d'opérations, permettant un gestion unifié de permission sur opération. Les identifiants de Snippet peuvent être associés en utilisant les règles [minimatch](https://github.com/isaacs/minimatch).

## Méthode de classe

### `define()`

Défini un rôle.

#### Signature

- `define(options: DefineOptions): ACLRole`

#### Définitions du type

```typescript
export interface DefineOptions {
  role: string;
  strategy?: string | AvailableStrategyOptions;
  actions?: ResourceActionsOptions;
  snippets?: string[];
}

export interface AvailableStrategyOptions {
  displayName?: string;
  actions?: false | string | string[];
  allowConfigure?: boolean;
  resource?: '*';
}

export interface ResourceActionsOptions {
  [actionName: string]: RoleActionParams;
}

export interface RoleActionParams {
  fields?: string[];
  filter?: any;
  own?: boolean;
  whitelist?: string[];
  blacklist?: string[];
}
```

#### Détails

##### DefineOptions

| Propriété  | Type                                                                | Description                                                       |
| ---------- | ------------------------------------------------------------------- | ----------------------------------------------------------------- |
| `role`     | `string`                                                            | Unique identifier for the role                                    |
| `strategy` | `string` \| [`AvailableStrategyOptions`](#availablestrategyoptions) | Optional, global access strategy for the role                     |
| `actions`  | [`{ [actionName: string]: RoleActionParams; }`](#roleactionparams)  | Optional, permission configuration for actions                    |
| `snippets` | `string[]`                                                          | Optional, defines snippets that the role has permission to access |

##### AvailableStrategyOptions

| Propriété        | Type                              | Description                                               |
| ---------------- | --------------------------------- | --------------------------------------------------------- |
| `displayName`    | `string`                          | Optional, display name for the strategy                   |
| `action`         | `false` \| `string` \| `string[]` | Optional, operation interfaces                            |
| `allowConfigure` | `boolean`                         | Optional, whether to allow configuring the user interface |
| `resource`       | `*`                               | Applies to all resources                                  |

##### RoleActionParams

| Propriété   | Type       | Description                                                                                            |
| ----------- | ---------- | ------------------------------------------------------------------------------------------------------ |
| `fields`    | `string[]` | Optional, fields of the data table to operate on                                                       |
| `filter`    | `any`      | Optional, filter parameters that must be met, only records that meet the conditions can be operated on |
| `own`       | `boolean`  | Optional, whether to operate only on records created by oneself                                        |
| `whitelist` | `string[]` | Optional, whitelist of fields that can be accessed, only fields in the whitelist can be accessed       |
| `blacklist` | `string[]` | Optional, blacklist of fields that cannot be accessed, fields in the blacklist cannot be accessed      |

### `can()`

Determines the permission to execute an action and returns the final action parameters. Returns `null` if no permission.

#### Signature

- `can(options: CanArgs): CanResult | null`

#### Type Definitions

```typescript
interface CanArgs {
  role: string;
  resource: string;
  action: string;
  ctx?: any;
}

interface CanResult {
  role: string;
  resource: string;
  action: string;
  params?: any;
}
```

#### Details

##### CanArgs

| Property   | Type     | Description               |
| ---------- | -------- | ------------------------- |
| `role`     | `string` | Role identifier           |
| `resource` | `string` | Resource identifier       |
| `action`   | `string` | Action identifier         |
| `ctx`      | `any`    | Optional, request context |

##### CanResult

| Property   | Type     | Description                 |
| ---------- | -------- | --------------------------- |
| `role`     | `string` | Role identifier             |
| `resource` | `string` | Resource identifier         |
| `action`   | `string` | Action identifier           |
| `params`   | `any`    | Optional, action parameters |

### `registerSnippet()`

Registers a snippet.

#### Signature

- `registerSnippet(snippet: SnippetOptions)`

#### Type Definitions

```typescript
export type SnippetOptions = {
  name: string;
  actions: string[];
};
```

#### Details

| Property  | Type       | Description                                                                                                                              |
| --------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `name`    | `string`   | Snippet identifier, can be matched using the [minimatch](https://github.com/isaacs/minimatch) rules. E.g., `auth.auth` matches `auth.*`. |
| `actions` | `string[]` | Resource operations included in the snippet, in the format `resource:action`. E.g., `users:list`.                                        |

### `setAvailableAction()`

Sets allowed actions.

#### Signature

- `setAvailableAction(name: string, options: AvailableActionOptions = {})`

```typescript
export interface AvailableActionOptions {
  displayName?: string;
  aliases?: string[] | string;
  resource?: string;
  // Perform operations on new data
  onNewRecord?: boolean;
  // Allow configuring fields
  allowConfigureFields?: boolean;
}
```

#### Details

| Property               | Type                   | Description                                                                           |
| ---------------------- | ---------------------- | ------------------------------------------------------------------------------------- |
| `displayName`          | `string`               | Optional, display name for the action                                                 |
| `aliases`              | `string` \| `string[]` | Optional, action aliases. E.g., aliases for `get`, `list` operations are both `view`. |
| `resource`             | `string`               | Optional, resource                                                                    |
| `onNewRecord`          | `boolean`              | Optional, whether the operation applies to new data, such as create operation         |
| `allowConfigureFields` | `boolean`              | Optional, whether to allow configuring fields                                         |

### `setAvailableStrategy()`

Sets allowed strategies for actions.

#### Signature

- `setAvailableStrategy(name: string, options: AvailableStrategyOptions)`

Refer to [AvailableStrategyOptions](#availablestrategyoptions).

### `allow()`

Defines the conditions under which operations are allowed.

```typescript
acl.allow('plugins', '*', 'public');
```

#### Signature

- `allow(resourceName: string, actionNames: string[] | string, condition?: string | ConditionFunc)`

#### Type

```typescript
export type ConditionFunc = (ctx: any) => Promise<boolean> | boolean;
```

#### Details

| Parameter      | Type                        | Description                                                                 | Default  |
| -------------- | --------------------------- | --------------------------------------------------------------------------- | -------- |
| `resourceName` | `string`                    | Resource                                                                    | -        |
| `actionNames`  | `string` \| `string[]`      | Action                                                                      | -        |
| `condition`    | `string` \| `ConditionFunc` | Optional, predefined condition identifier, or condition evaluation function | `public` |

Predefined condition identifiers:

- `public`: Public interface.
- `loggedIn`: Allowed when the user is logged in.
- `allowConfigure`: Allowed when the current user role has permission to configure the user interface.

### `addFixedParams()`

Adds fixed parameters to operations, merging them with current request parameters.

```typescript
acl.addFixedParams('users', 'list', () => {
  return {
    filter: {
      id: {
        $eq: 1,
      },
    },
  };
});
```

#### Signature

- `addFixedParams(resource: string, action: string, merger: Merger)`

#### Type Definitions

```typescript
export type Merger = () => object;
```

#### Details

| Parameter  | Type     | Description                                               |
| ---------- | -------- | --------------------------------------------------------- |
| `resource` | `string` | Resource                                                  |
| `action`   | `string` | Action                                                    |
| `merger`   | `Merger` | Function returning the fixed parameter object to be added |

### `use()`

Adds the `ACL` middleware.

```typescript
acl.use(async () => {
  return async function (ctx, next) {
    // ...
    await next();
  };
});
```

#### Signature

- `use(fn: any, options?: ToposortOptions)`

#### Details

Refer to [Middleware](../../development/server/middleware).

### `middleware()`

NocoBase access control middleware.
