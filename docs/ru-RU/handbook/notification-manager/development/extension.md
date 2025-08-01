# Расширение возможностей

NocoBase поддерживает расширение типов каналов уведомлений, включая SMS-уведомления, push-уведомления в приложениях и другие.

## Клиентская часть

### Регистрация типа канала

Интерфейс настройки канала и сообщения регистрируется через метод `registerChannelType`, предоставляемый клиентским плагином управления уведомлениями:

```ts
import PluginNotificationManagerClient from '@nocobase/plugin-notification-manager/client';

class PluginNotificationExampleClient extends Plugin {
  async afterAdd() {}

  async beforeLoad() {}

  async load() {
    const notification = this.pm.get(PluginNotificationManagerClient);
    notification.registerChannelType({
      title: 'Пример SMS', // Название типа канала
      type: 'example-sms', // Идентификатор типа канала
      components: {
        ChannelConfigForm,   // Форма настройки канала
        MessageConfigForm,   // Форма настройки сообщения
      },
    });
  }
}

export default PluginNotificationExampleClient;
```

## Серверная часть

### Расширение абстрактного класса

Основная задача серверной разработки - наследование от абстрактного класса `BaseNotificationChannel` и реализация метода `send`, содержащего бизнес-логику отправки уведомлений:

```ts
import { BaseNotificationChannel } from '@nocobase/plugin-notification-manager';

export class ExampleServer extends BaseNotificationChannel {
  async send(args): Promise<any> {
    console.log('ExampleServer send', args);
    return { status: 'success', message: args.message };
  }
}
```

### Регистрация на сервере

Для регистрации серверного класса необходимо вызвать метод `registerChannelType`:

```ts
import PluginNotificationManagerServer from '@nocobase/plugin-notification-manager';
import { Plugin } from '@nocobase/server';
import { ExampleServer } from './example-server';
export class PluginNotificationExampleServer extends Plugin {
  async load() {
    const notificationServer = this.pm.get(PluginNotificationManagerServer) as PluginNotificationManagerServer;
    notificationServer.registerChannelType({ type: 'example-sms', Channel: ExampleServer });
  }
}

export default PluginNotificationExampleServer;
```

## Полный пример

Рассмотрим пример расширения для добавления SMS-уведомлений через SMS-шлюз платформы.

### Создание плагина

1. Выполните команду для создания плагина: `yarn pm add @nocobase/plugin-notification-example`

### Разработка клиентской части

Необходимо создать два компонента:
- `ChannelConfigForm` - форма настройки канала
- `MessageConfigForm` - форма настройки сообщения

#### ChannelConfigForm

Для работы с SMS требуется API-ключ и секретный ключ. Создайте файл `ChannelConfigForm.tsx` в директории `src/client`:

```ts
import React from 'react';
import { SchemaComponent } from '@nocobase/client';
import useLocalTranslation from './useLocalTranslation';

const ChannelConfigForm = () => {
  const t = useLocalTranslation();
  return (
    <SchemaComponent
      scope={{ t }}
      schema={{
        type: 'object',
        properties: {
          apiKey: {
            'x-decorator': 'FormItem',
            type: 'string',
            title: '{{t("Transport")}}',
            'x-component': 'Input',
          },
          secret: {
            'x-decorator': 'FormItem',
            type: 'string',
            title: '{{t("Transport")}}',
            'x-component': 'Input',
          },
        },
      }}
    />
  );
};

export default ChannelConfigForm;
```

# Форма настройки сообщений

Форма настройки сообщения включает конфигурацию получателей (`receivers`) и содержимого сообщения (`content`). Создайте файл `MessageConfigForm.tsx` в директории `src/client`:

```ts
import React from 'react';
import { SchemaComponent } from '@nocobase/client';
import useLocalTranslation from './useLocalTranslation';

const MessageConfigForm = ({ variableOptions }) => {
  const { t } = useLocalTranslation();
  return (
    <SchemaComponent
      scope={{ t }}
      schema={{
        type: 'object',
        properties: {
          to: {
            type: 'array',
            required: true,
            title: `{{t("Получатели")}}`,
            'x-decorator': 'FormItem',
            'x-component': 'ArrayItems',
            items: {
              type: 'void',
              'x-component': 'Space',
              properties: {
                sort: {
                  type: 'void',
                  'x-decorator': 'FormItem',
                  'x-component': 'ArrayItems.SortHandle',
                },
                input: {
                  type: 'string',
                  'x-decorator': 'FormItem',
                  'x-component': 'Variable.Input',
                  'x-component-props': {
                    scope: variableOptions,
                    useTypedConstant: ['string'],
                    placeholder: `{{t("Номер телефона")}}`,
                  },
                },
                remove: {
                  type: 'void',
                  'x-decorator': 'FormItem',
                  'x-component': 'ArrayItems.Remove',
                },
              },
            },
            properties: {
              add: {
                type: 'void',
                title: `{{t("Добавить номер телефона")}}`,
                'x-component': 'ArrayItems.Addition',
              },
            },
          },
          content: {
            type: 'string',
            required: true,
            title: `{{t("Содержимое")}}`,
            'x-decorator': 'FormItem',
            'x-component': 'Variable.RawTextArea',
            'x-component-props': {
              scope: variableOptions,
              placeholder: 'Привет,',
              autoSize: {
                minRows: 10,
              },
            },
          },
        },
      }}
    />
  );
};

export default MessageConfigForm
```

## Регистрация клиентских компонентов

После разработки компонентов форм зарегистрируем их в ядре управления уведомлениями. Предположим, название платформы - "Пример". Редактируем `src/client/index.tsx`:

```ts
import { Plugin } from '@nocobase/client';
import PluginNotificationManagerClient from '@nocobase/plugin-notification-manager/client';
import { tval } from '@nocobase/utils/client';
import ChannelConfigForm from './ChannelConfigForm';
import MessageConfigForm from './MessageConfigForm';

class PluginNotificationExampleClient extends Plugin {
  async afterAdd() {}

  async beforeLoad() {}

  async load() {
    const notification = this.pm.get(PluginNotificationManagerClient);
    notification.registerChannelType({
      title: tval('Пример SMS', { ns: '@nocobase/plugin-notification-example' }),
      type: 'example-sms',
      components: {
        ChannelConfigForm,
        MessageConfigForm,
      },
    });
  }
}

export default PluginNotificationExampleClient;
```

На этом клиентская часть разработки завершена.

## Серверная разработка

Основная задача серверной части - расширить абстрактный класс `BaseNotificationChannel` и реализовать метод `send`. В директории `src/server` создаем файл `example-server.ts`:

```ts
import { BaseNotificationChannel } from '@nocobase/plugin-notification-manager';

export class ExampleServer extends BaseNotificationChannel {
  async send(args): Promise<any> {
    console.log('ExampleServer send', args);
    return { status: 'success', message: args.message };
  }
}
```

Затем регистрируем серверный плагин, редактируя `src/server/plugin.ts`:

```ts
import PluginNotificationManagerServer from '@nocobase/plugin-notification-manager';
import { Plugin } from '@nocobase/server';
import { ExampleServer } from './example-server';
export class PluginNotificationExampleServer extends Plugin {
  async load() {
    const notificationServer = this.pm.get(PluginNotificationManagerServer) as PluginNotificationManagerServer;
    notificationServer.registerChannelType({ type: 'example-sms', Channel: ExampleServer });
  }
}

export default PluginNotificationExampleServer;
```

## Регистрация и запуск плагина

1. Выполните команду регистрации: `yarn pm add @nocobase/plugin-notification-example`
2. Активируйте плагин: `yarn pm enable @nocobase/plugin-notification-example`

## Настройка канала

На странице управления каналами уведомлений вы увидите, что канал `Пример SMS` активирован.
![20241009164207-2024-10-09-16-42-08](https://static-docs.nocobase.com/20241009164207-2024-10-09-16-42-08.png)

Добавьте тестовый канал.
![20250418074409-2025-04-18-07-44-09](https://static-docs.nocobase.com/20250418074409-2025-04-18-07-44-09.png)

Создайте новый workflow и настройте узел уведомлений.
![20250418074832-2025-04-18-07-48-32](https://static-docs.nocobase.com/20250418074832-2025-04-18-07-48-32.png)

При запуске workflow в консоли будет выведена следующая информация.
![20250418081746-2025-04-18-08-17-48](https://static-docs.nocobase.com/20250418081746-2025-04-18-08-17-48.png)


