# Маршрутизация страниц и расширения

## Введение

Клиент NocoBase расширяет страницы через [app.router.add()](https://client.docs.nocobase.com/core/application/router-manager) и [app.pluginSettingsManager.add()](https://client.docs.nocobase.com/core/application/plugin-settings-manager), например:

```tsx | pure
import { Application, Plugin } from '@nocobase/client';
import React from 'react';

class PluginHello extends Plugin {
  async load() {
    this.router.add('hello', {
      path: '/',
      Component: () => <div>Привет, NocoBase</div>,
    });

    this.app.pluginSettingsManager.add('hello', {
      title: 'Привет',
      icon: 'ApiOutlined',
      Component: () => <div>Страница настроек Привет</div>,
    });
  }
}
```

Вы можете использовать метод `app.router.getRoutes()` для просмотра всех зарегистрированных страниц.

```tsx | pure
import { Application, Plugin } from '@nocobase/client';
import React from 'react';

class PluginHello extends Plugin {
  async load() {
    console.log(this.app.router.getRoutes());
  }
}
```

## Существующие маршруты страниц

Изначально установленный NocoBase имеет следующие зарегистрированные маршруты страниц:

| Имя            | Путь               | Компонент           | Описание |
| -------------- | ------------------ | ------------------- |---------|
| admin          | /admin/*          | AdminLayout         |  Админ-страница  |
| admin.page     | /admin/:name      | AdminDynamicPage    | Динамическая страница |
| admin.settings | /admin/settings/* | AdminSettingsLayout | Страница настроек плагина  |
| admin.pm.list  | /admin/pm/list/* | PluginManager       | Страница управления плагинами  |

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

Динамические страницы управляются через управление меню, добавлением пунктов меню -> добавление страницы.

![](https://static-docs.nocobase.com/9204957c39f644cfbf23eef3cbdc7eca.png)

### AdminSettingsLayout

```typescript
router.add('admin.settings', {
  path: '/admin/settings/*',
  Component: AdminSettingsLayout,
});
```

Страницы настроек плагинов.

![](https://static-docs.nocobase.com/ea22826eba4fd38d68a5a52fd68e7719.png)

Меню и вкладки для страниц настроек плагинов регистрируются через `app.pluginSettingsManager`.

## Расширения страниц

- Динамические страницы схемы добавляются через `Добавить пункт меню` -> `Страница`.
- Обычные страницы добавляются через [app.router.add()](https://client.docs.nocobase.com/core/application/router-manager).
- Страницы настроек плагинов добавляются через [app.pluginSettingsManager.add()](https://client.docs.nocobase.com/core/application/plugin-settings-manager).

### Динамические страницы схемы

Добавляются через `Добавить пункт меню` -> `Страница`.

### Расширения обычных страниц

Страницы расширяются через [app.router.add()](https://client.docs.nocobase.com/core/application/router-manager).

```typescript
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Application, Plugin } from '@nocobase/client';

const Home = () => <h1>Главная</h1>;
const About = () => <h1>О нас</h1>;

const Layout = () => {
  return (
    <div>
      <div>
        <Link to={'/'}>Главная</Link>, <Link to={'/about'}>О нас</Link>
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

### Расширения страниц настроек плагинов

Страницы настроек плагинов добавляются через [app.pluginSettingsManager.add()](https://client.docs.nocobase.com/core/application/plugin-settings-manager).

```tsx | pure
import { Plugin } from '@nocobase/client';
import React from 'react';

const HelloSettingPage = () => <div>Страница настроек Привет</div>;

export class HelloPlugin extends Plugin {
  async load() {
    this.app.pluginSettingsManager.add('hello', {
      title: 'Привет', // Заголовок и название меню страницы настроек
      icon: 'ApiOutlined', // Иконка меню для страницы настроек
      Component: HelloSettingPage,
    });
  }
}
```

Использование многоуровневой маршрутизации

```tsx | pure
import { Outlet } from 'react-router-dom';

const pluginName = 'hello';

class HelloPlugin extends Plugin {
  async load() {
    this.app.pluginSettingsManager.add(pluginName, {
      title: 'HelloWorld',
      icon: '',
      Component: Outlet, // Не обязательно указывать, по умолчанию компонент `Outlet`
    });

    this.app.pluginSettingsManager.add(`${pluginName}.demo1`, {
      title: 'Страница Demo1',
      Component: () => <div>Содержимое страницы Demo1</div>,
    });

    this.app.pluginSettingsManager.add(`${pluginName}.demo2`, {
      title: 'Страница Demo2',
      Component: () => <div>Содержимое страницы Demo2</div>,
    });
  }
}
```
