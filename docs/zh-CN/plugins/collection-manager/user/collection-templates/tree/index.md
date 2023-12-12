# 树表

![](./static/Q1OgbmzcHowD3fxFylUcGMBbndc.png)

和普通表一样支持自定义设置数据表的行为

![](./static/VDg1bTG3noShtXxtU7QcwGMKnch.png)

树表模板的预定义字段

```go
[
      {
        interface: 'integer',
        name: 'parentId',
        type: 'bigInt',
        isForeignKey: true,
      },
      {
        interface: 'm2o',
        type: 'belongsTo',
        name: 'parent',
        foreignKey: 'parentId',
        treeParent: true,
        onDelete: 'CASCADE',
      },
      {
        interface: 'o2m',
        type: 'hasMany',
        name: 'children',
        foreignKey: 'parentId',
        treeChildren: true,
        onDelete: 'CASCADE',
      },
    ]
```

树表创建后初始化字段

![](./static/MmJhbxcoeo66DqxMDhaclBGPndh.png)

树表数据表模板是通过自关联字段实现树形结构的设计

- 父节点关联字段（Many to One）：通常称为 "Parent" 字段，它与同一表中的其他记录建立关联，表示每个节点的父节点。
- 子节点关联字段（One to Many）：通常称为 "Children" 字段，它表示每个节点可以有多个子节点

## 在区块中使用

- 树表格 :默认开启（禁用时，数据将平铺返回）
- 添加子记录：为当前记录添加子记录

![](./static/MtYebfdtAook0ZxJZkfcrGTAnHh.png)
