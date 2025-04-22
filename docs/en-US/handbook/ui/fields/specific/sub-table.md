# Sub table

## Introduction

Sub table are ideal for managing many-to-many relationship fields. They support bulk creation of target table data with associations, or selecting from existing data for association.

## Instructions for Use

![20240410151306](https://static-docs.nocobase.com/20240410151306.png)

Different field types in the sub table display distinct field components. Larger fields (such as rich text, JSON, and multi-line text) are edited via a floating pop-up window.

![20240410154316](https://static-docs.nocobase.com/20240410154316.png)

Relationship fields in the sub table:

Order (one-to-many) > Product (one-to-many) > Inventory.

![20240410152232](https://static-docs.nocobase.com/20240410152232.png)

By default, relationship field components are dropdown selectors (supporting data selectors or subforms via pop-up windows).

![20240410152847](https://static-docs.nocobase.com/20240410152847.png)

Supports drag-and-drop sorting.

![20240422215629](https://static-docs.nocobase.com/20240422215629.gif)

## Field Configuration Options

### Allow Selecting Existing Data (disabled by default)

Supports associating data from existing records.

![20240410160432](https://static-docs.nocobase.com/20240410160432.png)

![20240410160714](https://static-docs.nocobase.com/20240410160714.png)

### Field Component

[Field Component](/handbook/ui/fields/association-field): Switch to other relationship field components, such as dropdown select, data selector, etc.

### Linkage Rules
:::info{title=Tip}
The version of NocoBase needs to be v1.3.17-beta or above.
:::

![20240906084911_rec_](https://static-docs.nocobase.com/20240906084911_rec_.gif)

For more information, refer to [Linkage Rules](/handbook/ui/blocks/block-settings/field-linkage-rule)

### Allow disassociation

:::info{title=Tip}
The version of NocoBase needs to be v1.3.34-beta or above.
:::

![20241021210710](https://static-docs.nocobase.com/20241021210710.png)

![20241021211909](https://static-docs.nocobase.com/20241021211909.png)
