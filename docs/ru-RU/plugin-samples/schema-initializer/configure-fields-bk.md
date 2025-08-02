# Реализация Инициализатор для полей данных

## Описание сценария

Если создается сложный блок данных, он может включать несколько динамически добавляемых частей, ключевой из которых является настройка полей через соответствующий Initializer `Configure fields`. Например, в блоке `Form` можно настроить отображаемые поля с помощью `Configure fields`.

![img_v3_02b4_111734a2-755f-4100-949d-96803ad1912g](https://static-docs.nocobase.com/img_v3_02b4_111734a2-755f-4100-949d-96803ad1912g.jpg)

## Описание примера

Этот пример основан на [Добавлении блока данных Data Block](/plugin-samples/schema-initializer/data-block) и реализует функциональность, аналогичную блоку `Form`, позволяя настраивать отображаемые поля через `Configure fields`.

Полный код примера доступен в [plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-initializer-configure-fields).

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/20240522-190508.mp4" type="video/mp4" />
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
yarn pm create @nocobase-sample/plugin-initializer-configure-fields
yarn pm enable @nocobase-sample/plugin-initializer-configure-fields
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

### 1. Копирование кода и изменение имени плагина

Этот пример основан на [Добавлении блока данных Data Block](/plugin-samples/schema-initializer/data-block), поэтому скопируйте каталог `packages/plugins/@nocobase-sample/plugin-initializer-block-data/src/client` в `packages/plugins/@nocobase-sample/plugin-initializer-configure-fields/src/client`.

Затем измените файл `packages/plugins/@nocobase-sample/plugin-initializer-configure-fields/src/client/index.tsx`:

```diff
import { Plugin } from '@nocobase/client';
import { InfoBlock, infoBlockSettings, infoBlockInitializerItem } from './InfoBlock';

- export class PluginInitializerBlockDataClient extends Plugin {
+ export class PluginInitializerConfigureFieldsClient extends Plugin {
  async load() {
    // ...
  }
}

- export default PluginInitializerBlockDataClient;
+ export default PluginInitializerConfigureFieldsClient;
```

Чтобы избежать конфликтов с другими примерами, все упоминания `InfoBlock` заменены на `InfoBlock2`, но в документации пример будет описываться как `InfoBlock`.

### 2. Создание Initializer для `Configure fields`

Создайте файл `packages/plugins/@nocobase-sample/plugin-initializer-configure-fields/src/client/configureFields.tsx`:

```tsx | pure
import { Grid, SchemaInitializer, useSchemaInitializer } from "@nocobase/client";

export const configureFields = new SchemaInitializer({
  name: 'info:configureFields',
  icon: 'SettingOutlined',
  title: 'Configure fields',
  items: [
    {
      type: 'itemGroup',
      name: 'fields',
      title: 'Display fields',
      useChildren() {
        const { insert } = useSchemaInitializer();

        return []
      },
    }
  ]
});
```

- [SchemaInitializer](https://client.docs.nocobase.com/core/ui-schema/schema-initializer): Используется для создания экземпляра SchemaInitializer.
- `icon`: Иконка, список доступных иконок см. в [Ant Design Icons](https://ant.design/components/icon/).
- `title`: Заголовок кнопки.
- [items](https://client.docs.nocobase.com/core/ui-schema/schema-initializer#built-in-components-and-types): Подэлементы кнопки.
  - `type: 'itemGroup'`: Тип подэлемента, используется для группировки нескольких элементов.
  - `name: 'fields'`: Имя подэлемента.
  - `title: 'Display fields'`: Заголовок подэлемента.
  - `useChildren`: Подэлементы группы, возвращает массив подэлементов.

### 3. Регистрация Initializer для `Configure fields`

Обновите файл `packages/plugins/@nocobase-sample/plugin-initializer-configure-fields/src/client/index.tsx`, импортируйте и зарегистрируйте Initializer:

```tsx | pure
import { configureFields } from './configureFields'

export class PluginInitializerConfigureFieldsClient extends Plugin {
  async load() {
    this.app.schemaInitializerManager.add(configureFields)
  }
}
```

### 4. Изменение блока `getInfoBlockSchema()`

Обновите файл `packages/plugins/@nocobase-sample/plugin-initializer-configure-fields/src/client/InfoBlock.tsx`, изменив блок `getInfoBlockSchema()`:

```diff
function getInfoBlockSchema({ dataSource, collection }) {
  return {
    // ...
    properties: {
      info: {
        type: 'void',
        'x-component': 'InfoBlock',
+       properties: {
+         fields: {
+           type: 'void',
+           'x-component': 'Grid',
+           'x-initializer': 'info:configureFields',
+         }
+       }
      }
    }
  }
}
```

В подузлы `InfoBlock` добавлено поле `fields`. Для улучшения компоновки используется компонент `Grid`, а в качестве `x-initializer` указано `info:configureFields`. Компонент `Grid` встроенно поддерживает [useSchemaInitializerRender()](https://client.docs.nocobase.com/core/ui-schema/schema-initializer#useschemainitializerrender), поэтому его можно использовать напрямую. Для пользовательских компонентов потребуется реализовать логику рендеринга через `useSchemaInitializerRender()`.

### 5. Изменение компонента `InfoBlock`

Обновите файл `packages/plugins/@nocobase-sample/plugin-initializer-configure-fields/src/client/InfoBlock.tsx`, изменив компонент `InfoBlock`:

```tsx | pure
export const InfoBlock = ({ children }) => {
  return <div>{children}</div>
}
```

Содержимое `properties` передается в `children` компонента `InfoBlock`, поэтому достаточно просто отобразить `children`.

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/20240522-190759.mp4" type="video/mp4" />
</video>

### 6. Чтение полей данных для подэлементов `Configure fields`

Обновите файл `packages/plugins/@nocobase-sample/plugin-initializer-configure-fields/src/client/configureFields.tsx`:

```tsx | pure
interface GetFieldInitializerItemOptions {
  collectionField: CollectionFieldOptions;
}

function getFieldInitializerItem(options: GetFieldInitializerItemOptions) {
  const { collectionField } = options;
  const title = collectionField.uiSchema?.title || collectionField.name;
  const name = collectionField.name;
  return {
    name: collectionField.name,
    title: collectionField.uiSchema?.title || collectionField.name,
    type: 'switch',
    onClick() {
      // TODO
    }
  } as SchemaInitializerItemType;
}

export const configureFields = new SchemaInitializer({
  name: 'info:configureFields',
  icon: 'SettingOutlined',
  title: 'Configure fields',
  items: [
    {
      type: 'itemGroup',
      name: 'fields',
      title: 'Display fields',
      useChildren() {
        const collection = useCollection();

        const schemaItems = collection
          .getFields()
          .map<SchemaInitializerItemType>(getFieldInitializerItem({
            collectionField,
          }))

        return schemaItems;
      },
    }
  ]
});
```

- [useCollection()](https://client.docs.nocobase.com/core/data-source/collection-provider#usecollection): Используется для получения экземпляра текущей коллекции данных. В `getInfoBlockSchema()` используется [DataBlockProvider](https://client.docs.nocobase.com/core/data-block/data-block-provider), который включает [CollectionProvider](https://client.docs.nocobase.com/core/data-source/collection-provider), поэтому можно использовать его напрямую.
  - `collection.getFields()`: Получает поля коллекции данных.

- `getFieldInitializerItem`: Функция для создания элемента SchemaInitializer для поля.
  - `name`: Имя подэлемента, используется как уникальный идентификатор.
  - `title`: Заголовок подэлемента, отображается в интерфейсе. Используется `uiSchema.title`, если он есть, иначе — имя поля. Подробности о структуре `field.uiSchema` см. в [CollectionField](https://client.docs.nocobase.com/core/data-source/collection-field).
  - `type: 'switch'`: Тип подэлемента, [Switch](https://client.docs.nocobase.com/core/ui-schema/schema-initializer#type-switch--schemainitializerswitch). Основная задача — реализовать метод `onClick`, который добавляет или удаляет поле при клике.
  - `onClick`: Событие клика, реализация будет добавлена позже.

![img_v3_02b4_7d5c145e-cb15-4d93-9004-bde406e42a5g](https://static-docs.nocobase.com/img_v3_02b4_7d5c145e-cb15-4d93-9004-bde406e42a5g.jpg)

### 7. Реализация добавления и удаления для `switch`

Обновите файл `packages/plugins/@nocobase-sample/plugin-initializer-configure-fields/src/client/configureFields.tsx`:

```diff
+ import { CollectionFieldOptions, ISchema, SchemaInitializer, SchemaInitializerItemType, SchemaSettings, useCollection, useDesignable, useSchemaInitializer } from "@nocobase/client";

export const configureFields = new SchemaInitializer({
  name: 'info:configureFields',
  icon: 'SettingOutlined',
  title: 'Configure fields',
  items: [
    {
      type: 'itemGroup',
      name: 'fields',
      title: 'Display fields',
      useChildren() {
+       const { insert } = useSchemaInitializer();
+       const { remove } = useDesignable();
+       const schema = useFieldSchema();
        const collection = useCollection();

        const schemaItems = collection
          .getFields()
          .map<SchemaInitializerItemType>((collectionField) => getFieldInitializerItem({
            collectionField,
+           schema,
+           remove,
+           insert
+         }))

        return schemaItems;
      },
    }
  ]
});
```

- [useDesignable()](https://client.docs.nocobase.com/core/ui-schema/designable#usedesignable): Предоставляет методы для добавления, удаления и изменения схемы.
- [useSchemaInitializer()](https://client.docs.nocobase.com/core/ui-schema/schema-initializer#useschemainitializer): Предоставляет контекст SchemaInitializer.
  - `insert`: Используется для вставки схемы. Используется метод `insert` из `useSchemaInitializer()`, а не из `useDesignable()`, так как схемы имеют иерархическую структуру. `useSchemaInitializer()` работает на уровне SchemaInitializer, а `useDesignable()` — на уровне текущей схемы. Для вставки на уровень, связанный с SchemaInitializer, используется `insert` из `useSchemaInitializer()`.

```tsx | pure
function getInfoItemSchema(collectionFieldName: string) {
  return {
     type: 'void',
    'x-collection-field': collectionFieldName,
    // TODO
  }
}

interface GetFieldInitializerItemOptions {
  collectionField: CollectionFieldOptions;
  schema: ISchema;
  remove: (schema: ISchema) => void;
  insert: (schema: ISchema) => void;
}

function getFieldInitializerItem(options: GetFieldInitializerItemOptions) {
  const { collectionField, schema, remove, insert } = options;
  const title = collectionField.uiSchema?.title || collectionField.name;
  const name = collectionField.name;
  const collectionFieldSchema = Object.values(schema.properties || {}).find((item) => item['x-collection-field'] === name);
  return {
    name,
    type: 'switch',
    title,
    checked: !!collectionFieldSchema,
    onClick() {
      if (collectionFieldSchema) {
        remove(collectionFieldSchema)
        return;
      }
      insert(getInfoItemSchema(name))
    }
  } as SchemaInitializerItemType;
}
```

Функция `getInfoItemSchema` возвращает схему для поля, где ключевым является поле `x-collection-field`, которое указывает, к какому полю относится данная схема.

Схема поля ищется в `schema.properties`. Если поле существует, оно удаляется; если не существует, оно добавляется.

### 8. Завершение схемы и компонента подузлов

```ts
export const infoItemSettings = new SchemaSettings({
  name: 'fieldSettings:info',
  items: [
    {
      name: 'remove',
      type: 'remove',
      componentProps: {
        removeParentsIfNoChildren: true,
        breakRemoveOn(s) {
          return s['x-component'] === 'Grid';
        },
      },
    }
  ]
})

export const InfoItem = () => {
  const fieldSchema = useFieldSchema();
  const collection = useCollection();
  const collectionFieldName = fieldSchema.name;
  return <pre>{JSON.stringify(collection.getField(collectionFieldName), null, 2)}</pre>
}

function getInfoItemSchema(collectionFieldName: string) {
  return {
    type: 'void',
    'x-collection-field': collectionFieldName,
    'x-component': 'Grid.Row',
    properties: {
      [uid()]: {
        type: 'void',
        'x-component': 'Grid.Col',
        properties: {
          [collectionFieldName]: {
            type: 'void',
            'x-component': 'InfoItem',
            'x-decorator': 'CardItem',
            'x-settings': infoItemSettings.name,
          },
        },
      },
    },
  } as ISchema;
}
```

В `getInfoBlockSchema()` используется компонент `Grid` как родительский, поэтому подузлы должны использовать компоненты `Grid.Row` и `Grid.Col`, а в `Grid.Col` размещается компонент `InfoItem`.

Компонент `InfoItem` отображает информацию о поле. Он получает схему текущего поля через `schema.name`, соответствующую `collectionFieldName`, затем использует [collection.getField(collectionFieldName)](https://client.docs.nocobase.com/core/data-source/collection#collectiongetfieldname) для получения подробной информации о поле и отображает её.

Затем зарегистрируйте компоненты `InfoItem` и `infoItemSettings` в системе:

```ts
export class PluginInitializerComplexDataBlockClient extends Plugin {
  async load() {
    this.app.addComponents({ InfoBlock, InfoItem });
    this.app.schemaSettingsManager.add(infoBlockSettings, infoItemSettings);
  }
}
```

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/20240522-190508.mp4" type="video/mp4" />
</video>

## Сборка и развертывание в продакшен

Следуйте инструкциям из документации [Сборка и упаковка плагина](/development/your-fisrt-plugin#сборка-и-упаковка-плагина) для сборки и развертывания плагина.

Если вы используете клонированный исходный код, выполните полную сборку, чтобы собрать зависимости плагина:

```bash
yarn build
```

Если проект создан с помощью `create-nocobase-app`, выполните:

```bash
yarn build @nocobase-sample/plugin-initializer-configure-fields --tar
```

После этого в папке `storage/tar/@nocobase-sample/plugin-initializer-configure-fields.tar.gz` появится архив плагина. Установите его через [загрузку](/welcome/getting-started/plugin).
