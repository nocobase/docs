# v1.0.0-alpha.15: 2024.05.19

## 新特性

### 新插件：LDAP 认证

支持用户使用 LDAP 服务器账号密码登录 NocoBase，详情参考 [认证：LDAP](/handbook/auth-ldap) 文档。

![](https://static-docs.nocobase.com/202405191513995.png)

### 新插件：工作流自定义操作事件

当常规的增删改操作无法满足需求时，可以使用工作流的自定义操作事件自己编排数据处理逻辑，详情参考 [工作流 / 自定义操作事件](/handbook/workflow-custom-action-trigger) 文档。

![](https://static-docs.nocobase.com/202405191515770.png)

### 改进「配置操作」交互

下拉菜单里所有操作统一显示在一个列表中，不再区分“启用操作”和“自定义”。

- 只能添加一次的操作：这些操作保留 Switch 效果，用户只能启用或禁用。
- 可以重复添加的操作：这些操作不再使用 Switch 交互，可以多次添加。
- 合并功能相似的操作
  - “Add new” 和 “Add record”
  - “Submit” 和 “Save record”

![20240520153033](https://static-docs.nocobase.com/20240520153033.png)

### 表格区块支持固定表格列

![](https://static-docs.nocobase.com/202405191512587.png)

### 弹窗里支持添加甘特图、看板区块

![](https://static-docs.nocobase.com/202405191512280.png)

### 详情区块支持联动规则

详情区块中的联动规则支持动态设置字段的显示/隐藏。

![](https://static-docs.nocobase.com/202405191513781.png)

### 优化日志插件的日志列表

- 多应用环境下，日志插件仅展示当前应用日志文件列表；
- 工作流、自定义请求文件夹路径放到应用文件夹里

![20240520152448](https://static-docs.nocobase.com/20240520152448.png)

### 优化工作流 HTTP 请求节点

- 支持 `application/www-x-form-urlencoded` 格式数据
- 值输入框支持字符串模板
- 统一响应的结果数据

![](https://static-docs.nocobase.com/202405191514472.png)

![](https://static-docs.nocobase.com/202405191514748.png)

工作流 HTTP 请求节点结果数据格式统一为：

```js
{
  config: {},
  headers: {},
  status: 500,
  statusText: 'xxx',
  data: {}
}
```

## 文档更新

### 新增插件示例文档

![20240520160633](https://static-docs.nocobase.com/20240520160633.png)

### 工作流使用手册文档结构更新

![20240520160527](https://static-docs.nocobase.com/20240520160527.png)

## 缺陷修复

- 图表在使用日期字段为维度查询聚合数据时，没有按客户端时区转换。<a href="https://github.com/nocobase/nocobase/pull/4366" target="_blank">fix(data-vi): should use local timezone when formatting date #4366</a>
- 视图刷新不良，同步数据库视图后必须要退出去重进才会刷新。<a href="https://github.com/nocobase/nocobase/pull/4224" target="_blank">fix: collection fields should refreshed after editing sync from database #4224</a>
- 树表表格区块添加子节点的时候不收起所有节点。<a href="https://github.com/nocobase/nocobase/pull/4289" target="_blank">fix: do not collapse all nodes when adding a child node in the tree table block #4289</a>
- 数据表标题字段设置失效。<a href="https://github.com/nocobase/nocobase/pull/4358" target="_blank">fix: collection title field setting is invalid #4358</a>
- bigint 字段阅读状态下数值精度丢失。<a href="https://github.com/nocobase/nocobase/pull/4360" target="_blank">fix: bigint field loses precision in read pretty mode #4360</a>
- 子应用停止后，打开的日志文件没有关闭。<a href="https://github.com/nocobase/nocobase/pull/4380" target="_blank">fix(logger): should close log stream after destroying app #4380</a>
- 工作流聚合节点关系数据模式选择 bug. <a href="https://github.com/nocobase/nocobase/pull/4315" target="_blank">fix(plugin-workflow-aggregate): fix association field select #4315</a>
- 工作流 HTTP 请求节点同步模式下忽略错误选项无效。<a href="https://github.com/nocobase/nocobase/pull/4334" target="_blank">fix(plugin-workflow-request): fix ignoreFail in sync mode #4334</a>
- 工作流 HTTP 请求节点变量输入框溢出。<a href="https://github.com/nocobase/nocobase/pull/4353" target="_blank">fix(plugin-workflow-request): fix value fields overflowing #4354</a>
- 特殊字符导致工作流 HTTP 请求节点挂起。<a href="https://github.com/nocobase/nocobase/pull/4376" target="_blank">fix(plugin-workflow-request): fix request hanging when invalid header value #4376</a>
- 修复主题编辑器中设置 marginBlock 之后会影响表单字段间距的问题。<a href="https://github.com/nocobase/nocobase/pull/4374" target="_blank">fix(theme-editor): form field spacing should not be affected by token.marginBlock #4374</a>
- 修复点击页面右上角的“许可证”选项时跳转错误的问题。[PR #4415](https://github.com/nocobase/nocobase/pull/4415)
- 修复当把筛选表单保存为区块模板后，字段的操作符无效的问题。[PR #4390](https://github.com/nocobase/nocobase/pull/4390)
