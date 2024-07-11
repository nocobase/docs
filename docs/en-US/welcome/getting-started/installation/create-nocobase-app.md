# `create-nocobase-app`

## 0. Prerequisites

Make sure you have:

- Installed Node.js 18+, Yarn 1.22.x
- Configured and started one of the required database SQLite 3.x, MySQL 8.x, MariaDB 10.9+, PostgreSQL 10+

You can download and install the latest LTS version from the official website. It is recommended to use nvm (or nvm-windows for Win systems) to manage Node.js versions if you plan to work with Node.js for a long time.

```bash
$ node -v

v18.19.0
```

Install yarn package manager

```bash
$ npm install --global yarn
$ yarn -v

1.22.21
```

## 1. Create a NocoBase project

### Latest version

The most stable version to date, recommended for installation.

<Tabs>
<div label="PostgreSQL" name="postgres">

```bash
yarn create nocobase-app my-nocobase-app -d postgres \
   -e DB_HOST=localhost \
   -e DB_PORT=5432 \
   -e DB_DATABASE=nocobase \
   -e DB_USER=nocobase \
   -e DB_PASSWORD=nocobase
```

</div>

<div label="MySQL" name="mysql">

```bash
yarn create nocobase-app my-nocobase-app -d mysql \
   -e DB_HOST=localhost \
   -e DB_PORT=3306 \
   -e DB_DATABASE=nocobase \
   -e DB_USER=nocobase \
   -e DB_PASSWORD=nocobase \
   -e DB_TIMEZONE=+08:00
```

</div>

<div label="MariaDB" name="mariadb">

```bash
yarn create nocobase-app my-nocobase-app -d mariadb \
   -e DB_HOST=localhost \
   -e DB_PORT=3306 \
   -e DB_DATABASE=nocobase \
   -e DB_USER=nocobase \
   -e DB_PASSWORD=nocobase \
   -e DB_TIMEZONE=+08:00
```

</div>

<div label="SQLite" name="sqlite">

```bash
yarn create nocobase-app my-nocobase-app -d sqlite
```

</div>
</Tabs>

### Next version

Alpha version, including some unreleased new features. This version may not be completely stable and is suitable for developers or testers to experience new features in advance or conduct compatibility testing.

<Tabs>
<div label="PostgreSQL" name="postgres">

```bash
npx create-nocobase-app@next my-nocobase-app -d postgres \
   -e DB_HOST=localhost \
   -e DB_PORT=5432 \
   -e DB_DATABASE=nocobase \
   -e DB_USER=nocobase \
   -e DB_PASSWORD=nocobase
```

</div>

<div label="MySQL" name="mysql">

```bash
npx create-nocobase-app@next my-nocobase-app -d mysql \
   -e DB_HOST=localhost \
   -e DB_PORT=3306 \
   -e DB_DATABASE=nocobase \
   -e DB_USER=nocobase \
   -e DB_PASSWORD=nocobase \
   -e DB_TIMEZONE=+08:00
```

</div>

<div label="MariaDB" name="mariadb">

```bash
npx create-nocobase-app@next my-nocobase-app -d mariadb \
   -e DB_HOST=localhost \
   -e DB_PORT=3306 \
   -e DB_DATABASE=nocobase \
   -e DB_USER=nocobase \
   -e DB_PASSWORD=nocobase \
   -e DB_TIMEZONE=+08:00
```

</div>

<div label="SQLite" name="sqlite">

```bash
npx create-nocobase-app@next my-nocobase-app -d sqlite
```

</div>
</Tabs>

:::warning
- `APP_KEY` is the application's secret key, used for generating user tokens and so on (if APP_KEY is changed, the old tokens will also become invalid). It can be any random string. Please change it to your own secret key and ensure it is not disclosed to the public.
- `DB_*` is related to the database. If it is not the default database service in the example, please modify it according to the actual situation.
- When using MySQL (or MariaDB), you need to configure the DB_TIMEZONE environment variable, such as `DB_TIMEZONE=+08:00`
:::

## 2. Switch to the project directory

```bash
cd my-nocobase-app
```

## 3. Install dependencies

📢 This next step may take more than ten minutes due to network environment, system configuration, and other factors.

```bash
yarn install
```

## 4. Install NocoBase

```bash
yarn nocobase install --lang=en-US
```

## 5. Start NocoBase

Development

```bash
yarn dev
```

Production

```bash
yarn start
```

Note: For production, if the code has been modified, you need to execute `yarn build` and restart NocoBase.

## 6. Log in to NocoBase

Open [http://localhost:13000](http://localhost:13000) in a web browser. The initial account and password are `admin@nocobase.com` and `admin123`.
