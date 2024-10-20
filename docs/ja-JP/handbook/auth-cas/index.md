# 認証：CAS

<PluginInfo commercial="true" name="auth-cas"></PluginInfo>

## 概要

認証：CASプラグインは、CAS（Central Authentication Service）プロトコル標準に従い、ユーザーが第三者の認証サービスプロバイダー（IdP）によって提供されたアカウントを使用してNocoBaseにログインできるようにします。

## インストール

## 取扱説明書

### プラグインの有効化

![](https://static-docs.nocobase.com/469c48d9f2e8d41a088092c34ddb41f5.png)

### CAS認証の追加

ユーザー認証管理ページにアクセスします。

http://localhost:13000/admin/settings/auth/authenticators

CAS認証方式を追加します。

![](https://static-docs.nocobase.com/a268500c5008d3b90e57ff1e2ea41aca.png)

CASを設定し、有効化します。

![](https://static-docs.nocobase.com/2518b3fcc80d8a41391f3b629a510a02.png)

### ログインページにアクセス

http://localhost:13000/signin

![](https://static-docs.nocobase.com/49116aafbb2ed7218306f929ac8af967.png)

