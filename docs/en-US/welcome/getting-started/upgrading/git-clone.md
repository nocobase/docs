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
