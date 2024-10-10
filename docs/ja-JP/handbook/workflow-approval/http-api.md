# 外部呼び出し

承認イベントは、ユーザーインターフェースの操作だけでなく、HTTP APIを通じてトリガーすることも可能です。

データブロックおよび承認センターブロックから発起された承認は、以下のように呼び出すことができます（`posts` テーブルにボタンを作成する例）：

```bash
curl -X POST -H 'Authorization: Bearer <your token>' -H 'X-Role: <roleName>' -d \
  '{
    "title": "Hello, world!",
    "content": "This is a test post."
  }'
  "http://localhost:3000/api/posts:create?triggerWorkflows=workflowKey"
```

ここで、URLパラメーター `triggerWorkflows` はワークフローのキーであり、複数のワークフローはカンマで区切ります。このキーはワークフローキャンバスの上部にあるワークフロー名にマウスをホバーすることで取得できます：

![ワークフローキーの確認方法](https://static-docs.nocobase.com/20240426135108.png)

呼び出しが成功すると、対応する `posts` テーブルの承認ワークフローがトリガーされます。

:::info{title="ヒント"}
外部呼び出しもユーザーの身分に基づく必要があるため、HTTP APIを通じて呼び出す際は、通常のインターフェースから送信されるリクエストと同様に、認証情報を提供する必要があります。これには `Authorization` リクエストヘッダーまたは `token` パラメーター（ログイン時に取得したトークン）、および `X-Role` リクエストヘッダー（ユーザーの現在の役割名）が含まれます。
:::

この操作内でリレーションデータ（多対多は未サポート）に対するイベントをトリガーする必要がある場合、パラメーター内で `!` を使用してリレーションフィールドのトリガーデータを指定できます：

```bash
curl -X POST -H 'Authorization: Bearer <your token>' -H 'X-Role: <roleName>' -d \
  '{
    "title": "Hello, world!",
    "content": "This is a test post.",
    "category": {
      "title": "テストカテゴリー"
    }
  }'
  "http://localhost:3000/api/posts:create?triggerWorkflows=workflowKey!category"
```

この呼び出しが成功した後、対応する `categories` テーブルの承認イベントがトリガーされます。

:::info{title="ヒント"}
HTTP API呼び出しで操作をトリガーする際は、ワークフローの有効状態やデータテーブルの設定が一致していることを確認してください。そうでないと、呼び出しが成功しないか、エラーが発生する可能性があります。
:::

