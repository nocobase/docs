# Delete Record

Used to delete data from a specific collection that meets certain conditions.

The basic usage of the delete node is similar to the update node, except that the delete node does not require field assignments, only the selection of the collection and filter conditions are needed. The result of the delete node will return the number of rows deleted successfully, which can only be viewed in the execution history and cannot be used as a variable in subsequent nodes.

:::info{title=Note}
Currently, the delete node does not support deleting one by one, all deletions are performed in batches, so other events triggered by each data deletion will not be triggered.
:::

## Creating a Node

In the workflow configuration interface, click the plus ("+") button in the flow to add a "Delete Record" node:

![Creating a Delete Record Node](https://static-docs.nocobase.com/e1d6b8728251fcdbed6c7f50e5570da2.png)

## Node Configuration

![Delete Node Node Configuration](https://static-docs.nocobase.com/580600c2b13ef4e01dfa48b23539648e.png)

### Collection

Select the collection from which data will be deleted.

### Filter Conditions

Similar to the filter conditions used in regular collection queries, variables from the workflow context can be used.

## Example

For example, to regularly clean up invalid historical order data that has been canceled, you can use a delete node:

![Delete Node Example Node Configuration](https://static-docs.nocobase.com/b94b75077a17252f8523c3f13ce5f320.png)

The workflow will be triggered periodically and execute to delete all invalid historical order data that has been canceled.
