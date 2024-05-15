# 甘特图

<PluginInfo name="block-gantt"></PluginInfo>

## 介绍

甘特图区块以时间线的形式呈现数据，适用于项目管理、事件计划、工程计划和任务调度等场景。

## 安装

内置插件，无需安装。

## 添加区块

![](https://static-docs.nocobase.com/f064f8fadf52947c990f5dad97736f98.png)

![](https://static-docs.nocobase.com/858112f44bc543973b6e5b03856a6360.png)

- 标题字段：用于标识任务条；
- 时间缩放等级：时间缩放等级，默认天；
- 开始日期字段：每个任务的开始日期，必填；
- 结束日期字段：每个任务的结束日期，必填；
- 进度字段：设置表示进度（百分比字段）的字段，非必填；
## 使用说明

![](https://static-docs.nocobase.com/fff6fe1e1fe0a88d20f80b3bb7233608.gif)

- 鼠标悬停时出现卡片浮层显示任务的持续时长和进度等信息；
- 拖拽调整任务的开始日期和结束日期；
- 拖拽进度条调整任务的进度；

## 区块配置项

![20240419211301](https://static-docs.nocobase.com/20240419211301.png)

### 设置数据范围

![20240419211033](https://static-docs.nocobase.com/20240419211033.png)

更多内容参考 [设置数据范围](/handbook/ui/blocks/block-settings/data-scope)

- [保存为区块模板](/handbook/ui/blocks/block-settings/block-template)
- [设置数据加载方式](/handbook/ui/blocks/block-settings/loading-mode)

## 配置操作

### 全局操作

![20240419213653](https://static-docs.nocobase.com/20240419213653.png)

- [筛选](/handbook/ui/actions/types/filter)
- [添加](/handbook/ui/actions/types/add-new)
- [删除](/handbook/ui/actions/types/delete)
- [刷新](/handbook/ui/actions/types/refresh)
- [导入](/handbook/action-import)
- [导出](/handbook/action-export)
- [添加数据](/handbook/action-add-record)
- [批量更新](/handbook/action-bulk-update)
- [批量编辑](/handbook/action-bulk-edit)

### 行操作

![20240419213823](https://static-docs.nocobase.com/20240419213823.png)

- [查看](/handbook/ui/actions/types/view)
- [编辑](/handbook/ui/actions/types/edit)
- [复制](/handbook/action-duplicate)
- [删除](/handbook/ui/actions/types/delete)
- [弹窗](/handbook/ui/actions/types/pop-up)
- [更新记录](/handbook/ui/actions/types/update-record)
- [自定义请求](/handbook/action-custom-request)
- [触发工作流](/handbook/workflow/manual/triggers/custom-action)
