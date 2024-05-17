# 概述

<PluginInfo name="workflow-custom-action-trigger" link="/handbook/workflow/plugins/custom-action-trigger" commercial="true"></PluginInfo>

NocoBase 内置了常见的数据操作（增删改查等），而当这些操作无法满足复杂的业务需求时，可以通过在工作流中使用自定义操作事件，并将该该事件绑定到页面区块的“触发工作流”的按钮上实现自定义的数据操作。

:::info{title=提示}
“自定义操作事件”是由原来“操作后事件”中的“提交至工作流”模式演变而来，自 `v1.0.0-alpha.7` 版本开始独立为单独的事件，并更名为“自定义操作事件”。
:::

<embed src="../../../../_partials/commercial-installation.md"></embed>

## 使用手册

自定义操作事件的使用分为几个部分：

- [触发器配置](./trigger.md)
- [操作配置](./action.md)

并可以参考 [示例](./example.md) 了解实际场景中的使用。

如果需要从外部系统调用，可以参考 [外部调用](./http-api.md)。
