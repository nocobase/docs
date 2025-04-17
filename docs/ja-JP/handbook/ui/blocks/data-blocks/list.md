# リストブロック

## 概要

リストブロックはデータをリスト形式で表示し、タスクリスト、ニュース、製品情報などのデータ表示シーンに適しています。

## ブロックの追加

<video width="100%" height="440" controls>
    <source src="https://static-docs.nocobase.com/20240417224417.mp4" type="video/mp4">
</video>

## ブロック設定項目

![20240417224539](https://static-docs.nocobase.com/20240417224539.png)

### データ範囲の設定

図の通り、デフォルトで返金された注文ステータスをフィルタリングした注文を表示します。

![20240417224701](https://static-docs.nocobase.com/20240417224701.png)

詳細は [データ範囲の設定](/handbook/ui/blocks/block-settings/data-scope) をご参照ください。

### 並び替えルールの設定

図の通り、注文金額の大きさを基準に逆順に並び替えます。

![20240417225302](https://static-docs.nocobase.com/20240417225302.png)

詳細は [並び替えルールの設定](/handbook/ui/blocks/block-settings/sorting-rule) をご参照ください。

### データロード方式の設定

通常、フィルターブロックと組み合わせて使用し、フィルタリング時にのみデータをロードします。

<video width="100%" height="440" controls>
    <source src="https://static-docs.nocobase.com/20240417225539.mp4" type="video/mp4">
</video>

詳細は [データロード方式の設定](/handbook/ui/blocks/block-settings/loading-mode) をご参照ください。

### ブロックの高さの設定

例として、注文リストブロックの高さを「全高」モードに設定します。

![20240604233102](https://static-docs.nocobase.com/20240604233102.gif)

詳細は [ブロックの高さ](/handbook/ui/blocks/block-settings/block-height) をご参照ください。

- [ブロックタイトルの編集](/handbook/ui/blocks/block-settings/block-title)
- [ブロックテンプレートとして保存](/handbook/block-template)

## フィールドの設定

### 本表のフィールド

![20240417230027](https://static-docs.nocobase.com/20240417230027.png)

### 関係表のフィールド

![20240417230115](https://static-docs.nocobase.com/20240417230115.png)

リストフィールドの設定項目については、[詳細フィールド](/handbook/ui/fields/generic/detail-form-item) をご参照ください。

## 操作の設定

### グローバル操作

![20240421115811](https://static-docs.nocobase.com/20240421115811.png)

- [フィルタ](/handbook/ui/actions/types/filter)
- [追加](/handbook/ui/actions/types/add-new)
- [リフレッシュ](/handbook/ui/actions/types/refresh)
- [インポート](/handbook/action-import)
- [エクスポート](/handbook/action-export)

### 行操作

![20240418114424](https://static-docs.nocobase.com/20240418114424.png)

- [表示](/handbook/ui/actions/types/view)
- [編集](/handbook/ui/actions/types/edit)
- [削除](/handbook/ui/actions/types/delete)
- [ポップアップ](/handbook/ui/actions/types/pop-up)
- [更新履歴](/handbook/ui/actions/types/update-record)
- [カスタムリクエスト](/handbook/action-custom-request)

