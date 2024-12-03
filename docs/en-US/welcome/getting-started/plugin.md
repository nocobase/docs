# Installation and Upgrade of Plugins

:::warning
**Version 1.4 and above**: By setting the environment variables [`NOCOBASE_PKG_USERNAME`](/welcome/getting-started/env#nocobase_pkg_username) and [`NOCOBASE_PKG_PASSWORD`](/welcome/getting-started/env#nocobase_pkg_password), you can automatically download commercial plugins during application installation or upgrade.
:::

## Installing and Updating Plugins via Interface

### 1. Get the Plugin Package

- If it's a custom-developed plugin, refer to the process of [Writing Your First Plugin](/development/your-fisrt-plugin), build and package the plugin.

### 2. Add the Plugin

![20241204000127](https://static-docs.nocobase.com/20241204000127.png)

### 3. Activate the Plugin

![20241204000230](https://static-docs.nocobase.com/20241204000230.png)

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

## Manually extract plugin packages

### Add or update plugins

To add or update a plugin, simply extract the plugin package to `./storage/plugins/`, and the plugin manager interface will automatically read it. For example:

```bash
mkdir -p /my-nocobase/storage/plugins/@nocobase/plugin-auth-cas && \
  tar -xvzf /downloads/plugin-auth-cas-1.4.0.tgz \
  -C /my-nocobase/storage/plugins/@nocobase/plugin-auth-cas \
  --strip-components=1
```

This command ensures that the plugin is extracted to `/my-nocobase/storage/plugins/@nocobase/plugin-auth-cas` without the `package` directory, and the correct directory structure should be as follows:

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

### Run the upgrade command

If the plugin is manually updated by extraction, you need to run the `nocobase upgrade` command:

```bash
yarn nocobase upgrade
```
