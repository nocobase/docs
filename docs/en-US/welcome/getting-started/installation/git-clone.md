# Git source code

## 0. Prerequisites

Make sure you have:

- Git, Node.js 20+, Yarn 1.22.x installed
- Configured and started the required database &mdash; MySQL 8.x, MariaDB 10.9+, PostgreSQL 10+ &mdash; choose any one.

## 1. Download with Git

### Latest version (`main`)

Stable and well-tested version and only bug fixed will be made. This version is recommended.

```bash
git clone https://github.com/nocobase/nocobase.git -b main --depth=1 my-nocobase
```

### Beta version (`next`)

This version includes new features that are about to be released and it has been preliminarily tested, but still have known or unknown issues.

```bash
git clone https://github.com/nocobase/nocobase.git -b next --depth=1 my-nocobase
```

### Alpha version (`develop`)

A development version containing the latest features, which may be incomplete or unstable.

```bash
git clone https://github.com/nocobase/nocobase.git -b develop --depth=1 my-nocobase
```

## 2. Switch to the project directory

```bash
cd my-nocobase
```

## 3. Install dependencies

```bash
yarn install --frozen-lockfile
```

## 4. Set environment variables

The environment variables required by NocoBase are stored in the root `.env` file, modify the environment variables according to the actual situation, if you don't know how to change them, [click here for environment variables description](../env.md), or you can leave it as default.

```bash
TZ=UTC
APP_KEY=your-secret-key
DB_HOST=localhost
DB_PORT=5432
DB_DATABASE=postgres
DB_USER=nocobase
DB_PASSWORD=nocobase
```

:::warning

- `TZ` is used to set the application's time zone, with the default being the system's time zone;
- `APP_KEY` is the application's secret key, used for generating user tokens and so on (if APP_KEY is changed, the old tokens will also become invalid). It can be any random string. Please change it to your own secret key and ensure it is not disclosed to the public.
- `DB_*` is related to the database. If it is not the default database service in the example, please modify it according to the actual situation.
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
# Build (make sure you have executed `yarn install --frozen-lockfile`, note that it does not include `--production`)
yarn build
# Start
yarn start
```

## 7. Log in to NocoBase

Open [http://localhost:13000](http://localhost:13000) in a web browser. The initial account and password are `admin@nocobase.com` and `admin123`.
