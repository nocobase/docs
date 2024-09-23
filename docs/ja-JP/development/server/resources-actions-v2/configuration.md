# リソースと操作の設定

最も簡単なリソースアクション  
デフォルトパラメータ付きのアクション  
グローバルアクションの使用  
アクションパラメータの多ソースマージ  
ビルトインアクションの使い方  

NocoBaseでは、リソースがコレクションにサービスを提供し、設定されたコレクション（関連を含む）は自動的に対応するリソースに変換されます。

## 自動変換

```ts
export class PluginSampleToResourcesServer extends Plugin {
  async load() {
    this.db.collection({
      name: 'posts',
      fields: [
        {
          type: 'hasMany',
          name: 'comments',
          target: 'comments',
        },
      ],
    });
    this.db.collection({
      name: 'comments',
    });
  }
}
```

上記の例の `posts` と `posts.comments` のインターフェースは以下の通りです：

posts リソース

```bash
POST  /api/posts:create
GET   /api/posts:list
GET   /api/posts:get/1
POST  /api/posts:update/1
POST  /api/posts:destroy/1
```

posts.comments リソース

```bash
POST  /api/posts/1/comments:create
GET   /api/posts/1/comments:list
GET   /api/posts/1/comments:get/1
POST  /api/posts/1/comments:update/1
POST  /api/posts/1/comments:destroy/1
```

NocoBaseのHTTP APIはREST APIのスーパーセットであり、標準のCRUD APIもRESTfulスタイルをサポートしています。

## ビルトイン操作

上記のコレクションがリソースに変換された後、直接CRUD操作を行えるのは、いくつかの一般的な操作がビルトインされているためです。

ビルトインのグローバル操作は、コレクションまたは関連に使用できます。

- create
- get
- list
- update
- destroy
- move

ビルトインの関連操作は、関連にのみ使用されます。

- set
- add
- remove
- toggle

ビルトインアクションの使い方については、APIドキュメントを参照してください。

## カスタム操作

### グローバル操作

```ts
export class PluginSampleResourcerServer extends Plugin {
  async load() {
    this.resourcer.registerActions({
      import: async (ctx, next) => {},
      export: async (ctx, next) => {},
    });
  }
}
```

### 特定リソースの操作

```ts
export class PluginSampleResourcerServer extends Plugin {
  async load() {
    this.resourcer.registerActions({
      'posts:listPublished': async (ctx, next) => {},
    });
  }
}
```

## カスタムリソース

特別な要件がある場合は、リソースと関連操作を明示的に定義することもできます。

```ts
app.resourcer.define({
  name: 'posts',
  actions: {
    create: {},
    get: {},
    list: {},
    update: {},
    destroy: {},
  },
});
```

