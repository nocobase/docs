## Extension

NocoBase permet l'extension des types de canaux de notification, tels que les notifications par SMS, les notifications push d'applications, etc.

## Côté Client

### Enregistrement des Types de Canaux

La configuration du canal client et l'interface de configuration du message sont enregistrées via la méthode `registerChannelType` fournie par le plugin de gestion des notifications côté client :

```ts
import PluginNotificationManagerClient from '@nocobase/plugin-notification-manager/client';

class PluginNotificationExampleClient extends Plugin {
  async afterAdd() {}

  async beforeLoad() {}

  async load() {
    const notification = this.pm.get(PluginNotificationManagerClient);
    notification.registerChannelType({
      title: 'Exemple SMS', // Nom du type de canal
      type: 'example-sms',  // Identifiant du type de canal
      components: {
        ChannelConfigForm,   // Formulaire de configuration du canal
        MessageConfigForm,   // Formulaire de configuration du message
      },
    });
  }
}

export default PluginNotificationExampleClient;
```

## Côté Serveur

### Extension de la Classe Abstraite

Le cœur du développement serveur consiste à étendre la classe abstraite `BaseNotificationChannel` et à implémenter la méthode `send`, qui contient la logique métier pour l'envoi de notifications via le plugin étendu.

```ts
import { BaseNotificationChannel } from '@nocobase/plugin-notification-manager';

export class ExampleServer extends BaseNotificationChannel {
  async send(args): Promise<any> {
    console.log('ExampleServer send', args);
    return { status: 'success', message: args.message };
  }
}
```

### Enregistrement Serveur

La méthode `registerChannelType` du noyau du serveur de notifications doit être appelée pour enregistrer la classe d'implémentation du serveur dans le noyau :

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

## Exemple Complet

Voici un exemple d'extension de notification pour décrire en détail comment développer une extension. Supposons que nous souhaitons ajouter la notification par SMS à NocoBase en utilisant la passerelle SMS d'une plateforme.

### Création du Plugin

1. Exécutez la commande pour créer le plugin : `yarn pm add @nocobase/plugin-notification-example`

### Développement Côté Client

Pour le client, développez deux composants de formulaire : `ChannelConfigForm` (Formulaire de configuration du canal) et `MessageConfigForm` (Formulaire de configuration du message).

#### ChannelConfigForm

Pour envoyer des messages SMS, une clé API et un secret sont nécessaires. Créez un nouveau fichier nommé `ChannelConfigForm.tsx` dans le répertoire `src/client` :

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

#### MessageConfigForm

Le formulaire de configuration du message comprend principalement la configuration des destinataires (`receivers`) et du contenu du message (`content`). Créez un nouveau fichier nommé `MessageConfigForm.tsx` dans le répertoire `src/client` :

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

export default MessageConfigForm;
```

#### Enregistrement des Composants Client

Après avoir développé les composants de configuration de formulaire, enregistrez-les dans le noyau de gestion des notifications. Supposez que le nom de la plateforme est "Example". Modifiez `src/client/index.tsx` comme suit :

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
      title: tval('Exemple SMS', { ns: '@nocobase/plugin-notification-example' }),
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

### Développement Serveur

Le cœur du développement serveur consiste à étendre la classe abstraite `BaseNotificationChannel` et à implémenter la méthode `send`. Dans le répertoire `src/server`, ajoutez un fichier nommé `example-server.ts` :

```ts
import { BaseNotificationChannel } from '@nocobase/plugin-notification-manager';

export class ExampleServer extends BaseNotificationChannel {
  async send(args): Promise<any> {
    console.log('ExampleServer send', args);
    return { status: 'success', message: args.message };
  }
}
```

Ensuite, enregistrez l'extension serveur du plugin en modifiant `src/server/plugin.ts` :

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

### Enregistrement et Lancement du Plugin

1. Exécutez la commande d'enregistrement : `yarn pm add @nocobase/plugin-notification-example`
2. Exécutez la commande d'activation : `yarn pm enable @nocobase/plugin-notification-example`

### Configuration du Canal

Lors de la visite de la page de gestion des canaux de notifications, vous pouvez voir que le canal `Exemple SMS` a été activé.
![20241009164207-2024-10-09-16-42-08](https://static-docs.nocobase.com/20241009164207-2024-10-09-16-42-08.png)

Ajoutez un canal exemple.
![20241009164519-2024-10-09-16-45-20](https://static-docs.nocobase.com/20241009164519-2024-10-09-16-45-20.png)

Créez un nouveau flux de travail et configurez le nœud de notification.
![20241009172737-2024-10-09-17-27-38](https://static-docs.nocobase.com/20241009172737-2024-10-09-17-27-38.png)

Déclenchez l'exécution du flux de travail pour afficher les informations suivantes dans la console.
![20241009181617-2024-10-09-18-16-18](https://static-docs.nocobase.com/20241009181617-2024-10-09-18-16-18.png)
