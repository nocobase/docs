# HTTP API

## Initiator

### Initiate from Data Collection

データブロックおよび承認センターブロックから発起された承認は（`posts` テーブルにボタンを作成する例）：

```bash
curl -X POST -H 'Authorization: Bearer <your token>' -H 'X-Role: <roleName>' -d \
  '{
    "title": "Hello, world!",
    "content": "This is a test post."
  }'
  "http://localhost:3000/api/posts:create?triggerWorkflows=workflowKey"
```

ここで、URLパラメーター `triggerWorkflows` はワークフローのキーであり、複数のワークフローはカンマで区切ります。このキーはワークフローキャンバスの上部にあるワークフロー名にマウスをホバーすることで取得できます：

![ワークフローキーの確認方法](https://static-docs.nocobase.com/20240426135108.png)

呼び出しが成功すると、対応する `posts` テーブルの承認ワークフローがトリガーされます。

:::info{title="ヒント"}
外部呼び出しもユーザーの身分に基づく必要があるため、HTTP APIを通じて呼び出す際は、通常のインターフェースから送信されるリクエストと同様に、認証情報を提供する必要があります。これには `Authorization` リクエストヘッダーまたは `token` パラメーター（ログイン時に取得したトークン）、および `X-Role` リクエストヘッダー（ユーザーの現在の役割名）が含まれます。
:::

この操作内でリレーションデータ（多対多は未サポート）に対するイベントをトリガーする必要がある場合、パラメーター内で `!` を使用してリレーションフィールドのトリガーデータを指定できます：

```bash
curl -X POST -H 'Authorization: Bearer <your token>' -H 'X-Role: <roleName>' -d \
  '{
    "title": "Hello, world!",
    "content": "This is a test post.",
    "category": {
      "title": "テストカテゴリー"
    }
  }'
  "http://localhost:3000/api/posts:create?triggerWorkflows=workflowKey!category"
```

この呼び出しが成功した後、対応する `categories` テーブルの承認イベントがトリガーされます。

:::info{title="ヒント"}
HTTP API呼び出しで操作をトリガーする際は、ワークフローの有効状態やデータテーブルの設定が一致していることを確認してください。そうでないと、呼び出しが成功しないか、エラーが発生する可能性があります。
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
