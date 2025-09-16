# Установка клиента базы данных Postgres

## Установка Docker

### Создайте Dockerfile в каталоге, где находится ваш NocoBase Dockerfile

```Dockerfile
# Based on the "next" version
FROM nocobase/nocobase:latest

# Choose the appropriate PostgreSQL version as needed; here we use version 16 as an example.
ARG PG_VERSION=16

# Update sources.list with the official Debian repositories
RUN tee /etc/apt/sources.list > /dev/null <<EOF
deb http://deb.debian.org/debian/ bullseye main contrib non-free
deb-src http://deb.debian.org/debian/ bullseye main contrib non-free
deb http://security.debian.org/debian-security bullseye-security main contrib non-free
deb-src http://security.debian.org/debian-security bullseye-security main contrib non-free
deb http://deb.debian.org/debian/ bullseye-updates main contrib non-free
deb-src http://deb.debian.org/debian/ bullseye-updates main contrib non-free
deb http://deb.debian.org/debian/ bullseye-backports main contrib non-free
deb-src http://deb.debian.org/debian/ bullseye-backports main contrib non-free
EOF

# Execute the installation script
RUN apt update && apt install -y postgresql-common gnupg \
  && /usr/share/postgresql-common/pgdg/apt.postgresql.org.sh -y \
  && apt install -y postgresql-client-${PG_VERSION}
```

### Измените файл docker-compose.yml для NocoBase

```diff
version: "3"
networks:
  nocobase:
    driver: bridge
services:
  app:
-   image: nocobase/nocobase:next
+   build:
+     dockerfile: Dockerfile
    networks:
      - nocobase
    restart: always
    depends_on:
      - postgres
    environment:
      # Application secret key used for generating user tokens, etc.
      # Changing APP_KEY will invalidate existing tokens.
      # Use any random string and keep it confidential.
      - APP_KEY=your-secret-key
      # Database dialect; supports postgres, mysql, mariadb, sqlite
      - DB_DIALECT=postgres
      # Database host; replace with the IP address of your existing database server if needed
      - DB_HOST=postgres
      # Database name
      - DB_DATABASE=nocobase
      # Database user
      - DB_USER=nocobase
      # Database password
      - DB_PASSWORD=nocobase
      # Time zone
      - TZ=Asia/Shanghai
    volumes:
      - ./storage:/app/nocobase/storage
    ports:
      - "13000:80"
    # init: true
  # If you are using an existing database service, you can omit the postgres service.
  postgres:
    image: nocobase/postgres:16
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

### Обновление

Раньше вам приходилось извлекать новый образ для каждого обновления. Теперь вам нужно каждый раз создавать новый образ:

```diff
# Pull the latest image
- docker-compose pull app
# Update the app container
+ docker-compose build app --pull
# Start the container
docker-compose up -d app
# Check the app logs
docker-compose logs app
```

## Другие способы установки

Если вы установили NocoBase с помощью [create-nocobase-app](/welcome/getting-started/installation/create-nocobase-app) или [клонированием репозитория Git](/welcome/getting-started/installation/git-clone), посетите [официальную страницу загрузки PostgreSQL](https://www.postgresql.org/download/), чтобы выбрать подходящую версию PostgreSQL, и следуйте официальной документации по установке.
