# Регистрация и использование компонентов и областей видимости

## Описание сценария

Существует две основные причины, по которым необходимо регистрировать компоненты и области видимости:

### Причина 1: UI Schema должен храниться на сервере

Страницы фронтенда NocoBase рендерятся на основе [UI Schema](/development/client/ui-schema/what-is-ui-schema), который должен сохраняться в базе данных. Поскольку UI Schema не может содержать свойства ссылочного типа, такие свойства, как `x-component`, `x-decorator`, `x-use-component-props` и `x-use-decorator-props`, могут храниться только в виде строк. Затем соответствующие компоненты и области видимости регистрируются в NocoBase, чтобы при рендеринге страницы система могла сопоставить сохранённые строки с соответствующими компонентами и областями видимости.

В отличие от этого, для UI Schema, которые не нужно сохранять в базе данных, можно напрямую использовать свойства ссылочного типа. Например, на локально разработанной [странице настроек плагина](/plugin-samples/plugin-settings/form) свойства, такие как `x-component` и `x-use-component-props`, могут напрямую использовать значения ссылочного типа.

```ts
const schema: ISchema = {
  type: 'void',
  name: uid(),
  'x-component': MyComponent,
  'x-use-component-props': useMyComponentProps,
}
```

### Причина 2: Потребности в расширяемости

Компоненты могут использоваться как в UI Schema, так и в маршрутизации. В обоих случаях может потребоваться переопределение определённых компонентов для достижения кастомизации. Например:

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

Если кому-то нужно заменить страницу входа, доступны два варианта:

#### Вариант 1: Замена маршрута

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

#### Вариант 2: Прямая замена компонента

```ts
class CustomPlugin extends Plugin {
  async load() {
    this.app.addComponent({ LoginPage: CustomLoginPage })
  }
}
```

В итоге, если речь не идёт об одном из этих двух сценариев, нет необходимости регистрировать компоненты и области видимости, и вместо этого можно напрямую использовать свойства ссылочного типа.

## Глобальная и локальная регистрация

Компоненты и области видимости могут быть зарегистрированы глобально или локально.

### Глобальная регистрация

Для глобальной регистрации используются методы [app.addComponents()](https://client.docs.nocobase.com/core/application/application#appaddcomponents) и [app.addScopes()](https://client.docs.nocobase.com/core/application/application#appaddscopes). Например:

```ts
class MyPlugin extends Plugin {
  async load() {
    this.app.addComponents({ MyComponent })
    this.app.addScopes({ MyScope })
  }
}
```

### Локальная регистрация

Для локальной регистрации используются свойства `components` и `scope` компонентов [SchemaComponent](https://client.docs.nocobase.com/core/ui-schema/schema-component#schemacomponent-1) и [SchemaComponentOptions](https://client.docs.nocobase.com/core/ui-schema/schema-component#schemacomponentoptions). Например:

```tsx | pure
<SchemaComponentProvider components={{ Hello }} scope={{ useDeleteProps }}>
  <SchemaComponent schema={schema} components={{ World }} scope={{ useSubmitProps }} />
</SchemaComponentProvider>
```

`SchemaComponentProvider` может быть вложен на несколько уровней, и внутренние элементы `SchemaComponent` наследуют `components` и `scope` из внешних уровней.

Для описанных сценариев мы предоставляем следующие примеры:

- [Глобальная регистрация компонента и области видимости](/plugin-samples/component-and-scope/global)
- [Локальная регистрация компонента и области видимости](/plugin-samples/component-and-scope/local)

Для сценария кастомизации обратитесь к примеру маршрутизации [Замена страницы](/plugin-samples/router/replace-page).
