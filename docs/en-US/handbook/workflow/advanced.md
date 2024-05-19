# Advanced Usage

From [Quick Start](./index) we have already learned the most basic usage of workflows, this article further introduces some more in-depth concepts.

## Using Variables

Just like variables in programming languages, **variables** are important tools for connecting and organizing processes in workflows.

When each node is executed after the workflow is triggered, variables can be used in some configuration options, and the source of the variables is from data result of upstream node, including the following categories:

- Trigger context data: In cases such as action triggers and collection triggers, single record object can be used by all nodes.
- Upstream node data: When executing any node, the result data of the previously completed nodes.
- Scope variables: When the node is in some special branch structures, scope variables specific to the corresponding branch can be used, such as in loop structures, where data objects for each round of the loop can be used.
- System variables: Some built-in system parameters, such as the current time, etc.

We have used the function of variables many times in [Quick Start](./index), for example, in the calculation node, we can use variables to reference trigger context data for calculation:

![Function and variable usage in the calculation node](https://static-docs.nocobase.com/837e4851a4c70a1932542caadef3431b.png)

In the update node, use trigger context data as the filtering condition variable, and refer to the result of the calculation node as the field value variable to be updated:

![Variable in update data node](https://static-docs.nocobase.com/2e147c93643e7ebc709b9b7ab4f3af8c.png)

The internal of a variable is a JSON structure, which can usually be used to access specific parts of the data according to the path of JSON. Because many variables are based on the data collection of NocoBase, association data will be composed as a tree-like structure of objects, such as selecting the value of a field of related data that is queried. In addition, when association data is a to-many structure, the variable may be an array.

Selecting variables will often need to select the value attribute at the last layer of the JSON path, usually a simple data type such as number, string, etc. However, when there is an array in the variable hierarchy, the attributes at the end level will also be mapped to an array, and only when the corresponding node supports array can the array data be correctly processed. For example, in the calculation node, some calculation engines have functions specially designed for arrays, and in the loop node, the loop object can directly select an array.

For example, when a query node queries multiple data rows, the node result will be an array containing multiple rows of homogeneous data:

```json
[
  {
    "id": 1,
    "title": "Title 1"
  },
  {
    "id": 2,
    "title": "Title 2"
  }
]
```

However, when it is used as a variable in subsequent nodes, if the selected variable is in the form of `Node Data / Query Node / Title`, it will be mapped to an flat array of corresponding field values:

```json
["Title 1", "Title 2"]
```

If it is a multi-dimensional array (such as a many-to-many relationship field), it will be a one-dimensional array after the corresponding field is flattened.

## Execution Plan (History)

After each workflow is triggered, a corresponding execution plan will be created to track the process of this task. Each execution plan has a status value to indicate the current execution status, which can be viewed in the list and details of the execution history:

![Execution plan status](https://static-docs.nocobase.com/d4440d92ccafac6fac85da4415bb2a26.png)

When all nodes in the main branch of the process are executed to the end of the process with a "Succeeded" status, the entire execution plan will end with a "Succeeded" status. When nodes in the main branch of the process appear in final status such as "failed", "error", "canceled" or "rejected", etc., the entire execution plan will be terminated early with the corresponding status. When nodes in the main branch of the process are in a "pending" status, the entire execution plan will be paused, but still display an "On-going" status, until the waiting node is resumed and continues execution. Different node types have different ways of handling the "pending" status. For example, "Manual" nodes need to wait for manual processing, while "Delay" nodes need to wait until the time arrives to continue execution.

The status of the execution plan is as follows:

| Status  | Corresponding Final Node status in the Main Process | Explanation                                         |
| ------- | --------------------------------------------------- | ----------------------------------------------- |
| Queued  | -                                                   | The process has been triggered and an execution plan has been generated, waiting in the queue for scheduling by the scheduler. |
| On-going | Pending                                           | The node requests a pause, waiting for further input or callback to continue. |
| Succeeded | Succeeded                                          | No problems encountered, all nodes executed as expected one by one and completed. |
| Failed  | Failed                                              | Failed due to unmet the logic of node configurations.       |
| Error | Error                                            | The node encountered an uncaught program error and terminated early. |
| Canceled | Canceled                                        | The waiting node was externally canceled from execution by the administrator, and terminated early. |
| Rejected | Rejected                                          | In nodes requiring manual processing, it was rejected by user and no longer continued with subsequent processes. |

In the examples of [Quick Start](./index), we already know that checking the details of the execution history of a workflow can check whether all nodes in the execution are executed normally, and the status and result data of each executed node. In some advanced workflows and nodes, the executed results of the nodes may be multiple, such as the results of "Loop" nodes:

![Results of nodes executed multiple times](https://static-docs.nocobase.com/bbda259fa2ddf62b0fc0f982efbedae9.png)

:::info{title=Note}
Workflows can be triggered concurrently, but executed one by one in queue, even if multiple workflows are triggered simultaneously, they will be executed sequentially, not in parallel. So when the status shows "Queued," it means that one of the workflows is executing and need to wait.

The "On-going" status only indicates that the execution plan has started and is usually paused due to the pending status of some node, and does not mean that the execution plan preemptively occupies the execution resources at the head of the queue. Therefore, when there are "On-going" execution plans, other "Queued" execution plans can still be scheduled and executed.
:::

## Node Execution Status

The status of the execution plan is determined by each node. In an execution plan after a trigger, each executed node will produce a node status, and the status will determine whether the subsequent process continues to process. Usually, after a node is executed successfully, the next node will continue to execute until all nodes are executed in sequence, or interrupted. When encountering process control nodes, such as "Branch", "Loop", "Parallel" and "Delay", etc., the next node's execution flow will be determined according to the control node's configured conditions and the runtime context data.

The possible status that may be produced after each node is executed are following:

| Status | Is a Final status? | Will it Terminates Early? | Explanation                                                 |
| ------ | :------------------------: | :-------------------------: | -------------------------------------------------------- |
| Pending |            No              |              No             | The node requests a pause, waiting for further input or callback to continue. |
| Succeeded |           Yes             |              No             | No problems encountered, executed successfully, and continue to execute the next node until the end. |
| Failed |              Yes             |               Yes            | Failed due to unmet node configurations.                  |
| Error |             Yes             |               Yes            | The node encountered an uncaught program error and terminated early. |
| Canceled |           Yes             |               Yes            | The pending node was canceled externally by the administrator, and terminated early. |
| Rejected |            Yes            |                Yes           | In nodes requiring manual processing, it was rejected by user and no longer continued with subsequent processes. |

Except for the "Pending" status, all other status are final status of node execution. Only when the final status is "Succeeded" the process will continue to execute, otherwise the execution of the entire process will be terminated early. When a node is in a branch process ("Parallel branch", "Condition", "Loop", etc.), the final status generated by the node will be taken over and processed by the node that opens the branch, and so on, determining the entire process flow.

For example, when we use a "Condition" node with the "continue if true" mode, if the result is "false" during execution, the entire process execution will be terminated early and exited with a failed status, as shown in the figure below:

![Node execution failed](https://static-docs.nocobase.com/993aecfa1465894bb574444f0a44313e.png)

:::info{title=Note}
All final status other than "Succeeded" can be regarded as failures, but the reasons for failure will be different, by checking the results of the nodes to know more about the failure.
:::

## Execution Modes

Workflow execution is based on the trigger type selected when creating, and can be executed in "Asynchronously" or "Synchronously" mode. "Asynchronously" mode means that after a specific event is triggered, it will enter the execution queue and be executed one by one by the background scheduler, while "synchronously" mode will not enter the scheduling queue after triggering, and will start execution directly, and will immediately provide feedback after execution.

Collection events, post-action events, custom action events, schedule events and approval events will be executed asynchronously by default, while pre-action events will be executed synchronously by default. Among them, collection events, post-action events and custom action events support both modes, and you can choose when creating a workflow:

![Synchronous mode: Creating synchronous workflow](https://static-docs.nocobase.com/39bc0821f50c1bde4729c531c6236795.png)

:::info{title=Note}
Synchronously mode workflows are limited by their mode and cannot use nodes that generate a "pending" status, such as "manual process" etc.
:::

## Automatically Delete History

When workflows are triggered frequently, you can reduce interference and database storage pressure by configuring automatic deletion of historical executions.

Similarly, in the pop-up for creating and editing workflows, you can configure whether the corresponding process automatically deletes history:

![Configure automatic deletion of history](https://static-docs.nocobase.com/b2e4c08e7a01e213069912fe04baa7bd.png)

Automatic deletion can be configured based on the status of the execution. In most cases, it is recommended to only select the "Succeeded" status, so that history of execution failures can be retained for subsequent troubleshooting.

It is recommended not to enable automatic deletion of history when debugging workflows, so that the execution logic of the workflows can be reviewed in history.

:::info{title=Note}
Deleting the history of workflows will not reduce the count of workflows already executed.
:::

## Workflow Versions

After a configured workflow is triggered at least once, if you want to modify the configuration of the workflow or its nodes, you need to create a new version and then modify it, which also ensures that when reviewing execution history of workflows that have been triggered, they are not affected by future modifications.

On the configuration page of the workflow, you can view existing workflow versions in the version menu in the top right corner:

![View workflow versions](https://static-docs.nocobase.com/ad93d2c08166b0e3e643fb148713a63f.png)

In the more operations ("...") menu on the right side, you can do "copy to a new version" based on the current version being viewed:

![Copy workflow to new version](https://static-docs.nocobase.com/2805798e6caca2af004893390a744256.png)

After copying to a new version, click the "Enable"/"Disable" switch. After switching the corresponding version to the enabled status, the new workflow version will take effect.

If you need to use an old version again, switch one from the version menu, and then switch to the enabled status by clicking the "Enable"/"Disable" switch again, then the current viewed version will take effect, and furtuer triggers will run on the corresponding version of the workflow.

When need to disable a workflow, after clicking the "Enable"/"Disable" switch to the disabled status, the workflow will no longer be triggered.

:::info{title=Note}
Different from duplicate a workflow in the workflow management list, the workflow copied to a new version will still be grouped in the same group of workflows, but can be distinguished by version. However, duplicating a workflow will be make a completely new workflow, unrelated to the previous versions of the workflow, and the execution count will also be reset to 0.
:::