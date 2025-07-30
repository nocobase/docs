# Добавление простого действия

## Описание сценария

NocoBase предоставляет различные кнопки `Configure actions` для добавления действий в интерфейс.

![img_v3_02b4_51f4918f-d344-43b2-b19e-48dca709467g](https://static-docs.nocobase.com/img_v3_02b4_51f4918f-d344-43b2-b19e-48dca709467g.jpg)

Если существующие кнопки действий не полностью удовлетворяют потребности, можно добавить новые кнопки, создав подэлементы в `Configure actions`.

Термин "простое действие" в заголовке означает действия, не требующие всплывающего окна. Подробности о добавлении действий с модальным окном см. в [Добавление действия с модальным окном](/plugin-samples/schema-initializer/action-modal).

## Описание примера

В этом примере создается кнопка, которая при нажатии открывает документацию соответствующего блока. Кнопка будет добавлена в блоки `Table`, `Details` и `Form` в разделе `Configure actions`.

Полный код примера доступен в [plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-initializer-action-simple).

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/20240522-185359.mp4" type="video/mp4" />
</video>

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
yarn pm create @nocobase-sample/plugin-initializer-action-simple
yarn pm enable @nocobase-sample/plugin-initializer-action-simple
```

Запустите проект:

```bash
yarn dev
```

После входа в систему перейдите по адресу [http://localhost:13000/admin/pm/list/local/](http://localhost:13000/admin/pm/list/local/), чтобы убедиться, что плагин установлен и активирован.

## Реализация функциональности

Перед началом работы с этим примером ознакомьтесь с основными концепциями:

- [Компонент Action](https://client.docs.nocobase.com/components/action)
- [Руководство по SchemaInitializer](/development/client/ui-schema/initializer): Используется для добавления блоков, полей и действий в интерфейс.
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

### 1. Определение имени

Сначала определите имя действия, которое будет использоваться в различных местах.

Создайте файл `packages/plugins/@nocobase-sample/plugin-initializer-action-simple/src/client/constants.ts`:

```ts
export const ActionName = 'Document';
export const ActionNameLowercase = ActionName.toLowerCase();
```

### 2. Определение схемы

#### 2.1 Определение схемы

Динамические страницы в NocoBase рендерятся через схемы, поэтому необходимо определить схему для добавления кнопки в интерфейс. Ознакомьтесь с:

- [Компонент Action](https://client.docs.nocobase.com/components/action)
- [Протокол UI Schema](/development/client/ui-schema/what-is-ui-schema): Подробное описание структуры и функций атрибутов схемы.

Создайте файл `packages/plugins/@nocobase-sample/plugin-initializer-action-simple/src/client/schema/index.ts`:

```ts
import { useFieldSchema } from '@formily/react';
import { ISchema } from "@nocobase/client"
import { useT } from '../locale';
import { ActionName } from '../constants';

export function useDocumentActionProps() {
  const fieldSchema = useFieldSchema();
  const t = useT();
  return {
    title: t(ActionName),
    type: 'primary',
    onClick() {
      window.open(fieldSchema['x-doc-url'])
    }
  }
}

export const createDocumentActionSchema = (blockComponent: string): ISchema & { 'x-doc-url': string } => {
  return {
    type: 'void',
    'x-component': 'Action',
    'x-doc-url': `https://client.docs.nocobase.com/components/${blockComponent}`,
    'x-use-component-props': 'useDocumentActionProps',
  }
}
```

Функция `createDocumentActionSchema` принимает параметр `blockComponent` и возвращает схему, которая добавляет кнопку в интерфейс. При нажатии кнопка открывает документацию соответствующего блока.

`createDocumentActionSchema`:
- `type: 'void'`: Указывает на чистый UI-компонент.
- `x-component: 'Action'`: [Компонент Action](https://client.docs.nocobase.com/components/action) для создания кнопки.
- `x-doc-url`: Пользовательское свойство схемы, указывающее URL документации.
- `x-use-component-props: 'useDocumentActionProps'`: Динамические свойства, подробности см. в [документации](/development/client/ui-schema/what-is-ui-schema#x-component-props-и-x-use-component-props).

`useDocumentActionProps()`:
- [useFieldSchema()](https://client.docs.nocobase.com/core/ui-schema/designable#usefieldschema): Получает схему текущего узла.
- `type: 'primary'`: Тип кнопки.
- `onClick`: Событие клика, открывает документацию блока.

Подробности о схемах см. в [UI Schema](/development/client/ui-schema/what-is-ui-schema).

### 3. Определение элемента SchemaInitializer

Создайте файл `packages/plugins/@nocobase-sample/plugin-initializer-action-simple/src/client/initializer/index.ts`:

```ts
import { SchemaInitializerItemType, useSchemaInitializer } from '@nocobase/client';
import { createDocumentActionSchema } from '../schema';
import { useT } from '../locale';
import { ActionNameLowercase } from '../constants';

export const createDocumentActionInitializerItem = (blockComponent: string): SchemaInitializerItemType => {
  return {
    name: ActionNameLowercase,
    type: 'item',
    useComponentProps() {
      const { insert } = useSchemaInitializer();
      const t = useT();
      return {
        title: t('Document'),
        onClick: () => {
          insert(createDocumentActionSchema(blockComponent));
        },
      };
    },
  };
};
```

`createDocumentActionInitializerItem`:
- `name`: Уникальный идентификатор для операций.
- `type: 'item'`: Текстовый элемент с событием клика.
- `useComponentProps`: Возвращает свойства для элемента:
  - `title`: Заголовок кнопки, переведенный через `useT`.
  - `onClick`: Вставляет схему через `insert` из [useSchemaInitializer](https://client.docs.nocobase.com/core/ui-schema/schema-initializer#useschemainitializer).

### 4. Реализация SchemaSettings

#### 4.1 Определение SchemaSettings

Добавленные через `createDocumentActionInitializerItem` элементы нельзя удалить. Для этого используйте [Schema Settings](https://client.docs.nocobase.com/core/ui-schema/schema-settings).

Создайте файл `packages/plugins/@nocobase-sample/plugin-initializer-action-simple/src/client/settings/index.ts`:

```ts
import { SchemaSettings } from "@nocobase/client";

import { ActionNameLowercase } from "../constants";

export const documentActionSettings = new SchemaSettings({
  name: `actionSettings:${ActionNameLowercase}`,
  items: [
    {
      name: 'remove',
      type: 'remove',
    }
  ]
});
```

#### 4.2 Регистрация SchemaSettings

Обновите `index.tsx`:

```diff
import { Plugin } from '@nocobase/client';
import { useDocumentActionProps } from './schema';
+ import { documentActionSettings } from './settings';

export class PluginInitializerActionSimpleClient extends Plugin {
  async load() {
    this.app.addScopes({ useDocumentActionProps });
+   this.app.schemaSettingsManager.add(documentActionSettings);
  }
}

export default PluginInitializerActionSimpleClient;
```

#### 4.3 Использование SchemaSettings

Обновите `createDocumentActionSchema` в `schema/index.ts`:

```diff
+ import { documentActionSettings } from '../settings';

export const createDocumentActionSchema = (blockComponent: string): ISchema & { 'x-doc-url': string } => {
  return {
    type: 'void',
    'x-component': 'Action',
+   'x-settings': documentActionSettings.name,
    // ...
  }
}
```

### 5. Добавление в Configure Actions

Кнопки `Configure actions` имеют разные имена (`name`). Необходимо добавить действие в блоки `Table`, `Details` и `Form`.

Определите соответствующие имена (см. документацию TODO).

Обновите `index.tsx`:

```diff
import { Plugin } from '@nocobase/client';
import { useDocumentActionProps } from './schema';
import { documentActionSettings } from './settings';
+ import { createDocumentActionInitializerItem } from './initializer';

export class PluginInitializerActionSimpleClient extends Plugin {
  async load() {
    this.app.addScopes({ useDocumentActionProps });
    this.app.schemaSettingsManager.add(documentActionSettings);
+   this.app.schemaInitializerManager.addItem('table:configureActions', 'document', createDocumentActionInitializerItem('table-v2'));
+   this.app.schemaInitializerManager.addItem('details:configureActions', 'document', createDocumentActionInitializerItem('details'));
+   this.app.schemaInitializerManager.addItem('createForm:configureActions', 'document', createDocumentActionInitializerItem('form-v2'));
  }
}

export default PluginInitializerActionSimpleClient;
```

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/20240522-185359.mp4" type="video/mp4" />
</video>

### 6. Мультиязычность

После изменения файлов мультиязычности необходимо перезапустить сервис, чтобы изменения вступили в силу.

#### 6.1 Английский

Обновите `en-US.json`:

```json
{
  "Document": "Document"
}
```

#### 6.2 Китайский

Обновите `zh-CN.json`:

```json
{
  "Document": "文档"
}
```

Для поддержки других языков добавьте соответствующие файлы.

Добавьте языки через [http://localhost:13000/admin/settings/system-settings](http://localhost:13000/admin/settings/system-settings) и переключайте их в правом верхнем углу.

![20240611113758](https://static-docs.nocobase.com/20240611113758.png)

### 7. Сборка и развертывание в продакшен

Следуйте инструкциям из [Сборка и упаковка плагина](/development/your-fisrt-plugin#сборка-и-упаковка-плагина).

Для клонированного исходного кода выполните полную сборку:

```bash
yarn build
```

Для проекта, созданного с помощью `create-nocobase-app`:

```bash
yarn build @nocobase-sample/plugin-initializer-action-simple --tar
```

Архив плагина появится в `storage/tar/@nocobase-sample/plugin-initializer-action-simple.tar.gz`. Установите его через [загрузку](/welcome/getting-started/plugin).
