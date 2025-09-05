# Страница конфигурации таблицы

## Описание сценария

Интерфейс конфигурации состоит из таблицы, которая позволяет добавлять, редактировать и удалять данные.

## Описание примера

Предположим, нам нужно создать плагин для уведомлений по электронной почте. Этот плагин может содержать несколько шаблонов, каждый из которых включает информацию, такую как тема письма и его содержимое. Нам нужен интерфейс конфигурации для управления этими шаблонами.

Полный код примера для этой документации можно найти в репозитории [plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-settings-table).

## Инициализация плагина

Следуя инструкциям из [Создание первого плагина](/development/your-first-plugin), если у вас ещё нет проекта, создайте его. Если проект уже существует или вы клонировали исходный код, этот шаг можно пропустить.

```bash
yarn create nocobase-app my-nocobase-app -d sqlite
cd my-nocobase-app
yarn install
yarn nocobase install
```

Далее инициализируйте плагин и добавьте его в систему:

```bash
yarn pm create @nocobase-sample/plugin-settings-table
yarn pm enable @nocobase-sample/plugin-settings-table
```

Затем запустите проект:

```bash
yarn dev
```

После входа в систему перейдите по адресу [http://localhost:13000/admin/pm/list/local/](http://localhost:13000/admin/pm/list/local/), чтобы убедиться, что плагин установлен и активирован.

## Реализация серверной части

### 1. Создание таблицы данных

На серверной стороне основная задача — создание таблицы данных для хранения конфигурационной информации. Для создания таблицы необходимо ознакомиться со следующими концепциями:

- [Таблицы и поля](/development/server/collections)
- [Создание таблиц](/development/server/collections/configure#defining-tables-in-plugin-code)
- [Типы полей](/development/server/collections/options#field-type)
- [API defineCollection()](/api/database#definecollection)
- [API коллекций](/api/database/collection)

Для этого примера создайте файл `packages/plugins/@nocobase-sample/plugin-settings-table/src/server/collections/email-templates.ts` со следующим содержимым:

```ts
import { defineCollection } from '@nocobase/database';

export default defineCollection({
  name: 'samplesEmailTemplates',
  fields: [
    {
      type: 'string',
      name: 'subject',
    },
    {
      type: 'text',
      name: 'content',
    },
  ],
});
```

Мы создали таблицу данных `samplesEmailTemplates` с двумя полями: `subject` и `content`. В соответствии с потребностями, для `subject` используется поле однострочного текста, а для `content` — поле форматированного текста.

- Поле `subject` является однострочным текстом, поэтому его тип установлен как `string`.
- Поле `content` является длинным текстом, поэтому его тип установлен как `text`.

### 2. Применение обновления

Необходимо обновить базу данных с новой структурой таблицы. Для этого выполните следующую команду:

```bash
yarn nocobase upgrade
```

![img_v3_02av_eb156d0e-9f25-4702-a5de-2bfa5cde84bg](https://static-docs.nocobase.com/img_v3_02av_eb156d0e-9f25-4702-a5de-2bfa5cde84bg.jpg)

## Реализация клиентской части

### 1. Создание страницы конфигурации плагина

В разделе [Добавление страницы конфигурации плагина (один маршрут)](/plugin-samples/router/add-setting-page-single-route) мы подробно описали этот процесс, поэтому здесь не будем его повторять.

Измените файл `packages/plugins/@nocobase-sample/plugin-settings-table/src/client/index.tsx` следующим образом:

```tsx | pure
import { Plugin } from '@nocobase/client';
// @ts-ignore
import { name } from '../../package.json';

export class PluginSettingsTableClient extends Plugin {
  async load() {
    this.app.pluginSettingsManager.add(name, {
      title: 'Таблица настроек плагина',
      icon: 'TableOutlined',
      Component: () => 'TODO',
    });
  }
}

export default PluginSettingsTableClient;
```

Затем перейдите по адресу [http://localhost:13000/admin/settings/@nocobase-sample/plugin-settings-table](http://localhost:13000/admin/settings/@nocobase-sample/plugin-settings-table), чтобы увидеть страницу конфигурации.

![img_v3_02av_c610403d-95d8-466a-a3d1-cfcab232057g](https://static-docs.nocobase.com/img_v3_02av_c610403d-95d8-466a-a3d1-cfcab232057g.jpg)

### 2. Определение структуры таблицы данных

Используя подход на основе схемы, сначала нужно определить структуру таблицы данных. Для определения структуры таблицы на клиентской стороне необходимо изучить следующие концепции:

- [Таблицы и поля](/development/server/collections#field-component)
- [Типы полей](/development/server/collections/options#field-type)
- [Интерфейс поля](/development/server/collections/options#field-interface)
- [Протокол UI Schema](/development/client/ui-schema/what-is-ui-schema)
- [Компоненты полей](https://client.docs.nocobase.com/components)

Создайте файл `packages/plugins/@nocobase-sample/plugin-settings-table/src/client/PluginSettingsTable.tsx` со следующим содержимым:

```ts
const emailTemplatesCollection = {
  name: 'samplesEmailTemplates',
  filterTargetKey: 'id',
  fields: [
    {
      type: 'string',
      name: 'subject',
      interface: 'input',
      uiSchema: {
        title: 'Тема',
        required: true,
        'x-component': 'Input',
      },
    },
    {
      type: 'text',
      name: 'content',
      interface: 'richText',
      uiSchema: {
        title: 'Содержимое',
        required: true,
        'x-component': 'RichText',
      },
    },
  ],
};
```

Мы определили таблицу данных `samplesEmailTemplates` с двумя полями: `subject` и `content`. Поля описаны следующим образом:

- `type`: Значение должно соответствовать типу поля таблицы данных на серверной стороне.
- `name`: Имя поля, должно совпадать с именем поля на серверной стороне.
- `interface`:
  - Поле `subject`: Однострочный текст, поэтому значение `input`.
  - Поле `content`: Форматированный текст, поэтому значение `richText`.
- `uiSchema`: Определяет рендеринг элементов формы на клиентской стороне.
  - `type`: Для однострочного и форматированного текста используется тип `string`.
  - `title`: Заголовок элемента формы.
  - `required`: Обязательное поле, поэтому значение `true`.
  - `x-component`:
    - Поле `subject`: Используется компонент [Input](https://client.docs.nocobase.com/components/input).
    - Поле `content`: Используется компонент [RichText](https://client.docs.nocobase.com/components/rich-text).

### 3. Создание схемы таблицы

Для создания схемы формы необходимы следующие знания:

- [Компонент таблицы](https://client.docs.nocobase.com/components/table-v2)
- [Компонент CollectionField](https://client.docs.nocobase.com/core/data-source/collection-field)
- [Компонент CardItem](https://client.docs.nocobase.com/components/card-item)
- [Протокол схемы](/development/client/ui-schema/what-is-ui-schema)
- [Компонент DataBlockProvider](https://client.docs.nocobase.com/core/data-block/data-block-provider)

Мы ссылаемся на пример [Расширение таблицы коллекции](https://client.docs.nocobase.com/components/table-v2#extends-collection) и продолжаем изменять файл `packages/plugins/@nocobase-sample/plugin-settings-table/src/client/PluginSettingsTable.tsx`:

```tsx | pure
import { ISchema } from '@nocobase/client';
import { uid } from '@formily/shared'

const schema: ISchema = {
  type: 'void',
  name: uid(),
  'x-component': 'CardItem',
  'x-decorator': 'TableBlockProvider',
  'x-decorator-props': {
    collection: emailTemplatesCollection.name,
    action: 'list',
    showIndex: true,
    dragSort: false,
  },
  properties: {
    table: {
      type: 'array',
      'x-component': 'TableV2',
      'x-use-component-props': 'useTableBlockProps',
      'x-component-props': {
        rowKey: 'id',
        rowSelection: {
          type: 'checkbox',
        },
      },
      properties: {
        subject: {
          type: 'void',
          title: 'Тема',
          'x-component': 'TableV2.Column',
          properties: {
            subject: {
              type: 'string',
              'x-component': 'CollectionField',
              'x-pattern': 'readPretty',
            },
          },
        },
        content: {
          type: 'void',
          title: 'Содержимое',
          'x-component': 'TableV2.Column',
          properties: {
            content: {
              type: 'string',
              'x-component': 'CollectionField',
              'x-pattern': 'readPretty',
            },
          },
        },
      },
    },
  },
}
```

- [CardItem](https://client.docs.nocobase.com/components/card-item): Компонент карты, обеспечивающий отображение в стиле карточки.
- [DataBlockProvider](https://client.docs.nocobase.com/core/data-block/data-block-provider): Компонент блока данных, предоставляющий данные дочерним узлам. Поскольку это форма, запрашивающая данные одной строки, мы указываем свойства `collection` и `action`.
- [TableV2](https://client.docs.nocobase.com/components/table-v2): Компонент таблицы для рендеринга форм.
- `useTableBlockProps`: Используется для получения свойств блока данных и передачи их компоненту TableV2, обычно без изменений.
- `TableV2.Column`: Компонент столбца таблицы для рендеринга столбцов.
- [CollectionField](https://client.docs.nocobase.com/core/data-source/collection-field): Компонент поля таблицы данных, используемый для чтения `UI Schema` из коллекции и её рендеринга.

### 4. Создание компонента таблицы

Для рендеринга схемы в компонент необходимо понимать следующее:

- Компонент [ExtendCollectionsProvider](https://client.docs.nocobase.com/core/data-source/extend-collections-provider) для расширения таблиц данных.
- Компонент [SchemaComponent](https://client.docs.nocobase.com/core/ui-schema/schema-component) для рендеринга форм.

Продолжите добавлять в файл `packages/plugins/@nocobase-sample/plugin-settings-table/src/client/PluginSettingsTable.tsx`:

```tsx | pure
import React from 'react';
import { ExtendCollectionsProvider, SchemaComponent } from '@nocobase/client';
export const PluginSettingsTable = () => {
  return (
    <ExtendCollectionsProvider collections={[emailTemplatesCollection]}>
      <SchemaComponent schema={schema} scope={{ useFormBlockProps, useSubmitActionProps }} />
    </ExtendCollectionsProvider>
  );
};
```

### 5. Регистрация страницы конфигурации плагина

Измените файл `packages/plugins/@nocobase-sample/plugin-settings-table/src/client/index.tsx` следующим образом:

```diff
import { Plugin } from '@nocobase/client';
// @ts-ignore
import { name } from '../../package.json';
+ import { PluginSettingsTable } from './PluginSettingsTable'

export class PluginSettingsTableClient extends Plugin {
  async load() {
    this.app.pluginSettingsManager.add(name, {
      title: 'Таблица настроек плагина',
      icon: 'TableOutlined',
-     Component: () => 'TODO',
+     Component: PluginSettingsTable,
    });
  }
}

export default PluginSettingsTableClient;
```

Затем перейдите по адресу [http://localhost:13000/admin/settings/@nocobase-sample/plugin-settings-table](http://localhost:13000/admin/settings/@nocobase-sample/plugin-settings-table), чтобы увидеть страницу конфигурации.

![img_v3_02av_97fd272d-1333-4faf-9ce1-6363c6a049dg](https://static-docs.nocobase.com/img_v3_02av_97fd272d-1333-4faf-9ce1-6363c6a049dg.jpg)

### 6. Реализация функции «Добавить новую запись»

На данный момент наша таблица не содержит данных, поэтому нужно добавить функцию «Добавить новую запись». Для этого обратитесь к следующей документации:

- Компонент таблицы [Пример с ActionToolbar](https://client.docs.nocobase.com/components/table-v2)
- [Компонент формы](https://client.docs.nocobase.com/components/form-v2)
- [Компонент действия](https://client.docs.nocobase.com/components/action)

Продолжите редактировать файл `packages/plugins/@nocobase-sample/plugin-settings-table/src/client/PluginSettingsTable.tsx`:

```tsx | pure
import React from 'react';
import { ISchema, useActionContext, useDataBlockRequest, useDataBlockResource } from '@nocobase/client';
import { App as AntdApp } from 'antd';
import { useForm } from '@formily/react';

const schema: ISchema = {
  // ...
  properties: {
    actions: {
      type: 'void',
      'x-component': 'ActionBar',
      'x-component-props': {
        style: {
          marginBottom: 20,
        },
      },
      properties: {
        add: {
          type: 'void',
          'x-component': 'Action',
          title: 'Добавить новую',
          'x-align': 'right',
          'x-component-props': {
            type: 'primary',
          },
          properties: {
            drawer: {
              type: 'void',
              'x-component': 'Action.Drawer',
              title: 'Добавить новую',
              properties: {
                form: {
                  type: 'void',
                  'x-component': 'FormV2',
                  properties: {
                    subject: {
                      'x-decorator': 'FormItem',
                      'x-component': 'CollectionField',
                    },
                    content: {
                      'x-decorator': 'FormItem',
                      'x-component': 'CollectionField',
                    },
                    footer: {
                      type: 'void',
                      'x-component': 'Action.Drawer.Footer',
                      properties: {
                        submit: {
                          title: 'Отправить',
                          'x-component': 'Action',
                          'x-use-component-props': 'useSubmitActionProps',
                        },
                      }
                    }
                  },
                },
              },
            },
          },
        },
      }
    },

    table: {
      // ...
    }
  }
}

const useSubmitActionProps = () => {
  const { setVisible } = useActionContext();
  const { message } = AntdApp.useApp();
  const form = useForm();
  const resource = useDataBlockResource();
  const { runAsync } = useDataBlockRequest();

  return {
    type: 'primary',
    async onClick() {
      await form.submit();
      const values = form.values;
      await resource.create({ values })
      await runAsync()
      message.success('Успешно сохранено');
      setVisible(false);
    },
  };
};
```

В данном контексте:

- [ActionBar](https://client.docs.nocobase.com/components/action#actionbar): Обеспечивает компоновку для кнопок действий.
- [Action](https://client.docs.nocobase.com/components/action): Кнопка «Добавить новую».
- [Action.Drawer](https://client.docs.nocobase.com/components/action#actiondrawer): Открывает модальное окно при нажатии.
- [FormV2](https://client.docs.nocobase.com/components/form-v2): Компонент формы.
- [FormItem](https://client.docs.nocobase.com/components/form-v2#formitem): Компонент элемента формы.
- [Action.Drawer.Footer](https://client.docs.nocobase.com/components/action#actiondrawerfooter): Нижняя часть модального окна.
- [useSubmitActionProps](https://client.docs.nocobase.com/core/data-block/use-data-block-request#use-submit-action-props): Используется для отправки формы.
  - `useActionContext()`: Получает контекст действия.
  - [useDataBlockResource()](https://client.docs.nocobase.com/core/data-block/data-block-resource-provider): Получает `resource`, предоставляемый `TableBlockProvider`, для операций CRUD.
  - [useDataBlockRequest()](https://client.docs.nocobase.com/core/data-block/data-block-request-provider): Объект запроса для блока таблицы; вызов `runAsync` обновляет данные таблицы.

Далее добавьте `useSubmitActionProps` в контекст:

```diff
export const PluginSettingsTable = () => {
  return (
    <ExtendCollectionsProvider collections={[emailTemplatesCollection]}>
-     <SchemaComponent schema={schema} />
+     <SchemaComponent schema={schema} scope={{ useSubmitActionProps }} />
    </ExtendCollectionsProvider>
  );
};
```

<video width="100%" controls>
  <source src="https://static-docs.nocobase.com/20240517-190400.mp4" type="video/mp4">
</video>

### 7. Реализация функции редактирования

Функция редактирования похожа на функцию «Добавить новую», но нужно добавить кнопку редактирования в таблице и изменять данные через модальное окно. Для реализации функции редактирования обратитесь к следующей документации:

- Компонент таблицы [Просмотр или редактирование записи](https://client.docs.nocobase.com/components/table-v2#view-or-edit-record)
- Компонент формы [Значения по умолчанию](https://client.docs.nocobase.com/components/form-v2#default-values)
- [useCollectionRecord()](https://client.docs.nocobase.com/core/data-block/collection-record-provider): Используется для получения данных текущей строки.

Продолжите редактировать файл `packages/plugins/@nocobase-sample/plugin-settings-table/src/client/PluginSettingsTable.tsx`:

```tsx | pure
import { useCollectionRecordData } from '@nocobase/client';
import { useMemo } from 'react';

const useEditFormProps = () => {
  const recordData = useCollectionRecordData();
  const form = useMemo(
    () =>
      createForm({
        values: recordData,
      }),
    [],
  );

  return {
    form,
  };
}

const schema: ISchema = {
  // ...
  properties: {
    // ...
    table: {
      // ...
      properties: {
        // ...
        actions: {
          type: 'void',
          title: 'Действия',
          'x-component': 'TableV2.Column',
          properties: {
            actions: {
              type: 'void',
              'x-component': 'Space',
              'x-component-props': {
                split: '|',
              },
              properties: {
                edit: {
                  type: 'void',
                  title: 'Редактировать',
                  'x-component': 'Action.Link',
                  'x-component-props': {
                    openMode: 'drawer',
                    icon: 'EditOutlined',
                  },
                  properties: {
                    drawer: {
                      type: 'void',
                      title: 'Редактировать',
                      'x-component': 'Action.Drawer',
                      properties: {
                        form: {
                          type: 'void',
                          'x-component': 'FormV2',
                          'x-use-component-props': 'useEditFormProps',
                          properties: {
                            subject: {
                              'x-decorator': 'FormItem',
                              'x-component': 'CollectionField',
                            },
                            content: {
                              'x-decorator': 'FormItem',
                              'x-component': 'CollectionField',
                            },
                            footer: {
                              type: 'void',
                              'x-component': 'Action.Drawer.Footer',
                              properties: {
                                submit: {
                                  title: 'Отправить',
                                  'x-component': 'Action',
                                  'x-use-component-props': 'useSubmitActionProps',
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            }
          },
        }
      }
    }
  }
}
```

`Table` передаёт данные каждой строки дочерним узлам через [CollectionRecordProvider](https://client.docs.nocobase.com/core/data-block/collection-record-provider).

В `useEditFormProps` мы используем `useCollectionRecordData()` для получения данных текущей строки, затем создаём форму с помощью `createForm`, передавая данные текущей строки в качестве значений по умолчанию.

Далее измените логику `useSubmitActionProps()` для поддержки как создания, так и редактирования:

```diff
const useSubmitActionProps = () => {
  // ...
+ const collection = useCollection();
  return {
    type: 'primary',
    async onClick() {
      await form.submit();
      const values = form.values;
-     await resource.create({ values })
+     if (values[collection.filterTargetKey]) {
+       await resource.update({
+         values,
+         filterByTk: values[collection.filterTargetKey],
+       });
+     } else {
+       await resource.create({
+         values,
+       });
+     }
      // ...
    },
  };
};
```

- [useCollection](https://client.docs.nocobase.com/core/data-source/collection-provider#usecollection): Объект таблицы данных, предоставляемый DataBlockProvider.

Наконец, зарегистрируйте `useEditFormProps` в контексте:

```diff
export const PluginSettingsTable = () => {
  return (
    <ExtendCollectionsProvider collections={[emailTemplatesCollection]}>
-     <SchemaComponent schema={schema} scope={{ useSubmitActionProps }} />
+     <SchemaComponent schema={schema} scope={{ useSubmitActionProps, useEditFormProps }} />
    </ExtendCollectionsProvider>
  );
};
```

<video width="100%" controls>
  <source src="https://static-docs.nocobase.com/20240517-190849.mp4" type="video/mp4">
</video>

### 8. Реализация функции удаления

Функция удаления относительно проста. Нужно добавить кнопку «Удалить» в столбец действий, и при её нажатии вызвать `resource.destroy()`, а затем обновить данные таблицы.

- Действие [Confirm](https://client.docs.nocobase.com/components/action#confirm)

Продолжите добавлять в файл `packages/plugins/@nocobase-sample/plugin-settings-table/src/client/PluginSettingsTable.tsx`:

```ts
import { ActionProps } from '@nocobase/client';

function useDeleteActionProps(): ActionProps {
  const { message } = AntdApp.useApp();
  const record = useCollectionRecordData();
  const resource = useDataBlockResource();
  const collection = useCollection();
  const { runAsync } = useDataBlockRequest();
  return {
    confirm: {
      title: 'Удалить',
      content: 'Вы уверены, что хотите удалить?',
    },
    async onClick() {
      await resource.destroy({
        filterByTk: record[collection.filterTargetKey]
      });
      await runAsync();
      message.success('Удалено!');
    },
  };
}

const schema: ISchema = {
  // ...
  properties: {
    // ...
    table: {
      // ...
      properties: {
        // ...
        actions: {
          // ...
          properties: {
            // ...
            delete: {
              type: 'void',
              title: 'Удалить',
              'x-component': 'Action.Link',
              'x-use-component-props': 'useDeleteActionProps',
            }
          }
        }
      }
    }
  }
}
```

Затем зарегистрируйте `useDeleteActionProps` в контексте:

```diff
export const PluginSettingsTable = () => {
  return (
    <ExtendCollectionsProvider collections={[emailTemplatesCollection]}>
-     <SchemaComponent schema={schema} scope={{ useSubmitActionProps, useEditFormProps }} />
+     <SchemaComponent schema={schema} scope={{ useSubmitActionProps, useEditFormProps, useDeleteActionProps }} />
    </ExtendCollectionsProvider>
  );
};
```

<video width="100%" controls>
  <source src="https://static-docs.nocobase.com/20240517-191110.mp4" type="video/mp4">
</video>

### 9. Использование данных конфигурации на странице

Существует два сценария использования данных формы: использование внутри страницы и глобальное использование. Разница между ними:

- **Глобальное использование**: При обновлении данных формы их нужно синхронизировать с глобальным состоянием для обновления в реальном времени.
- **Использование внутри страницы**: Поскольку страница автоматически уничтожается и создаётся при навигации, синхронизация данных не требуется.

На этом этапе мы рассмотрим использование данных формы внутри страницы.

Создайте файл `packages/plugins/@nocobase-sample/plugin-settings-table/src/client/PluginSettingsTablePage.tsx` со следующим содержимым:

```tsx | pure
import { useRequest } from '@nocobase/client';
import React from 'react';

export const PluginSettingsTablePage = () => {
  const { data, loading } = useRequest<{ data?: any[] }>({
    url: 'samplesEmailTemplates:list',
  });

  if (loading) return null;

  return <pre>{JSON.stringify(data?.data, null, 2)}</pre>
}
```

Затем импортируйте компонент `PluginSettingsTablePage` в компонент `PluginSettingsTable`:

```tsx | pure
import { PluginSettingsTablePage } from './PluginSettingsTablePage'
// ...

export class PluginSettingsTableClient extends Plugin {
  async load() {
    // ...

    this.app.router.add(`admin.${name}-page`, {
      path: '/admin/plugin-settings-table-page',
      Component: PluginSettingsTablePage,
    })
  }
}
```

После этого перейдите по адресу [http://localhost:13000/admin/plugin-settings-table-page](http://localhost:13000/admin/plugin-settings-table-page), чтобы увидеть данные формы.

![img_v3_02av_753dd9f1-9e8c-43c5-a1c6-1fb217844cag](https://static-docs.nocobase.com/img_v3_02av_753dd9f1-9e8c-43c5-a1c6-1fb217844cag.jpg)

### 10. Глобальное использование данных конфигурации

Для глобального использования и обновления в реальном времени необходимо использовать `Context` вместе с возможностями [Provider](/development/client/providers) NocoBase.

Создайте файл `packages/plugins/@nocobase-sample/plugin-settings-table/src/client/PluginSettingsTableProvider.tsx` со следующим содержимым:

```tsx | pure
import React, { createContext, FC } from 'react';
import { useRequest, UseRequestResult } from '@nocobase/client';

const PluginSettingsTableContext = createContext<UseRequestResult<{ data?: any[] }>>(null as any);

export const PluginSettingsTableProvider: FC<{ children: React.ReactNode }> = ({children}) => {
  const request = useRequest<{ data?: any[] }>({
    url: 'samplesEmailTemplates:list',
  });

  console.log('PluginSettingsTableProvider', request.data?.data);

  return <PluginSettingsTableContext.Provider value={request}>{children}</PluginSettingsTableContext.Provider>;
}

export const usePluginSettingsTableRequest = () => {
  return React.useContext(PluginSettingsTableContext);
};
```

Затем измените файл `packages/plugins/@nocobase-sample/plugin-settings-table/src/client/index.tsx`, чтобы зарегистрировать его глобально:

```ts
import { PluginSettingsTableProvider } from './PluginSettingsTableProvider'
// ...

export class PluginSettingsTableClient extends Plugin {
  async load() {
    // ...
    this.app.addProvider(PluginSettingsTableProvider)
  }
}
```

После обновления формы необходимо повторно загрузить глобальные данные. Измените файл `packages/plugins/@nocobase-sample/plugin-settings-table/src/client/PluginSettingsTable.tsx`:

```diff
import { usePluginSettingsTableRequest } from './PluginSettingsTableProvider';

// ...

const useSubmitActionProps = (): ActionProps => {
  // ...
+ const globalSettingsTableRequest = usePluginSettingsTableRequest();
  return {
    type: 'primary',
    htmlType: 'submit',
    async onClick() {
      // ...
+     await globalSettingsTableRequest.runAsync();
      message.success('Успешно сохранено!');
    },
  };
};

function useDeleteActionProps(): ActionProps {
+ const globalSettingsTableRequest = usePluginSettingsTableRequest();

  return {
    // ...
    async onClick() {
      // ...
+     await globalSettingsTableRequest.runAsync();
      message.success('Удалено!');
    }
  }
}
```

<video width="100%" controls>
  <source src="https://static-docs.nocobase.com/20240517-191452.mp4" type="video/mp4">
</video>

### Упаковка и загрузка в продакшен

Следуя документации [Сборка и упаковка плагина](/development/your-fisrt-plugin#build-and-package-plugin), вы можете упаковать плагин и загрузить его в продакшен.

Если вы клонировали исходный код, сначала выполните полную сборку, чтобы убедиться, что зависимости плагина собраны правильно:

```bash
yarn build
```

Если проект был создан с помощью `create-nocobase-app`, выполните:

```bash
yarn build @nocobase-sample/plugin-settings-table --tar
```

Это создаст файл `storage/tar/@nocobase-sample/plugin-settings-table.tar.gz`, который можно установить через [метод загрузки](/welcome/getting-started/plugin).
