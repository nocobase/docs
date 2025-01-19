# Add Plugin Setting Page (Different Layout)

## Description

The plugin requires multiple configuration pages, and some pages are not under [AdminSettingsLayout](/development/client/router#existing-page-routes), usually for detail pages, such as the `@nocobase/plugin-mobile-client` plugin or the `@nocobase/plugin-workflow`.

## Example Description

This example will have a configuration page, and inside the configuration page, there will be a detail link that, when clicked, will navigate to a new page.

This document will not go into much detail about the content development. It is only used to demonstrate how to add a plugin configuration page. For specific content and logic of the configuration page, please refer to the [Plugin Settings plugin example](/plugin-samples/plugin-settings) documentation.

You can find the complete example code for this document in the [plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-add-setting-page-layout-routes) repository.

<video width="100%" controls>
  <source src="https://static-docs.nocobase.com/10.mp4" type="video/mp4">
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
yarn pm create @nocobase-sample/plugin-add-setting-page-layout-routes
yarn pm enable @nocobase-sample/plugin-add-setting-page-layout-routes
```

Then start the project:

```bash
yarn dev
```

Then, after logging in, visit [http://localhost:13000/admin/pm/list/local/](http://localhost:13000/admin/pm/list/local/) to see that the plugin has been installed and enabled.

## Function Implementation

### 1.  Register the Plugin Setting Page

Following the instructions in the [Plugin Setting Page Extension](/development/client/router#plugin-setting-page-extension) section of the plugin development tutorial, we need to modify the `packages/plugins/@nocobase-sample/plugin-add-setting-page-layout-routes/src/client/index.tsx` file:

```tsx | pure
import React from 'react';
import { Plugin } from '@nocobase/client';

// @ts-ignore
import { name } from '../../package.json';

const PluginSettingPage = () => <div>
  details
</div>

export class PluginAddSettingPageLayoutRoutesClient extends Plugin {
  async load() {
    this.app.pluginSettingsManager.add(name, {
      title: 'Different Layout',
      icon: 'ApiOutlined',
      Component: PluginSettingPage,
    });
  }
}

export default PluginAddSettingPageLayoutRoutesClient;
```

Then we can visit [http://localhost:13000/admin/settings/@nocobase-sample/plugin-add-setting-page-layout-routes](http://localhost:13000/admin/settings/@nocobase-sample/plugin-add-setting-page-layout-routes) to view the plugin configuration page.


### 2.  Add Detail Page

我们准备在 `AdminLayout` 下面新增一个详情页面，我们继续修改 `packages/plugins/@nocobase-sample/plugin-add-setting-page-layout-routes/src/client/index.tsx`：

```diff
+ import { Link } from 'react-router-dom'

const PluginSettingPage = () => <div>
- details
+ <Link path={`/admin/${name}-detail`}>details</Link>
</div>

export class PluginAddSettingPageLayoutRoutesClient extends Plugin {
  async load() {
    // ...
+   this.app.router.add(`admin.${name}-details`, {
+     path: `/admin/${name}-detail`,
+     Component: () => <div>detail</div>,
+   });
  }
}
```

When we click on the `details` link, it will navigate to the `/admin/@nocobase-sample/plugin-add-setting-page-layout-routes-detail` page.

<video width="100%" controls>
  <source src="https://static-docs.nocobase.com/10.mp4" type="video/mp4">
</video>

## Permission Configuration

By default, the plugin configuration page does not have any permissions. Anyone can access and configure it. To configure permissions for the plugin, we need to configure them in the plugin settings.

We can visit [http://localhost:13000/admin/settings/users-permissions/roles](http://localhost:13000/admin/settings/users-permissions/roles) to see all the roles. We can configure permissions in the plugin settings.

![20240512201624](https://static-docs.nocobase.com/20240512201624.png)

## Packaging and Uploading to Production Environment

According to the documentation on [Building and Packaging Plugins](/development/your-fisrt-plugin#building-and-packaging-plugins), we can package the plugin and upload it to the production environment.

If you have cloned the source code, you need to perform a full build first to build the dependencies of the plugin as well.

```bash
yarn build
```

If you are using `create-nocobase-app` to create your project, you can directly execute:

```bash
yarn build @nocobase-sample/plugin-add-setting-page-layout-routes --tar
```

This way you can see the `storage/tar/@nocobase-sample/plugin-add-setting-page-layout-routes.tar.gz` file, and then install it through the [upload method](/welcome/getting-started/plugin).
