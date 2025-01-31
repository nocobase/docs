# Subflow

<PluginInfo name="workflow-subflow" link="/handbook/workflow-subflow" commercial="true"></PluginInfo>

Used to call other processes within a workflow, allowing the current process variables to serve as inputs for the subflow, and using the outputs of the subflow as variables in subsequent nodes of the current process.

The process of calling a subflow is illustrated in the diagram below:

![20241230134634](https://static-docs.nocobase.com/20241230134634.png)

Subflows can be used to reuse some common process logic, such as sending emails or SMS, or to break a complex process into multiple subflows for easier management and maintenance.

## User Manual

Essentially, workflows do not distinguish whether a process is a subflow or not; any workflow can be called by other processes and can call other processes. All workflows are equal, existing only in a caller and callee relationship.

Similarly, the use of subflows occurs in two locations:

1. In the main process: as the caller, invoking other workflows through the "Call Workflow" node.
2. In the subflow: as the callee, saving the variables that need to be output in the current process through the "Process Output" node, which can then be utilized by subsequent nodes in the workflow that calls the current process.

### Call Workflow Node

#### Create Node

In the workflow configuration interface, click the plus ("+") button within the process to add a "Call Workflow" node:

![Add Call Workflow Node](https://static-docs.nocobase.com/20241230001323.png)

#### Configure Node

##### Select Workflow

Select the workflow to be called, which can be quickly found using the search box:

![Select Workflow](https://static-docs.nocobase.com/20241230001534.png)

:::info{title=Tip}
* Workflows that are not enabled can still be called as subflows.
* When the current workflow is in synchronous mode, only synchronous subflows can be called.
:::

##### Configure Trigger Variables for the Workflow

After selecting the workflow, you also need to configure the trigger variables as input data for the subflow. You can choose static data directly or select variables from the current process:

![Configure Trigger Variables](https://static-docs.nocobase.com/20241230162722.png)

Different types of triggers require different variables, which can be configured on the form as needed.

### Process Output Node

#### Create Node

In the called workflow, add a "Process Output" node:

![20241231002033](https://static-docs.nocobase.com/20241231002033.png)

#### Configure Node

##### Output Value

Input or select variables as output values. Output values can be of any type, including constants such as strings, numbers, boolean values, dates, or custom JSON. They can also be other variables within the process.

![20241231003059](https://static-docs.nocobase.com/20241231003059.png)

:::info{title=Tip}
If multiple "Process Output" nodes are added in the called workflow, the value will be output according to the last executed "Process Output" node when calling that workflow.
:::

### Using Process Output

Returning to the main process, to use the subflow's output values in other nodes below the call workflow, the result of the call workflow node can be selected. If the subflow outputs a simple value, such as a string, number, boolean value, or date (date in UTC string format), it can be used directly. If it is a complex object (such as an object in a Collection), it must first be mapped through a JSON parsing node before its properties can be used; otherwise, it can only be used as the entire object.

If the subflow does not configure a process output node or does not output any value, then when using the result of the call workflow node in the main process, only a null value (`null`) will be obtained.
