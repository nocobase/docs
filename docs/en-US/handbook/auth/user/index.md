# User Manual

## User Authentication Management

When the user authentication plugin is installed, it will initialize an authentication method of `password`, based on the user's username and email.

![](https://static-docs.nocobase.com/66eaa9d5421c9cb713b117366bd8a5d5.png)

## Activate Authentication Type

![](https://static-docs.nocobase.com/7f1fb8f8ca5de67ffc68eff0a65848f5.png)

Only activated authentication types will be displayed on the login page

![](https://static-docs.nocobase.com/8375a36ef98417af0f0977f1e07345dd.png)

## User Authentication Types

![](https://static-docs.nocobase.com/da4250c0cea343ebe470cbf7be4b12e4.png)

The user authentication types currently supported by NocoBase are:

- Password (Password), built-in user authentication plugin
- SMS (SMS), expanded by [sms-auth plugin](../../auth-sms/index.md)
- CAS, expanded by [cas-auth plugin](../../auth-cas/index.md)
- SAML, expanded by [saml-auth plugin](../../auth-saml/index.md)
- OIDC, expanded by [oidc-auth plugin](../../auth-oidc/index.md)

In addition, you can also expand user authentication by yourself, refer to the [Developer's Guide](../dev/guide.md).

## Password Authentication

### Configuration Interface

![](https://static-docs.nocobase.com/202411131505095.png)

### Allow sign up

When sign up is allowed, the login page will display the link to create an account, and you can go to the sign up page

![](https://static-docs.nocobase.com/78903930d4b47aaf75cf94c55dd3596e.png)

Sign up page

![](https://static-docs.nocobase.com/ac3c3ab42df28cb7c6dc70b24e99e7f7.png)

When sign up is not allowed, the login page will not display the link to create an account

![](https://static-docs.nocobase.com/8d5e3b6df9991bfc1c2e095a93745121.png)

When sign up is not allowed, the sign up page cannot be accessed

![](https://static-docs.nocobase.com/09325c4b07e09f88f80a14dff8430556.png)

### Sign up form Settings

:::info
'v1.4.0-beta.7' and later versions supported.
: : :

You can set which fields in the user collection need to be displayed in the sign up form and whether they are required or not. At least one of username or email fields needs to be set to display and required.

![](https://static-docs.nocobase.com/202411262133669.png)

Sign up page

![](https://static-docs.nocobase.com/202411262135801.png)
