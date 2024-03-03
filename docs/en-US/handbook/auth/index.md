# 用户认证

## 介绍

NocoBase 的用户认证模块主要由两部分组成：

- 内核中的 `@nocobase/auth` 定义登录、注册、校验等用户认证相关的可扩展接口和中间件，同时用于注册和管理各种扩展认证方式
- 插件中的 `@nocobase/plugin-auth` 用于初始化内核中的认证管理模块，同时提供基础的用户名（或邮箱）/密码认证方式。

> 需要同时配合 [`@nocobase/plugin-users` 插件](../users/index.md) 提供的用户管理功能

除此之外，Nocobase还提供了其他多种用户认证方式插件

- [@nocobase/plugin-auth-sms](../auth-sms/index.md) - 提供短信验证登录功能
- [@nocobase/plugin-auth-saml](../auth-saml/index.md) - 提供SAML SSO登录功能
- [@nocobase/plugin-auth-oidc](../auth-oidc/index.md) - 提供OIDC SSO登录功能
- [@nocobase/plugin-auth-cas](../auth-cas/index.md) - 提供CAS SSO登录功能

通过以上插件，管理员配置好相应的认证方式以后，用户可以直接使用 Google Workspace, Microsoft Azure 等平台提供的用户身份登录系统，也可以对 接Auth0, Logto, Keycloak 等平台工具。除此之外，开发者也可以通过我们提供的基础接口很方便地扩展自己所需要的其他认证方式。

## 安装
