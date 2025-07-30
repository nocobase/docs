# Локальная регистрация компонента и области видимости

## Описание примера

Функциональность, реализуемая в данном примере, идентична примеру из [Глобальная регистрация компонента и области видимости](/plugin-samples/component-and-scope/global), за исключением того, что компоненты и области видимости будут зарегистрированы локально внутри плагина, а не глобально.

Полный код примера можно найти в репозитории [plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-component-and-scope-local).

## Инициализация плагина

Следуя инструкциям из документа [Создание вашего первого плагина](/development/your-first-plugin), если у вас нет проекта, сначала создайте его. Если проект уже существует или вы клонировали исходный код, пропустите этот шаг.

```bash
yarn create nocobase-app my-nocobase-app -d sqlite
cd my-nocobase-app
yarn install
yarn nocobase install
```

Затем инициализируйте плагин и добавьте его в систему:

```bash
yarn pm create @nocobase-sample/plugin-component-and-scope-local
yarn pm enable @nocobase-sample/plugin-component-and-scope-local
```

Запустите проект:

```bash
yarn dev
```

После входа в систему перейдите по адресу [http://localhost:13000/admin/pm/list/local/](http://localhost:13000/admin/pm/list/local/), чтобы убедиться, что плагин успешно установлен и активирован.

## Реализация функционала

### 1. Создание пользовательской страницы

Создайте новый файл `packages/plugins/@nocobase-sample/plugin-component-and-scope-local/src/client/CustomPage.tsx` со следующим содержимым:

```tsx | pure
import React from "react";

export const SamplesCustomPage = () => {
  return <div>TODO</div>;
};
```

### 2. Прямой рендеринг содержимого с использованием `Component`

Подробности о создании пользовательских страниц см. в [Добавление новой страницы](/plugin-samples/router/add-page).

Измените файл `packages/plugins/@nocobase-sample/plugin-component-and-scope-local/src/index.ts` следующим образом:

```tsx | pure
import { Plugin } from '@nocobase/client';
import { SamplesCustomPage } from './CustomPage';

export class PluginComponentAndScopeLocalClient extends Plugin {
  async load() {
    this.app.router.add('admin.custom-page2', {
      path: '/admin/custom-page2',
      Component: SamplesCustomPage,
    });
  }
}

export default PluginComponentAndScopeLocalClient;
```

В отличие от глобальной регистрации, здесь мы используем `Component: SamplesCustomPage` напрямую, а не строковое значение.

Перейдите по адресу [http://localhost:13000/admin/custom-page2](http://localhost:13000/admin/custom-page2), чтобы просмотреть содержимое компонента `SamplesCustomPage`.

![Скриншот пользовательской страницы](https://static-docs.nocobase.com/img_v3_02av_46e020ae-41d2-4bc3-a047-e28d97c20bdg.jpg)

### 3. Рендеринг содержимого с использованием `SchemaComponent`

Необходимые предварительные знания:

- [Протокол Schema](/development/client/ui-schema/what-is-ui-schema)
- [SchemaComponent](https://client.docs.nocobase.com/core/ui-schema/schema-component#schemacomponent-1)
- [withDynamicSchemaProps](/development/client/ui-schema/what-is-ui-schema#x-component-props-and-x-use-component-props)
- [useFieldSchema()](https://client.docs.nocobase.com/core/ui-schema/designable#usefieldschema)

Измените файл `packages/plugins/@nocobase-sample/plugin-component-and-scope-local/src/client/CustomPage.tsx` следующим образом:

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

- Определены компонент `SamplesHello` и функция `useSamplesHelloProps`.
- Создан объект `schema`, где `demo1` и `demo2` напрямую используют соответствующие компоненты и области видимости, а `demo3` и `demo4` используют строковые определения.
- `SchemaComponent` регистрирует `SamplesHello` и `useSamplesHelloProps` локально с помощью свойств `components` и `scope`.

Перейдите по адресу [http://localhost:13000/admin/custom-page2](http://localhost:13000/admin/custom-page2), чтобы просмотреть компонент `CustomPage`.

![Скриншот SchemaComponent](https://static-docs.nocobase.com/img_v3_02av_e8d4d0c7-7a59-4f9e-a120-a2551e719ebg.jpg)

## Сборка и загрузка в продакшен

Следуйте инструкциям из документа [Сборка и упаковка плагина](/development/your-first-plugin#build-and-package-plugin), чтобы упаковать плагин для продакшена.

Если вы используете клонированный исходный код, сначала выполните полную сборку, чтобы собрать все зависимости плагина:

```bash
yarn build
```

Если проект создан с помощью `create-nocobase-app`, выполните:

```bash
yarn build @nocobase-sample/plugin-component-and-scope-local --tar
```

В результате будет создан файл `storage/tar/@nocobase-sample/plugin-component-and-scope-local.tar.gz`. Установите его через процесс [загрузки плагина](/welcome/getting-started/plugin).
