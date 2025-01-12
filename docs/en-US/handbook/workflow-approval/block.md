# Approval-Related Blocks

## Approval Block in Data Details

In the data details pop-up for a submitted item, an approval block can be configured to display the corresponding approval records and provide entry points for processing:

![Details Approval Block_Creating Block](https://static-docs.nocobase.com/6b40f47474609d1dfd33618d80228189.png)

### Initiator Actions

The approval block displays basic application information and approval history. The initiator can view the details of their submitted application within the pop-up. If retraction is enabled and the process is in the first approval node but has not yet been processed by any approver, the initiator can withdraw the application:

![Details Approval Block_Initiator's View](https://static-docs.nocobase.com/5c7d4a6dca8de820d154487e41808c2a.png)

If the initiator withdraws the application, the withdrawal record will be displayed in the approval block. Clicking on it will reopen the application pop-up:

![Details Approval Block_Initiator's View After Withdrawal](https://static-docs.nocobase.com/df52cb5203c1fd0a2f7af1757fbf6ecd.png)

The pop-up content remains the same as before, allowing the initiator to make modifications and resubmit:

![Details Approval Block_Initiator's Resubmission](https://static-docs.nocobase.com/4b3a6119e9871760d2dbdc8a2a75ff2c.png)

### Approver Actions

Approvers can also review the approval content through this block. In the processing history, if the logged-in user is one of the responsible persons for a node, a "View" button will appear in the details column. Clicking it will open the approval pop-up:

![Details Approval Block_Approver's Node Handling](https://static-docs.nocobase.com/b160090482823ff5dc87592d0d5cedec.png)

The pop-up will display the approver interface configured for that approval node, typically including the approval details and an action bar:

![Details Approval Block_Approver's Processing Pop-up](https://static-docs.nocobase.com/26acffffd314e86a658334ae9bef9d9b.png)

Approvers can perform actions such as approve, reject, or return within the pop-up. After an action is taken, a corresponding record will be generated in the processing history. If the action is a return, the initiator can modify the application and resubmit it:

![Details Approval Block_Approver's Return](https://static-docs.nocobase.com/5da879b24923ed25c31be658636ada64.png)

Approving or rejecting will trigger the corresponding status based on the node's configured rules:

![Details Approval Block_Approver's Approval](https://static-docs.nocobase.com/b020b1f82fce7c27b905ecf0b4c0046d.png)

<!--
If editable fields are configured for approvers, approvers can modify the corresponding field values in the processing interface:

![Details Approval Block_Approver Modifying Fields](https://static-docs.nocobase.com/20241226233753.png)

After the approver submits the processing, the modified content will be submitted, and the approval application data will be updated.
-->

If transfer or additional sign-off operations are configured, approvers can also perform these operations in the processing interface. The transfer operation assigns the current approval node's processing responsibility to another user within a specified range:

![Details Approval Block_Transfer](https://static-docs.nocobase.com/20241226235129.png)

After the transfer, the current approver will no longer be responsible for processing that approval node, and the transferred user will appear in the approver list:

![Details Approval Block_After Transfer](https://static-docs.nocobase.com/20241226235334.png)

The additional sign-off operation allows adding multiple users to the current approval node's processing list, selecting from a specified range:

![Details Approval Block_Additional Sign-off](https://static-docs.nocobase.com/20241226235556.png)

If the node is configured for sequential processing by multiple users, the additional sign-off operation also requires specifying the processing order of the new users:

* Before oneself: After submission, the current user's task status becomes "Pending," and the new approver will process it before the current user.
* After oneself: The current user processes first, and the new approver processes afterward.

![Details Approval Block_After Additional Sign-off](https://static-docs.nocobase.com/20241227000005.png)

After transfer or additional sign-off, the new approver's processing will also follow the approval rules configured in the node.

## Approval Center Block

The approval plugin provides two global blocks for centralized management of certain approval processes: "Initiate Approval" and "Approval Todos":

![Approval Center Block_Creation](https://static-docs.nocobase.com/fb3957320f082159f6f1f908937894b6.png)

The "Initiate Approval" block is designed from the initiator's perspective, allowing users to initiate new approvals from the block's action bar:

![Approval Center Block_Initiating Approval](https://static-docs.nocobase.com/a888630f892f15882eb1ec6b8826c528.png)

If the approval trigger is configured to allow initiation and approval in both data blocks and the approval center, the corresponding approval process will appear in the drop-down menu under the "Initiate" button.

Users can also view the status of approvals they have initiated in the list:

![Approval Center Block_View Initiated List](https://static-docs.nocobase.com/4379ff809ae6a545dccab434cf6a6cfb.png)

Clicking "View" opens a pop-up similar to the approval block in data details, with the difference that the initiator's submission and approval history are displayed on separate tabs:

![Approval Center Block_Initiator's View of Details](https://static-docs.nocobase.com/234edf3af9a3fb9e3c7aa820c3befd66.png)

The "Approval Todos" block is designed from the approver's perspective, allowing users to view pending approvals. Clicking the corresponding "View" button opens a processing pop-up, similar to the approval block in data details, with the distinction that the approver's processing form and approval history are displayed on separate tabs:

![Approval Center Block_Approver's View of Processed Details](https://static-docs.nocobase.com/bc425bd18837d6a918c609849c38da5d.png)

If the approval has already been processed, the submitted content is displayed as is and cannot be modified.
