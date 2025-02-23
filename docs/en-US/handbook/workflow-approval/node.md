# Approval Node Configuration

In an approval workflow, a dedicated "Approval" node is required to configure the logic for approvers to handle (approve, reject, or return) the initiated approval request. This "Approval" node is exclusively used within approval workflows.

:::info{title=Tip}
**Difference from the general "Manual" node:** The general "Manual" node is versatile and can be used across various workflows for manual data input, decision-making on process continuation, and other scenarios. In contrast, the "Approval" Node is specialized for approval workflows and is not applicable in other types of workflows.
:::

## Creating a Node

To create an "Approval" node, click the plus sign ("+") in the workflow. Then, select one of the available pass modes to configure the approval node:

![Approval Node Creation](https://static-docs.nocobase.com/f15d61208a3918d005cd2031fc9b6ce7.png)

## Pass Modes

There are two pass modes available:

1.  Direct Pass Mode: This mode is ideal for simpler workflows, where the outcome at the approval node determines whether the process ends. If the request is not approved, the process exits immediately.

    ![Approval Node Pass Mode - Direct Pass Mode](https://static-docs.nocobase.com/a9d446a186f61c546607cf1c2534b287.png)

2.  Branching Mode: This mode is typically used for more complex workflows. After the approval node produces a result, subsequent nodes can execute within the resulting branches.

    ![Approval Node Pass Mode - Branching Mode](https://static-docs.nocobase.com/57dc6a8907f3bb02fb28c354c241e4e5.png)

    If the node is configured with a "Return" operation, a "Return" branch will be created, and the process will forcibly exit after the return branch is completed.

    Once this node is "approved," the process continues through both the pass branch and the subsequent workflow. Following a "reject" operation, the default setting allows the process to continue through the subsequent workflow, although you can configure the node to end the process after executing the rejection branch.

:::info{title=Tip}
The pass mode cannot be modified once the node is created.
:::

## Approvers

Approvers are the users responsible for the approval actions at the node. They can consist of one or more users, selected from a static list or a dynamic value specified by a variable.

![Approval Node_Approvers](https://static-docs.nocobase.com/29c64297d577b9ca9457b1d7ac62287d.png)

When using a variable, only primary keys or foreign keys from user data in the context and node results can be selected. If the selected variable is an array (in cases of many-to-many relationships), each user in the array will be merged into the overall approver collection.

## Negotiation Modes

If there is only one approver (including cases where multiple variables are deduplicated), the approval will be handled solely by that user, regardless of the negotiation mode chosen.

For multiple approvers, the selected negotiation mode determines the handling method:

1. Or: The node passes with the approval of any one person; all must reject for the node to be rejected.
2. And: The node passes only if all approvers approve; a single rejection results in rejection.
3. Voting: The node passes if a majority (as specified) of approvers approve; otherwise, the node is rejected.

For the return operation, if any user in the approver collection opts for a return, the node will directly exit the workflow.

## Processing Order

For multiple approvers, the processing order dictates the sequence of actions:

1. Parallelly: All approvers can act in any order, with no sequence required.
2. Sequentially: Approvers act in the order defined in the approver collection, where each subsequent user can only proceed after the previous one has submitted their decision.

Regardless of whether "Sequentially" processing is set, the results generated will follow the rules outlined in the "Negotiation Modes" section, with the node completing execution once the conditions are met.

## Exit Workflow After Rejection Branch Completion

When "Branch Mode" is set for "Pass Mode," you can opt to exit the workflow after the rejection branch is completed. If selected, a "✗" symbol will appear at the end of the rejection branch, indicating that no further nodes will be executed after this branch concludes:

![Exit After Rejection](https://static-docs.nocobase.com/1e740df93c128fb6fe54bf85a740e683.png)

## Approver Interface Configuration

The approver interface configuration provides the interface for approvers when the workflow reaches this node. Click the configuration button to open the settings window:

![Approver Interface Configuration Pop-up](https://static-docs.nocobase.com/2c321ae164b436f1c572305ff27cc9dd.png)

In this configuration window, you can add blocks such as approval submission details, operation bars, and custom prompt text:

![Add Block in Interface Configuration](https://static-docs.nocobase.com/9f8f11926e935ad8f8fbeec368edebfe.png)

### Details Block

The approval content details block includes the data submitted by the initiator. Similar to a standard data block, you can freely add field components from the data table and arrange them to organize the content that the approver needs to review:

![Details Block in Interface Configuration](https://static-docs.nocobase.com/1140ec13caeea1b364d12e057720a29c.png)

### Form Block

The operation form block can include buttons supported by this node, such as "Approve," "Reject," "Return," "Reassign," and "Add Approver":

![Operation Form Block in Interface Configuration](https://static-docs.nocobase.com/20241226232013.png)

Besides, fields that can be modified by the approver can also be added to the operation form. These fields will be displayed in the operation form when the approver processes the approval. The approver can modify the values of these fields, and after submission, the data used for approval and the corresponding data snapshot in the approval process will be updated simultaneously.

![approval_node_ui_configuration_action_form_modify_fields](https://static-docs.nocobase.com/20241226232124.png)

### "Approve," "Reject," and "Return"

Among the approval operation buttons, "Approve," "Reject," and "Return" are decisive actions. Once submitted, the approver's task at this node is completed. Additional fields to be filled out during submission, such as "Comments," can be added in the "Processing Configuration" pop-up for each button.

![Operation Form Processing Configuration](https://static-docs.nocobase.com/20241226232225.png)

### "Reassign" and "Add Approver"

"Reassign" and "Add Approver" are non-decisive operations used to dynamically adjust the approvers in the approval workflow. "Reassign" transfers the current user's approval task to another user, while "Add Approver" inserts an additional approver before or after the current approver, allowing the new approver to continue the approval process.

After enabling the "Reassign" or "Add Approver" operation buttons, you need to set the "Assignable User Range" in the button's configuration menu to define the scope of users who can be assigned as new approvers:

![Operation Form Assignable User Range](https://static-docs.nocobase.com/20241226232321.png)

Similar to the node's original approver configuration, the assignable user range can be directly selected approvers or based on query conditions from the user table. The final result will be a merged collection, excluding users already in the approver collection.

:::warning{title=Important}
If you enable or disable an operation button, or modify the assignable user range, ensure to save the node configuration after closing the interface configuration window. Otherwise, the changes to the operation button will not take effect.
:::
