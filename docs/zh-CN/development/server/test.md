# 测试

测试基于 [Jest](https://jestjs.io/) 测试框架。为了方便的编写测试，提供了 `mockDatabase()` 和 `mockServer()` 用于数据库和服务端应用的测试。

:::warning
测试的环境变量在 `.env.test` 文件里配置，建议使用独立的测试数据库进行测试。
:::

## `mockDatabase()`

默认提供一种完全隔离的 db 测试环境

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

提供模拟的服务端应用实例，对应的 app.db 为 `mockDatabase()` 实例，同时还提供了便捷的 `app.agent()` 用于测试 HTTP API，针对 NocoBase 的 Resource Action 还封装了 `app.agent().resource()` 用于测试资源的 Action。

```ts
import { MockServer, mockServer } from '@nocobase/test';

describe('test example', () => {
  let app: MockServer;

  beforeEach(async () => {
    app = mockServer({
      plugins: ['acl', 'users', 'collection-manager', 'error-handler'],
    });
    // 这里可以按需加一些自定义逻辑
    await app.quickstart({
      // 运行测试前，清空数据库
      clean: true,
    });
  });

  afterEach(async () => {
    // 运行测试后，清空数据库
    await app.destroy();
    // 只停止不清空数据库
    await app.stop();
  });

  test('case1', async () => {
    await app.agent().resource('').get();
    await app.agent().resource('').list();
    await app.agent().get('');
    await app.agent().post('');
  });
});
```

## 一些可能前置的应用流程

### 先安装再启动

终端命令行

```bash
yarn nocobase install
yarn start
```

前置的测试流程

```ts
const app = mockServer();
await app.runCommand('install');
await app.runCommand('start');
```

### 先启动再安装

终端命令行

```bash
yarn start # 常驻内存
# 另一个终端里执行
yarn nocobase install
```

前置的测试流程

```ts
const app = mockServer();
await app.runCommand('start');
await app.runCommand('install');
```

### 快速启动（自动安装或升级）

终端命令行

```bash
yarn start --quickstart
```

前置的测试流程

```ts
const app = mockServer();
await app.runCommand('start', '--quickstart');
```

### 对已安装启动的应用进行重装

终端命令行

```bash
yarn start --quickstart
# 另一个终端里执行
yarn nocobase install -f
```

前置的测试流程

```ts
const app = mockServer();
await app.runCommand('start', '--quickstart');
await app.runCommand('install', '-f');
```

### 升级应用（启动前）

终端命令行

```bash
yarn nocobase upgrade
yarn start
```

前置的测试流程

```ts
const app = mockServer();
await app.runCommand('upgrade', '-f');
await app.runCommand('start', '--quickstart');
```

### 升级应用（启动后）

```bash
yarn start # 常驻内存
# 另一个终端里执行
yarn nocobase upgrade
```

前置的测试流程

```ts
const app = mockServer();
await app.runCommand('start', '--quickstart');
await app.runCommand('upgrade', '-f');
```

### 激活插件

终端命令行

```bash
yarn start --quickstart
yarn pm enable @my-project/plugin-hello
```

前置的测试流程

```ts
const app = mockServer();
await app.runCommand('start', '--quickstart');
await app.runCommand('pm', 'enable', '@my-project/plugin-hello');
```

### 禁用插件

终端命令行

```bash
yarn start --quickstart
yarn pm disable @my-project/plugin-hello
```

前置的测试流程

```ts
const app = mockServer();
await app.runCommand('start', '--quickstart');
await app.runCommand('pm', 'disable', '@my-project/plugin-hello');
```
