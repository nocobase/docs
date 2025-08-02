# Создание новых SchemaSettings

## Описание сценария

При добавлении нового блока, поля или операции может потребоваться создание дополнительных элементов конфигурации для управления отображением, поведением и т. д. В таких случаях необходимо создать новый `SchemaSettings`.

## Описание примера

Этот пример основан на [простом блоке](/plugin-samples/schema-initializer/block-simple) и дополняет его. В исходном примере был создан `SchemaSettings` только с элементом `remove`. В данном примере будут добавлены следующие элементы конфигурации:

- `Edit block title`: Редактирование заголовка блока
- `Edit Image`: Редактирование изображения
- `Edit height`: Редактирование высоты изображения
- `objectFit`: Выбор свойства `object-fit` для изображения
- `Lazy`: Включение/выключение ленивой загрузки

<br />

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/20240602112410_rec_.mp4" type="video/mp4" />
</video>

Этот пример демонстрирует использование инициализатора. Подробности о расширении блоков см. в документации [Расширения блоков](/plugin-samples/block).

Полный код примера доступен в [plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-schema-settings-new).

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
yarn pm create @nocobase-sample/plugin-schema-settings-new
yarn pm enable @nocobase-sample/plugin-schema-settings-new
```

Запустите проект:

```bash
yarn dev
```

После входа в систему перейдите по адресу [http://localhost:13000/admin/pm/list/local/](http://localhost:13000/admin/pm/list/local/), чтобы убедиться, что плагин установлен и активирован.

## Реализация функциональности

### 1. Создание блока/поля/операции

Этот пример основан на [простом блоке](/plugin-samples/schema-initializer/simple-block), поэтому скопируйте каталог `packages/plugins/@nocobase-sample/plugin-initializer-block-simple/src/client` в `packages/plugins/@nocobase-sample/plugin-schema-settings-new/src/client`.

Затем измените файл `packages/plugins/@nocobase-sample/plugin-schema-settings-new/src/client/index.tsx`:

```diff
// ...
- import { Image } from './component';
+ import { ImageV2 } from './component';

- export class PluginInitializerBlockSimpleClient extends Plugin {
+ export class PluginSchemaSettingsNewClient extends Plugin {
  async load() {
-   this.app.addComponents({ Image })
+   this.app.addComponents({ ImageV2 })
    // ...
  }
}

- export default PluginInitializerBlockSimpleClient;
+ export default PluginSchemaSettingsNewClient;
```

Измените компонент `Image` в файле `packages/plugins/@nocobase-sample/plugin-schema-settings-new/src/client/component/Image.tsx`:

```diff
- export const Image: FC<{ height?: number }> = withDynamicSchemaProps(({ height = 500 }) => {
+ export const ImageV2: FC<{ height?: number }> = withDynamicSchemaProps(({ height = 500 }) => {
```

Обновите файл `packages/plugins/@nocobase-sample/plugin-schema-settings-new/src/client/constants.ts`:

```ts
export const BlockName = 'ImageV2';
export const BlockNameLowercase = 'image-v2';
```

### 2. Свойства компонента

#### 2.1 Реализация компонента

Сначала необходимо добавить поддержку требуемых свойств в компонент.

Измените файл `packages/plugins/@nocobase-sample/plugin-schema-settings-new/src/client/component/Image.tsx`:

```tsx | pure
import React, { FC } from 'react';
import { withDynamicSchemaProps } from '@nocobase/client';
import { BlockName } from '../constants';

export interface ImageV2Props {
  src?: { url: string; title?: string };
  /**
   * @default 500
   */
  height?: number;
  /**
   * @default 'cover'
   */
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  /**
   * @default false
   */
  lazy?: boolean;
}

export const ImageV2: FC<ImageV2Props> = withDynamicSchemaProps((props) => {
  const { src, height = 500, objectFit = 'cover', lazy = false } = props;
  return <div style={{ height }}>
    {
      src ? <img
        loading={lazy ? 'lazy' : 'eager'}
        style={{ width: '100%', height: '100%', objectFit }}
        src={src.url}
        alt={src.title}
      /> : null
    }
  </div>
}, { displayName: BlockName })
```

#### 2.2 Проверка компонента

Существует два способа проверки компонента:

- Временная страница: Создайте временную страницу, отрендерите компонент `ImageV2` и проверьте, соответствует ли он требованиям.
- Проверка через документацию: Запустите документацию с помощью `yarn doc plugins/@nocobase-sample/plugin-schema-settings-new` и проверьте с помощью примеров в документации (TODO).

Рассмотрим проверку через временную страницу. Создайте страницу, добавьте один или несколько компонентов `ImageV2` с различными параметрами и проверьте их работу.

```tsx | pure
// ...
export class PluginSchemaSettingsNewClient extends Plugin {
  async load() {
    // ...
    this.app.router.add('admin.image-component', {
      path: '/admin/image-component',
      Component: () => {
        return <>
          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <ImageV2 />
          </div>

          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <ImageV2 src={{ url: 'https://picsum.photos/1200/500' }} height={200} />
          </div>

          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <ImageV2 src={{ url: 'https://picsum.photos/1200/500' }} objectFit='contain' />
          </div>

          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <ImageV2 src={{ url: 'https://picsum.photos/1200/500' }} lazy />
          </div>
        </>
      }
    })
  }
}
```

Перейдите по адресу [http://localhost:3000/admin/image-component](http://localhost:3000/admin/image-component) и проверьте, соответствует ли компонент требованиям.

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/20240601171433_rec_.mp4" type="video/mp4" />
</video>

После проверки удалите тестовую страницу.

### 3. Реализация схемы

#### 3.1 Определение схемы

Измените файл `packages/plugins/@nocobase-sample/plugin-schema-settings-new/src/client/schema/index.ts`:

```diff
import { ISchema } from "@nocobase/client";
import { useFieldSchema } from '@formily/react';
import { imageSettings } from "../settings";
import { BlockName, BlockNameLowercase } from "../constants";

+ import { ImageV2Props } from "../component";

+ export function useImageV2Props(): ImageV2Props {
+  const fieldSchema = useFieldSchema();
+  return fieldSchema.parent?.['x-decorator-props']?.[BlockNameLowercase];
+ }

export const imageSchema: ISchema = {
  type: 'void',
  'x-component': 'CardItem',
+ 'x-decorator-props': {
+   [BlockNameLowercase]: {}
+ },
  properties: {
    [BlockNameLowercase]: {
      'x-component': BlockName,
+     'x-use-component-props': 'useImageV2Props'
    }
  },
  'x-settings': imageSettings.name
};
```

Свойства компонента `ImageV2` сохраняются в `x-decorator-props` под ключом `image-v2`, а доступ к ним осуществляется через `x-use-component-props`.

`useImageV2Props()`: Возвращает свойства компонента `ImageV2`.

- `useFieldSchema()`: Получает схему текущего поля, а через `parent` — схему родительского элемента. Для блока данных можно использовать [useDataBlockProps](https://client.docs.nocobase.com/core/data-block/data-block-provider#usedatablockprops) для получения свойств.

#### 3.2 Проверка схемы

```tsx | pure
// ...
export class PluginSchemaSettingsNewClient extends Plugin {
  async load() {
    // ...
    this.app.router.add('admin.image-schema', {
      path: '/admin/image-schema',
      Component: () => {
        return <>
          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <SchemaComponent schema={{
              properties: {
                test1: {
                  ...imageSchema,
                  'x-decorator-props': { [BlockNameLowercase]: {} }
                }
              }
            }} />
          </div>
          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <SchemaComponent schema={{
              properties: {
                test1: {
                  ...imageSchema,
                  'x-decorator-props': { [BlockNameLowercase]: { src: { url: 'https://picsum.photos/1200/500' }, height: 200 } }
                }
              }
            }} />
          </div>
          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <SchemaComponent schema={{
              properties: {
                test1: {
                  ...imageSchema,
                  'x-decorator-props': { [BlockNameLowercase]: { src: { url: 'https://picsum.photos/1200/500' }, objectFit: 'contain' } }
                }
              }
            }} />
          </div>
          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <SchemaComponent schema={{
              properties: {
                test1: {
                  ...imageSchema,
                  'x-decorator-props': { [BlockNameLowercase]: { src: { url: 'https://picsum.photos/1200/500' }, lazy: true } }
                }
              }
            }} />
          </div>
        </>
      }
    })
  }
}
```

Перейдите по адресу [http://localhost:3000/admin/image-schema](http://localhost:3000/admin/image-schema) и проверьте, соответствует ли схема требованиям.

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/20240601171433_rec_.mp4" type="video/mp4" />
</video>

После проверки удалите тестовую страницу.

### 4. Реализация SchemaSettings

Создание `SchemaSettings` описано в документации [простого блока](/plugin-samples/schema-initializer/block-simple#4-реализация-schema-settings).

### 5. Реализация элементов SchemaSettings

#### 5.1 Реализация Edit block title

Редактирование заголовка блока — это общая логика, для которой NocoBase предоставляет компонент `SchemaSettingsBlockTitleItem` (документация TODO). Его можно использовать напрямую.

Измените файл `packages/plugins/@nocobase-sample/plugin-schema-settings-new/src/client/InfoBlock.tsx`:

```diff
- import { SchemaSettingsBlockTitleItem } from "@nocobase/client";
+ import { SchemaSettings, SchemaSettingsBlockTitleItem } from "@nocobase/client";

export const imageSettings = new SchemaSettings({
  name: 'blockSettings:image',
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
  <source src="https://static-docs.nocobase.com/20240602105024_rec_.mp4" type="video/mp4" />
</video>

Список других переиспользуемых элементов `SchemaSettings` см. в документации (TODO).

#### 5.2 Реализация Edit Image

##### 5.2.1 Реализация элемента SchemaSettings

Создайте файл `packages/plugins/@nocobase-sample/plugin-schema-settings-new/src/client/settings/items/image.ts`:

```ts
import { SchemaSettingsItemType, useDesignable, } from "@nocobase/client";
import { useFieldSchema } from '@formily/react';
import { useT } from "../../locale";
import { BlockNameLowercase } from "../../constants";

export const imageSchemaSettingsItem: SchemaSettingsItemType = {
  name: 'src',
  type: 'actionModal',
  useComponentProps() {
    const filedSchema = useFieldSchema();
    const { deepMerge } = useDesignable();
    const t = useT();

    return {
      title: t('Edit Image'),
      schema: {
        type: 'object',
        title: t('Edit Image'),
        properties: {
          src: {
            title: t('Image'),
            type: 'string',
            default: filedSchema['x-decorator-props']?.[BlockNameLowercase]?.src,
            'x-decorator': 'FormItem',
            'x-component': 'Upload.Attachment',
            'x-component-props': {
              action: 'attachments:create',
            },
          },
        },
      },
      onSubmit(image: any) {
        deepMerge({
          'x-uid': filedSchema['x-uid'],
          'x-decorator-props': {
            ...filedSchema['x-decorator-props'],
            [BlockNameLowercase]: {
              ...filedSchema['x-decorator-props']?.[BlockNameLowercase],
              src: image.src,
            },
          },
        })
      }
    };
  },
};
```

Подробности о создании элементов `SchemaSettings` см. в [SchemaSettingsItem](https://client.docs.nocobase.com/core/ui-schema/schema-settings#optionsitems).

- `type`: Встроенный тип. [actionModal](https://client.docs.nocobase.com/core/ui-schema/schema-settings#schemasettingsactionmodalitem) — это модальное окно.
- `name`: Уникальный идентификатор для операций добавления, удаления и изменения.
- `useComponentProps`: Возвращает свойства компонента `SchemaSettingsActionModalItem` для `actionModal`.

`useComponentProps`:

- Хуки:
  - `useFieldSchema`: Получает схему текущего узла.
  - `useDesignable`: Получает экземпляр `Designable`, метод `deepMerge` используется для объединения схемы.
    - `x-uid`: Уникальный идентификатор текущего узла.
    - `x-decorator-props`: Свойства текущего узла, содержащие свойства `image`.

- Свойства:
  - `title`: Заголовок модального окна.
  - `schema`: Схема формы модального окна.
    - [Upload.Attachment](https://client.docs.nocobase.com/components/upload): Компонент загрузки.
    - [FormItem](https://client.docs.nocobase.com/components/form-item): Элемент формы.
  - `onSubmit`: Событие отправки формы.

##### 5.2.2 Использование элемента SchemaSettings

Измените файл `packages/plugins/@nocobase-sample/plugin-schema-settings-new/src/client/settings/index.ts`:

```diff
// ...
+ import { imageSchemaSettingsItem } from "./items/image";

export const imageSettings = new SchemaSettings({
  name: 'blockSettings:image',
  items: [
    {
      name: 'editBlockTitle',
      Component: SchemaSettingsBlockTitleItem,
    },
+   imageSchemaSettingsItem,
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
  <source src="https://static-docs.nocobase.com/20240611173015_rec_.mp4" type="video/mp4" />
</video>

#### 5.3 Реализация Edit Height

##### 5.3.1 Реализация элемента SchemaSettings

Создайте файл `packages/plugins/@nocobase-sample/plugin-schema-settings-new/src/client/settings/items/height.ts`:

```ts
import { SchemaSettingsItemType, useDesignable, } from "@nocobase/client";
import { useFieldSchema } from '@formily/react';
import { useT } from '../../locale'
import { BlockNameLowercase } from "../../constants";

export const heightSchemaSettingsItem: SchemaSettingsItemType = {
  name: 'height',
  type: 'actionModal',
  useComponentProps() {
    const filedSchema = useFieldSchema();
    const { deepMerge } = useDesignable();
    const t = useT();

    return {
      title: t('Edit height'),
      schema: {
        type: 'object',
        title: t('Edit height'),
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

Подробности о создании элементов `SchemaSettings` см. в [SchemaSettingsItem](https://client.docs.nocobase.com/core/ui-schema/schema-settings#optionsitems).

- `type`: Встроенный тип. [actionModal](https://client.docs.nocobase.com/core/ui-schema/schema-settings#schemasettingsactionmodalitem) — это модальное окно.
- `name`: Уникальный идентификатор для операций добавления, удаления и изменения.
- `useComponentProps`: Возвращает свойства компонента `SchemaSettingsActionModalItem` для `actionModal`.

`useComponentProps`:

- Хуки:
  - `useFieldSchema`: Получает схему текущего узла.
  - `useDesignable`: Получает экземпляр `Designable`, метод `deepMerge` используется для объединения схемы.
    - `x-uid`: Уникальный идентификатор текущего узла.
    - `x-decorator-props`: Свойства текущего узла, содержащие свойства `image`.

- Свойства:
  - `title`: Заголовок модального окна.
  - `schema`: Схема формы модального окна.
    - [InputNumber](https://client.docs.nocobase.com/components/input-number): Поле ввода чисел.
    - [FormItem](https://client.docs.nocobase.com/components/form-item): Элемент формы.
  - `onSubmit`: Событие отправки формы.

##### 5.3.2 Использование элемента SchemaSettings

Измените файл `packages/plugins/@nocobase-sample/plugin-schema-settings-new/src/client/settings/index.ts`:

```diff
// ...
+ import { heightSchemaSettingsItem } from "./items/height";

export const imageSettings = new SchemaSettings({
  name: 'blockSettings:image',
  items: [
    {
      name: 'editBlockTitle',
      Component: SchemaSettingsBlockTitleItem,
    },
    imageSchemaSettingsItem,
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
  <source src="https://static-docs.nocobase.com/20240602110936_rec_.mp4" type="video/mp4" />
</video>

#### 5.4 Реализация ObjectFit

##### 5.4.1 Реализация элемента SchemaSettings

Создайте файл `packages/plugins/@nocobase-sample/plugin-schema-settings-new/src/client/items/objectFit.ts`:

```ts
import { SchemaSettingsItemType, useDesignable, } from "@nocobase/client";
import { useFieldSchema } from '@formily/react';
import { useT } from "../../locale";
import { BlockNameLowercase } from "../../constants";

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

Подробности о создании элементов `SchemaSettings` см. в [SchemaSettingsItem](https://client.docs.nocobase.com/core/ui-schema/schema-settings#optionsitems).

- `type`: Встроенный тип. [select](https://client.docs.nocobase.com/core/ui-schema/schema-settings#schemasettingsselectitem) — это выпадающий список.
- `name`: Уникальный идентификатор для операций добавления, удаления и изменения.
- `useComponentProps`: Возвращает свойства компонента `SchemaSettingsSelectItem` для `select`.

`useComponentProps`:

- Хуки:
  - `useFieldSchema`: Получает схему текущего узла.
  - `useDesignable`: Получает экземпляр `Designable`, метод `deepMerge` используется для объединения схемы.
    - `x-uid`: Уникальный идентификатор текущего узла.
    - `x-decorator-props`: Свойства текущего узла, содержащие свойства `image`.

- Свойства:
  - `title`: Заголовок выпадающего списка.
  - `options`: Варианты выбора.
  - `value`: Значение по умолчанию.
  - `onChange`: Событие изменения значения.

##### 5.4.2 Использование элемента SchemaSettings

Измените файл `packages/plugins/@nocobase-sample/plugin-schema-settings-new/src/client/settings/index.ts`:

```diff
// ...
+ import { objectFitSchemaSettingsItem } from "./items/objectFit";

export const imageSettings = new SchemaSettings({
  name: 'blockSettings:image',
  items: [
    {
      name: 'editBlockTitle',
      Component: SchemaSettingsBlockTitleItem,
    },
    imageSchemaSettingsItem,
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
  <source src="https://static-docs.nocobase.com/20240602111256_rec_.mp4" type="video/mp4" />
</video>

#### 5.5 Реализация Lazy

##### 5.5.1 Реализация элемента SchemaSettings

Создайте файл `packages/plugins/@nocobase-sample/plugin-schema-settings-new/src/client/items/lazy.ts`:

```ts
import { SchemaSettingsItemType, useDesignable, } from "@nocobase/client";
import { useFieldSchema } from '@formily/react';
import { useT } from "../../locale";
import { BlockNameLowercase } from "../../constants";

export const lazySchemaSettingsItem: SchemaSettingsItemType = {
  name: 'lazy',
  type: 'switch',
  useComponentProps() {
    const filedSchema = useFieldSchema();
    const { deepMerge } = useDesignable();
    const t = useT();

    return {
      title: t('Lazy'),
      checked: !!filedSchema['x-decorator-props']?.[BlockNameLowercase]?.lazy,
      onChange(v) {
        deepMerge({
          'x-uid': filedSchema['x-uid'],
          'x-decorator-props': {
            ...filedSchema['x-decorator-props'],
            [BlockNameLowercase]: {
              ...filedSchema['x-decorator-props']?.[BlockNameLowercase],
              lazy: v,
            },
          },
        })
      },
    };
  },
};
```

Подробности о создании элементов `SchemaSettings` см. в [SchemaSettingsItem](https://client.docs.nocobase.com/core/ui-schema/schema-settings#optionsitems).

- `type`: Встроенный тип. [switch](https://client.docs.nocobase.com/core/ui-schema/schema-settings#schemasettingsswitchitem) — это переключатель.
- `name`: Уникальный идентификатор для операций добавления, удаления и изменения.
- `useComponentProps`: Возвращает свойства компонента `SchemaSettingsSwitchItem` для `switch`.

`useComponentProps`:

- Хуки:
  - `useFieldSchema`: Получает схему текущего узла.
  - `useDesignable`: Получает экземпляр `Designable`, метод `deepMerge` используется для объединения схемы.
    - `x-uid`: Уникальный идентификатор текущего узла.
    - `x-decorator-props`: Свойства текущего узла, содержащие свойства `image`.

- Свойства:
  - `title`: Заголовок переключателя.
  - `checked`: Значение по умолчанию.
  - `onChange`: Событие изменения переключателя.

##### 5.5.2 Использование элемента SchemaSettings

Измените файл `packages/plugins/@nocobase-sample/plugin-schema-settings-new/src/client/settings/index.ts`:

```diff
// ...
+ import { lazySchemaSettingsItem } from "./items/lazy";

export const imageSettings = new SchemaSettings({
  name: 'blockSettings:image',
  items: [
    {
      name: 'editBlockTitle',
      Component: SchemaSettingsBlockTitleItem,
    },
    imageSchemaSettingsItem,
    heightSchemaSettingsItem,
    objectFitSchemaSettingsItem,
+   lazySchemaSettingsItem,
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
  <source src="https://static-docs.nocobase.com/20240602111748_rec_.mp4" type="video/mp4" />
</video>

#### 5.6 Добавление разделителей

Элементы `editBlockTitle` и `remove` являются общими, тогда как `src`, `height`, `objectFit` и `lazy` специфичны для компонента `Image`. Для их разделения можно использовать `divider`.

Измените файл `packages/plugins/@nocobase-sample/plugin-schema-settings-new/src/client/settings/index.ts`:

```diff
// ...
export const imageSettings = new SchemaSettings({
  name: 'blockSettings:image',
  items: [
    {
      name: 'editBlockTitle',
      Component: SchemaSettingsBlockTitleItem,
    },
+   {
+     name: 'divider1',
+     type: 'divider'
+   },
    imageSchemaSettingsItem,
    heightSchemaSettingsItem,
    objectFitSchemaSettingsItem,
    lazySchemaSettingsItem,
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

![20240602112229](https://static-docs.nocobase.com/20240602112229.png)

### 6. Мультиязычность

:::warning
После изменения файлов локализации требуется перезапустить сервис, чтобы изменения вступили в силу.
:::

#### 6.1 Английский язык

Отредактируйте файл `packages/plugins/@nocobase-sample/plugin-schema-settings-new/src/locale/en-US.json`:

```json
{
  "Image": "Image",
  "Edit Image": "Edit Image",
  "Images": "Images",
  "Autoplay": "Autoplay",
  "Edit height": "Edit Height",
  "Height": "Height",
  "Lazy": "Lazy"
}
```

#### 6.2 Китайский язык

Отредактируйте файл `packages/plugins/@nocobase-sample/plugin-schema-settings-new/src/locale/zh-CN.json`:

```json
{
  "Image": "图片",
  "Edit Image": "编辑图片",
  "Images": "图片",
  "Edit height": "编辑高度",
  "Height": "高度",
  "Lazy": "懒加载"
}
```

Для поддержки других языков добавьте соответствующие файлы локализации.

## Сборка и развертывание в продакшен

Следуйте инструкциям из документации [Сборка и упаковка плагина](/development/your-fisrt-plugin#сборка-и-упаковка-плагина) для сборки и развертывания плагина.

Если вы используете клонированный исходный код, выполните полную сборку, чтобы собрать зависимости плагина:

```bash
yarn build
```

Если проект создан с помощью `create-nocobase-app`, выполните:

```bash
yarn build @nocobase-sample/plugin-schema-settings-new --tar
```

После этого в папке `storage/tar/@nocobase-sample/plugin-schema-settings-new.tar.gz` появится архив плагина. Установите его через [загрузку](/welcome/getting-started/plugin).
