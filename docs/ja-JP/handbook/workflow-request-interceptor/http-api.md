# 外部呼び出し

操作前のイベントはリクエスト処理段階で注入されるため、HTTP API 呼び出しを通じてトリガーすることが可能です。

操作ボタンに部分的にバインドされたワークフローについては、次のように呼び出すことができます（`posts` テーブルを作成するボタンの例）：

```bash
curl -X POST -H 'Authorization: Bearer <your token>' -H 'X-Role: <roleName>' -d \
  '{
    "title": "Hello, world!",
    "content": "This is a test post."
  }'
  "http://localhost:3000/api/posts:create?triggerWorkflows=workflowKey"
```

ここで、URL パラメータ `triggerWorkflows` はワークフローのキーであり、複数のワークフローはカンマで区切って指定します。このキーはワークフローフローチャートの上部にあるワークフロー名にマウスをホバーさせることで取得できます：

![ワークフローキー確認方法](https://static-docs.nocobase.com/20240426135108.png)

上記の呼び出しを行うと、対応する `posts` テーブルの操作前イベントがトリガーされます。対応するワークフローの同期処理が完了した後、データが正常に作成されて返されます。

設定されたワークフローが「終了ノード」に達した場合、画面操作のロジックと同様にリクエストはブロックされ、データは作成されません。終了ノードの状態が失敗に設定されている場合、返されるレスポンスステータスコードは `400` となり、成功の場合は `200` となります。

終了ノードの前に「応答メッセージ」ノードが設定されている場合、生成されたメッセージもレスポンス結果に返されます。エラー時の構造は次の通りです：

```json
{
  "errors": [
    {
      "message": "message from 'Response message' node"
    }
  ]
}
```

「終了ノード」が成功した場合のメッセージ構造は次の通りです：

```json
{
  "messages": [
    {
      "message": "message from 'Response message' node"
    }
  ]
}
```

:::info{title=ヒント}
「応答メッセージ」ノードはプロセス内に複数追加できるため、返されるメッセージデータ構造は配列となります。
:::

操作前イベントがグローバルモードに設定されている場合、HTTP APIを呼び出す際にURLパラメータ`triggerWorkflows`を使用して対応するワークフローを指定する必要はなく、直接対応するデータテーブル操作を呼び出すことでトリガーできます。

```bash
curl -X POST -H 'Authorization: Bearer <your token>' -H 'X-Role: <roleName>' -d \
  '{
    "title": "Hello, world!",
    "content": "This is a test post."
  }'
  "http://localhost:3000/api/posts:create"
```

:::info{title="ヒント"}
HTTP APIを通じてトリガー操作後のイベントを呼び出す際には、ワークフローの有効状態やデータテーブルの設定が一致しているかにも注意が必要です。そうでない場合、呼び出しが成功しないか、エラーが発生する可能性があります。
:::

