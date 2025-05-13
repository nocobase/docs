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

Use {{xxx}} for interpolation.

![20240817175031](https://static-docs.nocobase.com/20240817175031.png)

### Handlebars

Support using rich syntax such as conditions and loops to dynamically generate HTML content.

![20240817175355](https://static-docs.nocobase.com/20240817175355.png)

![20240817175501](https://static-docs.nocobase.com/20240817175501.png)

For more information, refer to [Handlebars template](/handbook/template-handlebars)

## Using Variables

Variables supported in Markdown vary depending on the location.

Markdown on the page supports common system variables, such as the current user, current role, date variables, etc.

![20240612205857](https://static-docs.nocobase.com/20240612205857.png)

Markdown in block row operation popups (or subpages) supports more data context variables, such as the current record, current popup record, etc.

![20240612210333](https://static-docs.nocobase.com/20240612210333.png)

### Association data in variables

For example, order/shipment (one-to-one).

Use the 'current popup record' variable in the detail operation popup's Markdown block to display the shipping number of the current order.

#### String templates will automatically handle association data (by automatically loading the required association data)

![20241210165519](https://static-docs.nocobase.com/20241210165519.png)

![20241210165541](https://static-docs.nocobase.com/20241210165541.png)

#### Currently, Handlebars does not support preloading association data. Users need to explicitly configure the corresponding association fields in the data block to retrieve the relevant data during rendering.

![20241210165625](https://static-docs.nocobase.com/20241210165625.png)

After configuring the 'Shipment' association field in the order table block, the Markdown block in the detail operation (using Handlebars) will be able to access and render the association data.

![20241210165655](https://static-docs.nocobase.com/20241210165655.png)

### Syntax rules

In addition to the difference in association data preloading, there are also syntax rule differences between the two templates. For example, when using variables with a to-many association, the retrieved data is usually an array. The two templates handle array-type data differently.

For example, order/product (many-to-many)

Use the 'current popup record' variable in the detail operation popup's Markdown block to display the names of the products associated with the current order (multiple items).

#### String templates display arrays by separating the elements with commas (',')

![20241210170508](https://static-docs.nocobase.com/20241210170508.png)

![20241210170545](https://static-docs.nocobase.com/20241210170545.png)

#### Handlebars templates use #each to iterate over array data

![20241210205357](https://static-docs.nocobase.com/20241210205357.png)

The related data to be used must be configured in the data block

![20241210170814](https://static-docs.nocobase.com/20241210170814.png)

```javascript

<ul>
  {{#each   $nPopupRecord.products }}
    <li>{{this.product_name}}</li>
  {{/each}}
</ul>
```

For more introductions to variables, check out the [Edit UI / Variables](/handbook/ui/variables) section.

## QR Codes

Markdown also supports the configuration of QR codes, which can be used in combination with variables.

```html
<qr-code value="https://www.nocobase.com/" type="svg"></qr-code>
```

## RoadMap

- Planned or in progress
  - Handlebars supports association data preloading.