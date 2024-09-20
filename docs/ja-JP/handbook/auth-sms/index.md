# 短信认证

## 介绍

短信认证插件支持用户通过短信注册用户，登录 NocoBase.

> 需要配合 [`@nocobase/plugin-verification` 插件](../verification/index.md)提供的短信验证码功能使用

## 添加短信认证

进入用户认证插件管理页面。

![](../auth-oidc/static/2023-12-03-18-19-33.png)

添加 - 短信 (SMS)

![](https://static-docs.nocobase.com/29c8916492fd5e1564a872b31ad3ac0d.png)

## 配置

![](https://static-docs.nocobase.com/a4d35ec63ba22ae2ea9e3e8e1cbb783d.png)

短信验证码功能配置见[验证码插件 (@nocobase/plugin-verification) 文档](../verification/index.md)，短信登录认证功能将使用已配置并设置为默认的短信验证码 Provider 来发送短信。

用户不存在时自动注册 (Sign up automatically when the user does not exist): 该选项勾选后，当用户使用的手机号不存在时，将使用手机号作为昵称注册新用户。

## 登录

访问登录页面使用。

![](https://static-docs.nocobase.com/8d630739201bc27d8b0de076ab4f75e2.png)