# Встроенный Initializer в блоке — настройка операций

## Описание сценария

Если создается сложный блок данных, он может включать несколько динамически добавляемых частей, одной из которых является настройка операций через соответствующий Initializer `Configure actions`. Этот Initializer отвечает за динамическое добавление кнопок для выполнения различных операций. Например, в блоке `Details` с помощью `Configure actions` можно добавить кнопки `Edit`, `Print` и другие.

![img_v3_02b4_9b80a4a0-6d9b-4e53-a544-f92c17d81d2g](https://static-docs.nocobase.com/img_v3_02b4_9b80a4a0-6d9b-4e53-a544-f92c17d81d2g.jpg)

## Описание примера

Этот пример основан на [Добавлении блока данных Data Block](/plugin-samples/schema-initializer/data-block) и реализует функциональность, аналогичную блоку `Details`, позволяя настраивать кнопки через `Configure actions`.

Полный код примера доступен в [plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-initializer-configure-actions).

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/20240522-191602.mp4" type="video/mp4" />
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
yarn pm create @nocobase-sample/plugin-initializer-configure-actions
yarn pm enable @nocobase-sample/plugin-initializer-configure-actions
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

### 1. Создание блока

Этот пример основан на [Добавлении блока данных Data Block](/plugin-samples/schema-initializer/data-block), поэтому скопируйте каталог `packages/plugins/@nocobase-sample/plugin-initializer-block-data/src/client` в `packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client`.

Затем измените файл `packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/index.tsx`:

```diff
import { Plugin } from '@nocobase/client';
- import { Info } from './component';
+ import { InfoV2 } from './component';

- export class PluginInitializerBlockDataClient extends Plugin {
+ export class PluginInitializerConfigureActionsClient extends Plugin {
  async load() {
-   this.app.addComponents({ Info })
+   this.app.addComponents({ InfoV2 })
    // ...
  }
}

- export default PluginInitializerBlockDataClient;
+ export default PluginInitializerConfigureActionsClient;
```

Обновите файл `packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/constants.ts`:

```ts
export const BlockName = 'InfoV2';
export const BlockNameLowercase = 'info-v2';
```

### 2. Реализация Initializer

#### 2.1 Определение Initializer

Создайте файл `packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/initializer/configureActions/configureActionsInitializer.ts`:

```tsx | pure
import { SchemaInitializer } from "@nocobase/client";
import { BlockNameLowercase } from "../../constants";

export const configureActionsInitializer = new SchemaInitializer({
  name: `${BlockNameLowercase}:configureActions`,
  icon: 'SettingOutlined',
  title: 'Configure actions',
  style: {
    marginLeft: 8,
  },
  items: []
});
```

Мы определили новый `SchemaInitializer` с пустым списком подэлементов.

- [SchemaInitializer](https://client.docs.nocobase.com/core/ui-schema/schema-initializer): Используется для создания экземпляра SchemaInitializer.
- `icon`: Иконка, список доступных иконок см. в [Ant Design Icons](https://ant.design/components/icon/).
- `title`: Заголовок кнопки.
- [items](https://client.docs.nocobase.com/core/ui-schema/schema-initializer#built-in-components-and-types): Подэлементы кнопки.

Экспортируйте его в `packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/initializer/configureActions/index.ts`:

```tsx | pure
export * from './configureActionsInitializer';
```

И обновите `packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/initializer/index.tsx`, чтобы экспортировать `configureActions`:

```diff
import React from 'react';
import { SchemaInitializerItemType, useSchemaInitializer } from '@nocobase/client'
import { CodeOutlined } from '@ant-design/icons';

+ export * from './configureActions'
// ...
```

#### 2.2 Регистрация Initializer

Обновите файл `packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/index.tsx`, чтобы импортировать и зарегистрировать Initializer:

```tsx | pure
// ...
import { infoInitializerItem, configureActionsInitializer } from './initializer';

export class PluginInitializerConfigureActionsClient extends Plugin {
  async load() {
    this.app.schemaInitializerManager.add(configureActionsInitializer)
    // ...
  }
}
```

#### 2.3 Использование Initializer

Обновите файл `packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/schema/index.ts`, добавив подузел `actions`:

```diff
// ...
+ import { configureActionsInitializer } from "../initializer";

function getInfoBlockSchema({ dataSource, collection }) {
  return {
    // ...
    properties: {
      info: {
        'x-component': BlockName,
        'x-use-component-props': 'useInfoProps',
+       properties: {
+         actions: {
+           type: 'void',
+           'x-component': 'ActionBar',
+           'x-component-props': {
+             layout: 'two-column',
+             style: { marginBottom: 20 }
+           },
+           'x-initializer': configureActionsInitializer.name,
+         }
+       }
      }
    }
  }
}
```

`Configure actions` обычно используется в паре с компонентом [ActionBar](https://client.docs.nocobase.com/components/action#actionbar).

В подузлы `Info` добавлено поле `actions`:

- `type: 'void'`: Тип контейнера.
- `x-component: 'ActionBar'`: Используется компонент [ActionBar](https://client.docs.nocobase.com/components/action#actionbar) для отображения кнопок.
- `x-initializer: configureActionsInitializer.name`: Используется созданный SchemaInitializer.
- `x-component-props.layout: 'two-column'`: Двухколоночный макет, см. пример [ActionBar two-column](https://client.docs.nocobase.com/components/action#two-column).

#### 2.4 Рендеринг подузлов блока

Обновите файл `packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/component/Info.tsx`, изменив компонент `Info`:

```diff
import React, { FC } from 'react';
import { withDynamicSchemaProps } from '@nocobase/client'

export interface InfoV2Props {
  collectionName: string;
  data?: any[];
  loading?: boolean;
+ children?: React.ReactNode;
}

export const InfoV2: FC<InfoV2Props> = withDynamicSchemaProps(({ children, collectionName, data }) => {
  return <div>
+   {children}
-   <div>collection: {collectionName}</div>
-   <div>data list: <pre>{JSON.stringify(data, null, 2)}</pre></div>
+   <div>data length: {data?.length}</div>
  </div>
}, { displayName: BlockName })
```

- `children`: Содержимое `properties` передается в `children` компонента `InfoV2`, поэтому достаточно отобразить `children`.

![img_v3_02b4_4c6cb675-789e-48d5-99ce-072984dcfc9g](https://static-docs.nocobase.com/img_v3_02b4_4c6cb675-789e-48d5-99ce-072984dcfc9g.jpg)

### 3. Реализация элементов Initializer

#### 3.1 Повторное использование: `Custom request` Action

Обновите файл `packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/initializer/configureActions/configureActionsInitializer.ts`:

```diff
export const configureActionsInitializer = new SchemaInitializer({
  name: 'info:configureActions',
  title: 'Configure actions',
  icon: 'SettingOutlined',
  items: [
+   {
+     name: 'customRequest',
+     title: '{{t("Custom request")}}',
+     Component: 'CustomRequestInitializer',
+   },
  ]
});
```

Для `Custom request` используется существующий компонент `CustomRequestInitializer`. Список других переиспользуемых элементов Initializer см. в документации (TODO).

![img_v3_02b4_0d439087-cfe1-4681-bfab-4e4bc3e34cbg](https://static-docs.nocobase.com/img_v3_02b4_0d439087-cfe1-4681-bfab-4e4bc3e34cbg.jpg)

#### 3.2 Пользовательский: `Custom Refresh` Action

Помимо использования существующих элементов Initializer, можно создать пользовательский Action. Подробные шаги по созданию пользовательских действий см. в [Добавление простого Action](/plugin-samples/schema-initializer/action-simple) и [Добавление Action с всплывающим окном](/plugin-samples/schema-initializer/action-modal).

Здесь мы реализуем Action `Custom Refresh`.

#### 3.2.1 Определение имени

Создайте файл `packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/initializer/configureActions/items/customRefresh/constants.ts`:

```ts
export const ActionName = 'Custom Request';
export const ActionNameLowercase = 'customRequest';
```

#### 3.2.2 Определение схемы

##### 3.2.2.1 Определение схемы

Создайте файл `packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/initializer/configureActions/items/customRefresh/schema.ts`:

```ts
import { ActionProps, useDataBlockRequest, ISchema } from "@nocobase/client";
import { useT } from "../../../../locale";

export const useCustomRefreshActionProps = (): ActionProps => {
  const { runAsync } = useDataBlockRequest();
  const t = useT();
  return {
    type: 'primary',
    title: t('Custom Refresh'),
    async onClick() {
      await runAsync();
    },
  }
}

export const customRefreshActionSchema: ISchema = {
  type: 'void',
  'x-component': 'Action',
  'x-toolbar': 'ActionSchemaToolbar',
  'x-use-component-props': 'useCustomRefreshActionProps'
}
```

Мы определили `customRefreshActionSchema` и динамические свойства `useCustomRefreshActionProps`.

`customRefreshActionSchema`:
- `type: 'void'`: Тип, не содержащий данных.
- `x-component: 'Action'`: Используется компонент [Action](https://client.docs.nocobase.com/components/action) для отображения кнопки.
- `title: 'Custom Refresh'`: Заголовок кнопки.
- `x-use-component-props: 'useCustomRefreshActionProps'`: Использует свойства, возвращаемые хуком `useCustomRefreshActionProps`. Поскольку схема сохраняется на сервере, используется строковое имя.
- `'x-toolbar': 'ActionSchemaToolbar'`: Используется с компонентом `Action`, скрывает `Initializer` в правом верхнем углу, оставляя только Drag и Settings.

`useCustomRefreshActionProps`:
- [useDataBlockRequest()](https://client.docs.nocobase.com/core/data-block/data-block-request-provider): Объект запроса блока данных, предоставляемый `DataBlockProvider`, используется для получения данных.
  - `runAsync`: Асинхронный метод для обновления данных блока.
- `type: 'primary'`: Тип кнопки — `primary`.
- `onClick`: Событие клика.

Экспортируйте схему в `packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/initializer/configureActions/items/customRefresh/index.ts`:

```ts
export * from './schema';
```

Обновите `packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/initializer/configureActions/index.ts`, чтобы экспортировать `customRefresh`:

```diff
export * from './configureActionsInitializer';
+ export * from './items/customRefresh';
```

##### 3.2.2.2 Регистрация контекста

Зарегистрируйте `useCustomRefreshActionProps` в контексте. Обновите файл `packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/index.tsx`:

```diff
// ...
- import { infoInitializerItem } from './initializer';
+ import { infoInitializerItem, useCustomRefreshActionProps } from './initializer';

export class PluginInitializerConfigureActionsClient extends Plugin {
  async load() {
    // ...
-   this.app.addScopes({ useInfoProps });
+   this.app.addScopes({ useInfoProps, useCustomRefreshActionProps });
  }
}
```

Подробности об использовании `SchemaComponentOptions` см. в [SchemaComponentOptions](https://client.docs.nocobase.com/core/ui-schema/schema-component#schemacomponentoptions) и [Глобальная регистрация Component и Scope](/plugin-samples/component-and-scope/global).

#### 3.2.3 Реализация настроек

##### 3.2.3.1 Определение настроек

Создайте файл `packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/initializer/configureActions/items/customRefresh/settings.ts`:

```tsx | pure
import { SchemaSettings } from "@nocobase/client";
import { ActionNameLowercase } from "./constants";

export const customRefreshActionSettings = new SchemaSettings({
  name: `actionSettings:${ActionNameLowercase}`,
  items: [
    {
      name: 'remove',
      type: 'remove',
    }
  ]
})
```

`customRefreshActionSettings`: Определена простая операция `remove`. Подробности о настройке SchemaSettings см. в [Schema Settings](https://client.docs.nocobase.com/core/ui-schema/schema-settings).

Экспортируйте настройки в `packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/initializer/configureActions/items/customRefresh/index.ts`:

```tsx | pure
export * from './settings';
```

##### 3.2.3.2 Регистрация настроек

Зарегистрируйте `customRefreshActionSettings` в системе. Обновите файл `packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/index.tsx`:

```diff
- import { infoInitializerItem, useCustomRefreshActionProps } from './initializer';
+ import { infoInitializerItem, useCustomRefreshActionProps, customRefreshActionSettings } from './initializer';

export class PluginInitializerConfigureActionsClient extends Plugin {
  async load() {
+   this.app.schemaSettingsManager.add(customRefreshActionSettings);
  }
}
```

##### 3.2.3.3 Использование настроек

Обновите файл `packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/initializer/configureActions/items/customRefresh/schema.ts`, добавив `x-settings` в `customRefreshActionSchema`:

```diff
+ import { customRefreshActionSettings } from "./settings";

export const customRefreshActionSchema: ISchema = {
  type: 'void',
  'x-component': 'Action',
+ 'x-settings': customRefreshActionSettings.name,
  title: 'Custom Refresh',
  'x-use-component-props': 'useCustomRefreshActionProps'
}
```

#### 3.2.4 Определение элемента SchemaInitializer

##### 3.2.4.1 Определение элемента SchemaInitializer

Обновите файл `packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/initializer/configureActions/items/customRefresh/initializer.ts`:

```tsx | pure
import { SchemaInitializerItemType, useSchemaInitializer } from "@nocobase/client";
import { customRefreshActionSchema } from "./schema";
import { ActionName } from "./constants";
import { useT } from "../../../../locale";

export const customRefreshActionInitializerItem: SchemaInitializerItemType = {
  type: 'item',
  name: ActionName,
  useComponentProps() {
    const { insert } = useSchemaInitializer();
    const t = useT();
    return {
      title: t(ActionName),
      onClick() {
        insert(customRefreshActionSchema)
      },
    };
  },
};
```

- `type: 'item'`: Тип элемента — текст, при клике вызывает событие `onClick`.
- `name: 'custom refresh'`: Уникальный идентификатор для различения элементов SchemaInitializer и операций с ними.
- `title: 'Custom Refresh'`: Заголовок кнопки.

Подробности о создании элементов SchemaInitializer см. в [Schema Initializer Item](https://client.docs.nocobase.com/core/ui-schema/schema-initializer#built-in-components-and-types).

Экспортируйте элемент в `packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/initializer/configureActions/index.ts`:

```tsx | pure
export * from './initializer';
```

##### 3.2.4.2 Использование элемента SchemaInitializer

Обновите файл `packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/initializer/configureActions/configureActionsInitializer.ts`, добавив `customRefreshActionInitializerItem` в `items`:

```diff
import { SchemaInitializer } from "@nocobase/client";
+ import { customRefreshActionInitializerItem } from "./items/customRefresh";

export const configureActionsInitializer = new SchemaInitializer({
  name: 'info:configureActions',
  title: 'Configure actions',
  icon: 'SettingOutlined',
  style: {
    marginLeft: 8,
  },
  items: [
    {
      name: 'customRequest',
      title: '{{t("Custom request")}}',
      Component: 'CustomRequestInitializer',
      'x-align': 'right',
    },
+   customRefreshActionInitializerItem
  ]
});
```

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/20240522-191602.mp4" type="video/mp4" />
</video>

Вы можете реализовать дополнительные действия `Action` по необходимости.

## Сборка и развертывание в продакшен

Следуйте инструкциям из документации [Сборка и упаковка плагина](/development/your-fisrt-plugin#сборка-и-упаковка-плагина) для сборки и развертывания плагина.

Если вы используете клонированный исходный код, выполните полную сборку, чтобы собрать зависимости плагина:

```bash
yarn build
```

Если проект создан с помощью `create-nocobase-app`, выполните:

```bash
yarn build @nocobase-sample/plugin-initializer-configure-actions --tar
```

После этого в папке `storage/tar/@nocobase-sample/plugin-initializer-configure-actions.tar.gz` появится архив плагина. Установите его через [загрузку](/welcome/getting-started/plugin).
