# データテーブルの設定方法

NocoBase では、データテーブルを設定する方法が3つあります：

<img src="./cm.svg" style="max-width: 800px;" />

## インターフェースを通じてデータテーブルを設定する

ビジネスデータは一般的にインターフェースを通じて設定することをお勧めします。NocoBase プラットフォームでは、データテーブルを設定するための2つのインターフェースが用意されています。

### 一般的な表形式インターフェース

<img src="./table.jpg" style="max-width: 800px;" />

### グラフィカル設定インターフェース

<img src="./graph.jpg" style="max-width: 800px;" />

## プラグインコード内で定義する

プラグイン内でカスタムデータテーブルを定義するには、プラグインの `src/server/collections/*.ts` ディレクトリに配置し、内容は以下のようになります：

```ts
import { defineCollection } from '@nocobase/database';

export default defineCollection({
  name: 'examples',
});
```

既存のコレクションの設定を拡張するには、`extendCollection()` を使用します。

```ts
import { extendCollection } from '@nocobase/database';

export default extendCollection({
  name: 'examples',
});
```

関連APIの参考

- [defineCollection()](/api/database#definecollection)
- [extendCollection()](/api/database#extendcollection)

:::info{title="ヒント"}
プラグイン内で設定されたコレクションは、プラグインが有効化されると自動的にデータベースと同期され、対応するデータテーブルとフィールドが生成されます。プラグインが既に有効化されている場合は、データテーブルの同期問題を解決するために、アップグレードコマンド `yarn nocobase upgrade` を使用する必要があります。
:::

## REST API を通じてデータテーブルを管理する

第三者は、HTTP インターフェースを通じてデータテーブルを管理することも可能です（権限の設定が必要です）。

### コレクション

```bash
GET     /api/collections
POST    /api/collections
GET     /api/collections/<collectionName>
PUT     /api/collections/<collectionName>
DELETE  /api/collections/<collectionName>
```

### コレクションフィールド

```bash
GET     /api/collections/<collectionName>/fields
POST    /api/collections/<collectionName>/fields
GET     /api/collections/<collectionName>/fields/<fieldName>
PUT     /api/collections/<collectionName>/fields/<fieldName>
DELETE  /api/collections/<collectionName>/fields/<fieldName>
```

