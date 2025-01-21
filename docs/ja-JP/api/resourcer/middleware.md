# ミドルウェア

Koaのミドルウェアと類似していますが、より多くの拡張機能を提供し、簡単に拡張することができます。

ミドルウェアを定義すると、リソースマネージャーなどで使用でき、開発者が呼び出すタイミングを制御できます。

## コンストラクタ

**シグネチャ**

- `constructor(options: Function)`
- `constructor(options: MiddlewareOptions)`

**パラメータ**

| パラメータ名            | タイプ                 | デフォルト値 | 説明             |
| ----------------------- | ---------------------- | ------------ | ---------------- |
| `options`               | `Function`             | -            | ミドルウェア処理関数 |
| `options`               | `MiddlewareOptions`    | -            | ミドルウェア設定項目 |
| `options.only`          | `string[]`             | -            | 指定された操作のみ許可 |
| `options.except`        | `string[]`             | -            | 指定された操作を除外 |
| `options.handler`       | `Function`             | -            | 処理関数         |

**例**

簡単な定義：

```ts
const middleware = new Middleware((ctx, next) => {
  await next();
});
```

関連パラメータの使用：

```ts
const middleware = new Middleware({
  only: ['create', 'update'],
  async handler(ctx, next) {
    await next();
  },
});
```

## インスタンスメソッド

### `getHandler()`

編成された処理関数を返します。

**例**

以下のミドルウェアは、リクエスト時にまず `1` を出力し、次に `2` を出力します。

```ts
const middleware = new Middleware((ctx, next) => {
  console.log(1);
  await next();
});

middleware.use(async (ctx, next) => {
  console.log(2);
  await next();
});

app.resourcer.use(middleware.getHandler());
```

### `use()`

現在のミドルウェアにミドルウェア関数を追加します。ミドルウェアの拡張ポイントを提供するために使用します。例は `getHandler()` を参照してください。

**シグネチャ**

- `use(middleware: Function)`

**パラメータ**

| パラメータ名       | タイプ       | デフォルト値 | 説明           |
| ------------------ | ------------ | ------------ | -------------- |
| `middleware`       | `Function`   | -            | ミドルウェア処理関数 |

### `disuse()`

現在のミドルウェアに追加されたミドルウェア関数を削除します。

**シグネチャ**

- `disuse(middleware: Function)`

**パラメータ**

| パラメータ名       | タイプ       | デフォルト値 | 説明           |
| ------------------ | ------------ | ------------ | -------------- |
| `middleware`       | `Function`   | -            | ミドルウェア処理関数 |

**例**

以下の例では、リクエスト処理時に `1` のみを出力し、fn1 の `2` 出力は実行されません。

```ts
const middleware = new Middleware((ctx, next) => {
  console.log(1);
  await next();
});

async function fn1(ctx, next) {
  console.log(2);
  await next();
}

middleware.use(fn1);

app.resourcer.use(middleware.getHandler());

middleware.disuse(fn1);
```

### `canAccess()`

特定の操作に対して現在のミドルウェアが呼び出されるかどうかを判断します。通常、リソースマネージャーが内部的に処理します。

**シグネチャ**

- `canAccess(name: string): boolean`

**パラメータ**

| パラメータ名 | タイプ     | デフォルト値 | 説明     |
| ------------ | ---------- | ------------ | -------- |
| `name`       | `string`   | -            | 操作名   |

## その他のエクスポート

### `branch()`

ブランチミドルウェアを作成し、ミドルウェア内でブランチ処理を行います。

**シグネチャ**

- `branch(map: { [key: string]: Function }, reducer: Function, options): Function`

**パラメータ**

| パラメータ名                   | タイプ                          | デフォルト値           | 説明                                               |
| ------------------------------ | ------------------------------- | ---------------------- | -------------------------------------------------- |
| `map`                          | `{ [key: string]: Function }`   | -                      | ブランチ処理関数マップ。キー名は後続の計算関数によって与えられます |
| `reducer`                      | `(ctx) => string`               | -                      | 計算関数。コンテキストに基づいてブランチのキー名を計算します |
| `options?`                     | `Object`                        | -                      | ブランチ設定項目                                   |
| `options.keyNotFound?`         | `Function`                      | `ctx.throw(404)`       | キー名が見つからない場合の処理関数                 |
| `options.handlerNotSet?`       | `Function`                      | `ctx.throw(404)`       | 処理関数が定義されていない場合の処理               |

**例**

ユーザー認証時に、リクエストURLのquery部分の `authenticator` パラメータの値に基づいて、後続の処理を決定します：

```ts
app.resourcer.use(
  branch(
    {
      password: async (ctx, next) => {
        // ...
      },
      sms: async (ctx, next) => {
        // ...
      },
    },
    (ctx) => {
      return ctx.action.params.authenticator ?? 'password';
    },
  ),
);
```