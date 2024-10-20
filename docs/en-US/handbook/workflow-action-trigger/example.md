# Example

**Output:** Final Polished Translation

---

Here, we will walk through the process by adding a new operation.

Imagine a scenario involving a "Expenses applications." After an employee submits an expense reimbursement, the system needs to perform an automatic review of the amount and, if necessary, trigger a manual review for amounts exceeding a set limit. Only requests that pass these reviews will be approved and subsequently forwarded to the finance department for processing.

To start, we can create a "Expenses" collection with the following fields:

- **Project Name:** Single-line Text
- **Applicant:** Many-to-One (User)
- **Amount:** Numeric
- **Status:** Single Choice (Options: "Approved", "Processed")

Next, we'll create a workflow categorized as a "Post-action Event" and configure the trigger's data table model to point to the "Expenses" collection:

![Example_Trigger Configuration_Select Data Table](https://static-docs.nocobase.com/6e1abb5c3e1198038676115943714f07.png)

Once the workflow is enabled, we can proceed with configuring the specific processing nodes.

Then, on the user interface, create a table block for the "Expenses" data table and add an "Add" button to the toolbar, ensuring the corresponding form fields are properly configured. In the settings for the form's "Submit" button, open the "Bind Workflow" configuration dialog, select the entire form's data as the context, and link it to the workflow we previously created:

![Example_Form Button Configuration_Bind Workflow](https://static-docs.nocobase.com/fc00bdcdb975bb8850e5cab235f854f3.png)

Once the form configuration is complete, return to the workflow to arrange the logic. For instance, if the reimbursement amount exceeds 500, the system will require an administrator's manual review; otherwise, it will automatically approve the request. Upon approval, a expenses record is generated and forwarded to finance for further processing (details omitted).

![Example_Process Flow](https://static-docs.nocobase.com/059e8e3d5ffb34cc2da6880fa3dc490b.png)

Setting aside the subsequent financial processing, this completes the configuration of the expenses application process. When an employee fills out and submits a expenses request, the system triggers the corresponding workflow. If the amount is under 500, a record is automatically created and awaits further action by finance. If the amount exceeds this threshold, the request undergoes a supervisor's review. Upon approval, the record is created and handed over to finance for processing.

This example workflow can also be applied to a standard "Submit" button, depending on whether the business scenario requires a record to be created before moving on to subsequent steps.
