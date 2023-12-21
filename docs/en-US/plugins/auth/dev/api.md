# API 参考

## 服务端

### Auth

内核 API，参考: [Auth](../../../api/auth/auth.md)

### BaseAuth

内核 API, 参考: [BaseAuth](../../../api/auth/base-auth.md)

### AuthModel

#### 概览

`AuthModel` 是 NocoBase 应用中使用的认证器 (`Authenticator`, 参考: [AuthManager - setStorer](../../../api/auth/auth-manager.md#setstorer) 和 [Auth - constructor](../../../api/auth/auth.md#constructor)) 数据模型，提供了一些和用户数据表交互的方法。除此之外，也可以使用 Sequelize Model 提供的方法。

```ts
import { AuthModel } from '@nocobase/plugin-auth';

class CustomAuth extends BaseAuth {
  async validate() {
    // ...
    const authenticator = this.authenticator as AuthModel;
    this.authenticator.findUser();
    this.authenticator.newUser();
    this.authenticator.findOrCreateUser();
    // ...
  }
}
```

#### 类方法

- `findUser(uuid: string): UserModel` - 通过 `uuid` 查询用户。

  - `uuid` - 来自当前认证类型的用户唯一标识

- `newUser(uuid: string, userValues?: any): UserModel` - 创建新用户，通过 `uuid` 将用户和当前认证器绑定。

  - `uuid` - 来自当前认证类型的用户唯一标识
  - `userValues` - 可选。用户其他信息。不传递时将 `uuid` 作为用户昵称。

- `findOrCreateUser(uuid: string, userValues?: any): UserModel` - 查找或创建新用户，创建规则同上。
  - `uuid` - 来自当前认证类型的用户唯一标识
  - `userValues` - 可选。用户其他信息。

## 客户端

### `plugin.registerType()`
