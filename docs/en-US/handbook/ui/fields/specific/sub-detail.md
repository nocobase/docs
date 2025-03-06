# Sub detail

## Introduction

Sub-details serve as the dedicated components for sub-forms in reading mode. Unlike label and title components, sub-details provide the ability to display more extensive data from the current table and enable the configuration of related table data. This allows multi-level relational data to be presented clearly in a nested format.

## Instructions

### Sub-details for Many-to-Many Relationship Fields

![20240822225058](https://static-docs.nocobase.com/20240822225058.png)

This feature supports the nested display of multi-level relationship fields, such as Orders/Products/Inventory or Orders/Products/Suppliers.

![20240822225231](https://static-docs.nocobase.com/20240822225231.png)

### Sub-details for One-to-One Relationship Fields

![20240822230215](https://static-docs.nocobase.com/20240822230215.png)

## Field Configuration Options

#### Setting Sorting Rules

You can adjust the display order for many-to-many relational data.

![20240822230359](https://static-docs.nocobase.com/20240822230359.png)

![20240822230422](https://static-docs.nocobase.com/20240822230422.png)

### Field Component

[Field Component](/handbook/ui/fields/association-field): Switch to other relationship field components, such as dropdown select, data selector, etc.

### Linkage Rules
:::info{title=Tip}
The version of NocoBase needs to be v1.3.17-beta or above.
:::

![20240906090603_rec_](https://static-docs.nocobase.com/20240906090603_rec_.gif)

For more information, refer to [Linkage Rules](/handbook/ui/blocks/block-settings/linkage-rule)
