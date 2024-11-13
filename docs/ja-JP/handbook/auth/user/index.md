# 使用マニュアル

## ユーザー認証管理

ユーザー認証プラグインをインストールすると、ユーザー名とメールアドレスに基づく `パスワード` 認証方式が初期化されます。

![](https://static-docs.nocobase.com/66eaa9d5421c9cb713b117366bd8a5d5.png)

## 認証タイプの有効化

![](https://static-docs.nocobase.com/7f1fb8f8ca5de67ffc68eff0a65848f5.png)

有効化された認証タイプのみがログインページに表示されます。

![](https://static-docs.nocobase.com/8375a36ef98417af0f0977f1e07345dd.png)

## ユーザー認証タイプ

![](https://static-docs.nocobase.com/da4250c0cea343ebe470cbf7be4b12e4.png)

NocoBaseが現在サポートしているユーザー認証タイプは以下の通りです：

- パスワード (Password)：ユーザー認証プラグイン内蔵
- SMS (SMS)：[sms-authプラグイン](../../auth-sms/index.md)の拡張
- CAS：[cas-authプラグイン](../../auth-cas/index.md)の拡張
- SAML：[saml-authプラグイン](../../auth-saml/index.md)の拡張
- OIDC：[oidc-authプラグイン](../../auth-oidc/index.md)の拡張

また、自分でユーザー認証を拡張することも可能です。詳細は[開発ガイド](../dev/guide.md)を参照してください。

## パスワード認証

### 設定画面

![](https://static-docs.nocobase.com/202411131505095.png)

### 登録を許可

登録を許可すると、ログインページにアカウント作成のリンクが表示され、登録ページに移動できます。

![](https://static-docs.nocobase.com/78903930d4b47aaf75cf94c55dd3596e.png)

登録ページ

![](https://static-docs.nocobase.com/ac3c3ab42df28cb7c6dc70b24e99e7f7.png)

登録が許可されていない場合、ログインページにはアカウント作成のリンクは表示されません。

![](https://static-docs.nocobase.com/8d5e3b6df9991bfc1c2e095a93745121.png)

登録が許可されていない場合、登録ページにはアクセスできません。

![](https://static-docs.nocobase.com/09325c4b07e09f88f80a14dff8430556.png)
