# Calendar Block

<PluginInfo name="calendar"></PluginInfo>

## Introduction

The Calendar Block offers a streamlined way to view and manage events and date-related data in a calendar format, making it perfect for scheduling meetings, planning events, and organizing your time efficiently.

## Installation

This plugin comes pre-installed, so no additional setup is required.

## Adding Blocks

<video width="100%" height="440" controls>
      <source src="https://static-docs.nocobase.com/20240419201640.mp4" type="video/mp4">
</video>

1. Title Field: Displays key information directly on the calendar bars.
2. Start Time: Indicates when the task begins.
3. End Time: Marks when the task ends.

Clicking on a task bar highlights the selection and opens a detailed pop-up window.

![20240408171928](https://static-docs.nocobase.com/20240408171928.png)

## Configure Fields

![20240419203321](https://static-docs.nocobase.com/20240419203321.png)

### Display Lunar Calendar

![20240419203603](https://static-docs.nocobase.com/20240419203603.png)

- [Edit Block Title](/handbook/ui/blocks/block-settings/block-title)
- [Save as Block Template](/handbook/ui/blocks/block-settings/block-template)

### Set Data Range

![20240419203751](https://static-docs.nocobase.com/20240419203751.png)

For additional information, see [Set Data Range](/handbook/ui/blocks/block-settings/data-scope).

### Set Block Height

Example: Adjust the height of the order calendar block. No scrollbar will appear inside the calendar block.

![20240605215742](https://static-docs.nocobase.com/20240605215742.gif)

For more information, refer to [Block Height](/handbook/ui/blocks/block-settings/block-height)

### Background Color Field

:::info{title=Tip}
The version of NocoBase needs to be v1.4.0-beta or above.
:::

This option can be used to configure the background color of calendar events. Here's how to use it:

1. The calendar data table needs to have a field of type **Single select** or **Radio group**, and this field needs to be configured with colors.
2. Then, return to the calendar block configuration interface and select the field you just configured with colors in the **Background Color Field**.
3. Finally, you can try selecting a color for a calendar event and click submit. You'll see that the color has taken effect.

![20240914192017_rec_](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240914192017_rec_.gif)

## Configure Actions

![20240419203424](https://static-docs.nocobase.com/20240419203424.png)

### Today

The "Today" button in the Calendar Block offers quick navigation, enabling users to instantly return to the current date after exploring other dates.

![20240419203514](https://static-docs.nocobase.com/20240419203514.png)

### Switch View

The default view is set to Month.

![20240419203349](https://static-docs.nocobase.com/20240419203349.png)
