# プロジェクトディレクトリ構造

[Git ソースコード](/welcome/getting-started/installation/git-clone) または [create-nocobase-app](/welcome/getting-started/installation/create-nocobase-app) で作成された NocoBase アプリケーションのディレクトリ構造は同じで、以下のようになります：

```bash
├── my-nocobase-app
  ├── packages        # 開発中のパッケージ
    ├── plugins       # 開発中のプラグイン
  ├── storage         # データベースファイル、添付ファイル、キャッシュなどを保存
    ├── backups       # バックアップファイルのディレクトリ
    ├── plugins       # プラグイン（コンパイル済み）
    ├── tar           # yarn build --tar の保存先
    ├── uploads       # ローカルストレージのディレクトリ
  ├── .env            # 環境変数
  ├── .env.e2e        # e2e テスト用の環境変数
  ├── .env.test       # 単体テスト用の環境変数
  ├── lerna.json
  ├── package.json
  ├── playwright.config.ts
  ├── tsconfig.json
  ├── tsconfig.server.json
  ├── vitest.config.mts
```

## プラグインの所在ディレクトリ

開発中のプラグインは `packages/plugins` ディレクトリに保存され、npm パッケージ形式で構成されています。例は以下の通りです：

```bash
|- /packages/
  |- /plugins/
    |- /@nocobase/
      |- /plugin-hello1/
      |- /plugin-hello2/
    |- /my-nocobase-plugin-hello1/
    |- /my-nocobase-plugin-hello2/
```

インターフェースから追加されたプラグインは `storage/plugins` ディレクトリに保存され、npm パッケージ形式で構成されています。例は以下の通りです：

```bash
|- /storage/
  |- /plugins/
    |- /@nocobase/
      |- /plugin-hello1/
      |- /plugin-hello2/
    |- /my-nocobase-plugin-hello1/
    |- /my-nocobase-plugin-hello2/
```

内蔵のプラグインや `package.json` の `dependencies` に宣言されているプラグインは `node_modules` にあります。例は以下の通りです：

```bash
|- /node_modules/
  |- /@nocobase/
    |- /plugin-acl/
    |- /plugin-auth/
```

## プラグインのディレクトリ構造

`yarn pm create @my-project/plugin-hello` を使用して空のプラグインを迅速に作成できます。ディレクトリ構造は以下の通りです：

```bash
|- /packages/plugins/@my-project/plugin-hello
  |- /dist             # ビルド成果物
  |- /src
    |- /client         # プラグインのクライアントコード
      |- plugin.ts     # プラグインクラス
      |- index.ts      # クライアントエントリ
    |- /locale         # 規約ディレクトリ、フロントエンドとバックエンドで共有する多言語ファイルのディレクトリ
    |- /swagger        # 規約ディレクトリ、Swagger ドキュメント
    |- /server
      |- collections    # 規約ディレクトリ、プラグインのデータベース設定
      |- commands       # 規約ディレクトリ、カスタムコマンド
      |- migrations     # 規約ディレクトリ、マイグレーションファイル
      |- plugin.ts      # プラグインクラス
      |- index.ts       # サーバーエントリ
    |- index.ts
  |-.npmignore          # プラグインパッケージを公開する際に無視すべきファイルやディレクトリ
  |- client.d.ts
  |- client.js
  |- package.json       # プラグインパッケージの情報
  |- server.d.ts
  |- server.js
```

