# SyncManager

Used to manage synchronization signals between multiple application nodes. In a distributed deployment, when the memory state changes, it is necessary to notify other nodes for synchronization. `SyncManager` provides a common interface to be invoked, allowing it to be used in same way across different modules.

The SyncManager itself does not implement specific synchronization functionality, but provides a unified interface. The specific synchronization logic should be implemented by adapter plugins based on other middleware. For example, synchronization adapter plugins can be implemented by using middleware such as Redis, Etcd, RabbitMQ, Kafka, etc.

## `SyncManager`

### Members

#### `constructor()`

Constructor, creates an instance of the SyncManager. An instance is automatically created during application initialization and is accessible globally within the application (`app.syncManager`), so there is no need to call it.

#### `available: Boolean`

Indicates the ready state whether the SyncManager is available.

Returns `true` when the adapter has been initialized and connected to the corresponding middleware. Otherwise, returns `false`.

#### `init(adapter: SyncAdapter)`

Initializes the SyncManager.

This method can only be called once, typically when loading the relevant adapter plugin to register the adapter instance with the SyncManager. Multiple calls will throw an exception, causing the application to fail to start. Administrators need to check for any plugins that may have redundantly injected adapters.

#### `subscribe(namespace: string, callback: SyncEventCallback)`

Subscribes to sync events.

- `namespace`: Namespace to differentiate between different sync events.
- `callback`: Event callback function, called when a sync event occurs.

#### `unsubscribe(namespace: string, callback: SyncEventCallback)`

Unsubscribes from sync events.

#### `publish(namespace: string, data: SyncMessageData = {})`

Publishes a sync message.

- `namespace`: Namespace to differentiate between different sync events.
- `data`: Sync message data.

:::warning{title=Warning}
Sync message data must be in key-value pair format, with both keys and values being strings.
:::

### Related Types

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

Abstract class for sync adapters, defining the interfaces that sync adapters must implement. Any implementation of a sync adapter must extend this class. This class inherits from Node.js's EventEmitter class.

### Related Types

```ts
export abstract class SyncAdapter extends EventEmitter {
  abstract get ready(): boolean;
  public abstract publish(data: SyncMessage): void | Promise<void>;
}
```
