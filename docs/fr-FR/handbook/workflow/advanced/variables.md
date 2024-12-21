# Using Variables

## Core Conception

Just like variables in programming languages, **variables** are important tools for connecting and organizing processes in workflow.

When each node is executed after the workflow is triggered, variables can be used in some configuration options, and the source of the variables is from data result of upstream node, including the following categories:

- Trigger Context Data: In cases such as action triggers and collection triggers, single record object can be used by all nodes. The specific implementation may differ based on the individual trigger.
- Upstream node data: When executing any node, the result data of the previously completed nodes.
- Scope variables: When the node is in some special branch structures, scope variables specific to the corresponding branch can be used, such as in loop structures, where data objects for each round of the loop can be used.
- System variables: Some built-in system parameters, such as the current time, etc.

We have used the function of variables many times in [Quick Start](../quick-start.md), for example, in the calculation node, we can use variables to reference trigger context data for calculation:

![Function and variable usage in the calculation node](https://static-docs.nocobase.com/837e4851a4c70a1932542caadef3431b.png)

In the update node, use trigger context data as the filtering condition variable, and refer to the result of the calculation node as the field value variable to update record:

![Variable in update data node](https://static-docs.nocobase.com/2e147c93643e7ebc709b9b7ab4f3af8c.png)

## Data Structure

The internal of a variable is a JSON structure, which can usually be used to access specific parts of the data according to the JSONPath. Because many variables are based on the data collection of NocoBase, association data will be composed as a tree-like structure of objects, such as selecting the value of a field of related data that is queried. In addition, when association data is a to-many structure, the variable may be an array.

Selecting a variable will most of the time require selecting the last layer value attribute, usually a simple data type such as number, string, etc. However, when there is an array in the variable hierarchy, the attributes at the end level will also be mapped to an array, and only when the corresponding node supports array can the array data be correctly processed. For example, in the calculation node, some calculation engines have functions specially designed for arrays, and in the loop node, the loop object can directly select an array.

For example, when a query node queries multiple data rows, the node result will be an array containing multiple rows of homogeneous data:

```json
[
  {
    "id": 1,
    "title": "Title 1"
  },
  {
    "id": 2,
    "title": "Title 2"
  }
]
```

However, when it is used as a variable in subsequent nodes, if the selected variable is in the form of `Node Result / Query Node / Title`, it will be mapped to an flat array of corresponding field values:

```json
["Title 1", "Title 2"]
```

If it is a multi-dimensional array (such as a many-to-many association fields), it will be a one-dimensional array after the corresponding field is flattened.

## Builtin System Variables

### System Time

Retrieve the system time at the moment of execution based on the node where it is executed, the time zone is the time zone set by the server.

### Date Range Parameters

This can be used for configuring date field filter conditions in query, update, and delete nodes. It only supports "Is" comparisons, and the start and end points of the date range are based on the server's time zone settings.

![Date Range Parameters](https://static-docs.nocobase.com/20240817175354.png)
