# iframe 区块

<PluginInfo name="block-iframe"></PluginInfo>

## 介绍
Iframe 区块允许将外部网页或内容嵌入到当前页面中。

## 安装

内置插件，无需安装。

## 添加区块

![20240408220259](https://static-docs.nocobase.com/20240408220259.png)

配置 URL 或 Html 直接将外部应用嵌入。

![20240408220322](https://static-docs.nocobase.com/20240408220322.png)

## 字符串模板

默认的模板引擎
## Handlebars

Handlebars 是一个 JavaScript 模板引擎，支持条件判断（{{#if}}）和循环（{{#each}}）,内置了大量常用 helper 供用户使用（`dateFormat`等），目前暂不支持扩展自定义helper。

![20240811205239](https://static-docs.nocobase.com/20240811205239.png)

<a href="https://handlebarsjs.com/guide/builtin-helpers" target="_blank"> Handlebars 语法参考</a>

### 常用helper

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
{{#isEmpty someArray}}
  <p>The array is empty</p>
{{else}}
  <p>The array is not empty</p>
{{/isEmpty}}
```

#### `contains`

检查数组中是否包含指定的元素，用于判断列表中是否有特定值。

#### `gt / lt / gte / lte`

用于比较大小，gt (大于), lt (小于), gte (大于等于), lte (小于等于) 是常用的逻辑比较。

```javascript
{{#if (gt value1 value2)}}
  <p>Value1 is greater than Value2</p>
{{/if}}

{{#if (lt value1 value2)}}
  <p>Value1 is less than Value2</p>
{{/if}}
```

#### `and`

返回两个条件都为真时的结果，适合多条件判断。

```javascript
{{#if (and condition1 condition2)}}
  <p>Both conditions are true</p>
{{/if}}
```

#### `upperCase / lowerCase`

将字符串转换为全大写或全小写。

```javascript
<p>{{lowerCase $user.nickname }}</p>
<p>{{upperCase $user.nickname }}</p>

```
更多内置 helper 可参考<a href="hhttps://www.npmjs.com/package/@budibase/handlebars-helpers#helpers" target="_blank"> Handlebars helpers</a>

## 传入变量

### html 支持变量解析

![20240603120321](https://static-docs.nocobase.com/20240603120321.png)

![20240603120629](https://static-docs.nocobase.com/20240603120629.gif)

### url 支持变量

![20240603142219](https://static-docs.nocobase.com/20240603142219.png)

更多关于变量内容参考 [变量](/handbook/ui/variables)
