# 双因素身份认证 (2FA)

<PluginInfo name="two-factor-authentication" licenseBundled="true"></PluginInfo>

## 介绍

双因素身份认证 (2FA) 是登录应用时使用的额外身份验证措施。当应用启用 2FA 时，用户在使用密码登录时，需要提供另一种身份验证方式，比如：OTP 验证码、TOTP 等。

:::info{title=提示}
目前 2FA 流程仅对密码登录生效，如果应用启用了 SSO 等其他认证方式，请使用对应 IdP 提供的多重身份验证 (MFA) 保护措施。  
:::

## 启用插件

![](https://static-docs.nocobase.com/202502282108145.png)

## 管理员配置

启用插件后，在认证器管理页面会增加 2FA 配置页面。

管理员需要勾选“为所有用户启用双因素身份认证 (2FA)”选项，同时需要选择绑定可用类型的验证器，如果没有可用的验证器，需要先前往验证管理页面创建新的验证器。参考：[验证](../verification/index.md)

![](https://static-docs.nocobase.com/202502282109802.png)

## 用户登录

应用启用 2FA 以后，用户使用密码登录时，会进入 2FA 验证流程。

如果用户尚未绑定任意一种指定的验证器，会要求用户进行绑定，绑定成功后可以进入应用。

![](https://static-docs.nocobase.com/202502282110829.png)

如果用户已经绑定了任意一种指定验证器，则会要求用户通过已绑定的验证器进行身份验证，验证通过可以进入应用。

![](https://static-docs.nocobase.com/202502282110148.png)

登录成功后，用户可以在个人中心的验证管理页面，绑定其他的验证器。

![](https://static-docs.nocobase.com/202502282110024.png)
