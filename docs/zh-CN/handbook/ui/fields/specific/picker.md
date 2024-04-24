# 数据选择器

## 介绍

数据选择器以弹窗表格选择器的形式，使用户能够更精确地选择关联数据，在数据选择器中配置更多关联信息字段（包括关系的关系数据），支持选择目标表的已有数据关联或为目标表添加数据后关联。

![20240410114516](https://static-docs.nocobase.com/20240410114516.png)

订单表有多对多关系字段「商品」。

已选中的数据不会显示在表格选择器中。

 <video width="100%" height="440" controls>
  <source src="https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240410121032.mp4" type="video/mp4">
</video>

在表格选择器中，还可对关系目标表进一步管理（新增、删除、导入导出等）。

![20240410115239](https://static-docs.nocobase.com/20240410115239.png)

## 字段配置项

### 允许添加数据

为目标表添加数据后选中该数据。

  <video width="100%" height="440" controls>
  <source src="https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240422214222.mp4" type="video/mp4">
  </video>

### 允许添加/关联多条

限制对多的关系数据仅允许关联一条数据。

### 标题字段

选项的 label 值

![20240422205632](https://static-docs.nocobase.com/20240422205632.gif)

更多内容参考 [标题字段](/handbook/ui/fields/field-settings/title-field)

- 字段组件：切换为其他关系组件

- 弹窗尺寸：默认为中等尺寸