# 日历区块

<PluginInfo name="calendar"></PluginInfo>

## 介绍

日历区块以日历视图显示事件和日期相关的数据，适用于会议安排、活动计划等场景。

## 安装

内置插件，无需安装。

## 添加区块

<video width="100%" height="440" controls>
      <source src="https://static-docs.nocobase.com/20240419201640.mp4" type="video/mp4">
</video>

1. 标题字段: 用于显示在日历条形上的信息；
2. 开始时间: 任务的开始时间；
3. 结束时间: 任务的结束时间；

点击任务条,同一任务条高亮，并弹出弹窗。

![20240408171928](https://static-docs.nocobase.com/20240408171928.png)

## 区块配置项

![20240419203321](https://static-docs.nocobase.com/20240419203321.png)

### 展示农历

![20240419203603](https://static-docs.nocobase.com/20240419203603.png)

- [编辑区块标题](/handbook/ui/blocks/block-settings/block-title)
- [保存为区块模板](/handbook/ui/blocks/block-settings/block-template)

### 设置数据范围

![20240419203751](https://static-docs.nocobase.com/20240419203751.png)

更多内容参考 [设置数据范围](/handbook/ui/blocks/block-settings/data-scope)

### 设置区块高度

示例：调整订单日历区块高度,日历区块内部不会出现滚动条。

![20240605215742](https://static-docs.nocobase.com/20240605215742.gif)

更多内容参考 [区块高度](/handbook/ui/blocks/block-settings/block-height)

### 背景颜色字段

:::info{title=提示}
需要 NocoBase 的版本是 v1.4.0-beta 及以上。
:::

该选项可以用来配置日历事件的背景颜色。使用方法如下：

1. 日历数据表中需要有一个**下拉单选（Single select）**或者**单选框（Radio group）**类型的字段，该字段需要配置上颜色。
2. 然后，回到日历区块的配置界面，在**背景颜色字段**中选择刚刚配置上颜色的字段。
3. 最后，可以试一下给一个日历事件选中一个颜色，然后点击提交，就可以看到颜色已经生效了。

![20240914192017_rec_](https://static-docs.nocobase.com/20240914192017_rec_.gif)

## 配置操作

![20240419203424](https://static-docs.nocobase.com/20240419203424.png)

### 今天

日历区块的"今天"按钮提供了便捷的导航功能，允许用户在翻页到其他日期后快速返回到当前日期所在的日历页。

![20240419203514](https://static-docs.nocobase.com/20240419203514.png)

### 切换视图

默认是月

![20240419203349](https://static-docs.nocobase.com/20240419203349.png)
