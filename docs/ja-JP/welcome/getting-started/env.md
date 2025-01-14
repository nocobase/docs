# 環境変数

## 環境変数を設定する方法

### Git ソースコードまたは create-nocobase-app のインストール方法

プロジェクトのルートディレクトリにある `.env` ファイルに環境変数を設定します。環境変数を変更した後、アプリケーションプロセスを終了（kill）し、再起動する必要があります。

### Docker のインストール方法

`docker-compose.yml` の設定を変更し、`environment` パラメータに環境変数を設定します。例：

```yml
services:
  app:
    image: nocobase/nocobase:latest
    environment:
      - APP_ENV=production
```

また、`env_file` を使用して `.env` ファイル内で環境変数を設定することも可能です。例：

```yml
services:
  app:
    image: nocobase/nocobase:latest
    env_file: .env
```

環境変数を変更した後、アプリケーションコンテナを再構築する必要があります。

```yml
docker-compose up -d app
```

## グローバル環境変数

`.env` ファイルに保存されます。

### TZ

アプリケーションのタイムゾーンを設定するために使用され、デフォルトはオペレーティングシステムのタイムゾーンです。

https://en.wikipedia.org/wiki/List_of_tz_database_time_zones

:::warning
時間に関連する操作は、このタイムゾーンに基づいて処理されます。TZを変更すると、データベース内の日付値に影響を与える可能性があります。詳細は「[日付 & 時間の概要](/handbook/data-modeling/collection-fields/datetime)」を参照してください。
:::

### APP_ENV

アプリケーションの環境を指定します。デフォルト値は `development` で、選択肢は以下の通りです：

- `production` 本番環境
- `development` 開発環境

```bash
APP_ENV=production
```

### APP_PORT

アプリケーションポートの設定です。デフォルト値は `13000` です。

```bash
APP_PORT=13000
```

### APP_KEY

アプリケーションのキーで、ユーザートークンの生成に使用されます。自分のアプリケーションのキーに変更し、外部に漏れないようにしてください。

:::warning
`APP_KEY` を変更すると、元のトークンも無効になります。
:::

```bash
APP_KEY=app-key-test
```

### API_BASE_PATH

NocoBase APIのアドレスプレフィックスで、デフォルト値は `/api/` です。

```bash
API_BASE_PATH=/api/
```

### API_BASE_URL

### CLUSTER_MODE

> `v1.6.0+`

マルチコア（クラスター）起動モードです。この変数が設定されている場合、`pm2 start` コマンドに `-i <instances>` の引数として透過的に渡されます。選択肢は pm2 の `-i` パラメータと一致します（参考：[PM2: クラスター モード](https://pm2.keymetrics.io/docs/usage/cluster-mode/)）：

- `max`：CPUの最大コア数を使用
- `-1`：CPUの最大コア数 - 1
- `<number>`：指定したコア数

デフォルト値は空で、クラスターは無効になります。

:::warning{title="注意"}
このモードはクラスター モード関連のプラグインと併せて使用する必要があります。そうしないと、アプリケーションの機能に異常が生じる可能性があります。
:::

更多可参考：[集群模式](./deployment/cluster-mode.md)。

### PLUGIN_PACKAGE_PREFIX

プラグインパッケージの名前接頭辞です。デフォルトは `@nocobase/plugin-,@nocobase/preset-` となります。

例えば、`my-nocobase-app` プロジェクトに `hello` プラグインを追加する場合、プラグインの完全なパッケージ名は `@my-nocobase-app/plugin-hello` になります。

PLUGIN_PACKAGE_PREFIX は次のように設定できます：

```bash
PLUGIN_PACKAGE_PREFIX=@nocobase/plugin-,@nocobase/preset-,@my-nocobase-app/plugin-
```

この場合、プラグイン名とパッケージ名の対応関係は以下の通りです：

- `users` プラグインのパッケージ名は `@nocobase/plugin-users`
- `nocobase` プラグインのパッケージ名は `@nocobase/preset-nocobase`
- `hello` プラグインのパッケージ名は `@my-nocobase-app/plugin-hello`

### DB_DIALECT

データベースの種類です。デフォルト値は `sqlite` で、選択肢は以下の通りです：

- `sqlite`
- `mariadb`
- `mysql`
- `postgres`

```bash
DB_DIALECT=mysql
```

### DB_STORAGE

データベースファイルのパス（SQLiteデータベースを使用する場合に設定します）。

```bash
# 相対パス
DB_STORAGE=storage/db/nocobase.db
# 絶対パス
DB_STORAGE=/your/path/nocobase.db
```

### DB_HOST

データベースホスト（MySQLまたはPostgreSQLデータベースを使用する場合に設定します）。

デフォルト値は `localhost` です。

```bash
DB_HOST=localhost
```

### DB_PORT

データベースポート（MySQLまたはPostgreSQLデータベースを使用する場合に設定します）。

- MySQL、MariaDB のデフォルトポートは 3306 です。
- PostgreSQL のデフォルトポートは 5432 です。

```bash
DB_PORT=3306
```

### DB_DATABASE

データベース名（MySQLまたはPostgreSQLデータベースを使用する場合に設定します）。

```bash
DB_DATABASE=nocobase
```

### DB_USER

データベースユーザー（MySQL または PostgreSQL データベースを使用する場合は設定が必要です）

```bash
DB_USER=nocobase
```

### DB_PASSWORD

データベースパスワード（MySQL または PostgreSQL データベースを使用する場合は設定が必要です）

```bash
DB_PASSWORD=nocobase
```

### DB_TABLE_PREFIX

データテーブルのプレフィックス

```bash
DB_TABLE_PREFIX=nocobase_
```

### DB_UNDERSCORED

データベースのテーブル名やフィールド名をスネークケーススタイルに変換するかどうか。デフォルトは `false` です。MySQL（MariaDB）データベースを使用し、`lower_case_table_names=1` の場合、DB_UNDERSCORED は `true` でなければなりません。

:::warning
`DB_UNDERSCORED=true` の場合、データベースの実際のテーブル名とフィールド名は、画面に表示されるものとは一致しません。例えば、`orderDetails` はデータベース内では `order_details` となります。
:::

### DB_LOGGING

データベースログのスイッチ。デフォルト値は `off` で、選択肢は以下の通りです：

- `on` - 有効
- `off` - 無効

```bash
DB_LOGGING=on
```

### NOCOBASE_PKG_USERNAME

サービスプラットフォームのユーザー名、自動的にプラグインをダウンロードおよび更新するために使用されます。

### NOCOBASE_PKG_PASSWORD

サービスプラットフォームのパスワード、自動的にプラグインをダウンロードおよび更新するために使用されます。

### LOGGER_TRANSPORT

ログ出力方法。複数の場合は `,` で区切ります。開発環境のデフォルト値は `console`、本番環境のデフォルト値は `console,dailyRotateFile` です。選択肢：

- `console` - `console.log`
- `file` - `ファイル`
- `dailyRotateFile` - 日毎にローテーションファイル

```bash
LOGGER_TRANSPORT=console,dailyRotateFile
```

### LOGGER_BASE_PATH

ファイルベースのログストレージパス。デフォルトは `storage/logs` です。

```bash
LOGGER_BASE_PATH=storage/logs
```

### LOGGER_LEVEL

出力ログレベルについて、開発環境のデフォルト値は `debug`、本番環境のデフォルト値は `info` です。選択肢は以下の通りです：

- `error`
- `warn`
- `info`
- `debug`
- `trace`

```bash
LOGGER_LEVEL=info
```

データベースのログ出力レベルは `debug` で、`DB_LOGGING` によって出力の有無が制御され、`LOGGER_LEVEL` の設定には影響を受けません。

### LOGGER_MAX_FILES

最大保持ログファイル数を設定します。

- `LOGGER_TRANSPORT` が `file` の場合、デフォルト値は `10` です。
- `LOGGER_TRANSPORT` が `dailyRotateFile` の場合、`[n]d` で日数を表し、デフォルト値は `14d` です。

```bash
LOGGER_MAX_FILES=14d
```

### LOGGER_MAX_SIZE

サイズによるログのロールオーバー設定です。

- `LOGGER_TRANSPORT` が `file` の場合、単位は `byte` で、デフォルト値は `20971520 (20 * 1024 * 1024)` です。
- `LOGGER_TRANSPORT` が `dailyRotateFile` の場合、`[n]k`、`[n]m`、`[n]g` を使用できます。デフォルトは未設定です。

```bash
LOGGER_MAX_SIZE=20971520
```

### LOGGER_FORMAT

ログ出力フォーマットについて、開発環境のデフォルトは `console`、本番環境のデフォルトは `json` です。選択肢は以下の通りです：

- `console`
- `json`
- `logfmt`
- `delimiter`

```bash
LOGGER_FORMAT=json
```

参考：[ログフォーマット](../plugins/logger/index.md#ログフォーマット)

### CACHE_DEFAULT_STORE

キャッシュ方式のユニーク識別子で、サーバーのデフォルトキャッシュ方式を指定します。デフォルト値は `memory` で、選択肢は以下の通りです：

- `memory`
- `redis`

```bash
CACHE_DEFAULT_STORE=memory
```

### CACHE_MEMORY_MAX

メモリキャッシュ項目の最大数を設定します。デフォルト値は `2000` です。

```bash
CACHE_MEMORY_MAX=2000
```

### CACHE_REDIS_URL

Redis接続（オプション）。例：`redis://localhost:6379`

```bash
CACHE_REDIS_URL=redis://localhost:6379
```

### TELEMETRY_ENABLED

遥測データ収集を有効にします。デフォルトは `off` です。

```bash
TELEMETRY_ENABLED=on
```

### TELEMETRY_METRIC_READER

有効な監視指標収集器。デフォルトは `console` です。他の値については、対応する収集器プラグインに登録された名前を参照してください。複数指定する場合は `,` で区切ります。

```bash
TELEMETRY_METRIC_READER=console,prometheus
```

### TELEMETRY_TRACE_PROCESSOR

有効なトレースデータ処理器。デフォルトは `console` です。他の値については、対応する処理器プラグインに登録された名前を参照してください。複数指定する場合は `,` で区切ります。

```bash
TELEMETRY_TRACE_PROCESSOR=console
```

## 実験的環境変数

### APPEND_PRESET_LOCAL_PLUGINS

未アクティブなプレセットプラグインを追加するためのもので、値はプラグインパッケージ名（package.json の name パラメータ）で、複数のプラグインはカンマで区切ります。

:::info

1. プラグインがローカルにダウンロードされ、`node_modules` ディレクトリ内で見つけられることを確認する必要があります。詳細は [プラグインの組織方法](/development/plugin) を参照してください。
2. 環境変数を追加した後、初期インストール `nocobase install` またはアップグレード `nocobase upgrade` を行った後にプラグイン管理ページに表示されます。

:::

```bash
APPEND_PRESET_LOCAL_PLUGINS=@my-project/plugin-foo,@my-project/plugin-bar
```

### APPEND_PRESET_BUILT_IN_PLUGINS

組み込みのデフォルトインストールプラグインを追加するためのもので、値はプラグインパッケージ名（package.json の name パラメータ）で、複数のプラグインはカンマで区切ります。

:::info
1. プラグインがローカルにダウンロードされ、`node_modules` ディレクトリ内に存在することを確認してください。詳細については、[プラグインの組織方法](/development/plugin) を参照してください。

2. 環境変数を追加した後、初期化時に `nocobase install` またはアップグレード時に `nocobase upgrade` を実行すると、自動的にプラグインがインストールまたはアップグレードされます。

:::

```bash
APPEND_PRESET_BUILT_IN_PLUGINS=@my-project/plugin-foo,@my-project/plugin-bar
```

## 一時的な環境変数

NocoBase をインストールする際には、一時的な環境変数を設定してインストールを補助できます。例：

```bash
yarn cross-env \
  INIT_APP_LANG=zh-CN \
  INIT_ROOT_EMAIL=demo@nocobase.com \
  INIT_ROOT_PASSWORD=admin123 \
  INIT_ROOT_NICKNAME="Super Admin" \
  nocobase install

# 同等のコマンド
yarn nocobase install \
  --lang=zh-CN  \
  --root-email=demo@nocobase.com \
  --root-password=admin123 \
  --root-nickname="Super Admin"

# 同等のコマンド
yarn nocobase install -l zh-CN -e demo@nocobase.com -p admin123 -n "Super Admin"
```

### INIT_APP_LANG

インストール時の言語です。デフォルトは `en-US` で、選択肢は以下の通りです：

- `en-US`
- `zh-CN`

```bash
yarn cross-env \
  INIT_APP_LANG=zh-CN \
  nocobase install
```

### INIT_ROOT_EMAIL

ルートユーザーのメールアドレスを設定します。

```bash
yarn cross-env \
  INIT_APP_LANG=zh-CN \
  INIT_ROOT_EMAIL=demo@nocobase.com \
  nocobase install
```

### INIT_ROOT_PASSWORD

ルートユーザーパスワード

```bash
yarn cross-env \
  INIT_APP_LANG=zh-CN \
  INIT_ROOT_EMAIL=demo@nocobase.com \
  INIT_ROOT_PASSWORD=admin123 \
  nocobase install
```

### INIT_ROOT_NICKNAME

ルートユーザーのニックネーム

```bash
yarn cross-env \
  INIT_APP_LANG=zh-CN \
  INIT_ROOT_EMAIL=demo@nocobase.com \
  INIT_ROOT_PASSWORD=admin123 \
  INIT_ROOT_NICKNAME="Super Admin" \
  nocobase install
```

