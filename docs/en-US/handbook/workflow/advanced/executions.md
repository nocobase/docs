# Execution Plan (History)

After each workflow is triggered, a corresponding execution plan will be created to track the process of this task. Each execution plan has a status value to indicate the current execution status, which can be viewed in the list and details of the execution history:

![Execution plan status](https://static-docs.nocobase.com/d4440d92ccafac6fac85da4415bb2a26.png)

When all nodes in the main branch of the process are executed to the end of the process with a "Resolved" status, the entire execution plan will end with a "Resolved" status. When nodes in the main branch of the process appear in final status such as "failed", "error", "canceled" or "rejected", etc., the entire execution plan will be terminated early with the corresponding status. When nodes in the main branch of the process are in a "pending" status, the entire execution plan will be paused, but still display an "On going" status, until the waiting node is resumed and continues execution. Different node types have different ways of handling the "pending" status. For example, "Manual" nodes need to wait for manual processing, while "Delay" nodes need to wait until the time arrives to continue execution.

The status of the execution plan is as follows:

| Status    | Corresponds to the State of </br> Last Executed Node of the Main Process  | Explanation                                                                                                                    |
| -------   | ----------------------------------------------| -----------------------------------------------                                                                                |
| Queueing  | -                                             | The process has been triggered and an execution plan has been generated, waiting in the queue for scheduling by the scheduler. |
| On going  | Pending                                       | The node requests a pause, waiting for further input or callback to continue.                                                  |
| Resolved | Resolved                                     | No problems encountered, all nodes executed as expected one by one and completed.                                              |
| Failed    | Failed                                        | Failed due to unmet the logic of node configurations.                                                                          |
| Error     | Error                                         | The node encountered an uncaught program error and terminated early.                                                           |
| Canceled  | Canceled                                      | The waiting node was externally canceled from execution by the administrator, and terminated early.                            |
| Rejected  | Rejected                                      | In nodes requiring manual processing, it was rejected by user and no longer continued with subsequent processes.               |

In the examples of [Quick S tart](../quick-start.md), we already know that checking the details of the execution history of a workflow can check whether all nodes in the execution are executed normally, and the status and result data of each executed node. In some advanced workflows and nodes, the executed results of the nodes may be multiple, such as the results of "Loop" nodes:

![Results of nodes executed multiple times](https://static-docs.nocobase.com/bbda259fa2ddf62b0fc0f982efbedae9.png)

:::info{title=Note}
Workflow can be triggered concurrently, but executed one by one in queue, even if multiple workflows are triggered simultaneously, they will be executed sequentially, not in parallelly. So when the status shows "Queueing" it means that one of the workflows is executing and need to wait.

The "On going" status only indicates that the execution plan has started and is usually paused due to the pending status of some node, and does not mean that the execution plan preemptively occupies the execution resources at the head of the queue. Therefore, when there are "On going" execution plans, other "Queueing" execution plans can still be scheduled and executed.
:::

## Node Execution Status

The status of the execution plan is determined by each node. In an execution plan after a trigger, each executed node will produce a node status, and the status will determine whether the subsequent process continues to process. Usually, after a node is executed successfully, the next node will continue to execute until all nodes are executed in sequence, or interrupted. When encountering process control nodes, such as "Branch", "Loop", "Parallel" and "Delay", etc., the next node's execution flow will be determined according to the control node's configured conditions and the runtime context data.

The possible status that may be produced after each node is executed are following:

| Status | Is a Final status? | Will it Terminates Early? | Explanation                                                 |
| ------ | :------------------------: | :-------------------------: | -------------------------------------------------------- |
| Pending |            No              |              No             | The node requests a pause, waiting for further input or callback to continue. |
| Resolved |           Yes             |              No             | No problems encountered, executed successfully, and continue to execute the next node until the end. |
| Failed |              Yes             |               Yes            | Failed due to unmet node configurations.                  |
| Error |             Yes             |               Yes            | The node encountered an uncaught program error and terminated early. |
| Canceled |           Yes             |               Yes            | The pending node was canceled externally by the administrator, and terminated early. |
| Rejected |            Yes            |                Yes           | In nodes requiring manual processing, it was rejected by user and no longer continued with subsequent processes. |

Except for the "Pending" status, all other status are final status of node execution. Only when the final status is "Resolved" the process will continue to execute, otherwise the execution of the entire process will be terminated early. When a node is in a branch process ("Parallel branchs", "Condition", "Loop", etc.), the final status generated by the node will be taken over and processed by the node that opens the branch, and so on, determining the entire process flow.

For example, when we use a "Condition" node with the "continue when 'Yes'" mode, if the result is "false" during execution, the entire process execution will be terminated early and exited with a failed status, as shown in the figure below:

![Node execution failed](https://static-docs.nocobase.com/993aecfa1465894bb574444f0a44313e.png)

:::info{title=Note}
All final status other than "Resolved" can be regarded as failures, but the reasons for failure will be different, by checking the results of the nodes to know more about the failure.
:::
