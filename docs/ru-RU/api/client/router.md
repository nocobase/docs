# Маршрутизатор (Router)

## API

### Инициализация

```tsx | pure
const app = new Application({
  router: {
    type: 'browser', // тип по умолчанию — `browser`
  },
});

// или
const app = new Application({
  router: {
    type: 'memory',
    initialEntries: ['/'],
  },
});
```

### Добавление маршрута

#### Базовое использование

```tsx | pure
import { RouteObject } from 'react-router-dom';
const app = new Application();

const Hello = () => {
  return <div>Привет</div>;
};

// Первый аргумент — имя маршрута, второй — объект `RouteObject`
app.router.add('root', {
  path: '/',
  element: <Hello />,
});

app.router.add('root', {
  path: '/',
  Component: Hello,
});
```

#### Компонент как строка

```tsx | pure
app.addComponents({
  Hello,
});
app.router.add('root', {
  path: '/',
  Component: 'Hello',
});
```

#### Вложенные маршруты

```tsx | pure
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <Link to="/home">Главная</Link>
      <Link to="/about">О нас</Link>

      <Outlet />
    </div>
  );
};

const Home = () => {
  return <div>Главная</div>;
};

const About = () => {
  return <div>О нас</div>;
};

app.router.add('root', {
  element: <Layout />,
});
app.router.add('root.home', {
  path: '/home',
  element: <Home />,
});
app.router.add('root.about', {
  path: '/about',
  element: <About />,
});
```

Будет сгенерирована следующая структура маршрутов:

```tsx | pure
{
  element: <Layout />,
  children: [
    {
      path: '/home',
      element: <Home />
    },
    {
      path: '/about',
      element: <About />
    }
  ]
}
```

### Удаление маршрута

```tsx | pure
// Удаление маршрута по имени
app.router.remove('root.home');
app.router.remove('hello');
```

#### Маршрутизатор в плагине

```tsx | pure
class MyPlugin extends Plugin {
  async load() {
    // Добавление маршрута
    this.app.router.add('hello', {
      path: '/hello',
      element: <div>привет</div>,
    });

    // Удаление маршрута
    this.app.router.remove('world');
  }
}
```

## Пример

```tsx
/**
 * defaultShowCode: true
 */
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Application } from '@nocobase/client';

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

const app = new Application({
  router: {
    type: 'memory',
    initialEntries: ['/'],
  },
});

app.router.add('root', {
  element: <Layout />,
});

app.router.add('root.home', {
  path: '/',
  element: <Home />,
});

app.router.add('root.about', {
  path: '/about',
  element: <About />,
});

export default app.getRootComponent();
```
