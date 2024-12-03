# Dockerのインストールのアップグレード

## 0. アップグレード前の準備

:::warning
- アップグレード前に必ずデータベースをバックアップしてください！！！
- **バージョン1.4以上**: 環境変数 [`NOCOBASE_PKG_USERNAME`](/welcome/getting-started/env#nocobase_pkg_username) と [`NOCOBASE_PKG_PASSWORD`](/welcome/getting-started/env#nocobase_pkg_password) を設定することで、アプリケーションのインストールまたはアップグレード時に商用プラグインを自動的にダウンロードできます。
:::

## 1. `docker-compose.yml` があるディレクトリに移動する

例えば：

```bash
# MacOS, Linux...
cd /your/path/my-project/
# Windows
cd C:\your\path\my-project
```

## 2. イメージのバージョン番号を更新

- `latest`: 機能が安定しており、テストが比較的完璧なバージョンで、バグ修正のみを行います。このバージョンのインストールを推奨します。
- `beta`: 発表予定の新機能を含む、初期テストが行われたバージョンで、既知または未知の問題が存在する可能性があります。
- `alpha`: 開発中のバージョンで、最新の機能コードを含み、未完成または不安定な要素が多い可能性があり、主に内部開発と迅速な反復に使用されます。
- `1.3.51`: 指定されたバージョン番号、最新バージョンは [リリースバージョンリスト](https://hub.docker.com/r/nocobase/nocobase/tags) を参照してください。

```yml
# ...
services:
  app:
    image: nocobase/nocobase:main
    image: nocobase/nocobase:latest
    image: nocobase/nocobase:1.2.4-alpha
# ...
```

## 3. コンテナを再起動

```bash
# 最新のイメージを取得
docker-compose pull
# 起動
docker-compose up -d app
# app プロセスの状況を確認
docker-compose logs app
```

## 4. 独立プラグインのアップグレード

NocoBaseがアップグレードされた後、インターフェイスを通してインストールされた独立プラグインもアップグレードする必要があります。詳細については、ドキュメントの[独立プラグインのインストールとアップグレード](/welcome/getting-started/plugin)を参照してください。

