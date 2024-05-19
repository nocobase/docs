# Query Record

Used to query and retrieve data records that meet certain conditions from a collection.

It can be configured to query single or multiple data records, and the query result can be used as a variable in subsequent nodes. When querying multiple data records, the query result is an array. When the query result is empty, you can choose whether to continue executing subsequent nodes.

## Creating a Node

In the workflow configuration UI, click the plus ("+") button in the workflow and add a "Query Record" node:

![Query Record_Add](https://static-docs.nocobase.com/c1ef2b851b437806faf7a39c6ab9d33a.png)

## Node Configuration

![Query Node_Node Configuration](https://static-docs.nocobase.com/dbec23f35e2d96b5287b3988705fb829.png)

### Collection

Select the collection to query record from.

### Query Mode

After checking "Allow multiple data results", all data that meets the conditions will be queried; otherwise, only the first data that meets the conditions will be queried. If "Allow multiple data results" is checked, the result of the query node will be an array type.

### Filter Conditions

Similar to the filter conditions when querying a normal collection, you can use context variables of the workflow.

### Sorting

When querying one or more data records, sorting rules can be used to control the desired results. For example, to query the latest data record, you can sort by the "Created at" field in descending order.

### Pagination

When the result set may be large, pagination can be used to control the number of query results. For example, to query the latest 10 data records, you can sort by the "Creation Time" field in descending order and then set pagination to 1 page with 10 data records.

### Handling Empty Results

In single result mode, if there are no data records that meet the conditions, the query result will be `null`; in multiple result mode, it will be an empty array (`[]`). You can choose whether to check "Exit the workflow if the query result is empty". After checked, if the query result is empty, subsequent nodes will not be executed, and the workflow will exit prematurely with a failed status.
