# 迁移管理

<PluginInfo licenseBundled="true" name="migration-manager"></PluginInfo>

## 介绍

用于将应用配置从一个应用环境迁移到另一个应用环境。迁移管理更侧重「应用配置」的迁移，如果需要全量的迁移，建议使用「[备份管理器](/handbook/backups)」的备份还原。

## 安装

依赖 [备份管理](/handbook/backups) 插件，请确保已经安装并激活。更多详情参考 [商业插件的安装与升级](/welcome/getting-started/plugin)。

## 流程与原理

将主数据库的数据表及数据，根据迁移规则，从一个应用迁移至另一个应用。需要注意的是不迁移外部数据库和子应用的数据。

![20250102202546](https://static-docs.nocobase.com/20250102202546.png)

## 迁移规则

### 内置规则

迁移管理是主数据库里所有数据表的迁移，目前支持以下五种规则：

- 仅结构：只迁移数据表结构，不涉及数据的插入或更新；
- 覆盖（清空并重新插入）：清空现有数据表中的所有记录，然后插入新数据；
- 插入或更新：如果记录存在则更新，不存在则插入；
- 插入时忽略重复：插入数据时，如果记录已存在，则忽略不做更新；
- 跳过：不进行任何处理。

备注：

- 覆盖、插入或更新、插入时忽略重复，也会同步表结构变化；
- 主键为自增 ID 或者无主键的数据表无 `插入或更新` 和 `插入时忽略重复` 规则；
- `插入或更新` 和 `插入时忽略重复` 是通过主键来辨别记录是否存在。

### 详细设计

![20250102204909](https://static-docs.nocobase.com/20250102204909.png)

### 配置界面

配置迁移规则

![20250102205450](https://static-docs.nocobase.com/20250102205450.png)

启用独立规则

![20250107105005](https://static-docs.nocobase.com/20250107105005.png)

选择独立规则以及按当前独立规则处理的数据表

![20250107104644](https://static-docs.nocobase.com/20250107104644.png)

## 迁移文件

![20250102205844](https://static-docs.nocobase.com/20250102205844.png)

### 新建迁移

![20250102205857](https://static-docs.nocobase.com/20250102205857.png)

### 执行迁移

![20250102205915](https://static-docs.nocobase.com/20250102205915.png)

应用环境变量检测（了解何为 [环境变量](/handbook/environment-variables)）

![20250102212311](https://static-docs.nocobase.com/20250102212311.png)

如果缺失就会弹窗提示用户，要在这里填写需要新增的环境变量，然后继续

![20250102210009](https://static-docs.nocobase.com/20250102210009.png)

## 迁移日志

![20250102205738](https://static-docs.nocobase.com/20250102205738.png)

## 回滚

执行迁移前，会自动对当前应用进行备份。如果迁移失败或结果不符合预期，可通过 [备份管理器](/handbook/backups) 进行回滚恢复。

![20250105195029](https://static-docs.nocobase.com/20250105195029.png)
