# Email Manager: Administrator Configuration

<PluginInfo commercial="true" name="email-manager"></PluginInfo>

## Introduction
The Email Manager Plugin is an efficient and convenient tool supporting Gmail and Outlook email authorization. It integrates email management and sending capabilities into various blocks and pages. By simply configuring authorization, users can achieve unified multi-account management and enjoy seamless email communication.

## Configuration Process

After enabling the email plugin, administrators must complete the configuration before regular users can connect their email accounts to NocoBase. Currently, only Outlook and Gmail accounts are supported via authorized login. Direct integration with Microsoft and Google accounts is not available.

The core of the configuration involves setting up API authentication with the email service providers. Administrators need to follow these steps to ensure proper plugin functionality:

1. **Obtain Authentication Information from Providers**  
   - Log into the developer console of the email service provider (e.g., Google Cloud Console or Microsoft Azure Portal).  
   - Create a new app or project, enabling Gmail or Outlook email API services.  
   - Retrieve the Client ID and Client Secret.  
   - Configure the redirect URI to match the plugin's callback address in NocoBase.  

2. **Service Provider Configuration**  
   - Navigate to the plugin's configuration page.  
   - Enter the required API authentication details, including Client ID and Client Secret, ensuring proper integration with the email service provider.  

3. **Authorization Login**  
   - Users log in to their email accounts through the OAuth protocol.  
   - The plugin automatically generates and stores the user's authorization tokens for subsequent API calls and email operations.  

4. **Email Integration**  
   - Upon successful authorization, users' email accounts are integrated into NocoBase.  
   - The plugin synchronizes email data and provides management and sending capabilities.  

5. **Using Email Features**  
   - Users can view, manage, and send emails directly within the platform.  
   - All operations are completed via API calls to the email service provider, ensuring real-time synchronization and efficient communication.  

By following the above process, the NocoBase email plugin offers efficient and secure email management. If you encounter issues during configuration, consult the relevant documentation or contact the technical support team for assistance.

## Plugin Configuration

### Enabling the Email Plugin

1. Navigate to the plugin management page.  
2. Locate the "Email Manager" plugin and enable it.  

### Configuring the Email Provider

Once the email plugin is enabled, proceed to configure the email provider. Currently, Google and Microsoft email services are supported. Click on "Settings" -> "Email Settings" to access the configuration page.

![](https://static-docs.nocobase.com/mail-1733818617187.png)  

![](https://static-docs.nocobase.com/mail-1733818617514.png)

Each provider requires the Client ID and Client Secret. The following sections detail how to obtain these parameters.

## Google Configuration

### Prerequisites

1. To allow users to connect Gmail accounts to NocoBase, deploy NocoBase on a server that supports access to Google services, as the backend will call the Google API.

### Register an Account

1. Open [Google Cloud Console](https://console.cloud.google.com/welcome).  
2. Agree to the terms upon first access.  

![](https://static-docs.nocobase.com/mail-1733818617807.png)  

### Create an App

1. Click "Select a project" at the top

![](https://static-docs.nocobase.com/mail-1733818618126.png)  

2. Click "NEW PROJECT" in the modal  

![](https://static-docs.nocobase.com/mail-1733818618329.png)  

3. Fill in project details

![](https://static-docs.nocobase.com/mail-1733818618510.png)  

4. Select the created project

![](https://static-docs.nocobase.com/mail-1733818618828.png)  

![](https://static-docs.nocobase.com/mail-1733818619044.png)

### Enable Gmail API

1. Click "APIs & Services" button

![](https://static-docs.nocobase.com/mail-1733818619230.png)  

2. Enter the "APIs & Services" panel

![](https://static-docs.nocobase.com/mail-1733818619419.png)  

3. Search for "mail" 

![](https://static-docs.nocobase.com/mail-1733818619810.png)  

![](https://static-docs.nocobase.com/mail-1733818620020.png)  

4. Click "ENABLE" to activate Gmail API

![](https://static-docs.nocobase.com/mail-1733818620589.png)  

![](https://static-docs.nocobase.com/mail-1733818620885.png)  

### Configure OAuth Consent Screen

1. Click "OAuth consent screen" on the left

![](https://static-docs.nocobase.com/mail-1733818621104.png)  

2. Choose "External"
  
![](https://static-docs.nocobase.com/mail-1733818621322.png)  

3. Fill in project information (displayed on the authorization page) and save

![](https://static-docs.nocobase.com/mail-1733818621538.png)  

4. Enter Developer Contact Information and click "Continue"  

![](https://static-docs.nocobase.com/mail-1733818621749.png)  

5. Click "Continue"  

![](https://static-docs.nocobase.com/mail-1733818622121.png)  

6. Add test users for pre-release testing 

![](https://static-docs.nocobase.com/mail-1733818622332.png)  

![](https://static-docs.nocobase.com/mail-1733818622537.png)  

7. Click "Continue" 
 
![](https://static-docs.nocobase.com/mail-1733818622753.png)  

8. Review summary information and return to the control panel
 
![](https://static-docs.nocobase.com/mail-1733818622984.png)  

### Create Credentials

1. Click "Credentials" on the left
  
![](https://static-docs.nocobase.com/mail-1733818623168.png)  

2. Click "CREATE CREDENTIALS" and select "OAuth client ID"  

![](https://static-docs.nocobase.com/mail-1733818623386.png)  

3. Select "Web application"  

![](https://static-docs.nocobase.com/mail-1733818623758.png)  

4. Enter application details

![](https://static-docs.nocobase.com/mail-1733818623992.png)  

5. Enter the domain of the final deployment (e.g., the NocoBase test address)

![](https://static-docs.nocobase.com/mail-1733818624188.png)  

6. Add the authorized callback URI: `domain + "/admin/settings/mail/oauth2"`. Example: `https://pr-1-mail.test.nocobase.com/admin/settings/mail/oauth2`

![](https://static-docs.nocobase.com/mail-1733818624449.png)  

7. Click "Create" to view the OAuth details

![](https://static-docs.nocobase.com/mail-1733818624701.png)  

8. Copy the Client ID and Client Secret to the Email Configuration page

![](https://static-docs.nocobase.com/mail-1733818624923.png)  

9. Click "Save" to complete the configuration  

### Publish the App

After completing the setup and testing, proceed with app publishing by verifying user permissions and submitting the app for verification.

1. Click the "OAuth consent screen" menu

![](https://static-docs.nocobase.com/mail-1733818625124.png)

2. Click the "EDIT APP" button, then click the "SAVE AND CONTINUE" button at the bottom

![](https://static-docs.nocobase.com/mail-1735633686380.png)

![](https://static-docs.nocobase.com/mail-1735633686750.png)

3. Click the "ADD OR REMOVE SCOPES" button to select user permissions

![](https://static-docs.nocobase.com/mail-1735633687054.png)

4. Enter "Gmail API" in the search field, then check the "Gmail API" (ensure the Scope value is "https://mail.google.com/")

![](https://static-docs.nocobase.com/mail-1735633687283.png)

5. Click the "UPDATE" button at the bottom to save

![](https://static-docs.nocobase.com/mail-1735633687536.png)

6. Click the "SAVE AND CONTINUE" button at the bottom of each page, then click the "BACK TO DASHBOARD" button to return to the control panel page

![](https://static-docs.nocobase.com/mail-1735633687744.png)

![](https://static-docs.nocobase.com/mail-1735633687912.png)

![](https://static-docs.nocobase.com/mail-1735633688075.png)

7. After clicking the "PUBLISH APP" button, a confirmation page will appear listing the content required for publishing. Then click the "CONFIRM" button

![](https://static-docs.nocobase.com/mail-1735633688257.png)

8. Back on the console page, you will see that the publication status is "In production"

![](https://static-docs.nocobase.com/mail-1735633688425.png)

9. Click the "PREPARE FOR VERIFICATION" button, fill in the required information, and click the "SAVE AND CONTINUE" button (the data in the image is for reference only)

![](https://static-docs.nocobase.com/mail-1735633688634.png)

![](https://static-docs.nocobase.com/mail-1735633688827.png)

10. Continue filling in the required information (the data in the image is for reference only)

![](https://static-docs.nocobase.com/mail-1735633688993.png)

11. Click the "SAVE AND CONTINUE" button

![](https://static-docs.nocobase.com/mail-1735633689159.png)

12. Click the "SUBMIT FOR VERIFICATION" button to submit for verification

![](https://static-docs.nocobase.com/mail-1735633689318.png)

13. Wait for approval results

![](https://static-docs.nocobase.com/mail-1735633689494.png)

14. If approval has not been granted, users can click the unsafe link to authorize login

![](https://static-docs.nocobase.com/mail-1735633689645.png)

## Microsoft Configuration

### Register Account

1. Go to https://azure.microsoft.com/en-us/pricing/purchase-options/azure-account

2. Log in to your Microsoft account

![](https://static-docs.nocobase.com/mail-1733818625779.png)

### Create Tenant

1. Go to https://azure.microsoft.com/zh-cn/pricing/purchase-options/azure-account?icid=azurefreeaccount and log in to your account

2. Fill in basic information and get a verification code

![](https://static-docs.nocobase.com/mail-1733818625984.png)

3. Fill in additional information and continue

![](https://static-docs.nocobase.com/mail-1733818626352.png)

4. Fill in credit card information (you can skip this step for now)

![](https://static-docs.nocobase.com/mail-1733818626622.png)

### Get Client ID

1. Click the top menu and select "Microsoft Entra ID"

![](https://static-docs.nocobase.com/mail-1733818626871.png)

2. Select "App registrations" on the left

![](https://static-docs.nocobase.com/mail-1733818627097.png)

3. Click "New registration" at the top

![](https://static-docs.nocobase.com/mail-1733818627309.png)

4. Fill in the information and submit

You can choose any name, refer to the options shown in the image for account types, and leave the Redirect URI blank for now

![](https://static-docs.nocobase.com/mail-1733818627555.png)

5. Get the Client ID

![](https://static-docs.nocobase.com/mail-1733818627797.png)

### API Authorization

1. Open the "API permissions" menu on the right

![](https://static-docs.nocobase.com/mail-1733818628178.png)

2. Click the "Add a permission" button

![](https://static-docs.nocobase.com/mail-1733818628448.png)

3. Click "Microsoft Graph"

![](https://static-docs.nocobase.com/mail-1733818628725.png)

![](https://static-docs.nocobase.com/mail-1733818628927.png)

4. Search and add the following permissions, the final result should look like this

    1. `"email"`
    2. `"offline_access"`
    3. `"IMAP.AccessAsUser.All"`
    4. `"SMTP.Send"`
    5. `"offline_access"`
    6. `"User.Read"` (By default)

![](https://static-docs.nocobase.com/mail-1733818629130.png)

### Get Secret

1. Click "Certificates & secrets" on the left

![](https://static-docs.nocobase.com/mail-1733818629369.png)

2. Click the "New client secret" button

![](https://static-docs.nocobase.com/mail-1733818629554.png)

3. Fill in the description and expiration time, then click add

![](https://static-docs.nocobase.com/mail-1733818630292.png)

4. Get the Secret ID

![](https://static-docs.nocobase.com/mail-1733818630535.png)

5. Copy both the Client ID and Client Secret and fill them in the mail configuration page

![](https://static-docs.nocobase.com/mail-1733818630710.png)

## FAQ

Q: After Microsoft account authorization login, emails cannot be received normally.

A: Currently, only Outlook and Gmail accounts are supported for authorized login. Microsoft and Google accounts are not supported. For more information, please refer to: [answers.microsoft.com](https://answers.microsoft.com/zh-hans/outlook_com/forum/all/%E7%8E%B0%E6%9C%89%E5%BE%AE%E8%BD%AF%E8%B4%A6/dba12dda-a7c7-4346-8263-53f4a6d9dc68)

**Tip**: If you are unsure whether you have a "true" Outlook.com or Gmail account, try accessing Outlook.com or Gmail.com through the web to see if you can log in and send emails. If not, it means you may not have the corresponding email service, and you need to either sign up for it or use another email service.
