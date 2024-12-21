# Create record

Used to add a new row of data to a specific collection.

The field values ​​of the new record can use variables from the workflow context. Assigning values to association fields can directly reference the corresponding data variables in the context, which can be objects or foreign key values. If variables are not used, you need to manually enter the values ​​of the foreign keys, and for multiple association fields, multiple foreign key values ​​need to be separated by commas.

## Creating a Node

In the workflow configuration UI, click the plus ("+") button in the flow to add a "Create record" node:

![Creating a create record node](https://static-docs.nocobase.com/386c8c01c89b1eeab848510e77f4841a.png)

## Node Configuration

![New Node Example Node Configuration](https://static-docs.nocobase.com/5f7b97a51b64a1741cf82a4d4455b610.png)

### Collection

Select the collection to which the new record will be added.

### Field Values

Assign values ​​to the fields of the collection. Variables from the workflow context can be used, or static values ​​can be manually entered.

:::info{title="Note"}
Record added by the create node in the workflow will not automatically handle fields such as "Creator" and "Last Modifier", and you need to configure the values ​​of these two fields according to the situation.
:::

### Preload Related Data

If the fields of the new record include association fields, and you want to use the corresponding related data in subsequent workflows, you can check the corresponding association fields in the preload configuration. In this way, after adding the new record, the corresponding association data will be automatically loaded and stored together in the result data of the node.

## Example

For example, when a record is added or updated in the "Posts" collection, it is required to automatically add a "Post Versions" row to record the change history of the post. This can be achieved using the create node:

![New Node Example Flow Configuration](https://static-docs.nocobase.com/dfd4820d49c145fa331883fc09c9161f.png)

![New Node Example Node Configuration](https://static-docs.nocobase.com/1a0992e66170be12a068da6503298868.png)

With this configuration enabled, when data changes in the "Posts" collection, a "Post Version" row will be automatically added to record the change history of the article.
