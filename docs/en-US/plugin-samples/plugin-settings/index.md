# 插件配置页面示例概述

## 场景介绍

我们在写插件的时候，经常需要一个配置页面，用来让用户配置插件的一些参数。

其中插件配置界面有可能有以下 4 种情况：

### 表单配置页面

用户可以在表单中填写一些参数，然后保存。这些参数会被保存到数据库中，插件在运行的时候会读取这些参数。例如 [Custom brand 插件](/handbook/custom-brand#使用说明)。

![img_v3_02av_cc1d4351-3a24-4cd9-b5a6-98fb3b8dae6g](https://static-docs.nocobase.com/img_v3_02av_cc1d4351-3a24-4cd9-b5a6-98fb3b8dae6g.jpg)

从上图可以看到，该配置页面是一个表单，用户可以在表单中 `Brand` 和 `About` 参数，然后点击 `Submit` 按钮保存。

### 表格配置页面

插件的配置是一组数据，用户可以在表格中添加、删除、修改这些数据。例如 [Users & Permissions 插件](/handbook/users)。

![img_v3_02av_11e5f726-f716-4c0f-a244-2b6543b1b5dg](https://static-docs.nocobase.com/img_v3_02av_11e5f726-f716-4c0f-a244-2b6543b1b5dg.jpg)

从上图可以看到，该配置页面是一个表格，用户可以在表格中添加、删除、修改数据一些用户信息。

### 表格配置页面（多种新增表单）

插件的配置是一组数据，但是新增数据的表单有多种情况。例如 [File Manager 插件](/handbook/file-manager)。

![img_v3_02av_1d023074-402a-4586-848a-b4abd0ee5d4g](https://static-docs.nocobase.com/img_v3_02av_1d023074-402a-4586-848a-b4abd0ee5d4g.jpg)

从上图可以看出，有多种新增数据的表单，用户可以选择不同的表单进行新增数据。

### 其他

还有一些其他的特殊情况，例如 [Theme editor 插件](/handbook/theme-editor#跳转到主题配置页面)。

![img_v3_02av_ec2fa97f-2d1a-415c-8106-e3d979740fcg](https://static-docs.nocobase.com/img_v3_02av_ec2fa97f-2d1a-415c-8106-e3d979740fcg.jpg)

从上图可以看到对应的主题编辑器。

## 示例

针对以上场景，我们提供了如下示例：

- [表单配置页面](/plugin-samples/plugin-settings/form)
- [表格配置页面](/plugin-samples/plugin-settings/table)
- [表格配置页面（多个新增表单）](/plugin-samples/plugin-settings/table-multiple-forms.md)

至于特殊的情况，只需要根据实际情况进行开发即可。

## 配置页面路由

其中关于插件路由方面的内容，可以参考：

- [插件配置页面（单个路由）](/plugin-samples/router/add-setting-page-single-route)
- [插件配置页面（Tabs 路由）](/plugin-samples/router/add-setting-page-tabs-routes)
- [插件配置页面（不同布局）](/plugin-samples/router/add-setting-page-layout-routes)

本组插件示例将不再赘述路由方面的详细内容，需要的同学可以自行查看。
