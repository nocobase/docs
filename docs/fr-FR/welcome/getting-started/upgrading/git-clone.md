# Upgrading for Git source code

## 0. Preparing for the upgrade

:::warning
- Make sure to backup the database before upgrading!!!
:::

## 1. switch to the NocoBase project directory

```bash
cd my-nocobase-app
```

## 2. Pull the latest code

```bash
git pull
```

## 3. Delete cache and dependencies (optional)

If the normal upgrade process fails, try emptying the cache and dependencies and re-downloading it.

```bash
# delete nocobase cache
yarn nocobase clean
# delete dependencies
yarn rimraf -rf node_modules
```

## 4. Update dependencies

```bash
yarn install
```

## 5. Execute the update command

```bash
yarn nocobase upgrade
```

## 6. Start NocoBase

development environment

```bash
yarn dev
```

Production environment

```bash
# compile
yarn build

# Start
yarn start
```

## 7. Upgrading independent plugins

After upgrading NocoBase, independent plugins installed through the interface might also need to be upgraded. Please refer to documentation [Installation and Upgrade of Plugins](/welcome/getting-started/plugin)

# Mise à niveau pour le code source Git

## 0. Préparation à la mise à niveau

:::warning
- Assurez-vous de sauvegarder la base de données avant de procéder à la mise à niveau !!!
:::

## 1. Passer au répertoire du projet NocoBase

```bash
cd mon-app-nocobase
```

## 2. Récupérer le dernier code

```bash
git pull
```

## 3. Supprimer le cache et les dépendances (facultatif)

Si le processus de mise à niveau standard échoue, essayez de vider le cache et les dépendances, puis de les télécharger à nouveau.

```bash
# supprimer le cache nocobase
yarn nocobase clean
# supprimer les dépendances
yarn rimraf -rf node_modules
```

## 4. Mettre à jour les dépendances

```bash
yarn install
```

## 5. Exécuter la commande de mise à niveau

```bash
yarn nocobase upgrade
```

## 6. Démarrer NocoBase

Environnement de développement

```bash
yarn dev
```

Environnement de production

```bash
# compiler
yarn build

# Démarrer
yarn start
```

## 7. Mise à niveau des plugins indépendants

Après la mise à niveau de NocoBase, les plugins indépendants installés via l'interface peuvent également nécessiter une mise à niveau. Veuillez consulter la documentation [Installation et Mise à niveau des Plugins](/welcome/getting-started/plugin).
