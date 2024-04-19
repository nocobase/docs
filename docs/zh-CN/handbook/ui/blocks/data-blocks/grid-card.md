# 网格卡片

## 介绍

网格卡片区块以卡片形式展示多个数据记录的摘要信息，支持根据不同屏幕尺寸配置列数，以确保在移动设备等各种设备上的友好显示。

### 添加区块

<video width="100%" height="440" controls>
      <source src="https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240418120045.mp4" type="video/mp4">
</video>

## 区块设置项

![20240419220708](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240419220708.png)
### 数据范围

<video width="100%" height="440" controls>
      <source src="https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240419173617.mp4" type="video/mp4">
</video>

更多内容参考 [设置数据范围](/handbook/ui/blocks/block-settings/data-scope)

### 设置一行展示的列数

![20240408160228](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240408160228.png)

![20240408160844](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240408160844.png)

### 设置数据加载方式

示例：连接数据区块+设置数据加载方式

订单表和商品表是多对多的关系，订单表格区块和商品网格区块实现数据筛选联动，同时设置网格区块数据加载方式为筛选数据后

<video width="100%" height="440" controls>
<source src="https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240419175643.mp4" type="video/mp4">
</video>

- [设置排序规则](/handbook/ui/blocks/block-settings/sorting-rule)
- [保存为区块模板](/handbook/ui/blocks/block-settings/block-template)

## 配置字段

### 本表字段

![20240418123118](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240418123118.png)

### 关系表字段

![20240418123147](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240418123147.png)

网格区块字段配置项可参考 [详情字段](/handbook/ui/fields/generic/detail-form-item)

## 配置操作

### 全局操作

![20240418122905](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240418122905.png)

- [筛选](/handbook/ui/actions/types/filter)
- [添加](/handbook/ui/actions/types/add-new)
- [删除](/handbook/ui/actions/types/delete)
- [刷新](/handbook/ui/actions/types/refresh)
- [导入](/handbook/action-import)
- [导出](/handbook/action-export)
### 行操作

![20240419222251](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240419222251.png)

- [编辑](/handbook/ui/actions/types/edit)
- [删除](/handbook/ui/actions/types/delete)
- [弹窗](/handbook/ui/actions/types/pop-up)
- [更新记录](/handbook/ui/actions/types/update-record)
- [自定义请求](/handbook/action-custom-request)
- 提交至工作流