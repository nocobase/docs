# MySQLでFederatedエンジンを有効にする方法

MySQLデータベースはデフォルトでFederatedモジュールが有効になっていません。my.cnfの設定を変更する必要があります。Dockerバージョンを使用している場合、ボリュームを利用して設定を管理できます：

```yml
mysql:
  image: mysql:8.1.0
  volumes:
    - ./storage/mysql-conf:/etc/mysql/conf.d
  environment:
    MYSQL_DATABASE: nocobase
    MYSQL_USER: nocobase
    MYSQL_PASSWORD: nocobase
    MYSQL_ROOT_PASSWORD: nocobase
  restart: always
  networks:
    - nocobase
```

`./storage/mysql-conf/federated.cnf`ファイルを新規作成します。

```conf
[mysqld]
federated
```

MySQLを再起動します。

```bash
docker compose up -d mysql
```

Federatedが有効になっているか確認します。

```sql
SHOW ENGINES;
```

![Alt text](https://static-docs.nocobase.com/ac5d97cf902ad164e141633a41a23e46.png)

