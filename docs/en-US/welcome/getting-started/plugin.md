# Installation and Upgrade of Plugins

## Installation and Upgrade of Commercial Plugins

### Configure License Key

#### NocoBase Version >=1.7.0

Please visit the NocoBase Service Platform to view the license key configuration instructions.

#### NocoBase Version <1.7.0

:::warning
Configuring account and password will be deprecated, please upgrade and change to license key.
:::

### Download Plugins

#### Docker Installation

Restart the container to automatically download plugins

```bash
docker compose restart app
```

#### Git Source Code or create-nocobase-app Installation

Execute the `pkg download-pro` command to download plugins

```bash
yarn nocobase pkg download-pro
```

:::warning

- The above steps will only download plugins that match the current application version, and will not update plugins. If you need to update plugins, please [upgrade the application](/welcome/getting-started/upgrading) first, and authorized plugins will be automatically updated.
- Authorized plugins will also be automatically downloaded during application [installation](/welcome/getting-started/installation) or [upgrade](/welcome/getting-started/upgrading).

:::

### Activate Plugins

Select the plugins you want to activate in the plugin manager.

![20241204000230](https://static-docs.nocobase.com/20241204000230.png)

### Upgrade Plugins

First [upgrade the application](/welcome/getting-started/upgrading), and authorized plugins will be automatically downloaded or updated during the application upgrade. Currently, it is not possible to upgrade plugins without upgrading the application.

## Installing and Updating Plugins via Interface

:::warning
Adding or updating plugins through the interface will restart the application. For batch operations, consider alternative methods.
:::

### Upload Plugin Packages via Plugin Manager

Both commercial and third-party plugins can be directly uploaded via the interface.

![20241204000127](https://static-docs.nocobase.com/20241204000127.png)

Notes:

- For creating plugin packages, refer to [Writing Your First Plugin](/development/your-fisrt-plugin) to ensure proper building and packaging.

### Activate Plugins

Select the plugins you want to activate in the plugin manager.

![20241204000230](https://static-docs.nocobase.com/20241204000230.png)

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

### Run the Upgrade Command to Update Plugins

After uploading plugins to the plugin directory, execute the `nocobase upgrade` command to complete the update.

```bash
yarn nocobase upgrade --skip-code-update
```
