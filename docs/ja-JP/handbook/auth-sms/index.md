# SMS認証

## 概要

SMS認証プラグインは、ユーザーがSMSを通じてNocoBaseに登録し、ログインすることをサポートします。

> [`@nocobase/plugin-verification` プラグイン](../verification/index.md)が提供するSMS認証コード機能と併用する必要があります。

## SMS認証の追加

ユーザー認証プラグイン管理ページにアクセスします。

![](../auth-oidc/static/2023-12-03-18-19-33.png)

「追加」 - 「SMS」を選択します。

![](https://static-docs.nocobase.com/29c8916492fd5e1564a872b31ad3ac0d.png)

## 設定

![](https://static-docs.nocobase.com/a4d35ec63ba22ae2ea9e3e8e1cbb783d.png)

SMS認証コード機能の設定については、[認証コードプラグイン (@nocobase/plugin-verification) のドキュメント](../verification/index.md)を参照してください。SMSログイン認証機能は、設定されたデフォルトのSMS認証コードプロバイダーを使用してSMSを送信します。

ユーザーが存在しない場合の自動登録（ユーザーが存在しない場合に自動的にサインアップ）: このオプションが選択されている場合、ユーザーが使用する電話番号が存在しないとき、その電話番号をニックネームとして新しいユーザーが登録されます。

## ログイン

ログインページにアクセスします。

![](https://static-docs.nocobase.com/8d630739201bc27d8b0de076ab4f75e2.png)

