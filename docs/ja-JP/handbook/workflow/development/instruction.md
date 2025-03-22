# 拡張ノードタイプ

ノードのタイプは本質的に操作指令であり、異なる指令はプロセス内で実行される異なる操作を表します。

トリガーと同様に、拡張ノードのタイプも前面と背面の2つの部分に分かれています。サーバー側は登録された指令のロジックを実装する必要があり、クライアント側は指令に関連するノードのパラメータ設定のインターフェースを提供する必要があります。

## サーバー側

### 最も簡単なノード指令

指令のコア内容は関数であり、指令クラス内の `run` メソッドは必ず実装する必要があります。これは指令のロジックを実行するために使用されます。関数内では、データベース操作、ファイル操作、サードパーティAPIの呼び出しなど、必要な任意の操作を実行できます。

すべての指令は `Instruction` 基本クラスから派生する必要があり、最も簡単な指令は `run` 関数を実装するだけで済みます：

```ts
import { Instruction, JOB_STATUS } from '@nocobase/plugin-workflow';

export class MyInstruction extends Instruction {
  run(node, input, processor) {
    console.log('私の指令が実行されました！');
    return {
      status: JOB_STATUS.RESOLVED,
    };
  }
}
```

この指令をワークフロープラグインに登録するには、以下のようにします：

```ts
export default class MyPlugin extends Plugin {
  load() {
    // ワークフロープラグインインスタンスを取得
    const workflowPlugin = this.app.getPlugin<WorkflowPlugin>(WorkflowPlugin);

    // 指令を登録
    workflowPlugin.registerInstruction('my-instruction', MyInstruction);
  }
}
```

指令の返却オブジェクトの状態値（`status`）は必須であり、定数 `JOB_STATUS` の値でなければなりません。この値がそのノードの後続処理の流れを決定します。通常は `JOB_STATUS.RESOLVED` を使用することで、このノードが正常に実行され、後続ノードの実行が継続されることを示します。事前に保存する必要がある結果値がある場合は、`processor.saveJob` メソッドを呼び出し、そのメソッドの返却オブジェクトを返すことができます。実行者はそのオブジェクトに基づいて実行結果の記録を生成します。

### ノードの結果値

特定の実行結果、特に後続ノードで使用するデータを準備する必要がある場合は、`result` プロパティを介して返却し、ノードタスクオブジェクトに保存できます：

```ts
import { Instruction, JOB_STATUS } from '@nocobase/plugin-workflow';

export class RandomStringInstruction extends Instruction {
  run(node, input, processor) {
    // ノードからのカスタマイズ設定
    const { digit = 1 } = node.config;
    const result = `${Math.round(10 ** digit * Math.random())}`.padStart(
      digit,
      '0',
    );
    return {
      status: JOB_STATUS.RESOLVED,
      result,
    };
  },
};
```

ここで `node.config` はノードの設定項目であり、必要な任意の値であり、データベースの対応するノード記録に `JSON` タイプフィールドとして保存されます。

### 指令のエラー処理

実行プロセス中に例外が発生する可能性がある場合は、事前に捕捉して失敗状態を返却できます：

```ts
import { JOB_STATUS } from '@nocobase/plugin-workflow';

export const errorInstruction = {
  run(node, input, processor) {
    try {
      throw new Error('例外');
    } catch (error) {
      return {
        status: JOB_STATUS.ERROR,
        result: error,
      };
    }
  },
};
```

もし予測可能な例外を捕捉しない場合、プロセスエンジンは自動的に例外を捕捉し、エラーステータスを返します。これにより、未捕捉の例外によるプログラムのクラッシュを防ぎます。

### 非同期ノード

プロセス制御や非同期（時間のかかる）IO操作が必要な場合、`run` メソッドは `status` が `JOB_STATUS.PENDING` のオブジェクトを返すことができます。これにより、実行者は待機（サスペンド）するよう指示され、外部の非同期操作が完了した後にプロセスエンジンに実行を続けるよう通知します。`run` 関数内でサスペンド状態の値を返した場合、この命令は `resume` メソッドを実装しなければなりません。そうしないと、プロセスの実行を再開することはできません：

```ts
import { Instruction, JOB_STATUS } from '@nocobase/plugin-workflow';

export class PayInstruction extends Instruction {
  async run(node, input, processor) {
    // ジョブはプロセッサを介して最初に作成できます
    const job = await processor.saveJob({
      status: JOB_STATUS.PENDING,
    });

    const { plugin } = processor;
    // 非同期で支払い処理を行う
    paymentService.pay(node.config, (result) => {
      // プロセッサにジョブを再開するよう通知する
      return plugin.resume(job.id, result);
    });

    // 作成したジョブインスタンスを返します
    return job;
  }

  resume(node, job, processor) {
    // 支払いステータスを確認します
    job.set('status', job.result.status === 'ok' ? JOB_STATUS.RESOLVED : JOB_STATUS.REJECTED);
    return job;
  }
};
```

`paymentService` は特定の支払いサービスを指し、サービスのコールバック内でワークフローをトリガーし、対応するタスクの実行プロセスを再開します。現在のプロセスは一旦終了し、その後、ワークフローエンジンが新しいプロセッサを作成し、ノードの `resume` メソッドに引き渡して、以前に保留されていたノードの実行を続けます。

:::info{title=ヒント}
ここで言う「非同期操作」とは、JavaScriptの `async` 関数を指すのではなく、他の外部システムとのやり取り時に即時に返されない操作を指します。例えば、支払いサービスは結果を知るために別の通知を待つ必要があります。
:::

### ノードの結果ステータス

ノードの実行ステータスは、プロセス全体の成功または失敗に影響を与えます。通常、分岐がない場合、あるノードの失敗は直接的に全体のプロセスを失敗に導きます。最も一般的なケースとして、ノードの実行が成功すると、ノードテーブルの次のノードに進み、続くノードがない場合、全体のワークフローは成功の状態で完了します。

もし実行中にあるノードが失敗のステータスを返した場合、エンジンは以下の2つの状況に応じて異なる処理を行います：

1. 失敗ステータスを返したノードが主プロセスにある場合、つまり上流のノードが開いたいかなる分岐プロセスにも属していない場合、全体の主プロセスは失敗と判定され、プロセスは終了します。

2. 失敗ステータスを返したノードが特定の分岐プロセス内にある場合、次のステップの状態を判断する責任は分岐を開いたノードに委ねられ、そのノードの内部ロジックに基づいて後続プロセスの状態が決まります。そして、主プロセスに遡って判断されます。

最終的には、主プロセスのノード上で全体のプロセスの次のステータスが決定され、主プロセスのノードが失敗を返した場合、全体のプロセスは失敗の状態で終了します。

もし任意のノードが実行後に「待機」状態を返した場合、全体の実行プロセスは一時的に中断され、対応するノードによって定義されたイベントのトリガーを待ってプロセスの実行が再開されます。例えば、[手動ノード](../manual/nodes/manual)は、そのノードに到達した後、「待機」状態で一時停止し、プロセスに介入して判断を行います。手動入力の状態が通過であれば、後続のプロセスノードを続行し、そうでなければ前述の失敗ロジックに従って処理されます。

より多くのコマンドのステータスの返却については、[ワークフロー API リファレンス](./api#JOB_STATUS) セクションを参照してください。

### 事前の終了

特定のプロセスでは、ノード内で直接プロセスを終了する必要がある場合があります。この場合、`null` を返すことで現在のプロセスを終了させ、以降のノードの実行を続行しません。

この状況は、[並行ブランチノード](../manual/nodes/parallel)のようなプロセス制御タイプのノードで一般的です（[コード参照](https://github.com/nocobase/nocobase/blob/main/packages/plugins/%40nocobase/plugin-workflow-parallel/src/server/ParallelInstruction.ts#L87)）。現在のノードのプロセスは終了しますが、サブブランチごとに新しいプロセスが開始され、実行が続行されます。

:::warn{title=ヒント}
拡張ノードによるブランチプロセスのスケジューリングには一定の複雑性があるため、慎重に処理し、十分なテストを行う必要があります。
:::

### さらに詳しく

ノードタイプの各パラメータ定義については、[ワークフロー API リファレンス](./api#instruction) セクションを参照してください。

## クライアント

トリガーと同様に、指示（ノードタイプ）の設定フォームはフロントエンドで実装する必要があります。

### 最もシンプルなノード指示

すべての指示は `Instruction` 基底クラスから派生する必要があり、関連する属性とメソッドはノードの設定と使用に利用されます。

例えば、上記でサーバー側に定義されたランダム文字列タイプ（`randomString`）のノードに対して設定インターフェースを提供する場合、設定項目の1つに `digit` があり、これがランダム数の桁数を表します。設定フォームでは、ユーザーの入力を受け取るために数字入力ボックスを使用します。

```tsx | pure
import WorkflowPlugin, { Instruction, VariableOption } from '@nocobase/workflow/client';

class MyInstruction extends Instruction {
  title = 'ランダム番号文字列';
  type = 'randomString';
  group = '拡張';
  fieldset = {
    'digit': {
      type: 'number',
      title: '桁数',
      name: 'digit',
      'x-decorator': 'FormItem',
      'x-component': 'InputNumber',
      'x-component-props': {
        min: 1,
        max: 10,
      },
      default: 6,
    },
  };
  useVariables(node, options): VariableOption {
    return {
      value: node.key,
      label: node.title,
    };
  }
}

export default class MyPlugin extends Plugin {
  load() {
    // ワークフロープラグインのインスタンスを取得
    const workflowPlugin = this.app.getPlugin<WorkflowPlugin>(WorkflowPlugin);

    // インストラクションを登録
    workflowPlugin.registerInstruction('log', LogInstruction);
  }
}
```

:::info{title=ヒント}
クライアントで登録されたノードタイプの識別子は、サーバー側と一致している必要があります。そうでない場合、エラーが発生します。
:::

### ノードの結果を変数として提供

上記の例に見られる `useVariables` メソッドについて説明します。このメソッドを実装することで、ノードの結果（`result` 部分）を変数として後続のノードで使用できるようになります。このメソッドは、継承した指令クラス内で実装し、`VariableOption` 型のオブジェクトを返す必要があります。このオブジェクトはノードの実行結果の構造を表現し、変数名のマッピングを提供します。

`VariableOption` 型の定義は以下の通りです：

```ts
export type VariableOption = {
  value?: string;
  label?: string;
  children?: VariableOption[] | null;
  [key: string]: any;
};
```

ここでの核心は `value` 属性であり、これは変数名の段階的なパス値を表します。`label` はインターフェース上で表示される内容を示し、`children` は多層構造の変数を表現するために使用されます。ノードの結果が深いオブジェクトである場合に利用されます。

使用可能な変数は、システム内部で `.` で区切られたパスのテンプレート文字列として表現されます。例えば `{{jobsMapByNodeKey.2dw92cdf.abc}}` のように、`$jobsMapByNodeKey` はすべてのノードの結果集を示します（内部で定義されており、特別な処理は必要ありません）。`2dw92cdf` はノードの `key` を示し、`abc` はノードの結果オブジェクト内の特定のカスタム属性を表します。

さらに、ノードの結果が単純な値である場合も考慮し、ノード変数を提供する際には、第一層は**必ず**ノード自身の説明でなければなりません：

```ts
{
  value: node.key,
  label: node.title,
}
```

つまり、第一層はノードの `key` とタイトルで構成されます。例えば計算ノードの[コードリファレンス](https://github.com/nocobase/nocobase/blob/main/packages/plugins/%40nocobase/plugin-workflow/src/client/nodes/calculation.tsx#L77)を参照し、計算ノードの結果を使用する際、インターフェースのオプションは以下のようになります：

![計算ノードの結果](https://static-docs.nocobase.com/20240514230014.png)

ノードの結果が複雑なオブジェクトである場合、`children` を使用して深層属性を記述できます。例えば、カスタム指令は以下のような JSON データを返します：

```json
{
  "message": "ok",
  "data": {
    "id": 1,
    "name": "test"
  }
}
```

この場合、次の `useVariables` メソッドを通じて返すことができます：

```ts
useVariables(node, options): VariableOption {
  return {
    value: node.key,
    label: node.title,
    children: [
      {
        value: 'message',
        label: 'メッセージ',
      },
      {
        value: 'data',
        label: 'データ',
        children: [
          {
            value: 'id',
            label: 'ID',
          },
          {
            value: 'name',
            label: '名前',
          },
        ],
      },
    ],
  };
}
```

これにより、後続のノードでは次のインターフェースを使用して変数を選択できます：

![マッピングされた結果変数](https://static-docs.nocobase.com/20240514230103.png)

:::info{title="ヒント"}
結果の中に深層オブジェクトの配列が存在する場合も、同様に `children` を使用してパスを記述できますが、配列のインデックスを含めることはできません。NocoBase ワークフローの変数処理において、オブジェクト配列の変数パス記述は、使用時に自動的に深層値の配列に平坦化され、インデックスを使用して特定の値にアクセスすることはできません。詳細は「[ワークフロー：進階使用](../manual/advanced#使用変数)」の内容を参照してください。
:::

### 节点是否可用

默认情况下，工作流中可以任意添加节点。但在某些情况下，节点在一些特定类型的工作流或者分支内是不适用的，这时可以通过 `isAvailable` 来配置节点的可用性：

```ts
// 类型定义
export abstract class Instruction {
  isAvailable?(ctx: NodeAvailableContext): boolean;
}

export type NodeAvailableContext = {
  // 工作流插件实例
  engine: WorkflowPlugin;
  // 工作流实例
  workflow: object;
  // 上游节点
  upstream: object;
  // 是否是分支节点（分支编号）
  branchIndex: number;
};
```

`isAvailable` 方法返回 `true` 时表示节点可用，`false` 表示不可用。`ctx` 参数中包含了当前节点的上下文信息，可以根据这些信息来判断节点是否可用。

在没有特殊需求的情况下，不需要实现 `isAvailable` 方法，节点默认是可用的。最常见需要配置的情况，是节点可能是一个高耗时的操作，不适合在同步流程中执行，可以通过 `isAvailable` 方法来限制节点的使用。例如：

```ts
isAvailable({ engine, workflow, upstream, branchIndex }) {
  return !engine.isWorkflowSync(workflow);
}
```

### さらに知る

ノードタイプの各パラメータ定義については、[ワークフロー API 参考](./api#instruction-1) セクションを参照してください。

