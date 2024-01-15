# v0.19：2024-01-08

## 新特性

### 遥测

- 开发文档：https://docs-cn.nocobase.com/development/server/telemetry
- 内核 API：https://docs-cn.nocobase.com/api/telemetry/telemetry
- Prometheus 插件：https://docs-cn.nocobase.com/plugins/telemetry-prometheus

### 应用的备份和还原

- 插件文档：https://docs-cn.nocobase.com/plugins/backup-restore

## 内核优化

### 命令行的优化

NocoBase 0.19 及以上版本，插件自定义的命令必须放在插件的 `src/server/commands/*.ts` 目录下，内容如下：

```typescript
export default function (app) {
  app.command('custom1').action();
}
```

命令行的执行流程：

![20240115141900](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240115141900.png)

Command 的特殊配置

- `ipc()` 当 app 运行时，命令行通过 ipc 发送指令，操作正在运行的 app 实例，未配置 ipc() 时，会新建一个应用实例，再执行操作（不会干扰正在运行的 app 实例）
- `auth()` 进行数据库检验，如果数据库配置不正确，不会执行该命令
- `preload()` 是否预先加载应用配置，也就是执行 app.load()

可以根据命令的实际用途进行配置，例子如下：

```typescript
app.command('a').ipc().action();
app.command('a').auth().action();
app.command('a').preload().action();
```

### 安装流程优化

![20240115141914](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240115141914.png)

### 启动流程优化

![20240115141922](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240115141922.png)

### 升级流程优化

![20240115141933](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240115141933.png)

升级的 migrations 有 beforeLoad、afterSync 和 afterLoad 之分：

- beforeLoad：在各模块加载前执行，分为三个阶段：

  - 内核模块加载前
  - preset 插件加载前
  - 其他插件加载前

- afterSync：在数据表配置与数据库同步之后，分为三个阶段：

  - 内核表与数据库同步之后
  - preset 插件的表与数据库同步之后
  - 其他插件的表与数据库同步后

- afterLoad：应用全部加载之后才执行

```typescript
export default class extends Migration {
  // 运行的时机
  on = 'beforeLoad';
  // 满足以下应用版本号时才执行
  appVersion = '<=0.13.0-alpha.5';
  // 满足以下插件版本号时才执行
  pluginVersion = '<=0.13.0-alpha.5';
  // 升级脚本
  async up() {}
}
```

### 新增 create-migration 命令

创建 migration 文件

```bash
yarn nocobase create-migration -h

Usage: nocobase create-migration [options] <name>

Options:
  --pkg <pkg>  package name
  --on [on]    Options include beforeLoad, afterSync and afterLoad
  -h, --help   display help for command
```

示例

```bash
$ yarn nocobase create-migration update-ui --pkg=@nocobase/plugin-client

2024-01-07 17:33:13 [info ] add app main into supervisor
2024-01-07 17:33:13 [info ] migration file in /nocobase/packages/plugins/@nocobase/plugin-client/src/server/migrations/20240107173313-update-ui.ts
✨  Done in 5.02s.
```

将在插件包 `@nocobase/plugin-client` 的 `src/server/migrations` 里生成一个 migration 文件，名为 `20240107173313-update-ui.ts`，初始内容如下：

```typescript
import { Migration } from '@nocobase/server';

export default class extends Migration {
  on = 'afterLoad'; // 'beforeLoad' | 'afterSync' | 'afterLoad'
  appVersion = '<0.18.0-alpha.10';

  async up() {
    // coding
  }
}
```

### 插件的约定式目录

```bash
|- /plugin-sample-hello
  |- /dist             # 插件编译之后的目录
  |- /src              # 插件源码
    |- /client
      |- plugin.ts
      |- index.ts      # 客户端入口
    |- /locale         # 约定式目录，前后端共享的多语言文件目录
    |- /swagger        # 约定式目录，swagger 文档
    |- /server
      |- collections   # 约定式目录，插件的数据表配置
      |- commands      # 约定式目录，自定义命令
      |- migrations    # 约定式目录，迁移文件
      |- plugin.ts     # 插件类
      |- index.ts      # 服务端入口
    |- index.ts
  |-.npmignore
  |- client.d.ts
  |- client.js
  |- package.json
  |- server.d.ts
  |- server.js
```

### 测试流程优化

提供了更易用的 createMockServer、startMockServer 方法用于编写测试用例

- `createMockServer()` 快速创建并启动一个应用
- `startMockServer()` 快速启动一个应用（不会重新安装）

```typescript
import { createMockServer } from '@nocobase/server';

describe('test example', () => {
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
    // coding...
  });
});
```

## 不兼容的变化

### collections、commands、migrations 配置变更为约定式目录

示例一：通过 importCollections 加载的 collections，代码直接删掉，collections 配置文件必须放在 `src/server/collections` 目录下

```diff
export class AuthPlugin extends Plugin {
  async load() {
-   await this.importCollections(resolve(__dirname, 'collections'));
  }
}
```

示例二：通过 this.db.import 加载的 collections，代码直接删掉，collections 配置文件必须放在 `src/server/collections` 目录下

```diff
export class AuthPlugin extends Plugin {
  async load() {
-   await this.db.import({
-     directory: resolve(__dirname, 'collections')
-   });
  }
}
```

示例三：通过 db.collection() 定义的 collection，建议放到 `src/server/collections` 目录下

```diff
export class AuthPlugin extends Plugin {
  async load() {
-   this.db.collection({
-     name: 'examples',
-   });
  }
}
```

新增 `src/server/collections/examples.ts` 文件，内容如下：

```typescript
import { defineCollection } from '@nocobase/database';

export default defineCollection({
  name: 'examples',
});
```

示例四：移除 db.addMigrations()，migration 文件放置 `src/server/migrations` 目录下

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

示例五：自定义命令行

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

新增 `src/server/collections/echo.ts` 文件，内容如下：

```typescript
export default function(app) {
  app
    .command('echo')
    .option('-v, --version');
    .action(async ([options]) => {
      console.log('Hello World!');
      if (options.version) {
        console.log('Current version:', await app.version.get());
      }
    });
}
```
