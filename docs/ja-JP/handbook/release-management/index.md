# 发布管理

## 介绍

在实际应用中，为确保数据安全和应用的稳定运行，我们通常需要部署多个环境，例如开发环境、预发布环境和生产环境。本篇文档将以两种常见的无代码开发流程为例，详细说明如何在 NocoBase 中实现发布管理。

## 安装

发布管理必备的三个插件，请确保已经激活以下插件。

### 环境变量

- 内置插件，默认安装并激活。
- 集中配置和管理环境变量和密钥，用于敏感数据存储、配置数据重用、环境配置隔离等（[查看文档](environment-variables)）。

### 备份管理

- 此插件仅在专业版及以上版本中可用（[了解详情](https://www.nocobase.com/en/commercial)）。
- 提供备份与还原功能，支持定时备份，确保数据安全与快速恢复（[查看文档](/handbook/backups)）。

### 迁移管理

- 此插件仅在专业版及以上版本中可用（[了解详情](https://www.nocobase.com/en/commercial)）。
- 用于将应用配置从一个应用环境迁移到另一个应用环境（[查看文档](/handbook/migration-manager)）。

## 常见无代码开发流程

### 单个开发环境，单向发布

适用于简单的开发流程。开发、预发布和生产环境各自只有一个，变更从开发环境依次发布到预发布环境，最终部署到生产环境。在这个流程里，只有开发环境可以修改配置，预发布和生产环境都不允许修改。

![20250106234710](https://static-docs.nocobase.com/20250106234710.png)

配置迁移规则时，内核和插件内置表选择「覆盖优先」规则，其他的如果无特殊需要可以按默认处理

![20250105194845](https://static-docs.nocobase.com/20250105194845.png)

### 多个开发环境，合并发布

适用于多人协作或复杂项目场景。多个并行的开发环境可以独立开发，所有变更统一合并到预发布环境进行测试与验证，最后发布到生产环境。在这个流程里，也只有开发环境可以修改配置，预发布和生产环境都不允许修改。

![20250107103829](https://static-docs.nocobase.com/20250107103829.png)

配置迁移规则时，内核和插件内置表选择「插入或更新优先」规则，其他的如果无特殊需要可以按默认处理

![20250105194942](https://static-docs.nocobase.com/20250105194942.png)

## 回滚

执行迁移前，会自动对当前应用进行备份。如果迁移失败或结果不符合预期，可通过 [备份管理器](/handbook/backups) 进行回滚恢复。

![20250105195029](https://static-docs.nocobase.com/20250105195029.png)