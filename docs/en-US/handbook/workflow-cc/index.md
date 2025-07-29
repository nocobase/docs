# CC (Carbon Copy) <Badge>v1.8.2+</Badge>

<PluginInfo name="workflow-cc" link="/handbook/workflow-cc"></PluginInfo>

The CC node is used to send certain contextual information from the workflow process to designated users for their awareness and reference. For example, during approval or other processes, relevant information can be copied to other participants so that they can stay informed of the progress.

You can configure multiple CC nodes in a workflow so that when the flow reaches these nodes, the corresponding information will be sent to specified recipients.

The copied content will appear under the "CC to Me" menu in the Task Center. Users can view all content copied to them here. Unread items are highlighted, and users can manually mark them as read after viewing.

## User Guide

### Create a Node

In the workflow configuration interface, click the plus (“+”) button in the flow to add a “CC” node:

![Add CC](https://static-docs.nocobase.com/20250710222842.png)

### Node Configuration

![Node Configuration](https://static-docs.nocobase.com/20250710224041.png)

In the node configuration panel, you can set the following parameters:

#### Recipients

Recipients are the users who will receive the copied content. This can be one or more users. The source can be statically selected from the user list, dynamically specified using variables, or based on a query result from the user table.

![Recipient Configuration](https://static-docs.nocobase.com/20250710224421.png)

#### User Interface

Recipients need to view the copied content under the "CC to Me" menu in the Task Center. You can configure blocks using results from triggers or other nodes in the workflow context.

![User Interface](https://static-docs.nocobase.com/20250710225400.png)

#### Task Title

The task title is what appears in the Task Center. You can dynamically generate the title using variables from the workflow context.

![Task Title](https://static-docs.nocobase.com/20250710225603.png)

### Task Center

Users can view and manage all content CCed to them in the Task Center, and filter by read/unread status.

![20250710232932](https://static-docs.nocobase.com/20250710232932.png)

![20250710233032](https://static-docs.nocobase.com/20250710233032.png)

After viewing, tasks can be marked as read. The unread count will update accordingly.

![20250710233102](https://static-docs.nocobase.com/20250710233102.png)
