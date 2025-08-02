# Жизненный цикл

## Жизненный цикл серверного приложения

<img alt="Жизненный цикл серверного приложения" src="./server/image-1.png" style="width: 700px;" />

Активируется через `app.on()`, подробности см. в разделе [Сервер - События](/development/server/events).

```ts
class PluginSampleHelloServer extends Plugin {
  async beforeLoad() {
    this.app.on('beforeInstall', async () => {
      // код...
    });
  }
}
```

## Жизненный цикл серверного плагина

<img alt="Жизненный цикл серверного плагина" src="./server/image.png" style="width: 450px;" />

Реализуется в классе плагина, подробности использования см. в разделе [Сервер - Обзор](/development/server).

```ts
class PluginSampleHelloServer extends Plugin {
  async beforeLoad() {}
}
```

## Жизненный цикл клиентского плагина

<img alt="Жизненный цикл клиентского плагина" src="./client/image.png" style="width: 550px;" />

Реализуется в классе плагина, подробности использования см. в разделе [Клиент - Обзор](/development/client).
