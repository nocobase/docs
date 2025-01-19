# Overview

## Directory Structure

Initialized empty plugin, the client directory structure is as follows:

```bash
|- /plugin-sample-hello
  |- /src
    |- /client
      |- index.tsx
  |- client.d.ts
  |- client.js
```

## Plugin Class

The plugin class provides various methods for the plugin lifecycle.

```ts
import { Plugin } from '@nocobase/client';

export class PluginSampleHelloClient extends Plugin {
  async afterAdd() {}

  async beforeLoad() {}

  async load() {}
}

export default PluginSampleHelloClient;
```

## Plugin Lifecycle

<img alt="Plugin Lifecycle" src="./image.png" style="width: 600px;" />

- After the plugin is initialized, `afterAdd` is triggered. It's important to note that the addition of plugins is unordered, so do not attempt to obtain instances of other plugins in `afterAdd`. If you need to get instances of other plugins, you can do so in `beforeLoad` or `load`.
- In `beforeLoad`, all activated plugins have been instantiated, and by then, instances can be obtained through [app.pluginManager.get()](https://client.docs.nocobase.com/core/application/plugin-settings-manager).
- In `load`, the `beforeLoad` method of all plugins has been executed.

## Common Properties and Methods in the Plugin Class

| API                          | Tutorial                                                                  |
| ---------------------------- | -------------------------------------------------------------------------- |
| app.i18n                     | [Internationalization](/development/client/i18n)                          |
| app.apiClient                | [API Client](/development/client/api-client)                              |
| app.pluginManager            | [Plugin Manager](https://client.docs.nocobase.com/core/application/plugin-manager) |
| app.router                   | [Routing Management](/development/client/router)                          |
| app.pluginSettingsManager    | [Plugin Settings Page](/development/client/router#plugin-settings-page-extension) |
| app.schemaInitializerManager | [Schema Initializer Config](/development/client/ui-schema/initializer)   |
| app.schemaSettingsManager    | [Schema Settings Config](/development/client/ui-schema/settings)          |
| app.addProviders             | [Provider Components](/development/client/providers)                      |
| app.addComponents            | [Schema Rendering](/development/client/ui-schema/rendering)               |
| app.addScopes                | [Schema Rendering](/development/client/ui-schema/rendering)               |

## Commonly Used React **hooks** in Components

| API            | Tutorial                                                                                          |
| -------------- | ------------------------------------------------------------------------------------------------- |
| useApp()       | [useApp() API](https://client.docs.nocobase.com/core/application/application#useapp)             |
| usePlugin()    | [usePlugin() API](https://client.docs.nocobase.com/core/application/plugin-manager#useplugin)    |
| useAPIClient() | [API Client](/development/client/api-client)                                                      |
| useRequest()   | [API Client](/development/client/api-client)                                                      |
