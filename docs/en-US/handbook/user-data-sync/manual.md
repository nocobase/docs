# User Guide

## User Data Source Management

The user data synchronization plugin provides a management interface in the configuration center.

![](./static/20240813134409.png)

## Activate User Data Source

Only activated data sources will display the sync and task buttons.

![](./static/20240813134707.png)

## Synchronize User Data

After clicking the sync button, synchronization will start immediately.

![](./static/20240813134818.png)

After clicking the task button, you can view the list of synchronization tasks.

![](./static/20240813135105.png)

![](./static/20240813134110.png)

In the task list, you can retry failed tasks by clicking on them to restart synchronization.

![](./static/20240813134933.png)

## User Data Source Type

![](./static/20240813133944.png)

Currently supported data source types include:

- DingTalk, expanded by [dingtalk-auth plugin](../auth-dingtalk/index.md)
- WeCom, expanded by [wecom-auth plugin](../auth-wecom/index.md)

In addition, you can also expand user data source by yourself, refer to the [Developer's Guide](./dev/guide.md).