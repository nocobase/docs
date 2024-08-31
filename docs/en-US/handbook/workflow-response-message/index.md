#Response Message

<PluginInfo name="workflow-response-message" link="/handbook/workflow-response-message" commercial="true"></PluginInfo>

The Response Message node is designed to deliver custom messages to the client who initiates an operation within certain types of workflows.

:::info{title=Note}
This node currently can be used in the workflow types "Pre-Action Event" and "Custom Action Event (synchronous mode)".
:::

#### User Manual

##### Creating a Node

Within the supported workflow types, you can insert a "Response Message" node at any point in the workflow. To do this, click the plus ("+") button within the workflow to add the "Response Message" node:

![Add Node](https://static-docs.nocobase.com/eac2b3565e95e4ce59f340624062ed3d.png)

Throughout the entire request process, response messages are accumulated in an array. When the process reaches a Response Message node, the new message content is appended to this array. Upon the server sending the response content, all messages within the array are delivered together to the client.

##### Node Configuration

The message content is structured as a template string, allowing the insertion of variables. You can customize the template's content in the node configuration as needed:

![Node Configuration](https://static-docs.nocobase.com/d5fa5f4002d50baf3ba16048818fddfc.png)

As the process executes and reaches this node, the template is parsed to generate the final message content. In the example configuration above, the variable "Scope variables / Loop all products / Loop target / Product / Title" will be replaced with specific values during the actual workflow, such as:

```
Insufficient stock for product "iPhone 14 Pro"
```

![Message Content](https://static-docs.nocobase.com/06bd4a6b6ec499c853f0c39987f63a6a.png)

##### Use Cases

###### "Pre-Action Event" Workflow

In a "Pre-Action Event" workflow, a response message can be used to provide feedback to the client upon completion of the process. For further details, refer to [Request Interception](../workflow/triggers/pre-action.md).

###### "Custom Action Event" Workflow

In synchronous mode's "Custom Action Event," using response messages allows you to send corresponding feedback messages to the client after the process ends. For details, please refer to [Custom Action Event](../workflow/triggers/custom-action.md)
