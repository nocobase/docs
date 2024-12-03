# 独立插件的安装与升级

:::warning
**v1.4及以上版本**通过设置环境变量 [`NOCOBASE_PKG_USERNAME`](/welcome/getting-started/env#nocobase_pkg_username) 和 [`NOCOBASE_PKG_PASSWORD`](/welcome/getting-started/env#nocobase_pkg_password)，即可在安装或升级应用时自动下载商业插件；
:::

## 通过界面安装与更新插件

### 1. 获取插件包

- 如果是自制插件，参考 [编写第一个插件](/development/your-fisrt-plugin) 流程，构建并打包插件。

### 2. 添加或更新插件

![20241204000127](https://static-docs.nocobase.com/20241204000127.png)

### 3. 激活插件

![20241204000230](https://static-docs.nocobase.com/20241204000230.png)

## 通过命令行安装与更新插件

支持批量处理，如果应用更新导致插件不兼容并无法启动时，也可以使用命令行的方式处理

### 0. Docker 版本需要先进入容器

```bash
docker-compose exec app bash
```

### 1. 登录插件所在 npm registry

命令的方式，推荐以 npm registry 的方式添加、更新插件，例如 NocoBase 商业插件的 npm registry 是 https://pkg.nocobase.com/

```bash
npm login --registry=https://pkg.nocobase.com/
```

### 2. 添加或更新插件

```bash
yarn pm add @nocobase/plugin-data-source-external-mysql @nocobase/plugin-embed --registry=https://pkg.nocobase.com/
```

### 3. 激活插件

```bash
yarn pm enable @nocobase/plugin-data-source-external-mysql @nocobase/plugin-embed
```

## 手动解压插件包

### 添加或更新插件

直接将插件包解压到 `./storage/plugins/`，插件管理器界面也会自动读取。例如：

```bash
mkdir -p /my-nocobase/storage/plugins/@nocobase/plugin-auth-cas && \
  tar -xvzf /downloads/plugin-auth-cas-1.4.0.tgz \
  -C /my-nocobase/storage/plugins/@nocobase/plugin-auth-cas \
  --strip-components=1
```

这个命令确保插件解压到 `/my-nocobase/storage/plugins/@nocobase/plugin-auth-cas`，并且不会包含 `package` 目录，正确的目录结构如下：

```bash
./plugin-auth-cas/dist/server/migrations/20240425200816-change-locale-module.js
./plugin-auth-cas/dist/server/auth.js
./plugin-auth-cas/client.js
./plugin-auth-cas/dist/constants.js
./plugin-auth-cas/dist/externalVersion.js
./plugin-auth-cas/dist/client/index.js
./plugin-auth-cas/dist/index.js
./plugin-auth-cas/dist/server/index.js
./plugin-auth-cas/dist/server/actions/login.js
./plugin-auth-cas/dist/server/plugin.js
./plugin-auth-cas/server.js
./plugin-auth-cas/dist/server/actions/service.js
./plugin-auth-cas/dist/locale/en-US.json
./plugin-auth-cas/dist/locale/ko_KR.json
./plugin-auth-cas/package.json
./plugin-auth-cas/dist/locale/zh-CN.json
./plugin-auth-cas/README.md
./plugin-auth-cas/README.zh-CN.md
./plugin-auth-cas/dist/server/migrations/20240425200816-change-locale-module.d.ts
./plugin-auth-cas/dist/server/auth.d.ts
./plugin-auth-cas/client.d.ts
./plugin-auth-cas/dist/constants.d.ts
./plugin-auth-cas/dist/client/index.d.ts
./plugin-auth-cas/dist/client/locale/index.d.ts
./plugin-auth-cas/dist/index.d.ts
./plugin-auth-cas/dist/server/index.d.ts
./plugin-auth-cas/dist/server/actions/login.d.ts
./plugin-auth-cas/dist/client/Options.d.ts
./plugin-auth-cas/dist/server/plugin.d.ts
./plugin-auth-cas/server.d.ts
./plugin-auth-cas/dist/server/actions/service.d.ts
./plugin-auth-cas/dist/client/SigninPage.d.ts
./plugin-auth-cas/LICENSE.txt
```

### 执行更新命令

如果通过手动解压更新了插件，需要执行 `nocobase upgrade` 命令

```bash
yarn nocobase upgrade
```
