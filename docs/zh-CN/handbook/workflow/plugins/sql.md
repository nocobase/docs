# SQL 操作

在一些特殊场景里，上面简单的数据表操作节点可能无法复杂的操作，则可以直接使用 SQL 节点，使数据库直接执行复杂的 SQL 语句进行数据操作。

与在应用外部直接连接数据库进行 SQL 操作的区别是，在工作流内可以使用流程上下文的变量，作为 SQL 语句中的部分参数。

## FAQ

### SQL 节点的结果如何使用？

如果使用了 `SELECT` 语句，查询结果会以 Seqeulize 的 JSON 格式保存在节点中，可以通过 [JSON-query](/handbook/workflow/plugins/json-query) 插件进行解析并使用。

### SQL 操作是否会触发数据表事件？

**不会**。SQL 操作是直接将 SQL 语句发送到数据库进行处理，相关的 `CREATE` / `UPDATE` / `DELETE` 操作都发生在数据库中，而数据表事件发生在 Node.js 的应用层（ORM 处理），所以不会触发数据表的事件。

## 安装

内置插件，无需安装。

## 使用手册

### 创建节点

在工作流配置界面中，点击流程中的加号（“+”）按钮，添加“SQL 操作”节点：

![SQL 操作_添加](https://static-docs.nocobase.com/0ce40a226d7a5bf3717813e27da40e62.png)

### 节点配置

通过编辑框右上角的变量按钮插入需要的变量，会在执行前通过文本替换为对应变量的值：

![SQL节点_节点配置](https://static-docs.nocobase.com/98611dc13bcda04348bd0856561a7b04.png)
