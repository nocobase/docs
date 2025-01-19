# Schema Rendering

## Core Components

Schema rendering involves several core components:

- `<SchemaComponentProvider />` provides the context needed for schema rendering.
- `<SchemaComponentOptions />` extends components and scopes, optional.
- `<SchemaComponent />` renders the schema, must be used within `<SchemaComponentProvider />`.

Basic usage is as follows:

```tsx
import React from 'react';
import { SchemaComponent, SchemaComponentProvider } from '@nocobase/client';

const Hello = () => <h1>Hello, world!</h1>;

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

For specific API details, refer to [SchemaComponent](https://client.docs.nocobase.com/core/ui-schema/schema-component).

## What is Scope?

Scope refers to variables or functions available within the schema. For example, the function `t()` in the following example needs to be registered in the scope to render the title correctly.

```tsx | pure
<SchemaComponent
  scope={{ t }}
  schema={{
    title: '{{t("Hello")}}',
  }}
>
```

## Registering Components and Scopes

Components and scopes can be registered with SchemaComponentProvider, SchemaComponentOptions, and SchemaComponent. The differences are:

- SchemaComponentProvider provides the top-level context.
- SchemaComponentOptions is used to replace and extend the local context.
- SchemaComponent provides the current schema's context.

For example:

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

- schema1 can use ComponentA and ComponentB
- schema2 can use ComponentA and ComponentC
- schema3 can use ComponentA, ComponentD, and ComponentE
- schema4 can use ComponentA, ComponentD, and ComponentF

## Using in Application

The Application in the NocoBase client has built-in SchemaComponentProvider components in its Providers.

```ts
class Application {
  // Default Providers
  addDefaultProviders() {
    this.addProvider(SchemaComponentProvider, {
      scopes: this.scopes,
      components: this.components,
    });
  }
}
```

The final rendering component structure is as follows:

```tsx | pure
<Router>
  {/* Context Provider for routing */}
  <SchemaComponentProvider components={app.components} scopes={app.scopes}>
    {/* Custom Provider components - start tag */}
    <Routes />
    {/* Custom Provider components - end tag */}
  </SchemaComponentProvider>
</Router>
```

When using it within the application, you don't need to wrap it with SchemaComponentProvider; you can directly use SchemaComponent.

```tsx
import {
  Application,
  Plugin,
  SchemaComponent,
  SchemaComponentProvider,
} from '@nocobase/client';
import React from 'react';

const Hello = () => <h1>Hello, world!</h1>;

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

In the application's lifecycle methods, you can use `app.addComponents()` and `app.addScopes()` to extend global components and scopes.

```ts
class PluginHello extends Plugin {
  async load() {
    this.app.addComponents({
      // Extended components
    });
    this.app.addScopes({
      // Extended scope
    });
  }
}
```