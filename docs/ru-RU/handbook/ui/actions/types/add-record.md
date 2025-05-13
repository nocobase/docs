# Add Record

## Introduction

The "Add Record" feature allows users to seamlessly insert records into any data table as part of an operation.

![20240423202949](https://static-docs.nocobase.com/20240423202949.png)

Select the target data table and add a form block.

![20240423203010](https://static-docs.nocobase.com/20240423203010.png)

## Using Tables to Select Records

This functionality is currently designed for setting default field values in the "Add Record" operation within table blocks.

For example, the Order table and the Product table have a many-to-many relationship. In the Product table block, you can configure the "Add Record" operation to input data into the Order table.

![20240426101803](https://static-docs.nocobase.com/20240426101803.png)

In this case, set the default value of the "Product" relationship field in the Order table to "Table selected records".

![20240426101823](https://static-docs.nocobase.com/20240426101823.png)

![20240426101922](https://static-docs.nocobase.com/20240426101922.png)

Here's the complete operation:

<video width="100%" height="440" controls>
<source src="https://static-docs.nocobase.com/20240426102142.mp4" type="video/mp4">
</video>

## Operation Configuration Items

![20240423203050](https://static-docs.nocobase.com/20240423203050.png)

- [Edit Button](/handbook/ui/actions/action-settings/edit-button)
- [Open Mode](/handbook/ui/actions/action-settings/open-mode)
- [Popup Size](/handbook/ui/actions/action-settings/popup-size)
