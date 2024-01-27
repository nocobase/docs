# Upgrading for `create-nocobase-app`

## Upgrading

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
