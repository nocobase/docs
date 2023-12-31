# A·B·C

在无代码层面，NocoBase 的核心概念可以总结为 `A·B·C`。

`A·B·C` 是`Action·Block·Collection` 的缩写，即`操作·区块·数据表`。通过 `Collection` 设计数据结构，通过 `Block` 组织与展示数据，通过 `Action` 交互数据。

## 数据与视图分离

定义数据时，专注于定义数据；定义视图时，专注于定义视图。

通过定义数据，来抽象业务；再通过定义区块去组织内容以你所期望的方式呈现数据。

## 一种数据，多种呈现

为业务抽象出统一的数据模型，然后通过区块可以为同一个数据表建立各种各样的呈现方式，用于不同的场景、不同的角色、不同的组合。

## 操作驱动

数据表来定义数据的结构，区块来组织数据的呈现方式。那么，什么驱动数据的交互和变更？答案是操作。

区块将数据呈现给用户，操作则是将用户的指令发送给服务器完成数据的交互或变更。
