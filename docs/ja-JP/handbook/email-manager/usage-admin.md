# メール: 管理者設定

<PluginInfo commercial="true" name="email-manager"></PluginInfo>

## イントロダクション
メール管理プラグインは、高効率で便利なツールであり、GmailとOutlookのメールアカウント認証接続をサポートし、ユーザーがメールの管理や送受信などの機能を各ブロックやページに統合できるようにします。簡単な認証設定を通じて、ユーザーは複数のアカウントを一元管理し、シームレスなメール通信体験を享受できます。

## 設定プロセス

メールプラグインを有効にした後、管理者は関連設定を完了する必要があります。そうしないと、一般ユーザーはNocoBaseにメールアカウントを接続できません（現在、OutlookメールアカウントとGmailメールアカウントの認証ログインのみがサポートされており、MicrosoftアカウントやGoogleアカウントの直接接続には対応していません）。

設定の核心は、メールサービスプロバイダーのAPI呼び出しの認証設定です。管理者は以下の手順を完了し、プラグイン機能が正常に動作することを確認する必要があります。

1. **サービスプロバイダーから認証情報を取得する**  
   - メールサービスプロバイダーの開発者コンソールにログインします（例：Google Cloud ConsoleまたはMicrosoft Azure Portal）。  
   - 新しいアプリまたはプロジェクトを作成し、GmailまたはOutlookメールAPIサービスを有効にします。  
   - 対応するクライアントID（Client ID）とクライアントシークレット（Client Secret）を取得します。  
   - リダイレクトURIを設定し、NocoBaseのプラグインコールバックアドレスと一致することを確認します。

2. **メールサービスプロバイダーの設定**  
   - メールプラグインの設定ページにアクセスします。  
   - クライアントID（Client ID）、クライアントシークレット（Client Secret）など、必要なAPI認証情報を提供し、メールサービスプロバイダーの認証と正常に接続することを確認します。

3. **認証ログイン**  
   - ユーザーはOAuthプロトコルを通じてメールアカウントにログインします。  
   - プラグインは自動的にユーザーの認証トークンを生成し、保存し、以降のAPI呼び出しやメール操作に使用します。

4. **メール接続**  
   - ユーザーが成功裏に認証した後、そのメールアカウントはNocoBaseに接続されます。  
   - プラグインはユーザーのメールデータを同期し、管理やメールの送受信機能を提供します。

5. **メール機能の使用**  
   - ユーザーはプラットフォーム内で直接メールを確認、管理、送信することができます。  
   - すべての操作はメールサービスプロバイダーのAPI呼び出しを通じて行われ、リアルタイムの同期と効率的な転送が確保されます。

上記のプロセスを通じて、NocoBaseのメールプラグインはユーザーに効率的で安全なメール管理サービスを提供します。設定中に問題が発生した場合は、関連文書を参照するか、技術サポートチームに問い合わせてサポートを受けてください。

## プラグイン設定

### メールプラグインの有効化

1. プラグイン管理ページにアクセス 
2. "Email manager" プラグインを見つけて、有効にします

### メールサービスプロバイダーの設定

メールプラグインを有効化した後、メールサービスプロバイダーの設定を行うことができます。現在、GoogleとMicrosoftの2種類のメールがサポートされており、上部の "設定" -> "メール設定" をクリックして設定ページに入ります。

![](https://static-docs.nocobase.com/mail-1733818617187.png)

![](https://static-docs.nocobase.com/mail-1733818617514.png)

各サービスプロバイダー内でクライアントIDとクライアントシークレットを記入する必要があります。以下にこれらの2つのパラメータを取得する方法を詳しく説明します。

## Google設定

### 前提条件

1. 後にユーザーがGoogleメールをNocoBaseに接続できるようにするためには、Googleサービスにアクセスできるサーバーにデプロイする必要があります。バックエンドでGoogle APIが呼び出されます。
    
### アカウント登録

1. https://console.cloud.google.com/welcome を開いてGoogle Cloudに入ります。  
2. 初回訪問時には関連条項に同意する必要があります。

![](https://static-docs.nocobase.com/mail-1733818617807.png)

### アプリの作成

1. 上部の "プロジェクトを選択" をクリックします。

![](https://static-docs.nocobase.com/mail-1733818618126.png)

2. ポップアップ内の "新しいプロジェクト" ボタンをクリックします。

![](https://static-docs.nocobase.com/mail-1733818618329.png)

3. プロジェクト情報を記入します。

![](https://static-docs.nocobase.com/mail-1733818618510.png)

4. プロジェクト作成が完了後、プロジェクトを選択します。

![](https://static-docs.nocobase.com/mail-1733818618828.png)

![](https://static-docs.nocobase.com/mail-1733818619044.png)

### Gmail APIの有効化

1. "APIとサービス" ボタンをクリックします。
![](https://static-docs.nocobase.com/mail-1733818619230.png)

2. APIs & Services パネルに移動

![](https://static-docs.nocobase.com/mail-1733818619419.png)

3. "mail" を検索

![](https://static-docs.nocobase.com/mail-1733818619810.png)

![](https://static-docs.nocobase.com/mail-1733818620020.png)

4. "ENABLE" ボタンをクリックして、Gmail API を有効にする

![](https://static-docs.nocobase.com/mail-1733818620589.png)

![](https://static-docs.nocobase.com/mail-1733818620885.png)

### OAuth 同意画面の設定

1. 左側の "OAuth consent screen" メニューをクリック

![](https://static-docs.nocobase.com/mail-1733818621104.png)

2. "External" を選択

![](https://static-docs.nocobase.com/mail-1733818621322.png)

3. プロジェクト情報を入力（後の承認ページに表示されます）して保存をクリック

![](https://static-docs.nocobase.com/mail-1733818621538.png)

4. 開発者連絡先情報を入力し、続行をクリック

![](https://static-docs.nocobase.com/mail-1733818621749.png)

5. 続行をクリック

![](https://static-docs.nocobase.com/mail-1733818622121.png)

6. テストユーザーを追加して、アプリの公開前にテストを行う

![](https://static-docs.nocobase.com/mail-1733818622332.png)

![](https://static-docs.nocobase.com/mail-1733818622537.png)

7. 続行をクリック

![](https://static-docs.nocobase.com/mail-1733818622753.png)

8. 概要情報を確認し、コントロールパネルに戻る

![](https://static-docs.nocobase.com/mail-1733818622984.png)

### クレデンシャルの作成

1. 左側の "Credentials" メニューをクリック

![](https://static-docs.nocobase.com/mail-1733818623168.png)

2. "CREATE CREDENTIALS" ボタンをクリックし、"OAuth client ID" を選択

![](https://static-docs.nocobase.com/mail-1733818623386.png)

3. "Web application" を選択

![](https://static-docs.nocobase.com/mail-1733818623758.png)

4. アプリ情報を入力

![](https://static-docs.nocobase.com/mail-1733818623992.png)

5. プロジェクトの最終的なデプロイ先のドメイン名を入力（ここではNocoBaseのテストアドレスの例）

![](https://static-docs.nocobase.com/mail-1733818624188.png)

6. 認可コールバックURLを追加します。必ず `ドメイン名 + "/admin/settings/mail/oauth2"` にする必要があります。例：`https://pr-1-mail.test.nocobase.com/admin/settings/mail/oauth2`

![](https://static-docs.nocobase.com/mail-1733818624449.png)

7. 作成をクリックし、OAuth情報を確認できる

![](https://static-docs.nocobase.com/mail-1733818624701.png)

8. Client ID と Client secret の内容をそれぞれコピーしてメール設定ページに貼り付ける

![](https://static-docs.nocobase.com/mail-1733818624923.png)

9. 保存をクリックして、設定が完了
### アプリケーションの公開

上記のプロセスが完了し、テストユーザーの認可ログインやメール送信などの機能テストが完了した後に公開を行います。

1. "OAuth同意画面" メニューをクリックします。

![](https://static-docs.nocobase.com/mail-1733818625124.png)

2. "EDIT APP" ボタンをクリックし、その後下部の "SAVE AND CONTINUE" ボタンをクリックします。

![](https://static-docs.nocobase.com/mail-1735633686380.png)

![](https://static-docs.nocobase.com/mail-1735633686750.png)

3. "ADD OR REMOVE SCOPES" ボタンをクリックして、ユーザー権限の範囲を選択します。

![](https://static-docs.nocobase.com/mail-1735633687054.png)

4. "Gmail API" と入力して検索し、"Gmail API" にチェックを入れます（Scope値が "https://mail.google.com/" の Gmail APIであることを確認してください）。

![](https://static-docs.nocobase.com/mail-1735633687283.png)

5. 下部の "UPDATE" ボタンをクリックして保存します。

![](https://static-docs.nocobase.com/mail-1735633687536.png)

6. 各ページの下部にある "SAVE AND CONTINUE" ボタンをクリックし、最後に "BACK TO DASHBOARD" ボタンをクリックしてダッシュボードページに戻ります。

![](https://static-docs.nocobase.com/mail-1735633687744.png)

![](https://static-docs.nocobase.com/mail-1735633687912.png)

![](https://static-docs.nocobase.com/mail-1735633688075.png)

7. "PUBLISH APP" ボタンをクリックすると、公開確認ページが表示され、公開に必要な関連内容がリストされます。その後、"CONFIRM" ボタンをクリックします。

![](https://static-docs.nocobase.com/mail-1735633688257.png)

8. 再度コントロールパネルページに戻ると、公開状態が "In production" であることが確認できます。

![](https://static-docs.nocobase.com/mail-1735633688425.png)

9. "PREPARE FOR VERIFICATION" ボタンをクリックして、必須の関連情報を入力し、"SAVE AND CONTINUE" ボタンをクリックします（画像内のデータは例示のみです）。

![](https://static-docs.nocobase.com/mail-1735633688634.png)

![](https://static-docs.nocobase.com/mail-1735633688827.png)

10. 引き続き関連する必要な情報を入力します（画像内のデータは例示のみです）。

![](https://static-docs.nocobase.com/mail-1735633688993.png)

11. "SAVE AND CONTINUE" ボタンをクリックします。

![](https://static-docs.nocobase.com/mail-1735633689159.png)

12. "SUBMIT FOR VERIFICATION" ボタンをクリックして、Verification を提出します。

![](https://static-docs.nocobase.com/mail-1735633689318.png)

13. 承認結果を待ちます。

![](https://static-docs.nocobase.com/mail-1735633689494.png)

14. 承認がまだ通らない場合、ユーザーは unsafe リンクをクリックして認可ログインを行うことができます。

![](https://static-docs.nocobase.com/mail-1735633689645.png)

## マイクロソフトの設定

### アカウントの登録

1. https://azure.microsoft.com/en-us/pricing/purchase-options/azure-account を開きます。
    
2. マイクロソフトアカウントにログインします。

![](https://static-docs.nocobase.com/mail-1733818625779.png)

### テナントの作成

1. https://azure.microsoft.com/ja-jp/pricing/purchase-options/azure-account?icid=azurefreeaccount を開き、アカウントにログインします。

2. 基本情報を記入し、認証コードを取得します。

![](https://static-docs.nocobase.com/mail-1733818625984.png)

3. その他の情報を記入し、続行します。

![](https://static-docs.nocobase.com/mail-1733818626352.png)

4. クレジットカード関連情報を記入します（作成は後でも可能です）。

![](https://static-docs.nocobase.com/mail-1733818626622.png)

### Client IDの取得

1. 画面上部のメニューをクリックし、"Microsoft Entra ID" を選択します。

![](https://static-docs.nocobase.com/mail-1733818626871.png)

2. 左側の "App registrations" を選択します。

![](https://static-docs.nocobase.com/mail-1733818627097.png)

3. 上部の "New registration" をクリックします。

![](https://static-docs.nocobase.com/mail-1733818627309.png)

4. 情報を記入し、送信します。

名前は自由に設定できます。account typesは下図を参照して選択し、Redirect URIは未記入のままで大丈夫です。

![](https://static-docs.nocobase.com/mail-1733818627555.png)

5. Client IDを取得します。

![](https://static-docs.nocobase.com/mail-1733818627797.png)

### APIの許可

1. 右側の "API permissions" メニューを開きます。

![](https://static-docs.nocobase.com/mail-1733818628178.png)

2. "Add a permission" ボタンをクリックします。

![](https://static-docs.nocobase.com/mail-1733818628448.png)

3. "Microsoft Graph" をクリックします。

![](https://static-docs.nocobase.com/mail-1733818628725.png)

![](https://static-docs.nocobase.com/mail-1733818628927.png)

4. 以下の権限を検索して追加します。最終結果は以下の図の通りです。
    
    1. `"email"`
    2. `"offline_access"`
    3. `"IMAP.AccessAsUser.All"`
    4. `"SMTP.Send"`
    5. `"offline_access"`
    6. `"User.Read"` (デフォルトとして)

![](https://static-docs.nocobase.com/mail-1733818629130.png)

### 秘密鍵の取得

1. 左側の "Certificates & secrets" をクリックします。

![](https://static-docs.nocobase.com/mail-1733818629369.png)

2. "New client secret" ボタンをクリックします。

![](https://static-docs.nocobase.com/mail-1733818629554.png)

3. 説明と有効期限を記入し、追加します。

![](https://static-docs.nocobase.com/mail-1733818630292.png)

4. Secret IDを取得します。

![](https://static-docs.nocobase.com/mail-1733818630535.png)

5. Client IDとClient secretの情報をコピーし、メール設定ページに記入します。

![](https://static-docs.nocobase.com/mail-1733818630710.png)

## よくある質問

Q: マイクロソフトアカウントで認証ログイン後、メールが正常に受信できません。

A: 現在はOutlookメールアカウントとGmailメールアカウントの認証ログインのみをサポートしています。MicrosoftアカウントとGoogleアカウントはまだサポートされていません。詳細については、[answers.microsoft.com](https://answers.microsoft.com/zh-hans/outlook_com/forum/all/%E7%8E%B0%E6%9C%89%E5%BE%AE%E8%BD%AF%E8%B4%A6/dba12dda-a7c7-4346-8263-53f4a6d9dc68)を参照してください。

**小ヒント**：自分が「本物の Outlook.com メール」または「Gmail メール」であるかどうかが不確かな場合、Outlook.com または Gmail.com にブラウザでアクセスしてみて、直接ログインできるか、正常に他の人にメールを送れるかを確認してみてください。そうでない場合は、対応するメールサービスを持っていない可能性があるため、先に開設するか別のメールを使用する必要があります。