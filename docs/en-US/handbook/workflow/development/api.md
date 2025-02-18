# API Reference

## Server-Side

The API available in the server-side package is shown in the following code:

```ts
import PluginWorkflowServer, {
  Trigger,
  Instruction,
  EXECUTION_STATUS,
  JOB_STATUS,
} from '@nocobase/plugin-workflow';
```

### `PluginWorkflowServer`

The Workflow Plugin class.

Typically, during an application's runtime, the Workflow Plugin instance can be retrieved by calling `app.pm.get<PluginWorkflowServer>(PluginWorkflowServer)` from any location where the application instance `app` is accessible (hereinafter referred to as `plugin`).

### `registerTrigger()`

Registers a new trigger type.

**Signature**

`registerTrigger(type: string, trigger: typeof Trigger | Trigger)`

**Parameters**

| Parameter   | Type                        | Description             |
| ----------- | --------------------------- | ----------------------- |
| `type`      | `string`                    | Trigger type identifier |
| `trigger`   | `typeof Trigger \| Trigger` | Trigger type or instance|

**Example**

```ts
import PluginWorkflowServer, { Trigger } from '@nocobase/plugin-workflow';

function handler(this: MyTrigger, workflow: WorkflowModel, message: string) {
  // trigger workflow
  this.workflow.trigger(workflow, { data: message.data });
}

class MyTrigger extends Trigger {
  messageHandlers: Map<number, WorkflowModel> = new Map();
  on(workflow: WorkflowModel) {
    const messageHandler = handler.bind(this, workflow);
    // listen for some event to trigger workflow
    process.on(
      'message',
      this.messageHandlers.set(workflow.id, messageHandler),
    );
  }

  off(workflow: WorkflowModel) {
    const messageHandler = this.messageHandlers.get(workflow.id);
    // remove listener
    process.off('message', messageHandler);
  }
}

export default class MyPlugin extends Plugin {
  load() {
    // get workflow plugin instance
    const workflowPlugin =
      this.app.pm.get<PluginWorkflowServer>(PluginWorkflowServer);

    // register trigger
    workflowPlugin.registerTrigger('myTrigger', MyTrigger);
  }
}
```

### `registerInstruction()`

Registers a new node type.

**Signature**

`registerInstruction(type: string, instruction: typeof Instruction | Instruction)`

**Parameters**

| Parameter      | Type                                | Description                |
| -------------- | ----------------------------------- | -------------------------- |
| `type`         | `string`                            | Instruction type identifier|
| `instruction`  | `typeof Instruction \| Instruction` | Instruction type or instance|

**Example**

```ts
import PluginWorkflowServer, { Instruction, JOB_STATUS } from '@nocobase/plugin-workflow';

class LogInstruction extends Instruction {
  run(node, input, processor) {
    console.log('my instruction runs!');
    return {
      status: JOB_STATUS.RESOLVED,
    };
  }
};

export default class MyPlugin extends Plugin {
  load() {
    // get workflow plugin instance
    const workflowPlugin = this.app.pm.get<PluginWorkflowServer>(PluginWorkflowServer);

    // register instruction
    workflowPlugin.registerInstruction('log', LogInstruction);
  }
}
```

### `trigger()`

Triggers a specific workflow. This is mainly used within custom triggers to activate the corresponding workflow when a specific custom event is detected.

**Signature**

`trigger(workflow: Workflow, context: any)`

**Parameters**

| Parameter | Type           | Description                          |
| --------- | -------------- | ------------------------------------ |
| `workflow`| `WorkflowModel`| The workflow object to be triggered  |
| `context` | `object`       | The context data provided when triggering |

:::info{title=Tip}
`context` is currently a required parameter; the workflow will not trigger without it.
:::

**Example**

```ts
import { Trigger } from '@nocobase/plugin-workflow';

class MyTrigger extends Trigger {
  timer: NodeJS.Timeout;

  on(workflow) {
    // register event
    this.timer = setInterval(() => {
      // trigger workflow
      this.plugin.trigger(workflow, { date: new Date() });
    }, workflow.config.interval ?? 60000);
  }
}
```

### `resume()`

Resumes the execution of a paused workflow at a specific node task.

- Only workflows in the `EXECUTION_STATUS.STARTED` state can be resumed.
- Only node tasks in the `JOB_STATUS.PENDING` state can be resumed.

**Signature**

`resume(job: JobModel)`

**Parameters**

| Parameter | Type       | Description                |
| --------- | ---------- | -------------------------- |
| `job`     | `JobModel` | The updated task object     |

:::info{title=Tip}
The task object passed in is usually the updated object and typically has the `status` updated to a value other than `JOB_STATUS.PENDING`; otherwise, it will remain paused.
:::

**Example**

See [source code](https://github.com/nocobase/nocobase/blob/main/packages/plugins/%40nocobase/plugin-workflow-manual/src/server/actions.ts#L99).

## `Trigger`

Base class for triggers, used to extend custom trigger types.

| Parameter         | Type                                                        | Description                   |
| ----------------- | ----------------------------------------------------------- | ----------------------------- |
| `constructor`     | `(public readonly workflow: PluginWorkflowServer): Trigger` | Constructor                   |
| `on?`             | `(workflow: WorkflowModel): void`                           | Event handler when workflow is started |
| `off?`            | `(workflow: WorkflowModel): void`                           | Event handler when workflow is stopped |

`on`/`off` are used to register/unregister event listeners when the workflow is enabled/disabled. The passed parameter is the workflow instance corresponding to the trigger, which can be processed according to the configuration. For certain trigger types that already listen to events globally, these methods may not need to be implemented. For example, in a timed trigger, a timer can be registered in `on` and unregistered in `off`.

## `Instruction`

Base class for instruction types, used to extend custom instruction types.

| Parameter         | Type                                                            | Description                         |
| ----------------- | --------------------------------------------------------------- | ----------------------------------- |
| `constructor`     | `(public readonly workflow: PluginWorkflowServer): Instruction` | Constructor                         |
| `run`             | `Runner`                                                        | Execution logic when entering the node for the first time |
| `resume?`         | `Runner`                                                        | Execution logic when resuming after an interruption |
| `getScope?`       | `(node: FlowNodeModel, data: any, processor: Processor): any`   | Provides local variables generated by the branch node |

**Related Types**

```ts
export type Job =
  | {
      status: JOB_STATUS[keyof JOB_STATUS];
      result?: unknown;
      [key: string]: unknown;
    }
  | JobModel
  | null;

export type InstructionResult = Job | Promise<Job>;

export type Runner = (
  node: FlowNodeModel,
  input: JobModel,
  processor: Processor,
) => InstructionResult;

export class Instruction {
  run: Runner;
  resume?: Runner;
}
```

`getScope` can be referred to in the [loop node implementation](https://github.com/nocobase/nocobase/blob/main/packages/plugins/%40nocobase/plugin-workflow-loop/src/server/LoopInstruction.ts#L83), which is used to provide local variables for the branch.

## `EXECUTION_STATUS`

A table of constants representing the status of workflow execution plans, used to indicate the current status of the execution plan.

| Constant Name                   | Meaning              |
| --------------------------------| ---------------------|
| `EXECUTION_STATUS.QUEUEING`     | Queueing             |
| `EXECUTION_STATUS.STARTED`      | In Progress          |
| `EXECUTION_STATUS.RESOLVED`     | Successfully Completed |
| `EXECUTION_STATUS.FAILED`       | Failed               |
| `EXECUTION_STATUS.ERROR`        | Execution Error      |
| `EXECUTION_STATUS.ABORTED`      | Aborted              |
| `EXECUTION_STATUS.CANCELED`     | Canceled             |
| `EXECUTION_STATUS.REJECTED`     | Rejected             |
| `EXECUTION_STATUS.RETRY_NEEDED` | Retry Needed         |

Apart from the first three, all other statuses represent failure states, but they can indicate different reasons for failure.

## `JOB_STATUS`

A table of constants representing the status of workflow node tasks, used to indicate the current status of the node task. The status generated by the node also affects the status of the entire execution plan.

| Constant Name                | Meaning                                     |
| ---------------------------- | ------------------------------------------ |
| `JOB_STATUS.PENDING`         | Pending: The node has been reached, but the instruction requires suspension |
| `JOB_STATUS.RESOLVED`        | Successfully Completed                     |
| `JOB_STATUS.FAILED`          | Failed: The node execution did not meet the configured conditions |
| `JOB_STATUS.ERROR`           | Error: An uncaught error occurred during node execution |
| `JOB_STATUS.ABORTED`         | Aborted: The node was terminated by other logic after suspension |
| `JOB_STATUS.CANCELED`        | Canceled: The node was manually canceled after suspension |
| `JOB_STATUS.REJECTED`        | Rejected: The node was manually rejected after suspension |
| `JOB_STATUS.RETRY_NEEDED`    | Retry Needed                               |

## Client-Side

The API available in the client-side package is shown in the following code:

```ts
import PluginWorkflowClient, {
  Trigger,
  Instruction,
} from '@nocobase/plugin-workflow/client';


```

### `PluginWorkflowClient`

### `registerTrigger()`

Registers the configuration panel corresponding to the trigger type.

**Signature**

`registerTrigger(type: string, trigger: typeof Trigger | Trigger): void`

**Parameters**

| Parameter   | Type                        | Description                             |
| ----------- | --------------------------- | --------------------------------------- |
| `type`      | `string`                    | Trigger type identifier, consistent with the identifier used during registration |
| `trigger`   | `typeof Trigger \| Trigger` | Trigger type or instance                |

### `registerInstruction()`

Registers the configuration panel corresponding to the node type.

**Signature**

`registerInstruction(type: string, instruction: typeof Instruction | Instruction): void`

**Parameters**

| Parameter      | Type                                | Description                             |
| -------------- | ----------------------------------- | --------------------------------------- |
| `type`         | `string`                            | Node type identifier, consistent with the identifier used during registration |
| `instruction`  | `typeof Instruction \| Instruction` | Node type or instance                   |

#### `registerInstructionGroup()`

注册节点类型分组。NocoBase 默认提供 4 个节点类型分组：

* `'control'`：控制类
* `'collection'`：数据表操作类
* `'manual'`：人工处理类
* `'extended'`：其他扩展类

如果需要扩展其他分组，可以使用该方法注册。

**签名**

`registerInstructionGroup(type: string, group: { label: string }): void`

**参数**

| 参数      | 类型               | 说明                           |
| --------- | ----------------- | ----------------------------- |
| `type`    | `string`          | 节点分组标识，与注册使用的标识一致 |
| `group` | `{ label: string }` | 分组信息，目前仅包含标题         |

**示例**

```js
export default class YourPluginClient extends Plugin {
  load() {
    const pluginWorkflow = this.app.pm.get(PluginWorkflowClient);

    pluginWorkflow.registerInstructionGroup('ai', { label: `{{t("AI", { ns: "${NAMESPACE}" })}}` });
  }
}
```

## `Trigger`

Base class for triggers, used to extend custom trigger types.

| Parameter            | Type                                                             | Description                             |
| -------------------- | ---------------------------------------------------------------- | --------------------------------------- |
| `title`              | `string`                                                         | Trigger type name                       |
| `fieldset`           | `{ [key: string]: ISchema }`                                     | Set of trigger configuration options    |
| `scope?`             | `{ [key: string]: any }`                                         | Object set that may be used in the configuration schema |
| `components?`        | `{ [key: string]: React.FC }`                                    | Component set that may be used in the configuration schema |
| `useVariables?`      | `(config: any, options: UseVariableOptions) => VariableOptions`  | Value getter for trigger context data   |

- If `useVariables` is not set, it means that this type of trigger does not provide a value-fetching function, and the trigger's context data cannot be selected in the flow node.

## `Instruction`

Base class for instructions, used to extend custom node types.

| Parameter                 | Type                                                    | Description                                                                           |
| ------------------------- | ------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `group`                   | `string`                                                | Node type group identifier, currently optional: `'control'`/`'collection'`/`'manual'`/`'extended'` |
| `fieldset`                | `Record<string, ISchema>`                               | Set of node configuration options                                                     |
| `scope?`                  | `Record<string, Function>`                              | Object set that may be used in the configuration schema                               |
| `components?`             | `Record<string, React.FC>`                              | Component set that may be used in the configuration schema                            |
| `Component?`              | `React.FC`                                              | Custom rendering component for the node                                               |
| `useVariables?`           | `(node, options: UseVariableOptions) => VariableOption` | Method for providing node variable options                                            |
| `useScopeVariables?`      | `(node, options?) => VariableOptions`                   | Method for providing local variable options for the branch                            |
| `useInitializers?`        | `(node) => SchemaInitializerItemType`                   | Method for providing initializer options for the node                                 |
| `isAvailable?`            | `(ctx: NodeAvailableContext) => boolean`                | Method for determining whether the node is available in the current environment       |

**Related Types**

```ts
export type NodeAvailableContext = {
  workflow: object;
  upstream: object;
  branchIndex: number;
};
```

- If `useVariables` is not set, it means that this node type does not provide a value-fetching function, and the result data of this node type cannot be selected in the flow. If the result value is singular (non-selectable), a static content that expresses the corresponding information can be returned (refer to the [calculation node source code](https://github.com/nocobase/nocobase/blob/main/packages/plugins/@nocobase/plugin-workflow/src/client/nodes/calculation.tsx#L68)). If selection is required (e.g., a property in an Object), a custom selection component output can be provided (refer to the [Create Data Node source code](https://github.com/nocobase/nocobase/blob/main/packages/plugins/@nocobase/plugin-workflow/src/client/nodes/create.tsx#L41)).
- `Component`: Custom rendering component for the node, used when the default node rendering is not sufficient, allowing for complete customization of the node view. For example, to provide more operation buttons or other interactive elements for the start node of a branch type, this method should be used (refer to the [Parallel Branch source code](https://github.com/nocobase/nocobase/blob/main/packages/plugins/@nocobase/plugin-workflow-parallel/src/client/ParallelInstruction.tsx)).
- `useInitializers`: Used to provide methods for initialization blocks, for example, in a manual node, it can initialize relevant user blocks based on the upstream node. If this method is provided, it will be available during the initialization block in the manual node configuration interface (refer to the [Create Data Node source code](https://github.com/nocobase/nocobase/blob/main/packages/plugins/@nocobase/plugin-workflow/src/client/nodes/create.tsx#L71)).
- `isAvailable`: Mainly used to determine whether the node can be used (added) in the current environment. The current environment includes the current workflow, upstream nodes, and the current branch index.
