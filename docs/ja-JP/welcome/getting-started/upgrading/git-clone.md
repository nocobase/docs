# Git ソースコードのアップグレード

## 0. アップグレード前の準備

:::warning
- アップグレード前に必ずデータベースのバックアップを取ってください！！！
:::

## 1. NocoBaseプロジェクトディレクトリに切り替える

```bash
cd my-nocobase-app
```

## 2. 最新のコードを取得する

```bash
git pull
```

## 3. キャッシュと旧依存関係を削除する（必須ではありません）

通常のアップグレードプロセスが失敗した場合は、キャッシュと依存関係をクリアして再ダウンロードを試みてください。

```bash
# NocoBaseキャッシュを削除
yarn nocobase clean
# 依存関係を削除
yarn rimraf -rf node_modules
```

## 4. 依存関係を更新する

```bash
yarn install
```

## 5. アップデートコマンドを実行する

```bash
yarn nocobase upgrade
```

## 6. NocoBaseを起動する

開発環境

```bash
yarn dev
```

本番環境

```bash
# コンパイル
yarn build

# 起動
yarn start
```

## 7. 独立プラグインのアップグレード

NocoBaseがアップグレードされた後、インターフェイスを通してインストールされた独立プラグインもアップグレードする必要があります。詳細については、ドキュメントの[独立プラグインのインストールとアップグレード](/welcome/getting-started/plugin)を参照してください。

