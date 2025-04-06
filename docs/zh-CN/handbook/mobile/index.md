# 移动端

<PluginInfo name="mobile"></PluginInfo>

## 介绍

提供移动端页面配置，内核框架基于 Ant Design Mobile 实现，提供了各种扩展点，兼容添加部分桌面端区块。

:::warning
旧的 `plugin-mobile-client` 已废弃，v1.3 及以上的版本，请使用 `plugin-mobile` 代替。两个插件不兼容，新版本需要重新配置移动端。
:::

## 安装

预置插件，需要先激活才能使用。

![20240712113500](https://static-docs.nocobase.com/20240712113500.png)

## 使用手册

### UI 配置界面

NocoBase 为移动端提供了特有的 UI 配置界面

![20240828220321](https://static-docs.nocobase.com/20240828220321.png)

### 标签栏

支持添加链接和页面两种类型

![20240828223244](https://static-docs.nocobase.com/20240828223244.png)

### 添加区块

目前支持添加的桌面端区块有

![20240828223454](https://static-docs.nocobase.com/20240828223454.png)

### 页面配置

![20240828221452](https://static-docs.nocobase.com/20240828221452.png)

### 页面标签页

![20240828222225](https://static-docs.nocobase.com/20240828222225.png)

### 子页面

移动端弹窗操作都是以子页面方式打开，支持滑动返回

<video width="100%" controls>
  <source src="https://static-docs.nocobase.com/20240828222736_rec_.mp4" type="video/mp4">
</video>

### 筛选

采用 [弹出层](https://mobile.ant.design/components/popup) 的交互方式

![20240828230549](https://static-docs.nocobase.com/20240828230549.png)

### 配置菜单访问权限

可以像桌面端一样配置菜单访问权限，位置如下所示（需先启用移动端插件）：

![20240903221327_rec_](https://static-docs.nocobase.com/20240903221327_rec_.gif)

## 开发指南

目前支持的扩展点有

![20240712115610](https://static-docs.nocobase.com/20240712115610.png)
