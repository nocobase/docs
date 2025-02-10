### 安装数据库客户端

前往官网下载与所使用的数据库版本匹配的客户端：

- MySQL：https://dev.mysql.com/downloads/
- PostgreSQL：https://www.postgresql.org/download/

Docker 版本，可以直接在 `./storage/scripts` 目录下，编写一段脚本

```bash
mkdir ./storage/scripts
cd ./storage/scripts
vim install-database-client.sh
```

`install-database-client.sh` 的内容如下：

<Tabs>

<div label="PostgreSQL" name="PostgreSQL">

```bash
#!/bin/bash

# Check if pg_dump is installed
if [ ! -f /usr/bin/pg_dump ]; then
    echo "pg_dump is not installed, starting PostgreSQL client installation..."

    # Configure Aliyun mirrors
    tee /etc/apt/sources.list > /dev/null <<EOF
deb http://mirrors.aliyun.com/debian/ bookworm main contrib non-free
deb-src http://mirrors.aliyun.com/debian/ bookworm main contrib non-free
deb http://mirrors.aliyun.com/debian-security/ bookworm-security main contrib non-free
deb-src http://mirrors.aliyun.com/debian-security/ bookworm-security main contrib non-free
deb http://mirrors.aliyun.com/debian/ bookworm-updates main contrib non-free
deb-src http://mirrors.aliyun.com/debian/ bookworm-updates main contrib non-free
deb http://mirrors.aliyun.com/debian/ bookworm-backports main contrib non-free
deb-src http://mirrors.aliyun.com/debian/ bookworm-backports main contrib non-free
EOF

    # Install necessary tools and clean cache
    apt-get update && apt-get install -y --no-install-recommends wget gnupg \
      && rm -rf /var/lib/apt/lists/*

    # Configure PostgreSQL source
    echo "deb [signed-by=/usr/share/keyrings/pgdg.asc] http://mirrors.aliyun.com/postgresql/repos/apt bookworm-pgdg main" > /etc/apt/sources.list.d/pgdg.list
    wget --quiet -O /usr/share/keyrings/pgdg.asc http://mirrors.aliyun.com/postgresql/repos/apt/ACCC4CF8.asc

    # Install PostgreSQL client
    apt-get update && apt-get install -y --no-install-recommends postgresql-client-16 \
      && rm -rf /var/lib/apt/lists/*

    echo "PostgreSQL client installation completed."
else
    echo "pg_dump is already installed, skipping PostgreSQL client installation."
fi
```

</div>
<div label="MySQL/MariaDB" name="MySQL/MariaDB">

```bash
#!/bin/bash

if [ ! -f /usr/bin/mysql ]; then
    echo "MySQL client is not installed, starting MySQL client installation..."

    tee /etc/apt/sources.list > /dev/null <<EOF
deb http://mirrors.aliyun.com/debian/ bookworm main contrib non-free
deb-src http://mirrors.aliyun.com/debian/ bookworm main contrib non-free
deb http://mirrors.aliyun.com/debian-security/ bookworm-security main contrib non-free
deb-src http://mirrors.aliyun.com/debian-security/ bookworm-security main contrib non-free
deb http://mirrors.aliyun.com/debian/ bookworm-updates main contrib non-free
deb-src http://mirrors.aliyun.com/debian/ bookworm-updates main contrib non-free
deb http://mirrors.aliyun.com/debian/ bookworm-backports main contrib non-free
deb-src http://mirrors.aliyun.com/debian/ bookworm-backports main contrib non-free
EOF

    echo "Updating package list and installing necessary tools..."
    apt-get update && apt-get install -y --no-install-recommends wget gnupg \
        && rm -rf /var/lib/apt/lists/*

    wget --no-check-certificate https://downloads.mysql.com/archives/get/p/23/file/mysql-community-client-core_8.0.39-1debian12_amd64.deb && \
        dpkg -x mysql-community-client-core_8.0.39-1debian12_amd64.deb /tmp/mysql-client && \
        cp /tmp/mysql-client/usr/bin/mysqldump /usr/bin/ && \
        cp /tmp/mysql-client/usr/bin/mysql /usr/bin/

    echo "MySQL client installation completed."
else
    echo "MySQL client is already installed, skipping installation."
fi
```

</div>

</Tabs>

然后重启 app 容器

```bash
docker compose restart app
# 查看日志
docker compose logs app
```

查看数据库客户端版本号，必须与数据库服务端的版本号一致

<Tabs>
<div label="PostgreSQL" name="PostgreSQL">

```bash
docker compose exec app bash -c "pg_dump -V"
```

</div>
<div label="MySQL/MariaDB" name="MySQL/MariaDB">

```bash
docker compose exec app bash -c "mysql -V"
```
</div>
</Tabs>

### 安装插件

参考 [商业插件的安装与升级](/welcome/getting-started/plugin)
