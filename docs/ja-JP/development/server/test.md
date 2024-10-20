# テスト

テストは [Jest](https://jestjs.io/) テストフレームワークに基づいています。テストを簡単に作成するために、`mockDatabase()` と `mockServer()` を提供して、データベースとサーバーアプリケーションのテストを行います。

:::warning
テストの環境変数は `.env.test` ファイルに設定されており、独立したテストデータベースの使用をお勧めします。
:::

## `mockDatabase()`

完全に隔離されたデータベーステスト環境をデフォルトで提供します。

```ts
import { mockDatabase } from '@nocobase/test';

describe('my db suite', () => {
  let db;

  beforeEach(async () => {
    db = mockDatabase();
    db.collection({
      name: 'posts',
      fields: [
        {
          type: 'string',
          name: 'title',
        },
      ],
    });
    await db.sync();
  });

  afterEach(async () => {
    await db.close();
  });

  test('my case', async () => {
    const repository = db.getRepository('posts');
    const post = await repository.create({
      values: {
        title: 'hello',
      },
    });

    expect(post.get('title')).toEqual('hello');
  });
});
```

## `mockServer()`

モックサーバーアプリケーションのインスタンスを提供し、対応する `app.db` は `mockDatabase()` インスタンスであり、HTTP API テスト用の便利な `app.agent()` も提供されます。NocoBase のリソースアクションに対しては、リソースのアクションをテストするために `app.agent().resource()` がラップされています。

```ts
import { MockServer, mockServer } from '@nocobase/test';

// 各プラグインの最小限のインストールに必要なプラグインは異なるため、プラグインは自身の状況に応じて必須プラグインを追加してください。
async function createApp(options: any = {}) {
  const app = mockServer({
    ...options,
    plugins: [
      'acl',
      'users',
      'collection-manager',
      'error-handler',
      ...options.plugins,
    ],
    // その他の設定パラメータも存在します。
  });
  // 特別な処理が必要なロジックを追加できます。例えば、テストに必要なデータテーブルをインポートするなど。
  return app;
}

// 大半のテストではアプリを起動する必要があるため、一般的な起動方法を提供することもできます。
async function startApp() {
  const app = await createApp();
  await app.quickstart({
    // テスト実行前にデータベースをクリアします。
    clean: true,
  });
  return app;
}

describe('test example', () => {
  let app: MockServer;

  beforeEach(async () => {
    app = await startApp();
  });

  afterEach(async () => {
    // テスト実行後にデータベースをクリアします。
    await app.destroy();
    // 停止するだけでデータベースはクリアしません。
    await app.stop();
  });

  test('case1', async () => {
    // コーディング...
  });
});
```

## よく使うアプリの流れ

異なるフローをテストする必要がある場合は、以下の例に従って関連コマンドを実行できます。

### 先にインストールしてから起動

ターミナルコマンド

```bash
yarn nocobase install
yarn start
```

前提となるテストフロー

```ts
const app = mockServer();
await app.runCommand('install');
await app.runCommand('start');
```

### 先に起動してからインストール

ターミナルコマンド

```bash
yarn start # メモリに常駐
# 別のターミナルで実行
yarn nocobase install
```

前提となるテストフロー

```ts
const app = mockServer();
await app.runCommand('start');
await app.runCommand('install');
```

### クイックスタート（自動インストールまたはアップグレード）

ターミナルコマンド

```bash
yarn start --quickstart
```

前提となるテストフロー

```ts
const app = mockServer();
await app.runCommand('start', '--quickstart');
```

### 既にインストールされたアプリを再インストール

ターミナルコマンド

```bash
yarn start --quickstart
# 別のターミナルで実行
yarn nocobase install -f
```

前提となるテストフロー

```ts
const app = mockServer();
await app.runCommand('start', '--quickstart');
await app.runCommand('install', '-f');
```

### アプリをアップグレード（起動前）

ターミナルコマンド

```bash
yarn nocobase upgrade
yarn start
```

前提となるテストフロー

```ts
const app = mockServer();
await app.runCommand('upgrade', '-f');
await app.runCommand('start', '--quickstart');
```

### アプリをアップグレード（起動後）

```bash
yarn start # メモリに常駐
# 別のターミナルで実行
yarn nocobase upgrade
```

前提となるテストフロー

```ts
const app = mockServer();
await app.runCommand('start', '--quickstart');
await app.runCommand('upgrade', '-f');
```

### プラグインの有効化

ターミナルコマンドライン

```bash
yarn start --quickstart
yarn pm enable @my-project/plugin-hello
```

前提となるテストフロー

```ts
const app = mockServer();
await app.runCommand('start', '--quickstart');
await app.runCommand('pm', 'enable', '@my-project/plugin-hello');
```

### プラグインの無効化

ターミナルコマンドライン

```bash
yarn start --quickstart
yarn pm disable @my-project/plugin-hello
```

前提となるテストフロー

```ts
const app = mockServer();
await app.runCommand('start', '--quickstart');
await app.runCommand('pm', 'disable', '@my-project/plugin-hello');
```

