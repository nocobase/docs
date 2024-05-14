# 概述

## 目录结构

初始化的空插件，客户端相关目录结构如下：

```bash
|- /plugin-sample-hello
  |- /src
    |- /client      # 插件客户端代码
      |- index.tsx   # 客户端入口文件
  |- client.d.ts
  |- client.js
```

## Plugin Class

插件类提供了插件生命周期的各种方法。

```ts
import { Plugin } from '@nocobase/client';

export class PluginSampleHelloClient extends Plugin {
  async afterAdd() {}

  async beforeLoad() {}

  async load() {}
}

export default PluginSampleHelloClient;
```

## 插件的生命周期

<img alt="插件的生命周期" src="./image.png" style="width: 600px;" />

- 在插件初始化之后，触发 `afterAdd`。需要注意的是，插件的添加是无序的，所以不要在 `afterAdd` 里获取其他插件的实例，如果需要获取其他插件的实例，可以在 `beforeLoad` 或者 `load` 里获取
- 在 `beforeLoad` 里所有已激活的插件都实例化了，此时可以通过 [app.pluginManager.get()](https://client.docs.nocobase.com/core/application/plugin-settings-manager) 获取到实例
- 在 `load` 里，所有插件的 `beforeLoad` 方法都已执行

## 插件类里常用的属性及方法

| API                          | 教程                                                                           |
| ---------------------------- | ------------------------------------------------------------------------------ |
| app.i18n                     | [国际化](/development/client/i18n)                                             |
| app.apiClient                | [API 客户端](/development/client/api-client)                                   |
| app.pluginManager            | [插件管理器](https://client.docs.nocobase.com/core/application/plugin-manager) |
| app.router                   | [路由管理](/development/client/router)                                         |
| app.pluginSettingsManager    | [插件配置页](/development/client/router#插件设置页扩展)                        |
| app.schemaInitializerManager | [Schema Initializer 配置](/development/client/ui-schema/initializer)           |
| app.schemaSettingsManager    | [Schema Settings 配置](/development/client/ui-schema/settings)                 |
| app.addProviders             | [Provider 组件](/development/client/providers)                                 |
| app.addComponents            | [Schema 渲染](/development/client/ui-schema/rendering)                         |
| app.addScopes                | [Schema 渲染](/development/client/ui-schema/rendering)                         |

## 组件里常用的 React **hooks**

| API            | 教程                                                                                          |
| -------------- | --------------------------------------------------------------------------------------------- |
| useApp()       | [useApp() API](https://client.docs.nocobase.com/core/application/application#useapp)          |
| usePlugin()    | [usePlugin() API](https://client.docs.nocobase.com/core/application/plugin-manager#useplugin) |
| useAPIClient() | [API 客户端](/development/client/api-client)                                                  |
| useRequest()   | [API 客户端](/development/client/api-client)                                                  |
