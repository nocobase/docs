# `create-nocobase-app` インストールのアップグレード

## 0. アップグレード前の準備

:::warning
アップグレード前に必ずデータベースのバックアップを取ってください！！
:::

国内のネットワーク環境に配慮し、国内ミラーへの切り替えを強くお勧めします。

```bash
$ yarn config set disable-self-update-check true
$ yarn config set registry https://registry.npmmirror.com/
$ yarn config set sqlite3_binary_host_mirror https://npmmirror.com/mirrors/sqlite3/
```

## 1. アップグレード

`yarn nocobase upgrade` コマンドを直接実行すればいい。

```bash
# 対応するディレクトリに移動
cd my-nocobase-app
# アップデートコマンドを実行
yarn nocobase upgrade
# アプリケーションを起動
yarn dev
```

アップグレードに問題が発生した場合は、、[新しいアプリを再作成](/welcome/getting-started/installation/create-nocobase-app)し、元々のバージョンの .env を参照して環境変数を修正してください。。データベース情報は正しく設定する必要があります。SQLite データベースを使用する場合は、データベースファイルを `./storage/db/` ディレクトリにコピーしてください。最後に、yarn nocobase upgradeを実行してアップグレードしてください。

## 独立プラグインのアップグレード

NocoBase がアップグレードされると、インターフェイスを通してインストールされた独立プラグインもアップグレードする必要があります。詳細については、ドキュメント [独立プラグインのインストールとアップグレード](/welcome/getting-started/plugin) を参照してください。

