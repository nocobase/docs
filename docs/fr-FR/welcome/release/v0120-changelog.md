# v0.12: 2023-08-02

## Nouvelles fonctionnalités

- Nouvel outil de génération de plugins. Les plugins générés pourront être utilisés directement en production sans nécessiter une seconde génération.

## Mises à jour des applications

### Mise à jour de l'installation Docker

Aucun changement, consultez le [Guide de mise à jour de l'image Docker](/welcome/getting-started/upgrading/docker-compose) pour la mise à jour.

### Mise à jour de l'installation du code source

L'outil de génération des plugins a été mis à jour, et il est nécessaire de vider le cache après avoir récupéré les nouvelles sources.

```bash
git pull # Récupérer les nouvelles sources.
yarn clean # Vider le cache.
```

Pour plus de détails, consultez le [Guide de mise à jour du code source Git](/welcome/getting-started/upgrading/git-clone).

### Mise à jour de l'installation `create-nocobase-app`

Redownload la nouvelle version via `yarn create` et mettez à jour la configuration `.env`. Consultez le [guide de mise à jour de version majeure](/welcome/getting-started/upgrading/create-nocobase-app#Major-version-upgrade) pour plus de détails.

## Changements incompatibles

### Fusion de `@nocobase/app-client` et `@nocobase/app-server` en `@nocobase-app`

Les applications installées via `create-nocobase-app` n'ont plus le répertoire `packages/app`, et le code personnalisé dans `packages/app` doit être déplacé vers le plugin personnalisé.

### Changement du chemin `dist/client` de l'application

Si vous configurez vous-même `nginx`, vous devrez ajuster comme suit :

```diff
server {
- root /app/nocobase/packages/app/client/dist;
+ root /app/nocobase/node_modules/@nocobase/app/dist/client;

  location / {
-       root /app/nocobase/packages/app/client/dist;
+       root /app/nocobase/node_modules/@nocobase/app/dist/client;
        try_files $uri $uri/ /index.html;
        add_header Last-Modified $date_gmt;
        add_header Cache-Control 'no-store, no-cache';
        if_modified_since off;
        expires off;
        etag off;
    }
}
```

### Les plugins tiers doivent être reconstruits

Référez-vous au guide de mise à jour des plugins tiers ci-dessous.

## Guide de mise à jour des plugins tiers

### Le répertoire du plugin doit avoir les répertoires `src/client` et `src/server`.

```js
// src/client/index.ts
import { Plugin } from '@nocobase/client';

class MyPlugin extends Plugin {
  async load() {
    // ...
  }
}

export default MyPlugin;
```

```js
// src/server/index.ts
import { Plugin } from '@nocobase/server';

class MyPlugin extends Plugin {
  async load() {
    // ...
  }
}

export default MyPlugin;
```

Un code d'exemple spécifique peut être consulté ici : [sample-hello](https://github.com/nocobase/nocobase/tree/main/packages/samples/hello)

### Placement multilingue du plugin dans le répertoire `src/locale`

Pour le frontend et le backend, les fichiers de traduction multilingue sont placés dans le répertoire `src/locale`, ainsi le plugin n'a pas besoin de charger les packages multilingues lui-même.

### Ajustement des dépendances du plugin

Les dépendances du plugin sont divisées en dépendances propres et dépendances globales. Les dépendances globales sont utilisées globalement et ne seront pas empaquetées dans le produit du plugin, tandis que les dépendances propres seront empaquetées dans le produit. Après la génération du plugin, l'environnement de production sera plug-and-play, sans nécessité d'installer des dépendances ou de générer deux fois. Les ajustements des dépendances du plugin incluent :

- Placer les packages `@nocobase/*` dans `peerDependencies` et spécifier la version en `0.x` ;
- Placer les autres dépendances dans `devDependencies`, pas dans `dependencies`, car le plugin extraira toutes les dépendances nécessaires pour l'environnement de production après son empaquetage.

```diff
{
  "devDependencies": {
    "@formily/react": "2.x",
    "@formily/shared": "2.x",
    "ahooks": "3.x",
    "antd": "5.x",
    "dayjs": "1.x",
    "i18next": "22.x",
    "react": "18.x",
    "react-dom": "18.x",
    "react-i18next": "11.x"
  },
  "peerDependencies": {
    "@nocobase/actions": "0.x",
    "@nocobase/client": "0.x",
    "@nocobase/database": "0.x",
    "@nocobase/resourcer": "0.x",
    "@nocobase/server": "0.x",
    "@nocobase/test": "0.x",
    "@nocobase/utils": "0.x"
  }
}
```

### Le chemin de sortie du plugin a changé de `lib` à `dist`

Structure du répertoire `dist` :

```bash
|- dist
  |- client       # Côté client, umd
    |- index.js
    |- index.d.ts
  |- server       # Côté serveur, cjs
    |- index.js
    |- index.d.ts
    |- others
  |- locale       # Package multilingue
  |- node_modules # Dépendances du serveur
```

Autres ajustements liés :

Ajustement du paramètre `main` dans `package.json` :

```diff
{
  - "main": "./lib/server/index.js",
  + "main": "./dist/server/index.js",
}
```

`client.d.ts` :

```ts
export * from './dist/client';
export { default } from './dist/client';
```

`client.js` :

```js
module.exports = require('./dist/client/index.js');
```

`server.d.ts` :

```ts
export * from './dist/server';
export { default } from './dist/server';
```

`server.js` :

```js
module.exports = require('./dist/server/index.js');
```
