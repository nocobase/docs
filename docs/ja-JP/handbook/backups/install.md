### データベースクライアントのインストール

使用しているデータベースのバージョンに一致するクライアントを公式サイトからダウンロードします：

- MySQL：https://dev.mysql.com/downloads/
- PostgreSQL：https://www.postgresql.org/download/

Docker バージョンでは、`./storage/scripts` ディレクトリにスクリプトを直接記述できます。

```bash
mkdir ./storage/scripts
cd ./storage/scripts
vim install-database-client.sh
```

`install-database-client.sh` の内容は以下の通りです：

<Tabs>

<div label="PostgreSQL" name="PostgreSQL">

```bash
#!/bin/bash

# pg_dumpがインストールされているか確認
if [ ! -f /usr/bin/pg_dump ]; then
    echo "pg_dumpがインストールされていません。PostgreSQLクライアントのインストールを開始します..."
    # 必要なツールをインストールし、キャッシュをクリア
    apt-get update && apt-get install -y --no-install-recommends wget gnupg \
      && rm -rf /var/lib/apt/lists/*

    # PostgreSQLソースを設定
    echo "deb [signed-by=/usr/share/keyrings/pgdg.asc] https://apt.postgresql.org/pub/repos/apt bookworm-pgdg main" > /etc/apt/sources.list.d/pgdg.list
    wget --quiet -O /usr/share/keyrings/pgdg.asc https://apt.postgresql.org/pub/repos/apt/ACCC4CF8.asc

    # PostgreSQLクライアントをインストール
    apt-get update && apt-get install -y --no-install-recommends postgresql-client-16 \
      && rm -rf /var/lib/apt/lists/*

    echo "PostgreSQLクライアントのインストールが完了しました。"
else
    echo "pg_dumpは既にインストールされています。PostgreSQLクライアントのインストールをスキップします。"
fi
```

</div>
<div label="MySQL/MariaDB" name="MySQL/MariaDB">

```bash
#!/bin/bash

if [ ! -f /usr/bin/mysql ]; then
    echo "MySQLクライアントがインストールされていません。MySQLクライアントのインストールを開始します..."
    echo "パッケージリストを更新し、必要なツールをインストールします..."
    apt-get update && apt-get install -y --no-install-recommends wget gnupg \
        && rm -rf /var/lib/apt/lists/*

    wget --no-check-certificate https://downloads.mysql.com/archives/get/p/23/file/mysql-community-client-core_8.0.39-1debian12_amd64.deb && \
        dpkg -x mysql-community-client-core_8.0.39-1debian12_amd64.deb /tmp/mysql-client && \
        cp /tmp/mysql-client/usr/bin/mysqldump /usr/bin/ && \
        cp /tmp/mysql-client/usr/bin/mysql /usr/bin/

    echo "MySQLクライアントのインストールが完了しました。"
else
    echo "MySQLクライアントは既にインストールされています。インストールをスキップします。"
fi
```

</div>

</Tabs>

その後、appコンテナを再起動します。

```bash
docker compose restart app
# ログを確認
docker compose logs app
```

データベースクライアントのバージョン番号を確認し、データベースサーバーのバージョン番号と一致することを確認します。

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

### プラグインのインストール

[商用プラグインのインストールとアップグレード](/welcome/getting-started/plugin)を参照してください。

