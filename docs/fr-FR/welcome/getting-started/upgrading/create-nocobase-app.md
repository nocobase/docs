# Mise à niveau pour `create-nocobase-app`

## 0. Préparation de la mise à niveau

:::warning
- Assurez-vous de sauvegarder la base de données avant la mise à niveau !!!
:::

## 1. Mise à niveau

Mettez à niveau l'application en exécutant la commande `yarn nocobase upgrade`.

```bash
# Basculer vers le répertoire correspondant
cd mon-nocobase-app
# Exécutez la commande de mise à jour
yarn nocobase upgrade
# Démarrer
yarn dev
```

Si vous rencontrez des problèmes avec la mise à niveau, vous pouvez également [recréer une nouvelle application](/welcome/getting-started/installation/create-nocobase-app) et vous référer à l'ancienne version de .env pour modifier les variables d'environnement. Les informations de la base de données doivent être configurées correctement. Lorsque vous utilisez une base de données SQLite, vous devez copier les fichiers de la base de données dans le répertoire `./storage/db/`. Enfin, exécutez `yarn nocobase update` pour effectuer la mise à niveau.

## 2. Mise à niveau des plugins indépendants

Après la mise à niveau de NocoBase, les plugins indépendants installés via l'interface devront peut-être également être mis à niveau. Veuillez vous référer à la documentation [Installation et mise à niveau des plugins](/welcome/getting-started/plugin)
