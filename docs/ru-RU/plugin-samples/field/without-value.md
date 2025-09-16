# Компонент поля без значения

## Описание сценария

Некоторые поля формы, в силу особых требований, не связаны напрямую с данными поля. Это может быть независимое поле или поле, которое читает значения других полей, выполняет специальную обработку и отображает результат на интерфейсе.

## Описание примера

В данном примере демонстрируется сценарий, в котором отслеживаются изменения поля с номером заказа в реальном времени, запрашиваются детали заказа и отображаются на интерфейсе.

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/1721721250.mov" type="video/mp4" />
</video>

Полный код примера доступен в репозитории [plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-field-component-without-value).

## Инициализация плагина

Следуя инструкциям из документа [Создание первого плагина](/development/your-fisrt-plugin), если у вас ещё нет проекта, создайте его. Если проект уже существует или вы клонировали исходный код, этот шаг можно пропустить.

```bash
yarn create nocobase-app my-nocobase-app -d sqlite
cd my-nocobase-app
yarn install
yarn nocobase install
```

Затем инициализируйте плагин и добавьте его в систему:

```bash
yarn pm create @nocobase-sample/plugin-field-component-without-value
yarn pm enable @nocobase-sample/plugin-field-component-without-value
```

Запустите проект:

```bash
yarn dev
```

После входа в систему перейдите по адресу [http://localhost:13000/admin/pm/list/locale/](http://localhost:13000/admin/pm/list/locale/), чтобы убедиться, что плагин установлен и активирован.

## Реализация функционала

Перед реализацией этого примера необходимо ознакомиться с основными концепциями:

- [Руководство по SchemaInitializer](/development/client/ui-schema/initializer): Используется для добавления различных блоков, полей и операций в интерфейс.
- [API SchemaInitializer](https://client.docs.nocobase.com/core/ui-schema/schema-initializer): Используется для добавления блоков, полей и операций в интерфейс.
- [Протокол UI Schema](/development/client/ui-schema/what-is-ui-schema): Подробное описание структуры Schema и роли каждого атрибута.
- [Designable Designer](/development/client/ui-schema/designable): Используется для изменения Schema.
- [FormV2](https://client.docs.nocobase.com/components/form-v2): Компонент формы.
- [FormItem](https://client.docs.nocobase.com/components/form-item): Компонент элемента формы.

Структура проекта:

```bash
.
├── client # Клиентская часть плагина
│   ├── initializer # Инициализатор
│   ├── component # Компонент поля
│   ├── index.tsx # Входной файл клиентской части плагина
│   ├── locale.ts # Утилиты для многоязычности
│   ├── constants.ts # Константы
│   ├── schema # Schema
│   └── settings # Настройки Schema
├── locale # Файлы локализации
│   ├── en-US.json # Английский
│   └── zh-CN.json # Китайский
├── index.ts # Входной файл серверной части плагина
└── server # Серверная часть плагина
```

### 1. Определение названия

Сначала необходимо определить название поля, которое будет использоваться в различных местах.

Создайте файл `packages/plugins/@nocobase-sample/plugin-field-component-without-value/src/client/constants.ts`:

```ts
export const FiledComponentName = 'OrderDetails';
export const FieldTitle = 'Order Details';
export const FieldNameLowercase = 'orderDetails';
```

### 2. Реализация компонента поля

#### 2.1 Определение компонента поля

Создайте файл `packages/plugins/@nocobase-sample/plugin-field-component-without-value/src/client/component/OrderDetails.tsx` со следующим содержимым:

```tsx | pure
import { observer } from '@formily/react'
import { Spin, Empty } from 'antd';
import React, { FC } from 'react';
import { useForm } from '@formily/react';
import { FiledComponentName } from '../constants';
import { useRequest } from '@nocobase/client';

export interface OrderDetailsProps {
  orderField?: string;
}

export const OrderDetails: FC<OrderDetailsProps> = observer(({ orderField }) => {
  const form = useForm();
  const value = orderField ? form.values[orderField] : undefined;

  const { data, loading } = useRequest<{ data: any[] }>({ url: `https://jsonplaceholder.typicode.com/todos/${value}` }, {
    ready: !!value,
    refreshDeps: [orderField, value],
  })

  if (!orderField) return <div style={{ padding: 20 }}>Пожалуйста, выберите поле заказа</div>

  if (loading) {
    return <div style={{ textAlign: 'center', height: 200 }}><Spin /></div>
  }

  if (!data?.data) return <Empty />;

  return <pre>{JSON.stringify(data?.data, null, 2)}</pre>;
}, { displayName: FiledComponentName });
```

- [observer](https://react.formilyjs.org/api/shared/observer): Преобразует функциональный компонент в реактивный, автоматически обновляя компонент при изменении данных формы.
- [useForm()](https://react.formilyjs.org/api/hooks/use-form): Получает текущий экземпляр формы.
  - `values`: Данные формы.
- [useRequest()](https://client.docs.nocobase.com/core/request): Используется для запроса данных.

По умолчанию система содержит только таблицы `users` и `roles`. Для простоты в этом примере мы используем переданное поле `orderField` для получения данных из таблицы `users` и отображения их на интерфейсе.

Экспортируйте компонент в файле `packages/plugins/@nocobase-sample/plugin-field-component-without-value/src/client/component/index.ts`:

```tsx | pure
export * from './OrderDetails'
```

#### 2.2 Регистрация компонента поля

Необходимо зарегистрировать компонент `OrderDetails` в системе через плагин.

```tsx | pure
import { Plugin } from '@nocobase/client';
import { OrderDetails } from './component';
import { FieldComponentName } from './constants';

export class PluginFieldComponentWithoutValueClient extends Plugin {
  async load() {
    this.app.addComponents({ [FieldComponentName]: OrderDetails })
  }
}

export default PluginFieldComponentWithoutValueClient;
```

#### 2.3 Проверка компонента поля

Существует два способа проверки компонента:

- Проверка через временную страницу: Создайте временную страницу, отрендерите компонент `OrderDetails` и проверьте, соответствует ли он требованиям.
- Проверка через примеры в документации: Запустите документацию с помощью команды `yarn doc plugins/@nocobase-sample/plugin-field-component-without-value` и проверьте соответствие через примеры (TODO).

В данном случае мы используем проверку через временную страницу. Создайте страницу, добавьте один или несколько компонентов `OrderDetails` с параметрами и проверьте их работу.

```tsx | pure
import React from 'react';
import { Plugin, SchemaComponent } from '@nocobase/client';

import { OrderDetails } from './component';
import { FieldComponentName } from './constants';

export class PluginFieldOrderDetailsClient extends Plugin {
  async load() {
    this.app.addComponents({ [FieldComponentName]: OrderDetails })

    function Demo() {
      const schema = {
        type: 'void',
        name: 'root',
        properties: {
          test: {
            type: 'void',
            'x-component': 'FormV2',
            properties: {
              username: {
                type: 'string',
                'x-decorator': 'FormItem',
                'x-component': 'Input',
                title: 'Имя пользователя',
                required: true,
              },
              orderDetails: {
                type: 'string',
                'x-decorator': 'FormItem',
                'x-component': OrderDetails,
                title: 'Детали заказа',
                'x-component-props': {
                  orderField: 'username',
                },
              }
            },
          },
        },
      };

      return <SchemaComponent schema={schema} />;
    }

    this.app.router.add('admin.order-details-component', {
      path: '/admin/order-details-component',
      Component: Demo
    })
  }
}

export default PluginFieldOrderDetailsClient;
```

Мы ссылаемся на пример [Компонент формы](https://client.docs.nocobase.com/components/form-v2#basic-usage), создаём компонент `Demo`, добавляем компонент `OrderDetails` в поле `orderDetails` и устанавливаем `orderField` как `username`. Это позволяет получать данные из таблицы `users` на основе значения поля `username`.

Подробное описание `SchemaComponent` можно найти в документации [SchemaComponent](https://client.docs.nocobase.com/core/ui-schema/schema-component#schemacomponent-1).

Перейдите по адресу `http://localhost:13000/admin/order-details-component`, чтобы увидеть содержимое тестовой страницы.

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/1721721815326.mov" type="video/mp4" />
</video>

После проверки удалите тестовую страницу.

### 3. Определение схемы поля

Динамические страницы в NocoBase рендерятся с помощью Schema, поэтому нам нужно определить Schema для добавления блока `OrderDetails` в интерфейс. Перед этим изучите следующие концепции:

- [Протокол UI Schema](/development/client/ui-schema/what-is-ui-schema): Подробное описание структуры Schema и роли каждого атрибута.

#### 3.1 Определение схемы поля

Создайте файл `packages/plugins/@nocobase-sample/plugin-field-component-without-value/src/client/schema/index.ts`:

```tsx | pure
import { ISchema } from "@nocobase/client"
import { FieldComponentName } from '../constants';

export const getOrderDetailsSchema = (orderField: string): ISchema => ({
  type: 'void',
  'x-decorator': 'FormItem',
  'x-toolbar': 'FormItemSchemaToolbar',
  'x-component': FieldComponentName,
  'x-component-props': {
    'orderField': orderField,
  }
})
```

`getOrderDetailsSchema`:

- `type`: Тип, здесь `void`, указывает на чистый UI-узел.
- `'x-decorator': 'FormItem'`: [Компонент FormItem](https://client.docs.nocobase.com/components/form-item), используется для обёртывания компонента поля.
- `'x-toolbar': 'FormItemSchemaToolbar'`: Совместно с `x-decorator` отображает операции и настройки в правом верхнем углу.
- `'x-component': FieldComponentName'`: Компонент `OrderDetails`, определённый ранее.
- `x-component-props`: Свойства компонента `OrderDetails`, автоматически передаются в компонент.
  - `orderField`: Поле заказа.

Эта схема эквивалентна следующему React-компоненту:

```tsx | pure
<FormItem>
  <OrderDetails orderField />
</FormItem>
```

#### 3.2 Проверка схемы поля

Как и при проверке компонента, мы можем использовать временную страницу или примеры в документации для проверки соответствия схемы требованиям. Здесь мы используем проверку через временную страницу:

```tsx | pure
import { Plugin, SchemaComponent } from '@nocobase/client';
import { OrderDetails } from './component';
import { FieldComponentName } from './constants';

import React from 'react';

export class PluginFieldOrderDetailsClient extends Plugin {
  async load() {
    this.app.addComponents({ [FieldComponentName]: OrderDetails })

    function Demo() {
      const schema = {
        type: 'void',
        name: 'root',
        properties: {
          test: {
            type: 'void',
            'x-component': 'FormV2',
            properties: {
              username: {
                type: 'string',
                'x-decorator': 'FormItem',
                'x-component': 'Input',
                title: 'Имя пользователя',
                required: true,
              },
              orderDetails: getOrderDetailsSchema('username')
            },
          },
        },
      };

      return <SchemaComponent schema={schema} />;
    }

    this.app.router.add('admin.order-details-schema', {
      path: '/admin/order-details-schema',
      Component: Demo
    })
  }
}

export default PluginFieldOrderDetailsClient;
```

Перейдите по адресу [http://localhost:13000/admin/order-details-schema](http://localhost:13000/admin/order-details-schema), чтобы увидеть содержимое тестовой страницы.

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/1721721815326.mov" type="video/mp4" />
</video>

### 4. Определение элемента Schema Initializer

Создайте файл `packages/plugins/@nocobase-sample/plugin-field-component-without-value/src/client/initializer/index.tsx`:

```ts
import React from "react";
import { SchemaInitializerActionModal, SchemaInitializerItemType, SelectProps, useCollection, useCompile, useSchemaInitializer } from "@nocobase/client"
import { MenuOutlined } from "@ant-design/icons";

import { FieldNameLowercase } from "../constants";
import { useT } from "../locale";
import { getOrderDetailsSchema } from '../schema'

export function useFieldOptions(): SelectProps['options'] {
  const collection = useCollection();

  const compile = useCompile();
  return collection
    .getFields()
    .map(field => ({ label: field.uiSchema?.title ? compile(field.uiSchema.title) : field.name, value: field.name }));
}

const OrderDetailsSchemaInitializer = () => {
  const t = useT();
  const { insert } = useSchemaInitializer();
  const options = useFieldOptions();
  return <SchemaInitializerActionModal
    buttonText={t("Детали заказа")}
    title={t("Выберите поле заказа")}
    icon={<MenuOutlined />}
    isItem
    onSubmit={({ orderField }) => {
      insert(getOrderDetailsSchema(orderField));
    }}
    schema={{
      orderField: {
        type: 'string',
        title: 'Поле заказа',
        required: true,
        'x-component': 'Select',
        'x-decorator': 'FormItem',
        enum: options
      },
    }}
  ></SchemaInitializerActionModal>
}

export const orderDetailsInitializerItem: SchemaInitializerItemType = {
  name: FieldNameLowercase,
  Component: OrderDetailsSchemaInitializer
};
```

`orderDetailsInitializerItem`:
- `name`: Уникальный идентификатор для различения элементов Schema и операций CRUD.
- `Component`: Компонент, соответствующий элементу Schema Initializer.

`OrderDetailsSchemaInitializer`:
- [SchemaInitializerActionModal](https://client.docs.nocobase.com/core/ui-schema/schema-initializer#type-actionmodal---schemainitializeractionmodal): Элемент Schema Initializer с модальным окном.
  - `buttonText`: Текст кнопки.
  - `title`: Заголовок модального окна.
  - `isItem`: Указывает, является ли элемент Item (здесь должно быть `true`).
  - `schema`: Схема формы внутри модального окна.
  - `onSubmit`: Событие отправки формы.
- `useFieldOptions`: Получение опций полей.
- `useT`: Получение функции для работы с многоязычностью.
- [useSchemaInitializer()](https://client.docs.nocobase.com/core/ui-schema/schema-initializer#useschemainitializer): Получение контекста Schema Initializer.
  - `insert`: Вставка элемента Schema.

`useFieldOptions`:
- [useCollection](https://client.docs.nocobase.com/core/data-source/collection-provider#usecollection): Получение коллекции текущей таблицы.
- `useCompile`: Функция компиляции.

Подробности об определении элементов Schema можно найти в документации [Schema Initializer Item](https://client.docs.nocobase.com/core/ui-schema/schema-initializer#built-in-components-and-types).

### 5. Добавление в `Configure fields` блока формы

`Configure fields` блока формы соответствует имени `form:configureFields`.

Измените файл `packages/plugins/@nocobase-sample/plugin-field-component-without-value/src/client/index.tsx`:

```diff
// ...
+ import { orderDetailsInitializerItem } from './initializer';

export class PluginFieldComponentWithoutValueClient extends Plugin {
  async load() {
    // ...
+   this.app.schemaInitializerManager.addItem('form:configureFields', orderDetailsInitializerItem.name, orderDetailsInitializerItem);
  }
}

export default PluginFieldComponentWithoutValueClient;
```

Мы используем [app.schemaInitializerManager.addItem](https://client.docs.nocobase.com/core/ui-schema/schema-initializer-manager#schemainitializermanageradditem) для добавления `orderDetailsInitializerItem` в соответствующий инициализатор.

![20240723161400](https://static-docs.nocobase.com/20240723161400.png)

### 6. Реализация настроек Schema

#### 6.1 Определение настроек Schema

Для полноценного блока необходимы настройки Schema для конфигурации атрибутов и операций.

Создайте файл `packages/plugins/@nocobase-sample/plugin-field-component-without-value/src/client/settings/index.ts`:

```ts | pure
import { SchemaSettings } from "@nocobase/client";
import { FieldNameLowercase } from '../constants';
import { orderFieldSchemaSettingsItem } from "./items/orderField";

export const orderDetailsSettings = new SchemaSettings({
  name: `blockSettings:${FieldNameLowercase}`,
  items: [
    // TODO
  ]
});
```

#### 6.2 Регистрация настроек Schema

```ts
import { Plugin } from '@nocobase/client';
import { orderDetailsSettings } from './settings';

export class PluginFieldComponentWithoutValueClient extends Plugin {
  async load() {
    // ...
    this.app.schemaSettingsManager.add(orderDetailsSettings)
  }
}

export default PluginFieldComponentWithoutValueClient;
```

#### 6.3 Использование настроек Schema

Измените `carouselSchema` в файле `packages/plugins/@nocobase-sample/plugin-field-component-without-value/src/client/schema/index.ts`:

```diff
+ import { orderDetailsSettings } from "../settings";

export const getOrderDetailsSchema = (orderField: string): ISchema => ({
  type: 'void',
  'x-decorator': 'FormItem',
+ 'x-settings': orderDetailsSettings.name,
  // ...
});
```

### 7. Реализация элементов настроек Schema

На данный момент мы реализовали только `Schema Settings`, но не добавили никаких операций. Нам нужно реализовать операции в соответствии с требованиями.

Список встроенных типов операций для Schema Settings можно найти в документации [Schema Settings - Built-in Components and Types](https://client.docs.nocobase.com/core/ui-schema/schema-settings#built-in-components-and-types).

#### 7.1 Реализация операции `remove`

Поля, добавленные через инициализаторы, сейчас нельзя удалить. Нам нужно реализовать операцию `remove`.

NocoBase предоставляет встроенный тип операции [remove](https://client.docs.nocobase.com/core/ui-schema/schema-settings#schemasettingsremove-1). Измените файл `packages/plugins/@nocobase-sample/plugin-field-component-without-value/src/client/settings/index.ts`:

```diff
export const orderDetailsSettings = new SchemaSettings({
  name: `blockSettings:${FieldNameLowercase}`,
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

- `componentProps`:
  - `removeParentsIfNoChildren`: Удалять родительский узел, если у него нет дочерних узлов.
  - `breakRemoveOn`: Условие прерывания удаления. Поскольку `Configure fields` автоматически оборачивает элементы в `Grid`, мы устанавливаем `breakRemoveOn: { 'x-component': 'Grid' }`, чтобы предотвратить удаление `Grid`.

![20240613183852](https://static-docs.nocobase.com/20240613183852.png)

#### 7.2 Реализация выбора `Order field`

Помимо выбора `Order field` при добавлении поля, мы можем также выбирать `Order field` в настройках Schema.

##### 7.2.1 Определение элемента настроек Schema

Создайте файл `packages/plugins/@nocobase-sample/plugin-field-component-without-value/src/client/settings/items/orderField.ts`:

```ts
import { createSelectSchemaSettingsItem } from "@nocobase/client";
import { generateNTemplate } from "../../locale";
import { useFieldOptions } from '../../initializer'

export const orderFieldSchemaSettingsItem = createSelectSchemaSettingsItem({
  name: 'orderField',
  title: generateNTemplate('Поле заказа'),
  useOptions: useFieldOptions,
  schemaKey: `x-component-props.orderField`,
});
```

Подробности об определении элементов SchemaSettings можно найти в документации [SchemaSettingsItem](https://client.docs.nocobase.com/core/ui-schema/schema-settings#optionsitems).

`createSelectSchemaSettingsItem`: Используется для быстрого создания элемента SchemaSettings типа "выбор".

- `name`: Уникальный идентификатор для операций CRUD.
- `title`: Заголовок.
- `useOptions`: Получение опций.
- `schemaKey`: Соответствующий ключ схемы.

##### 7.2.2 Использование элемента SchemaSettings

Измените файл `packages/plugins/@nocobase-sample/plugin-field-component-without-value/src/client/settings/index.ts`:

```diff
import { SchemaSettings } from "@nocobase/client";
import { FieldNameLowercase } from '../constants';
+ import { orderFieldSchemaSettingsItem } from "./items/orderField";

export const orderDetailsSettings = new SchemaSettings({
  name: `blockSettings:${FieldNameLowercase}`,
  items: [
+   orderFieldSchemaSettingsItem,
    {
      name: 'remove',
      type: 'remove',
      componentProps: {
        removeParentsIfNoChildren: true,
        breakRemoveOn: {
          'x-component': 'Grid',
        },
      }
    },
  ]
});
```

![20240723161525](https://static-docs.nocobase.com/20240723161525.png)

Вы можете реализовать дополнительные настройки Schema в соответствии с вашими потребностями.

### 8. Многоязычность

#### 8.1 Английский

Отредактируйте файл `packages/plugins/@nocobase-sample/plugin-field-component-without-value/src/locale/en-US.json`:

```ts
{
  "Order Details": "Order Details",
  "Order field": "Order field"
}
```

#### 8.2 Китайский

Отредактируйте файл `packages/plugins/@nocobase-sample/plugin-field-component-without-value/src/locale/zh-CN.json`:

```ts
{
  "Order Details": "订单详情",
  "Order field": "订单字段"
}
```

Вы можете добавить несколько языков через [http://localhost:13000/admin/settings/system-settings](http://localhost:13000/admin/settings/system-settings) и переключать их в правом верхнем углу.

![20240611113758](https://static-docs.nocobase.com/20240611113758.png)

## Упаковка и загрузка в продакшен

Следуя документации [Сборка и упаковка плагина](/development/your-fisrt-plugin#构建并打包插件), вы можете упаковать плагин и загрузить его в продакшен.

Если вы клонировали исходный код, сначала выполните полную сборку, чтобы собрать зависимости плагина:

```bash
yarn build
```

Если проект создан с помощью `create-nocobase-app`, выполните:

```bash
yarn build @nocobase-sample/plugin-field-component-without-value --tar
```

После этого появится файл `storage/tar/@nocobase-sample/plugin-field-component-without-value.tar.gz`, который можно установить через [метод загрузки](/welcome/getting-started/plugin).
