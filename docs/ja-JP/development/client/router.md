# ページルーティングと拡張

## 概要

NocoBase クライアントは [app.router.add()](https://client.docs.nocobase.com/core/application/router-manager) および [app.pluginSettingsManager.add()](https://client.docs.nocobase.com/core/application/plugin-settings-manager) を使用してページを拡張します。例えば：

```tsx | pure
import { Application, Plugin } from '@nocobase/client';
import React from 'react';

class PluginHello extends Plugin {
  async load() {
    this.router.add('hello', {
      path: '/',
      Component: () => <div>Hello NocoBase</div>,
    });

    this.app.pluginSettingsManager.add('hello', {
      title: 'こんにちは',
      icon: 'ApiOutlined',
      Component: () => <div>こんにちは設定ページ</div>,
    });
  }
}
```

`app.router.getRoutes()` メソッドを使って、登録済みのすべてのページを確認できます。

```tsx | pure
import { Application, Plugin } from '@nocobase/client';
import React from 'react';

class PluginHello extends Plugin {
  async load() {
    console.log(this.app.router.getRoutes());
  }
}
```

## 既存のページルーティング

初期インストールの NocoBase には、以下のページルーティングがすでに登録されています：

| 名称           | パス               | コンポーネント        | 説明 |
| -------------- | ------------------ | ------------------- |---------|
| admin          | /admin/\*          | AdminLayout         | バックエンド管理ページ  |
| admin.page     | /admin/:name       | AdminDynamicPage    | 動的作成ページ |
| admin.settings | /admin/settings/\* | AdminSettingsLayout | プラグイン設定ページ  |
| admin.pm.list  | /admin/pm/list/\* | PluginManager       | プラグイン管理ページ  |

### AdminLayout

```ts
router.add('admin', {
  path: '/admin/*',
  Component: AdminLayout,
});
```

### AdminDynamicPage

```ts
router.add('admin.page', {
  path: '/admin/:name',
  Component: AdminDynamicPage,
});
```

メニュー管理による動的ページは、メニュー項目を追加することで作成できます。

![](https://static-docs.nocobase.com/9204957c39f644cfbf23eef3cbdc7eca.png)

### AdminSettingsLayout

```typescript
router.add('admin.settings', {
  path: '/admin/settings/*',
  Component: AdminSettingsLayout,
});
```

プラグイン設定ページ。

![](https://static-docs.nocobase.com/ea22826eba4fd38d68a5a52fd68e7719.png)

プラグイン設定ページのメニューやタブは `app.pluginSettingsManager` を使用して登録します。

## ページ拡張

- 動的スキーマページは、`メニュー項目の追加` -> `ページ` で追加します。
- 通常のページは [app.router.add()](https://client.docs.nocobase.com/core/application/router-manager) を使用して追加します。
- プラグイン設定ページは [app.pluginSettingsManager.add()](https://client.docs.nocobase.com/core/application/plugin-settings-manager) を使用して追加します。

### 動的スキーマページ

`メニュー項目の追加` -> `ページ` で追加します。

### 通常ページの拡張

[app.router.add()](https://client.docs.nocobase.com/core/application/router-manager) を使用してページルーティングを拡張します。

```typescript
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Application, Plugin } from '@nocobase/client';

const Home = () => <h1>ホーム</h1>;
const About = () => <h1>アバウト</h1>;

const Layout = () => {
  return (
    <div>
      <div>
        <Link to={'/'}>ホーム</Link>, <Link to={'/about'}>アバウト</Link>
      </div>
      <Outlet />
    </div>
  );
};

class MyPlugin extends Plugin {
  async load() {
    this.app.router.add('root', {
      element: <Layout />,
    });

    this.app.router.add('root.home', {
      path: '/',
      element: <Home />,
    });

    this.app.router.add('root.about', {
      path: '/about',
      element: <About />,
    });
  }
}

const app = new Application({
  router: {
    type: 'memory',
    initialEntries: ['/'],
  },
  plugins: [MyPlugin]
});

export default app.getRootComponent();
```

### プラグイン設定ページの拡張

プラグイン設定ページは [app.pluginSettingsManager.add()](https://client.docs.nocobase.com/core/application/plugin-settings-manager) を使用して追加します。

```tsx | pure
import { Plugin } from '@nocobase/client';
import React from 'react';

const HelloSettingPage = () => <div>こんにちは設定ページ</div>;

export class HelloPlugin extends Plugin {
  async load() {
    this.app.pluginSettingsManager.add('hello', {
      title: 'こんにちは', // 設定ページのタイトルとメニュー名
      icon: 'ApiOutlined', // 設定ページメニューアイコン
      Component: HelloSettingPage,
    });
  }
}
```

多階層ルーティングの使い方

```tsx | pure
import { Outlet } from 'react-router-dom';

const pluginName = 'hello';

class HelloPlugin extends Plugin {
  async load() {
    this.app.pluginSettingsManager.add(pluginName, {
      title: 'HelloWorld',
      icon: '',
      Component: Outlet, // 省略可能、デフォルトは `Outlet` コンポーネント
    });

    this.app.pluginSettingsManager.add(`${pluginName}.demo1`, {
      title: 'デモ1ページ',
      Component: () => <div>デモ1ページの内容</div>,
    });

    this.app.pluginSettingsManager.add(`${pluginName}.demo2`, {
      title: 'デモ2ページ',
      Component: () => <div>デモ2ページの内容</div>,
    });
  }
}
```

