# Trigger Configuration

## Creating a Workflow

When setting up a workflow, begin by selecting "Custom action event":

![Creating "Custom Operation Event" Workflow](https://static-docs.nocobase.com/20240509091820.png)

## Trigger Configuration

### Data Table

Since custom operation events are tied to specific data rows, you'll need to first choose the data table that will be associated with your data model:

![Trigger Configuration_Select Data Table](https://static-docs.nocobase.com/20240509150515.png)

### Related Data to Utilize

If your workflow requires the use of related data from the triggered data row, you can select the necessary deep relationship fields here:

![Trigger Configuration_Select Data Relations to Use](https://static-docs.nocobase.com/20240509154856.png)

These fields will be automatically preloaded into the workflow's context once the event is triggered, making them available for use within the workflow.
