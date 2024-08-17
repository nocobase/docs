# SyncMessageManager

Used to manage synchronization signals between multiple application nodes. In a distributed deployment, when the memory state changes, it is necessary to notify other nodes for synchronization. `SyncMessageManager` provides a common interface to be invoked, allowing it to be used in same way across different modules.

The SyncMessageManager itself does not implement specific synchronization functionality, but provides a unified interface, and it will invoke the underlying `pubSubManager` to send and receive messages.

## `SyncMessageManager`

### Members

#### `constructor()`

Constructor, creates an instance of the SyncMessageManager. An instance is automatically created during application initialization and is accessible globally within the application (`app.syncMessageManager`), so there is no need to call it.

#### `subscribe(channel: string, callback: SyncEventCallback)`

Subscribes to sync events.

- `channel`: Channel name to differentiate between different sync events.
- `callback`: Event callback function, called when a sync event occurs.

#### `unsubscribe(channel: string, callback: SyncEventCallback)`

Unsubscribes from sync events.

#### `publish(channel: string, message: any)`

Publishes a sync message.

- `channel`: Channel name to differentiate between different sync events.
- `message`: Sync message data.

### Related Types

```ts
export type PubSubCallback = (message: any) => Promise<void>;
```
