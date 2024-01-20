# Page & pupup

NocoBase's pages and popups (dialog, drawer) can be used as containers for blocks; they are like a canvas on which various blocks can be freely placed.

## Pages
After creating a page by [menu](. /menus/index.md) , you can see that an empty page consists of the following two parts:
1. header
   1. page title
   2. tab
2. block container

![2024-01-20_08-23-10](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/2024-01-20_08-23-10.jpg)

Hover your mouse over the configuration item icon at the top right of the page to see the page configuration item:

![2024-01-20_08-24-27](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/2024-01-20_08-24-27.jpg)

Configurable items include:
- Enable page header: used to control whether to display the header or not;
- Display page title: whether to show the page title in the header;
- Edit page title: the default page title is the menu item title, which can be customized;
- Enable page tabs: off by default, you can add multiple tabs when enabled.

### Header
Usually, we need to enable the header area for displaying page title, tabs. There are also cases where you don't want to enable it, for example, when we create a Dashbodrd page and the first level menu is a good representation of the content of that page, in this case we can disable the header and only show the blocks within the page.

![20240120084618](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240120084618.png)

#### Page Title
The default page title is the name of the menu item, which can be changed by clicking "Edit page title". As with the header, there are times when we don't need to show the page title, but only the tabs, in which case the title can be turned off.

![2024-01-20_08-28-43](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/2024-01-20_08-28-43.jpg)

#### Tabs
When there is too much content in a page, or when it is suitable to organize it into several separate parts, we can enable tabs, each tab is a separate block container. In the image below, we have added 3 tabs to the orders page to display all orders, completed orders, and refunded orders. Hover your mouse over the tab titles and you can see the Drag and Configure Items buttons in the upper right corner.

![2024-01-20_08-47-15](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/2024-01-20_08-47-15.jpg)

### Block Container
You can add an unlimited number of blocks to your page by clicking "Add block" (see [Blocks](. /blocks/index.md)).

![2024-01-20_08-48-36](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/2024-01-20_08-48-36.jpg)

After adding multiple blocks, you can drag and drop any layout of the blocks to adjust the layout to achieve the most suitable effect by using the dragbutton at the upper right corner of the block.

![page-block](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/page-block.gif)

## Popup
Currently, there are two kinds of popup windows in NocoBase: dialogs and drawers. Like pages, dialogs and drawers can be used as containers for blocks, and multiple tabs can be added to them. They are opened by actions such as Add, Edit, View, etc.

![2024-01-20_08-52-00](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/2024-01-20_08-52-00.jpg)

![2024-01-20_08-52-24](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/2024-01-20_08-52-24.jpg)