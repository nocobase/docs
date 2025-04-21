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

### Sign up form Settings<Badge>v1.4.0-beta.7+</Badge>

You can set which fields in the user collection need to be displayed in the sign up form and whether they are required or not. At least one of username or email fields needs to be set to display and required.

![](https://static-docs.nocobase.com/202411262133669.png)

Sign up page

![](https://static-docs.nocobase.com/202411262135801.png)

### Forgot Password<Badge>v1.7.0+</Badge>

The forgot password feature allows users to reset their password via email verification when they cannot remember it.

#### Admin Configuration

1.  **Enable Forgot Password Feature**

    In "Settings" > "Authentication" > "Forgot password" tab, check the "Enable forgot password feature" checkbox.

    ![20250421101929_rec_](https://static-docs.nocobase.com/20250421101929_rec_.gif)

2.  **Configure Notification Channel**

    Select an email notification channel (currently only email is supported). If no notification channel is available, please add one first.

    ![20250421102311_rec_](https://static-docs.nocobase.com/20250421102311_rec_.gif)

3.  **Configure Password Reset Email**

    Customize the email subject and content, supporting HTML or plain text format. The following variables can be used:
    - Current User
    - Date
    - Reset Password Link

    ![20250421102902](https://static-docs.nocobase.com/20250421102902.png)

4.  **Set Reset Link Validity Period**

    Set the validity period of the reset link in minutes, default is 60 minutes.

    ![20250421103240](https://static-docs.nocobase.com/20250421103240.png)

#### User Flow

1.  **Initiate Password Reset Request**

    Click the "Forgot Password" link on the login page (requires the administrator to enable the forgot password feature first) to enter the forgot password page.

    ![20250421103458_rec_](https://static-docs.nocobase.com/20250421103458_rec_.gif)

    Enter the registered email address and click the "Send Reset Email" button.

    ![20250421113442_rec_](https://static-docs.nocobase.com/20250421113442_rec_.gif)

2.  **Reset Password**

    The user will receive an email containing a reset link. After clicking the link, set a new password on the opened page.

    ![20250421113748](https://static-docs.nocobase.com/20250421113748.png)

    After setting it up, the user can log in to the system with the new password.

#### Notes

-   The reset link has a time limit, usually valid within 60 minutes after generation (configurable by the administrator).
-   The link can only be used once and becomes invalid immediately after use.
-   If the user does not receive the reset email, please check if the email address is correct or check the spam folder.
-   Administrators should ensure that the mail server is configured correctly to guarantee successful delivery of reset emails.

