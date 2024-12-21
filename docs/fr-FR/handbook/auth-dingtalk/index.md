# Auth: DingTalk

<PluginInfo commercial="true" name="auth-dingtalk"></PluginInfo>

## Introduction

The **Auth: DingTalk** plugin enables users to log in to NocoBase using their DingTalk accounts, streamlining the login process.

## Activating the Plugin

![](https://static-docs.nocobase.com/202406120929356.png)

## Applying for API Permissions in the DingTalk Developer Console

Follow the steps outlined in the <a href="https://open.dingtalk.com/document/orgapp/tutorial-obtaining-user-personal-information" target="_blank">DingTalk Open Platform - Implement Login for Third-Party Websites</a> guide to create your application.

Once in the application management console, ensure you enable both "Personal Mobile Number Information" and "Address Book Personal Information Read Permissions."

![](https://static-docs.nocobase.com/202406120006620.png)

## Obtaining the Client Secret from the DingTalk Developer Console

Copy your **Client ID** and **Client Secret** from the console.

![](https://static-docs.nocobase.com/202406120000595.png)

## Adding DingTalk Authentication to NocoBase

Navigate to the **Authentication** plugin management page.

![](https://static-docs.nocobase.com/202406112348051.png)

Select **Add new - DingTalk**

![](https://static-docs.nocobase.com/202406112349664.png)

### Configuration

![](https://static-docs.nocobase.com/202406120016896.png)

- **Sign up automatically when the user does not exist** - When the phone number does not match an existing user, a new user is automatically created.
- **Client ID and Client Secret** - Enter the information you copied earlier.
- **Redirect URL** - Enter the callback URL, copy it, and proceed to the next step.

## Configuring the Callback URL in the DingTalk Developer Console

Paste the copied **Callback URL** into the appropriate field in the DingTalk Developer Console.

![](https://static-docs.nocobase.com/202406120012221.png)

## Login

Go to the login page and click the button below the login form to initiate third-party login through DingTalk.

![](https://static-docs.nocobase.com/202406120014539.png)
