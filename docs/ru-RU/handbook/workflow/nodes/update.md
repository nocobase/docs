# Update Record

Used to update data records that meet certain conditions in a collection.

The collection and field assignment sections are the same as in the "Create Record" node. The main difference between "Update Record" node and "Create record" node is the filter conditions, and the need to select an update mode. In addition, the update node will return the number of rows of successfully updated data, which can only be viewed in the execution history and cannot be used as a variable in subsequent nodes.

## Creating a Node

In the workflow configuration UI, click the plus ("+") button in the workflow and add an "Update Record" node:

![Update Record_Add](https://static-docs.nocobase.com/9ff24d7bc173b3a71decc1f70ca9fb66.png)

## Node Configuration

![Update Node_Node Configuration](https://static-docs.nocobase.com/98e0f941c57275fc835f08260d0b2e86.png)

### Collection

Select the collection to update record in.

### Update Mode

There are "Batch" and "Individual" modes for updating. In batch mode, each record updating will not trigger the collection events; whereas, in individual mode, each record updating could trigger the collection events. However, there may be performance issues with individual updates, especially with large amounts of data, so use with caution. Typically, choose based on the target data to be updated and whether other workflow events need to be triggered. If updating a single data record based on a primary key, it is recommended to use individual updates; if updating multiple data records based on conditions, it is recommended to use batch updates.

### Filter Conditions

Similar to the filter conditions when querying a normal collection, you can use context variables of the workflow.

### Field Values

Similar to the field assignment in the "Create Record" node, you can use variables from the workflow context or manually enter static values.

Note: The update node in the workflow does not automatically handle the "Last Modified By" data; you need to configure the value of this field based on the situation.

## Example

For example, when a "Post" created, the "Post Category" collection needs to be automatically updated with the "Post Count" field. This can be achieved using an update node:

![Update Node_Example_Node Configuration](https://static-docs.nocobase.com/98e0f941c57275fc835f08260d0b2e86.png)

When the workflow is triggered, the "Post Count" field in the "Post Category" collection will automatically be updated to the current post count +1.
