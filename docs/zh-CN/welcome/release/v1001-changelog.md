# v1.0：2024-04-28

## v1.0 里程碑

历时 3 年，NocoBase 迎来第一次根版本号升级，版本号从 0.x 升级到 1.0。这是一个新的里程碑。

- 在 0.x 阶段：核心 API 和功能快速变化，每一个新的版本都可能存在不兼容的变更；
- 在 1.x 阶段：核心 API 基本稳定，NocoBase 将在保持稳定的基础上不断增加新的插件，优化安全性和性能。

## 新特性

- 主题编辑器可以配置页面和弹窗内边距、区块间距、区块圆角
- 添加区块时，数据表支持过滤
- 关系数据支持排序
- 改进数据可视化的交互
- 支持移动端添加图表区块
- 图表筛选区块支持设置字段数据范围
- 新增更多变量，[查看详情](https://docs-cn.nocobase.com/handbook/ui/variables)
- 弹窗中支持添加任意数据表的区块
- 工作流：“操作后事件”支持关系区块内按钮触发
- 弹窗内数据变动时，关闭弹窗自动刷新上一层容器内的数据
- 大幅提升表格区块的性能
- 大幅提升测试覆盖率

## 新插件

- Filed: Markdown(Vditor)

  - 用于存储 Markdown，并使用 Vditor 编辑器渲染，支持常见 Markdown 语法，如列表，代码，引用等，并支持上传图片，录音等。同时可以做到即时渲染，所见即所得。
- Comments

  - 提供评论数据表模板和区块，为任意数据表的数据添加评论功能。
## 完整更新记录
<details>
<summary>查看完整记录</summary>

- feat(plugin-workflow): refresh the list after sync <u>#4177</u>
- feat(plugin-workflow): show workflow key as tooltip on title <u>#4178</u>
- test(plugin-workflow): add test cases <u>#4199</u>
- chore: api cache control header <u>#4203</u>
- feat: load vditor dep from local <u>#4190</u>
- test: input number separator test <u>#4204</u>
- fix: number field shuold support separator setting <u>#4197</u>
- fix(plugin-workflow): refine experience <u>#4195</u>
- chore: optimize warning wordings of import & export <u>#4196</u>
- refactor: external data source collection manager <u>#4193</u>
- fix: env bug <u>#4191</u>
- fix: empty operator with association field <u>#4189</u>
- chore: add e2e <u>#4184</u>
- fix: vditor version <u>#4183</u>
- refactor: form data template locale improve <u>#4188</u>
- test: add automated testing <u>#4098</u>
- chore: data source logger instance <u>#4181</u>
- chore: get database instance in relation repository <u>#4179</u>
- chore: add e2e for variables <u>#4152</u>
- chore: define collection debug message <u>#4176</u>
- chore: unsupportedFields in view collection <u>#4155</u>
- feat: add plugin-field-markdown-vditor <u>#4065</u>
- fix: bulk edit form acl action error <u>#4166</u>
- fix: auto create uuid foreign key in relation field <u>#4160</u>
- fix(plugin-fm): fix confusing size limit hint <u>#4153</u>
- fix(users): improve users:updateProfile <u>#4162</u>
- fix(client): get api url <u>#4161</u>
- feat: remove plugin-ui-routes-storage <u>#4140</u>
- fix: lock cytoscape version <u>#4158</u>
- refactor: collection template support presetFieldsDisabled <u>#4159</u>
- fix: grid schema <u>#4157</u>
- client unit test <u>#4150</u>
- fix: update belongs to many association that target key is not primary key <u>#4146</u>
- refactor: form data template locale improve <u>#4148</u>
- fix(database): column name in array field <u>#4110</u>
- test: refresh on action e2e test <u>#4147</u>
- fix(custom-request): support configuring content type <u>#4144</u>
- chore: deprecate the current record variable from the form <u>#4063</u>
- feat(Theme): add some tokens <u>#4137</u>
- fix(client): fix some warnings <u>#4143</u>
- style: tableActionColumn style improve <u>#4138</u>
- fix: actionBar style improve <u>#4123</u>
- chore: warning message if on delete conflict <u>#4141</u>
- fix(plugin-workflow-manual): allow pass node when no assignee <u>#4139</u>
- chore: datasource manager api <u>#4124</u>
- fix(plugin-workflow-manual): fix assignees parsing bug <u>#4125</u>
- fix: load association field in collection <u>#4122</u>
- perf: remove all Skeleton animation <u>#4113</u>
- test: add e2e <u>#4121</u>
- chore(data-vi): adjust api <u>#4116</u>
- fix: scheduleEventTrigger <u>#4114</u>
- feat(plugin-workflow): add checker for intervally dispatching <u>#4119</u>
- feat: add filterOtherRecordsCollection for DataBlockInitializer <u>#4117</u>
- refactor: optimize CollectionField <u>#4111</u>
- fix: improve sort field migration <u>#4112</u>
- fix: field component <u>#4102</u>
- fix: association select support add mode <u>#4108</u>
- fix: createdBy & updatedBy target option <u>#4109</u>
- fix(linkage-rule): linkage rule support empty condiction <u>#4103</u>
- fix: add SanitizedCollectionProvider <u>#4100</u>
- fix: tree collection target error <u>#4105</u>
- fix: add ClearCollectionFieldContext <u>#4101</u>
- feat: improve form block <u>#4099</u>
- chore: migrate sortable options to sort field <u>#4011</u>
- feat: support sort option in appends <u>#4056</u>
- feat(data-vi): allows pie chart to accept negative numbers, fix T-4075 <u>#4094</u>
- fix(data-vi): number becomes string after precision transformation <u>#4092</u>
- fix: encode url params <u>#4055</u>
- test(plugin-workflow): add test case for duplicated triggering schedule workflow <u>#3817</u>
- perf(LinkageRules): solve lagging problems <u>#4090</u>
- fix(subTable): should not display Allow add new data option <u>#4086</u>
- fix: missing fields <u>#4083</u>
- fix: table select pagination error <u>#4078</u>
- fix: reset page when setting block data scope <u>#4081</u>
- fix: custom request role list <u>#4074</u>
- fix: parse iso week <u>#4068</u>
- fix(sourceId): avoid error <u>#4077</u>
- fix(sql-collection): can't select interface when setting fields <u>#4079</u>
- fix: load with source field <u>#4075</u>
- fix: deletion of operation linkage rules does not take effect in real time <u>#4058</u>
- fix(core): fix round bug in formula evaluator <u>#4070</u>
- test: add e2e for data loading mode <u>#4069</u>
- fix(filterForm): avoid duplicate names <u>#4071</u>
- chore: optimize block title <u>#4040</u>
- fix: sync default value in view <u>#4067</u>
- fix(defaultValue): fix the issue of default values disappearing after refreshing the page <u>#4066</u>
- refactor: gantt block <u>#4059</u>
- fix: sub-table big field should support variable default value <u>#4062</u>
- chore(Theme): set the default font size of the Compact theme to 16 <u>#4064</u>
- test: add e2e for actions <u>#4053</u>
- fix(variable): missing variables and invalid translations <u>#4054</u>
- test: add backend unit tests <u>#4000</u>
- fix: improve card item <u>#4036</u>
- chore(acl): disable register association fields actions <u>#4014</u>
- fix(variable): fix parent record variable reporting errors in data scope <u>#4039</u>
- test(e2e): add assertions on field values <u>#4034</u>
- feat(Variable): add a new variable <u>#4025</u>
- feat: run e2e with pro plugins <u>#3890</u>
- fix: bug <u>#4038</u>
- fix: array operator with camel case field <u>#4032</u>
- fix: scopeKeyOptions should be obtained in real-time <u>#4029</u>
- fix(addText): should use FormItemSchemaToolbar instead of BlockSchema… <u>#3963</u>
- feat: register once hook in datasource manager <u>#4024</u>
- fix: snippets <u>#4030</u>
- fix: vitest single bug <u>#4031</u>
- feat(data-vi): improved user experiences (refer to pr) <u>#4013</u>
- test: add frontend unit test <u>#3991</u>
- feat: support Others option in popup <u>#4015</u>
- fix(collection-manager): no refresh after override the field <u>#4022</u>
- chore: add export & import warnings <u>#4027</u>
- refactor: third party data source support sort field grouped sorting edit <u>#4023</u>
- fix(plugin-acl): pm.acl.roles snippet <u>#4026</u>
- test: association name block e2e test <u>#4021</u>
- fix: get api url <u>#4020</u>
- fix(Sub-details): the initializer button is not displayed when the field value is empty <u>#4019</u>
- fix: initializer use useAassociationName <u>#4018</u>
- fix(auth): cas login bug when use subdirectory deployment <u>#4017</u>
- fix(TreeTable): add child error <u>#4008</u>
- fix: remove active field should not clear value <u>#4012</u>
- fix(plugin-acl): datasource roles snippet <u>#4016</u>
- fix: after selecting all, bulk update prompts for unselected data <u>#4010</u>
- refactor: tree table is not enabled by default <u>#4001</u>
- feat(plugin-workflow-action-trigger): support association actions to trigger <u>#4007</u>
- Update application.ts <u>#4006</u>
- fix: tag filed setting <u>#4009</u>
- fix(users): remove phone validation due to incorrect check of foreign phone numebrs <u>#4005</u>
- fix: association block action permission verification failed <u>#3994</u>
- refactor: fields for table sorting cannot select sorting fields with scopekey <u>#3984</u>
- fix(Form): invalid parentRecord <u>#3998</u>
- fix(plugin-workflow): adjust locale <u>#3993</u>
- fix: sub -table support allowSelectExistingRecord setting <u>#4004</u>
- fix(auth): sign up page not found when entering with url directly <u>#4002</u>
- chore(database): set null value when field is unique and value is empty string <u>#3997</u>
- chore(gateway): report error with cause message <u>#3999</u>
- chore(error-handler): display message cause the error <u>#3996</u>
- fix: restore with table name in camel case <u>#3995</u>
- refactor(plugin-workflow): adjust comments <u>#3990</u>
- fix: gantt collapse & expand <u>#3982</u>
- fix(BulkForm): should be required when switching to 'Changed to' <u>#3965</u>
- fix: move action <u>#3985</u>
- refactor: sort field should not has defaultValue <u>#3986</u>
- chore: update class names of plugins <u>#3981</u>
- feat(plugin-workflow-sync): add sync when multi-app-share-collection enabled <u>#3969</u>
- fix(localization): incorrect locale when first entering <u>#3968</u>
- chore: adjust and add api comments <u>#3951</u>
- refactor: select options configuration <u>#3964</u>
- fix(GridCard): set the count of columns displayed in a row <u>#3960</u>
- refactor: only numerical formula fields support format <u>#3962</u>
- chore(plugin-workflow): add comments <u>#3959</u>
- chore: remove legacy formula plugins <u>#3939</u>
- fix(LinkageRules): should be effective immediately <u>#3958</u>
- fix(Picker): should display Allow add new data option <u>#3957</u>
- fix(connect-data-blocks): should immediately show in the drop-down menu <u>#3953</u>
- fix: left menu title modify <u>#3956</u>
- fix: template list provider bug <u>#3950</u>
- refactor: nanoid &uuid autoFill <u>#3955</u>
- feat: getParentJsonSchema in ui schema repository <u>#3690</u>
- fix: save uuid & nano id field value with sequelize validation <u>#3952</u>
- fix: throughCollection support fuzzy search <u>#3949</u>
- fix: getSourceKeyByAssocation <u>#3947</u>
- fix(RichText): unify style <u>#3946</u>
- fix(connectDataBlocks): should add FilterBlockProvider to Grid <u>#3944</u>
- chore: add appVersion to Schema <u>#3936</u>
- fix: collectionFieldInterfaceSelect <u>#3945</u>
- fix: fix sourceId of templates <u>#3941</u>
- fix(collection manager): collection manager primarykey & nanoid & uuid suport index setting <u>#3943</u>
- fix(plugin-formula-field): fix component context <u>#3937</u>
- fix: nanoid availableTypes <u>#3942</u>
- fix: automatically generate default values <u>#3940</u>
- fix: formula field caluation error <u>#3938</u>
- fix: formula field support format <u>#3928</u>
- refactor: unify tab initailizer naming <u>#3932</u>
- fix: add zIndex to Lightbox overlay style <u>#3934</u>
- fix(Table): fix the problem that the content of the association field is not displayed <u>#3930</u>
- fix(evaluators): fix array flatten <u>#3931</u>
- refactor: main data source view collection support filterTargetKey <u>#3818</u>
- fix: formula field calculation error <u>#3929</u>
- fix: load view collection belongs to association with source options <u>#3912</u>
- fix: edit form unchanged should not appear unSaveed warning when cloas modal <u>#3920</u>
- fix(Collapse): fix error for chinaRegions <u>#3925</u>
- fix: number display format <u>#3924</u>
- fix(defaultValue): should immediate effect when set default value <u>#3923</u>
- feat: action support refreshDataBlockRequest configuration <u>#3882</u>
- refactor: formBlockProvider & detailBlockProvider <u>#3898</u>
- feat(data-vi): allows to add charts for mobile client <u>#3922</u>
- chore: add API comments <u>#3919</u>
- fix: fix Pagination <u>#3921</u>
- test(plugin-error-handler): middleware <u>#3909</u>
- fix: update plugin <u>#3895</u>
- fix: gantt block pagination <u>#3918</u>
- fix: source id null <u>#3917</u>
- fix(Table): fix Pagination <u>#3916</u>
- fix: get the correct sourceId <u>#3897</u>
- fix(DataScope): fix no immediate effect issue after saving <u>#3910</u>
- fix: select field options initialValue <u>#3911</u>
- fix: external link click <u>#3908</u>
- fix(inputNumber): loss of accuracy in inputNumber <u>#3902</u>
- feat(plugin-workflow-action-trigger): add global action events <u>#3883</u>
- docs: add api comment <u>#3868</u>
- fix: vitest config bug <u>#3907</u>
- fix: table fixed bug <u>#3901</u>
- fix: list data undefined error <u>#3905</u>
- fix: lazy render bug <u>#3886</u>
- fix: sort params missing <u>#3906</u>
- refactor: change useProps to x-use-component-props <u>#3853</u>
- fix(withDynamicSchemaProps): change deep merge to shallow merge <u>#3899</u>
- fix: history block add print button, click print button to report error <u>#3900</u>
- fix: tar bug <u>#3891</u>
- chore: return bigInt as string type <u>#3887</u>
- feat(data-vi): data scope for chart filter fields <u>#3894</u>
- feat: adjust menu of add new <u>#3884</u>
- fix(plugin-custom-request): fix edit button dialog <u>#3893</u>
- fix: fieldNames missing when setting data scope <u>#3892</u>
- fix: deps check error when dev add production plugin <u>#3848</u>
- fix: workflow tabs not exists <u>#3889</u>
- fix: association field support data scope linkage <u>#3888</u>
- fix: templateBlockProvider support association field append <u>#3866</u>
- chore: main datasource api <u>#3880</u>
- feat: run vitest with coverage <u>#3802</u>
- fix: avoid duplicate menu keys <u>#3885</u>
- fix(data-vi): dual axes chart displays abnormally <u>#3881</u>
- fix: reject update when filter is empty object <u>#3777</u>
- chore: update field with primary key attribute <u>#3852</u>
- refactor: uuid & nanoid support default value configuration <u>#3830</u>
- feat: table performance <u>#3791</u>
- fix: setFormValueChanged undefined <u>#3879</u>
- fix(client): fix diabled in filter dynamic component <u>#3874</u>
- fix(plugin-workflow-parallel): fix locale <u>#3876</u>
- fix(formula-field): formula field set form value change <u>#3873</u>
- fix: formBlockProvider block display <u>#3877</u>
- refactor(plugin-workflow): change to <u>#3871</u>
- fix: kanban card modal display abnormal <u>#3863</u>
- fix: filterTargetKey only support view collection <u>#3872</u>

</details>

## 插件变更

以下插件不再提供开源版本（已经在生产环境使用的用户请联系我们获得升级）

- @nocobase/plugin-auth-cas：通过 CAS 协议认证身份；
- @nocobase/plugin-auth-odic：通过 OIDC (OpenID Connect) 协议认证身份；
- @nocobase/plugin-auth-saml：通过 SAML 2.0 认证身份。

以下插件已废弃，将在近期版本里移除

- @nocobase/plugin-audit-logs：已废弃，暂时不删除，新版不会安装
- @nocobase/plugin-snapshot-field：已废弃，暂时不删除，新版不会安装
- @nocobase/plugin-charts：使用 @nocobase/plugin-data-visualization 代替
- @nocobase/plugin-excel-formula-field：使用 @nocobase/plugin-field-formula 代替
- @nocobase/plugin-math-formula-field：使用 @nocobase/plugin-field-formula 代替
- @nocobase/plugin-ui-routes-storage：已废弃，前端路由直接在前端扩展即可

完整插件列表请查看：[https://cn.nocobase.com/plugins-cn.html](https://cn.nocobase.com/plugins-cn.html)

## 代码注释

为了提供更好的开发体验，我们为一些特殊的 API 添加了注释：

- `@internal` 通常用于标识代码中的内部实现细节或内部方法，这些方法或功能不是为了公共使用而设计的，而是为了在代码内部使用而存在。
- `@experimental` 用于标识实验性功能或 API。该 API 尚处于开发和测试阶段，可能会发生较大变化，甚至可能在以后的版本中被移除或替换。
- `@deprecated` 用于标识代码中已经过时或不推荐使用的功能、方法或 API。这意味着虽然它们仍然可用，但是可能在将来的版本中被移除，或者已经有更好的替代方案可供使用。

## 许可协议

NocoBase 采取 AGPL-3.0 和 商业许可双重授权，详情请参考 [NocoBase 许可协议](https://cn.nocobase.com/agreement-cn.html)。

## 升级指南

- 升级前一定要先备份数据库！一定要先备份数据库！一定要先备份数据库！
- 可以将整个项目代码也进行备份。

因为 Auth: CAS，Auth: OIDC，Auth: SAML 三个 SSO 插件从开源代码中移除，因此升级将分为两种情况。

### 如果你未使用 SSO 插件

请按照 [常规方法](https://docs-cn.nocobase.com/welcome/getting-started/upgrading) 正常升级。

### 如果你使用了 SSO 插件

请按照以下步骤升级：

#### 1. 升级应用

参考 [NocoBase 升级概述](/welcome/getting-started/upgrading)，将 NocoBase 升级到最新版。

如果你之前启用了 CAS、OIDC、SAML 插件，升级时会有以下提示：

命令行升级时终端提示：

![20240428212151](https://static-docs.nocobase.com/20240428212151.png)

Docker 版界面提示：

![20240428194926](https://static-docs.nocobase.com/20240428194926.png)

#### 2. 删除插件 or 获取插件 1.0 版本？

***如果你选择删除插件后继续升级：***

根据提示删除插件

```bash
# 主应用
yarn pm remove cas oidc saml --force
# 如果是子应用，需要添加 --app 参数
yarn pm remove cas oidc saml --force --app=sub-app1
```

继续升级

```bash
yarn nocobase upgrade
```

***如果你选择插件更新到 1.0 版本***

联系 NocoBase 团队获取插件 1.0 版本，并继续进行升级

#### 3. CAS、OIDC、SAML 插件升级流程

此时，应用界面已经无法访问了，所以我们需要用手动的方式升级

1. 使用账号登录 [service.nocobase.com](service.nocobase.com) 下载最新版插件
2. 将插件解压到指定目录
    - CAS 插件解压至 `./storage/plugins/@nocobase/plugin-auth-cas`
    - OIDC 插件解压至 `./storage/plugins/@nocobase/plugin-auth-oidc`
    - SAML 插件解压至 `./storage/plugins/@nocobase/plugin-auth-saml`
3. 升级应用
    - docker 版本直接重启容器即可
    - 源码或 create-nocobase-app 版本
        - 1. 下载依赖 `yarn install`
        - 2. 执行升级命令 `yarn nocobase upgrade`
        - 2. 重启应用
