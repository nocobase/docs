# Git ソースコードのインストール

## 0. 前提条件

以下のことを確認してください：

- Git、Node.js 20+、Yarn 1.22.x がインストールされていること
- 必要なデータベース（MySQL 8.x、MariaDB 10.9+、PostgreSQL 10+ のいずれか）が設定され、起動されていること

## 1. NocoBase をローカルにダウンロードする

### 最新版 (`main`)

安定しており、テストが十分に行われたバージョンで、バグ修正のみが行われます。このバージョンを推奨します。

```bash
git clone https://github.com/nocobase/nocobase.git -b main --depth=1 my-nocobase
```

### ベータ版 (`next`)

リリース予定の新機能を含む、初期テストが行われたバージョンで、既知または未知の問題が存在する可能性があります。

```bash
git clone https://github.com/nocobase/nocobase.git -b next --depth=1 my-nocobase
```

### アルファ版 (`develop`)

最新の機能を含む開発版で、未完成または不安定な可能性があります。

```bash
git clone https://github.com/nocobase/nocobase.git -b develop --depth=1 my-nocobase
```

## 2. ディレクトリを切り替える

```bash
cd my-nocobase
```

## 3. 依存関係をインストール

```bash
yarn install --frozen-lockfile
```

## 4. 環境変数を設定

NocoBase に必要な環境変数はルートディレクトリの `.env` ファイルに保存されています。実際の状況に応じて環境変数を変更してください。変更方法がわからない場合は、[こちらをクリックして環境変数の説明を確認](../env.md)するか、デフォルトのままにしておくこともできます。

```bash
TZ=Asia/Tokyo
APP_KEY=your-secret-key
DB_HOST=localhost
DB_PORT=5432
DB_DATABASE=postgres
DB_USER=nocobase
DB_PASSWORD=nocobase
NOCOBASE_PKG_USERNAME=your-username
NOCOBASE_PKG_PASSWORD=your-password
```

:::warning

- **v1.4 以上のバージョン**では、環境変数 [`NOCOBASE_PKG_USERNAME`](/welcome/getting-started/env#nocobase_pkg_username) と [`NOCOBASE_PKG_PASSWORD`](/welcome/getting-started/env#nocobase_pkg_password) を設定することで、アプリケーションのインストールやアップグレード時に商用プラグインを自動的にダウンロードできます；
- `TZ` はアプリケーションのタイムゾーンを設定するために使用され、デフォルトはオペレーティングシステムのタイムゾーンです；
- `APP_KEY` はアプリケーションの秘密鍵で、ユーザートークンなどを生成するために使用されます（APP_KEY を変更すると、古いトークンも無効になります）。任意のランダムな文字列に変更してください。自分の秘密鍵に変更し、外部に漏れないようにしてください；
- `DB_*` はデータベースに関連しており、例のデフォルトのデータベースサービスでない場合は、実際の状況に応じて変更してください。
  :::

## 5. NocoBase をインストール

```bash
yarn nocobase install --lang=ja-JP
```

## 6. NocoBase を起動

開発環境

```bash
yarn dev
```

本番環境

```bash
# ビルド（`yarn install --frozen-lockfile` を実行したことを確認してください）
yarn build
# 起動
yarn start
```

## 7. NocoBase にログイン

ブラウザで [http://localhost:13000](http://localhost:13000) を開きます。初期アカウントとパスワードは `admin@nocobase.com` と `admin123` です。
