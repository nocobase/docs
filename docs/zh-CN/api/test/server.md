# Server

## 概览

NocoBase 基于 <a href="https://vitest.dev/" target="_blank">Vitest</a> 进行服务端测试。 `@nocobase/test` 为服务端测试提供了一些便捷的方法用于 Mock 服务和数据库。

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

获取 vitest 配置。

```ts
import { defineConfig } from '@nocobase/test/vitest.mjs';

const config = defineConfig();
```

### `mockDatabase()`

创建一个用于测试的 `MockDataBase` 实例。

#### 签名

- `mockDatabase(options: IDatabaseOptions = {}): MockDatabase`

#### 详细信息

| 参数名    | 类型               | 描述                                  |
| --------- | ------------------ | ------------------------------------- |
| `options` | `IDatabaseOptions` | 参考 [DataBase](../database/index.md) |

### `mockServer()`

创建一个 `MockServer` 实例。

#### 签名

- `mockServer(options?: ApplicationOptions): MockServer`

#### 详细信息

| 参数名    | 类型                 | 描述                                         |
| --------- | -------------------- | -------------------------------------------- |
| `options` | `ApplicationOptions` | 参考 [Application](../server/application.md) |

### `createMockServer()`

创建一个 `MockServer` 实例，执行强制安装并启动。

#### 签名

```ts
createMockServer(options?: ApplicationOptions & {
    version?: string;
    beforeInstall?: BeforeInstallFn;
    skipInstall?: boolean;
    skipStart?: boolean;
}): Promise<MockServer>
```

#### 详细信息

| 参数名                  | 类型                 | 描述                                         |
| ----------------------- | -------------------- | -------------------------------------------- |
| `options`               | `ApplicationOptions` | 参考 [Application](../server/application.md) |
| `options.version`       | `string`             | 应用版本号                                   |
| `options.beforeInstall` | `BeforeInstallFn`    | 安装前执行函数                               |
| `options.skipInstall`   | `boolean`            | 是否跳过强制安装                             |
| `options.skipStart`     | `boolean`            | 是否跳过应用启动                             |

### `MockServer`

`MockServer` 继承自 `Application` ，是用于测试的服务端应用类。

#### 类方法

##### `loadAndInstall()`

加载并安装应用。

##### `cleanDb()`

清空数据库。

##### `quickstart()`

执行 `nocobase start --quickstart`.

##### `destroy()`

销毁应用。

##### `agent()`

用于在测试用例中发起接口请求。

**签名**

- `agent(): ExtendedAgent`

**类型**

```ts
interface ExtendedAgent extends SuperAgentTest {
  login: (user: any) => ExtendedAgent;
  loginUsingId: (userId: number) => ExtendedAgent;
  resource: (name: string, resourceOf?: any) => Resource;
}
```

**详细信息**

- `SuperAgentTest`

参考 <a href="https://github.com/ladjs/superagent" target="_blank">superagent</a>.

- `login()`

使用某个用户 Model 登录。

- `loginUsingId()`

使用某个用户 ID 登录。

- `resource()`

获取某个资源。

| 参数名       | 类型     | 描述                                                                                 |
| ------------ | -------- | ------------------------------------------------------------------------------------ |
| `name`       | `string` | 1. 资源名称，比如 `a` <br /> 2. 资源的关联对象名称，比如 `a.b`                       |
| `resourceOf` | `any`    | 当 `resource` 为资源的关联对象名称时，资源的主键值。比如 `a.b` 时，代表 `a` 的主键值 |

### sleep
