# Docker (👍 Recommended)

## 0. Prerequisites

⚡⚡ Please make sure you have installed [Docker](https://docs.docker.com/get-docker/)

## 1. Download NocoBase

Download with Git

```bash
git clone https://github.com/nocobase/nocobase.git nocobase
```

## 2. Select database (choose one)

Change the directory to the folder downloaded in the first step.

```bash
# MacOS, Linux...
cd /your/path/nocobase
# Windows
cd C:\your\path\nocobase
```

The docker configuration of different databases is slightly different, please choose to switch to the corresponding directory.

### SQLite

```bash
cd docker/app-sqlite
```

### MySQL

```bash
cd docker/app-mysql
```

### MariaDB

```bash
cd docker/app-mariadb
```

### PostgreSQL

```bash
cd docker/app-postgres
```

## 3. Configure docker-compose.yml (optional)

<Alert>

Non-developers skip this step. If you know development, you can also learn more about how to configure `docker-compose.yml`.

</Alert>

Directory structure (related to docker)

```bash
├── nocobase
  ├── docker
    ├── app-sqlite
      ├── storage
      ├── docker-compose.yml
    ├── app-mariadb
      ├── storage
      ├── docker-compose.yml
    ├── app-mysql
      ├── storage
      ├── docker-compose.yml
    ├── app-postgres
      ├── storage
      ├── docker-compose.yml
```

Configuration notes for `docker-compose.yml`:

SQLite only has app service, PostgreSQL and MySQL will have corresponding postgres or mysql service, you can use the example database service or configure it yourself.

```yml
services:
  app:
  postgres:
  mysql:
  mariadb:
```

App port, the URL is `http://your-ip:13000/`

```yml
services:
  app:
    ports:
      - '13000:80'
```

NocoBase version ([click here for the latest version](https://hub.docker.com/r/nocobase/nocobase/tags)), a few important release notes:

- `nocobase/nocobase:main` Main branch version, non-stable version, can be used by users who want to try it.
- `nocobase/nocobase:latest` The latest version of the branch that has been released, if you are looking for stability, this is the one to use.
- `nocobase/nocobase:0.18.0-alpha.9` Use a specific version.

:::warning
`nocobase/nocobase:main` The arm64 architecture is currently not supported.
:::

```yml
services:
  app:
    image: nocobase/nocobase:latest
```

Environment variables

```yml
services.
  app.
    image: nocobase/nocobase:latest
    environment: APP_KEY=your-secret-key
      - APP_KEY=your-secret-key
      - DB_DIALECT=postgres
      - DB_HOST=postgres
      - DB_DATABASE=nocobase
      - DB_USER=nocobase
      - DB_PASSWORD=nocobase
```

:::warning
- `APP_KEY` is the application key, used to generate user tokens, etc. (if APP_KEY is changed, old tokens will be invalidated), change it to your own application key and make sure it is not disclosed to the public.
- `DB_*` is database related, if it is not the default database service of the example, please modify it according to the actual situation.
- If you are using MySQL (or MariaDB), you need to configure DB_TIMEZONE environment variable, such as `DB_TIMEZONE=+08:00`.
:::

## 4. Install and start NocoBase

It may take a few minutes

```bash
# pull service images
$ docker-compose pull
# run in the background
$ docker-compose up -d
# view app logs
$ docker-compose logs app

app-sqlite-app-1  | nginx started
app-sqlite-app-1  | yarn run v1.22.15
app-sqlite-app-1  | $ cross-env DOTENV_CONFIG_PATH=.env node -r dotenv/config packages/app/server/lib/index.js install -s
app-sqlite-app-1  | Done in 2.72s.
app-sqlite-app-1  | yarn run v1.22.15
app-sqlite-app-1  | $ pm2-runtime start --node-args="-r dotenv/config" packages/app/server/lib/index.js -- start
app-sqlite-app-1  | 2022-04-28T15:45:38: PM2 log: Launching in no daemon mode
app-sqlite-app-1  | 2022-04-28T15:45:38: PM2 log: App [index:0] starting in -fork mode-
app-sqlite-app-1  | 2022-04-28T15:45:38: PM2 log: App [index:0] online
app-sqlite-app-1  | 🚀 NocoBase server running at: http://localhost:13000/
```

## 4. Log in to NocoBase

Open [http://localhost:13000](http://localhost:13000) in a web browser. The initial account and password are `admin@nocobase.com` and `admin123`.
