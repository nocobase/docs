# HTTP API

Approval events aren’t confined to actions within the user interface; they can also be triggered through HTTP API calls.

For approvals initiated from data blocks and approval center blocks, you can trigger them using an API call (using the creation button for the `posts` table as an example):

```bash
curl -X POST -H 'Authorization: Bearer <your token>' -H 'X-Role: <roleName>' -d \
  '{
    "title": "Hello, world!",
    "content": "This is a test post."
  }'
  "http://localhost:3000/api/posts:create?triggerWorkflows=workflowKey"
```

The URL parameter `triggerWorkflows` is the key of the workflow, with multiple workflows separated by commas. You can find this key by hovering over the workflow name at the top of the workflow canvas:

![How to View Workflow Key](https://static-docs.nocobase.com/20240426135108.png)

Once the call is successful, the approval workflow for the `posts` table will be triggered.

:::info{title="Note"}
Because external calls also rely on user identity, HTTP API calls must include authentication details, just like standard interface requests. This includes the `Authorization` header or the `token` parameter (token obtained during login), as well as the `X-Role` header (indicating the user’s current role).
:::

If you need to trigger an event related to a one-to-one relationship (note that one-to-many relationships are not yet supported), you can use `!` in the parameters to specify the related field that should trigger the event:

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

When the call is successfully executed, the approval event for the `categories` table will be triggered.

:::info{title="Note"}
When triggering events via HTTP API calls, ensure that the workflow is enabled and that the data table configuration is correct; otherwise, the call may not be successful or may result in errors.
:::
