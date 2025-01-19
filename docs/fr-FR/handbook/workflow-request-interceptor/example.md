# Example

Building on the basic instructions provided earlier, let's explore an example scenario of "Order Submission." In this scenario, we need to verify the stock levels of all products selected by the user at the time of order submission. If any product has insufficient stock, the order submission will be blocked, and a relevant notification will be displayed. The system will iterate through each product, and if all products have sufficient stock, the order data will be generated successfully.

The other steps follow the same procedure outlined in the instructions. However, since an order may include multiple products, in addition to establishing a many-to-many relationship between "Order" <-- m:1 -- "Details" -- 1:m --> "Product" during data modeling, it's necessary to introduce a "Loop" node in the "Pre-Action Event" workflow. This loop will be used to check the stock level of each product:

![Example_Loop Check Process](https://static-docs.nocobase.com/8307de47d5629595ab6cf00f8aa898e3.png)

The loop object should be set to the "Details" array within the submitted order data:

![Example_Loop Object Configuration](https://static-docs.nocobase.com/ed662b54cc1f5425e2b472053f89baba.png)

Within the loop, a condition check node is employed to determine whether the stock of the current product is sufficient:

![Example_Condition Check in Loop](https://static-docs.nocobase.com/4af91112934b0a04a4ce55e657c0833b.png)

The other configurations remain consistent with those in the basic usage instructions. Upon order submission, if any product's stock is insufficient, the order will be blocked, and a corresponding notification will be returned. During testing, you can attempt to submit multiple products in one order, with one product having insufficient stock and another having sufficient stock. The response message you receive will look like this:

![Example_Submission Response Message](https://static-docs.nocobase.com/dd9e81084aa237bda0241d399ac19270.png)

As illustrated, the response message does not flag the insufficient stock of the first product, "iPhone 15 Pro," but it does indicate the insufficient stock of the second product, "iPhone 14 Pro." This happens because the first product's stock was adequate, allowing the submission to proceed, while the second product's insufficient stock led to the order being blocked.
