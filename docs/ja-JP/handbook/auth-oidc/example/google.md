# Googleでサインイン

> https://developers.google.com/identity/openid-connect/openid-connect

## Google OAuth 2.0 資格情報の取得

[Google Cloudコンソール](https://console.cloud.google.com/apis/credentials) - 資格情報の作成 - OAuthクライアントID

![](https://static-docs.nocobase.com/0f2946c8643565ecc4ac13249882638c.png)

設定画面に入ったら、承認済みリダイレクトURLを入力します。リダイレクトURLはNocobaseで認証器を追加する際に取得でき、通常は `http(s)://host:port/api/oidc:redirect` です。[使用マニュアル - 設定](../index.md#設定)のセクションを参照してください。

![](https://static-docs.nocobase.com/24078bf52ec966a16334894cb3d9d126.png)

## NocoBaseでの認証器の追加

プラグイン設定 - ユーザー認証 - 追加 - OIDC

![](https://static-docs.nocobase.com/0e4b1acdef6335aaee2139ae6629977b.png)

[使用マニュアル - 設定](../index.md#設定)に記載されているパラメータを参考にして、認証器の設定を完了してください。

