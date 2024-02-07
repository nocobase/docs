# Git source code

## 0. Prerequisites

Make sure you have:

- Git, Node.js 18+, Yarn 1.22.x installed
- Configured and started the required database SQLite 3.x, MySQL 8.x, MariaDB 10.9+, PostgreSQL 10.x choose one

## 1. Download with Git

```bash
git clone https://github.com/nocobase/nocobase.git my-nocobase-app
```

## 2. Switch to the project directory

```bash
cd my-nocobase-app
```

## 3. Install dependencies

```bash
yarn install
```

## 4. Set environment variables

The environment variables required by NocoBase are stored in the root `.env` file, modify the environment variables according to the actual situation, if you don't know how to change them, [click here for environment variables description](../env.md), or you can leave it as default.

```bash
# Using sqlite database
DB_DIALECT=sqlite
# sqlite file path
DB_STORAGE=storage/db/nocobase.sqlite
```

:::warning
- `APP_KEY` is the key of the app, it is used to generate the user token (if APP_KEY is changed, the old token will be invalidated), create-nocobase-app will generate a random key when it creates the app, please make sure that it is not leaked to the public.
- `DB_*` is database related, if it is not the default database service in the example, please modify it according to the actual situation.
- When using MySQL (or MariaDB), you need to configure the DB_TIMEZONE environment variable, such as `DB_TIMEZONE=+08:00`.
:::

## 5. Install NocoBase

```bash
yarn nocobase install --lang=en-US
```

## 6. Start NocoBase

Development

```bash
yarn dev
```

Production

```bash
# Compile
yarn build
# Start
yarn start
```

## 7. Log in to NocoBase

Open [http://localhost:13000](http://localhost:13000) in a web browser. The initial account and password are `admin@nocobase.com` and `admin123`.
