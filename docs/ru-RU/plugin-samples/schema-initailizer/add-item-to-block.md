# Локальная регистрация компонента и области видимости

## Описание примера

Функциональность, реализуемая в этом примере, аналогична примеру [Глобальная регистрация компонента и области видимости](/plugin-samples/component-and-scope/global), но в данном случае компонент и область видимости будут зарегистрированы внутри самого плагина, а не глобально.

Полный код примера доступен в [plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-component-and-scope-local).

## Инициализация плагина

Следуйте инструкциям из документации [Создание первого плагина](/development/your-first-plugin). Если у вас нет проекта, создайте его. Если проект уже есть или вы клонировали исходный код, пропустите этот шаг.

```bash
yarn create nocobase-app my-nocobase-app -d sqlite
cd my-nocobase-app
yarn install
yarn nocobase install
```

Инициализируйте плагин и добавьте его в систему:

```bash
yarn pm create @nocobase-sample/plugin-component-and-scope-local
yarn pm enable @nocobase-sample/plugin-component-and-scope-local
```

Запустите проект:

```bash
yarn dev
```

После входа в систему перейдите по адресу [http://localhost:13000/admin/pm/list/local/](http://localhost:13000/admin/pm/list/local/), чтобы убедиться, что плагин установлен и активирован.

---

# Реализация функциональности

## 1. Создание пользовательской страницы

Создайте файл `packages/plugins/@nocobase-sample/plugin-component-and-scope-local/src/client/CustomPage.tsx` со следующим содержимым:

```tsx | pure
import React from "react"

export const SamplesCustomPage = () => {
  return <div>TODO</div>
}
```

## 2. Рендеринг содержимого напрямую с помощью `Component`

Для получения дополнительной информации о создании пользовательских страниц см. руководство [Добавление новой страницы](/plugin-samples/router/add-page).

Далее, обновите файл `packages/plugins/@nocobase-sample/plugin-component-and-scope-local/src/index.ts`:

```tsx | pure
import { Plugin } from '@nocobase/client';
import { SamplesCustomPage } from './CustomPage'

export class PluginComponentAndScopeLocalClient extends Plugin {
  async load() {
    this.app.router.add('admin.custom-page2', {
      path: '/admin/custom-page2',
      Component: SamplesCustomPage,
    })
  }
}

export default PluginComponentAndScopeLocalClient;
```

В отличие от глобальной регистрации, здесь мы напрямую используем `Component: SamplesCustomPage`, вместо передачи строки с типом компонента.

Перейдите по адресу [http://localhost:13000/admin/custom-page2](http://localhost:13000/admin/custom-page2), чтобы увидеть содержимое компонента `SamplesCustomPage`.

![img_v3_02av_46e020ae-41d2-4bc3-a047-e28d97c20bdg](https://static-docs.nocobase.com/img_v3_02av_46e020ae-41d2-4bc3-a047-e28d97c20bdg.jpg)

## 3. Рендеринг содержимого с помощью `SchemaComponent`

Необходимо ознакомиться с следующими концепциями:

- [Протокол схемы](/development/client/ui-schema/what-is-ui-schema)
- [SchemaComponent](https://client.docs.nocobase.com/core/ui-schema/schema-component#schemacomponent-1)
- [withDynamicSchemaProps](/development/client/ui-schema/what-is-ui-schema#x-component-props-and-x-use-component-props)
- [useFieldSchema()](https://client.docs.nocobase.com/core/ui-schema/designable#usefieldschema)

Обновите файл `packages/plugins/@nocobase-sample/plugin-component-and-scope-local/src/client/CustomPage.tsx`:

```tsx | pure
import { ISchema, SchemaComponent, withDynamicSchemaProps } from "@nocobase/client"
import { uid } from '@formily/shared'
import { useFieldSchema } from '@formily/react'
import React, { FC } from "react"

const SamplesHello: FC<{ name: string }> = withDynamicSchemaProps(({ name }) => {
  return <div>hello {name}</div>
})

const useSamplesHelloProps = () => {
  const schema = useFieldSchema();
  return { name: schema.name }
}

const schema: ISchema = {
  type: 'void',
  name: uid(),
  properties: {
    demo1: {
      type: 'void',
      'x-component': SamplesHello,
      'x-component-props': {
        name: 'demo1',
      },
    },
    demo2: {
      type: 'void',
      'x-component': SamplesHello,
      'x-use-component-props': useSamplesHelloProps,
    },
    demo3: {
      type: 'void',
      'x-component': 'SamplesHello',
      'x-component-props': {
        name: 'demo3',
      },
    },
    demo4: {
      type: 'void',
      'x-component': 'SamplesHello',
      'x-use-component-props': 'useSamplesHelloProps',
    },
  }
}

export const SamplesCustomPage = () => {
  return <SchemaComponent schema={schema} components={{ SamplesHello }} scope={{ useSamplesHelloProps }}></SchemaComponent>
}
```

- Определены компонент `SamplesHello` и область видимости `useSamplesHelloProps`.
- Создан объект `schema`, в котором поля `demo1` и `demo2` используют соответствующие компоненты и области видимости напрямую, а поля `demo3` и `demo4` используют строковые типы компонентов и областей видимости.
- Использованы атрибуты `components` и `scope` компонента `SchemaComponent` для локальной регистрации `SamplesHello` и `useSamplesHelloProps`.

Перейдите по адресу [http://localhost:13000/admin/custom-page2](http://localhost:13000/admin/custom-page2), чтобы увидеть содержимое компонента `CustomPage`.

![img_v3_02av_e8d4d0c7-7a59-4f9e-a120-a2551e719ebg](https://static-docs.nocobase.com/img_v3_02av_e8d4d0c7-7a59-4f9e-a120-a2551e719ebg.jpg)

---

# Сборка и развертывание в продакшен

Следуйте инструкциям из руководства [Сборка и упаковка плагинов](/development/your-first-plugin#building-and-packaging-plugins), чтобы упаковать плагин и загрузить его в продакшен.

Для клонированного исходного кода выполните полную сборку для упаковки зависимостей плагина:

```bash
yarn build
```

Для проекта, созданного с помощью `create-nocobase-app`, выполните:

```bash
yarn build @nocobase-sample/plugin-component-and-scope-local --tar
```

В результате будет создан файл `storage/tar/@nocobase-sample/plugin-component-and-scope-local.tar.gz`, который можно загрузить с помощью [метода загрузки плагина](/welcome/getting-started/plugin).
