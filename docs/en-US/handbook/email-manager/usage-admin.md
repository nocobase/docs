# Administrator Configuration

## Overview

After enabling the email plugin, administrators need to complete some configurations before regular users can connect their email accounts to NocoBase.

These configurations primarily involve obtaining settings from the email provider for API authentication. The main business flow is as follows:

#### Business Flow

**Administrator**  
1. Visit the provider's platform and create an application.  
2. Configure application-related information.  
3. Enable Mail API permissions and OAuth.  
4. Enter the obtained information into NocoBase.

**NocoBase**  
1. Use the application parameters to call the provider's Mail API.  
2. Retrieve email information when users authorize login.  
3. Provide email-related features.

**Regular Users**  
1. Authorize their email accounts in NocoBase.  

## Plugin Configuration

### Enabling the Email Plugin

1. Navigate to the Plugin Management page.  
2. Enable the plugin.  

### Email Provider Configuration

After enabling the email plugin, you can configure the email provider settings. Currently, both Google and Microsoft emails are supported. Go to **"Settings" -> "Email Settings"** to access the configuration page.

![Settings](https://static-docs.nocobase.com/mail-1733818617187.png)

![Configuration](https://static-docs.nocobase.com/mail-1733818617514.png)

Each provider requires **Client ID** and **Client Secret**. Below are detailed steps to obtain these parameters.

## Google Configuration

### Prerequisites
1. Ensure NocoBase is deployed on a server that can access Google services. The backend will call the Google API.

### Account Registration
1. Visit [Google Cloud Console](https://console.cloud.google.com/welcome).  
2. Agree to the terms on the first visit.  

![Agree to Terms](https://static-docs.nocobase.com/mail-1733818617807.png)

### Creating an App
1. Click **"Select a project"** at the top.  

![Select Project](https://static-docs.nocobase.com/mail-1733818618126.png)

2. In the pop-up, click **"NEW PROJECT"**.  

![New Project](https://static-docs.nocobase.com/mail-1733818618329.png)

3. Enter project details.  

![Project Info](https://static-docs.nocobase.com/mail-1733818618510.png)

4. Once created, select the project.  

![Select Project](https://static-docs.nocobase.com/mail-1733818618828.png)

![Control Panel](https://static-docs.nocobase.com/mail-1733818619044.png)

### Enabling Gmail API
1. Click **"APIs & Services"**.  

![APIs & Services](https://static-docs.nocobase.com/mail-1733818619230.png)

2. Go to the **APIs & Services** panel.  

![Panel](https://static-docs.nocobase.com/mail-1733818619419.png)

3. Search for **"mail"**.  

![Search Mail](https://static-docs.nocobase.com/mail-1733818619810.png)

![Mail API](https://static-docs.nocobase.com/mail-1733818620020.png)

4. Click **"ENABLE"** to activate Gmail API.  

![Enable API](https://static-docs.nocobase.com/mail-1733818620589.png)

![API Enabled](https://static-docs.nocobase.com/mail-1733818620885.png)

### Configuring OAuth Consent Screen
1. Click **"OAuth consent screen"** in the left menu.  

![OAuth Consent](https://static-docs.nocobase.com/mail-1733818621104.png)

2. Choose **"External"**.  

![External](https://static-docs.nocobase.com/mail-1733818621322.png)

3. Enter project information for the authorization screen and save.  

![Project Info](https://static-docs.nocobase.com/mail-1733818621538.png)

4. Fill in the **Developer contact information** and proceed.  

![Developer Info](https://static-docs.nocobase.com/mail-1733818621749.png)

5. Continue through the prompts.  

![Continue](https://static-docs.nocobase.com/mail-1733818622121.png)

6. Add test users for pre-release testing.  

![Add Users](https://static-docs.nocobase.com/mail-1733818622332.png)

![User List](https://static-docs.nocobase.com/mail-1733818622537.png)

7. click to continue

![](https://static-docs.nocobase.com/mail-1733818622753.png)

8. Review the overview and return to the control panel.  

![Overview](https://static-docs.nocobase.com/mail-1733818622984.png)

### Creating Credentials
1. Click **"Credentials"** in the left menu.  

![Credentials Menu](https://static-docs.nocobase.com/mail-1733818623168.png)

2. Click **"CREATE CREDENTIALS"** and choose **"OAuth client ID"**.  

![Create Credentials](https://static-docs.nocobase.com/mail-1733818623386.png)

3. Choose **"Web application"**.  

![Web Application](https://static-docs.nocobase.com/mail-1733818623758.png)

4. Enter application details.  

![App Details](https://static-docs.nocobase.com/mail-1733818623992.png)

5. Provide the final deployment domain (e.g., a test address for NocoBase).  

![Domain](https://static-docs.nocobase.com/mail-1733818624188.png)

6. Add the authorized callback URL as `domain + "/admin/settings/mail/oauth2"`. Example: `https://pr-1-mail.test.nocobase.com/admin/settings/mail/oauth2`.  

![Callback URL](https://static-docs.nocobase.com/mail-1733818624449.png)

7. Create and view OAuth details.  

![OAuth Info](https://static-docs.nocobase.com/mail-1733818624701.png)

8. Copy **Client ID** and **Client Secret** and paste them into the email configuration page.  

![Copy Credentials](https://static-docs.nocobase.com/mail-1733818624923.png)

9. Save to complete the configuration.  

### Publishing the App
1. Go to **"OAuth consent screen"**.  

![OAuth Menu](https://static-docs.nocobase.com/mail-1733818625124.png)

2. Click **"PUBLISH APP"**.  

![Publish App](https://static-docs.nocobase.com/mail-1733818625336.png)

3. Confirm and publish.  

![Confirm Publish](https://static-docs.nocobase.com/mail-1733818625591.png)

## Microsoft Configuration

### Register an Account

1. Visit https://azure.microsoft.com/en-us/pricing/purchase-options/azure-account.

2. Log in to your Microsoft account.

![](https://static-docs.nocobase.com/mail-1733818625779.png)

### Create a Tenant

1. Visit https://azure.microsoft.com/zh-cn/pricing/purchase-options/azure-account?icid=azurefreeaccount and log in to your account.

2. Fill in the basic information and complete the verification.

![](https://static-docs.nocobase.com/mail-1733818625984.png)

3. Provide additional information and proceed.

![](https://static-docs.nocobase.com/mail-1733818626352.png)

4. Fill in credit card details (optional at this stage).

![](https://static-docs.nocobase.com/mail-1733818626622.png)

### Obtain the Client ID

1. From the top menu, select **"Microsoft Entra ID"**.

![](https://static-docs.nocobase.com/mail-1733818626871.png)

2. On the left sidebar, click **"App registrations"**.

![](https://static-docs.nocobase.com/mail-1733818627097.png)

3. Click **"New registration"** at the top.

![](https://static-docs.nocobase.com/mail-1733818627309.png)

4. Enter the required details and submit.

   - You can choose any name.
   - Select account types as shown in the example below.
   - The **Redirect URI** field can be left empty for now.

![](https://static-docs.nocobase.com/mail-1733818627555.png)

5. Retrieve the **Client ID**.

![](https://static-docs.nocobase.com/mail-1733818627797.png)

### API Authorization

1. Open the **"API permissions"** menu on the right sidebar.

![](https://static-docs.nocobase.com/mail-1733818628178.png)

2. Click **"Add a permission"**.

![](https://static-docs.nocobase.com/mail-1733818628448.png)

3. Select **"Microsoft Graph"**.

![](https://static-docs.nocobase.com/mail-1733818628725.png)

![](https://static-docs.nocobase.com/mail-1733818628927.png)

4. Search for and add the following permissions. The final configuration should include:

   1. `"email"`
   2. `"offline_access"`
   3. `"IMAP.AccessAsUser.All"`
   4. `"SMTP.Send"`
   5. `"offline_access"`
   6. `"User.Read"` (default)

![](https://static-docs.nocobase.com/mail-1733818629130.png)

### Obtain a Secret Key

1. Open the **"Certificates & secrets"** menu on the left.

![](https://static-docs.nocobase.com/mail-1733818629369.png)

2. Click the **"New client secret"** button.

![](https://static-docs.nocobase.com/mail-1733818629554.png)

3. Provide a description and set an expiration date, then create the secret.

![](https://static-docs.nocobase.com/mail-1733818630292.png)

4. Retrieve the **Secret ID**.

![](https://static-docs.nocobase.com/mail-1733818630535.png)

5. Copy both the **Client ID** and **Client Secret**, then fill them in on the email configuration page.

![](https://static-docs.nocobase.com/mail-1733818630710.png)


## FAQ

**Q:** Why can’t emails be received after logging in with a Microsoft account?  
**A:** Currently, only Outlook and Gmail accounts are supported. Microsoft and Google accounts are not yet supported. For more details, refer to [this discussion](https://answers.microsoft.com/zh-hans/outlook_com/forum/all/%E7%8E%B0%E6%9C%89%E5%BE%AE%E8%BD%AF%E8%B4%A6/dba12dda-a7c7-4346-8263-53f4a6d9dc68).
