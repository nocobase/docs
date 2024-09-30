# Google Workspace

## GoogleをIdPとして設定する

[Google管理コンソール](https://admin.google.com/) - アプリ - ウェブアプリとモバイルアプリ

![](https://static-docs.nocobase.com/0812780b990a97a63c14ea8991959827.png)

アプリ設定が完了したら、**SSO URL**、**エンティティID**、**証明書**をコピーします。

![](https://static-docs.nocobase.com/aafd20a794730e85411c0c8f368637e0.png)

## NocoBaseに認証器を追加する

プラグイン設定 - ユーザー認証 - 追加 - SAML

![](https://static-docs.nocobase.com/5bc18c7952b8f15828e26bb07251a335.png)

先ほどコピーした情報を順に入力します。

- SSO URL: SSO URL
- 公開証明書: 証明書
- IdP発行者: エンティティID
- HTTP: ローカルでHTTPテストを行う場合はチェックを入れる

その後、UsageからSP発行者/エンティティIDとACS URLをコピーします。

## GoogleでSP情報を入力する

Googleコンソールに戻り、**サービスプロバイダの詳細情報**ページで、先ほどコピーしたACS URLとエンティティIDを入力し、**署名された応答**にチェックを入れます。

![](https://static-docs.nocobase.com/1536268bf8df4a5ebc72384317172191.png)

![](https://static-docs.nocobase.com/c7de1f8b84c1335de110e5a7c96255c4.png)

**属性マッピング**のセクションで、マッピングを追加し、対応する属性を設定します。

![](https://static-docs.nocobase.com/27180f2f46480c3fee3016df86d6fdb8.png)

