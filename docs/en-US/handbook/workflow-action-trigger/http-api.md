# HTTP API

Post-action events can be triggered not only through user interface interactions but also via HTTP API calls, providing a flexible way to initiate workflows programmatically.

:::info{title="Note"}
When triggering post-operation events through HTTP API calls, it's essential to ensure that the workflow is active and the data table configuration is correctly matched. If these conditions aren't met, the call may fail or produce errors.
:::

For workflows associated with specific operation buttons, you can trigger them using the following method (illustrated here with the `posts` table creation button):

```bash
curl -X POST -H 'Authorization: Bearer <your token>' -H 'X-Role: <roleName>' -d \
  '{
    "title": "Hello, world!",
    "content": "This is a test post."
  }'
  "http://localhost:3000/api/posts:create?triggerWorkflows=workflowKey"
```

In this example, the URL parameter `triggerWorkflows` specifies the workflow key, with multiple workflows separated by commas if needed. You can obtain this key by hovering over the workflow name at the top of the workflow canvas:

![Method to View Workflow Key](https://static-docs.nocobase.com/20240426135108.png)

Upon successful execution, this call will trigger the appropriate post-operation event for the `posts` table.

:::info{title="Note"}
Since external API calls require user authentication, the same credentials used for standard interface requests must be provided in HTTP API calls. This includes the `Authorization` request header or `token` parameter (obtained during login), and the `X-Role` request header, which specifies the current user's role.
:::

If you need to trigger an event related to a one-to-one relationship (currently unsupported for many-to-one relationships), you can use the `!` symbol in the parameters to indicate the relationship field's trigger data:

```bash
curl -X POST -H 'Authorization: Bearer <your token>' -H 'X-Role: <roleName>' -d \
  '{
    "title": "Hello, world!",
    "content": "This is a test post.",
    "category": {
      "title": "Test category"
    }
  }'
  "http://localhost:3000/api/posts:create?triggerWorkflows=workflowKey!category"
```

Upon successful execution, this will trigger the corresponding post-operation event for the `categories` table.

:::info{title="Note"}
If the event is set up in global mode, there's no need to specify the workflow using the `triggerWorkflows` URL parameter. Simply triggering the relevant data table operation will automatically initiate the associated workflow.
:::
