# 認証：Dingtalk

<PluginInfo commercial="true" name="auth-dingtalk"></PluginInfo>

## 概要

認証：Dingtalk プラグインは、ユーザーが Dingtalk アカウントを使用して NocoBase にログインできるようサポートします。

## プラグインの有効化

![](https://static-docs.nocobase.com/202406120929356.png)

## Dingtalk 開発者コンソールでインターフェース権限を申請

<a href="https://open.dingtalk.com/document/orgapp/tutorial-obtaining-user-personal-information" target="_blank">Dingtalk オープンプラットフォーム - サードパーティサイトへのログインの実現</a>を参照し、アプリケーションを作成してください。

アプリ管理コンソールにアクセスし、「個人携帯電話情報」と「連絡先個人情報読み取り権限」を有効にします。

![](https://static-docs.nocobase.com/202406120006620.png)

## Dingtalk 開発者コンソールからクライアントシークレットを取得

Client ID と Client Secret をコピーしてください。

![](https://static-docs.nocobase.com/202406120000595.png)

## NocoBase に Dingtalk 認証を追加

ユーザー認証プラグイン管理ページにアクセスします。

![](https://static-docs.nocobase.com/202406112348051.png)

「追加 - Dingtalk」を選択します。

![](https://static-docs.nocobase.com/202406112349664.png)

### 設定

![](https://static-docs.nocobase.com/202406120016896.png)

- **ユーザーが存在しない場合に自動的にサインアップ**：携帯電話番号で既存のユーザーが見つからない場合に、新しいユーザーを自動的に作成するかどうかを設定します。
- **Client ID と Client Secret**：前のステップでコピーした情報を入力します。
- **リダイレクト URL**：コールバック URL を入力し、次のステップに進みます。

## Dingtalk 開発者コンソールでコールバック URL を設定

コピーしたコールバック URL を Dingtalk 開発者コンソールに貼り付けます。

![](https://static-docs.nocobase.com/202406120012221.png)

## ログイン

ログインページにアクセスし、ログインフォームの下にあるボタンをクリックして、Dingtalk を通じて外部ログインを開始します。

![](https://static-docs.nocobase.com/202406120014539.png)

