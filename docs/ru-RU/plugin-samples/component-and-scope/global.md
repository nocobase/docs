# Глобальная регистрация компонента и области видимости

## Описание примера

Создайте новую страницу и используйте [SchemaComponent](https://client.docs.nocobase.com/core/ui-schema/schema-component#schemacomponent-1) для рендеринга содержимого. Компонент маршрута и компоненты внутри `SchemaComponent` регистрируются глобально.

Полный код примера можно найти в репозитории [plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-component-and-scope-global).

## Инициализация плагина

Следуя инструкциям из документа [Создание вашего первого плагина](/development/your-first-plugin), если у вас нет проекта, создайте его. Если проект уже существует или вы клонировали исходный код, пропустите этот шаг.

```bash
yarn create nocobase-app my-nocobase-app -d sqlite
cd my-nocobase-app
yarn install
yarn nocobase install
```

Затем инициализируйте плагин и добавьте его в систему:

```bash
yarn pm create @nocobase-sample/plugin-component-and-scope-global
yarn pm enable @nocobase-sample/plugin-component-and-scope-global
```

Запустите проект:

```bash
yarn dev
```

После входа в систему перейдите по адресу [http://localhost:13000/admin/pm/list/local/](http://localhost:13000/admin/pm/list/local/), чтобы убедиться, что плагин установлен и активирован.

## Реализация функционала

### 1. Создание пользовательской страницы

Создайте файл `packages/plugins/@nocobase-sample/plugin-component-and-scope-global/src/client/CustomPage.tsx` со следующим содержимым:

```tsx | pure
import React from "react"

export const SamplesCustomPage = () => {
  return <div>TODO</div>
}
```

### 2. Глобальная регистрация компонентов и маршрутов

Подробные инструкции по созданию пользовательской страницы см. в документации [Добавление страницы](/plugin-samples/router/add-page).

Измените файл `packages/plugins/@nocobase-sample/plugin-component-and-scope-global/src/index.ts` следующим образом:

```tsx | pure
import { Plugin } from '@nocobase/client';
import { SamplesCustomPage } from './CustomPage'

export class PluginComponentAndScopeGlobalClient extends Plugin {
  async load() {
    this.app.router.add('admin.custom-page1', {
      path: '/admin/custom-page1',
      Component: 'SamplesCustomPage',
    })

    this.app.addComponents({ SamplesCustomPage })
  }
}

export default PluginComponentAndScopeGlobalClient;
```

Мы регистрируем компонент `SamplesCustomPage` глобально с помощью метода `app.addComponents()`, затем регистрируем маршрут с помощью метода `app.router.add()`. Поле `Component`, будучи строкового типа, автоматически ищет глобально зарегистрированный компонент.

Перейдите по адресу [http://localhost:13000/admin/custom-page1](http://localhost:13000/admin/custom-page1), чтобы увидеть содержимое компонента `SamplesCustomPage`.

![Скриншот](https://static-docs.nocobase.com/img_v3_02av_55c3115b-f4b6-4c24-8ea2-914869d498bg.jpg)

### 3. Использование `SchemaComponent` для рендеринга схемы

Сначала необходимо ознакомиться с следующими концепциями:

- [Протокол Schema](/development/client/ui-schema/what-is-ui-schema)
- [SchemaComponent](https://client.docs.nocobase.com/core/ui-schema/schema-component#schemacomponent-1)
- [withDynamicSchemaProps](/development/client/ui-schema/what-is-ui-schema#x-component-props-and-x-use-component-props)
- [useFieldSchema()](https://client.docs.nocobase.com/core/ui-schema/designable#usefieldschema)

Измените файл `packages/plugins/@nocobase-sample/plugin-component-and-scope-global/src/client/CustomPage.tsx` следующим образом:

```tsx | pure
import { ISchema, SchemaComponent, withDynamicSchemaProps } from "@nocobase/client"
import { uid } from '@formily/shared'
import { useFieldSchema } from '@formily/react'
import React, { FC } from "react"

export const SamplesHello: FC<{ name: string }> = withDynamicSchemaProps(({ name }) => {
  return <div>hello {name}</div>
})

export const useSamplesHelloProps = () => {
  const schema = useFieldSchema();
  return { name: schema.name }
}

const schema: ISchema = {
  type: 'void',
  name: uid(),
  properties: {
    demo1: {
      type: 'void',
      'x-component': 'SamplesHello',
      'x-component-props': {
        name: 'demo1',
      },
    },
    demo2: {
      type: 'void',
      'x-component': 'SamplesHello',
      'x-use-component-props': 'useSamplesHelloProps',
    },
  }
}

export const SamplesCustomPage = () => {
  return <SchemaComponent schema={schema}></SchemaComponent>
}
```

- Определены и экспортированы компонент `SamplesHello` и функция `useSamplesHelloProps`.
- Определён объект `schema`, содержащий `'x-component': 'SamplesHello'` и `'x-use-component-props': 'useSamplesHelloProps'`, оба строкового типа.
- Использован компонент [SchemaComponent](https://client.docs.nocobase.com/core/ui-schema/schema-component#schemacomponent-1) для рендеринга объекта `schema`.

Далее необходимо глобально зарегистрировать `SamplesHello` и `useSamplesHelloProps`. Измените файл `packages/plugins/@nocobase-sample/plugin-component-and-scope-global/src/index.ts` следующим образом:

```diff
import { Plugin } from '@nocobase/client';
- import { SamplesCustomPage } from './CustomPage'
+ import { SamplesCustomPage, SamplesHello, useSamplesHelloProps } from './CustomPage'

export class PluginComponentAndScopeGlobalClient extends Plugin {
  async load() {
    this.app.router.add('admin.custom-page1', {
      path: '/admin/custom-page1',
      Component: 'SamplesCustomPage',
    })

-   this.app.addComponents({ SamplesCustomPage })
+   this.app.addComponents({ SamplesCustomPage, SamplesHello })
+   this.app.addScopes({ useSamplesHelloProps })
  }
}

export default PluginComponentAndScopeGlobalClient;
```

Перейдите по адресу [http://localhost:13000/admin/custom-page1](http://localhost:13000/admin/custom-page1), чтобы увидеть содержимое компонента `CustomPage`.

![Скриншот](https://static-docs.nocobase.com/img_v3_02av_79e76ad8-d697-4e3b-aaa9-46ed90e2bb9g.jpg)

## Сборка и загрузка в продакшен

Следуя инструкциям из документа [Сборка и упаковка плагина](/development/your-first-plugin#building-and-packaging-the-plugin), упакуйте плагин для продакшена.

Если вы используете клонированный исходный код, сначала выполните полную сборку, чтобы включить зависимости плагина:

```bash
yarn build
```

Если проект создан с помощью `create-nocobase-app`, выполните:

```bash
yarn build @nocobase-sample/plugin-component-and-scope-global --tar
```

После этого в папке `storage/tar/@nocobase-sample/plugin-component-and-scope-global.tar.gz` появится файл, который можно установить с помощью [метода загрузки](/welcome/getting-started/plugin).
