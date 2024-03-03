# 扩展节点类型

节点的类型本质上就是操作指令，不同的指令代表流程中执行的不同的操作。

与触发器类似，扩展节点的类型也分为前后端两部分。服务端需要对注册的指令进行逻辑实现，客户端需要提供指令所在节点相关参数的界面配置。

## 服务端

### 最简单的节点指令

指令的核心内容是一个函数，也就是指令类中的 `run` 方法是必须实现的，用于执行指令的逻辑。函数中可以执行任意需要的操作，例如数据库操作、文件操作、调用第三方 API 等等。

所有指令都需要派生自 `Instruction` 基类，最简单的指令只需要实现一个 `run` 函数即可：

```ts
import { Instruction, JOB_STATUS } from '@nocobase/plugin-workflow';

export class MyInstruction extends Instruction {
  run(node, input, processor) {
    console.log('my instruction runs!');
    return {
      status: JOB_STATUS.RESOVLED,
    };
  }
}
```

并将该指令注册到工作流插件中：

```ts
export default class MyPlugin extends Plugin {
  load() {
    // get workflow plugin instance
    const workflowPlugin = this.app.getPlugin<WorkflowPlugin>(WorkflowPlugin);

    // register trigger instance
    workflowPlugin.instructions.register('my-instruction', MyInstruction);
  }
}
```

指令的返回对象中的状态值（`status`）是必填内容，而且必须是常量 `JOB_STATUS` 中的值，该值将决定该节点在流程中的后续处理的流向。通常使用 `JOB_STATUS.RESOVLED` 即可，代表该节点成功执行完毕，会继续后续节点的执行。如果有需要提前保存的结果值，也可以调用 `processor.saveJob` 方法，并返回该方法的返回对象。执行器会根据该对象生成执行结果记录。

### 节点的结果值

如果有特定的执行结果，尤其是准备可供后续节点使用的数据，可以通过 `result` 属性返回，并保存在节点任务对象中：

```ts
import { Instruction, JOB_STATUS } from '@nocobase/plugin-workflow';

export class RandomStringInstruction extends Instruction {
  run(node, input, processor) {
    // customized config from node
    const { digit = 1 } = node.config;
    const result = `${Math.round(10 ** digit * Math.random())}`.padStart(
      digit,
      '0',
    );
    return {
      status: JOB_STATUS.RESOVLED,
      result,
    };
  },
};
```

其中 `node.config` 是节点的配置项，可以是需要的任意值，会以 `JSON` 类型字段保存在数据库对应的节点记录中。

### 指令的错误处理

如果执行过程可能会有异常，可以提前捕获后并返回失败状态：

```ts
import { JOB_STATUS } from '@nocobase/plugin-workflow';

export const errorInstruction = {
  run(node, input, processor) {
    try {
      throw new Error('exception');
    } catch (error) {
      return {
        status: JOB_STATUS.ERROR,
        result: error,
      };
    }
  },
};
```

如果不对可预测的异常进行捕获，那么流程引擎会自动捕获并返回出错状态，以避免未捕获的异常造成程序崩溃。

### 异步节点

当需要进行流程控制或者异步（耗时）IO 操作时，`run` 方法可以返回一个 `status` 为 `JOB_STATUS.PENDING` 状态的对象，提示执行器进行等待（挂起），等待某些外部异步操作完成后，通知流程引擎继续执行。如果在 `run` 函数中返回了挂起的状态值，则该指令必须实现 `resume` 方法，否则无法恢复流程的执行：

```ts
import { Instruction, JOB_STATUS } from '@nocobase/plugin-workflow';

export class PayInstruction extends Instruction {
  async run(node, input, processor) {
    // job could be create first via processor
    const job = await processor.saveJob({
      status: JOB_STATUS.PENDING,
    });

    const { plugin } = processor;
    // do payment asynchronously
    paymentService.pay(node.config, (result) => {
      // notify processor to resume the job
      return plugin.resume(job.id, result);
    });

    // return created job instance
    return job;
  }

  resume(node, job, processor) {
    // check payment status
    job.set('status', job.result.status === 'ok' ? JOB_STATUS.RESOVLED : JOB_STATUS.REJECTED);
    return job;
  },
};
```

其中 `paymentService` 指代某个支付服务，在服务的回调中再触发工作流恢复对应任务的执行流程，当前流程先退出。之后由工作流引擎创建新的处理器转交到节点的 `resume` 方法中，将之前已挂起的节点继续执行。

:::info{title=提示}
这里说的“异步操作”不是指 JavaScript 中的 `async` 函数，而是与其他外部系统交互时，某些非即时返回的操作，比如支付服务会需要等待另外的通知才能知道结果。
:::

### 节点的结果状态

节点的执行状态会影响整个流程的成功或失败，通常在没有分支的情况下，某个节点的失败会直接导致整个流程失败。其中最常规的情况是，节点执行成功则继续节点表中的下一个节点，直到没有后续节点，则整个工作流执行以成功的状态完成。

如果执行中某个节点返回了执行失败的状态，则视以下两种情况引擎会有不同的处理：

1.  返回失败状态的节点处于主流程，即均未处于上游的节点开启的任意分支流程之内，则整个主流程会判定为失败，并退出流程。

2.  返回失败状态的节点处于某个分支流程之内，此时将判定流程下一步状态的职责交由开启分支的节点，由该节点的内部逻辑决定后续流程的状态，并且递归上溯到主流程。

最终都在主流程的节点上得出整个流程的下一步状态，如果主流程的节点中返回的是失败，则整个流程以失败的状态结束。

如果任意节点执行后返回了“停等”状态，则整个执行流程会被暂时中断挂起，等待一个由对应节点定义的事件触发以恢复流程的执行。例如 [人工节点](../../../workflow-manual/index/index.md)，执行到该节点后会以“停等”状态从该节点暂停，等待人工介入该流程，决策是否通过。如果人工输入的状态是通过，则继续后续的流程节点，反之则按前面的失败逻辑处理。

更多的的指令返回状态可以参考 [工作流 API 参考](../api#JOB_STATUS) 部分。

### 提前退出

在某些特殊的流程中，可能需要在某个节点中直接结束流程，可以返回 `null`，表示退出当前流程，并且不会继续执行后续节点。

这种情况在一些流程控制类型的节点中比较常见，例如 [并行分支节点](../../../workflow-parallel/index/index.md) 中（[代码参考](https://github.com/nocobase/nocobase/blob/main/packages/plugins/%40nocobase/plugin-workflow-parallel/src/server/ParallelInstruction.ts#L87)），当前节点的流程退出，但是会对子分支分别开启新的流程并继续执行。

:::warn{title=提示}
扩展节点进行分支流程的调度有一定复杂性，需要谨慎处理，并进行充分的测试。
:::

## 客户端

与触发器类型，节点类型的配置内容需要在前端实现。

例如我们需要为上面在服务端定义的随机数字符串类型（`randomString`）的节点提供配置界面，其中有一个配置项是 `digit` 代表随机数的位数，在配置表单中我们使用一个数字输入框来接收用户输入。

```tsx | pure
import WorkflowPlugin, { Instruction } from '@nocobase/workflow/client';

class MyInstruction extends Instruction {
  title = 'Random number string';
  type = 'randomString';
  group = 'extended';
  fieldset = {
    'config.digit': {
      type: 'number',
      title: 'Digit',
      name: 'config.digit',
      'x-decorator': 'FormItem',
      'x-component': 'InputNumber',
      'x-component-props': {
        min: 1,
        max: 10,
      },
      default: 6,
    },
  };
  useVariables(node, options) {
    return {
      [fieldNames.value]: node.key,
      [fieldNames.label]: node.title,
    };
  }
}

export default class MyPlugin extends Plugin {
  load() {
    // get workflow plugin instance
    const workflowPlugin = this.app.getPlugin<WorkflowPlugin>(WorkflowPlugin);

    // register instruction
    workflowPlugin.registerInstruction('log', LogInstruction);
  }
}
```

:::info{title=提示}
客户端注册的节点类型标识必须与服务端的保持一致，否则会导致错误。
:::

定义节点类型的各个参数定义见 [工作流 API 参考](../api#instruction-1) 部分。
