# 認証：SAML 2.0

<PluginInfo commercial="true" name="auth-saml"></PluginInfo>

## 概要

認証：SAML 2.0 プラグインは、SAML 2.0 (Security Assertion Markup Language 2.0) プロトコル標準に従い、ユーザーが第三者のアイデンティティ認証サービスプロバイダー (IdP) によって提供されるアカウントを使用して NocoBase にログインできるようにします。

## プラグインの有効化

![](https://static-docs.nocobase.com/6a12f3d8073c47532a4f8aac900e4296.png)

## SAML 認証の追加

ユーザー認証プラグイン管理ページに移動します。

![](../auth-oidc/static/2023-12-03-18-19-33.png)

追加 - SAML

![](https://static-docs.nocobase.com/5076fe56086b7799be308bbaf7c4425d.png)

## 設定

![](https://static-docs.nocobase.com/976b66e589973c322d81dcddd22c6146.png)

- SSO URL - IdP によって提供されるシングルサインオン用の URL
- 公開鍵 (Public Certificate) - IdP によって提供されます
- エンティティ ID (IdP Issuer) - オプションで、IdP によって提供されます
- HTTP - NocoBase アプリが HTTP プロトコルの場合はチェックを入れてください
- ユーザーをバインドするためにこのフィールドを使用 - 既存のユーザーとマッチングするためのフィールドで、メールアドレスまたはユーザー名を選択可能。デフォルトはメールアドレスです。IdP が持っているユーザー情報には `email` または `username` フィールドが含まれている必要があります。
- ユーザーが存在しない場合に自動的にサインアップ - マッチングする既存ユーザーが見つからない場合に新しいユーザーを自動的に作成するかどうか。
- 使用 (Usage) - `SP Issuer / EntityID` および `ACS URL` は IdP の対応する設定にコピーして入力するために使用されます。

## フィールドマッピング

フィールドマッピングは、IdP の設定プラットフォームで行う必要があります。詳しくは[こちらの例](../auth-saml/example/google.md)をご参照ください。

NocoBase でマッピング可能なフィールドは以下の通りです：

- email（必須）
- phone（`phone` をサポートするプラットフォームのみ有効。例：アリババクラウド、Feishu）
- nickname
- username
- firstName
- lastName

`nameID` は SAML プロトコルに含まれており、マッピングの必要はなく、ユーザーの一意の識別子として保存されます。新しいユーザーのニックネーム使用ルールの優先順位は次の通りです：`nickname` > `firstName lastName` > `username` > `nameID`。ユーザーの組織や役割のマッピングは現在サポートされていません。

## ログイン

ログインページにアクセスし、ログインフォームの下にあるボタンをクリックして、サードパーティログインを開始します。

![](https://static-docs.nocobase.com/74963865c9d36a294948e6adeb5b24bc.png)

