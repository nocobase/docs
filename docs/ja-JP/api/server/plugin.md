# Plugin

## 概览

`Plugin` 为 NocoBase 服务端的插件类，提供了插件服务端相关的配置属性和生命周期方法。

### 基本使用

```ts
import { Plugin } from '@nocobase/server';

export class PluginDemoServer extends Plugin {}

export default PluginDemoServer;
```

## 实例属性

### `options`

插件的配置。

### `name`

`string` - 插件名字。

### `enabled`

`boolean` - 插件是否启用。

### `installed`

`boolean` - 插件是否安装。

### `log`

系统日志实例，将日志信息中的 `module` 默认输出为插件名字。参考 [Logger](../logger.md).

### `app`

当前应用的 `Application` 实例。参考 [Application](./application.md).

### `pm`

当前应用的 `PluginManager` 实例。参考 [PluginManager](./plugin-manager.md).

### `db`

当前应用的 `DataBase` 实例。参考 [DataBase](../database/index.md).

## 生命周期方法

### `afterAdd()`

在插件添加之后，即 [`pm.add()`](./plugin-manager.md#add) 之后执行。

### `beforeLoad()`

在 [`pm.load()`](./plugin-manager.md#load) 期间执行。用于在插件加载前, 注册事件、初始化类或执行其他预处理逻辑。在此阶段可以访问内核 API, 不能访问其他插件 API.

### `load()`

加载插件和相关配置。在 [`pm.load()`](./plugin-manager.md#load) 期间，所有插件 [`beforeLoad()`](#beforeload) 方法执行结束之后执行。在此阶段可以访问其他插件 API.

### `install()`

插件的安装逻辑，在应用安装、升级期间或插件首次启用时执行。通常可以执行数据表预置数据插入等逻辑。

### `beforeEnable()`

插件启用前执行。

### `afterEnable()`

插件启用后执行。

### `beforeDisable()`

插件禁用前执行。

### `afterDisable()`

插件禁用后执行。

### `beforeRemove()`

插件移除前执行。

### `afterRemove()`

插件移除后执行。

## 其他方法

### `t()`

国际化方法。

### `createLogger()`

创建日志。参考 [Logger](../logger.md).

### `toJSON()`

实现性方法。输出插件相关配置信息。

### `sendSyncMessage()`

发布同步消息。使用该方法发送的同步消息只会被其他节点的同一个插件接收，与其他插件无关。

#### 签名

```ts
sendSyncMessage(message: any): Promise<void>
```

#### 参数

- `data`：同步消息数据。键值对的形式。

#### 示例

```ts
await this.sendSyncMessage({
  key: 'value'
});
```

### `handleSyncMessage()`

在分布式环境中，处理来自其他节点当前插件发布的同步事件。在插件使用了内存状态时，需要覆盖实现该事件的处理逻辑，以保证与其他节点的状态同步。

#### 签名

```
handleSyncMessage(message: any): void | Promise<void>
```

#### 参数

- `message` 同步消息。其他节点发送的消息内容。

#### 示例

```ts
handleSyncMessage(message) {
  console.log('handleSyncMessage', message);
  // this.reloadData();
}
```
