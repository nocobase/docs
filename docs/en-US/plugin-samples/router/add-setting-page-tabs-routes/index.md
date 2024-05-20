# Add Plugin Configuration Pages (Multiple Tabs)

## Description

The plugin requires multiple configuration pages, with each page corresponding to a tab.

## Example Description

Assuming we integrate with a third-party email service and need to configure the email service token. At the same time, we also need a configuration page to set up email service templates. In this case, we need a configuration page with two tabs.

This document does not go into much detail about the content development. It is only used to demonstrate how to add a plugin configuration page. For specific configuration page content and logic, please refer to the [Plugin Settings plugin example](/plugin-samples/plugin-settings) documentation.

You can find the complete example code for this document in the [plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-add-setting-page-tabs-routes) repository.

<video width="100%" controls>
  <source src="https://static-docs.nocobase.com/7.mp4" type="video/mp4">
</video>

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
yarn pm create @nocobase-sample/plugin-add-setting-page-tabs-routes
yarn pm enable @nocobase-sample/plugin-add-setting-page-tabs-routes
```

Then start the project:

```bash
yarn dev
```

Then, after logging in, visit [http://localhost:13000/admin/pm/list/local/](http://localhost:13000/admin/pm/list/local/) to see that the plugin has been installed and enabled.

## Function Implementation

According to the tutorial on plugin development [Extending Plugin Settings Page](/development/client/router#extending-plugin-settings-page), we need to modify the `packages/plugins/@nocobase-sample/plugin-add-setting-page-tabs-routes/src/client/index.tsx` file of the plugin:

```tsx | pure
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Plugin } from '@nocobase/client';

// @ts-ignore
import { name } from '../../package.json';

const TokenPage = () => <div>Token Page</div>

const TemplatePage = () => <div>Template Page</div>

export class PluginAddSettingPageTabsRoutesClient extends Plugin {
  async load() {
    this.app.pluginSettingsManager.add(name, {
      title: 'Tabs Routes',
      icon: 'ApiOutlined',
      Component: Outlet, // Can be omitted or use a custom component
    });

    this.app.pluginSettingsManager.add(`${name}.token`, {
      title: 'Token Page',
      Component: TokenPage,
      sort: 1,
    });

    this.app.pluginSettingsManager.add(`${name}.template`, {
      title: 'Template Page',
      Component: TemplatePage,
      sort: 2,
    });

    this.app.pluginSettingsManager.add(`${name}.nestedRoute`, {
      title: 'Test',
      Component: Outlet, // Can be omitted or use a custom component
      sort: 3,
    });

    this.app.pluginSettingsManager.add(`${name}.nestedRoute.a`, {
      title: 'Test A',
      Component: () => <div>Test A page</div>
    });

    this.app.pluginSettingsManager.add(`${name}.nestedRoute.b`, {
      title: 'Test B',
      Component: () => <div>Test B page</div>
    });
  }
}

export default PluginAddSettingPageTabsRoutesClient;
```

In scenarios where there are multiple configuration pages, the `name` attribute of `pluginSettingsManager.add()` needs to be separated by `.`. For example, `pluginName.pageName` can be used to achieve multiple configuration pages as tabs.

Then we can visit [http://localhost:13000/admin/settings/@nocobase-sample/plugin-add-setting-page-tabs-routes](http://localhost:13000/admin/settings/@nocobase-sample/plugin-add-setting-page-tabs-routes) to view the plugin configuration page.

<video width="100%" controls>
  <source src="https://static-docs.nocobase.com/7.mp4" type="video/mp4">
</video>

## Permission Configuration

By default, the plugin configuration page does not have any permissions. Anyone can access and configure it. To configure permissions for the plugin, we need to configure them in the plugin settings.

We can visit [http://localhost:13000/admin/settings/users-permissions/roles](http://localhost:13000/admin/settings/users-permissions/roles) to see all the roles. We can configure permissions in the plugin settings.

![20240512201446](https://static-docs.nocobase.com/20240512201446.png)

## Packaging and Uploading to Production Environment

According to the documentation on [Building and Packaging Plugins](/development/your-fisrt-plugin#building-and-packaging-plugins), we can package the plugin and upload it to the production environment.

If you have cloned the source code, you need to perform a full build first to build the dependencies of the plugin as well.

```bash
yarn build
```

If you are using `create-nocobase-app` to create your project, you can directly execute:

```bash
yarn build @nocobase-sample/plugin-add-setting-page-tabs-routes --tar
```

This way you can see the `storage/tar/@nocobase-sample/plugin-add-setting-page-tabs-routes.tar.gz` file, and then install it through the [upload method](/welcome/getting-started/plugin).
