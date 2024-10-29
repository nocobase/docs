# Handlebars Template

## Introduction

Handlebars is a popular templating engine that allows us to dynamically embed data into HTML using a simple template syntax.

## Usage

### Basic Template Syntax

In Handlebars, the basic syntax includes:

- Interpolation expression `{{variable}}` to output data.
- Conditional expression `{{#if condition}}...{{/if}}` for logical conditions.
- Looping `{{#each array}}...{{/each}}` to iterate over arrays.

For example, given the following data:

```javascript
const context = {
  title: "Handlebars Template Example",
  items: ["Apple", "Banana", "Orange"]
};
```

With the following template:

```handlebars
<h1>{{title}}</h1>
<ul>
  {{#each items}}
    <li>{{this}}</li>
  {{/each}}
</ul>
```

The generated HTML will be:

```html
<h1>Handlebars Template Example</h1>
<ul>
  <li>Apple</li>
  <li>Banana</li>
  <li>Orange</li>
</ul>
```

For more content refer to
- [Core](/api/handlebars-helpers/core)

### Comparison Operations

You can use comparison operators for conditional statements. Supported comparison functions include `eq` (equals), `ne` (not equals), `gt` (greater than), `lt` (less than), etc.

```handlebars
{{#if (eq 10 10)}}
  <p>Equal</p>
{{else}}
  <p>Not equal</p>
{{/if}}
```

Logical operators like `and`, `or`, `not` can also be used:

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

For more content, refer to

- [Comparison](/api/handlebars-helpers/comparison)

### Mathematical Operations

You can perform simple mathematical operations in templates:

```handlebars
{{add 4 5}}  <!-- Output: 9 -->
{{minus 10 3}} <!-- Output: 7 -->
```

For more content refer to

- [Math](/api/handlebars-helpers/math)

### String Handling

```handlebars
{{uppercase "hello world"}}
<!-- results in:  HELLO WORLD -->
{{ellipsis "foo bar baz", 7}}
<!-- results in:  'foo bar…' -->
```

For more content, refer to

- [String](/api/handlebars-helpers/string)

### Date Handling

```handlebars
<p>{{dateFormat "2024-09-25" "YYYY"}}</p>  <!-- Output: 2024-09-25 -->
```

For more content refer to
- [Date](/api/handlebars-helpers/date)

### Array and Object Operations

```handlebars
<p>First element: {{first items}}</p>  <!-- Output: First element: Apple -->
<p>Last element: {{last items}}</p>  <!-- Output: Last element: Orange -->
```

For more content, refer to

- [Array](/api/handlebars-helpers/array)
- [Object](/api/handlebars-helpers/object)

### More Helpers


| Category                                         | Description                        |
| ------------------------------------------------ | ---------------------------------- |
| [Core](/api/handlebars-helpers/core)             | Built-in Handlebars methods        |
| [Array](/api/handlebars-helpers/array)           | Methods for handling arrays        |
| [Comparison](/api/handlebars-helpers/comparison) | Comparison operators and methods   |
| [Date](/api/handlebars-helpers/date)             | Methods for date and time          |
| [HTML](/api/handlebars-helpers/html)             | Methods for HTML document handling |
| [I18n](/api/handlebars-helpers/i18n)             | Internationalization support       |
| [Math](/api/handlebars-helpers/math)             | Mathematical functions             |
| [Number](/api/handlebars-helpers/number)         | Number formatting and handling     |
| [Object](/api/handlebars-helpers/object)         | Methods for object handling        |
| [Path](/api/handlebars-helpers/path)             | Methods for path and filesystem    |
| [Regex](/api/handlebars-helpers/regex)           | Regular expression methods         |
| [String](/api/handlebars-helpers/string)         | String manipulation methods        |
| [URL](/api/handlebars-helpers/url)               | URL parsing and building methods   |
