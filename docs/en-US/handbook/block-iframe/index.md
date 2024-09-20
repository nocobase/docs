# Iframe Block

<PluginInfo name="block-iframe"></PluginInfo>

## Introduction
The Iframe block allows you to embed external web pages or content into the current page.

## Installation

It's a built-in plugin, no installation is required.

## Adding Blocks

![20240408220259](https://static-docs.nocobase.com/20240408220259.png)

Configure the URL or Html to directly embed the external application.

![20240408220322](https://static-docs.nocobase.com/20240408220322.png)


## string template
The default rendering engine supports variables
## Handlebars

Handlebars is a JavaScript template engine that supports conditional statements ({{#if}}) and loops ({{#each}}). It includes many built-in helpers for users (such as dateFormat), but currently does not support extending custom helpers.

![20240811205239](https://static-docs.nocobase.com/20240811205239.png)

<a href="https://handlebarsjs.com/guide/builtin-helpers" target="_blank"> Handlebars Syntax reference</a>

### common helper

#### `dateFormat`

Format the time field (supporting time zone).

![20240914125432](https://static-docs.nocobase.com/20240914125432.png)

```javascript
{{$nDate.now }}
Date format: {{dateFormat $nDate.now "YYYY-MM-DD HH:mm:ss"}}
Date format: {{dateFormat $nDate.now "YYYY-MM-DD HH:mm:ss" "Asia/Tokyo"}}
Date format: {{dateFormat $nDate.now "YYYY-MM-DD HH:mm:ss" "UTC"}}
```

#### `isEmpty`

Check if the target array, object, or string is empty.

![20240914132524](https://static-docs.nocobase.com/20240914132524.png)

```javascript
{{#isEmpty someArray}}
  <p>The array is empty</p>
{{else}}
  <p>The array is not empty</p>
{{/isEmpty}}
```

#### `contains`

Check if the array contains the specified element to determine if a specific value is present in the list.

#### `gt / lt / gte / lte`

For comparing values, gt (greater than), lt (less than), gte (greater than or equal to), and lte (less than or equal to) are commonly used logical comparisons.

```javascript
{{#if (gt value1 value2)}}
  <p>Value1 is greater than Value2</p>
{{/if}}

{{#if (lt value1 value2)}}
  <p>Value1 is less than Value2</p>
{{/if}}
```

#### `and`

Return the result when both conditions are true, suitable for multi-condition evaluation.

```javascript
{{#if (and condition1 condition2)}}
  <p>Both conditions are true</p>
{{/if}}
```

#### `upperCase / lowerCase`

Convert the string to either all uppercase or all lowercase

```javascript
<p>{{lowerCase $user.nickname }}</p>
<p>{{upperCase $user.nickname }}</p>

```

For more built-in helpers, refer to <a href="https://www.npmjs.com/package/@budibase/handlebars-helpers#helpers" target="_blank">Handlebars helpers Syntax reference</a>

## Passing Variables

### Html supports variable resolution

![20240603120321](https://static-docs.nocobase.com/20240603120321.png)

![20240603120629](https://static-docs.nocobase.com/20240603120629.gif)

### Url supports variables

![20240603142219](https://static-docs.nocobase.com/20240603142219.png)

For more information on variables, refer to [Variables](/handbook/ui/variables)
