# v1.0：2024-04-28

为了更好地服务用户，NocoBase 决定推出 1.0 版本，也标志着 NocoBase 即将迈入 1.x 阶段。0.x 阶段和 1.x 阶段有着显著的不同：

- 0.x 阶段：核心 API 和功能推进的非常迅速，变动较大，每一次版本迭代都可能存在不兼容的变更；
- 1.x 阶段：核心 API 逐步稳定，这个阶段我们会更注重于产品稳定性，也包括产品的安全性、性能等方面的优化。

本次 NocoBase 1.0 发布，主要内容如下：

## 插件列表

NocoBase 作为插件化驱动的产品，官方目前支持的插件有

- 开源插件 50+，详情列表查看 https://cn.nocobase.com/plugins-cn.html
- 商业插件 20+，详情列表查看 https://cn.nocobase.com/plugins-commercial-cn.html

以下插件不再提供开源版本

- @nocobase/plugin-auth-cas：通过 CAS 协议认证身份；
- @nocobase/plugin-auth-odic：通过 OIDC (OpenID Connect) 协议认证身份；
- @nocobase/plugin-auth-saml：通过 SAML 2.0 认证身份。

以下插件已废弃，将在 1.0 正式版本里移除

- @nocobase/plugin-audit-logs：已废弃，暂时不删除，新版不会安装
- @nocobase/plugin-snapshot-field：已废弃，暂时不删除，新版不会安装
- @nocobase/plugin-charts：使用 @nocobase/plugin-data-visualization 代替
- @nocobase/plugin-excel-formula-field：使用 @nocobase/plugin-field-formula 代替
- @nocobase/plugin-math-formula-field：使用 @nocobase/plugin-field-formula 代替
- @nocobase/plugin-ui-routes-storage：已废弃，前端路由直接在前端扩展即可

## 代码注释说明

为了提供更好的开发体验，一些特殊的 API 上也添加了 doc 注释：

- `@internal` 通常用于标识代码中的内部实现细节或内部方法，这些方法或功能不是为了公共使用而设计的，而是为了在代码内部使用而存在。
- `@experimental` 实验性功能或 API。该 API 尚处于开发和测试阶段，可能会发生较大变化，甚至可能在以后的版本中被移除或替换。
- `@deprecated` 用于标识代码中已经过时或不推荐使用的功能、方法或 API。这意味着虽然它们仍然可用，但是可能在将来的版本中被移除，或者已经有更好的替代方案可供使用。

## 文档

- [欢迎](https://docs-cn.nocobase.com/welcome/introduction)
- [使用手册](https://docs-cn.nocobase.com/handbook)
- [插件开发](https://docs-cn.nocobase.com/development)
- [API 参考](https://docs-cn.nocobase.com/api)

## 协议变更

开源代码（包括内核和插件）全部变更为 AGPL 3.0 协议，针对商业插件提供了 [NocoBase 许可协议](https://cn.nocobase.com/agreement-cn.html)。

## 升级指南

### 0. 项目备份

- 一定要先备份数据库！一定要先备份数据库！一定要先备份数据库！
- 可以将整个项目代码也进行备份。

### 1. 升级应用

参考 [NocoBase 升级概述](/welcome/getting-started/upgrading)，将 NocoBase 升级到最新版。如果你之前启用了 cas、odic、saml 插件，升级时会有以下提示：

你可以根据提示删除插件或者联系 NocoBase 团队获取插件 1.0 版本。

### 2. 独立插件的升级

参考文档 [独立插件的安装与升级](/welcome/getting-started/plugin)
