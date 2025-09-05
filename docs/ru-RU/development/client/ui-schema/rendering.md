# Schema Визуализация

## Основные компоненты

Рендеринг schema включает несколько основных компонентов:

- `<SchemaComponentProvider />` предоставляет контекст, необходимый для рендеринга schema.
- `<SchemaComponentOptions />` расширяет компоненты и области видимости, необязательный.
- `<SchemaComponent />` выполняет рендеринг schema, должен использоваться внутри `<SchemaComponentProvider />`.

Базовое использование выглядит следующим образом:

```tsx
import React from 'react';
import { SchemaComponent, SchemaComponentProvider } from '@nocobase/client';

const Hello = () => <h1>Привет, мир!</h1>;

const schema = {
  type: 'void',
  name: 'hello',
  'x-component': 'Hello',
};

export default () => {
  return (
    <SchemaComponentProvider components={{ Hello }}>
      <SchemaComponent schema={schema} />
    </SchemaComponentProvider>
  );
};
```

Для подробной информации об API обратитесь к [SchemaComponent](https://client.docs.nocobase.com/core/ui-schema/schema-component).

## Что такое Scope?

Scope относится к переменным или функциям, доступным в schema. Например, функция `t()` в следующем примере должна быть зарегистрирована в scope для корректного рендеринга заголовка.

```tsx | pure
<SchemaComponent
  scope={{ t }}
  schema={{
    title: '{{t("Привет")}}',
  }}
>
```

## Регистрация компонентов и Scopes

Компоненты и scopes можно зарегистрировать с помощью SchemaComponentProvider, SchemaComponentOptions и SchemaComponent. Различия заключаются в следующем:

- SchemaComponentProvider предоставляет контекст верхнего уровня.
- SchemaComponentOptions используется для замены и расширения локального контекста.
- SchemaComponent предоставляет контекст текущей schema.

Например:

```tsx | pure
<SchemaComponentProvider components={{ ComponentA }}>
  <SchemaComponent components={{ ComponentB }} schema={schema1}>
  <SchemaComponent components={{ ComponentC }} schema={schema2}>
  <SchemaComponentOptions components={{ ComponentD }}>
    <SchemaComponent components={{ ComponentE }} schema={schema3}>
    <SchemaComponent components={{ ComponentF }} schema={schema4}>
  </SchemaComponentOptions>
</SchemaComponentProvider>
```

- schema1 может использовать ComponentA и ComponentB
- schema2 может использовать ComponentA и ComponentC
- schema3 может использовать ComponentA, ComponentD и ComponentE
- schema4 может использовать ComponentA, ComponentD и ComponentF

## Использование в приложении

Приложение в клиенте NocoBase имеет встроенные компоненты SchemaComponentProvider в своих провайдерах.

```ts
class Application {
  // Провайдеры по умолчанию
  addDefaultProviders() {
    this.addProvider(SchemaComponentProvider, {
      scopes: this.scopes,
      components: this.components,
    });
  }
}
```

Итоговая структура компонента рендеринга выглядит следующим образом:

```tsx | pure
<Router>
  {/* Провайдер контекста для маршрутизации */}
  <SchemaComponentProvider components={app.components} scopes={app.scopes}>
    {/* Пользовательские компоненты Provider - начальный тег */}
    <Routes />
    {/* Пользовательские компоненты Provider - конечный тег */}
  </SchemaComponentProvider>
</Router>
```

При использовании в приложении нет необходимости оборачивать в SchemaComponentProvider; можно напрямую использовать SchemaComponent.

```tsx
import {
  Application,
  Plugin,
  SchemaComponent,
  SchemaComponentProvider,
} from '@nocobase/client';
import React from 'react';

const Hello = () => <h1>Привет, мир!</h1>;

const HelloPage = () => {
  return (
    <SchemaComponent
      schema={{
        name: 'hello',
        type: 'void',
        'x-component': 'Hello',
      }}
    />
  );
};

class PluginHello extends Plugin {
  async load() {
    this.app.addProvider(SchemaComponentProvider, {
      components: this.app.components,
      scopes: this.app.scopes,
    });
    this.app.addComponents({ Hello });
    this.router.add('hello', {
      path: '/',
      Component: HelloPage,
    });
  }
}

const app = new Application({
  router: {
    type: 'memory',
  },
  plugins: [PluginHello],
});

export default app.getRootComponent();
```

В методах жизненного цикла приложения можно использовать `app.addComponents()` и `app.addScopes()` для расширения глобальных компонентов и scopes.

```ts
class PluginHello extends Plugin {
  async load() {
    this.app.addComponents({
      // Расширенные компоненты
    });
    this.app.addScopes({
      // Расширенный scope
    });
  }
}
```
