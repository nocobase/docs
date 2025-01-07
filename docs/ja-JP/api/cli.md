# @nocobase/cli

NocoBase CLI は、NocoBase アプリケーションの開発、ビルド、およびデプロイを支援することを目的としています。

<Alert>

NocoBase CLI は、ts-node と node の2つの実行モードをサポートしています。

- ts-node モード（デフォルト）：開発環境用で、リアルタイムコンパイルをサポートしますが、応答が遅いです。
- node モード：本番環境用で、応答が速いですが、`yarn nocobase build` を実行してすべてのソースコードをコンパイルする必要があります。

</Alert>

## 使用説明

```bash
$ yarn nocobase -h

Usage: nocobase [command] [options]

Options:
  -h, --help

Commands:
  console
  db:auth               データベース接続の検証
  db:sync               collections 設定に基づいて関連するデータシートとフィールドを生成
  install               インストール
  start                 本番環境でのアプリケーション起動
  build                 コンパイルとパッケージング
  clean                 コンパイル後のファイルを削除
  dev                   開発環境でのアプリケーション起動、リアルタイムコンパイルをサポート
  doc                   ドキュメント開発
  test                  テスト
  umi
  upgrade               アップグレード
  migrator              データ移行
  pm                    プラグインマネージャー
  help
```

## スキャフォールドでの適用

スキャフォールドの `package.json` 内の `scripts` を以下のように設定します：

```json
{
  "scripts": {
    "dev": "nocobase dev",
    "start": "nocobase start",
    "clean": "nocobase clean",
    "build": "nocobase build",
    "test": "nocobase test",
    "pm": "nocobase pm",
    "postinstall": "nocobase postinstall"
  }
}
```

## コマンドライン拡張

NocoBase CLI は [commander](https://github.com/tj/commander.js) に基づいて構築されており、自由にコマンドを拡張できます。拡張コマンドは `app/server/index.ts` に記述できます：

```ts
const app = new Application(config);

app.command('hello').action(() => {});
```

または、プラグイン内に記述することもできます：

```ts
class MyPlugin extends Plugin {
  beforeLoad() {
    this.app.command('hello').action(() => {});
  }
}
```

ターミナルで実行

```bash
$ yarn nocobase hello
```

## 組み込みコマンドライン

使用頻度順

### `dev`

開発環境でアプリケーションを起動し、コードをリアルタイムでコンパイルします。

<Alert>
NocoBase がインストールされていない場合、自動的にインストールされます（install コマンドを参照）
</Alert>

```bash
Usage: nocobase dev [options]

Options:
  -p, --port [port]
  --client
  --server
  -h, --help
```

例

```bash
# 開発環境でアプリケーションを起動し、リアルタイムコンパイル
yarn nocobase dev
# サーバーのみ起動
yarn nocobase dev --server
# クライアントのみ起動
yarn nocobase dev --client
```

### `start`

本番環境でアプリケーションを起動します。コードは yarn build が必要です。

<Alert>

- NocoBase がインストールされていない場合、自動的にインストールされます（install コマンドを参照）
- ソースコードが変更された場合、再パッケージが必要です（build コマンドを参照）

</Alert>

```bash
$ yarn nocobase start -h

Usage: nocobase start [options]

Options:
  -p, --port
  -s, --silent
  -h, --help
```

例

```bash
# 本番環境でアプリケーションを起動
yarn nocobase start
```

### `install`

インストール

```bash
$ yarn nocobase install -h

Usage: nocobase install [options]

Options:
  -f, --force
  -c, --clean
  -s, --silent
  -l, --lang [lang]
  -e, --root-email <rootEmail>
  -p, --root-password <rootPassword>
  -n, --root-nickname [rootNickname]
  -h, --help
```

例

```bash
# 初期インストール
yarn nocobase install -l ja-JP -e admin@nocobase.com -p admin123
# NocoBase のすべてのデータシートを削除し、再インストール
yarn nocobase install -f -l ja-JP -e admin@nocobase.com -p admin123
# データベースをクリアし、再インストール
yarn nocobase install -c -l ja-JP -e admin@nocobase.com -p admin123
```

<Alert>

`-f/--force` と `-c/--clean` の違い

- `-f/--force` NocoBase のデータシートを削除します
- `-c/--clean` データベースをクリアし、すべてのデータシートが削除されます

</Alert>

### `upgrade`

アップグレード

```bash
yarn nocobase upgrade
```

### `test`

テスト、vitest と同様の使用方法、直接 vitest を実行する場合との違い：

- パスを指定する場合、自動的にフロントエンドとバックエンドを識別し、フロントエンドの場合は `/client/` を含める必要があります
- バックエンドテストはデフォルトで `--single-thread` です。無効にする場合は `--single-thread=false` を追加します
- デフォルトで `--run` です。テストが完了するとプロセスが終了します。監視が必要な場合は `--watch` を追加します

```bash
$ nocobase test -h
vitest/1.0.4

Usage:
  $ vitest [...filters]
```

例

```bash
# すべてのテストを実行し、フロントエンドとバックエンドで2つの vitest プロセスを並行実行
yarn test

# client 関連のテストケースを実行
yarn test --client
# 以下と同等
yarn cross-env TEST_ENV=client-side vitest

# server 関連のテストケースを実行
yarn test --server
# 以下と同等
yarn cross-env TEST_ENV=server-side vitest

# ディレクトリまたはファイルを指定
yarn test your/path/src/__tests__/test-file.test.ts
# フロントエンドファイルは /client/ を含める必要があります
yarn test your/path/client/src/__tests__/test-file.test.ts
```

### `build`

コードを本番環境にデプロイする前に、ソースコードをコンパイルしてパッケージ化する必要があります。コードが変更された場合も再ビルドが必要です。

```bash
# すべてのパッケージ
yarn nocobase build
# 特定のパッケージ
yarn nocobase build app/server app/client
```

### `clean`

コンパイル後のファイルを削除

```bash
yarn clean
# 以下と同等
yarn rimraf -rf packages/*/*/{lib,esm,es,dist}
```

### `doc`

ドキュメント開発

```bash
# ドキュメントを起動
yarn doc  --lang=ja-JP # yarn doc dev と同等
# ドキュメントをビルドし、デフォルトで ./docs/dist/ ディレクトリに出力
yarn doc build
# dist 出力のドキュメントの最終的な効果を確認
yarn doc serve --lang=ja-JP
```

### `db:auth`

データベース接続の検証

```bash
$ yarn nocobase db:auth -h

Usage: nocobase db:auth [options]

Options:
  -r, --retry [retry]   リトライ回数
  -h, --help
```

### `db:sync`

collections 設定に基づいてデータシートとフィールドを生成

```bash
$ yarn nocobase db:sync -h

Usage: nocobase db:sync [options]

Options:
  -f, --force
  -h, --help   display help for command
```

### `migrator`

データ移行

```bash
$ yarn nocobase migrator

Positional arguments:
  <command>
    up        保留中のマイグレーションを適用
    down      マイグレーションを元に戻す
    pending   保留中のマイグレーションをリスト
    executed  実行済みのマイグレーションをリスト
    create    マイグレーションファイルを作成
```

### `pm`

プラグインマネージャー

```bash
# プラグインを作成
yarn pm create hello
# プラグインを登録
yarn pm add hello
# プラグインを有効化
yarn pm enable hello
# プラグインを無効化
yarn pm disable hello
# プラグインを削除
yarn pm remove hello
```

未実装

```bash
# プラグインをアップグレード
yarn pm upgrade hello
# プラグインを公開
yarn pm publish hello
```

### `umi`

`app/client` は [umi](https://umijs.org/) に基づいて構築されており、`nocobase umi` を介して他の関連コマンドを実行できます。

```bash
# 開発環境に必要な .umi キャッシュを生成
yarn nocobase umi generate tmp
```

### `help`

ヘルプコマンド、オプションパラメータ `-h` と `--help` も使用可能

```bash
# すべての cli を表示
yarn nocobase help
# -h も使用可能
yarn nocobase -h
# または --help
yarn nocobase --help
# db:sync コマンドのオプションを表示
yarn nocobase db:sync -h
```