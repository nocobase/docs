# Добавление блока данных с модальным окном (Data Block Modal)

## Описание сценария

В некоторых случаях перед созданием блока необходимо выбрать конфигурационные параметры. Например:
- Для блока `Kanban` нужно выбрать `Grouping field` и `Sorting field`.
- Для блока `Calendar` требуется указать `Title field`, `Start date field` и `End date field`.
- Для блока `Chart` необходимо настроить параметры диаграммы.

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/20240529223753_rec_.mp4" type="video/mp4" />
</video>

## Описание примера

В этом примере создается блок `Timeline` на основе компонента [Timeline](https://ant.design/components/timeline) от Ant Design. Перед созданием блока пользователь должен выбрать поля `Time Field` и `Title Field`.

Пример демонстрирует использование Initializer. Подробности о расширении блоков см. в документации [Расширения блоков](/plugin-samples/block).

Полный код примера доступен в [plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-initializer-block-data-modal).

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/20240529223457_rec_.mp4" type="video/mp4" />
</video>

## Инициализация плагина

Следуйте инструкциям из документации [Создание первого плагина](/development/your-fisrt-plugin). Если у вас нет проекта, создайте его. Если проект уже есть или вы клонировали исходный код, пропустите этот шаг.

```bash
yarn create nocobase-app my-nocobase-app -d sqlite
cd my-nocobase-app
yarn install
yarn nocobase install
```

Инициализируйте плагин и добавьте его в систему:

```bash
yarn pm create @nocobase-sample/plugin-initializer-block-data-modal
yarn pm enable @nocobase-sample/plugin-initializer-block-data-modal
```

Запустите проект:

```bash
yarn dev
```

После входа в систему перейдите по адресу [http://localhost:13000/admin/pm/list/local/](http://localhost:13000/admin/pm/list/local/), чтобы убедиться, что плагин установлен и активирован.

## Реализация функциональности

Перед началом работы с этим примером ознакомьтесь с основными концепциями:

- [Компонент Timeline от Ant Design](https://ant.design/components/timeline)
- [Руководство по SchemaInitializer](/development/client/ui-schema/initializer): Используется для добавления блоков, полей, операций и других элементов в интерфейс.
- [API SchemaInitializer](https://client.docs.nocobase.com/core/ui-schema/schema-initializer): Описание API для добавления элементов в интерфейс.
- [UI Schema](/development/client/ui-schema/what-is-ui-schema): Используется для определения структуры и стилей интерфейса.
- [Дизайнер Designable](/development/client/ui-schema/designable): Используется для изменения схемы.

Структура проекта:

```bash
.
├── client # Клиентская часть плагина
│   ├── initializer # Инициализатор
│   ├── component # Компоненты блока
│   ├── index.tsx # Входной файл клиентского плагина
│   ├── locale.ts # Утилиты для мультиязычности
│   ├── constants.ts # Константы
│   ├── schema # Схемы
│   └── settings # Schema Settings
├── locale # Файлы локализации
│   ├── en-US.json # Английский
│   └── zh-CN.json # Китайский
├── index.ts # Входной файл серверного плагина
└── server # Серверная часть плагина
```

### 1. Определение имени

Сначала определите имя блока, которое будет использоваться в различных местах.

Создайте файл `packages/plugins/@nocobase-sample/plugin-initializer-block-data-modal/src/client/constants.ts`:

```ts
export const BlockName = 'Timeline';
export const BlockNameLowercase = BlockName.toLowerCase();
```

### 2. Реализация компонента блока

#### 2.1 Определение компонента блока

В этом примере создается компонент блока `Timeline` с требованиями:
- Отображение временной шкалы на основе данных из выбранных полей.

Создайте файл `packages/plugins/@nocobase-sample/plugin-initializer-block-data-modal/src/client/component/Timeline.tsx`:

```tsx | pure
import React, { FC } from 'react';
import { Timeline as AntdTimeline, TimelineProps as AntdTimelineProps, Spin } from 'antd';
import { withDynamicSchemaProps } from "@nocobase/client";
import { BlockName } from '../constants';

export interface TimelineProps {
  data?: AntdTimelineProps['items'];
  loading?: boolean;
}

export const Timeline: FC<TimelineProps> = withDynamicSchemaProps((props) => {
  const { data, loading } = props;
  if (loading) return <div style={{ height: 100, textAlign: 'center' }}><Spin /></div>
  return <AntdTimeline mode='left' items={data}></AntdTimeline>
}, { displayName: BlockName });
```

Компонент `Timeline` — это функциональный компонент, обернутый в [withDynamicSchemaProps](/development/client/ui-schema/what-is-ui-schema#x-component-props-и-x-use-component-props), который принимает два параметра:
- `loading`: Статус загрузки данных.
- `data`: Свойство `items` компонента `Timeline`.

#### 2.2 Регистрация компонента блока

Зарегистрируйте компонент `Timeline` в системе через плагин.

```tsx | pure
import { Plugin } from '@nocobase/client';
import { Timeline } from './component';

export class PluginInitializerBlockDataModalClient extends Plugin {
  async load() {
    this.app.addComponents({ Timeline })
  }
}

export default PluginInitializerBlockDataModalClient;
```

#### 2.3 Проверка компонента блока

Существует два способа проверки компонента:
- Проверка через временную страницу: Создайте временную страницу, отрендерите компонент `Timeline` и проверьте, соответствует ли он требованиям.
- Проверка через документацию: Запустите документацию с помощью `yarn doc plugins/@nocobase-sample/plugin-initializer-block-data-modal` и проверьте через примеры в документации (TODO).

Рассмотрим проверку через временную страницу. Создайте страницу, добавьте один или несколько компонентов `Timeline` с параметрами и проверьте их работу.

```tsx | pure
import { Plugin } from '@nocobase/client';
import { Timeline } from './component';
import React from 'react';

export class PluginInitializerBlockDataModalClient extends Plugin {
  async load() {
    this.app.addComponents({ Timeline })

    this.app.router.add('admin.timeline-block-component', {
      path: '/admin/timeline-block-component',
      Component: () => {
        return <>
          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <Timeline
              data={[
                {
                  label: '2015-09-01',
                  children: 'user1',
                },
                {
                  label: '2015-09-02',
                  children: 'user2',
                },
                {
                  label: '2015-09-03',
                  children: 'user3',
                },
              ]} />
          </div>
          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <Timeline loading={true} />
          </div>
        </>
      }
    })
  }
}

export default PluginInitializerBlockDataModalClient;
```

Перейдите по адресу `http://localhost:13000/admin/timeline-block-component`, чтобы увидеть содержимое тестовой страницы.

![20240529210122](https://static-docs.nocobase.com/20240529210122.png)

После проверки удалите тестовую страницу.

### 3. Определение формы конфигурации

По требованиям, после выбора таблицы данных необходимо настроить поля `Time Field` и `Title Field`. Для этого создается форма конфигурации с именем `TimelineInitializerConfigForm`.

#### 3.1 Определение компонента формы конфигурации

Ознакомьтесь с основными концепциями:
- [Action](https://client.docs.nocobase.com/components/action)
- [Action.Modal](https://client.docs.nocobase.com/components/action#actionmodal): Модальное окно.
- [ActionContextProvider](https://client.docs.nocobase.com/components/action#actioncontext): Контекст действия.
- [SchemaComponent](https://client.docs.nocobase.com/core/ui-schema/schema-component#schemacomponent-1): Для рендеринга схемы.

Создайте файл `packages/plugins/@nocobase-sample/plugin-initializer-block-data-modal/src/client/initializer/ConfigForm.tsx`:

```tsx | pure
import React, { FC, useMemo } from "react";
import { ISchema } from '@formily/react';
import { ActionContextProvider, SchemaComponent, useApp, CollectionFieldOptions } from '@nocobase/client';
import { useT } from "../locale";

const createSchema = (fields: CollectionFieldOptions, t: ReturnType<typeof useT>): ISchema => {
  // TODO
}

interface TimelineConfigFormValues {
  timeField: string;
  titleField: string;
}

export interface TimelineConfigFormProps {
  collection: string;
  dataSource?: string;
  onSubmit: (values: TimelineConfigFormValues) => void;
  visible: boolean;
  setVisible: (visible: boolean) => void;
}

export const TimelineInitializerConfigForm: FC<TimelineConfigFormProps> = ({ visible, setVisible, collection, dataSource, onSubmit }) => {
  const app = useApp();
  const fields = useMemo(() => app.getCollectionManager(dataSource).getCollection(collection).getFields(), [collection, dataSource])
  const t = useT();
  const schema = useMemo(() => createSchema(fields, t), [fields]);

  return <ActionContextProvider value={{ visible, setVisible }}>
    <SchemaComponent schema={schema}  />
  </ActionContextProvider>
}
```

Компонент `TimelineInitializerConfigForm` принимает следующие параметры:
- `visible`: Отображение формы.
- `setVisible`: Управление видимостью формы.
- `collection`: Имя таблицы данных.
- `dataSource`: Имя источника данных.
- `onSubmit`: Обработчик отправки формы.

`collection` и `dataSource` определяются динамически при выборе таблицы данных.

- [app](https://client.docs.nocobase.com/core/application/application): Получение экземпляра приложения через [useApp()](https://client.docs.nocobase.com/core/application/application#useapp).
- [app.getCollectionManager](https://client.docs.nocobase.com/core/application/application##appgetcollectionmanager): Получение экземпляра [CollectionManager](https://client.docs.nocobase.com/core/data-source/collection-manager).
- [getCollection](https://client.docs.nocobase.com/core/data-source/collection-manager#getcollectionpath): Получение таблицы данных.
- [getFields](https://client.docs.nocobase.com/core/data-source/collection#collectiongetfieldspredicate): Получение полей таблицы данных.

[ActionContextProvider](https://client.docs.nocobase.com/components/action#actioncontext) передает `visible` и `setVisible` дочерним компонентам, а `SchemaComponent` рендерит схему.

#### 3.2 Реализация схемы формы конфигурации

Ознакомьтесь с:
- [FormV2](https://client.docs.nocobase.com/components/form-v2): Компонент формы.
- [Select](https://client.docs.nocobase.com/components/action#select): Компонент выбора.

Добавьте в `ConfigForm.tsx` схему формы:

```tsx | pure
const useCloseActionProps = () => {
  const { setVisible } = useActionContext();
  return {
    type: 'default',
    onClick() {
      setVisible(false);
    },
  };
};

const useSubmitActionProps = (onSubmit: (values: TimelineConfigFormValues) => void) => {
  const { setVisible } = useActionContext();
  const form = useForm<TimelineConfigFormValues>();

  return {
    type: 'primary',
    async onClick() {
      await form.submit();
      const values = form.values;
      onSubmit(values);
      setVisible(false);
    },
  };
};

const createSchema = (fields: CollectionFieldOptions[]): ISchema => {
  return {
    type: 'void',
    name: uid(),
    'x-component': 'Action.Modal',
    'x-component-props': {
      width: 600,
    },
    'x-decorator': 'FormV2',
    properties: {
      titleField: {
        type: 'string',
        title: 'Title Field',
        required: true,
        enum: fields.map(item => ({ label: item.uiSchema?.title || item.name, value: item.name })),
        'x-decorator': 'FormItem',
        'x-component': 'Select',
      },
      timeField: {
        type: 'string',
        title: 'Time Field',
        required: true,
        enum: fields.filter(item => item.type === 'date').map(item => ({ label: item.uiSchema?.title || item.name, value: item.name })),
        'x-decorator': 'FormItem',
        'x-component': 'Select',
      },
      footer: {
        type: 'void',
        'x-component': 'Action.Modal.Footer',
        properties: {
          close: {
            title: 'Close',
            'x-component': 'Action',
            'x-component-props': {
              type: 'default',
            },
            'x-use-component-props': 'useCloseActionProps',
          },
          submit: {
            title: 'Submit',
            'x-component': 'Action',
            'x-use-component-props': 'useSubmitActionProps',
          },
        },
      },
    }
  };
}
```

Функция `createSchema` генерирует схему формы, принимая параметр `fields` (поля таблицы данных). Форма отображается в модальном окне и содержит два селектора: `Title Field` и `Time Field`, а также кнопки `Close` и `Submit`.

- Кнопки `Close` и `Submit` используют хуки через [x-use-component-props](/development/client/ui-schema/what-is-ui-schema#x-component-props-и-x-use-component-props).
- `Title Field`: Можно выбрать любое поле.
- `Time Field`: Доступны только поля типа `date`.

Обновите `TimelineInitializerConfigForm`, зарегистрировав `useSubmitActionProps` и `useCloseActionProps` в области видимости ([scope](/plugin-samples/component-and-scope/local)):

```diff
-   <SchemaComponent schema={schema}/>
+   <SchemaComponent schema={schema} scope={{ useSubmitActionProps: useSubmitActionProps.bind(null, onSubmit), useCloseActionProps }} />
```

#### 3.3 Проверка формы конфигурации

Добавьте проверку в `index.tsx`:

```tsx | pure
import { Plugin } from '@nocobase/client';
import { Timeline } from './component';
import React, { useState } from 'react';
import { TimelineInitializerConfigForm } from './initializer/ConfigForm';

export class PluginInitializerBlockDataModalClient extends Plugin {
  async load() {
    this.app.addComponents({ Timeline })

    this.app.router.add('admin.timeline-config-form', {
      path: '/admin/timeline-config-form',
      Component: () => {
        const [visible, setVisible] = useState(true);
        function onSubmit(values) {
          console.log(values);
        }
        return <>
          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <TimelineInitializerConfigForm visible={visible} onSubmit={onSubmit} setVisible={setVisible} collection='users' />
          </div>
        </>
      }
    })
  }
}

export default PluginInitializerBlockDataModalClient;
```

Перейдите по адресу `http://localhost:13000/admin/timeline-config-form`, чтобы увидеть содержимое тестовой страницы.

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/20240529215127_rec_.mp4" type="video/mp4" />
</video>

После проверки удалите тестовую страницу.

### 4. Определение схемы блока

#### 4.1 Определение схемы блока

Динамические страницы в NocoBase рендерятся через схемы, поэтому необходимо определить схему для добавления блока `Timeline`. Ознакомьтесь с:
- [Протокол UI Schema](/development/client/ui-schema/what-is-ui-schema): Подробное описание структуры схемы.
- [DataBlockProvider](https://client.docs.nocobase.com/core/data-block/data-block-provider): Провайдер данных блока.

Создайте файл `packages/plugins/@nocobase-sample/plugin-initializer-block-data-modal/src/client/schema/index.tsx`:

```ts
import { useDataBlockProps, useDataBlockRequest } from "@nocobase/client";
import { TimelineProps } from '../component';
import { BlockName, BlockNameLowercase } from "../constants";

interface GetTimelineSchemaOptions {
  dataSource?: string;
  collection: string;
  titleField: string;
  timeField: string;
}

export function getTimelineSchema(options: GetTimelineSchemaOptions) {
  return {
    type: 'void',
    "x-toolbar": "BlockSchemaToolbar",
    'x-decorator': 'DataBlockProvider',
    'x-decorator-props': {
      dataSource,
      collection,
      action: 'list',
      params: {
        sort: `-${timeField}`
      },
      [BlockNameLowercase]: {
        titleField,
        timeField,
      }
    },
    'x-component': 'CardItem',
    properties: {
      [BlockNameLowercase]: {
        type: 'void',
        'x-component': BlockName,
        'x-use-component-props': 'useTimelineProps',
      }
    }
  }
}

export function useTimelineProps(): TimelineProps {
  const dataProps = useDataBlockProps();
  const props = dataProps[BlockNameLowercase];
  const { loading, data } = useDataBlockRequest<any[]>();
  return {
    loading,
    data: data?.data?.map((item) => ({
      label: item[props.timeField],
      children: item[props.titleField],
    }))
  }
}
```

Ключевые моменты:
- `getTimelineSchema()`: Принимает `dataSource`, `collection`, `titleField`, `timeField` и возвращает схему для рендеринга блока `Timeline`.
  - `type: 'void'`: Указывает, что узел не содержит данных.
  - `x-decorator: 'DataBlockProvider'`: Провайдер данных блока, см. [DataBlockProvider](https://client.docs.nocobase.com/core/data-block/data-block-provider).
  - `x-decorator-props`: Свойства `DataBlockProvider`:
    - `dataSource`: Источник данных.
    - `collection`: Таблица данных.
    - `action: 'list'`: Операция получения списка данных.
    - `params: { sort }`: Параметры запроса, сортировка по `timeField` в обратном порядке, см. [useRequest](https://client.docs.nocobase.com/core/request#userequest).
    - `[BlockNameLowercase]`: Дополнительные свойства (`titleField`, `timeField`).
  - `x-component: 'CardItem'`: Компонент [CardItem](https://client.docs.nocobase.com/components/card-item) для стилей и перетаскивания.
  - `'x-component': 'Timeline'`: Компонент `Timeline`.
  - `'x-use-component-props': 'useTimelineProps'`: Динамические свойства компонента, строковый тип для хранения в базе данных.
- `useTimelineProps()`:
  - [useDataBlockProps](https://client.docs.nocobase.com/core/data-block/data-block-provider#usedatablockprops): Получает свойства `x-decorator-props`.
  - [useDataBlockRequest](https://client.docs.nocobase.com/core/data-block/data-block-request-provider#usedatablockrequest): Получает данные запроса.

Схема эквивалентна React-компоненту:

```tsx | pure
<DataBlockProvider collection={collection} dataSource={dataSource} action='list' params={{ sort: `-${timeField}` }} timeline={{ titleField, timeField }}>
  <CardItem>
    <Timeline {...useTimelineProps()} />
  </CardItem>
</DataBlockProvider>
```

#### 4.2 Регистрация области видимости

Обновите `index.tsx`, зарегистрировав `useTimelineProps`:

```tsx | pure
import { Plugin } from '@nocobase/client';
import { Timeline } from './component';
import { useTimelineProps } from './schema';

export class PluginInitializerBlockDataModalClient extends Plugin {
  async load() {
    this.app.addComponents({ Timeline })
    this.app.addScopes({ useTimelineProps });
  }
}

export default PluginInitializerBlockDataModalClient;
```

Подробности см. в [Глобальная регистрация Component и Scope](/plugin-samples/component-and-scope/global).

#### 4.3 Проверка схемы блока

Проверьте схему через временную страницу:

```tsx | pure
import { Plugin, SchemaComponent } from '@nocobase/client';
import { Timeline, getTimelineSchema, useTimelineProps } from './component';
import React from 'react';

export class PluginInitializerBlockDataModalClient extends Plugin {
  async load() {
    // ...

    this.app.router.add('admin.timeline-schema', {
      path: '/admin/timeline-schema',
      Component: () => {
        return <>
          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <SchemaComponent schema={{ properties: { test1: getTimelineSchema({ collection: 'users', timeField: 'createdAt', titleField: 'nickname' }) } }} />
          </div>
        </>
      }
    })
  }
}

export default PluginInitializerBlockDataModalClient;
```

Перейдите по адресу `http://localhost:13000/admin/timeline-schema`.

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/20240529220626_rec_.mp4" type="video/mp4" />
</video>

После проверки удалите тестовую страницу.

### 5. Определение элемента SchemaInitializer

Создайте файл `packages/plugins/@nocobase-sample/plugin-initializer-block-data-modal/src/client/initializer/index.tsx`:

```tsx | pure
import React, { useCallback, useState } from 'react';
import { FieldTimeOutlined } from '@ant-design/icons';
import { DataBlockInitializer, SchemaInitializerItemType, useSchemaInitializer } from "@nocobase/client";

import { getTimelineSchema } from '../schema';
import { useT } from '../locale';
import { TimelineConfigFormProps, TimelineInitializerConfigForm } from './ConfigForm';
import { BlockName, BlockNameLowercase } from '../constants';

export const TimelineInitializerComponent = () => {
  const { insert } = useSchemaInitializer();
  const [collection, setCollection] = useState<string>();
  const [dataSource, setDataSource] = useState<string>();
  const [showConfigForm, setShowConfigForm] = useState(false);
  const t = useT()

  const onSubmit: TimelineConfigFormProps['onSubmit'] = useCallback((values) => {
    const schema = getTimelineSchema({ collection, dataSource, timeField: values.timeField, titleField: values.titleField });
    insert(schema);
  }, [collection, dataSource])

  return <>
    {showConfigForm && <TimelineInitializerConfigForm
      visible={showConfigForm}
      setVisible={setShowConfigForm}
      onSubmit={onSubmit}
      collection={collection}
      dataSource={dataSource}
    />}
    <DataBlockInitializer
      name={BlockNameLowercase}
      title={t(BlockName)}
      icon={<FieldTimeOutlined />}
      componentType={BlockName}
      onCreateBlockSchema={({ item }) => {
        const { name: collection, dataSource } = item;
        setCollection(collection);
        setDataSource(dataSource);
        setShowConfigForm(true);
      }}>

    </DataBlockInitializer>
  </>
}

export const timelineInitializerItem: SchemaInitializerItemType = {
  name: 'Timeline',
  Component: TimelineInitializerComponent,
}
```

Процесс:
1. Пользователь выбирает таблицу данных, получая `collection` и `dataSource`.
2. Открывается форма `TimelineInitializerConfigForm` для выбора `timeField` и `titleField`.
3. После отправки формы создается схема и вставляется в страницу.

Ключ — использование `DataBlockInitializer` (документация TODO).

`timelineInitializerItem`:
- `name`: Уникальный идентификатор для операций.
- `Component`: В отличие от [Добавления простого блока Simple Block](/plugin-samples/schema-initializer/block-simple), где использовался `type`, здесь используется `Component`. См. [Два способа определения](https://client.docs.nocobase.com/core/ui-schema/schema-initializer#two-ways-to-define-component-and-type).

`TimelineInitializerComponent`:
- `DataBlockInitializer`:
  - `title`: Заголовок.
  - `icon`: Иконка, см. [Ant Design Icons](https://ant.design/components/icon/).
  - `componentType`: Тип компонента (`Timeline`).
  - `onCreateBlockSchema`: Обработчик клика по таблице данных.
  - [useSchemaInitializer](https://client.docs.nocobase.com/core/ui-schema/schema-initializer#useschemainitializer): Предоставляет методы вставки схемы.

Подробности см. в [Schema Initializer](https://client.docs.nocobase.com/core/ui-schema/schema-initializer).

### 6. Реализация SchemaSettings

#### 6.1 Определение SchemaSettings

Создайте файл `packages/plugins/@nocobase-sample/plugin-initializer-block-data-modal/src/client/settings/index.ts`:

```ts
import { SchemaSettings } from "@nocobase/client";

export const timelineSettings = new SchemaSettings({
  name: 'blockSettings:info',
  items: [
    {
      type: 'remove',
      name: 'remove',
      componentProps: {
        removeParentsIfNoChildren: true,
        breakRemoveOn: {
          'x-component': 'Grid',
        },
      }
    }
  ]
})
```

- `componentProps`:
  - `removeParentsIfNoChildren`: Удалять родительский узел, если нет дочерних.
  - `breakRemoveOn`: Условие остановки удаления, предотвращает удаление `Grid`.

#### 6.2 Регистрация SchemaSettings

```ts
import { Plugin } from '@nocobase/client';
import { timelineSettings } from './settings';

export class PluginInitializerBlockDataModalClient extends Plugin {
  async load() {
    // ...
    this.app.schemaSettingsManager.add(timelineSettings)
  }
}

export default PluginInitializerBlockDataModalClient;
```

#### 6.3 Использование SchemaSettings

Обновите `getTimelineSchema` в `schema/index.tsx`:

```diff
+ import { timelineSettings } from '../settings';

export function getTimelineSchema(options: GetTimelineSchemaOptions) {
  const { dataSource, collection, titleField, timeField } = options;
  return {
    type: 'void',
    'x-decorator': 'DataBlockProvider',
+   'x-settings': timelineSettings.name,
    // ...
  }
}
```

### 7. Добавление в `Add block`

Кнопки `Add block` имеют разные имена (`name`).

![img_v3_02b4_049b0a62-8e3b-420f-adaf-a6350d84840g](https://static-docs.nocobase.com/img_v3_02b4_049b0a62-8e3b-420f-adaf-a6350d84840g.jpg)

#### 7.1 Добавление в `Add block` на уровне страницы

`name` для `Add block` на уровне страницы — `page:addBlock`, для группы `Data Blocks` — `dataBlocks` (см. документацию TODO).

Обновите `index.tsx`:

```tsx | pure
import { Plugin } from '@nocobase/client';
import { Timeline } from './component';
import { useTimelineProps } from './schema';
import { timelineSettings } from './settings';
import { timelineInitializerItem } from './timelineInitializerItem';

export class PluginInitializerBlockDataModalClient extends Plugin {
  async load() {
    this.app.addComponents({ Timeline })
    this.app.addScopes({ useTimelineProps });
    this.app.schemaSettingsManager.add(timelineSettings)

    this.app.schemaInitializerManager.addItem('page:addBlock', `dataBlocks.${timelineInitializerItem.name}`, timelineInitializerItem)
  }
}

export default PluginInitializerBlockDataModalClient;
```

<video controls width='100%' src="https://static-docs.nocobase.com/20240529222118_rec_.mp4"></video>

#### 7.2 Добавление в `Add block` во всплывающем окне

Для блока `Table` во всплывающем окне `Add new` `name` — `popup:addNew:addBlock`, для `Data Blocks` — `dataBlocks`.

Обновите `index.tsx`:

```diff
import { Plugin } from '@nocobase/client';
import { Timeline } from './component';
import { useTimelineProps } from './schema';
import { timelineSettings } from './settings';
import { timelineInitializerItem } from './timelineInitializerItem';

export class PluginInitializerBlockDataModalClient extends Plugin {
  async load() {
    this.app.addComponents({ Timeline })
    this.app.addScopes({ useTimelineProps });
    this.app.schemaSettingsManager.add(timelineSettings)
    this.app.schemaInitializerManager.addItem('page:addBlock', `dataBlocks.${timelineInitializerItem.name}`, timelineInitializerItem)
+   this.app.schemaInitializerManager.addItem('popup:addNew:addBlock', `dataBlocks.${timelineInitializerItem.name}`, timelineInitializerItem);
  }
}

export default PluginInitializerBlockDataModalClient;
```

![20240529223046](https://static-docs.nocobase.com/20240529223046.png)

#### 7.3 Добавление в `Add block` мобильной версии

Активируйте плагин мобильной версии (см. [Активация плагина](/welcome/getting-started/plugin#3-activate-the-plugin)).

Обновите `index.tsx`:

```ts
// ...

export class PluginInitializerBlockDataModalClient extends Plugin {
  async load() {
    // ...
    this.app.schemaInitializerManager.addItem('mobilePage:addBlock', `dataBlocks.${timelineInitializerItem.name}`, timelineInitializerItem);
  }
}

export default PluginInitializerBlockDataModalClient;
```

![20240529223307](https://static-docs.nocobase.com/20240529223307.png)

Для других `Add block` достаточно знать их `name`.

### 8. Мультиязычность

#### 8.1 Английский

Обновите `en-US.json`:

```diff
{
  "Timeline": "Timeline",
  "Title Field": "Title Field",
  "Time Field": "Time Field"
}
```

#### 8.2 Китайский

Обновите `zh-CN.json`:

```diff
{
  "Timeline": "时间线",
  "Title Field": "标题字段",
  "Time Field": "时间字段"
}
```

Добавьте языки через [http://localhost:13000/admin/settings/system-settings](http://localhost:13000/admin/settings/system-settings) и переключайте их в правом верхнем углу.

![20240611113758](https://static-docs.nocobase.com/20240611113758.png)

## Сборка и развертывание в продакшен

Следуйте инструкциям из документации [Сборка и упаковка плагина](/development/your-fisrt-plugin#сборка-и-упаковка-плагина).

Для клонированного исходного кода выполните полную сборку:

```bash
yarn build
```

Для проекта, созданного с помощью `create-nocobase-app`:

```bash
yarn build @nocobase-sample/plugin-initializer-block-data-modal --tar
```

Архив плагина появится в `storage/tar/@nocobase-sample/plugin-initializer-block-data-modal.tar.gz`. Установите его через [загрузку](/welcome/getting-started/plugin).
