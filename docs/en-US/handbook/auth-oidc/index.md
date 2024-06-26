# Auth: OIDC

<PluginInfo commercial="true" name="auth-oidc"></PluginInfo>

## Introduction

The Auth: OIDC plugin follows the OIDC (Open ConnectID) protocol standard, using the Authorization Code Flow, to allow users to sign in to NocoBase using accounts provided by third-party identity authentication service providers (IdP).

## Activate Plugin

![](https://static-docs.nocobase.com/a494476c352a949a276d64e96e6ac587.png)

## Add OIDC Authentication

Enter the user authentication plugin management page.

![](https://static-docs.nocobase.com/4e598e7df963d7d23188afe3576456d6.png)

Add - OIDC

![](https://static-docs.nocobase.com/1efbde1c0e2f4967efc1c4336be45ca2.png)

## Configuration

### Basic Configuration

![](https://static-docs.nocobase.com/d80715319639e1681a28a97ad3131f21.png)

- Sign up automatically when the user does not exist - Whether to automatically create a new user when no matching existing user is found.
- Issuer - The issuer is provided by the IdP, usually ending with `/.well-known/openid-configuration`
- Client ID - Client ID
- Client Secret - Client Secret
- scope - Optional, default is `openid email profile`.
- id_token signed response algorithm - The signature method of id_token, default is `RS256`.

### Field Mapping

![](https://static-docs.nocobase.com/92d63c8f6f4082b50d9f475674cb5650.png)

- Field Map - Field mapping. The current fields available for mapping in Nocobase are nickname, email, and phone number. The default nickname is `openid`.
- Use this field to bind the user - The field used to match and bind with existing users, can choose email or username, default is email. The user information carried by IdP needs to contain the `email` or `username` field.

### Advanced Configuration

![](https://static-docs.nocobase.com/d9e8040118e8e2ecdc3c847f72bbb5a9.png)

- HTTP - Whether the NocoBase callback address is http protocol, default is `https`.
- Port - The port of the NocoBase callback address, default is `443/80`
- State token - Used to verify the source of the request and prevent CSRF attacks. You can fill in a fixed value, **it is strongly recommended to leave it blank, a random value will be generated by default. If you want to use a fixed value, please assess your usage environment and security risks yourself.**
- Pass parameters in the authorization code grant exchange - When using the code to exchange the token, some IdPs may require passing the Client ID or Client Secret as a parameter, you can check and fill in the corresponding parameter name.
- Method to call the user info endpoint - The HTTP method when requesting to get user information API.
- Where to put the access token when calling the user info endpoint - The way to pass the access token when requesting to get user information API.
  - Header - Request header, default.
  - Body - Request body, used with `POST` method.
  - Query parameters - Request parameters, used with `GET` method.

### Usage

![](https://static-docs.nocobase.com/2edbea211232cea6d38c79630132418c.png)

- Usage - The callback URL (Redirect URL) is used to copy and fill in the corresponding configuration in the IdP.

:::info
When testing locally, please use `127.0.0.1` instead of `localhost`, because the OIDC login method needs to write the state to the client cookie for security verification. If the login window flashes by but does not log in successfully, please check whether there are unmatched state logs on the server and whether the request cookie contains the state parameter. This situation is usually due to the mismatch between the state in the client cookie and the state carried in the request.
:::

## Sign In

Visit the sign in page and click the button under the sign in form to initiate third-party login.

![](https://static-docs.nocobase.com/e493d156254c2ac0b6f6e1002e6a2e6b.png)
