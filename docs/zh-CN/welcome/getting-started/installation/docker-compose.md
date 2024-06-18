# Docker 安装

## 0. 先决条件

⚡⚡ 请确保你已经安装了 [Docker](https://docs.docker.com/get-docker/)

## 1. 配置 docker-compose.yml

在指定目录新建一个 nocobase 文件夹

```bash
# MacOS, Linux...
cd /your/path/nocobase
# Windows
cd C:\your\path\nocobase
```

并在 nocobase 文件夹里新建 docker-compose.yml 文件，内容如下：

### PostgreSQL

```yml
version: "3"

networks:
  nocobase:
    driver: bridge

services:
  app:
    # latest 版本
    image: registry.cn-shanghai.aliyuncs.com/nocobase/nocobase:latest
    # Docker Hub 镜像，可能会下载不了
    #image: nocobase/nocobase:latest
    networks:
      - nocobase
    environment:
      # 应用的密钥，用于生成用户 token 等
      # 如果 APP_KEY 修改了，旧的 token 也会随之失效
      # 可以是任意随机字符串，并确保不对外泄露
      - APP_KEY=your-secret-key
      # 数据库类型，支持 postgres, mysql, mariadb, sqlite
      - DB_DIALECT=postgres
      # 数据库主机，可以替换为已有的数据库服务器 IP
      - DB_HOST=postgres
      # 数据库名
      - DB_DATABASE=nocobase
      # 数据库用户
      - DB_USER=nocobase
      # 数据库密码
      - DB_PASSWORD=nocobase
    volumes:
      - ./storage:/app/nocobase/storage
    ports:
      - "13000:80"
    depends_on:
      - postgres
    # init: true

  # 如果使用已有数据库服务器，可以不启动 postgres
  postgres:
    # 阿里云 postgres:16 镜像
    image: registry.cn-shanghai.aliyuncs.com/nocobase/postgres:16
    # Docker Hub 镜像，可能下载不了
    #image: nocobase/postgres:16
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
    # latest 版本
    image: registry.cn-shanghai.aliyuncs.com/nocobase/nocobase:latest
    # Docker Hub 镜像，可能会下载不了
    #image: nocobase/nocobase:latest
    networks:
      - nocobase
    depends_on:
      - mysql
    environment:
      # 应用的密钥，用于生成用户 token 等
      # 如果 APP_KEY 修改了，旧的 token 也会随之失效
      # 可以是任意随机字符串，并确保不对外泄露
      - APP_KEY=your-secret-key
      # 数据库类型，支持 postgres, mysql, mariadb, sqlite
      - DB_DIALECT=mysql
      # 数据库主机，可以替换为已有的数据库服务器 IP
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
  
  # 如果使用已有数据库服务器，可以不启动 mysql
  mysql:
    # 阿里云 mysql:8 镜像
    image: registry.cn-shanghai.aliyuncs.com/nocobase/mysql:8
    # Docker Hub 镜像，可能下载不了
    #image: nocobase/mysql:8
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
    # latest 版本
    image: registry.cn-shanghai.aliyuncs.com/nocobase/nocobase:latest
    # Docker Hub 镜像，可能会下载不了
    #image: nocobase/nocobase:latest
    networks:
      - nocobase
    depends_on:
      - mariadb
    environment:
      # 应用的密钥，用于生成用户 token 等
      # 如果 APP_KEY 修改了，旧的 token 也会随之失效
      # 可以是任意随机字符串，并确保不对外泄露
      - APP_KEY=your-secret-key
      # 数据库类型，支持 postgres, mysql, mariadb, sqlite
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

  # 如果使用已有数据库服务器，可以不启动 mariadb
  mariadb:
    # 阿里云 mariadb:11 镜像
    image: registry.cn-shanghai.aliyuncs.com/nocobase/mariadb:11
    # Docker Hub 镜像，可能下载不了
    #image: nocobase/mariadb:11
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

仅用于测试，不建议生产环境使用。

```yml
version: "3"

networks:
  nocobase:
    driver: bridge

services:
  app:
    # latest 版本
    image: registry.cn-shanghai.aliyuncs.com/nocobase/nocobase:latest
    # Docker Hub 镜像，可能会下载不了
    #image: nocobase/nocobase:latest
    networks:
      - nocobase
    environment:
      # 应用的密钥，用于生成用户 token 等
      # 如果 APP_KEY 修改了，旧的 token 也会随之失效
      # 可以是任意随机字符串，并确保不对外泄露
      - APP_KEY=your-secret-key
    volumes:
      - ./storage:/app/nocobase/storage
    ports:
      - "13000:80"
```

## 2. 选择合适的 NocoBase 镜像

- `nocobase/nocobase:main` Git 源码的 main 分支版本，非稳定版本，尝鲜用户可以使用
- `nocobase/nocobase:latest` 已发布的最新版，如果追求稳定，建议使用这个版本
- `nocobase/nocobase:1.2.4-alpha` 使用某个具体的版本
- `registry.cn-shanghai.aliyuncs.com/nocobase/*`  
  由 NocoBase 推送的阿里云镜像，用于解决无法从 DockerHub 下载镜像的问题

示例

```yml
# ...
services:
  app:
    # 阿里云 main 版本（只支持 AMD64 架构）
    image: registry.cn-shanghai.aliyuncs.com/nocobase/nocobase:main
    # 阿里云 latest 版本
    image: registry.cn-shanghai.aliyuncs.com/nocobase/nocobase:latest
    # 阿里云指定版本
    image: registry.cn-shanghai.aliyuncs.com/nocobase/nocobase:1.2.4-alpha
    # Docker Hub 镜像，可能会下载不了
    image: nocobase/nocobase:main
    image: nocobase/nocobase:latest
    image: nocobase/nocobase:1.2.4-alpha
# ...
  postgres:
    # 阿里云 PostgreSQL 16 镜像
    image: registry.cn-shanghai.aliyuncs.com/nocobase/postgres:16
    # Docker Hub 镜像，可能下载不了
    image: nocobase/postgres:16
# ...
  mysql:
    # 阿里云 MySQL 8 镜像
    image: registry.cn-shanghai.aliyuncs.com/nocobase/mysql:8
    # Docker Hub 镜像，可能下载不了
    image: nocobase/mysql:8
# ...
  mariadb:
    # 阿里云 MariaDB 11 镜像
    image: registry.cn-shanghai.aliyuncs.com/nocobase/mariadb:11
    # Docker Hub 镜像，可能下载不了
    image: nocobase/mariadb:11
# ...
```

## 3. 安装并启动 NocoBase

安装过程可能需要等待几分钟

```bash
# 拉取最新镜像
$ docker-compose pull
# 在后台运行
$ docker-compose up -d
# 查看 app 进程的情况
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

## 4. 登录 NocoBase

使用浏览器打开 http://localhost:13000/ 初始化账号和密码是 `admin@nocobase.com` 和 `admin123`。
