# Trigger Configuration

## Creating a Workflow

When setting up a workflow, begin by selecting "Custom action event":

![Creating "Custom Operation Event" Workflow](https://static-docs.nocobase.com/20240509091820.png)

## Trigger Configuration

### Context Type

> v.1.6.0+

Different context types determine where the workflow can be bound to buttons in different blocks:

* None: A global event that can be bound to action buttons in the action panel and other data blocks.
* Single record: Can be bound to action buttons in data blocks such as table rows, forms, and details.
* Multiple records: Can be bound to batch operation buttons in the table block.

![触发器配置_上下文类型](https://static-docs.nocobase.com/20250215135808.png)

### Collection

When the context type is single record or multiple records, you'll need to choose the collection that will be associated with your data model:

![Trigger Configuration_Select Data Table](https://static-docs.nocobase.com/20240509150515.png)

### Association Data to Use

If your workflow requires the use of related data from the triggered data row, you can select the necessary deep relationship fields here:

![Trigger Configuration_Select Data Relations to Use](https://static-docs.nocobase.com/20240509154856.png)

These fields will be automatically preloaded into the workflow's context once the event is triggered, making them available for use within the workflow.
