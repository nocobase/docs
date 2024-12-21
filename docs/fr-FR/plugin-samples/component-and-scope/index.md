# Registration and Usage of Component and Scope

## Scenario Explanation

There are two main reasons why Components and Scopes need to be registered:

### Reason 1: UI Schema Needs to Be Stored on the Server

NocoBase’s front-end pages are rendered based on the [UI Schema](/development/client/ui-schema/what-is-ui-schema), which must be stored in the database. Since the UI Schema cannot have reference-type properties, we can only store the values of properties like `x-component`, `x-decorator`, `x-use-component-props`, and `x-use-decorator-props` as strings. Then, we register the corresponding Component and Scope in NocoBase so that during page rendering, the system can match the stored strings to the appropriate Component and Scope.

In contrast, for UI Schemas that do not need to be stored in the database, we can directly use reference-type properties. For example, in the locally developed [plugin configuration page](/plugin-samples/plugin-settings/form), properties like `x-component` and `x-use-component-props` can use reference-type values directly.

```ts
const schema: ISchema = {
  type: 'void',
  name: uid(),
  'x-component': MyComponent,
  'x-use-component-props': useMyComponentProps,
}
```

### Reason 2: Extensibility Needs

Components can be used both in the UI Schema and in routing. In both cases, it may be necessary to override certain components to achieve customization. For example:

```ts
class AuthPlugin extends Plugin {
  async load() {
    this.app.addComponents({ LoginPage })
    this.app.router.add('auth.signin', {
      path: '/signin',
      Component: 'SignInPage',
    })
  }
}
```

If someone needs to replace the login page, there are two options:

#### Option 1: Replace the Route

```ts
class CustomPlugin extends Plugin {
  async load() {
    this.app.router.add('auth.login', {
      path: '/login',
      Component: CustomLoginPage,
    })
  }
}
```

#### Option 2: Directly Replace the Component

```ts
class CustomPlugin extends Plugin {
  async load() {
    this.app.addComponent({ LoginPage: CustomLoginPage })
  }
}
```

In summary, if it's not one of these two scenarios, there's no need to register the Component and Scope, and you can directly use reference-type properties instead.

## Global Registration and Local Registration

Components and Scopes can be registered globally or locally.

### Global Registration

For global registration, use the methods [app.addComponents()](https://client.docs.nocobase.com/core/application/application#appaddcomponents) and [app.addScopes()](https://client.docs.nocobase.com/core/application/application#appaddscopes). For example:

```ts
class MyPlugin extends Plugin {
  async load() {
    this.app.addComponents({ MyComponent })
    this.app.addScopes({ MyScope })
  }
}
```

### Local Registration

For local registration, use the `components` and `scope` properties of the [SchemaComponent](https://client.docs.nocobase.com/core/ui-schema/schema-component#schemacomponent-1) and [SchemaComponentOptions](https://client.docs.nocobase.com/core/ui-schema/schema-component#schemacomponentoptions) components. For example:

```tsx | pure
<SchemaComponentProvider components={{ Hello }} scope={{ useDeleteProps }}>
  <SchemaComponent schema={schema} components={{ World }} scope={{ useSubmitProps }} />
</SchemaComponentProvider>
```

`SchemaComponentProvider` can be nested multiple layers deep, and inner `SchemaComponent` elements will inherit the `components` and `scope` from outer layers.

For the scenarios mentioned, we provide the following examples:

- [Global Registration of Component and Scope](/plugin-samples/component-and-scope/global)
- [Local Registration of Component and Scope](/plugin-samples/component-and-scope/local)

For the customization scenario, refer to the routing example [Replace Page](/plugin-samples/router/replace-page).
