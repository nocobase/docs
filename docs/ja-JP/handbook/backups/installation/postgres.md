# Postgres データベースクライアントのインストール

## Docker のインストール

### NocoBase Dockerfile があるディレクトリに移動し、Dockerfile を新規作成

```Dockerfile
# next バージョンに基づく
FROM registry.cn-shanghai.aliyuncs.com/nocobase/nocobase:next

# 実際の状況に応じて適切なバージョンを選択してください。ここでは 16 バージョンを例として使用します
ARG PG_VERSION=16

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

# インストールスクリプトの実行
RUN apt update && apt install -y postgresql-common gnupg \
  && /usr/share/postgresql-common/pgdg/apt.postgresql.org.sh -y \
  && apt install -y postgresql-client-${PG_VERSION}
```

### NocoBase の docker-compose.yml ファイルの変更

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
      # アプリケーションのキー、ユーザートークンなどを生成するために使用されます。
      # APP_KEY が変更されると、古いトークンは無効になります。
      # 任意のランダムな文字列に設定し、外部に漏れないようにしてください。
      - APP_KEY=your-secret-key
      # データベースの種類。postgres、mysql、mariadb がサポートされています。
      - DB_DIALECT=postgres
      # データベースホスト。既存のデータベースサーバーの IP に置き換えることができます。
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
  # 既存のデータベースサービスを使用する場合は、postgresを起動する必要はありません。
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

以前は毎回更新時に新しいイメージをプルしていましたが、変更後は毎回新しいイメージをビルドする必要があります。

```diff
# 最新のイメージをプル
- docker-compose pull app
# app コンテナを更新
+ docker-compose build app --pull
# 起動
docker-compose up -d app
# app プロセスの状況を確認
docker-compose logs app
```

## その他のインストール方法

もしあなたの NocoBase が [create-nocobase-app インストール](/welcome/getting-started/installation/create-nocobase-app) または [Git ソースコードインストール](/welcome/getting-started/installation/git-clone) を使用している場合は、https://www.postgresql.org/download/ にアクセスし、対応する PostgreSQL バージョンを選択し、公式ドキュメントに従ってインストールしてください。

