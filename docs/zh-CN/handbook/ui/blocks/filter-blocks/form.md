# 表单筛选区块

## 介绍

表单筛选区块可以和数据区块进行连接，连接之后就可以为数据区块提供筛选能力。

## 添加区块

  <video width="100%" height="440" controls>
      <source src="https://static-docs.nocobase.com/20240426172722.mp4" type="video/mp4">
    </video>

## 区块配置项

![20240421172115](https://static-docs.nocobase.com/20240421172115.png)

### 连接数据区块

示例：表单筛选区块连接详情数据区块实现联动。

  <video width="100%" height="440" controls>
      <source src="https://static-docs.nocobase.com/20240421170947.mp4" type="video/mp4">
    </video>

更多内容参考 [连接数据区块](/handbook/ui/blocks/block-settings/connect-block)

- [编辑区块标题](/handbook/ui/blocks/block-settings/block-title)
- [联动规则](/handbook/ui/blocks/block-settings/linkage-rule)
- [保存为区块模板](/handbook/block-template)

## 配置字段

### 本表字段

![20240421171135](https://static-docs.nocobase.com/20240421171135.png)

### 关系表字段
> 在 v1.3.14-beta 及以上版本，支持配置 “多对多” 和 “一对多” 的关系字段。

支持以关系表的字段为筛选条件

示例：订单表有多对一关系字段「客户」，以客户名称和手机号为筛选条件筛选订单

<video width="100%" height="440" controls>
<source src="https://static-docs.nocobase.com/20240421171437.mp4" type="video/mp4">
</video>

### 给字段设置默认值

像普通的[表单区块](/handbook/ui/blocks/data-blocks/form)一样，可以为普通字段和关系字段设置默认值。**当字段存在默认值时，会在页面首次渲染时自动触发一次筛选操作，以使与其相连接的数据区块展示相匹配的数据。**

## 配置操作

![筛选操作](https://static-docs.nocobase.com/20240421171839.png)


### 重置按钮

默认清况下，点击“重置”按钮会保留字段的默认值。如果想清空字段的默认值，可以打开配置项，开启“清除默认值”选项。

![20240716183611](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240716183611.png)
