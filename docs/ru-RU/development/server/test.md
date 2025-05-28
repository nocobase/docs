# Testing

Testing is based on the [Jest](https://jestjs.io/) testing framework. To facilitate writing tests, `mockDatabase()` and `mockServer()` are provided for testing database and server-side applications.

:::warning
The test environment variables are configured in the `.env.test` file. It's recommended to use a separate test database for testing.
:::

## `mockDatabase()`

A fully isolated db testing environment is provided by default.

```ts
import { mockDatabase } from '@nocobase/test';

describe('my db suite', () => {
  let db;

  beforeEach(async () => {
    db = mockDatabase();
    db.collection({
      name: 'posts',
      fields: [
        {
          type: 'string',
          name: 'title',
        },
      ],
    });
    await db.sync();
  });

  afterEach(async () => {
    await db.close();
  });

  test('my case', async () => {
    const repository = db.getRepository('posts');
    const post = await repository.create({
      values: {
        title: 'hello',
      },
    });

    expect(post.get('title')).toEqual('hello');
  });
});
```

## `mockServer()`

A mock server application instance is provided, with the corresponding app.db being a `mockDatabase()` instance. Additionally, a convenient `app.agent()` is available for testing HTTP APIs. For Resource Action specific to NocoBase, `app.agent().resource()` is encapsulated for testing the Action of resources.

```ts
import { MockServer, mockServer } from '@nocobase/test';

// Each plugin's minimal installation app is different, the necessary plugins need to be added according to their own conditions.
async function createApp(options: any = {}) {
  const app = mockServer({
    ...options,
    plugins: [
      'acl',
      'users',
      'collection-manager',
      'error-handler',
      ...options.plugins,
    ],
    // Other configuration parameters might also be present.
  });
  // Here, some logic that needs special handling can be supplemented, such as importing data tables needed for testing.
  return app;
}

// Most tests need to start the application, so a common startup method can also be provided.
async function startApp() {
  const app = createApp();
  await app.quickstart({
    // Before running tests, clear the database.
    clean: true,
  });
  return app;
}

describe('test example', () => {
  let app: MockServer;

  beforeEach(async () => {
    app = await startApp();
  });

  afterEach(async () => {
    // After running the tests, clear the database.
    await app.destroy();
    // Stop without clearing the database.
    await app.stop();
  });

  test('case1', async () => {
    // coding...
  });
});
```

## Common Application Processes

If you need to test different processes, you can execute related commands according to the following examples.

### Install then Start

Terminal command line

```bash
yarn nocobase install
yarn start
```

Preliminary test process

```ts
const app = mockServer();
await app.runCommand('install');
await app.runCommand('start');
```

### Start then Install

Terminal command line

```bash
yarn start # Stay in memory
# Execute in another terminal
yarn nocobase install
```

Preliminary test process

```ts
const app = mockServer();
await app.runCommand('start');
await app.runCommand('install');
```

### Quickstart (Auto Install or Upgrade)

Terminal command line

```bash
yarn start --quickstart
```

Preliminary test process

```ts
const app = mockServer();
await app.runCommand('start', '--quickstart');
```

### Reinstall an Already Installed and Started Application

Terminal command line

```bash
yarn start --quickstart
# Execute in another terminal
yarn nocobase install -f
```

Preliminary test process

```ts
const app = mockServer();
await app.runCommand('start', '--quickstart');
await app.runCommand('install', '-f');
```

### Upgrade the Application (Before Starting)

Terminal command line

```bash
yarn nocobase upgrade
yarn start
```

Preliminary test process

```ts
const app = mockServer();
await app.runCommand('upgrade', '-f');
await app.runCommand('start', '--quickstart');
```

### Upgrade the Application (After Starting)

```bash
yarn start # Stay in memory
# Execute in another terminal
yarn nocobase upgrade
```

Preliminary test process

```ts
const app = mockServer();
await app.runCommand('start', '--quickstart');
await app.runCommand('upgrade', '-f');
```

### Activate a Plugin

Terminal command line

```bash
yarn start --quickstart
yarn pm enable @my-project/plugin-hello
```

Preliminary test process

```ts
const app = mockServer();
await app.runCommand('start', '--quickstart');
await app.runCommand('pm', 'enable', '@my-project/plugin-hello');
```

### Disable a Plugin

Terminal command line

```bash
yarn start --quickstart
yarn pm disable @my-project/plugin-hello
```

Preliminary test process

```ts
const app = mockServer();
await app.runCommand('start', '--quickstart');
await app.runCommand('pm', 'disable', '@my-project/plugin-hello');
```
