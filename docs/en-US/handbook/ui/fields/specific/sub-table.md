# Sub-tables

## Introduction

Sub-tables are designed to manage complex many-to-many relationship fields, offering the ability to create and associate multiple records simultaneously or to link existing data seamlessly.

## Instructions

In a subtable, different field types are represented by their respective components. Larger fields, such as rich text, JSON, or multi-line text, can be edited via a convenient floating popup window.

For relationship fields within the subtable:

Order (one-to-many) > Product (one-to-many) > Inventory.

The default interface for relationship fields is a dropdown selector, which also supports data selectors and subforms through popup windows.

Drag-and-drop sorting functionality is available, making it easy to organize your data.

## Field Configuration Options

### Allow Selection of Existing Data (Disabled by Default)

This option enables linking to existing records within the dataset.

![20240410160432](https://static-docs.nocobase.com/20240410160432.png)

![20240410160714](https://static-docs.nocobase.com/20240410160714.png)

### Field Component

[Field Component](/handbook/ui/fields/association-field): Switch to other relationship field components, such as dropdown select, data selector, etc.

### Linkage Rules
:::info{title=Tip}
The version of NocoBase needs to be v1.3.16-beta or above.
:::

![20240906084911_rec_](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240906084911_rec_.gif)

For more information, refer to [Linkage Rules](/handbook/ui/blocks/block-settings/linkage-rule)
