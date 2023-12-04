# 介绍

NocoBase 采用微内核架构，各类功能以插件形式扩展。插件化的设计降低了模块之间的耦合度，提高了复用率。随着插件库的不断扩充，常见的场景只需要组合插件即可完成基础搭建。NocoBase 的无代码平台，就是由各种插件组合起来。

## 插件管理器

NocoBase 提供了强大的插件管理器用于管理插件。无代码用户可以通过界面管理插件的添加、激活、禁用和删除。

![插件管理器](./image-1.png)

开发者也可以通过 CLI 的方式管理插件

```bash
# Create the plugin
yarn pm create @my-project/plugin-hello
# Register the plugin
yarn pm add @my-project/plugin-hello
# Activate the plugin
yarn pm enable @my-project/plugin-hello
# Disable the plugin
yarn pm disable @my-project/plugin-hello
# Remove the plugin
yarn pm remove @my-project/plugin-hello
```

For more plugin examples, see [packages/samples](https://github.com/nocobase/nocobase/tree/main/packages/plugins/%40nocobase).

## 扩展能力

无论是通用性的功能，还是个性化定制，都可以以插件的形式编写，NocoBase 的扩展性体现在方方面面：

- 可以是用户直观可见的界面相关的页面模块、区块类型、操作类型、字段类型等
- 也可以是用于增强或限制 HTTP API 的过滤器、校验器、访问限制等
- 也可以是更底层的数据表、迁移、事件、命令行等功能的增强

各模块分布：

- 服务端
  - 数据表和字段
  - 资源和操作
  - 中间件
  - 事件
  - 自定义命令行
  - 国际化
- 客户端
  - 路由管理和插件配置页
  - 样式和主题
  - Provider 和上下文
  - UI Schema
  - 国际化
