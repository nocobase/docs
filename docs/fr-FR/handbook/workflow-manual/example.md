# Example

### Article Review

Imagine a scenario where a regular user submits an article. Before this article can be published, it must be reviewed and approved by an administrator. If the article does not pass this review process, it will remain in draft form, unpublished. This entire workflow can be implemented using an "Update Form" node within a manual process.

To start, create a workflow that is triggered by the action "Add Article" and then add a manual node to it:

<figure>
  <img alt="Manual Node Example Article Review Workflow" src="https://github.com/nocobase/nocobase/assets/525658/2021bf42-f372-4f69-9c84-5a786c061e0e" width="360" />
</figure>

Within this manual node, assign the responsibility to an administrator. Next, in the configuration interface, add a block that displays the details of the newly added article based on the trigger data:

<figure>
  <img alt="Manual Node Example Article Review Node Configuration Details Block" src="https://github.com/nocobase/nocobase/assets/525658/c61d0aac-23cb-4387-b60e-ce3cc7bf1c24" width="680" />
</figure>

Following this, add a block that utilizes the "Update Data Form" in the configuration interface. This block should be linked to the article table, allowing the administrator to decide whether the article should be approved. Once the form is added, a "Continue the process" button will be automatically generated, signaling approval if clicked. Additionally, you should add a "Terminate the process" button to handle cases where the article is rejected:

<figure>
  <img alt="Manual Node Example Article Review Node Configuration Form and Actions" src="https://github.com/nocobase/nocobase/assets/525658/4baaf41e-3d81-4ee8-a038-29db05e0d99f" width="673" />
</figure>

When the process continues, the status of the article will need to be updated. There are two primary ways to handle this. The first method involves displaying the article's status field directly within the form, giving the operator the choice. This method is particularly useful for scenarios where the form requires active input, such as providing feedback:

<figure>
  <img alt="Manual Node Example Article Review Node Configuration Form Fields" src="https://github.com/nocobase/nocobase/assets/525658/82ea4e0e-25fc-4921-841e-e1a2782a87d1" width="668" />
</figure>

For a more streamlined process, you can instead configure the form's field values directly on the "Continue the process" button. Here, you would add a "Status" field with the value set to "Published," ensuring that once the operator clicks the button, the article will be automatically updated to a published status:

<figure>
  <img alt="Manual Node Example Article Review Node Configuration Form Assignment" src="https://github.com/nocobase/nocobase/assets/525658/0340bd9f-8323-4e4f-bc5a-8f81be3d6736" width="711" />
</figure>

Next, from the configuration menu at the top right of the form block, select the conditions that will filter the data to be updated. In this case, you would choose the "Article" table and set the filter condition as "ID equals Trigger Variables / Trigger Data / ID":

<figure>
  <img alt="Manual Node Example Article Review Node Configuration Form Conditions" src="https://github.com/nocobase/nocobase/assets/525658/da004055-0262-49ae-88dd-3844f3c92e28" width="1020" />
</figure>

Finally, to enhance user-friendliness, you can customize the titles of the various blocks, the text on the buttons, and the placeholder text within the form fields:

<figure>
  <img alt="Manual Node Example Article Review Node Configuration Final Form" src="https://github.com/nocobase/nocobase/assets/525658/21db5f6b-690b-49c1-8259-4f7b8874620d" width="678" />
</figure>

After completing these steps, close the configuration panel and click the submit button to save the node configuration. Your workflow is now complete. Once this workflow is enabled, whenever a new article is added, it will automatically trigger the workflow. The administrator will then see this task in their to-do list. Upon clicking to view, the task details will be displayed:

<figure>
  <img alt="Manual Node Example Article Review Task List" src="https://github.com/nocobase/nocobase/assets/525658/4e1748cd-6a07-4045-82e5-286826607826" width="1363" />
</figure>

<figure>
  <img alt="Manual Node Example Article Review Task Details" src="https://github.com/nocobase/nocobase/assets/525658/65f01fb1-8cb0-45f8-ac21-ec8ab59be449" width="680" />
</figure>

Based on the article details, the administrator can then decide whether the article should be published. If approved, clicking the "Pass" button will update the article to a published status. If rejected, clicking the "Reject" button will ensure that the article remains in draft status.

### Leave Approval

Now, consider a scenario where an employee needs to request leave. This leave request must be approved by a supervisor before it can take effect, and the corresponding leave data for the employee will be adjusted accordingly. Regardless of whether the request is approved or rejected, a notification SMS will be sent to the employee using a request node (as detailed in the [HTTP Request](#_HTTP_Request) section). This process can be efficiently managed using a custom form within a manual node.

Start by creating a workflow triggered by "Add Leave Request" and then add a manual node, similar to the article review process. However, in this case, the responsible person is the supervisor. Add a block based on the trigger data in the configuration interface to display the details of the newly submitted leave request. Then, add a block based on a custom form where the supervisor can decide whether to approve the request. This custom form should include fields for the approval status and reasons for rejection:

<figure>
  <img alt="Manual Node Example Leave Approval Node Configuration" src="https://github.com/nocobase/nocobase/assets/525658/ef3bc7b8-56e8-4a4e-826e-ffd0b547d1b6" width="675" />
</figure>

Unlike the article review process, because subsequent steps depend on the supervisor's decision, only a "Continue Process" button is configured here for submission purposes, omitting the "Terminate Process" button.

Additionally, after the manual node, a condition node can be added to determine whether the supervisor approved the leave request. In the approved branch, you would add a data processing node to adjust the leave data, and after the branch ends, include a request node to send an SMS notification to the employee. This would complete the process as shown below:

<figure>
  <img alt="Manual Node Example Leave Approval Workflow Arrangement" src="https://github.com/nocobase/nocobase/assets/525658/733f68da-e44f-4172-9772-a287ac2724f2" width="593" />
</figure>

The condition node should be configured with the following criteria: "**Node result / Supervisor / Process form / Approval** equals '**Approved**'":

<figure>
  <img alt="Manual Node Example Leave Approval Condition Judgment" src="https://github.com/nocobase/nocobase/assets/525658/57b972f0-a3ce-4f33-8d40-4272ad205c20" width="678" />
</figure>

The data within the request node can be tailored using the corresponding form variables from the manual node, allowing for different SMS content based on whether the request was approved or rejected. With this configuration, the workflow is now complete. Once the workflow is activated, supervisors can manage leave requests directly from their to-do tasks, with actions similar to those in the article review process.
