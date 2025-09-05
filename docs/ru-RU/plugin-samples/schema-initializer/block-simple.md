# Добавление нового простого блока Simple Block

## Описание сценария

В NocoBase существует множество кнопок `Add block`, которые используются для добавления блоков в интерфейс. Некоторые из них связаны с таблицами данных и называются блоками данных (`Data Block`), а другие, не связанные с данными, называются простыми блоками (`Simple Block`).

![img_v3_02b4_a4529308-62e3-4fa7-be4d-5dcae332c49g](https://static-docs.nocobase.com/img_v3_02b4_a4529308-62e3-4fa7-be4d-5dcae332c49g.jpg)

Однако существующие типы блоков не всегда удовлетворяют потребности, поэтому может потребоваться создание пользовательских блоков. Данная статья посвящена созданию простого блока `Simple Block`.

## Описание примера

В этом примере будет создан блок для отображения изображений, который будет добавлен в меню `Add block` на страницах (`Page`), в таблицах (`Table`) и в мобильной версии.

Этот пример демонстрирует использование Initializer. Подробности о расширении блоков см. в документации [Расширения блоков](/plugin-samples/block).

Полный код примера доступен в [plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-initializer-block-simple).

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/20240522-181816.mp4" type="video/mp4" />
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
yarn pm create @nocobase-sample/plugin-initializer-block-simple
yarn pm enable @nocobase-sample/plugin-initializer-block-simple
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
- [Протокол UI Schema](/development/client/ui-schema/what-is-ui-schema): Подробное описание структуры схемы и роли каждого свойства.
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

Сначала необходимо определить имя блока, которое будет использоваться в различных местах.

Создайте файл `packages/plugins/@nocobase-sample/plugin-initializer-block-simple/src/client/constants.ts`:

```ts
export const BlockName = 'Image';
export const BlockNameLowercase = BlockName.toLowerCase();
```

### 2. Реализация компонента блока

#### 2.1 Определение компонента блока

В этом примере создается компонент блока для отображения изображений, названный `Image`.

Создайте файл `packages/plugins/@nocobase-sample/plugin-initializer-block-simple/src/client/component/Image.tsx`:

```tsx | pure
import React, { FC } from 'react';
import { withDynamicSchemaProps } from '@nocobase/client';
import { BlockName } from '../constants';

export const Image: FC<{ height?: number }> = withDynamicSchemaProps(({ height = 500 }) => {
  return <div style={{ height }}>
    <img
      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      src="https://picsum.photos/2000/500"
    />
  </div>
}, { displayName: BlockName })
```

Компонент `Image` — это функциональный компонент, обернутый в [withDynamicSchemaProps](/development/client/ui-schema/what-is-ui-schema#x-component-props-и-x-use-component-props), который обрабатывает динамические свойства из схемы.

Без учета `withDynamicSchemaProps` компонент `Image` является простым функциональным компонентом.

Экспортируйте компонент в `packages/plugins/@nocobase-sample/plugin-initializer-block-simple/src/client/component/index.ts`:

```tsx | pure
export * from './Image';
```

#### 2.2 Регистрация компонента блока

Зарегистрируйте компонент `Image` в системе через плагин.

```tsx | pure
import { Plugin } from '@nocobase/client';
import { Image } from './component'

export class PluginInitializerBlockSimpleClient extends Plugin {
  async load() {
    this.app.addComponents({ Image })
  }
}

export default PluginInitializerBlockSimpleClient;
```

#### 2.3 Проверка компонента блока

Существует два способа проверки компонента:

- Проверка через временную страницу: Создайте временную страницу, отрендерите компонент `Image` и проверьте, соответствует ли он требованиям.
- Проверка через документацию: Запустите документацию с помощью `yarn doc plugins/@nocobase-sample/plugin-initializer-block-simple` и проверьте с помощью примеров в документации (TODO).

Рассмотрим проверку через временную страницу. Создайте страницу, добавьте один или несколько компонентов `Image` с различными параметрами и проверьте их работу.

```tsx | pure
import React from 'react';
import { Plugin } from '@nocobase/client';
import { Image } from './component'

export class PluginInitializerBlockSimpleClient extends Plugin {
  async load() {
    this.app.addComponents({ Image })

    this.app.router.add('admin.image-component', {
      path: '/admin/image-component',
      Component: () => {
        return <>
          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <Image />
          </div>

          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <Image height={400} />
          </div>
        </>
      }
    })
  }
}

export default PluginInitializerBlockSimpleClient;
```

Перейдите по адресу `http://localhost:13000/admin/image-component`, чтобы увидеть содержимое тестовой страницы.

![20240526165057](https://static-docs.nocobase.com/20240526165057.png)

После проверки удалите тестовую страницу.

### 3. Определение схемы блока

#### 3.1 Определение схемы блока

Динамические страницы в NocoBase рендерятся через схемы, поэтому необходимо определить схему для добавления блока `Image` в интерфейс. Перед этим ознакомьтесь с:

- [Протокол UI Schema](/development/client/ui-schema/what-is-ui-schema): Подробное описание структуры схемы и роли каждого свойства.

Создайте файл `packages/plugins/@nocobase-sample/plugin-initializer-block-simple/src/client/schema/index.ts`:

```tsx | pure
import { ISchema } from "@nocobase/client";
import { BlockName, BlockNameLowercase } from "../constants";

export const imageSchema: ISchema = {
  type: 'void',
  'x-component': 'CardItem',
  properties: {
    [BlockNameLowercase]: {
      'x-component': BlockName,
    }
  }
};
```

Описание `imageSchema`:

- `type`: Тип, здесь `void`, указывающий на чистый UI-узел без данных.
- `x-decorator`: Декоратор, здесь используется компонент [CardItem](https://client.docs.nocobase.com/components/card-item), который оборачивает блоки для обеспечения стилей, компоновки и функциональности перетаскивания.
- `x-component`: Компонент, здесь `Image`, ранее определенный компонент.

Эта схема эквивалентна следующему React-компоненту:

```tsx | pure
<CardItem>
  <Image />
</CardItem>
```

#### 3.2 Проверка схемы блока

Аналогично проверке компонента, схему можно проверить через временную страницу или примеры в документации. Рассмотрим проверку через временную страницу:

```tsx | pure
import React from 'react';
import { Plugin, SchemaComponent } from '@nocobase/client';
import { Image } from './component'
import { imageSchema } from './schema'

export class PluginInitializerBlockSimpleClient extends Plugin {
  async load() {
    this.app.addComponents({ Image })

    this.app.router.add('admin.image-schema', {
      path: '/admin/image-schema',
      Component: () => {
        return <div style={{ marginTop: 20, marginBottom: 20 }}>
          <SchemaComponent schema={{ properties: { test: imageSchema } }} />
        </div>
      }
    })
  }
}

export default PluginInitializerBlockSimpleClient;
```

Подробности о `SchemaComponent` см. в [SchemaComponent](https://client.docs.nocobase.com/core/ui-schema/schema-component#schemacomponent-1).

Перейдите по адресу [http://localhost:13000/admin/image-schema](http://localhost:13000/admin/image-schema), чтобы увидеть содержимое тестовой страницы.

![20240526165408](https://static-docs.nocobase.com/20240526165408.png)

После проверки удалите тестовую страницу.

### 4. Определение элемента SchemaInitializer

Создайте файл `packages/plugins/@nocobase-sample/plugin-initializer-block-simple/src/client/initializer/index.ts`:

```ts
import { SchemaInitializerItemType, useSchemaInitializer } from '@nocobase/client';

import { useT } from '../locale';
import { imageSchema } from '../schema';
import { BlockName, BlockNameLowercase } from '../constants';

export const imageInitializerItem: SchemaInitializerItemType = {
  type: 'item',
  name: BlockNameLowercase,
  icon: 'FileImageOutlined',
  useComponentProps() {
    const { insert } = useSchemaInitializer();
    const t = useT()
    return {
      title: t(BlockName),
      onClick: () => {
        insert(imageSchema);
      },
    };
  },
}
```

- `type`: Тип, здесь `item`, указывающий на текстовый элемент с событием клика, которое вставляет новую схему.
- `name`: Уникальный идентификатор для различения элементов SchemaInitializer и операций с ними.
- `icon`: Иконка, список доступных иконок см. в [Ant Design Icons](https://ant.design/components/icon).
- `useComponentProps`: Возвращает объект с полями `title` (отображаемый текст) и `onClick` (обработчик клика).
- [useSchemaInitializer()](https://client.docs.nocobase.com/core/ui-schema/schema-initializer#useschemainitializer): Получает контекст `SchemaInitializerContext`.
  - `insert`: Вставляет новую схему.

Подробности о создании элементов SchemaInitializer см. в [Schema Initializer Item](https://client.docs.nocobase.com/core/ui-schema/schema-initializer#built-in-components-and-types).

### 5. Реализация SchemaSettings

#### 5.1 Определение SchemaSettings

Для полноценного блока требуется SchemaSettings для настройки свойств и операций. В этом примере реализована только операция `remove`, так как SchemaSettings не является основным фокусом.

Создайте файл `packages/plugins/@nocobase-sample/plugin-initializer-block-simple/src/client/settings/index.ts`:

```ts | pure
import { SchemaSettings } from "@nocobase/client";
import { BlockNameLowercase } from "../constants";

export const imageSettings = new SchemaSettings({
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
});
```

- `componentProps`:
  - `removeParentsIfNoChildren`: Указывает, удалять ли родительский узел, если у него нет дочерних.
  - `breakRemoveOn`: Условие остановки удаления. Поскольку `Add Block` автоматически оборачивает элементы в `Grid`, здесь задано `breakRemoveOn: { 'x-component': 'Grid' }`, чтобы предотвратить удаление `Grid`.

#### 5.2 Регистрация SchemaSettings

```ts
import { Plugin } from '@nocobase/client';
import { imageSettings } from './settings';

export class PluginInitializerBlockSimpleClient extends Plugin {
  async load() {
    // ...
    this.app.schemaSettingsManager.add(imageSettings)
  }
}

export default PluginInitializerBlockSimpleClient;
```

#### 5.3 Использование SchemaSettings

Обновите `imageSchema` в `packages/plugins/@nocobase-sample/plugin-initializer-block-simple/src/client/schema/index.ts`:

```diff
+ import { imageSettings } from "../settings";

const imageSchema: ISchema = {
  type: 'void',
  'x-decorator': 'CardItem',
+ 'x-settings': imageSettings.name,
  // ...
};
```

### 6. Добавление в `Add block`

В системе есть множество кнопок `Add block`, но их имена (`name`) различны.

![img_v3_02b4_049b0a62-8e3b-420f-adaf-a6350d84840g](https://static-docs.nocobase.com/img_v3_02b4_049b0a62-8e3b-420f-adaf-a6350d84840g.jpg)

#### 6.1 Добавление в `Add block` на уровне страницы

Чтобы добавить блок в `Add block` на уровне страницы, необходимо знать соответствующий `name`. Способ получения `name` описан в документации (TODO).

Из изображения видно, что `Add block` на уровне страницы имеет `name` `page:addBlock`, а группа `Other Blocks` — `name` `otherBlocks`.

Обновите файл `packages/plugins/@nocobase-sample/plugin-initializer-block-simple/src/client/index.tsx`:

```tsx | pure
import { Plugin } from '@nocobase/client';

import { Image } from './component'
import { imageSettings } from './settings';
import { imageInitializerItem } from './initializer';

export class PluginInitializerBlockSimpleClient extends Plugin {
  async load() {
    this.app.addComponents({ Image })
    this.app.schemaSettingsManager.add(imageSettings)
    this.app.schemaInitializerManager.addItem('page:addBlock', `otherBlocks.${imageInitializerItem.name}`, imageInitializerItem)
  }
}

export default PluginInitializerBlockSimpleClient;
```

Код регистрирует компонент `Image` в системе, чтобы `x-component: 'Image'` в `imageSchema` мог найти соответствующий компонент. Подробности см. в [Глобальная регистрация Component и Scope](/plugin-samples/component-and-scope/global).

Затем `imageSettings` добавляется в систему через [app.schemaSettingsManager.add](https://client.docs.nocobase.com/core/ui-schema/schema-settings-manager#schemasettingsmanageradd).

Элемент `imageInitializerItem` добавляется в подэлементы Initializer через [app.schemaInitializerManager.addItem](https://client.docs.nocobase.com/core/ui-schema/schema-initializer-manager#schemainitializermanageradditem), где `page:addBlock` — это `name` кнопки `Add block` на странице, а `otherBlocks` — `name` родительской группы.

При наведении на кнопку `Add block` появится новый тип блока `Image`. При клике на `Image` будет добавлен новый блок `Image`.

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/20240522-175523.mp4" type="video/mp4" />
</video>

#### 6.2 Добавление в `Add block` во всплывающем окне

Необходимо добавить блок в `Add block` во всплывающем окне `Add new` блока `Table`.

![img_v3_02b4_fc47fe3a-35a1-4186-999c-0b48e6e001dg](https://static-docs.nocobase.com/img_v3_02b4_fc47fe3a-35a1-4186-999c-0b48e6e001dg.jpg)

Аналогично, определите `name` для `Add block` блока `Table`, который равен `popup:addNew:addBlock`, а для группы `Other Blocks` — `otherBlocks`.

Обновите файл `packages/plugins/@nocobase-sample/plugin-initializer-block-simple/src/client/index.tsx`:

```diff
export class PluginInitializerBlockSimpleClient extends Plugin {
  async load() {
    this.app.addComponents({ Image })
    this.app.schemaSettingsManager.add(imageSettings)

    this.app.schemaInitializerManager.addItem('page:addBlock', `otherBlocks.${imageInitializerItem.name}`, imageInitializerItem)
+   this.app.schemaInitializerManager.addItem('popup:addNew:addBlock', `otherBlocks.${imageInitializerItem.name}`, imageInitializerItem)
  }
}
```

![img_v3_02b4_7062bfab-5a7b-439c-b385-92c5704b6b3g](https://static-docs.nocobase.com/img_v3_02b4_7062bfab-5a7b-439c-b385-92c5704b6b3g.jpg)

#### 6.3 Добавление в `Add block` мобильной версии

> Сначала активируйте плагин для мобильной версии, см. [Активация плагина](/welcome/getting-started/plugin#3-activate-the-plugin).

Добавьте блок в `Add block` мобильной версии. Способ получения `name` здесь не описывается.

Обновите файл `packages/plugins/@nocobase-sample/plugin-initializer-block-simple/src/client/index.tsx`:

```diff
export class PluginInitializerBlockSimpleClient extends Plugin {
  async load() {
    this.app.addComponents({ Image })
    this.app.schemaSettingsManager.add(imageSettings)

    this.app.schemaInitializerManager.addItem('page:addBlock', `otherBlocks.${imageInitializerItem.name}`, imageInitializerItem)
    this.app.schemaInitializerManager.addItem('popup:addNew:addBlock', `otherBlocks.${imageInitializerItem.name}`, imageInitializerItem)
+   this.app.schemaInitializerManager.addItem('mobilePage:addBlock', `otherBlocks.${imageInitializerItem.name}`, imageInitializerItem)
  }
}
```

![img_v3_02b4_ec873b25-5a09-4f3a-883f-1d722035799g](https://static-docs.nocobase.com/img_v3_02b4_ec873b25-5a09-4f3a-883f-1d722035799g.jpg)

Для добавления в другие `Add block` достаточно знать соответствующий `name`.

## Сборка и развертывание в продакшен

Следуйте инструкциям из документации [Сборка и упаковка плагина](/development/your-fisrt-plugin#сборка-и-упаковка-плагина) для сборки и развертывания плагина.

Если вы используете клонированный исходный код, выполните полную сборку, чтобы собрать зависимости плагина:

```bash
yarn build
```

Если проект создан с помощью `create-nocobase-app`, выполните:

```bash
yarn build @nocobase-sample/plugin-initializer-block-simple --tar
```

После этого в папке `storage/tar/@nocobase-sample/plugin-initializer-block-simple.tar.gz` появится архив плагина. Установите его через [загрузку](/welcome/getting-started/plugin).
