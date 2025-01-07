# メール: 使用手冊

<PluginInfo commercial="true" name="email-manager"></PluginInfo>

## イントロダクション
メールプラグインはGoogleやMicrosoftのメールアカウントをNocoBaseに接続し、メールの送受信、確認、管理などの操作を行うことを可能にします。また、メールを任意のページやブロックに統合することもできます。

## 関連メールアカウント

### アカウントをリンク

メールプラグインが有効になると、右上のメールメッセージアイコンをクリックして、メールメッセージ管理ページに入ります。

![](https://static-docs.nocobase.com/mail-1733816161753.png)

"アカウント設定"ボタンをクリックし、ポップアップを開いたら"アカウントをリンク"ボタンをクリックし、リンクするメールアカウントの種類を選択します。

![](https://static-docs.nocobase.com/mail-1733816162279.png)

ブラウザが自動的に対応するメールログインページを開き、アカウントにログインし、関連する権限を承認します。

![](https://static-docs.nocobase.com/mail-1733816162534.png)

権限の承認が完了すると、NocoBaseのウェブページにリダイレクトされ、アカウントのリンクとデータの同期が行われます（初回の同期には少し時間がかかる場合がありますので、しばらくお待ちください）。

![](https://static-docs.nocobase.com/mail-1733816162794.png)

データの同期が完了すると、現在のページは自動的に閉じて元のメールメッセージページに戻り、アカウントがリンクされたことが確認できます。

![](https://static-docs.nocobase.com/mail-1733816163177.png)

モーダル領域をクリックしてポップアップを閉じると、メールリストが表示されます。

![](https://static-docs.nocobase.com/mail-1733816163503.png)

### アカウント削除
"削除"をクリックすると、アカウントと関連メールが削除されます。

![](https://static-docs.nocobase.com/mail-1733816163758.png)

## メール管理

### メールフィルタリング

メール管理ページでは、左側がフィルタ領域で、右側がメールリスト領域です。ページに入るとデフォルトで受信トレイが表示されます。

![](https://static-docs.nocobase.com/mail-1733816165536.png)

同じテーマのメールは統合されて処理され、件名の後に何通の往来メールがあるかが表示されます。
同じテーマのいくつかのメールがフィルタ条件に一致する場合、件名のルートメールが表示され、件名フィールドの横に現在のルートメールのタイプが表示されます。

![](https://static-docs.nocobase.com/mail-1733816165797.png)

未読メールのタイトルは太字で表示され、上部のメールアイコンの側には未読メールの数が表示されます。

![](https://static-docs.nocobase.com/mail-1733816166067.png)

### メールの手動同期

現在のメールの同期間隔は5分です。強制的にメールを同期したい場合は、"更新"ボタンをクリックします。

![](https://static-docs.nocobase.com/mail-1733816166364.png)

### 読了状態の変更

"既読としてマーク"、"未読としてマーク"ボタンでメールの既読状態を一括操作できます。

![](https://static-docs.nocobase.com/mail-1733816166621.png)

### メールの送信

上部の"メールを書く"ボタンをクリックすると、送信パネルが開きます。

![](https://static-docs.nocobase.com/mail-1733816166970.png)

必要な情報を入力したら、メールを送信できます。現在、添付ファイルは3MB以内のみ対応しています。

![](https://static-docs.nocobase.com/mail-1733816167214.png)

### メールの確認

行の"表示"ボタンをクリックすると、メールの詳細を確認できます。現在、二つの形式があります。一つは単一メールの形式で、メールの詳細情報が直接表示されます。

![](https://static-docs.nocobase.com/mail-1733816167456.png)

もう一つは同じテーマの複数のメールで、デフォルトではリスト形式で表示され、展開・折りたたみが可能です。

![](https://static-docs.nocobase.com/mail-1733816167750.png)

メールの詳細を確認すると、デフォルトでメールの状態が既読に設定され、右側の"..."ボタン内の未読としてマーク操作をクリックすることで未読に戻すことができます。

### メールの返信

メールの詳細に入ると、下部に"返信"ボタンがあり、返信操作が可能です。複数の人が関与する場合は、"全員に返信"をクリックして全員に返信できます。
![](https://static-docs.nocobase.com/mail-1733816167998.png)

### メール転送

下部の Forward ボタンをクリックすると、メールを他の人に転送できます。

![](https://static-docs.nocobase.com/mail-1733816168241.png)

## メールメッセージブロック

### ブロックの追加

設定ページで、Add block ボタンをクリックし、Mail messages ブロックを選択して追加できます。

![](https://static-docs.nocobase.com/mail-1733816168487.png)

### フィールド設定

ブロックの Configure columns ボタンをクリックすると、表示するフィールドを選択できます。詳細な操作については、表のフィールド設定を参照してください。

![](https://static-docs.nocobase.com/mail-1733816168737.png)

### 上部操作の設定

ブロックの Configure actions ボタンをクリックすると、上部ボタンの設定を行うことができます。ボタンの最終的な実行効果については、メール管理を参照してください。

![](https://static-docs.nocobase.com/mail-1733816168977.png)

送信メールボタンは、メールのデフォルト内容を設定できます。

![](https://static-docs.nocobase.com/mail-1733816169243.png)

![](https://static-docs.nocobase.com/mail-1733816169515.png)

### データフィルタ設定

表の右側設定をクリックし、"Set the data scope" を選択すると、フィルタリングするメールデータを設定できます。

![](https://static-docs.nocobase.com/mail-1733816169764.png)

## メール送信

#### メール送信ボタンの作成

1. 表の操作バーに "Write email" ボタンを追加します。

![](https://static-docs.nocobase.com/mail-1735634129950.png)

2. ボタン設定メニューに入ると、ボタン名を編集できます。

![](https://static-docs.nocobase.com/mail-1735634130387.png)

#### メールのデフォルト送信内容を設定

1. ボタン設定メニューに入り、"Mail default value" を選択します。

![](https://static-docs.nocobase.com/mail-1735634130581.png)

2. デフォルト受信者を現在の行データのemailに設定します。

![](https://static-docs.nocobase.com/mail-1735634130773.png)

![](https://static-docs.nocobase.com/mail-1735634130997.png)

3. "Write email" ボタンをクリックすると、デフォルト受信者が既に入力されているのが見えます。

![](https://static-docs.nocobase.com/mail-1735634131163.png)

## 認証解除

もしあなたのメールアカウントがすでに認証されているが、削除または再認証したい場合は、以下の操作を行ってください。

#### **Googleメール**

1. https://myaccount.google.com/u/0/connections を開き、ログインします。

![](https://static-docs.nocobase.com/mail-1735634131347.png)

2. 対応するアプリをクリックし、削除をクリックします。

![](https://static-docs.nocobase.com/mail-1735634131518.png)

![](https://static-docs.nocobase.com/mail-1735634131697.png)

#### **Microsoftメール**

1. https://account.microsoft.com/ を開き、ログインします。
    
2. "Apps and services that can access your data" ボタンをクリックします。

![](https://static-docs.nocobase.com/mail-1735634131870.png)

3. 編集して削除をクリックします。

![](https://static-docs.nocobase.com/mail-1735634132052.png)