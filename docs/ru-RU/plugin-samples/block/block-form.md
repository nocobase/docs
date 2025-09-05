# Блок `Form` 

## Описание сценария

Блок `Form` является одним из самых важных блоков в NocoBase и используется для отображения и редактирования данных из таблиц данных. В этом тексте подробно описывается реализация блока`Form`.

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/2024-07-19-18-07-25.mov" type="video/mp4" />
</video>

## Инициализация плагина

Мы следуем документации по [созданию первого плагина](/development/your-fisrt-plugin). Если у вас еще нет проекта, вы можете начать с его создания; если проект уже существует или вы клонировали исходный код, пропустите этот шаг.

```bash
yarn create nocobase-app my-nocobase-app -d sqlite
cd my-nocobase-app
yarn install
yarn nocobase install
```

Затем инициализируйте плагин и добавьте его в систему:

```bash
yarn pm create @nocobase-sample/plugin-block-form
yarn pm enable @nocobase-sample/plugin-block-form
```

Затем запустите проект:

```bash
yarn dev
```

После входа в систему перейдите по адресу [http://localhost:13000/admin/pm/list/locale/](http://localhost:13000/admin/pm/list/locale/), чтобы увидеть, что плагин установлен и активирован.

## Реализация функционала

Перед реализацией данного примера рекомендуется ознакомиться с базовыми концепциями:

- [Форма ant-design ](https://ant.design/components/form)
- [Форма @formily/antd-v5 ](https://antd5.formilyjs.org/components/form)
- [Руководсвто по SchemaInitializer ](/development/client/ui-schema/initializer)：используется для добавления различных блоков, полей, операций и т.д. в интерфейс
- [SchemaInitializer API](https://client.docs.nocobase.com/core/ui-schema/schema-initializer)：используется для добавления различных блоков, полей, операций и т.д. в интерфейс
- [Проктокол UI Schema](/development/client/ui-schema/what-is-ui-schema)：подробное объяснение структуры схем и роли каждого свойства
- [Дизайнер Designable](/development/client/ui-schema/designable)：используется для изменения схем

```bash
.
├── client # Клиентская часть плагина
│   ├── FormV3.configActions # Инициализатор конфигурации
│   ├── index.ts
│   └── items
│       └── submit # Действие отправки
│           ├── index.ts
│           ├── initializer.tsx
│           ├── schema.ts
│           └── settings.ts
│   ├── FormV3.configFields # Инициализатор полей
│   ├── FormV3.settings # Настройки
│   ├── FormV3.initializer.ts # Инициализатор
│   ├── FormV3.schema.ts # Schema
│   ├── FormV3.tsx # Component
│   ├── index.tsx # Точка входа клиентского плагина
│   └── locale.ts # Функции локализации 
├── locale # Файлы локализации
│   ├── en-US.json # Английский язык
│   └── zh-CN.json # Китайский язык
├── index.ts # Точка входа серверной части плагина
└── server # Серверная часть плагина
```

### 1. Определение названия

Сначала необходимо задать название блока, которое будет использоваться в различных местах.

Создаем файл `packages/plugins/@nocobase-sample/plugin-block-form/src/client/constants.ts`：

```ts
export const FormV3BlockName = 'FormV3';
export const FormV3BlockNameLowercase = 'form-v3';
```

> Чтобы избежать конфликта с существующим компонентом `Form`, мы назвали его `FormV3`

### 2. Реализация компонента блока

#### 2.1 Определение компонента блока

Создадим файл `packages/plugins/@nocobase-sample/plugin-block-form/src/client/FormV3.tsx` со следующим содержимым:

```tsx | pure
import React, { FC } from 'react';
import { Form, FormProps } from '@formily/antd-v5';
import { withDynamicSchemaProps } from '@nocobase/client';
import { FormV3BlockName } from './constants'

export interface FormV3Props extends FormProps {
  children?: React.ReactNode;
}

export const FormV3: FC<FormV3Props> = withDynamicSchemaProps((props) => {
  return <Form {...props} layout={props.layout || 'vertical'} />
}, { displayName: FormV3BlockName });
```

Компонент `Form` по сути является функциональным компонентом, обернутым в `withDynamicSchemaProps`. [withDynamicSchemaProps](/development/client/ui-schema/what-is-ui-schema#x-component-props-和-x-use-component-props) — это компонент высшего порядка (HOC), который обрабатывает динамические свойства в Schema.

Если не учитывать `withDynamicSchemaProps`, то компонент`Form` представляет собой простой функциональный компонент.

#### 2.2  Регистрация компонента блока

Необходимо зарегистрировать компонент `FormV3` в системе через плагин.

```tsx | pure
import { Plugin } from '@nocobase/client';
import { FormV3 } from './FormV3';

export class PluginBlockFormClient extends Plugin {
  async load() {
    this.app.addComponents({ FormV3 })
  }
}

export default PluginBlockFormClient;
```

#### 2.3 Проверка компонента блока

Существует 2 способа проверки компонента:

- Временная страница для проверки: можно временно создать страницу и отрендерить компонент `Form`, чтобы убедиться, что он соответствует требованиям.
- Проверка через примеры в документации: можно запустить документацию `yarn doc plugins/@nocobase-sample/plugin-block-form` и проверить компонент, написав примеры в документации (TODO).

Рассмотрим пример`временной страницы для проверки`. Создадим новую страницу, добавим один или несколько компонентов `Form` с различными параметрами и проверим, соответствует ли результат требованиям.

```tsx | pure
import React from 'react';
import { Plugin, SchemaComponent } from '@nocobase/client';
import { FormV3 } from './FormV3';

export class PluginBlockFormClient extends Plugin {
  async load() {
    this.app.addComponents({ FormV3 })

    this.app.router.add('admin.block-form-component', {
      path: '/admin/block-form-component',
      Component: () => {
        return <FormV3>
          <SchemaComponent schema={{
            type: 'void',
            properties: {
              username: {
                type: 'string',
                'x-decorator': 'FormItem',
                'x-component': 'Input',
                title: 'Username',
                required: true,
              },
              nickname: {
                type: 'string',
                'x-decorator': 'FormItem',
                'x-component': 'Input',
                title: 'Nickname',
              },
              password: {
                type: 'string',
                'x-decorator': 'FormItem',
                'x-component': 'Input',
                title: 'Password',
              },
              button: {
                type: 'void',
                'x-component': 'Action',
                title: 'Submit',
                'x-use-component-props': useSubmitActionProps,
              },
            }
          }} />
        </FormV3>
      }
    });
  }
}

export default PluginBlockFormClient;
```

Затем перейдите по адресу `http://localhost:13000/admin/form-component` чтобы увидеть содержимое тестовой страницы.   

![20240718175735](https://static-docs.nocobase.com/20240718175735.png)

После завершения проверки необходимо удалить тестовую страницу.

### 3. Определение блок-схемы

#### 3.1 Определение блок-схемы

Динамические страницы в NocoBase рендерятся через Schema, поэтому нам нужно определить Schema, которое будет использоваться для добавления блока  `Form` в интерфейсе. Перед реализацией этого раздела рекомендуется ознакомиться с базовыми концепциями:

- [Протокол UI Schema](/development/client/ui-schema/what-is-ui-schema)：подробное описание структуры Schema и назначения каждого атрибута

Создаем файл `packages/plugins/@nocobase-sample/plugin-block-form/src/client/FormV3.schema.ts`：

```tsx | pure
import { ISchema, useDataBlockProps } from "@nocobase/client";

import { FormV3BlockName, FormV3BlockNameLowercase } from "./constants";
import { FormV3Props } from "./FormV3";

export function useFormV3Props(): FormV3Props {
  const blockProps = useDataBlockProps();
  return blockProps[FormV3BlockNameLowercase];
}

interface GetFormV3SchemaOptions {
  dataSource?: string;
  collection: string;
  properties?: ISchema['properties'];
}

export function getFormV3Schema(options: GetFormV3SchemaOptions): ISchema {
  const { dataSource, collection, properties = {} } = options;
  return {
    type: 'void',
    'x-component': 'CardItem',
    'x-decorator': 'DataBlockProvider',
    'x-decorator-props': {
      dataSource,
      collection,
      [FormV3BlockNameLowercase]: {},
    },
    properties: {
      [FormV3BlockNameLowercase]: {
        type: 'void',
        'x-component': FormV3BlockName,
        'x-use-component-props': 'useFormV3Props',
        properties: {
          ...properties,
        }
      },
    }
  }
}
```

`getFormV3Schema`：
  - `type`：Тип, здесь `void`，что указывает на чистый UI-узел без данных.
  - `'x-component': 'CardItem'`：[CardItem 组件](https://client.docs.nocobase.com/components/card-item)， все блоки оборачиваются в карточки для стилей, макета и drag-and-drop функционала
  - `x-decorator: 'DataBlockProvider'`：провайдер данных блока, подробнее в [DataBlockProvider](https://client.docs.nocobase.com/core/data-block/data-block-provider)
  - `x-decorator-props`：`DataBlockProvider` свойства DataBlockProvider
    - `dataSource`：источник данных
    - `collection`：таблица данных
    - `[FormV3BlockNameLowercase]: {}`：`FormV3` свойства компонента FormV3
  - `properties: { [FormV3BlockNameLowercase]: { ... } }`：Подузлы
    - `[FormV3BlockNameLowercase]`：`FormV3` свойства компонента FormV3
    - `'x-component': FormV3BlockName`：`FormV3` компонент FormV3
    - `'x-use-component-props': 'useFormV3Props'`：использует [x-use-component-props](/development/client/ui-schema/what-is-ui-schema#x-component-props-和-x-use-component-props) для получения свойств компонента
  - `"x-toolbar": "BlockSchemaToolbar"`：`BlockSchemaToolbar` BlockSchemaToolbar отображает текущую таблицу данных в верхнем левом углу, обычно используется с `DataBlockProvider`

`useFormV3Props`：Hooks，для получения свойств компонента  `FormV3` 
  - [useDataBlockProps](https://client.docs.nocobase.com/core/data-block/data-block-provider#usedatablockprops)：Получает свойства  [DataBlockProvider](https://client.docs.nocobase.com/core/data-block/data-block-provider) , то есть значение `x-decorator-props`
  - `blockProps[FormV3BlockNameLowercase]`：свойства компонента`FormV3` 

Эквивалент этого Schema в React-компонентах:

```tsx | pure
<CardItem>
  <DataBlockProvider dataSource={dataSource} collection={collection} formV3={{}}>
    <FormV3 {...useFormV3Props()}>
      {children}
    </FormV3>
  </DataBlockProvider>
</CardItem>
```

#### 3.2  Регистрация scope

Необходимо зарегистрировать  `useFormV3Props` в системе, чтобы [x-use-component-props](/development/client/ui-schema/what-is-ui-schema#x-component-props-和-x-use-component-props) мог найти соответствующий scope.

```tsx | pure
import { Plugin } from '@nocobase/client';
import { FormV3 } from './FormV3';
import { useFormV3Props } from './FormV3.schema';

export class PluginBlockFormClient extends Plugin {
  async load() {
    this.app.addComponents({ FormV3 })
    this.app.addScopes({ useFormV3Props });
  }
}

export default PluginBlockFormClient;
```


Больше информации о scope можно найти в документации: [全局注册 Component 和 Scope](/plugin-samples/component-and-scope/global)

#### 3.3 Проверка Schema блока

Как и при проверке компонентов, мы можем использовать временные страницы или примеры в документации для проверки схемы. Здесь мы рассмотрим пример с временной страницей:

```tsx | pure
import React from 'react';
import { Plugin, SchemaComponent } from '@nocobase/client';
import { FormV3 } from './FormV3';
import { useFormV3Props, getFormV3Schema } from './FormV3.schema';

import { useForm } from '@formily/react';
function useSubmitActionProps(): ActionProps {
  const form = useForm();

  return {
    type: 'primary',
    htmlType: 'submit',
    async onClick() {
      await form.submit();
      const values = form.values;

      console.log('values', values);
    },
  };
}

export class PluginBlockFormClient extends Plugin {
  async load() {
    this.app.addComponents({ FormV3 })
    this.app.addScopes({ useFormV3Props });

    this.app.router.add('admin.block-form-schema', {
      path: '/admin/block-form-schema',
      Component: () => {
        return <>
          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <SchemaComponent schema={{
              properties: {
                test: getFormV3Schema({
                  collection: 'users',
                  properties: {
                    username: {
                      type: 'string',
                      'x-decorator': 'FormItem',
                      'x-component': 'CollectionField',
                    },
                    nickname: {
                      type: 'string',
                      'x-decorator': 'FormItem',
                      'x-component': 'CollectionField',
                    },
                    submit: {
                      type: 'void',
                      'x-component': 'Action',
                      title: 'Submit',
                      'x-use-component-props': useSubmitActionProps,
                    },
                  }
                })
              }
            }} />
          </div>
        </>
      }
    })
  }
}

export default PluginBlockFormClient;
```

Больше информации о `SchemaComponent` можно найти в документации  [SchemaComponent](https://client.docs.nocobase.com/core/ui-schema/schema-component#schemacomponent-1).

Перейдите по адресу [http://localhost:13000/admin/block-form-schema](http://localhost:13000/admin/block-form-schema), чтобы увидеть содержимое тестовой страницы.

![20240718180826](https://static-docs.nocobase.com/20240718180826.png)

После завершения проверки необходимо удалить тестовую страницу.

### 4.  Определение элемента Schema Initializer

Создадим файл `packages/plugins/@nocobase-sample/plugin-block-form/src/client/FormV3.initializer.tsx`：

```ts
import React from 'react';
import { SchemaInitializerItemType, useSchemaInitializer } from '@nocobase/client'
import { FormOutlined } from '@ant-design/icons';

import { getFormV3Schema } from './FormV3.schema'
import { FormV3BlockName } from './constants';
import { useT } from './locale';

export const formV3InitializerItem: SchemaInitializerItemType = {
  name: FormV3BlockName,
  Component: 'DataBlockInitializer',
  useComponentProps() {
    const { insert } = useSchemaInitializer();
    const t = useT();

    return {
      title: t(FormV3BlockName),
      icon: <FormOutlined />,
      componentType: FormV3BlockName,
      onCreateBlockSchema({ item }) { 
        insert(getFormV3Schema({ dataSource: item.dataSource, collection: item.name }))
      },
    };
  },
}
```

`formV3InitializerItem`：

- `Component`：В отличие от [ добавления простого блока Simple Block](/plugin-samples/schema-initializer/block-simple), где используется `type`，здесь используется `Component`，[Оба способа определения](https://client.docs.nocobase.com/core/ui-schema/schema-initializer#two-ways-to-define-component-and-type) допустимы
- `useComponentProps`： Свойства компонента `DataBlockInitializer`
  - `title`：Заголовок
  - `icon`：Иконка (доступные иконки: [Ant Design Icons](https://ant.design/components/icon/))
  - `componentType`：Тип компонента (в данном случае`Info`)
  - `onCreateBlockSchema`：Callback при выборе таблицы данных
    - `item`：Информация о выбранной таблице
      - `item.name`： Название таблицы данных
      - `item.dataSource`： Источник данных таблицы
  - [useSchemaInitializer](https://client.docs.nocobase.com/core/ui-schema/schema-initializer#useschemainitializer)：Предоставляет методы для вставки Schema

Больше информации о определении Schema Initializer можно найти в документации [Schema Initializer](https://client.docs.nocobase.com/core/ui-schema/schema-initializer).

### 5. Добавление в Add block

В системе есть несколько кнопок `Add block`, но у них **разные имена name**

![img_v3_02b4_049b0a62-8e3b-420f-adaf-a6350d84840g](https://static-docs.nocobase.com/img_v3_02b4_049b0a62-8e3b-420f-adaf-a6350d84840g.jpg)

Если мы хотим добавить наш блок в `Add block` на уровне страницы, нам нужно знать соответствующее имя `name`，Мы можем определить его через TODO (способ определения будет добавлен позже).

TODO

На приведенной выше схеме видно, что `Add block` на уровне страницы имеет name  `page:addBlock`，а `Data Blocks` имеет name`dataBlocks`。

Теперь мы модифицируем файл `packages/plugins/@nocobase-sample/plugin-block-form/src/client/index.tsx`：

```tsx | pure
import { Plugin } from '@nocobase/client';

import { FormV3 } from './FormV3';
import { useFormV3Props } from './FormV3.schema';
import { formV3InitializerItem } from './FormV3.initializer';

export class PluginBlockFormClient extends Plugin {
  async load() {
    this.app.addComponents({ FormV3 })
    this.app.addScopes({ useFormV3Props });

    this.app.schemaInitializerManager.addItem('page:addBlock', `dataBlocks.${formV3InitializerItem.name}`, formV3InitializerItem);
  }
}

export default PluginBlockFormClient;
```

Здесь мы используем [app.schemaInitializerManager.addItem](https://client.docs.nocobase.com/core/ui-schema/schema-initializer-manager#schemainitializermanageradditem) для добавления `formV3InitializerItem` в соответствующий подэлемент Initializer. В данном случае `page:addBlock` — это name кнопки `Add block` на странице, а `dataBlocks` — это name родительского элемента.

Теперь при наведении на кнопку `Add block` мы увидим новый тип блока `FormV3`.

![20240719112105](https://static-docs.nocobase.com/20240719112105.png)

При клике на таблицу `Users`, можно добавить новый блок `FormV3`, но в данный момент подэлементы пусты.

![20240719112149](https://static-docs.nocobase.com/20240719112149.png)

### 6. Реализация Schema Settings

В настоящее время блок можно только добавить, но нельзя удалить. Нам нужно реализовать `Schema Settings`，чтобы настроить некоторые свойства и операции.

#### 6.1 Определение Schema Settings

Для полноценного блока также необходимы Schema Settings, которые используются для настройки некоторых свойств и операций.

Создадим файл `packages/plugins/@nocobase-sample/plugin-block-form/src/client/FormV3.settings/index.ts` ：

```ts | pure
import { SchemaSettings } from "@nocobase/client";
import { FormV3BlockNameLowercase } from "../constants";

export const formV3Settings = new SchemaSettings({
  name: `blockSettings:${FormV3BlockNameLowercase}`,
  items: [
    // TODO
  ]
})
```

#### 6.2 Регистрация Schema Settings

```ts
import { Plugin } from '@nocobase/client';
import { formV3Settings } from './FormV3.settings';

export class PluginBlockFormClient extends Plugin {
  async load() {
    // ...
    this.app.schemaSettingsManager.add(formV3Settings)
  }
}

export default PluginBlockFormClient;
```

#### 6.3 使用 Schema Settings

Модифицируем функцию `getFormV3Schema`  в файле  `packages/plugins/@nocobase-sample/plugin-block-form/src/client/schema/index.ts`：

```diff
+ import { formV3Settings } from "./FormV3.settings";

export function getFormV3Schema(options: GetFormV3SchemaOptions): ISchema {
  const { dataSource, collection, properties = {} } = options;
  return {
    type: 'void',
    'x-decorator': 'CardItem',
+   'x-settings': formV3Settings.name,
    // ...
  }
};
```


### 7. Реализация Schema Settings items

В настоящее время мы только реализовали `Schema Settings`, но не добавили никаких операций. Нам нужно реализовать различные операции в соответствии с требованиями.

Поддерживаемые встроенные типы операций Schema Settings описаны в документации [Schema Settings - Built-in Components and Types](https://client.docs.nocobase.com/core/ui-schema/schema-settings#built-in-components-and-types) .

#### 7.1 Реализация `remove` операции

В настоящее время блоки, добавленные через initializers, нельзя удалить. Нам нужно реализовать операцию `remove`.

[NocoBase] предоставляет встроенный тип операции [remove](https://client.docs.nocobase.com/core/ui-schema/schema-settings#schemasettingsremove-1). Модифицируем файл`packages/plugins/@nocobase-sample/plugin-block-form/src/client/settings/index.ts`：

```diff
import { SchemaSettings } from '@nocobase/client';
import { BlockNameLowercase } from '../constants';

export const formV3Settings = new SchemaSettings({
  name: `blockSettings:${FormV3BlockNameLowercase}`,
  items: [
+   {
+     type: 'remove',
+     name: 'remove',
+     componentProps: {
+       removeParentsIfNoChildren: true,
+       breakRemoveOn: {
+         'x-component': 'Grid',
+       },
+     }
+   }
  ]
});
```

- componentProps
  - `removeParentsIfNoChildren`：Если нет подузлов, удалить родительский узел.
  - `breakRemoveOn`：Условие прерывания удаления. Поскольку `Add Block`  автоматически оборачивает дочерние элементы в `Grid`, здесь мы устанавливаем `breakRemoveOn: { 'x-component': 'Grid' }`, чтобы при удалении `Grid` прекратить удаление вверх по иерархии.


Изменения schema не затрагивают уже добавленные блоки - только новые блоки будут использовать обновленную схему. Для проверки нужно добавить новый блок.。

![20240719145202](https://static-docs.nocobase.com/20240719145202.png)

#### 7.2 Реализация операции  `Редактировать заголовок блока` 

Функция ` редактирования заголовка блока` - часто используемая операция. `@nocobase/client` предоставляет готовый компонент `SchemaSettingsBlockTitleItem`. 

```diff
- import { SchemaSettings } from "@nocobase/client";
+ import { SchemaSettings, SchemaSettingsBlockTitleItem } from "@nocobase/client";

export const formV3Settings = new SchemaSettings({
  name: `blockSettings:${FormV3BlockNameLowercase}`,
  items: [
+   {
+     name: 'blockTitle',
+     Component: SchemaSettingsBlockTitleItem,
+   },
    {
      type: 'remove',
      name: 'remove',
      componentProps: {
        removeParentsIfNoChildren: true,
        breakRemoveOn: {
          'x-component': 'Grid',
        },
      }
    },
  ]
})
```

![20240719145326](https://static-docs.nocobase.com/20240719145326.png)


### 8. Реализация`Configure actions`

Функционал `Configure actions` позволяет добавлять различные действия, такие как  `Submit`、`Custom request` и другие.

Подробнее о `Configure actions` можно узнать в [документации Initializer](/plugin-samples/schema-initializer/configure-actions).

#### 8.1 Определение initializer

Создадим файл `packages/plugins/@nocobase-sample/plugin-block-form/src/client/FormV3.configFields/index.ts`：

```ts
import { SchemaInitializer } from "@nocobase/client";
import { FormV3BlockNameLowercase } from "../constants";

export const formV3ConfigureActionsInitializer = new SchemaInitializer({
  name: `${FormV3BlockNameLowercase}:configureActions`,
  icon: 'SettingOutlined',
  title: tStr('Configure actions'),
  style: {
    marginLeft: 8,
  },
  items: [
    // TODO
  ]
});
```

Мы определили новый `SchemaInitializer`，его подэлементы пока пусты.

- [SchemaInitializer](https://client.docs.nocobase.com/core/ui-schema/schema-initializer)： Используется для создания экземпляра Schema Initializer.
- `icon`：Иконка (доступные варианты в Ant Design [Icons](https://ant.design/components/icon/))
- `title`：Заголовок кнопки
- [items](https://client.docs.nocobase.com/core/ui-schema/schema-initializer#built-in-components-and-types)：Подэлементы кнопки.

#### 8.2 Регистрация initializer

Модифицируем файл  `packages/plugins/@nocobase-sample/plugin-block-form/src/client/index.tsx`, импортируем и зарегистрируем этот initializer:r：

```tsx | pure
// ...
import { formV3ConfigureActionsInitializer } from './FormV3.configActions';

export class PluginBlockFormClient extends Plugin {
  async load() {
    this.app.schemaInitializerManager.add(formV3ConfigureActionsInitializer);

    // ...
  }
}
```

#### 8.3 使用 initializer

Модифицируем файл `packages/plugins/@nocobase-sample/plugin-block-form/src/client/FormV3.schema.ts`, добавим подэлемент `actionBar`：

```diff
// ...
+ import { formV3ConfigureActionsInitializer } from "./FormV3.configActions";

export function getFormV3Schema(options: GetFormV3SchemaOptions): ISchema {
  const { dataSource, collection, properties = {} } = options;
  return {
    type: 'void',
    'x-component': 'CardItem',
    'x-decorator': 'DataBlockProvider',
    'x-decorator-props': {
      dataSource,
      collection,
      action,
      params,
      [FormV3BlockNameLowercase]: {},
    },
    'x-settings': formV3Settings.name,
    "x-toolbar": "BlockSchemaToolbar",
    properties: {
      [FormV3BlockNameLowercase]: {
        type: 'void',
        'x-component': FormV3BlockName,
        'x-use-component-props': 'useFormV3Props',
        properties: {
          ...properties as any,
+         actionBar: {
+           type: 'void',
+           "x-initializer": formV3ConfigureActionsInitializer.name,
+           "x-component": "ActionBar",
+           "x-component-props": {
+             "layout": "one-column",
+             "style": {
+               "marginTop": 24
+             }
+           },
+         },
        }
      }
    }
  }
}
```

`configure actions` обычно используется вместе с компонентом [ActionBar](https://client.docs.nocobase.com/components/action#actionbar).

Мы добавили подэлемент `actionBar` в `FormV3`：

- `type: 'void'`：Тип `void`, что означает, что это контейнер.
  - `x-component: 'ActionBar'`：Используется компонент [ActionBar](https://client.docs.nocobase.com/components/action#actionbar) для отображения кнопок.
- `x-initializer: formV3ConfigureActionsInitializer.name`：Используется созданный нами Initializer
- `x-component-props.layout: 'one-column'`：Однострочный макет, подробнее смотрите в [ActionBar one-column](https://client.docs.nocobase.com/components/action#one-column)

![20240719152528](https://static-docs.nocobase.com/20240719152528.png)

### 9. Реализация `Configure actions` items

```bash
.
├── FormV3.configActions
├── index.ts
└── items
    └── submit # 提交操作
        ├── index.ts
        ├── initializer.tsx
        ├── schema.ts
        └── settings.ts
```

#### 9.1 Реализация операции `Submit` 

##### 9.1.1 Определение Schema

Создаем файл`packages/plugins/@nocobase-sample/plugin-block-form/src/client/FormV3.configActions/items/submit/schema.ts`：

```ts
import { useForm } from '@formily/react';
import { App } from 'antd';
import { ActionProps, useDataBlockResource } from "@nocobase/client";
import { tStr } from '../../../locale'

export const useFormV3SubmitActionProps = (): ActionProps => {
  const resource = useDataBlockResource();
  const form = useForm();
  const { message } = App.useApp();
  return {
    type: 'primary',
    htmlType: 'submit',
    async onClick() {
      await form.submit();
      const values = form.values;
      await resource.create({ values })
      await form.reset();
      message.success('Created successfully');
    },
  }
}

export const submitActionSchema = {
  type: 'void',
  title: tStr('Submit'),
  'x-component': 'Action',
  'x-use-component-props': 'useFormV3SubmitActionProps',
  'x-toolbar': 'ActionSchemaToolbar'
};
```

`submitActionSchema`：
  - `type: 'void'`：Указывает, что это UI-элемент без привязки к данным
  - `x-component: 'Action'`： Используется компонент [Action](https://client.docs.nocobase.com/components/action) для отображения кнопки.
  - `title: 'Submit'`：Заголовок кнопки.
  - `x-use-component-props: 'useFormV3SubmitActionProps'`：Связывает свойства компонента с хуком `useFormV3SubmitActionProps`Используется строковая ссылка, так как Schema сохраняется на сервере.
  - `'x-toolbar': 'ActionSchemaToolbar'`： Обычно используется вместе с компонентом  `Action`. Отличается от стандартного ToolBar тем, что скрывает `Initializer` в правом верхнем углу, оставляя только Drag и Settings.

  - `useFormV3SubmitActionProps`：Это React Hook, который возвращает свойства компонента Action.
  - [useDataBlockResource()](https://client.docs.nocobase.com/core/data-block/data-block-request-provider)：Объект запроса данных блока, предоставляемый `DataBlockProvider`, используется для автоматического получения данных блока.
    - `resource.create`： Используется для создания данных.
  - `useForm`：Получает объект формы Formily.
    - `form.submit()`： Отправляет форму и запускает валидацию.
      - `form.values`：Текущие значения формы.
    - `form.reset()`：Сброс значений формы.
  - `type: 'primary'`：Стиль кнопки  `primary`
  - `onClick`：Обработчик клика по кнопке.


Затем экспортируем его в файле `packages/plugins/@nocobase-sample/plugin-block-form/src/client/FormV3.configActions/items/submit/index.ts`：

```ts
export * from './schema';
```

##### 9.1.2 Регистрация Scope

Нам также нужно зарегистрировать `useFormV3SubmitActionProps` в контексте. Модифицируем файл `packages/plugins/@nocobase-sample/plugin-block-form/src/client/index.tsx`：

```diff
// ...
+ import { useFormV3SubmitActionProps } from './FormV3.configActions/items/submit';

export class PluginBlockFormClient extends Plugin {
  async load() {
    // ...
-   this.app.addScopes({ useFormV3Props });
+   this.app.addScopes({ useFormV3Props, useFormV3SubmitActionProps });
  }
}
```

Больше информации о `SchemaComponentOptions` можно найти в документации  [SchemaComponentOptions](https://client.docs.nocobase.com/core/ui-schema/schema-component#schemacomponentoptions) и [全局注册 Component 和 Scope](/plugin-samples/component-and-scope/global).

##### 9.1.3 Определение SchemaInitializer item

Создадим файл `packages/plugins/@nocobase-sample/plugin-block-form/src/client/FormV3.configActions/items/submit/initializer.tsx`：

```tsx | pure
import { SchemaInitializerItemType, useSchemaInitializer } from "@nocobase/client";
import { submitActionSchema } from "./schema";
import { tStr } from '../../../locale';

export const submitActionInitializerItem: SchemaInitializerItemType = {
  type: 'item',
  name: 'submit',
  title: tStr('Submit'),
  useComponentProps() {
    const { insert } = useSchemaInitializer();
    return {
      onClick() {
        insert(submitActionSchema)
      },
    };
  },
};
```

- `type: 'item'`： - тип элемента, указывает что это текстовый элемент, при клике на который срабатывает событие `onClick`.
- `name: 'submit'`：- уникальный идентификатор, используется для различения разных элементов Schema и операций CRUD (создание, чтение, обновление, удаление).
- `title: 'Submit'`：Заголовок кнопки.

Больше информации о определении Schema Item можно найти в документации  [Schema Initializer Item](https://client.docs.nocobase.com/core/ui-schema/schema-initializer#built-in-components-and-types).


Затем модифицируем файл `packages/plugins/@nocobase-sample/plugin-block-form/src/client/FormV3.configActions/items/submit/index.ts` для экспорта:

```tsx | pure
export * from './initializer';
```

###### 9.1.4 Использование SchemaInitializer item

Затем модифицируем файл `packages/plugins/@nocobase-sample/plugin-block-form/src/client/FormV3.configActions/index.ts`, добавляя `submitActionInitializerItem` в `items`：

```diff
// ...
+ import { submitActionInitializerItem } from "./items/submit";

export const formV3ConfigureActionsInitializer = new SchemaInitializer({
  name: `${FormV3BlockNameLowercase}:configureActions`,
  icon: 'SettingOutlined',
  title: 'Configure actions',
  style: {
    marginLeft: 8,
  },
  items: [
+   submitActionInitializerItem,
  ]
});
```

##### 9.1.5 Определение settings

Создадим файл `packages/plugins/@nocobase-sample/plugin-block-form/src/client/FormV3.configActions/items/submit/settings.ts`

```tsx | pure
import { ButtonEditor, SchemaSettings, useSchemaToolbar } from "@nocobase/client";

export const formV3SubmitActionSettings = new SchemaSettings({
  name: `actionSettings:formV3Submit`,
  items: [
    {
      name: 'editButton',
      Component: ButtonEditor,
      useComponentProps() {
        const { buttonEditorProps } = useSchemaToolbar();
        return buttonEditorProps;
      },
    },
    {
      name: 'remove',
      type: 'remove',
    }
  ]
})
```

`formV3SubmitActionSettings`：
  - `editButton`：Используется для редактирования стиля кнопки.
  - `remove`： Добавляет возможность удаления элемента.

Больше информации о определении Schema Settings можно найти в документации [Schema Settings](https://client.docs.nocobase.com/core/ui-schema/schema-settings).

Модифицируем файл `packages/plugins/@nocobase-sample/plugin-block-form/src/client/FormV3.configActions/items/submit/index.ts` для экспорта：

```tsx | pure
export * from './settings';
```

##### 9.1.6 Регистрация settings

Затем зарегистрируем `formV3SubmitActionSettings` в системе. Модифицируем файл `packages/plugins/@nocobase-sample/plugin-block-form/src/client/index.tsx`：

```diff
- import { useFormV3SubmitActionProps } from './FormV3.configActions/items/submit';
+ import { formV3SubmitActionSettings, useFormV3SubmitActionProps } from './FormV3.configActions/items/submit';

export class PluginBlockFormClient extends Plugin {
  async load() {
+   this.app.schemaSettingsManager.add(formV3SubmitActionSettings);
  }
}
```

##### 9.1.7 Использование settings

Мы модифицируем метод `submitActionSchema` в файле `packages/plugins/@nocobase-sample/plugin-block-form/src/client/FormV3.configActions/items/submit/schema.ts`, добавляя свойство  `x-settings` со значением `formV3SubmitActionSettings.name`。

```diff
+ import { formV3SubmitActionSettings } from './settings';

export const submitActionSchema = {
  type: 'void',
  title: tStr('Submit'),
  'x-component': 'Action',
+ 'x-settings': formV3SubmitActionSettings.name,
  'x-use-component-props': 'useFormV3SubmitActionProps',
  'x-toolbar': 'ActionSchemaToolbar'
};
```

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/20240719160328.mov" type="video/mp4" />
</video>

#### 9.2 Реализация `Custom request`

Операция `Custom request` (Пользовательский запрос) является стандартным функционалом в NocoBase. Платформа предоставляет встроенный компонент `CustomRequest` который мы можем использовать напрямую.


Модифицируем файл  `packages/plugins/@nocobase-sample/plugin-block-form/src/client/FormV3.configActions/index.ts`：

```diff

import { SchemaInitializer } from "@nocobase/client";
import { FormV3BlockNameLowercase } from "../constants";
import { submitActionInitializerItem } from "./items/submit";
+ import { tStr } from '../locale'

export const formV3ConfigureActionsInitializer = new SchemaInitializer({
  name: `${FormV3BlockNameLowercase}:configureActions`,
  icon: 'SettingOutlined',
  title: 'Configure actions',
  style: {
    marginLeft: 8,
  },
  items: [
    submitActionInitializerItem,
+   {
+     name: 'customRequest',
+     title: tStr('Custom request'),
+     Component: 'CustomRequestInitializer',
+   },
  ]
});
```

![20240719165222](https://static-docs.nocobase.com/20240719165222.png)

### 10.  Реализация `Configure fields`

Функционал `Configure fields` позволяет добавлять поля данных в блок FormV3.

#### 10.1 Определение initializer

Создаем файл `packages/plugins/@nocobase-sample/plugin-block-form/src/client/FormV3.configFields/index.ts`：

```ts
import { gridRowColWrap, SchemaInitializer } from "@nocobase/client";
import { FormV3BlockNameLowercase } from '../constants';

export const formV3ConfigureFieldsInitializer = new SchemaInitializer({
  name: `${FormV3BlockNameLowercase}:configureFields`,
  icon: 'SettingOutlined',
  wrap: gridRowColWrap,
  title: tStr('Configure fields'),
  items: [
    // TODO
  ]
});
```

`formV3ConfigureFieldsInitializer`：
  - `name`： Уникальный идентификатор
  - `icon`：иконка компонента
  - `wrap`：оборачивает каждое поле в `Grid`  для удобного расположения и перетаскивания
  - `title`：заголовок меню
  - `items`：Подэлементы

Больше информации о определении Schema Item можно найти в документации [Schema Initializer Item](https://client.docs.nocobase.com/core/ui-schema/schema-initializer#built-in-components-and-types).

#### 10.2 Регистрация initializer

Модифицируем файл `packages/plugins/@nocobase-sample/plugin-block-form/src/client/index.tsx`, импортируем и зарегистрируем этот initializer:

```diff
+ import { formV3ConfigureFieldsInitializer } from './FormV3.configFields';

export class PluginBlockFormClient extends Plugin {
  async load() {
-   this.app.schemaInitializerManager.add(formV3ConfigureActionsInitializer);
+   this.app.schemaInitializerManager.add(formV3ConfigureActionsInitializer, formV3ConfigureFieldsInitializer);
    // ...
  }
}
```

#### 10.3 Использование initializer

Модифицируем файл `packages/plugins/@nocobase-sample/plugin-block-form/src/client/FormV3.schema.ts`, добавив подэлемент `fields`：

```diff
// ...
+ import { formV3ConfigureFieldsInitializer } from "./FormV3.configFields";

export function getFormV3Schema(options: GetFormV3SchemaOptions): ISchema {
  const { dataSource, collection, properties = {} } = options;
  return {
    type: 'void',
    'x-component': 'CardItem',
    'x-decorator': 'DataBlockProvider',
    'x-decorator-props': {
      dataSource,
      collection,
      [FormV3BlockNameLowercase]: {},
    },
    'x-settings': formV3Settings.name,
    "x-toolbar": "BlockSchemaToolbar",
    properties: {
      [FormV3BlockNameLowercase]: {
        type: 'void',
        'x-component': FormV3BlockName,
        'x-use-component-props': 'useFormV3Props',
        properties: {
          ...properties as any,
+         fields: {
+           "type": "void",
+           "x-component": "Grid",
+           "x-initializer": formV3ConfigureFieldsInitializer.name
+         },
          actionBar: {
            type: 'void',
            "x-initializer": formV3ConfigureActionsInitializer.name,
            "x-component": "ActionBar",
            "x-component-props": {
              "layout": "one-column",
              "style": {
                "marginTop": 24
              }
            },
          },
        }
      }
    }
  }
}
```

Для удобства макета мы обернули поля в `Grid` , что позволяет удобно управлять макетом и перетаскивать элементы.

![20240719171211](https://static-docs.nocobase.com/20240719171211.png)

### 11. Реализация `Configure fields` items

#### 11.1 Реализация `Collection Fields`

Функционал `Configure fields`  основан на [CollectionFieldsToInitializerItems](https://client.docs-en.nocobase.com/core/data-source/collection-fields-to-initializer-items#collectionfieldstoinitializeritems).

Мы можем использовать встроенный компонент `CollectionFieldsToFormInitializerItems`, который преобразует поля коллекции в элементы `Initializer`.

Модифицируем файл `packages/plugins/@nocobase-sample/plugin-block-form/src/client/FormV3.configFields/index.ts`：

```diff
- import { gridRowColWrap, SchemaInitializer } from "@nocobase/client";
+ import { gridRowColWrap, SchemaInitializer, CollectionFieldsToFormInitializerItems } from "@nocobase/client";

export const formV3ConfigureFieldsInitializer = new SchemaInitializer({
  name: `${FormV3BlockNameLowercase}:configureFields`,
  icon: 'SettingOutlined',
  wrap: gridRowColWrap,
  title: 'Configure fields',
  items: [
+   {
+     name: 'collectionFields',
+     Component: CollectionFieldsToFormInitializerItems,
+   },
  ]
});
```

- `name: 'collectionFields'`：Уникальный идентификатор
- `Component: CollectionFieldsToFormInitializerItems`：Встроенный компонент, преобразующий поля таблицы данных в подэлементы FormItem типа Initializer.

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/2024-07-19-17-17-38.mov" type="video/mp4" />
</video>

#### 11.2 Реализация `Add text`

Добавление текста в интерфейс — это распространенная потребность. Поэтому NocoBase предоставляет в `@nocobase/client` компонент `MarkdownFormItemInitializer` для реализации этой функции.

Модифицируем файл `packages/plugins/@nocobase-sample/plugin-block-form/src/client/FormV3.configFields/index.ts`：

```diff
// ...
+ import { tStr } from '../locale'

export const formV3ConfigureFieldsInitializer = new SchemaInitializer({
  name: `${FormV3BlockNameLowercase}:configureFields`,
  icon: 'SettingOutlined',
  wrap: gridRowColWrap,
  title: 'Configure fields',
  items: [
    {
      name: 'collectionFields',
      Component: CollectionFieldsToFormInitializerItems,
    },
+   {
+     name: 'divider',
+     type: 'divider',
+   },
+   {
+     name: 'addText',
+     title: tStr('Add text'),
+     Component: 'MarkdownFormItemInitializer',
+   },
  ]
});
```

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/2024-07-19-17-27-21.mov" type="video/mp4" />
</video>

### 12. 权限

TODO

### 13. Локализация (Мультиязычность)

В NocoBase поддерживается мультиязычность через интерфейс администратора: [http://localhost:13000/admin/settings/system-settings](http://localhost:13000/admin/settings/system-settings) где можно добавить новые языки и переключаться между ними в правом верхнем углу.

![20240611113758](https://static-docs.nocobase.com/20240611113758.png)

Поскольку блок FormV3  использует те же строки, что и FormV2, и уже настроен для многоязычности, здесь нет необходимости вносить какие-либо изменения.

## Упаковка и загрузка в производственную среду

Согласно документации [构建并打包插件](/development/your-fisrt-plugin#构建并打包插件) , вы можете собрать и упаковать плагин для загрузки в производственную среду.

Если вы работаете с клонированным исходным кодом NocoBase, перед сборкой конкретного плагина необходимо выполнить полную сборку всего проекта, чтобы все зависимости были правильно построены.

```bash
yarn build
```

Если вы создали проект с помощью `create-nocobase-app`, вы можете выполнить следующую команду напрямую:

```bash
yarn build @nocobase-sample/plugin-block-form --tar
```

Таким образом, будет создан файл `storage/tar/@nocobase-sample/plugin-block-form.tar.gz`. Затем вы можете загрузить этот файл через[上传的方式](/welcome/getting-started/plugin)для установки.
