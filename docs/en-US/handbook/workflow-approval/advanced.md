# Advanced Understanding

## Snapshot of Submitted Data for Approval

In the approval process, data is governed by the principle of transactional data immutability. Each submission generates a snapshot that is then tracked and circulated during the approval process. The flow of this process is as follows:

![Approval Data Snapshot Process Diagram](https://static-docs.nocobase.com/62a545a85d9e72c6b47e4b52707c4380.png)

When actions such as "withdraw" or "return" are triggered within the process, the system preserves a snapshot of the data as it existed at that point within the same application document:

![Approval Data Snapshot Process Example](https://static-docs.nocobase.com/62800d88772c88f1eaa11f6f493aea55.png)

As illustrated above, every time data is withdrawn and then resubmitted, a new snapshot is saved for that particular submission process.

## Approval Process Statuses

For the initiator, an application document's status field indicates the current stage of the approval process, typically reflecting the following states:

| Status         | Enum Value | Description |
|----------------| ---------- | ----------- |
| Draft      | 0 | The applicant has temporarily saved the application form's data but has not yet officially submitted it to start the process. |
| Submitted  | 2 | The application has been submitted and is awaiting approval. At this stage, no approver has yet processed it, and if allowed by the configuration, the initiator can still withdraw the application. |
| On going   | 3 | The application has moved through at least one approval node, with at least one approver having submitted their decision. The initiator can no longer withdraw the application at this stage. |
| Returned   | 1 | The application has been returned by one of the approvers, allowing the initiator to modify and resubmit it. |
| Approved   | 4 | All approval nodes have been processed, and the application has been approved at each stage, marking the process as complete. |
| Rejected   | -1 | The application has been rejected at one of the approval nodes, thereby terminating the process. |

## Process Status of Approval Node

The processing status of the approval node.

| Status | Enum Value | Description |
| --- | --- | --- |
| Assigned | null | The processing record for the corresponding approver has been created, but because the processing rule is configured as sequential, the current approver must wait for the previous approver to complete their task. |
| Pending | 0 | Waiting for the current approver to take action. |
| Returned | 1 | The current approver has returned the request. |
| Approved | 2 | The current approver has approved the request. |
| Rejected | -1 | The current approver has rejected the request. |
| Not Processed | 3 | According to the node's processing rules, the final state has already been reached by other approvers, or the workflow is no longer valid, so the current approver does not need to process it. |

## Process Status of Individual Approver

For each approval node, a processing record is generated for each configured approver. Each record includes a status field that indicates the current approver’s processing status. In addition to all the statuses listed for the approval node, the following additional statuses are included:

| Status    | Enum Value | Description |
| --------- | ---------- | ----------- |
| Delegated | 8 | The approval task has been delegated to another assignee, do not need to be processed by current assignee. |
