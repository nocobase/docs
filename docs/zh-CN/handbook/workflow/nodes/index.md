# 概述

节点是工作流中逻辑编排的基本单元，一个工作流可以配置任意多个节点，每个节点的类型代表一个指令，决定了节点的行为。节点的配置即对应指令的参数，参数决定其行为的操作数据对象或其他内容。

:::info{title=提示}
工作流的触发器不属于节点，只是以入口节点的形式展示在流程图中，但与节点是不同的概念，详情请参考[触发器](../triggers/index.md)的内容。
:::

从功能角度，目前已实现的节点可以分为四大类（共 18 种节点）：

- 流程控制类
  - [运算](./calculation.md)
  - [条件判断](./condition.md)
  - [延时](./delay.md)（插件 @nocobase/plugin-workflow-deley 提供）
  - [结束流程](./end.md)
  - [循环](./loop.md)（插件 @nocobase/plugin-workflow-loop 提供）
  - [并行分支](./parallel.md)（插件 @nocobase/plugin-workflow-parallel 提供）
  - [自定义变量](./variable.md)（插件 @nocobase/plugin-workflow-variable 提供）
- 数据表操作
  - [新增数据](./create.md)
  - [更新数据](./update.md)
  - [删除数据](./destroy.md)
  - [查询数据](./query.md)
  - [聚合查询](./aggregate.md)（插件 @nocobase/plugin-workflow-aggregate 提供）
  - [SQL 操作](./sql.md)（插件 @nocobase/plugin-workflow-sql 提供）
- 人工处理
  - [人工处理](./manual.md)（插件 @nocobase/plugin-workflow-manual 提供）
  - [审批](./approval.md)（插件 @nocobase/plugin-workflow-approval 提供）
- 其他扩展
  - [HTTP 请求](./request.md)（插件 @nocobase/plugin-workflow-request 提供）
  - [动态表达式运算](./dynamic-calculation.md)（插件 @nocobase/plugin-workflow-dynamic-calculation 提供）
  - [响应消息](./response-message.md)（插件 @nocobase/plugin-workflow-response-message 提供）
