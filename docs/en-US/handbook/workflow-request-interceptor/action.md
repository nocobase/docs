# Action Configuration

If you set the trigger configuration to "Triggered only when a form bound to this workflow is submitted", you must return to the form interface and bind the workflow to the appropriate action button:

![Binding Workflow to New Order](https://static-docs.nocobase.com/bae3931e60f9bcc51bbc222e40e891e5.png)

In the workflow binding configuration, select the relevant workflow. Typically, choosing "Entire Form Data" as the context for triggering data is sufficient:

![Select Workflow to Bind](https://static-docs.nocobase.com/78e2f023029bd570c91ee4cd19b7a0a7.png)

:::info{title=Note}
Currently, buttons bound to pre-action events only support the "Submit" (or "Save"), "Update records," and "Delete" buttons in forms for new entries or updates. The "Trigger Workflow" button is not supported (this button can only be bound to post-action events).
:::
