# Docker (👍 Recommended)

## 0. Prerequisites

⚡⚡ Please make sure you have installed [Docker](https://docs.docker.com/get-docker/)

## 1. Configure `docker-compose.yml`

Create a `nocobase` folder in the specified directory.

```bash
# MacOS, Linux...
cd /your/path/nocobase
# Windows
cd C:\your\path\nocobase
```

Create a `docker-compose.yml` file inside the `nocobase` folder with the following content:

### PostgreSQL

```yml
version: "3"

networks:
  nocobase:
    driver: bridge

services:
  app:
    image: nocobase/nocobase:latest
    # Use the following image if unable to download from DockerHub
    #image: registry.cn-shanghai.aliyuncs.com/nocobase/nocobase:latest
    networks:
      - nocobase
    environment:
      # Application key used for generating user tokens, etc.
      # If APP_KEY changes, old tokens will become invalid
      # It can be any random string, make sure it is not exposed
      - APP_KEY=your-secret-key
      # Database type, supports postgres, mysql, mariadb, sqlite
      - DB_DIALECT=postgres
      # Database host, can be replaced with the IP of an existing database server
      - DB_HOST=postgres
      # Database name
      - DB_DATABASE=nocobase
      # Database user
      - DB_USER=nocobase
      # Database password
      - DB_PASSWORD=nocobase
    volumes:
      - ./storage:/app/nocobase/storage
    ports:
      - "13000:80"
    depends_on:
      - postgres
    # init: true

  # Skip this service if using an existing database server
  postgres:
    image: nocobase/postgres:16
    # Use the following image if unable to download from DockerHub
    #image: registry.cn-shanghai.aliyuncs.com/nocobase/postgres:16
    restart: always
    command: postgres -c wal_level=logical
    environment:
      POSTGRES_USER: nocobase
      POSTGRES_DB: nocobase
      POSTGRES_PASSWORD: nocobase
    volumes:
      - ./storage/db/postgres:/var/lib/postgresql/data
    networks:
      - nocobase
```

### MySQL

```yml
version: "3"

networks:
  nocobase:
    driver: bridge

services:
  app:
    image: nocobase/nocobase:latest
    # Use the following image if unable to download from DockerHub
    #image: registry.cn-shanghai.aliyuncs.com/nocobase/nocobase:latest
    networks:
      - nocobase
    depends_on:
      - mysql
    environment:
      # Application key used for generating user tokens, etc.
      # If APP_KEY changes, old tokens will become invalid
      # It can be any random string, make sure it is not exposed
      - APP_KEY=your-secret-key
      # Database type, supports postgres, mysql, mariadb, sqlite
      - DB_DIALECT=mysql
      # Database host, can be replaced with the IP of an existing database server
      - DB_HOST=mysql
      - DB_DATABASE=nocobase
      - DB_USER=root
      - DB_PASSWORD=nocobase
      - DB_TIMEZONE=+08:00
    volumes:
      - ./storage:/app/nocobase/storage
    ports:
      - "13000:80"
    init: true

  # Skip this service if using an existing database server
  mysql:
    image: nocobase/mysql:8
    # Use the following image if unable to download from DockerHub
    #image: registry.cn-shanghai.aliyuncs.com/nocobase/mysql:8
    environment:
      MYSQL_DATABASE: nocobase
      MYSQL_USER: nocobase
      MYSQL_PASSWORD: nocobase
      MYSQL_ROOT_PASSWORD: nocobase
    restart: always
    volumes:
      - ./storage/db/mysql:/var/lib/mysql
    networks:
      - nocobase
```

### MariaDB

```yml
version: "3"

networks:
  nocobase:
    driver: bridge

services:
  app:
    image: nocobase/nocobase:latest
    # Use the following image if unable to download from DockerHub
    #image: registry.cn-shanghai.aliyuncs.com/nocobase/nocobase:latest
    networks:
      - nocobase
    depends_on:
      - mariadb
    environment:
      # Application key used for generating user tokens, etc.
      # If APP_KEY changes, old tokens will become invalid
      # It can be any random string, make sure it is not exposed
      - APP_KEY=your-secret-key
      # Database type, supports postgres, mysql, mariadb, sqlite
      - DB_DIALECT=mariadb
      - DB_HOST=mariadb
      - DB_DATABASE=nocobase
      - DB_USER=root
      - DB_PASSWORD=nocobase
      - DB_TIMEZONE=+08:00
      - DB_UNDERSCORED=true
    volumes:
      - ./storage:/app/nocobase/storage
    ports:
      - "13000:80"
    # init: true

  # Skip this service if using an existing database server
  mariadb:
    image: nocobase/mariadb:11
    # Use the following image if unable to download from DockerHub
    #image: registry.cn-shanghai.aliyuncs.com/nocobase/mariadb:11
    environment:
      MYSQL_DATABASE: nocobase
      MYSQL_USER: nocobase
      MYSQL_PASSWORD: nocobase
      MYSQL_ROOT_PASSWORD: nocobase
    restart: always
    volumes:
      - ./storage/db/mariadb:/var/lib/mysql
    networks:
      - nocobase
```

### SQLite

For testing purposes only, not recommended for production environments.

```yml
version: "3"

networks:
  nocobase:
    driver: bridge

services:
  app:
    image: nocobase/nocobase:latest
    # Use the following image if unable to download from DockerHub
    #image: registry.cn-shanghai.aliyuncs.com/nocobase/nocobase:latest
    networks:
      - nocobase
    environment:
      # Application key used for generating user tokens, etc.
      # If APP_KEY changes, old tokens will become invalid
      # It can be any random string, make sure it is not exposed
      - APP_KEY=your-secret-key
    volumes:
      - ./storage:/app/nocobase/storage
    ports:
      - "13000:80"
```

## 2. Select the appropriate NocoBase image

- `nocobase/nocobase:main` Git source main branch version, not stable, for early adopters.
- `nocobase/nocobase:latest` Latest released version, recommended for stability.
- `nocobase/nocobase:1.2.4-alpha` A specific version.
- `registry.cn-shanghai.aliyuncs.com/nocobase/*`  
  Alibaba Cloud images pushed by NocoBase, for cases where DockerHub download is unavailable.

Example

```yml
# ...
services:
  app:
    # Docker Hub images
    image: nocobase/nocobase:main
    image: nocobase/nocobase:latest
    image: nocobase/nocobase:1.2.4-alpha
    # Alibaba Cloud main version (AMD64 architecture only)
    image: registry.cn-shanghai.aliyuncs.com/nocobase/nocobase:main
    # Alibaba Cloud latest version
    image: registry.cn-shanghai.aliyuncs.com/nocobase/nocobase:latest
    # Alibaba Cloud specific version
    image: registry.cn-shanghai.aliyuncs.com/nocobase/nocobase:1.2.4-alpha
# ...
  postgres:
    # Docker Hub images
    image: nocobase/postgres:16
    # Alibaba Cloud PostgreSQL 16 image
    image: registry.cn-shanghai.aliyuncs.com/nocobase/postgres:16
# ...
  mysql:
    # Docker Hub images
    image: nocobase/mysql:8
    # Alibaba Cloud MySQL 8 image
    image: registry.cn-shanghai.aliyuncs.com/nocobase/mysql:8
# ...
  mariadb:
    # Docker Hub images, may not be downloadable
    image: nocobase/mariadb:11
    # Alibaba Cloud MariaDB 11 image
    image: registry.cn-shanghai.aliyuncs.com/nocobase/mariadb:11
# ...
```

## 3. Install and start NocoBase

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
