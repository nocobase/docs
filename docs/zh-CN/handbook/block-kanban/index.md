# 看板区块

<PluginInfo name="block-kanban"></PluginInfo>

## 介绍

Kanban （看板）是一种敏捷项目管理工具，旨在实现工作可视化、限制进行中的工作数量并最大限度地提高工作效率。看板区块是任务管理的理想选择，它以看板视图展示数据，支持直接拖拽调整数据状态。

## 安装

内置插件，无需安装。

## 添加区块

<video width="100%" height="440" controls>
      <source src="https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240419214551.mp4" type="video/mp4">
</video>

![20240419214751](https://static-docs.nocobase.com/20240419214751.png)

### 分组字段

用于将数据按照特定的分类进行分组，在创建或配置看板区块时，需要选择单选字段作为分组字段。

### 排序字段

用于在每个分组内对数据进行排序，只能选择与分组字段相对应的排序字段，在创建看板区块时支持快捷创建排序字段。

## 看板管理数据

### 点击卡片

点击卡片，弹出弹窗，在弹窗中可配置数据区块进行数据管理

![20240419220115](https://static-docs.nocobase.com/20240419220115.png)

支持配置弹窗打开方式、弹窗尺寸

![20240419220159](https://static-docs.nocobase.com/20240419220159.png)

### 拖拽卡片

在列之间拖拽，从而更新其状态

<video width="100%" height="440" controls>
      <source src="https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240419221247.mp4" type="video/mp4">
</video>

## 区块设置项

### 设置数据范围

示例：默认筛选促销的商品

![20240422095659](https://static-docs.nocobase.com/20240422095659.png)

更多内容参考 [设置数据范围](/handbook/ui/blocks/block-settings/data-scope)

## 配置字段

![20240419215909](https://static-docs.nocobase.com/20240419215909.png)

## 配置操作

![20240419220903](https://static-docs.nocobase.com/20240419220903.png)

- [筛选](/handbook/ui/actions/types/filter)
- [添加](/handbook/ui/actions/types/add-new)
