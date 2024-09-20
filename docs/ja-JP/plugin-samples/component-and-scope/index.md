# Component 和 Scope 的注册和使用

## 场景说明

Component 和 Scope 之所以需要注册，有以下 2 方面的原因：

### 原因 1：UI Schema 需要存储在服务端

NocoBase 的前端页面是基于 [UI Schema](/development/client/ui-schema/what-is-ui-schema) 来渲染的，而 UI Schema 又是需要存储在数据库中的，所以其不能有引用类型的属性，所以我们只能将 `x-component`、`x-decorator`、`x-use-component-props`、`x-use-decorator-props` 等属性的值存储为字符串，然后将对应的 Component 和 Scope 注册到 NocoBase 中，这样在渲染页面时，就可以根据字符串找到对应的 Component 和 Scope。

相反对于不需要存储在数据库中的 UI Schema，我们可以直接使用引用类型的属性，例如在开发本地的[插件配置页面](/plugin-samples/plugin-settings/form) 其中涉及的 `x-component`、`x-use-component-props` 等属性的值可以直接使用引用类型的属性。

```ts
const schema: ISchema = {
  type: 'void',
  name: uid(),
  'x-component': MyComponent,
  'x-use-component-props': useMyComponentProps,
}
```

### 原因 2：扩展性需求

Component 一方面是用来 UI Schema 中，一方面可以用来路由中，两种场景都存在覆盖某些组件，以达到定制化的目的。例如：

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

假设别人需要替换掉登录页面时就有 2 种选择。

#### 方案1：替换路由

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

#### 方案2：直接替换 Component

```ts
class CustomPlugin extends Plugin {
  async load() {
    this.app.addComponent({ LoginPage: CustomLoginPage })
  }
}
```

综上，如果不是这 2 种场景，我们是不需要注册 Component 和 Scope 的，而是可以直接使用引用类型的属性。

## 全局注册和局部注册

Component 和 Scope 可以全局注册，也可以局部注册。

### 全局注册

全局注册需要通过 [app.addComponents()](https://client.docs.nocobase.com/core/application/application#appaddcomponents) 和 [app.addScopes()](https://client.docs.nocobase.com/core/application/application#appaddscopes) 方法来注册。例如：

```ts
class MyPlugin extends Plugin {
  async load() {
    this.app.addComponents({ MyComponent })
    this.app.addScopes({ MyScope })
  }
}
```

### 局部注册

局部注册需要通过 [SchemaComponent](https://client.docs.nocobase.com/core/ui-schema/schema-component#schemacomponent-1) 和 [SchemaComponentOptions](https://client.docs.nocobase.com/core/ui-schema/schema-component#schemacomponentoptions) 组件的 `components` 和 `scope` 属性来注册。例如：

```tsx | pure
<SchemaComponentProvider components={{ Hello }} scope={{ useDeleteProps }}>
  <SchemaComponent schema={schema} components={{ World }} scope={{ useSubmitProps }} />
</SchemaComponentProvider>
```

`SchemaComponentProvider` 可以多层嵌套，内部的 `SchemaComponent` 会继承外部的 `components` 和 `scope`。


针对以上场景，我们提供了如下示例：

- [全局注册 Component 和 Scope](/plugin-samples/component-and-scope/global)
- [局部注册 Component 和 Scope](/plugin-samples/component-and-scope/local)

覆盖场景我们可以参考路由示例种的 [替换页面](/plugin-samples/router/replace-page)
