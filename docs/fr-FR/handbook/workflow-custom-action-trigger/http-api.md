# HTTP API

Custom action events can be triggered not only through user interface actions but also via HTTP API calls. Specifically, these events introduce a new operation type called `trigger` for all collection operations, allowing workflows to be initiated through the NocoBase standard operation API.

For instance, a workflow typically triggered by a button can be invoked using the following command:

```bash
curl -X POST -H 'Authorization: Bearer <your token>' -H 'X-Role: <roleName>' \
  "http://localhost:3000/api/samples:trigger/<:id>?triggerWorkflows=workflowKey"
```

Since this operation targets a single data entry, when calling it for existing data, you must specify the ID of the data row by replacing the `<:id>` portion of the URL.

When invoking the API for a form submission (such as adding or updating data), you can omit the ID for new entries but must provide the relevant data as the execution context:

```bash
curl -X POST -H 'Authorization: Bearer <your token>' -H 'X-Role: <roleName>' -d \
  '{
    "title": "Sample 1",
    "indicator": 91
  }'
  "http://localhost:3000/api/samples:trigger?triggerWorkflows=workflowKey"
```

For updating a form, you need to include both the data row ID and the updated data:

```bash
curl -X POST -H 'Authorization: Bearer <your token>' -H 'X-Role: <roleName>' -d \
  '{
    "title": "Sample 1",
    "indicator": 91
  }'
  "http://localhost:3000/api/samples:trigger/<:id>?triggerWorkflows=workflowKey"
```

If both the ID and data are provided, the specified data row will be loaded first, and then the provided data will overwrite the original row to generate the final trigger context.

:::warning{title="Note"}
If relational data is provided, it will also be overwritten. Take special care when handling relational data with Preload associations to avoid unintentionally altering related data.
:::

Additionally, the URL parameter `triggerWorkflows` designates the workflow key(s). Multiple workflows can be separated by commas. You can obtain this key by hovering over the workflow name at the top of the workflow canvas:

![Workflow Key View Method](https://static-docs.nocobase.com/20240426135108.png)

Once the call is successful, the custom operation event for the `samples` table will be triggered.

:::info{title="Tip"}
Since external API calls also require user authentication, you must include authentication information in the request, similar to requests sent from the standard interface. This includes the `Authorization` header or `token` parameter (the token obtained after login) and the `X-Role` header (the user's current role name).
:::

If you need to trigger an event for a many-to-one data item (currently not supported for many-to-many relationships), you can specify the related field’s trigger data using `!` in the parameter:

```bash
curl -X POST -H 'Authorization: Bearer <your token>' -H 'X-Role: <roleName>' \
  "http://localhost:3000/api/posts:trigger/<:id>?triggerWorkflows=workflowKey!category"
```

After a successful call, the custom operation event for the corresponding `categories` table will be triggered.

:::info{title="Tip"}
When triggering an event via HTTP API, ensure that the workflow is enabled and that the collection configuration is correct. Otherwise, the call may fail or result in errors.
:::
