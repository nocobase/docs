# MySQL データベースクライアントのインストール

## Docker のインストール

### NocoBase Dockerfile のあるディレクトリに移動し、Dockerfile を新規作成

```Dockerfile
# next バージョンをベースにする
FROM registry.cn-shanghai.aliyuncs.com/nocobase/nocobase:next

# 国内ユーザーは sources.list を更新する必要があります
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

# インストールスクリプトを実行します。実際の状況に応じて、対応する MySQL バージョンのリンクに置き換えてください。
RUN apt-get update && apt-get install -y wget && \
 wget https://downloads.mysql.com/archives/get/p/23/file/mysql-community-client-core_8.1.0-1debian11_amd64.deb && \
 dpkg -x mysql-community-client-core_8.1.0-1debian11_amd64.deb /tmp/mysql-client && \
 cp /tmp/mysql-client/usr/bin/mysqldump /usr/bin/ && \
 cp /tmp/mysql-client/usr/bin/mysql /usr/bin/
```

### NocoBase の docker-compose.yml ファイルを修正します。

```diff
version: "3"
networks:
  nocobase:
    driver: bridge
services:
  app:
    build:
      dockerfile: Dockerfile
    networks:
      - nocobase
    depends_on:
      - postgres
    environment:
      # アプリケーションのキー。ユーザートークンなどを生成するために使用します。
      # APP_KEYが変更されると、古いトークンも無効になります。
      # 任意のランダムな文字列に設定し、外部に漏れないようにしてください。
      - APP_KEY=your-secret-key
      # データベースの種類。postgres、mysql、mariadb、sqliteをサポートしています。
      - DB_DIALECT=postgres
      # データベースホスト。既存のデータベースサーバーのIPに置き換えてください。
      - DB_HOST=postgres
      # データベース名
      - DB_DATABASE=nocobase
      # データベースユーザー
      - DB_USER=nocobase
      # データベースパスワード
      - DB_PASSWORD=nocobase
      # タイムゾーン
      - TZ=Asia/Shanghai
    volumes:
      - ./storage:/app/nocobase/storage
    ports:
      - "13000:80"
    # init: true
  # 既存のデータベースサービスを使用する場合、postgresは起動する必要はありません。
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

### アップグレード

以前は毎回更新のたびに新しいイメージをプルしていましたが、変更後は毎回新しいイメージをビルドする必要があります。

```diff
# 最新のイメージをプル
- docker-compose pull app
# appコンテナを更新
+ docker-compose build app --pull
# 起動
docker-compose up -d app
# appプロセスの状況を確認
docker-compose logs app
```

## その他のインストール方法

もしあなたのNocoBaseが[create-nocobase-appでインストール](/welcome/getting-started/installation/create-nocobase-app)されたり、[Gitソースコードでインストール](/welcome/getting-started/installation/git-clone)された場合は、MySQLの公式リリースページにアクセスし、該当するMySQLバージョンを選択し、MySQLの公式ドキュメントに従ってインストールしてください。
- 過去のバージョン: https://downloads.mysql.com/archives/community/
- 最新のバージョン: https://dev.mysql.com/downloads/mysql/

