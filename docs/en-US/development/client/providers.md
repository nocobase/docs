# Provider 组件

在 NocoBase 客户端应用里，Provider 组件在外层定义，核心结构如下：

```tsx | pure
<Router>
  {' '}
  {/* 路由的 Context Provider */}
  <ProviderA>
    <ProviderB>
      {/* 其他自定义 Provider 组件 - 开始标签 */}
      <Routes />
      {/* 其他自定义 Provider 组件 - 结束标签 */}
    </ProviderB>
  </ProviderA>
</Router>
```

因为定义在外层，所以 Provider 组件的用处有：

- 提供全局共享的上下文（Context），需要渲染 `props.children`
- 提供全局内容展示，需要渲染 `props.children`
- 拦截作用，根据条件渲染 `props.children`

## 提供全局共享的上下文

使用 `createContext` 定义上下文，`useContext` 获取定义的上下文

```tsx
import { Plugin, Application } from '@nocobase/client';
import { createContext, useContext } from 'react';

const MyContext = createContext({ color: null });

const HomePage = () => {
  // 读取 context 值
  const { color } = useContext(MyContext);
  return <div>color is : {color}</div>;
};

class PluginSampleProvider extends Plugin {
  async load() {
    this.app.addProvider(MyContext.Provider, { value: { color: 'blue' } });
    this.app.router.add('home', {
      path: '/',
      Component: HomePage,
    });
  }
}

const app = new Application({
  router: {
    type: 'memory',
    initialEntries: ['/'],
  },
  plugins: [PluginSampleProvider],
});

export default app.getRootComponent();
```

## 提供全局内容展示

```tsx
import { Plugin, Application } from '@nocobase/client';

// 创建一个组件，注意对 children 的渲染
const MyProvider = (props) => {
  const { children, name } = props;
  return (
    <div>
      <div>全局内容展示 - {name}</div>
      {children}
    </div>
  );
};

class PluginSampleProvider extends Plugin {
  async load() {
    this.app.addProvider(MyProvider, { name: 'NocoBase' });

    this.app.router.add('home', {
      path: '/',
      Component: () => <div>Home page</div>,
    });
  }
}

const app = new Application({
  router: {
    type: 'memory',
    initialEntries: ['/'],
  },
  plugins: [PluginSampleProvider],
});

export default app.getRootComponent();
```

## 拦截作用

```tsx
import { Plugin, Application } from '@nocobase/client';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

// 创建一个组件，注意对 children 的渲染
const MyProvider = (props) => {
  const { children, name } = props;
  const location = useLocation();
  if (location.pathname === '/about') {
    return (
      <div>
        内容被拦截了，返回 <Link to={'/'}>Home</Link>
      </div>
    );
  }
  return (
    <div>
      <div>Hello {name}</div>
      <Link to={'/'}>Home</Link>, <Link to={'/about'}>About</Link>
      {children}
    </div>
  );
};

class PluginSampleProvider extends Plugin {
  async load() {
    this.app.addProvider(MyProvider);
    this.app.router.add('home', {
      path: '/',
      Component: () => <div>Home page</div>,
    });
  }
}

const app = new Application({
  router: {
    type: 'memory',
    initialEntries: ['/'],
  },
  plugins: [PluginSampleProvider],
});

export default app.getRootComponent();
```
