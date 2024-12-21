# SQL Actions

In certain scenarios where the standard data table operation nodes fall short for more complex tasks, you can directly employ the SQL Action node to execute sophisticated SQL queries within the database.

Unlike executing SQL operations by connecting to the database externally, within the workflow, you can leverage variables from the workflow context as parameters within your SQL statements.

## FAQ

### How can the results of an SQL Action node be utilized?

When using a `SELECT` statement, the query results are stored in the node in Sequelize's JSON format. You can parse and utilize these results through the [JSON-query](/handbook/workflow-json-query) plugin.

### Will SQL actions trigger table events?

**No**. SQL actions directly execute SQL commands on the database. Actions such as `CREATE` / `UPDATE` / `DELETE` occur in the database, while table events are managed at the Node.js application layer (ORM processing). As a result, these operations do not trigger table events.

## Installation

This plugin is built-in, so no installation is necessary.

## User Guide

### Creating a Node

In the workflow configuration interface, click the plus sign (“+”) within the flow to add an "SQL Action" node:

![Adding SQL Actions](https://static-docs.nocobase.com/0ce40a226d7a5bf3717813e27da40e62.png)

### Configuring the Node

![SQL Node Configuration](https://static-docs.nocobase.com/98611dc13bcda04348bd0856561a7b04.png)

#### Data Source

Select the data source for executing the SQL.

The data source must be of a database type, such as the main data source, PostgreSQL type, or any other data source compatible with Sequelize.

#### SQL Content

Edit the SQL statement. Currently, only one SQL statement is supported.

You can insert required variables by clicking the variable button in the upper right corner of the editor. Before execution, the variables will be replaced with their corresponding values in the text, and the final SQL statement will be sent to the database for querying.

### Node Execution Results

Starting from `v1.3.15-beta`, the result of the SQL node execution is an array consisting purely of data. Prior to this version, the result was a Sequelize native structure that included query metadata (for more details, see: [`sequelize.query()`](https://sequelize.org/api/v6/class/src/sequelize.js~sequelize#instance-method-query)).

For example, the following query:

```sql
select count(id) from posts;
```

Result before `v1.3.15-beta`:

```json
[
    [
        { "count": 1 }
    ],
    {
        // meta
    }
]
```

Result after `v1.3.15-beta`:

```json
[
    { "count": 1 }
]
```
