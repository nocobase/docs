# 安装概述

## 安装方式

NocoBase 支持三种安装方式：

- [Docker 安装（推荐）](./docker-compose.md)
- [create-nocobase-app 安装](./create-nocobase-app.md)
- [Git 源码安装](./git-clone.md)

## 选择什么安装方式？

### Docker 安装（推荐）

适合无代码场景，不需要写代码。升级时，下载最新镜像并重启即可。

### create-nocobase-app 安装

项目的业务代码完全独立，支持低代码开发。

### Git 源码安装

如果你想体验最新未发布版本，或者想参与贡献，需要在源码上进行修改、调试，建议选择这种安装方式，对开发技术水平要求较高，如果代码有更新，可以走 git 流程拉取最新代码。

## 安装哪个版本？

### Latest 版本

功能稳定，测试较为完善的版本，仅做缺陷修复。推荐安装此版本。

### Beta 版本

包含即将发布的新功能，经过初步测试的版本，可能存在部分已知或未知问题。主要面向测试用户，用于收集反馈和进一步优化功能。适合愿意提前体验新功能并提供反馈的测试用户。

### Alpha 版本

开发中的版本，包含最新的功能代码，可能尚未完成或存在较多不稳定因素，主要用于内部开发和快速迭代。 适合对产品功能前沿发展感兴趣的技术用户，但可能存在较多问题或不完整功能，不建议在生产环境中使用。

| 版本     | 源码分支  | Docker 镜像版本（推荐）            | create-nocobase-app 版本     | 对应具体版本号                               |
| -------- | --------- | ---------------------------------- | ---------------------------- | -------------------------------------------- |
| `Latest` | `main`    | `nocobase/nocobase:latest-full`   | `create-nocobase-app@latest` | `1.3.51`<br />`1.3.52`<br />...              |
| `Beta`   | `next`    | `nocobase/nocobase:beta-full`     | `create-nocobase-app@beta`   | `1.4.0-beta.1`<br/>`1.4.0-beta.2`<br />...   |
| `Alpha`  | `develop` | `nocobase/nocobase:alpha-full`    | `create-nocobase-app@alpha`  | `1.5.0-alpha.1`<br/>`1.5.0-alpha.2`<br />... |
