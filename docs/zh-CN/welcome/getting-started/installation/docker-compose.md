# Docker 安装

## 0. 先决条件

⚡⚡ 请确保你已经安装了 [Docker](https://docs.docker.com/get-docker/)

## 1. 辨别 AMD64 和 ARM64

NocoBase 的 Docker 镜像目前支持 AMD64 和 ARM64 两种 CPU 架构。

### Windows

打开 “设置” -> “系统” -> “关于”，查看 “设备规格” 中的 “系统类型”。如果显示的是 “基于 x64 的处理器”，则为 AMD64。如果显示的是 “基于 ARM64 的处理器”，则为 ARM64。

### Linux/MacOS

使用命令 `uname -m`。如果输出是 x86_64，则为 AMD64。如果输出是 aarch64，则为 ARM64。

### MacOS

MacOS 自 2020 年起开始采用 ARM64 架构（称为 Apple Silicon）。在“关于本机”中，如果显示的是 Apple M1、M1 Pro、M1 Max、M1 Ultra 或 M2，则为 ARM64。如果是 Intel，则可能是 AMD64。

## 2. 配置 docker-compose.yml

在指定目录新建一个 nocobase 文件夹

```bash
# MacOS, Linux...
cd /your/path/nocobase
# Windows
cd C:\your\path\nocobase
```

并在 nocobase 文件夹里新建 docker-compose.yml 文件，内容如下：

:::warning
不同操作系统 CPU 架构可能不同，AMD64 使用默认的镜像即可，ARM64 使用 `-arm` 结尾的镜像。
:::

### PostgreSQL

```yml
version: "3"

networks:
  nocobase:
    driver: bridge

services:
  app:
    # latest 版本（AMD64 架构）
    image: registry.cn-shanghai.aliyuncs.com/nocobase/nocobase:latest
    # latest 版本（ARM64 架构）
    #image: registry.cn-shanghai.aliyuncs.com/nocobase/nocobase:latest-arm
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
    # NocoBase 发布的 PostgreSQL 16 镜像（AMD64 架构）
    image: registry.cn-shanghai.aliyuncs.com/nocobase/postgres:16
    # NocoBase 发布的 PostgreSQL 16 镜像（ARM64 架构）
    #image: registry.cn-shanghai.aliyuncs.com/nocobase/postgres:16-arm
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
    # latest 版本（AMD64 架构）
    image: registry.cn-shanghai.aliyuncs.com/nocobase/nocobase:latest
    # latest 版本（ARM64 架构）
    #image: registry.cn-shanghai.aliyuncs.com/nocobase/nocobase:latest-arm
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
    # NocoBase 发布的 MySQL 8 镜像（AMD64 架构）
    image: registry.cn-shanghai.aliyuncs.com/nocobase/mysql:8
    # NocoBase 发布的 MySQL 8 镜像（ARM64 架构）
    #image: registry.cn-shanghai.aliyuncs.com/nocobase/mysql:8-arm
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
    # latest 版本（AMD64 架构）
    image: registry.cn-shanghai.aliyuncs.com/nocobase/nocobase:latest
    # latest 版本（ARM64 架构）
    #image: registry.cn-shanghai.aliyuncs.com/nocobase/nocobase:latest-arm
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
    # NocoBase 发布的 MariaDB 11 镜像（AMD64 架构）
    image: registry.cn-shanghai.aliyuncs.com/nocobase/mariadb:11
    # NocoBase 发布的 MariaDB 11 镜像（ARM64 架构）
    #image: registry.cn-shanghai.aliyuncs.com/nocobase/mariadb:11-arm
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
    # latest 版本（AMD64 架构）
    image: registry.cn-shanghai.aliyuncs.com/nocobase/nocobase:latest
    # latest 版本（ARM64 架构）
    #image: registry.cn-shanghai.aliyuncs.com/nocobase/nocobase:latest-arm
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

## 3. 选择合适的 NocoBase 镜像

- `nocobase/nocobase:main` Git 源码的 main 分支版本，非稳定版本，尝鲜用户可以使用
- `nocobase/nocobase:latest` 已发布的最新版，如果追求稳定，建议使用这个版本
- `nocobase/nocobase:1.2.4-alpha` 使用某个具体的版本
- `registry.cn-shanghai.aliyuncs.com/nocobase/*`  
  由 NocoBase 推送的阿里云镜像，用于解决无法从 DockerHub 下载镜像的问题


以下为 ARM64 架构的镜像

- `registry.cn-shanghai.aliyuncs.com/nocobase/nocobase:*-arm`  
  ARM64 架构的 NocoBase 镜像
- `registry.cn-shanghai.aliyuncs.com/nocobase/postgres:16-arm`  
  ARM64 架构的 PostgreSQL 镜像
- `registry.cn-shanghai.aliyuncs.com/nocobase/mysql:8-arm`  
  ARM64 架构的 MySQL 镜像
- `registry.cn-shanghai.aliyuncs.com/nocobase/mariadb:11-arm`  
  ARM64 架构的 MariaDB 镜像

示例

```yml
# ...
services:
  app:
    # 阿里云 main 版本（只支持 AMD64 架构）
    image: registry.cn-shanghai.aliyuncs.com/nocobase/nocobase:main
    # 阿里云 latest 版本（AMD64 架构）
    image: registry.cn-shanghai.aliyuncs.com/nocobase/nocobase:latest
    # 阿里云 latest 版本（ARM64 架构）
    image: registry.cn-shanghai.aliyuncs.com/nocobase/nocobase:latest-arm
    # 阿里云指定版本（AMD64 架构）
    image: registry.cn-shanghai.aliyuncs.com/nocobase/nocobase:1.2.4-alpha
    # 阿里云指定版本（ARM64 架构）
    image: registry.cn-shanghai.aliyuncs.com/nocobase/nocobase:1.2.4-alpha-arm
    # Docker Hub 镜像，可能会下载不了
    image: nocobase/nocobase:main
    image: nocobase/nocobase:latest
    image: nocobase/nocobase:1.2.4-alpha
# ...
  postgres:
    # NocoBase 发布的 PostgreSQL 16 镜像（AMD64 架构）
    image: registry.cn-shanghai.aliyuncs.com/nocobase/postgres:16
    # NocoBase 发布的 PostgreSQL 16 镜像（ARM64 架构）
    image: registry.cn-shanghai.aliyuncs.com/nocobase/postgres:16-arm
    # Docker Hub 镜像，可能下载不了
    image: nocobase/postgres:16
# ...
  mysql:
    # NocoBase 发布的 MySQL 8 镜像（AMD64 架构）
    image: registry.cn-shanghai.aliyuncs.com/nocobase/mysql:8
    # NocoBase 发布的 MySQL 8 镜像（ARM64 架构）
    image: registry.cn-shanghai.aliyuncs.com/nocobase/mysql:8-arm
    # Docker Hub 镜像，可能下载不了
    image: nocobase/mysql:8
# ...
  mariadb:
    # NocoBase 发布的 MariaDB 11 镜像（AMD64 架构）
    image: registry.cn-shanghai.aliyuncs.com/nocobase/mariadb:11
    # NocoBase 发布的 MariaDB 11 镜像（ARM64 架构）
    image: registry.cn-shanghai.aliyuncs.com/nocobase/mariadb:11-arm
    # Docker Hub 镜像，可能下载不了
    image: nocobase/mariadb:11
# ...
```

## 4. 安装并启动 NocoBase

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

## 5. 登录 NocoBase

使用浏览器打开 http://localhost:13000/ 初始化账号和密码是 `admin@nocobase.com` 和 `admin123`。
