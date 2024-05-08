# 多应用管理器

<PluginInfo name="multi-app-manager"></PluginInfo>

## 介绍

无需单独部署即可动态管理多个应用，每个应用都是独立的实例。

:::warning
多应用管理插件并不提供用户共享的能力，可以通过「[认证插件](/handbook/auth)」打通，或者使用「[应用切换插件](/handbook/app-switching)」处理。
:::

## 安装

预置插件，需要先激活才能使用。

![20240327144151](https://static-docs.nocobase.com/20240327144151.png)

## 使用手册

![20240327144327](https://static-docs.nocobase.com/20240327144327.png)

### 添加应用

![20240327150722](https://static-docs.nocobase.com/20240327150722.png)

### 启动方式

提供两种启动方式

- 首次访问时启动：当用户通过 URL 首次访问子应用时才启动；
- 随主应用一同启动：当主应用启动时，子应用也一起启动，会增加主应用的启动时长。

![20240327170218](https://static-docs.nocobase.com/20240327170218.png)

### 自定义域名

子应用可以通过子路径的方式访问 `/apps/:appName/admin/`，例如：

```bash
http://localhost:13000/apps/a_7zkxoarusnx/admin/z45sjaukasd
```

同时，也可以为子应用配置独立的子域名，需要将域名解析到当前 ip，如果使用了 nginx，也需要在 nginx 配置里添加域名。

![20240327170301](https://static-docs.nocobase.com/20240327170301.png)

### 在菜单上显示

:::warning
当前右侧下拉菜单展示的子应用列表只是快捷链接，用户不共享，子应用也需要登录，并且只能主应用 root 账号使用。完整的应用切换能力将在商业插件「[应用切换](//handbook/app-switching)」里提供。
:::

![20240327151239](https://static-docs.nocobase.com/20240327151239.png)