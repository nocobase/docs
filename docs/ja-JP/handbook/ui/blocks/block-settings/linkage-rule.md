# リンクルール

## 概要

リンクルールは、ユーザーの行動に基づいてフォームフィールドの状態を動的に調整することを可能にします。例えば、表示/非表示、必須/任意、値の設定などが挙げられます。現在、リンクルールの設定がサポートされているのは、[フォームブロック](https://docs-cn.nocobase.com/handbook/ui/blocks/data-blocks/form#%E8%81%94%E5%8A%A8%E8%A7%84%E5%88%99)、[詳細ブロック](https://docs-cn.nocobase.com/handbook/ui/blocks/data-blocks/details#%E8%81%94%E5%8A%A8%E8%A7%84%E5%88%99)、[操作ボタン](https://docs-cn.nocobase.com/handbook/ui/actions/action-settings/linkage-rule)、[サブフォーム](https://docs-cn.nocobase.com/handbook/ui/fields/specific/nester)（v1.3.17-beta以上が必要）、[サブテーブル](https://docs-cn.nocobase.com/handbook/ui/fields/specific/sub-table)（v1.3.17-beta以上が必要）です。

![20240408100711](https://static-docs.nocobase.com/20240408100711.png)

![20240408100757](https://static-docs.nocobase.com/20240408100757.png)

## 使用手順

1. **フォームフィールドの設定**：ルールで使用するすべてのフォームフィールドを設定する必要があります。これにより、ルールの有効性と正確性が保証されます。

2. **条件トリガー**：ルール内の条件が満たされると（必須ではありません）、下部の属性変更操作が自動的に実行されます。

3. **複数ルールのサポート**：1つのフォームに複数のリンクルールを設定できます。複数のルール条件が同時に満たされる場合、システムはルールの順序に従って前から後ろへ結果を実行します。

4. **ルール管理**：カスタム名の設定、並び替え、削除、有効化、無効化、コピーなどの機能をサポートします。

5. **定数/変数のサポート**：フィールドの値設定や条件設定において、定数または変数を使用できます。変数の内容については、[変数](/handbook/ui/variables)を参照してください。

### 値の設定

例：予測された年次購入額に基づいて、顧客のレベルを自動的に評価し設定します（例：A+、A、A-）。

- 年次購入額が20,000を超える場合、顧客レベルはA+です。

![20240408102241](https://static-docs.nocobase.com/20240408102241.png)

- 年次購入額が10,000を超え20,000以下の場合、顧客レベルはAです。

![20240408102303](https://static-docs.nocobase.com/20240408102303.png)

- 年次購入額が10,000未満の場合、顧客レベルはA-です。

![20240408102324](https://static-docs.nocobase.com/20240408102324.png)

### 必須項目

例：プロモーションの有無に基づいて、商品プロモーション価格の必須入力を制御します。

- プロモーションがtrueの場合、プロモーション価格は必須です。

![20240408105031](https://static-docs.nocobase.com/20240408105031.png)

- プロモーションがfalseの場合、プロモーション価格は必須ではありません。

![20240408105115](https://static-docs.nocobase.com/20240408105115.png)

### 表示/非表示

例：プロモーションの有無に基づいて、プロモーション価格入力ボックスの表示を制御します。

- プロモーションがtrueの場合、プロモーション価格は表示され、必須です。

![20240408115240](https://static-docs.nocobase.com/20240408115240.png)

- プロモーションがfalseの場合、プロモーション価格は非表示で、必須ではありません。

![20240408115338](https://static-docs.nocobase.com/20240408115338.png)
