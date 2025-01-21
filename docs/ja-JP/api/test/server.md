# Server

## 概要

NocoBaseは<a href="https://vitest.dev/" target="_blank">Vitest</a>を使用してサーバーサイドのテストを行います。`@nocobase/test`は、サーバーサイドのテストのために、サービスとデータベースのMockを行うための便利なメソッドを提供します。

### 基本使用

```ts
describe('actions', () => {
  let app: MockServer;
  let db: Database;
  let agent: any;

  beforeAll(async () => {
    app = await createMockServer({
      plugins: ['acl', 'users', 'data-source-manager'],
    });
    db = app.db;
    agent = app.agent();
  });

  afterAll(async () => {
    await app.destroy();
  });
});
```

## API

### `defineConfig()`

Vitestの設定を取得します。

```ts
import { defineConfig } from '@nocobase/test/vitest.mjs';

const config = defineConfig();
```

### `mockDatabase()`

テスト用の`MockDataBase`インスタンスを作成します。

#### シグネチャ

- `mockDatabase(options: IDatabaseOptions = {}): MockDatabase`

#### 詳細

| パラメータ名 | タイプ               | 説明                                  |
| ------------ | -------------------- | ------------------------------------- |
| `options`    | `IDatabaseOptions` | [DataBase](../database/index.md)を参照 |

### `mockServer()`

`MockServer`インスタンスを作成します。

#### シグネチャ

- `mockServer(options?: ApplicationOptions): MockServer`

#### 詳細

| パラメータ名 | タイプ                 | 説明                                         |
| ------------ | ---------------------- | -------------------------------------------- |
| `options`    | `ApplicationOptions` | [Application](../server/application.md)を参照 |

### `createMockServer()`

`MockServer`インスタンスを作成し、強制インストールと起動を行います。

#### シグネチャ

```ts
createMockServer(options?: ApplicationOptions & {
    version?: string;
    beforeInstall?: BeforeInstallFn;
    skipInstall?: boolean;
    skipStart?: boolean;
}): Promise<MockServer>
```

#### 詳細

| パラメータ名                  | タイプ                 | 説明                                         |
| ----------------------------- | ---------------------- | -------------------------------------------- |
| `options`                     | `ApplicationOptions` | [Application](../server/application.md)を参照 |
| `options.version`             | `string`             | アプリケーションのバージョン番号             |
| `options.beforeInstall`       | `BeforeInstallFn`    | インストール前に実行する関数                 |
| `options.skipInstall`         | `boolean`            | 強制インストールをスキップするかどうか       |
| `options.skipStart`           | `boolean`            | アプリケーションの起動をスキップするかどうか |

### `MockServer`

`MockServer`は`Application`を継承し、テスト用のサーバーアプリケーションクラスです。

#### クラスメソッド

##### `loadAndInstall()`

アプリケーションをロードしてインストールします。

##### `cleanDb()`

データベースをクリアします。

##### `quickstart()`

`nocobase start --quickstart`を実行します。

##### `destroy()`

アプリケーションを破棄します。

##### `agent()`

テストケースでAPIリクエストを送信するために使用します。

**シグネチャ**

- `agent(): ExtendedAgent`

**タイプ**

```ts
interface ExtendedAgent extends SuperAgentTest {
  login: (user: any) => ExtendedAgent;
  loginUsingId: (userId: number) => ExtendedAgent;
  resource: (name: string, resourceOf?: any) => Resource;
}
```

**詳細**

- `SuperAgentTest`

<a href="https://github.com/ladjs/superagent" target="_blank">superagent</a>を参照。

- `login()`

指定されたユーザーModelでログインします。

- `loginUsingId()`

指定されたユーザーIDでログインします。

- `resource()`

指定されたリソースを取得します。

| パラメータ名       | タイプ     | 説明                                                                                 |
| ------------------ | ---------- | ------------------------------------------------------------------------------------ |
| `name`             | `string` | 1. リソース名、例: `a` <br /> 2. リソースの関連オブジェクト名、例: `a.b`                       |
| `resourceOf`       | `any`    | `resource`がリソースの関連オブジェクト名の場合、リソースの主キー値。例: `a.b`の場合、`a`の主キー値 |

### sleep