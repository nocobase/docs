# モバイル端末

<PluginInfo name="mobile"></PluginInfo>

## 概要

モバイル端末のページ設定を提供します。コアフレームワークは Ant Design Mobile に基づいており、さまざまな拡張ポイントを提供し、一部のデスクトップ用ブロックを互換性を持って追加できます。

:::warning
古い `plugin-mobile-client` は廃止されました。v1.3 以降のバージョンでは `plugin-mobile` を使用してください。両方のプラグインは互換性がありませんので、新しいバージョンではモバイル端末の再設定が必要です。
:::

## インストール

プリセットプラグインであり、使用するにはまずアクティブ化する必要があります。

![20240712113500](https://static-docs.nocobase.com/20240712113500.png)

## 使用マニュアル

### UI 設定画面

NocoBase はモバイル端末向けに特有の UI 設定画面を提供しています。

![20240828220321](https://static-docs.nocobase.com/20240828220321.png)

### タブバー

リンクとページの二種類のタイプを追加できます。

![20240828223244](https://static-docs.nocobase.com/20240828223244.png)

### ブロックの追加

現在追加可能なデスクトップ用ブロックは以下の通りです。

![20240828223454](https://static-docs.nocobase.com/20240828223454.png)

### ページ設定

![20240828221452](https://static-docs.nocobase.com/20240828221452.png)

### ページタブ

![20240828222225](https://static-docs.nocobase.com/20240828222225.png)

### サブページ

モバイル端末のポップアップ操作はすべてサブページ形式で開き、スワイプで戻ることができます。

<video width="100%" controls>
  <source src="https://static-docs.nocobase.com/20240828222736_rec_.mp4" type="video/mp4">
</video>

### フィルタリング

[ポップアップ](https://mobile.ant.design/components/popup)のインタラクション方式を採用しています。

![20240828230549](https://static-docs.nocobase.com/20240828230549.png)

### メニューアクセス権の設定

デスクトップ版と同様に、メニューアクセス権を設定できます。設定位置は以下の通りです（モバイルプラグインを先に有効にする必要があります）：

![20240903221327_rec_](https://static-docs.nocobase.com/20240903221327_rec_.gif)

## 開発ガイド

現在サポートされている拡張ポイントは以下の通りです。

![20240712115610](https://static-docs.nocobase.com/20240712115610.png)

