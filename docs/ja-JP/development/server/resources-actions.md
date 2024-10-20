# リソースと操作

ウェブ開発の分野では、RESTfulの概念について耳にしたことがあるかもしれません。NocoBaseもこのリソースの概念を取り入れ、システム内のさまざまなエンティティをマッピングしています。例えば、データベース内のデータ、ファイルシステム内のファイル、特定のサービスなどです。しかし、NocoBaseは実践的な考慮から、RESTfulの規約を完全には遵守しておらず、むしろ[Google Cloud API設計ガイド](https://cloud.google.com/apis/design)の規範を参考にし、さまざまなシーンに適応できるようにいくつかの拡張を行っています。

## 基本概念

RESTfulにおけるリソースの概念と同様に、システムが外部に提供する操作可能なオブジェクトです。これにはデータテーブル、ファイル、その他のカスタムオブジェクトが含まれます。

操作は主にリソースの読み取りと書き込みを指し、通常はデータの参照、作成、更新、削除に使用されます。NocoBaseは操作を定義することでリソースへのアクセスを実現しており、操作の核心はリクエストを処理し、Koaと互換性のあるミドルウェア関数です。

### データテーブルの自動マッピング

現在のリソースは主にデータテーブル内のデータに焦点を当てており、NocoBaseはデフォルトでデータベース内のデータテーブルを自動的にリソースにマッピングします。また、サーバー側のデータインターフェースも提供しています。そのため、デフォルトでは`db.collection()`を使用してデータテーブルを定義することで、NocoBaseのHTTP APIを通じてこのデータテーブルのデータリソースにアクセスできます。自動生成されたリソースの名前はデータテーブルの定義に基づいており、例えば`db.collection({ name: 'users' })`で定義されたデータテーブルは、リソース名が`users`になります。

さらに、これらのデータリソースには一般的なCRUD操作が組み込まれており、リレーショナルデータリソースには関連データの操作方法も内蔵されています。

簡単なデータリソースのデフォルト操作：

- [`list`](/api/actions#list)：データテーブルのデータリストを照会
- [`get`](/api/actions#get)：データテーブルの単一データを照会
- [`create`](/api/actions#create)：データテーブルに単一データを作成
- [`update`](/api/actions#update)：データテーブルの単一データを更新
- [`destroy`](/api/actions#destroy)：データテーブルの単一データを削除

リレーションリソースには、簡単なCRUD操作に加えて、デフォルトのリレーション操作もあります：

- [`add`](/api/actions#add)：データに関連付けを追加
- [`remove`](/api/actions#remove)：データから関連付けを削除
- [`set`](/api/actions#set)：データに関連付けを設定
- [`toggle`](/api/actions#toggle)：データに関連付けを追加または削除

例えば、記事データテーブルを定義し、データベースに同期させる場合：

```ts
app.db.collection({
  name: 'posts',
  fields: [{ type: 'string', name: 'title' }],
});

await app.db.sync();
```

その後、`posts`データリソースに対するすべてのCRUDメソッドは、HTTP APIを通じて直接呼び出すことができます：

```bash
# create
curl -X POST -H "Content-Type: application/json" -d '{"title":"first"}' http://localhost:13000/api/posts:create
# list
curl http://localhost:13000/api/posts:list
# update
curl -X PUT -H "Content-Type: application/json" -d '{"title":"second"}' http://localhost:13000/api/posts:update
# destroy
curl -X DELETE http://localhost:13000/api/posts:destroy?filterByTk=1
```

### カスタムアクション

デフォルトで提供されるCRUDなどの操作がビジネスシーンに合わない場合、特定のリソースに対してさらに多くの操作を拡張することが可能です。例えば、組み込み操作の追加処理や、デフォルトパラメータの設定が必要な場合です。

特定のリソースに対するカスタム操作として、記事テーブルの`作成`操作をオーバーライドする場合：

```ts
// app.resourcer.registerActions()と同等
// 記事リソースに対するcreate操作メソッドを登録
app.actions({
  async ['posts:create'](ctx, next) {
    const postRepo = ctx.db.getRepository('posts');
    await postRepo.create({
      values: {
        ...ctx.action.params.values,
        // 現在のユーザーを記事の作成者として限定
        userId: ctx.state.currentUserId,
      },
    });

    await next();
  },
});
```

これにより、ビジネスにおいて合理的な制限が追加され、ユーザーは他のユーザーの名前で記事を作成できなくなります。

全リソースに対するカスタム操作として、すべてのデータテーブルに`エクスポート`操作を追加する場合：

```ts
app.actions({
  // すべてのリソースにexportメソッドを追加し、データをエクスポート
  async export(ctx, next) {
    const repo = ctx.db.getRepository(ctx.action.resource);
    const results = await repo.find({
      filter: ctx.action.params.filter,
    });
    ctx.type = 'text/csv';
    // CSV形式に結合
    ctx.body = results
      .map((row) =>
        Object.keys(row)
          .reduce((arr, col) => [...arr, row[col]], [])
          .join(','),
      )
      .join('\n');

    await next();
  },
});
```

その後、以下のHTTP APIの形式でCSV形式のデータをエクスポートできます：

```bash
curl http://localhost:13000/api/<any_table>:export
```

### アクションパラメータ

クライアントのリクエストがサーバーに到達すると、関連するリクエストパラメータはルールに従って解析され、リクエストの`ctx.action.params`オブジェクトに配置されます。アクションパラメータは主に次の三つのソースから取得されます：

1. アクション定義時のデフォルトパラメータ
2. クライアントリクエストに含まれるパラメータ
3. その他のミドルウェアによる事前処理

真正な操作処理関数を実行する前に、上記の三つの部分のパラメータはこの順序で結合され、最終的に操作の実行関数に渡されます。複数のミドルウェアでも同様で、前のミドルウェアで処理されたパラメータは `ctx` と共に次のミドルウェアへ引き継がれます。

組み込みの操作で使用可能なパラメータについては、[@nocobase/actions](/api/actions) パッケージの内容を参照してください。カスタム操作を除き、クライアントからのリクエストは主にこれらのパラメータを使用します。カスタム操作はビジネスニーズに応じて必要なパラメータを拡張できます。

ミドルウェアの前処理では主に `ctx.action.mergeParams()` メソッドを使用し、異なるパラメータタイプに応じて異なる結合戦略が適用されます。具体的には [mergeParams()](/api/resourcer/action#mergeparams) メソッドの内容を参照してください。

組み込みのアクションのデフォルトパラメータは、結合時に `mergeParams()` メソッドを使用して各パラメータのデフォルト戦略に従って処理され、サーバー側で一定の操作制限を実施する目的を果たします。例えば：

```ts
app.resource({
  name: 'posts',
  actions: {
    create: {
      whitelist: ['title', 'content'],
      blacklist: ['createdAt', 'createdById'],
    },
  },
});
```

上記の定義では、`posts` リソースに対する `create` 操作が示され、`whitelist` と `blacklist` はそれぞれ `values` パラメータのホワイトリストとブラックリストを示します。つまり、`values` パラメータの中で `title` と `content` フィールドのみが許可され、`createdAt` と `createdById` フィールドは禁止されます。

### カスタムリソース

データ型リソースは独立リソースと関連リソースに分けられます：

- 独立リソース：`<collection>`
- 関連リソース：`<collection>.<association>`

```ts
// app.resourcer.define() と同等です

// 記事リソースの定義
app.resource({
  name: 'posts',
});

// 記事の著者リソースの定義
app.resource({
  name: 'posts.user',
});

// 記事のコメントリソースの定義
app.resource({
  name: 'posts.comments',
});
```

カスタムの必要がある場合は、データベーステーブルに依存しないリソース、たとえばメモリ内のデータや他のサービスのプロキシインターフェースなど、または既存のデータテーブルリソースに特定の操作を定義する場合が考えられます。

例えば、データベースに依存しない通知送信操作のリソースを定義します：

```ts
app.resource({
  name: 'notifications',
  actions: {
    async send(ctx, next) {
      await someProvider.send(ctx.request.body);
      next();
    },
  },
});
```

これにより、HTTP APIでは次のようにアクセスできます：

```bash
curl -X POST -d '{"title": "Hello", "to": "hello@nocobase.com"}' 'http://localhost:13000/api/notifications:send'
```

## 例

前回の [データテーブルとフィールドの例](/development/server/collections-fields#例) からのシンプルな店舗シナリオを引き続き使用し、リソースと操作に関連する概念をさらに理解します。ここでは、前回のデータテーブルの例を基にさらなるリソースと操作の定義を行うため、データテーブルの内容を繰り返し定義することはありません。

対応するデータテーブルが定義されていれば、商品や注文などのデータリソースに対してデフォルト操作を直接使用して最も基本的なCRUDシナリオを完了できます。

### デフォルト操作の上書き

時には、単一のデータに対する操作だけでなく、デフォルト操作のパラメータに一定の制御が必要な場合、デフォルトの操作を上書きできます。例えば、注文を作成する際、クライアントが `userId` を送信して注文の所属を表すべきではなく、サーバー側が現在のログインユーザーに基づいて注文の所属を決定すべきです。この場合、デフォルトの `create` 操作を上書きできます。シンプルな拡張の場合、プラグインのメインクラスに次のように記述します：

```ts
import { Plugin } from '@nocobase/server';
import actions from '@nocobase/actions';

export default class ShopPlugin extends Plugin {
  async load() {
    // ...
    this.app.resource({
      name: 'orders',
      actions: {
        async create(ctx, next) {
          ctx.action.mergeParams({
            values: {
              userId: ctx.state.user.id,
            },
          });

          return actions.create(ctx, next);
        },
      },
    });
  }
}
```

このように、プラグインが読み込まれる過程で注文データリソースに対してデフォルトの `create` 操作を上書きしましたが、操作パラメータを変更した後もデフォルトのロジックを呼び出しており、独自に記述する必要はありません。送信パラメータを変更する `mergeParams()` メソッドは、組み込みのデフォルト操作にとって非常に有用です。後で紹介します。

### データテーブルリソースのカスタム操作

組み込み操作がビジネスニーズを満たさない場合、カスタム操作を通じてリソースの機能を拡張できます。例えば、通常、注文には多くの状態が存在し、`status` フィールドの値を一連の列挙値として設計する場合：

- `-1`：キャンセル済み
- `0`：注文済み、未払い
- `1`：支払い済み、未発送
- `2`：発送済み、未受取
- `3`：受取済み、注文完了

この場合、カスタム操作を通じて注文の状態変更を実装できます。例えば、発注操作を行うことができますが、単純な場合には `update` 操作を通じて実現できるものの、支払い、受取などのより複雑な状況では、`update` のみでは意味が不明確でパラメータが混乱する問題が生じるため、カスタム操作を通じて実装することができます。

まず、発注情報テーブルの定義を追加し、`collections/deliveries.ts` に保存します：

```ts
export default {
  name: 'deliveries',
  fields: [
    {
      type: 'belongsTo',
      name: 'order',
    },
    {
      type: 'string',
      name: 'provider',
    },
    {
      type: 'string',
      name: 'trackingNumber',
    },
    {
      type: 'integer',
      name: 'status',
    },
  ],
};
```

注文テーブルに発送情報の関連フィールドを追加します（`collections/orders.ts`）：

```ts
export default {
  name: 'orders',
  fields: [
    // ...他のフィールド
    {
      type: 'hasOne',
      name: 'delivery',
    },
  ],
};
```

次に、プラグインの主クラスに対応する操作定義を追加します：

```ts
import { Plugin } from '@nocobase/server';

export default class ShopPlugin extends Plugin {
  async load() {
    // ...
    this.app.resource({
      name: 'orders',
      actions: {
        async deliver(ctx, next) {
          const { filterByTk } = ctx.action.params;
          const orderRepo = ctx.db.getRepository('orders');

          const [order] = await orderRepo.update({
            filterByTk,
            values: {
              status: 2,
              delivery: {
                ...ctx.action.params.values,
                status: 0,
              },
            },
          });

          ctx.body = order;

          next();
        },
      },
    });
  }
}
```

ここで、Repository はデータテーブルのデータリポジトリクラスであり、ほとんどのデータの読み書き操作はここで行われます。詳細は [Repository API](/api/database/repository) セクションを参照してください。

定義が完了したら、クライアントから HTTP API を通じて「発送」操作を呼び出せます：

```bash
curl \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{"provider": "SF", "trackingNumber": "SF1234567890"}' \
  '/api/orders:deliver/<id>'
```

同様に、支払い、受領などの操作をさらに定義することもできます。

### パラメータの統合

ユーザーが自分の注文のみを照会でき、キャンセルされた注文を照会できないように制限したい場合、action のデフォルトパラメータを定義することで実現できます：

```ts
import { Plugin } from '@nocobase/server';

export default class ShopPlugin extends Plugin {
  async load() {
    // ...
    this.app.resource({
      name: 'orders',
      actions: {
        // list 操作のデフォルトパラメータ
        list: {
          filter: {
            // users プラグインが拡張したフィルター演算子
            $isCurrentUser: true,
            status: {
              $ne: -1,
            },
          },
          fields: ['id', 'status', 'createdAt', 'updatedAt'],
        },
      },
    });
  }
}
```

ユーザーがクライアントから照会する際、リクエストの URL に他のパラメータを追加することもできます。例えば：

```bash
curl 'http://localhost:13000/api/orders:list?productId=1&fields=id,status,quantity,totalPrice&appends=product'
```

実際の照会条件は次のように統合されます：

```json
{
  "filter": {
    "$and": {
      "$isCurrentUser": true,
      "status": {
        "$ne": -1
      },
      "productId": 1
    }
  },
  "fields": [
    "id",
    "status",
    "quantity",
    "totalPrice",
    "createdAt",
    "updatedAt"
  ],
  "appends": ["product"]
}
```

期待通りの照会結果が得られます。

さらに、注文作成インターフェースがクライアントから注文番号（`id`）、総価格（`totalPrice`）などのフィールドを送信できないように制限するには、`create` 操作のデフォルトパラメータを定義することで制御できます：

```ts
import { Plugin } from '@nocobase/server';

export default class ShopPlugin extends Plugin {
  async load() {
    // ...
    this.app.resource({
      name: 'orders',
      actions: {
        create: {
          blacklist: ['id', 'totalPrice', 'status', 'createdAt', 'updatedAt'],
          values: {
            status: 0,
          },
        },
      },
    });
  }
}
```

このように、クライアントが意図的にこれらのフィールドを送信しても、フィルタリングされ、`ctx.action.params` パラメータセットには含まれなくなります。

さらに、商品が販売中で在庫がある場合にのみ注文できるような、より複雑な制限が必要な場合は、ミドルウェアを設定することで実現できます：

```ts
import { Plugin } from '@nocobase/server';

export default class ShopPlugin extends Plugin {
  async load() {
    // ...
    this.app.resource({
      name: 'orders',
      actions: {
        create: {
          middlewares: [
            async (ctx, next) => {
              const { productId } = ctx.action.params.values;

              const product = await ctx.db.getRepository('products').findOne({
                filterByTk: productId,
                filter: {
                  enabled: true,
                  inventory: {
                    $gt: 0,
                  },
                },
              });

              if (!product) {
                return ctx.throw(404);
              }

              await next();
            },
          ],
        },
      },
    });
  }
}
```

一部のビジネスロジック（特に前処理）をミドルウェアに置くことで、コードをより明確にし、メンテナンス性を向上させることができます。

## 小結

上記の例を通じて、リソースと関連する操作の定義方法を紹介しました。この章の内容を振り返りましょう：

- データテーブルの自動マッピングをリソースに
- ビルトインのデフォルトリソース操作
- リソースのカスタム操作
- 操作のパラメータのマージ順序と戦略

この章で取り上げた関連コードは、完全なサンプルパッケージ [packages/samples/shop-actions](https://github.com/nocobase/nocobase/tree/main/packages/samples/shop-actions) に含まれており、ローカルで直接実行して効果を確認できます。

