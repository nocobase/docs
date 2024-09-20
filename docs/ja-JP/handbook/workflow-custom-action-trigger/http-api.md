# 外部调用

自定义操作事件的触发不仅限于用户界面的操作，也可以通过 HTTP API 调用触发。特别地，自定义操作事件为所有数据表操作都提供了触发工作流的新操作类型：`trigger`，可安装 NocoBase 标准的操作 API 来进行调用。

类似示例中由按钮触发的工作流，可以这样调用：

```bash
curl -X POST -H 'Authorization: Bearer <your token>' -H 'X-Role: <roleName>' \
  "http://localhost:3000/api/samples:trigger/<:id>?triggerWorkflows=workflowKey"
```

由于该操作是针对单条数据的，所以在对已有数据调用时，需要指定数据行的 ID，替换 URL 中的 `<:id>` 部分。

如果是在针对表单调用（如新增或更新），对新增数据的表单可以不传入 ID，但需要传入提交的数据，作为执行的上下文数据：

```bash
curl -X POST -H 'Authorization: Bearer <your token>' -H 'X-Role: <roleName>' -d \
  '{
    "title": "Sample 1",
    "indicator": 91
  }'
  "http://localhost:3000/api/samples:trigger?triggerWorkflows=workflowKey"
```

针对更新表单，需要同时传入数据行的 ID，以及更新的数据：

```bash
curl -X POST -H 'Authorization: Bearer <your token>' -H 'X-Role: <roleName>' -d \
  '{
    "title": "Sample 1",
    "indicator": 91
  }'
  "http://localhost:3000/api/samples:trigger/<:id>?triggerWorkflows=workflowKey"
```

如果同时传入了 ID 和数据，将首先加载 ID 对应的数据行，再使用传入的数据对象中的属性覆盖原始数据行来得到最终的触发数据上下文。

:::warning{title="注意"}
如果传入了关系数据，则也会进行覆盖，尤其在配置了预加载使用关系数据项时，需要谨慎处理传入数据，以免关系数据被覆盖不符合预期。
:::

另外，URL 参数 `triggerWorkflows` 为工作流的 key，多个工作流用逗号分隔。该 key 可在工作流画布顶部工作流名称处鼠标悬浮后获得：

![工作流_key_查看方式](https://static-docs.nocobase.com/20240426135108.png)

以上调用成功后，将触发对应 `samples` 表的自定义操作事件。

:::info{title="提示"}
因为外部调用也需要基于用户身份，所以通过 HTTP API 调用时，和普通界面发送的请求一致，都需要提供认证信息，包括 `Authorization` 请求头或 `token` 参数（登录获得的 token），以及 `X-Role` 请求头（用户当前角色名）。
:::

如果需要触发该操作中对一关系数据（对多暂不支持）的事件，可以在参数中使用 `!` 来指定关系字段的触发数据：

```bash
curl -X POST -H 'Authorization: Bearer <your token>' -H 'X-Role: <roleName>' \
  "http://localhost:3000/api/posts:trigger/<:id>?triggerWorkflows=workflowKey!category"
```

以上调用成功后，将触发对应 `categories` 表的自定义操作事件。

:::info{title="提示"}
通过 HTTP API 调用触发操作后事件时，也需要注意工作流的启用状态，以及数据表配置是否匹配，否则可能不会调用成功，或出现错误。
:::
