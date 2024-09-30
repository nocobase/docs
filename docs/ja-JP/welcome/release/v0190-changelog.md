# v0.19：2024-01-08

## 新機能

### テレメトリ

- 開発ドキュメント：[テレメトリ開発ドキュメント](https://docs-cn.nocobase.com/development/server/telemetry)
- コアAPI：[テレメトリAPI](https://docs-cn.nocobase.com/api/telemetry/telemetry)
- Prometheusプラグイン：[Prometheusプラグイン](https://docs-cn.nocobase.com/plugins/telemetry-prometheus)

### アプリのバックアップとリストア

- プラグインドキュメント：[バックアップとリストアプラグイン](https://docs-cn.nocobase.com/plugins/backup-restore)

## コア最適化

### コマンドラインの最適化

NocoBase 0.19以降、プラグインカスタムコマンドはプラグインの `src/server/commands/*.ts` ディレクトリに配置する必要があります。内容は以下の通りです：

```typescript
export default function(app) {
  app.command('custom1').action();
}
```

コマンドラインの実行フロー：

![20240115141900](https://static-docs.nocobase.com/20240115141900.png)

#### Commandの特別な設定

- `ipc()`：アプリが実行中のとき、コマンドラインはipcを通じて指令を送信し、実行中のアプリインスタンスを操作します。`ipc()`が設定されていない場合は、新しいアプリインスタンスが作成され、操作が実行されます（実行中のアプリインスタンスには干渉しません）。
- `auth()`：データベースの検証を行います。データベース設定が正しくない場合、このコマンドは実行されません。
- `preload()`：アプリ設定を事前に読み込むかどうか、つまり`app.load()`を実行するかどうかを指定します。

コマンドの実際の用途に応じて設定可能です。例は以下の通りです：

```typescript
app.command('a').ipc().action();
app.command('a').auth().action();
app.command('a').preload().action();
```

### インストールプロセスの最適化

![20240115141914](https://static-docs.nocobase.com/20240115141914.png)

### スタートプロセスの最適化

![20240115141922](https://static-docs.nocobase.com/20240115141922.png)

### アップグレードプロセスの最適化

![20240115141933](https://static-docs.nocobase.com/20240115141933.png)

アップグレードのマイグレーションには、`beforeLoad`、`afterSync`、`afterLoad`の3つの段階があります：

- **beforeLoad**：各モジュールの読み込み前に実行され、以下の3つの段階に分かれます：

  - コアモジュールの読み込み前
  - プリセットプラグインの読み込み前
  - その他のプラグインの読み込み前

- **afterSync**：データテーブルの設定とデータベースの同期後に実行され、以下の3つの段階に分かれます：

  - コアテーブルとデータベースの同期後
  - プリセットプラグインのテーブルとデータベースの同期後
  - その他のプラグインのテーブルとデータベースの同期後

- **afterLoad**：アプリケーションがすべて読み込まれた後に実行されます。

```typescript
export default class extends Migration {
  // 実行のタイミング
  on = 'beforeLoad';
  // 以下のアプリバージョン番号を満たす場合にのみ実行
  appVersion = '<=0.13.0-alpha.5';
  // 以下のプラグインバージョン番号を満たす場合にのみ実行
  pluginVersion = '<=0.13.0-alpha.5';
  // アップグレードスクリプト
  async up() {}
}
```

### 新しい create-migration コマンドの追加

マイグレーションファイルを作成します。

```bash
yarn nocobase create-migration -h

Usage: nocobase create-migration [options] <name>

Options:
  --pkg <pkg>  パッケージ名
  --on [on]    オプションには beforeLoad、afterSync、afterLoad が含まれます
  -h, --help   コマンドのヘルプを表示
```

例

```bash
$ yarn nocobase create-migration update-ui --pkg=@nocobase/plugin-client

2024-01-07 17:33:13 [info ] スーパーバイザーにアプリのメインを追加
2024-01-07 17:33:13 [info ] マイグレーションファイルは /nocobase/packages/plugins/@nocobase/plugin-client/src/server/migrations/20240107173313-update-ui.ts にあります
✨  5.02秒で完了しました。
```

プラグインパッケージ `@nocobase/plugin-client` の `src/server/migrations` ディレクトリに、`20240107173313-update-ui.ts` という名前のマイグレーションファイルが生成されます。初期内容は以下の通りです：

```typescript
import { Migration } from '@nocobase/server';

export default class extends Migration {
  on = 'afterLoad'; // 'beforeLoad' | 'afterSync' | 'afterLoad'
  appVersion = '<0.18.0-alpha.10';

  async up() {
    // コーディング
  }
}
```

### プラグインの規約ディレクトリ

```
|- /plugin-sample-hello
  |- /dist             # プラグインコンパイル後のディレクトリ
  |- /src              # プラグインソースコード
    |- /client
      |- plugin.ts
      |- index.ts      # クライアントエントリ
    |- /locale         # 規約ディレクトリ、フロントエンドとバックエンドで共有される多言語ファイルのディレクトリ
    |- /swagger        # 規約ディレクトリ、Swaggerドキュメント
    |- /server
      |- collections   # 規約ディレクトリ、プラグインのデータテーブル設定
      |- commands      # 規約ディレクトリ、カスタムコマンド
      |- migrations    # 規約ディレクトリ、マイグレーションファイル
      |- plugin.ts     # プラグインクラス
      |- index.ts      # サーバーエントリ
    |- index.ts
  |-.npmignore
  |- client.d.ts
  |- client.js
  |- package.json
  |- server.d.ts
  |- server.js
```

### テストフローの最適化

より使いやすい `createMockServer` および `startMockServer` メソッドを提供し、テストケースの作成を容易にしました。

- `createMockServer()` アプリケーションを迅速に作成して起動します。
- `startMockServer()` アプリケーションを迅速に起動します（再インストールは行いません）。

```typescript
import { createMockServer } from '@nocobase/server';

describe('テスト例', () => {
  let app: MockServer;

  beforeEach(async () => {
    app = await createMockServer({
      plugins: ['nocobase'],
    });
  });

  afterEach(async () => {
    await app.destroy();
  });

  test('case1', async () => {
    // コーディング...
  });
});
```

## 互換性のない変更

### collections、commands、migrationsの設定が規約型ディレクトリに変更されました

例1：`importCollections`を通じて読み込まれるcollectionsは、コードを直接削除し、collections設定ファイルは`src/server/collections`ディレクトリに配置する必要があります。

```diff
export class AuthPlugin extends Plugin {
  async load() {
-   await this.importCollections(resolve(__dirname, 'collections'));
  }
}
```

例2：`this.db.import`を通じて読み込まれるcollectionsは、コードを直接削除し、collections設定ファイルは`src/server/collections`ディレクトリに配置する必要があります。

```diff
export class AuthPlugin extends Plugin {
  async load() {
-   await this.db.import({
-     directory: resolve(__dirname, 'collections')
-   });
  }
}
```

例3：`db.collection()`を通じて定義されるcollectionは、`src/server/collections`ディレクトリに配置することを推奨します。

```diff
export class AuthPlugin extends Plugin {
  async load() {
-   this.db.collection({
-     name: 'examples',
-   });
  }
}
```

新たに`src/server/collections/examples.ts`ファイルを作成し、内容は以下の通りです。

```typescript
import { defineCollection } from '@nocobase/database';

export default defineCollection({
  name: 'examples',
});
```

例4：`db.addMigrations()`を削除し、マイグレーションファイルを`src/server/migrations`ディレクトリに配置します。

```diff
export class AuthPlugin extends Plugin {
  async load() {
-   this.db.addMigrations({
-     namespace: 'auth',
-     directory: resolve(__dirname, 'migrations'),
-     context: {
-       plugin: this,
-     },
-   });
  }
}
```

例5：カスタムコマンドライン

```diff
export class MyPlugin extends Plugin {
  load() {
-   this.app
-      .command('echo')
-      .option('-v, --version');
-      .action(async ([options]) => {
-        console.log('Hello World!');
-        if (options.version) {
-          console.log('Current version:', app.getVersion());
-        }
-      });
-  }
}
```

新たに`src/server/collections/echo.ts`ファイルを作成し、内容は以下の通りです。

```typescript
export default function(app) {
  app
    .command('echo')
    .option('-v, --version')
    .action(async ([options]) => {
      console.log('こんにちは、世界！');
      if (options.version) {
        console.log('現在のバージョン:', await app.version.get());
      }
    });
}
```

