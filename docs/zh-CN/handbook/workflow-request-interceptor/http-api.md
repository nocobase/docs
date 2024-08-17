# 外部调用

操作前事件本身注入在请求处理阶段，所以也支持通过 HTTP API 调用触发。

针对局部绑定在操作按钮上的工作流，可以这样调用（以 `posts` 表创建按钮举例）：

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

以上调用发出后，将触发对应 `posts` 表的操作前事件。在对应的工作流同步处理完成后，正常创建数据并返回。

如果配置的工作流中进行到“结束节点”，则与界面操作的逻辑相同，请求将被拦截，不会创建数据。结束节点中状态配置为失败时，返回的响应状态码为 `400`，成功时为 `200`。

如果在结束节点前还配置“响应消息”节点，生成的消息也会在响应结果中返回，其中错误时的结构为：

```json
{
  "errors": [
    {
      "message": "message from 'Response message' node"
    }
  ]
}
```

“结束节点”配置为成功时的消息结构为：

```json
{
  "messages": [
    {
      "message": "message from 'Response message' node"
    }
  ]
}
```

:::info{title=提示}
由于“响应消息”节点可以在流程中添加多个，所以返回的消息数据结构为数组。
:::

如果操作前事件配置为全局模式，则在调用 HTTP API 时，无需使用 URL 参数 `triggerWorkflows` 指定对应工作流，直接调用对应的数据表操作即可触发。

```bash
curl -X POST -H 'Authorization: Bearer <your token>' -H 'X-Role: <roleName>' -d \
  '{
    "title": "Hello, world!",
    "content": "This is a test post."
  }'
  "http://localhost:3000/api/posts:create"
```

:::info{title="提示"}
通过 HTTP API 调用触发操作后事件时，也需要注意工作流的启用状态，以及数据表配置是否匹配，否则可能不会调用成功，或出现错误。
:::
