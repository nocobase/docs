# Server

## Overview

NocoBase conducts server-side testing based on [Vitest](https://vitest.dev/). `@nocobase/test` provides convenient methods for server-side testing to mock services and databases.

### Basic Usage

```ts
describe('actions', () => {
  let app: MockServer;
  let db: Database;
  let agent: any;

  beforeAll(async () => {
    app = await createMockServer({
      plugins: ['acl', 'users', 'data-source-manager'],
    });
    db = app.db;
    agent = app.agent();
  });

  afterAll(async () => {
    await app.destroy();
  });
});
```

## API

### `defineConfig()`

Retrieve the Vitest configuration.

```ts
import { defineConfig } from '@nocobase/test/vitest.mjs';

const config = defineConfig();
```

### `mockDatabase()`

Create a `MockDataBase` instance for testing.

#### Signature

- `mockDatabase(options: IDatabaseOptions = {}): MockDatabase`

#### Details

| Parameter | Type               | Description                               |
| --------- | ------------------ | ----------------------------------------- |
| `options` | `IDatabaseOptions` | Refer to [DataBase](../database/index.md) |

### `mockServer()`

Create a `MockServer` instance.

#### Signature

- `mockServer(options?: ApplicationOptions): MockServer`

#### Details

| Parameter | Type                 | Description                                      |
| --------- | -------------------- | ------------------------------------------------ |
| `options` | `ApplicationOptions` | Refer to [Application](../server/application.md) |

### `createMockServer()`

Create a `MockServer` instance, perform forced installation, and start it.

#### Signature

```ts
createMockServer(options?: ApplicationOptions & {
    version?: string;
    beforeInstall?: BeforeInstallFn;
    skipInstall?: boolean;
    skipStart?: boolean;
}): Promise<MockServer>
```

#### Details

| Parameter               | Type                 | Description                                      |
| ----------------------- | -------------------- | ------------------------------------------------ |
| `options`               | `ApplicationOptions` | Refer to [Application](../server/application.md) |
| `options.version`       | `string`             | Application version                              |
| `options.beforeInstall` | `BeforeInstallFn`    | Function to execute before installation          |
| `options.skipInstall`   | `boolean`            | Whether to skip forced installation              |
| `options.skipStart`     | `boolean`            | Whether to skip application startup              |

### `MockServer`

`MockServer` inherits from `Application` and is a class for server-side testing applications.

#### Class Methods

##### `loadAndInstall()`

Load and install the application.

##### `cleanDb()`

Clear the database.

##### `quickstart()`

Execute `nocobase start --quickstart`.

##### `destroy()`

Destroy the application.

##### `agent()`

Initiate API requests in test cases.

**Signature**

- `agent(): ExtendedAgent`

**Type**

```ts
interface ExtendedAgent extends SuperAgentTest {
  login: (user: any) => ExtendedAgent;
  loginUsingId: (userId: number) => ExtendedAgent;
  resource: (name: string, resourceOf?: any) => Resource;
}
```

**Details**

- `SuperAgentTest`

Refer to [superagent](https://github.com/ladjs/superagent).

- `login()`

Log in with a user model.

- `loginUsingId()`

Log in with a user ID.

- `resource()`

Retrieve a resource.

| Parameter    | Type     | Description                                                                                                                                                                        |
| ------------ | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`       | `string` | 1. Resource name, e.g., `a` <br /> 2. Associated object name of the resource, e.g., `a.b`                                                                                          |
| `resourceOf` | `any`    | Primary key value of the resource when `resource` is the associated object name of the resource. For example, when `a.b` is specified, it represents the primary key value of `a`. |

### sleep
