# Delay

<PluginInfo name="workflow-delay" link="/handbook/workflow-delay"></PluginInfo>

The delay node allows you to introduce a pause within a workflow. Once the delay concludes, you can configure whether to proceed with the next step or terminate the workflow prematurely.

This node is often used in tandem with parallel branch nodes. By adding a delay node to one of the branches, you can effectively manage timeouts. For example, in a scenario where one branch requires manual processing while another includes a delay node, you can determine the outcome if the manual process exceeds the allotted time. Selecting "timeout failure" means that the manual process must be completed within the specified timeframe. On the other hand, choosing "timeout continuation" allows the workflow to bypass the manual process once the delay has elapsed.

## Installation

This plugin is built-in and requires no installation.

## User Manual

### Creating a Node

In the workflow configuration interface, click the plus sign ("+") within the flow to add a "Delay" node:

![Create Delay Node](https://static-docs.nocobase.com/d0816999c9f7acaec1c409bd8fb6cc36.png)

### Node Configuration

![Delay Node Configuration](https://static-docs.nocobase.com/5fe8a36535f20a087a0148ffa1cd2aea.png)

#### Delay Time

You can specify the delay duration by entering a number and selecting a time unit. Supported units include seconds, minutes, hours, days, and weeks.

#### Timeout Status

You can set the timeout status to either "Succeed and continue" or "Fail and Exit." The "Succeed and continue" option ensures that the workflow progresses to the next steps after the delay ends. Conversely, the "Fail and Exit" option terminates the workflow with a failure status once the delay concludes.

### Example

In a scenario where a work order must be addressed within a certain timeframe, you can add a manual node to one branch and a delay node to the other in parallel branches. If the manual process fails to respond within 10 minutes, the work order status will be updated to "Timeout Unprocessed."

![Delay Node Example - Workflow Organization](https://static-docs.nocobase.com/898c84adc376dc211b003a62e16e8e5b.png)
