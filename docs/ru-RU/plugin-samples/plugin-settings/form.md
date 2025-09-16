# Страница конфигурации формы

## Описание сценария

Интерфейс конфигурации состоит из формы.

## Описание примера

Предположим, нам нужно подключиться к стороннему картографическому сервису и настроить `key` и `secret` для карты. Мы можем добавить страницу конфигурации через плагин для ввода этой информации.

Полный код примера доступен в репозитории [plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-settings-form).

## Инициализация плагина

Следуя руководству [Создание первого плагина](/development/your-fisrt-plugin), создайте проект, если у вас его ещё нет. Если проект уже создан или вы клонировали исходный код, этот шаг можно пропустить.

```bash
yarn create nocobase-app my-nocobase-app -d sqlite
cd my-nocobase-app
yarn install
yarn nocobase install
```

Затем инициализируйте плагин и добавьте его в систему:

```bash
yarn pm create @nocobase-sample/plugin-settings-form
yarn pm enable @nocobase-sample/plugin-settings-form
```

Запустите проект:

```bash
yarn dev
```

После входа в систему перейдите по адресу [http://localhost:13000/admin/pm/list/local/](http://localhost:13000/admin/pm/list/local/), чтобы убедиться, что плагин установлен и активирован.

## Реализация серверной части

### 1. Создание таблицы базы данных

На серверной части основная задача — создание таблицы базы данных для хранения конфигурационной информации. Для создания таблиц нужно ознакомиться со следующими концепциями:

- [Таблицы и поля](/development/server/collections)
- [Создание таблиц](/development/server/collections/configure#в-плагин-коде)
- [Типы полей](/development/server/collections/options#field-type)
- [API defineCollection()](/api/database#definecollection)
- [API коллекций](/api/database/collection)

В этом примере создайте файл `packages/plugins/@nocobase-sample/plugin-settings-form/src/server/collections/map-configuration.ts` со следующим содержимым:

```ts
import { defineCollection } from '@nocobase/database';

export default defineCollection({
  name: 'SamplesMapConfiguration',
  fields: [
    {
      type: 'string',
      name: 'key',
    },
    {
      type: 'string',
      name: 'secret',
    },
  ],
});
```

Мы создали таблицу базы данных `SamplesMapConfiguration`, содержащую два поля: `key` и `secret`, оба типа `string`.

### 2. Выполнение обновления

Необходимо обновить базу данных с определённой таблицей, что можно сделать следующей командой:

```bash
yarn nocobase upgrade
```

![img_v3_02av_db5e9985-eb20-4420-a0b2-8a809ff05a5g](https://static-docs.nocobase.com/img_v3_02av_db5e9985-eb20-4420-a0b2-8a809ff05a5g.jpg)

## Реализация клиентской части

### 1. Создание страницы конфигурации плагина

Мы уже описали подробные шаги для [Добавления страницы конфигурации плагина (один маршрут)](/plugin-samples/router/add-setting-page-single-route), поэтому здесь не будем их повторять.

Измените файл `packages/plugins/@nocobase-sample/plugin-settings-form/src/client/index.tsx` следующим образом:

```tsx | pure
import { Plugin } from '@nocobase/client';
// @ts-ignore
import { name } from '../../package.json';

export class PluginSettingsFormClient extends Plugin {
  async load() {
    this.app.pluginSettingsManager.add(name, {
      title: 'Форма настроек плагина',
      icon: 'FormOutlined',
      Component: () => 'TODO',
    });
  }
}

export default PluginSettingsFormClient;
```

Затем перейдите по адресу [http://localhost:13000/admin/settings/@nocobase-sample/plugin-settings-form](http://localhost:13000/admin/settings/@nocobase-sample/plugin-settings-form), чтобы увидеть страницу конфигурации.

![img_v3_02av_c90b5767-97dd-4fef-8dd0-c7ff9a136a9g](https://static-docs.nocobase.com/img_v3_02av_c90b5767-97dd-4fef-8dd0-c7ff9a136a9g.jpg)

### 2. Определение структуры таблицы данных

На основе метода определения схемы сначала необходимо определить структуру таблицы данных. Для этого на клиентской стороне нужно понимать следующие концепции:

- [Таблицы и поля](/development/server/collections#field-component)
- [Типы полей](/development/server/collections/options#field-type)
- [Интерфейс поля](/development/server/collections/options#field-interface)
- [Протокол UI Schema](/development/client/ui-schema/what-is-ui-schema)
- [Компоненты полей](https://client.docs.nocobase.com/components)

Создайте файл `packages/plugins/@nocobase-sample/plugin-settings-form/src/client/PluginSettingsForm.tsx` со следующим содержимым:

```ts
const mapConfigurationCollection = {
  name: 'SamplesMapConfiguration',
  filterTargetKey: 'id',
  fields: [
    {
      type: 'string',
      name: 'key',
      interface: 'input',
      uiSchema: {
        title: 'Ключ',
        required: true,
        'x-component': 'Input',
      },
    },
    {
      type: 'string',
      name: 'secret',
      interface: 'input',
      uiSchema: {
        title: 'Секрет',
        required: true,
        'x-component': 'Input',
      },
    },
  ],
};
```

Мы определили таблицу данных `SamplesMapConfiguration` с двумя полями: `key` и `secret`. Поля описаны следующим образом:

- `type`: Поскольку значения строковые, установлено значение `string`, которое должно соответствовать типу поля на серверной стороне.
- `name`: Имя поля, должно совпадать с именем поля на серверной стороне.
- `interface`: Для строкового значения выбрано значение `input`.
- `uiSchema`: Определяет рендеринг компонентов формы на клиентской стороне.
  - `title`: Заголовок поля формы.
  - `required`: Поскольку поле обязательно, установлено значение `true`.
  - `x-component`: Выбран компонент [Input](https://client.docs.nocobase.com/components/input) для ввода однострочного текста.

### 3. Создание схемы формы

Для создания схем форм важны следующие концепции:

- [Компонент формы](https://client.docs.nocobase.com/components/form-v2)
- [Компонент CollectionField](https://client.docs.nocobase.com/core/data-source/collection-field)
- [Компонент CardItem](https://client.docs.nocobase.com/components/card-item)
- [Протокол схемы](/development/client/ui-schema/what-is-ui-schema)
- [Компонент DataBlockProvider](https://client.docs.nocobase.com/core/data-block/data-block-provider)
- [Компонент Action](https://client.docs.nocobase.com/components/action)

Продолжите добавлять в файл `packages/plugins/@nocobase-sample/plugin-settings-form/src/client/PluginSettingsForm.tsx`:

```ts
import { useMemo } from 'react';
import { App as AntdApp } from 'antd';
import { createForm } from '@formily/core';
import { useForm } from '@formily/react';
import { uid } from '@formily/shared';
import { ActionProps, ISchema, useCollection, useCollectionRecordData, useDataBlockResource } from '@nocobase/client';

const schema: ISchema = {
  type: 'void',
  name: uid(),
  'x-component': 'CardItem',
  'x-decorator': 'DataBlockProvider',
  'x-decorator-props': {
    collection: mapConfigurationCollection.name,
    action: 'get',
  },
  properties: {
    form: {
      type: 'void',
      'x-component': 'FormV2',
      'x-use-component-props': 'useFormBlockProps',
      properties: {
        key: {
          title: 'Ключ',
          'x-decorator': 'FormItem',
          'x-component': 'CollectionField',
        },
        secret: {
          title: 'Секрет',
          'x-decorator': 'FormItem',
          'x-component': 'CollectionField',
        },
        footer: {
          type: 'void',
          'x-component': 'Action',
          title: 'Отправить',
          'x-use-component-props': 'useSubmitActionProps',
        },
      },
    },
  },
};

const useFormBlockProps = () => {
  const recordData = useCollectionRecordData();
  const form = useMemo(
    () => createForm({
      initialValues: recordData,
    }),
    [recordData],
  );
  return {
    form,
  };
};

const useSubmitActionProps = (): ActionProps => {
  const form = useForm();
  const { message } = AntdApp.useApp();
  const collection = useCollection();
  const resource = useDataBlockResource();
  return {
    type: 'primary',
    htmlType: 'submit',
    async onClick() {
      await form.submit();
      const values = form.values;
      await resource.updateOrCreate({
        values,
        filterKeys: [collection.filterTargetKey],
      });
      message.success('Успешно сохранено!');
    },
  };
};
```

- [CardItem](https://client.docs.nocobase.com/components/card-item): Компонент карты, обеспечивающий компоновку в стиле карточки.
- [DataBlockProvider](https://client.docs.nocobase.com/core/data-block/data-block-provider): Компонент, предоставляющий данные дочерним узлам, с атрибутами `collection` и `action`, так как форма запрашивает данные одной строки.
- [FormV2](https://client.docs.nocobase.com/components/form-v2): Компонент формы для её рендеринга.
- `useFormBlockProps`: Используется для получения атрибутов блока данных и передачи их компоненту FormV2. Подробные примеры см. в разделе [Значения по умолчанию](https://client.docs.nocobase.com/components/form-v2#default-values).
- [CollectionField](https://client.docs.nocobase.com/core/data-source/collection-field): Компонент поля таблицы данных, используемый для чтения UI Schema коллекции и её рендеринга.
- [Action](https://client.docs.nocobase.com/components/action): Компонент кнопки действия, используемый для отправки формы.
- `useSubmitActionProps`: Используется для получения атрибутов кнопки отправки.
  - [useCollection](/core/data-source/collection-provider): Используется для получения информации о таблице данных.
  - [useDataBlockResource](/core/data-block/data-block-resource-provider): Хук, предоставляемый DataBlockProvider для доступа к ресурсам блока данных для операций CRUD.

### 4. Создание компонента формы

Для рендеринга схемы в компонент нужно понимать следующие концепции:

- Компонент [ExtendCollectionsProvider](https://client.docs.nocobase.com/core/data-source/extend-collections-provider) для расширения таблиц данных.
- Компонент [SchemaComponent](https://client.docs.nocobase.com/core/ui-schema/schema-component) для рендеринга форм.

Продолжите добавлять в файл `packages/plugins/@nocobase-sample/plugin-settings-form/src/client/PluginSettingsForm.tsx`:

```tsx | pure
import React from 'react';
import { ExtendCollectionsProvider, SchemaComponent } from '@nocobase/client';
export const PluginSettingsForm = () => {
  return (
    <ExtendCollectionsProvider collections={[mapConfigurationCollection]}>
      <SchemaComponent schema={schema} scope={{ useFormBlockProps, useSubmitActionProps }} />
    </ExtendCollectionsProvider>
  );
};
```

### 5. Регистрация страницы конфигурации плагина

Измените файл `packages/plugins/@nocobase-sample/plugin-settings-form/src/client/index.tsx` следующим образом:

```diff
import { Plugin } from '@nocobase/client';
// @ts-ignore
import { name } from '../../package.json';
+ import { PluginSettingsForm } from './PluginSettingsForm'

export class PluginSettingFormClient extends Plugin {
  async load() {
    this.app.pluginSettingsManager.add(name, {
      title: 'Форма настроек плагина',
      icon: 'FormOutlined',
-     Component: () => 'TODO',
+     Component: PluginSettingsForm,
    });
  }
}

export default PluginSettingFormClient;
```

Теперь перейдите по адресу [http://localhost:13000/admin/settings/@nocobase-sample/plugin-settings-form](http://localhost:13000/admin/settings/@nocobase-sample/plugin-settings-form), чтобы увидеть страницу конфигурации.

<video width="100%" controls>
  <source src="https://static-docs.nocobase.com/20240517-182716.mp4" type="video/mp4">
</video>

### 6. Использование данных конфигурации на странице

При использовании данных формы есть два сценария: использование данных внутри страницы и глобальное использование. Разница в следующем:

- Глобальное использование: После обновления данных формы их нужно синхронизировать с глобальным состоянием для обновления в реальном времени.
- Использование внутри страницы: Поскольку страница автоматически уничтожается и создаётся при переключении, синхронизация данных не требуется.

На этом этапе мы продемонстрируем использование данных формы внутри страницы.

Создайте файл `packages/plugins/@nocobase-sample/plugin-settings-form/src/client/PluginSettingsFormPage.tsx` со следующим содержимым:

```tsx | pure
import { useRequest } from '@nocobase/client';
import React from 'react';

export const PluginSettingsFormPage = () => {
  const { data, loading } = useRequest<{ data?: { key: string; secret: string } }>({
    url: 'SamplesMapConfiguration:get',
  });

  if (loading) return null;

  return <pre>{JSON.stringify(data?.data, null, 2)}</pre>
}
```

Затем добавьте компонент `PluginSettingsFormPage` в компонент `PluginSettingsForm`:

```tsx | pure
import { PluginSettingsFormPage } from './PluginSettingsFormPage'
// ...

export class PluginSettingFormClient extends Plugin {
  async load() {
    // ...

    this.app.router.add(`admin.${name}-page`, {
      path: '/admin/plugin-settings-form-page',
      Component: PluginSettingsFormPage,
    })
  }
}
```

Теперь перейдите по адресу [http://localhost:13000/admin/plugin-settings-form-page](http://localhost:13000/admin/plugin-settings-form-page), чтобы увидеть данные формы.

![img_v3_02av_70ade722-7069-4fc7-a2c3-c080f85ff30g](https://static-docs.nocobase.com/img_v3_02av_70ade722-7069-4fc7-a2c3-c080f85ff30g.jpg)

### 7. Глобальное использование данных конфигурации

Для глобального использования данных с обеспечением обновления в реальном времени необходимо использовать `Context` и возможности [Provider](/development/client/providers) NocoBase.

Создайте файл `packages/plugins/@nocobase-sample/plugin-settings-form/src/client/PluginSettingsFormProvider.tsx` со следующим содержимым:

```tsx | pure
import React, { createContext, FC } from 'react';
import { useRequest, UseRequestResult } from '@nocobase/client';

const PluginSettingsFormContext = createContext<UseRequestResult<{ data?: { key: string; secret: string } }>>(null as any);

export const PluginSettingsFormProvider: FC<{ children: React.ReactNode }> = ({children}) => {
  const request = useRequest<{ data?: { key: string; secret: string } }>({
    url: 'SamplesMapConfiguration:get',
  });

  console.log('PluginSettingsFormProvider', request.data?.data);

  return <PluginSettingsFormContext.Provider value={request}>{children}</PluginSettingsFormContext.Provider>;
}

export const usePluginSettingsFormRequest = () => {
  return React.useContext(PluginSettingsFormContext);
};
```

Затем измените файл `packages/plugins/@nocobase-sample/plugin-settings-form/src/client/index.tsx`, чтобы зарегистрировать его глобально:

```ts
import { PluginSettingsFormProvider } from './PluginSettingsFormProvider'
// ...

export class PluginSettingFormClient extends Plugin {
  async load() {
    // ...
    this.app.addProvider(PluginSettingsFormProvider)
  }
}
```

После обновления формы нужно повторно загрузить глобальные данные. Измените файл `packages/plugins/@nocobase-sample/plugin-settings-form/src/client/PluginSettingsForm.tsx`:

```diff
+ import { usePluginSettingsFormRequest } from './PluginSettingsFormProvider';

const useSubmitActionProps = (): ActionProps => {
  const form = useForm();
  const { message } = AntdApp.useApp();
  const collection = useCollection();
  const resource = useDataBlockResource();
+ const globalSettingsFormRequest = usePluginSettingsFormRequest();
  return {
    type: 'primary',
    htmlType: 'submit',
    async onClick() {
      await form.submit();
      const values = form.values;
      await resource.updateOrCreate({
        values,
        filterKeys: [collection.filterTargetKey],
      });
+     await globalSettingsFormRequest.runAsync();
      message.success('Успешно сохранено!');
    },
  };
};
```

<video width="100%" controls>
  <source src="https://static-docs.nocobase.com/20240517-182717.mp4" type="video/mp4">
</video>

## Упаковка и загрузка в продакшен

Следуя руководству [Сборка и упаковка плагина](/development/your-fisrt-plugin#构建并打包插件), вы можете упаковать плагин и загрузить его в продакшен.

Если вы клонировали исходный код, сначала выполните полную сборку, чтобы упаковать зависимости плагина:

```bash
yarn build
```

Если вы использовали `create-nocobase-app` для создания проекта, выполните:

```bash
yarn build @nocobase-sample/plugin-settings-form --tar
```

После этого появится файл `storage/tar/@nocobase-sample/plugin-settings-form.tar.gz`, который можно установить, следуя инструкциям по [загрузке плагина](/welcome/getting-started/plugin).
