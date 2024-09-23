# Markdown 区块

## 介绍

Markdown 区块无需绑定数据源使用，使用 Markdown 语法定义文本内容，可用于显示格式化的文本内容。

## 添加区块

可以在页面或弹窗里添加 Markdown 区块

![20240612205004](https://static-docs.nocobase.com/20240612205004.png)

也可以在表单区块和详情区块里添加内联（inline-block）的 Markdown 区块

![20240612205215](https://static-docs.nocobase.com/20240612205215.png)

## 字符串模板

![20240817175031](https://static-docs.nocobase.com/20240817175031.png)

## Handlebars

Handlebars 是一个 JavaScript 模板引擎，支持条件判断（{{#if}}）和循环（{{#each}}）,内置了大量常用 helper 供用户使用（`dateFormat`等），目前暂不支持扩展自定义helper。

![20240817175355](https://static-docs.nocobase.com/20240817175355.png)

![20240817175501](https://static-docs.nocobase.com/20240817175501.png)

```javascript
<h3>current role is : {{$nRole}}</h3>
 role list is
<ul>
 {{#each $user.roles}}
   <li>{{this.name}}</li>
  {{/each}}
 </ul>
```

<a href="https://handlebarsjs.com/guide/builtin-helpers" target="_blank"> Handlebars 语法参考</a>

### 常用helper

More advanced capabilities are implemented through helpers. Below are some commonly used built-in helpers. For more built-in helpers, please refer to
<a href="https://www.npmjs.com/package/@budibase/handlebars-helpers#helpers" target="_blank"> Handlebars helpers</a>

#### `dateFormat`

将时间字段格式化（支持时区处理）

![20240914125432](https://static-docs.nocobase.com/20240914125432.png)

```javascript
{{$nDate.now }}
Date format: {{dateFormat $nDate.now "YYYY-MM-DD HH:mm:ss"}}
Date format: {{dateFormat $nDate.now "YYYY-MM-DD HH:mm:ss" "Asia/Tokyo"}}
Date format: {{dateFormat $nDate.now "YYYY-MM-DD HH:mm:ss" "UTC"}}
```

#### `isEmpty`

检查给定的数组、对象或字符串是否为空。

![20240914132524](https://static-docs.nocobase.com/20240914132524.png)

```javascript
{{#isEmpty $user.roles}}
  <p>The roles is empty</p>
{{else}}
  <p>The roles is not empty</p>
{{/isEmpty}}
```

#### `contains`

检查数组中是否包含指定的元素，用于判断列表中是否有特定值。

```javascript
{{#contains $user.username  "nocobase" }}
  This is message for nocobase 
{{else}}
  This is message for other
{{/contains}}
```

#### `gt / lt / gte / lte`

用于比较大小，gt (大于), lt (小于), gte (大于等于), lte (小于等于) 是常用的逻辑比较。

```javascript
{{#if (gt $user.number1 $user.number2)}}
  <p>number1 is greater than number2</p>
{{/if}}

{{#if (lt $user.number1 $user.number2)}}
  <p>number1 is less than number2</p>
{{/if}}
```

#### `and`

返回两个条件都为真时的结果，适合多条件判断。

```javascript
{{#if (and condition1 condition2)}}
  <p>Both conditions are true</p>
{{/if}}
```

#### `uppercase / lowercase`

将字符串转换为全大写或全小写。

```javascript
<p>{{lowercase $user.nickname }}</p>
<p>{{uppercase $user.nickname }}</p>

```

### 补充说明

变量中使用关系对多的关系数据时，由于不同模板支持语法不同,在使用数组型数据变量时需要区分不同的写法。
如用户/角色（一对多）

使用字符串模板:

![20240909154424](https://static-docs.nocobase.com/20240909154424.png)

字符串模板中将数组自动用","分割显示。

![20240909154449](https://static-docs.nocobase.com/20240909154449.png)

使用 Handlebars 模板:

![20240909155651](https://static-docs.nocobase.com/20240909155651.png)

遍历数组 使用 `#each`

![20240909155720](https://static-docs.nocobase.com/20240909155720.png)

更多变量的介绍查看 [配置界面 / 变量](/handbook/ui/variables) 章节

## 使用变量

Markdown 的文本里也支持使用变量

![20240612205857](https://static-docs.nocobase.com/20240612205857.png)

区块内联的 Markdown 也支持变量

![20240612210333](https://static-docs.nocobase.com/20240612210333.png)

## 二维码

Markdown 里支持配置二维码，可以结合变量使用。

```html
<qr-code value="https://www.nocobase.com/" type="svg"></qr-code>
```
