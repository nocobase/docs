# 表格区块

## 介绍

表格区块是 NocoBase 内置的核心数据区块之一，以表格形式展示和管理结构化数据。具备灵活的配置选项，可定制列数、列宽和数据的排序规则、数据范围等、同时内置了多种操作以供配置：筛选、新建、复制、编辑、删除等。
## 添加区块

 <video width="100%" height="440" controls>
      <source src="https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240415215027.mp4" type="video/mp4">
</video>

## 区块设置项

![20240415215319](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240415215319.png)

### 设置数据范围

示例：默认筛选「状态」为已发货的单据。

![20240415215404](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240415215404.png)

更多内容参考 [设置数据范围](/handbook/ui/blocks/block-settings/data-scope)

### 设置排序规则

示例：按发货日期倒序排序。

![20240415215509](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240415215509.png)

更多内容参考 [设置排序规则](/handbook/ui/blocks/block-settings/sorting-rule)

### 连接数据区块

订单表格区块和订单详情区块实现联动。

  <video width="100%" height="440" controls>
      <source src="https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240415221426.mp4" type="video/mp4">
</video>

更多内容参考 [连接数据区块](/handbook/ui/blocks/block-settings/connect-block)

- [编辑区块标题](/handbook/ui/blocks/block-settings/block-title)
- [设置数据加载方式](/handbook/ui/blocks/block-settings/loading-mode)
- [保存为区块模板](/handbook/ui/blocks/block-settings/block-template)


## 配置字段

### 显示字段（本表字段）

![20240415223714](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240415223714.png)

### 显示关系字段（关系表字段）

![20240415223746](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240415223746.png)

### 显示继承表字段（父表字段）

示例：租赁订单表继承订单表。

![20240415224242](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240415224242.png)

表格列字段配置项可参考 [表格列字段](/handbook/ui/fields/generic/table-column)

## 配置操作

### 全局操作

![20240415225525](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240415225525.png)

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

![20240415225657](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240415225657.png)

- [查看](/handbook/ui/actions/types/view)
- [编辑](/handbook/ui/actions/types/edit)
- [复制](/handbook/action-duplicate)
- [删除](/handbook/ui/actions/types/delete)
- [弹窗](/handbook/ui/actions/types/pop-up)
- [更新记录](/handbook/ui/actions/types/update-record)
- [自定义请求](/handbook/action-custom-request)


