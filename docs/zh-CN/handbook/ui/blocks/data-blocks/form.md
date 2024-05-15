# 表单区块

## 介绍

表单区块是用于构建数据输入和编辑界面的重要区块。它具有高度的定制性，基于数据模型来使用相应的组件显示所需的字段。通过联动规则，表单区块可以动态展示字段。此外，还可以与工作流程结合，实现自动化流程触发和数据处理，进一步提高工作效率或实现逻辑编排。

## 添加区块

<video width="100%" height="440" controls>
      <source src="https://static-docs.nocobase.com/20240416215917.mp4" type="video/mp4">
</video>

## 区块配置项

![20240416220148](https://static-docs.nocobase.com/20240416220148.png)

### 联动规则

通过联动规则控制表单字段行为。

![20240416220254](https://static-docs.nocobase.com/20240416220254.png)

更多内容参考 [联动规则](/handbook/ui/blocks/block-settings/linkage-rule)

### 表单数据模板（仅支持新增数据的表单）

表单数据模板目的是简化数据录入流程，提高录入效率。通过数据范围筛选出一条或一组数据作为模板，选中的目标数据模板将作为表单的默认值填充。

![20240408143719](https://static-docs.nocobase.com/20240408143719.png)

![20240426212024](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240426212024.png)

1. 筛选出一条或者一组数据，作为模板数据
2. 选择标题字段，用于识别模板数据
3. 勾选模板字段，选中的字段将自动填充到表单

#### 同步表单字段

- 将当前表单区块中已配置的字段自动解析作为模板字段；
- 在后续修改了表单区块字段（如关系字段组件调整），可再次打开模板配置并点击同步表单按钮，确保表单与模板的一致性；

#### 被选为数据模板的记录会过滤掉以下字段的数据：
- 主键
- 外键
- 不允许重复的字段
- 排序字段
- 自动编码字段
- 密码
- 创建人
- 创建日期
- 最后更新人
- 最后更新日期

#### 对于关系字段
- 普通字段和 hasOne 和 hasMany 的关系字段是复制；
- belongsTo 和 belongsToMany 的关系字段是引用，引用可能会变成复制，比如 从 select 变成 sub-form 之后，关系就从引用变成了复制（变成复制之后，所有的字段都是可选的）；

#### 应用场景

场景描述：电商平台需要频繁添加新商品，而这些新商品与现有商品在很多属性上相似或相同。

解决方案：选择一个现有商品作为模板，将其属性信息作为表单数据模板。在新建商品时，用户可以选择应用该模板，从而快速复制模板商品的属性信息到新商品中,提高了新商品录入的效率。

- 创建商品促销模板

![20240408145855](https://static-docs.nocobase.com/20240408145855.png)

- 快捷录入促销商品

<video width="100%" height="440" controls>
      <source src="https://static-docs.nocobase.com/20240408150250.mp4" type="video/mp4">
</video>

- [编辑区块标题](/handbook/ui/blocks/block-settings/block-title)
- [保存为区块模板](/handbook/ui/blocks/block-settings/block-template)

## 配置字段

### 本表字段

![20240416230739](https://static-docs.nocobase.com/20240416230739.png)

### 关系表字段

关系表字段在表单中只读，通常配合关系字段一起使用，可以显示关系数据的多个字段值。

![20240416230811](https://static-docs.nocobase.com/20240416230811.png)

<video width="100%" height="440" controls>
      <source src="https://static-docs.nocobase.com/20240416231152.mp4" type="video/mp4">
</video>

表单字段配置项可参考 [表单字段](/handbook/ui/fields/generic/form-item)

## 配置操作

![20240417115249](https://static-docs.nocobase.com/20240417115249.png)

- [提交](/handbook/ui/actions/types/submit)
- [保存数据](/handbook/ui/actions/types/save-record)
- [自定义请求](/handbook/action-custom-request)
- [触发工作流](/handbook/workflow/manual/triggers/custom-action)
