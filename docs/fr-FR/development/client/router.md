# Page Routing and Extensions

## Introduction

NocoBase client extends pages through [app.router.add()](https://client.docs.nocobase.com/core/application/router-manager) and [app.pluginSettingsManager.add()](https://client.docs.nocobase.com/core/application/plugin-settings-manager), for example:

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
      title: 'Hello',
      icon: 'ApiOutlined',
      Component: () => <div>Hello Setting page</div>,
    });
  }
}
```

You can use the `app.router.getRoutes()` method to view all registered pages.

```tsx | pure
import { Application, Plugin } from '@nocobase/client';
import React from 'react';

class PluginHello extends Plugin {
  async load() {
    console.log(this.app.router.getRoutes());
  }
}
```

## Existing Page Routes

The initially installed NocoBase has the following registered page routes:

| Name           | Path               | Component            | Description |
| -------------- | ------------------ | ------------------- |---------|
| admin          | /admin/\*          | AdminLayout         |  Admin page  |
| admin.page     | /admin/:name       | AdminDynamicPage    | Dynamic page |
| admin.settings | /admin/settings/\* | AdminSettingsLayout | Plugin configuration page  |
| admin.pm.list  | /admin/pm/list/\* | PluginManager       | Plugin management page  |


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

Dynamic pages are managed through menu management, by adding menu items -> page addition.

![](https://static-docs.nocobase.com/9204957c39f644cfbf23eef3cbdc7eca.png)

### AdminSettingsLayout

```typescript
router.add('admin.settings', {
  path: '/admin/settings/*',
  Component: AdminSettingsLayout,
});
```

Plugin configuration pages.

![](https://static-docs.nocobase.com/ea22826eba4fd38d68a5a52fd68e7719.png)

The menu and tabs for plugin configuration pages are registered via `app.pluginSettingsManager`.

## Page Extensions

- Dynamic Schema pages are added through `Add Menu Item` -> `Page`.
- Regular pages are added through [app.router.add()](https://client.docs.nocobase.com/core/application/router-manager).
- Plugin settings pages are added through [app.pluginSettingsManager.add()](https://client.docs.nocobase.com/core/application/plugin-settings-manager).

### Dynamic Schema Pages

Added through `Add Menu Item` -> `Page`.

### Regular Page Extensions

Pages are extended through [app.router.add()](https://client.docs.nocobase.com/core/application/router-manager).

```typescript
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Application, Plugin } from '@nocobase/client';

const Home = () => <h1>Home</h1>;
const About = () => <h1>About</h1>;

const Layout = () => {
  return (
    <div>
      <div>
        <Link to={'/'}>Home</Link>, <Link to={'/about'}>About</Link>
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

### Plugin Settings Page Extensions

Plugin settings pages are added through [app.pluginSettingsManager.add()](https://client.docs.nocobase.com/core/application/plugin-settings-manager).

```tsx | pure
import { Plugin } from '@nocobase/client';
import React from 'react';

const HelloSettingPage = () => <div>Hello Setting page</div>;

export class HelloPlugin extends Plugin {
  async load() {
    this.app.pluginSettingsManager.add('hello', {
      title: 'Hello', // The title and menu name of the settings page
      icon: 'ApiOutlined', // Menu icon for the settings page
      Component: HelloSettingPage,
    });
  }
}
```

Multi-level routing usage

```tsx | pure
import { Outlet } from 'react-router-dom';

const pluginName = 'hello';

class HelloPlugin extends Plugin {
  async load() {
    this.app.pluginSettingsManager.add(pluginName, {
      title: 'HelloWorld',
      icon: '',
      Component: Outlet, // No need to pass, default is `Outlet` component
    });

    this.app.pluginSettingsManager.add(`${pluginName}.demo1`, {
      title: 'Demo1 Page',
      Component: () => <div>Demo1 Page Content</div>,
    });

    this.app.pluginSettingsManager.add(`${pluginName}.demo2`, {
      title: 'Demo2 Page',
      Component: () => <div>Demo2 Page Content</div>,
    });
  }
}
```
