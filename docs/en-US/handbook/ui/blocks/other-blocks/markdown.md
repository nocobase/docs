# Markdown Block

## Introduction

Markdown blocks can be used without binding to a data source. They are defined using Markdown syntax and are suitable for displaying formatted text content.

## Adding Blocks

Markdown blocks can be added within pages or pop-ups.

![20240612205004](https://static-docs.nocobase.com/20240612205004.png)

Inline Markdown blocks can also be added within form blocks and details blocks.

![20240612205215](https://static-docs.nocobase.com/20240612205215.png)

## Template engine

![20240811204945](https://static-docs.nocobase.com/20240811204945.png)


### string template

![20240811204803](https://static-docs.nocobase.com/20240811204803.png)

### Handlebars

Handlebars is a JavaScript templating engine that supports conditionals ({{#if}}) and loops ({{#each}}), but currently does not support custom helpers.

![20240811204856](https://static-docs.nocobase.com/20240811204856.png)

![20240811203846](https://static-docs.nocobase.com/20240811203846.png)


<a href="https://handlebarsjs.com/guide/builtin-helpers" target="_blank">Handlebars Syntax reference</a>


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
