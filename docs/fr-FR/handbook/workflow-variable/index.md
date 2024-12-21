# Custom Variables

<PluginInfo name="workflow-variable" link="/handbook/workflow-variable" commercial="true"></PluginInfo>

In workflows, variables can be declared or assigned values to existing ones, typically to store temporary data during the process.

## User Manual

### Creating Nodes

To add a "Variable" node in the workflow configuration interface, click the plus (“+”) button in the process:

![Add Variable Node](https://static-docs.nocobase.com/53b1e48e777bfff7f2a08271526ef3ee.png)

### Configuring Nodes

#### Mode

Like programming variables, a variable node must first be declared before it can be used or assigned a value. When creating a variable node, you must choose its mode. There are two options:

![Select Mode](https://static-docs.nocobase.com/49d8b7b501de6faef6f303262aa14550.png)

- Declare a new variable: This creates a new variable.
- Assign value to an existing variable: This assigns a value to a previously declared variable, effectively updating its value.

If the node being created is the first variable node in the process, only the declare mode is available, as there are no pre-existing variables to assign values to.

When assigning a value to an existing variable, you’ll need to select the target variable, which is the node where the variable was originally declared:

![Select the Variable to Assign](https://static-docs.nocobase.com/1ce8911548d7347e693d8cc8ac1953eb.png)

#### Value

The value of a variable can be of any type—such as a constant (e.g., strings, numbers, booleans, dates) or another variable within the workflow.

In declare mode, setting a variable value is equivalent to assigning it an initial value.

![Declare Initial Value](https://static-docs.nocobase.com/4ce2c508986565ad537343013758c6a4.png)

In assign mode, setting a variable value modifies the value of the target variable to the new value, which will be used in subsequent steps.

![Assign Trigger Variable Value to Declared Variable](https://static-docs.nocobase.com/858bae180712ad279ae6a964a77a7659.png)

### Using Variable Values

In nodes following the variable node, you can use the value of the variable by selecting it from the "Node result" group. For example, in a query node, the value of a variable can be used as a query condition:

![Use Variable Value as Query Filter Condition](https://static-docs.nocobase.com/1ca91c295254ff85999a1751499f14bc.png)

### Example

Variable nodes are particularly useful in branches where new values need to be calculated or combined with existing values (similar to `reduce` or `concat` in programming). These values can then be used after the branch ends. The following example demonstrates how to create a concatenated recipient string using loop and variable nodes.

Start by creating a workflow triggered by a data table update. This workflow will be activated when "Article" data is updated, and it preloads the related "Authors" relational data (used to get recipients):

![Configure Trigger](https://static-docs.nocobase.com/93327530a93c695c637d74cdfdcd5cde.png)

Next, create a variable node to store the recipient string:

![Recipient Variable Node](https://static-docs.nocobase.com/d26fa4a7e7ee4f34e0d8392a51c6666e.png)

Then, create a loop branch node to iterate over the authors of the article and concatenate their details into the recipient variable:

![Loop through Authors of the Article](https://static-docs.nocobase.com/083fe62c943c17a643dc47ec2872e07c.png)

Within the loop branch, first create a Operator node to concatenate the current author with the stored author string:

![Concatenate Recipient String](https://static-docs.nocobase.com/5d21a990162f32cb8818d27b16fd1bcd.png)

After the Operator node, create another variable node in assign mode. Select the recipient variable node as the target, and set its value to the result of the Operator node:

![Assign Concatenated Recipient String to Recipient Node](https://static-docs.nocobase.com/fc40ed95dd9b61d924b7ca11b23f9482.png)

When the loop branch ends, the recipient variable will store the concatenated recipient string of all the article's authors. You can then use an HTTP request node after the loop to call the email-sending interface, passing the recipient variable’s value as the recipient parameter:

![Send Email to Recipient through Request Node](https://static-docs.nocobase.com/37f71aa1a63e172bcb2dce10a250947e.png)

In this way, a simple bulk email function is implemented using loop and variable nodes.
