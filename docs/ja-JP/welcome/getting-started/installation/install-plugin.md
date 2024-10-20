# サードパーティプラグインのインストール方法

NocoBaseにはいくつかのプラグインがプリインストールされており、サードパーティプラグインのインストールもサポートしています。以下の方法でインストールできます：

- インターフェースからのインストール
- コマンドによるインストール
- プリインストールプラグインのインストール

## インターフェースからのインストール

:::warning
- インターフェースから追加されたプラグインは `storages/plugins` ディレクトリに保存され、必ずビルド済みのプラグインであり、他の依存関係をインストールする必要はありません。
:::

![20240424135049](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240424135049.png)

追加したプラグインは使用する前にアクティブ化する必要があります。

![20240424175655](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240424175655.png)

## コマンドによるインストール

ローカルに既にあるプラグインをアプリに追加します。

```bash
yarn pm add <packageName> # この使い方はローカルで開発中のプラグインを追加するのに一般的です。
```

先にダウンロードして解凍し、アプリに追加する場合は、以下の方法を使用できます（プラグインは `storages/plugins` ディレクトリに保存されます）：

```bash
# リモートのnpmレジストリからダウンロードしてアプリに追加
yarn pm add <packageName> --registry=<registry>
# リモートURLからダウンロードしてアプリに追加
yarn pm add <url>
# ローカルの圧縮ファイルを解凍してアプリに追加
yarn pm add <filePath>
```

:::warning
- Docker版を使用する際は、先にDockerコンテナに入ってから `pm add` コマンドを実行する必要があります。
:::

### 例

```bash
# ローカルに既存のプラグインをアプリに追加する
yarn pm add @nocobase/plugin-data-source-external-mariadb
# リモートの npm レジストリからダウンロードしてアプリに追加する
yarn pm add @nocobase/plugin-data-source-external-mariadb --registry=https://pkg.nocobase.com/
# リモート URL からダウンロードしてアプリに追加する
yarn pm add https://registry.npmmirror.com/@nocobase/plugin-sample-hello/-/plugin-sample-hello-0.21.0-alpha.15.tgz
# ローカルの圧縮ファイルを解凍してアプリに追加する
yarn pm add /downloads/plugin-custom-brand-0.21.0-alpha.15.tgz
```

`pm add` コマンドはプラグインを追加するためにのみ使用され、追加されたプラグインは有効化する必要があります。`pm enable` コマンドを使用して有効化してください。

```bash
yarn pm enable <packageName>
```

### 例

```bash
yarn pm enable @nocobase/plugin-data-source-external-mariadb @nocobase/plugin-custom-brand
```

## プレセットプラグインのインストール

プラグインのインストールを簡素化するために、プレセットプラグインを設定するための2つの環境変数が用意されています。プレセットプラグインはアプリのインストールやアップグレード時に自動的に追加、インストール、またはアップグレードされます。

- [APPEND_PRESET_LOCAL_PLUGINS](/welcome/getting-started/env#append_preset_local_plugins)：未アクティブなプレセットプラグインを追加するために使用します。
- [APPEND_PRESET_BUILT_IN_PLUGINS](/welcome/getting-started/env#append_preset_built_in_plugins)：組み込みのデフォルトでインストールされるプラグインを追加するために使用します。

:::warning
- プリセットプラグインの環境変数を設定した後は、`nocobase install` または `nocobase upgrade` コマンドを実行する必要があります。そうしないと、プラグインは自動的に追加またはインストールされません。
- `nocobase install` または `nocobase upgrade` を実行する際は、プラグインがローカルにダウンロードされ、`node_modules` ディレクトリ内に存在することを確認してください。プラグインの具体的な情報については、[プラグインの組織方法](/development/plugin)を参照してください。
:::

### 例

#### 1. 以下のプラグインをプリセットプラグインリストに追加し、デフォルトで無効にします。

```bash
APPEND_PRESET_LOCAL_PLUGINS=@nocobase/plugin-data-source-external-postgres,@nocobase/plugin-data-source-external-mysql,@nocobase/plugin-data-source-external-mariadb
```

#### 2. プリセットプラグインは、依存関係として宣言することをお勧めします。プロジェクトディレクトリの `package.json` に追加してください。

`yarn add` コマンドを使用して、プラグイン宣言を直接追加し、ダウンロードできます。

```bash
yarn add @nocobase/plugin-data-source-external-postgres @nocobase/plugin-data-source-external-mysql @nocobase/plugin-data-source-external-mariadb -W
```

または、手動で `package.json` に記入し、その後 `yarn install` でプラグインをダウンロードしてください。

```ts
{
  "dependencies": {
    "@nocobase/plugin-data-source-external-postgres": "0.21.0-alpha.15",
    "@nocobase/plugin-data-source-external-mysql": "0.21.0-alpha.15",
    "@nocobase/plugin-data-source-external-mariadb": "0.21.0-alpha.15"
  }
}
```

#### 3. 最後に、`nocobase install` または `nocobase upgrade` コマンドを実行することをお忘れなく。

インストールまたは再インストール

```bash
# インストール
yarn nocobase install
# 再インストール
yarn nocobase install -f
```

アプリケーションが既にインストールされている場合は、アップグレード操作を実行してください。

```bash
yarn nocobase upgrade
```

