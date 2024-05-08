# PluginManager

`PluginManager` 是 NocoBase 的插件管理器。

## 实例属性

### `repository`

插件数据表的 `Repository` 实例。API 参考 [DataBase - Repository](../database/repository.md).

## 实例方法

### `addPreset()`

添加系统内置插件，内置插件默认开启，不会出现在客户端插件管理器列表中。

#### 签名

- `addPreset(plugin: string | typeof Plugin, options: any = {})`

#### 详细信息

| 参数名    | 类型                        | 描述             |
| --------- | --------------------------- | ---------------- |
| `plugin`  | `string` \| `typeof Plugin` | 插件名或插件实例 |
| `options` | `any`                       | 插件配置项       |

### `getPlugins()`

获取当前应用的所有插件实例。

#### 签名

- `getPlugins(): Map<typeof Plugin, Plugin<any>>`

### `getAliases()`

获取所有插件名字。

#### 签名

- `getAliases(): IterableIterator<string>`

### `get()`

获取某个插件。

#### 签名

- `get(name: string | typeof Plugin): Plugin<any>`

### `has()`

检查某个插件是否存在。

#### 签名

- `has(name: string | typeof Plugin): boolean`

### `create()`

创建插件，生成插件目录。

#### 签名

- `create(pluginName: string, options?: { forceRecreate?: boolean }): Promise<void>`

#### 详细信息

| 参数名                  | 类型      | 描述                           | 默认值  |
| ----------------------- | --------- | ------------------------------ | ------- |
| `pluginName`            | `string`  | 插件名字                       | -       |
| `options.forceRecreate` | `boolean` | 是否移除原有插件目录，重新生成 | `false` |

### `add()`

添加或升级插件。

#### 签名

- `add(plugin?: any, options: any = {}, insert = false, isUpgrade = false): Promise<void>`

#### 详细信息

| 参数名      | 类型                        | 描述                   | 默认值  |
| ----------- | --------------------------- | ---------------------- | ------- |
| `plugin`    | `string` \| `typeof Plugin` | 插件名字或插件实例     | -       |
| `options`   | `any`                       | 插件配置               | -       |
| `insert`    | `boolean`                   | 是否添加插件数据表记录 | `false` |
| `isUpgrade` | `boolean`                   | 是否为插件升级         | `false` |

### `load()`

加载所有已启用插件。

#### 签名

- `load(): Promise<void>`

### `install()`

安装所有已启用且尚未安装的插件。

#### 签名

- `install(): Promise<void>`

### `enable()`

启用一个或多个未启用的插件。

#### 签名

- `enable(name: string | string[]): Promise<void>`

### `disable()`

禁用一个或多个已启用的插件。

#### 签名

- `disable(name: string | string[]): Promise<void>`

### `remove()`

移除一个或多个插件。

#### 签名

- `remove(name: string | string[], options?: { removeDir?: boolean; force?: boolean })`

#### 详细信息

| 参数名              | 类型                   | 描述                                                            | 默认值  |
| ------------------- | ---------------------- | --------------------------------------------------------------- | ------- |
| `name`              | `string` \| `string[]` | 插件名字                                                        | -       |
| `options.removeDir` | `boolean`              | 是否移除插件目录                                                | `false` |
| `options.force`     | `boolean`              | 是否直接删除数据库记录，跳过插件 `beforeRemove` / `afterRemove` | `false` |
