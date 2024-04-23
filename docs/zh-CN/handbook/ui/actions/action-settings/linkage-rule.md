# 操作的联动规则

## 介绍

操作的联动规则基于上下文数据配置条件和执行结果。可添加多条规则，控制按钮的显示、隐藏、启用、禁用状态。

![20240423113057](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240423113057.png)

## 使用说明

![20240413102150](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240413102150.png)

满足条件时（无条件默认通过），触发执行，支持在条件判断中使用常量/变量。

### 常量

示例：已取消的订单隐藏复制按钮。

![20240423113212](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240423113212.png)

### 变量

示例：收货日期晚于今天的订单删除按钮禁用。

![20240423113504](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240423113504.png)

更多关于变量内容参考 [变量](/handbook/ui/variables)。
