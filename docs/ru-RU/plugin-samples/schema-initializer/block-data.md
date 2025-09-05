# Добавление блоков данных

## Описание сценария

В NocoBase есть множество кнопок `Add block`, которые используются для добавления блоков в интерфейс. Некоторые из них связаны с таблицами данных и называются блоками данных (`Data Block`), а другие, не связанные с данными, называются простыми блоками (`Simple Block`).

![img_v3_02b4_170eddb5-d3b4-461e-b74b-f83250941e5g](https://static-docs.nocobase.com/img_v3_02b4_170eddb5-d3b4-461e-b74b-f83250941e5g.jpg)

Однако существующие типы блоков не всегда удовлетворяют потребности, поэтому может потребоваться создание пользовательских блоков. Данная статья посвящена созданию блоков данных (`Data Block`).

## Описание примера

В этом примере будет создан блок `Info`, который будет добавлен в меню `Add block` на страницах (`Page`), в таблицах (`Table`) и в мобильной версии.

Этот пример демонстрирует использование Initializer. Подробности о расширении блоков см. в документации [Расширения блоков](/plugin-samples/block).

Полный код примера доступен в [plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-initializer-block-data).

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/20240522-182547.mp4" type="video/mp4" />
</video>

## Инициализация плагина

Следуйте инструкциям из документации [Создание первого плагина](/development/your-fisrt-plugin). Если у вас нет проекта, создайте его. Если проект уже есть или вы клонировали исходный код, пропустите этот шаг.

```bash
yarn create nocobase-app my-nocobase-app -d sqlite
cd my-nocobase-app
yarn install
yarn nocobase install
```

Затем инициализируйте плагин и добавьте его в систему:

```bash
yarn pm create @nocobase-sample/plugin-initializer-block-data
yarn pm enable @nocobase-sample/plugin-initializer-block-data
```

Запустите проект:

```bash
yarn dev
```

После входа в систему перейдите по адресу [http://localhost:13000/admin/pm/list/local/](http://localhost:13000/admin/pm/list/local/), чтобы убедиться, что плагин установлен и активирован.

## Реализация функциональности

Перед началом работы с этим примером необходимо ознакомиться с основными концепциями:

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

### 1. Определение имен

Сначала необходимо определить имя блока, которое будет использоваться в различных местах.

Создайте файл `packages/plugins/@nocobase-sample/plugin-initializer-block-data/src/client/constants.ts`:

```ts
export const BlockName = 'Info';
export const BlockNameLowercase = BlockName.toLowerCase();
```

### 2. Реализация компонентов блока

#### 2.1 Определение компонента блока

В этом примере создается компонент блока `Info` с следующими требованиями:

- Отображение имени текущей таблицы данных блока.
- Отображение списка данных текущего блока.

Создайте файл `packages/plugins/@nocobase-sample/plugin-initializer-block-data/src/client/component/Info.tsx`:

```tsx | pure
import React, { FC } from 'react';
import { withDynamicSchemaProps } from '@nocobase/client'
import { BlockName } from '../constants';

export interface InfoProps {
  collectionName: string;
  data?: any[];
  loading?: boolean;
}

export const Info: FC<InfoProps> = withDynamicSchemaProps(({ collectionName, data }) => {
  return <div>
    <div>Collection: {collectionName}</div>
    <div>Data list: <pre>{JSON.stringify(data, null, 2)}</pre></div>
  </div>
}, { displayName: BlockName })
```

Компонент `Info` — это функциональный компонент, обернутый в [withDynamicSchemaProps](/development/client/ui-schema/what-is-ui-schema#x-component-props-и-x-use-component-props), который обрабатывает динамические свойства из схемы.

Без учета `withDynamicSchemaProps` компонент `Info` является простым функциональным компонентом.

Экспортируйте компонент в `packages/plugins/@nocobase-sample/plugin-initializer-block-data/src/client/component/index.ts`:

```tsx | pure
export * from './Info';
```

#### 2.2 Регистрация компонента блока

Зарегистрируйте компонент `Info` в системе через плагин.

```tsx | pure
import { Plugin } from '@nocobase/client';
import { Info } from './component';

export class PluginInitializerBlockDataClient extends Plugin {
  async load() {
    this.app.addComponents({ Info })
  }
}

export default PluginInitializerBlockDataClient;
```

#### 2.3 Проверка компонента блока

Существует два способа проверки компонента:

- Проверка через временную страницу: Создайте временную страницу, отрендерите компонент `Info` и проверьте, соответствует ли он требованиям.
- Проверка через документацию: Запустите документацию с помощью `yarn doc plugins/@nocobase-sample/plugin-initializer-block-data` и проверьте через примеры в документации (TODO).

Рассмотрим проверку через временную страницу. Создайте страницу, добавьте компонент `Info` с параметрами и проверьте его работу.

```tsx | pure
import React from 'react';
import { Plugin } from '@nocobase/client';
import { Info } from './component';

export class PluginInitializerBlockDataClient extends Plugin {
  async load() {
    this.app.addComponents({ Info })

    this.app.router.add('admin.info-component', {
      path: '/admin/info-component',
      Component: () => {
        return <>
          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <Info collectionName='test' data={[{ id: 1 }, { id: 2 }]} />
          </div>
        </>
      }
    })
  }
}

export default PluginInitializerBlockDataClient;
```

Перейдите по адресу `http://localhost:13000/admin/info-component`, чтобы увидеть содержимое тестовой страницы.

![20240526165834](https://static-docs.nocobase.com/20240526165834.png)

После проверки удалите тестовую страницу.

### 3. Определение схемы блока

#### 3.1 Определение схемы блока

Динамические страницы в NocoBase рендерятся через схемы, поэтому необходимо определить схему для добавления блока `Info` в интерфейс. Перед этим ознакомьтесь с:

- [Протокол UI Schema](/development/client/ui-schema/what-is-ui-schema): Подробное описание структуры схемы и роли каждого свойства.
- [DataBlockProvider](https://client.docs.nocobase.com/core/data-block/data-block-provider): Провайдер данных блока.

Создайте файл `packages/plugins/@nocobase-sample/plugin-initializer-block-data/src/client/schema/index.ts`:

```ts
import { useCollection, useDataBlockRequest } from "@nocobase/client";

import { InfoProps } from "../component";
import { BlockName, BlockNameLowercase } from "../constants";

export function useInfoProps(): InfoProps {
  const collection = useCollection();
  const { data, loading } = useDataBlockRequest<any[]>();

  return {
    collectionName: collection.name,
    data: data?.data,
    loading: loading
  }
}

export function getInfoSchema({ dataSource = 'main', collection }) {
  return {
    type: 'void',
    'x-decorator': 'DataBlockProvider',
    'x-decorator-props': {
      dataSource,
      collection,
      action: 'list',
    },
    'x-component': 'CardItem',
    "x-toolbar": "BlockSchemaToolbar",
    properties: {
      [BlockNameLowercase]: {
        type: 'void',
        'x-component': BlockName,
        'x-use-component-props': 'useInfoProps',
      }
    }
  }
}
```

Два ключевых момента:

- `getInfoSchema()`: Определена как функция, поскольку `dataSource` и `collection` динамически определяются при выборе таблицы данных.
- `useInfoProps()`: Используется для обработки динамических свойств компонента `Info`. Поскольку схема сохраняется в базе данных, значение должно быть строкового типа.

`getInfoSchema()`:
- `type: 'void'`: Указывает, что узел не содержит данных.
- `x-decorator: 'DataBlockProvider'`: Провайдер данных блока, предоставляет данные. Подробности см. в [DataBlockProvider](https://client.docs.nocobase.com/core/data-block/data-block-provider).
- `x-decorator-props`: Свойства `DataBlockProvider`:
  - `dataSource`: Источник данных.
  - `collection`: Таблица данных.
  - `action: 'list'`: Тип операции, здесь получение списка данных.
- `x-component: 'CardItem'`: Компонент [CardItem](https://client.docs.nocobase.com/components/card-item), оборачивает блоки для стилей, компоновки и функциональности перетаскивания.
- `"x-toolbar": "BlockSchemaToolbar"`: Используется для отображения имени текущей таблицы в левом верхнем углу, обычно применяется с `DataBlockProvider`.
- `properties`: Подузлы, здесь `info` — информационный блок.

`useInfoProps()`:
- [useCollection](https://client.docs.nocobase.com/core/data-source/collection-provider#usecollection): Получает текущую таблицу данных, предоставляемую [DataBlockProvider](https://client.docs.nocobase.com/core/data-block/data-block-provider).
- [useDataBlockRequest](https://client.docs.nocobase.com/core/data-block/data-block-request-provider#usedatablockrequest): Получает запрос данных блока, предоставляемый [DataBlockProvider](https://client.docs.nocobase.com/core/data-block/data-block-provider).

Эта схема эквивалентна следующему React-компоненту:

```tsx | pure
<DataBlockProvider collection={collection} dataSource={dataSource} action='list'>
  <CardItem>
    <Info {...useInfoProps()} />
  </CardItem>
</DataBlockProvider>
```

#### 3.2 Регистрация области видимости (scope)

Зарегистрируйте `useInfoProps` в системе, чтобы [x-use-component-props](/development/client/ui-schema/what-is-ui-schema#x-component-props-и-x-use-component-props) мог найти соответствующую область видимости.

```tsx | pure
import { Plugin } from '@nocobase/client';
import { Info } from './component';
import { useInfoProps } from './schema';

export class PluginInitializerBlockDataClient extends Plugin {
  async load() {
    this.app.addComponents({ Info })
    this.app.addScopes({ useInfoProps });
  }
}

export default PluginInitializerBlockDataClient;
```

Подробности об области видимости см. в [Глобальная регистрация Component и Scope](/plugin-samples/component-and-scope/global).

#### 3.3 Проверка схемы блока

Аналогично проверке компонента, схему можно проверить через временную страницу или примеры в документации. Рассмотрим проверку через временную страницу:

```tsx | pure
import React from 'react';
import { Plugin, SchemaComponent, SchemaComponentOptions } from '@nocobase/client';
import { Info } from './component';
import { getInfoSchema, useInfoProps } from './schema';

export class PluginInitializerBlockDataClient extends Plugin {
  async load() {
    // ...
    this.app.router.add('admin.info-schema', {
      path: '/admin/info-schema',
      Component: () => {
        return <>
          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <SchemaComponent schema={{ properties: { test1: getInfoSchema({ collection: 'users' }) } }} />
          </div>

          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <SchemaComponent schema={{ properties: { test2: getInfoSchema({ collection: 'roles' }) } }} />
          </div>
        </>
      }
    })
  }
}

export default PluginInitializerBlockDataClient;
```

- [SchemaComponentOptions](https://client.docs.nocobase.com/core/ui-schema/schema-component#schemacomponentoptions): Используется для передачи компонентов и области видимости, необходимых в схеме. Подробности см. в [Локальная регистрация Component и Scope](/plugin-samples/component-and-scope/local).
- [SchemaComponent](https://client.docs.nocobase.com/core/ui-schema/schema-component#schemacomponent-1): Используется для рендеринга схемы.

Перейдите по адресу [http://localhost:13000/admin/info-schema](http://localhost:13000/admin/info-schema), чтобы увидеть содержимое тестовой страницы.

![20240526170053](https://static-docs.nocobase.com/20240526170053.png)

После проверки удалите тестовую страницу.

### 4. Определение элемента SchemaInitializer

Создайте файл `packages/plugins/@nocobase-sample/plugin-initializer-block-data/src/client/initializer/index.tsx`:

```tsx | pure
import React from 'react';
import { SchemaInitializerItemType, useSchemaInitializer } from '@nocobase/client'
import { CodeOutlined } from '@ant-design/icons';

import { getInfoSchema } from '../schema'
import { useT } from '../locale';
import { BlockName, BlockNameLowercase } from '../constants';

export const infoInitializerItem: SchemaInitializerItemType = {
  name: BlockNameLowercase,
  Component: 'DataBlockInitializer',
  useComponentProps() {
    const { insert } = useSchemaInitializer();
    const t = useT();
    return {
      title: t(BlockName),
      icon: <CodeOutlined />,
      componentType: BlockName,
      useTranslationHooks: useT,
      onCreateBlockSchema({ item }) {
        insert(getInfoSchema({ dataSource: item.dataSource, collection: item.name }))
      },
    };
  },
}
```

Ключ к реализации блока данных — использование `DataBlockInitializer` (документация TODO).

`infoInitializerItem`:
- `Component`: В отличие от [Добавления простого блока Simple Block](/plugin-samples/schema-initializer/block-simple), где использовался `type`, здесь используется `Component`. Оба способа допустимы, см. [Два способа определения компонента и типа](https://client.docs.nocobase.com/core/ui-schema/schema-initializer#two-ways-to-define-component-and-type).
- `useComponentProps`: Свойства компонента `DataBlockInitializer`:
  - `title`: Заголовок.
  - `icon`: Иконка, список доступных иконок см. в [Ant Design Icons](https://ant.design/components/icon/).
  - `componentType`: Тип компонента, здесь `Info`.
  - `onCreateBlockSchema`: Обработчик клика по таблице данных:
    - `item`: Информация о выбранной таблице:
      - `item.name`: Имя таблицы.
      - `item.dataSource`: Источник данных таблицы.
  - [useSchemaInitializer](https://client.docs.nocobase.com/core/ui-schema/schema-initializer#useschemainitializer): Предоставляет методы для вставки схемы.
- `"x-toolbar": "BlockSchemaToolbar"`: Используется для отображения имени текущей таблицы в левом верхнем углу, обычно применяется с `DataBlockProvider`.

Подробности о создании SchemaInitializer см. в [Schema Initializer](https://client.docs.nocobase.com/core/ui-schema/schema-initializer).

### 5. Реализация SchemaSettings

#### 5.1 Определение SchemaSettings

Для полноценного блока требуется SchemaSettings для настройки свойств и операций. В этом примере реализована только операция `remove`, так как SchemaSettings не является основным фокусом.

Создайте файл `packages/plugins/@nocobase-sample/plugin-initializer-block-data/src/client/settings/index.ts`:

```ts
import { SchemaSettings } from "@nocobase/client";
import { BlockNameLowercase } from "../constants";

export const infoSettings = new SchemaSettings({
  name: `blockSettings:${BlockNameLowercase}`,
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

#### 5.2 Регистрация SchemaSettings

```ts
import { Plugin } from '@nocobase/client';
import { infoSettings } from './settings';

export class PluginInitializerBlockDataClient extends Plugin {
  async load() {
    // ...
    this.app.schemaSettingsManager.add(infoSettings)
  }
}

export default PluginInitializerBlockDataClient;
```

#### 5.3 Использование SchemaSettings

Обновите метод `getInfoSchema` в `packages/plugins/@nocobase-sample/plugin-initializer-block-data/src/client/schema/index.ts`, добавив `x-settings`:

```diff
+ import { infoSettings } from "../settings";

export function getInfoSchema({ dataSource = 'main', collection }) {
  return {
    type: 'void',
    'x-decorator': 'DataBlockProvider',
+   'x-settings': infoSettings.name,
    // ...
  }
}
```

### 6. Добавление в `Add block`

В системе есть множество кнопок `Add block`, но их имена (`name`) различны.

![img_v3_02b4_049b0a62-8e3b-420f-adaf-a6350d84840g](https://static-docs.nocobase.com/img_v3_02b4_049b0a62-8e3b-420f-adaf-a6350d84840g.jpg)

#### 6.1 Добавление в `Add block` на уровне страницы

Чтобы добавить блок в `Add block` на уровне страницы, необходимо знать соответствующий `name`. Способ получения `name` описан в документации (TODO).

Из изображения видно, что `Add block` на уровне страницы имеет `name` `page:addBlock`, а группа `Data Blocks` — `name` `dataBlocks`.

Обновите файл `packages/plugins/@nocobase-sample/plugin-initializer-block-data/src/client/index.tsx`:

```tsx | pure
import { Plugin } from '@nocobase/client';
import { Info } from './component';
import { useInfoProps } from './schema';
import { infoSettings } from './settings';
import { infoInitializerItem } from './initializer';

export class PluginDataBlockInitializerClient extends Plugin {
  async load() {
    this.app.addComponents({ Info });
    this.app.addScopes({ useInfoProps });

    this.app.schemaSettingsManager.add(infoSettings);

    this.app.schemaInitializerManager.addItem('page:addBlock', `dataBlocks.${infoInitializerItem.name}`, infoInitializerItem)
  }
}

export default PluginDataBlockInitializerClient;
```

<video controls width='100%' src="https://static-docs.nocobase.com/20240526170424_rec_.mp4"></video>

#### 6.2 Добавление в `Add block` во всплывающем окне

Необходимо добавить блок в `Add block` во всплывающем окне `Add new` блока `Table`.

![img_v3_02b4_fc47fe3a-35a1-4186-999c-0b48e6e001dg](https://static-docs.nocobase.com/img_v3_02b4_fc47fe3a-35a1-4186-999c-0b48e6e001dg.jpg)

Аналогично, определите `name` для `Add block` блока `Table`, который равен `popup:addNew:addBlock`, а для группы `Data Blocks` — `dataBlocks`.

Обновите файл `packages/plugins/@nocobase-sample/plugin-initializer-block-data/src/client/index.tsx`:

```diff
import { Plugin } from '@nocobase/client';
import { Info } from './component';
import { useInfoProps } from './schema';
import { infoSettings } from './settings';
import { infoInitializerItem } from './initializer';

export class PluginDataBlockInitializerClient extends Plugin {
  async load() {
    this.app.addComponents({ Info });
    this.app.addScopes({ useInfoProps });

    this.app.schemaSettingsManager.add(infoSettings);

    this.app.schemaInitializerManager.addItem('page:addBlock', `dataBlocks.${infoInitializerItem.name}`, infoInitializerItem)
+   this.app.schemaInitializerManager.addItem('popup:addNew:addBlock', `dataBlocks.${infoInitializerItem.name}`, infoInitializerItem)
  }
}

export default PluginDataBlockInitializerClient;
```

![img_v3_02b4_7062bfab-5a7b-439c-b385-92c5704b6b3g](https://static-docs.nocobase.com/img_v3_02b4_7062bfab-5a7b-439c-b385-92c5704b6b3g.jpg)

#### 6.3 Добавление в `Add block` мобильной версии

> Сначала активируйте плагин для мобильной версии, см. [Активация плагина](/welcome/getting-started/plugin#3-activate-the-plugin).

Добавьте блок в `Add block` мобильной версии. Способ получения `name` здесь не описывается.

Обновите файл `packages/plugins/@nocobase-sample/plugin-initializer-block-data/src/client/index.tsx`:

```diff
import { Plugin } from '@nocobase/client';
import { Info } from './component';
import { useInfoProps } from './schema';
import { infoSettings } from './settings';
import { infoInitializerItem } from './initializer';

export class PluginDataBlockInitializerClient extends Plugin {
  async load() {
    this.app.addComponents({ Info });
    this.app.addScopes({ useInfoProps });

    this.app.schemaSettingsManager.add(infoSettings);

    this.app.schemaInitializerManager.addItem('page:addBlock', `dataBlocks.${infoInitializerItem.name}`, infoInitializerItem)
    this.app.schemaInitializerManager.addItem('popup:addNew:addBlock', `dataBlocks.${infoInitializerItem.name}`, infoInitializerItem)
+   this.app.schemaInitializerManager.addItem('mobilePage:addBlock', `dataBlocks.${infoInitializerItem.name}`, infoInitializerItem)
  }
}

export default PluginDataBlockInitializerClient;
```

Для добавления в другие `Add block` достаточно знать соответствующий `name`.

## Сборка и развертывание в продакшен

Следуйте инструкциям из документации [Сборка и упаковка плагина](/development/your-fisrt-plugin#сборка-и-упаковка-плагина) для сборки и развертывания плагина.

Если вы используете клонированный исходный код, выполните полную сборку, чтобы собрать зависимости плагина:

```bash
yarn build
```

Если проект создан с помощью `create-nocobase-app`, выполните:

```bash
yarn build @nocobase-sample/plugin-initializer-block-data --tar
```

После этого в папке `storage/tar/@nocobase-sample/plugin-initializer-block-data.tar.gz` появится архив плагина. Установите его через [загрузку](/welcome/getting-started/plugin).
