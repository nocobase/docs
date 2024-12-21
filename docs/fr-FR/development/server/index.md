# Overview

The directory structure related to the server side of an initialized empty plugin is as follows:

```bash
|- /plugin-sample-hello
  |- /src
    |- /server      # Plugin server-side code
      |- plugin.ts  # Plugin class
      |- index.ts   # Server-side entry point
  |- server.d.ts
  |- server.js
```

## Plugin

`plugin.ts` facilitates the invocation of various methods across the plugin lifecycle.

```ts
import { InstallOptions, Plugin } from '@nocobase/server';

export class PluginSampleHelloServer extends Plugin {
  afterAdd() {
    // After the plugin is registered with pm.add. Mainly used for placing listeners for the app beforeLoad event
    this.app.on('beforeLoad');
  }
  beforeLoad() {
    // Customize classes or methods
    this.db.registerFieldTypes();
    this.db.registerModels();
    this.db.registerRepositories();
    this.db.registerOperators();
    // Event listeners
    this.app.on();
    this.db.on();
  }
  async load() {
    // Define collection
    this.db.collection();
    // Import collection configurations
    this.db.import();
    this.db.addMigrations();

    // Define resource
    this.resourcer.define();
    // Register resource actions
    this.resourcer.registerActions();

    // Register middleware
    this.resourcer.use();
    this.acl.use();
    this.app.use();

    this.app.i18n;
    // Custom commands
    this.app.command();
  }
  async install(options?: InstallOptions) {
    // Installation logic
  }
  async afterEnable() {
    // After activation
  }
  async afterDisable() {
    // After deactivation
  }
  async remove() {
    // Deletion logic
  }
}

export default MyPlugin;
```

## Plugin Lifecycle

<img alt="Plugin Lifecycle" src="./image.png" style="width: 320px;" />

- After the plugin is initialized, `afterAdd` is triggered. In `afterAdd`, not all other plugins might have been instantiated.
- In `beforeLoad`, all activated plugins have been instantiated, and their instances can be retrieved via `app.pluginManager.get()`.
- In `load`, the `beforeLoad` method of all plugins has been executed.

## Common Properties and Methods in the Plugin Class

| API                              | Tutorial          |
| -------------------------------- | ----------------- |
| this.name                        | Plugin name       |
| this.enabled                     | Activated         |
| this.installed                   | Installed         |
| this.app                         | Application instance |
| this.pm                          | Plugin manager instance |
| this.db                          | Database instance |
| this.resourcer                   | Resource manager  |
| this.acl                         | Access control    |
| this.log                         | Logging           |
| this.app.i18n                    | Internationalization |
| this.db.registerFieldTypes()     | Register field types |
| this.db.registerModels()         | Register Models   |
| this.db.registerRepositories()   | Register Repositories |
| this.db.registerOperators()      | Register custom operators |
| this.app.on()                    | Application events |
| this.db.on()                     | Database events   |
| this.db.collection()             | Configure data tables |
| this.db.import()                 | Import data table configurations |
| this.db.addMigrations()          | Migrations        |
| this.resourcer.registerActions() | Register resource actions |
| this.resourcer.use()             | Middleware        |
| this.acl.use()                   | Middleware        |
| this.app.use()                   | Middleware        |
| this.app.command()               | Command line      |