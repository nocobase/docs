# プラグインのインストールとアップグレード

## 商用プラグインのインストールとアップグレード（v1.4以降）

### 環境変数の設定

環境変数 [`NOCOBASE_PKG_USERNAME`](/welcome/getting-started/env#nocobase_pkg_username) と [`NOCOBASE_PKG_PASSWORD`](/welcome/getting-started/env#nocobase_pkg_password)(NocoBase Service Platform Username and Password) を設定することで、アプリケーションのインストールやアップグレード時に商用プラグインを自動的にダウンロードできます。

```bash
NOCOBASE_PKG_USERNAME=your-username
NOCOBASE_PKG_PASSWORD=your-password
```

[How to set environment variables?](/welcome/getting-started/env)

### アプリケーションのインストールまたはアップグレードコマンドの実行

アプリケーションのインストールまたはアップグレードを実行すると、すべての認証済み商用プラグインがプラグインマネージャーに表示され、プラグインが自動的にダウンロードおよび更新されます。

```bash
# アプリケーションをインストール
yarn nocobase install

# アプリケーションを再インストール（データベースがクリアされます）
yarn nocobase install -f

# アプリケーションをアップグレード
yarn nocobase upgrade
```

### プラグインの有効化

プラグインマネージャーで有効化したいプラグインを選択してください。

![プラグインの有効化](https://static-docs.nocobase.com/20241204000230.png)

---

## インターフェースを利用したプラグインのインストールと更新

:::warning
インターフェースを通じてプラグインを追加または更新する場合、アプリケーションが再起動されます。複数のプラグインをまとめて操作する場合は、他の方法をお勧めします。
:::

### プラグインマネージャーでプラグインパッケージをアップロード

商用プラグインやサードパーティプラグインは、インターフェースを使用して直接アップロードできます。

![プラグインのアップロード](https://static-docs.nocobase.com/20241204000127.png)

補足：

- プラグインパッケージの作成方法については、[最初のプラグインを作成する](/development/your-first-plugin) を参考にして、正しくビルドとパッケージングを行ってください。

### プラグインの有効化

プラグインマネージャーで有効化したいプラグインを選択してください。

![プラグインの有効化](https://static-docs.nocobase.com/20241204000230.png)

---

## コマンドラインを利用したプラグインのインストールと更新

:::warning
- バッチ処理に対応しています。
- アプリケーションの更新によりプラグインが非互換になった場合や起動できなくなった場合、この方法を使用して更新できます。
  :::

### 0. Dockerバージョンの場合、まずコンテナに入る

```bash
docker-compose exec app bash
```

### 1. プラグインがあるnpmレジストリにログイン

レジストリの設定は実際の環境に応じて行ってください。

```bash
npm login --registry=https://pkg.nocobase.com/
```

### 2. プラグインの追加または更新

```bash
yarn pm add @nocobase/plugin-data-source-external-mysql @nocobase/plugin-embed --registry=https://pkg.nocobase.com/
```

### 3. プラグインの有効化

```bash
yarn pm enable @nocobase/plugin-data-source-external-mysql @nocobase/plugin-embed
```

---

## プラグインディレクトリにプラグインをアップロードしてインストールと更新を実行

:::warning
- バッチ処理に対応しており、移行も簡単です。
- 内部ネットワークのサーバーでも利用可能です。
- アプリケーションの更新によってプラグインが非互換になった場合、この方法で更新を実行できます。
  :::

### プラグインの追加または更新

商用プラグインやサードパーティプラグインは、`./storage/plugins/` ディレクトリに保存されます。開発環境でプラグインをダウンロードしてから、サーバーの `./storage/plugins/` ディレクトリにアップロードするか、直接プラグインパッケージをそのディレクトリに解凍します。例：

```bash
mkdir -p /my-nocobase/storage/plugins/@nocobase/plugin-auth-cas && \
  tar -xvzf /downloads/plugin-auth-cas-1.4.0.tgz \
  -C /my-nocobase/storage/plugins/@nocobase/plugin-auth-cas \
  --strip-components=1
```

このコマンドにより、`/my-nocobase/storage/plugins/@nocobase/plugin-auth-cas` にプラグインが `package` ディレクトリなしで解凍されます。正しいディレクトリ構造は以下のようになります：

```plaintext
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

### アップグレードコマンドの実行

プラグインをプラグインディレクトリにアップロードした後、`nocobase upgrade` コマンドを実行して更新を完了してください。

```bash
yarn nocobase upgrade
```
