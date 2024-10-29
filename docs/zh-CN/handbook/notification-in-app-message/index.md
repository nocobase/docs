# 通知：站内信

<PluginInfo name="notification-in-app-message"></PluginInfo>

## 介绍

支持用户在 NocoBase 应用内实时接收消息通知。

## 安装

该插件为内置插件，无需安装。

## 添加站内信渠道

打开通知管理，点击新增按钮，选择站内信。

![image-2-2024-10-23-08-45-39](https://static-docs.nocobase.com/image-2-2024-10-23-08-45-39.png)

输入渠道名称和描述后，点击提交。

![image-3-2024-10-23-08-45-58](https://static-docs.nocobase.com/image-3-2024-10-23-08-45-58.png)

列表上会新增一个对应渠道。

![image-4-2024-10-23-08-46-09](https://static-docs.nocobase.com/image-4-2024-10-23-08-46-09.png)

## 使用场景示例

我们用一个营销线索跟进的例子帮助您快速了解站内信的使用方法。

首先在通知的渠道管理配置一个名称为“营销线索”的站内信渠道。
![image-2024-10-27-14-07-09](https://static-docs.nocobase.com/image-2024-10-27-14-07-09.png)


配置一条工作流，增加通知节点并选择上一步创建好的渠道并配置。
![image-1-2024-10-27-14-07-17](https://static-docs.nocobase.com/image-1-2024-10-27-14-07-17.png)

触发工作流执行，会实时收到通知。
![image-2-2024-10-27-14-07-22](https://static-docs.nocobase.com/image-2-2024-10-27-14-07-22.png)

站内消息会按照发送渠道名称分组，根据消息的已读未读状态可以筛选全部、未读和已读的消息分组，点击“查看”按钮会跳转到配置的链接页面。
![20241027140648-2024-10-27-14-06-51](https://static-docs.nocobase.com/20241027140648-2024-10-27-14-06-51.png)
