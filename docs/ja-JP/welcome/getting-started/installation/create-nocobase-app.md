# `create-nocobase-app` のインストール

## 0. 前提条件

以下のことを確認してください：

- Node.js 18+、Yarn 1.22.x がインストールされていること
- 必要なデータベース（MySQL 8.0.17+、MariaDB 10.9+、PostgreSQL 10+ のいずれか）が構成され、起動していること

Node.js がインストールされていない場合は、公式サイトから最新の LTS バージョンをダウンロードしてインストールしてください。長期的に Node.js を使用する予定がある場合は、nvm（Windows システムでは nvm-windows）を利用して Node.js のバージョンを管理することをお勧めします。

```bash
$ node -v

v18.19.0
```

Yarn パッケージマネージャの使用をお勧めします。

```bash
$ npm install --global yarn
$ yarn -v

1.22.21
```

国内のネットワーク環境のため、国内のミラーサイトに変更することを強くお勧めします。

```bash
$ yarn config set disable-self-update-check true
$ yarn config set registry https://registry.npmmirror.com/
$ yarn config set sqlite3_binary_host_mirror https://npmmirror.com/mirrors/sqlite3/
```

## 1. NocoBase プロジェクトの作成

### latest バージョン

現在最も安定しているバージョンで、こちらのインストールをお勧めします。

<Tabs>
<div label="PostgreSQL" name="postgres">

```bash
yarn create nocobase-app my-nocobase-app -d postgres \
   -e DB_HOST=localhost \
   -e DB_PORT=5432 \
   -e DB_DATABASE=nocobase \
   -e DB_USER=nocobase \
   -e DB_PASSWORD=nocobase \
   -e TZ=Asia/Shanghai
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
   -e TZ=Asia/Shanghai
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
   -e TZ=Asia/Shanghai
```

</div>
</Tabs>

### next バージョン

内部テスト版でいくつかの未公開の新機能が含まれており、安定性が完全ではない可能性があります。開発者やテスター向けに、新機能を早期に体験したり、互換性テストを行ったりするために使用されます。

<Tabs>
<div label="PostgreSQL" name="postgres">

```bash
npx create-nocobase-app@next my-nocobase-app -d postgres \
   -e DB_HOST=localhost \
   -e DB_PORT=5432 \
   -e DB_DATABASE=nocobase \
   -e DB_USER=nocobase \
   -e DB_PASSWORD=nocobase \
   -e TZ=Asia/Shanghai
```

</div>

<div label="MySQL" name="mysql">

```bash
npx create-nocobase-app@next my-nocobase-app -d mysql \
   -e DB_HOST=localhost \
   -e DB_PORT=3306 \
   -e DB_DATABASE=nocobase \
   -e DB_USER=nocobase \
   -e DB_PASSWORD=nocobase \
   -e TZ=Asia/Shanghai
```

</div>

<div label="MariaDB" name="mariadb">

```bash
npx create-nocobase-app@next my-nocobase-app -d mariadb \
   -e DB_HOST=localhost \
   -e DB_PORT=3306 \
   -e DB_DATABASE=nocobase \
   -e DB_USER=nocobase \
   -e DB_PASSWORD=nocobase \
   -e TZ=Asia/Shanghai
```

</div>
</Tabs>

:::warning
- `TZ` はアプリのタイムゾーンを設定するために使用され、デフォルトではオペレーティングシステムのタイムゾーンが適用されます。
- `APP_KEY` はアプリのキーで、ユーザーのトークン生成などに使用されます（`APP_KEY` を変更すると、元のトークンも無効になります）。任意のランダムな文字列に設定できるため、必ず自分の秘密鍵に変更し、外部に漏れないようにしてください。
- `DB_*` はデータベース関連の設定です。例のデフォルトデータベースサービスでない場合は、実際の状況に応じて変更してください。
:::

## 2. ディレクトリを切り替える

```bash
cd my-nocobase-app
```

## 3. 依存関係をインストールする

📢 ネットワーク環境やシステム設定などの要因により、次のステップには十数分かかる場合があります。

```bash
yarn install
# 本番環境にデプロイする際は、サイズを削減するために必要な依存関係のみをインストールできます。
yarn install --production
```

## 4. NocoBaseをインストールする

```bash
yarn nocobase install --lang=zh-CN
```

## 5. NocoBaseを起動する

開発環境

```bash
yarn dev
```

本番環境

```bash
yarn start
```

注：本番環境では、コードに変更があった場合、`yarn build`を実行してからNocoBaseを再起動する必要があります。

## 6. NocoBase のログイン

ブラウザを使用して [http://localhost:13000](http://localhost:13000) を開き、初期アカウントとパスワードは `admin@nocobase.com` および `admin123` です。

