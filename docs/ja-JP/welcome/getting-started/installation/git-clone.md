# Git ソースコードのインストール

## 0. 前提条件

以下の項目を確認してください：

- Git、Node.js 18+、Yarn 1.22.x がインストールされていること
- 必要なデータベース（MySQL 8.0.17+、MariaDB 10.9+、PostgreSQL 10+）のいずれかが設定され、起動していること

## 1. NocoBase をローカルにダウンロード

### 最新バージョン

現時点で最も安定したバージョンであり、このバージョンのダウンロードを推奨します。

```bash
git clone https://github.com/nocobase/nocobase.git -b main --depth=1 my-nocobase
```

### 次期バージョン

内部テスト版で、いくつかの未公開の新機能が含まれています。このバージョンは完全に安定していない可能性があり、開発者やテスター向けに新機能を早期に体験したり、互換性テストを行ったりするために適しています。

```bash
git clone https://github.com/nocobase/nocobase.git -b next --depth=1 my-nocobase
```

## 2. ディレクトリの切り替え

```bash
cd my-nocobase
```

## 3. 依存関係のインストール

国内のネットワーク環境の影響により、国内ミラーに切り替えることを強く推奨します。

```bash
$ yarn config set disable-self-update-check true
$ yarn config set registry https://registry.npmmirror.com/
$ yarn config set sqlite3_binary_host_mirror https://npmmirror.com/mirrors/sqlite3/
```

📢 ネットワーク環境やシステム設定などの要因により、次のステップには十数分かかる場合があります。

```bash
yarn install --frozen-lockfile
```

## 4. 環境変数の設定

NocoBase に必要な環境変数は、ルートディレクトリの `.env` ファイルに保存されています。実際の状況に応じて環境変数を変更してください。変更方法がわからない場合は、[こちらをクリックして環境変数の説明を確認](../env.md)するか、デフォルトのままにしておいても構いません。

```bash
TZ=Asia/Shanghai
APP_KEY=your-secret-key
DB_HOST=localhost
DB_PORT=5432
DB_DATABASE=postgres
DB_USER=nocobase
DB_PASSWORD=nocobase
```

:::warning
- `TZ` はアプリケーションのタイムゾーンを設定するために使用され、デフォルトではオペレーティングシステムのタイムゾーンが適用されます。
- `APP_KEY` はアプリケーションの秘密鍵で、ユーザートークンの生成などに使用されます（`APP_KEY` を変更すると古いトークンは無効になります）。任意のランダムな文字列に設定できるため、必ず自分の秘密鍵に変更し、外部に漏れないようにしてください。
- `DB_*` はデータベース関連の設定であり、デフォルトのデータベースサービスを使用しない場合は、実際の状況に応じて適宜変更してください。
:::

## 5. NocoBase のインストール

```bash
yarn nocobase install --lang=zh-CN
```

## 6. NocoBase の起動

### 開発環境

```bash
yarn dev
```

### 本番環境

```bash
# コンパイル（`yarn install --frozen-lockfile` を実行済みであることを確認してください）
yarn build
# 起動
yarn start
```

## 7. NocoBase にログイン

ブラウザを使用して [http://localhost:13000](http://localhost:13000) を開き、初期アカウントとパスワードは `admin@nocobase.com` および `admin123` です。

