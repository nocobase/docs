# Action Configuration

When configuring actions in local trigger mode, once the workflow setup is complete, you'll need to return to the user interface and link the workflow to the relevant form operation button in the corresponding data block.

The workflow associated with the "Submit" button (including the "Save record" button) will be triggered after the user submits the form and the data operation is completed.

![Operation After Event_Submit Button](https://static-docs.nocobase.com/ae12d219b8400d75b395880ec4cb2bda.png)

To bind a workflow, simply select "Bind Workflows" from the button configuration menu to open the binding configuration dialog. Here, you can set up multiple workflows to be triggered. If none are configured, it indicates that no workflows will be triggered. For each workflow, you'll need to determine whether the trigger involves data from the entire form or data from a specific relational field within the form. Then, based on the selected data model, choose the form workflow that corresponds to the data model of the associated table.

![Operation After Event_Bind Workflow Configuration_Context Selection](https://static-docs.nocobase.com/358315fc175849a7fbadbe3276ac6fed.png)

![Operation After Event_Bind Workflow Configuration_Workflow Selection](https://static-docs.nocobase.com/175a71a61b93540cce62a1cb124eb0b5.png)

:::info{title="Note"}
Ensure that the workflow is enabled before attempting to select it in the above interface.
:::
