# よくある質問

## JSON設定はどのように使用しますか？

グラフコンポーネントの参照リンクを通じて、ドキュメントやデモを確認し、異なるコンポーネントがサポートするプロパティ設定をJSONキーバリューの形式で構成します。

<img src="https://static-docs.nocobase.com/202404212046877.png"/><br />

<img src="https://static-docs.nocobase.com/202404212047075.png"/>

### 列の順序を入れ替える例

テーブルで使用されるコンポーネントはAntdのテーブルコンポーネントです。参照リンク <a href="https://ant.design/components/table/" target="_blank">Table</a> を開き、APIセクションで対応するコンポーネントのすべてのサポートされている設定プロパティを確認します。

<img src="https://static-docs.nocobase.com/202404212052108.png"/>

列の順序を調整するには、`columns`設定を変更する必要があります。例：

```ts
{
  "columns": [
    { "key": "fieldName1", "dataIndex": "fieldName1", "title": "fieldTitle1" },
    { "key": "fieldName2", "dataIndex": "fieldName2", "title": "fieldTitle2" }
  ]
}
```

## JSON設定は関数の使用をサポートしていますか？

JavaScript表現は`{{}}`で囲むことができます。例：

```json
{
  "label": {
    "type": "inner",
    "content": "{{ ({ percent }) => `${(percent * 100).toFixed(0)}%` }}"
  }
}
```

## グラフフィルターブロックのカスタムフィールドの主な使用シーンは？

1つのグラフブロック内に異なるデータテーブルのグラフがあり、同じフィルターフィールドでこれらのグラフをフィルタリングする必要がある場合、[カスタムフィールド](./user/filter.md#custom-fields)を使用できます。例えば、特定の期間内のデータをフィルタリングする必要があります。

