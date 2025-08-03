
# Жизненный цикл плагина

## Жизненный цикл

Ниже приведено определение класса `Plugin`, который предоставляет три метода жизненного цикла: `afterAdd`, `beforeLoad`, `load`.

```typescript
export class Plugin<T = <em>any</em>> {
  constructor(
    protected options: T,
    protected app: Application,
  ) {}

  async afterAdd() {}

  async beforeLoad() {}

  async load() {}
}
```

### `afterAdd`

- **Когда вызывается**: Сразу после добавления и инстанцирования плагина.
- **Назначение**: Используется для загрузки других плагинов.

```typescript
class Demo1Plugin extends Plugin {}
class Demo2Plugin extends Plugin {}

class MyPlugin extends Plugin {
  async afterrAdd() {
    // Загрузка других плагинов
    this.app.pluginManager.add(Demo1Plugin);
    this.app.pluginManager.add(Demo2Plugin);
  }
}

export default MyPlugin;
```

### `beforeLoad`

- **Когда вызывается**: После добавления всех плагинов, но перед выполнением `load`.
- **Назначение**: Для обработки специальной логики перед `load`.

### `load`

- **Когда вызывается**: После выполнения `beforeLoad` для всех плагинов.
- **Назначение**: Большинство операций с экземпляром `app` и вызовов методов должны выполняться в этом цикле.

```typescript
class MyPlugin extends Plugin {
  async load() {
    // Добавление маршрута
    this.app.router.add();

    // Добавление глобального компонента
    this.app.addComponents({});

    // Добавление страницы настроек плагина
    this.app.pluginSettingsManager({});

    // ...
  }
}

export default MyPlugin;
```

Общий порядок выполнения:

`app.mount()/app.getRootComponent()` -> `pluginList.forEach(plugin.afterAdd)`-> `pluginList.forEach(plugin.beforeLoad)`-> `pluginList.forEach(plugin.load)`

Порядок выполнения плагинов в одном типе жизненного цикла не гарантируется.

## Менеджер плагинов

- **Назначение**: Управление плагинами (добавление, удаление, изменение, поиск).
- **Сценарии**: Когда требуется разделение или объединение плагинов.
- **Экземпляр**: `app.pluginManager`.
- **Документация API**: [Управление плагинами](https://www.baidu.com).

### Получение плагина

Можно получить экземпляр плагина с помощью `app.pluginManager.get` и изменить его свойства или вызвать методы.

```typescript
import { DemoPlugin } from 'my-demo-plugin';

class MyPlugin extends Plugin {
  async load() {
    // Получение экземпляра по классу
    const demoPluginInstance = this.pm.get(DemoPlugin);

    // Если при добавлении было указано имя, можно получить по строке
    const demoPluginInstance = this.pm.get('DemoPlugin');

    // Обработка экземпляра ...
  }
}
```

Для получения плагина внутри компонента можно использовать `usePlugin()`.

```typescript
import { usePlugin } from '@nocobase/client';
const Demo = () => {
  const myPlugin = usePlugin(MyPlugin); // Получение экземпляра по классу

  const myPlugin = usePlugin('MyPlugin'); // Получение экземпляра по имени
};
```

### Добавление плагина

Плагины можно добавлять напрямую или с указанием имени для удобства получения.

```typescript
class MyPlugin extends Plugin {
  // Важно: вызывать в afterrAdd
  async afterrAdd() {
    this.app.pluginManager.add(DemoPlugin);
    this.app.pluginManager.add(DemoPlugin, { name: 'DemoPlugin' });
  }
}
```
```
