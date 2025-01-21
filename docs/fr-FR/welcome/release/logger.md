# v0.9.0 : Système de journalisation de NocoBase (Logger)

## `@nocobase/logger`

Le système de journalisation de NocoBase est basé sur **Winston** et fournit une méthode pratique pour créer des instances de `logger`.

```ts
const logger = createLogger();
logger.info('Bonjour fichiers de log distribués !');

const { instance, middleware } = createAppLogger(); // Utilisé par @nocobase/server
app.logger = instance;
app.use(middleware);
```

## Variables d'environnement ajoutées

Les variables d'environnement liées à la journalisation incluent :

- [LOGGER_TRANSPORT](../getting-started/env.md#logger_transport)
- [LOGGER_BASE_PATH](./getting-started/env.md#logger_base_path)

## Configuration du logger pour l'application

Exemple de configuration du logger dans NocoBase :

```ts
const app = new Application({
  logger: {
    async skip(ctx) {
      return false;
    },
    requestWhitelist: [],
    responseWhitelist: [],
    transports: ['console', 'dailyRotateFile'],
  },
});
```

Pour plus de détails sur les options de configuration, vous pouvez vous référer à la [documentation de Winston](https://github.com/winstonjs/winston#table-of-contents).

## `app.logger` et `ctx.logger`

L'objet `ctx.logger` est lié à un identifiant de requête (`reqId`). Cet identifiant est unique pour toute la durée du cycle de vie de la requête (`ctx`).

```ts
ctx.logger = app.logger.child({ reqId: ctx.reqId });
```

Les deux objets, `app.logger` et `ctx.logger`, sont des instances de Winston. Vous pouvez consulter la [documentation complète de Winston](https://github.com/winstonjs/winston#table-of-contents) pour des informations détaillées sur leur utilisation.

## Transports personnalisés

En plus des options natives de Winston, NocoBase permet de définir des transports personnalisés de manière simplifiée :

```ts
import { Transports } from '@nocobase/logger';

Transports['custom'] = () => {
  return new winston.transports.Console();
};

const app = new Application({
  logger: {
    transports: ['custom'],
  },
});
```

Cela vous permet d'ajouter facilement des options de transport pour le logger sans avoir à modifier directement les configurations Winston.
