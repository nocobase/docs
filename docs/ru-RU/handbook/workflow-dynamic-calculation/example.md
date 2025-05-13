# Example

Following the configuration steps outlined above, let's illustrate how to calculate the final price for different products by applying various Price Rules during the order placement process.

1. Set Up the Product Collection:

   | Field Name     | Type                   |
       | -------------- | ---------------------- |
   | Product Name   | Text                   |
   | Price | Number                 |
   | Price Rule  | `belongsTo` (Price Rule Collection) |

2. Set Up the Price Rule Collection (using the expression Collection template):

   | Field Name      | Type                        |
       | --------------- | --------------------------- |
   | Rule Name       | Text                        |
   | Collection      | Single Select (Data Collection)   |
   | Calculation Engine | Single Select (mathjs/formulajs) |
   | Expression      | Text                        |

3. Input Price Rules:

   | ID  | Name    | Collection | Calculation Engine | Expression                |
       | --- |---------| ---------- | ------------------ | ------------------------- |
   | 1   | 80% off | Product    | formula.js         | `{{Product.Price}} * 0.8` |
   | 2   | 90% off | Product    | formula.js         | `{{Product.Price}} * 0.9` |

4. Create Products and Assign Price Rules:

   | ID  | Product Name  | Price | Price Rule |
       | --- | ------------- | ----- | ------------- |
   | 1   | iPhone 14 Pro | 7999  | 2             |
   | 2   | iPhone 13 Pro | 6999  | 1             |

5. Set Up a Workflow Triggered by Order Creation:

   ![Trigger_CreateOrder](https://static-docs.nocobase.com/f181f75b10007afd5de068f3458d2e04.png)

6. Create a Dynamic Expression Calculation Node and Configure it Using Trigger Data/Product/Price Rule:

   ![SelectDynamicExpressionData](https://static-docs.nocobase.com/21ccc63e604dd90b7d26c3c33c12d671.png)

   Set the variable data source to the product in the trigger data:

   ![SelectVariableDataSource](https://static-docs.nocobase.com/afbffe9661539d26e4b175ae8a4b28f7.png)

7. Add a Data Update Node to Update the Order Total Price with the Result from the Calculation Node:

   ![UpdateOrderData](https://static-docs.nocobase.com/5cc7ffb113c8d6a2fd3b1b34abe06dcc.png)

8. Trigger the Workflow Upon Order Creation and Verify the Prices in the Order List:

   | Order Product    | Price | Price Rule     | Total Price          |
       | ---------------- | -------------- |----------------|----------------------|
   | iPhone 14 Pro    | 7999           | Rule1: 90% off | 7999 \* 0.9 = 7199.1 |
   | iPhone 13 Pro    | 6999           | Rule2: 80% off | 6999 \* 0.8 = 5599.2 |

   The final price displayed in the image below should match the calculated price in the Collection above:

   ![OrderTotalPrice_AfterCreation](https://static-docs.nocobase.com/a5610aca292e79c4841c97457bd3cc7c.png)

   :::info{title=Tip}
   Since the workflow operates asynchronously, the total price might not be immediately reflected in the Collection after the order is created. You may need to wait a moment before refreshing the page to see the updated total price.
   :::
