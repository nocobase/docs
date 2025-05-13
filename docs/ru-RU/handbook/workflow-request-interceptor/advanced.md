# Advanced Understanding

**Conditions for Interception**

In "pre-action events," two specific conditions may cause the corresponding operation to be intercepted:

1. The process reaches an "End Process" node. As explained earlier, if the triggering data does not meet the conditions set in the "Condition" node, the process will follow the "No" branch, executing the "End Process" node. This causes the process to terminate, and the requested operation is intercepted.
2. Any node within the process fails to execute—whether due to an error or other exceptional circumstances. In such cases, the process concludes with the corresponding status, and the operation is intercepted. For instance, if an "HTTP Request" is used to fetch external data and the request fails, the process ends in a failed state, simultaneously intercepting the corresponding operation request.

Once these interception conditions are met, the operation in question is halted entirely. For example, if an order submission is intercepted, no corresponding order data will be generated.

**Parameters for Corresponding Operations**

In "pre-action event" workflows, various data points are available as variables within the process, depending on the operation:

| Operation Type \\ Variable | "User acted" | "Role of user acted" | Operation Parameter: "ID" | Parameter: "Values submitted" |
| -------------------------- | ---------- | -------------------------- | ------------------------- | -------------------------------------------- |
| Create a record             | ✓          | ✓                          | -                         | ✓                                              |
| Update a record             | ✓          | ✓                          | ✓                         | ✓                                              |
| Delete one or more records  | ✓          | ✓                          | ✓                         | -                                              |

:::info{title=Tip}
The variables "Trigger variables / Parameter / Values submitted" in pre-action events are not the actual data stored in the database but the parameters submitted with the operation. To retrieve actual database data, you must use the "Query record" node within the process.

Additionally, for delete operations, when dealing with a single record, the "ID" in the operation parameters is a simple value. For multiple records, however, the "ID" is an array.
:::

**Response Messages**

Once the trigger is configured, you can define the relevant logic within the workflow. Typically, the "Condition" node's branching mechanism is used to decide whether to "End Process" based on specific business conditions, returning a pre-defined "Response Message":

![Interception Process Configuration](https://static-docs.nocobase.com/cfddda5d8012fd3d0ca09f04ea610539.png)

At this stage, the workflow configuration is complete. You can test it by submitting data that does not meet the configured conditions, triggering the interception logic. This will result in the return of a response message:

![Error Response Message](https://static-docs.nocobase.com/06bd4a6b6ec499c853f0c39987f63a6a.png)

**Response Message Status**

If the "End Process" node is set to exit with a "Success" status and the process reaches this node, the operation request will still be intercepted. However, the returned response message will display a "Success" (instead of "Error") status:

![Success Status Response Message](https://static-docs.nocobase.com/9559bbf56067144759451294b18c790e.png)
