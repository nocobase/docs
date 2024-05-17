# 概述

<PluginInfo name="workflow-request-interceptor" link="/handbook/workflow/plugins/request-interceptor" commercial="true"></PluginInfo>

操作前事件插件提供了一种可以对表单的操作请求进行拦截的机制，拦截事件会在对应的表单操作提交后且被处理之前触发。如果在触发后的流程中有“结束流程”节点被执行，或者其他节点执行失败（出错或其他未能执行完成的情况），则该表单操作将被拦截，否则预定操作将被正常执行。搭配使用“响应消息”节点可以为该流程配置返回客户端的响应消息，以对客户端给出相应的提示信息。操作前事件可用于进行业务验证或逻辑检查，以通过或拦截客户端提交的创建、更新和删除等操作请求。

<embed src="../../../../_partials/commercial-installation.md"></embed>

## 使用手册

操作前事件的使用分为几个部分：

- [触发器配置](./trigger.md)
- [操作配置](./node.md)

其中进一步的概念可以在 [进阶使用](./advanced.md) 中了解。并可以参考 [示例](./example.md) 了解实际场景中的使用。

如果需要从外部系统调用，可以参考 [外部调用](./http-api.md)。
