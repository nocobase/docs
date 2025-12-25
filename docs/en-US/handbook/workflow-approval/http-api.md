# HTTP API

## Initiator

### Initiate from Data Collection

For approvals initiated from data blocks, you can trigger them using an API call (using the creation button for the `posts` table as an example):

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

### Initiate from Approval Center

```bash
curl -X POST -H 'Authorization: Bearer <your token>' -H 'X-Role: <roleName>' -d \
  '{
    "collectionName": "<collection name>",
    "workflowId": <workflow id>,
    "data": { "<field>": "<value>" },
    "status": <initial approval status>,
  }'
  "http://localhost:3000/api/approvals:create"
```

**Parameters**

* `collectionName`: The name of the data collection where the approval is initiated, required.
* `workflowId`: The ID of the workflow used to initiate the approval, required.
* `data`: The fields of the data table record created when initiating the approval, required.
* `status`: The status of the record created when initiating the approval, required. Possible values include:
  * `0`: Draft, indicating that it is saved but not submitted for approval.
  * `2`: Submit for approval, indicating that the initiator submits the approval request and enters the approval process.

### Save and Submit

When an approval (or withdrawal) is in draft status, you can use the following API to save or submit it again:

```bash
curl -X POST -H 'Authorization: Bearer <your token>' -H 'X-Role: <roleName>' -d \
  '{
    "data": { "<field>": "<value>" },
    "status": 2
  }'
  "http://localhost:3000/api/approvals:update/<approval id>"
```

### Get List of Initiated Approvals

```base
curl -X GET -H 'Authorization: Bearer <your token>' -H 'X-Role: <roleName>' \
  "http://localhost:3000/api/approvals:listMine"
```

### Withdraw

The initiator can withdraw the current record that is under approval through the following interface:

```bash
curl -X POST -H 'Authorization: Bearer <your token>' -H 'X-Role: <roleName>' -d \
  "http://localhost:3000/api/approvals:withdraw/<approval id>"
```

**Parameters**

* `<approval id>`: The ID of the approval record to be withdrawn, required.

### 

## Approver

Once the approval process enters the approval node, a task will be created for the current approver. The approver can complete the approval task through the interface or by calling the HTTP API.

### Get Approval Processing Records

The to-do tasks are the approval processing records. You can use the following API to get all approval processing records for the current user:

```bash
curl -X GET -H 'Authorization: Bearer <your token>' \
  "http://localhost:3000/api/approvalRecords:listMine"
```

### Get Single Approval Processing Record

```bash
curl -X GET -H 'Authorization: Bearer <your token>' \
  "http://localhost:3000/api/approvalRecords:get/<record id>"
```

### Approve and Reject

```bash
curl -X POST -H 'Authorization: Bearer <your token>' -d \
  '{
    "status": 2,
    "comment": "Looks good to me.",
    "data": { "<field to modify>": "<value>" }
  }'
  "http://localhost:3000/api/approvalRecords:submit/<record id>"
```

**Parameters**

* `<record id>`: The ID of the record to be approved or rejected, required.
* `status`: The status of the approval process, `2` for "approve", `-1` for "reject", required.
* `comment`: Optional comments regarding the approval process.
* `data`: Optional modifications to the data table record at the current approval node (only effective if approved).

### Return <Badge>v1.9.0+</Badge>

In version v1.9.0 and earlier, the return used the same interface as "approve" and "reject", with `"status": 1` representing the return.

Starting from version v1.9.0, the return has a separate interface:

```bash
curl -X POST -H 'Authorization: Bearer <your token>' -d \
  '{
    "returnToNodeKey": "<node key>",
  }'
  "http://localhost:3000/api/approvalRecords:return/<record id>"
```

**Parameters**

* `<record id>`: The ID of the record to be returned, required.
* `returnToNodeKey`: Optional key for the target node to return to. If the node has a configured range of returnable nodes, this parameter can be used to specify which node to return to. If not configured, this parameter does not need a value, and the default is to return to the starting point, where the initiator resubmits.

### Delegate

```bash
curl -X POST -H 'Authorization: Bearer <your token>' -d \
  '{
    "assignee": <user id>,
  }'
  "http://localhost:3000/api/approvalRecords:delegate/<record id>"
```

**Parameters**

* `<record id>`: The ID of the record to be delegated, required.
* `assignee`: The user ID of the assignee, required.

### Add 

```bash
curl -X POST -H 'Authorization: Bearer <your token>' -d \
  '{
    "assignees": [<user id>],
    "order": <order>,
  }'
  "http://localhost:3000/api/approvalRecords:add/<record id>"
```

**Parameters**

* `<record id>`: The ID of the record to be added, required.
* `assignees`: The user ID list of the assignees, required.
* `order`: The order of the addition, `-1` indicates before "me", `1` indicates after "me".
