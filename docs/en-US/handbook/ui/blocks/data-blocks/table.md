# Table Block

## Introduction

The table block is one of the core data blocks built into NocoBase, displaying and managing structured data in table form. It features flexible configuration options for customizing table columns, column widths, sorting rules, data scope, and includes various built-in actions for configuration: filter, add new, duplicate, edit, delete, etc.

## Adding Blocks

 <video width="100%" height="440" controls>
      <source src="https://static-docs.nocobase.com/20240415215027.mp4" type="video/mp4">
</video>

## Block Settings

![20240415215319](https://static-docs.nocobase.com/20240415215319.png)

### Data Scope

Example: Default filter for invoices with the "Shipped" status.

![20240415215404](https://static-docs.nocobase.com/20240415215404.png)

For more information, refer to [Setting Data Scope](/handbook/ui/blocks/block-settings/data-scope).

### Setting Sorting Rule

Example: Display invoices in reverse order by shipping date.

![20240415215509](https://static-docs.nocobase.com/20240415215509.png)

For more information, refer to [Setting Sorting Rule](/handbook/ui/blocks/block-settings/sorting-rule).

### Connecting Data Blocks

Example: Connect the order table block with the order details block to achieve filter linkage.

  <video width="100%" height="440" controls>
      <source src="https://static-docs.nocobase.com/20240415221426.mp4" type="video/mp4">
</video>

For more information, refer to [Connecting Data Blocks](/handbook/ui/blocks/block-settings/connect-block).

- [Edit Block Title](/handbook/ui/blocks/block-settings/block-title)
- [Set Data Loading Mode](/handbook/ui/blocks/block-settings/loading-mode)
- [Save as Block Template](/handbook/block-template)

## Configure Fields

### Fields in Current Collection

![20240415223714](https://static-docs.nocobase.com/20240415223714.png)

### Fields in Related Collections

![20240415223746](https://static-docs.nocobase.com/20240415223746.png)

### Display Inherited Table Fields (Parent Table Fields)

Example: Lease order table inherits from the order table.

![20240415224242](https://static-docs.nocobase.com/20240415224242.png)

Configuration options for table column fields can be found in [Table Column Fields](/handbook/ui/fields/generic/table-column).

## Configure Actions

### Global Actions

![20240415225525](https://static-docs.nocobase.com/20240415225525.png)

- [Filter](/handbook/ui/actions/types/filter)
- [Add](/handbook/ui/actions/types/add-new)
- [Delete](/handbook/ui/actions/types/delete)
- [Refresh](/handbook/ui/actions/types/refresh)
- [Import](/handbook/action-import)
- [Export](/handbook/action-export)
- [Add record](/handbook/action-add-record)
- [Bulk Update](/handbook/action-bulk-update)
- [Bulk Edit](/handbook/action-bulk-edit)

### Row Actions

![20240415225657](https://static-docs.nocobase.com/20240415225657.png)

- [View](/handbook/ui/actions/types/view)
- [Edit](/handbook/ui/actions/types/edit)
- [Duplicate](/handbook/action-duplicate)
- [Delete](/handbook/ui/actions/types/delete)
- [Popup](/handbook/ui/actions/types/pop-up)
- [Update Record](/handbook/ui/actions/types/update-record)
- [Custom Request](/handbook/action-custom-request)
