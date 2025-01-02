# ユーザーマニュアル

<PluginInfo commercial="true" name="email-manager"></PluginInfo>

## 概要
このメールプラグインを使用すると、GoogleとMicrosoftのメールアカウントをNocoBaseに統合することができ、メールを送信、受信、表示、管理することができます。また、メールを任意のページまたはブロックに統合することもできます。

## メールアカウントの紐付け

### アカウントの紐付け

メールプラグインを有効にしたら、右上のメールアイコンをクリックしてメール管理ページに移動します。

![](https://static-docs.nocobase.com/mail-1733816161753.png)

「アカウント設定」ボタンをクリックし、オーバーレイを開き、「アカウントの紐付け」ボタンをクリックして、紐付けしたいメールアカウントのタイプを選択します。

![](https://static-docs.nocobase.com/mail-1733816162279.png)

ブラウザは自動的に対応するメールログインページを開きます。ログインして必要な権限を許可してください。

![](https://static-docs.nocobase.com/mail-1733816162534.png)

認証が完了したら、ページが自動的にNocoBaseのサイトにリダイレクトされ、アカウントをリンクしてデータを同期します（初回同期には時間がかかる場合がありますので、待ってください）。

![](https://static-docs.nocobase.com/mail-1733816162794.png)

データ同期が完了したら、現在のページが自動的に閉じて元のメールページに戻ります。アカウントがリンクされていることを確認できます。

![](https://static-docs.nocobase.com/mail-1733816163177.png)

オーバーレイエリアをクリックしてポップアップを閉じ、メールリストを確認します。

![](https://static-docs.nocobase.com/mail-1733816163503.png)

### アカウントの削除
「削除」ボタンをクリックしてアカウントと紐付けされたメールを削除します。

![](https://static-docs.nocobase.com/mail-1733816163758.png)

## メール管理

### メールフィルター

メール管理ページでは、左側がフィルタリング用に使用され、右側がメールリストを表示しています。デフォルトでは、入力ページでインボックスが表示されます。

![](https://static-docs.nocobase.com/mail-1733816165536.png)
以下是将您的文档从中文翻译成日语的内容，保持了 Markdown 格式：

Emails with the same subject are grouped, and the number of related emails will be shown after the subject field. When some emails with the same subject meet the filtering criteria, the root email of the subject will be displayed, and the type of the root email will be marked next to the subject.

![](https://static-docs.nocobase.com/mail-1733816165797.png)

未読のメールタイトルは太字で表示され、未読メールの数は上部のメールアイコンの横に表示されます。

![](https://static-docs.nocobase.com/mail-1733816166067.png)

### メールの手動同期

現在のメール同期間隔は5分です。強制的に同期するには、「更新」ボタンをクリックしてください。

![](https://static-docs.nocobase.com/mail-1733816166364.png)

### 読み取り状態の変更

「既読にマーク」と「未読にマーク」ボタンを使用すると、メールの読み取り状態を一括更新できます。

![](https://static-docs.nocobase.com/mail-1733816166621.png)

### メールを送信

画面上部の「メールを書く」ボタンをクリックして、メール作成パネルを開きます。

![](https://static-docs.nocobase.com/mail-1733816166970.png)

必要な情報を入力したら、メールを送信できます。 添付ファイルは最大3MBまでサポートされています。

![](https://static-docs.nocobase.com/mail-1733816167214.png)

### メールを表示

行の「表示」ボタンをクリックして、メールの詳細を確認します。 形式は2つあり、1つは単一のメールとして、詳細情報を直接確認できます。

![](https://static-docs.nocobase.com/mail-1733816167456.png)

もう1つは同じ件名の複数のメールで、デフォルトではリストとして表示されます。クリックして展開または折りたたむことができます。

![](https://static-docs.nocobase.com/mail-1733816167750.png)

メールの詳細を表示するためにクリックすると、メールの状態はデフォルトで既読としてマークされます。右側の「...」ボタンをクリックし、「未読にマーク」を選択して未読に戻すことができます。

### メールに返信
以下是翻译后的文档内容，保持了 Markdown 格式：

メールの詳細を入力したら、下部の「返信」ボタンをクリックしてメールに返信します。複数の受信者がいる場合は、「全員に返信」をクリックして全員に返信できます。

![](https://static-docs.nocobase.com/mail-1733816167998.png)

### メールの転送

下部の「転送」ボタンをクリックして、他の人にメールを転送します。

![](https://static-docs.nocobase.com/mail-1733816168241.png)

## メールメッセージブロック

### ブロックの追加

設定ページで「ブロックを追加」ボタンをクリックし、「メールメッセージ」ブロックを選択して追加します。

![](https://static-docs.nocobase.com/mail-1733816168487.png)

### フィールドの設定

ブロックの「列を構成」ボタンをクリックして、表示するフィールドを選択します。詳細な手順については、テーブルフィールド構成を参照してください。

![](https://static-docs.nocobase.com/mail-1733816168737.png)

### トップアクションの設定

ブロックの「アクションを構成」ボタンをクリックして、トップボタンを設定します。最終的なアクションは、メール管理のアクションに対応します。

![](https://static-docs.nocobase.com/mail-1733816168977.png)

「メールを送信」ボタンには、デフォルトの内容を設定できます。

![](https://static-docs.nocobase.com/mail-1733816169243.png)

![](https://static-docs.nocobase.com/mail-1733816169515.png)

### データフィルターの設定

テーブルの右側にある設定をクリックし、「データ範囲を設定」を選択し、メールデータフィルターを設定します。

![](https://static-docs.nocobase.com/mail-1733816169764.png)

## メール送信

#### メール送信ボタンの作成

1. テーブルアクションバーに「メールを書く」ボタンを追加します。

![](https://static-docs.nocobase.com/mail-1735634129950.png)

2. ボタン設定メニューに入り、ボタン名を編集します。

![](https://static-docs.nocobase.com/mail-1735634130387.png)

#### デフォルトの送信内容の設定

1. ボタン設定メニューに入り、「メールのデフォルト値」を選択します。

![](https://static-docs.nocobase.com/mail-1735634130581.png)

2. 現在の行データから、デフォルトの受信者をメールとして設定します。
以下是翻译后的文档内容，保持了 Markdown 格式：

![](https://static-docs.nocobase.com/mail-1735634130773.png)

![](https://static-docs.nocobase.com/mail-1735634130997.png)

3. 「メールを書く」ボタンをクリックすると、デフォルトの受取人がすでに入力されていることがわかります。

![](https://static-docs.nocobase.com/mail-1735634131163.png)

## 認可の取り消し

メールアカウントが認可されているが、削除または再認可したい場合は、以下の手順に従ってください：

#### **Googleメール**

1. https://myaccount.google.com/u/0/connections を開き、ログインします。

![](https://static-docs.nocobase.com/mail-1735634131347.png)

2. 対応するアプリをクリックし、「削除」をクリックします。

![](https://static-docs.nocobase.com/mail-1735634131518.png)

![](https://static-docs.nocobase.com/mail-1735634131697.png)

#### **Microsoftメール**

1. https://account.microsoft.com/ を開き、ログインします。

2. 「あなたのデータにアクセスできるアプリとサービス」ボタンをクリックします。

![](https://static-docs.nocobase.com/mail-1735634131870.png)

3. 「編集」をクリックし、削除します。

![](https://static-docs.nocobase.com/mail-1735634132052.png)