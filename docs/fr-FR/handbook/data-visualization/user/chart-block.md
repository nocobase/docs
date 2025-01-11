# Chart Block

The chart block is a panel used for organizing multiple charts.

## Add Block

Click "Add Block" - "Charts" to create an empty chart block.

![](https://static-docs.nocobase.com/790faf0a126e4ffcc3ff976818325cfd.png)

Inside the chart block, click "Add Block" - "Chart" and select the corresponding data Collection to create and configure charts. Only tables that the user has permission to view can be used for chart configuration, otherwise, they will be hidden from the options.

![](https://static-docs.nocobase.com/93ed2fada2478fba1b243d8705717a34.png)

## Block Settings

![](https://static-docs.nocobase.com/202409022042315.png)

- Edit Block Title - Allows setting a title for multiple charts in the block.
- Show Background - Determines whether to display the background color of the chart block.
- Show Padding - Determines whether to display the padding of the chart block.

The background and padding settings are particularly useful when there is only one chart in the block or when viewing on mobile devices, helping the style appear more comfortable.

<img src="https://static-docs.nocobase.com/202404192011039.png"/>

The charts within a chart block can be freely dragged and organized like regular blocks.

- Click the "Configure" button to modify the settings of the current chart.
- Click the "Duplicate" button to quickly copy the current chart.
- Click the "Delete" button to remove the current chart.

## Configure Block Operations

:::warning{title=Note}
The configuration operation feature applies to chart blocks added in version `v1.4.0-alpha` and later.
:::

### Refresh and Auto-Refresh

Chart blocks support configuring a refresh button. Clicking it refreshes all the charts within the block.

![](https://static-docs.nocobase.com/202409022051107.png)

In configuration mode, you can set the refresh button to configure the auto-refresh interval, which will apply to all charts in the block. The auto-refresh interval configured here will apply to all users who access the page by default.

![](https://static-docs.nocobase.com/202409022054189.png)

Users can also modify the auto-refresh interval using the button on the right, but this adjustment is only effective temporarily and will reset after the page is refreshed.

![](https://static-docs.nocobase.com/202409022056097.png)

## Configure Chart Operations

:::info{title=Note}
The operation buttons configured for individual charts will only appear when the mouse hovers over the chart and will automatically hide when the mouse leaves.
:::

### Refresh and Auto-Refresh

Individual charts also support configuring a refresh button, functioning the same way as the block's refresh button, but only affecting the current chart.

![](https://static-docs.nocobase.com/202409022101033.png)

:::info{title=Note}

- If both the chart block and an individual chart are configured with auto-refresh intervals, the interval configured for the individual chart takes precedence.
- If the chart block is configured with an auto-refresh interval, and an individual chart either has auto-refresh disabled or has no refresh button configured, the auto-refresh interval of the chart block will apply.
:::
