# Block Height

## Introduction

Block height settings in NocoBase accommodate three scenarios: default height, specified height, and full height. This feature is supported by most blocks, with the exception of Gantt chart blocks. For chart blocks, height is controlled through specific parameters.

![20240602194552](https://static-docs.nocobase.com/20240602194552.png)

![20240602194609](https://static-docs.nocobase.com/20240602194609.png)

### Default Height

Each block type handles default height uniquely. For instance, table and form blocks dynamically adjust their height to fit the content, while kanban blocks default to 70% of the viewport height.

### Specified Height

Users have the flexibility to define the overall height of a block's outer frame. The block's internal components then automatically calculate and distribute the available space.

![20240604172359](https://static-docs.nocobase.com/20240604172359.gif)

### Full Height

The full height mode, akin to specified height, automatically determines and allocates block height based on the window's visible area. This approach eliminates page-level scrollbars, confining them to the interior of individual blocks.

Height handling varies subtly across different block types:

- Tables: Scrolling occurs within the tbody;
- Forms/Details: The Grid area scrolls, excluding the operations section;
- Lists/Grid Cards: The Grid area scrolls, excluding operations and pagination;
- Kanban: Each column scrolls independently;
- Maps and Calendars: Adapt to full height without scrollbars;
- Iframes/Markdown: The block's outer frame height is fixed, with scrolling inside the block.

#### Full Height Table Example

![20240604172439](https://static-docs.nocobase.com/20240604172439.gif)

#### Full Height Form Example

![20240604222711](https://static-docs.nocobase.com/20240604222711.gif)
