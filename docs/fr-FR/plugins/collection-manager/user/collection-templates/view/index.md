# 数据库视图

![](https://static-docs.nocobase.com/3e33ae5e23399105ab83c7d5ecb32a26.png)

## 基础概念

数据库视图是数据库中的虚拟表，它基于一个或多个数据库表的查询结果生成，具有与表相似的结构，但不存储实际数据。数据库视图允许用户以更简单、更抽象的方式访问和操作数据

将数据库中的视图与 Collection 连接是 NocoBase 提供的一种有效建表方式。通过在数据库中创建视图，可以在 Collection 管理中引用并映射为数据表，特别适用于统计场景。这种方式不仅提高了数据表的可维护性，在不同应用场景中还能灵活使用。

下面以订单管理系统中常见的统计业务场景为例

订单表和客户表有关联关系，统计每个客户的销售金额汇总和销售数量汇总，展示字段：客户名称、客户手机号、销售金额汇总，销售数量汇总

在数据库中创建视图：

```go
SELECT t2.customer_name,
    t2.mobile_number ,
    sum(t1.amount) AS sum_amount,
    sum(t1.quantity) AS sum_quantity
   FROM Orders t1
     JOIN Customers t2 ON t1.f_6ln1f7tqn9b = t2.id
  GROUP BY t2.customer_name, t2.mobile_number;
```

数据库中的视图：

![](https://static-docs.nocobase.com/a5eaaadd358f41b33e036198cf0600ce.png)

## 创建视图数据表

在 NocoBase 中将上面视图映射为数据表（Collection）使用

选择目标视图

![](https://static-docs.nocobase.com/cf950e4d2851bdde475838a2f040a79e.png)

- 支持自定义视图的列名（字段名）
- 来源字段：即源表的元字段，当字段未解析出源表来源字段时（聚合的字段无来源字段），可指定字段的 interface
- 视图数据是否支持增删改操作（默认不支持）

![](https://static-docs.nocobase.com/0d99fc9047f25119dbce0c396a866cf7.png)

完整的示例配置流程如图

![](https://static-docs.nocobase.com/bd0f54c899b4d8740779dd0cb8f1d65f.gif)

- Sync from database 支持调整视图表配置（若数据库中视图进行了调整，可重新连接视图同步数据）
- 删除：这里删除操作不会将源表字段删除，仅删除视图表中的字段

![](https://static-docs.nocobase.com/39e906c75a7f7a3d1c38d8fa0be7d068.png)

是否支持对视图数据表的增删改操作（默认不启用），启用时，对应区块才支持增加、删除等操作

![](https://static-docs.nocobase.com/064ce37acb2f1f61cfe91a5892b34bdb.png)

## 视图数据表在 UI 中的使用

- 作为区块的数据源

视图表与其他任意方式创建的数据表一样在所有区块中都能选中作为数据源

![](https://static-docs.nocobase.com/1208a826507e9dd210ba63f9bfeaa90d.gif)
