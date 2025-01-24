# 第一个应用

让我们用 NocoBase 搭建一个订单管理系统。

## 1. 创建数据表和字段

在这个订单管理系统中，我们需要掌握`Customers`、`Products`、`Orders`的信息，他们彼此之间互相关联。经过分析，我们需要建立 4 个数据表，它们的字段分别为：

- Customers
  - 姓名
  - 地址
  - 性别
  - 电话
  - _订单（购买过的所有订单，数据来自`Orders`，每条顾客数据包含多条订单数据）_
- Products
  - 商品名称
  - 描述
  - 图片
  - 价格
- Orders
  - 订单编号
  - 总价
  - 备注
  - 地址
  - _顾客（该订单所属的顾客，数据来自`Customers`，每条订单数据属于一条顾客数据）_
  - _订单明细（该订单中的商品，数据来自`Order Details`，每条订单数据包含多条订单明细数据）_
- Order list
  - _订单（该明细所属的订单，数据来自`Orders`，每条订单明细数据属于一条订单数据）_
  - _商品（该明细所包含的商品，数据来自`Products`，每条订单明细数据包含一条商品数据）_
  - 数量

其中，斜体的字段是关系字段，关联到其他数据表。

接下来，点击“数据表配置”按钮，进入数据表配置界面，创建第一个 Collection `Customers`。

![create-collection.gif](https://static-docs.nocobase.com/becee29110811c8ceed9b14825e238ad.gif)

然后点击“字段配置”，为`Customers` 添加 name 字段，它是单行文本类型。

![create-field.gif](https://static-docs.nocobase.com/d4c49c55959516fc7e30a379b2eba2b3.gif)

用同样的方法，为`Customers` 添加 Address、Gender、Phone，它们分别是单行文本、单项选择类型、手机号码类型。

![fields-list.jpg](https://static-docs.nocobase.com/887d0173e3f1418f2404f1a9fac77934.jpg)

用同样的方法，创建 Collection `Products`、`Orders`、`Order list` 以及它们的字段。

![collection-list.jpg](https://static-docs.nocobase.com/5d2dabdbdebf0a02bbb81ae65f9f54c5.jpg)

其中，对于关系字段，如果你不熟悉一对多、多对多等概念，可以直接使用 Link to 类型来建立数据表之间的关联。如果你熟悉这几个概念，请正确使用 One to many, Many to one 等类型来建立数据表之间的关联。比如在这个例子中，我们将 `Orders` 与 `Order list` 关联，关系为 One to many。

![collection-list.jpg](https://static-docs.nocobase.com/be7df51a4848342af83f87f623b8fa0f.jpg)

在图形化的数据表里，可以很直观的看出各个表之间的关系。

![graph-collection.jpg](https://static-docs.nocobase.com/f045201f3ecb84d259cb31fe94a4eda4.jpg)

将数据表和字段创建完成后，我们开始制作界面。

## 2. 配置菜单和页面

我们需要顾客、订单、商品三个页面展示和管理我们的数据。

点击界面配置按钮，进入界面配置模式。在界面配置模式下，我们可以添加菜单项，添加页面，在页面内布置区块。

![1.editor.gif](https://static-docs.nocobase.com/d7cd4ec11ba8e6d44f498e4c272de7ba.gif)

点击添加菜单项，添加菜单分组 “Customers” 和 “Orders & Products” ，然后添加子菜单页面 “All Orders” 和 “Products”。

![1.menu.gif](https://static-docs.nocobase.com/22f890a608a95c9a17c325aa51f74d16.gif)

添加完菜单和页面之后，我们可以在页面内添加和配置区块了。

## 3. 添加和配置区块

NocoBase 目前支持表格、看板、日历、表单、详情等类型的区块，它们可以将数据表中的数据展示出来，并可以对数据进行操作。显然，顾客、订单、商品 都适合用表格的方式展示和操作。

我们在“所有订单”页面，添加一个表格区块，数据源选择 Collection `Orders` ，并为这个表格区块配置需要显示的列。

![1.block.gif](https://static-docs.nocobase.com/460d4a1942dcbfc331b4fb46f9ac7bee.gif)

给这个表格区块配置操作，包括筛选、添加、删除、查看、编辑。

![1.action.gif](https://static-docs.nocobase.com/5316605c55379b60b2d448e216b3f4d6.gif)

为新增、编辑、查看等操作配置表单和详情区块。

![1.action-block.gif](https://static-docs.nocobase.com/0d8dfac3b10219bd07439b40681cf0ca.gif)

然后，用同样的方法，在 Products 和 Customers 页面布置表格区块。完成后，退出界面配置模式，进入使用模式，一个简单的订单管理系统就完成了。

![demo-finished.jpg](https://static-docs.nocobase.com/ff6d0662391cb6e2ff879858e4fff698.jpg)