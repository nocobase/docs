# End Process

When executed, this node will immediately end the current workflow execution and end it with the status as configured in the node. It is typically used for specific logic flow control, to exit the current workflow after meeting certain logical conditions, and not continue with subsequent processing. It can be compared to the `return` instruction in programming languages, used to exit the currently executing function.

## Creating a Node

In the workflow configuration UI, click the plus ("+") button in the flow to add an "End Process" node:

![Add End Process](https://static-docs.nocobase.com/672186ab4c8f7313dd3cf9c880b524b8.png)

## Node Configuration

![End Process Node Configuration](https://static-docs.nocobase.com/bb6a597f25e9afb72836a14a0fe0683e.png)

### End Status

The end status will affect the final status of the execution plan of the workflow. It can be configured as "Success" or "Failure". When the workflow reaches this node, it will immediately exit with the configured status.

:::info{title=Note}
When used in workflows of the "Pre-action" type, it will intercept the action requests. For more details, please refer to the ["Pre-action" usage instructions](../triggers/pre-action).

Besides intercepting the action requests, the configuration of the end status will also affect the status of the feedback information in the "Response Message" in this type of workflow.
:::
