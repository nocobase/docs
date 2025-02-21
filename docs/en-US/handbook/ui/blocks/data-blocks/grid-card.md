# Grid Cards

## Introduction

The Grid Card block offers a concise and visually appealing way to display summary information of data records. Designed for flexibility, it allows you to configure the number of columns based on screen size, ensuring a seamless user experience across all devices.

## Adding Blocks

<video width="100%" height="440" controls>
      <source src="https://static-docs.nocobase.com/20240418120045.mp4" type="video/mp4">
</video>

## Block Settings

![20240419220708](https://static-docs.nocobase.com/20240419220708.png)

### Data Scope

<video width="100%" height="440" controls>
      <source src="https://static-docs.nocobase.com/20240419173617.mp4" type="video/mp4">
</video>

For a detailed guide, see [Setting the Data Scope](/handbook/ui/blocks/block-settings/data-scope).

### Configuring the Number of Columns per Row

![20240408160228](https://static-docs.nocobase.com/20240408160228.png)

You can adjust the number of columns to fit different screen sizes, ensuring optimal display.

![20240408160844](https://static-docs.nocobase.com/20240408160844.png)

### Configuring the Data Loading Method

Example: Connecting data blocks and setting the appropriate data loading method.

The Orders table and Products table have a many-to-many relationship. The Orders Table block and Products Grid Card block can be linked to enable data filtering. In this setup, the grid block’s data loading method is configured to load "After Filtering Data."

<video width="100%" height="440" controls>
<source src="https://static-docs.nocobase.com/20240419175643.mp4" type="video/mp4">
</video>

### Setting Block Height

Example: Configure the Orders Grid Card block to display in "Full Height" mode for an expansive view.

![20240604232619](https://static-docs.nocobase.com/20240604232619.gif)

For more details, refer to [Block Height](/handbook/ui/blocks/block-settings/block-height).

- [Setting Sorting Rules](/handbook/ui/blocks/block-settings/sorting-rule)
- [Saving as a Block Template](/handbook/block-template)

## Configuring Fields

### Fields of the Current Table

![20240418123118](https://static-docs.nocobase.com/20240418123118.png)

### Fields of Related Tables

![20240418123147](https://static-docs.nocobase.com/20240418123147.png)

For a comprehensive guide to field configuration options for the Grid Card block, see [Detail Fields](/handbook/ui/fields/generic/detail-form-item).

## Configuring Actions

### Global Actions

![20240418122905](https://static-docs.nocobase.com/20240418122905.png)

- [Filter](/handbook/ui/actions/types/filter)
- [Add](/handbook/ui/actions/types/add-new)
- [Delete](/handbook/ui/actions/types/delete)
- [Refresh](/handbook/ui/actions/types/refresh)
- [Import](/handbook/action-import)
- [Export](/handbook/action-export)

### Row Actions

![20240419222251](https://static-docs.nocobase.com/20240419222251.png)

- [Edit](/handbook/ui/actions/types/edit)
- [Delete](/handbook/ui/actions/types/delete)
- [Pop-up](/handbook/ui/actions/types/pop-up)
- [Update Record](/handbook/ui/actions/types/update-record)
- [Custom Request](/handbook/action-custom-request)
- [Trigger Workflow](/handbook/workflow/manual/triggers/custom-action)
