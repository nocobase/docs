# SQL 表

## 介绍

![](https://static-docs.nocobase.com/c6221758f3aea2f45d0df7b815353697.png)

SQL collection 提供了一种通过 SQL 语句获取数据的方法。通过 SQL 语句获取数据字段，配置字段元数据之后，用户可以像使用普通表一样，给表格、图表、工作流等使用，适用于关联查询、统计等场景。

## 新建

![](https://static-docs.nocobase.com/64b3a663285be6377141901c2ff3e1f0.png)

1. 在 SQL 输入框输入 SQL 语句后，点击执行 (Execute) 后，系统将会尝试解析 SQL 使用了哪些表和字段，从来源表中解析出字段元数据。

![](https://static-docs.nocobase.com/513f2161226dd1e705ab0cf0efb2be90.png)

1. 如果系统自动分析的来源表和字段不对，可以手动选择对应的表和字段，来使用对应字段的元数据。需要先选择来源表，才能在下方的字段来源中选择该表的字段。

![](https://static-docs.nocobase.com/966759acf8d6f7380d27feb4edcc15ed.png)

1. 如果字段没有对应的来源字段，系统会根据数据类型推断字段类型，如果推断结果不对，可以手动选择字段类型。

![](https://static-docs.nocobase.com/0e752127ab3e46c0742522891310906b.png)

1. 在配置字段的同时可以在预览区域看到对应的展示效果。

![](https://static-docs.nocobase.com/d741d8b43785e003d35fc0b53fc0e649.png)

1. 配置完成，确认无误之后，需要点击 SQL 输入框下方的确认 (Confirm) 按钮才能进行最后的提交。

## 编辑

1. SQL 语句有变化时，可以点击修改 (Edit) 按钮，直接修改 SQL 语句，重新配置字段。
2. 需要修改字段元数据时，可以通过配置字段 (Configure fields), 像普通表一样修改字段相关配置。

## 同步

![](https://static-docs.nocobase.com/dd5c0ea1b3def4c8bf4d5fcdb81fac3a.png)

SQL 语句无变化，但数据库表结构有变化时，可以通过点击配置字段 (Configure fields) - 从数据库同步 (Sync from database) 对字段进行同步和配置。

## SQL 表对比连接数据库视图

| 模板类型       | 适用场景                                                               | 实现原理   | 增删改支持 |
| -------------- | ---------------------------------------------------------------------- | ---------- | ---------- |
| SQL            | 模型比较简单，较轻量场景不方便操作数据库不想维护视图想完全通过 UI 操作 | SQL 子查询 | 不支持     |
| 连接数据库视图 | 模型比较复杂需要和数据库交互需要修改数据需要更良好和稳定的数据库支持   | 数据库视图 | 部分支持   |
