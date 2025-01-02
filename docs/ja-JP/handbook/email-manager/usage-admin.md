# 管理者設定

<PluginInfo commercial="true" name="email-manager"></PluginInfo>

## はじめに
Email Manager Pluginは、GmailおよびOutlookのメール認証をサポートする効率的で便利なツールです。メール管理と送信機能をさまざまなブロックやページに統合しています。ユーザーは認証を簡単に設定することで、統一されたマルチアカウント管理を実現し、シームレスなメールコミュニケーションを楽しむことができます。

## 設定プロセス

メールプラグインを有効化した後、管理者は通常のユーザーがNocoBaseにメールアカウントを接続できるように設定を完了する必要があります。現在、認証ログインを通じてのみOutlookとGmailアカウントがサポートされています。MicrosoftおよびGoogleアカウントとの直接統合は利用できません。

設定の核心は、メールサービスプロバイダーとのAPI認証を設定することです。管理者は、プラグインの機能を適切に確保するために以下のステップに従う必要があります：

1. **プロバイダーから認証情報を取得**  
   - メールサービスプロバイダーの開発者コンソール（例：Google Cloud ConsoleまたはMicrosoft Azure Portal）にログインします。  
   - 新しいアプリまたはプロジェクトを作成し、GmailまたはOutlookメールAPIサービスを有効にします。  
   - クライアントIDとクライアントシークレットを取得します。  
   - リダイレクトURIをNocoBase内のプラグインのコールバックアドレスに一致させるよう設定します。  

2. **サービスプロバイダーの設定**  
   - プラグインの設定ページに移動します。  
   - クライアントIDおよびクライアントシークレットを含む必要なAPI認証詳細を入力し、メールサービスプロバイダーとの適切な統合を確保します。  

3. **認証ログイン**  
   - ユーザーはOAuthプロトコルを通じてメールアカウントにログインします。  
   - プラグインは自動的にユーザーの認証トークンを生成し、後続のAPI呼び出しおよびメール操作のために保存します。  

4. **メール統合**  
   - 認証が成功すると、ユーザーのメールアカウントがNocoBaseに統合されます。
以下是将文档从中文翻译成日文后的内容，保持了 Markdown 格式：

```markdown
- プラグインはメールデータを同期し、管理および送信機能を提供します。

5. **メール機能の使用**
   - ユーザーはプラットフォーム内で直接メールを表示、管理、送信できます。
   - すべての操作は、メールサービスプロバイダーへのAPI呼び出しによって完了し、リアルタイムでの同期と効率的なコミュニケーションを確保します。

上記のプロセスに従うことで、NocoBaseメールプラグインは効率的かつ安全なメール管理を提供します。設定中に問題が発生した場合は、関連するドキュメントを参照するか、技術サポートチームに連絡して支援を受けてください。

## プラグインの設定

### メールプラグインの有効化

1. プラグイン管理ページに移動します。
2. 「メールマネージャ」プラグインを見つけて有効にします。

### メールプロバイダーの設定

メールプラグインが有効になったら、メールプロバイダーを設定します。現在、GoogleとMicrosoftのメールサービスがサポートされています。「設定」->「メール設定」をクリックして、設定ページにアクセスします。

![スクリーンショット](https://static-docs.nocobase.com/mail-1733818617187.png)  
![スクリーンショット](https://static-docs.nocobase.com/mail-1733818617514.png)

各プロバイダーにはクライアントIDとクライアントシークレットが必要です。以下のセクションでは、これらのパラメータを取得する方法を詳述します。

## Googleの設定

### 前提条件

1. ユーザーがGmailアカウントをNocoBaseに接続できるようにするには、バックエンドがGoogle APIを呼び出すため、GoogleサービスへのアクセスをサポートするサーバーにNocoBaseをデプロイする必要があります。

### アカウントの登録

1. [Google Cloud Console](https://console.cloud.google.com/welcome)を開きます。
2. 初回アクセス時に利用規約に同意します。

![スクリーンショット](https://static-docs.nocobase.com/mail-1733818617807.png)

### アプリの作成

1. 上部の「プロジェクトを選択」をクリックします。  
![スクリーンショット](https://static-docs.nocobase.com/mail-1733818618126.png)  

2. モーダルで「新しいプロジェクト」をクリックします。  
![スクリーンショット](https://static-docs.nocobase.com/mail-1733818618329.png)  

3. プロジェクトの詳細を入力します。  
![スクリーンショット](https://static-docs.nocobase.com/mail-1733818618510.png)  
```

以上が翻訳された文書です。
以下是翻译后的 Markdown 文档内容：

4. 作成したプロジェクトを選択します。  
![Screenshot](https://static-docs.nocobase.com/mail-1733818618828.png)  

### Gmail APIを有効にする

1. 「APIとサービス」をクリックします。  
![Screenshot](https://static-docs.nocobase.com/mail-1733818619230.png)  

2. 「APIとサービス」パネルに入ります。  
![Screenshot](https://static-docs.nocobase.com/mail-1733818619419.png)  

3. 「mail」を検索します。  
![Screenshot](https://static-docs.nocobase.com/mail-1733818619810.png)  
![Screenshot](https://static-docs.nocobase.com/mail-1733818620020.png)  

4. 「有効にする」をクリックしてGmail APIをアクティブにします。  
![Screenshot](https://static-docs.nocobase.com/mail-1733818620589.png)  
![Screenshot](https://static-docs.nocobase.com/mail-1733818620885.png)  

### OAuth同意画面を設定する

1. 左側の「OAuth同意画面」をクリックします。  
![Screenshot](https://static-docs.nocobase.com/mail-1733818621104.png)  

2. 「外部」を選択します。  
![Screenshot](https://static-docs.nocobase.com/mail-1733818621322.png)  

3. プロジェクト情報（認証ページに表示される）を入力し、保存します。  
![Screenshot](https://static-docs.nocobase.com/mail-1733818621538.png)  

4. 開発者連絡先情報を入力し、「続行」をクリックします。  
![Screenshot](https://static-docs.nocobase.com/mail-1733818621749.png)  

5. 「続行」をクリックします。  
![Screenshot](https://static-docs.nocobase.com/mail-1733818622121.png)  

6. プレリリーステスト用のテストユーザーを追加します。  
![Screenshot](https://static-docs.nocobase.com/mail-1733818622332.png)  
![Screenshot](https://static-docs.nocobase.com/mail-1733818622537.png)  

7. 「続行」をクリックします。  
![Screenshot](https://static-docs.nocobase.com/mail-1733818622753.png)  

8. 概要情報を確認し、コントロールパネルに戻ります。  
![Screenshot](https://static-docs.nocobase.com/mail-1733818622984.png)  

### 資格情報を作成する

1. 左側の「資格情報」をクリックします。  
![Screenshot](https://static-docs.nocobase.com/mail-1733818623168.png)  

2. 「資格情報を作成」をクリックし、「OAuthクライアントID」を選択します。  
![Screenshot](https://static-docs.nocobase.com/mail-1733818623386.png)
以下是翻译后的文档内容：

3. **Web アプリケーションを選択します。**  
![スクリーンショット](https://static-docs.nocobase.com/mail-1733818623758.png)  

4. アプリケーションの詳細を入力します。  
![スクリーンショット](https://static-docs.nocobase.com/mail-1733818623992.png)  

5. 最終的なデプロイメントのドメインを入力します (例: NocoBase テストアドレス)。  
![スクリーンショット](https://static-docs.nocobase.com/mail-1733818624188.png)  

6. 認可されたコールバック URI を追加します: `ドメイン + "/admin/settings/mail/oauth2"`。例: `https://pr-1-mail.test.nocobase.com/admin/settings/mail/oauth2`。  
![スクリーンショット](https://static-docs.nocobase.com/mail-1733818624449.png)  

7. "Create" をクリックして OAuth の詳細を表示します。  
![スクリーンショット](https://static-docs.nocobase.com/mail-1733818624701.png)  

8. メール設定ページにクライアント ID とクライアント シークレットをコピーします。  
![スクリーンショット](https://static-docs.nocobase.com/mail-1733818624923.png)  

9. 設定を完了するには "Save" をクリックします。

### アプリの公開

設定とテストを完了したら、ユーザーのパーミッションを確認し、アプリを検証に提出します。

1. "OAuth コンセント スクリーン" メニューをクリックします

![](https://static-docs.nocobase.com/mail-1733818625124.png)

2. 「EDIT APP」ボタンをクリックし、下部の「SAVE AND CONTINUE」ボタンをクリックします

![](https://static-docs.nocobase.com/mail-1735633686380.png)

![](https://static-docs.nocobase.com/mail-1735633686750.png)

3. ユーザーのパーミッションを選択するには「ADD OR REMOVE SCOPES」ボタンをクリックします

![](https://static-docs.nocobase.com/mail-1735633687054.png)

4.検索フィールドに「Gmail API」を入力し、「Gmail API」をチェックし、スコープ値が「https://mail.google.com/」であることを確認します。

![](https://static-docs.nocobase.com/mail-1735633687283.png)

5. 下部の「UPDATE」ボタンをクリックして保存します

![](https://static-docs.nocobase.com/mail-1735633687536.png)

6. 各ページの下部の「SAVE AND CONTINUE」ボタンをクリックし、コントロールパネルページに戻るには「BACK TO DASHBOARD」ボタンをクリックします

![](https://static-docs.nocobase.com/mail-1735633687744.png)
以下是翻译后的文档内容，保持了 Markdown 格式：

![](https://static-docs.nocobase.com/mail-1735633687912.png)

![](https://static-docs.nocobase.com/mail-1735633688075.png)

7. 「アプリを公開」ボタンをクリックすると、公開に必要な内容の確認ページが表示されます。その後、「確認」ボタンをクリックします。

![](https://static-docs.nocobase.com/mail-1735633688257.png)

8. コンソールページに戻ると、公開ステータスが「製作中」と表示されます。

![](https://static-docs.nocobase.com/mail-1735633688425.png)

9. 「検証の準備」ボタンをクリックし、必要な情報を入力し、「保存して続ける」ボタンをクリックします（画像内のデータは参考用です）。

![](https://static-docs.nocobase.com/mail-1735633688634.png)

![](https://static-docs.nocobase.com/mail-1735633688827.png)

10. 必要な情報を引き続き入力します（画像内のデータは参考用です）。

![](https://static-docs.nocobase.com/mail-1735633688993.png)

11. 「保存して続ける」ボタンをクリックします。

![](https://static-docs.nocobase.com/mail-1735633689159.png)

12. 「検証のために提出」ボタンをクリックして検証の提出を行います。

![](https://static-docs.nocobase.com/mail-1735633689318.png)

13. 承認結果を待ちます。

![](https://static-docs.nocobase.com/mail-1735633689494.png)

14. 承認が得られなかった場合、ユーザーは安全でないリンクをクリックしてログインを許可できます。

![](https://static-docs.nocobase.com/mail-1735633689645.png)

## Microsoft 設定

### アカウントを登録

1. https://azure.microsoft.com/en-us/pricing/purchase-options/azure-account にアクセスします。

2. Microsoft アカウントにログインします。

![](https://static-docs.nocobase.com/mail-1733818625779.png)

### テナントを作成

1. https://azure.microsoft.com/zh-cn/pricing/purchase-options/azure-account?icid=azurefreeaccount にアクセスし、アカウントにログインします。

2. 基本情報を入力し、検証コードを取得します。

![](https://static-docs.nocobase.com/mail-1733818625984.png)

3. 追加情報を入力し、続行します。

![](https://static-docs.nocobase.com/mail-1733818626352.png)
以下是将您的 Markdown 文档从中文翻译成日文的结果：

```markdown
4. クレジットカード情報を入力します（今はこのステップをスキップできます）

![](https://static-docs.nocobase.com/mail-1733818626622.png)

### クライアントIDを取得する

1. 上部メニューをクリックし、「Microsoft Entra ID」を選択します

![](https://static-docs.nocobase.com/mail-1733818626871.png)

2. 左側の「アプリ登録」を選択します

![](https://static-docs.nocobase.com/mail-1733818627097.png)

3. 上部の「新しい登録」をクリックします

![](https://static-docs.nocobase.com/mail-1733818627309.png)

4. 情報を入力して送信します

好きな名前を選ぶことができ、アカウントタイプのオプションは画像を参照し、リダイレクトURIは今のところ空白のままにします

![](https://static-docs.nocobase.com/mail-1733818627555.png)

5. クライアントIDを取得します

![](https://static-docs.nocobase.com/mail-1733818627797.png)

### API認証

1. 右側の「API権限」メニューを開きます

![](https://static-docs.nocobase.com/mail-1733818628178.png)

2. 「権限の追加」ボタンをクリックします

![](https://static-docs.nocobase.com/mail-1733818628448.png)

3. 「Microsoft Graph」をクリックします

![](https://static-docs.nocobase.com/mail-1733818628725.png)

![](https://static-docs.nocobase.com/mail-1733818628927.png)

4. 次の権限を検索して追加します。最終的な結果は次のようになります

    1. `"email"`
    2. `"offline_access"`
    3. `"IMAP.AccessAsUser.All"`
    4. `"SMTP.Send"`
    5. `"offline_access"`
    6. `"User.Read"`（デフォルト）

![](https://static-docs.nocobase.com/mail-1733818629130.png)

### シークレットを取得する

1. 左側の「証明書とシークレット」をクリックします

![](https://static-docs.nocobase.com/mail-1733818629369.png)

2. 「新しいクライアントシークレット」ボタンをクリックします

![](https://static-docs.nocobase.com/mail-1733818629554.png)

3. 説明と有効期限を入力し、次に追加をクリックします

![](https://static-docs.nocobase.com/mail-1733818630292.png)

4. シークレットIDを取得します

![](https://static-docs.nocobase.com/mail-1733818630535.png)

5. クライアントIDとクライアントシークレットの両方をコピーしてメール設定ページに入力します

![](https://static-docs.nocobase.com/mail-1733818630710.png)

## よくある質問
```

请随时告诉我是否需要进一步的帮助！
```markdown
Q: Microsoftアカウント認証ログイン後、メールが正常に受信できません。

A: 現在、認証ログインにはOutlookおよびGmailアカウントのみがサポートされています。MicrosoftおよびGoogleアカウントはサポートされていません。詳細については、以下を参照してください： [answers.microsoft.com](https://answers.microsoft.com/zh-hans/outlook_com/forum/all/%E7%8E%B0%E6%9C%89%E5%BE%AE%E8%BD%AF%E8%B4%A6/dba12dda-a7c7-4346-8263-53f4a6d9dc68)

**ヒント**: "本物"のOutlook.comまたはGmailアカウントがあるかどうかわからない場合は、ウェブを通じてOutlook.comまたはGmail.comにアクセスして、ログインおよびメールの送信ができるかどうかを確認してください。できない場合は、対応するメールサービスを持っていない可能性があり、その場合はサービスにサインアップするか、別のメールサービスを利用する必要があります。
```