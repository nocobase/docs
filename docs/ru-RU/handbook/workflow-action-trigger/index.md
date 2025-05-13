# Overview

<PluginInfo name="workflow-action-trigger" link="/handbook/workflow-action-trigger"></PluginInfo>

In the system, all user-generated data changes are typically carried out through some form of operation, usually by clicking a button. This button could be a submit button on a form or an action button within a data block. Post-action events are designed to bind specific workflows to these button actions, ensuring that a particular process is triggered upon successful user interaction.

For instance, when adding or updating data, users can configure the "Bind Workflows" option on a button. Once the action is completed, the bound workflow will be triggered automatically.

From an implementation standpoint, since Post-action event processing occurs at the middleware level (using Koa middleware), even making an HTTP API call to NocoBase can trigger defined Post-action events.

:::info{title="Note"}
The Post-action event was initially called "Form Event." In earlier versions, this feature was limited to form buttons. However, starting from version `v0.20`, it has also become available for operation buttons within more data blocks, leading to its renaming as "Post-action event."
:::

## FAQ

### Difference Between Post-action and Pre-action Events

The distinction between Post-action and Pre-action events lies in the timing of their triggers during the operation request and response cycle. One is triggered before the operation is processed, while the other is triggered afterward, as illustrated below:

![Operation Sequence](https://static-docs.nocobase.com/Handbook/20240916013804.png)

Pre-action events are triggered before the operation is executed, meaning they occur before the request is processed. These events can be utilized to validate or manipulate the request data, and if the request is blocked, the operation will not proceed.

Conversely, Post-action events are triggered after the user's action has been successfully completed. At this stage, the data has already been submitted successfully, and the related processes can proceed based on the successful outcome.

### Difference Between Post-action and Table Events

Post-action events and table events have similarities in that both are triggered after data changes occur. However, their implementations differ. Post-action events are focused on the API level, whereas table events are concerned with changes in data within tables.

Table events are closer to the system's core. In some instances, a single event may trigger data changes that lead to another event, creating a chain reaction. This is particularly true when related table data is altered during operations on the current table, which can trigger events in associated tables.

Table events do not contain user-related information. In contrast, Post-action events are more closely linked to the user end, reflecting the results of user actions. The context of these processes will include user-related information, making them suitable for handling workflows resulting from user actions. In NocoBase's future design, more Post-action events may be added to expand the triggers available, so it is **recommended to use Post-action events** for managing workflows stemming from data changes caused by user actions.

Another key difference is that Post-action events can be selectively bound to specific forms. If there are multiple forms, some can trigger the event upon submission, while others do not. On the other hand, table events are tied to data changes across the entire table and cannot be selectively bound.

## Installation

This plugin is built-in and does not require installation.

## User Manual

The use of Post-action events is divided into several parts:

- [Trigger Configuration](./trigger.md)
- [Action Configuration](./action.md)

You can also refer to [Examples](./example.md) to understand their application in real-world scenarios.

If external system calls are necessary, please refer to [External Calls](./http-api.md).
