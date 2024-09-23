# Provider コンポーネント

NocoBase クライアントアプリケーションでは、Provider コンポーネントは外部で定義されており、コア構造は以下の通りです：

```tsx | pure
<Router>
  {' '}
  {/* ルーティングのコンテキストプロバイダー */}
  <ProviderA>
    <ProviderB>
      {/* 他のカスタムプロバイダーコンポーネント - 開始タグ */}
      <Routes />
      {/* 他のカスタムプロバイダーコンポーネント - 終了タグ */}
    </ProviderB>
  </ProviderA>
</Router>
```

外部で定義されているため、Provider コンポーネントの役割は以下の通りです：

- グローバルに共有されるコンテキスト（Context）を提供し、`props.children` をレンダリングします。
- グローバルな内容を表示し、`props.children` をレンダリングします。
- 条件に基づいて `props.children` をレンダリングするためのインターセプト機能を提供します。

## グローバル共有のコンテキストを提供

`createContext` を使用してコンテキストを定義し、`useContext` でそのコンテキストを取得します。

```tsx
import { Plugin, Application } from '@nocobase/client';
import { createContext, useContext } from 'react';

const MyContext = createContext({ color: null });

const HomePage = () => {
  // コンテキストの値を読み取る
  const { color } = useContext(MyContext);
  return <div>色: {color}</div>;
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

## グローバル内容の表示を提供

```tsx
import { Plugin, Application } from '@nocobase/client';

// コンポーネントを作成し、children のレンダリングに注意する
const MyProvider = (props) => {
  const { children, name } = props;
  return (
    <div>
      <div>グローバル内容の表示 - {name}</div>
      {children}
    </div>
  );
};

class PluginSampleProvider extends Plugin {
  async load() {
    this.app.addProvider(MyProvider, { name: 'NocoBase' });

    this.app.router.add('home', {
      path: '/',
      Component: () => <div>ホームページ</div>,
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

## インターセプトの機能

```tsx
import { Plugin, Application } from '@nocobase/client';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

// コンポーネントを作成し、children のレンダリングに注意する
const MyProvider = (props) => {
  const { children, name } = props;
  const location = useLocation();
  
  if (location.pathname === '/about') {
    return (
      <div>
        コンテンツがインターセプトされました。<Link to={'/'}>ホーム</Link>に戻る
      </div>
    );
  }

  return (
    <div>
      <div>こんにちは {name}</div>
      <Link to={'/'}>ホーム</Link>, <Link to={'/about'}>アバウト</Link>
      {children}
    </div>
  );
};

class PluginSampleProvider extends Plugin {
  async load() {
    this.app.addProvider(MyProvider);
    this.app.router.add('home', {
      path: '/',
      Component: () => <div>ホームページ</div>,
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

