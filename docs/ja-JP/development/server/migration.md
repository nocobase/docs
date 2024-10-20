# アップグレードスクリプト

プラグインの更新過程で互換性のない変更が発生することがあります。これらの互換性のないアップグレードスクリプトは、migrationファイルを作成することで処理できます。`nocobase upgrade`コマンドによってトリガーされる関連プロセスは以下の通りです。

<img src="./image-2.png" style="max-width: 800px; width: 800px;">

アップグレードのmigrationsには、`beforeLoad`、`afterSync`、`afterLoad`の三種類があります：

- **beforeLoad**：各モジュールの読み込み前に実行され、三つの段階に分かれます：
  - コアモジュールの読み込み前
  - presetプラグインの読み込み前
  - その他のプラグインの読み込み前
- **afterSync**：データテーブルの設定とデータベースの同期後に実行され、三つの段階に分かれます：
  - コアテーブルとデータベースの同期後
  - presetプラグインのテーブルとデータベースの同期後
  - その他のプラグインのテーブルとデータベースの同期後
- **afterLoad**：アプリケーションの全てが読み込まれた後に実行されます

## migrationファイルの作成

`create-migration`コマンドを使用してmigrationファイルを作成します。

```bash
yarn nocobase create-migration -h

Usage: nocobase create-migration [options] <name>

Options:
  --pkg <pkg>  パッケージ名
  --on [on]    オプションにはbeforeLoad、afterSync、afterLoadが含まれます
  -h, --help   コマンドのヘルプを表示
```

### 例

```bash
$ yarn nocobase create-migration update-ui --pkg=@nocobase/plugin-client

2024-01-07 17:33:13 [info] supervisorにアプリメインを追加     
2024-01-07 17:33:13 [info] migrationファイルは/nocobase/packages/plugins/@nocobase/plugin-client/src/server/migrations/20240107173313-update-ui.tsに生成されました
✨  5.02秒で完了しました。
```

プラグインパッケージ`@nocobase/plugin-client`の`src/server/migrations`に、`20240107173313-update-ui.ts`という名前のmigrationファイルが生成され、初期内容は以下の通りです：

```ts
import { Migration } from '@nocobase/server';

export default class extends Migration {
  on = 'afterLoad'; // 'beforeLoad' | 'afterSync' | 'afterLoad'
  appVersion = '<0.19.0-alpha.3';

  async up() {
    // コーディング
  }
}
```

## migrationのトリガー

`nocobase upgrade`コマンドを使用してトリガーします。

```bash
$ yarn nocobase upgrade
```

## migrationのテスト

```ts
import { createMockServer, MockServer } from '@nocobase/test';

describe('テスト例', () => {
  let app: MockServer;

  beforeEach(async () => {
    app = await createMockServer({
      plugins: ['my-plugin'], // プラグイン
      version: '0.18.0-alpha.5', // アップグレード前のバージョン
    });
  });

  afterEach(async () => {
    await app.destroy();
  });

  test('ケース1', async () => {
    await app.runCommand('upgrade');
    // コーディング...
  });
});
```

