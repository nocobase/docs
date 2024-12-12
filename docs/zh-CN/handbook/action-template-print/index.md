# 模板打印

<PluginInfo commercial="true" name="template-print"></PluginInfo>

## 介绍

模板打印插件支持通过 Word、Excel 和 PowerPoint 编辑模板（支持 .docx、.xlsx、.pptx 格式），并在模板中设置占位符（Placeholders）与逻辑结构。用户可以基于这些模板动态生成预定格式的文件，包括 .docx、.xlsx、.pptx 和 PDF 文件。

用户可以通过该功能：

- 生成定制化报价单：通过 Excel 模板自动填充数据，生成格式化的报价单。
- 生成并转换发票：根据 Excel 模板生成发票，并将其转换为 PDF 格式供下载。
- 生成合同文档：通过 Word 模板生成自动填充客户信息和条款的合同文件。

## 配置说明

打开任意详情区块，激活“配置操作”菜单，点击“模板打印”选项：

![20241212150539-2024-12-12-15-05-43](https://static-docs.nocobase.com/20241212150539-2024-12-12-15-05-43.png)

激活“模板打印”按钮的配置菜单，选择“模板配置”选项：

![20241212151858-2024-12-12-15-19-01](https://static-docs.nocobase.com/20241212151858-2024-12-12-15-19-01.png)

点击“添加模板”按钮：

![20241212151243-2024-12-12-15-12-46](https://static-docs.nocobase.com/20241212151243-2024-12-12-15-12-46.png)

此时在模板表单选项可以配置模板的名称，并上传模板文件：

![20241212151518-2024-12-12-15-15-21](https://static-docs.nocobase.com/20241212151518-2024-12-12-15-15-21.png)

在字段列表中可以查看当前区块可引用的所有字段，点击“复制”按钮会复制字段引用代码到剪贴板，如果该字段为关联字段，点击字段前的“加号”可展开关联字段列表：

![20241212155629-2024-12-12-15-56-32](https://static-docs.nocobase.com/20241212155629-2024-12-12-15-56-32.png)

将所需要的字段代码逐个复制到模板文档的对应位置后，一份模板文件就制作完成了：

![20241212152743-2024-12-12-15-27-45](https://static-docs.nocobase.com/20241212152743-2024-12-12-15-27-45.png)

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

模板:

```
第一个员工姓是 {d.employees[i=0].lastname}，名是 {d.employees[0].lastname}
```

渲染结果：
```
第一个员工姓是 Anderson，名是 James
```

### 循环

模板打印可以循环输出数据中的数组。无需明确标注循环的起始和结束位置，只需在模板中使用保留关键字 i 和 i+1 设计一个“循环示例”。NocoBase 会自动识别使用第一行（i）作为示例的循环模式，并在渲染结果之前移除第二行（i+1）。

#### 简单数组

例如，我们希望输出一个公司员工数据表格：

**模板**

|staff firstname|staff lastname|
|---|---|
|d.staffs[i].firstname|d.staffs[i].firstname|
|d.staffs[i+1]||

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


#### 嵌套数组

模板打印可以处理嵌套数组（支持无限深度）。下面是一个示例，展示了文档中的一部分内容被循环的情况。

数据

```json
[
  {
    brand: "Toyota",
    models: [{ size: "Prius 2" }, { size: "Prius 3" }]
  },
  {
    brand: "Tesla",
    models: [{ size: "S" }, { size: "X" }]
  }
]
```


![20241203152028-2024-12-03-15-20-29](https://static-docs.nocobase.com/20241203152028-2024-12-03-15-20-29.png)

#### 排序


模板打印允许使用对象的属性，而不是保留字迭代器 i 来遍历数组。这可以用来直接在模板中对数据进行排序。

在这个示例中，所有汽车按“power”属性进行升序排序（目前不支持降序排序）。

数据

```json
{
  "cars" : [
    { "brand" : "Lumeneo" , "power" : 3 },
    { "brand" : "Tesla"   , "power" : 1 },
    { "brand" : "Toyota"  , "power" : 2 }
  ]
}
```

![20241203152358-2024-12-03-15-23-58](https://static-docs.nocobase.com/20241203152358-2024-12-03-15-23-58.png)

### 格式化器

##### 条件输出

showBegin / showEnd：根据条件显示文档中从 "showBegin" 到 "showEnd" 之间的指定部分。例如我们有一份合同模板，如果客户类型是 "VIP"，则需要显示一段特殊条款。

示例模板：

```
{d.condTrue:ifEQ('VIP'):showBegin}
特别条款：  
作为我们的 VIP 客户，您将享受额外的优惠和专属服务，包括免费升级、优先支持等。
{d.condTrue:showEnd}
```

当客户类型是 "VIP"时，上面的特殊条款会展示，否则会隐藏。

## 模板样式

### 常见问题

#### 1. Excel模板文件中的空列和空单元格在渲染结果中消失

如果 Excel 文件中的某个单元格没有内容或样式，渲染时可能会被去除。为确保单元格在渲染过程中不会消失，建议在制作 Excel 文件时，为目标区域填充背景色或在单元格内插入空格，即使该单元格为空也能保持可见。

#### 2. 合并单元格在输出时没有效果

在使用循环功能输出表格时，如果同时使用了合并单元格，可能会导致无法预料的问题。原则上，我们不推荐使用合并单元格。如果需要文本在多个单元格中横向居中，建议使用跨列居中功能。若必须使用合并单元格，请仅限于表格的上方和右侧。若在表格下方或左侧使用合并单元格，渲染数据时合并效果可能会消失。
