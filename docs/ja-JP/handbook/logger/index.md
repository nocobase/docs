# ログ

## 概要

ログはシステムの問題を特定するための重要な手段です。NocoBaseのサーバーログは主にインターフェースリクエストログとシステム実行ログで構成されており、ログレベル、ロールオーバー戦略、サイズ、印刷形式などの設定をサポートしています。本ドキュメントでは、NocoBaseサーバーログに関する内容と、ログプラグインが提供するサーバーログのパッケージおよびダウンロード機能の使用方法について説明します。

## ログ設定

[環境変数](../../welcome/getting-started/env.md#logger_transport)を使用して、ログレベル、出力方法、印刷形式などのログ関連パラメータを設定できます。

## ログ形式

NocoBaseでは、4種類の異なるログ形式を設定することができます。

### `console`

開発環境のデフォルト形式で、メッセージはハイライトカラーで表示されます。

```
2023-12-30 22:40:06 [情報] 応答                                     メソッド=GET パス=/api/uiSchemas:getJsonSchema/nocobase-admin-menu res={"status":200} アクション={"actionName":"getJsonSchema","resourceName":"uiSchemas","params":{"filterByTk":"nocobase-admin-menu","resourceName":"uiSchemas","resourceIndex":"nocobase-admin-menu","actionName":"getJsonSchema"}} ユーザーID=1 ステータス=200 コスト=5 アプリ=main reqId=ccf4e3bd-beb0-4350-af6e-b1fc1d9b6c3f
2023-12-30 22:43:12 [デバッグ] データベース方言: mysql                      モジュール=application メソッド=install アプリ=main reqId=31ffa8b5-f377-456b-a295-0c8a28938228
2023-12-30 22:43:12 [警告] アプリはすでにインストールされています                             モジュール=application メソッド=install アプリ=main reqId=31ffa8b5-f377-456b-a295-0c8a28938228
```

### `json`

生産環境のデフォルト形式です。

```json
{
  "level": "info",
  "timestamp": "2023-12-26 22:04:56",
  "reqId": "7612ef42-58e8-4c35-bac2-2e6c9d8ec96e",
  "message": "レスポンス",
  "method": "POST",
  "path": "/api/authenticators:publicList",
  "res": { "status": 200 },
  "action": {
    "actionName": "publicList",
    "resourceName": "authenticators",
    "params": { "resourceName": "authenticators", "actionName": "publicList" }
  },
  "status": 200,
  "cost": 16
}
```

### `logfmt`

詳細は https://brandur.org/logfmt をご覧ください。

```
level=info timestamp=2023-12-21 14:18:02 reqId=8b59a40d-68ee-4c97-8001-71a47a92805a
message=レスポンス method=POST path=/api/authenticators:publicList res={"status":200}
action={"actionName":"publicList","resourceName":"authenticators","params":{"resourceName":"authenticators","actionName":"publicList"}}
userId=未定 status=200 cost=14
```

### `delimiter`

区切り文字 `|` で分割されます。

```
info|2023-12-26 22:07:09|13cd16f0-1568-418d-ac37-6771ee650e14|レスポンス|POST|/api/authenticators:publicList|{"status":200}|{"actionName":"publicList","resourceName":"authenticators","params":{"resourceName":"authenticators","actionName":"publicList"}}||200|25
```

## ログディレクトリ

NocoBaseのログファイルの主なディレクトリ構造は以下の通りです：

- `storage/logs` - ログ出力ディレクトリ
  - `main` - 主アプリケーション名
    - `request_YYYY-MM-DD.log` - リクエストログ
    - `system_YYYY-MM-DD.log` - システムログ
    - `system_error_YYYY-MM-DD.log` - システムエラーログ
    - `sql_YYYY-MM-DD.log` - SQL実行ログ
    - ...
  - `sub-app` - サブアプリケーション名
    - `request_YYYY-MM-DD.log`
    - ...

## ログファイル

### リクエストログ

`request_YYYY-MM-DD.log` - インターフェースのリクエストとレスポンスのログ。

| フィールド      | 説明                               |
| --------------- | ---------------------------------- |
| `level`        | ログレベル                         |
| `timestamp`    | ログ出力時間 `YYYY-MM-DD hh:mm:ss` |
| `message`      | `request` または `response`       |
| `userId`       | `response` のみ存在               |
| `method`       | リクエストメソッド                 |
| `path`         | リクエストパス                     |
| `req` / `res`  | リクエスト/レスポンス内容         |
| `action`       | リクエストリソースおよびパラメータ |
| `status`       | レスポンスステータスコード         |
| `cost`         | リクエスト処理にかかる時間         |
| `app`          | 現在のアプリケーション名           |
| `reqId`        | リクエスト ID                      |

:::info{title=ヒント}
`reqId` は `X-Request-Id` レスポンスヘッダーを通じてフロントエンドに送信されます。
:::

### システムログ

`system_YYYY-MM-DD.log` はアプリケーション、中間ウェア、プラグインなどのシステム実行ログであり、`error` レベルのログは別途 `system_error_YYYY-MM-DD.log` に出力されます。

| フィールド    | 説明                                 |
| ------------- | ------------------------------------ |
| `level`       | ログレベル                           |
| `timestamp`   | ログ出力時間 `YYYY-MM-DD hh:mm:ss`  |
| `message`     | ログメッセージ                       |
| `module`      | モジュール                           |
| `submodule`   | サブモジュール                       |
| `method`      | 呼び出しメソッド                     |
| `meta`        | その他関連情報（JSON形式）          |
| `app`         | 現在のアプリケーション名             |
| `reqId`       | リクエストID                        |

### SQL 実行ログ

`sql_YYYY-MM-DD.log`は、データベースのSQL実行ログです。`INSERT INTO`文は最初の2000文字のみ保持されます。

| フィールド    | 説明                                 |
| ------------- | ------------------------------------ |
| `level`       | ログレベル                           |
| `timestamp`   | ログ出力時間 `YYYY-MM-DD hh:mm:ss`  |
| `sql`         | SQL文                               |
| `app`         | 現在のアプリケーション名             |
| `reqId`       | リクエストID                        |

## ログパッケージのダウンロード

<PluginInfo name="logger"></PluginInfo>

1. ログ管理ページにアクセスします。
2. ダウンロードしたいログファイルを選択します。
3. ダウンロード (Download) ボタンをクリックします。

![2024-04-10_10-50-50](https://static-docs.nocobase.com/2024-04-10_10-50-50.png)

## 関連文書

- [プラグイン開発 - サーバー - ログ](../../development/server/logger)
- [APIリファレンス - @nocobase/logger](../../api/logger)

