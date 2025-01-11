# Calculation

Although the calculation node does not control the flow of the process, it is an important function in the workflow. The calculation node can evaluate an expression, and the result will be stored in the corresponding node's result for later use by other nodes. It is a tool for calculating, processing, and transforming data. To some extent, it can replace the functionality of calling a function to compute a value in programming languages and assigning it to a variable.

## Creating a Node

In the workflow configuration UI, click the plus ("+") button in the flow to add a "Calculation" node:

![Calculation Node - Adding](https://static-docs.nocobase.com/58a455540d26945251cd143eb4b16579.png)

## Node Configuration

![Calculation Node - Configuration](https://static-docs.nocobase.com/6a155de3f6a883d8cd1881b2d9c33874.png)

### Calculation Engine

The calculation engine specifies the syntax supported of the expression. Currently supported calculation engines include [Math.js](https://mathjs.org/) and [Formula.js](https://formulajs.info/), each of which has built-in support for a large number of common functions and methods for data manipulation. Specific usage can be found in their official documentation.

:::info{title=Note}
It's important to note that there is a difference in array indexing between the them. In Math.js, indexing starts from `1`, while in Formula.js, it starts from `0`.
:::

Additionally, if simple string concatenation is needed, the "String Template" can be used directly. This engine will replace variables in the expression with their corresponding values and then return the concatenated string.

### Expression

The expression is a string representation of a calculation formula, composed of variables, constants, operators, and supported functions. Variables from the workflow context can be used, such as results from preceding nodes of the calculation node or scope variables from loops.

If the expression input does not comply with the syntax, an error will be prompted in the node configuration. If a variable does not exist during execution or its type does not match, or if an undefined function is used, the calculation node will terminate prematurely with an error status.

## Example

### Calculating Total Order Price

Typically, an order may contain multiple items, each with different prices and quantities. The total price of the order requires calculating the sum of the products of prices and quantities for all items. You can use a calculation node to compute the total order price after loading the list of order details (a many-to-many relationship dataset):

![Calculation Node - Example - Node Configuration](https://static-docs.nocobase.com/85966b0116afb49aa966eeaa85e78dae.png)

Where the `SUMPRODUCT` function from Formula.js calculates the sum of the products of two arrays of the same length, and then summing them up yields the total order price.
