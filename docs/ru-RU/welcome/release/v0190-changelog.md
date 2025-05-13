# v0.19：2024-01-08

## New features

### Telemetry

- Development documentation: https://docs.nocobase.com/development/server/telemetry
- Kernel API: https://docs.nocobase.com/api/telemetry/telemetry
- Prometheus plugin: https://docs.nocobase.com/plugins/telemetry-prometheus

### Application backup and restore

- Plugin documentation: https://docs.nocobase.com/plugins/backup-restore

## Kernel optimizations

### Command line optimizations

For NocoBase 0.19 and above, plugin customized commands must be placed in the plugin's `src/server/commands/*.ts` directory with the following contents:

```typescript
export default function(app) {
  app.command('custom1').action();
}
```

The execution flow of the command line:

![20240115141900](https://static-docs.nocobase.com/20240115141900.png)

Special configuration of Command

- `ipc()` When the app is running, the command line sends commands via ipc to operate the running app instance, when ipc() is not configured, a new app instance will be created and then the operation will be executed (it will not interfere with the running app instance)
- `auth()` performs database verification, if the database configuration is incorrect, this command will not be executed.
- `preload()` whether to preload the application configuration, that is, execute app.load()

This can be configured according to the actual usage of the command, examples are as follows:

```typescript
app.command('a').ipc().action()
app.command('a').auth().action()
app.command('a').preload().action()
```

### Installation process optimization

![20240115141914](https://static-docs.nocobase.com/20240115141914.png)

### Startup process optimization

![20240115141922](https://static-docs.nocobase.com/20240115141922.png)

### Upgrade process optimization

![20240115141933](https://static-docs.nocobase.com/20240115141933.png)

The upgrade migrations are categorized into beforeLoad, afterSync, and afterLoad:

- beforeLoad: Executed before the loading of each module, divided into three stages:

  - Before loading kernel modules
  - Before loading preset plugins
  - Before loading other plugins

- afterSync: Executed after the synchronization of data table configurations with the database, divided into three stages:

  - After synchronizing kernel tables with the database
  - After synchronizing preset plugin tables with the database
  - After synchronizing other plugin tables with the database

- afterLoad: Executed only after the complete loading of the application.

```typescript
export default class extends Migration {
  // When to perform the migration
  on = 'beforeLoad';
  // Execute only when the following app version number is met.
  appVersion = '<=0.13.0-alpha.5';
  // Execute only when the following plugin version number is met.
  pluginVersion = '<=0.13.0-alpha.5';
  // Upgrade script.
  async up() {}
}
```

### Add the create-migration command

Creates a migration file

```bash
yarn nocobase create-migration -h

Usage: nocobase create-migration [options] <name>

Options:
  --pkg <pkg>  package name
  --on [on]    Options include beforeLoad, afterSync and afterLoad
  -h, --help   display help for command
```

Example

```bash
$ yarn nocobase create-migration update-ui --pkg=@nocobase/plugin-client

2024-01-07 17:33:13 [info ] add app main into supervisor     
2024-01-07 17:33:13 [info ] migration file in /nocobase/packages/plugins/@nocobase/plugin-client/src/server/migrations/20240107173313-update-ui.ts
✨  Done in 5.02s.
```

A migration file will be generated in `src/server/migrations` of the plugin package `@nocobase/plugin-client` as `20240107173313-update-ui.ts` with the following initial contents:

```typescript
import { Migration } from '@nocobase/server';

export default class extends Migration {
  on = 'afterLoad'; // 'beforeLoad' | 'afterSync' | 'afterLoad'
  appVersion = '<0.18.0-alpha.10';

  async up() {
    // coding
  }
}
```

### The plugin's convention-based directories

```bash
|- /plugin-sample-hello
  |- /dist             # Directory for compiled plugin
  |- /src              # Source code for the plugin
    |- /client
      |- plugin.ts
      |- index.ts      # Client-side entry point
    |- /locale         # Conventional directory for shared multilingual files between frontend and backend
    |- /swagger        # Conventional directory for Swagger documentation
    |- /server
      |- collections   # Conventional directory for plugin's data table configurations
      |- commands      # Conventional directory for custom commands
      |- migrations    # Conventional directory for migration files
      |- plugin.ts     # Plugin class
      |- index.ts      # Server-side entry point
    |- index.ts
  |- .npmignore
  |- client.d.ts
  |- client.js
  |- package.json
  |- server.d.ts
  |- server.js
```

Testing process optimization

Provided more user-friendly `createMockServer()` and `startMockServer()` methods for writing test cases:

- `createMockServer()` Quickly creates and starts an application.
- `startMockServer()` Quickly starts an application (without reinstalling).

```typescript
import { createMockServer } from '@nocobase/server';

describe('test example', () => {
  let app: MockServer;

  beforeEach(async () => {
    app = await createMockServer({
      plugins: ['nocobase'],
    });
  });

  afterEach(async () => {
    await app.destroy();
  });

  test('case1', async () => {
    // coding...
  });
});
```

## Breaking changes

### Collections, commands, migrations configuration changes to convention-based directories

Example 1: Collections loaded by importCollections, the code is deleted directly, and the collections configuration file must be placed in the `src/server/collections` directory.

```diff
export class AuthPlugin extends Plugin {
  async load() {
-   await this.importCollections(resolve(__dirname, 'collections'));
  }
}
```

Example 2: Collections loaded through this.db.import, the code is directly deleted, the collections configuration file must be placed in the `src/server/collections` directory

```diff
export class AuthPlugin extends Plugin {
  async load() {
-   await this.db.import({
-     directory: resolve(__dirname, 'collections')
-   });
  }
}
```

Example 3: A collection defined by db.collection() is recommended to be placed in the `src/server/collections` directory.

```diff
export class AuthPlugin extends Plugin {
  async load() {
-   this.db.collection({
-     name: 'examples',
-   });
  }
}
```

Add a new `src/server/collections/examples.ts` file with the following contents:

```typescript
import { defineCollection } from '@nocobase/database';

export default defineCollection({
  name: 'examples',
});
```

Example 4: Remove db.addMigrations() and place the migration file in the `src/server/migrations` directory.

```diff
export class AuthPlugin extends Plugin {
  async load() {
-   this.db.addMigrations({
-     namespace: 'auth',
-     directory: resolve(__dirname, 'migrations'),
-     context: {
-       plugin: this,
-     },
-   });
  }
}
```

Example 5: Customizing the command line

```diff
export class MyPlugin extends Plugin {
  load() {
-   this.app
-      .command('echo')
-      .option('-v, --version');
-      .action(async ([options]) => {
-        console.log('Hello World!');
-        if (options.version) {
-          console.log('Current version:', app.getVersion());
-        }
-      });
-  }
}
```

Add a new `src/server/collections/echo.ts` file with the following contents:

```typescript
export default function(app) {
  app
    .command('echo')
    .option('-v, --version');
    .action(async ([options]) => {
      console.log('Hello World!');
      if (options.version) {
        console.log('Current version:', await app.version.get());
      }
    });
}
```
