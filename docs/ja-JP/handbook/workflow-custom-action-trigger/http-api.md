# 外部呼び出し

カスタム操作イベントのトリガーは、ユーザーインターフェイスの操作に限らず、HTTP APIの呼び出しによっても実行できます。特に、カスタム操作イベントはすべてのデータテーブル操作に対してワークフローをトリガーする新しい操作タイプ`trigger`を提供します。これにより、NocoBase標準の操作APIを利用して呼び出すことができます。

ボタンによってトリガーされたワークフローの例では、以下のように呼び出すことができます：

```bash
curl -X POST -H 'Authorization: Bearer <your token>' -H 'X-Role: <roleName>' \
  "http://localhost:3000/api/samples:trigger/<:id>?triggerWorkflows=workflowKey"
```

この操作は単一のデータに対して行われるため、既存のデータを呼び出す際にはデータ行のIDを指定し、URL内の`<:id>`部分を置き換える必要があります。

フォームに対して呼び出す場合（例えば、新規追加または更新）、新規データのフォームではIDを渡す必要はありませんが、実行のコンテキストデータとして提出するデータを渡す必要があります：

```bash
curl -X POST -H 'Authorization: Bearer <your token>' -H 'X-Role: <roleName>' -d \
  '{
    "title": "Sample 1",
    "indicator": 91
  }'
  "http://localhost:3000/api/samples:trigger?triggerWorkflows=workflowKey"
```

更新フォームの場合は、データ行のIDと更新するデータの両方を渡す必要があります：

```bash
curl -X POST -H 'Authorization: Bearer <your token>' -H 'X-Role: <roleName>' -d \
  '{
    "title": "Sample 1",
    "indicator": 91
  }'
  "http://localhost:3000/api/samples:trigger/<:id>?triggerWorkflows=workflowKey"
```

IDとデータの両方を同時に渡した場合、最初にIDに対応するデータ行が読み込まれ、その後、渡されたデータオブジェクトの属性が元のデータ行を上書きして最終的なトリガーデータのコンテキストが得られます。

:::warning{title="注意"}
関係データが渡された場合、上書きされる可能性があります。特に、プレロードを設定して関係データ項目を使用する際は、渡されたデータを慎重に処理し、関係データが予期せず上書きされないように十分注意してください。
:::

また、URLパラメータ`triggerWorkflows`はワークフローのキーであり、複数のワークフローはカンマで区切って指定します。このキーは、ワークフローキャンバスの上部にあるワークフロー名にカーソルを合わせることで取得できます：

![ワークフローキー確認方法](https://static-docs.nocobase.com/20240426135108.png)

この呼び出しが成功すると、対応する`samples`テーブルのカスタム操作イベントがトリガーされます。

:::info{title="ヒント"}
外部からの呼び出しもユーザーの身分に基づく必要があるため、HTTP APIを介して呼び出す際は、通常のインターフェースから送信されるリクエストと同様に、認証情報を提供する必要があります。これには`Authorization`リクエストヘッダーまたは`token`パラメータ（ログインで取得したトークン）、および`X-Role`リクエストヘッダー（ユーザーの現在の役割名）が含まれます。
:::

関係データ（多対一はサポートされていません）のイベントをトリガーする必要がある場合は、パラメータに`!`を使用して関係フィールドのトリガーデータを指定できます：

```bash
curl -X POST -H 'Authorization: Bearer <your token>' -H 'X-Role: <roleName>' \
  "http://localhost:3000/api/posts:trigger/<:id>?triggerWorkflows=workflowKey!category"
```

この呼び出しが成功すると、対応する`categories`テーブルのカスタム操作イベントがトリガーされます。

:::info{title="ヒント"}
HTTP APIを介して操作をトリガーした後のイベントについても、ワークフローの有効状態やデータテーブルの設定が一致しているかどうかに注意が必要です。そうでない場合、呼び出しが成功しないか、エラーが発生することがあります。
:::

