# テーブルブロック

## 紹介

テーブルブロックは、NocoBaseに内蔵されたコアデータブロックの一つで、構造化データをテーブル形式で表示および管理します。柔軟な設定オプションを備えており、テーブルの列、列幅、ソートルール、データ範囲などをカスタマイズできるほか、フィルタリング、新規作成、コピー、編集、削除などの多様な操作が組み込まれています。

## ブロックの追加

<video width="100%" height="440" controls>
    <source src="https://static-docs.nocobase.com/20240415215027.mp4" type="video/mp4">
</video>

## ブロック設定項目

![20240415215319](https://static-docs.nocobase.com/20240415215319.png)

### データ範囲の設定

例: デフォルトで「状態」が発送済みのドキュメントをフィルタリングします。

![20240415215404](https://static-docs.nocobase.com/20240415215404.png)

詳細については [データ範囲の設定](/handbook/ui/blocks/block-settings/data-scope) を参照してください。

### ソートルールの設定

例：出荷日付の逆順でドキュメントを表示します。

![20240415215509](https://static-docs.nocobase.com/20240415215509.png)

詳細については [ソートルールの設定](/handbook/ui/blocks/block-settings/sorting-rule) を参照してください。

### データブロックの接続

例：注文テーブルブロックと注文詳細ブロックを接続し、フィルタリングを連動させます。

<video width="100%" height="440" controls>
    <source src="https://static-docs.nocobase.com/20240415221426.mp4" type="video/mp4">
</video>

詳細については [データブロックの接続](/handbook/ui/blocks/block-settings/connect-block) を参照してください。

### ブロックの高さの設定

例：注文テーブルブロックの高さを「全高」モードに設定します。

![20240604225958](https://static-docs.nocobase.com/20240604225958.gif)

詳細については、[ブロックの高さ](/handbook/ui/blocks/block-settings/block-height)を参照してください。

- [ブロックタイトルの編集](/handbook/ui/blocks/block-settings/block-title)
- [データ読み込み方法の設定](/handbook/ui/blocks/block-settings/loading-mode)
- [ブロックテンプレートとして保存](/handbook/block-template)

## フィールドの設定

### 本表フィールド

![20240415223714](https://static-docs.nocobase.com/20240415223714.png)

### 関係表フィールド

![20240415223746](https://static-docs.nocobase.com/20240415223746.png)

### 表示継承表フィールド（親表フィールド）

例：リース注文表は注文表を継承します。

![20240415224242](https://static-docs.nocobase.com/20240415224242.png)

表の列フィールド設定項目については、[表の列フィールド](/handbook/ui/fields/generic/table-column)を参照してください。

## 操作の設定

### グローバル操作

![20240415225525](https://static-docs.nocobase.com/20240415225525.png)

- [フィルタ](/handbook/ui/actions/types/filter)
- [追加](/handbook/ui/actions/types/add-new)
- [削除](/handbook/ui/actions/types/delete)
- [更新](/handbook/ui/actions/types/refresh)
- [インポート](/handbook/action-import)
- [エクスポート](/handbook/action-export)
- [データ追加](/handbook/action-add-record)
- [一括更新](/handbook/action-bulk-update)
- [一括編集](/handbook/action-bulk-edit)

### 行操作

![20240415225657](https://static-docs.nocobase.com/20240415225657.png)

- [表示](/handbook/ui/actions/types/view)
- [編集](/handbook/ui/actions/types/edit)
- [コピー](/handbook/action-duplicate)
- [削除](/handbook/ui/actions/types/delete)
- [ポップアップ](/handbook/ui/actions/types/pop-up)
- [レコード更新](/handbook/ui/actions/types/update-record)
- [カスタムリクエスト](/handbook/action-custom-request)

