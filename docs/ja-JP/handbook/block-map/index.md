# 地図区ブロック

<PluginInfo name="block-map"></PluginInfo>

## 紹介

地図区ブロックは、地図フィールドを表示および管理するための重要なツールであり、ポイント、ライン、円、およびポリゴンの4種類の地図フィールドをサポートしています。

## インストール

このプラグインはプリセットされていますが、使用する前に有効化する必要があります。

![20240421120958](https://static-docs.nocobase.com/20240421120958.png)

プラグインを有効化した後、地図の認証情報を設定する必要があります。

![20240421121032](https://static-docs.nocobase.com/20240421121032.png)

設定が完了すると、データテーブルに地図フィールドを追加できます。

![20240426171356](https://static-docs.nocobase.com/20240426171356.png)

## ブロックの追加

地図フィールドが含まれているデータテーブルにのみ、地図区ブロックを追加できます。

![20240408194209](https://static-docs.nocobase.com/20240408194209.png)

![20240408194420](https://static-docs.nocobase.com/20240408194420.png)

1. **地図フィールド：** 地図要素の種類（ポイント、ライン、ポリゴン）。
2. **マーカーフィールド：** 地図ラベル（ポイントタイプのみ対応）。

### ポイント

**アプリケーションシナリオ:** 小売店のアウトレットの配布です。

![20240408195630](https://static-docs.nocobase.com/20240408195630.png)

### ライン

ラインは一連の地図ポイントで構成され、運送履歴などのパスを示すのに使用されます。

![20240408201608](https://static-docs.nocobase.com/20240408201608.png)

### 円

![20240408201939](https://static-docs.nocobase.com/20240408201939.png)

### ポリゴン

**適用シナリオ：** エリア計画やゾーニングに最適です。

![ポリゴン](https://static-docs.nocobase.com/20240408200546.png)

## ブロック設定項目

### 接続順序フィールド

順序フィールドに基づいてポイントを順次接続します。

![20240408202645](https://static-docs.nocobase.com/20240408202645.png)

![20240421121917](https://static-docs.nocobase.com/20240421121917.png)

![20240422101027](https://static-docs.nocobase.com/20240422101027.png)

### マップのデフォルトズームレベル

デフォルトのズームレベルは13ですが。

![20240408202854](https://static-docs.nocobase.com/20240408202854.png)

### データ範囲の設定

**例：** 発送済みの運送状をフィルタリング（関係フィールドを使用）し、指定されたデータ範囲内に該当する運送記録のみを表示します。

![20240422101250](https://static-docs.nocobase.com/20240422101250.png)

詳細については、[データ範囲の設定](/handbook/ui/blocks/block-settings/data-scope)をご参照ください。

### ブロックの高さを設定

**例：** マップブロックの高さを調整してレイアウトに合わせます。

![20240605221111](https://static-docs.nocobase.com/20240605221111.gif)

詳細については、[ブロックの高さ](/handbook/ui/blocks/block-settings/block-height)をご参照ください。

- [ブロックタイトルの編集](/handbook/ui/blocks/block-settings/block-title)
- [データブロックの接続](/handbook/ui/blocks/block-settings/connect-block)
- [ブロックテンプレートとして保存](/handbook/block-template)

## 設定操作

![20240421122020](https://static-docs.nocobase.com/20240421122020.png)

### 一括選択ポイント

![20240422102334](https://static-docs.nocobase.com/20240422102334.gif)

- [フィルタ](/handbook/ui/actions/types/filter)
- [追加](/handbook/ui/actions/types/add-new)
- [更新](/handbook/ui/actions/types/refresh)
- [一括更新](/handbook/action-bulk-update)
- [一括編集](/handbook/action-bulk-edit)

