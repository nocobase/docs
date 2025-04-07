# 区块模板

<PluginInfo name="block-template"></PluginInfo>

## 介绍

区块模板用于为区块提供模板能力, 可用于模板的集中管理及通过模板创建区块。通过模板创建的区块, 与模板是继承关系, 可以在模板基础上增加自己的配置。

## 安装

内置插件, 无需安装。

## 使用说明

![主界面](https://static-docs.nocobase.com/main-screen-block-template.png)

### 模板管理

#### 创建模板

有以下两种方式创建模板:

1. 区块模板管理界面

点击 "新增" 按钮, 输入相关信息, 点击 "提交" 按钮, 即可创建新模板。

![创建模板](https://static-docs.nocobase.com/create-template.png)

2. 页面中保存为模板

页面中的数据区块, 可以通过 "保存为模板" 菜单, 将当前区块保存为模板。

![保存为模板](https://static-docs.nocobase.com/save-as-block-template.png)

:::info{title=注意}
- 仅支持页面中的数据区块保存为模板。不支持将弹窗中区块直接保存为模板。
- 图表区块暂不支持配置为模板。
:::

#### 配置模板

选择模板, 点击 "配置" 按钮, 即可进入模板配置界面, 配置模板数据区块。

![配置模板](https://static-docs.nocobase.com/configure-template.png)

:::info{title=注意}
- 目前模板仅支持添加一个数据区块, 未配置数据区块时, 将无法使用该模板创建区块。
- 图表区块暂不支持配置为模板。
:::

#### 编辑模板

选择模板, 点击 "编辑" 按钮, 即可进入模板编辑界面修改模板标题、描述。

![编辑模板](https://static-docs.nocobase.com/edit-template.png)

#### 复制模板

选择模板, 点击 "复制" 按钮, 输入新模板标题, 点击 "提交" 按钮, 即可复制模板。
模板复制后可以进行编辑以适应新的需求场景。

![复制模板](https://static-docs.nocobase.com/copy-template.png)

#### 删除模板

选择模板, 点击 "删除" 按钮, 点击 "提交" 按钮, 即可删除模板。

![删除模板](https://static-docs.nocobase.com/delete-template.png)

删除可以选择是否"保留已创建的区块":
- 若选择保留, 则模板被删除后, 已创建的区块会被转换成普通的页面区块。
- 若选择不保留, 则模板被删除后, 已创建的区块也会被删除。

### 模板使用

#### 创建区块

在页面中创建区块时, 选择对应区块的模板, 即可使用模板创建区块。

![创建区块](https://static-docs.nocobase.com/create-block.png)

从模板创建的区块与普通区块有以下几点不同:
1. 该区块与模板是继承关系, 可以在模板基础上增加自己的配置, 未修改的配置会与模板保持同步。
2. 继承自模板的 UI 组件无法从页面中删除。
![无法删除](https://static-docs.nocobase.com/disable-delete.png)

3. 区块新增的字段、操作会以不同的背景色展示, 以便区分。
![区块样式](https://static-docs.nocobase.com/template-bg.png)

4. 区块及继承自模板的 UI 组件均会多一个 "恢复到模板" 的配置项, 用于恢复到模板完全一致的状态。
![恢复到模板](https://static-docs.nocobase.com/revert-to-template.gif)

:::info{title=注意}
区块内部的 UI 组件的位置以页面为准, 创建后不能自动同步模板中的位置, 若需要同步模板中的位置, 只能将整个区块恢复到模板。
:::
