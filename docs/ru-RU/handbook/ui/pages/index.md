# Page

NocoBase's pages can act as containers for blocks. They are like a canvas where you can freely place a variety of blocks.

## Page Structure

After creating a page through the [menu](/handbook/ui/menus), you can see that an empty page consists of the following two parts:

1. Header
   1. Page title
   2. Tabs
2. Block container

![2024-01-20_08-23-10](https://static-docs.nocobase.com/2024-01-20_08-23-10.jpg)

## Page Settings

Hovering the mouse over the configuration icon at the top right of the page, you can see the page configuration options:

![2024-01-20_08-24-27](https://static-docs.nocobase.com/2024-01-20_08-24-27.jpg)

Configurable items include:

- Enable page header: Controls whether to display the header;
- Display page title: Whether to display the page title in the header;
- Edit page title: The default page title is the menu item title, which can be customized;
- Enable tabs: Off by default, enabling this option allows adding multiple tabs.

### Enable Header

Typically, we need to enable the header area to display the page title and tabs. However, there are situations where we might not want to enable it, for instance, when creating a Dashboard page where a top-level menu can effectively reflect the content of the page. In this case, we can disable the header and only display the blocks within the page.

![20240120084618](https://static-docs.nocobase.com/20240120084618.png)

### Page Title

The default page title is the name of the menu item. By clicking "Edit Page Title," it can be modified. Just like with the header, sometimes we don't need to display the page title and only need to show the tabs, in which case you can disable the title.

![2024-01-20_08-28-43](https://static-docs.nocobase.com/2024-01-20_08-28-43.jpg)

### Enable Tabs

When the content of a page is too much, or it is appropriate to divide it into several independent parts, we can enable tabs. Each tab is an independent block container. As shown below, we added 3 tabs to the orders page to display all orders, completed orders, and refunded orders. By moving the mouse to the tab title, you can see the sort and configuration buttons at the top right corner.

![2024-01-20_08-47-15](https://static-docs.nocobase.com/2024-01-20_08-47-15.jpg)

## Adding Blocks

Click "Add block" to add an unlimited number of blocks to the page (see the introduction of [Blocks](./blocks/index.md)).

![2024-01-20_08-48-36](https://static-docs.nocobase.com/2024-01-20_08-48-36.jpg)

After adding several blocks, you can use the move button at the top right corner of each block to drag and arrange them freely, adjusting the layout to achieve the most suitable effect.

![page-block](https://static-docs.nocobase.com/page-block.gif)
