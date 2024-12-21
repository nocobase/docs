# Add Plugin Configuration Page (Single Route)

## Description

The plugin requires a simple configuration page with only one route.

## Example Description

Assuming we integrate with a third-party email service and need to configure the email service token, we need a configuration page.

This document will not go into too much development detail, but only demonstrate how to add a plugin configuration page. For specific configuration page content and logic, please refer to the [Plugin Settings plugin example](/plugin-samples/plugin-settings) documentation.

You can view the complete example code for this document in the [plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-add-setting-page-single-route) repository.

![20240512201126](https://static-docs.nocobase.com/20240512201126.png)

## Initialize the Plugin

Following the instructions in the [Writing Your First Plugin](/development/your-fisrt-plugin) documentation, if you don't have a project yet, you can create one. If you already have one or have cloned the source code, you can skip this step.

```bash
yarn create nocobase-app my-nocobase-app -d sqlite
cd my-nocobase-app
yarn install
yarn nocobase install
```

Then initialize a plugin and add it to the application:

```bash
yarn pm create @nocobase-sample/plugin-add-setting-page-single-route
yarn pm enable @nocobase-sample/plugin-add-setting-page-single-route
```

Then start the project:

```bash
yarn dev
```

Then, after logging in, visit [http://localhost:13000/admin/pm/list/local/](http://localhost:13000/admin/pm/list/local/) to see that the plugin has been installed and enabled.

## Function Implementation

According to the tutorial on [Extending Plugin Settings Page](/development/client/router#extending-plugin-settings-page) in the plugin development documentation, we need to modify the `packages/plugins/@nocobase-sample/plugin-add-setting-page-single-route/src/client/index.tsx` file of the plugin:

```ts
import React from 'react';
import { Plugin } from '@nocobase/client';

// @ts-ignore
import { name } from '../../package.json';

const MySettingPage = () => <div>Hello Setting page</div>;

export class PluginAddSettingPageSingleRouteClient extends Plugin {
  async load() {
    this.app.pluginSettingsManager.add(name, {
      title: 'Single Route',
      icon: 'ApiOutlined',
      Component: MySettingPage,
    });
  }
}

export default PluginAddSettingPageSingleRouteClient;
```

- `name`: The name of the plugin, used to uniquely identify the plugin.
- `title`: The title of the plugin configuration management page menu.
- `icon`: The icon of the plugin configuration management page menu. For more icons, you can refer to the [Ant Design Icons](https://ant.design/components/icon/).
- `Component`: The content of the setting page.

Then we can visit [http://localhost:13000/admin/settings/@nocobase-sample/plugin-add-setting-page-single-route](http://localhost:13000/admin/settings/@nocobase-sample/plugin-add-setting-page-single-route) to view the plugin configuration page.

![20240512201126](https://static-docs.nocobase.com/20240512201126.png)

## Permission Configuration

By default, the plugin configuration page does not have any permissions. Anyone can access and configure it. To configure permissions for the plugin, we need to configure them in the plugin settings.

We can visit [http://localhost:13000/admin/settings/users-permissions/roles](http://localhost:13000/admin/settings/users-permissions/roles) to see all the roles. We can configure permissions in the plugin settings.

![20240512201234](https://static-docs.nocobase.com/20240512201234.png)

## Packaging and Uploading to Production Environment

According to the documentation on [Building and Packaging Plugins](/development/your-fisrt-plugin#building-and-packaging-plugins), we can package the plugin and upload it to the production environment.

If you have cloned the source code, you need to perform a full build first to build the dependencies of the plugin as well.

```bash
yarn build
```

If you are using `create-nocobase-app` to create your project, you can directly execute:

```bash
yarn build @nocobase-sample/plugin-add-setting-page-single-route --tar
```

This way you can see the `storage/tar/@nocobase-sample/plugin-add-setting-page-single-route.tar.gz` file, and then install it by [uploading](/welcome/getting-started/plugin).
