# 概述

<PluginInfo name="workflow-dynamic-calculation" link="/handbook/workflow/plugins/dynamic-calculation"></PluginInfo>

区别于普通的运算节点只执行固定的表达式计算，动态表达式节点可以基于数据关联的表达式进行不同的计算。其解决的核心问题是由于普通的公式字段针对数据表所有数据行都只能使用同一个固定公式进行计算，而动态表达式可以针对数据行不同计算方式时，在工作流中进行处理以达成动态计算的目标。

例如订单数据在所属不同产品分类下使用不同的统计公式来计算特定的报表数据。

## 安装

内置插件，无需安装。

## 使用手册

动态表达式的使用分为几个部分：

- [“表达式”模板表](./collection.md)
- [节点](./node.md)

并可以参考 [示例](./example.md) 了解实际场景中的使用。
