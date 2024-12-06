# Installation and Upgrade of Plugins

## Installation and Upgrade of Commercial Plugins (v1.4 and Above)

### Configure Environment Variables

Set the environment variables [`NOCOBASE_PKG_USERNAME`](/welcome/getting-started/env#nocobase_pkg_username) and [`NOCOBASE_PKG_PASSWORD`](/welcome/getting-started/env#nocobase_pkg_password)(NocoBase Service Platform Username and Password) to automatically download commercial plugins during application installation or upgrade.

```bash
NOCOBASE_PKG_USERNAME=your-username
NOCOBASE_PKG_PASSWORD=your-password
```

[How to set environment variables?](/welcome/getting-started/env)

### Execute Application Installation or Upgrade Commands

Once the application is installed or upgraded, all authorized commercial plugins will appear in the plugin manager. Plugins will be automatically downloaded and updated.

#### Installation

- [Docker (recommended)](./installation/docker-compose.md)
- [create-nocobase-app](./installation/create-nocobase-app.md)
- [Git source code](./installation/git-clone.md)

#### Upgrading

- [Upgrading for Docker compose](./upgrading/docker-compose.md)
- [Upgrading for create-nocobase-app](./upgrading/create-nocobase-app.md)
- [Upgrading for Git source code](./upgrading/git-clone.md)

#### Docker 安装方式

Docker 应用会自动安装或更新，只需要重建 app 容器即可。

```yml
# 更新镜像（如果是 1.4.0 之前的版本请先更新镜像）
docker-compose pull app
# 重建容器
docker-compose up -d app
```

### Activate Plugins

Select the plugins you want to activate in the plugin manager.

![Plugin Activation](https://static-docs.nocobase.com/20241204000230.png)

---

## Installing and Updating Plugins via Interface

:::warning
Adding or updating plugins through the interface will restart the application. For batch operations, consider alternative methods.
:::

### Upload Plugin Packages via Plugin Manager

Both commercial and third-party plugins can be directly uploaded via the interface.

![Upload Plugins](https://static-docs.nocobase.com/20241204000127.png)

Notes:

- For creating plugin packages, refer to [Writing Your First Plugin](/development/your-first-plugin) to ensure proper building and packaging.

### Activate Plugins

Select the plugins you want to activate in the plugin manager.

![Plugin Activation](https://static-docs.nocobase.com/20241204000230.png)

---

## Installing and Updating Plugins via Command Line

:::warning
- Supports batch operations.
- This method is recommended if application updates cause plugin incompatibility or failure to start.
  :::

### 0. For Docker Versions, Enter the Container

```bash
docker-compose exec app bash
```

### 1. Log in to the NPM Registry

Configure the registry based on your setup.

```bash
npm login --registry=https://pkg.nocobase.com/
```

### 2. Add or Update Plugins

```bash
yarn pm add @nocobase/plugin-data-source-external-mysql @nocobase/plugin-embed --registry=https://pkg.nocobase.com/
```

### 3. Activate Plugins

```bash
yarn pm enable @nocobase/plugin-data-source-external-mysql @nocobase/plugin-embed
```

---

## Installing and Updating Plugins via Plugin Directory Upload

:::warning
- Supports batch operations and is convenient for migration.
- Suitable for servers in an intranet environment.
- Recommended for updating incompatible plugins caused by application updates.
  :::

### Add or Update Plugins

Store commercial and third-party plugins in the `./storage/plugins/` directory. You can download plugins in a development environment and upload them to the `./storage/plugins/` directory on the server. Alternatively, directly extract the plugin package into the directory. For example:

```bash
mkdir -p /my-nocobase/storage/plugins/@nocobase/plugin-auth-cas && \
  tar -xvzf /downloads/plugin-auth-cas-1.4.0.tgz \
  -C /my-nocobase/storage/plugins/@nocobase/plugin-auth-cas \
  --strip-components=1
```

This command ensures the plugin is extracted to `/my-nocobase/storage/plugins/@nocobase/plugin-auth-cas` without the `package` directory. The correct directory structure is as follows:

```plaintext
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

### Run the Upgrade Command to Update Plugins

After uploading plugins to the plugin directory, execute the `nocobase upgrade` command to complete the update.

```bash
yarn nocobase upgrade
```
