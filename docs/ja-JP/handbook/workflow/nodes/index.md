# 概要

ノードはワークフローにおける論理的な編成の基本単位であり、1つのワークフローには任意の数のノードを設定できます。各ノードのタイプは指令を表し、ノードの動作を決定します。ノードの設定は指令のパラメータに対応しており、パラメータはその動作に関するデータオブジェクトやその他の内容を決定します。

:::info{title=ヒント}
ワークフローのトリガーはノードには含まれず、エントリーノードとしてフローチャートに表示されますが、ノードとは異なる概念です。詳細については[トリガー](../triggers/index.md)の内容をご参照ください。
:::

機能の観点から、現在実装されているノードは4つの大カテゴリに分けられており、合計で18種類のノードがあります。

- フロー制御クラス  
  - [条件判断](./condition.md)  
  - [遅延](./delay.md)（プラグイン @nocobase/plugin-workflow-delay 提供）  
  - [フロー終了](./end.md)  
  - [ループ](./loop.md)（プラグイン @nocobase/plugin-workflow-loop 提供）  
  - [並列分岐](./parallel.md)（プラグイン @nocobase/plugin-workflow-parallel 提供）  
  - [カスタム変数](./variable.md)（プラグイン @nocobase/plugin-workflow-variable 提供）  

- 計算クラス  
  - [演算](./calculation.md)  
  - [動的式演算](./dynamic-calculation.md)（プラグイン @nocobase/plugin-workflow-dynamic-calculation 提供）  
  - [日付計算](./date-calculation.md)（プラグイン @nocobase/plugin-workflow-date-calculation 提供）  

- データテーブル操作  
  - [データ追加](./create.md)  
  - [データ更新](./update.md)  
  - [データ削除](./destroy.md)  
  - [データ検索](./query.md)  
  - [集約検索](./aggregate.md)（プラグイン @nocobase/plugin-workflow-aggregate 提供）  
  - [SQL 操作](./sql.md)（プラグイン @nocobase/plugin-workflow-sql 提供）  

- 人手処理  
  - [人手処理](./manual.md)（プラグイン @nocobase/plugin-workflow-manual 提供）  
  - [承認](./approval.md)（プラグイン @nocobase/plugin-workflow-approval 提供）  

- その他拡張  
  - [HTTP リクエスト](./request.md)（プラグイン @nocobase/plugin-workflow-request 提供）  
  - [レスポンスメッセージ](./response-message.md)（プラグイン @nocobase/plugin-workflow-response-message 提供）

