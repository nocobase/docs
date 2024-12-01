# 模板打印

<PluginInfo commercial="true" name="template-print"></PluginInfo>

## 介绍

通过在文档模板中（支持docx, xlsx, pptx）设置占位符（Placeholders）和逻辑结构，可以动态生成内容丰富的文档。

## 配置说明

打开任意详情区块，触发区块“配置操作”，点击“模板打印”选项：

![2024-12-01-09-01-24-20241201090124](https://static-docs.nocobase.com/2024-12-01-09-01-24-20241201090124.png)

打开模板打印的配置菜单，选择“模板配置”选项：

![2024-12-01-09-04-32-20241201090432](https://static-docs.nocobase.com/2024-12-01-09-04-32-20241201090432.png)

选择“模板添加”选项：

![2024-12-01-09-16-40-20241201091640](https://static-docs.nocobase.com/2024-12-01-09-16-40-20241201091640.png)

此时在模板表单选项可以配置模板的标题和描述，并上传模板文件：、

![2024-12-01-09-19-44-20241201091944](https://static-docs.nocobase.com/2024-12-01-09-19-44-20241201091944.png)

在字段列表选项可以查看当前区块可引用的字段列表，点击“复制”按钮会复制字段引用代码到剪贴板，如果该字段为关联字段，点击“展开按钮”可展开关联字段列表：

![2024-12-01-09-23-45-20241201092344](https://static-docs.nocobase.com/2024-12-01-09-23-45-20241201092344.png)

## 模板语法

### 基本替换

模板中的占位符的格式为 {d.xxx}，如 {d.title} 表示读取数据集中的title字段。

### 访问子对象

如果数据集中包含子对象，可以使用“点标记”来访问子对象，如{d.org.orgname}

### 访问数组

如果数据集中包含数组，可以使用保留关键字 “i” 来读取，表示数组中的第 i 项。

以打印公司所有员工中的第一位员工来举例

数据集：

```json
{
  "staffs": [
    { "firstname": "James", "lastname": "Anderson" },
    { "firstname": "Emily", "lastname": "Roberts" },
    { "firstname": "Michael", "lastname": "Johnson" }
  ]
}
```

模版:

```
第一个员工姓是 {d.employees[i=0].lastname}，名是 {d.employees[0].firstname}
```

渲染结果：
```
第一个员工姓是 Anderson，名是 James
```

### 重复

NocoBase 可以重复文档中的某个部分（例如行、标题、页面等）。

我们无需明确标注重复的起始和结束位置，只需在模板中使用保留关键字 i 和 i+1 设计一个“重复示例”。NocoBase 会自动识别使用第一行（i）作为示例的重复模式，并在渲染结果之前移除第二行（i+1）。

#### 简单数组

例如，我们希望输出一个公司员工数据表格：

**模版**

|staff firstname|staff lastname|
|---|---|
|d.staffs[i].firstname|d.staffs[i].firstname|

**数据**

```json
{
  "staffs": [
    { "firstname": "James", "lastname": "Anderson" },
    { "firstname": "Emily", "lastname": "Roberts" },
    { "firstname": "Michael", "lastname": "Johnson" }
  ]
}
```

**结果**

|staff firstname|staff lastname|
|---|---|
|James|Anderson|
|Emily|Roberts|
|Michael|Johnson|



### 格式化器

##### 条件输出

showBegin / showEnd：根据条件显示文档中从 "showBegin" 到 "showEnd" 之间的指定部分。例如我们有一份合同模板，如果客户类型是 "VIP"，则需要显示一段特殊条款。

示例模版：

```
{d.condTrue:ifEQ('VIP'):showBegin}
特别条款：  
作为我们的 VIP 客户，您将享受额外的优惠和专属服务，包括免费升级、优先支持等。
{d.condTrue:showEnd}
```

当客户类型是 "VIP"时，上面的特殊条款会展示，否则会隐藏。
