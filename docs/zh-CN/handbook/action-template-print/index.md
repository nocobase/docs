# 模板打印

<PluginInfo commercial="true" name="action-template-print"></PluginInfo>

## 介绍

模板打印插件是一款功能强大的工具，通过 Word、Excel 和 PowerPoint 编辑模板文件（支持 `.docx`、`.xlsx`、`.pptx` 格式），在模板中设置占位符和逻辑结构，从而动态生成预定格式的文件，如 `.docx`、`.xlsx`、`.pptx` 以及 PDF 文件。该插件广泛应用于生成各类业务文档，例如报价单、发票、合同等，显著提升了文档生成的效率和准确性。

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

## 模板语法

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

### 循环输出

模板打印插件支持循环输出数组中的数据，无需明确标注循环的起始和结束位置，只需在模板中使用保留关键字 `i` 和 `i+1`。插件会自动识别并处理循环部分。

#### 简单数组循环

**示例**：生成公司员工数据表格

**数据集**：
```json
{
  "staffs": [
    { "firstname": "James", "lastname": "Anderson" },
    { "firstname": "Emily", "lastname": "Roberts" },
    { "firstname": "Michael", "lastname": "Johnson" }
  ]
}
```

**模板**：

| 员工名 | 员工姓 |
|---|---|
| {d.staffs[i].firstname} | {d.staffs[i].lastname} |
| {d.staffs[i+1]} |  |

**渲染结果**：

| 员工名  | 员工姓   |
|---|---|
| James | Anderson |
| Emily | Roberts |
| Michael | Johnson |

**说明**：模板中的 `{d.staffs[i].firstname}` 和 `{d.staffs[i].lastname}` 用于循环填充每位员工的姓名和姓氏。`{d.staffs[i+1]}`标记下一行的循环起始。

#### 嵌套数组循环

模板打印插件支持处理嵌套数组，支持无限层级的循环嵌套，适用于展示复杂的数据结构。

**示例**：展示汽车品牌及其型号

**数据集**：
```json
{
  "cars": [
    {
      "brand": "Toyota",
      "models": [{ "size": "Prius 2" }, { "size": "Prius 3" }]
    },
    {
      "brand": "Tesla",
      "models": [{ "size": "S" }, { "size": "X" }]
    }
  ]
}
```

**模板**：

```
品牌：{d.cars[i].brand}
型号：
{d.cars[i].models[j].size}
{d.cars[i].models[j+1].size}

---
```
![20241203152028-2024-12-03-15-20-29](https://static-docs.nocobase.com/20241203152028-2024-12-03-15-20-29.png)

**渲染结果**：
```
品牌：Toyota
型号：
Prius 2
Prius 3

---
品牌：Tesla
型号：
S
X

---
```
    
**说明**：在外层循环中使用 `i` 遍历每个品牌，内层循环使用 `j` 遍历每个品牌下的型号。`{d.cars[i].models[j].size}` 和 `{d.cars[i].models[j+1].size}` 分别用于填充当前和下一个型号。通过这种方式，可以无限层级地嵌套循环，适应复杂的数据结构。

### 排序功能

模板打印插件允许根据对象的属性对数组进行排序，而不仅限于使用迭代器 `i`。目前支持按指定属性进行升序排序，暂不支持降序排序。

**示例**：按“power”属性对汽车进行升序排序

**数据集**：
```json
{
  "cars" : [
    { "brand" : "Lumeneo" , "power" : 3 },
    { "brand" : "Tesla"   , "power" : 1 },
    { "brand" : "Toyota"  , "power" : 2 }
  ]
}
```

**模板**：
```
{d.cars:sort(power)}
品牌：{d.cars[i].brand}
功率：{d.cars[i].power} kW

---
```

**渲染结果**：
```
品牌：Tesla
功率：1 kW

---
品牌：Toyota
功率：2 kW

---
品牌：Lumeneo
功率：3 kW

---
```

**说明**：使用 `:sort(power)` 对 `cars` 数组按 `power` 属性进行升序排序，然后依次渲染每辆汽车的品牌和功率。

## 格式化器

格式化器用于对数据进行特定格式的转换或条件判断，增强模板的灵活性和表现力。

### 条件输出

通过 `showBegin` 和 `showEnd` 控制特定内容的显示与隐藏。

**语法**：
```
{d.field:condition:showBegin}
内容
{d.field:showEnd}
```

**示例**：在合同模板中，根据客户类型显示特殊条款

**数据集**：
```json
{
  "customerType": "VIP"
}
```

**模板内容**：
```
{d.customerType:ifEQ('VIP'):showBegin}
特别条款：
作为我们的 VIP 客户，您将享受额外的优惠和专属服务，包括免费升级、优先支持等。
{d.customerType:showEnd}
```

**渲染结果**（当 `customerType` 为 "VIP" 时）：
```
特别条款：
作为我们的 VIP 客户，您将享受额外的优惠和专属服务，包括免费升级、优先支持等。
```

**说明**：当 `customerType` 字段的值等于 "VIP" 时，`showBegin` 和 `showEnd` 之间的内容将被渲染，否则将被隐藏。

### 日期格式化

通过格式化器对日期字段进行格式转换，提升日期的可读性。

**语法**：
```
{d.dateField:format(YYYY年MM月DD日)}
```

**示例**：

**数据集**：
```json
{
  "orderDate": "2025-01-03T10:30:00Z"
}
```

**模板内容**：
```
订单日期：{d.orderDate:format(YYYY年MM月DD日)}
```

**渲染结果**：
```
订单日期：2025年01月03日
```

**说明**：使用 `format` 格式化器将 ISO 格式的日期转换为更易读的格式。

### 数字格式化

通过格式化器对数字进行格式化，如千分位分隔、小数点位数控制等。

**语法**：
```
{d.numberField:format(0,0.00)}
```

**示例**：

**数据集**：
```json
{
  "totalAmount": 1234567.89
}
```

**模板内容**：
```
总金额：{d.totalAmount:format('0,0.00')} 元
```

**渲染结果**：
```
总金额：1,234,567.89 元
```

**说明**：使用 `format` 格式化器对数字进行千分位分隔，并保留两位小数。


## 字符串格式化器示例

### 1. lowerCase( )

**语法**：
```
{d.someField:lowerCase()}
```

**示例**：

**数据集**：
```json
{
  "title": "My Car"
}
```

**模板内容**：
```
车辆名称：{d.title:lowerCase()}
```

**渲染结果**：
```
车辆名称：my car
```

**说明**：将所有英文字母转换为小写。如果值非字符串（如数字、null 等），则原样输出。

---

### 2. upperCase( )

**语法**：
```
{d.someField:upperCase()}
```

**示例**：

**数据集**：
```json
{
  "title": "my car"
}
```

**模板内容**：
```
车辆名称：{d.title:upperCase()}
```

**渲染结果**：
```
车辆名称：MY CAR
```

**说明**：将所有英文字母转换为大写。如果值非字符串，则原样输出。

---

### 3. ucFirst( )

**语法**：
```
{d.someField:ucFirst()}
```

**示例**：

**数据集**：
```json
{
  "note": "hello world"
}
```

**模板内容**：
```
备注：{d.note:ucFirst()}
```

**渲染结果**：
```
备注：Hello world
```

**说明**：仅将首字母转换为大写，其他字母保持原样。如果值为 null 或 undefined，则返回 null 或 undefined。

---

### 4. ucWords( )

**语法**：
```
{d.someField:ucWords()}
```

**示例**：

**数据集**：
```json
{
  "description": "my cAR"
}
```

**模板内容**：
```
描述：{d.description:ucWords()}
```

**渲染结果**：
```
描述：My CAR
```

**说明**：将字符串中每个单词的首字母转为大写。其余字母保持原样。

---

### 5. print( message )

**语法**：
```
{d.someField:print('固定输出')}
```

**示例**：

**数据集**：
```json
{
  "unusedField": "whatever"
}
```

**模板内容**：
```
提示信息：{d.unusedField:print('此处始终显示固定提示')}
```

**渲染结果**：
```
提示信息：此处始终显示固定提示
```

**说明**：不管原始数据为何，都会输出指定的 `message` 字符串，相当于“强制覆盖”。

---

### 6. printJSON( )

**语法**：
```
{d.someField:printJSON()}
```

**示例**：

**数据集**：
```json
{
  "items": [
    { "id": 2, "name": "homer" },
    { "id": 3, "name": "bart" }
  ]
}
```

**模板内容**：
```
原始数据：{d.items:printJSON()}
```

**渲染结果**：
```
原始数据：[{"id":2,"name":"homer"},{"id":3,"name":"bart"}]
```

**说明**：将对象或数组序列化为 JSON 格式的字符串，以便在模板中直接输出。

---

### 7. convEnum( type )

**语法**：
```
{d.someField:convEnum('ENUM_NAME')}
```

**示例**：

**数据集**：
```json
{
  "orderStatus": 1
}
```
假设在 `carbone.render(data, options)` 的 `options.enum` 中配置如下：
```json
{
  "enum": {
    "ORDER_STATUS": [
      "pending",     // 0
      "sent",        // 1
      "delivered"    // 2
    ]
  }
}
```

**模板内容**：
```
订单状态：{d.orderStatus:convEnum('ORDER_STATUS')}
```

**渲染结果**：
```
订单状态：sent
```

**说明**：将数字或符合定义的枚举值转换为可读文本；若枚举中未定义该值，则原样输出。

---

### 8. unaccent( )

**语法**：
```
{d.someField:unaccent()}
```

**示例**：

**数据集**：
```json
{
  "food": "crème brûlée"
}
```

**模板内容**：
```
美食名称：{d.food:unaccent()}
```

**渲染结果**：
```
美食名称：creme brulee
```

**说明**：去除重音符号，常用于处理带有法语、西班牙语等特殊字符的文本。

---

### 9. convCRLF( )

**语法**：
```
{d.someField:convCRLF()}
```
> **注**：适用于 DOCX、PDF、ODT、ODS（ODS 功能为实验性）。

**示例**：

**数据集**：
```json
{
  "content": "多行文本：\n第一行\n第二行\r\n第三行"
}
```

**模板内容**：
```
转换后内容：
{d.content:convCRLF()}
```

**渲染结果**（DOCX 场景）：
```
转换后内容：
多行文本：
第一行
第二行
第三行
```
> 实际 XML 会插入 `<w:br/>` 等换行标签。

**说明**：将 `\n` 或 `\r\n` 转换为文档正确的换行标签，用于在最终文件中准确显示多行文本。

---

### 10. substr( begin, end, wordMode )

**语法**：
```
{d.someField:substr(begin, end, wordMode)}
```

**示例**：

**数据集**：
```json
{
  "text": "abcdefg hijklmnop"
}
```

**模板内容**：
```
截取内容(从索引0到5)：{d.text:substr(0, 5)}
截取内容(从索引6到末尾)：{d.text:substr(6)}
```

**渲染结果**：
```
截取内容(从索引0到5)：abcde
截取内容(从索引6到末尾)：fg hijklmnop
```

**说明**：
- `begin` 为起始索引，`end` 为结束索引（不含）。
- 若 `wordMode=true`，则尽量不拆分单词；若 `wordMode='last'`，则从 `begin` 一直截取到字符串结束。

---

### 11. split( delimiter )

**语法**：
```
{d.someField:split(delimiter)}
```

**示例**：

**数据集**：
```json
{
  "path": "ab/cd/ef"
}
```

**模板内容**：
```
分隔后的数组：{d.path:split('/')}
```

**渲染结果**：
```
分隔后的数组：["ab","cd","ef"]
```

**说明**：使用指定的 `delimiter` 将字符串拆分为数组。可与其他数组操作配合使用，如 `arrayJoin`、索引访问等。

---

### 12. padl( targetLength, padString )

**语法**：
```
{d.someField:padl(targetLength, padString)}
```

**示例**：

**数据集**：
```json
{
  "code": "abc"
}
```

**模板内容**：
```
左侧补齐（长度8，字符'0'）：{d.code:padl(8, '0')}
```

**渲染结果**：
```
左侧补齐（长度8，字符'0'）：00000abc
```

**说明**：若 `targetLength` 小于原字符串长度，则直接返回原字符串；默认补齐字符为空格。

---

### 13. padr( targetLength, padString )

**语法**：
```
{d.someField:padr(targetLength, padString)}
```

**示例**：

**数据集**：
```json
{
  "code": "abc"
}
```

**模板内容**：
```
右侧补齐（长度10，字符'#'）：{d.code:padr(10, '#')}
```

**渲染结果**：
```
右侧补齐（长度10，字符'#'）：abc#######
```

**说明**：与 `padl` 相反，在字符串末尾进行补齐。默认补齐字符为空格。

---

### 14. ellipsis( maximum )

**语法**：
```
{d.someField:ellipsis(maximum)}
```

**示例**：

**数据集**：
```json
{
  "articleTitle": "Carbone Report Extended Version"
}
```

**模板内容**：
```
文章标题（最多5字符）：{d.articleTitle:ellipsis(5)}
```

**渲染结果**：
```
文章标题（最多5字符）：Carbo...
```

**说明**：当字符串长度超过 `maximum` 时，会在截断后加上 `...`。

---

### 15. prepend( textToPrepend )

**语法**：
```
{d.someField:prepend(textToPrepend)}
```

**示例**：

**数据集**：
```json
{
  "username": "john"
}
```

**模板内容**：
```
用户名：{d.username:prepend('Mr. ')}
```

**渲染结果**：
```
用户名：Mr. john
```

**说明**：在原有字符串前追加指定文本，常用于加前缀。

---

### 16. append( textToAppend )

**语法**：
```
{d.someField:append(textToAppend)}
```

**示例**：

**数据集**：
```json
{
  "filename": "document"
}
```

**模板内容**：
```
文件名：{d.filename:append('.pdf')}
```

**渲染结果**：
```
文件名：document.pdf
```

**说明**：在原有字符串后追加指定文本，常用于加后缀。

---

### 17. replace( oldText, newText )

**语法**：
```
{d.someField:replace(oldText, newText)}
```

**示例**：

**数据集**：
```json
{
  "sentence": "abcdef abcde"
}
```

**模板内容**：
```
替换结果：{d.sentence:replace('cd', 'OK')}
```

**渲染结果**：
```
替换结果：abOKef abOKe
```

**说明**：将所有符合 `oldText` 的部分替换为 `newText`；如果未指定 `newText` 或为 `null`，则删除匹配部分。

---

### 18. len( )

**语法**：
```
{d.someField:len()}
```

**示例**：

**数据集**：
```json
{
  "greeting": "Hello World",
  "numbers": [1, 2, 3, 4, 5]
}
```

**模板内容**：
```
文本长度：{d.greeting:len()}
数组长度：{d.numbers:len()}
```

**渲染结果**：
```
文本长度：11
数组长度：5
```

**说明**：可用于字符串和数组，返回其长度或元素个数。

---

### 19. t( )

**语法**：
```
{d.someField:t()}
```

**示例**：

假设你在 Carbone 配置中定义了翻译字典，将文本 `"Submit"` 翻译为 `"提交"`。

**数据集**：
```json
{
  "buttonLabel": "Submit"
}
```

**模板内容**：
```
按钮：{d.buttonLabel:t()}
```

**渲染结果**：
```
按钮：提交
```

**说明**：根据翻译词典对字符串进行翻译。需要在渲染时提供对应的翻译映射。

---

### 20. preserveCharRef( )

**语法**：
```
{d.someField:preserveCharRef()}
```

**示例**：

**数据集**：
```json
{
  "legalSymbol": "&#xa7;" 
}
```

**模板内容**：
```
符号：{d.legalSymbol:preserveCharRef()}
```

**渲染结果**：
```
符号：&#xa7;
```

**说明**：保留 `&#xxx;` 或 `&#xXXXX;` 形式的字符引用，避免在 XML 中被转义或替换。这在生成特定字符集或特殊符号时非常有用。

---
以下示例均遵循前文的文档风格进行编写，帮助你更好地理解和运用与**数字操作**相关的格式化器。示例中会包含**语法**、**示例**（含“数据集”“模板内容”“渲染结果”）和简要的**说明**，有些示例还会提及可选的渲染配置（`options`）以展示如何影响输出。

---


## 数字操作格式化器示例

### 1. convCurr( target, source )

**语法**：
```
{d.numberField:convCurr(target, source)}
```

**示例**：

**数据集**：
```json
{
  "amount": 1000
}
```

> 假设在 `Carbone.render(data, options)` 时，`options` 设置如下：
> ```json
> {
>   "currency": {
>     "source": "EUR",
>     "target": "USD",
>     "rates": {
>       "EUR": 1,
>       "USD": 2
>     }
>   }
> }
> ```

**模板内容**：
```
默认从 EUR 转换到 USD：{d.amount:convCurr()}
直接指定目标为 USD：{d.amount:convCurr('USD')}
直接指定目标为 EUR：{d.amount:convCurr('EUR')}
EUR->USD，再强制 USD->USD：{d.amount:convCurr('USD','USD')}
```

**渲染结果**：
```
默认从 EUR 转换到 USD：2000
直接指定目标为 USD：2000
直接指定目标为 EUR：1000
EUR->USD，再强制 USD->USD：1000
```

**说明**：
- 若未指定 `target`，则默认使用 `options.currencyTarget`（示例中的 "USD"）。
- 若未指定 `source`，则默认使用 `options.currencySource`（示例中的 "EUR"）。
- 若 `options.currencySource` 未定义，则不进行任何转换，原值输出。

---

### 2. round( precision )

**语法**：
```
{d.numberField:round(precision)}
```

**示例**：

**数据集**：
```json
{
  "price": 10.05123,
  "discount": 1.05
}
```

**模板内容**：
```
价格保留2位小数：{d.price:round(2)}
折扣保留1位小数：{d.discount:round(1)}
```

**渲染结果**：
```
价格保留2位小数：10.05
折扣保留1位小数：1.1
```

**说明**：  
与 `toFixed()` 不同，`round()` 使用正确的四舍五入方式处理小数，如 `1.05` 保留一位小数时得到 `1.1`。

---

### 3. formatN( precision )

**语法**：
```
{d.numberField:formatN(precision)}
```

**示例**：

**数据集**：
```json
{
  "total": 1000.456
}
```

> 假设在 `Carbone.render(data, options)` 时，`options.lang` 为 `en-us`，且文档类型为非 ODS/XLSX（如 DOCX、PDF 等）。

**模板内容**：
```
数字格式化：{d.total:formatN()}
数字格式化（保留2位小数）：{d.total:formatN(2)}
```

**渲染结果**：
```
数字格式化：1,000.456
数字格式化（保留2位小数）：1,000.46
```

**说明**：
- `formatN()` 会根据 `options.lang` 设置对数字进行本地化显示（千分位、使用小数点或逗号等）。
- 如果是 ODS/XLSX 文件，数值精度主要取决于表格自身的单元格格式设置。

---

### 4. formatC( precisionOrFormat, targetCurrencyCode )

**语法**：
```
{d.numberField:formatC(precisionOrFormat, targetCurrencyCode)}
```

**示例**：

**数据集**：
```json
{
  "amount": 1000.456
}
```

> 假设在 `Carbone.render(data, options)` 时，配置如下：
> ```json
> {
>   "lang": "en-us",
>   "currency": {
>     "source": "EUR",
>     "target": "USD",
>     "rates": {
>       "EUR": 1,
>       "USD": 2
>     }
>   }
> }
> ```

**模板内容**：
```
默认转换并输出货币符号：{d.amount:formatC()}
只输出货币名称（M）：{d.amount:formatC('M')}
只输出货币名称，单数情况：{1:formatC('M')}
数字+符号（L）：{d.amount:formatC('L')}
数字+货币名称（LL）：{d.amount:formatC('LL')}
```

**渲染结果**：
```
默认转换并输出货币符号：$2,000.91
只输出货币名称（M）：dollars
只输出货币名称，单数情况：dollar
数字+符号（L）：$2,000.00
数字+货币名称（LL）：2,000.00 dollars
```

**说明**：
- `precisionOrFormat` 可以是数字（指定小数位）或字符串（"M"、"L"、"LL"）。
- 若还需切换到其他货币，可传入 `targetCurrencyCode`，如 `formatC('L', 'EUR')`。

---

### 5. add( )

**语法**：
```
{d.numberField:add(value)}
```

**示例**：

**数据集**：
```json
{
  "base": 1000.4
}
```

**模板内容**：
```
数值加2：{d.base:add(2)}
```

**渲染结果**：
```
数值加2：1002.4
```

**说明**：将 `d.base` 与传入参数相加，支持字符串数字或纯数字。

---

### 6. sub( )

**语法**：
```
{d.numberField:sub(value)}
```

**示例**：

**数据集**：
```json
{
  "base": 1000.4
}
```

**模板内容**：
```
数值减2：{d.base:sub(2)}
```

**渲染结果**：
```
数值减2：998.4
```

**说明**：将 `d.base` 与传入参数相减。

---

### 7. mul( )

**语法**：
```
{d.numberField:mul(value)}
```

**示例**：

**数据集**：
```json
{
  "base": 1000.4
}
```

**模板内容**：
```
数值乘2：{d.base:mul(2)}
```

**渲染结果**：
```
数值乘2：2000.8
```

**说明**：将 `d.base` 与传入参数相乘。

---

### 8. div( )

**语法**：
```
{d.numberField:div(value)}
```

**示例**：

**数据集**：
```json
{
  "base": 1000.4
}
```

**模板内容**：
```
数值除以2：{d.base:div(2)}
```

**渲染结果**：
```
数值除以2：500.2
```

**说明**：将 `d.base` 与传入参数相除。

---

### 9. mod( value )

**语法**：
```
{d.numberField:mod(value)}
```

**示例**：

**数据集**：
```json
{
  "num1": 4,
  "num2": 3
}
```

**模板内容**：
```
4 mod 2：{d.num1:mod(2)}
3 mod 2：{d.num2:mod(2)}
```

**渲染结果**：
```
4 mod 2：0
3 mod 2：1
```

**说明**：计算 `num1 % 2` 和 `num2 % 2` 的结果，用于求余操作。

---

### 10. abs( )

**语法**：
```
{d.numberField:abs()}
```

**示例**：

**数据集**：
```json
{
  "value1": -10,
  "value2": -10.54
}
```

**模板内容**：
```
绝对值1：{d.value1:abs()}
绝对值2：{d.value2:abs()}
```

**渲染结果**：
```
绝对值1：10
绝对值2：10.54
```

**说明**：返回数字的绝对值，若是字符串形式的负数亦可处理。

---

### 11. ceil( )

**语法**：
```
{d.numberField:ceil()}
```

**示例**：

**数据集**：
```json
{
  "dataA": 10.05123,
  "dataB": 1.05,
  "dataC": -1.05
}
```

**模板内容**：
```
ceil(10.05123)：{d.dataA:ceil()}
ceil(1.05)：{d.dataB:ceil()}
ceil(-1.05)：{d.dataC:ceil()}
```

**渲染结果**：
```
ceil(10.05123)：11
ceil(1.05)：2
ceil(-1.05)：-1
```

**说明**：将数值向上取整到最近的更大（或相等）整数。

---

### 12. floor( )

**语法**：
```
{d.numberField:floor()}
```

**示例**：

**数据集**：
```json
{
  "dataA": 10.05123,
  "dataB": 1.05,
  "dataC": -1.05
}
```

**模板内容**：
```
floor(10.05123)：{d.dataA:floor()}
floor(1.05)：{d.dataB:floor()}
floor(-1.05)：{d.dataC:floor()}
```

**渲染结果**：
```
floor(10.05123)：10
floor(1.05)：1
floor(-1.05)：-2
```

**说明**：将数值向下取整到最近的更小（或相等）整数。

---

### 13. int( )

> **注意**：**不推荐使用**。  
> **语法**：
```
{d.numberField:int()}
```

**示例**：

**数据集**：
```json
{
  "price": 12.34
}
```

**模板内容**：
```
结果：{d.price:int()}
```

**渲染结果**：
```
结果：12
```

**说明**：将数值转为整数，直接去掉小数部分；官方文档建议使用更准确的 `round()` 或 `floor()`/`ceil()` 替代。

---

### 14. toEN( )

> **注意**：**不推荐使用**。  
> **语法**：
```
{d.numberField:toEN()}
```

**说明**：把数字转为符合英文格式的小数点 `.` 分隔，不做本地化处理。通常建议使用 `formatN()` 以适配多语言场景。

---

### 15. toFixed( )

> **注意**：**不推荐使用**。  
> **语法**：
```
{d.numberField:toFixed(decimalCount)}
```

**说明**：将数字转换为字符串并保留指定的小数位数，但可能存在不精确的四舍五入问题，建议改用 `round()` 或 `formatN()`。

---

### 16. toFR( )

> **注意**：**不推荐使用**。  
> **语法**：
```
{d.numberField:toFR()}
```

**说明**：把数字转换为符合法语格式的小数点 `,` 分隔，但不做更多本地化处理。建议使用 `formatN()` 或 `formatC()` 以便在多语言和货币场景下更灵活。

---

## 数组操作（Array manipulation）

### 1. aggStr( separator )
> **版本**：ENTERPRISE FEATURE，NEWv4.17.0+  
> **功能**：将数组中的值合并为一个字符串，并用可选分隔符 `separator` 进行拼接。若不提供分隔符，默认为 `,`。

**语法**：
```
{d.arrayField[].someAttr:aggStr(separator)}
```

**示例**：

**数据集**：
```json
{
  "cars": [
    {"brand":"Tesla","qty":1,"sort":1},
    {"brand":"Ford","qty":4,"sort":4},
    {"brand":"Jeep","qty":3,"sort":3},
    {"brand":"GMC","qty":2,"sort":2},
    {"brand":"Rivian","qty":1,"sort":1},
    {"brand":"Chevrolet","qty":10,"sort":5}
  ]
}
```

**模板内容**：
```
所有品牌（默认逗号分隔）：
{d.cars[].brand:aggStr}

所有品牌（指定连字符分隔）：
{d.cars[].brand:aggStr(' - ')}

筛选出 qty 大于 3 的品牌：
{d.cars[.qty > 3].brand:aggStr()}
```

**渲染结果**：
```
所有品牌（默认逗号分隔）：
Tesla, Ford, Jeep, GMC, Rivian, Chevrolet

所有品牌（指定连字符分隔）：
Tesla - Ford - Jeep - GMC - Rivian - Chevrolet

筛选出 qty 大于 3 的品牌：
Ford, Chevrolet
```

**说明**：
- 使用 `:aggStr` 对数组中的字段进行提取与合并，可搭配过滤条件（如 `[.qty > 3]`）实现更灵活的输出。
- `separator` 参数可省略，默认为逗号 + 空格（`, `）。

---

### 2. arrayJoin( separator, index, count )
> **版本**：NEWv4.12.0+  
> **功能**：将数组元素（`String` 或 `Number`）合并为一个单一字符串；可选指定从数组中哪一段开始合并。

**语法**：
```
{d.arrayField:arrayJoin(separator, index, count)}
```

**示例**：

**数据集**：
```json
{
  "names": ["homer", "bart", "lisa"],
  "emptyArray": [],
  "notArray": 20
}
```

**模板内容**：
```
默认使用逗号分隔：{d.names:arrayJoin()}
使用 " | " 分隔：{d.names:arrayJoin(' | ')}
使用空字符分隔：{d.names:arrayJoin('')}
仅合并第二项起后的所有：{d.names:arrayJoin('', 1)}
仅合并第二项起1个元素：{d.names:arrayJoin('', 1, 1)}
从第1项截取到倒数第1个元素：{d.names:arrayJoin('', 0, -1)}

空数组：{d.emptyArray:arrayJoin()}
非数组数据：{d.notArray:arrayJoin()}
```

**渲染结果**：
```
默认使用逗号分隔：homer, bart, lisa
使用 " | " 分隔：homer | bart | lisa
使用空字符分隔：homerbartlisa
仅合并第二项起后的所有：bartlisa
仅合并第二项起1个元素：bart
从第1项截取到倒数第1个元素：homerbart

空数组：
非数组数据：20
```

**说明**：
- `separator` 默认为逗号 + 空格（`, `）。
- `index` 与 `count` 用于截取数组的部分元素；`count` 可为负数表示从结尾反向取元素。
- 若非数组类型数据（`null`、`undefined`、对象或数字等），则会原样输出。

---

### 3. arrayMap( objSeparator, attributeSeparator, attributes )
> **版本**：v0.12.5+  
> **功能**：将对象数组映射成字符串。可指定对象之间的分隔符、属性之间的分隔符以及需要输出的属性。

**语法**：
```
{d.arrayField:arrayMap(objSeparator, attributeSeparator, attributes)}
```

**示例**：

```json
{
  "people": [
    { "id": 2, "name": "homer" },
    { "id": 3, "name": "bart" }
  ],
  "numbers": [10, 50],
  "emptyArray": [],
  "mixed": {"id":2,"name":"homer"}
}
```

**模板内容**：
```
默认映射（使用逗号+空格作为对象分隔，冒号作为属性分隔）：
{d.people:arrayMap()}

对象间使用 " - " 分隔：
{d.people:arrayMap(' - ')}

对象属性使用 " | " 分隔：
{d.people:arrayMap(' ; ', '|')}

仅映射 id：
{d.people:arrayMap(' ; ', '|', 'id')}

数字数组：
{d.numbers:arrayMap()}

空数组：
{d.emptyArray:arrayMap()}

非数组数据：
{d.mixed:arrayMap()}
```

**渲染结果**：
```
默认映射：
2:homer, 3:bart

对象间使用 " - " 分隔：
2:homer - 3:bart

对象属性使用 " | " 分隔：
2|homer ; 3|bart

仅映射 id：
2 ; 3

数字数组：
10, 50

空数组：

非数组数据：
{ "id": 2, "name": "homer" }
```

**说明**：
- 如果是对象数组，默认输出其中**所有**可用的一级属性，以 `属性名:属性值` 的形式拼接起来。
- `objSeparator` 用于分隔不同对象的输出，默认为逗号 + 空格；`attributeSeparator` 用于分隔属性，默认为冒号 `:`；`attributes` 则可指定仅输出对象中的部分属性。
- 若传入的数据不是数组，则原样输出。

---

### 4. count( start )
> **版本**：v1.1.0+  
> **功能**：在循环（如 `{d.array[i].xx}`）中打印**行号**或**序号**，默认为从 1 开始。  
> **注意**：从 v4.0.0 开始，该功能内部被替换为 `:cumCount`。

**语法**：
```
{d.array[i].someField:count(start)}
```

**示例**：

**数据集**：
```json
{
  "employees": [
    { "name": "James" },
    { "name": "Emily" },
    { "name": "Michael" }
  ]
}
```

**模板内容**：
```
员工列表：
序号 | 姓名
{d.employees[i].name:count()}. {d.employees[i].name}
{d.employees[i+1]}
```

**渲染结果**：
```
员工列表：
序号 | 姓名
1. James
2. Emily
3. Michael
```

**说明**：
- 仅在循环（包括 `{d.array[i].xx}` 等场景）有效，用于打印当前行索引的计数。
- `start` 可指定从某个数开始计数，如 `:count(5)` 则首行从 5 开始计数。
- Carbone 4.0+ 建议使用 `:cumCount`，功能更灵活。

---

## 条件输出（Conditioned output）

Carbone 提供了一系列条件输出的格式化器，用于在模板中根据特定条件**隐藏**或**显示**指定内容。可根据业务需求选择**`drop`/`keep`**（简洁用法）或者**`showBegin`/`showEnd`**、**`hideBegin`/`hideEnd`**（适用于大段内容）等。

### 1. drop(element)
> **版本**：ENTERPRISE FEATURE，UPDATEDv4.22.10+  
> **功能**：若条件为真，则**删除**文档中的某个元素或若干元素，如段落、表格行、图片、图表等。

**语法**：
```
{d.data:ifEM():drop(element, nbrToDrop)}
```
- `element`：可为 `p`（段落）、`row`（表格行）、`img`（图片）、`table`（整张表格）、`chart`（图表）、`shape`（形状）、`slide`（幻灯片，仅限 ODP）或 `item`（列表项，仅限 ODP/ODT）。
- `nbrToDrop`：可选，整数，表示删除当前及后续多少个元素。

**示例**：

**数据集**：
```json
{
  "imgUrl": null
}
```

**模板内容**（DOCX 场景，简化示例）：
```
这里有一张图片：{d.imgUrl:ifEM:drop(img)}
```

- 在 Word 模板中，将此占位符置于图片的标题或说明里。

**渲染结果**：
```
这里有一张图片：
```
> 图片被删除，因 `imgUrl` 为空 (`ifEM` 为真)。

**说明**：
- 若 `ifEM` 条件成立，则执行 `drop(img)`，删除该图片及其所在段落内容。
- `drop` 仅支持 DOCX/ODT/ODS/ODP/PPTX/PDF/HTML；且一旦执行 `drop`，后续不再执行其他格式化器。

---

### 2. keep(element)
> **版本**：ENTERPRISE FEATURE，NEWv4.17.0+  
> **功能**：若条件为真，则**保留/显示**文档中的某个元素或若干元素，其余情况则不显示。

**语法**：
```
{d.data:ifNEM:keep(element, nbrToKeep)}
```
- `element`：同 `drop` 一样，可为 `p`、`row`、`img`、`table`、`chart`、`shape`、`slide`、`item` 等。
- `nbrToKeep`：可选，整数，表示保留当前及后续多少个元素。

**示例**：

**数据集**：
```json
{
  "tableData": []
}
```

**模板内容**（DOCX 场景，简化示例）：
```
{d.tableData:ifNEM:keep(table)}
```

- 在 Word 模板中，将此占位符置于表格中某个单元格内。

**渲染结果**：
```
（空白）
```
> 由于 `tableData` 为空，`ifNEM` 为假（not empty 失败），因此表格未被保留，整张表被删除。

**说明**：
- 若条件成立，则保留对应元素；否则删除该元素及其所有内容。
- 和 `drop` 相反，`keep` 在条件不满足时删除元素。

---

### 3. showBegin()/showEnd()
> **版本**：COMMUNITY FEATURE，v2.0.0+  
> **功能**：显示 `showBegin` 与 `showEnd` 之间的内容（可包含多段文本、表格、图片等），若条件为真则保留此部分，若条件为假则删除。

**语法**：
```
{d.someData:ifEQ(someValue):showBegin}
...显示的内容...
{d.someData:showEnd}
```

**示例**：

**数据集**：
```json
{
  "toBuy": true
}
```

**模板内容**：
```
Banana{d.toBuy:ifEQ(true):showBegin}
Apple
Pineapple
{d.toBuy:showEnd}grapes
```

**渲染结果**：
```
Banana
Apple
Pineapple
grapes
```
> 当 `toBuy` 为 `true` 时，`showBegin` 和 `showEnd` 之间的所有内容都会展示。

**说明**：
- 适用于**多行或多页**内容的隐藏和展示；如果仅是一行，可考虑使用 `keep`/`drop` 获得更简洁的写法。
- 推荐在 `showBegin` 与 `showEnd` 中仅使用**换行（Shift+Enter）**分隔，以确保渲染正常。

---

### 4. hideBegin()/hideEnd()
> **版本**：COMMUNITY FEATURE，v2.0.0+  
> **功能**：隐藏 `hideBegin` 与 `hideEnd` 之间的内容，若条件为真则删除这部分内容，否则保留。

**语法**：
```
{d.someData:ifEQ(someValue):hideBegin}
...隐藏的内容...
{d.someData:hideEnd}
```

**示例**：

**数据集**：
```json
{
  "toBuy": true
}
```

**模板内容**：
```
Banana{d.toBuy:ifEQ(true):hideBegin}
Apple
Pineapple
{d.toBuy:hideEnd}grapes
```

**渲染结果**：
```
Banana
grapes
```
> 当 `toBuy` 为 `true`，`hideBegin` 与 `hideEnd` 内的 Apple、Pineapple 内容被隐藏。

**说明**：
- 与 `showBegin()/showEnd()` 相对，用于隐藏多段文本、表格、图片等。
- 同样建议仅在 `hideBegin` 与 `hideEnd` 中使用**换行（Shift+Enter）**分隔。

---

## 日期与时间操作格式化器示例

> **注意**：自 v3.0.0 开始，Carbone 使用 [Day.js](https://day.js.org/docs/en/display/format) 进行日期处理。大多数和 Moment.js 相关的格式在 Day.js 中仍可用，但底层库已替换为 Day.js。

### 1. {c.now} 的使用

在模板中可以使用 `{c.now}` 获取当前 UTC 时间（`now`），前提是渲染时没有通过 `options.complement` 传入自定义数据覆盖它。示例如下：

**数据集**（可为空或不含 `c` 字段）：
```json
{}
```

**模板内容**：
```
当前时间：{c.now:formatD('YYYY-MM-DD HH:mm:ss')}
```

**渲染结果**（示例）：
```
当前时间：2025-01-07 10:05:30
```

**说明**：
- `{c.now}` 是一个保留标签，会自动插入系统当前 UTC 时间。
- 配合 `:formatD()` 等格式化器输出指定格式。

---

### 2. formatD( patternOut, patternIn )

**语法**：
```
{d.dateField:formatD(patternOut, patternIn)}
```

- `patternOut`：输出的日期格式，符合 Day.js 格式规范或本地化格式（如 `L`, `LL`, `LLLL` 等）。
- `patternIn`：输入日期格式，默认为 ISO 8601，可指定如 `YYYYMMDD`、`X`（Unix 时间戳）等。

**示例**：

**数据集**：
```json
{
  "eventDate": "20160131"
}
```

> 假设在 `Carbone.render(data, options)` 时，设置：
> ```json
> {
>   "lang": "en", 
>   "timezone": "Europe/Paris"
> }
> ```

**模板内容**：
```
日期(短格式)：{d.eventDate:formatD('L')} 
日期(完整英文)：{d.eventDate:formatD('LLLL')} 
星期几：{d.eventDate:formatD('dddd')}
```

**渲染结果**：
```
日期(短格式)：01/31/2016
日期(完整英文)：Sunday, January 31, 2016 12:00 AM
星期几：Sunday
```

**说明**：
- `patternIn` 若不指定，默认为 ISO 8601，但这里传入的 `20160131` 也能被自动识别。若想显式指定，则用 `{d.eventDate:formatD('L', 'YYYYMMDD')}` 等。
- `options.lang` 和 `options.timezone` 会影响输出语言及时区转换。

---

### 3. formatI( patternOut, patternIn )

**语法**：
```
{d.durationField:formatI(patternOut, patternIn)}
```

- `patternOut`：输出格式，可为 `human`, `human+`, `milliseconds/ms`, `seconds/s`, `minutes/m`, `hours/h`, `days/d`, `weeks/w`, `months/M`, `years/y` 等。
- `patternIn`：可选，输入单位默认为毫秒，也可指定 `seconds`, `minutes`, `hours`, `days` 等。

**示例**：

**数据集**：
```json
{
  "intervalMs": 2000,
  "longIntervalMs": 3600000
}
```

> 假设在 `Carbone.render(data, options)` 时：
> ```json
> {
>   "lang": "en",
>   "timezone": "Europe/Paris"
> }
> ```

**模板内容**：
```
2000 毫秒转秒：{d.intervalMs:formatI('second')}
3600000 毫秒转分钟：{d.longIntervalMs:formatI('minute')}
3600000 毫秒转小时：{d.longIntervalMs:formatI('hour')}
```

**渲染结果**：
```
2000 毫秒转秒：2
3600000 毫秒转分钟：60
3600000 毫秒转小时：1
```

**说明**：
- 对时间间隔进行单位换算，也可输出人性化时间（如 `human`/`human+`）来显示“几秒前”或“几分钟后”。
- 对正负值处理时，`human+` 会输出“...ago” 或 “in a few ...”，而 `human` 只输出“a few seconds”等不带方向的表达。

---

### 4. addD( amount, unit, patternIn )

**语法**：
```
{d.dateField:addD(amount, unit, patternIn)}
```

- `amount`：数值或字符串，表示要添加的数量。
- `unit`：可用 `day`、`week`、`month`、`year`、`hour`、`minute`、`second`、`millisecond` 等（不区分大小写，且支持复数与缩写）。
- `patternIn`：可选，指定输入日期格式，默认为 ISO8601。

**示例**：

**数据集**：
```json
{
  "startDate": "2017-05-10T15:57:23.769561+03:00"
}
```

> 假设在 `Carbone.render(data, options)` 时：
> ```json
> {
>   "lang": "fr",
>   "timezone": "Europe/Paris"
> }
> ```

**模板内容**：
```
在 startDate 上加 3 天：{d.startDate:addD('3', 'day')}
在 startDate 上加 3 个月：{d.startDate:addD('3', 'month')}
```

**渲染结果**：
```
在 startDate 上加 3 天：2017-05-13T12:57:23.769Z
在 startDate 上加 3 个月：2017-08-10T12:57:23.769Z
```

**说明**：
- 结果会在 UTC 时间下显示，若要本地化输出可再配合 `formatD('YYYY-MM-DD HH:mm')` 等格式化器。
- 如果输入日期为类似 `20160131` 并未显式指定 `patternIn`，Day.js 也可能自动识别，但最好用 `{d.field:addD('...', '...', 'YYYYMMDD')}` 以确保准确。

---

### 5. subD( amount, unit, patternIn )

**语法**：
```
{d.dateField:subD(amount, unit, patternIn)}
```

- 用法和 `addD()` 类似，只是把时间往前推。

**示例**：

**数据集**：
```json
{
  "myDate": "2017-05-10T15:57:23.769561+03:00"
}
```

**模板内容**：
```
在 myDate 上减 3 天：{d.myDate:subD('3', 'day')}
在 myDate 上减 3 个月：{d.myDate:subD('3', 'month')}
```

**渲染结果**：
```
在 myDate 上减 3 天：2017-05-07T12:57:23.769Z
在 myDate 上减 3 个月：2017-02-10T12:57:23.769Z
```

**说明**：
- 与 `addD` 相反，`subD` 会向过去方向移动日期。
- 支持相同的单位和格式配置。

---

### 6. startOfD( unit, patternIn )

**语法**：
```
{d.dateField:startOfD(unit, patternIn)}
```

- `unit`：`day`、`month`、`year`、`week` 等，将日期设为该单位的开始时间（如 `day`=凌晨，`month`=1号 00:00:00 等）。
- `patternIn`：可选，指定输入日期格式。

**示例**：

**数据集**：
```json
{
  "someDate": "2017-05-10T15:57:23.769561+03:00"
}
```

**模板内容**：
```
把 someDate 设为当天开始：{d.someDate:startOfD('day')}
把 someDate 设为当月开始：{d.someDate:startOfD('month')}
```

**渲染结果**：
```
把 someDate 设为当天开始：2017-05-10T00:00:00.000Z
把 someDate 设为当月开始：2017-05-01T00:00:00.000Z
```

**说明**：
- 常用于报表统计、对齐到某个时间粒度等场景。

---

### 7. endOfD( unit, patternIn )

**语法**：
```
{d.dateField:endOfD(unit, patternIn)}
```

- `unit`：`day`、`month`、`year` 等，将日期设为该单位的末尾时间（如 `day`=23:59:59.999，`month`=最后一天 23:59:59.999 等）。
- `patternIn`：可选，指定输入日期格式。

**示例**：

**数据集**：
```json
{
  "someDate": "2017-05-10T15:57:23.769561+03:00"
}
```

**模板内容**：
```
把 someDate 设为当天结束：{d.someDate:endOfD('day')}
把 someDate 设为当月结束：{d.someDate:endOfD('month')}
```

**渲染结果**：
```
把 someDate 设为当天结束：2017-05-10T23:59:59.999Z
把 someDate 设为当月结束：2017-05-31T23:59:59.999Z
```

**说明**：
- 与 `startOfD` 相对应，将日期“推到”当天、当月、当年的最末时刻。

---

### 8. diffD( toDate, unit, patternFromDate, patternToDate )

**语法**：
```
{d.fromDate:diffD(toDate, unit, patternFromDate, patternToDate)}
```

- `toDate`：对比的目标日期，可为字符串或数字（Unix 时间戳）。
- `unit`：可选，支持 `day/d`, `week/w`, `month/M`, `year/y`, `hour/h`, `minute/m`, `second/s`, `millisecond/ms`，默认为毫秒。
- `patternFromDate` / `patternToDate`：可选，指定输入日期的格式。

**示例**：

**数据集**：
```json
{
  "start": "20101001"
}
```
**模板内容**：
```
默认毫秒间隔：{d.start:diffD('20101201')}
以秒为单位：{d.start:diffD('20101201', 'second')}
以天为单位：{d.start:diffD('20101201', 'days')}
```

**渲染结果**：
```
默认毫秒间隔：5270400000
以秒为单位：5270400
以天为单位：61
```

**说明**：
- 若原始日期格式与目标日期格式不同时，可通过 `patternFromDate` 和 `patternToDate` 分别指定。
- 差值为正表示 `toDate` 比 `fromDate` 晚或大；为负表示 `toDate` 比 `fromDate` 早或小。

---

### 9. convDate( patternIn, patternOut )

> **注意**：**不推荐使用**  
> 自 v3.0.0 开始，官方更推荐使用 `formatD(patternOut, patternIn)`，它提供了更灵活的功能和与 Day.js 更好的兼容性。

**语法**：
```
{d.dateField:convDate(patternIn, patternOut)}
```

- `patternIn`：输入日期格式。
- `patternOut`：输出日期格式。

**示例**：

**数据集**：
```json
{
  "myDate": "20160131"
}
```

> 假设在 `Carbone.render(data, options)` 时：
> ```json
> {
>   "lang": "en",
>   "timezone": "Europe/Paris"
> }
> ```

**模板内容**：
```
简短日期：{d.myDate:convDate('YYYYMMDD', 'L')}
完整日期：{d.myDate:convDate('YYYYMMDD', 'LLLL')}
```

**渲染结果**：
```
简短日期：01/31/2016
完整日期：Sunday, January 31, 2016 12:00 AM
```

**说明**：
- 与 `formatD` 用法相似，但已标为 **不推荐**（UNRECOMMENDED）。
- 建议在新项目中统一使用 `formatD`。

---

### Day.js 日期格式速查表

在 `patternOut` 中可使用以下常用格式（部分例子）：

| 格式  | 示例输出                 | 描述                                             |
|:----  |:------------------------ |:------------------------------------------------ |
| `X`   | `1360013296`            | Unix 时间戳（单位：秒）                          |
| `x`   | `1360013296123`         | Unix 毫秒时间戳                                  |
| `YYYY`| `2025`                  | 四位数年份                                       |
| `MM`  | `01-12`                 | 两位数月份                                       |
| `DD`  | `01-31`                 | 两位数日期                                       |
| `HH`  | `00-23`                 | 24 小时制小时数，两位数                          |
| `mm`  | `00-59`                 | 分钟（两位数）                                   |
| `ss`  | `00-59`                 | 秒（两位数）                                     |
| `dddd`| `Sunday-Saturday`       | 星期的全称                                       |
| `ddd` | `Sun-Sat`               | 星期的缩写                                       |
| `A`   | `AM` / `PM`             | 上下午（大写）                                   |
| `a`   | `am` / `pm`             | 上下午（小写）                                   |
| `L`   | `MM/DD/YYYY`            | 本地化短日期格式                                 |
| `LL`  | `MMMM D, YYYY`          | 本地化日期，带月份全称                           |
| `LLL` | `MMMM D, YYYY h:mm A`   | 带时间、月份全称的本地化日期                     |
| `LLLL`| `dddd, MMMM D, YYYY h:mm A` | 带周几的完整本地化日期                   |

更多格式可参考 [Day.js 官方文档](https://day.js.org/docs/en/display/format) 或上文列出的清单。

---






## 其他条件控制器

Carbone 提供了许多**判断**（`ifEQ`、`ifNE`、`ifGT`、`ifGTE`、`ifLT`、`ifLTE`、`ifIN`、`ifNIN`、`ifEM`、`ifNEM`、`ifTE` 等），以及**组合逻辑**（`and()`、`or()`）和**分支输出**（`show(message)`、`elseShow(message)`）等。它们可以搭配用于在模板中实现灵活的条件逻辑。以下仅列出常用的示例，更多可参见官方文档：

- **ifEM()**：判断是否为空（`null`、`undefined`、`[]`、`{}`、`""` 等）。
- **ifNEM()**：判断是否不为空。
- **ifEQ(value)** / **ifNE(value)** / **ifGT(value)** / **ifGTE(value)** / **ifLT(value)** / **ifLTE(value)**：常规比较运算。
- **ifIN(value)** / **ifNIN(value)**：判断字符串或数组中是否包含指定内容。
- **ifTE(type)**：判断数据的类型（string、number、array、object、boolean、binary 等）。
- **and(value)** / **or(value)**：改变默认的条件连接方式。
- **show(message)** / **elseShow(message)**：在条件为真或假时，输出对应的消息字符串。

**示例**：

**数据集**：
```json
{
  "status1": 1,
  "status2": 2,
  "status3": 3
}
```

**模板内容**：
```
one = { d.status1:ifEQ(2):show(two):or(.status1):ifEQ(1):show(one):elseShow(unknown) }

two = { d.status2:ifEQ(2):show(two):or(.status2):ifEQ(1):show(one):elseShow(unknown) }

three = { d.status3:ifEQ(2):show(two):or(.status3):ifEQ(1):show(one):elseShow(unknown) }
```

**渲染结果**：
```
one = "one"
two = "two"
three = "unknown"
```

**说明**：
- `:ifEQ(2):show(two)` 表示若值等于2，则输出 "two"；否则继续下一个判断（`or(.status1):ifEQ(1):show(one)`)。
- `or()` 和 `and()` 用于配置逻辑操作符。
- `elseShow('unknown')` 用于在所有前置条件均不成立时，输出 "unknown"。

---
通过**数组操作**和**条件输出**示例，你可以：
1. **灵活处理数组**：使用 `:aggStr`、`:arrayJoin`、`:arrayMap`、`:count` 等操作，实现**合并、拼接、映射**以及**计数**功能。
2. **精准控制内容展示**：通过 `drop` / `keep` 或 `showBegin` / `showEnd` / `hideBegin` / `hideEnd` 等方式，根据条件（`ifEQ`、`ifGT` 等）决定是否保留文档中**特定元素**或**大段内容**。
3. **组合多种判断**：与数字、字符串相关的格式化器（如 `ifNEM`、`ifIN` 等）相配合，可实现更为复杂的业务逻辑控制。
---

## 常见问题与解决方案

### 1. Excel 模板中的空列和空单元格在渲染结果中消失

**问题描述**：在 Excel 模板中，如果某个单元格没有内容或样式，渲染时可能会被去除，导致最终文档中缺失该单元格。

**解决方法**：

- **填充背景色**：为目标区域的空单元格填充背景色，确保单元格在渲染过程中保持可见。
- **插入空格**：在空单元格内插入一个空格字符，即使没有实际内容，也能保持单元格的结构。
- **设置边框**：为表格添加边框样式，增强单元格的边界感，避免渲染时单元格消失。

**示例**：

在 Excel 模板中，为所有目标单元格设置浅灰色背景，并在空单元格中插入空格。

### 2. 合并单元格在输出时无效

**问题描述**：在使用循环功能输出表格时，如果模板中存在合并单元格，可能会导致渲染结果异常，如合并效果丢失或数据错位。

**解决方法**：

- **避免使用合并单元格**：尽量避免在循环输出的表格中使用合并单元格，以确保数据的正确渲染。
- **使用跨列居中**：如果需要文本在多个单元格中横向居中，可以使用“跨列居中”功能，而不是合并单元格。
- **限制合并单元格的位置**：若必须使用合并单元格，请仅在表格的上方或右侧进行合并，避免在下方或左侧合并，以防渲染时合并效果丢失。

**示例**：

**错误示范**：

| 姓名 | 部门 | 职位 |
|---|---|---|
| {d.staffs[i].name} | {d.staffs[i].department} | {d.staffs[i].position} |
| {d.staffs[i+1].name} | {d.staffs[i+1].department} | {d.staffs[i+1].position} |

*如果在“部门”列合并单元格，可能导致渲染异常。*

**正确示范**：

| 姓名 | 部门 | 职位 |
|---|---|---|
| {d.staffs[i].name} | {d.staffs[i].department} | {d.staffs[i].position} |
| {d.staffs[i+1].name} | {d.staffs[i+1].department} | {d.staffs[i+1].position} |

*保持每个单元格独立，避免合并单元格。*

### 3. 模板渲染时出现错误提示

**问题描述**：在模板渲染过程中，系统弹出错误提示，导致渲染失败。

**可能原因**：

- **占位符错误**：占位符名称与数据集字段不匹配或语法错误。
- **数据缺失**：数据集中缺少模板中引用的字段。
- **格式化器使用不当**：格式化器参数错误或不支持的格式化类型。

**解决方法**：

- **检查占位符**：确保模板中的占位符名称与数据集中的字段名称一致，且语法正确。
- **验证数据集**：确认数据集中包含所有模板中引用的字段，且数据格式符合要求。
- **调整格式化器**：检查格式化器的使用方法，确保参数正确，并使用支持的格式化类型。

**示例**：

**错误模板**：
```
订单编号：{d.orderId}
订单日期：{d.orderDate:format('YYYY/MM/DD')}
总金额：{d.totalAmount:format('0.00')}
```

**数据集**：
```json
{
  "orderId": "A123456789",
  "orderDate": "2025-01-01T10:00:00Z"
  // 缺少 totalAmount 字段
}
```

**解决方法**：在数据集中添加 `totalAmount` 字段，或从模板中移除对 `totalAmount` 的引用。

### 4. 模板文件上传失败

**问题描述**：在模板配置页面上传模板文件时，出现上传失败的情况。

**可能原因**：

- **文件格式不支持**：上传的文件格式不在支持范围内（仅支持 `.docx`、`.xlsx`、`.pptx`）。
- **文件大小过大**：模板文件过大，超过系统允许的上传大小限制。
- **网络问题**：网络连接不稳定，导致上传中断或失败。

**解决方法**：

- **检查文件格式**：确保上传的模板文件为 `.docx`、`.xlsx` 或 `.pptx` 格式。
- **压缩文件大小**：如果文件过大，尝试压缩模板文件或优化模板内容，减少文件大小。
- **稳定网络连接**：确保网络连接稳定，再次尝试上传操作。
