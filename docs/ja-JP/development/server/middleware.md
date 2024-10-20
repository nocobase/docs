# ミドルウェア

## ミドルウェアの登録方法

ミドルウェアの登録方法は一般的に `load` メソッド内に記述します。

```ts
export class MyPlugin extends Plugin {
  load() {
    this.app.acl.use();
    this.app.resourcer.use();
    this.app.use();
  }
}
```

### 説明：

1. `app.acl.use()` はリソース権限レベルのミドルウェアを追加し、権限判断の前に実行されます。
2. `app.resourcer.use()` はリソースレベルのミドルウェアを追加し、定義されたリソースに対するリクエスト時にのみ実行されます。
3. `app.use()` はアプリケーションレベルのミドルウェアを追加し、すべてのリクエストで実行されます。

## オニオンモデル

```ts
app.use(async (ctx, next) => {
  ctx.body = ctx.body || [];
  ctx.body.push(1);
  await next();
  ctx.body.push(2);
});

app.use(async (ctx, next) => {
  ctx.body = ctx.body || [];
  ctx.body.push(3);
  await next();
  ctx.body.push(4);
});
```

`http://localhost:13000/api/hello` にアクセスすると、ブラウザのレスポンスデータは次の通りです：

```js
{"data": [1,3,4,2]}
```

## ビルトインミドルウェアと実行順序

1. `cors`
2. `bodyParser`
3. `i18n`
4. `dataWrapping`
5. `db2resource`
6. `restApi`
   1. `parseToken`
   2. `checkRole`
   3. `acl`
      1. `acl.use()` で追加された他のミドルウェア
   4. `resourcer.use()` で追加された他のミドルウェア
   5. `action handler`
7. `app.use()` で追加された他のミドルウェア

`before` または `after` を使用して、前の `tag` の位置にミドルウェアを挿入することもできます。例えば：

```ts
app.use(m1, { tag: 'restApi' });
app.resourcer.use(m2, { tag: 'parseToken' });
app.resourcer.use(m3, { tag: 'checkRole' });
// m4 は m1 の前に配置されます
app.use(m4, { before: 'restApi' });
// m5 は m2 と m3 の間に挿入されます
app.resourcer.use(m5, { after: 'parseToken', before: 'checkRole' });
```

特別な位置が指定されていない場合、新しいミドルウェアの実行順序は次の通りです：

1. 最初に `acl.use()` で追加されたものが実行され、
2. 次に `resourcer.use()` で追加されたものが実行されます（ミドルウェアハンドラーとアクションハンドラーを含む）、
3. 最後に `app.use()` で追加されたものが実行されます。

```ts
app.use(async (ctx, next) => {
  ctx.body = ctx.body || [];
  ctx.body.push(1);
  await next();
  ctx.body.push(2);
});

app.resourcer.use(async (ctx, next) => {
  ctx.body = ctx.body || [];
  ctx.body.push(3);
  await next();
  ctx.body.push(4);
});

app.acl.use(async (ctx, next) => {
  ctx.body = ctx.body || [];
  ctx.body.push(5);
  await next();
  ctx.body.push(6);
});

app.resourcer.define({
  name: 'test',
  actions: {
    async list(ctx, next) {
      ctx.body = ctx.body || [];
      ctx.body.push(7);
      await next();
      ctx.body.push(8);
    },
  },
});
```

`http://localhost:13000/api/hello` にアクセスすると、ブラウザのレスポンスデータは次の通りです：

```js
{"data": [1,2]}
```

`http://localhost:13000/api/test:list` にアクセスすると、ブラウザのレスポンスデータは次の通りです：

```js
{"data": [5,3,7,1,2,8,4,6]}
```

### リソースが未定義の場合、`resourcer.use()` で追加されたミドルウェアは実行されません

```ts
app.use(async (ctx, next) => {
  ctx.body = ctx.body || [];
  ctx.body.push(1);
  await next();
  ctx.body.push(2);
});

app.resourcer.use(async (ctx, next) => {
  ctx.body = ctx.body || [];
  ctx.body.push(3);
  await next();
  ctx.body.push(4);
});
```

`http://localhost:13000/api/hello` にアクセスすると、ブラウザのレスポンスデータは次の通りです：

```js
{"data": [1,2]}
```

上記の例では、`hello` リソースが未定義のため、`resourcer` に入らず、`resourcer` 内のミドルウェアは実行されません。

## ミドルウェアの用途

追記予定

## 例

- [samples/ratelimit](https://github.com/nocobase/nocobase/blob/main/packages/samples/ratelimit/) IP レート制限

