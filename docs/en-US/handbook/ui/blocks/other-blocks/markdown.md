# Markdown Block

## Introduction

Markdown blocks can be used without binding to a data source. They are defined using Markdown syntax and are suitable for displaying formatted text content.

## Adding Blocks

Markdown blocks can be added within pages or pop-ups.

![20240612205004](https://static-docs.nocobase.com/20240612205004.png)

Inline Markdown blocks can also be added within form blocks and details blocks.

![20240612205215](https://static-docs.nocobase.com/20240612205215.png)

## Template engine

### string template

![20240817175031](https://static-docs.nocobase.com/20240817175031.png)

### Handlebars

![20240817175355](https://static-docs.nocobase.com/20240817175355.png)

![20240817175501](https://static-docs.nocobase.com/20240817175501.png)

| Category       | Description                         |
|-------------|-------------------------------------|
| [Core](/api/handlebars-helpers/core)     | Built-in helpers        |
| [Array](/api/handlebars-helpers/array)      | Operations and methods related to arrays       |
| [Comparison](/api/handlebars-helpers/comparison)| Comparison operators and related methods       |
| [Date](/api/handlebars-helpers/date)       | Operations and methods related to date and time handling |
| [HTML](/api/handlebars-helpers/html)       | Content related to HTML documents and elements  |
| [I18n](/api/handlebars-helpers/i18n)       | Support for internationalization and multilingual handling |
| [Math](/api/handlebars-helpers/math)       | Mathematical functions and calculations       |
| [Number](/api/handlebars-helpers/number)   | Content related to number handling and formatting |
| [Object](/api/handlebars-helpers/object)   | Methods related to object operations and properties |
| [Path](/api/handlebars-helpers/path)       | Path operations and content related to the file system |
| [Regex](/api/handlebars-helpers/regex)     | Regular expressions and their usage            |
| [String](/api/handlebars-helpers/string)   | Methods related to string manipulation and operations |
| [URL](/api/handlebars-helpers/url)         | Content related to URL parsing and construction  |

## Using Variables

Markdown also supports variables.

![20240612205857](https://static-docs.nocobase.com/20240612205857.png)

Inline Markdown within blocks also supports variables.

![20240612210333](https://static-docs.nocobase.com/20240612210333.png)


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
