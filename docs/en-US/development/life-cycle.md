# Lifecycle

## Lifecycle of the server-side application

<img alt="Lifecycle of the server-side application" src="./server/image-1.png" style="width: 700px;" />

Triggered by `app.on()`, see [Server-side - Events](/development/server/events) for details.

```ts
class PluginSampleHelloServer extends Plugin {
  async beforeLoad() {
    this.app.on('beforeInstall', async () => {
      // coding...
    });
  }
}
```

## Lifecycle of the server-side plugin

<img alt="Lifecycle of the server-side plugin" src="./server/image.png" style="width: 450px;" />

Written in the plugin class, see [Server - Overview](/development/server) for usage details.

```ts
class PluginSampleHelloServer extends Plugin {
  async beforeLoad() {}
}
```

## Lifecycle of the client-side plugin

<img alt="Lifecycle of the client-side plugin" src="./client/image.png" style="width: 550px;" />

Written in the plugin class, see [Client - Overview](/development/client) for usage details.
