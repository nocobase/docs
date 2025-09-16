### Установка клиента базы данных

Посетите официальный сайт, чтобы загрузить клиент, соответствующий версии используемой вами базы данных:

- MySQL: https://dev.mysql.com/downloads/
- PostgreSQL: https://www.postgresql.org/download/

Для версий Docker вы можете напрямую добавить скрипт в каталог `./storage/scripts`

```bash
mkdir ./storage/scripts
cd ./storage/scripts
vim install-database-client.sh
```

Содержимое `install-database-client.sh` выглядит следующим образом:

<Tabs>

<div label="PostgreSQL" name="PostgreSQL">

```bash
#!/bin/bash

# Check if pg_dump is installed
if [ ! -f /usr/bin/pg_dump ]; then
    echo "pg_dump is not installed, starting PostgreSQL client installation..."

    # Install necessary tools and clean cache
    apt-get update && apt-get install -y --no-install-recommends wget gnupg \
      && rm -rf /var/lib/apt/lists/*

    # Configure PostgreSQL source
    echo "deb [signed-by=/usr/share/keyrings/pgdg.asc] https://apt.postgresql.org/pub/repos/apt bookworm-pgdg main" > /etc/apt/sources.list.d/pgdg.list
    wget --quiet -O /usr/share/keyrings/pgdg.asc https://apt.postgresql.org/pub/repos/apt/ACCC4CF8.asc

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

Затем перезапустите контейнер приложения.

```bash
docker compose restart app
# View logs
docker compose logs app
```

Проверьте номер версии клиента базы данных, который должен совпадать с номером версии сервера базы данных.

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

### Установка плагинов

См. [Установка и обновление коммерческих плагинов](/welcome/getting-started/plugin)
