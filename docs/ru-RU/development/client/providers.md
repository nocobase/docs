
# **Компонент Provider**

В клиентском приложении NocoBase компонент `Provider` определён на внешнем уровне, с следующей основной структурой:

```tsx | pure
<Router>
  {' '}
  {/* Провайдер контекста для маршрутов */}
  <ProviderA>
    <ProviderB>
      {/* Пользовательские компоненты Provider - Открывающий тег */}
      <Routes />
      {/* Пользовательские компоненты Provider - Закрывающий тег */}
    </ProviderB>
  </ProviderA>
</Router>
```

Поскольку он определён на внешнем уровне, компонент `Provider` выполняет следующие функции:

- Предоставляет глобально разделяемый контекст, отображая `props.children` при необходимости.
- Отображает глобальное содержимое, рендеря `props.children`.
- Выполняет роль перехватчика, условно отображая `props.children`.

## Предоставление глобально разделяемого контекста

Используйте `createContext` для создания контекста и `useContext` для получения определённого контекста:

```tsx
import { Plugin, Application } from '@nocobase/client';
import { createContext, useContext } from 'react';

const MyContext = createContext({ color: null });

const HomePage = () => {
  // Получение значения контекста
  const { color } = useContext(MyContext);
  return <div>Цвет: {color}</div>;
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

## Предоставление отображения глобального содержимого

```tsx
import { Plugin, Application } from '@nocobase/client';

// Создание компонента и обеспечение рендеринга дочерних элементов
const MyProvider = (props) => {
  const { children, name } = props;
  return (
    <div>
      <div>Отображение глобального содержимого - {name}</div>
      {children}
    </div>
  );
};

class PluginSampleProvider extends Plugin {
  async load() {
    this.app.addProvider(MyProvider, { name: 'NocoBase' });

    this.app.router.add('home', {
      path: '/',
      Component: () => <div>Домашняя страница</div>,
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

## Функция перехвата

```tsx
import { Plugin, Application } from '@nocobase/client';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

// Создание компонента и обеспечение рендеринга дочерних элементов
const MyProvider = (props) => {
  const { children, name } = props;
  const location = useLocation();
  if (location.pathname === '/about') {
    return (
      <div>
        Содержимое перехвачено. Вернуться на <Link to={'/'}>Домашнюю страницу</Link>
      </div>
    );
  }
  return (
    <div>
      <div>Привет, {name}</div>
      <Link to={'/'}>Домашняя</Link>, <Link to={'/about'}>О нас</Link>
      {children}
    </div>
  );
};

class PluginSampleProvider extends Plugin {
  async load() {
    this.app.addProvider(MyProvider);
    this.app.router.add('home', {
      path: '/',
      Component: () => <div>Домашняя страница</div>,
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
</DOCUMENT>
