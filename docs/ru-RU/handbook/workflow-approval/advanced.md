# Advanced Understanding

## Snapshot of Submitted Data for Approval

In the approval process, data is governed by the principle of transactional data immutability. Each submission generates a snapshot that is then tracked and circulated during the approval process. The flow of this process is as follows:

![Approval Data Snapshot Process Diagram](https://static-docs.nocobase.com/62a545a85d9e72c6b47e4b52707c4380.png)

When actions such as "withdraw" or "return" are triggered within the process, the system preserves a snapshot of the data as it existed at that point within the same application document:

![Approval Data Snapshot Process Example](https://static-docs.nocobase.com/62800d88772c88f1eaa11f6f493aea55.png)

As illustrated above, every time data is withdrawn and then resubmitted, a new snapshot is saved for that particular submission process.

## Approval Process Statuses

For the initiator, an application document's status field indicates the current stage of the approval process, typically reflecting the following states:

| Status         | Description |
|----------------| ----------- |
| Draft      | The applicant has temporarily saved the application form's data but has not yet officially submitted it to start the process. |
| Submitted  | The application has been submitted and is awaiting approval. At this stage, no approver has yet processed it, and if allowed by the configuration, the initiator can still withdraw the application. |
| On going   | The application has moved through at least one approval node, with at least one approver having submitted their decision. The initiator can no longer withdraw the application at this stage. |
| Returned   | The application has been returned by one of the approvers, allowing the initiator to modify and resubmit it. |
| Approved   | All approval nodes have been processed, and the application has been approved at each stage, marking the process as complete. |
| Rejected   | The application has been rejected at one of the approval nodes, thereby terminating the process. |

For each approval node, a record of the processing action is generated for the designated approver. Each approver’s record includes a status field indicating the current state of their processing, which typically includes the following statuses:

| Status    | Description |
| --------- | ----------- |
| Assigned  | A record for the corresponding approver has been created, but since the processing rule requires serial handling, the approver must wait for the previous approver to finish before they can proceed. |
| Pending   | The application is awaiting action from the current approver. |
| Returned  | The current approver has returned the application. |
| Approved  | The current approver has approved the application. |
| Rejected  | The current approver has rejected the application. |
| Unprocessed | The application has reached a terminal state according to the node's processing rules after being handled by other approvers, or the workflow has become invalid, so the current approver is no longer required to take action. |
