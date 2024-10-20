# 0.17.0-alpha.5

## サーバー側 `ctx.state.currentUser`

### 背景

新しいバージョンでは、`ctx.state.currentUser` に保存されているユーザー情報がキャッシュされます。

以前は、`ctx.state.currentUser` は Sequelize の UserModel オブジェクトを保持していました：

```json
{
  "dataValues": {
    "username": "nocobase"
    // その他のユーザー情報
  }
  // その他のモデル属性
}
```

ユーザー情報は実際には `dataValues` にあり、`getter` アクセサを通じて対応する属性にアクセスできます。また、モデルが提供する `get`, `setDataValues`, `toJSON` などのメソッドを使用することも可能です。

キャッシュを追加した後、ユーザーが使用するキャッシュ方法がメモリキャッシュでない場合、キャッシュから取得した結果は通常のオブジェクトになります。そのため、コード内で使用しているモデルの関連メソッドは例外をスローします。

### 変更

`ctx.state.currentUser` は現在、ユーザー情報を含む通常のオブジェクトを直接使用します。つまり、元のモデルの `dataValues` の内容です。

```json
{
  "username": "nocobase"
  // その他のユーザー情報
}
```

モデル関連のメソッドはもはや `ctx.state.currentUser` に対して適用されません。

#### ユーザー属性の取得

以前は

```ts
ctx.state.currentUser.get('id');
// または
ctx.state.currentUser.id;
```

現在は

```ts
// これだけを使用できます
ctx.state.currentUser.id;
```

#### ユーザー属性の変更

以前は

```ts
ctx.state.currentUser.setDataValues('roles', roles);
// または
ctx.state.currentUser.roles = roles;
```

現在は

```ts
// これだけを使用できます
ctx.state.currentUser.roles = roles;
```

#### ユーザー情報オブジェクトの取得

以前は

```ts
ctx.state.currentUser.toJSON();
```

現在は

廃止されました。`ctx.state.currentUser` 自体が UserModel の `toJSON` の結果です。

