# 概述

## 介绍

NocoBase 的通知模块，为用户提供通知渠道管理，日志查看，扩展插件注册等功能，主要由以下部分组成：

- 管理插件 `@nocobase/plugin-notification-manager` ：提供渠道管理，日志查看，通知扩展插件注册等功能
- 工作流节点插件 `@nocobase/plugin-workflow-notification` 在工作流中扩展通知节点
- 通知扩展插件：扩展通知模块以支持各种不同类型的通知，如邮件，站内信等，如`@nocobase/plugin-notification-mail-smtp`是一个smtp邮件扩展
