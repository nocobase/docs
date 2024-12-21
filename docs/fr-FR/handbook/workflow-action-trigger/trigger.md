# Trigger Configuration

#### Creating a Workflow

To create a workflow, begin by selecting "Post-action Event" as the type:

![Creating Workflow with Post-action Trigger](https://static-docs.nocobase.com/13c87035ec1bb7332514676d3e896007.png)

#### Execution Mode

When setting up post-action events, you have the option to choose between "Synchronous" and "Asynchronous" execution modes:

![Creating Workflow - Choosing Synchronous or Asynchronous](https://static-docs.nocobase.com/bc83525c7e539d578f9e2e20baf9ab69.png)

Use the synchronous mode if the process needs to execute and provide feedback immediately after a user operation. For other scenarios, the default asynchronous mode is generally suitable. In asynchronous mode, the user operation completes instantly, and the workflow continues to execute in the background as part of a queued process.

#### Configuring the Data Table

To begin configuration, navigate to the workflow canvas and click on the trigger to open the settings window. The first step is to select the data table that you wish to bind:

![Workflow Configuration - Selecting Data Table](https://static-docs.nocobase.com/35c49a91eba731127edcf76719c97634.png)

#### Selecting Trigger Mode

Next, determine the trigger mode by choosing between Local Mode and Global Mode:

![Workflow Configuration - Choosing Trigger Mode](https://static-docs.nocobase.com/317809c48b2f2a2d38aedc7d08abdadc.png)

- **Local Mode**: This mode triggers the workflow only on the action buttons that have been explicitly bound to it. If the workflow is not bound, clicking the button will not initiate the workflow. This mode is ideal when you want to tailor the workflow to specific forms or actions.
- **Global Mode**: In this mode, the workflow is triggered by any action button configured within the data table, regardless of the form's origin, and does not require specific workflow binding.

In Local Mode, you can currently bind the following action buttons:

- The "Submit" and "Save" buttons in new forms.
- The "Submit" and "Save" buttons in update forms.
- The "Update Data" button within data rows (such as in tables, lists, or kanban views).

#### Choosing Action Type

When using Global Mode, you also need to specify the action type. The available options are "Create record action" and "Update record action." The workflow is triggered upon the successful completion of either operation.

#### Preloading Related Data

If subsequent workflow steps require the use of related data from the trigger, you can select the relationship fields to preload:

![Workflow Configuration - Preloading Relationships](https://static-docs.nocobase.com/5cded063509c7ba1d34f49bec8d68227.png)

These preloaded related data will then be readily accessible throughout the workflow after it is triggered.
