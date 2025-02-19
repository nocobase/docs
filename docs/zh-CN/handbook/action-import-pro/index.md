# 导入 Pro

<PluginInfo commercial="true" name="action-import-pro"></PluginInfo>

## 介绍

导入 Pro 插件在普通导入功能的基础上提供了增强功能。

## 安装

此插件依赖异步任务管理插件，使用前需先开启异步任务管理插件。

## 功能增强

- 支持异步导入操作，独立线程执行，支持大量数据导入。
- 支持高级导入选项。

## 使用手册

### 异步导入

在执行导入之后，导入的流程将在独立的后台线程中执行，无需用户手动配置。在用户界面中，执行导入操作后，右上方会显示当前正在执行的导入任务，并且实时展示任务进度。

![index-2024-12-30-09-21-05](https://static-docs.nocobase.com/index-2024-12-30-09-21-05.png)

导入结束后，可在导入任务中查看导入结果。

### 导入选项-是否触发工作流

![index-2024-12-30-09-16-55](https://static-docs.nocobase.com/index-2024-12-30-09-16-55.png)

在导入时可选择是否触发工作流。如勾选此选项且该数据表绑定了工作流（数据表事件），导入将逐行触发工作流执行。

### 导入选项-识别重复记录

![index-2024-12-30-09-18-27](https://static-docs.nocobase.com/index-2024-12-30-09-18-27.png)

在导入时可选择是否识别重复记录。勾选此选项，选择对应模式，则导入时会识别重复记录，并进行处理。

#### 模式说明

- 跳过重复记录： 根据“依据字段”的内容查询已有记录，如果记录已存在，就直接跳过这一行；如果不存在，则作为新记录导入。
- 更新重复记录： 根据“依据字段”的内容查询已有记录，如果记录已存在，就更新这行记录；如果不存在，则作为新记录导入。
- 仅更新重复记录： 根据“依据字段”的内容查询已有记录，如果记录已存在，就更新这条记录；如果不存在，则跳过。

#### 依据字段

系统根据此字段值识别行是否为重复记录。
