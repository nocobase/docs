# Installation and Upgrade of Plugins

## Installing and Updating Plugins via Interface

This method is very simple but requires adding, activating, and updating one by one.

### 1. Get the Plugin Package

- If it's a commercial plugin provided by NocoBase, please go to Business User Services Platform to download.
- If it's a custom-developed plugin, refer to the process of [Writing Your First Plugin](/development/your-fisrt-plugin), build and package the plugin.

### 2. Add the Plugin

Upload and add the plugin package.

![20240424221258_rec_](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240424221258_rec_.gif)

### 3. Activate the Plugin

Activate the uploaded plugin.

![20240424220854](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240424220854.png)

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

### 2. Add the Plugin

```bash
yarn pm add @nocobase/plugin-data-source-external-mysql @nocobase/plugin-embed --registry=https://pkg.nocobase.com/
```

For more usage, refer to [`pm add`](#)

### 3. Activate the Plugin

```bash
yarn pm enable @nocobase/plugin-data-source-external-mysql @nocobase/plugin-embed
```

### 4. Update the Plugin

:::warning
If you need to upgrade both the application and the plugins simultaneously, please refer to the [NocoBase Upgrade Overview](/welcome/getting-started/upgrading), upgrade NocoBase to the latest version first, and then execute the `pm update` command.
:::

```bash
yarn pm update @nocobase/plugin-data-source-external-mysql @nocobase/plugin-embed --registry=https://pkg.nocobase.com/
```

For more usage, refer to [`pm update`](#)