# MySQL 数据库客户端安装

## Docker 安装

### 进入 NocoBase Dockerfile 所在目录, 新建 Dockerfile 文件

```Dockerfile
# 基于 next 版本
FROM registry.cn-shanghai.aliyuncs.com/nocobase/nocobase:next

# 国内用户用户要更新 sources.list
RUN tee /etc/apt/sources.list > /dev/null <<EOF
deb http://mirrors.aliyun.com/debian/ bullseye main contrib non-free
deb-src http://mirrors.aliyun.com/debian/ bullseye main contrib non-free
deb http://mirrors.aliyun.com/debian-security/ bullseye-security main contrib non-free
deb-src http://mirrors.aliyun.com/debian-security/ bullseye-security main contrib non-free
deb http://mirrors.aliyun.com/debian/ bullseye-updates main contrib non-free
deb-src http://mirrors.aliyun.com/debian/ bullseye-updates main contrib non-free
deb http://mirrors.aliyun.com/debian/ bullseye-backports main contrib non-free
deb-src http://mirrors.aliyun.com/debian/ bullseye-backports main contrib non-free
EOF

# 执行安装脚本，请根据实际情况替换成对应的 MySQL 版本链接
RUN apt-get update && apt-get install -y wget && \
 wget https://downloads.mysql.com/archives/get/p/23/file/mysql-community-client-core_8.1.0-1debian11_amd64.deb && \
 dpkg -x mysql-community-client-core_8.1.0-1debian11_amd64.deb /tmp/mysql-client && \
 cp /tmp/mysql-client/usr/bin/mysqldump /usr/bin/ &&\
 cp /tmp/mysql-client/usr/bin/mysql /usr/bin/
```

### 修改 NocoBase 的 docker-compose.yml 文件

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
    volumes:
      - ./storage:/app/nocobase/storage
    ports:
      - "13000:80"
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

### 升级

以前每次更新都去 pull 新的镜像，改之后，每次都要 build 新的镜像

```diff
# 拉取最新镜像
- docker-compose pull app
# 更新 app 容器
+ docker-compose build app --pull
# 启动
docker-compose up -d app
# 查看 app 进程的情况
docker-compose logs app
```

## 其它方式安装

如果您的 NocoBase 是使用[create-nocobase-app 安装](/welcome/getting-started/installation/create-nocobase-app) 或者 [Git 源码安装](/welcome/getting-started/installation/git-clone) 的，请访问 MySQL 官方发布页面，选择对应的 MySQL 版本，根据 MySQL 官方文档进行安装。
- 历史版本： https://downloads.mysql.com/archives/community/
- 最新版本： https://dev.mysql.com/downloads/mysql/
