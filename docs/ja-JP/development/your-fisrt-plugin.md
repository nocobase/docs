# 最初のプラグインを作成する

始める前に、NocoBaseをインストールする必要があります：

- [create-nocobase-app インストール](/welcome/getting-started/installation/create-nocobase-app)
- [Git ソースコードインストール](/welcome/getting-started/installation/git-clone)

NocoBaseをインストールしたら、プラグイン開発の旅を始めることができます。

## プラグインの作成

CLIを使用して空のプラグインを迅速に作成します。コマンドは以下の通りです：

```bash
yarn pm create @my-project/plugin-hello
```

プラグインのディレクトリは `./packages/plugins/@my-project/plugin-hello` で、プラグインのディレクトリ構造は次のようになります：

```bash
|- /packages/plugins/@my-project/plugin-hello
  |- /src
    |- /client      # プラグインクライアントコード
    |- /server      # プラグインサーバーコード
  |- client.d.ts
  |- client.js
  |- package.json   # プラグインパッケージ情報
  |- server.d.ts
  |- server.js
```

プラグイン管理画面にアクセスし、追加したばかりのプラグインを確認します。デフォルトのアドレスは http://localhost:13000/admin/pm/list/local/ です。

<img src="https://nocobase.oss-cn-beijing.aliyuncs.com/b04d16851fc1bbc2796ecf8f9bc0c3f4.png" />

作成したプラグインがプラグイン管理者に表示されない場合は、 `pm add` コマンドを使用して手動で追加できます。

```bash
yarn pm add @my-project/plugin-hello
```

## コレクションファイルの作成

プラグイン内にコレクションファイルを新規作成します。ファイル名は `./src/server/collections/hello.ts` とし、内容は以下の通りです：

```ts
import { defineCollection } from '@nocobase/database';

export default defineCollection({
  name: 'hello',
  fields: [{ type: 'string', name: 'name' }],
});
```

次に、 `./src/server/plugin.ts` ファイルを変更します。内容は以下の通りです：

```ts
import { Plugin } from '@nocobase/server';

export class PluginHelloServer extends Plugin {
  async afterAdd() {}

  async beforeLoad() {}

  async load() {
    // これは例示であり、helloコレクションのすべての操作を公開することを示しています
    this.app.acl.allow('hello', '*', 'public');
  }

  async install() {}

  async afterEnable() {}

  async afterDisable() {}

  async remove() {}
}

export default PluginHelloServer;
```

## プラグインの有効化

**コマンドによる操作**

```bash
yarn pm enable @my-project/plugin-hello
```

**インターフェースによる操作**

プラグイン管理画面にアクセスし、追加したプラグインを確認して「有効化」をクリックします。プラグイン管理者ページのデフォルトは http://localhost:13000/admin/pm/list/local/ です。

<img src="https://nocobase.oss-cn-beijing.aliyuncs.com/7b7df26a8ecc32bb1ebc3f99767ff9f9.png" />

:::info{title="ヒント"}
プラグイン内で設定されたコレクションは、プラグインが有効化されると自動的にデータベースと同期され、対応するデータテーブルとフィールドが生成されます。プラグインがすでに有効化されている場合、データテーブルの同期問題を解決するために、アップグレードコマンド `yarn nocobase upgrade` を実行する必要があります。
:::

## プラグインのデバッグ

アプリケーションが起動していない場合は、まずアプリケーションを起動する必要があります。

```bash
# 開発用
yarn dev

# 本番用
yarn build
yarn start
```

プラグインのhelloコレクションにデータを挿入します。

```bash
curl --location --request POST 'http://localhost:13000/api/hello:create' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "Hello world"
}'
```

helloコレクションのデータを確認します。

```bash
curl --location --request GET 'http://localhost:13000/api/hello:list'
```

## プラグインのビルドとパッケージ化

クローンしたソースコードの場合、ソースリポジトリに作成したプラグインには、全量ビルドのために `yarn build` を実行する必要があります。そうしないと、型エラーが発生します。

```bash
yarn build @my-project/plugin-hello --tar

# ステップごと
yarn build @my-project/plugin-hello
yarn nocobase tar @my-project/plugin-hello
```

パッケージ化されたプラグインのデフォルトの保存先は `storage/tar/@my-project/plugin-hello.tar.gz` です。

## 他のNocoBaseアプリケーションにアップロード

バージョンv0.14以上のみ対応しています。

<img src="https://nocobase.oss-cn-beijing.aliyuncs.com/8aa8a511aa8c1e87a8f7ee82cf8a1359.gif" />

