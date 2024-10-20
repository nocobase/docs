# Dockerインストールのアップグレード

## 0. アップグレード前の準備

:::warning
アップグレード前に必ずデータベースのバックアップを取ってください！！！
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

- `latest` または `main`：現在最も安定しているバージョンで、こちらのインストールをお勧めします。
- `next`：内部テスト版で、未公開の新機能が含まれています。このバージョンは完全に安定していない可能性があり、開発者やテスター向けに新機能を体験したり、互換性テストを行ったりするために使用されます。
- `1.2.4-alpha`：特定のバージョンにアップグレードします。最新のバージョン情報は[公開バージョンリスト](https://hub.docker.com/r/nocobase/nocobase/tags)を参照してください。

:::warning
イメージはアップグレードのみ可能で、ダウングレードができません。`next` を `latest` にダウングレードすることはできません。
:::

```yml
# ...
services:
  app:
    # アリババクラウドのメインバージョン（AMD64アーキテクチャのみサポート）
    image: registry.cn-shanghai.aliyuncs.com/nocobase/nocobase:main
    # アリババクラウドのlatestバージョン
    image: registry.cn-shanghai.aliyuncs.com/nocobase/nocobase:latest
    # アリババクラウドの指定バージョン
    image: registry.cn-shanghai.aliyuncs.com/nocobase/nocobase:1.2.4-alpha
    # Docker Hubのイメージ、ダウンロードできない可能性があります
    image: nocobase/nocobase:main
    image: nocobase/nocobase:latest
    image: nocobase/nocobase:1.2.4-alpha
# ...
```

## 3. コンテナを再起動する

```bash
# 最新のイメージを取得します
docker-compose pull
# アプリケーションを起動します
docker-compose up -d app
# app プロセスの状況を確認します
docker-compose logs app
```

## 4. 独立プラグインのアップグレード

NocoBaseがアップグレードされた後、インターフェイスを通してインストールされた独立プラグインもアップグレードする必要があります。詳細については、ドキュメントの[独立プラグインのインストールとアップグレード](/welcome/getting-started/plugin)を参照してください。

