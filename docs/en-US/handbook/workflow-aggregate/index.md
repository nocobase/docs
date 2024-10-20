# Aggregate

<PluginInfo name="workflow-aggregate" link="/handbook/workflow-aggregate"></PluginInfo>

This plugin is designed to execute aggregate function queries on specific data within a table that meets defined conditions, returning the relevant statistical outcomes. It is particularly useful for generating statistical data for reports.

The node operates using database aggregate functions and currently supports querying a single field within a single data table. The resulting statistics are stored within the node’s output, making them available for subsequent nodes in the workflow.

## Installation

This is a built-in plugin, so no installation steps are required.

## User Manual

### Creating a Node

In the workflow configuration interface, click the plus ("+") button within the process flow to add an "Aggregate Query" node:

![Create Aggregate Query Node](https://static-docs.nocobase.com/7f9d806ebf5064f80c30f8b67f316f0f.png)

### Node Configuration

![Aggregate Query Node_Configuration](https://static-docs.nocobase.com/57362f747b9992230567c6bb5e986fd2.png)

#### Aggregate Functions

This plugin supports five SQL aggregate functions: `COUNT`, `SUM`, `AVG`, `MIN`, and `MAX`. You can select any one of these functions to perform the aggregate query on your data.

#### Target Type

There are two methods for selecting the target of the aggregate query. The first is to directly select the target data table and one of its fields. The second is to choose a related data table and field from the existing data objects in the workflow context to perform the aggregate query.

#### Distinct

This feature corresponds to the `DISTINCT` keyword in SQL. The distinct field must be the same as the selected data table field, and currently, different fields cannot be selected for the distinct and target fields.

#### Filter Conditions

You can apply filter conditions similar to those in a standard data table query, using the workflow’s context variables.

### Example

The aggregate target "Collection Table Data" is quite intuitive, so let's illustrate the usage of the aggregate target as "Related Collection Table Data" with the example of "counting the total number of articles in a category after adding a new article to that category."

First, create two data tables: "Posts" and "Categories." The "Posts" collection includes a many-to-one relationship field pointing to the "Categories" collection, and a reverse relationship field that allows one category to contain multiple articles:

| Field Name        | Type               |
| ----------------- | ------------------ |
| Title             | Single Line Text   |
| Category          | Many-to-One (Category) |

| Field Name    | Type               |
|---------------| ------------------ |
| Category Name | Single Line Text   |
| Posts         | One-to-Many (Articles) |

Next, create a workflow triggered by an event in the data table, specifically when new data is added to the "Articles" table.

Then, add an aggregate query node with the following configuration:

![Aggregate Query Node_Example_Configuration](https://static-docs.nocobase.com/542272e638c6c0a567373d1b37ddda78.png)

Once the workflow is triggered, the aggregate query node will calculate the total number of articles within the category of the newly added article and save this count as the node’s output.

:::info{title=Tip}
If you need to access related data in a collection table event trigger, ensure you configure the relevant fields for "Preload associations" in the trigger; otherwise, these fields won’t be selectable.
:::
