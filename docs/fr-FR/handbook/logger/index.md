# Journalisation

## Introduction

Les journaux sont un outil important pour nous aider à localiser les problèmes du système. Les journaux du serveur NocoBase incluent principalement les journaux de requêtes d'interface et les journaux d'opérations système, et prennent en charge la configuration du niveau de journalisation, de la stratégie de rotation, de la taille, du format d'impression, etc. Ce document présente principalement les éléments relatifs aux journaux du serveur NocoBase, ainsi que la façon d'utiliser le plugin de journalisation pour empaqueter et télécharger les journaux du serveur.

## Configuration des journaux

Les paramètres liés aux journaux tels que le niveau de journalisation, la méthode de sortie et le format d'impression peuvent être configurés via les [variables d'environnement](../../welcome/getting-started/env.md#logger_transport).

## Formats de journaux

NocoBase prend en charge la configuration de quatre formats de journaux différents.

### `console`

Le format par défaut dans l'environnement de développement, les messages sont mis en évidence par des couleurs.

```
2023-12-30 22:40:06 [info ] response                                     method=GET path=/api/uiSchemas:getJsonSchema/nocobase-admin-menu res={"status":200} action={"actionName":"getJsonSchema","resourceName":"uiSchemas","params":{"filterByTk":"nocobase-admin-menu","resourceName":"uiSchemas","resourceIndex":"nocobase-admin-menu","actionName":"getJsonSchema"}} userId=1 status=200 cost=5 app=main reqId=ccf4e3bd-beb0-4350-af6e-b1fc1d9b6c3f
2023-12-30 22:43:12 [debug] Database dialect: mysql                      module=application method=install app=main reqId=31ffa8b5-f377-456b-a295-0c8a28938228
2023-12-30 22:43:12 [warn ] app is installed                             module=application method=install app=main reqId=31ffa8b5-f377-456b-a295-0c8a28938228
```

### `json`

Le format par défaut dans l'environnement de production.

```json
{
  "level": "info",
  "timestamp": "2023-12-26 22:04:56",
  "reqId": "7612ef42-58e8-4c35-bac2-2e6c9d8ec96e",
  "message": "response",
  "method": "POST",
  "path": "/api/authenticators:publicList",
  "res": { "status": 200 },
  "action": {
    "actionName": "publicList",
    "resourceName": "authenticators",
    "params": { "resourceName": "authenticators", "actionName": "publicList" }
  },
  "status": 200,
  "cost": 16
}
```

### `logfmt`

Consultez https://brandur.org/logfmt pour plus d'informations.

```
level=info timestamp=2023-12-21 14:18:02 reqId=8b59a40d-68ee-4c97-8001-71a47a92805a
message=response method=POST path=/api/authenticators:publicList res={"status":200}
action={"actionName":"publicList","resourceName":"authenticators","params":{"resourceName":"authenticators","actionName":"publicList"}}
userId=undefined status=200 cost=14
```

### `delimiter`

Séparé par le délimiteur `|`.

```
info|2023-12-26 22:07:09|13cd16f0-1568-418d-ac37-6771ee650e14|response|POST|/api/authenticators:publicList|{"status":200}|{"actionName":"publicList","resourceName":"authenticators","params":{"resourceName":"authenticators","actionName":"publicList"}}||200|25
```

## Répertoire des journaux

La structure principale du répertoire des fichiers de journaux de NocoBase est :

- `storage/logs` - Répertoire de sortie des journaux
  - `main` - Nom de l'application principale
    - `request_YYYY-MM-DD.log` - Journal des requêtes
    - `system_YYYY-MM-DD.log` - Journal système
    - `system_error_YYYY-MM-DD.log` - Journal des erreurs système
    - `sql_YYYY-MM-DD.log` - Journal d'exécution SQL
    - ...
  - `sub-app` - Nom de l'application secondaire
    - `request_YYYY-MM-DD.log`
    - ...

## Fichiers de journaux

### Journal des requêtes

`request_YYYY-MM-DD.log`, journaux des requêtes et réponses d'interface.

| Champ         | Description                          |
| ------------- | ------------------------------------ |
| `level`       | Niveau du journal                    |
| `timestamp`   | Heure d'impression du journal `YYYY-MM-DD hh:mm:ss` |
| `message`     | `request` ou `response`              |
| `userId`      | Seulement dans `response`           |
| `method`      | Méthode de la requête               |
| `path`        | Chemin de la requête                 |
| `req` / `res` | Contenu de la requête/réponse       |
| `action`      | Ressources et paramètres demandés    |
| `status`      | Code de statut de la réponse        |
| `cost`        | Temps de la requête                 |
| `app`         | Nom de l'application en cours       |
| `reqId`       | ID de la requête                    |

:::info{title=Note}
Le `reqId` sera transmis au front-end via l'en-tête de réponse `X-Request-Id`.
:::

### Journal système

`system_YYYY-MM-DD.log`, journaux des opérations système, y compris des applications, des middleware, des plugins et d'autres logs d'opérations système. Les logs de niveau `error` seront imprimés séparément dans `system_error_YYYY-MM-DD.log`.

| Champ       | Description                            |
| ----------- | -------------------------------------- |
| `level`     | Niveau du journal                      |
| `timestamp` | Heure d'impression du journal `YYYY-MM-DD hh:mm:ss` |
| `message`   | Message du journal                     |
| `module`    | Module                                 |
| `submodule` | Sous-module                            |
| `method`    | Méthode appelée                        |
| `meta`      | Autres informations liées, format JSON |
| `app`       | Nom de l'application en cours         |
| `reqId`     | ID de la requête                       |

### Journal d'exécution SQL

`sql_YYYY-MM-DD.log`, journaux d'exécution des requêtes SQL. Les instructions `INSERT INTO` sont limitées aux 2000 premiers caractères.

| Champ       | Description                          |
| ----------- | ------------------------------------ |
| `level`     | Niveau du journal                    |
| `timestamp` | Heure d'impression du journal `YYYY-MM-DD hh:mm:ss` |
| `sql`       | Instruction SQL                      |
| `app`       | Nom de l'application en cours       |
| `reqId`     | ID de la requête                    |

## Emballage et téléchargement des journaux

<PluginInfo name="logger"></PluginInfo>

1. Accédez à la page de gestion des journaux.
2. Sélectionnez les fichiers journaux que vous souhaitez télécharger.
3. Cliquez sur le bouton de téléchargement.

![2024-04-10_10-50-50](https://static-docs.nocobase.com/2024-04-10_10-50-50.png)

## Documents associés

- [Développement de plugins - Serveur - Journalisation](../../development/server/logger)
- [Référence API - @nocobase/logger](../../api/logger)
