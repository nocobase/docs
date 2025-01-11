# HTTP API

The pre-operation event is integrated during the request processing phase, enabling it to be triggered via an HTTP API call.

For workflows that are locally bound to an action button, you can trigger them with the following command (using a button for the `posts` table as an example):

```bash
curl -X POST -H 'Authorization: Bearer <your token>' -H 'X-Role: <roleName>' -d \
  '{
    "title": "Hello, world!",
    "content": "This is a test post."
  }'
  "http://localhost:3000/api/posts:create?triggerWorkflows=workflowKey"
```

The URL parameter `triggerWorkflows` specifies the key of the workflow, with multiple workflows separated by commas. You can find this key by hovering your mouse over the workflow name at the top of the workflow canvas:

![How to view workflow key](https://static-docs.nocobase.com/20240426135108.png)

After executing the above command, the corresponding pre-operation event for the `posts` table will be triggered. Once the associated workflow is processed synchronously, the data will be created and returned as usual.

If the configured workflow reaches an "End process," the request will be intercepted, and no data will be created, following the same logic as an interface operation. If the End Node status is set to failure, the response status code will be `400`; if successful, it will be `200`.

If a "Response Message" node is configured before the End Node, the generated message will be included in the response. The error message structure is as follows:

```json
{
  "errors": [
    {
      "message": "message from 'Response Message' node"
    }
  ]
}
```

When the "End Node" is configured as successful, the message structure is as follows:

```json
{
  "messages": [
    {
      "message": "message from 'Response Message' node"
    }
  ]
}
```

:::info{title=Note}
Since multiple "Response Message" nodes can be added within the workflow, the returned message data structure is presented as an array.
:::

If the pre-operation event is configured globally, there’s no need to specify the corresponding workflow using the URL parameter `triggerWorkflows` when calling the HTTP API. Simply calling the corresponding data table operation will automatically trigger it.

```bash
curl -X POST -H 'Authorization: Bearer <your token>' -H 'X-Role: <roleName>' -d \
  '{
    "title": "Hello, world!",
    "content": "This is a test post."
  }'
  "http://localhost:3000/api/posts:create"
```

:::info{title="Note"}
When triggering post-operation events via an HTTP API call, ensure the workflow is enabled and that the data table configuration matches the expected setup. Otherwise, the call may fail or result in errors.
:::
