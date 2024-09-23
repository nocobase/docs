# v0.11：2023-07-08

## 新機能

- 完全に新しいクライアントアプリケーション、プラグイン、ルーター
- antdをv5にアップグレード
- 新しいプラグイン
  - データビジュアライゼーション
  - APIキー
  - Googleマップ

## 非互換の変更

### 完全に新しいクライアントアプリケーション、プラグイン、ルーター

#### プラグインの変更

以前はコンポーネントを渡す必要があり、そのコンポーネントは`props.children`を透過的に渡す必要がありました。例えば：

```tsx | pure
const HelloProvider = (props) => {
  // 何らかのロジックを実行
  return <div>{props.children}</div>;
};

export default HelloProvider;
```

現在はプラグイン形式に変更する必要があります。例えば：

```diff | pure
+import { Plugin } from '@nocobase/client'

const HelloProvider = (props) => {
  // 何らかのロジックを実行
  return <div>
    {props.children}
  </div>;
}

+ export class HelloPlugin extends Plugin {
+   async load() {
+     this.app.addProvider(HelloProvider);
+   }
+ }

- export default HelloProvider;
+ export default HelloPlugin;
```

プラグインの機能は非常に強力で、`load`フェーズで多くのことが可能です：

- ルートの変更
- コンポーネントの追加
- プロバイダーの追加
- スコープの追加
- 他のプラグインの読み込み

#### ルーティングの変更

以前`RouteSwitchContext`を使用してルーティングを変更していた場合、今はプラグインを通じて置き換える必要があります：

```tsx | pure
import { RouteSwitchContext } from '@nocobase/client';

const HelloProvider = (props) => {
  const { routes, ...others } = useContext(RouteSwitchContext);
  routes[1].routes.unshift({
    path: '/hello',
    component: Hello,
  });

  return (
    <div>
      <RouteSwitchContext.Provider value={{ ...others, routes }}>
        {props.children}
      </RouteSwitchContext.Provider>
    </div>
  );
};
```

現在はプラグイン形式に変更する必要があります。例えば：

```diff | pure
- import { RouteSwitchContext } from '@nocobase/client';
+ import { Plugin } from '@nocobase/client';

const HelloProvider = (props) => {
-  const { routes, ...others } = useContext(RouteSwitchContext);
-  routes[1].routes.unshift({
-    path: '/hello',
-    component: Hello,
-  });

  return <div>
-   <RouteSwitchContext.Provider value={{ ...others, routes }}>
      {props.children}
-   </RouteSwitchContext.Provider>
  </div>
}

+ export class HelloPlugin extends Plugin {
+  async load() {
+    this.app.router.add('admin.hello', {
+       path: '/hello',
+       Component: Hello,
+    });
+    this.app.addProvider(HelloProvider);
+  }
+ }
+ export default HelloPlugin;
```

さらに詳しいドキュメントやサンプルについては、[packages/core/client/src/application/index.md](https://github.com/nocobase/nocobase/blob/main/packages/core/client/src/application/index.md)を参照してください。

### antdのv5へのアップグレード

- antdに関する詳細は公式サイトの[バージョン4からバージョン5へ](https://ant.design/docs/react/migration-v5-cn)をご確認ください。
- `@formily/antd`を`@formily/antd-v5`に置き換えてください。

