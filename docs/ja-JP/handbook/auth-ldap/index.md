# 認証：LDAP

<PluginInfo commercial="true" name="auth-ldap"></PluginInfo>

## 紹介

認証：LDAPプラグインは、LDAP（Lightweight Directory Access Protocol）プロトコル標準に従い、ユーザーがLDAPサーバーのアカウントとパスワードを使用してNocoBaseにログインできるようにします。

## プラグインの有効化

<img src="https://static-docs.nocobase.com/202405101600789.png"/>

## LDAP認証の追加

ユーザー認証プラグイン管理ページに移動します。

<img src="https://static-docs.nocobase.com/202405101601510.png"/>

「追加」- 「LDAP」を選択します。

<img src="https://static-docs.nocobase.com/202405101602104.png"/>

## 設定

### 基本設定

<img src="https://static-docs.nocobase.com/202405101605728.png"/>

- **ユーザーが存在しない場合に自動的にサインアップ** - 一致する既存のユーザーが見つからない場合、新しいユーザーを自動的に作成するかどうかを選択します。
- **LDAP URL** - LDAPサーバーのアドレスを指定します。
- **バインドDN** - サーバーの接続テストとユーザー検索に使用されるDNを入力します。
- **バインドパスワード** - バインドDNのパスワードを入力します。
- **接続テスト** - ボタンをクリックして、サーバーの接続性とバインドDNの有効性をテストします。

### 検索設定

<img src="https://static-docs.nocobase.com/202405101609984.png"/>

- **検索DN** - ユーザー検索に使用するDNです。
- **検索フィルター** - ユーザーを検索するためのフィルター条件です。`{{account}}`はログイン時に使用するユーザーアカウントを表します。
- **スコープ** - `Base`、`One level`、`Subtree`のいずれかを選択します。デフォルトは`Subtree`です。
- **サイズ制限** - 検索のページサイズです。

### 属性マッピング

<img src="https://static-docs.nocobase.com/202405101612814.png"/>

- **このフィールドを使用してユーザーをバインド** - 既存のユーザーをバインドするためのフィールドです。ログインアカウントがユーザー名の場合はユーザー名を、メールアドレスの場合はメールアドレスを選択します。デフォルトはユーザー名です。
- **属性マップ** - ユーザー属性とNocoBaseユーザーテーブルのフィールドマッピングです。

## ログイン

ログインページにアクセスし、ログインフォームにLDAPユーザー名とパスワードを入力してログインします。

<img src="https://static-docs.nocobase.com/202405101614300.png"/>

