# Kanban Block

<PluginInfo name="block-kanban"></PluginInfo>

## Introduction

The Kanban block presents data in a Kanban view, enabling drag-and-drop functionality to update the status of items.

## Installation

This is a built-in plugin, so no installation is needed.

## Adding a Block

<video width="100%" height="440" controls>
      <source src="https://static-docs.nocobase.com/20240419214551.mp4" type="video/mp4">
</video>

![20240419214751](https://static-docs.nocobase.com/20240419214751.png)

### Grouping Field

Used to organize data into specific groups. When creating or configuring a Kanban block, you must select a single-choice field as the grouping field.

### Sorting Field

Used to arrange data within each group. Only fields tied to the grouping field can be selected for sorting. You can also quickly create a sorting field while setting up the Kanban block.

![20240426170628](https://static-docs.nocobase.com/20240426170628.png)

## Managing Kanban Data

### Clicking a Card

Clicking on a card opens a pop-up window where you can configure data blocks as needed, such as setting up an edit form to modify the current card's record.

![20240419220115](https://static-docs.nocobase.com/20240419220115.png)

You can also configure how the pop-up window opens and its size.

![20240419220159](https://static-docs.nocobase.com/20240419220159.png)

### Dragging a Card

Example: Adjust the status of a product by dragging the card. Once dragging is complete, the data will be saved automatically.

<video width="100%" height="440" controls>
      <source src="https://static-docs.nocobase.com/20240419221247.mp4" type="video/mp4">
</video>

## Block Configuration Options

### Setting Data Range

Example: Default filtering for promotional products.

![20240422095659](https://static-docs.nocobase.com/20240422095659.png)

For more details, refer to [Setting Data Range](/handbook/ui/blocks/block-settings/data-scope).

### Setting Block Height

Example: Adjust the height of the order Kanban block, with the scrollbar appearing within the columns.

![20240605220635](https://static-docs.nocobase.com/20240605220635.gif)

For more details, refer to [Block Height](/handbook/ui/blocks/block-settings/block-height).

## Configuring Fields

![20240419215909](https://static-docs.nocobase.com/20240419215909.png)

## Configuring Actions

![20240419220903](https://static-docs.nocobase.com/20240419220903.png)

- [Filter](/handbook/ui/actions/types/filter)
- [Add New](/handbook/ui/actions/types/add-new)
