# 使用手册

## 用户认证管理

用户认证插件安装时，会初始化一个 `密码` 的认证方式，基于用户的用户名和邮箱。

![](https://static-docs.nocobase.com/66eaa9d5421c9cb713b117366bd8a5d5.png)

## 激活认证类型

![](https://static-docs.nocobase.com/7f1fb8f8ca5de67ffc68eff0a65848f5.png)

只有激活的认证类型才会显示在登录页面

![](https://static-docs.nocobase.com/8375a36ef98417af0f0977f1e07345dd.png)

## 用户认证类型

![](https://static-docs.nocobase.com/da4250c0cea343ebe470cbf7be4b12e4.png)

NocoBase 目前支持的用户认证类型有：

- 密码 (Password)，用户认证插件内置
- 短信 (SMS)，[sms-auth 插件](../../auth-sms/index.md) 扩展
- CAS，[cas-auth 插件](../../auth-cas/index.md) 扩展
- SAML，[saml-auth 插件](../../auth-saml/index.md) 扩展
- OIDC，[oidc-auth 插件](../../auth-oidc/index.md) 扩展

除此之外，也可以自己扩展用户认证，参考[开发指南](../dev/guide.md)。

## 密码认证

### 配置界面

![](https://static-docs.nocobase.com/403529f12669495fe6f3afef4405d45e.png)

### 允许注册

允许注册时，登录页会显示创建账号的连接，并可以跳转至注册页

![](https://static-docs.nocobase.com/78903930d4b47aaf75cf94c55dd3596e.png)

注册页

![](https://static-docs.nocobase.com/ac3c3ab42df28cb7c6dc70b24e99e7f7.png)

不允许注册时，登录页不会显示创建账号的连接

![](https://static-docs.nocobase.com/8d5e3b6df9991bfc1c2e095a93745121.png)

不允许注册时，无法访问注册页面

![](https://static-docs.nocobase.com/09325c4b07e09f88f80a14dff8430556.png)