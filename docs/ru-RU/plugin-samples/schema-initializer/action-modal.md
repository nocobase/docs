# Добавление действия с модальным окном

## Описание сценария

В NocoBase существует множество кнопок `Configure actions`, используемых для добавления операционных кнопок в интерфейс.

![img_v3_02b4_51f4918f-d344-43b2-b19e-48dca709467g](https://static-docs.nocobase.com/img_v3_02b4_51f4918f-d344-43b2-b19e-48dca709467g.jpg)

Если существующие кнопки действий не полностью удовлетворяют потребности, можно добавить новые кнопки, создав подэлементы в `Configure actions`.

## Описание примера

В этом примере создается кнопка, которая при нажатии открывает модальное окно. В окне отображается документ, встроенный через iframe. Кнопка будет добавлена в блоки `Table`, `Details` и `Form` в разделе `Configure actions`.

Полный код примера доступен в [plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-initializer-action-modal).

<video controls width='100%' src="https://static-docs.nocobase.com/20240526172851_rec_.mp4"></video>

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
yarn pm create @nocobase-sample/plugin-initializer-action-modal
yarn pm enable @nocobase-sample/plugin-initializer-action-modal
```

Запустите проект:

```bash
yarn dev
```

После входа в систему перейдите по адресу [http://localhost:13000/admin/pm/list/local/](http://localhost:13000/admin/pm/list/local/), чтобы убедиться, что плагин установлен и активирован.

## Реализация функциональности

Перед началом работы с этим примером ознакомьтесь с основными концепциями:

- [Компонент Action](https://client.docs.nocobase.com/components/action)
- [Руководство по SchemaInitializer](/development/client/ui-schema/initializer): Используется для добавления блоков, полей, действий и других элементов в интерфейс.
- [API SchemaInitializer](https://client.docs.nocobase.com/core/ui-schema/schema-initializer): Описание API для добавления элементов в интерфейс.
- [UI Schema](/development/client/ui-schema/what-is-ui-schema): Определяет структуру и стиль интерфейса.
- [Дизайнер Designable](/development/client/ui-schema/designable): Используется для изменения схемы.

Структура проекта:

```bash
.
├── client # Клиентская часть плагина
│   ├── initializer # Инициализатор
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

## 1. Определение имени

Сначала определите имя действия, которое будет использоваться в различных местах.

Создайте файл `packages/plugins/@nocobase-sample/plugin-initializer-action-modal/src/client/constants.ts`:

```ts
export const ActionName = 'Open Document';
export const ActionNameLowercase = 'open-document';
```

## 2. Определение схемы

### 2.1 Определение схемы

Динамические страницы в NocoBase рендерятся через схемы, поэтому необходимо определить схему для добавления элементов в интерфейс. Ознакомьтесь с:

- [Компонент Action](https://client.docs.nocobase.com/components/action)
- [Компонент Action.Drawer](https://client.docs.nocobase.com/components/action#actiondrawer)
- [Протокол UI Schema](/development/client/ui-schema/what-is-ui-schema): Подробное описание структуры схемы и назначения атрибутов.

Создайте файл `packages/plugins/@nocobase-sample/plugin-initializer-action-modal/src/client/schema/index.ts`:

```ts
import { ISchema } from "@nocobase/client"
import { tStr } from "../locale";
import { ActionName } from "../constants";

export const createDocumentActionModalSchema = (blockComponent: string): ISchema => {
  return {
    type: 'void',
    'x-component': 'Action',
    title: tStr(ActionName),
    'x-component-props': {
      type: 'primary'
    },
    properties: {
      drawer: {
        type: 'void',
        'x-component': 'Action.Drawer',
        'x-component-props': {
          size: 'large'
        },
        properties: {
          iframe: {
            type: 'void',
            'x-component': 'iframe',
            'x-component-props': {
              src: `https://client.docs.nocobase.com/components/${blockComponent}`,
              style: {
                border: 'none',
                width: '100%',
                height: '100%'
              }
            },
          }
        }
      },
    },
  }
}
```

Функция `createDocumentActionModalSchema` принимает параметр `blockComponent` и возвращает схему, которая добавляет кнопку в интерфейс. При нажатии кнопка открывает модальное окно, содержащее iframe с документацией блока.

`createDocumentActionModalSchema`:
- `type: 'void'`: Указывает на чистый UI-компонент.
- `x-component: 'Action'`: [Компонент Action](https://client.docs.nocobase.com/components/action) для создания кнопки.
- `title`: Заголовок кнопки, переведенный через `tStr`.
- `x-component-props`: Свойства компонента `Action` (например, `type: 'primary'`).
- `properties`: Дочерние узлы:
  - `x-component: 'Action.Drawer'`: [Компонент Action.Drawer](https://client.docs.nocobase.com/components/action#actiondrawer) для модального окна.
  - `iframe`: Компонент iframe, отображающий документацию по указанному URL.

Подробности о схемах см. в [UI Schema](/development/client/ui-schema/what-is-ui-schema).

### 2.2 Проверка схемы

Существует два способа проверки схемы:

- Проверка через временную страницу: Создайте временную страницу, отрендерите схему и проверьте соответствие требованиям.
- Проверка через документацию: Запустите документацию с помощью `yarn doc plugins/@nocobase-sample/plugin-initializer-action-modal` и проверьте через примеры в документации (TODO).

Рассмотрим проверку через временную страницу. Создайте страницу, добавьте одну или несколько схем и проверьте их работу.

```tsx | pure
import React from 'react';
import { Plugin, SchemaComponent } from '@nocobase/client';
import { createDocumentActionModalSchema } from './schema';

export class PluginInitializerActionModalClient extends Plugin {
  async load() {
    this.app.router.add('admin.open-document-schema', {
      path: '/admin/open-document-schema',
      Component: () => {
        return <>
          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <SchemaComponent schema={{ properties: { test1: createDocumentActionModalSchema('table-v2') } }} />
          </div>
          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <SchemaComponent schema={{ properties: { test2: createDocumentActionModalSchema('details') } }} />
          </div>
        </>
      }
    })
  }
}

export default PluginInitializerActionModalClient;
```

Перейдите по адресу [http://localhost:13000/admin/open-document-schema](http://localhost:13000/admin/open-document-schema), чтобы увидеть содержимое тестовой страницы.

Подробности о `SchemaComponent` см. в [SchemaComponent](https://client.docs.nocobase.com/core/ui-schema/schema-component#schemacomponent-1).

<video controls width='100%' src="https://static-docs.nocobase.com/20240526171945_rec_.mp4"></video>

После проверки удалите тестовую страницу.

## 3. Определение элемента SchemaInitializer

Создайте файл `packages/plugins/@nocobase-sample/plugin-initializer-action-modal/src/client/initializer/index.ts`:

```ts
import { SchemaInitializerItemType, useSchemaInitializer } from "@nocobase/client"

import { useT } from "../locale";
import { createDocumentActionModalSchema } from '../schema';
import { ActionName, ActionNameLowercase } from "../constants";

export const createDocumentActionModalInitializerItem = (blockComponent: string): SchemaInitializerItemType => ({
  type: 'item',
  title: ActionName,
  name: ActionNameLowercase,
  useComponentProps() {
    const { insert } = useSchemaInitializer();
    const t = useT();
    return {
      title: t(ActionName),
      onClick: () => {
        insert(createDocumentActionModalSchema(blockComponent));
      },
    };
  },
})
```

`createDocumentActionModalInitializerItem` создает экземпляры `DocumentActionModal` для разных значений `blockComponent`.

- `type: 'item'`: Текстовый элемент с событием клика, вставляющий новую схему.
- `name`: Уникальный идентификатор для операций (создание, чтение, обновление, удаление).
- `useComponentProps`: Возвращает объект с `title` (заголовок) и `onClick` (обработчик клика).
- [useSchemaInitializer](https://client.docs.nocobase.com/core/ui-schema/schema-initializer#useschemainitializer): Предоставляет методы для операций с схемой.

Подробности о создании SchemaInitializer см. в [Schema Initializer Item](https://client.docs.nocobase.com/core/ui-schema/schema-initializer#built-in-components-and-types).

## 4. Реализация SchemaSettings

### 4.1 Определение SchemaSettings

Добавленные через `createDocumentActionInitializerItem` элементы нельзя удалить. Для этого используйте [Schema Settings](https://client.docs.nocobase.com/core/ui-schema/schema-settings).

Создайте файл `packages/plugins/@nocobase-sample/plugin-initializer-action-modal/src/client/settings/index.ts`:

```ts
import { SchemaSettings } from "@nocobase/client";
import { ActionNameLowercase } from "../constants";

export const documentActionModalSettings = new SchemaSettings({
  name: `actionSettings:${ActionNameLowercase}`,
  items: [
    {
      name: 'remove',
      type: 'remove',
    }
  ]
});
```

### 4.2 Регистрация SchemaSettings

Обновите `index.tsx`:

```ts
import { Plugin } from '@nocobase/client';
import { documentActionModalSettings } from './settings';

export class PluginInitializerActionModalClient extends Plugin {
  async load() {
    this.app.schemaSettingsManager.add(documentActionModalSettings);
  }
}

export default PluginInitializerActionModalClient;
```

### 4.3 Использование SchemaSettings

Обновите `createDocumentActionModalSchema` в `schema/index.ts`, добавив `x-settings`:

```diff
+ import { documentActionModalSettings } from '../settings';

export const createDocumentActionModalSchema = (blockComponent: string): ISchema => {
  return {
    type: 'void',
    'x-component': 'Action',
+   'x-settings': documentActionModalSettings.name,
    // ...
  }
}
```

## 5. Добавление в Configure Actions на странице

Кнопки `Configure actions` имеют разные имена (`name`). Необходимо добавить действие в блоки `Table`, `Details` и `Form`.

Определите соответствующие имена (см. документацию TODO).

Обновите `index.tsx`:

```diff
import { Plugin } from '@nocobase/client';
import { documentActionModalSettings } from './settings';
+ import { createDocumentActionModalInitializerItem } from './initializer';

export class PluginInitializerActionModalClient extends Plugin {
  async load() {
    this.app.schemaSettingsManager.add(documentActionModalSettings);
+   this.app.schemaInitializerManager.addItem('table:configureActions', 'open-document', createDocumentActionModalInitializerItem('table-v2'));
+   this.app.schemaInitializerManager.addItem('details:configureActions', 'open-document', createDocumentActionModalInitializerItem('details'));
+   this.app.schemaInitializerManager.addItem('createForm:configureActions', 'open-document', createDocumentActionModalInitializerItem('form-v2'));
  }
}

export default PluginInitializerActionModalClient;
```

<video controls width='100%' src="https://static-docs.nocobase.com/20240526172851_rec_.mp4"></video>

## 6. Мультиязычность

:::warning
Изменения в файлах локализации вступают в силу только после перезапуска сервиса.
:::

### 6.1 Английский

Обновите `en-US.json`:

```json
{
  "Open Document": "Open Document"
}
```

### 6.2 Китайский

Обновите `zh-CN.json`:

```json
{
  "Open Document": "打开文档"
}
```

Для поддержки других языков добавьте соответствующие файлы.

Управляйте языками через [http://localhost:13000/admin/settings/system-settings](http://localhost:13000/admin/settings/system-settings) и переключайте их в правом верхнем углу.

![20240611113758](https://static-docs.nocobase.com/20240611113758.png)

## 7. Сборка и развертывание в продакшен

Следуйте инструкциям из [Сборка и упаковка плагина](/development/your-fisrt-plugin#build-and-package-plugins).

Для клонированного исходного кода выполните полную сборку:

```bash
yarn build
```

Для проекта, созданного с помощью `create-nocobase-app`:

```bash
yarn build @nocobase-sample/plugin-initializer-action-modal --tar
```

Архив плагина появится в `storage/tar/@nocobase-sample/plugin-initializer-action-modal.tar.gz`. Установите его через [загрузку](/welcome/getting-started/plugin).
