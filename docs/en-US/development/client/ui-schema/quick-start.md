# 快速入门

## 1. 编写 Schema 组件

通过配置 `x-component` 将已注册的组件渲染出来

涉及知识点：

- [UI Schema 协议](/development/client/ui-schema/what-is-ui-schema)
- [Schema 渲染](/development/client/ui-schema/rendering)
- [扩展 Schema 组件](/development/client/ui-schema/extending)

<code src="./demos/demo1.tsx"></code>

## 2. 将 Schema 组件添加到页面里

通过配置 `x-initializer` 将新的组件插入到已存在的 Schema 的相邻位置

涉及知识点：

- [Designable 设计器](#)
- [UI Schema 协议 - x-initializer 参数](#)
- [SchemaInitializer 初始化器](#)

<code src="./demos/demo2.tsx"></code>

## 3. 为 Schema 添加设计器工具栏

通过配置 `x-settings` 为 Schema 组件提供参数配置器，设计器工具栏默认开启拖拽功能

涉及知识点：

- [UI Schema 协议 - x-settings 参数](#)
- [SchemaSettings 配置器](#)
- [现有 schema 节点的拖拽移动](#)

<code src="./demos/demo3.tsx"></code>
