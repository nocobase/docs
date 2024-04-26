# 地图区块

<PluginInfo name="block-map"></PluginInfo>

## 介绍

地图区块用于展示和管理地图字段，扩展了四种地图字段，包括点、线、圆和多边形。

## 安装

预置插件，需要先激活才能使用。

![20240421120958](https://static-docs.nocobase.com/20240421120958.png)

启用插件后需配置地图认证信息。

![20240421121032](https://static-docs.nocobase.com/20240421121032.png)

数据表中可以添加地图字段。

![20240426171356](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240426171356.png)

## 添加区块

仅数据表中有地图字段的区块支持添加地图区块。

![20240408194209](https://static-docs.nocobase.com/20240408194209.png)

![20240408194420](https://static-docs.nocobase.com/20240408194420.png)

1. 地图字段: 地图元素类型（点、线、多边形）。
2. 标记字段: 地图标注（仅点类型支持）。

### 点

应用场景：零售店网点分布。

![20240408195630](https://static-docs.nocobase.com/20240408195630.png)

### 线

线是由一组地图点组成，如下显示运单轨迹。

![20240408201608](https://static-docs.nocobase.com/20240408201608.png)

### 圆

![20240408201939](https://static-docs.nocobase.com/20240408201939.png)

### 多边形

应用场景：适用片区规划。

![多边形](https://static-docs.nocobase.com/20240408200546.png)

## 区块配置项

![20240421121949](https://static-docs.nocobase.com/20240421121949.png)

### 连接顺序字段

将点按顺序字段依次连接。

![20240408202645](https://static-docs.nocobase.com/20240408202645.png)

![20240421121917](https://static-docs.nocobase.com/20240421121917.png)

![20240422101027](https://static-docs.nocobase.com/20240422101027.png)

### 地图默认缩放级别

默认值为13。

![20240408202854](https://static-docs.nocobase.com/20240408202854.png)

### 设置数据范围

示例：筛选订单状态为已发货的运单（通过关系字段筛选），符合数据范围内的运单记录才会打点。

![20240422101250](https://static-docs.nocobase.com/20240422101250.png)

更多内容参考 [设置数据范围](/handbook/ui/blocks/block-settings/data-scope)

- [编辑区块标题](/handbook/ui/blocks/block-settings/block-title)
- [连接数据区块](/handbook/ui/blocks/block-settings/connect-block)
- [保存为区块模板](/handbook/ui/blocks/block-settings/block-template)

## 配置操作

![20240421122020](https://static-docs.nocobase.com/20240421122020.png)

### 批量选中点。

![20240422102334](https://static-docs.nocobase.com/20240422102334.gif)

- [筛选](/handbook/ui/actions/types/filter)
- [添加](/handbook/ui/actions/types/add-new)
- [刷新](/handbook/ui/actions/types/refresh)
- [批量更新](/handbook/action-bulk-update)
- [批量编辑](/handbook/action-bulk-edit)
