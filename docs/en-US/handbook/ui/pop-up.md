# Popup

## Introduction

A popup window is a small window on the page, used to display some extended content within the current page. It can be presented in the form of a drawer or a dialog box, such as the details of a particular order or product, and can also be used for editing data. Popup operations play a very important role in the NocoBase interface configuration. Many blocks provide various popup operations, which can be used to add, view, edit data, etc. At the same time, various popup operations can be customized to adapt to various scenarios and needs.

## Types & Size

> In version v1.3.0-alpha and above, it supports opening as a [page](/handbook/ui/pop-up#page).

Pop-ups come in two types: drawer and dialog. Configure the type and size of the pop-up during the configuration of actions.

<video width="100%" height="440" controls>

 <source src="https://static-docs.nocobase.com/z-2024-06-13-09.43.42-2024-06-13-09-44-18.mp4">

</video>

### Drawer

![2024-06-13_09-45-33-2024-06-13-09-46-11](https://static-docs.nocobase.com/2024-06-13_09-45-33-2024-06-13-09-46-11.png)

### Dialog

![2024-06-13_09-45-56-2024-06-13-09-46-20](https://static-docs.nocobase.com/2024-06-13_09-45-56-2024-06-13-09-46-20.png)

### Page

:::info{title=Tip}
The version of NocoBase needs to be v1.3.0-alpha or above.
:::

![20240809170648](https://static-docs.nocobase.com/20240809170648.png)

## Use Cases

The main scenarios of the popup window currently include:

- Popup actions of the block, which can be used to add, view, edit the data of the block;
- Popup actions of relationship data, which can be used to view and edit the extended information of relationship data.

### Popup Actions of the Block

![20240511141127](https://static-docs.nocobase.com/20240511141127.png)

### Popup Actions of Relationship Data

![20240511141247](https://static-docs.nocobase.com/20240511141247.png)

### Sharing a Single Record's Data

:::info{title=Tip}
The version of NocoBase needs to be v1.3.0-alpha or above.
:::

If you want to share the data of a single record with others, you can directly copy the URL of the browser address bar after opening the popup window, and then share it with others. When others open this URL, the corresponding popup window will automatically pop up on the page.

![20240809173339_rec_](https://static-docs.nocobase.com/20240809173339_rec_.gif)

## Adding Blocks

The block added in the popup window can currently be used to add the following types of blocks.

![20240511141349](https://static-docs.nocobase.com/20240511141349.png)

The data in the popup window is divided into three dimensions:

- Current record: used to display the current record;
- Relationship record: used to display the relationship data related to the current record;
- Other records: used to display data from other tables;

![20240511141442](https://static-docs.nocobase.com/20240511141442.png)

### Current Record

Example: Display the current order data.

![20240511141809](https://static-docs.nocobase.com/20240511141809.gif)

### Relationship Record

Example: Display the product data associated with the current order.

![20240511143040](https://static-docs.nocobase.com/20240511143040.gif)

### Other Records

Example: Configure the warehouse details block in the popup operation of the order table block.

![20240511143415](https://static-docs.nocobase.com/20240511143415.gif)

## Use Variables

- Row action popup: Each popup has a "Current popup record" variable, representing the current row record.
- Association field popup: Each popup has a "Current popup record" variable, representing the clicked relationship record.

The blocks in the popup can use the "Current popup record" variable, with the following use cases:

- Configuring data scope for blocks
- Configuring data scope for association fields
- Configuring default values for fields (form for adding data)
- Configuring linkage rules for actions
- Assign field values configuration for form submit actions

For more content, refer to [Variables](/handbook/ui/variables)
