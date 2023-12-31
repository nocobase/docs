# 数据表

开发一个系统之前，我们通常要对业务进行抽象，建立数据模型。NocoBase 的数据表由字段（列）和记录（行）组成。数据表的概念与关系型数据库的数据表概念相近，但是字段的概念略有不同。

例如，在一个描述订单的数据表中，每列包含的是订单某个特定属性的信息，如收件地址；而每行则包含了某个特定订单的所有信息，如订单号、顾客姓名、电话、收件地址等。

## 数据与视图分离

NocoBase 的`数据`和`视图`是分离的，分别由数据表和区块来管理和呈现。

这就意味着：

- 你可以创建**一个**数据表，并为其设计**一套**界面，实现数据的展示和操作；
- 你也可以创建**一个**数据表，然后为其设计**多套**界面，用于不同的场景或角色下对数据的展示和操作；
- 你还可以创建**多个**数据表，然后为其设计**一套**界面，实现多个数据表的同时展示和操作；
- 你甚至可以创建**多个**数据表，然后为其设计**多套**界面，每套界面都可以操作多个数据表并完成独特的功能；

简单说，数据与界面的分离使得**数据的组织和管理更加灵活**，如何呈现数据就看你如何配置界面。

## 字段类型

NocoBase 目前支持以下几十种字段，未来可以通过插件的方式支持更多种。

| 名称                 | 类型      |
| -------------------- | --------- |
| 单行文本             | 基本类型  |
| 图标                 | 基本类型  |
| 多行文本             | 基本类型  |
| 密码                 | 基本类型  |
| 手机号码             | 基本类型  |
| 数字                 | 基本类型  |
| 整数                 | 基本类型  |
| 电子邮箱             | 基本类型  |
| 百分比               | 基本类型  |
| 下拉菜单（单选）     | 选择类型  |
| 下拉菜单（多选）     | 选择类型  |
| 中国行政区           | 选择类型  |
| 勾选                 | 选择类型  |
| 单选框               | 选择类型  |
| 复选框               | 选择类型  |
| 关联                 | 关系类型  |
| 一对一（belongs to） | 关系类型  |
| 一对一（has one）    | 关系类型  |
| 一对多               | 关系类型  |
| 多对一               | 关系类型  |
| 多对多               | 关系类型  |
| 公式                 | 高级类型  |
| 自动编码             | 高级类型  |
| JSON                 | 高级类型  |
| Markdown             | 多媒体    |
| 富文本               | 多媒体    |
| 附件                 | 多媒体    |
| 日期                 | 日期&时间 |
| 时间                 | 日期&时间 |
| ID                   | 系统信息  |
| 创建人               | 系统信息  |
| 创建日期             | 系统信息  |
| 最后修改人           | 系统信息  |
| 最后修改日期         | 系统信息  |
