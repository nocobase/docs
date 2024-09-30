# プラグインのライフサイクル

## ライフサイクル

以下は `Plugin` クラスの定義であり、3つのライフサイクルメソッド `afterAdd`、`beforeLoad`、`load` を提供しています。

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

- **呼び出しタイミング**：プラグインが追加され、インスタンス化された後に即座に呼び出されます。
- **役割**：他のプラグインをロードするために使用されます。

```typescript
class Demo1Plugin extends Plugin {}
class Demo2Plugin extends Plugin {}

class MyPlugin extends Plugin {
  async afterAdd() {
    // 他のプラグインをロードする
    this.app.pluginManager.add(Demo1Plugin);
    this.app.pluginManager.add(Demo2Plugin);
  }
}

export default MyPlugin;
```

### `beforeLoad`

- **呼び出しタイミング**：すべてのプラグインが追加された後、`load` を実行する前に呼び出されます。
- **用途**：`load` の前に特定のロジックを処理するために使用されます。

### `load`

- **呼び出しタイミング**：すべてのプラグインが `beforeLoad` を実行した後に呼び出されます。
- **役割**：アプリインスタンスに対するほとんどの操作やメソッドの呼び出しは、このライフサイクル内で宣言されるべきです。

```typescript
class MyPlugin extends Plugin {
  async load() {
    // ルーティングの追加
    this.app.router.add();

    // グローバルコンポーネントの追加
    this.app.addComponents({});

    // プラグイン設定ページの追加
    this.app.pluginSettingsManager({});

    // ...
  }
}

export default MyPlugin;
```

全体の実行フローは以下の通りです：

`app.mount()/app.getRootComponent()` -> `pluginList.forEach(plugin.afterAdd)` -> `pluginList.forEach(plugin.beforeLoad)` -> `pluginList.forEach(plugin.load)`

同じタイプのライフサイクルでは、プラグインリストの実行において先後の順序はありません。

## プラグインマネージャー

- **役割**：プラグインの追加、削除、変更、検索を行います。
- **シナリオ**：プラグインの分割や統合が必要な場合。
- **インスタンスメソッド**：app.pluginManager
- **API 詳細紹介**：[プラグイン管理](https://www.baidu.com)

### プラグインの取得

`app.pluginManager.get` を使用して、対応するプラグインのインスタンスを取得し、プラグインインスタンスの属性を変更したり、インスタンスのメソッドを呼び出すことができます。

```typescript
import { DemoPlugin } from 'my-demo-plugin';

class MyPlugin extends Plugin {
  async load() {
    // クラスからインスタンスを取得
    const demoPluginInstance = this.pm.get(DemoPlugin);

    // add 時に name を渡した場合、name 文字列から取得可能
    const demoPluginInstanceByName = this.pm.get('DemoPlugin');

    // インスタンスを処理 ...
  }
}
```

コンポーネント内で取得する必要がある場合は、`usePlugin()` を使用して取得できます。

```typescript
import { usePlugin } from '@nocobase/client';
const Demo = () => {
  const myPlugin = usePlugin(MyPlugin); // クラスからインスタンスを取得

  const myPluginByName = usePlugin('MyPlugin'); // name からインスタンスを取得
};
```

### プラグインの追加

プラグインを追加する際、直接追加することも、2番目の引数として `name` を渡して他のプラグインが取得できるようにすることも可能です。

大部分の場合、この機能を理解する必要はありませんが、プラグインをいくつかに分割する場合を除きます。

```typescript
class MyPlugin extends Plugin {
  // 注意：afterAdd ライフサイクル内で実行する必要があります
  async afterAdd() {
    this.app.pluginManager.add(DemoPlugin);
    this.app.pluginManager.add(DemoPlugin, { name: 'DemoPlugin' });
  }
}
```

