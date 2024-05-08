# PluginManager

`PluginManager` is the plugin manager for NocoBase.

## Instance Properties

### `repository`

The `Repository` instance for the plugin data table. API reference: [DataBase - Repository](../database/repository.md).

## Instance Methods

### `addPreset()`

Adds a system built-in plugin. Built-in plugins are enabled by default and do not appear in the client plugin manager list.

#### Signature

- `addPreset(plugin: string | typeof Plugin, options: any = {})`

#### Details

| Parameter | Type                        | Description             |
| --------- | --------------------------- | ----------------------- |
| `plugin`  | `string` \| `typeof Plugin` | Plugin name or instance |
| `options` | `any`                       | Plugin options          |

### `getPlugins()`

Gets all plugin instances of the current application.

#### Signature

- `getPlugins(): Map<typeof Plugin, Plugin<any>>`

### `getAliases()`

Gets all plugin names.

#### Signature

- `getAliases(): IterableIterator<string>`

### `get()`

Gets a specific plugin.

#### Signature

- `get(name: string | typeof Plugin): Plugin<any>`

### `has()`

Checks if a plugin exists.

#### Signature

- `has(name: string | typeof Plugin): boolean`

### `create()`

Creates a plugin and generates the plugin directory.

#### Signature

- `create(pluginName: string, options?: { forceRecreate?: boolean }): Promise<void>`

#### Details

| Parameter               | Type      | Description                                                     | Default |
| ----------------------- | --------- | --------------------------------------------------------------- | ------- |
| `pluginName`            | `string`  | Plugin name                                                     | -       |
| `options.forceRecreate` | `boolean` | Whether to remove the existing plugin directory and recreate it | `false` |

### `add()`

Adds or upgrades a plugin.

#### Signature

- `add(plugin?: any, options: any = {}, insert = false, isUpgrade = false): Promise<void>`

#### Details

| Parameter   | Type                        | Description                         | Default |
| ----------- | --------------------------- | ----------------------------------- | ------- |
| `plugin`    | `string` \| `typeof Plugin` | Plugin name or instance             | -       |
| `options`   | `any`                       | Plugin configuration                | -       |
| `insert`    | `boolean`                   | Whether to add plugin table records | `false` |
| `isUpgrade` | `boolean`                   | Whether it's a plugin upgrade       | `false` |

### `load()`

Loads all enabled plugins.

#### Signature

- `load(): Promise<void>`

### `install()`

Installs all enabled plugins that are not yet installed.

#### Signature

- `install(): Promise<void>`

### `enable()`

Enables one or more plugins that are not enabled.

#### Signature

- `enable(name: string | string[]): Promise<void>`

### `disable()`

Disables one or more enabled plugins.

#### Signature

- `disable(name: string | string[]): Promise<void>`

### `remove()`

Removes one or more plugins.

#### Signature

- `remove(name: string | string[], options?: { removeDir?: boolean; force?: boolean })`

#### Details

| Parameter           | Type                   | Description                                                                                | Default |
| ------------------- | ---------------------- | ------------------------------------------------------------------------------------------ | ------- |
| `name`              | `string` \| `string[]` | Plugin name(s)                                                                             | -       |
| `options.removeDir` | `boolean`              | Whether to remove the plugin directory                                                     | `false` |
| `options.force`     | `boolean`              | Whether to delete database records directly, skipping `beforeRemove` / `afterRemove` hooks | `false` |
