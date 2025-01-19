# Example

Imagine we have a "Sample" collection. For samples marked as "Collected," a "Send to Testing" operation is needed. This operation first checks the sample's basic information, generates a "Testing" Record, and then updates the sample's status to "Testing". This entire process is too complex to be handled by simple "Create, Read, Update, Delete" button clicks. In such scenarios, custom operation events are the perfect solution.

To start, create a "Sample" collection and a "Testing" collection, and input some basic test data into the Sample collection:

![Example_Sample_Data_Table](https://static-docs.nocobase.com/20240509172234.png)

Next, you'll need to create a "Custom action Event" workflow. If you require immediate feedback during the operation, opt for the synchronous mode (bear in mind that synchronous mode doesn't support asynchronous nodes like human intervention):

![Example_Create_Workflow](https://static-docs.nocobase.com/20240509173106.png)

Within the trigger configuration, choose "Sample" as the collection:

![Example_Trigger_Configuration](https://static-docs.nocobase.com/20240509173148.png)

Now, arrange the logic of the process according to your business needs. For instance, you might set it so that the "Send to Testing" operation is only allowed when the index parameter exceeds `90`; otherwise, a relevant warning is provided:

![Example_Business_Logic_Arrangement](https://static-docs.nocobase.com/20240509174159.png)

:::info{title=Note}
The "[Response Message](../../nodes/response-message.md)" node can be utilized in synchronous custom operation events to send feedback messages to the client. This feature isn't available in asynchronous mode.
:::

After setting up and enabling the workflow, return to the table interface, and add a "Trigger Workflow" button in the operations column:

![Example_Add_Operation_Button](https://static-docs.nocobase.com/20240509174525.png)

Next, in the button's configuration menu, select the option to bind the workflow, and open the configuration window:

![Example_Open_Workflow_Binding_Popup](https://static-docs.nocobase.com/20240509174633.png)

Add the workflow that was previously enabled:

![Example_Select_Workflow](https://static-docs.nocobase.com/20240509174723.png)

After submission, rename the button to reflect the action, like "Testing," and the configuration is complete.

To use the feature, select any sample data from the table and click the "Send to Testing" button to trigger the custom operation event. As per the pre-arranged logic, if the sample's index parameter is below 90, you'll see a warning message like this:

![Example_Inspection_Criteria_Not_Met](https://static-docs.nocobase.com/20240509175026.png)

If the index parameter is over 90, the process will proceed as expected, creating a "Testing Record" entry and updating the sample's status to "Testing":

![Example_Inspection_Successful](https://static-docs.nocobase.com/20240509175247.png)

And there you have it—a simple custom operation event. This approach can be similarly applied to other complex business operations, such as order processing or report submission, using custom operation events to achieve the desired results.
