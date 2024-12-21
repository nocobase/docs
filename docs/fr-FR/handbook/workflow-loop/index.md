## Loop

<PluginInfo name="workflow-loop" link="/handbook/workflow-loop"></PluginInfo>

The loop functions in a manner akin to `for`, `while`, or `forEach` constructs in programming languages. It’s designed for situations where you need to repeat certain operations a specific number of times or iterate over a dataset (such as an array). The loop node is your go-to tool for such tasks.

## Installation

This plugin comes pre-installed, so no additional setup is necessary.

## User Manual

### Creating Node

In the workflow configuration interface, you can add a "Loop" node by clicking the plus sign ("+") in the process:

![Creating a Loop Node](https://static-docs.nocobase.com/b3c8061a66bfff037f4b9509ab0aad75.png)

Once you create the loop node, an internal branch specifically for the loop is generated. You can then populate this branch with any number of nodes. These nodes will have access to not only the workflow context variables but also the local variables defined within the loop context—such as the current data object or the iteration index (which starts at `0`). These local variables are scoped exclusively to the loop. For nested loops, you can use variables specific to each loop level.

### Node Configuration

![20241016135326](https://static-docs.nocobase.com/20241016135326.png)

#### Loop Object

The loop node can handle various data types for the loop object, each in a different way:

1. **Array**: This is the most common use case. Typically, you'll select a workflow context variable, such as the results from a query node or preloaded data from a many-to-many relationship. If an array is selected, the loop node will iterate over each element, assigning the current element to a local variable within the loop context for each iteration.

2. **Number**: When the loop object is a number, it’s treated as the number of iterations. The index within the local variable will match the loop object’s value.

3. **String**: If the loop object is a string, the loop will iterate according to the string's length, processing each character by its index.

4. **Others**: Other data types (including objects) are treated as a single loop object, resulting in just one iteration—typically not requiring a loop.

You can also input constants directly when working with numbers and strings. For instance, inputting `5` (number type) will cause the loop to run 5 times, while inputting `abc` (string type) will result in 3 iterations, processing `a`, `b`, and `c` individually. The variable selection tool allows you to choose the type of constant you want to use.

#### Loop condition

From version `v1.4.0-beta` on, loop condition options are added, and could be enabled in node configuration.

**Condition**

Similar to the configuration in a condition node, combination of conditions can be configured, and variables from the current loop, such as the loop item and loop index, can also be used.

**Checkpoint**

Similar to `while` and `do/while` in programming languages, conditions can be configured to be evaluated either before each loop iteration or after it ends. Post-condition evaluation can execute other nodes in the loop body first before performing the condition check.

**When condition is not met**

Similar to `break` and `continue` clause in programming languages, could be use to determine whether to break or continue the loop.

#### Error handling of internal nodes in loop

From version `v1.4.0-beta` on, when an internal node in a loop fails to execute (due to unmet conditions, errors, etc.), the next step can be determined through this configuration. Three handling methods are supported:

* Exit the process (default)
* Exit the loop and continue the process
* Continue to the next loop item

You can choose the appropriate method as needed.

### Example

Consider the following scenario: when placing an order, you need to check the inventory of each product in the order. If the inventory is sufficient, the stock is deducted; otherwise, the product in the order details is marked as invalid.

1. Create three collections: Product <-(1:m)-- Order Details --(m:1)-> Order , with the following data model:

| Field Name     | Field Type        |
| -------------- | ----------------- |
| Order Details | Many-to-One (Details) |
| Total Price | Number            |

| Field Name | Field Type        |
| ---------- | ----------------- |
| Product    | One-to-Many (Product) |
| Quantity   | Number            |

| Field Name  | Field Type  |
| ----------- | ----------- |
| Product Name | Single-line Text |
| Price       | Number      |
| Inventory   | Integer     |

2. Create a workflow, selecting "Collection event" as the trigger, and choose the "Order" table with "Create record" as the trigger. Additionally, preload relationship data from the "Order Details" table and the Product Table under details:

![Loop Node Example Trigger Configuration](https://static-docs.nocobase.com/0086601c2fc0e17a64d046a4c86b49b7.png)

3. Create a loop node, selecting the loop object as "Trigger Data / Order Details," which loops through each record in the order details table:

![Loop Node Example Loop Node Configuration](https://static-docs.nocobase.com/2507becc32db5a9a0641c198605a20da.png)

4. Inside the loop node, create a "Condition" node to check if the product inventory is sufficient:

![Loop Node Example Condition Node Configuration](https://static-docs.nocobase.com/a6d08d15786841e1a3512b38e4629852.png)

5. If the inventory is sufficient, create a "Calculation" and an "Update record" node under the "Yes" branch to update the inventory after deduction:

![Loop Node Example Calculation Node Configuration](https://static-docs.nocobase.com/8df3604c71f8f8705b1552d3ebfe3b50.png)

![Loop Node Example Update Inventory Node Configuration](https://static-docs.nocobase.com/2d84baa9b3b01bd85fccda9eec992378.png)

6. If the inventory is insufficient, create an "Update record" node under the "No" branch to update the status of the order detail to "Invalid":

![Loop Node Example Update Order Details Node Configuration](https://static-docs.nocobase.com/4996613090c254c69a1d80f3b3a7fae2.png)

The complete process structure is illustrated below:

![Loop Node Example Process Structure](https://static-docs.nocobase.com/6f59ef246c1f19976344a7624c4c4151.png)

After configuration and activation of this workflow, every time a new order is created, the system will automatically check the inventory of each product in the order. If sufficient inventory is available, the stock will be deducted; otherwise, the product in the order details will be marked as invalid (helping to calculate the valid total order price).
