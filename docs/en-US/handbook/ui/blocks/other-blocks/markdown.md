# Markdown Block

## Introduction

Markdown blocks can be used without binding to a data source. They are defined using Markdown syntax and are suitable for displaying formatted text content.

## Adding Blocks

Markdown blocks can be added within pages or pop-ups.

![20240612205004](https://static-docs.nocobase.com/20240612205004.png)

Inline Markdown blocks can also be added within form blocks and details blocks.

![20240612205215](https://static-docs.nocobase.com/20240612205215.png)

## Template engine


![20240817174742](https://static-docs.nocobase.com/20240817174742.png)


### string template

![20240817175031](https://static-docs.nocobase.com/20240817175031.png)

### Handlebars

Handlebars is a JavaScript templating engine that supports conditionals ({{#if}}) and loops ({{#each}}), but currently does not support custom helpers.

![20240817175355](https://static-docs.nocobase.com/20240817175355.png)

![20240817175501](https://static-docs.nocobase.com/20240817175501.png)


<a href="https://handlebarsjs.com/guide/builtin-helpers" target="_blank">Handlebars Syntax reference</a>


## Using Variables

Markdown also supports variables.

![20240612205857](https://static-docs.nocobase.com/20240612205857.png)

Inline Markdown within blocks also supports variables.

![20240612210333](https://static-docs.nocobase.com/20240612210333.png)

### 补充说明

When using association data in variables, particularly for to-many relationships, different template engines support different syntaxes. Therefore, when working with array-type data variables, it's necessary to distinguish between the various syntaxes. The following example uses the User/Role (one-to-many) variable

string template:

![20240909154424](https://static-docs.nocobase.com/20240909154424.png)

Automatically display an array in a string template with elements separated by commas.

![20240909154449](https://static-docs.nocobase.com/20240909154449.png)

Handlebars：

![20240909155651](https://static-docs.nocobase.com/20240909155651.png)

Iterate over an array using #each.

![20240909155720](https://static-docs.nocobase.com/20240909155720.png)
For more introductions to variables, check out the [Edit UI / Variables](/handbook/ui/variables) section.

## QR Codes

Markdown also supports the configuration of QR codes, which can be used in combination with variables.

```html
<qr-code value="https://www.nocobase.com/" type="svg"></qr-code>
```
