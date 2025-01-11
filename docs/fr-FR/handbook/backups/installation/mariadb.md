# MariaDB Client Installation

## Docker Installation

### Enter the directory where the NocoBase Dockerfile is located and create a Dockerfile file

```Dockerfile
# Based on the next version
FROM registry.cn-shanghai.aliyuncs.com/nocobase/nocobase:next

# run installation script, choose the latest version of mysql
RUN apt-get update && apt-get install -y wget && \
 wget https://downloads.mysql.com/archives/get/p/23/file/mysql-community-client-core_8.1.0-1debian11_amd64.deb && \
 dpkg -x mysql-community-client-core_8.1.0-1debian11_amd64.deb /tmp/mysql-client && \
 cp /tmp/mysql-client/usr/bin/mysqldump /usr/bin/ &&\
 cp /tmp/mysql-client/usr/bin/mysql /usr/bin/
 ```

### Modify the docker-compose.yml file of NocoBase

```diff
version: "3"

networks:
  nocobase:
    driver: bridge

services:
  app:
-   image: nocobase/nocobase:latest
+   build:
+     dockerfile: Dockerfile
    networks:
      - nocobase
    depends_on:
      - mariadb
    environment:
      # The application's secret key, used to generate user tokens, etc.
      # If APP_KEY is changed, old tokens will also become invalid.
      # It can be any random string, and make sure it is not exposed.
      - APP_KEY=your-secret-key
      # Database type, supports postgres, mysql, mariadb
      - DB_DIALECT=mariadb
      # Database host, can be replaced with the IP of an existing database server
      - DB_HOST=mariadb
      # Database name
      - DB_DATABASE=nocobase
      # Database user
      - DB_USER=root
      # Database password
      - DB_PASSWORD=nocobase
      # Whether to convert table and field names to snake case
      - DB_UNDERSCORED=true
      # Timezone
      - TZ=Asia/Shanghai
    volumes:
      - ./storage:/app/nocobase/storage
    ports:
      - "13000:80"
    # init: true

  # If using an existing database server, mariadb service can be omitted
  mariadb:
    image: mariadb:11
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
If your NocoBase was installed with [create-nocobase-app](/welcome/getting-started/installation/create-nocobase-app) or [Git source code](/welcome/getting-started/installation/git-clone), please check the below MySQL official release page, and follow the official installation guide.
- Last versions: https://dev.mysql.com/downloads/mysql/