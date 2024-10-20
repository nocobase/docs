# 暗号化

<PluginInfo commercial="true" name="field-encryption"></PluginInfo>

## 概要

顧客の電話番号、メールアドレス、カード番号などのプライベートなビジネスデータは暗号化され、暗号化後は密文の形式でデータベースに保存されます。

![20240802175127](https://static-docs.nocobase.com/20240802175127.png)

## 環境変数

:::warning
`ENCRYPTION_FIELD_KEY` が失われると、データの復号ができなくなります。
:::

暗号化機能を使用するには、`ENCRYPTION_FIELD_KEY` 環境変数を設定する必要があります。この環境変数は暗号化キーであり、32文字の長さが必要です。例えば：

```bash
ENCRYPTION_FIELD_KEY='2%&glK;<UA}eMxJVc53-4G(rTi0vg@J]'
```

## フィールド設定

![20240802173721](https://static-docs.nocobase.com/20240802173721.png)

## 暗号化後のフィルタリングへの影響

暗号化されたフィールドは、等しい、不等しい、存在する、および存在しないの条件のみをサポートしています。

![20240802174042](https://static-docs.nocobase.com/20240802174042.png)

## 例

追加予定

