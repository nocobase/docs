# 主数据库

<PluginInfo name="data-source-main"></PluginInfo>

## 介绍

NocoBase 的主数据库既可以用于存储业务数据，又用于存储应用的元数据，包括系统表数据、自定义表数据等。主数据库支持 MySQL、PostgreSQL、SQLite 等关系型数据库。在安装 NocoBase 应用的时候，主数据库就要同步安装，且不可删除。

## 安装

内置插件，无需单独安装。

## 使用手册

![20240322230134](https://static-docs.nocobase.com/20240322230134.png)

### 支持创建各种数据表

- [普通表](/handbook/data-source-main/general-collection)：内置了常用的系统字段；
- [继承表](/handbook/data-source-main/inheritance-collection)：可以创建一个父表，然后从该父表派生出子表，子表会继承父表的结构，同时还可以定义自己的列。
- [树表](/handbook/collection-tree)：树结构表，目前只支持邻接表设计；
- [日历表](/handbook/block-calendar/collection-calendar)：用于创建日历相关的事件表；
- [文件表](/handbook/file-manager/file-collection)：用于文件存储的管理；
- [表达式表](/handbook/workflow-dynamic-calculation/expression)：用于工作流的动态表达式场景；
- [SQL 表](/handbook/collection-sql)：并不是实际的数据库表，而是快速的将 SQL 查询，结构化的展示出来；
- [视图表](/handbook/collection-view)：连接已有的数据库视图；
- [外部表](/handbook/collection-fdw)：允许数据库系统直接访问和查询外部数据源中的数据，基于 FDW 技术；

### 支持数据表的分类管理

![20240322231520](https://static-docs.nocobase.com/20240322231520.png)

### 提供了丰富的数据表字段类型

![20240322230950](https://static-docs.nocobase.com/20240322230950.png)

### 数据表的使用

作为数据区块的数据来源

![20240322231949](https://static-docs.nocobase.com/20240322231949.png)

作为工作流的数据来源

![20240322232107](https://static-docs.nocobase.com/20240322232107.png)