# 插件的生命周期

## 生命周期

以下是 `Plugin` 类的定义，我们看到它提供了三个生命周期方法 `afterAdd`、`beforeLoad`、`load`。

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

- 调用时机：插件被添加并实例化后立即调用
- 作用：用于加载其他插件

```typescript
class Demo1Plugin extends Plugin {}
class Demo2Plugin extends Plugin {}

class MyPlugin extends Plugin {
  async afterrAdd() {
    // 加载其他插件
    this.app.pluginManager.add(Demo1Plugin);
    this.app.pluginManager.add(Demo2Plugin);
  }
}

export default MyPlugin;
```

### `beforeLoad`

- 调用时机：在全部插件被添加后，但执行 load 前
- 用于：用于处理在之前 `load` 之前的一些特殊逻辑

### `load`

- 调用时机：全部插件执行完 `beforeLoad` 后
- 作用：大多数对 app 实例的操作和方法的调用都应在此声明周期内

```typescript
class MyPlugin extends Plugin {
  async load() {
    // 添加路由
    this.app.router.add();

    // 添加全局组件
    this.app.addComponents({});

    //  添加插件配置页
    this.app.pluginSettingsManager({});

    // ...
  }
}

export default MyPlugin;
```

整体执行流程为：

`app.mount()/app.getRootComponent()` -> `pluginList.forEach(plugin.afterAdd)`-> `pluginList.forEach(plugin.beforeLoad)`-> `pluginList.forEach(plugin.load)`

同一个类型的生命周期，插件列表的执行并无先后顺序。

## 插件管理器

- 作用：对插件进行增删改查
- 场景：当插件有拆分和聚合需求时
- 实例方法：app.pluginManager
- API 详细介绍：[插件管理](https://www.baidu.com)

### 获取插件

我们可以通过 `app.pluginManager.get` 获取对应插件的实例，并修改插件实例属性或者调用实例上的方法。

```typescript
import { DemoPlugin } from 'my-demo-plugin';

class MyPlugin extends Plugin {
  async load() {
    // 通过 Class 类获取实例
    const demoPluginInstance = this.pm.get(DemoPlugin);

    // 如果 add 时传递了 name，则可以通过 name 字符串获取
    const demoPluginInstance = this.pm.get('DemoPlugin');

    // 对实例进行处理 ...
  }
}
```

如果需要在组件内获取，可以使用 `usePlugin()` 获取。

```typescript
import { usePlugin } from '@nocobase/client';
const Demo = () => {
  const myPlugin = usePlugin(MyPlugin); // 通过 Class 类获取实例

  const myPlugin = usePlugin('MyPlugin'); // 通过 name 获取实例
};
```

### 添加插件

添加插件，我们可以直接添加，也可以传递第二个参数，`name` 方面其他插件获取。

大部分情况下是不需要了解这个能力的，除非要进行将一个插件拆成几个。

```typescript
class MyPlugin extends Plugin {
  // 注意要在 afterrAdd 生命周期内
  async afterrAdd() {
    this.app.pluginManager.add(DemoPlugin);
    this.app.pluginManager.add(DemoPlugin, { name: 'DemoPlugin' });
  }
}
```
