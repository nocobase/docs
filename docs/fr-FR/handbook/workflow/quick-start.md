# Quick Start

## Configure a Workflow

To configure a workflow, go to the management page of the Workflow plugin by accessing the plugin configuration menu in the top navigation bar:

![Workflow Plugin Management Entry](https://static-docs.nocobase.com/872169fb0cf277715178d1a6804e12cd.png)

The management page will display all the created workflows:

![Workflow Management](https://static-docs.nocobase.com/6d31e5c6c94a51513e6569dbc410c01f.png)

Click the "Add new" button to create a new workflow and select a collection event:

![Create Workflow](https://static-docs.nocobase.com/57f23ce3c91d153ea235f95268a63d98.png)

Click the "Configure" link in the list to enter the workflow configuration page:

![An Empty Workflow](https://static-docs.nocobase.com/d6a3bc6b3fd03cba5bb10f142c38e2bf.png)

Then, click on the trigger card to open the trigger configuration drawer. Select a previously created collection (e.g., "Posts") and choose the trigger condition "After record added", click the "Save" button to complete the trigger configuration:

![Configure Trigger](https://static-docs.nocobase.com/f96015efe87759d6836d2a1c58d92884.png)

Next, you can click the plus button in the workflow to add a node. For example, select an calculation node to concatenate the "Title" and "ID" fields of the trigger data:

![Add Operation Node](https://static-docs.nocobase.com/60eeee25e6847a91fad50784c8c508ad.png)

Click on the node card to open the node configuration drawer. Use the `CONCATENATE` function provided by Formula.js to concatenate the "Title" and "ID" fields, and insert the fields using the variable selector:

![Operation Node with Function and Variable](https://static-docs.nocobase.com/837e4851a4c70a1932542caadef3431b.png)

Then create an "Update record" node to save the result to the "Title" field:

![Create Update Data Node](https://static-docs.nocobase.com/494f72dff72b4410240b04c59cbbd322.png)

Similarly, click on the card to open the configuration drawer of the "Update record" node. Select the "Posts" collection, choose the record ID from the trigger, select the "Title" field to update, and choose the result from the calculation node as the value to update:

![Configure Update Data Node](https://static-docs.nocobase.com/2e147c93643e7ebc709b9b7ab4f3af8c.png)

Finally, click the "On/Off" switch in the top-right toolbar to switch the workflow to the enabled state. This allows the workflow to be triggered and executed.

## Trigger a Workflow

Go back to the main pages and create an post using the its data block. Fill in the post title:

![Create Post Data](https://static-docs.nocobase.com/d21a1a5833d5f54f52678ea18e9922f2.png)

After submission and refreshing the block, you will see that the post title has been automatically updated to the form of "Post title + Post ID":

![Post Title Modified by Workflow](https://static-docs.nocobase.com/3a700445896965c46c70ac51a07bbdb9.png)

:::info{title=Note}
Since workflow triggered in collection will be executed asynchronously, you may not immediately see the updated record on the submission page. However, refreshing the page or block after a moment, updated content will show.
:::

## View Execution History

The workflow we triggered earlier has been successfully executed. We can go back to the workflow management page to view the corresponding execution history:

![View Workflow List](https://static-docs.nocobase.com/92952de7fe6472db7d247a915e36100a.png)

In the workflow list, you can see that there is one execution in the workflow history. Clicking the number link in the "Executed" column will open the execution history of the corresponding workflow:

![Execution History List of the Corresponding Workflow](https://static-docs.nocobase.com/00537af15c6ae43d745106178242bc09.png)

Clicking the "View" link will take you to the details page of that particular execution. Here, you can see the execution status and result data of each node:

![Workflow Execution History Details](https://static-docs.nocobase.com/93ec7ce25391d71cf7a109c9d03d5a48.png)

The context data of trigger and the result data of node can be viewed by clicking the status button in the top right corner of the corresponding card. For example, let's view the result data of an operation node:

![Result of calculation node](https://static-docs.nocobase.com/10c22b923d3de0a0d58fa9283780f592.png)

You can see that the result data of the calculation node includes the computed title, which is the data updated by the subsequent "Update record" node.

## Summary

Through the above steps, we have completed the configuration and triggering of a simple workflow, and have also been introduced to the following basic concepts:

- **Workflow**: It defines the basic information of the workflow, including its name, trigger type, and On/Off status. Within a workflow, you can configure multiple nodes. It serves as the container for the process.
- **Trigger**: Each workflow contains a trigger, which can be configured to specific conditions that triggers the workflow. It serves as the entry point of the workflow.
- **Node**: A node is an instruction unit within the workflow that performs specific actions. Multiple nodes within a workflow are interconnected in an upstream and downstream relationship, forming a complete process flow.
- **Execution**: The execution represents the specific objects that are executed after the workflow is triggered. It is also known as execution record or execution history, and it includes information such as the execution status and trigger context data. For each node, there is a corresponding execution result which includes the node's execution status and data.

For more in-depth usage, you can refer to the following resources:

- advanced Understanding
  - [Using Variables](./advanced/variables.md)
  - [Execution Plan (History)](./advanced/executions.md)
  - [Revisions](./advanced/revisions.md) 
  - [Advanced Options](./advanced/options.md)
- [Overview of Triggers](./triggers/index.md)
- [Overview of Nodes](./nodes/index.md)
