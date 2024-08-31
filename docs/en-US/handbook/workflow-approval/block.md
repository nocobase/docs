# Blocks

## Approval Block in Data Details

In the data details pop-up for a submitted item, an approval block can be configured to display the relevant approval records and provide entry points for processing them:

![Details Approval Block_Creating Block](https://static-docs.nocobase.com/6b40f47474609d1dfd33618d80228189.png)

### Actions by the Initiator

The approval block displays the basic application information and approval history. The initiator can view the details of their submitted application within the pop-up. If retraction is enabled and the process is still in its initial approval stage—before any approver has taken action—the initiator can withdraw the application:

![Details Approval Block_Initiator's View](https://static-docs.nocobase.com/5c7d4a6dca8de820d154487e41808c2a.png)

If the initiator withdraws the application, the withdrawal record will appear in the approval block. By clicking on it, the application pop-up will reopen:

![Details Approval Block_Initiator's View After Withdrawal](https://static-docs.nocobase.com/df52cb5203c1fd0a2f7af1757fbf6ecd.png)

The pop-up's content remains unchanged, allowing the initiator to make adjustments and resubmit:

![Details Approval Block_Initiator's Resubmission](https://static-docs.nocobase.com/4b3a6119e9871760d2dbdc8a2a75ff2c.png)

### Actions by the Approver

Approvers can also review the approval content through this block. In the processing history, if the logged-in user is one of the persons responsible for a node, a "View" button will appear in the details column. Clicking it will open the approval pop-up:

![Details Approval Block_Approver's Node Handling](https://static-docs.nocobase.com/b160090482823ff5dc87592d0d5cedec.png)

The pop-up will display the approver's interface for that approval node, typically including the approval details and an action bar:

![Details Approval Block_Approver's Processing Pop-up](https://static-docs.nocobase.com/26acffffd314e86a658334ae9bef9d9b.png)

Approvers can take actions such as approve, reject, or return within the pop-up. After an action is taken, a corresponding record will be added to the processing history. If the action is a return, the initiator can modify the application and resubmit it:

![Details Approval Block_Approver's Return](https://static-docs.nocobase.com/5da879b24923ed25c31be658636ada64.png)

Approving or rejecting will trigger the corresponding status based on the node's configured rules:

![Details Approval Block_Approver's Approval](https://static-docs.nocobase.com/b020b1f82fce7c27b905ecf0b4c0046d.png)

## Approval Center Block

The approval plugin offers two global blocks for centrally managing approval processes: "Initiations" and "Todos":

![Approval Center Block_Creation](https://static-docs.nocobase.com/fb3957320f082159f6f1f908937894b6.png)

The "Initiations" block provides the initiator's perspective, allowing the user to initiate a new approval from the block's action bar:

![Approval Center Block_Initiating Approval](https://static-docs.nocobase.com/a888630f892f15882eb1ec6b8826c528.png)

If the approval trigger is configured "Initiate and approve in both data blocks and global approval blocks", the corresponding approval process will appear in the drop-down menu under the "Initiate" button.

Users can also monitor the status of approvals they have initiated:

![Approval Center Block_View Initiated List](https://static-docs.nocobase.com/4379ff809ae6a545dccab434cf6a6cfb.png)

Clicking "View" opens a pop-up similar to the approval block in data details. The key difference is that the initiator's submission and the approval history are displayed on separate tabs:

![Approval Center Block_Initiator's View of Details](https://static-docs.nocobase.com/234edf3af9a3fb9e3c7aa820c3befd66.png)

The "Todos" block serves the approver's perspective, allowing users to view pending approvals. Clicking the corresponding "View" button opens a processing pop-up, similar to the approval block in data details, with the distinction that the approver's form and the approval history are shown on separate tabs:

![Approval Center Block_Approver's View of Processed Details](https://static-docs.nocobase.com/bc425bd18837d6a918c609849c38da5d.png)

If the approval has already been processed, the submitted content is displayed as is and cannot be modified.
