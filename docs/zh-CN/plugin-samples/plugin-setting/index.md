# 插件配置页面示例概述

## 场景介绍

我们在写插件的时候，经常需要一个配置页面，用来让用户配置插件的一些参数。

TODO：截图 main 的插件配置页面

其中插件配置界面有可能有以下 4 种情况：

### 表单配置页面

用户可以在表单中填写一些参数，然后保存。这些参数会被保存到数据库中，插件在运行的时候会读取这些参数。例如 [Custom brand 插件](/handbook/custom-brand#使用说明)。

TODO：截图 Custom brand 插件

从上图可以看到，该配置页面是一个表单，用户可以在表单中 `Brand` 和 `About` 参数，然后点击 `Submit` 按钮保存。

### 表格配置页面

插件的配置是一组数据，用户可以在表格中添加、删除、修改这些数据。例如 [Users & Permissions 插件](/handbook/users)。

TODO：截图 Users & Permissions 插件

从上图可以看到，该配置页面是一个表格，用户可以在表格中添加、删除、修改数据一些用户信息。

### 表格配置页面（多种新增表单）

插件的配置是一组数据，但是新增数据的表单有多种情况。例如 [Authentication 插件](/handbook/auth/user)。

TODO：截图 Authentication 插件

从上图可以看出，该配置页面是一个表格，但是当我们点击 `Add new` 会有 2 种新增表单，分别是 `Password` 和 `SMS`。

### 其他

还有一些其他的特殊情况，例如 [Theme editor 插件](/handbook/theme-editor#跳转到主题配置页面)。

TODO：截图 Theme editor 插件

从上图可以看到对应的主题编辑器。

## 示例

针对以上场景，我们提供了如下示例：

- [表单配置页面](/plugin-samples/plugin-setting/form)
- [表格配置页面](/plugin-samples/plugin-setting/table)
- [表格配置页面（多个新增表单）](/plugin-samples/plugin-setting/table-multiple-forms.md)

至于特殊的情况，只需要根据实际情况进行开发即可。

## 配置页面路由

其中关于插件路由方面的内容，可以参考：

- [插件配置页面（单个路由）](/plugin-samples/router/add-setting-page-single-route)
- [插件配置页面（Tabs 路由）](/plugin-samples/router/add-setting-page-tabs-routes)
- [插件配置页面（不同布局）](/plugin-samples/router/add-setting-page-layout-routes)

本组插件示例将不再赘述路由方面的详细内容，需要的同学可以自行查看。
