# Auth: WeCom

<PluginInfo commercial="true" name="auth-wecom"></PluginInfo>

## Introduction

The Auth: WeCom plugin enables users to log in to NocoBase using their WeCom accounts, streamlining the authentication process for enterprise environments.

## Activating the Plugin

![](https://static-docs.nocobase.com/202406272056962.png)

## Creating and Configuring a Custom WeCom Application

Start by accessing the WeCom admin console to create a custom application tailored to your enterprise needs.

![](https://static-docs.nocobase.com/202406272101321.png)

![](https://static-docs.nocobase.com/202406272102087.png)

Once the application is created, navigate to its details page. Scroll down to find and select the "WeCom Authorized Login" option.

![](https://static-docs.nocobase.com/202406272104655.png)

Ensure that the authorization callback domain is set to your NocoBase application domain.

![](https://static-docs.nocobase.com/202406272105662.png)

Next, return to the application’s details page and click on "网页授权及SDK"("Web Authorization and JS-SDK")

![](https://static-docs.nocobase.com/202406272107063.png)

Set and verify the callback domain to enable the OAuth2.0 web authorization for your application.

![](https://static-docs.nocobase.com/202406272107899.png)

Then, head over to the "企业可信IP"("Trusted IP") section within the details page.

![](https://static-docs.nocobase.com/202406272108834.png)

Here, configure the IP address associated with your NocoBase application.

![](https://static-docs.nocobase.com/202406272109805.png)

## Retrieving Keys from the WeCom Admin Console

In the WeCom admin console, under "我的企业"("My Company") locate and copy the "企业ID"("Company ID")

![](https://static-docs.nocobase.com/202406272111637.png)

Then, navigate to "应用管理"("Application Management"), select the application you created earlier, and copy both the AgentId and Secret from the details page.

![](https://static-docs.nocobase.com/202406272122322.png)

## Integrating WeCom Authentication into NocoBase

Go to the user authentication plugin management section in NocoBase.

![](https://static-docs.nocobase.com/202406272115044.png)

Click on "Add new" and select "WeCom" from the list.

![](https://static-docs.nocobase.com/202406272115805.png)

### Configuration Steps

![](https://static-docs.nocobase.com/202406272116978.png)

- When a phone number does not match an existing user, should a new user be created automatically - When the phone number does not match an existing user, a new user is automatically created.
- "Company ID, "AgentId" And "Secret" - Enter the key information copied in the previous step.
- Workbench application homepage link - Enter the Workbench application homepage link, then copy and proceed to the next step.

## Configuring the WeCom Application Homepage

In the WeCom admin console, paste the previously copied Workbench application homepage link into the corresponding field for the application’s homepage URL.

![](https://static-docs.nocobase.com/202406272123631.png)

![](https://static-docs.nocobase.com/202406272123048.png)

## Logging In

To log in, visit the NocoBase login page and click the button below the login form to start the third-party authentication process.

![](https://static-docs.nocobase.com/202406272124608.png)

:::warning
Please note that due to WeCom's restrictions on accessing sensitive information, such as phone numbers, the authorization process can only be completed within the WeCom client. For your first time logging in with WeCom, follow the steps below to authorize the initial login within the WeCom client.
:::

## Initial Login Process

To complete your first login, open the Workbench in the WeCom client, scroll to the bottom, select the application, and navigate to the application homepage you previously configured. This will complete the authorization, allowing you to use WeCom login in the NocoBase application thereafter.

<img src="https://static-docs.nocobase.com/202406272131113.png" width="400" />
