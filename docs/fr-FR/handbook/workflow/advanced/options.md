# Advanced Options

## Execution Modes

Workflow execution is based on the trigger type selected when creating, and can be executed in "Asynchronously" or "Synchronously" mode. "Asynchronously" mode means that after a specific event is triggered, it will enter the execution queue and be executed one by one by the background scheduler, while "synchronously" mode will not enter the scheduling queue after triggering, and will start execution directly, and will immediately provide feedback after execution.

Collection event, post-action event, custom action event, schedule event and approval event will be executed asynchronously by default, while pre-action event will be executed synchronously by default. Among them, collection event, post-action event and custom action event support both modes, and you can choose when creating a workflow:

![Synchronous mode: Creating synchronous workflow](https://static-docs.nocobase.com/39bc0821f50c1bde4729c531c6236795.png)

:::info{title=Note}
Synchronously mode workflow are limited by their mode and cannot use nodes that generate a "pending" status, such as "manual process" etc.
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
