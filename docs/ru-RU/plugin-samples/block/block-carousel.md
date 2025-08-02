# Блок `Carousel`

## Описание сценария

В NocoBase есть множество кнопок `Add block`, которые используются для добавления блоков в интерфейс, но существующие типы блоков не всегда удовлетворяют потребности. В таких случаях необходимо разрабатывать пользовательские блоки в соответствии с требованиями.

Блоки, связанные с таблицами данных, называются **данными блоками** (`Data Block`), а блоки, не связанные с таблицами данных, называются **простыми блоками** (`Simple Block`). Данная статья посвящена примеру создания простого блока `Simple Block`.

## Описание примера

В этом примере мы создадим блок `Carousel` на основе компонента [Carousel](https://ant.design/components/carousel) из Ant Design и добавим его в меню `Add block` на страницах `Page`, `Table` и в мобильной версии.

Полный код примера можно найти в репозитории [plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-block-carousel).

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/20240603155655_rec_.mp4" type="video/mp4" />
</video>

## Инициализация плагина

Следуя инструкциям из документа [Создание вашего первого плагина](/development/your-fisrt-plugin), если у вас нет проекта, создайте его. Если проект уже существует или вы клонировали исходный код, пропустите этот шаг.

```bash
yarn create nocobase-app my-nocobase-app -d sqlite
cd my-nocobase-app
yarn install
yarn nocobase install
```

Затем инициализируйте плагин и добавьте его в систему:

```bash
yarn pm create @nocobase-sample/plugin-block-carousel
yarn pm enable @nocobase-sample/plugin-block-carousel
```

Запустите проект:

```bash
yarn dev
```

После входа в систему перейдите по адресу [http://localhost:13000/admin/pm/list/locale/](http://localhost:13000/admin/pm/list/locale/), чтобы убедиться, что плагин установлен и активирован.

## Реализация функционала

Перед реализацией примера необходимо ознакомиться с основными понятиями:

- [Carousel от Ant Design](https://ant.design/components/carousel)
- [Руководство по SchemaInitializer](/development/client/ui-schema/initializer): для добавления блоков, полей и операций в интерфейс.
- [API SchemaInitializer](https://client.docs.nocobase.com/core/ui-schema/schema-initializer): для добавления элементов в интерфейс.
- [Протокол UI Schema](/development/client/ui-schema/what-is-ui-schema): подробное описание структуры Schema и роли каждого атрибута.
- [Дизайнер Designable](/development/client/ui-schema/designable): для изменения Schema.

Структура проекта:

```bash
.
├── client # Клиентская часть плагина
│   ├── initializer # Инициализатор
│   ├── component # Компонент блока
│   ├── index.tsx # Точка входа клиентской части
│   ├── locale.ts # Утилиты для мультиязычности
│   ├── constants.ts # Константы
│   ├── schema # Schema
│   └── settings # Настройки Schema
├── locale # Файлы мультиязычности
│   ├── en-US.json # Английский
│   └── zh-CN.json # Китайский
├── index.ts # Точка входа серверной части
└── server # Серверная часть плагина
```

### 1. Определение имени

Сначала нужно определить имя блока, которое будет использоваться в различных местах.

Создайте файл `packages/plugins/@nocobase-sample/plugin-block-carousel/src/client/constants.ts`:

```ts
export const BlockName = 'Carousel';
export const BlockNameLowercase = BlockName.toLowerCase();
```

### 2. Реализация компонента блока

#### 2.1 Определение компонента блока

Создайте файл `packages/plugins/@nocobase-sample/plugin-block-carousel/src/client/component/Carousel.tsx` со следующим содержимым:

```tsx | pure
import React, { FC } from 'react';
import { Carousel as AntdCarousel, Result, CarouselProps as AntdCarouselProps } from 'antd';
import { withDynamicSchemaProps } from '@nocobase/client';
import { BlockName } from './constants';

export interface CarouselProps extends AntdCarouselProps {
  images?: { url: string; title?: string }[];
  /**
   * @default 300
   */
  height?: number;
  /**
   * @default 'cover'
   */
  objectFit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
}

export const Carousel: FC<CarouselProps> = withDynamicSchemaProps((props) => {
  const { images, height = 300, objectFit = 'cover', ...carouselProps } = props;
  return (images && images.length) ? (
    <AntdCarousel {...carouselProps}>
      {images.map((image) => (
        <div key={image.url}>
          <img key={image.title} src={image.url} alt={image.title} style={{ height, width: '100%', objectFit }} />
        </div>
      ))}
    </AntdCarousel>
  ) : <Result status='404' />
}, { displayName: BlockName })
```

Компонент `Carousel` — это функциональный компонент, обёрнутый в `withDynamicSchemaProps`, который используется для обработки динамических свойств из Schema ([подробности](/development/client/ui-schema/what-is-ui-schema#x-component-props-и-x-use-component-props)).

Без учёта `withDynamicSchemaProps`, `Carousel` — это простой функциональный компонент.

Экспортируйте компонент в `packages/plugins/@nocobase-sample/plugin-block-carousel/src/client/component/index.ts`:

```tsx | pure
export * from './Carousel';
```

#### 2.2 Регистрация компонента блока

Зарегистрируйте компонент `Carousel` в системе через плагин.

```tsx | pure
import { Plugin } from '@nocobase/client';
import { Carousel } from './component';

export class PluginBlockCarouselClient extends Plugin {
  async load() {
    this.app.addComponents({ Carousel })
  }
}

export default PluginBlockCarouselClient;
```

#### 2.3 Проверка компонента блока

Компонент можно проверить двумя способами:

- **Проверка на временной странице**: Создайте временную страницу, отрендерьте компонент `Carousel` и проверьте, соответствует ли он требованиям.
- **Проверка через примеры документации**: Запустите документацию с помощью команды `yarn doc plugins/@nocobase-sample/plugin-block-carousel` и проверьте через примеры документации (TODO).

Рассмотрим пример с **временной страницей**. Создайте страницу, добавьте один или несколько компонентов `Carousel` с разными параметрами и проверьте их работу.

```tsx | pure
import React from 'react';
import { Plugin } from '@nocobase/client';
import { Carousel } from './component';

export class PluginBlockCarouselClient extends Plugin {
  async load() {
    this.app.addComponents({ Carousel })

    this.app.router.add('admin.carousel-component', {
      path: '/admin/carousel-component',
      Component: () => {
        const images = [{ url: 'https://picsum.photos/id/1/1200/300' }, { url: 'https://picsum.photos/id/2/1200/300' }];
        return <>
          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <Carousel />
          </div>

          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <Carousel images={images} />
          </div>

          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <Carousel images={images} height={100} />
          </div>

          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <Carousel images={images} objectFit='contain' />
          </div>

          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <Carousel images={images} autoplay />
          </div>
        </>
      }
    });
  }
}

export default PluginBlockCarouselClient;
```

Перейдите по адресу `http://localhost:13000/admin/carousel-component`, чтобы увидеть содержимое тестовой страницы.

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/20240603155918_rec_.mp4" type="video/mp4" />
</video>

После проверки удалите тестовую страницу.

### 3. Определение схемы блока

#### 3.1 Определение схемы блока

Динамические страницы NocoBase рендерятся с использованием Schema, поэтому необходимо определить Schema для добавления блока `Carousel` в интерфейс. Перед этим ознакомьтесь с:

- [Протокол UI Schema](/development/client/ui-schema/what-is-ui-schema): подробное описание структуры Schema и роли каждого атрибута.

Создайте файл `packages/plugins/@nocobase-sample/plugin-block-carousel/src/client/schema/index.ts`:

```tsx | pure
import { ISchema } from '@nocobase/client';
import { useFieldSchema } from '@formily/react'

import { BlockName, BlockNameLowercase } from '../constants';

export function useCarouselBlockProps() {
  const fieldSchema = useFieldSchema();
  return fieldSchema.parent?.['x-decorator-props']?.[BlockNameLowercase]
}

export const carouselSchema: ISchema = {
  type: 'void',
  'x-component': 'CardItem',
  'x-decorator-props': {
    [BlockNameLowercase]: {},
  },
  properties: {
    carousel: {
      type: 'void',
      'x-component': BlockName,
      'x-use-component-props': 'useCarouselBlockProps'
    }
  }
};
```

`carouselSchema`:

- `type`: Тип, здесь `void`, указывает на чистый UI-узел без данных.
- `'x-component': 'CardItem'`: Компонент [CardItem](https://client.docs.nocobase.com/components/card-item), используется для стилизации, компоновки и поддержки перетаскивания блоков.
- `x-decorator-props`: Хранит свойства компонента `Carousel`.
- `properties`: Дочерние узлы.
  - `carousel`:
    - `'x-component': BlockName`: Компонент `Carousel`.
    - `'x-use-component-props': 'useCarouselBlockProps'`: Для динамического получения свойств компонента `Carousel`.

Этот Schema эквивалентен следующему React-компоненту:

```tsx | pure
<CardItem>
  <Carousel {...useCarouselBlockProps()} />
</CardItem>
```

#### 3.2 Регистрация области видимости

Зарегистрируйте `useCarouselBlockProps` в системе, чтобы [x-use-component-props](/development/client/ui-schema/what-is-ui-schema#x-component-props-и-x-use-component-props) мог найти соответствующую область видимости.

```tsx | pure
import { Plugin } from '@nocobase/client';
import { Carousel } from './component';
import { useCarouselBlockProps } from './schema';

export class PluginBlockCarouselClient extends Plugin {
  async load() {
    this.app.addComponents({ Carousel })
    this.app.addScopes({ useCarouselBlockProps });
  }
}

export default PluginBlockCarouselClient;
```

Подробности о регистрации областей видимости см. в [Глобальная регистрация компонента и области видимости](/plugin-samples/component-and-scope/global).

#### 3.3 Проверка схемы блока

Как и с компонентом, схему можно проверить через временную страницу или примеры документации. Рассмотрим проверку на временной странице:

```tsx | pure
import React from 'react';
import { Plugin, SchemaComponent } from '@nocobase/client';
import { Carousel } from './component';
import { carouselSchema } from './schema';

export class PluginBlockCarouselClient extends Plugin {
  async load() {
    this.app.addComponents({ Carousel })
    this.app.addScopes({ useCarouselBlockProps });

    this.app.router.add('admin.carousel-schema', {
      path: '/admin/carousel-schema',
      Component: () => {
        const images = [{ url: 'https://picsum.photos/id/1/1200/300' }, { url: 'https://picsum.photos/id/2/1200/300' }];
        return <>
          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <SchemaComponent schema={{ properties: { test1: carouselSchema } }} />
          </div>
          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <SchemaComponent schema={{ properties: { test2: { ...carouselSchema, 'x-decorator-props': { carousel: { images, height: 100 } } } } }} />
          </div>
          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <SchemaComponent schema={{ properties: { test3: { ...carouselSchema, 'x-decorator-props': { carousel: { images, objectFit: 'contain' } } } } }} />
          </div>
          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <SchemaComponent schema={{ properties: { test4: { ...carouselSchema, 'x-decorator-props': { carousel: { images, autoplay: true } } } } }} />
          </div>
        </>
      }
    });
  }
}

export default PluginBlockCarouselClient;
```

Подробности о `SchemaComponent` см. в документации [SchemaComponent](https://client.docs.nocobase.com/core/ui-schema/schema-component#schemacomponent-1).

Перейдите по адресу [http://localhost:13000/admin/carousel-schema](http://localhost:13000/admin/carousel-schema), чтобы увидеть содержимое тестовой страницы.

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/20240603155918_rec_.mp4" type="video/mp4" />
</video>

После проверки удалите тестовую страницу.

### 4. Определение элемента инициализатора Schema

Создайте файл `packages/plugins/@nocobase-sample/plugin-block-carousel/src/client/initializer/index.ts`:

```ts
import { SchemaInitializerItemType, useSchemaInitializer } from '@nocobase/client';

import { carouselSchema } from '../schema';
import { BlockName, BlockNameLowercase } from '../constants';
import { useT } from '../locale';

export const carouselInitializerItem: SchemaInitializerItemType = {
  type: 'item',
  name: BlockNameLowercase,
  icon: 'PlayCircleOutlined',
  useComponentProps() {
    const { insert } = useSchemaInitializer();
    const t = useT();
    return {
      title: t(BlockName),
      onClick: () => {
        insert(carouselSchema);
      },
    };
  },
}
```

- `type`: Тип, здесь `item`, указывает на текстовый элемент с событием клика, которое вставляет новый Schema.
- `name`: Уникальный идентификатор для различия элементов Schema и операций CRUD.
- `icon`: Иконка, см. [Ant Design Icons](https://ant.design/components/icon).
- `useComponentProps`: Возвращает объект с свойствами `title` (текст для отображения) и `onClick` (обработчик клика).
- [useSchemaInitializer()](https://client.docs.nocobase.com/core/ui-schema/schema-initializer#useschemainitializer): Получает контекст `SchemaInitializerContext`.
  - `insert`: Вставляет новый Schema.
- `useT()`: Утилита для мультиязычности.

Подробности о Schema Initializer Item см. в [Schema Initializer Item](https://client.docs.nocobase.com/core/ui-schema/schema-initializer#built-in-components-and-types).

### 5. Добавление в меню `Add block`

В системе есть множество кнопок `Add block`, но их **имена различаются**.

![img_v3_02b4_049b0a62-8e3b-420f-adaf-a6350d84840g](https://static-docs.nocobase.com/img_v3_02b4_049b0a62-8e3b-420f-adaf-a6350d84840g.jpg)

#### 5.1 Добавление в `Add block` на уровне страницы

Чтобы добавить блок в меню `Add block` на уровне страницы, нужно знать соответствующее имя (`name`). Способ получения имени будет описан позже (TODO).

По предоставленному изображению видно, что имя `Add block` на уровне страницы — `page:addBlock`, а имя раздела `Other Blocks` — `otherBlocks`.

Обновите файл `packages/plugins/@nocobase-sample/plugin-block-carousel/src/client/index.tsx`:

```tsx | pure
import { Plugin } from '@nocobase/client';

import { Carousel } from './component';
import { carouselSchema, useCarouselBlockProps } from './schema';
import { carouselSettings } from './settings';
import { carouselInitializerItem } from './initializer';

export class PluginBlockCarouselClient extends Plugin {
  async load() {
    this.app.addComponents({ Carousel })
    this.app.schemaSettingsManager.add(carouselSettings);
    this.app.addScopes({ useCarouselBlockProps });

    this.app.schemaInitializerManager.addItem('page:addBlock', `otherBlocks.${carouselInitializerItem.name}`, carouselInitializerItem)
  }
}

export default PluginBlockCarouselClient;
```

Код сначала регистрирует компонент `Carousel` в системе, чтобы `x-component: 'Carousel'` в `carouselSchema` мог найти соответствующий компонент. Подробности см. в [Глобальная регистрация компонента и области видимости](/plugin-samples/component-and-scope/global).

Затем `carouselSettings` добавляется в систему с помощью [app.schemaSettingsManager.add](https://client.docs.nocobase.com/core/ui-schema/schema-settings-manager#schemasettingsmanageradd).

Элемент `carouselInitializerItem` добавляется в соответствующий инициализатор с помощью [app.schemaInitializerManager.addItem](https://client.docs.nocobase.com/core/ui-schema/schema-initializer-manager#schemainitializermanageradditem), где `page:addBlock` — имя `Add block` на уровне страницы, а `otherBlocks` — имя родительского раздела.

Наведите курсор на кнопку `Add block`, и вы увидите новый тип блока `Image`. Нажмите на `Image`, чтобы добавить новый блок `Carousel`.

![20240603161730](https://static-docs.nocobase.com/20240603161730.png)

#### 5.2 Добавление в `Add block` во всплывающем окне

Необходимо добавить блок в меню `Add block` во всплывающем окне `Add new` блока `Table`.

![img_v3_02b4_fc47fe3a-35a1-4186-999c-0b48e6e001dg](https://static-docs.nocobase.com/img_v3_02b4_fc47fe3a-35a1-4186-999c-0b48e6e001dg.jpg)

Имя `Add block` для блока `Table` — `popup:addNew:addBlock`, а имя раздела `Other Blocks` — `otherBlocks`.

Обновите файл `packages/plugins/@nocobase-sample/plugin-block-carousel/src/client/index.tsx`:

```diff
export class PluginBlockCarouselClient extends Plugin {
  async load() {
    // ...
+   this.app.schemaInitializerManager.addItem('popup:addNew:addBlock', `otherBlocks.${carouselInitializerItem.name}`, carouselInitializerItem)
  }
}
```

![20240603161814](https://static-docs.nocobase.com/20240603161814.png)

#### 5.3 Добавление в `Add block` на мобильной версии

> Сначала активируйте плагин для мобильной версии, см. [Активация плагина](/welcome/getting-started/plugin#3-activate-the-plugin).

Добавьте блок в меню `Add block` мобильной версии. Способ получения имени здесь не описывается.

Обновите файл `packages/plugins/@nocobase-sample/plugin-block-carousel/src/client/index.tsx`:

```diff
export class PluginBlockCarouselClient extends Plugin {
  async load() {
    // ...
+   this.app.schemaInitializerManager.addItem('mobilePage:addBlock', `otherBlocks.${carouselInitializerItem.name}`, carouselInitializerItem)
  }
}
```

![20240603161913](https://static-docs.nocobase.com/20240603161913.png)

Для добавления в другие меню `Add block` достаточно знать их имена.

### 6. Реализация настроек Schema

#### 6.1 Определение настроек Schema

Для полноценного блока нужны настройки Schema для конфигурации свойств и операций.

Создайте файл `packages/plugins/@nocobase-sample/plugin-block-carousel/src/client/settings/index.ts`:

```ts | pure
import { SchemaSettings } from "@nocobase/client";
import { BlockNameLowercase } from '../constants';

export const carouselSettings = new SchemaSettings({
  name: `blockSettings:${BlockNameLowercase}`,
  items: [
    // TODO
  ]
});
```

#### 6.2 Регистрация настроек Schema

```ts
import { Plugin } from '@nocobase/client';
import { carouselSettings } from './settings';

export class PluginBlockCarouselClient extends Plugin {
  async load() {
    // ...
    this.app.schemaSettingsManager.add(carouselSettings)
  }
}

export default PluginBlockCarouselClient;
```

#### 6.3 Использование настроек Schema

Обновите `carouselSchema` в `packages/plugins/@nocobase-sample/plugin-block-carousel/src/client/schema/index.ts`:

```diff
+ import { carouselSettings } from "../settings";

const carouselSchema: ISchema = {
  type: 'void',
  'x-decorator': 'CardItem',
+ 'x-settings': carouselSettings.name,
  // ...
};
```

![20240603162037](https://static-docs.nocobase.com/20240603162037.png)

### 7. Реализация элементов настроек Schema

Мы определили `Schema Settings`, но не реализовали операции. Реализуем их в соответствии с требованиями.

Поддерживаемые типы операций см. в [Schema Settings - Built-in Components and Types](https://client.docs.nocobase.com/core/ui-schema/schema-settings#built-in-components-and-types).

#### 7.1 Реализация операции `remove`

Блоки, добавленные через инициализаторы, нельзя удалить, поэтому реализуем операцию `remove`.

NocoBase предоставляет встроенный тип [remove](https://client.docs.nocobase.com/core/ui-schema/schema-settings#schemasettingsremove-1). Обновите `packages/plugins/@nocobase-sample/plugin-block-carousel/src/client/settings/index.ts`:

```diff
import { SchemaSettings } from '@nocobase/client';
import { BlockNameLowercase } from '../constants';

export const carouselSettings = new SchemaSettings({
  name: `blockSettings:${BlockNameLowercase}`,
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
  - `breakRemoveOn`: Условие остановки удаления. Поскольку `Add Block` автоматически оборачивает элементы в `Grid`, устанавливаем `breakRemoveOn: { 'x-component': 'Grid' }`, чтобы не удалять выше `Grid`.

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/20240603162229_rec_.mp4" type="video/mp4" />
</video>

#### 7.2 Реализация операции `Edit Block title`

Реализуем операцию `Edit Block title` для изменения заголовка блока.

NocoBase предоставляет компонент `SchemaSettingsBlockTitleItem` (документация TODO), который можно использовать.

Обновите `packages/plugins/@nocobase-sample/plugin-block-carousel/src/client/settings/index.ts`:

```diff
- import { SchemaSettingsBlockTitleItem } from "@nocobase/client";
+ import { SchemaSettings, SchemaSettingsBlockTitleItem } from "@nocobase/client";

import { SchemaSettings, SchemaSettingsBlockTitleItem } from '@nocobase/client';
import { BlockNameLowercase } from '../constants';
import { heightSchemaSettingsItem } from './items/height';
import { objectFitSchemaSettingsItem } from './items/objectFit';
import { imagesSchemaSettingsItem } from './items/images';
import { autoplaySchemaSettingsItem } from './items/autoplay';

export const carouselSettings = new SchemaSettings({
  name: `blockSettings:${BlockNameLowercase}`,
  items: [
+   {
+     name: 'editBlockTitle',
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
    }
  ]
});
```

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/20240603162340_rec_.mp4" type="video/mp4" />
</video>

Другие переиспользуемые элементы SchemaSettings см. в документации (TODO).

#### 7.3 Реализация операции `Edit Images`

Реализуем операцию `Edit Images` для редактирования изображений в карусели.

##### 7.3.1 Определение элемента SchemaSettings

Создайте файл `packages/plugins/@nocobase-sample/plugin-block-carousel/src/client/settings/items/images.ts`:

```ts
import { SchemaSettingsItemType, useDesignable, } from "@nocobase/client";
import { useFieldSchema } from '@formily/react';

import { BlockNameLowercase } from "../../constants";
import { useT } from "../../locale";

export const imagesSchemaSettingsItem: SchemaSettingsItemType = {
  name: 'images',
  type: 'actionModal',
  useComponentProps() {
    const filedSchema = useFieldSchema();
    const { deepMerge } = useDesignable();
    const t = useT();

    return {
      title: t('Edit Images'),
      schema: {
        type: 'object',
        title: t('Edit Images'),
        properties: {
          src: {
            title: t('Images'),
            type: 'string',
            default: filedSchema['x-decorator-props'][BlockNameLowercase]?.images ?? [],
            'x-decorator': 'FormItem',
            'x-component': 'Upload.Attachment',
            'x-component-props': {
              action: 'attachments:create',
              multiple: true
            },
          },
        },
      },
      onSubmit({ src: images }: any) {
        deepMerge({
          'x-uid': filedSchema['x-uid'],
          'x-decorator-props': {
            ...filedSchema['x-decorator-props'],
            [BlockNameLowercase]: {
              ...filedSchema['x-decorator-props']?.[BlockNameLowercase],
              images,
            },
          },
        })
      }
    };
  },
};
```

Подробности о SchemaSettings Item см. в [SchemaSettingsItem](https://client.docs.nocobase.com/core/ui-schema/schema-settings#optionsitems).

- `type`: Встроенный тип [actionModal](https://client.docs.nocobase.com/core/ui-schema/schema-settings#schemasettingsactionmodalitem) — всплывающее окно.
- `name`: Уникальный идентификатор для операций CRUD.
- `useComponentProps`: Возвращает свойства компонента `SchemaSettingsActionModalItem` для `actionModal`.

`useComponentProps`:

- Хуки:
  - `useFieldSchema`: Получение текущей схемы узла.
  - `useDesignable`: Получение экземпляра Designable, метод `deepMerge` для слияния схемы.
    - `x-uid`: Уникальный идентификатор узла.
    - `x-decorator-props`: Свойства узла, содержащие свойства `carousel`.

- Свойства:
  - `title`: Заголовок всплывающего окна.
  - `schema`: Схема формы всплывающего окна.
    - [Upload.Attachment](https://client.docs.nocobase.com/components/upload): Компонент загрузки.
    - [FormItem](https://client.docs.nocobase.com/components/form-item): Элемент формы.
  - `onSubmit`: Событие отправки формы.

##### 7.3.2 Использование SchemaSettings Item

Обновите `packages/plugins/@nocobase-sample/plugin-block-carousel/src/client/settings/index.ts`:

```diff
// ...
+ import { imagesSchemaSettingsItem } from "./items/images";

export const carouselSettings = new SchemaSettings({
  name: `blockSettings:${BlockNameLowercase}`,
  items: [
    {
      name: 'editBlockTitle',
      Component: SchemaSettingsBlockTitleItem,
    },
+   imagesSchemaSettingsItem,
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

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/20240603162436_rec_.mp4" type="video/mp4" />
</video>

#### 7.4 Реализация `Edit Height`

##### 7.4.1 Определение SchemaSettings Item

Создайте файл `packages/plugins/@nocobase-sample/plugin-block-carousel/src/client/settings/items/height.ts`:

```ts
import { SchemaSettingsItemType, useDesignable, } from "@nocobase/client";
import { useFieldSchema } from '@formily/react';

import { BlockNameLowercase } from "../../constants";
import { useT } from "../../locale";

export const heightSchemaSettingsItem: SchemaSettingsItemType = {
  name: 'height',
  type: 'actionModal',
  useComponentProps() {
    const filedSchema = useFieldSchema();
    const { deepMerge } = useDesignable();
    const t = useT();

    return {
      title: t('Edit Height'),
      schema: {
        type: 'object',
        title: t('Edit Height'),
        properties: {
          height: {
            title: t('Height'),
            type: 'number',
            default: filedSchema['x-decorator-props']?.[BlockNameLowercase]?.height,
            'x-decorator': 'FormItem',
            'x-component': 'InputNumber',
          },
        },
      },
      onSubmit({ height }: any) {
        deepMerge({
          'x-uid': filedSchema['x-uid'],
          'x-decorator-props': {
            ...filedSchema['x-decorator-props'],
            [BlockNameLowercase]: {
              ...filedSchema['x-decorator-props']?.[BlockNameLowercase],
              height,
            },
          },
        })
      }
    };
  },
};
```

Подробности о SchemaSettings Item см. в [SchemaSettingsItem](https://client.docs.nocobase.com/core/ui-schema/schema-settings#optionsitems).

- `type`: Встроенный тип [actionModal](https://client.docs.nocobase.com/core/ui-schema/schema-settings#schemasettingsactionmodalitem) — всплывающее окно.
- `name`: Уникальный идентификатор для операций CRUD.
- `useComponentProps`: Возвращает свойства компонента `SchemaSettingsActionModalItem` для `actionModal`.

`useComponentProps`:

- Хуки:
  - `useFieldSchema`: Получение текущей схемы узла.
  - `useDesignable`: Получение экземпляра Designable, метод `deepMerge` для слияния схемы.
    - `x-uid`: Уникальный идентификатор узла.
    - `x-decorator-props`: Свойства узла, содержащие свойства `carousel`.

- Свойства:
  - `title`: Заголовок всплывающего окна.
  - `schema`: Схема формы всплывающего окна.
    - [InputNumber](https://client.docs.nocobase.com/components/input-number): Поле ввода числа.
    - [FormItem](https://client.docs.nocobase.com/components/form-item): Элемент формы.
  - `onSubmit`: Событие отправки формы.

##### 7.4.2 Использование SchemaSettings Item

Обновите `packages/plugins/@nocobase-sample/plugin-block-carousel/src/client/settings/index.ts`:

```diff
// ...
+ import { heightSchemaSettingsItem } from "./items/height";

export const carouselSettings = new SchemaSettings({
  name: `blockSettings:${BlockNameLowercase}`,
  items: [
    {
      name: 'editBlockTitle',
      Component: SchemaSettingsBlockTitleItem,
    },
    imagesSchemaSettingsItem,
+   heightSchemaSettingsItem,
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

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/20240603162555_rec_.mp4" type="video/mp4" />
</video>

#### 7.5 Реализация `ObjectFit`

##### 7.5.1 Определение SchemaSettings Item

Создайте файл `packages/plugins/@nocobase-sample/plugin-block-carousel/src/client/settings/items/objectFit.ts`:

```ts
import { SchemaSettingsItemType, useDesignable, } from "@nocobase/client";
import { useFieldSchema } from '@formily/react';
import { BlockNameLowercase } from "../../constants";
import { useT } from "../../locale";

export const objectFitSchemaSettingsItem: SchemaSettingsItemType = {
  name: 'objectFit',
  type: 'select',
  useComponentProps() {
    const filedSchema = useFieldSchema();
    const { deepMerge } = useDesignable();
    const t = useT();

    return {
      title: t('Object Fit'),
      options: [
        { label: 'Cover', value: 'cover' },
        { label: 'Contain', value: 'contain' },
        { label: 'Fill', value: 'fill' },
        { label: 'None', value: 'none' },
        { label: 'Scale Down', value: 'scale-down' },
      ],
      value: filedSchema['x-decorator-props']?.[BlockNameLowercase]?.objectFit || 'cover',
      onChange(v) {
        deepMerge({
          'x-uid': filedSchema['x-uid'],
          'x-decorator-props': {
            ...filedSchema['x-decorator-props'],
            [BlockNameLowercase]: {
              ...filedSchema['x-decorator-props']?.[BlockNameLowercase],
              objectFit: v,
            },
          },
        })
      },
    };
  },
};
```

Подробности о SchemaSettings Item см. в [SchemaSettingsItem](https://client.docs.nocobase.com/core/ui-schema/schema-settings#optionsitems).

- `type`: Встроенный тип [select](https://client.docs.nocobase.com/core/ui-schema/schema-settings#schemasettingsselectitem) — выпадающий список.
- `name`: Уникальный идентификатор для операций CRUD.
- `useComponentProps`: Возвращает свойства компонента `SchemaSettingsSelectItem` для `select`.

`useComponentProps`:

- Хуки:
  - `useFieldSchema`: Получение текущей схемы узла.
  - `useDesignable`: Получение экземпляра Designable, метод `deepMerge` для слияния схемы.
    - `x-uid`: Уникальный идентификатор узла.
    - `x-decorator-props`: Свойства узла, содержащие свойства `carousel`.

- Свойства:
  - `title`: Заголовок.
  - `options`: Опции выбора.
  - `value`: Значение по умолчанию.
  - `onChange`: Событие изменения.

##### 7.5.2 Использование SchemaSettings Item

Обновите `packages/plugins/@nocobase-sample/plugin-block-carousel/src/client/settings/index.ts`:

```diff
// ...
+ import { objectFitSchemaSettingsItem } from "./items/objectFit";

export const carouselSettings = new SchemaSettings({
  name: `blockSettings:${BlockNameLowercase}`,
  items: [
    {
      name: 'editBlockTitle',
      Component: SchemaSettingsBlockTitleItem,
    },
    imagesSchemaSettingsItem,
    heightSchemaSettingsItem,
+   objectFitSchemaSettingsItem,
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

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/20240603162655_rec_.mp4" type="video/mp4" />
</video>

#### 7.6 Реализация `Autoplay`

##### 7.6.1 Определение SchemaSettings Item

Создайте файл `packages/plugins/@nocobase-sample/plugin-block-carousel/src/client/settings/items/autoplay.ts`:

```ts
import { SchemaSettingsItemType, useDesignable, } from "@nocobase/client";
import { useFieldSchema } from '@formily/react';

import { BlockNameLowercase } from "../../constants";
import { useT } from "../../locale";

export const autoplaySchemaSettingsItem: SchemaSettingsItemType = {
  name: 'autoplay',
  type: 'switch',
  useComponentProps() {
    const filedSchema = useFieldSchema();
    const { deepMerge } = useDesignable();
    const t = useT();

    return {
      title: t('Autoplay'),
      checked: !!filedSchema['x-decorator-props']?.[BlockNameLowercase]?.autoplay,
      onChange(v) {
        deepMerge({
          'x-uid': filedSchema['x-uid'],
          'x-decorator-props': {
            ...filedSchema['x-decorator-props'],
            [BlockNameLowercase]: {
              ...filedSchema['x-decorator-props']?.[BlockNameLowercase],
              autoplay: v,
            },
          },
        })
      },
    };
  },
};
```

Подробности о SchemaSettings Item см. в [SchemaSettingsItem](https://client.docs.nocobase.com/core/ui-schema/schema-settings#optionsitems).

- `type`: Встроенный тип [switch](https://client.docs.nocobase.com/core/ui-schema/schema-settings#schemasettingsswitchitem) — переключатель.
- `name`: Уникальный идентификатор для операций CRUD.
- `useComponentProps`: Возвращает свойства компонента `SchemaSettingsSwitchItem` для `switch`.

`useComponentProps`:

- Хуки:
  - `useFieldSchema`: Получение текущей схемы узла.
  - `useDesignable`: Получение экземпляра Designable, метод `deepMerge` для слияния схемы.
    - `x-uid`: Уникальный идентификатор узла.
    - `x-decorator-props`: Свойства узла, содержащие свойства `carousel`.

- Свойства:
  - `title`: Заголовок.
  - `checked`: Значение по умолчанию.
  - `onChange`: Событие изменения.

##### 7.6.2 Использование SchemaSettings Item

Обновите `packages/plugins/@nocobase-sample/plugin-block-carousel/src/client/settings/index.ts`:

```diff
// ...
+ import { autoplaySchemaSettingsItem } from "./items/autoplay";

export const carouselSettings = new SchemaSettings({
  name: `blockSettings:${BlockNameLowercase}`,
  items: [
    {
      name: 'editBlockTitle',
      Component: SchemaSettingsBlockTitleItem,
    },
    imagesSchemaSettingsItem,
    heightSchemaSettingsItem,
    objectFitSchemaSettingsItem,
+   autoplaySchemaSettingsItem,
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

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/20240603162803_rec_.mp4" type="video/mp4" />
</video>

#### 7.7 Добавление разделителя

Операции `editBlockTitle` и `remove` являются универсальными, тогда как `src`, `height`, `objectFit` и `autoplay` относятся к конфигурации `Image`. Их можно разделить с помощью `divider`.

Обновите `packages/plugins/@nocobase-sample/plugin-block-carousel/src/client/settings/index.ts`:

```diff
// ...
export const carouselSettings = new SchemaSettings({
  name: `blockSettings:${BlockNameLowercase}`,
  items: [
    {
      name: 'editBlockTitle',
      Component: SchemaSettingsBlockTitleItem,
    },
+   {
+     name: 'divider1',
+     type: 'divider'
+   },
    imagesSchemaSettingsItem,
    heightSchemaSettingsItem,
    objectFitSchemaSettingsItem,
    autoplaySchemaSettingsItem,
+   {
+     name: 'divider2',
+     type: 'divider'
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
    }
  ]
});
```

![20240603162933](https://static-docs.nocobase.com/20240603162933.png)

### 8. Права доступа

TODO

### 9. Мультиязычность

#### 9.1 Английский язык

Обновите файл `packages/plugins/@nocobase-sample/plugin-block-carousel/src/locale/en-US.json`:

```json
{
  "Carousel": "Carousel",
  "Edit Images": "Edit Images",
  "Images": "Images",
  "Autoplay": "Autoplay",
  "Edit Height": "Edit Height",
  "Height": "Height"
}
```

#### 9.2 Китайский язык

Обновите файл `packages/plugins/@nocobase-sample/plugin-block-carousel/src/locale/zh-CN.json`:

```json
{
  "Carousel": "走马灯",
  "Edit Images": "编辑图片",
  "Images": "图片",
  "Autoplay": "自动播放",
  "Edit Height": "编辑高度",
  "Height": "高度"
}
```

Добавьте несколько языков через [http://localhost:13000/admin/settings/system-settings](http://localhost:13000/admin/settings/system-settings) и переключайте их в правом верхнем углу.

![20240611113758](https://static-docs.nocobase.com/20240611113758.png)

![20240611114018](https://static-docs.nocobase.com/20240611114018.png)

## Сборка и загрузка в продакшен

Следуя инструкциям из документа [Сборка и упаковка плагина](/development/your-fisrt-plugin#构建并打包插件), упакуйте плагин для продакшена.

Если вы используете клонированный исходный код, сначала выполните полную сборку, чтобы включить зависимости плагина:

```bash
yarn build
```

Если проект создан с помощью `create-nocobase-app`, выполните:

```bash
yarn build @nocobase-sample/plugin-block-carousel --tar
```

В результате будет создан файл `storage/tar/@nocobase-sample/plugin-block-carousel.tar.gz`, который можно установить с помощью [метода загрузки](/welcome/getting-started/plugin).
