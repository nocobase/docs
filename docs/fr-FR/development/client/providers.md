# **Provider component**

In the NocoBase client application, the `Provider` component is defined in the outer layer, with the core structure as follows:

```tsx | pure
<Router>
  {' '}
  {/* Context Provider for routes */}
  <ProviderA>
    <ProviderB>
      {/* Custom Provider components - Opening tag */}
      <Routes />
      {/* Custom Provider components - Closing tag */}
    </ProviderB>
  </ProviderA>
</Router>
```

Since it is defined at the outer layer, the `Provider` component serves the following purposes:

- Provides globally shared context, rendering `props.children` when needed.
- Displays global content by rendering `props.children`.
- Acts as an interceptor, conditionally rendering `props.children`.

## Providing a globally shared context

Use `createContext` to define a context and `useContext` to retrieve the defined context:

```tsx
import { Plugin, Application } from '@nocobase/client';
import { createContext, useContext } from 'react';

const MyContext = createContext({ color: null });

const HomePage = () => {
  // Access the context value
  const { color } = useContext(MyContext);
  return <div>Color is: {color}</div>;
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

## Providing global content display

```tsx
import { Plugin, Application } from '@nocobase/client';

// Create a component and ensure children are rendered
const MyProvider = (props) => {
  const { children, name } = props;
  return (
    <div>
      <div>Global content display - {name}</div>
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

## Intercepting functionality

```tsx
import { Plugin, Application } from '@nocobase/client';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

// Create a component and ensure children are rendered
const MyProvider = (props) => {
  const { children, name } = props;
  const location = useLocation();
  if (location.pathname === '/about') {
    return (
      <div>
        Content intercepted. Return to <Link to={'/'}>Home</Link>
      </div>
    );
  }
  return (
    <div>
      <div>Hello, {name}</div>
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
