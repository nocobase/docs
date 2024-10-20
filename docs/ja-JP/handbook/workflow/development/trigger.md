# トリガータイプの拡張

各ワークフローは、プロセス実行の入口として特定のトリガーを設定する必要があります。

トリガーのタイプは通常、特定のシステム環境イベントを表します。アプリケーションのライフサイクル内で、サブスクリプション可能なイベントセクションはトリガータイプの定義に使用できます。例えば、リクエストの受信、データテーブル操作、定期タスクなどです。

トリガータイプは、文字列識別子に基づいてプラグインのトリガーテーブルに登録され、ワークフロープラグインにはいくつかの組み込みトリガーが含まれています：

- `'collection'`：データテーブル操作トリガー
- `'schedule'`：定期タスクトリガー
- `'action'`：操作後イベントトリガー

拡張されたトリガータイプは、識別子の一意性を保証する必要があります。サーバー側でトリガーのサブスクリプションおよびキャンセルの実装を行い、クライアント側で登録画面の設定を行います。

## サーバー側

任意のトリガーは `Trigger` 基本クラスを継承し、具体的な環境イベントのサブスクリプションとキャンセルを行うために `on` および `off` メソッドを実装する必要があります。`on` メソッド内では、具体的なイベントコールバック関数内で `this.workflow.trigger()` を呼び出して、最終的にイベントをトリガーします。また、`off` メソッド内では、サブスクリプションキャンセルに関連するクリーンアップ作業を行う必要があります。

`this.workflow` は、`Trigger` 基本クラスのコンストラクタ内で渡されるワークフロープラグインのインスタンスです。

```ts
import { Trigger } from '@nocobase/plugin-workflow';

class MyTrigger extends Trigger {
  timer: NodeJS.Timeout;

  on(workflow) {
    // イベントを登録
    this.timer = setInterval(() => {
      // ワークフローをトリガー
      this.workflow.trigger(workflow, { date: new Date() });
    }, workflow.config.interval ?? 60000);
  }

  off(workflow) {
    // イベントを登録解除
    clearInterval(this.timer);
  }
}
```

その後、ワークフローを拡張するプラグイン内でトリガーインスタンスをワークフローエンジンに登録します。

```ts
import WorkflowPlugin from '@nocobase/plugin-workflow';

export default class MyPlugin extends Plugin {
  load() {
    // ワークフロープラグインのインスタンスを取得
    const workflowPlugin = this.app.pm.get(WorkflowPlugin) as WorkflowPlugin;

    // トリガーを登録
    workflowPlugin.registerTrigger('interval', MyTrigger);
  }
}
```

サーバーが起動して読み込まれると、`'interval'`タイプのトリガーを追加および実行できるようになります。

## クライアント側

クライアント部分は、トリガータイプに必要な設定項目に基づいて設定インターフェースを提供します。各トリガータイプも同様に、ワークフロープラグインに対応する設定を登録する必要があります。

例えば、上記の定期実行のトリガーに対して、設定インターフェースのフォームに必要な間隔時間の設定項目（`interval`）を定義します：

```ts
import { Trigger } from '@nocobase/workflow/client';

class MyTrigger extends Trigger {
  title = 'インターバルタイマートリガー';
  // トリガー設定のフィールド
  fieldset = {
    interval: {
      type: 'number',
      title: 'インターバル',
      name: 'config.interval',
      'x-decorator': 'FormItem',
      'x-component': 'InputNumber',
      default: 60000,
    },
  };
}
```

次に、拡張したプラグイン内でワークフロープラグインのインスタンスにこのトリガータイプを登録します：

```ts
import { Plugin } from '@nocobase/client';
import WorkflowPlugin from '@nocobase/plugin-workflow/client';

import MyTrigger from './MyTrigger';

export default class extends Plugin {
  // ここでアプリインスタンスを取得し、変更できます
  async load() {
    const workflow = this.app.pm.get(WorkflowPlugin) as WorkflowPlugin;
    workflow.registerTrigger('interval', MyTrigger);
  }
}
```

その後、ワークフローの設定画面に新しいトリガータイプが表示されます。

:::info{title=ヒント}
クライアントで登録されたトリガータイプの識別子は、サーバー側と一致させる必要があります。そうしないとエラーが発生します。
:::

トリガータイプの定義に関する詳細は、[ワークフロー API リファレンス](./api#pluginregisterTrigger) セクションを参照してください。

