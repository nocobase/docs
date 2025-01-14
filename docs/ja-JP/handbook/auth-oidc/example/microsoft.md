# MicroSoft Entra ID

> https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-register-app  
> https://learn.microsoft.com/en-us/entra/identity-platform/v2-protocols-oidc

## NocoBase に新しい認証器を追加

まず、NocoBase に新しい認証器を追加します：プラグイン設定 - ユーザー認証 - 追加 - OIDC.

コールバック URL をコピーします。

![](https://static-docs.nocobase.com/202412021504114.png)

## アプリケーションを登録

MicroSoft Entra 管理センターを開き、新しいアプリケーションを登録します。

![](https://static-docs.nocobase.com/202412021506837.png)

ここに先ほどコピーしたコールバック URL を入力します。

![](https://static-docs.nocobase.com/202412021506380.png)

## 情報を取得して入力

登録したアプリケーションをクリックし、ホームページから **Application (client) ID** と **Directory (tenant) ID** をコピーします。

![](https://static-docs.nocobase.com/202412021509602.png)

Certificates & secrets をクリックし、新しいクライアントシークレット (Client secrets) を作成し、**Value** をコピーします。

![](https://static-docs.nocobase.com/202412021512616.png)

上記の情報と NocoBase 認証器設定の対応関係は以下の通りです：

| MicroSoft Entra 情報    | NocoBase 認証器設定                                                                                                                              |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| Application (client) ID | Client ID                                                                                                                                        |
| Client secrets - Value  | Client secret                                                                                                                                    |
| Directory (tenant) ID   | Issuer:<br />https://login.microsoftonline.com/{tenant}/v2.0/.well-known/openid-configuration, `{tenant}` を対応する Directory (tenant) ID に置き換える |
