# Installation and Upgrade of Plugins

## Installing and Updating Plugins via Interface

### 1. Get the Plugin Package

- If it's a commercial plugin provided by NocoBase, by setting the environment variables [`NOCOBASE_PKG_USERNAME`](/welcome/getting-started/env#nocobase_pkg_username) and [`NOCOBASE_PKG_PASSWORD`](/welcome/getting-started/env#nocobase_pkg_password), you can automatically download commercial plugins during application installation or upgrade；
- If it's a custom-developed plugin, refer to the process of [Writing Your First Plugin](/development/your-fisrt-plugin), build and package the plugin.

### 2. Add the Plugin

Upload and add the plugin package.

![20241204000127](https://static-docs.nocobase.com/20241204000127.png)

### 3. Activate the Plugin

Activate the uploaded plugin.

![20241204000230](https://static-docs.nocobase.com/20241204000230.png)

### 4. Update the Plugin

Upload the downloaded plugin and submit the update.

:::warning
- Pre-installed plugins will be upgraded along with the main application without a separate "update" operation.
- Click on the "update" operation of the plugin to upgrade it; do not upgrade the plugin by deleting and then adding it again.
:::

![20240424221119_rec_](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240424221119_rec_.gif)

## Installing and Updating Plugins via Command Line

Supports batch processing. If an application update renders a plugin incompatible and unable to start, you can also use the command line to handle it.

### 0. Enter the Docker container for Docker versions first

```bash
docker-compose exec app bash
```

### 1. Log in to the npm registry where the plugin is located

In command-line mode, it's recommended to add and update plugins via npm registry. For example, the npm registry for NocoBase commercial plugins is https://pkg.nocobase.com/

```bash
npm login --registry=https://pkg.nocobase.com/
```

### 2. Add or update the Plugin

```bash
yarn pm add @nocobase/plugin-data-source-external-mysql @nocobase/plugin-embed --registry=https://pkg.nocobase.com/
```

### 3. Activate the Plugin

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
