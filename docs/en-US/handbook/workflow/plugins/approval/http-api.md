# 外部调用

审批事件不仅限于用户界面的操作发起，也可以通过 HTTP API 调用触发。

针对从数据区块和审批中心区块发起的审批，都可以这样调用（以 `posts` 表创建按钮举例）：

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
