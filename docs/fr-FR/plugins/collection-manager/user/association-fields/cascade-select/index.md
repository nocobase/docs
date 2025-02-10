# 级联选择器

级联选择器用于关系字段目标表为**树表**时，提供的便捷的数据选择方式。按照树表数据的层次结构选择相关数据项。支持子数据的搜索过滤

如任务管理应用模型中，任务表中有关系字段「部门」（多对多），「项目」（多对一），部门表和项目表均为树表

- 关系为对一，级联为单选

![](https://static-docs.nocobase.com/3f8ad42c318ebf6b6c1367da33f4e235.png)

- 关系为对多，级联为多选，支持拖拽排序

![](https://static-docs.nocobase.com/2a4f58986712b073d69a33f17f1d44fc.png)

![](https://static-docs.nocobase.com/02fec13f436d55108a7328a0716cdfde.png)
