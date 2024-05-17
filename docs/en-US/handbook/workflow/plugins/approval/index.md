# 概述

<PluginInfo commercial="true" name="workflow-approval" link="/handbook/workflow/plugins/approval"></PluginInfo>

审批是一种专用于人工发起且由人工处理以决定相关数据状态的流程形式。通常用于办公自动化或其他人工决策事务的流程管理，例如可以创建并管理“请假申请”、“费用报销审批”和“原料采购审批”等场景的人工流程。

审批插件提供了专用的工作流类型（触发器）“审批（事件）”和专用于该流程的“审批”节点，结合 NocoBase 特有的自定义数据表和自定义区块，可以快速且灵活地创建与管理各类审批场景。

<embed src="../../../../_partials/commercial-installation.md"></embed>

## 使用手册

审批的使用分为几个部分：

- [触发器配置](./trigger.md)
- [节点配置](./node.md)
- [发起审批配置](./action.md)
- [区块](./block.md)

其中进一步的概念可以在 [深入理解](./advanced.md) 中了解。

如果需要从外部系统调用，可以参考 [外部调用](./http-api.md)。
