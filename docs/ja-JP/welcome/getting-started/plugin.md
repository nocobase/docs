# プラグインのインストールとアップグレード

## 商用プラグインのインストールとアップグレード（v1.4以降）

### 環境変数の設定

環境変数[`NOCOBASE_PKG_USERNAME`](/welcome/getting-started/env#nocobase_pkg_username)と[`NOCOBASE_PKG_PASSWORD`](/welcome/getting-started/env#nocobase_pkg_password)（NocoBaseサービスプラットフォームのユーザー名とパスワード）を設定することで、アプリケーションのインストールまたはアップグレード時に商用プラグインを自動的にダウンロードできます。

```bash
NOCOBASE_PKG_USERNAME=your-username
NOCOBASE_PKG_PASSWORD=your-password
```

[環境変数の設定方法](/welcome/getting-started/env)

### プラグインのダウンロード

#### Dockerインストール

コンテナを再起動して、プラグインを自動的にダウンロードします

```bash
docker compose restart app
```

#### Gitソースコードまたはcreate-nocobase-appインストール

`pkg download-pro`コマンドを実行してプラグインをダウンロードします

```bash
yarn nocobase pkg download-pro
```

:::warning

- 上記の手順では、現在のアプリケーションバージョンに一致するプラグインのみがダウンロードされ、プラグインは更新されません。プラグインを更新する必要がある場合は、まず[アプリケーションをアップグレード](/welcome/getting-started/upgrading)してください。その後、認証済みのプラグインは自動的に更新されます。
- 認証済みのプラグインは、アプリケーションの[インストール](/welcome/getting-started/installation)または[アップグレード](/welcome/getting-started/upgrading)時にも自動的にダウンロードされます。

:::

### プラグインのアクティベーション

プラグイン管理画面で、アクティベートしたいプラグインを選択します。

![20241204000230](https://static-docs.nocobase.com/20241204000230.png)

### プラグインのアップグレード

まず[アプリケーションをアップグレード](/welcome/getting-started/upgrading)してください。認証済みのプラグインはアプリケーションのアップグレード時に自動的にダウンロードまたは更新されます。現在、アプリケーションをアップグレードせずにプラグインのみをアップグレードすることはできません。

## インターフェースを使用したプラグインのインストールと更新

:::warning
プラグインの追加や更新時にはアプリケーションが再起動します。複数のプラグインを一括で追加または更新する場合は、他の方法を検討してください。
:::

### プラグイン管理画面からプラグインパッケージをアップロード

商用プラグインでも、サードパーティ製プラグインでも、インターフェースから直接プラグインパッケージをアップロードできます。

![20241204000127](https://static-docs.nocobase.com/20241204000127.png)

注意：

- プラグインパッケージの作成方法については、[最初のプラグインの作成](/development/your-fisrt-plugin)を参照して、適切なビルドとパッケージングを行ってください。

### プラグインのアクティベーション

プラグイン管理画面で、アクティベートしたいプラグインを選択します。

![20241204000230](https://static-docs.nocobase.com/20241204000230.png)

## プラグインディレクトリへのアップロードによるインストールと更新

:::warning
- 一括処理をサポートし、移行が容易です
- 内部ネットワーク環境のサーバーに適しています
- アプリケーションの更新により互換性がなくなったプラグインの更新に推奨されます
:::

### プラグインの追加または更新

商用プラグインとサードパーティ製プラグインは、`./storage/plugins/`ディレクトリに保存されます。開発環境でプラグインをダウンロードし、サーバーの`./storage/plugins/`ディレクトリにアップロードするか、プラグインパッケージを直接このディレクトリに解凍します。例えば：

```bash
mkdir -p /my-nocobase/storage/plugins/@nocobase/plugin-auth-cas && \
  tar -xvzf /downloads/plugin-auth-cas-1.4.0.tgz \
  -C /my-nocobase/storage/plugins/@nocobase/plugin-auth-cas \
  --strip-components=1
```

このコマンドは、プラグインを`/my-nocobase/storage/plugins/@nocobase/plugin-auth-cas`に解凍し、`package`ディレクトリが含まれないようにします。正しいディレクトリ構造は次のとおりです：

```bash
./plugin-auth-cas/dist/server/migrations/20240425200816-change-locale-module.js
./plugin-auth-cas/dist/server/auth.js
./plugin-auth-cas/client.js
./plugin-auth-cas/dist/constants.js
./plugin-auth-cas/dist/externalVersion.js
./plugin-auth-cas/dist/client/index.js
./plugin-auth-cas/dist/index.js
./plugin-auth-cas/dist/server/index.js
./plugin-auth-cas/dist/server/actions/login.js
./plugin-auth-cas/dist/server/plugin.js
./plugin-auth-cas/server.js
./plugin-auth-cas/dist/server/actions/service.js
./plugin-auth-cas/dist/locale/en-US.json
./plugin-auth-cas/dist/locale/ko_KR.json
./plugin-auth-cas/package.json
./plugin-auth-cas/dist/locale/zh-CN.json
./plugin-auth-cas/README.md
./plugin-auth-cas/README.zh-CN.md
./plugin-auth-cas/dist/server/migrations/20240425200816-change-locale-module.d.ts
./plugin-auth-cas/dist/server/auth.d.ts
./plugin-auth-cas/client.d.ts
./plugin-auth-cas/dist/constants.d.ts
./plugin-auth-cas/dist/client/index.d.ts
./plugin-auth-cas/dist/client/locale/index.d.ts
./plugin-auth-cas/dist/index.d.ts
./plugin-auth-cas/dist/server/index.d.ts
./plugin-auth-cas/dist/server/actions/login.d.ts
./plugin-auth-cas/dist/client/Options.d.ts
./plugin-auth-cas/dist/server/plugin.d.ts
./plugin-auth-cas/server.d.ts
./plugin-auth-cas/dist/server/actions/service.d.ts
./plugin-auth-cas/dist/client/SigninPage.d.ts
./plugin-auth-cas/LICENSE.txt
```

### アップグレードコマンドの実行によるプラグインの更新

プラグインをプラグインディレクトリにアップロードした後、`nocobase upgrade`コマンドを実行して更新を完了します。

```bash
yarn nocobase upgrade --skip-code-update
```
```

この日本語版は、英語版と中国語版の内容に基づいて作成し、日本語の自然な表現に適応させています。主要な機能や手順はすべて保持しつつ、適切な日本語の用語と表現を使用しています。