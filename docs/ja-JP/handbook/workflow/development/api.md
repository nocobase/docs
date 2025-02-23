# API 参考

## サーバーサイド

サーバーパッケージ構造で利用可能な API は以下のコードのようになります：

```ts
import PluginWorkflowServer, {
  Trigger,
  Instruction,
  EXECUTION_STATUS,
  JOB_STATUS,
} from '@nocobase/plugin-workflow';
```

### `PluginWorkflowServer`

ワークフロープラグインクラスです。

通常、アプリケーションの実行時に、任意の場所でアプリインスタンス `app` を取得できる場合、`app.pm.get<PluginWorkflowServer>(PluginWorkflowServer)` を呼び出してワークフロープラグインインスタンス（以下では `plugin` と呼びます）を取得します。

#### `registerTrigger()`

新しいトリガータイプの拡張登録を行います。

**シグネチャ**

`registerTrigger(type: string, trigger: typeof Trigger | Trigger)`

**パラメータ**

| パラメータ | タイプ                          | 説明                 |
| ---------- | ------------------------------- | -------------------- |
| `type`     | `string`                        | トリガータイプ識別子 |
| `trigger`  | `typeof Trigger \| Trigger`    | トリガータイプまたはインスタンス |

**例**

```ts
import PluginWorkflowServer, { Trigger } from '@nocobase/plugin-workflow';

function handler(this: MyTrigger, workflow: WorkflowModel, message: string) {
  // ワークフローをトリガーします
  this.workflow.trigger(workflow, { data: message.data });
}

class MyTrigger extends Trigger {
  messageHandlers: Map<number, WorkflowModel> = new Map();
  
  on(workflow: WorkflowModel) {
    const messageHandler = handler.bind(this, workflow);
    // ワークフローをトリガーするイベントをリッスンします
    process.on(
      'message',
      this.messageHandlers.set(workflow.id, messageHandler),
    );
  }

  off(workflow: WorkflowModel) {
    const messageHandler = this.messageHandlers.get(workflow.id);
    // リスナーを削除します
    process.off('message', messageHandler);
  }
}

export default class MyPlugin extends Plugin {
  load() {
    // ワークフロープラグインのインスタンスを取得します
    const workflowPlugin =
      this.app.pm.get<PluginWorkflowServer>(PluginWorkflowServer);

    // トリガーを登録します
    workflowPlugin.registerTrigger('myTrigger', MyTrigger);
  }
}
```

#### `registerInstruction()`

新しいノードタイプを登録するために拡張します。

**署名**

`registerInstruction(type: string, instruction: typeof Instruction | Instruction)`

**パラメータ**

| パラメータ      | タイプ                                | 説明           |
| --------------- | ------------------------------------- | -------------- |
| `type`          | `string`                              | 指令タイプ識別子 |
| `instruction`   | `typeof Instruction \| Instruction`   | 指令タイプまたはインスタンス |

**例**

```ts
import PluginWorkflowServer, { Instruction, JOB_STATUS } from '@nocobase/plugin-workflow';

class LogInstruction extends Instruction {
  run(node, input, processor) {
    console.log('私の命令が実行されました！');
    return {
      status: JOB_STATUS.RESOLVED,
    };
  }
};

export default class MyPlugin extends Plugin {
  load() {
    // ワークフロープラグインのインスタンスを取得
    const workflowPlugin = this.app.pm.get<PluginWorkflowServer>(PluginWorkflowServer);

    // 命令を登録
    workflowPlugin.registerInstruction('log', LogInstruction);
  }
}
```

#### `trigger()`

特定のワークフローをトリガーします。主にカスタムトリガー内で、特定のカスタムイベントを検知した際に対応するワークフローをトリガーするために使用されます。

**シグネチャ**

`trigger(workflow: Workflow, context: any)`

**パラメータ**

| パラメータ | タイプ           | 説明                              |
| ---------- | ---------------- | --------------------------------- |
| `workflow` | `WorkflowModel`  | トリガーするワークフローオブジェクト |
| `context`  | `object`         | トリガー時に提供されるコンテキストデータ |

:::info{title=ヒント}
`context` は現在必須項目です。提供しない場合、そのワークフローはトリガーされません。
:::

**例**

```ts
import { Trigger } from '@nocobase/plugin-workflow';

class MyTrigger extends Trigger {
  timer: NodeJS.Timeout;

  on(workflow) {
    // イベントを登録
    this.timer = setInterval(() => {
      // ワークフローをトリガー
      this.plugin.trigger(workflow, { date: new Date() });
    }, workflow.config.interval ?? 60000);
  }
}
```

#### `resume()`

特定のノードタスクで停止中のワークフローを再実行します。

- 停止中の状態（`EXECUTION_STATUS.STARTED`）にあるワークフローのみ再実行可能です。
- 停止中の状態（`JOB_STATUS.PENDING`）にあるノードタスクのみ再実行可能です。

**シグネチャ**

`resume(job: JobModel)`

**パラメータ**

| パラメータ  | タイプ       | 説明             |
| ----------- | ------------ | ---------------- |
| `job`       | `JobModel`   | 更新されたタスクオブジェクト |

:::info{title=ヒント}
渡されるタスクオブジェクトは一般に更新されたオブジェクトであり、通常は `status` を非 `JOB_STATUS.PENDING` の値に更新します。そうでないと、引き続き停止中のままとなります。
:::

詳しくは[ソースコード](https://github.com/nocobase/nocobase/blob/main/packages/plugins/%40nocobase/plugin-workflow-manual/src/server/actions.ts#L99)をご覧ください。

### `Trigger`

トリガーの基底クラスであり、カスタムトリガータイプを拡張するために使用されます。

| パラメータ    | 型                                                        | 説明                   |
| ------------- | --------------------------------------------------------- | ---------------------- |
| `constructor` | `(public readonly workflow: PluginWorkflowServer): Trigger` | コンストラクタ         |
| `on?`         | `(workflow: WorkflowModel): void`                         | ワークフロー開始後のイベント処理 |
| `off?`        | `(workflow: WorkflowModel): void`                         | ワークフロー停止後のイベント処理 |

`on` および `off` は、ワークフローの有効化または無効化時にイベントリスナーの登録および解除を行うために使用され、渡されるパラメータは対応するトリガーのワークフローインスタンスです。これに基づいて処理を行うことができます。特定のトリガータイプがすでにグローバルでイベントをリッスンしている場合、これらのメソッドを実装する必要はありません。たとえば、タイマートリガーでは、`on` でタイマーを登録し、`off` でタイマーを解除します。

### `Instruction`

命令タイプの基底クラスであり、カスタム命令タイプを拡張するために使用されます。

| パラメータ      | 型                                                         | 説明                               |
| --------------- | ----------------------------------------------------------- | ---------------------------------- |
| `constructor`   | `(public readonly workflow: PluginWorkflowServer): Instruction` | コンストラクタ                     |
| `run`           | `Runner`                                                    | 初回ノードの実行ロジック             |
| `resume?`       | `Runner`                                                    | 中断から復帰後のノードの実行ロジック |
| `getScope?`     | `(node: FlowNodeModel, data: any, processor: Processor): any` | 対応ノードが生成する分岐のローカル変数の内容 |

**関連タイプ**

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

`getScope`は[ループノードの実装](https://github.com/nocobase/nocobase/blob/main/packages/plugins/%40nocobase/plugin-workflow-loop/src/server/LoopInstruction.ts#L83)を参考にし、分岐のローカル変数の内容を提供するために使用されます。

### `EXECUTION_STATUS`

ワークフロー実行プランの状態を示す定数表で、対応する実行プランの現在の状態を識別するために使用されます。

| 定数名                          | 意味                |
| ------------------------------- | ------------------- |
| `EXECUTION_STATUS.QUEUEING`     | キュー中            |
| `EXECUTION_STATUS.STARTED`      | 実行中              |
| `EXECUTION_STATUS.RESOLVED`     | 成功完了            |
| `EXECUTION_STATUS.FAILED`       | 失敗                |
| `EXECUTION_STATUS.ERROR`        | 実行エラー          |
| `EXECUTION_STATUS.ABORTED`      | 中断されました      |
| `EXECUTION_STATUS.CANCELED`     | 取消されました      |
| `EXECUTION_STATUS.REJECTED`     | 拒否されました      |
| `EXECUTION_STATUS.RETRY_NEEDED` | 未成功実行、再試行が必要 |

最初の3つを除いて、他はすべて失敗状態を表し、異なる失敗の原因を示すために使用できます。

### `JOB_STATUS`

ワークフローノードタスク状態の定数表で、対応するノードタスクの現在の状態を識別するために使用されます。ノードによって生成された状態は、全体の実行計画の状態にも影響を与えます。

| 定数名                     | 意味                                     |
| -------------------------- | ---------------------------------------- |
| `JOB_STATUS.PENDING`      | 保留中：このノードに到達しましたが、指示により保留されています。 |
| `JOB_STATUS.RESOLVED`     | 完了：正常に処理が完了しました。                  |
| `JOB_STATUS.FAILED`       | 失敗：このノードの実行が設定条件を満たしませんでした。 |
| `JOB_STATUS.ERROR`        | エラー：このノードの実行中に未捕捉のエラーが発生しました。 |
| `JOB_STATUS.ABORTED`      | 中止：保留後、他のロジックによりこのノードの実行が中止されました。 |
| `JOB_STATUS.CANCELED`     | 取消：保留後、手動でこのノードの実行がキャンセルされました。 |
| `JOB_STATUS.REJECTED`     | 拒否：保留後、手動でこのノードの継続が拒否されました。 |
| `JOB_STATUS.RETRY_NEEDED` | 未成功の実行、再試行が必要です。                   |

## クライアント

クライアントパッケージの構造で使用できる API は、以下のコードのように示されています：

```ts
import PluginWorkflowClient, {
  Trigger,
  Instruction,
} from '@nocobase/plugin-workflow/client';
```

### `PluginWorkflowClient`

#### `registerTrigger()`

トリガータイプに対応する設定パネルを登録します。

**シグネチャ**

`registerTrigger(type: string, trigger: typeof Trigger | Trigger): void`

**パラメータ**

| パラメータ   | タイプ                        | 説明                                 |
| ------------ | ----------------------------- | ------------------------------------ |
| `type`       | `string`                     | トリガータイプの識別子。登録時に使用する識別子と一致する必要があります。 |
| `trigger`    | `typeof Trigger \| Trigger`  | トリガータイプまたはそのインスタンス                     |

#### `registerInstruction()`

ノードタイプに対応する設定パネルを登録します。

**シグネチャ**

`registerInstruction(type: string, instruction: typeof Instruction | Instruction): void`

**パラメータ**

| パラメータ     | タイプ                              | 説明                               |
| -------------- | ----------------------------------- | ---------------------------------- |
| `type`         | `string`                            | ノードタイプの識別子。登録時に使用する識別子と一致する必要があります。 |
| `instruction`  | `typeof Instruction \| Instruction` | ノードタイプまたはそのインスタンス                     |

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

### `Trigger`

トリガーの基底クラスであり、カスタムトリガータイプを拡張するために使用されます。

| パラメータ        | 型                                                               | 説明                               |
| ----------------- | ---------------------------------------------------------------- | ---------------------------------- |
| `title`           | `string`                                                       | トリガータイプ名                   |
| `fieldset`        | `{ [key: string]: ISchema }`                                   | トリガー設定項目の集合             |
| `scope?`          | `{ [key: string]: any }`                                       | 設定項目Schemaで使用される可能性のあるオブジェクトの集合 |
| `components?`     | `{ [key: string]: React.FC }`                                  | 設定項目Schemaで使用される可能性のあるコンポーネントの集合 |
| `useVariables?`   | `(config: any, options: UseVariableOptions) => VariableOptions` | トリガーコンテキストデータの値取得器 |

- `useVariables` が設定されていない場合、このタイプのトリガーは値取得機能を提供せず、フローのノード内でトリガーのコンテキストデータを選択することはできません。

### `Instruction`

指令の基底クラスであり、カスタムノードタイプを拡張するために使用されます。

| パラメータ           | 型                                                    | 説明                                                                           |
| -------------------- | ----------------------------------------------------- | ------------------------------------------------------------------------------ |
| `group`              | `string`                                             | ノードタイプグループ識別子。現在選択可能なもの：`'control'`、`'collection'`、`'manual'`、`'extended'` |
| `fieldset`           | `Record<string, ISchema>`                            | ノード設定項目の集合                                                            |
| `scope?`             | `Record<string, Function>`                            | 設定項目スキーマで使用される可能性のあるオブジェクトの集合                     |
| `components?`        | `Record<string, React.FC>`                            | 設定項目スキーマで使用される可能性のあるコンポーネントの集合                   |
| `Component?`         | `React.FC`                                          | ノードのカスタムレンダリングコンポーネント                                      |
| `useVariables?`      | `(node, options: UseVariableOptions) => VariableOption` | ノードが提供する変数オプションのメソッド                                       |
| `useScopeVariables?`  | `(node, options?) => VariableOptions`                | ノードが提供するスコープ内の変数オプションのメソッド                           |
| `useInitializers?`   | `(node) => SchemaInitializerItemType`                | ノードが提供する初期化オプションのメソッド                                     |
| `isAvailable?`       | `(ctx: NodeAvailableContext) => boolean`              | ノードが利用可能かどうかを判断するメソッド                                      |

**関連タイプ**

```ts
export type NodeAvailableContext = {
  workflow: object;
  upstream: object;
  branchIndex: number;
};
```

- `useVariables` が設定されていない場合、そのノードタイプは値取得機能を提供しないことを意味します。プロセス内のノードにおいて、このタイプのノードの結果データを選択することはできません。結果値が単一である（選択不可）場合は、対応する情報を表現する静的コンテンツを返すだけで十分です（参考：[演算ノードのソースコード](https://github.com/nocobase/nocobase/blob/main/packages/plugins/@nocobase/plugin-workflow/src/client/nodes/calculation.tsx#L68)）。選択可能にする必要がある場合（例えば、オブジェクト内の特定のプロパティなど）、対応する選択コンポーネントの出力をカスタマイズすることができます（参考：[新規データノードのソースコード](https://github.com/nocobase/nocobase/blob/main/packages/plugins/@nocobase/plugin-workflow/src/client/nodes/create.tsx#L41)）。

- `Component` ノードのカスタムレンダリングコンポーネントです。デフォルトのノードレンダリングが満たされない場合、完全に上書きしてカスタムノードビューのレンダリングを行うことができます。例えば、分岐タイプの開始ノードに対して追加の操作ボタンや他のインタラクションを提供する必要がある場合、この方法を使用する必要があります（参考：[並行分岐のソースコード](https://github.com/nocobase/nocobase/blob/main/packages/plugins/@nocobase/plugin-workflow-parallel/src/client/ParallelInstruction.tsx)）。

- `useInitializers` は初期化ブロックを提供するための手段です。例えば、人工ノード内で上流ノードに基づいて関連ユーザーブロックを初期化することができます。このメソッドが提供されると、人工ノードインターフェースの設定で初期化ブロックが利用可能になります（参考：[新規データノードのソースコード](https://github.com/nocobase/nocobase/blob/main/packages/plugins/@nocobase/plugin-workflow/src/client/nodes/create.tsx#L71)）。

- `isAvailable` は、ノードが現在の環境で使用（追加）できるかどうかを判断するために主に使われます。現在の環境には、現在のワークフロー、上流ノード、現在の分岐インデックスなどが含まれます。

