# Installation et mise à jour des plugins

## Installation et mise à niveau de plugins commerciaux (v1.4 et supérieur)

### Configurer les variables d'environnement

Définissez les variables d'environnement [`NOCOBASE_PKG_USERNAME`](/welcome/getting-started/env#nocobase_pkg_username) et [`NOCOBASE_PKG_PASSWORD`](/welcome/getting-started/env#nocobase_pkg_password)(Nom d'utilisateur et mot de passe NocoBase Service Platform) pour télécharger automatiquement les plugins commerciaux lors de l’installation ou de la mise à niveau de l’application.

```bash
NOCOBASE_PKG_USERNAME=your-username
NOCOBASE_PKG_PASSWORD=your-password
```

[Comment définir les variables d'environnement ?](/welcome/getting-started/env)

### Exécuter les commandes d'installation ou de mise à niveau de l'application

Une fois l'application installée ou mise à niveau, tous les plugins commerciaux autorisés apparaîtront dans le gestionnaire de plugins. Les plugins seront automatiquement téléchargés et mis à jour.

#### Installation

- [Docker (recommendé)](./installation/docker-compose.md)
- [create-nocobase-app](./installation/create-nocobase-app.md)
- [Code source Git](./installation/git-clone.md)

#### Mise à niveau

- [Mise à niveau pour Docker compose](./upgrading/docker-compose.md)
- [Mise à niveau pour create-nocobase-app](./upgrading/create-nocobase-app.md)
- [Mise à niveau pour Code source Git](./upgrading/git-clone.md)

### Activer les plugins

Sélectionnez les plugins que vous souhaitez activer dans le gestionnaire de plugins.

![Activation de Plugin](https://static-docs.nocobase.com/20241204000230.png)

---

## Installation et mise à jour des plugins via l'interface

:::warning
L'ajout ou la mise à jour de plugins via l'interface redémarrera l'application. Pour les opérations par lots, envisagez des méthodes alternatives.
:::

### Uploader des packages de plugins via Plugin Manager

Les plugins commerciaux et tiers peuvent être directement uploadé via l'interface.

![Upload de Plugins](https://static-docs.nocobase.com/20241204000127.png)

Notes:

- Pour créer des packages de plugins, reportez-vous à [Ecrire votre premier Plugin](/development/your-first-plugin) pour garantir une construction et un packaging appropriés.

### Activer les Plugins

Sélectionnez les plugins que vous souhaitez activer dans le gestionnaire de plugins.

![Activation de Plugin](https://static-docs.nocobase.com/20241204000230.png)

---

## Installation et mise à jour des plugins via la ligne de commande

:::warning
- Prend en charge les opérations par lots.
- Cette méthode est recommandée si les mises à jour de l'application entraînent une incompatibilité du plugin ou un échec de démarrage.
  :::

### 0. Pour les versions Docker, entrez dans le conteneur

```bash
docker-compose exec app bash
```

### 1. Connectez-vous au registre NPM

Configurez le registre en fonction de votre configuration.

```bash
npm login --registry=https://pkg.nocobase.com/
```

### 2. Ajouter ou mettre à jour des plugins

```bash
yarn pm add @nocobase/plugin-data-source-external-mysql @nocobase/plugin-embed --registry=https://pkg.nocobase.com/
```

### 3. Activer les plugins

```bash
yarn pm enable @nocobase/plugin-data-source-external-mysql @nocobase/plugin-embed
```

---

## Installation et mise à jour des plugins via l'upload du répertoire de plugins

:::warning
- Prend en charge les opérations par lots et est pratique pour la migration.
- Convient aux serveurs dans un environnement intranet.
- Recommandé pour la mise à jour des plugins incompatibles provoqués par les mises à jour d'applications.
  :::

### Ajouter ou mettre à jour des plugins

Stockez les plugins commerciaux et tiers dans le répertoire `./storage/plugins/`. Vous pouvez télécharger des plugins dans un environnement de développement et les télécharger dans le répertoire `./storage/plugins/` sur le serveur. Vous pouvez également extraire directement le package du plugin dans le répertoire. Par exemple:

```bash
mkdir -p /my-nocobase/storage/plugins/@nocobase/plugin-auth-cas && \
  tar -xvzf /downloads/plugin-auth-cas-1.4.0.tgz \
  -C /my-nocobase/storage/plugins/@nocobase/plugin-auth-cas \
  --strip-components=1
```

Cette commande garantit que le plugin est extrait dans `/my-nocobase/storage/plugins/@nocobase/plugin-auth-cas` sans le répertoire `package`. La structure correcte des répertoires est la suivante :

```plaintext
./plugin-auth-cas/dist/server/migrations/20240425200816-change-locale-module.js
./plugin-auth-cas/dist/server/auth.js
./plugin-auth-cas/client.js
./plugin-auth-cas/dist/constants.js
./plugin-auth-cas/dist/externalVersion.js
./plugin-auth-cas/dist/client/index.js
./plugin-auth-cas/dist/index.js
./plugin-auth-cas/dist/server/index.js
./plugin-auth-cas/dist/server/actions/login.js
./plugin-auth-cas/dist/server/plugin.js
./plugin-auth-cas/server.js
./plugin-auth-cas/dist/server/actions/service.js
./plugin-auth-cas/dist/locale/en-US.json
./plugin-auth-cas/dist/locale/ko_KR.json
./plugin-auth-cas/package.json
./plugin-auth-cas/dist/locale/zh-CN.json
./plugin-auth-cas/README.md
./plugin-auth-cas/README.zh-CN.md
./plugin-auth-cas/dist/server/migrations/20240425200816-change-locale-module.d.ts
./plugin-auth-cas/dist/server/auth.d.ts
./plugin-auth-cas/client.d.ts
./plugin-auth-cas/dist/constants.d.ts
./plugin-auth-cas/dist/client/index.d.ts
./plugin-auth-cas/dist/client/locale/index.d.ts
./plugin-auth-cas/dist/index.d.ts
./plugin-auth-cas/dist/server/index.d.ts
./plugin-auth-cas/dist/server/actions/login.d.ts
./plugin-auth-cas/dist/client/Options.d.ts
./plugin-auth-cas/dist/server/plugin.d.ts
./plugin-auth-cas/server.d.ts
./plugin-auth-cas/dist/server/actions/service.d.ts
./plugin-auth-cas/dist/client/SigninPage.d.ts
./plugin-auth-cas/LICENSE.txt
```

### Exécutez la commande Upgrade pour mettre à jour les plugins

Après avoir uploadé les plugins dans le répertoire des plugins, exécutez la commande « nocobase update » pour terminer la mise à jour.

```bash
yarn nocobase upgrade
```
