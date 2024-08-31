# Linkage Rules

## Introduction

Operation linkage rules are designed to manage the state of various operations—such as Visible, Hidden, Editable, or Disabled on contextual data conditions and execution outcomes. These rules provide a dynamic and responsive way to control your application's interface.

![20240423113057](https://static-docs.nocobase.com/20240423113057.png)

## Usage Instructions

![20240413102150](https://static-docs.nocobase.com/20240413102150.png)

Actions are triggered when the defined conditions are met. If no conditions are specified, the action is triggered by default. You can leverage constants or variables within these conditions to create more nuanced control.

### Applicable Buttons for Linkage Rules

Currently, only buttons with a data context are eligible for linkage rule configurations. This includes:

- Row buttons in tables and Gantt charts.
- Buttons in detailed views or sections.

### Constants

Example: Hide the copy button for orders that have been canceled.

![20240423113212](https://static-docs.nocobase.com/20240423113212.png)

### Variables

Example: Disable the delete button for orders with a delivery date later than today.

![20240423113504](https://static-docs.nocobase.com/20240423113504.png)

For further details on using variables, see the [Variables](/handbook/ui/variables) section.
