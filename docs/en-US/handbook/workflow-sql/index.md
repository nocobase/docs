### SQL Actions

In certain scenarios where the standard data table operation nodes fall short for more complex tasks, you can directly employ the SQL Action node to execute sophisticated SQL queries within the database.

Unlike executing SQL operations by connecting to the database externally, within the workflow, you can leverage variables from the workflow context as parameters within your SQL statements.

## Frequently Asked Questions

### How can the results of an SQL Action node be utilized?

When using a `SELECT` statement, the query results are stored in the node in Sequelize's JSON format. You can parse and utilize these results through the [JSON-query](/handbook/workflow-json-query) plugin.

### Will SQL actions trigger table events?

**No, they won’t.** SQL actions directly execute SQL commands on the database. Actions such as `CREATE`, `UPDATE`, and `DELETE` occur in the database, while table events are managed at the Node.js application layer (ORM processing). As a result, these operations do not trigger table events.

## Installation

This plugin is built-in, so no installation is necessary.

## User Guide

### Creating a Node

In the workflow configuration interface, click the plus sign (“+”) within the flow to add an "SQL Action" node:

![Adding SQL Actions](https://static-docs.nocobase.com/0ce40a226d7a5bf3717813e27da40e62.png)

### Configuring the Node

Insert the necessary variables by clicking the variable button in the top right corner of the editor box. These variables will be replaced with the appropriate values before execution:

![SQL Node Configuration](https://static-docs.nocobase.com/98611dc13bcda04348bd0856561a7b04.png)
