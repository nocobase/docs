# トリガー

## ワークフローの作成

ワークフローを作成する際には、「カスタムアクションイベント」を選択してください：

![カスタムアクションイベントのワークフロー作成](https://static-docs.nocobase.com/20240509091820.png)

## トリガー設定

### Context Type

> v.1.6.0+

Different context types determine where the workflow can be bound to buttons in different blocks:

* None: A global event that can be bound to action buttons in the action panel and other data blocks.
* Single record: Can be bound to action buttons in data blocks such as table rows, forms, and details.
* Multiple records: Can be bound to batch operation buttons in the table block.

![触发器配置_上下文类型](https://static-docs.nocobase.com/20250215135808.png)

### データテーブル

When the context type is single record or multiple records, you'll need to choose the collection that will be associated with your data model:

![トリガー設定_データテーブルの選択](https://static-docs.nocobase.com/20240509150515.png)

### 使用する関連データ

ワークフロー内でトリガーされたデータ行の関連データを使用する必要がある場合、ここで必要な深い関連フィールドを選択できます：

![トリガー設定_使用する関連データの選択](https://static-docs.nocobase.com/20240509154856.png)

これらのフィールドは、イベントがトリガーされた後に自動的にワークフローのコンテキストにプリロードされ、ワークフロー内で使用できるようになります。

