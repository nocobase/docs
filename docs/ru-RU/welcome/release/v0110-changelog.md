# Версия 0.11: 2023-07-08

## Новые возможности

- Новое клиентское приложение, плагин и маршрутизатор
- Обновление дизайна Ant до версии 5
- Новый плагин
  - Визуализация данных
  - Ключи API
  - Карта Google

## Несовместимые изменения

### Новое клиентское приложение, плагин и маршрутизатор

#### Изменения в плагинах

Раньше вам приходилось передавать компонент, а компоненту требовалось передавать `props.children`, например:

```tsx | pure
const HelloProvider = (props) => {
  // do something logic
  return <div>{props.children}</div>;
};

export default HelloProvider;
```

Теперь вам нужно перейти на использование плагина, например:

```diff | pure
+import { Plugin } from '@nocobase/client'

const HelloProvider = (props) => {
  // do something logic
  return <div>
    {props.children}
  </div>;
}

+ export class HelloPlugin extends Plugin {
+   async load() {
+     this.app.addProvider(HelloProvider);
+   }
+ }

- export default HelloProvider;
+ export default HelloPlugin;
```

Плагины очень мощные и могут многое делать на этапе `загрузки`:

- изменить маршруты
- добавить компоненты
- добавить поставщиков
- добавить области видимости
- загрузить другие плагины

#### Изменения маршрута

Если раньше вы использовали "RouteSwitchContext" для изменения маршрута, то теперь вам нужно заменить его плагином:mm

```tsx | pure
import { RouteSwitchContext } from '@nocobase/client';

const HelloProvider = () => {
  const { routes, ...others } = useContext(RouteSwitchContext);
  routes[1].routes.unshift({
    path: '/hello',
    component: Hello,
  });

  return (
    <div>
      <RouteSwitchContext.Provider value={{ ...others, routes }}>
        {props.children}
      </RouteSwitchContext.Provider>
    </div>
  );
};
```

Теперь вам нужно перейти на использование плагина, например:

```diff | pure
- import { RouteSwitchContext } from '@nocobase/client';
+ import { Plugin } from '@nocobase/client';

const HelloProvider = (props) => {
-  const { routes, ...others } = useContext(RouteSwitchContext);
-  routes[1].routes.unshift({
-    path: '/hello',
-    component: Hello,
-  });

  return <div>
-   <RouteSwitchContext.Provider value={{ ...others, routes }}>
      {props.children}
-   </RouteSwitchContext.Provider>
  </div>
}

+ export class HelloPlugin extends Plugin {
+  async load() {
+    this.app.router.add('admin.hello', {
+       path: '/hello',
+       Component: Hello,
+    });
+    this.app.addProvider(HelloProvider);
+  }
+ }
+ export default HelloPlugin;
```

Более подробную информацию можно найти в разделе [packages/core/client/src/application/index.md](https://github.com/nocobase/nocobase/blob/main/packages/core/client/src/application/index.md)

### Обновление antd до версии 5

- подробности, связанные с antd, смотрите на официальном веб-сайте [версии с 4 по 5](https://ant.design/docs/react/migration-v5)
- `@formily/antd` заменить на `@formily/antd-v5`
