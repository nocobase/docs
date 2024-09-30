# 外部呼び出し

操作後のイベントのトリガーは、ユーザーインターフェースの操作に限らず、HTTP API 呼び出しによっても行われます。

:::info{title="ヒント"}
HTTP API 呼び出しで操作後のイベントをトリガーする際には、ワークフローが有効であり、データテーブルの設定が一致していることに注意が必要です。これらの条件が満たされない場合、呼び出しは失敗するか、エラーが発生する可能性があります。
:::

操作ボタンにバインドされたワークフローを呼び出すには、以下のように行います（`posts` テーブルにボタンを作成する例）：

```bash
curl -X POST -H 'Authorization: Bearer <your token>' -H 'X-Role: <roleName>' -d \
  '{
    "title": "Hello, world!",
    "content": "This is a test post."
  }'
  "http://localhost:3000/api/posts:create?triggerWorkflows=workflowKey"
```

この場合、URL パラメータ `triggerWorkflows` はワークフローのキーであり、複数のワークフローはカンマで区切ることができます。このキーはワークフローキャンバスの上部にあるワークフロー名にマウスをホバーすることで取得できます：

![ワークフローキー確認方法](https://static-docs.nocobase.com/20240426135108.png)

上記の呼び出しが成功すると、対応する `posts` テーブルの操作後イベントがトリガーされます。

:::info{title="ヒント"}
外部呼び出しもユーザーの身分に基づく必要があるため、HTTP API 呼び出しの際には、通常のインターフェースから送信されるリクエストと同様に、認証情報を提供する必要があります。これには `Authorization` リクエストヘッダーまたは `token` パラメータ（ログイン時に取得したトークン）、および `X-Role` リクエストヘッダー（ユーザーの現在の役割名）が含まれます。
:::

一対一の関係データのイベントをトリガーする必要がある場合、パラメータ内で `!` を使用して関係フィールドのトリガーデータを指定できます：

```bash
curl -X POST -H 'Authorization: Bearer <your token>' -H 'X-Role: <roleName>' -d \
  '{
    "title": "こんにちは、世界！",
    "content": "これはテスト投稿です。",
    "category": {
      "title": "テストカテゴリー"
    }
  }'
  "http://localhost:3000/api/posts:create?triggerWorkflows=workflowKey!category"
```

この呼び出しが成功すると、対応する `categories` テーブルの操作後イベントがトリガーされます。

:::info{title="ヒント"}
イベントがグローバルモードに設定されている場合、URL パラメータ `triggerWorkflows` を使用して対応するワークフローを指定する必要はなく、直接対応するデータテーブル操作を呼び出すことでトリガーできます。
:::

