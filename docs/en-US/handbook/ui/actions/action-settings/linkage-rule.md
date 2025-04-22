# Operation Linkage Rules

## Introduction

Operation linkage rules allow users to dynamically control the status of actions (such as Visible, Enabled, Hidden, Disabled) based on specific conditions. By configuring these rules, users can link the behavior of action buttons with the current record, user role, or contextual data. Starting from version `v1.7.0-beta.19`, global buttons support configuring linkage rules.

> **Note**: Operation linkage rules do not currently support direct linkage with form values. Therefore, it is not possible to perform conditional checks based on fields in the current form (i.e., current form variables are not supported). Currently, operation linkage rules support controlling the visibility, enablement, and disablement of actions based on other contextual data or system variables.

![20240423113057](https://static-docs.nocobase.com/20240423113057.png)

## Usage Instructions

![20250418152329](https://static-docs.nocobase.com/20250418152329.png)

When conditions are met (by default, they pass without conditions), the action will be triggered. Constants and variables can be used in the condition evaluation.

## Constants

Example: Only orders that are pending can be edited.

![20250418150033](https://static-docs.nocobase.com/20250418150033.png)

## Variables

### System Variables

Example 1: Disable the delete button for orders with a delivery date later than today.

![20250418145825](https://static-docs.nocobase.com/20250418145825.png)

Example 2: The bulk delete button on the order block table header is only available to the administrator role; other roles cannot perform this operation.

![20250418150637](https://static-docs.nocobase.com/20250418150637.png)

![20250418150826](https://static-docs.nocobase.com/20250418150826.png)

### Context Variables

Example: The "Add" button in the order details (relationship block) is enabled only when the order status is "Pending Payment." In other statuses, the button will be disabled.

![20250418145312](https://static-docs.nocobase.com/20250418145312.png)

![20250418150429](https://static-docs.nocobase.com/20250418150429.png)

For more information on variable content, refer to [Variables](/handbook/ui/variables).

## RoadMap

- Planned or In Progress
  - Operation linkage rules support for the current form

For more information on linkage rules, refer to [Linkage Rules](/handbook/ui/linkage-rule)
