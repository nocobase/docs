# Docker 安装

## 0. 先决条件

⚡⚡ 请确保你已经安装了 [Docker](https://docs.docker.com/get-docker/)

## 1. 新建 docker-compose.yml

```bash
# 创建一个名为 my-project（可以是其他名称）的文件夹，用于存放 NocoBase 生成的系统文件
mkdir my-project && cd my-project

# 创建一个空的 docker-compose.yml 文件
vi docker-compose.yml
```

## 2. 配置 docker-compose.yml

不同数据库配置参数略有不同，请选择合适的数据库配置，并复制到 docker-compose.yml 里

<Tabs>

<div label="PostgreSQL" name="postgres">

```yml
version: '3'

networks:
  nocobase:
    driver: bridge

services:
  app:
    image: registry.cn-shanghai.aliyuncs.com/nocobase/nocobase:latest
    restart: always
    networks:
      - nocobase
    depends_on:
      - postgres
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
      # 时区
      - TZ=Asia/Shanghai
      # 商业插件，使用 service platform 的账号信息
      - NOCOBASE_PKG_USERNAME=
      - NOCOBASE_PKG_PASSWORD=

    volumes:
      - ./storage:/app/nocobase/storage
    ports:
      - '13000:80'
    # init: true

  # 如果使用已有数据库服务，可以不启动 postgres
  postgres:
    image: registry.cn-shanghai.aliyuncs.com/nocobase/postgres:16
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

</div>

<div label="MySQL" name="mysql">

```yml
version: '3'

networks:
  nocobase:
    driver: bridge

services:
  app:
    image: registry.cn-shanghai.aliyuncs.com/nocobase/nocobase:latest
    restart: always
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
      # 数据库名
      - DB_DATABASE=nocobase
      # 数据库用户
      - DB_USER=root
      # 数据库密码
      - DB_PASSWORD=nocobase
      # 数据库表名、字段名是否转为 snake case 风格
      - DB_UNDERSCORED=true
      # 时区
      - TZ=Asia/Shanghai
      # 商业插件，使用 service platform 的账号信息
      - NOCOBASE_PKG_USERNAME=
      - NOCOBASE_PKG_PASSWORD=
    volumes:
      - ./storage:/app/nocobase/storage
    ports:
      - '13000:80'
    # init: true

  # 如果使用已有数据库服务，可以不启动 mysql
  mysql:
    image: registry.cn-shanghai.aliyuncs.com/nocobase/mysql:8
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

</div>

<div label="MariaDB" name="mariadb">

```yml
version: '3'

networks:
  nocobase:
    driver: bridge

services:
  app:
    image: registry.cn-shanghai.aliyuncs.com/nocobase/nocobase:latest
    restart: always
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
      # 数据库主机，可以替换为已有的数据库服务器 IP
      - DB_HOST=mariadb
      # 数据库名
      - DB_DATABASE=nocobase
      # 数据库用户
      - DB_USER=root
      # 数据库密码
      - DB_PASSWORD=nocobase
      # 数据库表名、字段名是否转为 snake case 风格
      - DB_UNDERSCORED=true
      # 时区
      - TZ=Asia/Shanghai
      # 商业插件，使用 service platform 的账号信息
      - NOCOBASE_PKG_USERNAME=
      - NOCOBASE_PKG_PASSWORD=
    volumes:
      - ./storage:/app/nocobase/storage
    ports:
      - '13000:80'
    # init: true

  # 如果使用已有数据库服务，可以不启动 mariadb
  mariadb:
    image: registry.cn-shanghai.aliyuncs.com/nocobase/mariadb:11
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

</div>
</Tabs>

选择合适的 NocoBase 版本, 参考 [版本选择](./index.md#安装哪个版本)

- `latest`：功能稳定，测试较为完善的版本，仅做缺陷修复。推荐安装此版本。
- `beta`: 包含即将发布的新功能，经过初步测试的版本，可能存在部分已知或未知问题。
- `alpha`: 开发中的版本，包含最新的功能代码，可能尚未完成或存在较多不稳定因素，主要用于内部开发和快速迭代。
- `1.3.51`：指定版本号，最新版本查看 [已发布版本列表](https://hub.docker.com/r/nocobase/nocobase/tags)

:::warning
**v1.4及以上版本**通过设置环境变量 [`NOCOBASE_PKG_USERNAME`](/welcome/getting-started/env#nocobase_pkg_username) 和 [`NOCOBASE_PKG_PASSWORD`](/welcome/getting-started/env#nocobase_pkg_password)，即可在安装或升级应用时自动下载商业插件。
:::

示例

```yml
# ...
services:
  app:
    # 国内用户建议使用阿里云镜像
    image: registry.cn-shanghai.aliyuncs.com/nocobase/nocobase:latest
    image: registry.cn-shanghai.aliyuncs.com/nocobase/nocobase:beta
    image: registry.cn-shanghai.aliyuncs.com/nocobase/nocobase:alpha
    image: registry.cn-shanghai.aliyuncs.com/nocobase/nocobase:1.3.51

    # Docker Hub 镜像（国内用户无法下载）
    image: nocobase/nocobase:latest
    image: nocobase/nocobase:beta
    image: nocobase/nocobase:alpha
    image: nocobase/nocobase:1.3.51
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

app-postgres-app-1  | nginx started
app-postgres-app-1  | yarn run v1.22.15
app-postgres-app-1  | $ cross-env DOTENV_CONFIG_PATH=.env node -r dotenv/config packages/app/server/lib/index.js install -s
app-postgres-app-1  | Done in 2.72s.
app-postgres-app-1  | yarn run v1.22.15
app-postgres-app-1  | $ pm2-runtime start --node-args="-r dotenv/config" packages/app/server/lib/index.js -- start
app-postgres-app-1  | 2022-04-28T15:45:38: PM2 log: Launching in no daemon mode
app-postgres-app-1  | 2022-04-28T15:45:38: PM2 log: App [index:0] starting in -fork mode-
app-postgres-app-1  | 2022-04-28T15:45:38: PM2 log: App [index:0] online
app-postgres-app-1  | 🚀 NocoBase server running at: http://localhost:13000/
```

## 4. 登录 NocoBase

使用浏览器打开 [http://localhost:13000](http://localhost:13000) 初始化账号和密码是 `admin@nocobase.com` 和 `admin123`。
