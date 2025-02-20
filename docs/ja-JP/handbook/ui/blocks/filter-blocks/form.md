# フォームフィルターブロック

## 概要

フォームフィルターブロックは、データブロックと接続でき、接続後にデータブロックにフィルタリング機能を提供します。

## ブロックの追加

<video width="100%" height="440" controls>
    <source src="https://static-docs.nocobase.com/20240426172722.mp4" type="video/mp4">
</video>

## ブロック設定項目

![20240421172115](https://static-docs.nocobase.com/20240421172115.png)

### データブロックの接続

例：フォームフィルターブロックが詳細データブロックに接続し、連動を実現します。

<video width="100%" height="440" controls>
    <source src="https://static-docs.nocobase.com/20240421170947.mp4" type="video/mp4">
</video>

詳細については、[データブロックの接続](/handbook/ui/blocks/block-settings/connect-block)を参照してください。

- [ブロックタイトルの編集](/handbook/ui/blocks/block-settings/block-title)
- [連動ルール](/handbook/ui/blocks/block-settings/linkage-rule)
- [ブロックテンプレートとして保存](/handbook/block-template)

## フィールド設定

### 本表フィールド

![20240421171135](https://static-docs.nocobase.com/20240421171135.png)

### リレーションテーブルフィールド
> v1.3.14-beta以降のバージョンでは、「多対多」と「一対多」のリレーションフィールドの設定がサポートされています。

リレーションテーブルのフィールドをフィルタ条件として使用できます。

例：注文表に多対一のリレーションフィールド「顧客」があり、顧客名と電話番号をフィルタ条件として注文をフィルタリングします。

<video width="100%" height="440" controls>
<source src="https://static-docs.nocobase.com/20240421171437.mp4" type="video/mp4">
</video>

### フィールドのデフォルト値を設定する

一般的な[フォームブロック](/handbook/ui/blocks/data-blocks/form)と同様に、通常のフィールドおよびリレーションフィールドにデフォルト値を設定できます。**フィールドにデフォルト値が設定されている場合、ページが初めてレンダリングされる際に自動的にフィルタリング操作がトリガーされ、関連するデータブロックに一致するデータが表示されます。**

## 設定操作

![フィルタリング操作](https://static-docs.nocobase.com/20240421171839.png)

### リセットボタン

デフォルトでは、「リセット」ボタンをクリックするとフィールドのデフォルト値が保持されます。フィールドのデフォルト値をクリアしたい場合は、設定項目を開き、「デフォルト値をクリア」オプションを有効にしてください。

![20240716183611](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240716183611.png)

