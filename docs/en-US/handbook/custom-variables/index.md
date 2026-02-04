# Custom Variables<Badge>v1.8.0+</Badge>

<PluginInfo commercial="true" name="custom-variables"></PluginInfo>

## Introduction

The Custom Variables plugin is a commercial plugin for NocoBase that provides a flexible custom variable management system for your application. In the current version, it mainly supports the Aggregation Variable feature, allowing you to create data statistic variables such as count, sum, average, etc. These variables can be used in menu badges, page labels, and other places to make your application interface more intuitive and informative.

Note: More types of custom variables will be supported in future releases.

## Key Features

- 🏗️ Custom variable framework: provides a complete workflow for adding, managing, and using variables
- 📊 Aggregation variables: supports COUNT, SUM, AVG, MIN, MAX
- 🏷️ Badge display: show dynamic data on menu items and page labels
- 🎯 Scope management: variables are effective only within specific interface areas
- 🔧 Flexible configuration: supports custom filter conditions and display formats
- 🚀 Extensibility: reserved interfaces for adding more variable types in the future

## Installation and Activation

### Prerequisites
- NocoBase version v1.8.0+

### Installation Steps
1. [Purchase](https://www.nocobase.com/en/commercial) a NocoBase commercial license
2. [Install](https://docs.nocobase.com/welcome/getting-started/plugin) the plugin
3. Find the "Custom Variables" plugin in the plugin manager
4. Click the "Enable" button
5. Wait for the page to refresh

## Basic Usage Guide

### 1. Create your first variable

#### Scenario example
Suppose you have an "Orders" table and want to display today's order count on a menu.

#### Steps
![20250525141703_rec_](https://static-docs.nocobase.com/20250525141703_rec_.gif)
1. Enter the variable creation interface
   - On the menu item where you want to display the statistic
   - Open the configuration list
   - Select the "Edit Badge" option

2. Add a new variable
   - In the Badge Edit dialog, click the "Add Variable" button
   - Select the "Aggregation Variable" type (the current version supports this variable type)

3. Configure the aggregation variable
   - Variable name: enter a descriptive name, e.g. "Today's Order Count"
   - Data table: select the "Orders" table
   - Aggregation method: choose "Count (COUNT)"
   - Aggregation field: choose the field to count (preferably a unique field such as ID)

4. Set filter conditions (optional)
   - Click the "Filter Conditions" area
   - Add a time range filter: Creation time = Today
   - Or any other required conditions

5. Save the variable
   - Click "OK" to save the variable settings

6. Configure badge display
   - In the "Badge" input box, enter: `{{$customVariables.TodayOrderCount}}`
   - You can set the badge color and style
   - Click "Submit" to finish configuration

### 2. Variable types

#### Aggregation Variable
This is the primary variable type supported in the current version and is used to perform statistical calculations on data tables.

Note: Future versions will support additional custom variable types such as date variables, computed variables, etc.

Supported aggregation methods:

- Count (COUNT): counts the number of records
  - Use cases: count orders, users, etc.
  - Example: number of new users today

- Sum (SUM): calculates the total of a numeric field
  - Use cases: total sales, total inventory quantity, etc.
  - Example: sales total for the month

- Average (AVG): calculates the average of a numeric field
  - Use cases: average rating, average price, etc.
  - Example: product average rating

- Minimum (MIN): finds the minimum value of a numeric field
  - Use cases: lowest price, earliest time, etc.
  - Example: product lowest price

- Maximum (MAX): finds the maximum value of a numeric field
  - Use cases: highest price, latest time, etc.
  - Example: highest sales amount

### 3. Filter Conditions

Filter conditions let you count only data that match specific criteria.

#### Common filter examples

Time range filters:
- Today: `Creation time = Today`
- This week: `Creation time = This week`
- This month: `Creation time = This month`
- Last 7 days: `Creation time >= 7 days ago`

Status filters:
- Completed orders: `Status = "Completed"`
- Pending tasks: `Status = "Pending"`

User-related filters:
- Current user's data: `Creator = {{$user.id}}`
- Specific department: `Department = "Sales"`

#### Combined conditions
You can set multiple filter conditions which are combined with logical AND:
```
Creation time = This month
AND Status = "Completed"
AND Amount > 1000
```

### 4. Badge Style Configuration

#### Basic settings
- Background color: set the badge background color
- Text color: set the badge text color
- Size: choose default or small size
- Maximum number: when the number exceeds this value, display in the "99+" style
- Show zero: whether to display the badge when the value is 0

#### Style recommendations
- Important data: use red or orange background to attract attention
- Normal data: use blue or green background
- Secondary data: use gray background to reduce visual weight

### 5. Real-world use cases

#### Use case 1: CRM (Customer Management)
- New customers: display number of new customers this month
- Customers to follow up: display count with status "To Follow Up"
- Closed deals: display number of deals closed this month

#### Use case 2: Order Management
- Pending orders: display count of orders with status "Pending"
- Today's sales total: display the sum of order amounts for today
- Average order amount: display the average order amount

#### Use case 3: Project Management
- Ongoing projects: display count of projects with status "In Progress"
- Overdue tasks: display tasks whose deadline has passed and are not completed
- Team workload: display average number of tasks per team member

#### Use case 4: Inventory Management
- Low stock items: display count of items below safety stock
- Total inventory value: display total value of all inventory
- Highest value item: display the highest unit price among products

## Advanced Features

### 1. Expression calculation

You can use expressions in badges to process aggregation variable values:

Display percentage:
![20250525143249](https://static-docs.nocobase.com/20250525143249.png)

Round to decimal places:
![20250525143411](https://static-docs.nocobase.com/20250525143411.png)

Conditional display:
![20250525143637](https://static-docs.nocobase.com/20250525143637.png)


### 2. Multi-variable combination

You can use multiple aggregation variables within a single badge:

Display ratio:
![20250525143949](https://static-docs.nocobase.com/20250525143949.png)

Display difference:
![20250525144118](https://static-docs.nocobase.com/20250525144118.png)

### 3. Precision control

For aggregation numeric calculations, you can set the number of decimal places:
- Precision = 0: display integers
- Precision = 2: display two decimal places

## Best Practices

### 1. Variable naming conventions
- Use meaningful English names
- Avoid special characters
- Keep names concise and clear
- Examples: `TodayOrderCount`, `MonthlySalesTotal`, `PendingTasks`

### 2. Performance optimization tips
- Avoid using complex filter conditions on very large tables
- Set reasonable filter conditions to reduce query scope
- Regularly clean up unused aggregation variables

### 3. User experience optimization
- Choose badge colors that ensure readability
- Set a reasonable maximum display number
- For statistics that may be zero, consider whether to show zero values

### 4. Data accuracy
- Regularly verify that filter conditions match business requirements
- Ensure the data types of aggregated fields are correct
- Test aggregation variables under different data scenarios

## Troubleshooting

### Common issues

Problem 1: Aggregation variable displays blank or incorrect value
- Check that the table name is correct
- Confirm the selected field exists and contains data
- Check whether filter conditions are too strict

Problem 2: Badge does not display
- Verify that the expression syntax is correct; refer to [Formula.js](https://docs.nocobase.com/handbook/calculation-engines/formula)
- Check that the aggregation variable was created successfully
- Confirm whether the "Show zero" setting meets expectations

Problem 3: Data is not updated in real time
- Data will update automatically when related records change
- If data does not update, try refreshing the page or report the issue in the [community](https://forum.nocobase.com)

Problem 4: Permission-related issues
- Ensure the current user has permission to access the related table
- Check field-level permission settings

### Get help

If you encounter problems, you can:
1. Check the NocoBase [official documentation](https://docs.nocobase.com/welcome/introduction)
2. Contact the technical support team
3. Ask for help on the [community](https://forum.nocobase.com) forum

## Summary

The Custom Variables plugin provides a powerful variable management system for your NocoBase application. In the current version, with aggregation variables you can easily create statistics and display them in the UI, making the app more intuitive and practical.

Key points to remember:
- The current version mainly supports aggregation variables; more types will be added in the future
- Start with simple count variables to learn the feature
- Gradually master using filter conditions
- Pay attention to variable naming conventions
- Regularly maintain and optimize variable configurations