# Handlebars 模板

## 简介

Handlebars 是一个流行的模板引擎，它让我们能够使用简单的模板语法将数据动态嵌入 HTML 中。

## 用法

### 模板语法基础

在 Handlebars 中，模板的基本语法包括：

- 插值表达式 `{{variable}}` 用于输出数据。
- 条件表达式 `{{#if condition}}...{{/if}}` 用于逻辑判断。
- 循环 `{{#each array}}...{{/each}}` 用于遍历数组。

例如，假设有以下数据：

```javascript
const context = {
  title: "Handlebars 模板示例",
  items: ["苹果", "香蕉", "橙子"]
};
```

配合以下模板：

```handlebars
<h1>{{title}}</h1>
<ul>
  {{#each items}}
    <li>{{this}}</li>
  {{/each}}
</ul>
```

生成的 HTML 将会是：

```html
<h1>Handlebars 模板示例</h1>
<ul>
  <li>苹果</li>
  <li>香蕉</li>
  <li>橙子</li>
</ul>
```

更多内容参考
- [Core](/api/handlebars-helpers/core)

### 比较操作

你可以使用比较操作符进行条件判断，支持的比较函数包括 `eq`（等于）、`ne`（不等于）、`gt`（大于）、`lt`（小于）等。

```handlebars
{{#if (eq 10 10)}}
  <p>相等</p>
{{else}}
  <p>不相等</p>
{{/if}}
```

也可以是逻辑运算符 `and`、`or`、`not` 等：

```handlebars
{{#if (and true true)}}
  <p>Both are true!</p>
{{/if}}
```

```handlebars
{{#if (or false true)}}
  <p>One of them is true!</p>
{{/if}}
```

更多内容参考
- [Comparison](/api/handlebars-helpers/comparison)

### 数学运算

你可以在模板中执行简单的数学运算：

```handlebars
{{add 4 5}}  <!-- 输出: 9 -->
{{minus 10 3}} <!-- 输出: 7 -->
```

更多内容参考
- [Math](/api/handlebars-helpers/math)

### 字符串处理

```handlebars
{{uppercase "hello world"}}
<!-- results in:  HELLO WORLD -->
{{ellipsis "foo bar baz", 7}}
<!-- results in:  'foo bar…' -->
```

更多内容参考
- [String](/api/handlebars-helpers/string)

### 日期处理

```handlebars
<p>{{dateFormat "2024-09-25" "YYYY"}}</p>  <!-- 输出: 2024-09-25 -->
```

更多内容参考
- [Date](/api/handlebars-helpers/date)

### 数组与对象操作

```handlebars
<p>第一个元素: {{first items}}</p>  <!-- 输出: 第一个元素: 苹果 -->
<p>最后一个元素: {{last items}}</p>  <!-- 输出: 最后一个元素: 橙子 -->
```

更多内容参考

- [Array](/api/handlebars-helpers/array)
- [Object](/api/handlebars-helpers/object)

### 更多 Helpers

| Category       | Description                          |
|------------|-------------------------------|
| [Core](/api/handlebars-helpers/core)        | Handlebars 内置的方法        |
| [Array](/api/handlebars-helpers/array)      | 处理数组相关操作和方法        |
| [Comparison](/api/handlebars-helpers/comparison) | 比较操作符和相关方法          |
| [Date](/api/handlebars-helpers/date)       | 与日期和时间处理相关的操作和方法 |
| [HTML](/api/handlebars-helpers/html)       | 与 HTML 文档和元素操作相关的内容 |
| [I18n](/api/handlebars-helpers/i18n)       | 国际化支持和多语言处理        |
| [Math](/api/handlebars-helpers/math)       | 数学函数和计算相关的操作      |
| [Number](/api/handlebars-helpers/number)   | 数字处理和格式化相关的内容    |
| [Object](/api/handlebars-helpers/object)   | 对象操作和属性相关的方法      |
| [Path](/api/handlebars-helpers/path)       | 路径操作和文件系统相关的内容  |
| [Regex](/api/handlebars-helpers/regex)     | 正则表达式及其使用            |
| [String](/api/handlebars-helpers/string)   | 字符串处理和操作相关的方法    |
| [URL](/api/handlebars-helpers/url)         | URL解析和构建相关的内容       |
