# 字段联动规则

## 介绍

字段联动规则是指允许根据用户的行为动态调整表单/详情区块字段的状态，例如：显示/隐藏、必填/非必填、赋值，选项字段的范围设置、时间字段的可选范围等。现在支持配置联动规则的有：[表单区块](https://docs-cn.nocobase.com/handbook/ui/blocks/data-blocks/form#%E8%81%94%E5%8A%A8%E8%A7%84%E5%88%99)、[详情区块](https://docs-cn.nocobase.com/handbook/ui/blocks/data-blocks/details#%E8%81%94%E5%8A%A8%E8%A7%84%E5%88%99)、[子表单](https://docs-cn.nocobase.com/handbook/ui/fields/specific/nester)（需 v1.3.17-beta 及以上版本）、[子表格](https://docs-cn.nocobase.com/handbook/ui/fields/specific/sub-table)（需 v1.3.17-beta 及以上版本）。

![20240408100711](https://static-docs.nocobase.com/20240408100711.png)

![20240408100757](https://static-docs.nocobase.com/20240408100757.png)

## 使用说明

1. 配置表单字段：所有在规则中使用的表单字段都需要配置出来，以确保规则的有效性和准确性。

2. 条件触发：当规则中的条件满足时（非必填），会自动执行下方的属性修改操作。

3. 支持多个规则：可以为一个表单配置多个联动规则，当同时符合多个规则条件时，系统会按照规则的先后顺序从前往后执行结果。

4. 规则管理：支持自定义命名、排序、删除、启用、禁用和复制规则。

5. 支持常量/变量：在字段赋值和条件配置中支持使用常量或变量，关于变量内容可参考 [变量](/handbook/ui/variables)。

### 赋值

示例：根据预计年采购额自动评估并设置客户的级别（例如：A+ 级、A 级、 A- 级)。

- 年采购额 大于 20000 客户级别为 A+。

![20240408102241](https://static-docs.nocobase.com/20240408102241.png)

- 年采购额 大于 10000 客户级别小于等于20000为 A。

![20240408102303](https://static-docs.nocobase.com/20240408102303.png)

- 年采购额 小于 10000 客户级别为 A-。

![20240408102324](https://static-docs.nocobase.com/20240408102324.png)

### 必填

示例: 根据是否促销控制商品促销价格是否必填。

- 是否促销为 true ,促销价格必填。

![20240408105031](https://static-docs.nocobase.com/20240408105031.png)

- 是否促销为 false ,促销价格非必填。

![20240408105115](https://static-docs.nocobase.com/20240408105115.png)

### 显示/隐藏

示例: 根据是否促销控制促销价格输入框是否显示。

- 是否促销为 true,促销价格显示且必填。

![20240408115240](https://static-docs.nocobase.com/20240408115240.png)

- 是否促销为 false,促销价格隐藏且非必填。

![20240408115338](https://static-docs.nocobase.com/20240408115338.png)

### 选项

> **注意**: 该功能**从v1.7.0-beta.2版本起支持**

支持为`select`, `radioGroup`, `multipleSelect`, `checkboxGroup`等类型的字段动态的配置选项，其可选项可以根据表单中其他字段的变化实现联动。

示例：在商品管理系统中，根据选择商品的主类别，控制子类别可选项。

- 主类别（Select）：电子产品时，子类别可选项为手机、笔记本、耳机。

![20250313215730](https://static-docs.nocobase.com/20250313215730.png)

- 主类别为家用电器，子类别可选项为空调、冰箱、洗衣机。

![20250313215834](https://static-docs.nocobase.com/20250313215834.png)

联动效果如下

<video width="100%" height="440" controls>
      <source src="https://static-docs.nocobase.com/20250313215944.mp4" type="video/mp4">
</video>

### 日期范围

> **注意**: 该功能**从v1.7.0-beta.2版本起支持**

支持为`date`, `datetime`, `dateOnly`, `datetimeNoTz`, `unixTimestamp`, `createdAt`, `updatedAt`等类型字段动态配置日期范围，其可选日期范围可以根据表单中其他字段的变化自动调整。

示例：选择开始日期后，结束日期不能早于开始日期。

![20250313220839](https://static-docs.nocobase.com/20250313220839.png)

示例：交付日期 (Delivery Date) 不能早于今天且不能晚于订单截止日期 (Order Deadline)。

![20250313222051](https://static-docs.nocobase.com/20250313222051.png)
