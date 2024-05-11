# 页面路由及扩展

## 简介

NocoBase 客户端通过 [app.router.add()](https://client.docs.nocobase.com/core/application/router-manager) 和 [app.pluginSettingsManager.add()](https://client.docs.nocobase.com/core/application/plugin-settings-manager) 扩展页面，例如：

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

可以通过 `app.router.getRoutes()` 方法，查看所有已经注册的页面

```tsx | pure
import { Application, Plugin } from '@nocobase/client';
import React from 'react';

class PluginHello extends Plugin {
  async load() {
    console.log(this.app.router.getRoutes());
  }
}
```

## 已有页面路由

初始安装的 NocoBase，已注册的页面路由有：

| 名称           | 路径               | 组件                | 说明 |
| -------------- | ------------------ | ------------------- |---------|
| admin          | /admin/\*          | AdminLayout         | 后台管理页面  |
| admin.page     | /admin/:name       | AdminDynamicPage    | 动态创建的页面 |
| admin.settings | /admin/settings/\* | AdminSettingsLayout | 插件配置页面  |
| admin.pm.list  | /admin/pm/list/\* | PluginManager       | 插件管理页面  |

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

由菜单管理动态页面，通过添加菜单项 -> 页面添加

![](https://static-docs.nocobase.com/9204957c39f644cfbf23eef3cbdc7eca.png)

### AdminSettingsLayout

```typescript
router.add('admin.settings', {
  path: '/admin/settings/*',
  Component: AdminSettingsLayout,
});
```

插件配置页

![](https://static-docs.nocobase.com/ea22826eba4fd38d68a5a52fd68e7719.png)

插件配置页的菜单及标签页通过 `app.pluginSettingsManager` 注册。

## 页面扩展

- 动态 Schema 页面，通过 `添加菜单项` -> `页面` 添加
- 常规页面通过 [app.router.add()](https://client.docs.nocobase.com/core/application/router-manager) 添加
- 插件设置页通过 [app.pluginSettingsManager.add()](https://client.docs.nocobase.com/core/application/plugin-settings-manager) 添加

### 动态 Schema 页面

通过 `添加菜单项` -> `页面` 添加

### 常规页面扩展

通过 [app.router.add()](https://client.docs.nocobase.com/core/application/router-manager) 扩展页面路由

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

### 插件设置页扩展

插件设置页通过 [app.pluginSettingsManager.add()](https://client.docs.nocobase.com/core/application/plugin-settings-manager) 添加。

```tsx | pure
import { Plugin } from '@nocobase/client';
import React from 'react';

const HelloSettingPage = () => <div>Hello Setting page</div>;

export class HelloPlugin extends Plugin {
  async load() {
    this.app.pluginSettingsManager.add('hello', {
      title: 'Hello', // 设置页面的标题和菜单名称
      icon: 'ApiOutlined', // 设置页面菜单图标
      Component: HelloSettingPage,
    });
  }
}
```

多级路由用法

```tsx | pure
import { Outlet } from 'react-router-dom';

const pluginName = 'hello';

class HelloPlugin extends Plugin {
  async load() {
    this.app.pluginSettingsManager.add(pluginName, {
      title: 'HelloWorld',
      icon: '',
      Component: Outlet, // 可以不传，默认为  `Outlet` 组件
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
