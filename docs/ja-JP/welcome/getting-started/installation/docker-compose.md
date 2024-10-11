# Docker インストール

## 0. 前提条件

⚡⚡ すでに [Docker](https://docs.docker.com/get-docker/) がインストールされていることを確認してください。

## 1. 新しい `docker-compose.yml` の作成

```bash
# NocoBase によって生成されたシステムファイルを保存するための my-project（他の名前でもいい）という名前のフォルダを作成する。
mkdir my-project && cd my-project

# 空の docker-compose.yml ファイルを作成する。
touch docker-compose.yml
```

## 2. `docker-compose.yml` の設定

データベースによって構成パラメータが異なるため、適切なデータベース設定を選択し、`docker-compose.yml` にコピーしてください。

<Tabs>

<div label="PostgreSQL" name="postgres">

```yml
version: "3"

networks:
  nocobase:
    driver: bridge

services:
  app:
    image: registry.cn-shanghai.aliyuncs.com/nocobase/nocobase:latest
    networks:
      - nocobase
    depends_on:
      - postgres
    environment:
      # アプリケーションの秘密キー。ユーザーのトークン生成などに使用されます。
      # APP_KEYを変更すると、元のトークンが無効になります。
      # 任意のランダムな文字列を使用し、外部に漏れないようにしてください。
      - APP_KEY=your-secret-key
      # データベースの種類。postgres、mysql、mariadb、sqliteをサポートしています。
      - DB_DIALECT=postgres
      # データベースホスト。既存のデータベースサーバーのIPに置き換え可能です。
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

  # 既存のデータベースサービスを使用する場合、Postgresを起動しなくても構いません。
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
version: "3"

networks:
  nocobase:
    driver: bridge

services:
  app:
    image: registry.cn-shanghai.aliyuncs.com/nocobase/nocobase:latest
    networks:
      - nocobase
    depends_on:
      - mysql
    environment:
      # アプリケーションの秘密キー。ユーザーのトークン生成などに使用されます。
      # APP_KEYを変更すると、元のトークンが無効になります。
      # 任意のランダムな文字列を使用し、外部に漏れないようにしてください。
      - APP_KEY=your-secret-key
      # データベースの種類。postgres、mysql、mariadb、sqliteをサポートしています。
      - DB_DIALECT=mysql
      # データベースホスト。既存のデータベースサーバーのIPに置き換え可能です。
      - DB_HOST=mysql
      # データベース名
      - DB_DATABASE=nocobase
      # データベースユーザー
      - DB_USER=root
      # データベースパスワード
      - DB_PASSWORD=nocobase
      # データベースのテーブル名およびフィールド名をスネークケースにするかどうか。
      - DB_UNDERSCORED=true
      # タイムゾーン
      - TZ=Asia/Shanghai
    volumes:
      - ./storage:/app/nocobase/storage
    ports:
      - "13000:80"
    # init: true

  # 既存のデータベースサービスを使用する場合、MySQLを起動する必要はありません。
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
version: "3"

networks:
  nocobase:
    driver: bridge

services:
  app:
    image: registry.cn-shanghai.aliyuncs.com/nocobase/nocobase:latest
    networks:
      - nocobase
    depends_on:
      - mariadb
    environment:
      # アプリケーションの秘密キー。ユーザーのトークン生成などに使用されます。
      # APP_KEYを変更すると、元のトークンが無効になります。
      # 任意のランダムな文字列を使用し、外部に漏れないようにしてください。
      - APP_KEY=your-secret-key
      # データベースの種類。postgres、mysql、mariadb、sqliteをサポートしています。
      - DB_DIALECT=mariadb
      # データベースホスト。既存のデータベースサーバーのIPに置き換え可能です。
      - DB_HOST=mariadb
      # データベース名
      - DB_DATABASE=nocobase
      # データベースユーザー
      - DB_USER=root
      # データベースパスワード
      - DB_PASSWORD=nocobase
      # データベースのテーブル名およびフィールド名をスネークケースにするかどうか。
      - DB_UNDERSCORED=true
      # タイムゾーン
      - TZ=Asia/Shanghai
    volumes:
      - ./storage:/app/nocobase/storage
    ports:
      - "13000:80"
    # init: true

  # 既存のデータベースサービスを使用する場合、MariaDBを起動する必要はありません。
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

適切な NocoBase のバージョンを選択してください。

- `latest` または `main`：現時点で最も安定したバージョンであり、このバージョンのインストールをお勧めします。
- `next`：内部テスト版では、新機能が含まれています。このバージョンは完全には安定していない可能性があり、開発者やテスター向けに新機能を早期に体験したり、互換性テストを行うために使用されます。
- `1.2.4-alpha`：指定されたバージョン番号。最新のバージョンは[リリースバージョン一覧](https://hub.docker.com/r/nocobase/nocobase/tags)でご確認ください。

例

```yml
# ...
services:
  app:
    # 国内ユーザーは阿里云のイメージを使用することをお勧めします
    image: registry.cn-shanghai.aliyuncs.com/nocobase/nocobase:latest
    image: registry.cn-shanghai.aliyuncs.com/nocobase/nocobase:next
    image: registry.cn-shanghai.aliyuncs.com/nocobase/nocobase:1.2.4-alpha

    # Docker Hub イメージ（国内ユーザーはダウンロードできません）
    image: nocobase/nocobase:latest
    image: nocobase/nocobase:next
    image: nocobase/nocobase:1.2.4-alpha
# ...
```

## 3. NocoBase のインストールと起動

インストールのプロセスには数分かかります。

```bash
# 最新のイメージを取得する
$ docker-compose pull
# バックグラウンドで実行する
$ docker-compose up -d
# app プロセスの状況を確認する
$ docker-compose logs app
```

## 4. NocoBase のログイン

ブラウザで http://localhost:13000/ を開いてください。初期のアカウントは `admin@nocobase.com`、パスワードは `admin123` です。

