# v1.0：2024-04-28

## v1.0 Milestone

After 3 years of development, NocoBase has reached its first major version upgrade, transitioning from version 0.x to 1.0. This marks a significant milestone.

- During the 0.x phase: The core API and features underwent rapid changes, with each new version potentially introducing incompatible changes.
- During the 1.x phase: The core API has stabilized, and NocoBase will focus on adding new plugins, optimizing security, and enhancing performance while maintaining stability.

## New Features

- Theme editor can configure page and modal padding, block spacing, and block corner radius.
- When adding blocks, collections support filtering.
- Relationship records supports sorting.
- Improved interactivity of data visualization.
- Support for adding chart blocks on mobile devices.
- Chart filter blocks support setting field data scope.
- Add more variables, [see details](https://docs.nocobase.com/handbook/ui/variables).
- Blocks from any collections can be added in popups.
- Workflows: "Post-action event" can be triggered by buttons inside association blocks.
- Automatic refresh of data in the parent container when data changes within a popup.
- Significant performance improvements in table blocks.
- Substantial increase in test coverage.

## New Plugins

- Field: Markdown (Vditor)

  - Used to store Markdown and render it using Vditor editor, supports common Markdown syntax and supports uploading images, recordings, etc.It also allows for instant rendering, where what you see is what you get.
- Comments
  - Provides comment collection template and block to add commenting functionality for any collection.

## Full Changelog

<details>
<summary>View the full changelog</summary>

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

## Plugin Changes

The following plugins are no longer provided as open-source version (users who have been using them in production environments, please contact us for upgrades):

- @nocobase/plugin-auth-cas: Authenticates identity via the CAS protocol.
- @nocobase/plugin-auth-odic: Authenticates identity via OIDC (OpenID Connect) protocol.
- @nocobase/plugin-auth-saml: Authenticates identity via SAML 2.0.

The following plugins have been deprecated and will be removed in upcoming versions:

- @nocobase/plugin-audit-logs: Deprecated, temporarily not removed, won't be installed in the new version.
- @nocobase/plugin-snapshot-field: Deprecated, temporarily not removed, won't be installed in the new version.
- @nocobase/plugin-charts: Use @nocobase/plugin-data-visualization instead.
- @nocobase/plugin-excel-formula-field: Use @nocobase/plugin-field-formula instead.
- @nocobase/plugin-math-formula-field: Use @nocobase/plugin-field-formula instead.
- @nocobase/plugin-ui-routes-storage: Deprecated, frontend routes can be extended directly in the frontend.

For the complete list of plugins, please refer to: [https://www.nocobase.com/plugins.html](https://www.nocobase.com/plugins.html)

## Code Comments

To provide a better development experience, we've added comments to some special APIs:

- `@internal`: Typically used to identify internal implementation details or methods that are not designed for public use but exist for internal use within the code.
- `@experimental`: Used to identify experimental features or APIs. These APIs are still in development and testing phases, may undergo significant changes, or even be removed or replaced in future versions.
- `@deprecated`: Used to identify deprecated features, methods, or APIs in the code. Although they are still available, they may be removed in future versions, or there may be better alternative solutions available.

## License Agreement

NocoBase is dual-licensed under AGPL-3.0 and commercial licenses. For details, please refer to the [NocoBase License Agreement](https://cn.nocobase.com/agreement-cn.html).

## Upgrade Guide

- Always backup your database before upgrading! Always backup your database! Always backup your database!
- You can also backup the entire project code.

Since the Auth: CAS, Auth: OIDC, Auth: SAML three SSO plugins are removed from the open-source code, the upgrade will be divided into two cases.

### If you are not using SSO plugins

Please follow the [conventional method](https://docs.nocobase.com/welcome/getting-started/upgrading) for upgrading.

### If you are using SSO plugins

Please follow these steps to upgrade:

#### 1. Upgrade the Application

Refer to [NocoBase Upgrade Overview](/welcome/getting-started/upgrading), and upgrade NocoBase to the latest version.

If you previously enabled CAS, OIDC, SAML plugins, you will see the following prompts during the upgrade:

Command line upgrade terminal prompt:

![20240428212151](https://static-docs.nocobase.com/20240428212151.png)

Docker version interface prompt:

![20240428194926](https://static-docs.nocobase.com/20240428194926.png)

#### 2. Remove Plugins or Obtain Plugin Version 1.0?

***If you choose to remove the plugins and continue upgrading:***

Remove the plugins according to the prompts

```bash
# Main application
yarn pm remove cas oidc saml --force
# If it's a sub-application, add the --app parameter
yarn pm remove cas oidc saml --force --app=sub-app1
```

Continue upgrading

```bash
yarn nocobase upgrade
```

***If you choose to update the plugins to version 1.0***

Contact the NocoBase team to obtain version 1.0 of the plugins and continue with the upgrade.

#### 3. CAS, OIDC, SAML Plugin Upgrade Process

At this point, the application interface is no longer accessible, so we need to upgrade manually.

1. Log in with your account at Business User Services Platform to download the latest version of the plugins.
2. Unzip the plugins to the specified directory
    - CAS plugin unzip to `./storage/plugins/@nocobase/plugin-auth-cas`
    - OIDC plugin unzip to `./storage/plugins/@nocobase/plugin-auth-oidc`
    - SAML plugin unzip to `./storage/plugins/@nocobase/plugin-auth-saml`
3. Upgrade the application
    - For Docker version, simply restart the container
    - For source code or create-nocobase-app version
        1. Download dependencies `yarn install`
        2. Execute upgrade command `yarn nocobase upgrade`
        3. Restart the application
