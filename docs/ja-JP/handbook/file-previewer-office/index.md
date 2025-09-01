# Office ファイルプレビュー <Badge>v1.8.11+</Badge>

<PluginInfo name="file-previewer-office"></PluginInfo>

Office ファイルプレビュープラグインは、NocoBase アプリケーション内で Word、Excel、PowerPoint などの Office 形式のファイルをプレビュー表示するためのものです。  
Microsoft が提供するオンラインサービスを利用して、公開 URL でアクセス可能なファイルをプレビュー画面に埋め込み、ユーザーはブラウザ上で直接閲覧できます。ダウンロードや Office アプリケーションのインストールは不要です。

## 使い方

このプラグインはデフォルトで **無効化** されています。プラグインマネージャーで有効化することで使用可能となり、追加の設定は不要です。

![プラグイン有効化画面](https://static-docs.nocobase.com/20250731140048.png)

データテーブルのファイルフィールドに Office ファイル（Word / Excel / PowerPoint）をアップロード後、該当ファイルのアイコンまたはリンクをクリックすると、ポップアップまたは埋め込み画面で内容を表示できます。

![プレビュー操作例](https://static-docs.nocobase.com/20250731143231.png)

## 動作原理

このプラグインは Microsoft のオンラインサービス（Office Web Viewer）を利用してプレビューを生成します。主な流れは以下の通りです：

- アップロードされたファイルに対して、公開アクセス可能な URL をフロントエンドで生成します（S3-Pro プラグインで生成された署名付き URL を含む）；
- 次の形式で iframe に埋め込みます：

  ```
  https://view.officeapps.live.com/op/embed.aspx?src=<公開ファイルURL>
  ```

- Microsoft のサービスがその URL にアクセスし、ファイルを取得・レンダリングしてプレビュー画面を返します。

## 注意事項

- このプラグインは Microsoft のオンラインサービスに依存しているため、安定したネットワーク接続と Microsoft サービスへのアクセスが必要です。
- Microsoft は提供されたファイル URL にアクセスし、ファイルの内容を一時的にサーバー上にキャッシュする可能性があります。これにはプライバシー上の懸念が伴います。もし懸念がある場合は、このプラグインの使用を避けてください[^1]。
- プレビューするファイルは、**公開アクセス可能な URL** である必要があります。通常、NocoBase にアップロードされたファイルは自動的に公開リンク（S3-Pro プラグインの署名付き URL を含む）を生成します。ただし、アクセス制限がある場合や社内ネットワーク上に保存されている場合はプレビューできません[^2]。
- このサービスはログイン認証や非公開ストレージには対応していません。社内ネットワーク専用やログインが必要なファイルはプレビューできません。
- Microsoft によって取得されたファイルは短時間キャッシュされる可能性があり、ソースファイルが削除された後でも一時的にプレビューできる場合があります。
- 推奨されるファイルサイズ制限：安定したプレビューのため、Word や PowerPoint ファイルは 10MB 以下、Excel ファイルは 5MB 以下を推奨します[^3]。
- 現時点でこのサービスの商用利用に関する公式なガイドラインは公開されていません。商用環境で使用する場合はリスクを自己判断でご検討ください[^4]。

## 対応ファイル形式

このプラグインは以下の Office ファイル形式のみをサポートします。判定は MIME タイプに基づきます：

- Word 文書：  
  `application/vnd.openxmlformats-officedocument.wordprocessingml.document`
- Excel 表計算ファイル：  
  `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`
- PowerPoint プレゼンテーション：  
  `application/vnd.openxmlformats-officedocument.presentationml.presentation`

上記以外の形式はこのプラグインでプレビューされません。

[^1]: [What is the status of view.officeapps.live.com?](https://learn.microsoft.com/en-us/answers/questions/5191451/what-is-the-status-of-view-officeapps-live-com)  
[^2]: [Microsoft Q&A - Access denied or non-public files cannot be previewed](https://learn.microsoft.com/en-us/answers/questions/1411722/https-view-officeapps-live-com-op-embed-aspx)  
[^3]: [Microsoft Q&A - File size limits for Office Web Viewer](https://learn.microsoft.com/en-us/answers/questions/1411722/https-view-officeapps-live-com-op-embed-aspx#file-size-limits)  
[^4]: [Microsoft Q&A - Commercial use of Office Web Viewer](https://learn.microsoft.com/en-us/answers/questions/5191451/what-is-the-status-of-view.officeapps.live.com#commercial-use)
