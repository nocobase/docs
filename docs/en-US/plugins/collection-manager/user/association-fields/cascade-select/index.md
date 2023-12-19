# 级联选择器

级联选择器用于关系字段目标表为**树表**时，提供的便捷的数据选择方式。按照树表数据的层次结构选择相关数据项。支持子数据的搜索过滤

如任务管理应用模型中，任务表中有关系字段「部门」（多对多），「项目」（多对一），部门表和项目表均为树表

- 关系为对一，级联为单选

![](./static/ZOtzbc1BOoailOxdK41cnJvvnjd.png)

- 关系为对多，级联为多选，支持拖拽排序

![](./static/OHftb05waogIjzxjUgNcfUIan8f.png)

![](./static/GjqEbeQ8IoFUFtxeS8cc16Fjnac.png)
