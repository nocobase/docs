# API (Программный интерфейс)

## Серверная часть

### `BaseNotificationChannel`

Абстрактный класс, представляющий базовый шаблон для различных типов каналов уведомлений. Определяет основные интерфейсы для реализации каналов. Для добавления нового канала уведомлений необходимо наследовать этот класс и реализовать его методы.

```ts
export abstract class BaseNotificationChannel<Message = any> {
  constructor(protected app: Application) {}
  abstract send(params: {
    channel: ChannelOptions;
    message: Message;
  }): Promise<{ message: Message; status: 'success' | 'fail'; reason?: string }>;
}
```

### `PluginNotificationManagerServer`

Серверный плагин для управления уведомлениями. Предоставляет методы для регистрации типов каналов уведомлений и отправки уведомлений.

#### `registerChannelType()`

Регистрирует новый тип канала на серверной стороне. Пример использования:

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

##### Сигнатура

`registerChannelType({ type, Channel }: {type: string, Channel: BaseNotificationChannel })`

#### `send()`

Метод для отправки уведомлений через указанный канал.

```ts
send('in-app-message', 
  message: [
    receivers: [1, 2, 3],
    receiverType: 'userId',
    content: 'Тестовое сообщение в приложении',
    title: 'Заголовок тестового сообщения'
  ],
  triggerFrom: 'workflow')

send('email', 
  message: [
    receivers: ['a@163.com', 'b@163.com'],
    receiverType: 'email',
    content: 'Тестовое email-сообщение',
    title: 'Заголовок тестового email'
  ],
  triggerFrom: 'workflow')
```

##### Сигнатура

`send(sendConfig: {channelName: String, message: Object, receivers: ReceiversType, triggerFrom: String })`

Поле `receivers` поддерживает два формата:
- ID пользователей NocoBase (`userId`)
- Пользовательские конфигурации каналов (`channel-self-defined`)

```ts
type ReceiversType = 
  | { value: number[]; type: 'userId' }
  | { value: any; type: 'channel-self-defined'; channelType: string };
```

##### Подробная информация

`sendConfig`

| Свойство       | Тип             | Описание               |
| -------------- | ---------------- | ---------------------- |
| `channelName`  | `string`         | Идентификатор канала   |
| `message`      | `object`         | Объект сообщения       |
| `receivers`    | `ReceiversType`  | Получатели             |
| `triggerFrom`  | `string`         | Источник триггера      |

## Клиентская часть

### `PluginNotificationManagerClient`

#### `channelTypes`

Библиотека зарегистрированных типов каналов.

##### Сигнатура

`channelTypes: Registry<registerTypeOptions>`

#### `registerChannelType()`

Регистрирует тип канала на клиентской стороне.

##### Сигнатура

`registerChannelType(params: registerTypeOptions)`

##### Типы

```ts
type registerTypeOptions = {
  title: string; // Отображаемое название канала
  type: string;  // Идентификатор канала
  components: {
    ChannelConfigForm?: ComponentType // Компонент формы конфигурации канала;
    MessageConfigForm?: ComponentType<{ variableOptions: any }> // Компонент формы конфигурации сообщения;
    ContentConfigForm?: ComponentType<{ variableOptions: any }> // Компонент формы конфигурации контента (только для содержимого сообщения, без конфигурации получателей);
  };
  meta?: { // Метаданные конфигурации канала
    createable?: boolean // Возможность создания новых каналов;
    editable?: boolean   // Возможность редактирования конфигурации канала;
    deletable?: boolean  // Возможность удаления конфигурации канала;
  };
};

type RegisterChannelType = (params: ChannelType) => void
```

