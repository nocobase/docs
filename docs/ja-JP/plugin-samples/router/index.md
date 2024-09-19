# 前端路由示例概述

NocoBase 的前端页面目前内置了以下[页面路由](/development/client/router#已有页面路由)：

| 名称           | 路径               | 组件                | 说明 |
| -------------- | ------------------ | ------------------- |---------|
| admin          | /admin/\*          | AdminLayout         | 后台管理页面  |
| admin.page     | /admin/:name       | AdminDynamicPage    | 动态创建的页面 |
| admin.settings | /admin/settings/\* | AdminSettingsLayout | 插件配置页面  |
| admin.pm.list  | /admin/pm/list/\* | PluginManager       | 插件管理页面  |

但这些页面并不一定满足所有的需求，例如：

**新增场景**

- 新增一个仅用于前端展示页面，比如 `/about`，展示一些关于网站的信息
- 需要在 `/admin/*` 下扩展一个新的页面，此页面需要登录后才能访问
- 新增了一个插件，其需要增加配置页面

**修改场景**

- 完全替换已有页面：例如完全自定义登录页面，而不是使用默认的登录页
- 修改已有页面的布局：例如修改 `/admin/*` 的布局，不需要顶部的菜单栏

**删除场景**

- 例如我们不需要某个已经注册的页面，可以删除改页面

针对以上场景，我们可以通过 NocoBase 提供的前端路由扩展功能来实现，我们提供了如下示例：

- [新增页面](/plugin-samples/router/add-page)
- [修改页面](/plugin-samples/router/replace-page)
- [插件配置页面（单个路由）](/plugin-samples/router/add-setting-page-single-route)
- [插件配置页面（Tabs 路由）](/plugin-samples/router/add-setting-page-tabs-routes)
- [插件配置页面（不同布局）](/plugin-samples/router/add-setting-page-layout-routes)
