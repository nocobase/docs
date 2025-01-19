# Collection event

Trigger types of collection events will listen for adding, deleting and updating events of the collection. When an action on the record of collection occurs and meets the configured conditions, the corresponding workflow will be triggered. For example, reducing the inventory of goods after adding a new order, waiting for manual review after adding a comment, etc.

## Basic Usage

There are several types of changes to the collection:

1. After a record added.
2. After a record updated.
3. After a record added or updated.
4. After a record deleted.

![Collection Events_Trigger Timing Selection](https://static-docs.nocobase.com/81275602742deb71e0c830eb97aa612c.png)

You can choose the timing of the trigger according to the needs of the business. When change type selected that includes updating a record, you can also limit the fields that have changed. Only when the selected fields change will the trigger condition be satisfied. If none are selected, it means that all fields changing will trigger.

![Collection Events_Selection of Fields that Have Changed](https://static-docs.nocobase.com/874a1475f01298b3c00267b2b4674611.png)

In more detail, conditions can be configured for each field of the triggered record. It only triggers when the conditions of the fields are met.

![Collection Events_Configuring Conditions for Data Satisfying](https://static-docs.nocobase.com/264ae3835dcd75cee0eef7812c11fe0c.png)

After the collection event is triggered, the source record of the event will be injected into the execution plan as trigger context data for subsequent nodes to use as variables. However, when subsequent nodes need to use the association fields of this record, preloading of the association fields needs to be configured first. The selected association fields will be injected into the context after triggering and can be selected and used by path.

## Related Tips

### Batch data action triggering is not supported

Collection events do not support triggering on batch data action for now. For example, when adding article record and simultaneously adding multiple tag records of the article (many-to-many relationship data), only the workflow for adding the article will be triggered, and the workflows for adding multiple tags simultaneously will not be triggered. For associating or adding of many-to-many association records, the workflow of the intermediate collection will not be triggered either.

### Data operations out of NocoBase application will not trigger

Data actions on collections through HTTP API calls to the application interface can also trigger corresponding events. However, if the data changes are not made through the NodoBase application but directly through database operations, the corresponding events will not be triggered. For example, the triggers in the database itself will not be associated with workflows in the application.

Also, using the SQL node to operate on the database is equivalent to directly operating on the database and will not trigger collection events.

### External Data Sources

from `0.20`, workflow started to support external data sources. If an external data source plugin is used and the collection event is configured for an external data source, as long as the data operation on this data source is completed within the application (user addition, update, and workflow data operations, etc.), the corresponding collection event can be triggered. However, if the data change is made through other systems or directly within the external database, the collection event will not be triggered.

## Example

Take an example scenario of calculating the total price and deducting inventory after adding an order.

First, we create the product collection and the order collection, and the data model is as follows:

| Field Name | Field Type |
| ---------- | ---------- |
| Product Name | Single Line Text |
| Price | Number |
| Inventory | Integer |

| Field Name | Field Type |
| ---------- | ---------- |
| Order Number | Auto Number |
| Order Product | Many-to-One (Product) |
| Order Total Price | Number |

And add basic product data:

| Product Name | Price | Inventory |
| ------------ | ----- | -------- |
| iPhone 14 Pro | 7999 | 10 |
| iPhone 13 Pro | 5999 | 0 |

Then create a workflow based on the collection event of the order:

![Collection Events_Example_Add Order Trigger](https://static-docs.nocobase.com/094392a870dddc65aeb20357f62ddc08.png)

Several configuration items:

- Data collection: Select the "Order" table.
- Trigger on: Select "After Adding Data" trigger.
- Condition: Leave it blank.
- Preload associations: Check "Product".

Then configure other nodes based on the logic of the workflow, check if the product inventory is greater than 0, and deduct inventory if it is, otherwise delete the order as it is invalid:

![Collection Events_Example_Add Order Workflow Arrangement](https://static-docs.nocobase.com/7713ea1aaa0f52a0dc3c92aba5e58f05.png)

The configuration of the nodes will be detailed in the documentation of the specific types.

Enable the workflow and test by adding an order through the UI. After placing an order for "iPhone 14 Pro", the inventory of the corresponding product will be reduced to 9. However, if an order is placed for "iPhone 13 Pro", the order will be deleted due to insufficient inventory.

![Collection Events_Example_Add Order Execution Result](https://static-docs.nocobase.com/24cbe51e24ba4804b3bd48d99415c54f.png)
