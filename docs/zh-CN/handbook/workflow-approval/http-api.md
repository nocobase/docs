# HTTP API

## 发起人

### 数据表发起

从数据区块发起，都可以这样调用（以 `posts` 表创建按钮举例）：

```bash
curl -X POST -H 'Authorization: Bearer <your token>' -H 'X-Role: <roleName>' -d \
  '{
    "title": "Hello, world!",
    "content": "This is a test post."
  }'
  "http://localhost:3000/api/posts:create?triggerWorkflows=workflowKey"
```

其中 URL 参数 `triggerWorkflows` 为工作流的 key，多个工作流用逗号分隔。该 key 可在工作流画布顶部工作流名称处鼠标悬浮后获得：

![工作流_key_查看方式](https://static-docs.nocobase.com/20240426135108.png)

调用成功后，将触发对应 `posts` 表的审批工作流。

:::info{title="提示"}
因为外部调用也需要基于用户身份，所以通过 HTTP API 调用时，和普通界面发送的请求一致，都需要提供认证信息，包括 `Authorization` 请求头或 `token` 参数（登录获得的 token），以及 `X-Role` 请求头（用户当前角色名）。
:::

如果需要触发该操作中对一关系数据（对多暂不支持）的事件，可以在参数中使用 `!` 来指定关系字段的触发数据：

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

以上调用成功后，将触发对应 `categories` 表的审批事件。

:::info{title="提示"}
通过 HTTP API 调用触发操作后事件时，也需要注意工作流的启用状态，以及数据表配置是否匹配，否则可能不会调用成功，或出现错误。
:::

### 审批中心发起

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

**参数**

* `collectionName`：发起审批的目标数据表名称，必填。
* `workflowId`：发起审批使用的工作流 ID，必填。
* `data`：发起审批时创建的数据表记录字段，必填。
* `status`：发起审批时创建的记录状态，必填。可选值包括：
  * `0`：草稿，表示保存但不提交审批。
  * `2`：提交审批，表示发起人提交审批申请，进入审批。

### 保存和提交

当发起（或撤回）的审批处于草稿状态时，可以通过以下接口再次保存或提交：

```bash
curl -X POST -H 'Authorization: Bearer <your token>' -H 'X-Role: <roleName>' -d \
  '{
    "data": { "<field>": "<value>" },
    "status": 2
  }'
  "http://localhost:3000/api/approvals:update/<approval id>"
```

### 获取已发起的审批列表

```base
curl -X GET -H 'Authorization: Bearer <your token>' -H 'X-Role: <roleName>' \
  "http://localhost:3000/api/approvals:listMine"
```

### 撤回

发起人可以通过以下接口撤回当前处于审批中的记录：

```bash
curl -X POST -H 'Authorization: Bearer <your token>' -H 'X-Role: <roleName>' -d \
  "http://localhost:3000/api/approvals:withdraw/<approval id>"
```

**参数**

* `<approval id>`：待撤回的审批记录 ID，必填。

### 

## 审批人

审批流程进入审批节点后，会为当前审批人创建待办任务。审批人可以通过界面操作完成审批任务，也可以通过 HTTP API 调用完成。

### 获取审批处理记录

待办任务即审批处理记录，可以通过以下接口获取当前用户的所有审批处理记录：

```bash
curl -X GET -H 'Authorization: Bearer <your token>' \
  "http://localhost:3000/api/approvalRecords:listMine"
```

其中 `approvalRecords` 作为数据表资源，也可以使用通用的查询条件，如 `filter`、`sort`、`pageSize` 和 `page` 等。

### 获取单个审批处理记录

```bash
curl -X GET -H 'Authorization: Bearer <your token>' \
  "http://localhost:3000/api/approvalRecords:get/<record id>"
```

### 通过和拒绝

```bash
curl -X POST -H 'Authorization: Bearer <your token>' -d \
  '{
    "status": 2,
    "comment": "Looks good to me.",
    "data": { "<field to modify>": "<value>" }
  }'
  "http://localhost:3000/api/approvalRecords:submit/<record id>"
```

**参数**

* `<record id>`：待审批处理的记录 ID，必填。
* `status`：字段为审批处理的状态，`2` 表示“通过”，`-1` 表示“拒绝”，必填。
* `comment`：审批处理的备注信息，可选。
* `data`：表示审批通过后对当前审批节点所在数据表记录进行的修改，可选（仅通过时有效）。

### 退回 <Badge>v1.9.0+</Badge>

在 v1.9.0 版本之前，退回与“通过”、“拒绝”使用相同的接口，使用 `"status": 1` 代表退回。

v1.9.0 版本开始，退回有了单独的接口：

```bash
curl -X POST -H 'Authorization: Bearer <your token>' -d \
  '{
    "returnToNodeKey": "<node key>",
  }'
  "http://localhost:3000/api/approvalRecords:return/<record id>"
```

**参数**

* `<record id>`：待审批处理的记录 ID，必填。
* `returnToNodeKey`：退回的目标节点 key，可选。当节点中配置了可退回的节点范围时，可以使用该参数指定退回到哪个节点。未配置的情况下，该参数无需传值，默认将退回到起点，由发起人重新提交。

### 转签

```bash
curl -X POST -H 'Authorization: Bearer <your token>' -d \
  '{
    "assignee": <user id>,
  }'
  "http://localhost:3000/api/approvalRecords:delegate/<record id>"
```

**参数**

* `<record id>`：待审批处理的记录 ID，必填。
* `assignee`：转签的用户 ID，必填。

### 加签

```bash
curl -X POST -H 'Authorization: Bearer <your token>' -d \
  '{
    "assignees": [<user id>],
    "order": <order>,
  }'
  "http://localhost:3000/api/approvalRecords:add/<record id>"
```

**参数**

* `<record id>`：待审批处理的记录 ID，必填。
* `assignees`：加签的用户 ID 列表，必填。
* `order`：加签的顺序，`-1` 标识在“我”之前，`1` 标识在“我”之后。
