# @nocobase/cli

NocoBase CLI 旨在帮助你开发、构建和部署 NocoBase 应用。

<Alert>

NocoBase CLI 支持 ts-node 和 node 两种运行模式

- ts-node 模式（默认）：用于开发环境，支持实时编译，但是响应较慢
- node 模式：用于生产环境，响应迅速，但需要先执行 `yarn nocobase build` 将全部源码进行编译

</Alert>

## 使用说明

```bash
$ yarn nocobase -h

Usage: nocobase [command] [options]

Options:
  -h, --help

Commands:
  console
  db:auth               校验数据库是否连接成功
  db:sync               通过 collections 配置生成相关数据表和字段
  install               安装
  start                 生产环境启动应用
  build                 编译打包
  clean                 删除编译之后的文件
  dev                   启动应用，用于开发环境，支持实时编译
  doc                   文档开发
  test                  测试
  umi
  upgrade               升级
  migrator              数据迁移
  pm                    插件管理器
  help
```

## 在脚手架里应用

应用脚手架 `package.json` 里的 `scripts` 如下：

```json
{
  "scripts": {
    "dev": "nocobase dev",
    "start": "nocobase start",
    "clean": "nocobase clean",
    "build": "nocobase build",
    "test": "nocobase test",
    "pm": "nocobase pm",
    "postinstall": "nocobase postinstall"
  }
}
```

## 命令行扩展

NocoBase CLI 基于 [commander](https://github.com/tj/commander.js) 构建，你可以自由扩展命令，扩展的 command 可以写在 `app/server/index.ts` 里：

```ts
const app = new Application(config);

app.command('hello').action(() => {});
```

或者，写在插件里：

```ts
class MyPlugin extends Plugin {
  beforeLoad() {
    this.app.command('hello').action(() => {});
  }
}
```

终端运行

```bash
$ yarn nocobase hello
```

## 内置命令行

按使用频率排序

### `dev`

开发环境下，启动应用，代码实时编译。

<Alert>
NocoBase 未安装时，会自动安装（参考 install 命令）
</Alert>

```bash
Usage: nocobase dev [options]

Options:
  -p, --port [port]
  --client
  --server
  -h, --help
```

示例

```bash
# 启动应用，用于开发环境，实时编译
yarn nocobase dev
# 只启动服务端
yarn nocobase dev --server
# 只启动客户端
yarn nocobase dev --client
```

### `start`

生产环境下，启动应用，代码需要 yarn build。

<Alert>

- NocoBase 未安装时，会自动安装（参考 install 命令）
- 源码有修改时，需要重新打包（参考 build 命令）

</Alert>

```bash
$ yarn nocobase start -h

Usage: nocobase start [options]

Options:
  -p, --port
  -s, --silent
  -h, --help
```

示例

```bash
# 启动应用，用于生产环境，
yarn nocobase start
```

### `install`

安装

```bash
$ yarn nocobase install -h

Usage: nocobase install [options]

Options:
  -f, --force
  -c, --clean
  -s, --silent
  -l, --lang [lang]
  -e, --root-email <rootEmail>
  -p, --root-password <rootPassword>
  -n, --root-nickname [rootNickname]
  -h, --help
```

示例

```bash
# 初始安装
yarn nocobase install -l ja-JP -e admin@nocobase.com -p admin123
# 删除 NocoBase 的所有数据表，并重新安装
yarn nocobase install -f -l ja-JP -e admin@nocobase.com -p admin123
# 清空数据库，并重新安装
yarn nocobase install -c -l ja-JP -e admin@nocobase.com -p admin123
```

<Alert>

`-f/--force` 和 `-c/--clean` 的区别

- `-f/--force` 删除 NocoBase 的数据表
- `-c/--clean` 清空数据库，所有数据表都会被删除

</Alert>

### `upgrade`

升级

```bash
yarn nocobase upgrade
```

### `test`

测试，用法与 vitest 一致，和直接运行 vitest 的区别：

- 指定路径时，可以自动识别前后端，前端的必须包含 `/client/`
- 后端测试默认为 `--single-thread`，如果要关掉可以加上 `--single-thread=false`
- 默认为 `--run`，测试运行完退出进程，如果需要监听，加上 `--watch`

```bash
$ nocobase test -h
vitest/1.0.4

Usage:
  $ vitest [...filters]
```

示例

```bash
# 运行全部测试，前后端并行两个 vitest 进程
yarn test

# 运行 client 相关测试用例
yarn test --client
# 等价于
yarn cross-env TEST_ENV=client-side vitest

# 运行 server 相关测试用例
yarn test --server
# 等价于
yarn cross-env TEST_ENV=server-side vitest

# 指定目录或文件
yarn test your/path/src/__tests__/test-file.test.ts
# 前端文件必须包含 /client/
yarn test your/path/client/src/__tests__/test-file.test.ts
```

### `build`

代码部署到生产环境前，需要将源码编译打包，如果代码有修改，也需要重新构建。

```bash
# 所有包
yarn nocobase build
# 指定包
yarn nocobase build app/server app/client
```

### `clean`

删除编译之后的文件

```bash
yarn clean
# 等同于
yarn rimraf -rf packages/*/*/{lib,esm,es,dist}
```

### `doc`

文档开发

```bash
# 启动文档
yarn doc  --lang=ja-JP # 等同于 yarn doc dev
# 构建文档，默认输出到 ./docs/dist/ 目录下
yarn doc build
# 查看 dist 输出的文档最终效果
yarn doc serve --lang=ja-JP
```

### `db:auth`

校验数据库是否连接成功

```bash
$ yarn nocobase db:auth -h

Usage: nocobase db:auth [options]

Options:
  -r, --retry [retry]   重试次数
  -h, --help
```

### `db:sync`

通过 collections 配置生成数据表和字段

```bash
$ yarn nocobase db:sync -h

Usage: nocobase db:sync [options]

Options:
  -f, --force
  -h, --help   display help for command
```

### `migrator`

数据迁移

```bash
$ yarn nocobase migrator

Positional arguments:
  <command>
    up        Applies pending migrations
    down      Revert migrations
    pending   Lists pending migrations
    executed  Lists executed migrations
    create    Create a migration file
```

### `pm`

插件管理器

```bash
# 创建插件
yarn pm create hello
# 注册插件
yarn pm add hello
# 激活插件
yarn pm enable hello
# 禁用插件
yarn pm disable hello
# 删除插件
yarn pm remove hello
```

未实现

```bash
# 升级插件
yarn pm upgrade hello
# 发布插件
yarn pm publish hello
```

### `umi`

`app/client` 基于 [umi](https://umijs.org/) 构建，可以通过 `nocobase umi` 来执行其他相关命令。

```bash
# 生成开发环境所需的 .umi 缓存
yarn nocobase umi generate tmp
```

### `help`

帮助命令，也可以用 option 参数，`-h` 和 `--help`

```bash
# 查看所有 cli
yarn nocobase help
# 也可以用 -h
yarn nocobase -h
# 或者 --help
yarn nocobase --help
# 查看 db:sync 命令的 option
yarn nocobase db:sync -h
```
