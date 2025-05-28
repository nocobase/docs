# 继承

## 配置字段包括继承的父表字段

子表在区块中使用时除了本表字段还有所有父表的字段供配置

![](https://static-docs.nocobase.com/33921f1e2367b3b4edac9450d2c1fef2.png)

## 添加操作可以启用子表

父表配置 TableOID(记录是由哪个表创建的数据)

![](https://static-docs.nocobase.com/9bfaa4d261fd482e2473469a2f4c3250.png)

![](https://static-docs.nocobase.com/ce4d4ca099600e4a38058369a6dc38c7.gif)

子表的数据汇聚在父表中

![](https://static-docs.nocobase.com/fc4b50175aa9b7b7404895f636db8d8f.gif)

在父表中为子表配置添加操作

![](https://static-docs.nocobase.com/81ab8e1d14a0d84620e4a0b214edef5a.gif)

可选项为当前表的所有子表

![](https://static-docs.nocobase.com/c5944d8b2ac4dd5b938bf31667d34516.png)

## 继承表数据的查看与编辑（按 \_\_collection 显示）

UI 配置状态下可以为子表配置区块（表单/详情区块）

![](https://static-docs.nocobase.com/fbadc32ae1931c711707ad5bd9a6c603.png)

非 UI 配置状态下,按 \_\_collection 只显示对应数据表记录的区块

![](https://static-docs.nocobase.com/07dc8529f7b33deb0e4aaf1a004be213.gif)

## 关系数据的弹窗（按 \_\_collection 显示）

关系数据的详情在非 UI 配置状态下按 \_\_collection 仅显示对应数据的区块

![](https://static-docs.nocobase.com/101753398b9fd5a1013fcee833cbeec0.gif)

## 继承下的筛选联动

B 可以连接 A，B 的子表 B1 也可以连接 A
