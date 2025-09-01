# カレンダーブロック

<PluginInfo name="calendar"></PluginInfo>

## 紹介

カレンダーブロックは、カレンダー表示でイベントや日付に関連するデータを表示し、会議のスケジュールやイベントの計画に最適です。

## インストール

ビルトインプラグインのため、インストールは不要です。

## ブロックの追加

<video width="100%" height="440" controls>
      <source src="https://static-docs.nocobase.com/20240419201640.mp4" type="video/mp4">
</video>

1. タイトルフィールド: カレンダーのバーに表示される情報
2. 開始時間: タスクの開始時間
3. 終了時間: タスクの終了時間

タスクバーをクリックすると、選択したタスクバーがハイライトされ、詳細なポップアップウィンドウが表示されます。

![20240408171928](https://static-docs.nocobase.com/20240408171928.png)

## ブロック設定項目

![20240419203321](https://static-docs.nocobase.com/20240419203321.png)

### 農暦の表示

![20240419203603](https://static-docs.nocobase.com/20240419203603.png)

- [ブロックタイトルを編集](/handbook/ui/blocks/block-settings/block-title)
- [ブロックテンプレートとして保存](/handbook/block-template)

### データ範囲の設定

![20240419203751](https://static-docs.nocobase.com/20240419203751.png)

詳細は [データ範囲の設定](/handbook/ui/blocks/block-settings/data-scope) を参照してください。

### ブロックの高さ設定

例: 注文カレンダーブロックの高さを調整し、カレンダーブロック内にスクロールバーが表示されないようにします。

![20240605215742](https://static-docs.nocobase.com/20240605215742.gif)

より多くの内容は [ブロックの高さ](/handbook/ui/blocks/block-settings/block-height) を参照してください。

### 背景色フィールド

:::info{title=ヒント}
必要なNocoBaseのバージョンはv1.4.0-beta以上です。
:::

このオプションはカレンダーイベントの背景色を設定するために使用できます。使い方は以下の通りです：

1. カレンダーデータテーブルには**ドロップダウン単一選択（Single select）**または**ラジオボタン（Radio group）**タイプのフィールドが必要で、そのフィールドに色を設定します。
2. 次に、カレンダーブロックの設定画面に戻り、**背景色フィールド**で先ほど設定したフィールドを選択します。
3. 最後に、カレンダーイベントで色を選択し、送信ボタンをクリックすると、色が反映されるのを確認できます。

![20240914192017_rec_](https://static-docs.nocobase.com/20240914192017_rec_.gif)

### Week Start Day

> Supported in version v1.7.7 and above

The calendar block supports setting the start day of the week, allowing you to choose **Sunday** or **Monday** as the first day of the week.  
The default start day is **Monday**, making it easier for users to adjust the calendar display according to regional habits for a better user experience.

![20250707165958](https://static-docs.nocobase.com/20250707165958.png)

## 設定操作

![20240419203424](https://static-docs.nocobase.com/20240419203424.png)

### 今日

カレンダーブロックの「今日」ボタンは便利なナビゲーション機能を提供し、ユーザーが他の日付にページをめくった後、現在の日付のカレンダーページに迅速に戻ることができます。

![20240419203514](https://static-docs.nocobase.com/20240419203514.png)

### ビュー切替

デフォルトは月表示です。

![20240419203349](https://static-docs.nocobase.com/20240419203349.png)

