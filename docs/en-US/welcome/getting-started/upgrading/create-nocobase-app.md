# Upgrading for `create-nocobase-app`

## 0. Preparing for the upgrade

:::warning
- Make sure to backup the database before upgrading!!!
:::

## 1. Upgrading

Upgrade the application by running the `yarn nocobase upgrade` command.

```bash
# Switch to the corresponding directory
cd my-nocobase-app
# Execute the update command
yarn nocobase upgrade
# Start
yarn dev
```

If there are problems with upgrading, you can also [recreate new app](/welcome/getting-started/installation/create-nocobase-app) and refer to the old version of .env to change the environment variables. The database information needs to be configured correctly. When using a SQLite database, you need to copy the database files to the `./storage/db/` directory. Finally, run `yarn nocobase upgrade` to upgrade.

## 2. Upgrading independent plugins

After upgrading NocoBase, independent plugins installed through the interface might also need to be upgraded. Please refer to documentation [Installation and Upgrade of Plugins](/welcome/getting-started/plugin)
