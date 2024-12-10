# Overview

Triggers are the entry points for workflow execution. When an event that meets the trigger conditions occurs during the application runtime, the workflow will be triggered. The type of trigger is also the type of workflow, chosen when creating the workflow and cannot be modified afterward. The currently supported trigger types are as follows:

- [Collection Events](./collection.md) (built-in)
- [Scheduled Tasks](./schedule.md) (built-in)
- [Pre-Action Events](./pre-action.md) (provided by plugin @nocobase/plugin-workflow-request-interceptor)
- [Custom Action Events](./custom-action.md) (provided by plugin @nocobase/plugin-workflow-custom-action-trigger)
- [Post-Action Events](./post-action.md) (provided by plugin @nocobase/plugin-workflow-action-trigger)
- [Approval](./approval.md) (provided by plugin @nocobase/plugin-workflow-approval)
- [Webhook](./webhook.md) (provided by plugin @nocobase/plugin-workflow-webhook)

The timing of each event trigger type is shown in the following diagram:

![Workflow Events](https://static-docs.nocobase.com/20240514214606.png)

For example, when a user submits a form, or data in a collection changes due to user action or program calls, or when a task reaches its scheduled time, the corresponding workflow will be triggered.

Triggers related to data (such as actions, collection events) usually carry trigger context data. This data can be referenced in the nodes of the workflow to achieve automated data processing. For instance, when a user submits a form bound to a workflow, the submitted data will be injected into the context environment of the execution plan, allowing subsequent nodes to use it as variables.

After creating a workflow, the trigger will appear as an entry node at the beginning of the flow on the workflow view page. Click the card to open the configuration drawer. Depending on the trigger type, relevant conditions can be configured.

![Trigger_Entry Node](https://static-docs.nocobase.com/e8dc1937e41b2712b67d84d60e94b11e.png)
