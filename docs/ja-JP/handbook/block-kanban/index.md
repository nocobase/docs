# カンバンブロック

<PluginInfo name="block-kanban"></PluginInfo>

## 紹介

カンバンブロックは、カンバンビューでデータを表示し、データのステータスを直接ドラッグ＆ドロップで調整できます。

## インストール

組み込みプラグインのため、インストールは不要です。

## ブロックを追加

<video width="100%" height="440" controls>
      <source src="https://static-docs.nocobase.com/20240419214551.mp4" type="video/mp4">
</video>

![20240419214751](https://static-docs.nocobase.com/20240419214751.png)

### グループフィールド

特定の分類に従ってデータをグループ化するために使用されます。カンバンブロックを作成または設定する際には、単一選択フィールドをグループフィールドとして選択する必要があります。

### ソートフィールド

各グループ内でデータをソートするために使用されます。グループフィールドにバインドされたソートフィールドのみが選択可能です。カンバンブロックを作成する際に、ソートフィールドを簡単に設定できます。

![20240426170628](https://static-docs.nocobase.com/20240426170628.png)

## カンバンデータの管理

### カードをクリック

カードをクリックするとポップアップウィンドウが表示され、必要に応じてデータブロックを設定できます。例えば、編集フォームを設定して現在のカードレコードを変更できます。

![20240419220115](https://static-docs.nocobase.com/20240419220115.png)

ポップアップウィンドウの開き方やサイズの設定も可能です。

![20240419220159](https://static-docs.nocobase.com/20240419220159.png)

### カードをドラッグ

例：カードをドラッグして商品ステータスを調整し、ドラッグが完了すると自動的にデータが保存されます。

<video width="100%" height="440" controls>
      <source src="https://static-docs.nocobase.com/20240419221247.mp4" type="video/mp4">
</video>

## ブロック設定項目

### データ範囲を設定

例：デフォルトでプロモーション商品をフィルタリングします。

![20240422095659](https://static-docs.nocobase.com/20240422095659.png)

詳細については[データ範囲の設定](/handbook/ui/blocks/block-settings/data-scope)を参照してください。

### ブロックの高さを設定

例：注文カンバンブロックの高さを調整すると、列内にスクロールバーが表示されます。

![20240605220635](https://static-docs.nocobase.com/20240605220635.gif)

詳細については[ブロックの高さ](/handbook/ui/blocks/block-settings/block-height)を参照してください。

## フィールドの設定

![20240419215909](https://static-docs.nocobase.com/20240419215909.png)

## 操作の設定

![20240419220903](https://static-docs.nocobase.com/20240419220903.png)

- [フィルタ](/handbook/ui/actions/types/filter)
- [追加](/handbook/ui/actions/types/add-new)

