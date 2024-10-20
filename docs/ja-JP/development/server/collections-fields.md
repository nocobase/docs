# データテーブルとフィールド

## 基本概念

データモデリングはアプリケーションの最も基本的な基盤であり、NocoBaseアプリケーションではデータテーブル（コレクション）とフィールドを用いてデータモデリングを行い、モデリングはデータベーステーブルにマッピングされて永続化されます。

### コレクション

コレクションは同種のデータの集合であり、NocoBaseではデータベーステーブルの概念に対応します。例えば、注文、商品、ユーザー、コメントなどはすべてコレクションとして定義できます。異なるコレクションは名前で区別され、含まれるフィールドは `fields` で定義します。例：

```ts
db.collection({
  name: 'posts',
  fields: [
    { name: 'title', type: 'string' },
    { name: 'content', type: 'text' },
    // ...
  ],
});
```

定義が完了すると、コレクションは一時的にメモリ内に存在します。データベースに同期させるには、[`db.sync()`](/api/database#sync) メソッドを呼び出す必要があります。

### フィールド

フィールドはデータベーステーブルの「フィールド」の概念に対応し、各データテーブル（コレクション）には複数のフィールドがあります。例：

```ts
db.collection({
  name: 'users',
  fields: [
    { type: 'string', name: 'name' },
    { type: 'integer', name: 'age' },
    // 他のフィールド
  ],
});
```

フィールド名（`name`）とフィールドタイプ（`type`）は必須項目です。異なるフィールドはフィールド名（`name`）で区別され、`name` と `type` 以外にも、フィールドタイプに応じてさらなる設定情報を持つことができます。すべてのデータベースフィールドタイプと設定の詳細は、APIリファレンスの[組み込みフィールドタイプリスト](/api/database/field#内置字段类型列表)セクションを参照してください。

## 例

開発者にとって、通常のデータテーブルとは異なる機能的なデータテーブルを作成し、それをプラグインの一部として固め、他のデータ処理フローと組み合わせて完全な機能を形成することがよくあります。

次に、シンプルなオンラインストアプラグインの例を用いて、プラグインのデータテーブルをモデリングし管理する方法を紹介します。あなたが既に[最初のプラグインの作成](/development/your-first-plugin)を学んでいると仮定し、前回のプラグインコードを基に開発を続けます。ただし、プラグインの名前は`hello`から`shop-modeling`に変更します。

### プラグイン内でのデータテーブルの定義と作成

店舗にとって、まず商品データテーブルを作成する必要があります。名前を`products`とします。[`db.collection()`](/api/database#collection)を直接呼び出す方法とは若干異なり、プラグイン内では複数のファイルで定義されたデータテーブルを一度にインポートする便利な方法を使用します。したがって、商品データテーブルの定義用のファイルを`collections/products.ts`という名前で作成し、以下の内容を記入します：

```ts
export default {
  name: 'products',
  fields: [
    {
      type: 'string',
      name: 'title',
    },
    {
      type: 'integer',
      name: 'price',
    },
    {
      type: 'boolean',
      name: 'enabled',
    },
    {
      type: 'integer',
      name: 'inventory',
    },
  ],
};
```

NocoBaseのデータテーブル構造定義は標準のJSON形式を直接使用できることがわかります。`name` と `fields` は必須項目であり、データテーブル名とそのテーブル内のフィールド定義を表します。フィールド定義では、Sequelizeに似て、主キー（`id`）、データ作成時間（`createdAt`）、データ更新時間（`updatedAt`）などのシステムフィールドが自動的に作成されます。特別なニーズがある場合は、同名の設定で上書き定義することが可能です。

このファイルで定義したデータテーブルは、プラグインのメインクラスの `load()` ライフサイクル内で `db.import()` を使用してインポートし、定義を完了させることができます。以下のように：

```ts
import path from 'path';
import { Plugin } from '@nocobase/server';

export default class ShopPlugin extends Plugin {
  async load() {
    await this.db.import({
      directory: path.resolve(__dirname, 'collections'),
    });

    this.app.acl.allow('products', '*');
    this.app.acl.allow('categories', '*');
    this.app.acl.allow('orders', '*');
  }
}
```

また、テストを容易にするために、一時的にこれらのテーブル内のデータリソースに対する全てのアクセス権を許可します。後で[権限管理](/development/guide/acl)でリソースの権限管理について詳しく説明します。

これにより、プラグインがメインアプリケーションにロードされる際、定義した `products` テーブルもデータベース管理インスタンスのメモリにロードされます。また、NocoBaseの定義されたデータテーブルリソースマッピングに基づき、アプリケーションのサービス起動後に自動的に対応するCRUD HTTP APIが生成されます。

クライアントから以下のURLにリクエストすると、対応する応答結果が得られます：

- `GET /api/products:list`：全商品データリストを取得
- `GET /api/products:get?filterByTk=<id>`：指定IDの商品データを取得
- `POST /api/products`：新しい商品データを作成
- `PUT /api/products:update?filterByTk=<id>`：商品データを更新
- `DELETE /api/products:destroy?filterByTk=<id>`：商品データを削除

### 関係テーブルと関連フィールドの定義

前述の例では、商品データテーブルを1つだけ定義しましたが、実際には商品はカテゴリー、ブランド、供給者などに関連付ける必要があります。これらの関連関係は、関係テーブルを定義することで実現できます。例えば、商品カテゴリーを保存するための `categories` テーブルを定義し、商品テーブルに `category` フィールドを追加してカテゴリーテーブルに関連付けることができます。

新たに `collections/categories.ts` というファイルを作成し、内容を記入します：

```ts
export default {
  name: 'categories',
  fields: [
    {
      type: 'string',
      name: 'title',
    },
    {
      type: 'hasMany',
      name: 'products',
    },
  ],
};
```

`categories` テーブルには、タイトルとそのカテゴリに関連するすべての製品を表す一対多のフィールドを定義しています。この内容については後ほど詳しく説明します。プラグインの主クラス内で `db.import()` メソッドを使用して `collections` ディレクトリ内のすべてのデータベース定義をインポートしているため、ここで追加した `categories` テーブルも自動的にデータベース管理インスタンスにインポートされます。

次に、`collections/products.ts` ファイルを修正し、`fields` に `category` フィールドを追加します：

```ts
{
  name: 'products',
  fields: [
    // ...
    {
      type: 'belongsTo',
      name: 'category',
      target: 'categories',
    }
  ]
}
```

`products` テーブルに追加した `category` フィールドは `belongsTo` タイプであり、その `target` 属性は `categories` テーブルを指しています。これにより、`products` テーブルと `categories` テーブルの間に多対一の関係が定義されます。また、`categories` テーブルで定義した `hasMany` フィールドと組み合わせることで、1つの製品が複数のカテゴリに関連付けられ、1つのカテゴリには複数の製品が含まれる関係を実現できます。通常、`belongsTo` と `hasMany` は対になって、2つのテーブルにそれぞれ定義されます。

2つのテーブル間の関係を定義した後、同様にHTTP APIを介して関連データを直接リクエストできます：

- `GET /api/products:list?appends=category`：すべての製品データを取得し、関連するカテゴリデータも含まれます。
- `GET /api/products:get?filterByTk=<id>&appends=category`：指定されたIDの製品データを取得し、関連するカテゴリデータも含まれます。
- `GET /api/categories/<categoryId>/products:list`：指定されたカテゴリ内のすべての製品データを取得します。
- `POST /api/categories/<categoryId>/products`：指定されたカテゴリ内に新しい製品を作成します。

一般的なORMフレームワークと同様に、NocoBaseには4種類のリレーションシップフィールドタイプが組み込まれています。詳細はAPIフィールドタイプに関する章を参照してください：

- [`belongsTo` タイプ](/api/database/field#belongsto)
- [`belongsToMany` タイプ](/api/database/field#belongstomany)
- [`hasMany` タイプ](/api/database/field#hasmany)
- [`hasOne` タイプ](/api/database/field#hasone)

### 既存データベースの拡張

上記の例では、製品テーブルとカテゴリテーブルが既に存在します。販売プロセスを提供するために、注文テーブルがさらに必要です。`collections` ディレクトリに新しい `orders.ts` ファイルを追加し、`orders` テーブルを定義します：

```ts
export default {
  name: 'orders',
  fields: [
    {
      type: 'uuid',
      name: 'id',
      primaryKey: true,
    },
    {
      type: 'belongsTo',
      name: 'product',
    },
    {
      type: 'integer',
      name: 'quantity',
    },
    {
      type: 'integer',
      name: 'totalPrice',
    },
    {
      type: 'integer',
      name: 'status',
    },
    {
      type: 'string',
      name: 'address',
    },
    {
      type: 'belongsTo',
      name: 'user',
    },
  ],
};
```

簡略化のため、注文テーブルと製品の関連は多対一の関係として定義しますが、実際のビジネスでは多対多やスナップショットなどの複雑なモデルが必要になる場合があります。注文は特定の製品に関連付けられ、さらにユーザーとの関連定義も追加しました。ユーザーはNocoBaseに組み込まれたプラグイン管理のデータテーブルです（詳細は[ユーザープラグインのコード](https://github.com/nocobase/nocobase/tree/main/packages/plugins/users)を参照）。既存のユーザーテーブルに「1人のユーザーが持つ複数の注文」の関係を拡張したい場合、現在のshop-modelingプラグイン内で新しいデータテーブルファイル `collections/users.ts` を追加します。JSONデータテーブル設定を直接エクスポートするのとは異なり、ここでは `@nocobase/database` パッケージの `extend()` メソッドを使用して、既存のデータテーブルを拡張定義します：

```ts
import { extend } from '@nocobase/database';

export default extend({
  name: 'users',
  fields: [
    {
      type: 'hasMany',
      name: 'orders'
    }
  ]
});
```

これにより、既存のユーザーテーブルにも `orders` 関連フィールドが追加され、`GET /api/users/<userId>/orders:list` を通じて指定されたユーザーのすべての注文データを取得できます。

この方法は、他のプラグインで定義されたデータテーブルを拡張する際に非常に便利です。これにより、他の既存プラグインは新しいプラグインに逆依存せず、単方向の依存関係のみが形成され、拡張面で一定の程度のデカップリングが容易になります。

### フィールドタイプの拡張

注文テーブルを定義する際に `id` フィールドに `uuid` タイプを使用しましたが、UUIDは長く、スペースを無駄にすることがあるため、より適したフィールドタイプを使用したい場合があります。たとえば、日付情報を含む複雑な番号ロジックやSnowflakeアルゴリズムを使用する場合、カスタムフィールドタイプを拡張する必要があります。

Snowflake ID生成アルゴリズムを直接適用し、`snowflake` フィールドタイプを拡張する場合、`fields/snowflake.ts` ファイルを作成します：

```ts
import { DataTypes } from 'sequelize';
// アルゴリズムツールキットをインポート
import { Snowflake } from 'nodejs-snowflake';
// フィールドタイプの基底クラスをインポート
import { Field, BaseColumnFieldOptions } from '@nocobase/database';

export interface SnowflakeFieldOptions extends BaseColumnFieldOptions {
  type: 'snowflake';
  epoch: number;
  instanceId: number;
}

export class SnowflakeField extends Field {
  get dataType() {
    return DataTypes.BIGINT;
  }

  constructor(options: SnowflakeFieldOptions, context) {
    super(options, context);

    const {
      epoch: custom_epoch,
      instanceId: instance_id = process.env.INSTANCE_ID
        ? Number.parseInt(process.env.INSTANCE_ID)
        : 0,
    } = options;
    this.generator = new Snowflake({ custom_epoch, instance_id });
  }

  setValue = (instance) => {
    const { name } = this.options;
    instance.set(name, this.generator.getUniqueID());
  };

  bind() {
    super.bind();
    this.on('beforeCreate', this.setValue);
  }

  unbind() {
    super.unbind();
    this.off('beforeCreate', this.setValue);
  }
}

export default SnowflakeField;
```

その後、プラグインのメインファイルでデータベースに新しいフィールドタイプを登録します：

```ts
import SnowflakeField from './fields/snowflake';

export default class ShopPlugin extends Plugin {
  initialize() {
    // ...
    this.db.registerFieldTypes({
      snowflake: SnowflakeField,
    });
    // ...
  }
}
```

これにより、注文テーブルで `snowflake` フィールドタイプを使用できるようになります：

```ts
export default {
  name: 'orders',
  fields: [
    {
      type: 'snowflake',
      name: 'id',
      primaryKey: true
    },
    // ...他のフィールド
  ]
}
```

## 小結

上記の例を通じて、プラグイン内でのデータモデリングの基本を理解できました。具体的には：

- データテーブルと通常のフィールドの定義
- 関連テーブルと関連フィールドの関係の定義
- 既存のデータテーブルのフィールドの拡張
- 新しいフィールドタイプの追加

この章で取り扱ったコードは、完全なサンプルパッケージ [packages/samples/shop-modeling](https://github.com/nocobase/nocobase/tree/main/packages/samples/shop-modeling) にまとめており、ローカルで直接実行して効果を確認できます。

