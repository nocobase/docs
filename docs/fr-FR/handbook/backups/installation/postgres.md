# Postgres Client Installation

## Docker Installation

### Enter the directory where the NocoBase Dockerfile is located and create a Dockerfile file

```Dockerfile
# Based on the next version
FROM registry.cn-shanghai.aliyuncs.com/nocobase/nocobase:next

# Specify the desired PostgreSQL version, here we use version 16 as an example
ARG PG_VERSION=16

# Run installation script
RUN apt update && apt install -y postgresql-common gnupg \
  && /usr/share/postgresql-common/pgdg/apt.postgresql.org.sh -y \
  && apt install -y postgresql-client-${PG_VERSION}
```

### Modify the docker-compose.yml file of NocoBase

```diff
version: "3"

networks:
  nocobase:
    driver: bridge

services:
  app:
-   image: registry.cn-shanghai.aliyuncs.com/nocobase/nocobase:next
+   build:
+     dockerfile: Dockerfile
    networks:
      - nocobase
    depends_on:
      - postgres
    environment:
      # The application's secret key, used to generate user tokens, etc.
      # If APP_KEY is changed, old tokens will also become invalid.
      # It can be any random string, and make sure it is not exposed.
      - APP_KEY=your-secret-key
      # Database type, supports postgres, mysql, mariadb
      - DB_DIALECT=postgres
      # Database host, can be replaced with the IP of an existing database server
      - DB_HOST=postgres
      # Database name
      - DB_DATABASE=nocobase
      # Database user
      - DB_USER=nocobase
      # Database password
      - DB_PASSWORD=nocobase
      # Timezone
      - TZ=Asia/Shanghai
    volumes:
      - ./storage:/app/nocobase/storage
    ports:
      - "13000:80"
    # init: true

  # If using an existing database server, postgres service can be omitted
  postgres:
    image: postgres:16
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

### Upgrade

Previously, you would pull a new image for each update. Now, you need to build a new image for each update.

```diff
# Pull the latest image
- docker-compose pull app
# Rebuild the app container
+ docker-compose build app --pull
# Start the app
docker-compose up -d app
# Check app logs
docker-compose logs app
```

## Other Installation Methods
If your NocoBase was installed with [create-nocobase-app](/welcome/getting-started/installation/create-nocobase-app) or [Git source code](/welcome/getting-started/installation/git-clone), please check https://www.postgresql.org/download/, choose the appropriate PostgreSQL version, and follow the official installation guide.