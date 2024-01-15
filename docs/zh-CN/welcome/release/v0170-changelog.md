# v0.17：2023-12-04

v0.17 提供全新的 SchemaInitializer 和 SchemaSettings。

## 新特性

为了降低开发学习成本，提供更好的前端开发体验，在过去的几个月里，我们分阶段的对前端内核进行了重构，其中包括：

![20240115141058](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240115141058.png)

这一次 v0.17 重构了 UI Schema 设计器相关的 SchemaInitializer 和 SchemaSettings

![20240115141118](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240115141118.png)

![20240115141129](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240115141129.png)

为了解决用户上手难的问题，我们也重新梳理了各部分文档

- [插件开发](https://docs-cn.nocobase.com/development)（全面改版，已发布）
- [API 参考 / 客户端](https://client.docs-cn.nocobase.com/core/application/application)（新版块，已发布）
- 使用手册（全面改版，将在未来一两周内发布）
- 插件列表（新版块，包括所有已有插件的介绍、使用、扩展开发的说明，将在未来一两周内发布）

## 不兼容的变化

### SchemaInitializer 的变化

- 新增 `SchemaInitializerManager`，用于注册 `SchemaInitializer`
- 新增 `useSchemaInitializerRender()` 代替原来的 `useSchemaInitializer()` 的 `render()`
- 新增 `useSchemaInitializerItem()`，用于获取当前初始化项的上下文
- 新增 `SchemaInitializerItemGroup` 组件，用作 `type: 'itemGroup'` 的默认组件
- 新增 `SchemaInitializerSubMenu` 组件，用作 `type: 'subMenu'` 的默认组件
- 新增 `SchemaInitializerDivider` 组件，用作 `type: 'divider'` 的默认组件
- 新增 `SchemaInitializerChildren` 组件，用于自定义渲染多个列表项
- 新增 `SchemaInitializerChild` 组件，用于自定义渲染单个列表项
- 更改 `SchemaInitializerContext` 职责变更，用于存放当前初始化器的上下文
- 更改 `useSchemaInitializer()` 职责变更，用于获取当前初始化器的上下文
- 更改 `function SchemaInitializer` 变更为 `class SchemaInitializer`，用于定义初始化器
- 更改 `SchemaInitializer` 参数变更
  - 新增 `name` 必填参数，用于 `x-initializer` 的值。
  - 新增 `Component` 参数，用于定制化渲染的按钮。默认为 `SchemaInitializerButton`。
  - 新增 `componentProps`、`style` 用于配置 `Component` 的属性和样式。
  - 新增 `ItemsComponent` 参数，用于定制化渲染的列表。默认为 `SchemaInitializerItems`。
  - 新增 `itemsComponentProps`、`itemsComponentStyle` 用于配置 `ItemsComponent` 的属性和样式。
  - 新增 `popover` 参数，用于配置是否显示 `popover` 效果。
  - 新增 `useInsert` 参数，用于当 `insert` 函数需要使用 hooks 时。
  - 更改 将 `dropdown` 参数改为了 `popoverProps`，使用 `Popover` 代替了 `Dropdown`。
- 更改 `SchemaInitializer` 的 `items` 参数变更
  - 新增 `useChildren` 函数，用于动态控制子项。
  - 新增 `componentProps` 函数，用于组件自身的属性。
  - 新增 `useComponentProps` 函数，用于动态处理组件的 props
  - 更改 将 `key` 参数改为了 `name`，用于列表项的唯一标识。
  - 更改 将 `visible` 参数改为了 `useVisible` 函数，用于动态控制是否显示。
  - 更改 将 `component` 参数改为了 `Component`，用于列表项的渲染。
- 更改 `SchemaInitializer.Button` 变更为 `SchemaInitializerButton`，是 SchemaInitializer 的 Component 参数的默认值；
- 更改 `SchemaInitializer.Item` 变更为 `SchemaInitializerItem`，参数不变；
- 更改 `SchemaInitializer.ActionModal` 变更为 `SchemaInitializerActionModal`，参数不变；
- 更改 `SchemaInitializer.SwitchItem` 变更为 `SchemaInitializer.Switch`，参数不变。
- 删除 `SchemaInitializerProvider`，用 `SchemaInitializerManager` 代替
- 删除 `SchemaInitializer.itemWrap`，不需要再包裹 `item` 组件了；

### SchemaSettings 的变化

- 新增 `SchemaSettingsManager` 用于注册 `SchemaSettings`
- 新增 `useSchemaSettingsItem()`
- 新增 `useSchemaSettingsRender()`
- 新增 `x-settings` 参数，用于配置 schema 的设置器
- 新增 `x-toolbar` 参数，用于配置 schema 的工具栏
- 新增 `SchemaToolbar` 组件，用于自定义 schema 的工具栏
- 新增 `useSchemaToolbarRender()`，代替原来的 `useDesigner()`
- 更改 `function SchemaSettings` 变更为 `class SchemaSettings`，用于定义设置器
- 更改 原 `SchemaSettings` 变更为 `SchemaSettingsDropdown`
- 更改 `SchemaSettings.Item` 变更为 `SchemaSettingsItem`
- 更改 `SchemaSettings.ItemGroup` 变更为 `SchemaSettingsItemGroup`
- 更改 `SchemaSettings.SubMenu` 变更为 `SchemaSettingsSubMenu`
- 更改 `SchemaSettings.Divider` 变更为 `SchemaSettingsDivider`
- 更改 `SchemaSettings.Remove` 变更为 `SchemaSettingsRemove`
- 更改 `SchemaSettings.SelectItem` 变更为 `SchemaSettingsSelectItem`
- 更改 `SchemaSettings.CascaderItem` 变更为 `SchemaSettingsCascaderItem`
- 更改 `SchemaSettings.SwitchItem` 变更为 `SchemaSettingsSwitchItem`
- 更改 `SchemaSettings.ModalItem` 变更为 `SchemaSettingsModalItem`
- 更改 `SchemaSettings.ActionModalItem` 变更为 `SchemaSettingsActionModalItem`
- 删除 `x-designer` 参数已废弃，将来会删除，使用 `x-toolbar` 代替，
- 删除 `useDesigner()` 已废弃，将来会删除，使用 `useSchemaToolbarRender()` 代替

更多详情查看 [NocoBase 0.17 的不兼容变化](https://docs-cn.nocobase.com/welcome/release/upgrade-to/v017)
