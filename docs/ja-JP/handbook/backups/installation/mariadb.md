# MariaDB データベースクライアントのインストール

## Docker インストール

### NocoBase Dockerfile があるディレクトリに移動し、Dockerfile を新規作成します

```Dockerfile
# next バージョンをベースにします
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

# インストールスクリプトを実行し、最新の MySQL クライアントバージョンを選択します
RUN apt-get update && apt-get install -y wget && \
  wget https://downloads.mysql.com/archives/get/p/23/file/mysql-community-client-core_8.1.0-1debian11_amd64.deb && \
  dpkg -x mysql-community-client-core_8.1.0-1debian11_amd64.deb /tmp/mysql-client && \
  cp /tmp/mysql-client/usr/bin/mysqldump /usr/bin/ && \
  cp /tmp/mysql-client/usr/bin/mysql /usr/bin/
```

### NocoBase の docker-compose.yml ファイルを修正します

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
      - mariadb
    environment:
      # アプリケーションのキー、ユーザートークン生成に使用します
      # APP_KEY が変更されると、古いトークンは無効になります
      # 任意のランダム文字列を使用し、外部に漏れないようにしてください
      - APP_KEY=your-secret-key
      # データベースの種類（postgres、mysql、mariadb、sqlite）を指定します
      - DB_DIALECT=mariadb
      # データベースホスト、既存のデータベースサーバーのIPに置き換え可能です
      - DB_HOST=mariadb
      # データベース名を指定します
      - DB_DATABASE=nocobase
      # データベースユーザーを指定します
      - DB_USER=root
      # データベースパスワードを指定します
      - DB_PASSWORD=nocobase
      # データベースのテーブル名やフィールド名をスネークケーススタイルにするかどうか
      - DB_UNDERSCORED=true
      # タイムゾーンを指定します
      - TZ=Asia/Shanghai
    volumes:
      - ./storage:/app/nocobase/storage
    ports:
      - "13000:80"
    # init: true

  # 既存のデータベースサービスを使用する場合、MariaDBを起動する必要はありません
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

### アップグレード

以前は毎回更新時に新しいイメージをプルしていましたが、今後は毎回新しいイメージをビルドする必要があります。

```diff
# 最新のイメージをプルする
- docker-compose pull app
# app コンテナを更新する
+ docker-compose build app --pull
# 起動
docker-compose up -d app
# app プロセスの状況を確認する
docker-compose logs app
```

## その他のインストール方法

もしあなたの NocoBase が [create-nocobase-app を使用してインストール](/welcome/getting-started/installation/create-nocobase-app) または [Git ソースコードからインストール](/welcome/getting-started/installation/git-clone)された場合は、MySQL の公式リリースページにアクセスしてインストールしてください。
- 最新版： https://dev.mysql.com/downloads/mysql/

