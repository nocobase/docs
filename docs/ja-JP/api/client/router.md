# ルーター

## API

### 初期化

```tsx | pure
const app = new Application({
  router: {
    type: 'browser', // type のデフォルト値は `browser`
  },
});

// または
const app = new Application({
  router: {
    type: 'memory',
    initialEntries: ['/'],
  },
});
```

### ルートの追加

#### 基本の使い方

```tsx | pure
import { RouteObject } from 'react-router-dom';
const app = new Application();

const Hello = () => {
  return <div>Hello</div>;
};

// 最初のパラメータは名前、2番目のパラメータは `RouteObject`
app.router.add('root', {
  path: '/',
  element: <Hello />,
});

app.router.add('root', {
  path: '/',
  Component: Hello,
});
```

#### Component が文字列の場合

```tsx | pure
// Hello を登録
app.addComponents({
  Hello,
});

// Component は `Hello` 文字列
app.router.add('root', {
  path: '/',
  Component: 'Hello',
});
```

#### ネストされたルート

```tsx | pure
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <Link to="/home">Home</Link>
      <Link to="/about">about</Link>

      <Outlet />
    </div>
  );
};

const Home = () => {
  return <div>Home</div>;
};

const About = () => {
  return <div>About</div>;
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

以下のようにレンダリングされます:

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

### ルートの削除

```tsx | pure
// 名前を渡すだけで削除
app.router.remove('root.home');
app.router.remove('hello');
```

#### プラグインでルートを変更

```tsx | pure
class MyPlugin extends Plugin {
  async load() {
    // ルートを追加
    this.app.router.add('hello', {
      path: '/hello',
      element: <div>hello</div>,
    });

    // ルートを削除
    this.app.router.remove('world');
  }
}
```

## サンプル

```tsx
/**
 * defaultShowCode: true
 */
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Application } from '@nocobase/client';

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