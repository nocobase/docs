# Parallel Branches

Parallel branch nodes enable the division of a process into multiple branches, each configurable with distinct nodes. Depending on the selected mode of the branch, the execution approach varies. When multiple operations need to be carried out simultaneously, the parallel branch node proves highly effective.

## Installation

This feature is a built-in plugin, so no installation is necessary.

## User Manual

### Creating a Node

In the workflow configuration interface, click the plus (“+”) button to add a "Parallel Branch" node to the process:

![Parallel Branch_Add](https://static-docs.nocobase.com/9e0f3faa0b9335270647a30477559eac.png)

Once a parallel branch node is added to the process, it will automatically create two sub-branches by default. You can add more branches by clicking the appropriate button. Each branch can include as many nodes as needed, and unnecessary branches can be removed by clicking the delete button at the start of the branch.

![Parallel Branch_Branch Management](https://static-docs.nocobase.com/36088a8b7970c8a1771eb3ee9bc2a757.png)

### Node Configuration

#### Branch Modes

Parallel branch nodes offer three modes:

- **All succeeded**: The process continues to execute nodes following the branches only if all branches succeed. If any branch terminates early—whether due to failure, error, or any non-success state—the entire parallel branch node terminates in that state. This is also referred to as "All Mode."
- **Any succeeded**: The process will proceed to execute subsequent nodes once any branch succeeds. The entire parallel branch node will only terminate early if all branches fail or terminate prematurely, regardless of the reason. This is known as "Any Mode."
- **Any succeeded or failed**: The process will continue executing subsequent nodes once any branch succeeds. However, if any branch fails, the entire parallel branch node will terminate early in that state. This is also known as "Race Mode."

In all modes, branches are executed sequentially from left to right. The process continues executing subsequent nodes or terminates early once the conditions of the selected mode are met.

### Example

Refer to the example provided in the [Delay Node](/handbook/workflow-delay#示例) section.
