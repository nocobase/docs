# Docker のインストール

## 0. 前提条件

⚡⚡ Docker が [インストールされていること](https://docs.docker.com/get-docker/) を確認してください。

## 1. 新しい `docker-compose.yml` ファイルの作成

```bash
# NocoBase が生成したシステムファイルを保存するために、my-project（または他の名前）という名前のフォルダーを作成します
mkdir my-project && cd my-project

# 空の docker-compose.yml ファイルを作成します
vi docker-compose.yml
```

## 2. `docker-compose.yml` の設定

データベースによって設定パラメーターは若干異なります。適切なデータベースの設定を選択し、`docker-compose.yml` にコピーします。

<Tabs>

<div label="PostgreSQL" name="postgres">

```yml
version: '3'

networks:
  nocobase:
    driver: bridge

services:
  app:
    image: nocobase/nocobase:latest-full
    restart: always
    networks:
      - nocobase
    depends_on:
      - postgres
    environment:
      # アプリケーションのシークレットキー、ユーザートークンなどを生成するのに使用します
      # APP_KEY が変更されると、古いトークンも無効になります
      # 任意のランダム文字列にし、外部に漏らさないようにしてください
      - APP_KEY=your-secret-key
      # データベースタイプ、postgres、mysql、mariadb に対応
      - DB_DIALECT=postgres
      # データベースホスト、既存のデータベースサーバーの IP に置き換えることができます
      - DB_HOST=postgres
      # Database port
      - DB_PORT=5432
      # データベース名
      - DB_DATABASE=nocobase
      # データベースユーザー
      - DB_USER=nocobase
      # データベースパスワード
      - DB_PASSWORD=nocobase
      # タイムゾーン
      - TZ=Asia/Tokyo

    volumes:
      - ./storage:/app/nocobase/storage
    ports:
      - '13000:80'
    # init: true

  # 既存のデータベースサービスを使用する場合、postgres を起動する必要はありません
  postgres:
    image: postgres:16
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
    image: nocobase/nocobase:latest-full
    restart: always
    networks:
      - nocobase
    depends_on:
      - mysql
    environment:
      # アプリケーションのシークレットキー、ユーザートークンなどを生成するのに使用します
      # APP_KEY が変更されると、古いトークンも無効になります
      # 任意のランダム文字列にし、外部に漏らさないようにしてください
      - APP_KEY=your-secret-key
      # データベースタイプ、postgres、mysql、mariadb に対応
      - DB_DIALECT=mysql
      # データベースホスト、既存のデータベースサーバーの IP に置き換えることができます
      - DB_HOST=mysql
      # Database port
      - DB_PORT=3306
      # データベース名
      - DB_DATABASE=nocobase
      # データベースユーザー
      - DB_USER=root
      # データベースパスワード
      - DB_PASSWORD=nocobase
      # データベーステーブル名、フィールド名をスネークケーススタイルに変換するかどうか
      - DB_UNDERSCORED=true
      # タイムゾーン
      - TZ=Asia/Tokyo

    volumes:
      - ./storage:/app/nocobase/storage
    ports:
      - '13000:80'
    # init: true

  # 既存のデータベースサービスを使用する場合、mysql を起動する必要はありません
  mysql:
    image: mysql:8
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
    image: nocobase/nocobase:latest-full
    restart: always
    networks:
      - nocobase
    depends_on:
      - mariadb
    environment:
      # アプリケーションのシークレットキー、ユーザートークンなどを生成するのに使用します
      # APP_KEY が変更されると、古いトークンも無効になります
      # 任意のランダム文字列にし、外部に漏らさないようにしてください
      - APP_KEY=your-secret-key
      # データベースタイプ、postgres、mysql、mariadb に対応
      - DB_DIALECT=mariadb
      # データベースホスト、既存のデータベースサーバーの IP に置き換えることができます
      - DB_HOST=mariadb
      # Database port
      - DB_PORT=3306
      # データベース名
      - DB_DATABASE=nocobase
      # データベースユーザー
      - DB_USER=root
      # データベースパスワード
      - DB_PASSWORD=nocobase
      # データベーステーブル名、フィールド名をスネークケーススタイルに変換するかどうか
      - DB_UNDERSCORED=true
      # タイムゾーン
      - TZ=Asia/Tokyo

    volumes:
      - ./storage:/app/nocobase/storage
    ports:
      - '13000:80'
    # init: true

  # 既存のデータベースサービスを使用する場合、mariadb を起動する必要はありません
  mariadb:
    image: mariadb:11
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

適切な NocoBase バージョンを選択してください。詳細は [バージョン選択](./index.md#インストールするバージョン) を参照してください。

- `latest`: 機能が安定しており、テストも十分に行われたバージョンで、欠陥修正のみが行われます。このバージョンが推奨されます。
- `beta`: 新機能が含まれており、初期テストが行われたバージョンですが、既知または未知の問題が存在する可能性があります。
- `alpha`: 開発中のバージョンで、最新の機能コードが含まれており、未完成または不安定な場合があります。主に内部開発や迅速なイテレーションに使用されます。
- `1.3.51`: バージョン番号を指定します。最新バージョンの確認は [リリースバージョン一覧](https://hub.docker.com/r/nocobase/nocobase/tags) を参照してください。


例:

```yml
# ...
services:
  app:
    # Docker Hub (推奨 full バージョン)
    image: nocobase/nocobase:latest-full
    image: nocobase/nocobase:beta-full
    image: nocobase/nocobase:alpha-full
    image: nocobase/nocobase:1.3.51-full

    # スリムバージョン（特定のクライアントとLibreOfficeを含まない）
    image: nocobase/nocobase:latest
    image: nocobase/nocobase:beta
    image: nocobase/nocobase:alpha
    image: nocobase/nocobase:1.3.51
# ...
```

## 3. NocoBase のインストールと起動

インストールには数分かかる場合があります。

```bash
# 最新のイメージを取得
$ docker-compose pull
# バックグラウンドで実行
$ docker-compose up -d
# app プロセスの状態を確認
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
app-postgres-app-1  | 🚀 NocoBase サーバーが次のアドレスで稼働中: http://localhost:13000/
```

## 4. NocoBase にログイン

ウェブブラウザで [http://localhost:13000](http://localhost:13000) を開きます。初期アカウントとパスワードは `admin@nocobase.com` と `admin123` です。
