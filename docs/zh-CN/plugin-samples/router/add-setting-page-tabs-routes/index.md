# 新增插件配置页面（多个Tabs）

## 场景说明

插件需要多个配置页面，每个配置页面对应一个 Tab。

## 示例说明

假设我们对接了一个第三方的邮件服务，需要配置邮件服务 Token，同时我们还需要一个配置页面来配置邮件服务的模板，此时我们需要一个配置页面，有两个 Tab。

本篇内容不会对内容过多开发，仅用于演示如何新增一个插件配置页面，具体的配置页面内容和逻辑可参考 [Plugin Settings 插件示例](/plugin-samples/plugin-settings) 文档。

本文档完整的示例代码可以在 [plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-add-setting-page-tabs-routes) 中查看。

<video width="100%" controls>
  <source src="https://static-docs.nocobase.com/7.mp4" type="video/mp4">
</video>

## 初始化插件

我们按照 [编写第一个插件](/development/your-fisrt-plugin) 文档说明，如果没有一个项目，可以先创建一个项目，如果已经有了或者是 clone 的源码，则跳过这一步。

```bash
yarn create nocobase-app my-nocobase-app -d sqlite
cd my-nocobase-app
yarn install
yarn nocobase install
```

然后初始化一个插件，并添加到系统中：

```bash
yarn pm create @nocobase-sample/plugin-add-setting-page-tabs-routes
yarn pm enable @nocobase-sample/plugin-add-setting-page-tabs-routes
```

然后启动项目即可：

```bash
yarn dev
```

然后登录后访问 [http://localhost:13000/admin/pm/list/local/](http://localhost:13000/admin/pm/list/local/) 就可以看到插件已经安装并启用了。

## 实现功能

按照插件开发教程中 [插件设置页扩展](/development/client/router#插件设置页扩展)，我们需要修改插件的 `packages/plugins/@nocobase-sample/plugin-add-setting-page-tabs-routes/src/client/index.tsx`：

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
      Component: Outlet, // 可省略或者使用自定义组件
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
      Component: Outlet, // 可省略或者使用自定义组件
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

多个配置页面的场景下，`pluginSettingsManager.add()` 的 `name` 属性需要使用 `.` 分隔，例如 `pluginName.pageName`，这样就可以实现多个配置页面的 Tab 了。

然后我们就可以访问 [http://localhost:13000/admin/settings/@nocobase-sample/plugin-add-setting-page-tabs-routes](http://localhost:13000/admin/settings/@nocobase-sample/plugin-add-setting-page-tabs-routes) 来查看插件配置页面了。

<video width="100%" controls>
  <source src="https://static-docs.nocobase.com/7.mp4" type="video/mp4">
</video>

## 权限配置

默认情况下，插件配置页面是没有权限的，任何人都可以访问和配置，需要在插件配置中配置权限。

我们访问 [http://localhost:13000/admin/settings/users-permissions/roles](http://localhost:13000/admin/settings/users-permissions/roles) 就可以看到所有的角色了，我们可以在插件配置中配置权限。

![20240512201446](https://static-docs.nocobase.com/20240512201446.png)

## 打包和上传到生产环境

按照 [构建并打包插件](/development/your-fisrt-plugin#构建并打包插件) 文档说明，我们可以打包插件并上传到生产环境。

如果是 clone 的源码，需要先执行一次全量 build，将插件的依赖也构建好。

```bash
yarn build
```

如果是使用的 `create-nocobase-app` 创建的项目，可以直接执行：

```bash
yarn build @nocobase-sample/plugin-add-setting-page-tabs-routes --tar
```

这样就可以看到 `storage/tar/@nocobase-sample/plugin-add-setting-page-tabs-routes.tar.gz` 文件了，然后通过[上传的方式](/welcome/getting-started/plugin)进行安装。
