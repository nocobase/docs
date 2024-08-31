# Block

A block serves as the content container, designed to be placed within a page, modal, or drawer. These blocks can be easily rearranged through drag-and-drop functionality, allowing for flexible layout customization.

## Adding Blocks

Blocks can be seamlessly integrated into a page, a modal, or a drawer, depending on the desired application.

### Blocks within Pages

Within pages, you can choose from various block types, including Data Blocks, Filter Blocks, and Other Blocks, each serving distinct purposes.

![](https://static-docs.nocobase.com/dad0a394d33dd26f31c3202a76bb0153.png)

### Blocks within Modals (Dialogs or Drawers)

Modals, which include dialogs and drawers, also support block integration. While similar to pages, the blocks within modals are typically used for operations related to single records, such as adding, editing, or viewing data. Available block types include Current Data Blocks, Relationship Blocks, and Other Blocks.

#### Drawers

![](https://static-docs.nocobase.com/e18726fb0b52ddab89b9b1a44788f361.png)

#### Dialogs

![](https://static-docs.nocobase.com/4763fc5fc008bdf3915f84a7e433c0f8.png)

## Block Designer

Each block features three icons in the upper right corner, offering easy access to essential tools:

1. Drag-and-Drop Layout
2. Quick Add Block
3. Block Parameter Configuration

![](https://static-docs.nocobase.com/b488f3013532a246df59b89c0688a58f.png)

For simple blocks, all configuration options are centralized under "Block Parameter Configuration," such as in Markdown blocks.

![](https://static-docs.nocobase.com/f37e277863068b2661f66d4020af806a.png)

More complex blocks, especially those dealing with data, provide additional embedded options like "Configure Field" and "Configure Action," offering greater flexibility.

![](https://static-docs.nocobase.com/71b550da637d23145a5f62d48ee8521b.png)

Moreover, you can explore advanced nesting possibilities, as demonstrated by the Chart Block.

![](https://static-docs.nocobase.com/07588190b3f41ae3060e71d8b76b4447.png)

## Block Layout

To customize the layout, simply drag and drop blocks into your preferred arrangement.

![](https://static-docs.nocobase.com/f6692295ac0917f3babce9a60ce80879.gif)

## Block Templates

You can save any data-type block as a template, which allows for quick duplication or referencing in future projects. For example, a form used for both adding and editing data can be saved as a template, streamlining your workflow by reusing it in different contexts.

### How to Add and Use Templates

1. Save a data block as a block template (note: only data-type blocks have this feature).

![](https://static-docs.nocobase.com/b7718cea8784587d53524ade3c5b0a82.png)

2. When adding a block, select either the duplicate or reference option for the template.

![](https://static-docs.nocobase.com/135df7344e0f3080199e4bb1071c2fa6.png)

### Difference Between Duplicate and Referencing

Duplicate template a new block based on the template, with no link to the original template—any changes to the block will not affect the template. Referencing, however, directly links to the template, meaning any changes to the block will alter the template, and all instances where the template is referenced will be updated accordingly.

## Block Types

NocoBase categorizes blocks into four primary types:

- **Data Blocks:** Used to display Collection data within the block.
- **Filter Blocks:** These can be added to pages and are specifically designed for filtering data within Data Blocks.
- **Relationship Blocks:** These are added to modals and are used for CRUD operations on data related to the current record.
- **Other Blocks:** These include standalone blocks like Markdown, Audit Log blocks, Workflow To-Do blocks, etc.

### Data Blocks

### Filter Blocks

### Relationship Blocks

### Other Blocks

## Filter Interactions
