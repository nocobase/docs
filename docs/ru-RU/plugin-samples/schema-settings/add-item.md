# Добавление элементов в существующие SchemaSettings

## Описание сценария

В процессе разработки блоков, операций или полей может потребоваться настройка их свойств. Однако существующие конфигурации не всегда удовлетворяют требованиям, поэтому возникает необходимость добавления новых элементов конфигурации в соответствии с потребностями.

## Описание примера

На данный момент в конфигурации блока Table отсутствует свойство `showIndex`. В этом примере мы добавим свойство `showIndex`, которое будет управлять отображением порядкового номера.

Этот пример демонстрирует использование `SchemaSettings`. Подробности о расширении блоков см. в документации [Расширения блоков](/plugin-samples/block).

Полный код примера доступен в [plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-schema-settings-add-item).

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/20240601161535_rec_.mp4" type="video/mp4" />
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
yarn pm create @nocobase-sample/plugin-schema-settings-add-item
yarn pm enable @nocobase-sample/plugin-schema-settings-add-item
```

Запустите проект:

```bash
yarn dev
```

После входа в систему перейдите по адресу [http://localhost:13000/admin/pm/list/local/](http://localhost:13000/admin/pm/list/local/), чтобы убедиться, что плагин установлен и активирован.

## Реализация функциональности

Перед началом работы с этим примером необходимо ознакомиться с основными концепциями:

- [Руководство по SchemaSettings](/development/client/ui-schema/settings): Используется для настройки свойств блоков, полей и операций.
- [API SchemaSettings](https://client.docs.nocobase.com/core/ui-schema/schema-settings): Описание API для настройки свойств.
- [Протокол UI Schema](/development/client/ui-schema/what-is-ui-schema): Подробное описание структуры схемы и роли каждого свойства.
- [Дизайнер Designable](/development/client/ui-schema/designable): Используется для изменения схемы.
- [TableV2](https://client.docs.nocobase.com/components/table-v2): Документация по блоку Table.

Для добавления новых элементов конфигурации в существующие блоки, поля или операции необходимо выполнение трех условий:

- Компонент должен поддерживать новое свойство.
- Схема должна быть правильно настроена.
- Свойства схемы должны корректно передаваться в компонент.

В данном примере мы добавим свойство `showIndex` в блок Table для управления отображением порядкового номера.

- **Проверка поддержки свойства `showIndex` блоком TableV2**: Согласно [документации](https://client.docs.nocobase.com/components/table-v2), блок Table поддерживает свойство `showIndex`.
- **Проверка места хранения свойств компонента `TableV2` в схеме**: Согласно [документации](https://client.docs.nocobase.com/ui-schema/blocks/data/table), свойства хранятся в `x-decorator-props`.
- **Проверка передачи свойства `showIndex` в компонент `TableV2`**: Согласно [документации](https://client.docs.nocobase.com/ui-schema/blocks/data/table), свойство `showIndex` передается в компонент через `useTableBlockProps`.

### 1. Определение SchemaSettingsItem

Создайте файл `packages/plugins/@nocobase-sample/plugin-schema-settings-add-item/src/client/tableShowIndexSettingsItem.tsx`:

```ts
import { SchemaSettingsItemType, useDesignable } from '@nocobase/client';
import { useFieldSchema } from '@formily/react';

export const tableShowIndexSettingsItem: SchemaSettingsItemType = {
  name: 'showIndex',
  type: 'switch',
  useComponentProps() {
    return {};
  },
};
```

Мы определили элемент конфигурации `showIndex` с типом `switch`.

- `name`: Имя элемента конфигурации, используемое для операций добавления, удаления и изменения.
- `type`: Тип элемента конфигурации, определяющий, какой компонент будет использоваться для рендеринга. Дополнительные типы см. в [API SchemaSettings](https://client.docs.nocobase.com/core/ui-schema/schema-settings#built-in-components-and-types).
- `useComponentProps`: Используется для настройки свойств компонента.

### 2. Изменение схемы

Обновите файл `tableShowIndexSettingsItem.tsx`:

```diff
import { SchemaSettingsItemType, useDesignable } from '@nocobase/client';
import { useFieldSchema } from '@formily/react';

export const tableShowIndexSettingsItem: SchemaSettingsItemType = {
  name: 'showIndex',
  type: 'switch',
  useComponentProps() {
+   const fieldSchema = useFieldSchema();
+   const dn = useDesignable();
+   return {
+     title: 'Show Index',
+     checked: !!fieldSchema['x-decorator-props'].showIndex,
+     onChange(v: boolean) {
+       dn.deepMerge({
+         'x-uid': fieldSchema['x-uid'],
+         'x-decorator-props': {
+           ...fieldSchema['x-decorator-props'],
+           showIndex: v,
+         },
+       });
+     },
+   };
  },
};
```

**Хуки:**

- [useFieldSchema](https://client.docs.nocobase.com/core/ui-schema/designable#usefieldschema): Используется для получения схемы текущего поля.
- [useDesignable](https://client.docs.nocobase.com/core/ui-schema/designable#usedesignable): Используется для изменения схемы.

**Свойства:**

- `title`: Заголовок компонента Switch.
- `checked`: Состояние переключателя, определяется через `fieldSchema['x-decorator-props'].showIndex`. Подробности см. в [Table Block Schema](https://client.docs.nocobase.com/ui-schema/blocks/data/table).
- `onChange`: Событие изменения значения переключателя, использует `dn.deepMerge` для обновления схемы.

**`dn.deepMerge`:** Используется для изменения схемы.

- `x-uid`: Уникальный идентификатор поля, используемый для запросов и изменений на сервере.
- `x-decorator-props`: Свойства поля, используемые для настройки компонента.

### 3. Регистрация SchemaSettingsItem

Обновите файл `packages/plugins/@nocobase-sample/plugin-schema-settings-add-item/src/client/index.ts`:

```ts
import { Plugin } from '@nocobase/client';
import { tableShowIndexSettingsItem } from './tableShowIndexSettingsItem'

export class PluginSchemaSettingsAddItemClient extends Plugin {
  async load() {
    this.schemaSettingsManager.addItem('blockSettings:table', tableShowIndexSettingsItem.name, tableShowIndexSettingsItem)
  }
}

export default PluginSchemaSettingsAddItemClient;
```

После этого в конфигурации блока Table появится новый элемент `Show Index`.

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/20240601161535_rec_.mp4" type="video/mp4" />
</video>

## Сборка и развертывание в продакшен

Следуйте инструкциям из документации [Сборка и упаковка плагина](/development/your-fisrt-plugin#сборка-и-упаковка-плагина) для сборки и развертывания плагина.

Если вы используете клонированный исходный код, выполните полную сборку, чтобы собрать зависимости плагина:

```bash
yarn build
```

Если проект создан с помощью `create-nocobase-app`, выполните:

```bash
yarn build @nocobase-sample/plugin-schema-settings-add-item --tar
```

После этого в папке `storage/tar/@nocobase-sample/plugin-schema-settings-add-item.tar.gz` появится архив плагина. Установите его через [загрузку](/welcome/getting-started/plugin).
