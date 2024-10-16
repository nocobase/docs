# 提交

## 紹介

提出操作はフォームデータを保存するために使用されます（フォームブロック特有）。また、ワークフローと組み合わせることでデータ自動化プロセスを実現できます。

![20240413093210](https://static-docs.nocobase.com/20240413093210.png)

## 操作設定項目

![20240413095124](https://static-docs.nocobase.com/20240413095124.png)

### 保存モード

新しいデータのみを追加するフォームブロックの提出操作では、保存方法の設定をサポートしています。

![20240413101209](https://static-docs.nocobase.com/20240413101209.png)

![20240413100531](https://static-docs.nocobase.com/20240413100531.png)

1. 直接挿入；
2. 存在しない場合にのみ挿入（レコードの存在を判断するためのフィールド設定が必要）；
3. 存在しない場合に挿入、そうでなければ更新（レコードの存在を判断するためのフィールド設定が必要）；

### ワークフローのバインディング

データの提出が成功した後にのみ、バインディングされたワークフローがトリガーされます。

![20240417120149](https://static-docs.nocobase.com/20240417120149.png)

詳細については、[ワークフローのバインディング](/handbook/ui/actions/action-settings/bind-workflow)をご覧ください。

- [編集ボタン](/handbook/ui/actions/action-settings/edit-button)
- [二次確認](/handbook/ui/actions/action-settings/double-check)

