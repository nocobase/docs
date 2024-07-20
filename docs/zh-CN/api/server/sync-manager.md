# SyncManager

用于管理多节点之间的同步信号。在分布式部署中，当内存状态改变时，需要通知其他节点进行同步。同步信号管理提供了一套通用的调用接口，可在任意模块中以统一的方式使用。

同步管理器内部不实现具体的同步功能，而是提供了一套统一的接口，具体的同步逻辑由基于其他中间件的适配器插件实现。例如，可以通过基于 Redis、Etcd、RabbitMQ、Kafak 等中间件实现的同步适配器插件。

## `SyncManager`

### 成员

#### `constructor()`

构造函数，创建一个同步管理器实例。应用初始化时会自动创建一个实例，并作为应用的全局可访问属性（`app.syncManager`），无需调用。

#### `available: Boolean`

同步管理器是否可用。

当已初始化适配器，且适配器已连接相应的中间件后，会返回 `true`。否则返回 `false`。

#### `init(adapter: SyncAdapter)`

初始化同步管理器。

该方法仅可调用一次，通常在加载相关适配器插件时，向同步管理器注册适配器实例。多次调用将抛出异常，将导致应用无法启动，需要管理员检查是否有不同的插件重复注入适配器。

#### `subscribe(namespace: string, callback: SyncEventCallback)`

订阅同步事件。

- `namespace`：命名空间，用于区分不同的同步事件。
- `callback`：事件回调函数，当同步事件发生时，会调用该函数。

#### `unsubscribe(namespace: string, callback: SyncEventCallback)`

取消订阅同步事件。

#### `publish(namespace: string, data: SyncMessageData = {})`

发布同步消息。

- `namespace`：命名空间，用于区分不同的同步事件。
- `data`：同步消息数据。

:::warning{title=注意}
同步消息数据必须是键值对形式，键和值都是字符串类型。
:::

### 相关类型

```ts
export type SyncMessageData = Record<string, string>;

export type SyncEventCallback = (message: SyncMessageData) => void;

export type SyncMessage = {
  namespace: string;
  nodeId: string;
  appName: string;
} & SyncMessageData;
```

## `SyncAdapter`

同步适配器抽象类，定义了同步适配器必须实现的接口，任何同步适配器的实现都必须继承该类。该类继承自 Node.js 的 `EventEmitter` 类。

### 相关类型

```ts
export abstract class SyncAdapter extends EventEmitter {
  abstract get ready(): boolean;
  public abstract publish(data: SyncMessage): void | Promise<void>;
}
```
