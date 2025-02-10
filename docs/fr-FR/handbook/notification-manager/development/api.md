# API

## Côté Serveur

### `BaseNotificationChannel`

Cette classe abstraite représente une base pour différents types de canaux de notification, définissant des interfaces essentielles pour l'implémentation des canaux. Pour ajouter un nouveau canal de notification, vous devez étendre cette classe et implémenter ses méthodes.

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

Ce plugin côté serveur sert d'outil de gestion des notifications, fournissant des méthodes pour enregistrer des types de canaux de notification et envoyer des notifications.

#### `registerChannelType()`

Cette méthode enregistre un nouveau type de canal côté serveur. Voici un exemple d'utilisation.

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

##### Signature

`registerChannelType({ type, Channel }: { type: string, Channel: BaseNotificationChannel })`

#### `send()`

La méthode `send` est utilisée pour envoyer des notifications via un canal spécifié.

```ts
send('in-app-message', 
  message: [
    receivers: [1, 2, 3],
    receiverType: 'userId',
    content: 'Test message in-app',
    title: 'Title of test message'
  ],
  triggerFrom: 'workflow')

send('email', 
  message: [
    receivers: ['a@163.com', 'b@163.com'],
    receiverType: 'email',
    content: 'Test email',
    title: 'Title of test email'
  ],
  triggerFrom: 'workflow')
```

##### Signature

`send(sendConfig: { channelName: String, message: Object, receivers: ReceiversType, triggerFrom: String })`

Le champ `receivers` prend actuellement en charge deux formats : les identifiants d'utilisateurs NocoBase (`userId`) ou des configurations de canaux personnalisées (`channel-self-defined`).

```ts
type ReceiversType = 
  | { value: number[]; type: 'userId' }
  | { value: any; type: 'channel-self-defined'; channelType: string };
```

##### Informations détaillées

`sendConfig`

| Propriété      | Type             | Description              |
| -------------- | ---------------- | ------------------------ |
| `channelName`  | `string`         | Identifiant du canal     |
| `message`      | `object`         | Objet message            |
| `receivers`    | `ReceiversType`  | Destinataires            |
| `triggerFrom`  | `string`         | Source du déclenchement  |

## Côté Client

### `PluginNotificationManagerClient`

#### `channelTypes`

La bibliothèque des types de canaux enregistrés.

##### Signature

`channelTypes: Registry<registerTypeOptions>`

#### `registerChannelType()`

Enregistre un type de canal côté client.

##### Signature

`registerChannelType(params: registerTypeOptions)`

##### Type

```ts
type registerTypeOptions = {
  title: string; // Titre d'affichage pour le canal
  type: string;  // Identifiant du canal
  components: {
    ChannelConfigForm?: ComponentType // Composant du formulaire de configuration du canal;
    MessageConfigForm?: ComponentType<{ variableOptions: any }> // Composant du formulaire de configuration des messages;
    ContentConfigForm?: ComponentType<{ variableOptions: any }> // Composant du formulaire de configuration du contenu (uniquement pour le contenu du message, excluant la configuration du destinataire);
  };
  meta?: { // Métadonnées pour la configuration du canal
    createable?: boolean // Si de nouveaux canaux peuvent être ajoutés;
    editable?: boolean   // Si la configuration du canal peut être modifiée;
    deletable?: boolean  // Si la configuration du canal peut être supprimée;
  };
};

type RegisterChannelType = (params: ChannelType) => void
```
