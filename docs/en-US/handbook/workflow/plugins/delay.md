# Delay

<PluginInfo name="workflow-delay" link="/handbook/workflow-delay"></PluginInfo>

The Delay node enables you to introduce a pause in the workflow. After this delay period ends, the workflow can either proceed with the subsequent steps or terminate prematurely, depending on the settings you’ve configured.

This node is particularly effective when used alongside parallel branch nodes. For instance, you can place a delay node in one branch to manage timeouts effectively. In a scenario where one branch involves manual processing and another includes a delay node, if the manual task exceeds the allotted time and the timeout is set to "fail," it indicates that the task must be completed within the specified timeframe. Conversely, if the timeout is set to "continue," the manual process will be bypassed after the delay.

## Installation

This is a built-in plugin, so no installation is required.

## User Manual

### Creating a Node

To add a “Delay” node, navigate to the workflow configuration interface, and click the plus (“+”) button within the process:

![Creating a Delay Node](https://static-docs.nocobase.com/d0816999c9f7acaec1c409bd8fb6cc36.png)

### Node Configuration

![Delay Node Configuration](https://static-docs.nocobase.com/5fe8a36535f20a087a0148ffa1cd2aea.png)

#### Delay Time

Specify the delay duration by entering a number and selecting the appropriate time unit. Supported units include seconds, minutes, hours, days, and weeks.

#### Timeout Status

The timeout status can be configured as either "Succeed and continue" or "Fail and Exit". If set to "Pass and Continue", the workflow will proceed with the next steps after the delay ends. If set to "Fail and Exit", the workflow will terminate prematurely, indicating a failure.

### Example

Consider a scenario where a work order must be responded to within a specified timeframe. In this case, you would add a manual node to one branch of the workflow and a delay node to the other. If the manual process isn’t completed within 10 minutes, the work order status will be updated to "unprocessed due to timeout."

![Delay Node Example Workflow](https://static-docs.nocobase.com/898c84adc376dc211b003a62e16e8e5b.png)
