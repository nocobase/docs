# 模板打印

<PluginInfo commercial="true" name="action-template-print"></PluginInfo>

## 介绍

模板打印插件支持使用 Word、Excel 和 PowerPoint 编辑模板文件（支持 `.docx`、`.xlsx`、`.pptx` 格式），在模板中设置占位符和逻辑结构，从而动态生成预定格式的文件，如 `.docx`、`.xlsx`、`.pptx` 以及 PDF 文件。可以广泛应用于生成各类业务文档，例如报价单、发票、合同等。

### 主要功能

- **多格式支持**：兼容 Word、Excel 和 PowerPoint 模板，满足不同文档生成需求。
- **动态数据填充**：通过占位符和逻辑结构，自动填充和生成文档内容。
- **灵活的模板管理**：支持添加、编辑、删除和分类管理模板，便于维护和使用。
- **丰富的模板语法**：支持基本替换、数组访问、循环、条件输出等多种模板语法，满足复杂文档生成需求。
- **格式化器支持**：提供条件输出、日期格式化、数字格式化等功能，提升文档的可读性和专业性。
- **高效的输出格式**：支持直接生成 PDF 文件，方便分享和打印。

## 安装

<embed src="./install.md"></embed>

## 配置说明

### 激活模板打印功能

1. **打开详情区块**：
  - 在应用中，进入需要使用模板打印功能的详情区块。

2. **进入配置操作菜单**：
  - 在界面上方，点击“配置操作”菜单。

3. **选择“模板打印”**：
  - 在下拉菜单中，点击“模板打印”选项以激活插件功能。

   ![激活模板打印](https://static-docs.nocobase.com/20241212150539-2024-12-12-15-05-43.png)

### 配置模板

1. **进入模板配置页面**：
  - 在“模板打印”按钮的配置菜单中，选择“模板配置”选项。

   ![模板配置选项](https://static-docs.nocobase.com/20241212151858-2024-12-12-15-19-01.png)

2. **添加新模板**：
  - 点击“添加模板”按钮，进入模板添加页面。

   ![添加模板按钮](https://static-docs.nocobase.com/20241212151243-2024-12-12-15-12-46.png)

3. **填写模板信息**：
  - 在模板表单中，填写模板名称，选择模板类型（Word、Excel、PowerPoint）。
  - 上传相应的模板文件（支持 `.docx`、`.xlsx`、`.pptx` 格式）。

   ![配置模板名称和文件](https://static-docs.nocobase.com/20241212151518-2024-12-12-15-15-21.png)

4. **编辑和保存模板**：
  - 来到“字段列表”页面，复制字段，并填充到模板中
    ![字段列表](https://static-docs.nocobase.com/20250107141010.png)
    ![20241212152743-2024-12-12-15-27-45](https://static-docs.nocobase.com/20241212152743-2024-12-12-15-27-45.png)
  - 填写完毕后，点击“保存”按钮完成模板的添加。

5. **模板管理**：
  - 点击模板列表右侧的“使用”按钮，可以激活模板。
  - 点击“编辑”按钮，可以修改模板名称或替换模板文件。
  - 点击“下载”按钮，可以下载已经配置好的模板文件。
  - 点击“删除”按钮，可以移除不再需要的模板。系统会提示确认操作以避免误删。
  ![模板管理](https://static-docs.nocobase.com/20250107140436.png)

## 基础用法

模板打印插件提供了多种语法，可以在模板中灵活地插入动态数据和逻辑结构。以下是详细的语法说明和使用示例。

### 基本替换

使用 `{d.xxx}` 格式的占位符进行数据替换。例如：

- `{d.title}`：读取数据集中的 `title` 字段。
- `{d.date}`：读取数据集中的 `date` 字段。

**示例**：

模板内容：
```
尊敬的客户，您好！

感谢您购买我们的产品：{d.productName}。
订单编号：{d.orderId}
订单日期：{d.orderDate}

祝您使用愉快！
```

数据集：
```json
{
  "productName": "智能手表",
  "orderId": "A123456789",
  "orderDate": "2025-01-01"
}
```

渲染结果：
```
尊敬的客户，您好！

感谢您购买我们的产品：智能手表。
订单编号：A123456789
订单日期：2025-01-01

祝您使用愉快！
```

### 访问子对象

若数据集中包含子对象，可以通过点符号访问子对象的属性。

**语法**：`{d.parent.child}`

**示例**：

数据集：
```json
{
  "customer": {
    "name": "李雷",
    "contact": {
      "email": "lilei@example.com",
      "phone": "13800138000"
    }
  }
}
```

模板内容：
```
客户姓名：{d.customer.name}
邮箱地址：{d.customer.contact.email}
联系电话：{d.customer.contact.phone}
```

渲染结果：
```
客户姓名：李雷
邮箱地址：lilei@example.com
联系电话：13800138000
```

### 访问数组

若数据集中包含数组，可使用保留关键字 `i` 来访问数组中的元素。

**语法**：`{d.arrayName[i].field}`

**示例**：

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

模板内容：
```
第一个员工姓是 {d.staffs[i=0].lastname}，名是 {d.staffs[i=0].firstname}
```

渲染结果：
```
第一个员工姓是 Anderson，名是 James
```

---

## 循环处理

循环处理用于对数组或对象中的数据进行重复渲染，通过定义循环起始和结束标记来识别需要重复的内容。下面介绍常见的几种情况。

---

### 遍历数组

#### 语法说明

- 使用标签 `{d.array[i].属性}` 定义当前循环项，用 `{d.array[i+1].属性}` 指定下一项以标识循环区域。
- 循环时会自动以第一行（`[i]` 部分）作为模板进行重复；模板中只需写一次循环示例即可。

示例语法格式：
```
{d.数组名[i].属性}
{d.数组名[i+1].属性}
```

#### 示例：简单数组循环

##### 数据
```json
{
  "cars": [
    { "brand": "Toyota", "id": 1 },
    { "brand": "Hyundai", "id": 2 },
    { "brand": "BMW",    "id": 3 },
    { "brand": "Peugeot","id": 4 }
  ]
}
```

##### 模板
```
Carsid
{d.cars[i].brand}{d.cars[i].id}
{d.cars[i+1].brand}
```

##### 结果
```
Carsid
Toyota1
Hyundai2
BMW3
Peugeot4
```

---

#### 示例：嵌套数组循环

适用于数组内嵌套数组的情况，可以无限层级嵌套。

##### 数据
```json
[
  {
    "brand": "Toyota",
    "models": [
      { "size": "Prius 4", "power": 125 },
      { "size": "Prius 5", "power": 139 }
    ]
  },
  {
    "brand": "Kia",
    "models": [
      { "size": "EV4", "power": 450 },
      { "size": "EV6", "power": 500 }
    ]
  }
]
```

##### 模板
```
{d[i].brand}

Models
{d[i].models[i].size} - {d[i].models[i].power}
{d[i].models[i+1].size}

{d[i+1].brand}
```

##### 结果
```
Toyota

Models
Prius 4 - 125
Prius 5 - 139

Kia
```

---

#### 示例：双向循环（高级功能，v4.8.0+）

双向循环可同时在行和列上进行迭代，适用于生成对比表等复杂布局（注：部分格式目前仅 DOCX、HTML、MD 模板官方支持）。

##### 数据
```json
{
  "titles": [
    { "name": "Kia" },
    { "name": "Toyota" },
    { "name": "Hopium" }
  ],
  "cars": [
    { "models": [ "EV3", "Prius 1", "Prototype" ] },
    { "models": [ "EV4", "Prius 2", "" ] },
    { "models": [ "EV6", "Prius 3", "" ] }
  ]
}
```

##### 模板
```
{d.titles[i].name}{d.titles[i+1].name}
{d.cars[i].models[i]}{d.cars[i].models[i+1]}
{d.cars[i+1].models[i]}
```

##### 结果
```
KiaToyotaHopium
EV3Prius 1Prototype
EV4Prius 2
EV6Prius 3
```

---

#### 示例：访问循环迭代器值（v4.0.0+）

在循环中可以直接访问当前迭代的索引值，便于实现特殊格式需求。

##### 模板示例
```
{d[i].cars[i].other.wheels[i].tire.subObject:add(.i):add(..i):add(...i)}
```

> 注：点号的数量用于表示不同层级的索引值（例如，`.i` 表示当前层，`..i` 表示上一层），当前存在逆序问题，详情参阅官方说明。

---

### 遍历对象

#### 语法说明

- 对于对象中的属性，可以使用 `.att` 获取属性名称，使用 `.val` 获取属性值。
- 迭代时，每次会遍历一个属性项。

示例语法格式：
```
{d.对象名[i].att}  // 属性名称
{d.对象名[i].val}  // 属性值
```

#### 示例：对象属性遍历

##### 数据
```json
{
  "myObject": {
    "paul": "10",
    "jack": "20",
    "bob":  "30"
  }
}
```

##### 模板
```
People namePeople age
{d.myObject[i].att}{d.myObject[i].val}
{d.myObject[i+1].att}{d.myObject[i+1].val}
```

##### 结果
```
People namePeople age
paul10
jack20
bob30
```

---

### 排序处理

利用排序功能可以在模板中直接对数组数据进行排序。

#### 语法说明：升序排序

- 在循环标签中使用属性作为排序依据，语法格式为：
  ```
  {d.array[排序属性, i].属性}
  {d.array[排序属性+1, i+1].属性}
  ```
- 若需要多重排序，可在方括号内以逗号分隔多个排序属性。

#### 示例：按数字属性排序

##### 数据
```json
{
  "cars": [
    { "brand": "Ferrari", "power": 3 },
    { "brand": "Peugeot", "power": 1 },
    { "brand": "BMW",     "power": 2 },
    { "brand": "Lexus",   "power": 1 }
  ]
}
```

##### 模板
```
Cars
{d.cars[power, i].brand}
{d.cars[power+1, i+1].brand}
```

##### 结果
```
Cars
Peugeot
Lexus
BMW
Ferrari
```

#### 示例：多属性排序

##### 数据
```json
{
  "cars": [
    { "brand": "Ferrari", "power": 3, "sub": { "size": 1 } },
    { "brand": "Aptera",  "power": 1, "sub": { "size": 20 } },
    { "brand": "Peugeot", "power": 1, "sub": { "size": 20 } },
    { "brand": "BMW",     "power": 2, "sub": { "size": 1 } },
    { "brand": "Kia",     "power": 1, "sub": { "size": 10 } }
  ]
}
```

##### 模板
```
Cars
{d.cars[power, sub.size, i].brand}
{d.cars[power+1, sub.size+1, i+1].brand}
```

##### 结果
```
Cars
Kia
Aptera
Peugeot
BMW
Ferrari
```

---

### 筛选处理

筛选处理用于根据特定条件过滤循环中的数据行。

#### 语法说明：数字筛选

- 在循环标签中增加条件（例如 `age > 19`），语法格式：
  ```
  {d.array[i, 条件].属性}
  ```

#### 示例：数字筛选

##### 数据
```json
[
  { "name": "John",   "age": 20 },
  { "name": "Eva",    "age": 18 },
  { "name": "Bob",    "age": 25 },
  { "name": "Charly", "age": 30 }
]
```

##### 模板
```
People
{d[i, age > 19, age < 30].name}
{d[i+1, age > 19, age < 30].name}
```

##### 结果
```
People
John
Bob
```

---

#### 语法说明：字符串筛选

- 使用单引号标明字符串条件，格式示例：
  ```
  {d.array[i, type='rocket'].name}
  ```

#### 示例：字符串筛选

##### 数据
```json
[
  { "name": "Falcon 9",    "type": "rocket" },
  { "name": "Model S",     "type": "car" },
  { "name": "Model 3",     "type": "car" },
  { "name": "Falcon Heavy","type": "rocket" }
]
```

##### 模板
```
People
{d[i, type='rocket'].name}
{d[i+1, type='rocket'].name}
```

##### 结果
```
People
Falcon 9
Falcon Heavy
```

---

#### 语法说明：筛选前 N 项

- 可利用循环索引 `i` 过滤出前 N 个元素，语法示例：
  ```
  {d.array[i, i < N].属性}
  ```

#### 示例：筛选前两项

##### 数据
```json
[
  { "name": "Falcon 9" },
  { "name": "Model S" },
  { "name": "Model 3" },
  { "name": "Falcon Heavy" }
]
```

##### 模板
```
People
{d[i, i < 2].name}
{d[i+1, i < 2].name}
```

##### 结果
```
People
Falcon 9
Model S
```

---

#### 语法说明：排除最后 N 项

- 通过负索引 `i` 表示倒数项，例如：
  - `{d.array[i=-1].属性}` 获取最后一项
  - `{d.array[i, i!=-1].属性}` 排除最后一项

#### 示例：排除最后一项和最后两项

##### 数据
```json
[
  { "name": "Falcon 9" },
  { "name": "Model S" },
  { "name": "Model 3" },
  { "name": "Falcon Heavy" }
]
```

##### 模板
```
最后一项: {d[i=-1].name}

排除最后一项:
{d[i, i!=-1].name}
{d[i+1, i!=-1].name}

排除最后两项:
{d[i, i<-2].name}
{d[i+1, i<-2].name}
```

##### 结果
```
最后一项: Falcon Heavy

排除最后一项:
Falcon 9
Model S
Model 3

排除最后两项:
Falcon 9
Model S
```

---

#### 语法说明：智能筛选

- 通过智能条件块可根据复杂条件隐藏整行，示例格式：
  ```
  {d.array[i].属性:ifIN('关键字'):drop(row)}
  ```

#### 示例：智能筛选

##### 数据
```json
[
  { "name": "Falcon 9" },
  { "name": "Model S" },
  { "name": "Model 3" },
  { "name": "Falcon Heavy" }
]
```

##### 模板
```
People
{d[i].name}
{d[i].name:ifIN('Falcon'):drop(row)}
{d[i+1].name}
```

##### 结果
```
People
Model S
Model 3
```
（注：模板中含 “Falcon” 的行被智能筛选条件删除。）

---

### 分组处理

#### 语法说明

- 利用自定义迭代器对数据按指定属性进行分组，并使用聚合格式化器（如 `aggSum`）对分组数据求和。
- 语法格式示例：
  ```
  {d.array[分组属性].属性}{d.array[分组属性].数量:aggSum(.分组属性)}
  {d.array[分组属性+1].属性}
  ```

#### 示例：按品牌分组并求和

##### 数据
```json
[
  { "brand": "Lucid",   "qty": 1 },
  { "brand": "Faraday", "qty": 4 },
  { "brand": "Venturi", "qty": 3 },
  { "brand": "Faraday", "qty": 2 },
  { "brand": "Aptera",  "qty": 1 },
  { "brand": "Lucid",   "qty": 10 }
]
```

##### 模板
```
VehiclesQuantity
{d[brand].brand}{d[brand].qty:aggSum(.brand)}
{d[brand+1].brand}
```

##### 结果
```
VehiclesQuantity
Aptera1
Faraday6
Lucid11
Venturi3
```

---

### 去重处理

#### 语法说明

- 通过自定义迭代器，可根据某个属性的值获取唯一（不重复）的项。语法与普通循环类似，但会自动忽略重复的项。

示例格式：
```
{d.array[属性].属性}
{d.array[属性+1].属性}
```

#### 示例：选择唯一数据

##### 数据
```json
[
  { "type": "car",   "brand": "Hyundai" },
  { "type": "plane", "brand": "Airbus" },
  { "type": "plane", "brand": "Boeing" },
  { "type": "car",   "brand": "Toyota" }
]
```

##### 模板
```
Vehicles
{d[type].brand}
{d[type+1].brand}
```

##### 结果
```
Vehicles
Hyundai
Airbus
```

---

## 格式化工具

格式化器用于将原始数据转换成便于阅读的文本。格式化器通过冒号（:）应用于数据，可以链式调用，每个格式化器的输出会作为下一个的输入。有些格式化器支持常量参数或动态参数。

---

### 概览

#### 语法说明
格式化器的基本调用形式为：
```
{d.属性:formatter1:formatter2(...)}
```  
例如，将字符串 `"JOHN"` 转换为 `"John"` 的示例中，先用 `lowerCase` 将所有字母转为小写，再用 `ucFirst` 将首字母大写。

#### 示例
数据：
```json
{
  "name": "JOHN",
  "birthday": "2000-01-31"
}
```
模板：
```
My name is {d.name:lowerCase:ucFirst}. I was born on {d.birthday:formatD(LL)}.
```

#### 结果
渲染后输出：
```
My name is John. I was born on January 31, 2000.
```

---

### 常量参数

#### 语法说明
许多格式化器支持一个或多个常量参数，用逗号分隔，并放在圆括号中以修改输出。例如，`:prepend(myPrefix)` 会在文本前添加 “myPrefix”。  
注意：如果参数中包含逗号或空格，必须用单引号包裹，如 `prepend('my prefix')`。

#### 示例
模板示例（见具体格式化器的用法）。

#### 结果
输出会在文本前添加指定的前缀。

---

### 动态参数

#### 语法说明
格式化器支持动态参数，参数以点号（.）开头且不加引号。  
可使用两种方式：
- **绝对 JSON 路径**：以 `d.` 或 `c.` 开头（根数据或补充数据）。
- **相对 JSON 路径**：以单个点（.）开头，表示从当前父级对象中查找属性。

例如：
```
{d.subObject.qtyB:add(d.subObject.qtyC)}
```
也可写为相对路径：
```
{d.subObject.qtyB:add(.qtyC)}
```
若需访问上一级或更高层数据，可使用多个点：
```
{d.subObject.qtyB:add(..qtyA):add(.qtyC)}
```

#### 示例
数据：
```json
{
  "id": 10,
  "qtyA": 20,
  "subObject": {
    "qtyB": 5,
    "qtyC": 3
  },
  "subArray": [{
    "id": 1000,
    "qtyE": 3
  }]
}
```
模板中使用：
```
{d.subObject.qtyB:add(d.subObject.qtyC)}      // 结果：8 (5 + 3)
{d.subObject.qtyB:add(.qtyC)}                   // 结果：8
{d.subObject.qtyB:add(..qtyA):add(.qtyC)}        // 结果：28 (5 + 20 + 3)
{d.subArray[0].qtyE:add(..subObject.qtyC)}       // 结果：6 (3 + 3)
```

#### 结果
各示例分别得到 8、8、28、6。

> **注意：** 使用自定义迭代器或数组过滤器作为动态参数是不允许的，如：
> ```
> {d.subObject.qtyB:add(..subArray[i].qtyE)}
> {d.subObject.qtyB:add(d.subArray[i].qtyE)}
> ```

---

### 文本格式化

针对文本数据提供多种格式化器，下文依次介绍各格式化器的语法、示例和结果。

#### :lowerCase

##### 语法说明
将所有字母转换为小写。

##### 示例
```
'My Car':lowerCase()   // 输出 "my car"
'my car':lowerCase()   // 输出 "my car"
null:lowerCase()       // 输出 null
1203:lowerCase()       // 输出 1203
```

##### 结果
各示例的输出结果如注释中所示。

---

#### :upperCase

##### 语法说明
将所有字母转换为大写。

##### 示例
```
'My Car':upperCase()   // 输出 "MY CAR"
'my car':upperCase()   // 输出 "MY CAR"
null:upperCase()       // 输出 null
1203:upperCase()       // 输出 1203
```

##### 结果
各示例的输出结果如注释中所示。

---

#### :ucFirst

##### 语法说明
仅将字符串的首字母转换为大写，其余保持不变。

##### 示例
```
'My Car':ucFirst()     // 输出 "My Car"
'my car':ucFirst()     // 输出 "My car"
null:ucFirst()         // 输出 null
undefined:ucFirst()    // 输出 undefined
1203:ucFirst()         // 输出 1203
```

##### 结果
输出结果见注释说明。

---

#### :ucWords

##### 语法说明
将字符串中每个单词的首字母转换为大写。

##### 示例
```
'my car':ucWords()     // 输出 "My Car"
'My cAR':ucWords()     // 输出 "My CAR"
null:ucWords()         // 输出 null
undefined:ucWords()    // 输出 undefined
1203:ucWords()         // 输出 1203
```

##### 结果
输出结果如示例所示。

---

#### :print(message)

##### 语法说明
始终返回指定的消息，无论原数据为何，用作兜底格式化器。  
参数：
- message：要打印的文本

##### 示例
```
'My Car':print('hello!')   // 输出 "hello!"
'my car':print('hello!')   // 输出 "hello!"
null:print('hello!')       // 输出 "hello!"
1203:print('hello!')       // 输出 "hello!"
```

##### 结果
均返回指定的 "hello!" 字符串。

---

#### :printJSON

##### 语法说明
将对象或数组转化为 JSON 格式的字符串输出。

##### 示例
```
[{'id':2,'name':'homer'},{'id':3,'name':'bart'}]:printJSON()
// 输出 "[\n  {\"id\": 2, \"name\": \"homer\"},\n  {\"id\": 3, \"name\": \"bart\"}\n]"
'my car':printJSON()   // 输出 "\"my car\""
```

##### 结果
示例中的输出结果即为转换后的 JSON 字符串。

---

#### :unaccent

##### 语法说明
去除文本中的重音符号，使文本变为无重音格式。

##### 示例
```
'crÃ¨me brulÃ©e':unaccent()   // 输出 "creme brulee"
'CRÃME BRULÃE':unaccent()   // 输出 "CREME BRULEE"
'Ãªtre':unaccent()           // 输出 "etre"
'Ã©Ã¹Ã¯ÃªÃ¨Ã ':unaccent()       // 输出 "euieea"
```

##### 结果
各示例输出均去除了重音符号。

---

#### :convCRLF

##### 语法说明
将文本中的回车换行符（`\r\n` 或 `\n`）转换为文档中的换行标记，适用于 DOCX、PPTX、ODT、ODP 和 ODS 等格式。  
注意：在 `:convCRLF` 格式化器之前使用 `:html` 时，`\n` 会转换为 `<br>` 标签。

##### 示例
```
// 针对 ODT 格式：
'my blue \n car':convCRLF()    // 输出 "my blue <text:line-break/> car"
'my blue \r\n car':convCRLF()    // 输出 "my blue <text:line-break/> car"

// 针对 DOCX 格式：
'my blue \n car':convCRLF()    // 输出 "my blue </w:t><w:br/><w:t> car"
'my blue \r\n car':convCRLF()    // 输出 "my blue </w:t><w:br/><w:t> car"
```

##### 结果
输出结果根据不同文档格式显示换行标记。

---

#### :substr(begin, end, wordMode)

##### 语法说明
对字符串进行切割操作，从 `begin` 索引开始（基于 0），到 `end` 索引前结束。  
可选参数 `wordMode`（布尔值或 `last`）用于控制是否保持单词完整，不在单词中间断开。

##### 示例
```
'foobar':substr(0, 3)            // 输出 "foo"
'foobar':substr(1)               // 输出 "oobar"
'foobar':substr(-2)              // 输出 "ar"
'foobar':substr(2, -1)           // 输出 "oba"
'abcd efg hijklm':substr(0, 11, true)  // 输出 "abcd efg "
'abcd efg hijklm':substr(1, 11, true)  // 输出 "abcd efg "
```

##### 结果
根据参数不同，输出相应的字符串片段。

---

#### :split(delimiter)

##### 语法说明
用指定分隔符 `delimiter` 将字符串拆分为数组。  
参数：
- delimiter：分隔符字符串

##### 示例
```
'abcdefc12':split('c')    // 输出 ["ab", "def", "12"]
1222.1:split('.')         // 输出 ["1222", "1"]
'ab/cd/ef':split('/')      // 输出 ["ab", "cd", "ef"]
```

##### 结果
示例结果为拆分后的数组。

---

#### :padl(targetLength, padString)

##### 语法说明
从字符串左侧填充指定字符，使最终字符串长度达到 `targetLength`。  
若目标长度小于原字符串长度，则返回原字符串。  
参数：
- targetLength：目标总长度
- padString：用于填充的字符串，默认为空格

##### 示例
```
'abc':padl(10)              // 输出 "       abc"
'abc':padl(10, 'foo')       // 输出 "foofoofabc"
'abc':padl(6, '123465')     // 输出 "123abc"
'abc':padl(8, '0')          // 输出 "00000abc"
'abc':padl(1)               // 输出 "abc"
```

##### 结果
各示例输出为填充后的字符串。

---

#### :padr(targetLength, padString)

##### 语法说明
从字符串右侧填充指定字符，使最终字符串长度达到 `targetLength`。  
参数同上。

##### 示例
```
'abc':padr(10)              // 输出 "abc       "
'abc':padr(10, 'foo')       // 输出 "abcfoofoof"
'abc':padr(6, '123465')     // 输出 "abc123"
'abc':padr(8, '0')          // 输出 "abc00000"
'abc':padr(1)               // 输出 "abc"
```

##### 结果
输出为右侧填充后的字符串。

---

#### :ellipsis(maximum)

##### 语法说明
如果文本超过指定字符数，则在末尾添加省略号 “...”。  
参数：
- maximum：允许的最大字符数

##### 示例
```
'abcdef':ellipsis(3)      // 输出 "abc..."
'abcdef':ellipsis(6)      // 输出 "abcdef"
'abcdef':ellipsis(10)     // 输出 "abcdef"
```

##### 结果
示例结果为截断并添加省略号的文本。

---

#### :prepend(textToPrepend)

##### 语法说明
在文本前面添加指定前缀。  
参数：
- textToPrepend：前缀文本

##### 示例
```
'abcdef':prepend('123')     // 输出 "123abcdef"
```

##### 结果
输出为添加前缀后的字符串。

---

#### :append(textToAppend)

##### 语法说明
在文本后面添加指定后缀。  
参数：
- textToAppend：后缀文本

##### 示例
```
'abcdef':append('123')      // 输出 "abcdef123"
```

##### 结果
输出为添加后缀后的字符串。

---

#### :replace(oldText, newText)

##### 语法说明
将文本中所有匹配的 `oldText` 替换为 `newText`。  
参数：
- oldText：要替换的旧文本
- newText：替换成的新文本  
  注意：如果 newText 为 null，则表示删除匹配项。

##### 示例
```
'abcdef abcde':replace('cd', 'OK')    // 输出 "abOKef abOKe"
'abcdef abcde':replace('cd')          // 输出 "abef abe"
'abcdef abcde':replace('cd', null)      // 输出 "abef abe"
'abcdef abcde':replace('cd', 1000)      // 输出 "ab1000ef ab1000e"
```

##### 结果
输出结果为替换后的字符串。

---

#### :len

##### 语法说明
返回字符串或数组的长度。

##### 示例
```
'Hello World':len()     // 输出 11
'':len()                // 输出 0
[1,2,3,4,5]:len()       // 输出 5
[1,'Hello']:len()       // 输出 2
```

##### 结果
输出为对应的长度数值。

---

#### :t

##### 语法说明
根据翻译词典对文本进行翻译。  
示例和结果依据实际翻译词典配置而定。

---

#### :preserveCharRef

##### 语法说明
默认情况下，会移除 XML 中的某些非法字符（如 &、>、< 等），此格式化器可保留字符引用（例如 `&#xa7;` 保持不变），适用于特定的 XML 生成场景。  
示例和结果依据具体使用场景而定。

---

### 数字格式化

#### :formatN(precision)

##### 语法说明
根据本地化设置格式化数字。  
参数：
- precision：小数位数  
  对于 ODS/XLSX 格式，显示的小数位数由文本编辑器决定；其他格式则依赖此参数。

##### 示例
```
// 示例环境：API 选项 { "lang": "en-us" }
'10':formatN()         // 输出 "10.000"
'1000.456':formatN()   // 输出 "1,000.456"
```

##### 结果
数字按照指定精度和本地化格式输出。

---

#### :round(precision)

##### 语法说明
对数字进行四舍五入处理，参数指定小数位数。

##### 示例
```
10.05123:round(2)      // 输出 10.05
1.05:round(1)          // 输出 1.1
```

##### 结果
输出为四舍五入后的数值。

---

#### :add(value)

##### 语法说明
将当前数字与指定值相加。  
参数：
- value：待加数

##### 示例
```
1000.4:add(2)         // 输出 1002.4
'1000.4':add('2')      // 输出 1002.4
```

##### 结果
输出为相加后的数值。

---

#### :sub(value)

##### 语法说明
将当前数字与指定值相减。  
参数：
- value：减数

##### 示例
```
1000.4:sub(2)         // 输出 998.4
'1000.4':sub('2')      // 输出 998.4
```

##### 结果
输出为相减后的数值。

---

#### :mul(value)

##### 语法说明
将当前数字与指定值相乘。  
参数：
- value：乘数

##### 示例
```
1000.4:mul(2)         // 输出 2000.8
'1000.4':mul('2')      // 输出 2000.8
```

##### 结果
输出为相乘后的数值。

---

#### :div(value)

##### 语法说明
将当前数字与指定值相除。  
参数：
- value：除数

##### 示例
```
1000.4:div(2)         // 输出 500.2
'1000.4':div('2')      // 输出 500.2
```

##### 结果
输出为相除后的数值。

---

#### :mod(value)

##### 语法说明
计算当前数字对指定值的模（取余）。  
参数：
- value：模数

##### 示例
```
4:mod(2)              // 输出 0
3:mod(2)              // 输出 1
```

##### 结果
输出为模运算的结果。

---

#### :abs

##### 语法说明
返回数字的绝对值。

##### 示例
```
-10:abs()             // 输出 10
-10.54:abs()          // 输出 10.54
10.54:abs()           // 输出 10.54
'-200':abs()          // 输出 200
```

##### 结果
输出为绝对值。

---

#### :ceil

##### 语法说明
向上取整，即返回大于等于当前数字的最小整数。

##### 示例
```
10.05123:ceil()       // 输出 11
1.05:ceil()           // 输出 2
-1.05:ceil()          // 输出 -1
```

##### 结果
输出为取整后的整数。

---

#### :floor

##### 语法说明
向下取整，即返回小于等于当前数字的最大整数。

##### 示例
```
10.05123:floor()      // 输出 10
1.05:floor()          // 输出 1
-1.05:floor()         // 输出 -2
```

##### 结果
输出为取整后的整数。

---

#### :int

##### 语法说明
将数字转换为整数（不推荐使用）。

##### 示例与结果
依据具体转换情况。

---

#### :toEN

##### 语法说明
将数字转换为英文格式（小数点为 '.'），不推荐使用。

##### 示例与结果
依据具体转换情况。

---

#### :toFixed

##### 语法说明
将数字转换为字符串，仅保留指定小数位数，不推荐使用。

##### 示例与结果
依据具体转换情况。

---

#### :toFR

##### 语法说明
将数字转换为法文格式（小数点为 ','），不推荐使用。

##### 示例与结果
依据具体转换情况。

---

### 货币格式化

#### :formatC(precisionOrFormat, targetCurrency)

##### 语法说明
格式化货币数字，可指定小数位数或特定输出格式。  
参数：
- precisionOrFormat：可选参数，既可以是数字（指定小数位数），也可以是特定格式标识：
  - 整数：改变默认小数精度
  - `'M'`：仅输出主要货币名称
  - `'L'`：输出数字并附带货币符号（默认）
  - `'LL'`：输出数字并附带主要货币名称
- targetCurrency：可选，目标货币代码（大写，如 USD、EUR），会覆盖全局设置

##### 示例
```
// 示例环境：API 选项 { "lang": "en-us", "currency": { "source": "EUR", "target": "USD", "rates": { "EUR": 1, "USD": 2 } } }
'1000.456':formatC()      // 输出 "$2,000.91"
'1000.456':formatC('M')    // 输出 "dollars"
'1':formatC('M')           // 输出 "dollar"
'1000':formatC('L')        // 输出 "$2,000.00"
'1000':formatC('LL')       // 输出 "2,000.00 dollars"

// 法语示例（环境设置不同时）：
'1000.456':formatC()      // 输出 "2 000,91 ..."  
'1000.456':formatC()      // 当源货币与目标货币相同时输出 "1 000,46 €"
```

##### 结果
输出结果依据 API 选项及汇率设置。

---

#### :convCurr(target, source)

##### 语法说明
将数字从一种货币转换为另一种货币。汇率可通过 API 选项传入或全局设置。  
若不指定参数，则自动从 `options.currencySource` 转换到 `options.currencyTarget`。  
参数：
- target：可选，目标货币代码（默认等于 `options.currencyTarget`）
- source：可选，源货币代码（默认等于 `options.currencySource`）

##### 示例
```
// 示例环境：API 选项 { "currency": { "source": "EUR", "target": "USD", "rates": { "EUR": 1, "USD": 2 } } }
10:convCurr()              // 输出 20
1000:convCurr()            // 输出 2000
1000:convCurr('EUR')        // 输出 1000
1000:convCurr('USD')        // 输出 2000
1000:convCurr('USD', 'USD') // 输出 1000
```

##### 结果
输出为转换后的货币数值。

---

### 日期格式化

#### :formatD(patternOut, patternIn)

##### 语法说明
格式化日期，接受输出格式模式 `patternOut`，输入格式模式 `patternIn`（默认为 ISO 8601）。  
可通过 `options.timezone` 和 `options.lang` 调整时区和语言。

##### 示例
```
// 示例环境：API 选项 { "lang": "en-us", "timezone": "Europe/Paris" }
'20160131':formatD('L')      // 输出 "01/31/2016"
'20160131':formatD('LL')     // 输出 "January 31, 2016"
'20160131':formatD('LLLL')   // 输出 "Sunday, January 31, 2016 12:00 AM"
'20160131':formatD('dddd')   // 输出 "Sunday"

// 法语示例：
'2017-05-10T15:57:23.769561+03:00':formatD('LLLL')  // 输出 "mercredi 10 mai 2017 14:57"
'20160131':formatD('LLLL')   // 输出 "dimanche 31 janvier 2016 00:00"
1410715640:formatD('LLLL', 'X') // 输出 "dimanche 14 septembre 2014 19:27"
```

##### 结果
输出为指定格式的日期字符串。

---

#### :addD(amount, unit, patternIn)

##### 语法说明
在日期上添加指定的时间量。支持单位：day、week、month、quarter、year、hour、minute、second、millisecond。  
参数：
- amount：添加的数量
- unit：时间单位（不区分大小写）
- patternIn：可选，输入格式，默认为 ISO8601

##### 示例
```
// 示例环境：API 选项 { "lang": "fr", "timezone": "Europe/Paris" }
'2017-05-10T15:57:23.769561+03:00':addD('3', 'day')    // 输出 "2017-05-13T12:57:23.769Z"
'2017-05-10 15:57:23.769561+03:00':addD('3', 'month')      // 输出 "2017-08-10T12:57:23.769Z"
'20160131':addD('3', 'day')       // 输出 "2016-02-03T00:00:00.000Z"
'20160131':addD('3', 'month')     // 输出 "2016-04-30T00:00:00.000Z"
'31-2016-01':addD('3', 'month', 'DD-YYYY-MM')  // 输出 "2016-04-30T00:00:00.000Z"
```

##### 结果
输出为添加时间后的新日期。

---

#### :subD(amount, unit, patternIn)

##### 语法说明
从日期中减去指定的时间量。参数同 `addD`。

##### 示例
```
// 示例环境：API 选项 { "lang": "fr", "timezone": "Europe/Paris" }
'2017-05-10T15:57:23.769561+03:00':subD('3', 'day')    // 输出 "2017-05-07T12:57:23.769Z"
'2017-05-10 15:57:23.769561+03:00':subD('3', 'month')      // 输出 "2017-02-10T12:57:23.769Z"
'20160131':subD('3', 'day')       // 输出 "2016-01-28T00:00:00.000Z"
'20160131':subD('3', 'month')     // 输出 "2015-10-31T00:00:00.000Z"
'31-2016-01':subD('3', 'month', 'DD-YYYY-MM')  // 输出 "2015-10-31T00:00:00.000Z"
```

##### 结果
输出为减去时间后的新日期。

---

#### :startOfD(unit, patternIn)

##### 语法说明
将日期设置为指定时间单位的起始时刻。  
参数：
- unit：时间单位
- patternIn：可选，输入格式

##### 示例
```
// 示例环境：API 选项 { "lang": "fr", "timezone": "Europe/Paris" }
'2017-05-10T15:57:23.769561+03:00':startOfD('day')    // 输出 "2017-05-10T00:00:00.000Z"
'2017-05-10 15:57:23.769561+03:00':startOfD('month')      // 输出 "2017-05-01T00:00:00.000Z"
'20160131':startOfD('day')       // 输出 "2016-01-31T00:00:00.000Z"
'20160131':startOfD('month')     // 输出 "2016-01-01T00:00:00.000Z"
'31-2016-01':startOfD('month', 'DD-YYYY-MM')  // 输出 "2016-01-01T00:00:00.000Z"
```

##### 结果
输出为起始时刻的日期字符串。

---

#### :endOfD(unit, patternIn)

##### 语法说明
将日期设置为指定时间单位的结束时刻。  
参数同上。

##### 示例
```
// 示例环境：API 选项 { "lang": "fr", "timezone": "Europe/Paris" }
'2017-05-10T15:57:23.769561+03:00':endOfD('day')    // 输出 "2017-05-10T23:59:59.999Z"
'2017-05-10 15:57:23.769561+03:00':endOfD('month')      // 输出 "2017-05-31T23:59:59.999Z"
'20160131':endOfD('day')       // 输出 "2016-01-31T23:59:59.999Z"
'20160131':endOfD('month')     // 输出 "2016-01-31T23:59:59.999Z"
'31-2016-01':endOfD('month', 'DD-YYYY-MM')  // 输出 "2016-01-31T23:59:59.999Z"
```

##### 结果
输出为结束时刻的日期字符串。

---

#### :diffD(toDate, unit, patternFromDate, patternToDate)

##### 语法说明
计算两个日期之间的差值，并以指定单位输出。支持的输出单位包括：
- `day(s)` 或 `d`
- `week(s)` 或 `w`
- `quarter(s)` 或 `Q`
- `month(s)` 或 `M`
- `year(s)` 或 `y`
- `hour(s)` 或 `h`
- `minute(s)` 或 `m`
- `second(s)` 或 `s`
- `millisecond(s)` 或 `ms`（默认单位）

参数：
- toDate：目标日期
- unit：输出单位
- patternFromDate：可选，起始日期格式
- patternToDate：可选，目标日期格式

##### 示例
```
'20101001':diffD('20101201')              // 输出 5270400000
'20101001':diffD('20101201', 'second')      // 输出 5270400
'20101001':diffD('20101201', 's')           // 输出 5270400
'20101001':diffD('20101201', 'm')           // 输出 87840
'20101001':diffD('20101201', 'h')           // 输出 1464
'20101001':diffD('20101201', 'weeks')       // 输出 8
'20101001':diffD('20101201', 'days')        // 输出 61
'2010+10+01':diffD('2010=12=01', 'ms', 'YYYY+MM+DD', 'YYYY=MM=DD')  // 输出 5270400000
```

##### 结果
输出为两个日期之间的时间差，单位按指定转换。

---

#### :convDate(patternIn, patternOut)

##### 语法说明
将日期从一种格式转换为另一种格式。（不推荐使用）  
参数：
- patternIn：输入日期格式
- patternOut：输出日期格式

##### 示例
```
// 示例环境：API 选项 { "lang": "en", "timezone": "Europe/Paris" }
'20160131':convDate('YYYYMMDD', 'L')      // 输出 "01/31/2016"
'20160131':convDate('YYYYMMDD', 'LL')     // 输出 "January 31, 2016"
'20160131':convDate('YYYYMMDD', 'LLLL')   // 输出 "Sunday, January 31, 2016 12:00 AM"
'20160131':convDate('YYYYMMDD', 'dddd')   // 输出 "Sunday"
1410715640:convDate('X', 'LLLL')          // 输出 "Sunday, September 14, 2014 7:27 PM"
// 法语示例：
'20160131':convDate('YYYYMMDD', 'LLLL')   // 输出 "dimanche 31 janvier 2016 00:00"
'20160131':convDate('YYYYMMDD', 'dddd')   // 输出 "dimanche"
```

##### 结果
输出为转换后的日期字符串。

---

#### 日期格式模式
常用日期格式说明（参照 DayJS 说明）：
- `X`：Unix 时间戳（秒），如 1360013296
- `x`：Unix 毫秒时间戳，如 1360013296123
- `YY`：两位年份，如 18
- `YYYY`：四位年份，如 2018
- `M`、`MM`、`MMM`、`MMMM`：月份（数字、两位、缩写、全称）
- `D`、`DD`：日（数字、两位）
- `d`、`dd`、`ddd`、`dddd`：星期（数字、最简、简写、全称）
- `H`、`HH`、`h`、`hh`：小时（24 小时制或 12 小时制）
- `m`、`mm`：分钟
- `s`、`ss`：秒
- `SSS`：毫秒（3 位）
- `Z`、`ZZ`：UTC 偏移，如 +05:00 或 +0500
- `A`、`a`：AM/PM
- `Q`：季度（1-4）
- `Do`：带序号的日期，如 1st, 2nd, …
- 其它格式参见完整文档。  
  此外，还有基于语言的本地化格式：如 `LT`、`LTS`、`L`、`LL`、`LLL`、`LLLL` 等。

---

### 时间间隔格式化

#### :formatI(patternOut, patternIn)

##### 语法说明
格式化时长或间隔，支持的输出格式包括：
- `human+`、`human`（适合人性化显示）
- 以及 `millisecond(s)`、`second(s)`、`minute(s)`、`hour(s)`、`year(s)`、`month(s)`、`week(s)`、`day(s)` 等单位（或其简写）。

参数：
- patternOut：输出格式（例如 `'second'`、`'human+'` 等）
- patternIn：可选，输入单位（例如 `'milliseconds'`、`'s'` 等）

##### 示例
```
// 示例环境：API 选项 { "lang": "en", "timezone": "Europe/Paris" }
2000:formatI('second')       // 输出 2
2000:formatI('seconds')      // 输出 2
2000:formatI('s')            // 输出 2
3600000:formatI('minute')    // 输出 60
3600000:formatI('hour')      // 输出 1
2419200000:formatI('days')   // 输出 28

// 法语示例：
2000:formatI('human')        // 输出 "quelques secondes"
2000:formatI('human+')       // 输出 "dans quelques secondes"
-2000:formatI('human+')      // 输出 "il y a quelques secondes"

// 英语示例：
2000:formatI('human')        // 输出 "a few seconds"
2000:formatI('human+')       // 输出 "in a few seconds"
-2000:formatI('human+')      // 输出 "a few seconds ago"

// 单位转换示例：
60:formatI('ms', 'minute')   // 输出 3600000
4:formatI('ms', 'weeks')      // 输出 2419200000
'P1M':formatI('ms')          // 输出 2628000000
'P1Y2M3DT4H5M6S':formatI('hour')  // 输出 10296.085
```

##### 结果
输出结果根据输入值和单位转换显示为相应的时长或间隔。

---

### 数组格式化

#### :arrayJoin(separator, index, count)

##### 语法说明
将一个字符串或数字数组拼接为一个字符串。  
参数：
- separator：分隔符（默认为逗号 `,`）
- index：可选，从该索引开始拼接
- count：可选，从 index 开始拼接的项数（可以为负数，表示从末尾开始计数）

##### 示例
```
['homer','bart','lisa']:arrayJoin()              // 输出 "homer, bart, lisa"
['homer','bart','lisa']:arrayJoin(' | ')          // 输出 "homer | bart | lisa"
['homer','bart','lisa']:arrayJoin('')              // 输出 "homerbartlisa"
[10,50]:arrayJoin()                               // 输出 "10, 50"
[]:arrayJoin()                                    // 输出 ""
null:arrayJoin()                                  // 输出 null
{}:arrayJoin()                                    // 输出 {}
20:arrayJoin()                                    // 输出 20
undefined:arrayJoin()                             // 输出 undefined
['homer','bart','lisa']:arrayJoin('', 1)          // 输出 "bartlisa"
['homer','bart','lisa']:arrayJoin('', 1, 1)       // 输出 "bart"
['homer','bart','lisa']:arrayJoin('', 1, 2)       // 输出 "bartlisa"
['homer','bart','lisa']:arrayJoin('', 0, -1)      // 输出 "homerbart"
```

##### 结果
输出为根据参数拼接后的字符串。

---

#### :arrayMap(objSeparator, attSeparator, attributes)

##### 语法说明
将对象数组转化为字符串，不处理嵌套对象或数组。  
参数：
- objSeparator：对象间的分隔符（默认为 `, `）
- attSeparator：对象属性间的分隔符（默认为 `:`）
- attributes：可选，指定要输出的对象属性列表

##### 示例
```
[{'id':2,'name':'homer'},{'id':3,'name':'bart'}]:arrayMap()
// 输出 "2:homer, 3:bart"

[{'id':2,'name':'homer'},{'id':3,'name':'bart'}]:arrayMap(' - ')
// 输出 "2:homer - 3:bart"

[{'id':2,'name':'homer'},{'id':3,'name':'bart'}]:arrayMap(' ; ', '|')
// 输出 "2|homer ; 3|bart"

[{'id':2,'name':'homer'},{'id':3,'name':'bart'}]:arrayMap(' ; ', '|', 'id')
// 输出 "2 ; 3"

[{'id':2,'name':'homer','obj':{'id':20},'arr':[12,23]}]:arrayMap()
// 输出 "2:homer"

['homer','bart','lisa']:arrayMap()    // 输出 "homer, bart, lisa"
[10,50]:arrayMap()                    // 输出 "10, 50"
[]:arrayMap()                         // 输出 ""
null:arrayMap()                       // 输出 null
{}:arrayMap()                         // 输出 {}
20:arrayMap()                         // 输出 20
undefined:arrayMap()                  // 输出 undefined
```

##### 结果
输出为拼接后的字符串，忽略对象中嵌套的内容。

---

#### :count(start)

##### 语法说明
统计数组中的行号，并输出当前行号。  
例如：
```
{d[i].id:count()}
```  
不论 `id` 的值如何，均输出当前行计数。  
自 v4.0.0 起，该格式化器内部已替换为 `:cumCount`。

参数：
- start：可选，计数的起始值

##### 示例与结果
具体使用时，输出的行号将依照数组元素顺序显示。

---

## 条件判断

条件判断允许根据数据的值来动态控制文档中内容的显示或隐藏。提供了三种主要的条件写法：

- **内联条件**：直接输出文本（或替换为其他文本）。
- **条件块**：对文档中一段区域进行显示或隐藏，适用于多个 标签、段落、表格等。
- **智能条件**：通过一条标签直接移除或保留目标元素（如行、段落、图片等），语法更简洁。

所有条件均以一个逻辑判断格式器开始（例如 ifEQ、ifGT 等），后续跟随执行动作的格式器（如 show、elseShow、drop、keep 等）。

---

### 概览

条件判断中支持的逻辑操作符及动作格式器包括：

- **逻辑操作符**
  - **ifEQ(value)**：判断数据是否等于指定值
  - **ifNE(value)**：判断数据是否不等于指定值
  - **ifGT(value)**：判断数据是否大于指定值
  - **ifGTE(value)**：判断数据是否大于或等于指定值
  - **ifLT(value)**：判断数据是否小于指定值
  - **ifLTE(value)**：判断数据是否小于或等于指定值
  - **ifIN(value)**：判断数据是否包含在数组或字符串中
  - **ifNIN(value)**：判断数据是否不包含在数组或字符串中
  - **ifEM()**：判断数据是否为空（如 null、undefined、空字符串、空数组或空对象）
  - **ifNEM()**：判断数据是否非空
  - **ifTE(type)**：判断数据的类型是否等于指定类型（例如 "string"、"number"、"boolean" 等）
  - **and(value)**：逻辑“与”，用于连接多个条件
  - **or(value)**：逻辑“或”，用于连接多个条件

- **动作格式器**
  - **:show(text) / :elseShow(text)**：用于内联条件，直接输出指定文本
  - **:hideBegin / :hideEnd** 与 **:showBegin / :showEnd**：用于条件块，隐藏或显示文档块
  - **:drop(element) / :keep(element)**：用于智能条件，移除或保留指定文档元素

接下来分别介绍各个用法的详细语法、示例与结果。

---

### 内联条件

#### :show(text) / :elseShow(text)

##### 语法
```
{数据:条件:show(文本)}
{数据:条件:show(文本):elseShow(替代文本)}
```

##### 示例
假设数据为：
```json
{
  "val2": 2,
  "val5": 5
}
```
模板如下：
```
val2 = {d.val2:ifGT(3):show('high')}
val2 = {d.val2:ifGT(3):show('high'):elseShow('low')}
val5 = {d.val5:ifGT(3):show('high')}
```

##### 结果
```
val2 = 2
val2 = low
val5 = high
```

---

#### Switch Case（多重条件判断）

##### 语法
使用连续的条件格式器构建类似 switch-case 的结构：
```
{数据:ifEQ(值1):show(结果1):ifEQ(值2):show(结果2):elseShow(默认结果)}
```
或用 or 操作符实现：
```
{数据:ifEQ(值1):show(结果1):or(数据):ifEQ(值2):show(结果2):elseShow(默认结果)}
```

##### 示例
数据：
```json
{
  "val1": 1,
  "val2": 2,
  "val3": 3
}
```
模板：
```
val1 = {d.val1:ifEQ(1):show(A):ifEQ(2):show(B):elseShow(C)}
val2 = {d.val2:ifEQ(1):show(A):ifEQ(2):show(B):elseShow(C)}
val3 = {d.val3:ifEQ(1):show(A):ifEQ(2):show(B):elseShow(C)}
```

##### 结果
```
val1 = A
val2 = B
val3 = C
```

---

#### 多变量条件判断

##### 语法
使用逻辑操作符 and/or 可以测试多个变量：
```
{数据1:ifEQ(条件1):and(.数据2):ifEQ(条件2):show(结果):elseShow(替代结果)}
{数据1:ifEQ(条件1):or(.数据2):ifEQ(条件2):show(结果):elseShow(替代结果)}
```

##### 示例
数据：
```json
{
  "val2": 2,
  "val5": 5
}
```
模板：
```
and = {d.val2:ifEQ(1):and(.val5):ifEQ(5):show(OK):elseShow(KO)}
or = {d.val2:ifEQ(1):or(.val5):ifEQ(5):show(OK):elseShow(KO)}
```

##### 结果
```
and = KO
or = OK
```

---

### 逻辑操作符及格式器

以下各节中介绍的格式器均采用内联条件形式，语法格式为：
```
{数据:格式器(参数):show(文本):elseShow(替代文本)}
```

#### :and(value)

##### 语法
```
{数据:ifEQ(值):and(新的数据或条件):ifGT(其他值):show(文本):elseShow(替代文本)}
```

##### 示例
```
{d.car:ifEQ('delorean'):and(.speed):ifGT(80):show('TravelInTime'):elseShow('StayHere')}
```

##### 结果
如果 `d.car` 等于 `'delorean'` 且 `d.speed` 大于 80，则输出 `TravelInTime`；否则输出 `StayHere`。

---

#### :or(value)

##### 语法
```
{数据:ifEQ(值):or(新的数据或条件):ifGT(其他值):show(文本):elseShow(替代文本)}
```

##### 示例
```
{d.car:ifEQ('delorean'):or(.speed):ifGT(80):show('TravelInTime'):elseShow('StayHere')}
```

##### 结果
如果 `d.car` 等于 `'delorean'` 或 `d.speed` 大于 80，则输出 `TravelInTime`；否则输出 `StayHere`。

---

#### :ifEM()

##### 语法
```
{数据:ifEM():show(文本):elseShow(替代文本)}
```

##### 示例
```
null:ifEM():show('Result true'):elseShow('Result false')
[]:ifEM():show('Result true'):elseShow('Result false')
```

##### 结果
对于 `null` 或空数组，输出 `Result true`；否则输出 `Result false`。

---

#### :ifNEM()

##### 语法
```
{数据:ifNEM():show(文本):elseShow(替代文本)}
```

##### 示例
```
0:ifNEM():show('Result true'):elseShow('Result false')
'homer':ifNEM():show('Result true'):elseShow('Result false')
```

##### 结果
对于非空数据（如数字 0 或字符串 'homer'），输出 `Result true`；空数据则输出 `Result false`。

---

#### :ifEQ(value)

##### 语法
```
{数据:ifEQ(值):show(文本):elseShow(替代文本)}
```

##### 示例
```
100:ifEQ(100):show('Result true'):elseShow('Result false')
'homer':ifEQ('homer'):show('Result true'):elseShow('Result false')
```

##### 结果
若数据等于指定值则输出 `Result true`，否则输出 `Result false`。

---

#### :ifNE(value)

##### 语法
```
{数据:ifNE(值):show(文本):elseShow(替代文本)}
```

##### 示例
```
100:ifNE(100):show('Result true'):elseShow('Result false')
100:ifNE(101):show('Result true'):elseShow('Result false')
```

##### 结果
第一个例子输出 `Result false`，第二个例子输出 `Result true`。

---

#### :ifGT(value)

##### 语法
```
{数据:ifGT(值):show(文本):elseShow(替代文本)}
```

##### 示例
```
1234:ifGT(1):show('Result true'):elseShow('Result false')
-23:ifGT(19):show('Result true'):elseShow('Result false')
```

##### 结果
第一个例子输出 `Result true`，第二个例子输出 `Result false`。

---

#### :ifGTE(value)

##### 语法
```
{数据:ifGTE(值):show(文本):elseShow(替代文本)}
```

##### 示例
```
50:ifGTE(-29):show('Result true'):elseShow('Result false')
1:ifGTE(768):show('Result true'):elseShow('Result false')
```

##### 结果
第一个例子输出 `Result true`，第二个例子输出 `Result false`。

---

#### :ifLT(value)

##### 语法
```
{数据:ifLT(值):show(文本):elseShow(替代文本)}
```

##### 示例
```
-23:ifLT(19):show('Result true'):elseShow('Result false')
1290:ifLT(768):show('Result true'):elseShow('Result false')
```

##### 结果
第一个例子输出 `Result true`，第二个例子输出 `Result false`。

---

#### :ifLTE(value)

##### 语法
```
{数据:ifLTE(值):show(文本):elseShow(替代文本)}
```

##### 示例
```
5:ifLTE(5):show('Result true'):elseShow('Result false')
1290:ifLTE(768):show('Result true'):elseShow('Result false')
```

##### 结果
第一个例子输出 `Result true`，第二个例子输出 `Result false`。

---

#### :ifIN(value)

##### 语法
```
{数据:ifIN(值):show(文本):elseShow(替代文本)}
```

##### 示例
```
'car is broken':ifIN('is'):show('Result true'):elseShow('Result false')
[1,2,'toto']:ifIN(2):show('Result true'):elseShow('Result false')
```

##### 结果
两个例子均输出 `Result true`（因为字符串中包含 'is'，数组中包含 2）。

---

#### :ifNIN(value)

##### 语法
```
{数据:ifNIN(值):show(文本):elseShow(替代文本)}
```

##### 示例
```
'car is broken':ifNIN('is'):show('Result true'):elseShow('Result false')
[1,2,'toto']:ifNIN(2):show('Result true'):elseShow('Result false')
```

##### 结果
第一个例子输出 `Result false`（因为字符串中包含 'is'），第二个例子输出 `Result false`（因为数组中包含 2）。

---

#### :ifTE(type)

##### 语法
```
{数据:ifTE('类型'):show(文本):elseShow(替代文本)}
```

##### 示例
```
'homer':ifTE('string'):show('Result true'):elseShow('Result false')
10.5:ifTE('number'):show('Result true'):elseShow('Result false')
```

##### 结果
第一个例子输出 `Result true`（'homer' 为字符串），第二个例子输出 `Result true`（10.5 为数字）。

---

### 条件块

条件块用于对文档中一段区域进行显示或隐藏，常用于包裹多个标签或整段文本。

#### :showBegin / :showEnd

##### 语法
```
{数据:ifEQ(条件):showBegin}
文档块内容
{数据:showEnd}
```

##### 示例
数据：
```json
{
  "toBuy": true
}
```
模板：
```
Banana{d.toBuy:ifEQ(true):showBegin}
Apple
Pineapple
{d.toBuy:showEnd}Grapes
```

##### 结果
条件成立时，中间的内容显示：
```
Banana
Apple
Pineapple
Grapes
```

---

#### :hideBegin / :hideEnd

##### 语法
```
{数据:ifEQ(条件):hideBegin}
文档块内容
{数据:hideEnd}
```

##### 示例
数据：
```json
{
  "toBuy": true
}
```
模板：
```
Banana{d.toBuy:ifEQ(true):hideBegin}
Apple
Pineapple
{d.toBuy:hideEnd}Grapes
```

##### 结果
条件成立时，中间的内容被隐藏，输出：
```
Banana
Grapes
```

---

### 智能条件

智能条件以更简洁的方式直接移除或保留目标元素，不在生成的报告中输出任何标签内容。

#### :drop(element) / :keep(element)

##### 语法
```
{数据:if条件:drop(元素)}
{数据:if条件:keep(元素)}
```
其中元素可以为：
- `row`：表格行
- `p`：段落
- `img`：图片
- `table`：表格
- `chart`：图表
- `shape`：形状
- `slide`：幻灯片（仅限 ODP）
- `item`：列表项（仅限 ODP/ODT）
- `sheet`：工作表（仅限 ODS）

对于 `row` 和 `p` 可传入第二参数，表示同时操作后续的 N 个行或段落。例如：
```
{d.text:ifEM:drop(p, 3)}
```
表示若 `d.text` 为空，则删除当前段落及其后 2 个段落。

##### 示例1：删除表格中包含 “Falcon” 的行

数据：
```json
[
  { "name": "Falcon 9" },
  { "name": "Model S" },
  { "name": "Model 3" },
  { "name": "Falcon Heavy" }
]
```
模板：
```
Planes
{d[i].name}
{d[i].name:ifIN('Falcon'):drop(row)}
{d[i+1].name}
```

##### 结果1
输出结果中，包含 “Falcon” 的行被删除，显示：
```
Planes
Model S

Model 3
```

##### 示例2：当数组长度小于 6 时删除整个表格

数据：
```json
[
  { "name": "Bob" }
]
```
模板：
```
Planes {d:len:ifLT(6):drop(table)}
{d[i].name}
{d[i+1].name}
```

##### 结果2
若数组长度小于 6，则整个表格被删除，不显示任何内容。

---

---

## 计算

### 简单数学运算

#### :add(value)
##### 语法
```
{数据: add(值)}
```
##### 示例
假设数据为：
```json
{
  "num": 10
}
```
模板：
```
{d.num:add(5)}
```
##### 结果
输出 15，即 10 + 5 的结果。

---

#### :mul(value)
##### 语法
```
{数据: mul(值)}
```
##### 示例
数据：
```json
{
  "num": 10
}
```
模板：
```
{d.num:mul(3)}
```
##### 结果
输出 30，即 10 × 3 的结果。

---

#### :sub(value)
##### 语法
```
{数据: sub(值)}
```
##### 示例
数据：
```json
{
  "num": 10
}
```
模板：
```
{d.num:sub(4)}
```
##### 结果
输出 6，即 10 - 4 的结果。

---

#### :div(value)
##### 语法
```
{数据: div(值)}
```
##### 示例
数据：
```json
{
  "num": 10
}
```
模板：
```
{d.num:div(2)}
```
##### 结果
输出 5，即 10 / 2 的结果。

---

#### :mod(value)
##### 语法
```
{数据: mod(值)}
```
##### 示例
数据：
```json
{
  "num": 10
}
```
模板：
```
{d.num:mod(3)}
```
##### 结果
输出 1，即 10 除以 3 的余数。

---

#### :abs()
##### 语法
```
{数据: abs()}
```
##### 示例
数据：
```json
{
  "value": -23
}
```
模板：
```
{d.value:abs}
```
##### 结果
输出 23，即取绝对值后的结果。

---

#### 数学公式运算
支持在括号内书写简单的数学表达式（仅允许运算符 +, -, *, /，不允许使用括号嵌套），运算顺序遵循乘除优先于加减。

##### 语法
```
{数据: add(.other + .vat * d.sub.price - 10 / 2)}
```
##### 示例
数据：
```json
{
  "val": 1,
  "other": 2,
  "vat": 0.5,
  "sub": {
    "price": 100
  }
}
```
模板：
```
{d.val:add(.other + .vat * d.sub.price - 10 / 2)}
```
##### 结果
输出 48。

---

### 聚合计算

聚合计算用于处理数据集合，返回单一的聚合结果，也支持基于分组（partition）的独立计算。

#### :aggSum(partitionBy)
##### 语法
- 聚合全部数据：
  ```
  {数据数组.字段:aggSum}
  ```
- 带分组：
  ```
  {数据数组.字段:aggSum(.分组字段)}
  ```
##### 示例
数据：
```json
{
  "cars": [
    { "brand": "Lexus",   "qty": 1 },
    { "brand": "Faraday", "qty": 4 },
    { "brand": "Venturi", "qty": 3 },
    { "brand": "Faraday", "qty": 2 },
    { "brand": "Aptera",  "qty": 1 },
    { "brand": "Venturi", "qty": 10 }
  ]
}
```
模板：
```
Total: {d.cars[].qty:aggSum}
Brand Total: {d.cars[].qty:aggSum(.brand)}
```
##### 结果
- 全部数量总和输出 21。
- 按品牌分组时，示例中输出：Lexus → 1；Faraday → 6；Venturi → 13；Aptera → 1。

---

#### :aggAvg(partitionBy)
##### 语法
- 聚合全部数据：
  ```
  {数据数组.字段:aggAvg}
  ```
- 带分组：
  ```
  {数据数组.字段:aggAvg(.分组字段)}
  ```
##### 示例
使用上述 `cars` 数据，模板：
```
Average: {d.cars[].qty:aggAvg}
```
##### 结果
输出平均值 3.5（计算：(1+4+3+2+1+10)/6 = 21/6）。

---

#### :aggMin(partitionBy)
##### 语法
```
{数据数组.字段:aggMin}
```
或带分组：
```
{数据数组.字段:aggMin(.分组字段)}
```
##### 示例
模板：
```
Minimum: {d.cars[].qty:aggMin}
```
##### 结果
输出最小值 1。

---

#### :aggMax(partitionBy)
##### 语法
```
{数据数组.字段:aggMax}
```
或带分组：
```
{数据数组.字段:aggMax(.分组字段)}
```
##### 示例
模板：
```
Maximum: {d.cars[].qty:aggMax}
```
##### 结果
输出最大值 10。

---

#### :aggCount(partitionBy)
##### 语法
```
{数据数组.任意字段:aggCount}
```
##### 示例
模板：
```
Count: {d.cars[].qty:aggCount}
```
##### 结果
输出计数 6（即数据项总数，不依赖字段值）。

---

#### :aggCountD(partitionBy)
##### 语法
```
{数据数组.字段:aggCountD}
```
##### 示例
模板：
```
Distinct Brands: {d.cars[].brand:aggCountD}
```
##### 结果
输出不同品牌数量 4。

---

#### :aggStr(separator, partitionBy)
##### 语法
```
{数据数组.字段:aggStr(分隔符)}
```
其中默认分隔符为 ", "。
##### 示例
模板：
```
Cars List: {d.cars[].brand:aggStr}
Cars List with custom separator: {d.cars[].brand:aggStr(' | ')}
```
##### 结果
- 第一个例子输出 "Lexus, Faraday, Venturi, Faraday, Aptera, Venturi"。
- 第二个例子输出 "Lexus | Faraday | Venturi | Faraday | Aptera | Venturi"。

---

#### :aggStrD(separator, partitionBy)
##### 语法
```
{数据数组.字段:aggStrD(分隔符)}
```
##### 示例
模板：
```
Distinct Cars List: {d.cars[].brand:aggStrD}
Distinct Cars List with custom separator: {d.cars[].brand:aggStrD(' | ')}
```
##### 结果
- 第一个例子输出 "Lexus, Faraday, Aptera, Venturi"（去重后）。
- 第二个例子输出 "Lexus | Faraday | Aptera | Venturi"。

---

#### :cumSum(partitionBy)
##### 语法
```
{数据数组.字段:cumSum}
```
##### 示例
数据（数组形式）：
```json
[
  { "brand": "Lexus",   "qty": 1 },
  { "brand": "Faraday", "qty": 4 },
  { "brand": "Venturi", "qty": 3 },
  { "brand": "Faraday", "qty": 2 },
  { "brand": "Aptera",  "qty": 1 },
  { "brand": "Venturi", "qty": 10 }
]
```
模板：
```
{d[i].brand}{d[i].qty:cumSum}
```
##### 结果
依次输出累计和，如：  
Lexus 1  
Faraday 5  
Venturi 8  
Faraday 10  
Aptera 11  
Venturi 21

---

#### :cumCount(partitionBy)
##### 语法
```
{数据数组.任意字段:cumCount}
```
##### 示例
模板：
```
{d[i].brand}{d[i].qty:cumCount}
```
##### 结果
为列表中的每一行分配一个顺序号，依次输出累计计数。例如，对于连续出现的记录，其计数依次为 1、2、3…（具体数值依数据排列而定）。

---

#### :cumCountD(partitionBy)
##### 语法
```
{数据数组.字段:cumCountD}
```
##### 示例
模板：
```
{d[i].brand}{d[i].brand:cumCountD}
```
##### 结果
输出去重后的累计计数，例如：  
若数据中 "Lexus" 第一次出现计为 1，"Faraday" 第二次出现仍为 1 或根据上下文累计不同则依照分组规则。

---

#### :aggSum :cumSum（组合使用）
##### 语法
```
{数据数组.嵌套字段:aggSum:cumSum}
```
##### 示例
数据：
```json
[
  { 
    "country": "France",
    "cities": [
      { "cars": 100 },
      { "cars": 50 },
      { "cars": 1 }
    ]
  },
  { 
    "country": "Italy",
    "cities": [
      { "cars": 20 },
      { "cars": 2 }
    ]
  }
]
```
模板：
```
{d[i].country}{d[i].cities[].cars:aggSum:cumSum}
```
##### 结果
输出累计和，例如：  
France 累计 151  
Italy 累计 173

---

### 存储与转换

此部分功能用于在计算过程中存储中间结果或修改/生成新的 JSON 数据结构。原文中给出了较多示例，以下只挑选几个常见用法进行说明。

#### :set(absolutePath) —— 存储值
##### 语法
```
{数据:aggSum:set(c.变量名)}
```
##### 示例
数据：
```json
{
  "cars": [
    { "qty": 1 },
    { "qty": 4 }
  ]
}
```
模板：
```
{d.cars[].qty:aggSum:set(c.mySum)}
打印存储的值: {c.mySum}
```
##### 结果
输出 "打印存储的值: 5"（即 1+4 的和）。

---

#### :set(.relativePath) —— 修改 JSON 对象
##### 语法
```
{数据:append('文本'):set(.新属性)}
```
##### 示例
数据：
```json
{
  "cars": [
    { "qty": 1 },
    { "qty": 4 }
  ]
}
```
模板：
```
{d.cars[].qty:append(' tyres'):set(.newInfo)}
JSON输出: {d:printJSON}
```
##### 结果
生成后的 JSON 中，每个对象增加属性 "newInfo"（例如第一个对象为 `{"qty":1, "newInfo": "1 tyres"}`）。

---

#### :set(absolutePath[]) —— 转换/生成新 JSON
##### 语法
```
{数据数组: set(c.新数组[])}
```
##### 示例
数据：
```json
{
  "myArray": [
    { "country": "A", "city": "1A" },
    { "country": "A", "city": "2A" },
    { "country": "B", "city": "1B" }
  ]
}
```
模板：
```
{d.myArray[]:set(c.new[])}
JSON生成: {c:printJSON}
```
##### 结果
输出新的 JSON 结构：
```json
{
  "new": [
    { "country": "A", "city": "1A" },
    { "country": "A", "city": "2A" },
    { "country": "B", "city": "1B" }
  ]
}
```

---

#### 其他存储与转换用法
- **选择性克隆数组**：例如仅提取部分属性生成新数组。
- **数组合并**：通过多次调用 `:set` 将多个数组合并为一个新数组。
- **基于条件的合并与分组**：可在 `:set` 中使用搜索表达式，实现类似 SQL 的 inner join 或分组嵌套。

---


## 高级功能

### 分页

#### 页码更新

##### 语法
在 Office 软件中插入即可。

##### 示例
在 Microsoft Word 中：
- 使用 “插入 → 页码” 功能  
  在 LibreOffice 中：
- 使用 “插入 → 字段 → 页码” 功能

##### 结果
生成的报告中，各页页码会自动更新。

---

#### 目录生成

##### 语法
在 Office 软件中插入即可。

##### 示例
在 Microsoft Word 中：
- 使用 “插入 → 索引和目录 → 目录” 功能  
  在 LibreOffice 中：
- 使用 “插入 → 目录和索引 → 目录、索引或参考书目” 功能

##### 结果
生成的报告目录会根据文档内容自动更新。

---

#### 表头重复

##### 语法
在 Office 软件中插入即可。

##### 示例
在 Microsoft Word 中：
- 右键点击表头 → 表格属性 → 勾选“在每页顶部重复作为标题行”  
  在 LibreOffice 中：
- 右键点击表头 → 表格属性 → 文本流选项卡 → 勾选“重复标题”

##### 结果
当表格跨页时，表头自动在每页顶部重复显示。

---

### 图片处理

#### 动态图片插入

##### 语法
在图片的替换标签中直接引用数据字段，例如：
```
{d.image}
```

##### 示例
- 模板中预先放置一个临时图片，并在其“替代文本”中写入 `{d.image}`
- JSON 数据示例：
  ```json
  {
    "image": "http://link.to/your/picture.jpg"
  }
  ```

##### 结果
渲染时，会将临时图片替换为数据中指定的图片。

---

#### 图片尺寸调整（:imageFit）

##### 语法
```
{d.image:imageFit(参数)}
```
- 参数可为：
  - `fillWidth`（默认）：按宽度填充，不改变长宽比；
  - `contain`：保持长宽比，完全显示图片；
  - `fill`：拉伸图片以填满容器。

##### 示例
```
{d.image:imageFit(contain)}
{d.image:imageFit(fill)}
```

##### 结果
- 第一例中图片按比例缩放，确保完整显示；
- 第二例中图片可能被拉伸以完全填充容器。

---

#### ODT 中的简单图片替换

##### 语法
与动态图片插入类似，标签写在图片的替代文本中：
```
{d.dog}
```

##### 示例
JSON 数据：
```json
{
  "dog": "http://link.to/the/picture"
}
```
模板中：  
在图片的替代文本中写入 `{d.dog}`

##### 结果
生成报告后，模板中的临时图片会被 JSON 中的链接图片替换。

---

#### ODT 中的图片循环

##### 语法
在循环中使用图片标签，通常在第一张图片的描述中添加重复标记：
```
{d.flags[i].picture}
```
后续图片自动重复，无需额外放置占位符。

##### 示例
JSON 数据：
```json
{
  "flags": [
    { "name": "France", "picture": "http://link.to/the/flag-fr" },
    { "name": "Germany", "picture": "http://link.to/the/flag-de" },
    { "name": "Italy", "picture": "http://link.to/the/flag-it" }
  ]
}
```
模板中：  
在第一张图片的描述中写入 `{d.flags[i].picture}`，并确保图片设置为“作为字符”锚定。

##### 结果
生成报告后，将按顺序显示所有图片。

---

#### Base64 图片插入（ODT）

##### 语法
标签同样写入图片的属性中，如：
```
{d.frenchFlagImage}
```

##### 示例
JSON 数据中图片采用 Base64 Data URI：
```json
{
  "frenchFlagImage": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQABLAEsAAD/..."
}
```
模板中：  
在图片的标题或替代文本中写入 `{d.frenchFlagImage}`

##### 结果
渲染后，临时图片被 Base64 数据生成的新图片替换。

---

#### DOCX 中的简单图片替换

##### 语法
在图片的替代文本中使用标签：
```
{d.image}
```

##### 示例
JSON 数据：
```json
{
  "image": "http://link.to/your/picture.jpg"
}
```
模板中：  
更新图片的替代文本为 `{d.image}`

##### 结果
生成报告后，图片将被替换为数据中指定的图片。

---

#### DOCX 中的图片循环

##### 语法
同 ODT 图片循环的用法，将重复标记放置于图片的替代文本中：
```
{d.images[i]}
```

##### 示例
参照 ODT 图片循环示例，确保图片设置为 “In Line with Text”（行内）锚定。

##### 结果
报告中会依次替换并显示每个图片。

---

### 颜色处理

#### 简单文本颜色

##### 语法
```
{d.flowerColor:color(p)}
```
- 其中 `p` 表示对当前段落文本应用颜色。

##### 示例
JSON 数据：
```json
{
  "flowerColor": "#FF0000"
}
```
模板中：
```
Color of roses {d.flowerColor:color(p)}This paragraph is not colored.
```

##### 结果
“Color of roses”部分会显示为红色，其余文本保持默认颜色。

---

#### 条件判断设置颜色

##### 语法
结合条件格式器与 `:color(p)`：
```
{d.test:ifEQ(OK):show(.success):elseShow(.error):color(p)}
```

##### 示例
JSON 数据：
```json
{
  "test": "OK",
  "success": "#007700",
  "error": "#FF0000"
}
```
模板中：
```
The assessment passed {d.test:ifEQ(OK):show(.success):elseShow(.error):color(p)}
```

##### 结果
当 `test` 为 “OK” 时，文本颜色变为 `#007700`（绿色）；否则显示 `#FF0000`（红色）。

---

#### 表格行颜色应用（循环中设置颜色）

##### 语法
在循环中使用：
```
{d.tests[i].result:ifEQ(ok):show(#000000):elseShow(d.error):color(row, text)}
```
- `color(row, text)` 表示对当前表格行文本应用颜色。

##### 示例
JSON 数据：
```json
{
  "error": "#FF0000",
  "tests": [
    { "name": "Security Training", "result": "ok" },
    { "name": "Code Auditing", "result": "20 Vulnerabilities found" },
    { "name": "Firewall Testing", "result": "ok" }
  ]
}
```
模板中：
```
Testinfo
{d.tests[i].name}{d.tests[i].result} {d.tests[i].result:ifEQ(ok):show(#007700):elseShow(d.error):color(row, text)}
{d.tests[i+1]}
```

##### 结果
符合条件的行文本颜色会改变：`ok` 时显示黑色或指定颜色，其他情况显示红色。

---

#### 组合颜色设置（文本与背景同时设置）

##### 语法
组合使用两条标签：
```
{d.tests[i].result:ifEQ(ok):show(#000000):elseShow(#FFFFFF):color(row, text)}
{d.tests[i].result:ifEQ(ok):show(#FFFFFF):elseShow(d.error):color(row, background)}
```

##### 示例
参照前述 JSON 数据，模板中同时对文本和背景进行设置。

##### 结果
当 `result` 为 `ok` 时，行文本为黑色，背景为白色；否则文本为指定颜色，背景为错误颜色。

---

#### 颜色绑定（bindColor）

##### 语法
旧方法（推荐使用 `:color` 替代）：
```
{bindColor(myColorToBind, myFormat)= d.myVar}
```
- `myColorToBind` 为模板中的参考颜色
- `d.myVar` 为新的颜色值

##### 示例
JSON 数据：
```json
{
  "color": "#FF0000",
  "color2": "#00FF00",
  "color3": "#0000FF"
}
```
模板中示例说明：  
在模板中预先设置参考颜色，`bindColor` 会将参考颜色替换为 JSON 数据中的颜色。

##### 结果
动态生成的颜色将覆盖模板中原有的参考颜色。

---

### HTML处理

#### HTML 标签渲染（:html）

##### 语法
```
{d.description:html}
```

##### 示例 1
JSON 数据：
```json
{
  "name": "<b>raptor</b>",
  "description": "The engine is <u>powered</u> by <i>cryogenic liquid methane</i><br>and<br><b><i>liquid oxygen</i></b> (LOX),<br><s>rather than the RP-1 kerosene and LOX</s>."
}
```
模板中：
```
{d.name:html}  
{d.description:html}
```

##### 结果
输出将渲染 HTML 标签效果，如加粗、下划线、斜体、换行和删除线。

---

##### 示例 2
JSON 数据：
```json
{
  "name": "Banana",
  "description": "<b>is an elongated, edible fruit</b>"
}
```
模板中：
```
The famous fruit {d.name} {d.description:html}, botanically a berry.
```

##### 结果
生成报告后，“is an elongated, edible fruit” 部分以 HTML 样式呈现（例如加粗）。

---

### 图表

#### 原生图表（Native Charts）

##### 语法
原生图表不依赖特定标签，数据绑定在 XLSX/ODS 表格中完成。  
在 LibreOffice 中可结合 `{bindChart()}` 使用。

##### 示例
在 MS Word 中插入图表后，编辑图表数据时，将数据区域中的数值替换为类似 `{d.temps[i].min}` 的标签。

##### 结果
生成报告时，图表中的数据会动态更新，显示最新的数值。

---

#### 高级 Echarts 图表

##### 语法
在图片替换标签中使用 `:chart` 格式器：
```
{d.chartOptions:chart}
```

##### 示例
JSON 数据：
```json
{
  "chartOptions": {
    "type": "echarts@v5a",
    "width": 600,
    "height": 400,
    "theme": null,
    "option": {
      "xAxis": { "type": "category", "data": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] },
      "yAxis": { "type": "value" },
      "series": [{
        "data": [150, 230, 224, 218, 135, 147, 260],
        "type": "line"
      }]
    }
  }
}
```
模板中：
在一个图片的“替代文本”中写入 `{d.chartOptions:chart}`

##### 结果
生成的报告中，该图片区域将显示为根据 JSON 配置生成的 Echarts 图表（通常为 SVG 格式）。

---

### 条形码生成

#### 条形码作为图片

##### 语法
```
{d.value:barcode(条码类型)}
```
- 例如：`{d.productCodeBarEan13:barcode(ean13)}`

##### 示例
JSON 数据：
```json
{
  "urlQrCode": "http://localhost:13000",
  "productCodeBarEan13": "2112345678900",
  "productGs1": "(01)95012345678903(3103)000123"
}
```
模板中：
- 对 QR 码：`{d.urlQrCode:barcode(qrcode):imageFit(contain)}`
- 对 EAN-13：`{d.productCodeBarEan13:barcode(ean13)}`
- 对 GS1-128：`{d.productGs1:barcode(gs1-128)}`

##### 结果
生成报告后，各临时图片区域将替换为对应条形码图片，且可通过额外参数调整尺寸与文本显示。

---

#### 条形码作为字体

##### 语法
与图片方式类似，但需要安装特定条码字体，在模板中直接使用标签：
```
{d.productValueEan13:barcode(ean13)}
```

##### 示例
JSON 数据：
```json
{
  "productValueEan13": "8056459824973",
  "productValueEan8": "35967101",
  "productValueCode39": "GSJ-220097",
  "productValueCode128": "0312345600001"
}
```
模板中：
分别将标签应用于对应区域，并将第一对大括号字体设置为条码字体。

##### 结果
报告中条形码以字体方式呈现（仅支持少数几种条码）。

---

### 超链接

#### 动态超链接

##### 语法
在超链接元素中使用标签，例如：
```
{d.url:defaultURL('http://localhost:13000')}
```
- `:defaultURL` 用于在 URL 无效时提供默认链接。

##### 示例
JSON 数据：
```json
{
  "url": "http://example.com"
}
```
模板中：
在超链接属性中写入 `{d.url:defaultURL('http://localhost:13000/')}`

##### 结果
生成的报告中，超链接将指向有效 URL，如 URL 格式不正确则替换为默认链接。

---

### 表单处理

#### 动态文本字段

##### 语法
在可编辑文本框中直接插入标签：
```
{d.value}
```

##### 示例
模板中：  
在 LibreOffice 的文本框内写入 `{d.value}`  
JSON 数据：
```json
{
  "value": "用户预填内容"
}
```

##### 结果
生成的 PDF 或 ODT 文档中，文本框内预填入 “用户预填内容”。

---

#### 动态复选框

##### 语法
利用条件格式器实现真假判断显示不同符号：
```
{d.value:ifEQ(true):show(✅):elseShow(❌)}
```

##### 示例
JSON 数据：
```json
{
  "value": true
}
```
模板中：
```
{d.value:ifEQ(true):show(✅):elseShow(❌)}
```

##### 结果
当 `value` 为 true 时，显示 ✅；否则显示 ❌。

---

### 国际化（i18n）

#### 静态文本翻译

##### 语法
使用 `{t(文本)}` 标签对静态文本进行国际化：
```
{t(meeting)}
```

##### 示例
模板中：
```
{t(meeting)} {t(apples)}
```
JSON 数据或外部本地化字典（例如针对 "fr-fr"）中提供对应翻译，如 "meeting" → "rendez-vous"、"apples" → "Pommes"。

##### 结果
生成报告时，文本将根据目标语言替换为相应翻译。

---

#### 动态文本翻译

##### 语法
对于数据内容可使用 `:t` 格式器，例如：
```
{d.id:ifEQ(2):show({t(monday)}):elseShow({t(tuesday)})}
```

##### 示例
模板中：
```
{d.id:ifEQ(2):show({t(monday)}):elseShow({t(tuesday)})}
```
JSON 数据和本地化字典中提供相应翻译。

##### 结果
根据条件判断，输出 “lundi” 或 “mardi”（以目标语言为例）。

---

### 键值映射

#### 枚举转换（:convEnum）

##### 语法
```
{数据:convEnum(枚举名称)}
```
例如：
```
0:convEnum('ORDER_STATUS')
```

##### 示例
API options 示例中传入：
```json
{
  "enum": {
    "ORDER_STATUS": ["pending", "sent", "delivered"]
  }
}
```
模板中：
```
0:convEnum('ORDER_STATUS')
```

##### 结果
输出 “pending”；若索引超出枚举范围，则输出原始值。

---

### 数据转换

#### 位置平移（:transform）

##### 语法
```
{d.pos:transform(axis, unit)}
```
- `axis` 可为 `x` 或 `y`；
- `unit` 可为 `cm`、`mm`、`inch` 或 `pt`。

##### 示例
```
{d.pos:transform(x, cm)}
```
JSON 数据：
```json
{
  "pos": 4
}
```

##### 结果
元素将在水平方向上移动 4 厘米（基于元素原始位置）。

---

### 文件操作

#### 附加文件（:appendFile）

##### 语法
```
{数据:appendFile}
```
仅适用于 PDF 格式文档。

##### 示例
JSON 数据：
```json
{
  "products": [
    {
      "name": "PV 500w Half-Cut",
      "datasheet": "https://example.com/datasheet1.pdf"
    },
    {
      "name": "PV 425w Half-Cut",
      "datasheet": "https://example.com/datasheet2.pdf"
    }
  ]
}
```
模板中：
```
{d.products[i].datasheet:appendFile}
```

##### 结果
生成的 PDF 报告末尾将依次附加各产品的技术文档。

---

#### 附加附件（:attachFile）

##### 语法
```
{数据:attachFile(文件名, 类型)}
```
- `文件名` 为附件在 PDF 中显示的名称；
- `类型` 为附件类型（例如 "Data"、"Source" 等）。

##### 示例
模板中：
```
{d.fileURL:attachFile('factur-x.xml', 'Data')}
```
JSON 数据：
```json
{
  "fileURL": "https://example.com/factur-x.xml"
}
```

##### 结果
生成的 PDF 报告中会嵌入该附件，供用户下载查看。

---
