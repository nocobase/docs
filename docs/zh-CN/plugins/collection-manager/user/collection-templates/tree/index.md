# 树表

![](./static/YGxIbNWd2ojCGJxm8IHcvW6inyP.png)

树表创建后初始化字段

![](./static/MmJhbxcoeo66DqxMDhaclBGPndh.png)

树表数据表模板是通过自关联字段实现树形结构的设计模式

- 父节点关联字段（Many to One）：通常称为 "Parent" 字段，它与同一表中的其他记录建立关联，表示每个节点的父节点。
- 子节点关联字段（One to Many）：通常称为 "Children" 字段，它表示每个节点可以有多个子节点
