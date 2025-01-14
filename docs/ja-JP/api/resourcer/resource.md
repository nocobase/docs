# リソース

リソースは、リソースインスタンスを定義するために使用されます。Resourcerによって管理されるリソースインスタンスは、HTTPリクエストを通じてアクセスできます。

## コンストラクタ

リソースインスタンスを作成するために使用されます。通常、Resourcerマネージャの`define()`インターフェース呼び出しによって置き換えられ、直接使用する必要はありません。

**シグネチャ**

- `constructor(options: ResourceOptions, resourcer: Resourcer)`

**パラメータ**

| パラメータ名             | タイプ                                 | デフォルト値 | 説明                                                                                           |
| ------------------------ | -------------------------------------- | ------------ | ---------------------------------------------------------------------------------------------- |
| `options.name`           | `string`                              | -            | リソース名、URLルートのリソースアドレス部分に対応します。                                        |
| `options.type`           | `string`                              | `'single'`   | リソースタイプ、オプションは`'single'`、`'hasOne'`、`'hasMany'`、`'belongsTo'`、`'belongsToMany'`です。 |
| `options.actions`        | `Object`                              | -            | リソースに対して実行可能な操作のリスト、詳細は例を参照してください。                             |
| `options.middlewares`    | `MiddlewareType \| MiddlewareType[]`   | -            | 現在定義されているリソースに対する任意の操作アクセス時のミドルウェアリスト、詳細は例を参照してください。 |
| `options.only`           | `ActionName[]`                        | `[]`         | グローバル操作に対するホワイトリスト、配列に値がある場合（`length > 0`）、配列内の操作のみがアクセス可能です。 |
| `options.except`         | `ActionName[]`                        | `[]`         | グローバル操作に対するブラックリスト、配列に値がある場合（`length > 0`）、配列内の操作を除く他の操作がアクセス可能です。 |
| `resourcer`              | `Resourcer`                           | -            | 所属するリソースマネージャインスタンス。                                                         |

**例**

```ts
app.resourcer.define({
  name: 'books',
  actions: {
    // 拡張されたアクション
    publish(ctx, next) {
      ctx.body = 'ok';
    },
  },
  middleware: [
    // 拡張されたミドルウェア
    async (ctx, next) => {
      await next();
    },
  ],
});
```

## インスタンスメンバ

### `options`

現在のリソースの設定項目。

### `resourcer`

所属するリソースマネージャインスタンス。

### `middlewares`

登録済みのミドルウェアリスト。

### `actions`

登録済みの操作マップ。

### `except`

操作除外のリスト。

## インスタンスメソッド

### `getName()`

現在のリソースの名前を取得します。

**シグネチャ**

- `getName(): string`

**例**

```ts
const resource = app.resourcer.define({
  name: 'books',
});

resource.getName(); // 'books'
```

### `getAction()`

名前を基に現在のリソースの操作を取得します。

**シグネチャ**

- `getAction(name: string): Action`

**パラメータ**

| パラメータ名 | タイプ     | デフォルト値 | 説明       |
| ------------ | ---------- | ------------ | ---------- |
| `name`       | `string`   | -            | 操作名。   |

**例**

```ts
const resource = app.resourcer.define({
  name: 'books',
  actions: {
    publish(ctx, next) {
      ctx.body = 'ok';
    },
  },
});

resource.getAction('publish'); // [Function: publish]
```