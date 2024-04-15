# 连接数据区块

## 介绍

连接数据区块主要用于实现数据之间的筛选联动，。它允许用户为数据区块提供筛选条件，核心在于连接两个表，其中一个作为源表（主表），另一个作为目标表（外键表），以实现数据的联动筛选。连接区块的可选项为当前页面的**同表数据区块或有关系的外键约束或是有继承关系的不同表区块**，可多选，无论是哪一种方式本质都是源表（主动连接的表）提供 filter 参数给目标表(被连接的表)。




- 筛选区块连接数据区块

  ![20240407180953](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407180953.png)

- 数据区块连接数据区块

  - 同数据表数据区块联动

    如下图所示：订单表格区块与订单详情区块实现联动

    <video width="100%" height="440" controls>
      <source src="https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407161700.mp4" type="video/mp4">
    </video>

  - 关系数据表区块联动（有关系的外键约束的不同表区块）

    订单表与客户表是多对一的关系，如下图所示：客户表格区块与订单表格区块实现联动

    <video width="100%" height="440" controls>
      <source src="https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407163523.mp4" type="video/mp4">
    </video>