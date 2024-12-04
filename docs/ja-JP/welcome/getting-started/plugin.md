# プラグインのインストールとアップグレード

## インターフェースを通じてプラグインをインストールおよび更新する

### 1. プラグインパッケージを取得する

- NocoBaseが提供する商用プラグインの場合、環境変数[`NOCOBASE_PKG_USERNAME`](/welcome/getting-started/env#nocobase_pkg_username)と[`NOCOBASE_PKG_PASSWORD`](/welcome/getting-started/env#nocobase_pkg_password)を設定することで、アプリケーションのインストールまたはアップグレード時に商用プラグインを自動的にダウンロードできます。
- 自作のプラグインの場合は、[最初のプラグインを作成する](/development/your-fisrt-plugin)の手順を参考にして、プラグインを構築およびパッケージ化してください。

### 2. プラグインを追加する

プラグインパッケージをアップロードして追加します。

![20241204000127](https://static-docs.nocobase.com/20241204000127.png)

### 3. プラグインを有効化する

アップロードしたプラグインを有効化します。

![20241204000230](https://static-docs.nocobase.com/20241204000230.png)

## コマンドラインを介してプラグインをインストールおよび更新する

バッチ処理をサポートしています。アプリケーションの更新によりプラグインが非互換となり起動できない場合も、コマンドラインを使用して処理できます。

### 0. Docker版は最初にコンテナに入る

```bash
docker-compose exec app bash
```

### 1. プラグインが存在するnpmレジストリにログインする

コマンドラインモードでは、npmレジストリを介してプラグインを追加および更新することをお勧めします。例えば、NocoBase商用プラグインのnpmレジストリはhttps://pkg.nocobase.com/です。

```bash
npm login --registry=https://pkg.nocobase.com/
```

### 2. プラグインを追加または更新する

```bash
yarn pm add @nocobase/plugin-data-source-external-mysql @nocobase/plugin-embed --registry=https://pkg.nocobase.com/
```

### 3. プラグインを有効化する

```bash
yarn pm enable @nocobase/plugin-data-source-external-mysql @nocobase/plugin-embed
```

## プラグインパッケージを手動で解凍する

### プラグインを追加または更新する

プラグインを追加または更新するには、プラグインパッケージを`./storage/plugins/`に解凍するだけで、プラグインマネージャーのインターフェースが自動的に読み取ります。例えば：

```bash
mkdir -p /my-nocobase/storage/plugins/@nocobase/plugin-auth-cas && \
  tar -xvzf /downloads/plugin-auth-cas-1.4.0.tgz \
  -C /my-nocobase/storage/plugins/@nocobase/plugin-auth-cas \
  --strip-components=1
```

このコマンドは、プラグインが`/my-nocobase/storage/plugins/@nocobase/plugin-auth-cas`に解凍され、`package`ディレクトリを含まないようにし、次のように正しいディレクトリ構造になります：

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

### アップグレードコマンドを実行する

手動で解凍してプラグインを更新した場合は、`nocobase upgrade`コマンドを実行する必要があります。

```bash
yarn nocobase upgrade
```
