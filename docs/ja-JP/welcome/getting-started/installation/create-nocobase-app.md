# `create-nocobase-app` のインストール

## 0. 前提条件

以下がインストールされていることを確認してください：

- Node.js 20+、Yarn 1.22.x がインストールされている
- 必要なデータベース（MySQL 8.x、MariaDB 10.9+、PostgreSQL 10+ のいずれか）が設定され、起動されている

Node.js がインストールされていない場合は、公式サイトから最新の LTS バージョンをダウンロードしてインストールしてください。長期的に Node.js を使用する予定がある場合は、nvm（Windows システムでは nvm-windows）を利用して Node.js のバージョンを管理することをお勧めします。

```bash
$ node -v

v20.10.0
```

Yarn パッケージマネージャの使用をお勧めします。

```bash
$ npm install --global yarn
$ yarn -v

1.22.21
```

## 1. NocoBase プロジェクトを作成

### 最新版

安定した機能でテストが比較的完璧なバージョンで、バグ修正のみが行われます。このバージョンをインストールすることをお勧めします。

<Tabs>
<div label="PostgreSQL" name="postgres">

```bash
yarn create nocobase-app my-nocobase-app -d postgres \
   -e DB_HOST=localhost \
   -e DB_PORT=5432 \
   -e DB_DATABASE=nocobase \
   -e DB_USER=nocobase \
   -e DB_PASSWORD=nocobase \
   -e TZ=Asia/Tokyo
```

</div>

<div label="MySQL" name="mysql">

```bash
yarn create nocobase-app my-nocobase-app -d mysql \
   -e DB_HOST=localhost \
   -e DB_PORT=3306 \
   -e DB_DATABASE=nocobase \
   -e DB_USER=nocobase \
   -e DB_PASSWORD=nocobase \
   -e TZ=Asia/Tokyo
```

</div>

<div label="MariaDB" name="mariadb">

```bash
yarn create nocobase-app my-nocobase-app -d mariadb \
   -e DB_HOST=localhost \
   -e DB_PORT=3306 \
   -e DB_DATABASE=nocobase \
   -e DB_USER=nocobase \
   -e DB_PASSWORD=nocobase \
   -e TZ=Asia/Tokyo
```

</div>
</Tabs>

### ベータ版

リリース予定の新機能が含まれ、初期テストが行われたバージョンですが、既知または未知の問題が存在する可能性があります。

<Tabs>
<div label="PostgreSQL" name="postgres">

```bash
npx create-nocobase-app@beta my-nocobase-app -d postgres \
   -e DB_HOST=localhost \
   -e DB_PORT=5432 \
   -e DB_DATABASE=nocobase \
   -e DB_USER=nocobase \
   -e DB_PASSWORD=nocobase \
   -e TZ=Asia/Tokyo
```

</div>

<div label="MySQL" name="mysql">

```bash
npx create-nocobase-app@beta my-nocobase-app -d mysql \
   -e DB_HOST=localhost \
   -e DB_PORT=3306 \
   -e DB_DATABASE=nocobase \
   -e DB_USER=nocobase \
   -e DB_PASSWORD=nocobase \
   -e TZ=Asia/Tokyo
```

</div>

<div label="MariaDB" name="mariadb">

```bash
npx create-nocobase-app@beta my-nocobase-app -d mariadb \
   -e DB_HOST=localhost \
   -e DB_PORT=3306 \
   -e DB_DATABASE=nocobase \
   -e DB_USER=nocobase \
   -e DB_PASSWORD=nocobase \
   -e TZ=Asia/Tokyo
```

</div>
</Tabs>

### アルファ版

最新の機能コードが含まれる開発版で、未完成または不安定な場合があります。

<Tabs>
<div label="PostgreSQL" name="postgres">

```bash
npx create-nocobase-app@alpha my-nocobase-app -d postgres \
   -e DB_HOST=localhost \
   -e DB_PORT=5432 \
   -e DB_DATABASE=nocobase \
   -e DB_USER=nocobase \
   -e DB_PASSWORD=nocobase \
   -e TZ=Asia/Tokyo
```

</div>

<div label="MySQL" name="mysql">

```bash
npx create-nocobase-app@alpha my-nocobase-app -d mysql \
   -e DB_HOST=localhost \
   -e DB_PORT=3306 \
   -e DB_DATABASE=nocobase \
   -e DB_USER=nocobase \
   -e DB_PASSWORD=nocobase \
   -e TZ=Asia/Tokyo
```

</div>

<div label="MariaDB" name="mariadb">

```bash
npx create-nocobase-app@alpha my-nocobase-app -d mariadb \
   -e DB_HOST=localhost \
   -e DB_PORT=3306 \
   -e DB_DATABASE=nocobase \
   -e DB_USER=nocobase \
   -e DB_PASSWORD=nocobase \
   -e TZ=Asia/Tokyo
```

</div>
</Tabs>

:::warning

- `TZ` はアプリケーションのタイムゾーンを設定するために使用され、デフォルトはシステムのタイムゾーンです；
- `APP_KEY` はアプリケーションのシークレットキーで、ユーザートークン生成などに使用されます（`APP_KEY` が変更されると、古いトークンも無効になります）。任意のランダムな文字列にすることができます。自身の秘密鍵に変更し、外部に漏れないようにしてください；
- `DB_*` はデータベースに関連します。例のデフォルトのデータベースサービスでない場合は、実際の状況に合わせて変更してください。
  :::

## 2. プロジェクトディレクトリに移動

```bash
cd my-nocobase-app
```

## 3. 依存関係をインストール

📢 この次のステップは、ネットワーク環境やシステム構成により、十数分かかる場合があります。

```bash
yarn install
```

## 4. NocoBase をインストール

```bash
yarn nocobase install --lang=ja-JP
```

## 5. NocoBase を起動

開発環境

```bash
yarn dev
```

本番環境

```bash
yarn start
```

注：本番環境では、コードが変更された場合、`yarn build` を実行し、NocoBase を再起動する必要があります。

## 6. NocoBase にログイン

ブラウザで [http://localhost:13000](http://localhost:13000) を開きます。初期アカウントとパスワードは `admin@nocobase.com` と `admin123` です。
