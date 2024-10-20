# ユーザー認証

## 概要

NocoBaseのユーザー認証モジュールは主に二つの部分で構成されています：

- コアの`@nocobase/auth`は、ログイン、登録、検証などのユーザー認証に関連する拡張可能なインターフェースとミドルウェアを定義し、さまざまな拡張認証方式を登録・管理するために使用されます。
- プラグインの`@nocobase/plugin-auth`は、コアの認証管理モジュールを初期化し、基本的なユーザー名（またはメールアドレス）/パスワード認証方式を提供します。

> [`@nocobase/plugin-users`プラグイン](../users/index.md)は、ユーザー管理機能を提供するために併用する必要があります。

さらに、NocoBaseは他にもさまざまなユーザー認証方式のプラグインを提供しています。

- [@nocobase/plugin-auth-sms](../auth-sms/index.md) - SMS認証によるログイン機能を提供
- [@nocobase/plugin-auth-saml](../auth-saml/index.md) - SAML SSOによるログイン機能を提供
- [@nocobase/plugin-auth-oidc](../auth-oidc/index.md) - OIDC SSOによるログイン機能を提供
- [@nocobase/plugin-auth-cas](../auth-cas/index.md) - CAS SSOによるログイン機能を提供

これらのプラグインを通じて、管理者が適切な認証方式を設定した後、ユーザーはGoogle WorkspaceやMicrosoft Azureなどのプラットフォームが提供するユーザーIDでシステムにログインできます。また、Auth0、Logto、Keycloakなどのプラットフォームツールとも接続できます。さらに、開発者は提供された基本インターフェースを使用して、必要な他の認証方式を簡単に拡張できます。

