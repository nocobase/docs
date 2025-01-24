# v0.19 : 8 janvier 2024

## Nouvelles fonctionnalités

### Télémétrie

- Documentation pour les développeurs : [Documentation de la télémétrie](https://docs.nocobase.com/development/server/telemetry)
- API du noyau : [API de la télémétrie](https://docs.nocobase.com/api/telemetry/telemetry)
- Plugin Prometheus : [Plugin de télémétrie Prometheus](https://docs.nocobase.com/plugins/telemetry-prometheus)

### Sauvegarde et restauration d'application

- Documentation du plugin : [Plugin de sauvegarde et restauration](https://docs.nocobase.com/plugins/backup-restore)

## Optimisations du noyau

### Optimisations de la ligne de commande

Pour NocoBase 0.19 et les versions ultérieures, les commandes personnalisées des plugins doivent être placées dans le répertoire `src/server/commands/*.ts` du plugin avec le contenu suivant :

```typescript
export default function(app) {
  app.command('custom1').action();
}
```

Flux d'exécution de la ligne de commande :

![20240115141900](https://static-docs.nocobase.com/20240115141900.png)

Configuration spéciale de la commande

- `ipc()` : Lorsque l'application fonctionne, la ligne de commande envoie des commandes via ipc pour opérer sur l'instance d'application en cours d'exécution. Lorsque `ipc()` n'est pas configuré, une nouvelle instance de l'application est créée, puis l'opération est exécutée (cela n'interfère pas avec l'instance de l'application en cours d'exécution).
- `auth()` : Effectue une vérification de la base de données. Si la configuration de la base de données est incorrecte, cette commande ne sera pas exécutée.
- `preload()` : Indique si la configuration de l'application doit être préchargée, c'est-à-dire si `app.load()` doit être exécuté.

Cela peut être configuré en fonction de l'utilisation réelle de la commande. Voici des exemples :

```typescript
app.command('a').ipc().action()
app.command('a').auth().action()
app.command('a').preload().action()
```

### Optimisation du processus d'installation

![20240115141914](https://static-docs.nocobase.com/20240115141914.png)

### Optimisation du processus de démarrage

![20240115141922](https://static-docs.nocobase.com/20240115141922.png)

### Optimisation du processus de mise à jour

![20240115141933](https://static-docs.nocobase.com/20240115141933.png)

Les migrations de mise à jour sont catégorisées en **beforeLoad**, **afterSync**, et **afterLoad** :

- **beforeLoad** : Exécuté avant le chargement de chaque module, divisé en trois étapes :
  - Avant de charger les modules du noyau
  - Avant de charger les plugins prédéfinis
  - Avant de charger les autres plugins

- **afterSync** : Exécuté après la synchronisation des configurations des tables de données avec la base de données, divisé en trois étapes :
  - Après la synchronisation des tables du noyau avec la base de données
  - Après la synchronisation des tables des plugins prédéfinis avec la base de données
  - Après la synchronisation des tables des autres plugins avec la base de données

- **afterLoad** : Exécuté uniquement après le chargement complet de l'application.

Voici un exemple de migration :

```typescript
export default class extends Migration {
  // Quand effectuer la migration
  on = 'beforeLoad';
  // Exécuter uniquement si la version de l'application correspond.
  appVersion = '<=0.13.0-alpha.5';
  // Exécuter uniquement si la version du plugin correspond.
  pluginVersion = '<=0.13.0-alpha.5';
  // Script de mise à jour.
  async up() {}
}
```

### Ajouter la commande `create-migration`

Crée un fichier de migration

```bash
yarn nocobase create-migration -h

Usage: nocobase create-migration [options] <name>

Options:
  --pkg <pkg>  nom du package
  --on [on]    Options disponibles : beforeLoad, afterSync et afterLoad
  -h, --help   affiche l'aide pour cette commande
```

Exemple

```bash
$ yarn nocobase create-migration update-ui --pkg=@nocobase/plugin-client

2024-01-07 17:33:13 [info ] ajout de l'application principale dans le superviseur     
2024-01-07 17:33:13 [info ] fichier de migration dans /nocobase/packages/plugins/@nocobase/plugin-client/src/server/migrations/20240107173313-update-ui.ts
✨  Terminé en 5.02s.
```

Un fichier de migration sera généré dans `src/server/migrations` du package plugin `@nocobase/plugin-client` sous le nom `20240107173313-update-ui.ts` avec le contenu initial suivant :

```typescript
import { Migration } from '@nocobase/server';

export default class extends Migration {
  on = 'afterLoad'; // 'beforeLoad' | 'afterSync' | 'afterLoad'
  appVersion = '<0.18.0-alpha.10';

  async up() {
    // code ici
  }
}
```

### Les répertoires basés sur la convention pour les plugins

```bash
|- /plugin-sample-hello
  |- /dist             # Répertoire pour le plugin compilé
  |- /src              # Code source du plugin
    |- /client
      |- plugin.ts
      |- index.ts      # Point d'entrée côté client
    |- /locale         # Répertoire conventionnel pour les fichiers multilingues partagés entre le frontend et le backend
    |- /swagger        # Répertoire conventionnel pour la documentation Swagger
    |- /server
      |- collections   # Répertoire conventionnel pour les configurations des tables de données du plugin
      |- commands      # Répertoire conventionnel pour les commandes personnalisées
      |- migrations    # Répertoire conventionnel pour les fichiers de migration
      |- plugin.ts     # Classe du plugin
      |- index.ts      # Point d'entrée côté serveur
    |- index.ts
  |- .npmignore
  |- client.d.ts
  |- client.js
  |- package.json
  |- server.d.ts
  |- server.js
```

### Optimisation du processus de test

Des méthodes plus conviviales comme `createMockServer()` et `startMockServer()` ont été fournies pour l'écriture des cas de test :

- `createMockServer()` Crée et démarre rapidement une application.
- `startMockServer()` Démarre rapidement une application (sans réinstallation).

```typescript
import { createMockServer } from '@nocobase/server';

describe('test example', () => {
  let app: MockServer;

  beforeEach(async () => {
    app = await createMockServer({
      plugins: ['nocobase'],
    });
  });

  afterEach(async () => {
    await app.destroy();
  });

  test('case1', async () => {
    // codage...
  });
});
```

## Changements incompatibles

### Changement de la configuration des collections, des commandes et des migrations vers des répertoires basés sur la convention

Exemple 1 : Collections chargées par `importCollections`, le code est directement supprimé, et le fichier de configuration des collections doit être placé dans le répertoire `src/server/collections`.

```diff
export class AuthPlugin extends Plugin {
  async load() {
-   await this.importCollections(resolve(__dirname, 'collections'));
  }
}
```

Exemple 2 : Collections chargées via `this.db.import`, le code est directement supprimé, et le fichier de configuration des collections doit être placé dans le répertoire `src/server/collections`.

```diff
export class AuthPlugin extends Plugin {
  async load() {
-   await this.db.import({
-     directory: resolve(__dirname, 'collections')
-   });
  }
}
```

Exemple 3 : Une collection définie par `db.collection()` est recommandée à être placée dans le répertoire `src/server/collections`.

```diff
export class AuthPlugin extends Plugin {
  async load() {
-   this.db.collection({
-     name: 'examples',
-   });
  }
}
```

Ajoutez un nouveau fichier `src/server/collections/examples.ts` avec le contenu suivant :

```typescript
import { defineCollection } from '@nocobase/database';

export default defineCollection({
  name: 'examples',
});
```

Exemple 4 : Supprimez `db.addMigrations()` et placez le fichier de migration dans le répertoire `src/server/migrations`.

```diff
export class AuthPlugin extends Plugin {
  async load() {
-   this.db.addMigrations({
-     namespace: 'auth',
-     directory: resolve(__dirname, 'migrations'),
-     context: {
-       plugin: this,
-     },
-   });
  }
}
```

### Exemple 5 : Personnalisation de la ligne de commande

```diff
export class MyPlugin extends Plugin {
  load() {
-   this.app
-      .command('echo')
-      .option('-v, --version');
-      .action(async ([options]) => {
-        console.log('Hello World!');
-        if (options.version) {
-          console.log('Current version:', app.getVersion());
-        }
-      });
-  }
}
```

Ajoutez un nouveau fichier `src/server/commands/echo.ts` avec le contenu suivant :

```typescript
export default function(app) {
  app
    .command('echo')
    .option('-v, --version')
    .action(async ([options]) => {
      console.log('Hello World!');
      if (options.version) {
        console.log('Current version:', await app.version.get());
      }
    });
}
```

