# Data Source - KingbaseES Database

<PluginInfo licenseBundled="true" name="data-source-kingbase"></PluginInfo>

## Introduction

KingbaseES can be used as a data source, either as the primary database or an external database.

:::warning
Currently, only KingbaseES databases running in pg mode are supported.
:::

## Installation

### Using as the Primary Database

Refer to the [Installation Overview](/welcome/getting-started/installation) for the setup procedures, the difference is mainly due to the environment variables.

#### Environment Variables

Edit the .env file to add or modify the following environment variable configurations:

```bash
# For accessing commercial plugins
NOCOBASE_PKG_URL=https://pkg.nocobase.com/
NOCOBASE_PKG_USERNAME=your-username   # Service platform username
NOCOBASE_PKG_PASSWORD=your-password   # Service platform password

# Adjust DB parameters as needed
DB_DIALECT=kingbase
DB_HOST=localhost
DB_PORT=54321
DB_DATABASE=kingbase
DB_USER=nocobase
DB_PASSWORD=nocobase
```

#### Docker Installation

```yml
version: "3"

networks:
  nocobase:
    driver: bridge

  app:
    image: registry.cn-shanghai.aliyuncs.com/nocobase/nocobase:latest
    networks:
      - nocobase
    depends_on:
      - postgres
    environment:
      # For accessing commercial plugins
      - NOCOBASE_PKG_URL=https://pkg.nocobase.com/
      - NOCOBASE_PKG_USERNAME=your-username   # Service platform username
      - NOCOBASE_PKG_PASSWORD=your-password   # Service platform password
      # Application key for generating user tokens, etc.
      # Changing APP_KEY invalidates old tokens
      # Use a random string and keep it confidential
      - APP_KEY=your-secret-key
      # Database type
      - DB_DIALECT=kingbase
      # Database host, replace with existing database server IP if needed
      - DB_HOST=kingbase
      # Database name
      - DB_DATABASE=kingbase
      # Database user
      - DB_USER=nocobase
      # Database password
      - DB_PASSWORD=nocobase
      # Timezone
      - TZ=UTC
    volumes:
      - ./storage:/app/nocobase/storage
    ports:
      - "13000:80"

  # Kingbase service for testing purposes only
  kingbase:
    image: registry.cn-shanghai.aliyuncs.com/nocobase/kingbase:v009r001c001b0030_single_x86
    platform: linux/amd64
    restart: always
    privileged: true
    networks:
      - nocobase
    volumes:
      - ./storage/db/kingbase:/home/kingbase/userdata
    environment:
      ENABLE_CI: no # Must be set to no
      DB_USER: nocobase
      DB_PASSWORD: nocobase
      DB_MODE: pg  # pg only
      NEED_START: yes
    command: ["/usr/sbin/init"]
```

#### Installation Using create-nocobase-app

```bash
yarn create nocobase-app my-nocobase-app -d kingbase \
   -e DB_HOST=localhost \
   -e DB_PORT=54321 \
   -e DB_DATABASE=kingbase \
   -e DB_USER=nocobase \
   -e DB_PASSWORD=nocobase \
   -e TZ=UTC
```

### Using as an External Database

Edit the .env file to add environment variables for accessing commercial plugins:

```bash
# For accessing commercial plugins
NOCOBASE_PKG_URL=https://pkg.nocobase.com/
NOCOBASE_PKG_USERNAME=your-username   # Service platform username
NOCOBASE_PKG_PASSWORD=your-password   # Service platform password
```

Execute the installation or upgrade command

```bash
yarn nocobase install
# or
yarn nocobase upgrade
```

Activate the Plugin

![20241024121815](https://static-docs.nocobase.com/20241024121815.png)

## User Guide

- Primary Database: Refer to the [handbook](/handbook)
- External Database: See [Data Source / External Database](/handbook/data-source-manager/external-database)
