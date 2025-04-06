# 设置样式

## 介绍

用户可以在样式菜单中调整字段的样式包括color,background-color,text-align,font-size、font-weight、font-style，同时支持依据字段值或系统变量值动态调整。

## 使用方法

假设我们有一张银行交易明细表，有一列是交易金额，我们要把正数（收入）设置为绿色，负数（支出）设置为红色，以下是具体的操作步骤：

1. 首先，打开交易金额的字段设置菜单，点击风格。
![style-menu-2024-08-08-18-23-13](https://static-docs.nocobase.com/style-menu-2024-08-08-18-23-13.png)

2. 点击添加联动规则，设置第一个规则，当交易金额大于0时字段的颜色设置为绿色。
![style-green-2024-08-08-18-33-34](https://static-docs.nocobase.com/style-green-2024-08-08-18-33-34.png)

3. 再次点击添加联动规则，设置第二个规则，当交易金额小于0时字段的颜色设置为红色。
![style-red-2024-08-08-18-35-01](https://static-docs.nocobase.com/style-red-2024-08-08-18-35-01.png)

最终的效果如下
![result-2024-08-08-18-38-05](https://static-docs.nocobase.com/result-2024-08-08-18-38-05.png)
