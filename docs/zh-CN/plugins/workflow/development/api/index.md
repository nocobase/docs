# API 参考

## 服务端

服务端包结构可用的 API 如以下代码所示：

```ts
import WorkflowPlugin, {
  EXECUTION_STATUS,
  JOB_STATUS,
  Trigger,
  Instruction,
} from '@nocobase/workflow/client';
```

在应用的运行时，任意可以获取应用实例 `app` 的地方调用 `app.getPlugin<WorkflowPlugin>(WorkflowPlugin)` 以获取工作流插件实例（下文以 `plugin` 指代）。

### `EXECUTION_STATUS`

工作流执行计划状态的常量表，用于标识对应执行计划的当前状态。

| 常量名                          | 含义                 |
| ------------------------------- | -------------------- |
| `EXECUTION_STATUS.QUEUEING`     | 排队中               |
| `EXECUTION_STATUS.STARTED`      | 执行中               |
| `EXECUTION_STATUS.RESOLVED`     | 成功完成             |
| `EXECUTION_STATUS.FAILED`       | 失败                 |
| `EXECUTION_STATUS.ERROR`        | 执行错误             |
| `EXECUTION_STATUS.ABORTED`      | 已中断               |
| `EXECUTION_STATUS.CANCELED`     | 已取消               |
| `EXECUTION_STATUS.REJECTED`     | 已拒绝               |
| `EXECUTION_STATUS.RETRY_NEEDED` | 未成功执行，需要重试 |

除了前三种以外，其他都代表失败状态，但可以用于表述不同的失败原因。

### `JOB_STATUS`

工作流节点任务状态的常量表，用于标识对应节点任务的当前状态，节点产生的状态同时也会影响整个执行计划的状态。

| 常量名                    | 含义                                     |
| ------------------------- | ---------------------------------------- |
| `JOB_STATUS.PENDING`      | 停等：已执行到该节点，但指令要求挂起等待 |
| `JOB_STATUS.RESOLVED`     | 成功完成                                 |
| `JOB_STATUS.FAILED`       | 失败：该节点执行未能满足配置条件         |
| `JOB_STATUS.ERROR`        | 错误：该节点执行过程中发生未捕获的错误   |
| `JOB_STATUS.ABORTED`      | 终止：该节点在停等后被其他逻辑终止执行   |
| `JOB_STATUS.CANCELED`     | 取消：该节点在停等后被人为取消执行       |
| `JOB_STATUS.REJECTED`     | 拒绝：该节点在停等后被人为拒绝继续       |
| `JOB_STATUS.RETRY_NEEDED` | 未成功执行，需要重试                     |

### `Trigger`

触发器基类，用于扩展自定义触发器类型。

| 参数          | 类型                                            | 说明                   |
| ------------- | ----------------------------------------------- | ---------------------- |
| `constructor` | `(public readonly workflow: Plugin) => Trigger` | 构造函数               |
| `on?`         | `(workflow: WorkflowModel) => void`             | 开启工作流后的事件处理 |
| `off?`        | `(workflow: WorkflowModel) => void`             | 停用工作流后的事件处理 |

`on`/`off` 用于在工作流启用/停用时进行事件监听的注册/注销，例如在定时触发器中，可以在 `on` 中注册定时器，`off` 中注销定时器，传入的是对应触发器的工作流实例，可根据对应配置进行处理。部分触发器类型如果是已经在全局监听了事件的，也可以不用实现这两个方法。

### `plugin.registerTrigger()`

扩展注册新的触发器类型。

**签名**

`plugin.registerTrigger(type: string, trigger: typeof Trigger | Trigger })`

**参数**

| 参数      | 类型                        | 描述             |
| --------- | --------------------------- | ---------------- |
| `type`    | `string`                    | 触发器类型标识符 |
| `trigger` | `typeof Trigger \| Trigger` | 触发器类型或实例 |

**示例**

```ts
import WorkflowPlugin, { Trigger } from '@nocobase/plugin-workflow';

class MyTrigger extends Trigger {
  messageHandler = (message) => {
    // trigger workflow
    this.plugin.trigger(workflow, { data: message.data });
  };

  on(workflow) {
    // listen some event to trigger workflow
    process.on('message', this.messageHandle);
  }

  off(workflow) {
    // remove listener
    process.off('message', this.messageHandle);
  }
}

export default class MyPlugin extends Plugin {
  load() {
    // get workflow plugin instance
    const workflowPlugin = this.app.getPlugin<WorkflowPlugin>(WorkflowPlugin);

    // register trigger instance
    workflowPlugin.triggers.register('myTrigger', MyTrigger);
  }
}
```

### `Instruction`

指令类型基类，用于扩展自定义指令类型。

| 参数          | 类型                                                          | 说明                               |
| ------------- | ------------------------------------------------------------- | ---------------------------------- |
| `constructor` | `(public readonly workflow: Plugin) => Instruction`           | 构造函数                           |
| `run`         | `Runner`                                                      | 首次进入节点的执行逻辑             |
| `resume?`     | `Runner`                                                      | 在中断恢复执行后进入节点的执行逻辑 |
| `getScope?`   | `(node: FlowNodeModel, data: any, processor: Processor): any` | 提供对应节点产生分支的局域变量内容 |

**相关类型**

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

指令中类型中的 `run` 方法是必须实现的，用于执行指令的逻辑。如果没有停等异步处理的逻辑，正常情况下应该返回一个 `Job` 对象，执行器会根据该对象生成执行结果记录。当有需要异步处理时，`run` 方法可以返回一个 `status` 为 `JOB_STATUS.PENDING` 状态的对象，提示执行器进行等待。同时需要实现 `resume` 方法，用于恢复指令的执行。

节点的执行状态会影响整个流程的成功或失败，通常在没有分支的情况下，某个节点的失败会直接导致整个流程失败。其中最常规的情况是，节点执行成功则继续节点表中的下一个节点，直到没有后续节点，则整个工作流执行以成功的状态完成。

如果执行中某个节点返回了执行失败的状态，则视以下两种情况引擎会有不同的处理：

1.  返回失败状态的节点处于主流程，即均未处于上游的节点开启的任意分支流程之内，则整个主流程会判定为失败，并退出流程。

2.  返回失败状态的节点处于某个分支流程之内，此时将判定流程下一步状态的职责交由开启分支的节点，由该节点的内部逻辑决定后续流程的状态，并且递归上溯到主流程。

最终都在主流程的节点上得出整个流程的下一步状态，如果主流程的节点中返回的是失败，则整个流程以失败的状态结束。

如果任意节点执行后返回了“停等”状态，则整个执行流程会被暂时中断挂起，等待一个由对应节点定义的事件触发以恢复流程的执行。例如审批类型的节点处理，会以“停等”状态从该节点暂停，等待人工介入该流程，决策是否通过。如果人工输入的状态是通过，则继续后续的流程节点，反之则按前面的失败逻辑处理。

`getScope` 可以参考[循环节点的实现](https://github.com/nocobase/nocobase/blob/main/packages/plugins/%40nocobase/plugin-workflow-loop/src/server/LoopInstruction.ts#L83)，用于提供分支的局域变量内容。

### `plugin.registerInstruction()`

扩展注册新的节点类型。

**签名**

`plugin.registerInstruction(type: string, instruction: typeof Instruction | Instruction })`

**参数**

| 参数          | 类型                                | 描述           |
| ------------- | ----------------------------------- | -------------- |
| `type`        | `string`                            | 指令类型标识符 |
| `instruction` | `typeof Instruction \| Instruction` | 指令类型或实例 |

**示例**

```ts
import WorkflowPlugin, { Instruction, JOB_STATUS } from '@nocobase/plugin-workflow';

class LogInstruction extends Instruction {
  run(node, input, processor) {
    console.log('my instruction runs!');
    return {
      status: JOB_STATUS.RESOVLED,
    };
  },
};

export default class MyPlugin extends Plugin {
  load() {
    // get workflow plugin instance
    const workflowPlugin = this.app.getPlugin<WorkflowPlugin>(WorkflowPlugin);

    // register trigger instance
    workflowPlugin.instructions.register('log', LogInstruction);
  }
}
```

### `plugin.trigger()`

触发特定的工作流。主要用于在自定义触发器中，当监听到特定自定义事件时触发对应的工作流。

**签名**

`plugin.trigger(workflow: Workflow, context: any)`

**参数**
| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `workflow` | `WorkflowModel` | 要触发的工作流对象 |
| `context` | `object` | 触发时提供的上下文数据 |

:::info{title=提示}
`context` 目前是必填项，不提供的话该工作流不会触发。
:::

**示例**

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

### `plugin.resume()`

以特定的节点任务将停等的工作流恢复执行。

- 只有处在停等状态（`EXECUTION_STATUS.STARTED`）的工作流才能被恢复执行。
- 只有处在停等状态（`JOB_STATUS.PENDING`）的节点任务才能被恢复执行。

**签名**

`plugin.resume(job: JobModel)`

**参数**

| 参数  | 类型       | 描述             |
| ----- | ---------- | ---------------- |
| `job` | `JobModel` | 更新后的任务对象 |

:::info{title=提示}
传入的任务对象一般是更新后的对象，且通常会将 `status` 更新为非 `JOB_STATUS.PENDING` 的值，否则将继续停等。
:::

**示例**

详见[源码](https://github.com/nocobase/nocobase/blob/main/packages/plugins/%40nocobase/plugin-workflow-manual/src/server/actions.ts#L99)。

## 客户端

客户端包结构可用的 API 如以下代码所示：

```ts
import WorkflowPlugin, {
  Trigger,
  Instruction,
} from '@nocobase/workflow/client';
```

### `Trigger`

触发器基类，用于扩展自定义触发器类型。

| 参数            | 类型                                                             | 说明                               |
| --------------- | ---------------------------------------------------------------- | ---------------------------------- |
| `title`         | `string`                                                         | 触发器类型名称                     |
| `fieldset`      | `{ [key: string]: ISchema }`                                     | 触发器配置项集合                   |
| `scope?`        | `{ [key: string]: any }`                                         | 配置项 Schema 中可能用到的对象集合 |
| `components?`   | `{ [key: string]: React.FC }`                                    | 配置项 Schema 中可能用到的组件集合 |
| `useVariables?` | `(config: any, options: UseVariableOptions ) => VariableOptions` | 触发上下文数据的值获取器           |

- `useVariables` 如果没有设置，则代表该类型触发器不提供取值功能，在流程的节点中无法选取触发器的上下文数据。

### `plugin.registerTrigger()`

注册触发器类型对应的配置面板。

**签名**

`plugin.registerTrigger(type: string, trigger: typeof Trigger | Trigger): void`

**参数**

| 参数      | 类型                        | 说明                                 |
| --------- | --------------------------- | ------------------------------------ |
| `type`    | `string`                    | 触发器类型标识，与注册使用的标识一致 |
| `trigger` | `typeof Trigger \| Trigger` | 触发器类型或实例                     |

### `Instruction`

指令基类，用于扩展自定义节点类型。

| 参数                 | 类型                                                    | 说明                                                                           |
| -------------------- | ------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `group`              | `string`                                                | 节点类型分组标识，目前可选：`'control'`/`'collection'`/`'manual'`/`'extended'` |
| `fieldset`           | `Record<string, ISchema>`                               | 节点配置项集合                                                                 |
| `scope?`             | `Record<string, Function>`                              | 配置项 Schema 中可能用到的对象集合                                             |
| `components?`        | `Record<string, React.FC>`                              | 配置项 Schema 中可能用到的组件集合                                             |
| `Component?`         | `React.FC`                                              | 节点自定义渲染组件                                                             |
| `useVariables?`      | `(node, options: UseVariableOptions) => VariableOption` | 节点提供节点变量选项的方法                                                     |
| `useScopeVariables?` | `(node, options?) => VariableOptions`                   | 节点提供分支局域变量选项的方法                                                 |
| `useInitializers?`   | `(node) => SchemaInitializerItemType`                   | 节点提供初始化器选项的方法                                                     |
| `isAvailable?`       | `(ctx: NodeAvailableContext) => boolean`                | 节点是否可用的判断方法                                                         |

**相关类型**

```ts
export type NodeAvailableContext = {
  workflow: object;
  upstream: object;
  branchIndex: number;
};
```

- `useVariables` 如果没有设置，则代表该节点类型不提供取值功能，在流程的节点中无法选该类型节点的结果数据。如果结果值是单一的（不可选），则返回一个可以表达对应信息的静态内容即可。如果需要可选（如一个 Object 中的某个属性），则可以自定义对应的选择组件输出。
- `Component` 节点自定义渲染组件，当默认节点渲染不满足时可以完全覆盖替代使用，进行自定义节点视图渲染。例如要针对分支类型的开始节点提供更多操作按钮或其他交互，则需要使用该方法，具体可以参考并行分支等节点的前端实现（[相关源码](https://github.com/nocobase/nocobase/blob/main/packages/plugins/@nocobase/plugin-workflow-parallel/src/client/ParallelInstruction.tsx)）。
- `useInitializers` 用于提供初始化区块的方法，例如在人工节点中可以根据上游节点初始化相关用户区块。如果提供了该方法，则会在人工节点界面配置中初始化区块时可用。
- `isAvailable` 主要用于判断节点是否可以在当前环境中可以被使用（添加）。当前环境包括当前工作流、上游节点和当前分支索引等。

### `plugin.registerInstruction()`

注册节点类型对应的配置面板。

**签名**

`plugin.registerInstruction(type: string, instruction: typeof Instruction | Instruction): void`

**参数**

| 参数          | 类型                                | 说明                               |
| ------------- | ----------------------------------- | ---------------------------------- |
| `type`        | `string`                            | 节点类型标识，与注册使用的标识一致 |
| `instruction` | `typeof Instruction \| Instruction` | 节点类型或实例                     |
