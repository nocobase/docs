# NocoBase 如何工作

NocoBase 通过微内核和插件化的架构设计来支持所有的特性。

## 微内核
NocoBase 的内核类似于一个开发框架，主要负责定义应用的生命周期，并规范各层的接口协议。NocoBase 的基本结构如下图所示：

![how-micro-core-cn](https://static-docs.nocobase.com/how-micro-core-cn.png)

以数据模型作为底层驱动，以基于区块的界面作为用户层表现，业务逻辑层则作为连接两者的桥梁，并承载各类业务规则，使得业务数据可以通过用户的操作循环流动起来。

在以下三个主要层次，NocoBase 都定义了标准的协议：
1. 数据模型：基于关系型数据库 ORM 的上层封装，标准化的数据建模描述方式（参考《[数据表和字段](/development/server/collections)》）。
2. HTTP 路由：基于资源和操作定义的 RESTful-like 的接口形式（参考《[资源与操作](/development/server/resources-actions)》）。
3. 客户端界面：基于 Formily 2.0 的 JSON Schema，用以描述自定义的页面和区块布局（参考《[UI Schema](/development/client/ui-schema/quick-start)》）。

基于这些协议，也使得其他模块的开发更加规范和简单。

## 插件化

在应用运行的生命周期中，NocoBase 在各个环节都开放了可扩展的接口，包括数据模型中的字段类型、表类型、第三方数据源，业务逻辑层的中间件插入，界面的组件、区块等，整个应用生命周期的各个环节（启动、停止、插件加载），甚至很多插件也提供了二次扩展的接口。这些设计充分地为应用开发提供了各种扩展的可能，而且 NocoBase 所有内置的功能也通过这个设计组成：

![how-plugins-cn](https://static-docs.nocobase.com/how-plugins-cn.png)

可以通过插件在应用的任意生命周期中扩展所需要的功能，例如权限插件，包含了自定义的数据表、请求中间件的业务处理和前端管理的界面。
通过这样的设计，NocoBase 不仅实现了丰富的无代码功能，当内置功能无法满足需求时，也可以支持自由的扩展。

## 了解更多

请参考《[插件开发](/development)》部分的内容，开始通过开发插件进行扩展。
