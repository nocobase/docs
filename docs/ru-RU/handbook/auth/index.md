# User Authentication

## Introduction

The user authentication module of NocoBase mainly consists of two parts:

- The `@nocobase/auth` in the kernel defines login, registration, verification and other user authentication related expandable interfaces and middleware, and is also used for registering and managing various extended authentication methods.
- The `@nocobase/plugin-auth` in the plugin is used to initialize the authentication management module in the kernel, and also provides basic username (or email) / password authentication method.

> It needs to be used in conjunction with the user management function provided by the [`@nocobase/plugin-users` plugin](../users/index.md)

In addition, NocoBase also provides other various user authentication method plugins

- [@nocobase/plugin-auth-sms](../auth-sms/index.md) - Provides SMS verification login function
- [@nocobase/plugin-auth-saml](../auth-saml/index.md) - Provides SAML SSO login function
- [@nocobase/plugin-auth-oidc](../auth-oidc/index.md) - Provides OIDC SSO login function
- [@nocobase/plugin-auth-cas](../auth-cas/index.md) - Provides CAS SSO login function

Through the above plugins, after the administrator configures the corresponding authentication method, users can directly use the user identity provided by platforms such as Google Workspace, Microsoft Azure to log in to the system, and can also connect to Auth0, Logto, Keycloak and other platform tools. In addition, developers can also conveniently expand other authentication methods they need through the basic interfaces we provide.