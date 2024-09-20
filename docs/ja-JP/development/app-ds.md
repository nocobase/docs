# 项目目录结构

无论是 [Git 源码](/welcome/getting-started/installation/git-clone) 还是 [create-nocobase-app](/welcome/getting-started/installation/create-nocobase-app) 创建的 NocoBase 应用，目录结构都是一样的，结构如下：

```bash
├── my-nocobase-app
  ├── packages        # 开发中的包
    ├── plugins       # 开发中的插件
  ├── storage         # 用于存放数据库文件、附件、缓存等
    ├── backups       # 备份文件目录
    ├── plugins       # 即插即用的插件（已编译）
    ├── tar           # yarn build --tar 存放的位置
    ├── uploads       # 本地存储目录
  ├── .env            # 环境变量
  ├── .env.e2e        # e2e 测试的环境变量 yarn e2e test
  ├── .env.test       # 单元测试的环境变量 yarn test
  ├── lerna.json
  ├── package.json
  ├── playwright.config.ts
  ├── tsconfig.json
  ├── tsconfig.server.json
  ├── vitest.config.mts
```

## 插件所在目录

开发中的插件存放在 `packages/plugins` 目录下，以 npm packages 的方式组织，示例如下：

```bash
|- /packages/
  |- /plugins/
    |- /@nocobase/
      |- /plugin-hello1/
      |- /plugin-hello2/
    |- /my-nocobase-plugin-hello1/
    |- /my-nocobase-plugin-hello2/
```

通过界面添加的插件存放在 `storage/plugins` 目录下，以 npm packages 的方式组织，示例如下：

```bash
|- /storage/
  |- /plugins/
    |- /@nocobase/
      |- /plugin-hello1/
      |- /plugin-hello2/
    |- /my-nocobase-plugin-hello1/
    |- /my-nocobase-plugin-hello2/
```

内置的插件或者在 `package.json` 的 `dependencies` 里声明的插件都会在 `node_modules` 里，示例如下：

```bash
|- /node_modules/
  |- /@nocobase/
    |- /plugin-acl/
    |- /plugin-auth/
```

## 插件目录结构

可以通过 `yarn pm create @my-project/plugin-hello` 快速创建一个空插件，目录结构如下：

```bash
|- /packages/plugins/@my-project/plugin-hello
|- /dist             # build 产物
  |- /src              # 插件源码
    |- /client
      |- plugin.ts     # 插件类
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
  |-.npmignore         # 发布插件包时哪些文件或目录应该被忽略
  |- client.d.ts
  |- client.js
  |- package.json
  |- server.d.ts
  |- server.js
```

