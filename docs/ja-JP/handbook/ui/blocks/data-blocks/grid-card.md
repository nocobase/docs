# グリッドカード

## 紹介

グリッドカードブロックは、カード形式でデータレコードの要約情報を表示します。異なる画面サイズに応じて列数を設定でき、さまざまなサイズのデバイスで快適に表示されるよう配慮されています。

### ブロックの追加

<video width="100%" height="440" controls>
      <source src="https://static-docs.nocobase.com/20240418120045.mp4" type="video/mp4">
</video>

## ブロック設定項目

![20240419220708](https://static-docs.nocobase.com/20240419220708.png)

### データ範囲

<video width="100%" height="440" controls>
      <source src="https://static-docs.nocobase.com/20240419173617.mp4" type="video/mp4">
</video>

詳細は [データ範囲の設定](/handbook/ui/blocks/block-settings/data-scope) をご覧ください。

### 一行に表示する列数の設定

![20240408160228](https://static-docs.nocobase.com/20240408160228.png)

異なる画面サイズに対応する列数を設定できます。

![20240408160844](https://static-docs.nocobase.com/20240408160844.png)

### データ読み込み方式の設定

例：データブロックとの接続 + データ読み込み方式の設定。

注文表と商品表は多対多の関係にあり、注文表ブロックと商品グリッドカードブロックはデータフィルタリングを連動させ、グリッドブロックのデータ読み込み方法を『データフィルタリング後』に設定します。

<video width="100%" height="440" controls>
<source src="https://static-docs.nocobase.com/20240419175643.mp4" type="video/mp4">
</video>

### ブロックの高さの設定

例：注文グリッドカードブロックの高さを「全高」モードに設定します。

詳細については、[ブロックの高さ](/handbook/ui/blocks/block-settings/block-height)をご覧ください。

- [並び替えルールの設定](/handbook/ui/blocks/block-settings/sorting-rule)
- [ブロックテンプレートとして保存](/handbook/block-template)

## フィールドの設定

### この表のフィールド

![20240418123118](https://static-docs.nocobase.com/20240418123118.png)

### 関係表のフィールド

![20240418123147](https://static-docs.nocobase.com/20240418123147.png)

グリッドカードブロックのフィールド設定項目については、[詳細フィールド](/handbook/ui/fields/generic/detail-form-item)をご参照ください。

## 操作の設定

### グローバル操作

![20240418122905](https://static-docs.nocobase.com/20240418122905.png)

- [フィルタ](/handbook/ui/actions/types/filter)
- [追加](/handbook/ui/actions/types/add-new)
- [削除](/handbook/ui/actions/types/delete)
- [更新](/handbook/ui/actions/types/refresh)
- [インポート](/handbook/action-import)
- [エクスポート](/handbook/action-export)

### 行操作

![20240419222251](https://static-docs.nocobase.com/20240419222251.png)

- [編集](/handbook/ui/actions/types/edit)
- [削除](/handbook/ui/actions/types/delete)
- [ポップアップ](/handbook/ui/actions/types/pop-up)
- [記録の更新](/handbook/ui/actions/types/update-record)
- [カスタムリクエスト](/handbook/action-custom-request)
- [ワークフローをトリガー](/handbook/workflow/manual/triggers/custom-action)

