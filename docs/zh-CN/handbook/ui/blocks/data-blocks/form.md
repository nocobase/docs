# 表单区块

## 添加区块

<video width="100%" height="440" controls>
      <source src="https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240416215917.mp4" type="video/mp4">
</video>

## 区块设置项

![20240416220148](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240416220148.png)

### 联动规则

![20240416220254](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240416220254.png)

更多内容参考 [联动规则](/handbook/ui/blocks/block-settings/linkage-rule)

### 表单数据模板（仅支持新建表单）

表单数据模板目的是简化数据录入流程，提高录入效率。通过预先定义数据模板，这些模板可以从对应数据表中选择数据作为表单的默认值填充。通过设置数据范围，用户可以确保模板数据适用范围。

![20240408143719](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240408143719.png)

![20240408143812](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240408143812.png)

#### 同步表单字段

- 将当前表单已配置的字段作为模板字段；
- 在后续修改了表单的字段，可再次打开模板配置并点击同步表单按钮，确保表单与模板的一致性；

#### 对于关系字段

- 所有的关系的 fk(外键) 都会过滤掉；

- 普通字段和hasOne 和 hasMany 的关系字段是复制；

- belongsTo 和 belongsToMany 的关系字段是引用，引用可能会变成复制，比如 从 select 变成 sub-form 之后，关系就从引用变成了复制（变成复制之后，所有的字段都是可选的）；

#### 应用场景

场景描述：电商平台需要频繁添加新商品，而这些新商品与现有商品在很多属性上相似或相同。

解决方案：选择一个现有商品作为模板，将其属性信息作为表单数据模板。在新建商品时，用户可以选择应用该模板，从而快速复制模板商品的属性信息到新商品中,提高了新商品录入的效率。

- 创建了商品促销模板

![20240408145855](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240408145855.png)

- 促销商品快捷录入

<video width="100%" height="440" controls>
      <source src="https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240408150250.mp4" type="video/mp4">
</video>

- [编辑区块标题](/handbook/ui/blocks/block-settings/block-title)
- [保存为区块模板](/handbook/ui/blocks/block-settings/block-template)

## 配置字段

### 本表字段

![20240416230739](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240416230739.png)

### 关系表字段

![20240416230811](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240416230811.png)

关系表字段在表单中只读。

<video width="100%" height="440" controls>
      <source src="https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240416231152.mp4" type="video/mp4">
</video>

更多表单字段的配置 可参考 [表单字段](/handbook/ui/fields/generic/form-item)

## 配置操作

- [提交](/handbook/ui/actions/types/submit)
- [保存数据](/handbook/ui/actions/types/save-record)
- 提交至工作流
- 自定义请求
