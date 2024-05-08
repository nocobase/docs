# Plugin

## Overview

`Plugin` is the plugin class for the NocoBase server, providing configuration properties and lifecycle methods related to server-side plugins.

### Basic Usage

```ts
import { Plugin } from '@nocobase/server';

export class PluginDemoServer extends Plugin {}

export default PluginDemoServer;
```

## Instance Properties

### `options`

Configuration options for the plugin.

### `name`

`string` - The name of the plugin.

### `enabled`

`boolean` - Whether the plugin is enabled.

### `installed`

`boolean` - Whether the plugin is installed.

### `log`

System log instance, with the default `module` set to the plugin name. Refer to [Logger](../logger.md).

### `app`

The `Application` instance of the current application. Refer to [Application](./application.md).

### `pm`

The `PluginManager` instance of the current application. Refer to [PluginManager](./plugin-manager.md).

### `db`

The `DataBase` instance of the current application. Refer to [DataBase](../database/index.md).

## Lifecycle Methods

### `afterAdd()`

Executed after the plugin is added, i.e., after [`pm.add()`](./plugin-manager.md#add).

### `beforeLoad()`

Executed during [`pm.load()`](./plugin-manager.md#load). Used to register events, initialize classes, or perform other preprocessing logic before plugin loading. At this stage, the core API can be accessed, but not other plugin APIs.

### `load()`

Loads the plugin and its related configurations. Executed during [`pm.load()`](./plugin-manager.md#load), after all [`beforeLoad()`](#beforeload) methods of plugins have finished execution. At this stage, other plugin APIs can be accessed.

### `install()`

Installation logic of the plugin, executed during application installation, upgrade, or when the plugin is first enabled. Typically used to perform tasks such as inserting preset data into tables.

### `beforeEnable()`

Executed before the plugin is enabled.

### `afterEnable()`

Executed after the plugin is enabled.

### `beforeDisable()`

Executed before the plugin is disabled.

### `afterDisable()`

Executed after the plugin is disabled.

### `beforeRemove()`

Executed before the plugin is removed.

### `afterRemove()`

Executed after the plugin is removed.

## Other Methods

### `t()`

Internationalization method.

### `createLogger()`

Creates a logger. Refer to [Logger](../logger.md).

### `toJSON()`

A method for internal use. Outputs plugin-related configuration information.
