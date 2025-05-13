# Trigger Configuration

## Creating a Workflow

To set up an approval workflow, start by selecting the "Approval" type during the workflow creation process:

![Approval Trigger_Create Approval Workflow](https://static-docs.nocobase.com/f52dda854f46a669e0c1c7fb487a17ea.png)

Next, in the workflow configuration interface, click on the trigger to open a popup window for additional configuration options.

## Binding Data Tables

NocoBase’s approval plugin is designed with flexibility in mind, allowing it to be integrated with any custom data collection. This means there’s no need to repeatedly configure the data model for approval processes. Instead, you can reuse existing data collections. When configuring the trigger, the first step is to select a data table to determine which data entries will trigger the workflow upon creation or update:

![Approval Trigger_Trigger Configuration_Select Data Table](https://static-docs.nocobase.com/8732a4419b1e28d2752b8f601132c82d.png)

After selecting the data table, bind the workflow to the submit button in the form used for creating or editing data within the chosen table:

![Initiate Approval_Bind Workflow](https://static-docs.nocobase.com/2872ff108c61d7bf6d0bfb19886774c6.png)

Once the form is submitted, the corresponding approval workflow will be triggered. The submitted data will be saved in the specified data table and also snapshotted within the approval flow for future review by approvers.

## Withdrawn

If the approval process permits the initiator to withdraw the request, select the "Allowed to be withdrawn" option:

![Approval Trigger_Trigger Configuration_Allow Withdrawal](https://static-docs.nocobase.com/09185712fc55bc536892136ce0ade4a8.png)

When this option is selected, the initiator can withdraw the approval request at any time before any approver has processed it. However, once any subsequent approval nodes have been processed, the approval can no longer be withdrawn.

## Configuring the Form Interface for Initiating Approvals

Finally, you’ll need to configure the form interface for the initiator. This interface is used when initiating an approval from the Approval Center block or when re-initiating after a withdrawal. Click the configuration button to open a popup window:

![Approval Trigger_Trigger Configuration_Initiator Form](https://static-docs.nocobase.com/ca8b7e362d912138cf7d73bb60b37ac1.png)

You can add a form based on the bound data table or include explanatory text (Markdown) to guide the initiator. A form is required; otherwise, the initiator will not be able to proceed upon entering this interface.

After adding the form block, you can configure the corresponding data table's field components and arrange them as needed to organize the content to be filled out, similar to the regular form configuration interface:

![Approval Trigger_Trigger Configuration_Initiator Form_Field Configuration](https://static-docs.nocobase.com/5a1e7f9c9d8de092c7b55585dad7d633.png)

In addition to the submit button, you can also add a “Save Draft” button to support the temporary storage of data during the process:

![Approval Trigger_Trigger Configuration_Initiator Form_Action Configuration](https://static-docs.nocobase.com/2f4850d2078e94538995a9df70d3d2d1.png)
