# 使用手册

## 用户认证管理

用户认证插件安装时，会初始化一个 `密码` 的认证方式，基于用户的用户名和邮箱。

![](./static/GOJ0bwOYVoNkBKxkpmGcEqyqnI2.png)

## 激活认证类型

![](./static/HYNZb9vvXo0GXuxpLCvcDTC5nfh.png)

只有激活的认证类型才会显示在登录页面

![](./static/UulRbfMpWogGHnxpk1Yc0asenFe.png)

## 用户认证类型

![](./static/Ut6KbpRe0oI1NoxHkbZcXftkndc.png)

NocoBase 目前支持的用户认证类型有：

- 密码 (Password)，用户认证插件内置
- 短信 (SMS)，[sms-auth 插件](../../sms-auth/index.md) 扩展
- CAS，[cas-auth 插件](../../cas/index.md) 扩展
- SAML，[saml-auth 插件](../../saml/index.md) 扩展
- OIDC，[oidc-auth 插件](../../oidc/index.md) 扩展

除此之外，也可以自己扩展用户认证，参考[开发指南](../dev/index.md)。

## 密码认证

### 配置界面

![](./static/EvrrbNVmUoJVczxJvkzclPKqn7e.png)

### 允许注册

允许注册时，登录页会显示创建账号的连接，并可以跳转至注册页

![](./static/NsBebeTkAoDSnExFStmc84iondd.png)

注册页

![](./static/Rs2obD3ZRohmtjxlQxPcT123n7e.png)

不允许注册时，登录页不会显示创建账号的连接

![](./static/Kc72bM430oWacrxbxvScS3S3nGc.png)

不允许注册时，无法访问注册页面

![](./static/OyOHbaKJyogTBXxhW5wcO3QEn0e.png)
