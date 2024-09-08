# Linkage

## Introduction

The linkage rules for actions are configured based on contextual data conditions and execution results. By configuring these linkage rules, you can control the status of actions (Visible, Hidden, Enabled, Disabled).

![20240423113057](https://static-docs.nocobase.com/20240423113057.png)

## Usage Instructions

![20240413102150](https://static-docs.nocobase.com/20240413102150.png)

When conditions are met (by default, they pass without conditions), the action is triggered. Constants and variables can be used in the condition evaluation.

### Applicable Buttons for Linkage Rules

Currently, only buttons with data context support configuring linkage rules.

Row buttons in blocks such as tables and Gantt charts;

Buttons in detail blocks;


### Constants

Example: Hide the copy button for orders that have been canceled.

![20240423113212](https://static-docs.nocobase.com/20240423113212.png)

### Variables

Example: Disable the delete button for orders with a delivery date later than today.

![20240423113504](https://static-docs.nocobase.com/20240423113504.png)

For further details on using variables, see the [Variables](/handbook/ui/variables) section.
