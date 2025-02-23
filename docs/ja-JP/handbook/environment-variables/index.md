# 変数と秘密

<PluginInfo name="environment-variables"></PluginInfo>

## 紹介

環境変数とシークレットを集中管理し、機密データの保存、設定データの再利用、環境設定の分離などに使用します。

## `.env` との違い

| **特性**                | **`.env` ファイル**                 | **動的設定の環境変数**                              |
|-----------------------|--------------------------------|-------------------------------------|
| **保存場所**             | プロジェクトルートの `.env` ファイル   | データベースの `environmentVariables` テーブルに保存 |
| **読み込み方式**             | `dotenv` などのツールを使用してアプリ起動時に `process.env` に読み込む  | 動的に読み取り、アプリ起動時に `app.environment` に読み込む  |
| **変更方式**             | ファイルを直接編集し、変更後はアプリを再起動する必要がある              | 実行中に変更可能、変更後はアプリ設定をリロードする     |
| **環境分離**             | 各環境（開発、テスト、本番）ごとに `.env` ファイルを個別に管理      | 各環境（開発、テスト、本番）ごとに `environmentVariables` テーブルのデータを個別に管理  |
| **適用シナリオ**             | 固定の静的設定に適しており、アプリのメインデータベース情報など                   | 頻繁に調整が必要な動的設定やビジネスロジックに紐づく設定に適しており、外部データベースやファイルストレージ情報など    |

## インストール

組み込みプラグインのため、個別のインストールは不要です。

## 用途

### 設定データの再利用

例えば、ワークフローの複数の場所でメールノードが必要な場合、共通の SMTP 設定を環境変数に保存できます。

![20250102181045](https://static-docs.nocobase.com/20250102181045.png)

### 機密データの保存

外部データベースの設定情報やクラウドファイルストレージのシークレットなどのデータを保存します。

![20250102103513](https://static-docs.nocobase.com/20250102103513.png)

### 環境設定の分離

ソフトウェア開発、テスト、本番などの異なる環境で、独立した設定管理戦略を使用して、各環境の設定とデータが干渉しないようにします。各環境には独自の設定、変数、リソースがあり、開発、テスト、本番環境間の衝突を防ぎ、システムが各環境で期待通りに動作することを保証します。

例えば、ファイルストレージサービスでは、開発環境と本番環境の設定が異なる場合があります。以下はその例です。

開発環境

```bash
FILE_STORAGE_OSS_BASE_URL=dev-storage.nocobase.com
FILE_STORAGE_OSS_BUCKET=dev-storage
```

本番環境

```bash
FILE_STORAGE_OSS_BASE_URL=prod-storage.nocobase.com
FILE_STORAGE_OSS_BUCKET=prod-storage
```

## 環境変数の管理

![20250102155314](https://static-docs.nocobase.com/20250102155314.png)

### 環境変数の追加

- 単一および一括追加をサポート
- 平文と暗号化をサポート

![20250102155509](https://static-docs.nocobase.com/20250102155509.png)

単一追加

![20250102155731](https://static-docs.nocobase.com/20250102155731.png)

一括追加

![20250102155258](https://static-docs.nocobase.com/20250102155258.png)

## 注意事項

### アプリの再起動

環境変数を変更または削除した後、アプリの再起動を促すメッセージが上部に表示されます。再起動後、変更された環境変数が有効になります。

![20250102155007](https://static-docs.nocobase.com/20250102155007.png)

### 暗号化保存

環境変数の暗号化データは AES 対称暗号化を使用し、暗号化と復号のための PRIVATE KEY は storage に保存されます。これを適切に保管してください。紛失または上書きされた場合、暗号化されたデータは復号できなくなります。

```bash
./storage/environment-variables/<app-name>/aes_key.dat
```

## 現在環境変数をサポートしているプラグイン

### Action: Custom request

![20250102180751](https://static-docs.nocobase.com/20250102180751.png)

### Auth: CAS

![20250102160129](https://static-docs.nocobase.com/20250102160129.png)

### Auth: DingTalk

![20250102160205](https://static-docs.nocobase.com/20250102160205.png)

### Auth: LDAP

![20250102160312](https://static-docs.nocobase.com/20250102160312.png)

### Auth: OIDC

![20250102160426](https://static-docs.nocobase.com/20250102160426.png)

### Auth: SAML

![20250102160652](https://static-docs.nocobase.com/20250102160652.png)

### Auth: WeCom

![20250102160758](https://static-docs.nocobase.com/20250102160758.png)

### Data source: External MariaDB

![20250102160935](https://static-docs.nocobase.com/20250102160935.png)

### Data source: External MySQL

![20250102173602](https://static-docs.nocobase.com/20250102173602.png)

### Data source: External Oracle

![20250102174153](https://static-docs.nocobase.com/20250102174153.png)

### Data source: External PostgreSQL

![20250102175630](https://static-docs.nocobase.com/20250102175630.png)

### Data source: External SQL Server

![20250102175814](https://static-docs.nocobase.com/20250102175814.png)

### Data source: KingbaseES

![20250102175951](https://static-docs.nocobase.com/20250102175951.png)

### Data source: REST API

![20250102180109](https://static-docs.nocobase.com/20250102180109.png)

### File storage: Local

![20250102161114](https://static-docs.nocobase.com/20250102161114.png)

### File storage: Aliyun OSS

![20250102161404](https://static-docs.nocobase.com/20250102161404.png)

### File storage: Amazon S3

![20250102163730](https://static-docs.nocobase.com/20250102163730.png)

### File storage: Tencent COS

![20250102173109](https://static-docs.nocobase.com/20250102173109.png)

### File storage: S3 Pro

未対応

### Map: AMap

![20250102163803](https://static-docs.nocobase.com/20250102163803.png)

### Map: Google

![20250102171524](https://static-docs.nocobase.com/20250102171524.png)

### Email settings

未対応

### Notification: Email

![20250102164059](https://static-docs.nocobase.com/20250102164059.png)

### Public forms

![20250102163849](https://static-docs.nocobase.com/20250102163849.png)

### System settings

![20250102164139](https://static-docs.nocobase.com/20250102164139.png)

### Verification: Aliyun SMS

![20250102164247](https://static-docs.nocobase.com/20250102164247.png)

### Verification: Tencent SMS

![20250102165814](https://static-docs.nocobase.com/20250102165814.png)

### Workflow

![20250102180537](https://static-docs.nocobase.com/20250102180537.png)
