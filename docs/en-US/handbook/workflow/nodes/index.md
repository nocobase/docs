# Overview

Nodes are the basic units of logical arrangement in a workflow. A workflow can contains any number of nodes, and each node type represents an instruction that determines the behavior of the node. The configuration of a node corresponds to the parameters of the instruction, which determining the operation data object or other content of its behavior.

:::info{title=Note}
Workflow triggers are not considered to be nodes but are displayed in the workflow diagram as entry nodes. They are different concepts from nodes. For details, please refer to the [Triggers](../triggers/index.md) section.
:::

From a functional perspective, the nodes implemented so far are in four categories (a total of 21 types of nodes):

- Flow Control
  - [Condition](./condition.md)
  - [Delay](./delay.md) (provided by plugin @nocobase/plugin-workflow-deley)
  - [End Process](./end.md)
  - [Loop](./loop.md) (provided by plugin @nocobase/plugin-workflow-loop)
  - [Parallel Branch](./parallel.md) (provided by plugin @nocobase/plugin-workflow-parallel)
  - [Custom Variable](./variable.md) (provided by plugin @nocobase/plugin-workflow-variable)
- Calculation
  - [Calculation](./calculation.md)
  - [Dynamic Expression Calculation](./dynamic-calculation.md) (provided by plugin @nocobase/plugin-workflow-dynamic-calculation)
  - [Date Calculation](./date-calculation.md) (provided by plugin @nocobase/plugin-workflow-date-calculation)
- Data Table Operations
  - [Create record](./create.md)
  - [Update record](./update.md)
  - [Delete record](./destroy.md)
  - [Query record](./query.md)
  - [Aggregate Query](./aggregate.md) (provided by plugin @nocobase/plugin-workflow-aggregate)
  - [SQL Operation](./sql.md) (provided by plugin @nocobase/plugin-workflow-sql)
- Manual Processing
  - [Manual Processing](./manual.md) (provided by plugin @nocobase/plugin-workflow-manual)
  - [Approval](./approval.md) (provided by plugin @nocobase/plugin-workflow-approval)
- Other Extensions
  - [HTTP Request](./request.md) (provided by plugin @nocobase/plugin-workflow-request)
  - [Response Message](./response-message.md) (provided by plugin @nocobase/plugin-workflow-response-message)
  - [JavaScript](./javascript.md) (provided by plugin @nocobase/plugin-workflow-javascript)
  - [JSON query](./json-query.md) (provided by plugin @nocobase/plugin-workflow-json-query)
