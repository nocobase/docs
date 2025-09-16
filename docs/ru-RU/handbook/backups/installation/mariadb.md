# Установка клиента базы данных MariaDB

## Установка Docker

### Создайте Dockerfile в каталоге, содержащем NocoBase Dockerfile

```Dockerfile
# Based on the "next" version
FROM nocobase/nocobase:latest

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

# Run the installation script to install the latest MySQL client version
RUN apt-get update && apt-get install -y wget && \
  wget https://downloads.mysql.com/archives/get/p/23/file/mysql-community-client-core_8.1.0-1debian11_amd64.deb && \
  dpkg -x mysql-community-client-core_8.1.0-1debian11_amd64.deb /tmp/mysql-client && \
  cp /tmp/mysql-client/usr/bin/mysqldump /usr/bin/ && \
  cp /tmp/mysql-client/usr/bin/mysql /usr/bin/
```

### Измените файл docker-compose.yml для NocoBase

```diff
version: "3"

networks:
  nocobase:
    driver: bridge

services:
  app:
-   image: nocobase/nocobase:next  # (previously: registry.cn-shanghai.aliyuncs.com/nocobase/nocobase:next)
+   build:
+     dockerfile: Dockerfile
    networks:
      - nocobase
    restart: always
    depends_on:
      - mariadb
    environment:
      # Application secret key used for generating user tokens, etc.
      # Changing APP_KEY will invalidate existing tokens.
      # Use any random string and keep it confidential.
      - APP_KEY=your-secret-key
      # Database dialect; supports postgres, mysql, mariadb, sqlite
      - DB_DIALECT=mariadb
      # Database host; can be replaced with an existing database server's IP
      - DB_HOST=mariadb
      # Database name
      - DB_DATABASE=nocobase
      # Database user
      - DB_USER=root
      # Database password
      - DB_PASSWORD=nocobase
      # Whether to convert table and field names to snake case
      - DB_UNDERSCORED=true
      # Time zone
      - TZ=Asia/Shanghai
    volumes:
      - ./storage:/app/nocobase/storage
    ports:
      - "13000:80"
    # init: true

  # If you are using an existing database service, you can omit starting mariadb
  mariadb:
-    image: nocobase/mariadb:11  # (previously: registry.cn-shanghai.aliyuncs.com/nocobase/mariadb:11)
+    image: nocobase/mariadb:11
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

## Другие методы установки

Если ваш NocoBase был установлен с помощью [create-nocobase-app](/welcome/getting-started/installation/create-nocobase-app) или [клонированием репозитория Git](/welcome/getting-started/installation/git-clone), посетите официальную страницу загрузки MySQL для установки.
- Последняя версия: [https://dev.mysql.com/downloads/mysql/](https://dev.mysql.com/downloads/mysql/)
