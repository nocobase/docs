# 安装概述

## 安装方式

NocoBase 支持三种安装方式：

- [Docker 安装（推荐）](./docker-compose.md)
- [create-nocobase-app 安装](./create-nocobase-app.md)
- [Git 源码安装](./git-clone.md)

## 选择什么安装方式？

**Docker 安装（推荐）**：

适合无代码场景，不需要写代码。升级时，下载最新镜像并重启即可。

**create-nocobase-app 安装**：

项目的业务代码完全独立，支持低代码开发。

**Git 源码安装**：

如果你想体验最新未发布版本，或者想参与贡献，需要在源码上进行修改、调试，建议选择这种安装方式，对开发技术水平要求较高，如果代码有更新，可以走 git 流程拉取最新代码。


## 安装哪个版本？

各种安装方式已发布版本列表如下：

- [Docker 已发布版本列表列表](https://hub.docker.com/r/nocobase/nocobase/tags)
- [create-nocobase-app 已发布版本列表](https://www.npmjs.com/package/create-nocobase-app?activeTab=versions)
- [Git 源码已发布版本列表](https://github.com/nocobase/nocobase/tags)

版本说明

- 源码安装默认是 main 分支（非稳定版本），也可以按需切换到具体 tag 分支（已发布的版本，相对稳定的版本）
- create-nocobase-app 默认安装的是最新已发布（打标签）的版本，如果需要也可以按版本安装
- docker 有不同的标签
  - main 为 main 分支最新镜像（非稳定版本）
  - latest  最新已发布（打标签）的版本
  - v0.19.0-alpha.1
  - v0.18.0-alpha.9
  - v0.18.0-alpha.8
  - ...

:::warning
- main 分支的更新频率较快，不稳定，如果想尝鲜可以安装这个版本；
- 如果以稳定为主，安装最新发布（已打标签）的版本更合适
:::
