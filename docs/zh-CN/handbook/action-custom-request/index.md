# 自定义请求
<PluginInfo name="action-custom-request"></PluginInfo>

## 介绍

## 安装

内置插件，无需单独安装

## 使用说明

![20240426120014](https://static-docs.nocobase.com/20240426120014.png)

### 配置权限

当勾选了允许配置界面时，可以配置自定义请求。

![20240426114957](https://static-docs.nocobase.com/20240426114957.png)

customRequests 表是系统级的，通过 acl.registerSnippet 配置权限。

```typescript
this.app.acl.registerSnippet({
  name: 'ui.customRequests', // ui.* 对应的允许配置界面权限
  actions: ['customRequests:*'],
});
```
### 变量

支持在 URL 和请求体中配置变量。

- 当前记录
- 当前用户
- 当前时间
- API token（v1.3.22-beta 及以上版本支持）

![20240426120953](https://static-docs.nocobase.com/20240426120953.png)

![20240426121051](https://static-docs.nocobase.com/20240426121051.png)

## 操作配置项

### 请求设置

![20240426120131](https://static-docs.nocobase.com/20240426120131.png)

### 权限控制

每个自定义请求操作支持自定义角色权限，默认拥有权限。

![20240426120451](https://static-docs.nocobase.com/20240426120451.png)
