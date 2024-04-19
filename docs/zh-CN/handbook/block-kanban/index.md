# 看板区块

<PluginInfo name="block-kanban"></PluginInfo>

## 介绍

Kanban （看板）是一种敏捷项目管理工具，旨在实现工作可视化、限制进行中的工作数量并最大限度地提高工作效率，看板区块是任务管理的理想选择，它以看板视图展示数据，支持直接拖拽调整数据状态。

## 安装

内置插件，无需安装。

## 添加区块

<video width="100%" height="440" controls>
      <source src="https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240419214551.mp4" type="video/mp4">
</video>

![20240419214751](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240419214751.png)

### 分组字段

用于将数据按照特定的分类进行分组，在创建或配置看板区块时，需要选择单选字段作为分组字段。

### 排序字段

用于在每个分组内对数据进行排序，在创建看板区块时支持快捷创建排序字段。

### 点击卡片

![20240419220115](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240419220115.png)

支持配置弹窗打开方式、弹窗尺寸

![20240419220159](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240419220159.png)

### 拖拽卡片

<video width="100%" height="440" controls>
      <source src="https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240419221247.mp4" type="video/mp4">
</video>

## 区块设置项

### 数据范围

数据范围配置项允许用户定义区块所显示的数据的默认筛选条件，支持设置变量/静态值。

## 配置字段

![20240419215909](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240419215909.png)

## 配置操作

![20240419220903](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240419220903.png)

- [筛选](/handbook/ui/actions/types/filter)
- [添加](/handbook/ui/actions/types/add-new)

## 应用场景

- 订单处理看板：追踪和管理订单的生命周期。 显示当前订单状态、待处理订单、已发货订单等信息，以便团队可以迅速识别和处理订单流程中的问题。
- 库存管理看板： 实时监控和管理库存水平，可视化展示各种商品的库存量，低库存或过剩库存，支持快速的库存调整和补货决策。
