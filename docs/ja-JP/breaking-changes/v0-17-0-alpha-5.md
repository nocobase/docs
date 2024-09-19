# 0.17.0-alpha.5

## 服务端 `ctx.state.currentUser`

### 背景

新版本对 `ctx.state.currentUser` 中保存的用户信息进行了缓存。

之前 `ctx.state.currentUser` 保存的是 Sequelize 的 UserModel 对象：

```json
{
  "dataValues": {
    "username": "nocobase"
    // 其他用户信息
  }
  // 其他 Model 属性
}
```

用户信息实际上在 `dataValues` 中, 可以通过 `getter` 访问器获取对应属性，也可以使用 Model 提供的 `get`, `setDataValues`, `toJSON` 等方法。

增加缓存以后，如果用户使用的缓存方式不是内存缓存，从缓存中取出来的结果会变成一个普通的对象，代码中使用的 Model 的相关方法将会抛出异常。

### 变更

`ctx.state.currentUser` 现在直接使用包含用户信息的普通对象，即原 Model 中 `dataValues` 的内容。

```json
{
  "username": "nocobase"
  // 其他用户信息
}
```

Model 相关方法不再对 `ctx.state.currentUser` 适用。

#### 获取用户属性

原来

```ts
ctx.state.currentUser.get('id');
// 或
ctx.state.currentUser.id;
```

现在

```ts
// 只能使用
ctx.state.currentUser.id;
```

#### 修改用户属性

原来

```ts
ctx.state.currentUser.setDataValues('roles', roles);
// 或
ctx.state.currentUser.roles = roles;
```

现在

```ts
// 只能使用
ctx.state.currentUser.roles = roles;
```

#### 获取用户信息对象

原来

```ts
ctx.state.currentUser.toJSON();
```

现在

废弃。`ctx.state.currentUser` 本身就是 UserModel `toJSON` 后的结果。
