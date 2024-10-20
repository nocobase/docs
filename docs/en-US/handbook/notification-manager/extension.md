# Notification Channel Extension

NocoBase enables the extension of notification channel types according to specific needs. By default, it includes a notification management core plugin, which handles the registration and management of these extended notification types.

## Extension API

### `PluginNotificationManagerServer`

This is the server class responsible for managing notifications.

#### `PluginNotificationManagerServer.send()`

The core method used to dispatch notifications. When invoked, it sends out notifications to the specified channel.

##### Signature

`({channelName, message, triggerFrom}) => Promise<Result>`

##### Detailed Information

| Attribute       | Type    | Description        |
| --------------- | ------- | ------------------ |
| `channelName`   | `string`| The identifier of the channel being used. |
| `message`       | `object`| The notification message object.          |
| `triggerFrom`   | `string`| The source of the notification trigger.   |
| `transports`    | log output methods   | Log output directories.      |

#### `PluginNotificationManagerServer.registerChannelType()`

Registers a new server-side notification channel type.

##### Signature

`({type, Channel}) => void`

##### Detailed Information

| Attribute       | Type                   | Description                    |
| --------------- | ---------------------- | ------------------------------ |
| `name`          | `string`               | The identifier of the channel. |
| `server`        | `BaseNotificationChannel` | The server-side extension class. |

## Client

Client-side extension plugins need to implement both a channel configuration form and a message configuration form for each notification channel.

### `PluginNotificationManagerClient`

The core client class for notification management.

#### `PluginNotificationManagerClient.registerChannelType()`

Type of client registration channel

##### Signature

```typescript
type ChannelType = {
  title: string; // Display name of the channel
  type: string;  // Identifier for the channel
  components: {
    ChannelConfigForm: ComponentType // Channel configuration form;
    MessageConfigForm?: ComponentType<{ variableOptions: any }> // Message configuration form;
  };
  meta?: { // Channel configuration meta information
    createable?: boolean // Whether to support new channels;
    editable?: boolean   // Whether the channel configuration information can be edited;
    deletable?: boolean  // Whether the channel configuration information can be deleted;
  };
};

type RegisterChannelType = (params: ChannelType) => void;
```

#### `PluginNotificationManagerClient.channelTypes`

A registry that stores all registered channel types.

##### Signature

```ts
import { Registry } from '@nocobase/utils/client';

type ChannelTypes = Registry<ChannelType>;
```

## Complete Example

Here's a sample notification extension to describe in detail how to develop an extension.
Suppose we want to add SMS notification to nocobase using a platform's SMS gateway.

### Plugin Creation

1. Create the plugin using the following command: `yarn pm add @nocobase/plugin-notification-example`.

### Client Development

For the client-side, we need to create two form components: ChannelConfigForm(channel configuration form) and MessageConfigForm(message configuration form).

#### ChannelConfigForm

A platform requires APIkey and secret when sending short messages, so our channel form content mainly includes the above two items. Create `ChannelConfigForm.tsx` file in `src/client` directory with the following contents:

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
            title: '{{t("API Key")}}',
            'x-component': 'Input',
          },
          secret: {
            'x-decorator': 'FormItem',
            type: 'string',
            title: '{{t("Secret")}}',
            'x-component': 'Input',
          },
        },
      }}
    />
  );
};

export default ChannelConfigForm;
```

#### MessageConfigForm

The message configuration form mainly includes the configuration of the receiver `receivers` and the message content `content`. `MessageConfigForm.tsx` file is created in the `src/client` directory, and the component receives `variableOptions` as variable parameters. Currently, the content form will be configured in the workflow node, which generally needs to consume workflow node variables. The details of the document are as follows:

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
            title: `{{t("Receivers")}}`,
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
                    placeholder: `{{t("Phone number")}}`,
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
                title: `{{t("Add phone number")}}`,
                'x-component': 'ArrayItems.Addition',
              },
            },
          },
          content: {
            type: 'string',
            required: true,
            title: `{{t("Content")}}`,
            'x-decorator': 'FormItem',
            'x-component': 'Variable.RawTextArea',
            'x-component-props': {
              scope: variableOptions,
              placeholder: 'Hi,',
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

#### Registering Client Components

After developing the form components, they need to be registered in the notification management core. Here is how you register the forms in the `src/client/index.tsx` file:

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
      title: tval('Example SMS', { ns: '@nocobase/plugin-notification-example' }),
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

At this point, the development of the client is complete.

### Server Development

For the server side, extend the abstract class `BaseNotificationChannel` and implement the `send` method, `send` method handles sending notifications. Add the file `example-server.ts` to the `src/server` directory with the following contents:

```ts
import { BaseNotificationChannel } from '@nocobase/plugin-notification-manager';

export class ExampleSever extends BaseNotificationChannel {
  async send(args): Promise<any> {
    console.log('ExampleSever send', args);
    return { status: 'success', message: args.message };
  }
}
```

The following needs to call the `registerChannelType` method to notify the server kernel to register the server extension plug-in, the edited `src/clinet/plugin.ts` file content is as follows:

```ts
import PluginNotificationManagerServer from '@nocobase/plugin-notification-manager';
import { Plugin } from '@nocobase/server';
import { ExampleSever } from './example-server';
export class PluginNotificationExampleServer extends Plugin {
  async load() {
    const notificationServer = this.pm.get(PluginNotificationManagerServer) as PluginNotificationManagerServer;
    notificationServer.registerChannelType({ type: 'example-sms', Channel: ExampleSever });
  }
}

export default PluginNotificationExampleServer;
```

### Plugin Registration and Activation

1. Register the plugin with: `yarn pm add @nocobase/plugin-notification-example`
2. Activate the plugin with: `yarn pm enable @nocobase/plugin-notification-example`

### Channel Configuration

Once the plugin is enabled, you can configure and manage notification channels, such as enabling `Example SMS`

![20241009164207-2024-10-09-16-42-08](https://static-docs.nocobase.com/20241009164207-2024-10-09-16-42-08.png)

Add a sample channel
![20241009164519-2024-10-09-16-45-20](https://static-docs.nocobase.com/20241009164519-2024-10-09-16-45-20.png)

Add a workflow and configure the notification node
![20241009172737-2024-10-09-17-27-38](https://static-docs.nocobase.com/20241009172737-2024-10-09-17-27-38.png)

When the workflow is triggered, you can see the console output as follows
![20241009181617-2024-10-09-18-16-18](https://static-docs.nocobase.com/20241009181617-2024-10-09-18-16-18.png)
