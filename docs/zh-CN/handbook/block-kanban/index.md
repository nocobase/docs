# 看板区块

<PluginInfo name="block-kanban"></PluginInfo>

## 介绍

Kanban（看板）区块以看板视图展示数据，支持直接拖拽调整数据状态。

## 安装

内置插件，无需安装。

## 添加区块

<video width="100%" height="440" controls>
      <source src="https://static-docs.nocobase.com/20240419214551.mp4" type="video/mp4">
</video>

![20240419214751](https://static-docs.nocobase.com/20240419214751.png)

### 分组字段

用于将数据按照特定的分类进行分组，在创建或配置看板区块时，需要选择单选字段作为分组字段。

### 排序字段

用于在每个分组内对数据进行排序，只能选择与分组字段绑定的排序字段，在创建看板区块时支持快捷创建排序字段。

![20240426170628](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240426170628.png)

## 看板管理数据

### 点击卡片

点击卡片，在弹出的弹窗中可按需配置数据区块。如配置编辑表单修改当前卡片记录。

![20240419220115](https://static-docs.nocobase.com/20240419220115.png)

支持配置弹窗打开方式、弹窗尺寸。

![20240419220159](https://static-docs.nocobase.com/20240419220159.png)

### 拖拽卡片

示例：通过拖拽卡片调整商品状态，拖拽完成即保存数据。

<video width="100%" height="440" controls>
      <source src="https://static-docs.nocobase.com/20240419221247.mp4" type="video/mp4">
</video>

## 区块配置项

### 设置数据范围

示例：默认筛选促销的商品。

![20240422095659](https://static-docs.nocobase.com/20240422095659.png)

更多内容参考 [设置数据范围](/handbook/ui/blocks/block-settings/data-scope)

## 配置字段

![20240419215909](https://static-docs.nocobase.com/20240419215909.png)

## 配置操作

![20240419220903](https://static-docs.nocobase.com/20240419220903.png)

- [筛选](/handbook/ui/actions/types/filter)
- [添加](/handbook/ui/actions/types/add-new)
