# SyncMessageManager

用于管理多节点之间的同步信号。在分布式部署中，当内存状态改变时，需要通知其他节点进行同步。同步信号管理提供了一套通用的调用接口，可在任意模块中以统一的方式使用。

同步管理器内部不实现具体的同步功能，而是提供了一套统一的接口，并调用底层的 pubSubManager 进行消息发送和接收。

## `SyncMessageManager`

### 成员

#### `constructor()`

构造函数，创建一个同步管理器实例。应用初始化时会自动创建一个实例，并作为应用的全局可访问属性（`app.syncManager`），无需调用。

#### `subscribe(channel: string, callback: PubSubCallback)`

订阅同步事件。

- `channel`：频道名称，用于区分不同的同步事件。
- `callback`：事件回调函数，当同步事件发生时，会调用该函数。

#### `unsubscribe(channel: string, callback: PubSubCallback)`

取消订阅同步事件。

#### `publish(channel: string, message: any)`

发布同步消息。

- `channel`：频道名称，用于区分不同的同步事件。
- `message`：同步消息数据。

### 相关类型

```ts
export type PubSubCallback = (message: any) => Promise<void>;
```
