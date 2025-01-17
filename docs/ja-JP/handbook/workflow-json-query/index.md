# JSONクエリ

<PluginInfo name="workflow-json-query" link="/handbook/workflow-json-query" commercial="true"></PluginInfo>

複数のノードが生成した複雑なJSONデータを解析し、後続のノードで使用できるようにします。たとえば、SQL操作やHTTPリクエストノードの結果はJSON形式のデータである可能性があり、このノードを使用して必要な値や変数形式に解析し、後続のノードで利用できるようにします。

## 使用マニュアル

### ノードの作成

ワークフロー設定画面で、プロセス内のプラス（「+」）ボタンをクリックして「JSONクエリ」ノードを追加します：

![ノードの作成](https://static-docs.nocobase.com/7de796517539ad9dfc88b7160f1d0dd7.png)

:::info{title=ヒント}
通常、JSONクエリノードは他のデータノードの下に配置され、その出力を解析するために使用します。
:::

### ノードの設定

#### 解析エンジン

JSONクエリノードは、異なる解析エンジンを使用してさまざまな解析構文をサポートします。自身の好みや各エンジンの特性に応じて選択できます。現在、三つの解析エンジンがサポートされています：

- [JMESPath](https://jmespath.org/)
- [JSONPath Plus](https://jsonpath-plus.github.io/JSONPath/docs/ts/)
- [JSONata](https://jsonata.org/)

![解析エンジンの選択](https://static-docs.nocobase.com/29be3b92a62b7d20312d1673e749f2ec.png)

#### データソース

データソースは上流ノードの結果でも、プロセスコンテキスト内のデータオブジェクトでもかまいません。通常、構造化されていないデータオブジェクトであり、たとえばSQLノードの結果やHTTPリクエストノードの結果が該当します。

![データソース](https://static-docs.nocobase.com/f5a97e20693b3d30b3a994a576aa282d.png)

:::info{title=ヒント}
通常、データテーブル関連ノードのデータオブジェクトはデータテーブル設定情報によって構造化されているため、一般的にはJSONクエリノードを使用して解析する必要はありません。
:::

#### 解析式

解析の要件と解析エンジンの違いに基づいて、カスタム解析式を作成します。

![解析式](https://static-docs.nocobase.com/181abd162fd32c09b62f6aa1d1cb3ed4.png)

:::info{title=ヒント}
異なる解析エンジンは異なる解析構文を提供します。詳細はリンク内のドキュメントを参照してください。
:::

`v1.0.0-alpha.15` バージョン以降、式は変数の使用をサポートします。変数は具体的なエンジンが実行される前に予解析され、文字列テンプレートの規則に従って変数が具体的な文字列値に置き換えられ、式の他の静的文字列と結合されて最終的な式が生成されます。この機能は、動的に式を構築する必要がある場合に非常に便利です。たとえば、特定のJSONコンテンツが動的なキーを必要とする場合です。

#### プロパティマッピング

解析の結果がオブジェクト（またはオブジェクト配列）である場合、プロパティマッピングを使用して必要なプロパティを子変数にマッピングし、後続のノードで使用できるようにします。

![プロパティマッピング](https://static-docs.nocobase.com/b876abe4ccf6b4709eb8748f21ef3527.png)

:::info{title=ヒント}
オブジェクト（またはオブジェクト配列）の結果に対してプロパティマッピングを行わない場合、ノードの結果に全体のオブジェクト（またはオブジェクト配列）が1つの変数として保存され、オブジェクトのプロパティ値を直接変数として使用することはできません。
:::

### 例

解析するデータが前処理のSQLノードであり、データを取得するためのもので、その結果が一連の注文データであると仮定します：

```json
[
  {
    "id": 1,
    "products": [
      {
        "id": 1,
        "title": "Product 1",
        "price": 100,
        "quantity": 1
      },
      {
        "id": 2,
        "title": "Product 2",
        "price": 120,
        "quantity": 2
      }
    ]
  },
  {
    "id": 2,
    "products": [
      {
        "id": 3,
        "title": "Product 3",
        "price": 130,
        "quantity": 1
      },
      {
        "id": 4,
        "title": "Product 4",
        "price": 140,
        "quantity": 2
      }
    ]
  }
]
```

もし、データ内の2つの注文の合計金額を解析して計算し、それぞれの注文IDと組み合わせたオブジェクトを作成して、注文の合計金額を更新する必要がある場合は、以下の手順に従ってください。

1. JSONata解析エンジンを選択します。
2. SQLノードの結果をデータソースとして選択します。
3. JSONata式`$[0].{"id": id, "total": products.(price * quantity)}`を使用して解析します。
4. 属性マッピングを選択し、`id`と`total`をサブ変数にマッピングします。

最終的な解析結果は以下の通りです。

```json
[
  {
    "id": 1,
    "total": 340
  },
  {
    "id": 2,
    "total": 410
  }
]
```

その後、完成した注文配列から値をループして、注文の合計金額を更新します。

![対応する注文の総額を更新](https://static-docs.nocobase.com/b3329b0efe4471f5eed1f0673bef740e.png)

