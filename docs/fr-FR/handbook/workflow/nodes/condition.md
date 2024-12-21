# Condition

Similar to the `if` statement in programming languages, the condition node determines the direction of the subsequent flow based on the result of the configured condition.

## Creating a Node

There are two modes for condition: "Continue if 'true'" and "Continue if 'true' or 'false'". When creating the node, you need to choose one of these modes, and it cannot be changed in the node's configuration afterward.

![Mode Selection for Condition](https://static-docs.nocobase.com/3de27308c1179523d8606c66bf3a5fb4.png)

In the "Continue if 'true'" mode, when the result of the condition judgment is "true", workflow will continue to execute the subsequent nodes; otherwise, the flow will terminate and exit prematurely with a failed status.

![Continue if 'true' Mode](https://static-docs.nocobase.com/0f6ae1afe61d501f8eb1f6dedb3d4ad7.png)

This mode is suitable for scenarios where the flow should not continue if the condition is not met. For example, when configuring a form button to submit an order which bound with a "Pre-action event", if there is insufficient stock for the items in the order, the process should not continue to generate the order but instead fail and exit.

In the "Continue if 'true' or 'false'" mode, the condition node will produce two branches of the flow, corresponding to the scenarios where the condition judgment results are "true" and "false". Each branch can have subsequent nodes configured separately. After either branch completes execution, it will automatically return back to the parent branch where the condition node is located and continue executing the subsequent nodes.

![Continue if 'true' or 'false' Mode](https://static-docs.nocobase.com/974a1fcd8603629b64ffce6c55d59282.png)

This mode is suitable for scenarios where different operations need to be performed depending on whether the condition is met or not. For example, checking if a piece of data exists, and if it doesn't, inserting it; if it does, updating it.

## Node Configuration

### Calculation Engine

Currently, three engines are supported:

- **Basic**: Obtains logical results through simple binary calculations and grouping with "AND" and "OR".
- **Math.js**: Computes logical results from expressions supported by the [Math.js](https://mathjs.org/) engine.
- **Formula.js**: Computes logical results from expressions supported by the [Formula.js](https://formulajs.info/) engine.

All three calculations can use variables from the workflow context as operands for computation.
