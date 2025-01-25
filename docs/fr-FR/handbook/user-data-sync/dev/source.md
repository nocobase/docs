# Extension des Sources de Données Synchronisées

## Vue d'ensemble

NocoBase permet aux utilisateurs d'étendre les types de sources de données pour la synchronisation des données utilisateur selon leurs besoins.

## Côté Serveur

### Interface de la Source de Données

Le plugin natif de synchronisation des données utilisateur fournit un enregistrement et une gestion pour les types de sources de données. Pour étendre un type de source de données, il faut hériter de la classe abstraite `SyncSource` fournie par le plugin et implémenter les interfaces standard pertinentes.

```ts
import { SyncSource, UserData } from '@nocobase/plugin-user-data-sync';

class CustomSyncSource extends SyncSource {
  async pull(): Promise<UserData[]> {
    return [];
  }
}
```

La classe `SyncSource` inclut une propriété `options` permettant de récupérer les configurations personnalisées pour la source de données.

```ts
import { SyncSource, UserData } from '@nocobase/plugin-user-data-sync';

class CustomSyncSource extends SyncSource {
  async pull(): Promise<UserData[]> {
    //...
    const { appid, secret } = this.options;
    //...
    return [];
  }
}
```

### Description des Champs `UserData`

| Champ        | Description                                   |
| ------------ | --------------------------------------------- |
| `dataType`   | Type de données, les options sont `user` et `department` |
| `uniqueKey`  | Champ identifiant unique                      |
| `records`    | Enregistrements des données                    |
| `sourceName` | Nom de la source de données                   |

Si `dataType` est `user`, le champ `records` contient les champs suivants :

| Champ         | Description     |
| ------------- | --------------- |
| `id`          | ID de l'utilisateur |
| `nickname`    | Surnom de l'utilisateur |
| `avatar`      | Avatar de l'utilisateur |
| `email`       | Email de l'utilisateur |
| `phone`       | Numéro de téléphone de l'utilisateur |
| `departments` | Liste des IDs de départements |

Si `dataType` est `department`, le champ `records` contient les champs suivants :

| Champ     | Description           |
| --------- | --------------------- |
| `id`      | ID du département     |
| `name`    | Nom du département    |
| `parentId`| ID du département parent |

### Exemple d'Implémentation de l'Interface Source de Données

```ts
import { SyncSource, UserData } from '@nocobase/plugin-user-data-sync';

class CustomSyncSource extends SyncSource {
  async pull(): Promise<UserData[]> {
    // ...
    const ThirdClientApi = new ThirdClientApi(
      this.options.appid,
      this.options.secret,
    );
    const departments = await this.clientapi.getDepartments();
    const users = await this.clientapi.getUsers();
    // ...
    return [
      {
        dataType: 'department',
        uniqueKey: 'id',
        records: departments,
        sourceName: this.instance.name,
      },
      {
        dataType: 'user',
        uniqueKey: 'id',
        records: users,
        sourceName: this.instance.name,
      },
    ];
  }
}
```

### Enregistrement d'un Type de Source de Données

La source de données étendue doit être enregistrée auprès du module de gestion des données.

```ts
import UserDataSyncPlugin from '@nocobase/plugin-user-data-sync';

class CustomSourcePlugin extends Plugin {
  async load() {
    const syncPlugin = this.app.pm.get(
      UserDataSyncPlugin,
    ) as UserDataSyncPlugin;
    if (syncPlugin) {
      syncPlugin.sourceManager.registerType('custom-source-type', {
        syncSource: CustomSyncSource,
        title: 'Source Personnalisée',
      });
    }
  }
}
```

---

## Côté Client

L'interface utilisateur côté client enregistre les types de sources de données en utilisant la méthode `registerType` fournie par l'interface client du plugin de synchronisation des données utilisateur :

```ts
import SyncPlugin from '@nocobase/plugin-user-data-sync/client';

class CustomSourcePlugin extends Plugin {
  async load() {
    const sync = this.app.pm.get(SyncPlugin);
    sync.registerType(authType, {
      components: {
        AdminSettingsForm, // Formulaire de gestion côté backend
      },
    });
  }
}
```

### Formulaire de Gestion Côté Backend

![Formulaire de Gestion Côté Backend](https://static-docs.nocobase.com/202412041429835.png)

La section supérieure permet de configurer la source de données en général, tandis que la section inférieure permet l'enregistrement de formulaires de configuration personnalisée.
