# v1.0：2024-04-28

## 新特性

近期我们又推出了几个新插件，相关内容将后续单独发文介绍，本期内容主要针对 NocoBase 1.0 发布。v1.0 和 v0.21 并没有太多不同，更多的是过去所有成果的一次总结，也标志着 NocoBase 即将迈入 1.x 阶段。1.x 阶段 和 0.x 阶段有着显著的不同：

- 0.x 阶段：核心 API 和功能推进的非常迅速，变动较大，每一次版本迭代都可能存在不兼容的变更；
- 1.x 阶段：核心 API 逐步稳定，这个阶段我们会更注重于产品稳定性，也包括产品的安全性、性能等方面的优化。

尽管我们已经发布了 1.0 版本，但仍然处于 alpha 阶段。最近，我们补充了大量的单元测试和端到端（E2E）测试，但仍然存在一些插件功能细节的测试覆盖不够充分的情况。我们将继续不断补充和完善测试，逐步推进到 beta 阶段，然后是 rc 阶段，最终发布稳定的 1.0 版本。

## 1.0 的插件列表

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

参考 [NocoBase 升级概述](/welcome/getting-started/upgrading)，将 NocoBase 升级到最新版。如果你之前启用了 CAS、OIDC、SAML 插件，升级时会有以下提示：

命令行升级时终端提示：

![20240428212151](https://static-docs.nocobase.com/20240428212151.png)

Docker 版界面提示：

![20240428194926](https://static-docs.nocobase.com/20240428194926.png)

### 2. 删除插件 or 获取插件 1.0 版本？

#### 如果你选择删除插件后继续升级：

根据提示删除插件

```bash
# 主应用
yarn pm remove cas oidc saml --force
# 如果是子应用，需要添加 --app 参数
yarn pm remove cas oidc saml --force --app=sub-app1
```

继续升级

```bash
yarn nocobase upgrade
```

#### 如果你选择插件更新到 1.0 版本

联系 NocoBase 团队获取插件 1.0 版本，并继续进行升级

### 3. CAS、OIDC、SAML 插件升级流程

此时，应用界面已经无法访问了，所以我们需要用手动的方式升级

1. 使用账号登录 [service.nocobase.com](service.nocobase.com) 下载最新版插件
2. 将插件解压到指定目录
    - CAS 插件解压至 `./storage/plugins/@nocobase/plugin-auth-cas`
    - OIDC 插件解压至 `./storage/plugins/@nocobase/plugin-auth-oidc`
    - SAML 插件解压至 `./storage/plugins/@nocobase/plugin-auth-saml`
3. 升级应用
    - docker 版本直接重启容器即可
    - 源码或 create-nocobase-app 版本
        - 1. 下载依赖 `yarn install`
        - 2. 执行升级命令 `yarn nocobase upgrade`
        - 2. 重启应用
