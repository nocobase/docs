# Node Configuration

## Creating a Node

Create a dynamic calculation node:

![Creating a Dynamic Calculation Node](https://static-docs.nocobase.com/14613f73a7dfc822a30276c8c04cdeb7.png)

## Node Configuration

## Calculation Expression

Unlike the expression options in a standard calculation node, dynamic expressions must be selected based on preloaded data rather than directly inputting the expression. Choose the preloaded product discount rule data from the trigger:

![Select Dynamic Expression Data](https://static-docs.nocobase.com/21ccc63e604dd90b7d26c3c33c12d671.png)

### Variable Data Source

You also need to select the data row object from the table to be used as a variable in the expression. This can be chosen from the workflow context, where results have been preloaded or queried. The object must be a data row from the table associated with the expression data. In this case, select the product data:

![Select Variable Data Source](https://static-docs.nocobase.com/afbffe9661539d26e4b175ae8a4b28f7.png)

Saving the node configuration completes the entire setup process.
