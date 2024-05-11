# 认证：OIDC

## 介绍

认证：OIDC 插件遵循 OIDC (Open ConnectID) 协议标准，使用授权码模式 (Authorization Code Flow), 实现用户使用第三方身份认证服务商 (IdP) 提供的账号登录 NocoBase.

## 激活插件

![](https://static-docs.nocobase.com/a494476c352a949a276d64e96e6ac587.png)

## 添加 OIDC 认证

进入用户认证插件管理页面。

![](https://static-docs.nocobase.com/4e598e7df963d7d23188afe3576456d6.png)

添加 - OIDC

![](https://static-docs.nocobase.com/1efbde1c0e2f4967efc1c4336be45ca2.png)

## 配置

### 基础配置

![](https://static-docs.nocobase.com/d80715319639e1681a28a97ad3131f21.png)

- Sign up automatically when the user does not exist - 当找不到可匹配绑定的已有用户时，是否自动创建新用户。
- Issuer - issuer 由 IdP 提供，通常以 `/.well-known/openid-configuration` 结尾
- Client ID - 客户端ID
- Client Secret - 客户端密钥
- scope - 选填，默认为 `openid email profile`.
- id_token signed response algorithm - id_token 的签名方法，默认为 `RS256`.

### 字段映射

![](https://static-docs.nocobase.com/92d63c8f6f4082b50d9f475674cb5650.png)

- Field Map - 字段映射。Nocobase 端目前可供映射的字段有昵称、邮箱和手机号。默认昵称使用 `openid`.
- Use this field to bind the user - 用于和已有用户匹配绑定的字段，可选择邮箱或用户名，默认为邮箱。需要IdP携带的用户信息包含 `email` 或 `username` 字段。

### 高级配置

![](https://static-docs.nocobase.com/d9e8040118e8e2ecdc3c847f72bbb5a9.png)

- HTTP - NocoBase 回调地址是否为 http 协议，默认 `https`.
- Port - NocoBase 回调地址端口，默认为 `443/80`
- State token - 用于校验请求来源，防止 CSRF 攻击。可以填写一个固定值，**强烈建议留空，会默认生成随机值。如果要使用固定值，请自行评估你的使用环境和安全风险。**
- Pass parameters in the authorization code grant exchange - 在使用 code 交换 token 的时候，部分 IdP 可能会要求传递 Client ID 或者 Client Secret 作为参数，可以勾选并填写对应的参数名。
- Method to call the user info endpoint - 请求获取用户信息的 API 时的 HTTP 方法。
- Where to put the access token when calling the user info endpoint - 请求获取用户信息的 API 时 access token 的传递方式。
  - Header - 请求头，默认。
  - Body - 请求体, 配合 `POST` 方法使用。
  - Query parameters - 请求参数，配合 `GET` 方法使用。

### 使用

![](https://static-docs.nocobase.com/2edbea211232cea6d38c79630132418c.png)

- 使用 (Usage) - 回调URL (Redirect URL) 用于复制并填写到 IdP 相应配置中。

:::info
本地测试时，URL请使用 `127.0.0.1` 而不是 `localhost`，因为 OIDC 登录方式需要向客户端 cookie 写入 state 用于安全校验。如果登录时出现窗口一闪而过，但是没有登录成功，请检查服务端是否有 state 不匹配的日志以及请求 cookie 中是否包含了 state 参数，这种情况通常是由于客户端 cookie 中的 state 和请求中携带的 state 不匹配。
:::

## 登录

访问登录页面，点击登录表单下方按钮发起第三方登录。

![](https://static-docs.nocobase.com/e493d156254c2ac0b6f6e1002e6a2e6b.png)
