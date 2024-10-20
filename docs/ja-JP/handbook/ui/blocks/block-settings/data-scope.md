# データ範囲の設定

## 概要

データ範囲の設定とは、データブロックに対してデフォルトのフィルタ条件を定義することを指します。ユーザーは異なるニーズに応じて、ブロックのデータ範囲を柔軟に調整できます。

## 使用マニュアル

![20240407180322](https://static-docs.nocobase.com/20240407180322.png)

フィルタフィールドは、現在のテーブルのフィールドや関連テーブルのフィールド（最大三層の関係）から選択できます。

![20240422113637](https://static-docs.nocobase.com/20240422113637.png)

### 演算子

異なるタイプのフィールドは、それぞれ異なる演算子をサポートしています。例えば、テキストフィールドでは「等しい」「不等しい」「含む」などの演算子が、数値フィールドでは「大きい」「小さい」などの演算子が、日付フィールドでは「範囲内」や「特定の日付以前」などの演算子がサポートされています。

![20240424154003](https://static-docs.nocobase.com/20240424154003.png)

### 静的値

例：注文の「状態」を「発送済み」に設定します。

<video width="100%" height="440" controls>
      <source src="https://static-docs.nocobase.com/20240415204206.mp4" type="video/mp4">
</video>

### 変数値

例：「発送日」が「昨日」以前である場合。

![20240422090134](https://static-docs.nocobase.com/20240422090134.png)

<video width="100%" height="440" controls>
      <source src="https://static-docs.nocobase.com/20240415214709.mp4" type="video/mp4">
</video>

変数に関する詳細は[変数](/handbook/ui/variables)をご参照ください。

