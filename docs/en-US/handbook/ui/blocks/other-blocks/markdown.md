# Markdown Block

## Introduction

Markdown blocks can be used without binding to a data source. They are defined using Markdown syntax and are suitable for displaying formatted text content.

## Adding Blocks

Markdown blocks can be added within pages or pop-ups.

![20240612205004](https://static-docs.nocobase.com/20240612205004.png)

Inline Markdown blocks can also be added within form blocks and details blocks.

![20240612205215](https://static-docs.nocobase.com/20240612205215.png)

## string template

![20240817175031](https://static-docs.nocobase.com/20240817175031.png)

## Handlebars

Handlebars is a JavaScript template engine that supports conditional statements ({{#if}}) and loops ({{#each}}). It includes many built-in helpers for users (such as dateFormat), but currently does not support extending custom helpers.

![20240817175355](https://static-docs.nocobase.com/20240817175355.png)

![20240817175501](https://static-docs.nocobase.com/20240817175501.png)

<a href="https://handlebarsjs.com/guide/builtin-helpers" target="_blank">Handlebars Syntax reference</a>

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

### Supplementary explanation

When using association data in variables, particularly for to-many relationships, different template engines support different syntaxes. Therefore, when working with array-type data variables, it's necessary to distinguish between the various syntaxes. The following example uses the User/Role (one-to-many) variable

string template:

![20240909154424](https://static-docs.nocobase.com/20240909154424.png)

Automatically display an array in a string template with elements separated by commas.

![20240909154449](https://static-docs.nocobase.com/20240909154449.png)

Handlebars：

![20240909155651](https://static-docs.nocobase.com/20240909155651.png)

Iterate over an array using #each.

![20240909155720](https://static-docs.nocobase.com/20240909155720.png)

## Using Variables

Markdown also supports variables.

![20240612205857](https://static-docs.nocobase.com/20240612205857.png)

Inline Markdown within blocks also supports variables.

![20240612210333](https://static-docs.nocobase.com/20240612210333.png)

For more introductions to variables, check out the [Edit UI / Variables](/handbook/ui/variables) section.

## QR Codes

Markdown also supports the configuration of QR codes, which can be used in combination with variables.

```html
<qr-code value="https://www.nocobase.com/" type="svg"></qr-code>
```
